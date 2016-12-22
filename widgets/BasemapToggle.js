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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

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
 * @see [BasemapToggle.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/BasemapToggle.js)
 * @see [BasemapToggle.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_BasemapToggle.scss)
 * @see [Sample - Get started with widgets using BasemapToggle](../sample-code/get-started-widgets/index.html)
 * @see module:esri/widgets/BasemapToggle/BasemapToggleViewModel
 *
 * @example
 * // Create a map with an initial basemap
 * var map = new Map({
 *   basemap: "streets",  // The initial basemap to toggle from
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
 *   view: view,  // The view that provides access to the map's "streets" basemap
 *   nextBasemap: "hybrid"  // Allows for toggling to the "hybrid" basemap
 * });
 */

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
define([
  "../core/watchUtils",

  "./BasemapToggle/BasemapToggleViewModel",

  "./support/viewModelWiring",

  "./Widgette",

  "dijit/_TemplatedMixin",
  "dijit/a11yclick",

  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-style",
  "dojo/on",

  "dojo/i18n!./BasemapToggle/nls/BasemapToggle",

  "dojo/text!./BasemapToggle/templates/BasemapToggle.html"
],
function (
  watchUtils,
  BasemapToggleViewModel,
  viewModelWiring,
  Widget,
  _TemplatedMixin, a11yclick,
  domAttr, domClass, domStyle, on,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-basemap-toggle",
    basemapImage: "esri-basemap-toggle__image",
    titleVisible: "esri-basemap-toggle__title--visible",
    secondaryBasemapImage: "esri-basemap-toggle__image--secondary",
    basemapImageContainer: "esri-basemap-toggle__container",
    basemapImageOverlay: "esri-basemap-toggle__image-overlay",
    basemapTitle: "esri-basemap-toggle__title",

    // common
    disabled: "esri-disabled"
  };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @mixes module:esri/core/Evented
   * @constructor module:esri/widgets/BasemapToggle
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
  var BasemapToggle = Widget.createSubclass([_TemplatedMixin], /** @lends module:esri/widgets/BasemapToggle.prototype */ {

    baseClass: CSS.base,

    declaredClass: "esri.widgets.BasemapToggle",

    templateString: templateString,

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    postCreate: function () {
      this.inherited(arguments);

      this.own(
        on(this.domNode, a11yclick, this.viewModel.toggle),

        watchUtils.init(this, "viewModel.activeBasemap, viewModel.nextBasemap", function() {
          this._updateImage();
        }),

        watchUtils.init(this, "viewModel.state", function (value) {
          domClass.toggle(this.domNode, CSS.disabled, value === "disabled");
        })
      );

      viewModelWiring.setUpEventDelegates(this, "toggle");
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

    properties: /** @lends module:esri/widgets/BasemapToggle.prototype */ {

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
      activeBasemap: {
        aliasOf: "viewModel.activeBasemap"
      },

      //----------------------------------
      //  nextBasemap
      //----------------------------------

      /**
       * The next basemap for toggling. One of the following values may be set to this property:
       *
       * * The {@link module:esri/Map#basemap string ID} of any Esri basemap.
       * * A custom {@link module:esri/Basemap} object. Since this property may be
       * [autocast](../guide/autocasting/index.html), the {@link module:esri/Basemap}
       * module does not need to be included in the `require()` function in most applications.
       *
       * @instance
       * @name nextBasemap
       * @type {module:esri/Basemap | string}
       * @autocast
       */
      nextBasemap: {
        aliasOf: "viewModel.nextBasemap"
      },

      //----------------------------------
      //  titleVisible
      //----------------------------------

      /**
       * Indicates if the title of the basemap is visible in the widget.
       *
       * @type {boolean}
       * @default false
       */
      titleVisible: {
        value: false,

        set: function(value) {
          domClass.toggle(this._basemapTitleNode, CSS.titleVisible, !!value);
          this._set("titleVisible", value);
        }
      },

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
       * @type {(module:esri/views/SceneView|module:esri/views/MapView)}
       */
      view: {
        aliasOf: "viewModel.view"
      },

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
      viewModel: {
        type: BasemapToggleViewModel
      }

    },

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    /**
     * Toggles to the [next basemap](#nextBasemap).
     * @method
     */
    toggle: viewModelWiring.createMethodDelegate("toggle"),

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _updateImage: function () {
      var viewModel = this.viewModel;

      var activeBasemap = viewModel.activeBasemap;
      var nextBasemap = viewModel.nextBasemap;

      if (!nextBasemap || !activeBasemap) {
        return;
      }

      domAttr.set(this.domNode, {
        "data-basemap-id": nextBasemap.id
      });

      domStyle.set(this._imageBackgroundNode, {
        backgroundImage: nextBasemap.thumbnailUrl ? "url(" + nextBasemap.thumbnailUrl + ")" : ""
      });

      domStyle.set(this._secondaryImageBackgroundNode, {
        backgroundImage: activeBasemap.thumbnailUrl ? "url(" + activeBasemap.thumbnailUrl + ")" : ""
      });

      domAttr.set(this._basemapTitleNode, {
        title: nextBasemap.title || "",
        textContent: nextBasemap.title || ""
      });

    }

  });

  return BasemapToggle;
});
