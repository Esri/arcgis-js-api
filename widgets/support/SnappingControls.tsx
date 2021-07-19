// @esri.calcite-components.dist.custom-elements.bundles
import "@esri/calcite-components/dist/custom-elements/bundles/action";
import "@esri/calcite-components/dist/custom-elements/bundles/block";
import "@esri/calcite-components/dist/custom-elements/bundles/icon";
import "@esri/calcite-components/dist/custom-elements/bundles/label";
import "@esri/calcite-components/dist/custom-elements/bundles/panel";
import "@esri/calcite-components/dist/custom-elements/bundles/pick-list";
import "@esri/calcite-components/dist/custom-elements/bundles/switch";

// esri.core
import Collection from "esri/../core/Collection";
import { destroyMaybe, isNone, Maybe } from "esri/../core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, subclass, property } from "esri/../core/accessorSupport/decorators";

// esri.t9n
import CommonMessages from "esri/../t9n/common";

// esri.views
import IMapView from "esri/../views/IMapView";
import { ISceneView } from "esri/../views/ISceneView";

// esri.views.interactive.snapping
import SnappingOptions from "esri/../views/interactive/snapping/SnappingOptions";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.support
import { VNode } from "esri/widgets/interfaces";
import { messageBundle, tsx, WidgetProperties } from "esri/widgets/widget";

// esri.widgets.support.SnappingControls
import SnappingControlsViewModel from "esri/widgets/SnappingControls/SnappingControlsViewModel";
import { SnappingListItem } from "esri/widgets/SnappingControls/SnappingListItem";

// esri.widgets.support.SnappingMenu.t9n
import SnappingMenuMessages from "esri/widgets/SnappingMenu/t9n/SnappingMenu";

interface VisibleElements {
  header?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  header: true
};

type RequiredConstructProperties = {
  snappingOptions: SnappingOptions;
  view: IMapView | ISceneView;
};

type WidgetConstructProperties = WidgetProperties<SnappingControlsViewModel> & {
  visibleElements?: VisibleElements;
};

type ConstructProperties = RequiredConstructProperties & WidgetConstructProperties;

const CSS = {
  base: "esri-snapping-controls",
  container: "esri-snapping-controls__container",
  panel: "esri-snapping-controls__panel",
  item: "esri-snapping-controls__item",
  toggleBlock: "esri-snapping-controls__toggle-block",

  // common
  disabled: "esri-disabled",
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-vertex-gps"
};

@subclass("esri.widgets.support.SnappingControls")
class SnappingControls extends Widget<WidgetConstructProperties> implements ConstructProperties {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  constructor(properties: ConstructProperties, parentNode?: string | Element) {
    super(
      (() => {
        // avoid setting view, viewModel, and snappingOptions through Accessor
        const { view, viewModel, snappingOptions, ...widgetProperties } = properties;
        return widgetProperties;
      })(),
      parentNode
    );

    if (properties?.viewModel) {
      this.viewModel = properties.viewModel;
    } else {
      this._defaultViewModel = new SnappingControlsViewModel({
        snappingOptions: properties.snappingOptions,
        view: properties.view
      });
      this.viewModel = this._defaultViewModel;
    }
  }

  destroy(): void {
    this._defaultViewModel = destroyMaybe(this._defaultViewModel);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  label
  //----------------------------------

  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  messages
  //----------------------------------

  @property()
  @messageBundle("esri/widgets/support/SnappingMenu/t9n/SnappingMenu")
  messages: SnappingMenuMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

  //----------------------------------
  //  snappingOptions
  //----------------------------------

  @aliasOf("viewModel.snappingOptions")
  snappingOptions: SnappingOptions = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * The view from which the widget will operate.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: IMapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/support/SnappingControls/SnappingControlsViewModel}
   */
  @property()
  // @ts-expect-error
  set viewModel(value: SnappingControlsViewModel) {
    if (value === this._get("viewModel")) {
      // do nothing on self-assignment
      return;
    }

    if (isNone(this._defaultViewModel) || this._defaultViewModel !== value) {
      this._defaultViewModel = destroyMaybe(this._defaultViewModel);
    }

    this._set("viewModel", value);
  }

  //----------------------------------
  //  visibleElements
  //----------------------------------
  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const {
      label,
      messagesCommon: { close },
      visibleElements: { header: headerVisible }
    } = this;

    const snappingToggle = (
      <calcite-block class={CSS.toggleBlock} open>
        {this.renderSnappingToggle()}
      </calcite-block>
    );

    const content = headerVisible ? (
      <div class={CSS.container}>
        <calcite-panel heading={label} class={CSS.panel}>
          <calcite-action text={close} slot="header-actions-end" icon="x" appearance="solid" />
          {snappingToggle}
          {this.renderLayerList()}
        </calcite-panel>
      </div>
    ) : (
      <div class={CSS.container}>
        {snappingToggle}
        {this.renderLayerList()}
      </div>
    );

    return (
      <div aria-label={label} class={this.classes(CSS.base, CSS.esriWidget)}>
        {content}
      </div>
    );
  }

  protected renderSnappingToggle(): VNode {
    const {
      messages: { enableSnapping },
      viewModel: {
        snappingOptions: { featureEnabled, enabledToggled }
      }
    } = this;

    return (
      <calcite-label layout="inline-space-between">
        {enableSnapping}
        <calcite-switch
          switched={featureEnabled}
          disabled={enabledToggled}
          bind={this}
          onCalciteSwitchChange={this._enableSnappingSwitchChange}
        />
      </calcite-label>
    );
  }

  protected renderLayerList(): VNode {
    const {
      messages: { snappingLayers, searchLayers }
    } = this;

    return (
      <calcite-block heading={snappingLayers} open collapsible>
        <calcite-pick-list
          multiple
          bind={this}
          onCalciteListChange={this._layerListChange}
          filterEnabled={this.viewModel.layerListViewModel.operationalItems.length >= 10}
          filter-placeholder={searchLayers}
        >
          {this.renderLayerListItemCollection(this.viewModel.layerListViewModel.operationalItems)}
        </calcite-pick-list>
      </calcite-block>
    );
  }

  protected renderLayerListItemCollection(items: Collection<SnappingListItem>): VNode[] {
    return items
      .map((item) =>
        item.children.length > 0
          ? this.renderLayerListItemGroup(item)
          : this.renderLayerListItem(item)
      )
      .toArray();
  }

  protected renderLayerListItem(listItem: SnappingListItem): VNode {
    const {
      messages: { untitledLayer }
    } = this;

    const label = listItem.title || untitledLayer;
    const hasChildren = listItem.children?.length > 0;
    const selected = listItem.enabled;

    return (
      <calcite-pick-list-item
        slot={hasChildren ? "parent-item" : null}
        key={`${this.id}-pick-list-item-${listItem.uid}`}
        label={label}
        value={listItem.layer.id}
        selected={selected}
      />
    );
  }

  protected renderLayerListItemGroup(listItem: SnappingListItem): VNode {
    const title = listItem.title || this.messages.untitledLayer;

    return (
      <calcite-pick-list-group group-title={title}>
        {[...this.renderLayerListItemCollection(listItem.children)]}
      </calcite-pick-list-group>
    );
  }

  private _enableSnappingSwitchChange(event: CustomEvent<any>): void {
    this.snappingOptions.featureEnabled = event.detail.switched;
  }

  private _layerListChange(event: CustomEvent<any>): void {
    const selectedListItems: Map<string, HTMLCalcitePickListItemElement> = event.detail;
    this.viewModel.updateEnabledFeatureSources([...selectedListItems.keys()]);
  }

  private _defaultViewModel: Maybe<SnappingControlsViewModel> = null;
}

export default SnappingControls;
