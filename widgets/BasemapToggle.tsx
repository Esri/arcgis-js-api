/**
 * The BasemapToggle provides a widget which allows an end-user to switch between
 * two basemaps. The toggled basemap is set inside the [view's](#view)
 * {@link module:esri/views/View#map map} object.
 *
 * ![basemap-toggle](../assets/img/apiref/widgets/basemap-toggle.png)
 *
 * @module esri/widgets/BasemapToggle
 * @since 4.0
 *
 * @see [BasemapToggle.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/BasemapToggle.tsx)
 * @see [BasemapToggle.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_BasemapToggle.scss)
 * @see [Sample - Intro to widgets using BasemapToggle](../sample-code/intro-widgets/index.html)
 * @see module:esri/widgets/BasemapToggle/BasemapToggleViewModel
 *
 * @example
 * // Create a map with an initial basemap
 * var map = new Map({
 *   basemap: "streets-vector",  // The initial basemap to toggle from
 *   ground: "world-elevation"
 * });
 *
 * // Reference the map in the view instance
 * var view = new SceneView({
 *   container: "viewDiv",
 *   map: map
 * });
 *
 * var basemapToggle = new BasemapToggle({
 *   view: view,  // The view that provides access to the map's "streets-vector" basemap
 *   nextBasemap: "hybrid"  // Allows for toggling to the "hybrid" basemap
 * });
 */

// esri
import Basemap from "esri/Basemap";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import { ISceneView } from "esri/views/ISceneView";
import MapView from "esri/views/MapView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.BasemapToggle
import BasemapToggleViewModel from "esri/widgets/BasemapToggle/BasemapToggleViewModel";

// esri.widgets.BasemapToggle.t9n
import BasemapToggleMessages from "esri/widgets/BasemapToggle/t9n/BasemapToggle";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx, vmEvent } from "esri/widgets/support/widget";

const CSS: any = {
  base: "esri-basemap-toggle esri-widget",
  secondaryBasemapImage: "esri-basemap-toggle__image--secondary",

  container: "esri-basemap-thumbnail esri-basemap-toggle__container",
  image: "esri-basemap-thumbnail__image esri-basemap-toggle__image",
  imageLoading: "esri-basemap-toggle__image--loading",
  overlay: "esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",
  title: "esri-basemap-thumbnail__title esri-basemap-toggle__title",

  // common
  disabled: "esri-disabled",
  loaderAnimation: "esri-widget__loader-animation"
};

function getThumbnailStyles(basemap: Basemap): HashMap<string> {
  const thumbnailUrl = BasemapToggleViewModel.getThumbnailUrl(basemap);

  return thumbnailUrl ? { backgroundImage: "url(" + thumbnailUrl + ")" } : { backgroundImage: "" };
}

interface VisibleElements {
  title?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  title: false
};

@subclass("esri.widgets.BasemapToggle")
class BasemapToggle extends Widget {
  /**
   * Fires after the [toggle()](#toggle) method is called.
   *
   * @event module:esri/widgets/BasemapToggle#toggle
   * @property {module:esri/Basemap} current - The map's current basemap.
   * @property {module:esri/Basemap} previous - The map's previous basemap.
   *
   * @see [toggle()](#toggle)
   *
   * @example
   * basemapToggle.on('toggle', function(event){
   *   console.log("current basemap title: ", event.current.title);
   *   console.log("previous basemap title: ", event.previous.title);
   * });
   */

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/BasemapToggle
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var basemapToggle = new BasemapToggle({
   *   view: view,
   *   nextBasemap: "satellite"
   * });
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeBasemap
  //----------------------------------

  /**
   * The map's {@link module:esri/Map#basemap basemap}.
   *
   * @readonly
   * @type {module:esri/Basemap}
   * @name activeBasemap
   * @instance
   */
  @aliasOf("viewModel.activeBasemap")
  activeBasemap: Basemap = null;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/widgets/BasemapToggle/t9n/BasemapToggle")
  messages: BasemapToggleMessages = null;

  //----------------------------------
  //  nextBasemap
  //----------------------------------

  /**
   * The next basemap for toggling. One of the following values may be set to this property:
   *
   * * The {@link module:esri/Map#basemap string ID} of any Esri basemap.
   * * A custom {@link module:esri/Basemap} object.
   *
   * @instance
   * @name nextBasemap
   * @type {module:esri/Basemap}
   * @autocast { "value": "String | Object" }
   */
  @aliasOf("viewModel.nextBasemap")
  nextBasemap: Basemap = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. This view
   * provides the BasemapToggle widget with access to the initial
   * {@link module:esri/Map#basemap basemap} to toggle from
   * via the view's {@link module:esri/views/View#map map} property.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: MapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/BasemapToggle/BasemapToggleViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/BasemapToggle/BasemapToggleViewModel}
   * @autocast
   */
  @vmEvent("toggle")
  @property({ type: BasemapToggleViewModel })
  viewModel: BasemapToggleViewModel = new BasemapToggleViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/BasemapToggle~VisibleElements
   *
   * @property {boolean} [title] - Indicates whether to the title will be displayed. Default is `false`.
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/BasemapToggle~VisibleElements}
   * @autocast
   *
   * @since 4.15
   *
   * @example
   * basemapToggle.visibleElements = {
   *   title: false
   * };
   */
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

  /**
   * Toggles to the [next basemap](#nextBasemap).
   * @method
   */
  @aliasOf("viewModel.toggle")
  toggle(): void {}

  render(): VNode {
    const vm = this.viewModel;
    const activeBasemap = vm.state === "disabled" ? null : vm.activeBasemap;
    const nextBasemap = vm.state === "disabled" ? null : vm.nextBasemap;
    const title = nextBasemap ? nextBasemap.title : "";
    const nextBasemapLoading = nextBasemap && nextBasemap.loadStatus !== "loaded";

    let titleNode: VNode;

    if (this.visibleElements.title && title) {
      titleNode = (
        // need key to distinguish children - see http://maquettejs.org/docs/rules.html
        <div class={CSS.overlay} key="esri-basemap-toggle__overlay">
          <span class={CSS.title} title={title}>
            {title}
          </span>
        </div>
      );
    }

    return (
      <div
        class={CSS.base}
        role="button"
        data-basemap-id={nextBasemap ? nextBasemap.id : ""}
        bind={this}
        onclick={this._toggle}
        onkeydown={this._toggle}
        tabIndex={0}
        title={this.label}
      >
        <div class={this.classes(CSS.container, CSS.secondaryBasemapImage)}>
          <div class={CSS.image} styles={getThumbnailStyles(activeBasemap)} />
        </div>
        <div class={CSS.container}>
          <div
            class={this.classes(CSS.image, nextBasemapLoading ? CSS.imageLoading : null)}
            styles={getThumbnailStyles(nextBasemap)}
          >
            {nextBasemapLoading ? (
              <span aria-hidden="true" role="presentation" class={CSS.loaderAnimation} />
            ) : null}
          </div>
          {titleNode}
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _toggle(): void {
    this.toggle();
  }
}

export default BasemapToggle;
