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
 * The Compass widget indicates where north is in relation to the current view
 * {@link module:esri/views/MapView#rotation rotation}
 * or {@link module:esri/Camera#heading camera heading}. Clicking the compass
 * rotates the view to face north (heading = 0). This widget is added to a {@link module:esri/views/SceneView}
 * by default.
 *
 * ![compass](../assets/img/apiref/widgets/compass.png)
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
 * @see [Compass.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Compass.js)
 * @see [Compass.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Compass.scss)
 * @see module:esri/widgets/Compass/CompassViewModel
 * @see [Sample - Adding the Compass widget to a MapView](../sample-code/widgets-compass-2d/index.html)
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/views/MapView
 * @see module:esri/views/SceneView
 * @see module:esri/Camera
 */
define([
  "../core/watchUtils",

  "./Compass/CompassViewModel",

  "./support/viewModelWiring",

  "./Widgette",

  "dijit/_TemplatedMixin",
  "dijit/a11yclick",

  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-style",

  "dojo/i18n!./Compass/nls/Compass",

  "dojo/text!./Compass/templates/Compass.html"
],
function (
  watchUtils,
  CompassViewModel,
  viewModelWiring,
  Widget,
  TemplatedMixin, a11yclick,
  domAttr, domClass, domStyle,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-compass esri-widget-button",
    text: "esri-icon-font-fallback-text",
    icon: "esri-compass__icon",
    rotationIcon: "esri-icon-dial",
    northIcon: "esri-icon-compass",

    // common
    interactive: "esri-interactive",
    disabled: "esri-disabled"
  };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @constructor module:esri/widgets/Compass
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var compass = new Compass({
   *   view: view
   * });
   */
  return Widget.createSubclass([TemplatedMixin], /** @lends module:esri/widgets/Compass.prototype */ {

    declaredClass: "esri.widgets.Compass",

    baseClass: CSS.base,

    templateString: templateString,

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {
      this._applyRotation = this._applyRotation.bind(this);
      this._handleClick = this._handleClick.bind(this);
      this._handleState = this._handleState.bind(this);
    },

    postCreate: function () {
      this.inherited(arguments);

      this.own(
        watchUtils.init(this.viewModel, "state", this._handleState),
        watchUtils.when(this.viewModel, "orientation", this._applyRotation),

        this.on(a11yclick, this._handleClick)
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

    properties: /** @lends module:esri/widgets/Compass.prototype */ {

      //----------------------------------
      //  view
      //----------------------------------

      /**
       * The view in which the Compass obtains and indicates camera
       * {@link module:esri/Camera#heading heading}, using a (SceneView) or
       * {@link module:esri/views/Mapview#rotation rotation} (MapView).
       *
       * @type {module:esri/views/SceneView | module:esri/views/MapView}
       *
       * @name view
       * @instance
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
       * {@link module:esri/widgets/Compass/CompassViewModel} class to access
       * all properties and methods on the widget.
       *
       * @name viewModel
       * @instance
       * @type {module:esri/widgets/Compass/CompassViewModel}
       * @autocast
       */
      viewModel: {
        type: CompassViewModel
      }

    },

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
    reset: viewModelWiring.createMethodDelegate("reset"),

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _applyRotation: function (axes) {
      var transform = "rotateZ(" + axes.z + "deg)";

      domStyle.set(this._iconNode, {
        transform: transform,
        mozTransform: transform,
        webkitTransform: transform,
        oTransform: transform,
        msTransform: transform
      });
    },

    //--------------------------------------------------------------------------
    //
    //  Event handlers
    //
    //--------------------------------------------------------------------------

    _handleClick: function () {
      this.viewModel.reset();
    },

    _handleState: function (value) {
      var disabled  = value === "disabled",
          icon      = value === "rotation" ? "rotation" : "compass", // compass is also shown when disabled
          showNorth = icon === "compass";

      domClass.toggle(this.domNode, CSS.disabled, disabled);
      domClass.toggle(this.domNode, CSS.interactive, !disabled);
      domAttr.set(this.domNode, "tabindex", disabled ? "" : 0);
      domClass.toggle(this._iconNode, CSS.northIcon, showNorth);
      domClass.toggle(this._iconNode, CSS.rotationIcon, !showNorth);

    }

  });

});
