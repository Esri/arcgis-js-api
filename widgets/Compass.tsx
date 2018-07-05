/**
 * The Compass widget indicates where north is in relation to the current view
 * {@link module:esri/views/MapView#rotation rotation}
 * or {@link module:esri/Camera#heading camera heading}. Clicking the Compass widget
 * rotates the view to face north (heading = 0). This widget is added to a {@link module:esri/views/SceneView}
 * by default.
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
 * @see [Compass.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Compass.tsx)
 * @see [Compass.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Compass.scss)
 * @see module:esri/widgets/Compass/CompassViewModel
 * @see [Sample - Adding the Compass widget to a MapView](../sample-code/widgets-compass-2d/index.html)
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/views/MapView
 * @see module:esri/views/SceneView
 * @see module:esri/Camera
 */
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Compass/nls/Compass";

// esri.core.accessorSupport
import { aliasOf, subclass, property, declared } from "esri/core/accessorSupport/decorators";

// esri.views
import View = require("esri/views/View");

// esri.widgets
import { Axes } from "esri/widgets/interfaces";
import Widget = require("esri/widgets/Widget");

// esri.widgets.Compass
import CompassViewModel = require("esri/widgets/Compass/CompassViewModel");

// esri.widgets.support
import { GoToOverride } from "esri/widgets/support/interfaces";
import { tsx, renderable, accessibleHandler } from "esri/widgets/support/widget";

type CompassMode = "device-orientation" | "reset" | "none";

const CSS = {
  base: "esri-compass esri-widget--button esri-widget",
  active: "esri-compass--active",
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
class Compass extends declared(Widget) {
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
  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeMode
  //----------------------------------

  /**
   * @todo doc
   */
  @aliasOf("viewModel.activeMode") activeMode: CompassMode = null;

  //----------------------------------
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride") goToOverride: GoToOverride = null;

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
   * @readonly
   */
  @property() iconClass = CSS.widgetIcon;

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
   * @readonly
   */
  @property() label: string = i18n.widgetLabel;

  //----------------------------------
  //  modes
  //----------------------------------

  /**
   * @todo doc
   */
  @aliasOf("viewModel.modes") modes: CompassMode[] = null;

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
  @aliasOf("viewModel.view") view: View = null;

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
  @property({
    type: CompassViewModel
  })
  @renderable(["viewModel.orientation", "viewModel.state"])
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
  @aliasOf("viewModel.reset")
  reset(): void {}

  render() {
    const orientation = this.viewModel.orientation;
    const state = this.viewModel.state;

    const disabled = state === "disabled",
      showNorth = state === "rotation" ? "rotation" : "compass", // compass is also shown when disabled
      showingCompass = showNorth === "compass";

    const tabIndex = disabled ? -1 : 0;

    const dynamicRootClasses = {
      [CSS.disabled]: disabled,
      [CSS.active]: this.viewModel.activeMode === "device-orientation",
      [CSS.interactive]: !disabled
    };

    const dynamicIconClasses = {
      [CSS.northIcon]: showingCompass,
      [CSS.rotationIcon]: !showingCompass
    };

    return (
      <div
        bind={this}
        class={this.classes(CSS.base, dynamicRootClasses)}
        onclick={this._start}
        onkeydown={this._start}
        role="button"
        tabIndex={tabIndex}
        aria-label={i18n.reset}
        title={i18n.reset}
      >
        <span
          aria-hidden="true"
          class={this.classes(CSS.icon, dynamicIconClasses)}
          styles={this._toRotationTransform(orientation)}
        />
        <span class={CSS.text}>{i18n.reset}</span>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _start() {
    const { viewModel } = this;

    viewModel.nextMode();
    viewModel.startMode();
  }

  private _toRotationTransform(orientation: Axes): HashMap<string> {
    return {
      transform: `rotateZ(${orientation.z}deg)`
    };
  }
}

export = Compass;
