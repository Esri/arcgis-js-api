/**
 * The Compass widget indicates where north is in relation to the current view
 * {@link module:esri/views/MapView#rotation rotation}
 * or {@link module:esri/Camera#heading camera heading}. Clicking the compass
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
/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, subclass, property, declared } from "../core/accessorSupport/decorators";

import {
  jsxFactory,
  renderable,
  accessibleHandler
} from "./support/widget";

import {Axes} from "./interfaces";

import Widget = require("./Widget");
import CompassViewModel = require("./Compass/CompassViewModel");
import View = require("../views/View");

import * as i18n from "dojo/i18n!./Compass/nls/Compass";

const CSS = {
  base: "esri-compass esri-widget-button esri-widget",
  text: "esri-icon-font-fallback-text",
  icon: "esri-compass__icon",
  rotationIcon: "esri-icon-dial",
  northIcon: "esri-icon-compass",

  // common
  interactive: "esri-interactive",
  disabled: "esri-disabled"
};

interface TransformStyle {
  transform: string;
}

@subclass("esri.widgets.Compass")
class Compass extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
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
  view: View = null;

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
  @renderable([
    "viewModel.orientation",
    "viewModel.state"
  ])
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
      [CSS.interactive]: !disabled
    };

    const dynamicIconClasses = {
      [CSS.northIcon]: showingCompass,
      [CSS.rotationIcon]: !showingCompass
    };

    return (
      <div bind={this}
           class={CSS.base}
           classes={dynamicRootClasses}
           onclick={this._reset}
           onkeydown={this._reset}
           role="button"
           tabIndex={tabIndex}>
        <span aria-hidden="true"
              class={CSS.icon}
              classes={dynamicIconClasses}
              styles={this._toRotationTransform(orientation)}
              title={i18n.reset} />
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
  private _reset() {
    this.reset();
  }

  private _toRotationTransform(orientation: Axes): TransformStyle {
    return {
      transform: `rotateZ(${orientation.z}deg)`
    };
  }

}

export = Compass;
