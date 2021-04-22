/**
 * The Compass widget indicates where north is in relation to the current view
 * {@link module:esri/views/MapView#rotation rotation}
 * or {@link module:esri/Camera#heading camera heading}. Clicking the Compass widget
 * rotates the view to face north (heading = 0). This widget is added to a {@link module:esri/views/SceneView}
 * by default. The icon for the Compass widget is determined based upon the view's
 * {@link module:esri/views/SceneView#spatialReference spatial reference}. If the view's
 * {@link module:esri/views/View#spatialReference spatial reference} is not Web Mercator
 * or WGS84 a dial icon will be used, however when the spatial reference is Web Mercator or WGS84 the
 * icon will be a north arrow.
 *
 * ![Compass for Web Mercator and WGS84](../assets/img/apiref/widgets/compass.png)
 * ![Compass for other spatial references](../assets/img/apiref/widgets/compass-other-sr.png)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add the compass widget
 * to a 2D application via the {@link module:esri/views/MapView#ui ui} property on the view.
 * See the sample below.
 *
 * @example
 * var view = new MapView({
 *   container: "viewDiv",
 *   map: map
 * });
 *
 * var compass = new Compass({
 *   view: view
 * });
 *
 * // adds the compass to the top left corner of the MapView
 * view.ui.add(compass, "top-left");
 *
 * @module esri/widgets/Compass
 * @since 4.0
 *
 * @see [Compass.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Compass.tsx)
 * @see [Compass.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Compass.scss)
 * @see module:esri/widgets/Compass/CompassViewModel
 * @see [Sample - Adding the Compass widget to a MapView](../sample-code/widgets-compass-2d/index.html)
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/views/MapView
 * @see module:esri/views/SceneView
 * @see module:esri/Camera
 */

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import { ISceneView } from "esri/views/ISceneView";
import MapView from "esri/views/MapView";

// esri.widgets
import { Axes } from "esri/widgets/interfaces";
import Widget from "esri/widgets/Widget";

// esri.widgets.Compass
import CompassViewModel from "esri/widgets/Compass/CompassViewModel";

// esri.widgets.Compass.t9n
import CompassMessages from "esri/widgets/Compass/t9n/Compass";

// esri.widgets.support
import { GoToOverride } from "esri/widgets/support/GoTo";
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-compass esri-widget--button esri-widget",
  text: "esri-icon-font-fallback-text",
  icon: "esri-compass__icon",
  rotationIcon: "esri-icon-dial",
  northIcon: "esri-icon-compass",
  widgetIcon: "esri-icon-locate-circled",

  // common
  interactive: "esri-interactive",
  disabled: "esri-disabled"
};

@subclass("esri.widgets.Compass")
class Compass extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @mixes module:esri/widgets/support/GoTo
   * @constructor
   * @alias module:esri/widgets/Compass
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
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
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride")
  goToOverride: GoToOverride = null;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @since 4.7
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property()
  iconClass = CSS.widgetIcon;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @since 4.7
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
  @messageBundle("esri/widgets/Compass/t9n/Compass")
  messages: CompassMessages = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * The view in which the Compass obtains and indicates camera
   * {@link module:esri/Camera#heading heading}, using a (SceneView) or
   * {@link module:esri/views/Mapview#rotation rotation} (MapView).
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
   * {@link module:esri/widgets/Compass/CompassViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Compass/CompassViewModel}
   * @autocast
   */
  @property({ type: CompassViewModel })
  viewModel: CompassViewModel = new CompassViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * If working in a {@link module:esri/views/MapView}, sets the view's
   * {@link module:esri/views/MapView#rotation rotation} to `0`. If working in a
   * {@link module:esri/views/SceneView}, sets the camera's
   * {@link module:esri/Camera#heading heading} to `0`. This method is executed each
   * time the {@link module:esri/widgets/Compass} is clicked.
   *
   * @method
   */
  reset(): void {
    return this.viewModel.reset();
  }

  render(): VNode {
    const { orientation, state } = this.viewModel;

    const disabled = state === "disabled",
      showNorth = state === "rotation" ? "rotation" : "compass", // compass is also shown when disabled
      showingCompass = showNorth === "compass";

    const tabIndex = disabled ? -1 : 0;

    const dynamicRootClasses = {
      [CSS.disabled]: disabled,
      [CSS.interactive]: !disabled
    };

    const dynamicIconClasses = {
      [CSS.northIcon]: showingCompass,
      [CSS.rotationIcon]: !showingCompass
    };

    const { messages } = this;

    return (
      <div
        bind={this}
        class={this.classes(CSS.base, dynamicRootClasses)}
        onclick={this._reset}
        onkeydown={this._reset}
        role="button"
        tabIndex={tabIndex}
        aria-label={messages.reset}
        title={messages.reset}
      >
        <span
          aria-hidden="true"
          class={this.classes(CSS.icon, dynamicIconClasses)}
          styles={this._toRotationTransform(orientation)}
        />
        <span class={CSS.text}>{messages.reset}</span>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _reset(): void {
    this.viewModel.reset();
  }

  private _toRotationTransform(orientation: Axes): HashMap<string> {
    return {
      transform: `rotateZ(${orientation.z}deg)`
    };
  }
}

export default Compass;
