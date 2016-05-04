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
 * The Zoom widget allows users to zoom in/out within a view.
 *
 * An instance of the Zoom widget is available in every
 * {@link module:esri/views/MapView} and {@link module:esri/views/SceneView} by default.
 * See {@link module:esri/views/ui/DefaultUI} for details on how to place the Zoom widget
 * in other parts of the view.
 *
 * @example
 * require([
 *   "esri/views/MapView",
 *   "esri/widgets/Zoom", ...
 * ], function(MapView, Zoom, ... ) {
 *
 *   var view = new MapView({
 *      container: "viewDiv",
 *      map: map
 *   });
 *
 *   var zoom = new Zoom({
 *     view: view
 *   });
 *   zoom.startup();
 *
 *   view.ui.add(zoom, "bottom-left");
 * });
 *
 * @module esri/widgets/Zoom
 * @since 4.0
 *
 * @see [Zoom.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Zoom.js)
 * @see [Zoom.css]({{ JSAPI_BOWER_URL }}/widgets/Zoom/css/Zoom.css)
 * @see [Zoom.scss]({{ JSAPI_BOWER_URL }}/widgets/Zoom/css/Zoom.scss)
 * @see module:esri/views/MapView
 * @see module:esri/views/SceneView
 * @see module:esri/widgets/Zoom/ZoomViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */
define([
  "../core/sniff",
  "../core/watchUtils",

  "./support/viewModelWiring",

  "./Widget",

  "./Zoom/ZoomViewModel",

  "dijit/_TemplatedMixin",
  "dijit/a11yclick",

  "dojo/dom",
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/on",

  "dojo/i18n!./Zoom/nls/Zoom",

  "dojo/text!./Zoom/templates/Zoom.html"
],
function (
  has, watchUtils,
  viewModelWiring,
  Widget,
  ZoomViewModel,
  TemplatedMixin, a11yclick,
  dom, domClass, domAttr, on,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-zoom",
    button: "esri-button esri-widget-button",
    disabled: "esri-disabled",
    interactive: "esri-interactive",
    iconText: "esri-icon-font-fallback-text",
    icon: "esri-icon",
    isLayoutHorizontal: "esri-zoom--horizontal",
    zoomInIcon: "esri-icon-plus",
    zoomOutIcon: "esri-icon-minus"
  };

  var LAYOUT_MODES = {
    horizontal: "horizontal",
    vertical: "vertical"
  };

  /**
   * @extends module:esri/widgets/Widget
   * @constructor module:esri/widgets/Zoom
   * @param {Object} [properties] - See the [properties](#properties) for a list of all the properties
   *                              that may be passed into the constructor.
   * @param {string | Node} [srcNodeRef] - Reference or ID of the HTML element in which this widget renders.
   */
  var Zoom = Widget.createSubclass([TemplatedMixin],
    /** @lends module:esri/widgets/Zoom.prototype */
    {
      properties: {
        viewModel: {
          type: ZoomViewModel
        },
        view: {
          dependsOn: ["viewModel.view"]
        }
      },

      declaredClass: "esri.widgets.Zoom",

      baseClass: CSS.base,

      templateString: templateString,

      //--------------------------------------------------------------------------
      //
      //  Lifecycle
      //
      //--------------------------------------------------------------------------

      constructor: function () {
        this._handleZoomOutClick = this._handleZoomOutClick.bind(this);
        this._handleZoomInClick = this._handleZoomInClick.bind(this);
        this._handleStateChange = this._handleStateChange.bind(this);
        this._handleZoomInChange = this._handleZoomInChange.bind(this);
        this._handleZoomOutChange = this._handleZoomOutChange.bind(this);
      },

      postCreate: function () {
        this.inherited(arguments);

        if (!has("css-user-select")) {
          dom.setSelectable(this.domNode, false);
        }

        this.own(
          on(this._zoomInNode, a11yclick, this._handleZoomInClick),
          on(this._zoomOutNode, a11yclick, this._handleZoomOutClick),

          watchUtils.init(this.viewModel, "state", this._handleStateChange),
          watchUtils.init(this.viewModel, "canZoomIn", this._handleZoomInChange),
          watchUtils.init(this.viewModel, "canZoomOut", this._handleZoomOutChange)
        );
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
      //  layout
      //----------------------------------

      layout: LAYOUT_MODES.vertical,

      _setLayoutAttr: function (value) {
        if (value !== LAYOUT_MODES.horizontal) {
          value = LAYOUT_MODES.vertical;
        }

        domClass.toggle(this.domNode, CSS.isLayoutHorizontal, value === LAYOUT_MODES.horizontal);

        this._set("layout", value);
      },

      //----------------------------------
      //  view
      //----------------------------------

      /**
       * A reference to the {@link module:esri/views/MapView MapView} or {@link module:esri/views/Scene SceneView}. Set this to link the widget to a specific view.
       *
       * @name view
       * @instance
       *
       * @type {(module:esri/views/SceneView|module:esri/views/MapView)}
       */
      _getViewAttr: viewModelWiring.createGetterDelegate("view"),

      _setViewAttr: viewModelWiring.createSetterDelegate("view"),

      //----------------------------------
      //  viewModel
      //----------------------------------

      /**
       * The view model for this widget. This is a class that contains all the logic
       * (properties and methods) that controls this widget's behavior. See the
       * {@link module:esri/widgets/Zoom/ZoomViewModel} class to access
       * all properties and methods on the widget.
       *
       * @name viewModel
       * @instance
       * @type {module:esri/widgets/Zoom/ZoomViewModel}
       * @autocast
       */

      //--------------------------------------------------------------------------
      //
      //  Public Methods
      //
      //--------------------------------------------------------------------------

      /**
       * The widget zooms in by changing the scale to scale / 2.
       *
       * @method
       */
      zoomIn: viewModelWiring.createMethodDelegate("zoomIn"),

      /**
       * The widget zooms out by using changing the scale to scale * 2.
       *
       * @method
       */
      zoomOut: viewModelWiring.createMethodDelegate("zoomOut"),

      //--------------------------------------------------------------------------
      //
      //  Event handlers
      //
      //--------------------------------------------------------------------------

      _handleStateChange: function (value) {
        var ready = value === "ready";

        if (ready) {
          domAttr.set(this._zoomInNode, "tabindex", 0);
          domAttr.set(this._zoomOutNode, "tabindex", 0);

          domClass.add(this._zoomInNode, CSS.interactive);
          domClass.add(this._zoomOutNode, CSS.interactive);
        }
        else {
          domAttr.remove(this._zoomInNode, "tabindex");
          domAttr.remove(this._zoomOutNode, "tabindex");

          domClass.remove(this._zoomInNode, CSS.interactive);
          domClass.remove(this._zoomOutNode, CSS.interactive);
        }

        domClass.toggle(this.domNode, CSS.disabled, !ready);
      },

      _handleZoomInChange: function(value){
        domClass.toggle(this._zoomInNode, CSS.disabled, !value);
        domClass.toggle(this._zoomInNode, CSS.interactive, value);
      },

      _handleZoomOutChange: function(value){
        domClass.toggle(this._zoomOutNode, CSS.disabled, !value);
        domClass.toggle(this._zoomOutNode, CSS.interactive, value);
      },

      _handleZoomInClick: function () {
        this.viewModel.zoomIn();
      },

      _handleZoomOutClick: function () {
        this.viewModel.zoomOut();
      }

    });

  return Zoom;

});
