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
 * Provides a simple widget that switches the {@link module:esri/views/View} to its
 * initial {@link module:esri/Viewpoint} or a previously defined [viewpoint](#viewpoint).
 * By default this button looks like the following:
 *
 * ![home-button](../assets/img/apiref/widgets/widgets-home.png)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 * See the example below.
 *
 * @module esri/widgets/Home
 * @since 4.0
 *
 * @see [Home.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Home.js)
 * @see [button.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Widget.scss)
 * @see [Sample - Home widget](../sample-code/widgets-home/index.html)
 * @see module:esri/widgets/Home/HomeViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 *
 * @example
 * var homeWidget = new Home({
 *   view: view
 * });
 *
 * // adds the home widget to the top left corner of the MapView
 * view.ui.add(homeWidget, "top-left");
 */

/**
 * Fires when the [go()](#go) method is called.
 *
 * @event module:esri/widgets/Home#go
 *
 * @see [go()](#go)
 *
 * @example
 * homeWidget.on("go", function(event){
 *   console.log("updating viewpoint");
 * });
 */
define([
  "./Home/HomeViewModel",

  "./support/viewModelWiring",

  "./Widgette",

  "dijit/_TemplatedMixin",
  "dijit/a11yclick",

  "dojo/dom-class",
  "dojo/on",

  "dojo/i18n!./Home/nls/Home",

  "dojo/text!./Home/templates/Home.html"
],
function(
  HomeViewModel,
  viewModelWiring,
  Widget,
  _TemplatedMixin, a11yclick,
  domClass, on,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-home esri-widget-button",
    text: "esri-icon-font-fallback-text",
    homeIcon: "esri-icon esri-icon-home",
    loadingIcon: "esri-rotating esri-icon-loading-indicator",

    // common
    disabled: "esri-disabled"
  };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @mixes module:esri/core/Evented
   * @constructor module:esri/widgets/Home
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var homeButton = new Home({
   *   view: view,
   *   viewpoint: new Viewpoint()
   * });
   */
  var Home = Widget.createSubclass([_TemplatedMixin],
  /** @lends module:esri/widgets/Home.prototype */
  {

    declaredClass: "esri.widgets.Home",

    baseClass: CSS.base,

    templateString: templateString,


    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    postCreate: function() {
      this.inherited(arguments);

      this.own(
        on(this.domNode, a11yclick, this.viewModel.go),

        this.viewModel.watch("state", function(value) {
          domClass.toggle(this._homeIconNode, CSS.loadingIcon, value === "going-home");
          domClass.toggle(this.domNode, CSS.disabled, value === "disabled");
        }.bind(this))
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

    properties: /** @lends module:esri/widgets/Home.prototype */ {

      //----------------------------------
      //  view
      //----------------------------------

      /**
       * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
       *
       * @type {module:esri/views/MapView | module:esri/views/SceneView}
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
       * {@link module:esri/widgets/Home/HomeViewModel} class to access
       * all properties and methods on the widget.
       *
       * @name viewModel
       * @instance
       * @autocast
       * @type {module:esri/widgets/Home/HomeViewModel}
       */

      //----------------------------------
      //  viewpoint
      //----------------------------------

      viewModel: {
        type: HomeViewModel
      },

      /**
       * The {@link module:esri/Viewpoint}, or point of view, to zoom to when
       * going home. The initial value is determined a few different ways:

       * * If no {@link module:esri/views/View} is provided, the value is `null`.
       * * If the {@link module:esri/views/View} is ready, but the {@link module:esri/Viewpoint} is not defined, the  initial
       * value of the {@link module:esri/Viewpoint} is determined when the {@link module:esri/views/View} became ready.
       * * If the {@link module:esri/views/View} is ready and the {@link module:esri/Viewpoint} is defined by the user, the initial viewpoint value is the user-defined {@link module:esri/Viewpoint}.
       *
       * @type {module:esri/Viewpoint}
       * @name viewpoint
       * @instance
       *
       * @example
       * // Creates a viewpoint centered on the extent of a polygon geometry
       * var vp = new Viewpoint({
       *   targetGeometry: geom.extent
       * });
       *
       * // Sets the model's viewpoint to the Viewpoint based on a polygon geometry
       * home.viewpoint = vp;
       */
      viewpoint: {
        aliasOf: "viewModel.viewpoint"
      }

    },

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    /**
     * Animates the view to the initial Viewpoint of the view or the
     * value of [viewpoint](#viewpoint).
     *
     * @method
     * @see [Event: go](#event:go)
     */
    go: viewModelWiring.createMethodDelegate("go")

  });

  return Home;

});
