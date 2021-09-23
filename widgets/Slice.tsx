/**
 * The slice widget is a 3D analysis tool that can be used to reveal occluded content in a {@link
 * module:esri/views/SceneView}. The slice widget can be applied to any layer type, making it possible
 * to see inside buildings or to explore geological surfaces.
 *
 * [![slice-widget](../assets/img/apiref/widgets/slice.gif)](../sample-code/building-scene-layer-slice/index.html)
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
 *
 * The slicing shape is always a {@link module:esri/widgets/Slice/SlicePlane plane}.
 * By default, the plane is either horizontal or vertical. To allow a tilt angle for the
 * plane, set {@link module:esri/widgets/Slice/SliceViewModel#tiltEnabled SliceViewModel.tiltEnabled} to `true`.
 * The slice hides any content in front of the surface. The handles on the sides
 * of the plane can be used to adjust the size, heading, tilt and position of the slice plane. The {@link module:esri/widgets/Slice/SlicePlane} can be set or retrieved using
 * {@link module:esri/widgets/Slice/SliceViewModel#shape SliceViewModel.shape}.
 *
 * Once a slice is created, layers can be excluded from the slice. For example, to look at
 * interior elements inside a {@link module:esri/layers/BuildingSceneLayer}, the windows or
 * furniture layers can be excluded from the slice widget.
 *
 * [![slice-widget-exclude](../assets/img/apiref/widgets/slice-exclude.png)](../sample-code/building-scene-layer-slice/index.html)
 *
 * Slice only works with {@link module:esri/views/SceneView}. The visualizations created using slices are temporary and
 * cannot be persisted in a {@link module:esri/WebScene} or in {@link module:esri/webscene/Slide slides}.
 *
 * @module esri/widgets/Slice
 * @since 4.10
 *
 * @see [Slice.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Slice.tsx)
 * @see [Slice.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Slice.scss)
 * @see [Sample - Slice widget](../sample-code/building-scene-layer-slice/index.html)
 * @see module:esri/widgets/Slice/SliceViewModel
 */

// esri.core
import Collection from "esri/core/Collection";
import { ignoreAbortErrors } from "esri/core/promiseUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import Layer from "esri/layers/Layer";

// esri.layers.buildingSublayers
import BuildingComponentSublayer from "esri/layers/buildingSublayers/BuildingComponentSublayer";

// esri.views
import { ISceneView } from "esri/views/ISceneView";

// esri.views.3d.layers
import "../views/3d/layers/SliceLayerView3D";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.Slice
import SliceViewModel from "esri/widgets/Slice/SliceViewModel";

// esri.widgets.Slice.t9n
import SliceMessages from "esri/widgets/Slice/t9n/Slice";

// esri.widgets.support
import { Heading, HeadingLevel } from "esri/widgets/support/Heading";
import { VNode } from "esri/widgets/support/interfaces";
import { messageBundle, tsx } from "esri/widgets/support/widget";

const BASE = "esri-slice";

const CSS = {
  // common
  buttonDisabled: "esri-button--disabled",
  layerIncludeButton: "esri-slice__cross",
  widgetIcon: "esri-icon-slice",

  // base
  base: `${BASE} esri-widget esri-widget--panel`,

  // container
  layerList: `${BASE}__settings`,
  layerListHeading: "esri-slice__settings-title",
  layerItem: `${BASE}__layer-item`,
  layerItemTitle: `${BASE}__layer-item__title`,
  container: `${BASE}__container`,
  actionSection: "esri-slice__actions",

  // hint
  hint: `${BASE}__hint`,
  hintText: `${BASE}__hint-text`,
  panelError: `${BASE}__panel--error`,

  // actions
  newSliceButton: `${BASE}__clear-button esri-button esri-button--primary`,
  excludeButton: `${BASE}__exclude-button esri-button esri-button--secondary`,
  cancelButton: `${BASE}__cancel-button esri-button esri-button--secondary`
};

@subclass("esri.widgets.Slice")
class Slice extends Widget {
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
  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override loadDependencies(): Promise<any> {
    return Promise.all([
      import("@esri/calcite-components/dist/custom-elements/bundles/button"),
      import("@esri/calcite-components/dist/custom-elements/bundles/icon")
    ]);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * The widget's message bundle
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @messageBundle("esri/widgets/Slice/t9n/Slice")
  messages: SliceMessages = null;

  /**
   * Indicates the heading level to use for the "Excluded layers" heading. By default, this is rendered
   * as a level 3 heading (e.g. `<h3>Excluded layers</h3>`). Depending on the widget's placement
   * in your app, you may need to adjust this heading for proper semantics. This is
   * important for meeting accessibility standards.
   *
   * @name headingLevel
   * @instance
   * @since 4.20
   * @type {number}
   * @default 3
   * @see [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
   *
   * @example
   * slice.headingLevel = 2;
   */
  @property()
  headingLevel: HeadingLevel = 3;

  /**
   * The widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property()
  override iconClass = CSS.widgetIcon;

  /**
   * The widget's default label. This label displays when it is
   * used within another widget, such as the {@link module:esri/widgets/Expand}
   * or {@link module:esri/widgets/LayerList} widgets.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  override label: string = undefined;

  /**
   * A reference to the {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: ISceneView = null;

  /**
   * Indicates whether the widget is visible.
   *
   * @name visible
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.visible")
  override visible: boolean;

  /**
   * Indicates whether the widget is active.
   *
   * @name active
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.active")
  active: boolean;

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
  override viewModel = new SliceViewModel();

  @aliasOf("viewModel.excludedLayers")
  excludedLayers: Collection<Layer | BuildingComponentSublayer>;

  @aliasOf("viewModel.excludeGroundSurface")
  excludeGroundSurface: boolean;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  override render(): VNode {
    const isSupported = this.viewModel.supported;
    const isActive = this.viewModel.active;
    const isDisabled = this.viewModel.state === "disabled";
    const isReady = this.viewModel.state === "ready";
    const isSlicing = this.viewModel.state === "slicing" || this.viewModel.state === "sliced";
    const isExcludeMode = this.viewModel.layersMode === "exclude";

    const { messages } = this;
    const disabledClass = isDisabled && CSS.buttonDisabled;

    const newSliceNode =
      (!isActive || isSlicing) && !isExcludeMode ? (
        <button
          disabled={isDisabled}
          class={this.classes(CSS.newSliceButton, disabledClass)}
          bind={this}
          onclick={this._onNewSliceClick}
          key="esri-slice__clear"
          type="button"
        >
          {messages.newSlice}
        </button>
      ) : null;

    const excludeLayerNode =
      isSlicing && !isExcludeMode ? (
        <button
          class={this.classes(CSS.excludeButton, disabledClass)}
          bind={this}
          onclick={() => {
            this.viewModel.enterExcludeLayerMode();
          }}
          key="esri-slice__exclude"
          type="button"
        >
          {messages.excludeLayer}
        </button>
      ) : null;

    const cancelExcludeNode =
      isActive && isExcludeMode ? (
        <button
          class={this.classes(CSS.cancelButton, disabledClass)}
          bind={this}
          onclick={() => {
            this.viewModel.exitExcludeLayerMode();
          }}
          key="esri-slice__cancel-exclude"
          type="button"
        >
          {messages.cancel}
        </button>
      ) : null;

    let hintText = null;
    if (isActive) {
      if (isExcludeMode) {
        hintText = messages.excludeHint;
      } else if (isReady) {
        hintText = messages.hint;
      }
    }

    const hintNode = hintText ? (
      <div class={CSS.hint} key="esri-slice__hint">
        <p class={CSS.hintText}>{hintText}</p>
      </div>
    ) : null;

    const layerListItemNodes: VNode[] = this.excludedLayers
      ? this.excludedLayers.toArray().map((l) =>
          this._renderLayerItem({
            uid: l.uid,
            title: l.title,
            onClick: () => {
              this.excludedLayers.remove(l);
              return false;
            }
          })
        )
      : [];

    if (this.excludeGroundSurface) {
      layerListItemNodes.push(
        this._renderLayerItem({
          uid: "ground",
          title: messages.ground,
          onClick: () => {
            this.excludeGroundSurface = false;
            return false;
          }
        })
      );
    }

    const layerListNode =
      !isExcludeMode && isSlicing && layerListItemNodes.length > 0 ? (
        <div class={CSS.layerList} key="esri-slice__settings">
          <Heading class={CSS.layerListHeading} level={this.headingLevel}>
            {messages.excludedLayers}
          </Heading>
          <ul>{layerListItemNodes}</ul>
        </div>
      ) : null;

    const unsupportedNode = (
      <div class={CSS.panelError} key="esri-slice__unsupported">
        <p>{messages.unsupported}</p>
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

  private _renderLayerItem(info: { uid: string; title: string; onClick: () => void }): VNode {
    return (
      <li class={CSS.layerItem} key={info.uid}>
        <calcite-button
          appearance="transparent"
          class={CSS.layerIncludeButton}
          icon-start="x"
          scale="s"
          title={this.messages.includeLayer}
          bind={this}
          onclick={info.onClick}
        />
        <div class={CSS.layerItemTitle}>{info.title}</div>
      </li>
    );
  }

  private _onNewSliceClick(): void {
    ignoreAbortErrors(this.viewModel.removeSliceAndStart());
  }
}

export default Slice;
