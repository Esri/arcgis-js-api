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
 * Provides a simple widget that animates the {@link module:esri/views/View}
 * to the user's current location. By default the widget looks like the following:
 *
 * ![locate-button](../assets/img/apiref/widgets/widgets-locate.png)
 *
 * ::: esri-md class="panel trailer-1"
 * The Locate widget is only supported in applications that support geolocation.
 * For additional information regarding this, visit the ArcGIS blog,
 * [Increased web API security in Google Chrome](https://blogs.esri.com/esri/arcgis/2016/04/14/increased-web-api-security-in-google-chrome/).
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
 * @see [Locate.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Locate.js)
 * @see [button.css]({{ JSAPI_BOWER_URL }}/widgets/css/button.css)
 * @see [button.scss]({{ JSAPI_BOWER_URL }}/widgets/css/button.scss)
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
 * // startup() must be called to start the widget
 * locateWidget.startup();
 *
 * view.ui.add(locateWidget, "top-right");
 */

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
define([
  "./Locate/LocateViewModel",

  "./support/viewModelWiring",

  "./Widget",

  "../core/watchUtils",

  "dijit/a11yclick",
  "dijit/_TemplatedMixin",

  "dojo/on",
  "dojo/dom-class",

  "dojo/i18n!./Locate/nls/Locate",

  "dojo/text!./Locate/templates/Locate.html"
], function (
  LocateViewModel,
  viewModelWiring,
  Widget,
  watchUtils,
  a11yclick, _TemplatedMixin,
  on, domClass,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-locate esri-widget-button",
    text: "esri-icon-font-fallback-text",
    icon: "esri-icon",
    locate: "esri-icon-locate",
    loading: "esri-rotating esri-icon-loading-indicator",

    // common
    disabled: "esri-disabled"
  };

  /**
   * @extends module:esri/widgets/Widget
   * @constructor module:esri/widgets/Locate
   * @param {Object} [properties] - See the [properties](#properties) for a list of all the properties
   *                              that may be passed into the constructor.
   * @param {string | Node} [srcNodeRef] - Reference or ID of the HTML node in which this widget renders.
   */
  var Locate = Widget.createSubclass([_TemplatedMixin], /** @lends module:esri/widgets/Locate.prototype */ {

    properties: {
      viewModel: {
        type: LocateViewModel
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
      view: {
        dependsOn: ["viewModel.view"]
      }
    },

    declaredClass: "esri.widgets.Locate",

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
        on(this.domNode, a11yclick, this.viewModel.locate),

        watchUtils.init(this.viewModel, "state", function (value) {
          if (value === "feature-unsupported") {
            this.visible = false;
          }
          var isLocating = value === "locating";
          domClass.toggle(this.domNode, CSS.disabled, value === "disabled");
          domClass.toggle(this._iconNode, CSS.loading, isLocating);
          domClass.toggle(this._iconNode, CSS.locate, !isLocating);
        }.bind(this))

      );

      viewModelWiring.setUpEventDelegates(this, ["locate", "locate-error"]);
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
     * Indicates whether the widget should navigate the view to the position and scale of the geolocated result.
     *
     * @name goToLocationEnabled
     * @instance
     * @type {boolean}
     * @default true
     */
    _getGoToLocationEnabledAttr: viewModelWiring.createGetterDelegate("goToLocationEnabled"),

    _setGoToLocationEnabledAttr: viewModelWiring.createSetterDelegate("goToLocationEnabled"),

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
     *   viewModel: new LocateVM({
     *     view: view,  // Assigns the locate widget to a view
     *     graphic: Graphic({
     *       symbol: new SimpleMarkerSymbol()  // Overwrites the default symbol used for the
     *       // graphic placed at the location of the user when found
     *     })
     * });
     */
    _getGraphicAttr: viewModelWiring.createGetterDelegate("graphic"),

    _setGraphicAttr: viewModelWiring.createSetterDelegate("graphic"),

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
     * {@link module:esri/widgets/Locate/LocateViewModel} class to access
     * all properties and methods on the widget.
     *
     * @name viewModel
     * @instance
     * @type {module:esri/widgets/Locate/LocateViewModel}
     * @autocast
     */

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
    locate: viewModelWiring.createMethodDelegate("locate")

});

  return Locate;
});
