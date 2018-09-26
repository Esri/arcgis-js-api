/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// esri.core.accessorSupport
import { aliasOf, subclass, declared, property } from "esri/core/accessorSupport/decorators";

// esri.views
import SceneView = require("esri/views/SceneView");

// esri.views.3d.support.geometryUtils
import plane = require("esri/views/3d/support/geometryUtils/plane");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.slice
import SliceViewModel = require("esri/widgets/slice/SliceViewModel");

// esri.widgets.support
import { tsx, renderable } from "esri/widgets/support/widget";
const CSS = {
  // common
  button: "esri-button esri-button--secondary",
  // base
  base: "esri-slice esri-widget esri-widget--panel",
  // container
  container: "esri-slice__container",
  // hint
  hint: "esri-slice__hint"
};

@subclass("esri.widgets.Slice")
class Slice extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  @aliasOf("viewModel.view")
  view: SceneView = null;

  @property({
    type: SliceViewModel
  })
  viewModel: SliceViewModel = new SliceViewModel();

  @aliasOf("viewModel.plane")
  @renderable()
  plane: plane.Plane = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const clearPlaneButton = this.plane ? (
      <button
        class={CSS.button}
        bind={this}
        onclick={() => {
          this.plane = null;
        }}
      >
        Clear
      </button>
    ) : null;

    const hintNode = !this.plane ? (
      <section key="esri-slice__hint" class={CSS.hint}>
        <p>Start to slice by clicking and dragging on a surface in the scene</p>
      </section>
    ) : null;

    const containerNode = (
      <div class={CSS.container}>
        {hintNode}
        {clearPlaneButton}
      </div>
    );

    return (
      <div key="" class={CSS.base} role="presentation">
        {containerNode}
      </div>
    );
  }
}

export = Slice;
