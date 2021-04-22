// esri
import Graphic from "esri/../Graphic";

// esri.core
import { init } from "esri/../core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.widgets
import Attachments from "esri/Attachments";
import Widget from "esri/Widget";

// esri.widgets.Attachments
import { AttachmentsDisplay } from "esri/Attachments/interfaces";

// esri.widgets.Feature.FeatureAttachments
import FeatureAttachmentsViewModel from "esri/widgets/FeatureAttachments/FeatureAttachmentsViewModel";

// esri.widgets.Feature.support
import FeatureElementInfo from "esri/widgets/support/FeatureElementInfo";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { tsx } from "esri/support/widget";

const CSS = {
  base: "esri-feature-attachments"
};

@subclass("esri.widgets.Feature.FeatureAttachments")
class FeatureAttachments extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this._featureElementInfo = new FeatureElementInfo();

    init(this, ["viewModel.description", "viewModel.title"], () => this._setupFeatureElementInfo());
    init(
      this,
      "viewModel.graphic",
      (graphic: Graphic) => (this.attachmentsWidget.graphic = graphic)
    );
  }

  destroy(): void {
    this.attachmentsWidget.destroy();
    this._featureElementInfo.destroy();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _featureElementInfo: FeatureElementInfo = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  // attachmentsWidget
  //----------------------------------

  @property({
    readOnly: true
  })
  attachmentsWidget = new Attachments();

  //----------------------------------
  // description
  //----------------------------------

  @aliasOf("viewModel.description")
  description: string = null;

  //----------------------------------
  // displayType
  //----------------------------------

  @aliasOf("attachmentsWidget.displayType")
  displayType: AttachmentsDisplay = null;

  //----------------------------------
  // graphic
  //----------------------------------

  @aliasOf("viewModel.graphic")
  graphic: Graphic = null;

  //----------------------------------
  // title
  //----------------------------------

  @aliasOf("viewModel.title")
  title: string = null;

  //----------------------------------
  // viewModel
  //----------------------------------

  @property({
    type: FeatureAttachmentsViewModel
  })
  viewModel = new FeatureAttachmentsViewModel();

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { attachmentsWidget } = this;

    return (
      <div class={CSS.base}>
        {this._featureElementInfo?.render()}
        {attachmentsWidget?.render()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _setupFeatureElementInfo(): void {
    const { description, title } = this;

    this._featureElementInfo.set({ description, title });
  }
}

export default FeatureAttachments;
