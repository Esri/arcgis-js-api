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
 * Provides two simple buttons for toggling the
 * {@link module:esri/widgets/NavigationToggle/NavigationToggleViewModel#navigationMode navigation mode}
 * of a {@link module:esri/views/SceneView}. Note that this widget is not designed
 * for 2D mouse interaction in a {@link module:esri/views/MapView}.
 *
 * ![navigation-toggle](../assets/img/apiref/widgets/navigation-toggle.png)
 *
 * The default navigation mode of the {@link module:esri/views/SceneView} is always
 * `pan`. The various mouse interations of this mode are outlined
 * [here](../api-reference/esri-views-SceneView.html#navigation).
 * The alternate navigation mode to toggle to is `rotate`. This allows the user to
 * rotate the view with a mouse drag and pan the view with a right-click and drag
 * gesture.
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 * See the example below.
 *
 * @module esri/widgets/NavigationToggle
 * @since 4.0
 *
 * @see module:esri/widgets/NavigationToggle/NavigationToggleViewModel
 * @see [SceneView navigation](../api-reference/esri-views-SceneView.html)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 *
 * @example
 * // creates a new instance of the NavigationToggle widget
 * var navigationToggle = new NavigationToggle({
 *   view: view
 * });
 *
 * // and adds it to the top right of the view
 * view.ui.add(navigationToggle, "top-right");
 */
define([
  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/on",

  "dijit/_TemplatedMixin",
  "dijit/a11yclick",

  "../core/watchUtils",

  "./support/viewModelWiring",

  "./Widgette",
  "./NavigationToggle/NavigationToggleViewModel",

  "dojo/i18n!./NavigationToggle/nls/NavigationToggle",

  "dojo/text!./NavigationToggle/templates/NavigationToggle.html"
],
function (
  domClass, domAttr, on,
  _TemplatedMixin, a11yclick,
  watchUtils,
  viewModelWiring,
  Widget, NavigationToggleViewModel,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-navigation-toggle",
    button: "esri-navigation-toggle__button esri-widget-button",
    activeButton: "esri-navigation-toggle__button--active",
    panButton: "esri-navigation-toggle__button--pan",
    rotateButton: "esri-navigation-toggle__button--rotate",
    isLayoutHorizontal: "esri-navigation-toggle--horizontal",
    // icons
    rotationIcon: "esri-icon-rotate",
    panIcon: "esri-icon-pan",
    // common
    disabled: "esri-disabled"
  };

  var LAYOUT_MODES = {
    vertical: "vertical",
    horizontal: "horizontal"
  };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @constructor module:esri/widgets/NavigationToggle
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var navigationToggle = new NavigationToggle({
   *   view: view
   * });
   */
  return Widget.createSubclass([_TemplatedMixin],
  /** @lends module:esri/widgets/NavigationToggle.prototype */
  {

    declaredClass: "esri.widgets.NavigationToggle",

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
        watchUtils.init(this, "viewModel.state", this._handleState),
        watchUtils.init(this, "viewModel.navigationMode", this._applyPrimaryButton),
        on(this.domNode, a11yclick, this.viewModel.toggle)
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

    properties: /** @lends module:esri/widgets/NavigationToggle.prototype */ {

      //----------------------------------
      //  layout
      //----------------------------------

      /**
       * Sets the layout of the widget to either `horizontal` or `vertical`. See the
       * table below for a list of possible values.
       *
       * Possible Value | Example
       * ---------------|--------
       * vertical | ![navigation-toggle](../assets/img/apiref/widgets/navigation-toggle.png)
       * horizontal | ![navigation-toggle-horizontal](../assets/img/apiref/widgets/navigation-toggle-horizontal.png)
       *
       * @type {string}
       * @default vertical
       *
       * @example
       * // creates a new instance of the NavigationToggle widget
       * var navigationToggle = new NavigationToggle({
     *   view: view,
     *   layout: "horizontal"  // makes the layout horizontal
     * });
       */
      layout: {
        value: LAYOUT_MODES.vertical,

        set: function(value) {
          if (value !== LAYOUT_MODES.horizontal) {
            value = LAYOUT_MODES.vertical;
          }

          domClass.toggle(this.domNode, CSS.isLayoutHorizontal, value === LAYOUT_MODES.horizontal);

          this._set("layout", value);
        }
      },

      //----------------------------------
      //  view
      //----------------------------------

      /**
       * A reference to the {@link module:esri/views/Scene SceneView}. Set this to link the widget to a specific view.
       *
       * @name view
       * @instance
       *
       * @type {module:esri/views/SceneView}
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
       * {@link module:esri/widgets/NavigationToggle/NavigationToggleViewModel} class to access
       * all properties and methods on the widget.
       *
       * @name viewModel
       * @instance
       * @type {module:esri/widgets/NavigationToggle/NavigationToggleViewModel}
       * @autocast
       */
      viewModel: {
        type: NavigationToggleViewModel
      }

    },

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    /**
     * Toggles the navigation mode of the [view](#view) from `pan` to `rotate` or
     * vice versa.
     *
     * @method toggle
     * @instance
     */
    toggle: viewModelWiring.createMethodDelegate("toggle"),

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _handleState: function (value) {
      var disabled = value === "disabled";

      domClass.toggle(this.domNode, CSS.disabled, disabled);
      domAttr.set(this.domNode, "tabindex", disabled ? "" : 0);
    },

    _applyPrimaryButton: function (navigationMode) {
      var panSelected = navigationMode === "pan";

      domClass.toggle(this._panButtonNode, CSS.activeButton, panSelected);
      domClass.toggle(this._rotateButtonNode, CSS.activeButton, !panSelected);
    }

  });
});
