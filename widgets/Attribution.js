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
 * The Attribution displays attribution text for the layers in a map.
 * The text displayed for the layers is either a list of data providers
 * or sources as defined in the layer's custom attribution data, or the copyright text.
 * This widget automatically updates based on layer visibility and map extent and
 * displays a single line of attribution that can be expanded with a single click
 * to view all data sources.
 *
 * An instance of the Attribution widget is available in every
 * {@link module:esri/views/MapView} and {@link module:esri/views/SceneView} by default.
 * See {@link module:esri/views/ui/DefaultUI} for more details.
 *
 * ![attribution](../assets/img/apiref/widgets/attribution.png)
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/widgets/Attribution
 * @since 4.0
 *
 * @see [Attribution.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Attribution.js)
 * @see [Attribution.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Attribution.scss)
 * @see module:esri/widgets/Attribution/AttributionViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */
define([
  "../core/watchUtils",

  "./Attribution/AttributionViewModel",

  "./support/viewModelWiring",

  "./Widgette",

  "dijit/_TemplatedMixin",
  "dijit/a11yclick",

  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/on",

  "dojo/text!./Attribution/templates/Attribution.html"
],
function(
  watchUtils,
  AttributionViewModel,
  viewModelWiring,
  Widget,
  _TemplatedMixin, a11yclick,
  domAttr, domClass, on,
  templateString
) {

  var CSS = {
    base: "esri-attribution",
    poweredBy: "esri-attribution__powered-by",
    sources: "esri-attribution__sources",
    open: "esri-attribution--open",
    sourcesOpen: "esri-attribution__sources--open",
    link: "esri-attribution__link",

    // common.css
    clearFix: "esri-clearfix",
    interactive: "esri-interactive",
    hidden: "esri-hidden"
  };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @constructor module:esri/widgets/Attribution
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                 that may be passed into the constructor.
   */
  var Attribution = Widget.createSubclass([_TemplatedMixin],
    /** @lends module:esri/widgets/Attribution.prototype */
    {

      declaredClass: "esri.widgets.Attribution",

      baseClass: CSS.base,

      templateString: templateString,

      //--------------------------------------------------------------------------
      //
      //  Lifecycle
      //
      //--------------------------------------------------------------------------

      constructor: function () {
        this._attributionTextWatcher = this._attributionTextWatcher.bind(this);
        this._updateStatus = this._updateStatus.bind(this);
      },

      postCreate: function () {
        this.inherited(arguments);

        this.own(
          on(this._sourcesNode, a11yclick, this._toggleOpenState.bind(this)),

          watchUtils.init(this.viewModel, "view.size", this._updateStatus),
          watchUtils.init(this.viewModel, "attributionText", this._attributionTextWatcher)
        );
      },

      //--------------------------------------------------------------------------
      //
      //  Variables
      //
      //--------------------------------------------------------------------------

      _css: CSS,

      //--------------------------------------------------------------------------
      //
      //  Properties
      //
      //--------------------------------------------------------------------------

      properties: /** @lends module:esri/widgets/Attribution.prototype */ {

        //----------------------------------
        //  view
        //----------------------------------

        /**
         * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
         *
         * @type {(module:esri/views/SceneView|module:esri/views/MapView)}
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
         * {@link module:esri/widgets/Attribution/AttributionViewModel} class to access
         * all properties and methods on the widget.
         *
         * @name viewModel
         * @instance
         * @autocast
         * @type {module:esri/widgets/Attribution/AttributionViewModel}
         */
        viewModel: {
          type: AttributionViewModel
        }

      },

      //--------------------------------------------------------------------------
      //
      //  Private Methods
      //
      //--------------------------------------------------------------------------

      _attributionTextWatcher: function (value) {
        this._sourcesNode.innerHTML = value;
        this._updateStatus();
      },

      _updateStatus: function () {
        var domNode       = this.domNode,
            sourcesNode   = this._sourcesNode,
            currentlyOpen = domClass.contains(domNode, CSS.open);

        domClass.remove(domNode, CSS.open);
        domClass.remove(sourcesNode, CSS.sourcesOpen);
        domClass.remove(sourcesNode, CSS.interactive);

        domAttr.remove(sourcesNode, "role");
        domAttr.remove(sourcesNode, "tabIndex");

        if (this._hasOverflowingText()) {
          domClass.add(sourcesNode, CSS.interactive);

          if (currentlyOpen) {
            domClass.add(domNode, CSS.open);
            domClass.add(sourcesNode, CSS.sourcesOpen);
          }

          domAttr.set(sourcesNode, {
            tabIndex: 0,
            role: "button"
          });
        }
      },

      _hasOverflowingText: function() {
        var sourcesNode = this._sourcesNode;

        return sourcesNode.scrollWidth > sourcesNode.clientWidth;
      },

      _toggleOpenState: function() {
        if (domClass.contains(this._sourcesNode, CSS.interactive)) {
          domClass.toggle(this.domNode, CSS.open);
        }
        this._updateStatus();
      }

    });

  return Attribution;

});
