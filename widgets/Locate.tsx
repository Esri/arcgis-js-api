/**
 * Provides a simple widget that animates the {@link module:esri/views/View}
 * to the user's current location. By default the widget looks like the following:
 *
 * ![locate-button](../assets/img/apiref/widgets/widgets-locate.png)
 *
 * ::: esri-md class="panel trailer-1"
 * The Locate widget is not supported on insecure origins.
 * To use it, switch your application to a secure origin, such as HTTPS.
 * Note that localhost is considered "potentially secure" and can be used for easy testing in browsers that supports
 * [Window.isSecureContext](https://developer.mozilla.org/en-US/docs/Web/API/Window/isSecureContext#Browser_compatibility)
 * (currently Chrome and Firefox).
 *
 * As of version 4.2, the Locate Button no longer displays in non-secure web apps. At version
 * [4.1](https://blogs.esri.com/esri/arcgis/2016/04/14/increased-web-api-security-in-google-chrome/)
 * this only applied to Google Chrome.
 * :::
 *
 * If the spatial reference of the {@link module:esri/views/View} is not Web Mercator or WGS84,
 * the user's location must be reprojected to match the
 * {@link module:esri/views/View#spatialReference view's spatial reference}. This is done with the
 * {@link module:esri/tasks/GeometryService} URL referenced in
 * {@link module:esri/config#geometryServiceUrl esriConfig}. You can optionally set the
 * {@link module:esri/config#geometryServiceUrl geometryServiceUrl} in esriConfig to your own
 * {@link module:esri/tasks/GeometryService} instance.
 * If not specified, however, it will refer to the service hosted in the default
 * {@link module:esri/portal/Portal portal} instance. See
 * {@link module:esri/config#geometryServiceUrl esriConfig.geometryServiceUrl} for an example.
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 * The snippet below demonstrates this.
 *
 * @module esri/widgets/Locate
 * @since 4.0
 *
 * @see [Locate.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Locate.tsx)
 * @see [button.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Widget.scss)
 * @see [Sample - locate widget](../sample-code/widgets-locate/index.html)
 * @see module:esri/widgets/Locate/LocateViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 *
 * @example
 * // This graphics layer will store the graphic used to display the user's location
 * var gl = new GraphicsLayer();
 * map.add(gl);
 *
 * var locateWidget = new Locate({
 *   view: view,   // Attaches the Locate button to the view
 *   graphicsLayer: gl  // The layer the locate graphic is assigned to
 * });
 *
 * view.ui.add(locateWidget, "top-right");
 */


/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import {aliasOf, subclass, property, declared} from "../core/accessorSupport/decorators";
import {accessibleHandler, join, tsx, renderable, vmEvent} from "./support/widget";

import Widget = require("./Widget");
import LocateViewModel = require("./Locate/LocateViewModel");
import Graphic = require("../Graphic");
import View = require("../views/View");

import * as i18n from "dojo/i18n!./Locate/nls/Locate";

const CSS = {
  base: "esri-locate esri-widget-button esri-widget",
  text: "esri-icon-font-fallback-text",
  icon: "esri-icon",
  locate: "esri-icon-locate",
  loading: "esri-icon-loading-indicator",
  rotating: "esri-rotating",

  // common
  disabled: "esri-disabled",
  hidden: "esri-hidden"
};

@subclass("esri.widgets.Locate")
class Locate extends declared(Widget) {

  /**
   * Fires after the [locate()](#locate) method is called and succeeds.
   *
   * @event module:esri/widgets/Locate#locate
   * @property {Object} position - Geoposition returned from the [Geolocation API](#geolocationOptions).
   *
   * @see [locate()](#locate)
   */

  /**
   * Fires after the [locate()](#locate) method is called and fails.
   *
   * @event module:esri/widgets/Locate#locate-error
   * @property {Error} error - The Error object that occurred while locating.
   *
   * @see [locate()](#locate)
   */

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Locate
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var locate = new Locate({
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
  //  geolocationOptions
  //----------------------------------

  /**
   * The HTML5 Geolocation Position options for locating. Refer to
   * [Geolocation API Specification](http://www.w3.org/TR/geolocation-API/#position-options)
   * for details.
   *
   * @name geolocationOptions
   * @instance
   *
   * @type {Object}
   * @default { maximumAge: 0, timeout: 15000, enableHighAccuracy: true }
   */
  @aliasOf("viewModel.geolocationOptions")
  geolocationOptions: PositionOptions = null;

  //----------------------------------
  //  goToLocationEnabled
  //----------------------------------

  /**
   * Indicates whether the widget should navigate the view to the position and scale of the geolocated result.
   *
   * @name goToLocationEnabled
   * @instance
   * @type {boolean}
   * @default true
   */
  @aliasOf("viewModel.goToLocationEnabled")
  goToLocationEnabled: boolean = null;

  //----------------------------------
  //  graphic
  //----------------------------------

  /**
   * The graphic used to show the user's location on the map.
   *
   * @name graphic
   * @instance
   * @autocast
   *
   * @type {module:esri/Graphic}
   *
   * @example
   * var locateWidget = new Locate({
   *   viewModel: { // autocasts as new LocateViewModel()
   *     view: view,  // assigns the locate widget to a view
   *     graphic: Graphic({
   *       symbol: new SimpleMarkerSymbol()  // overwrites the default symbol used for the
   *       // graphic placed at the location of the user when found
   *     })
   *   }
   * });
   */
  @aliasOf("viewModel.graphic")
  graphic: Graphic = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   *
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
   * {@link module:esri/widgets/Locate/LocateViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Locate/LocateViewModel}
   * @autocast
   */
  @property({
    type: LocateViewModel
  })
  @renderable("viewModel.state")
  @vmEvent(["locate", "locate-error"])
  viewModel = new LocateViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Animates the view to the user's location.
   *
   * @return {Promise} Resolves to an object with the same specification as the event
   *                   object defined in the [locate event](#event:locate).
   *
   * @method
   *
   * @example
   * var locateWidget = new Locate({
   *   view: view
   * }, "locateDiv");
   *
   * locateWidget.locate().then(function(){
   *   // Fires after the user's location has been found
   * });
   */
  @aliasOf("viewModel.locate")
  locate(): void {}

  render() {
    const state = this.get("viewModel.state");
    const isLocating = state === "locating";

    const rootClasses = {
      [CSS.disabled]: state === "disabled",
      [CSS.hidden]: state === "feature-unsupported"
    };

    const iconClasses = {
      [CSS.loading]: isLocating,
      [CSS.rotating]: isLocating,
      [CSS.locate]: !isLocating
    };

    return (
      <div bind={this} class={CSS.base} classes={rootClasses}
           hidden={state === "feature-unsupported"}
           onclick={this._locate} onkeydown={this._locate}
           role="button" tabIndex={0}>
        <span classes={iconClasses} aria-hidden="true"
              class={join(CSS.icon, CSS.locate)} title={i18n.title} />
        <span class={CSS.text}>{i18n.title}</span>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _locate() {
    this.locate();
  }

}

export = Locate;
