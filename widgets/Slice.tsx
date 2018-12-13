/**
 * The slice widget is a 3D analysis tool that can be used to reveal occluded content in a {@link
 * module:esri/views/SceneView}. The slice widget can be applied to any layer type, making it possible
 * to see inside buildings or to explore geological surfaces.
 *
 * [![slice-widget](../../assets/img/apiref/widgets/slice.gif)](../sample-code/building-scene-layer-slice/index.html)
 *
 * To use the widget, instantiate it and add it to the view:
 * ```js
 * const slice = new Slice({
 *   view: view
 * });
 *
 * // Add widget to the bottom left corner of the view
 * view.ui.add(slice, {
 *   position: "bottom-left"
 * });
 * ```
 * The slicing shape is always a plane. When you click a surface or object in your scene,
 * you create a slice with either a horizontal or vertical plane. The slice hides any
 * content in front of the surface. The handles on the sides
 * of the plane can be used to adjust the size, rotation and position of the slice plane.
 *
 * Once a slice is created, layers can be excluded from the slice. For example, to look at
 * interior elements inside a {@link module:esri/layers/BuildingSceneLayer}, the windows or
 * furniture layers can be excluded from the slice widget.
 *
 * [![slice-widget-exclude](../../assets/img/apiref/widgets/slice-exclude.png)](../sample-code/building-scene-layer-slice/index.html)
 *
 * The visualizations created using slices are temporary and cannot be persisted in a {@link
 * module:esri/WebScene} or in {@link module:esri/webscene/Slide slides}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * Slice only works with {@link module:esri/views/SceneView}.
 * :::
 *
 * @module esri/widgets/Slice
 * @since 4.10
 *
 * @see [Slice.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Slice.tsx)
 * @see [Slice.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Slice.scss)
 * @see [Sample - Slice widget](../sample-code/building-scene-layer-slice/index.html)
 * @see module:esri/widgets/Slice/SliceViewModel
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Slice/nls/Slice";

// esri.core
import Collection = require("esri/core/Collection");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import Layer = require("esri/layers/Layer");

// esri.layers.buildingSublayers
import BuildingComponentSublayer = require("esri/layers/buildingSublayers/BuildingComponentSublayer");

// esri.views
import SceneView = require("esri/views/SceneView");

// esri.views.3d.interactive.analysisTools.slice
import SliceTool = require("esri/views/3d/interactive/analysisTools/slice/SliceTool");

// esri.views.3d.support.geometryUtils
import boundedPlane = require("esri/views/3d/support/geometryUtils/boundedPlane");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Slice
import SliceViewModel = require("esri/widgets/Slice/SliceViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  // common
  button: "esri-button esri-button--secondary",
  buttonDisabled: "esri-button--disabled",
  layerIncludeButton: "esri-icon-close esri-slice__cross",
  // base
  base: "esri-slice esri-widget esri-widget--panel",
  // container
  layerList: "esri-slice__settings",
  layerListHeading: "esri-slice__settings-title esri-widget__heading",
  layerItem: "esri-slice__layer-item",
  container: "esri-slice__container",
  actionSection: "esri-slice__actions",
  // hint
  hint: "esri-slice__hint",
  hintText: "esri-slice__hint-text",
  panelError: "esri-slice__panel--error",
  // clear
  excludeButton: "esri-slice__exclude-button",
  cancelButton: "esri-slice__cancel-button",
  clearButton: "esri-slice__clear-button"
};

@subclass("esri.widgets.Slice")
class Slice extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Slice
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * const slice = new Slice({
   *   view: view
   * });
   */
  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------
  /**
   * A reference to the {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: SceneView = null;

  //----------------------------------
  //  visible
  //----------------------------------
  /**
   * Indicates whether the widget is visible.
   *
   * @name visible
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.visible")
  @renderable()
  visible: boolean;

  //----------------------------------
  //  active
  //----------------------------------
  /**
   * Indicates whether the widget is active.
   *
   * @name active
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.active")
  @renderable()
  active: boolean;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains the properties
   * and methods that control this widget's behavior.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Slice/SliceViewModel}
   * @autocast
   */
  @property({
    type: SliceViewModel
  })
  viewModel: SliceViewModel = new SliceViewModel();

  @aliasOf("viewModel.plane")
  @renderable()
  plane: boundedPlane.BoundedPlane;

  @aliasOf("viewModel.layersMode")
  @renderable()
  layersMode: SliceTool.LayersMode;

  @aliasOf("viewModel.excludedLayers")
  @renderable()
  excludedLayers: Collection<Layer | BuildingComponentSublayer>;

  @aliasOf("viewModel.excludeGroundSurface")
  @renderable()
  excludeGroundSurface: boolean;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const isSupported = this.viewModel.isSupported;
    const isActive = this.viewModel.active;
    const isDisabled = this.viewModel.state === "disabled";
    const isReady = this.viewModel.state === "ready";
    const isSlicing = this.viewModel.state === "slicing";
    const isExcludeMode = this.layersMode === "exclude";

    const buttonClasses = [CSS.button, isDisabled && CSS.buttonDisabled];

    const newSliceNode =
      (!isActive || isSlicing) && !isExcludeMode ? (
        <button
          disabled={isDisabled}
          class={this.classes(CSS.clearButton, ...buttonClasses)}
          bind={this}
          onclick={this._newSlice}
          key="esri-slice__clear"
        >
          {i18n.newSlice}
        </button>
      ) : null;

    const excludeLayerNode =
      isSlicing && !isExcludeMode ? (
        <button
          class={this.classes(CSS.excludeButton, ...buttonClasses)}
          bind={this}
          onclick={() => {
            this.viewModel.enterExcludeLayerMode();
          }}
          key="esri-slice__exclude"
        >
          {i18n.excludeLayer}
        </button>
      ) : null;

    const cancelExcludeNode =
      isActive && isExcludeMode ? (
        <button
          class={this.classes(CSS.cancelButton, ...buttonClasses)}
          bind={this}
          onclick={() => {
            this.viewModel.exitExcludeLayerMode();
          }}
          key="esri-slice__cancel-exclude"
        >
          {i18n.cancel}
        </button>
      ) : null;

    let hintText = null;
    if (isActive) {
      if (isExcludeMode) {
        hintText = i18n.excludeHint;
      } else if (isReady) {
        hintText = i18n.hint;
      }
    }

    const hintNode = hintText ? (
      <div class={CSS.hint} key="esri-slice__hint">
        <p class={CSS.hintText}>{hintText}</p>
      </div>
    ) : null;

    const layerListItemNodes: VNode[] = this.excludedLayers
      ? this.excludedLayers.toArray().map((l) => (
          <li class={CSS.layerItem} key={l.uid}>
            <a
              href=""
              onclick={() => {
                this.excludedLayers.remove(l);
                return false;
              }}
              class={CSS.layerIncludeButton}
              title={i18n.includeLayer}
            />
            {l.title}
          </li>
        ))
      : [];

    if (this.excludeGroundSurface) {
      layerListItemNodes.push(
        <li class={CSS.layerItem} key="ground">
          <a
            href=""
            onclick={() => {
              this.excludeGroundSurface = false;
              return false;
            }}
            class={CSS.layerIncludeButton}
            title={i18n.includeLayer}
          />
          {i18n.ground}
        </li>
      );
    }

    const layerListNode =
      !isExcludeMode && isSlicing && layerListItemNodes.length > 0 ? (
        <div class={CSS.layerList} key="esri-slice__settings">
          <h3 class={CSS.layerListHeading}>{i18n.excludedLayers}</h3>
          <ul>{layerListItemNodes}</ul>
        </div>
      ) : null;

    const unsupportedNode = (
      <div class={CSS.panelError} key="esri-slice__unsupported">
        <p>{i18n.unsupported}</p>
      </div>
    );

    const actionNode = (
      <div class={CSS.actionSection}>
        {excludeLayerNode}
        {cancelExcludeNode}
        {newSliceNode}
      </div>
    );

    const containerNode = this.visible ? (
      <div class={CSS.container}>
        {isSupported ? [hintNode, layerListNode, actionNode] : unsupportedNode}
      </div>
    ) : null;

    return (
      <div class={CSS.base} role="presentation">
        {containerNode}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _newSlice(): void {
    this.viewModel.newSlice();
  }
}

export = Slice;
