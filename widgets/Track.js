// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

/**
 * Provides a simple button that animates the {@link module:esri/views/View}
 * to the user's location when clicked. While tracking, the default button looks like the following:
 *
 * ![track-button](../assets/img/apiref/widgets/widgets-track.png)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view. The snippet below demonstrates this.
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
 * ::: esri-md class="panel trailer-1"
 * The Track widget is only supported in applications that support geolocation.
 * For additional information regarding this, visit the ArcGIS blog,
 * [Increased web API security in Google Chrome](https://blogs.esri.com/esri/arcgis/2016/04/14/increased-web-api-security-in-google-chrome/).
 * :::
 *
 * @module esri/widgets/Track
 * @since 4.0
 *
 * @see [Track.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Track.js)
 * @see [button.css]({{ JSAPI_BOWER_URL }}/widgets/css/button.css)
 * @see [button.scss]({{ JSAPI_BOWER_URL }}/widgets/css/button.scss)
 * @see module:esri/widgets/Track/TrackViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 * @see [Sample - track widget](../sample-code/widgets-track/index.html)
 *
 * @example
 * var trackWidget = new Track({
 *   view: view
 * });
 *
 * view.ui.add(trackWidget, "top-left");
 */

/**
 * Fires after the [track()](#track) method is called and a position is found.
 *
 * @event module:esri/widgets/Track#track
 * @property {Object} position - Geoposition returned from the [Geolocation API](#geolocationOptions).
 */

/**
 * Fires after the [track()](#track) method is called and an error is returned.
 *
 * @event module:esri/widgets/Track#track-error
 * @property {Error} error - The Error object returned if an error occurred while tracking.
 */
define([
  "./Track/TrackViewModel",

  "./support/viewModelWiring",

  "./Widget",

  "../core/watchUtils",

  "dijit/a11yclick",
  "dijit/_TemplatedMixin",

  "dojo/on",
  "dojo/dom-class",
  "dojo/dom-attr",

  "dojo/i18n!./Track/nls/Track",

  "dojo/text!./Track/templates/Track.html"
], function (
  TrackViewModel,
  viewModelWiring,
  Widget,
  watchUtils,
  a11yclick, _TemplatedMixin,
  on, domClass, domAttr,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-track esri-widget-button",
    text: "esri-icon-font-fallback-text",
    icon: "esri-icon",
    loading: "esri-rotating esri-icon-loading-indicator",
    startTrackingIcon: "esri-icon-locate",
    stopTrackingIcon: "esri-icon-pause",

    // common
    disabled: "esri-disabled"
  };

  /**
   * @extends module:esri/widgets/Widget
   * @constructor module:esri/widgets/Track
   * @param {Object} [properties] - See the [properties](#properties) for a list of all the properties
   *                              that may be passed into the constructor.
   * @param {string | Node} [srcNodeRef] - Reference or ID of the HTML node in which this widget renders.
   */
  var Track = Widget.createSubclass([_TemplatedMixin], /** @lends module:esri/widgets/Track.prototype */ {

    properties: {
      viewModel: {
        type: TrackViewModel
      },
      geolocationOptions: {
        dependsOn: ["viewModel.geolocationOptions"]
      },
      goToLocationEnabled: {
        dependsOn: ["viewModel.goToLocationEnabled"]
      },
      graphic: {
        dependsOn: ["viewModel.graphic"]
      },
      tracking: {
        dependsOn: ["viewModel.tracking"]
      },
      view: {
        dependsOn: ["viewModel.view"]
      }
    },

    declaredClass: "esri.widgets.Track",

    baseClass: CSS.base,

    templateString: templateString,

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    postCreate: function () {
      this.inherited(arguments);
      this.own(

        on(this.domNode, a11yclick, this._toggleTracking.bind(this)),

        watchUtils.init(this.viewModel, "state", function (value) {
          if (value === "feature-unsupported") {
            this.visible = false;
          }

          var isTracking = value === "tracking";

          domClass.toggle(this.domNode, CSS.disabled, value === "disabled");
          domClass.toggle(this._iconNode, CSS.startTrackingIcon, !isTracking);
          domClass.toggle(this._iconNode, CSS.stopTrackingIcon, isTracking);
          domClass.toggle(this._iconNode, CSS.loading, value === "waiting");

          var text = isTracking ? this._i18n.stopTracking : this._i18n.startTracking;
          domAttr.set(this._iconNode, "title", text);
          domAttr.set(this._textNode, "textContent", text);
        }.bind(this))

      );

      viewModelWiring.setUpEventDelegates(this, ["track", "track-error"]);
    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _css: CSS,

    _i18n: i18n,

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
    _getGeolocationOptionsAttr: viewModelWiring.createGetterDelegate("geolocationOptions"),

    _setGeolocationOptionsAttr: viewModelWiring.createSetterDelegate("geolocationOptions"),

    //----------------------------------
    //  goToLocationEnabled
    //----------------------------------

    /**
     * Indicates whether the widget will automatically navigate the view to the user's position
     * when a geolocation result is found. Set to `false` to disable this behavior,
     * leaving full control to the developer.
     *
     * @name goToLocationEnabled
     * @instance
     *
     * @type {boolean}
     * @default true
     */
    _getGoToLocationEnabledAttr: viewModelWiring.createGetterDelegate("goToLocationEnabled"),

    _setGoToLocationEnabledAttr: viewModelWiring.createSetterDelegate("goToLocationEnabled"),

    //----------------------------------
    //  graphic
    //----------------------------------

    /**
     * The graphic used to show the user's location in the view.
     *
     * @name graphic
     * @instance
     * @autocast
     *
     * @type {module:esri/Graphic}
     *
     * @example
     * var trackWidget = new Track({
     *   view: view,  // Assigns the track widget to a view
     *     graphic: new Graphic({
     *       symbol: new SimpleMarkerSymbol()  // Overwrites the default symbol used for the
     *       // graphic placed at the location of the user when found
     *     })
     * });
     */
    _getGraphicAttr: viewModelWiring.createGetterDelegate("graphic"),

    _setGraphicAttr: viewModelWiring.createSetterDelegate("graphic"),

    //----------------------------------
    //  tracking
    //----------------------------------

    /**
     * Indicates whether the widget is watching for new positions.
     *
     * @name tracking
     * @instance
     *
     * @type {boolean}
     * @readonly
     * @default false
     * @readonly
     */
    _getTrackingAttr: viewModelWiring.createGetterDelegate("tracking"),

    _setTrackingAttr: viewModelWiring.createSetterDelegate("tracking"),

    //----------------------------------
    //  view
    //----------------------------------

    /**
     * A reference to the {@link module:esri/views/MapView MapView} or {@link module:esri/views/Scene SceneView}. Set this to link the widget to a specific view.
     *
     * @name view
     * @instance
     *
     * @type {module:esri/views/MapView | module:esri/views/SceneView}
     */
    _getViewAttr: viewModelWiring.createGetterDelegate("view"),

    _setViewAttr: viewModelWiring.createSetterDelegate("view"),

    //----------------------------------
    //  viewModel
    //----------------------------------

    /**
     * The view model for this widget. This is a class that contains all the logic
     * (properties and methods) that controls this widget's behavior. See the
     * {@link module:esri/widgets/Track/TrackViewModel} class to access
     * all properties and methods on the widget.
     *
     * @name viewModel
     * @instance
     * @type {module:esri/widgets/Track/TrackViewModel}
     * @autocast
     */

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    /**
     * When executed, the widget will start [tracking](#tracking) the
     * user's location.
     *
     * @method
     * @instance
     */
    start: viewModelWiring.createMethodDelegate("start"),

    /**
     * Stops tracking the user's location when executed.
     *
     * @method
     * @instance
     */
    stop: viewModelWiring.createMethodDelegate("stop"),

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _toggleTracking: function () {
      var vm = this.viewModel;
      if (!vm) {
        return;
      }

      if (vm.tracking) {
        this.viewModel.stop();
        return;
      }

      this.viewModel.start();
    }

  });

  return Track;
});
