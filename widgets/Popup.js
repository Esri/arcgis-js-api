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
 * The popup widget allows users to view content from feature attributes. Popups enhance web applications
 * by providing users with a simple way to interact with and view attributes in a layer.
 * They play an important role in relaying information to the user, which improves the storytelling capabilities of the application.
 *
 * All {@link module:esri/views/View Views} contain a default popup.
 * This popup can display generic content, which is set in its [title](#title)
 * and [content](#content) properties.
 * When  content is set directly on the Popup instance it is not tied to a specific feature or layer.
 *
 * [![popup-basic-example](../assets/img/apiref/widgets/popup-basic.png)](../sample-code/sandbox/sandbox.html?sample=get-started-popup)
 *
 * In the image above, the text "Marriage in NY, Zip Code: 11385" is the popup's `title`. The remaining text is
 * its `content`. A dock button ![popup-dock-btn](../assets/img/apiref/widgets/popup-dock.png) may also be available in the
 * top right corner of the popup. This allows the user to dock the popup to one of the sides or corners of the view.
 * The options for docking may be set in the [dockOptions](#dockOptions) property.
 *
 * Popups can also contain [actions](#actions) that act like buttons,
 * which execute a function defined by the developer when clicked.
 * By default, every popup has a "Zoom in" action ![popupTemplate-zoom-action](../assets/img/apiref/widgets/popupTemplate-zoom-action.png)
 * that allows users to zoom to the selected feature. See the [actions](#actions)
 * property for information about adding custom actions to a popup.
 *
 * In most cases this module will not need to be loaded into your application because the view contains a default instance of popup.
 *
 * {@link module:esri/PopupTemplate} is closely related to Popup, but is more specific to {@link module:esri/layers/Layer layers}
 * and {@link module:esri/Graphic graphics}. It allows you to define custom title and content templates based on the source of the
 * [selected feature](#selectedFeature). When a layer or a graphic has a defined
 * PopupTemplate, the popup will display the content
 * defined in the PopupTemplate when the feature is clicked. The content may contain field values from the attributes of the [selected feature](#selectedFeature).
 *
 * Custom PopupTemplates may also be assigned directly to a popup by setting {@link module:esri/Graphic graphics} on the
 * [features](#features) property. For more information about Popup
 * and how it relates to {@link module:esri/PopupTemplate} see the samples listed below.
 *
 * @module esri/widgets/Popup
 * @since 4.0
 *
 * @see [Popup.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Popup.js)
 * @see [Popup.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Popup.scss)
 * @see module:esri/PopupTemplate
 * @see {@link module:esri/views/View#popup View.popup}
 * @see [Get started with popups](../sample-code/get-started-popup/index.html)
 * @see [Get started with PopupTemplate](../sample-code/get-started-popupTemplate/index.html)
 * @see [Sample - Dock positions with popup](../sample-code/popup-docking-position/index.html)
 * @see [Sample - Popup actions](../sample-code/popup-actions/index.html)
 * @see [Sample - Custom popup actions per feature](../sample-code/popup-custom-action/index.html)
 * @see [Guide - Esri Icon Font](../guide/esri-icon-font/index.html)
 * @see module:esri/widgets/Popup/PopupViewModel
 */

/**
 * Fires after the user clicks on an [action](#actions) inside a popup. This
 * event may be used to define a custom function to execute when particular
 * actions are clicked. See the example below for details of how this works.
 *
 * @event module:esri/widgets/Popup#trigger-action
 * @property {Object} action - The action clicked by the user. For a description
 *                    of this object and a specification of its properties,
 *                    see the [actions](#actions) property of this class.
 *
 * @see [actions](#actions)
 * @example
 * // Defines an action to zoom out from the selected feature
 * var zoomOutAction = {
 *   // This text is displayed as a tooltip
 *   title: "Zoom out",
 *   // The ID used to reference this action in the event handler
 *   id: "zoom-out",
 *   // Sets the icon font used to style the action button
 *   className: "esri-icon-zoom-out-magnifying-glass"
 * };
 * // Adds the custom action to the popup.
 * view.popup.actions.push(zoomOutAction);
 *
 * // Fires each time an action is clicked
 * view.popup.on("trigger-action", function(event){
 *   // If the zoom-out action is clicked, then execute the following code
 *   if(event.action.id === "zoom-out"){
 *     // Zoom out two levels (LODs)
 *     view.goTo({
 *       center: view.center,
 *       zoom: view.zoom - 2
 *     });
 *   }
 * });
 */
define([
  "./support/viewModelWiring",

  "./Widgette",

  "./Popup/PopupViewModel",

  "../core/HandleRegistry",
  "../core/watchUtils",

  "../views/2d/viewpointUtils",

  "dijit/a11yclick",
  "dijit/_TemplatedMixin",

  "dojo/keys",

  "dojo/on",

  "dojo/query",

  "dojo/Deferred",

  "dojo/i18n!./Popup/nls/Popup",

  "dojo/text!./Popup/templates/Popup.html",

  "../core/lang",

  "dojo/_base/lang",

  "dojo/dom-class",
  "dojo/dom-attr",
  "dojo/dom-construct",
  "dojo/dom-geometry",
  "dojo/dom-style",

  "./Popup/PopupRenderer",
  "./Popup/PopupRendererViewModel",

  "./Spinner",
  "./Message",
  "require"
], function (
  viewModelWiring,
  Widget,
  PopupViewModel,
  HandleRegistry, watchUtils,
  viewpointUtils,
  a11yclick, _TemplatedMixin,
  keys,
  on,
  query,
  Deferred,
  i18n,
  templateString,
  esriLang,
  lang,
  domClass, domAttr, domConstruct, domGeometry, domStyle,
  PopupRenderer, PopupRendererViewModel,
  Spinner, Message,
  require
) {

  //--------------------------------------------------------------------------
  //
  //  Static Variables
  //
  //--------------------------------------------------------------------------

  var DEFAULT_ACTION_IMAGE = require.toUrl("./Popup/images/default-action.svg");

  var CSS = {
    // common
    hidden: "esri-hidden",
    invisible: "esri-invisible",
    iconText: "esri-icon-font-fallback-text",
    iconLeftTriangleArrow: "esri-icon-left-triangle-arrow",
    iconRightTriangleArrow: "esri-icon-right-triangle-arrow",
    iconDockToTop: "esri-icon-maximize",
    iconDockToBottom: "esri-icon-dock-bottom",
    iconDockToLeft: "esri-icon-dock-left",
    iconDockToRight: "esri-icon-dock-right",
    iconClose: "esri-icon-close",
    iconUndock: "esri-icon-minimize",
    iconPaginationMenu: "esri-icon-layer-list",
    iconCheckMark: "esri-icon-check-mark",
    iconLoading: "esri-rotating esri-icon-loading-indicator",
    iconZoom: "esri-icon-zoom-in-magnifying-glass",
    // base
    base: "esri-popup",
    // containers
    container: "esri-popup__position-container",
    main: "esri-popup__main-container",
    loadingContainer: "esri-popup__loading-container",
    // global modifiers
    shadow: "esri-popup--shadow",
    showDock: "esri-popup--dock-button-visible",
    showContent: "esri-popup--content-visible",
    showFooter: "esri-popup--footer-visible",
    showTitle: "esri-popup--title-visible",
    showPagination: "esri-popup--pagination-visible",
    hasPopupRenderer: "esri-popup--has-popup-renderer",
    hasPromiseFeatures: "esri-popup--has-promise-features",
    isDocked: "esri-popup--is-docked",
    isDockedTopLeft: "esri-popup--is-docked-top-left",
    isDockedTopCenter: "esri-popup--is-docked-top-center",
    isDockedTopRight: "esri-popup--is-docked-top-right",
    isDockedBottomLeft: "esri-popup--is-docked-bottom-left",
    isDockedBottomCenter: "esri-popup--is-docked-bottom-center",
    isDockedBottomRight: "esri-popup--is-docked-bottom-right",
    canDockToLeft: "esri-popup--can-dock-to-left",
    canDockToRight: "esri-popup--can-dock-to-right",
    canDockToTop: "esri-popup--can-dock-to-top",
    canDockToBottom: "esri-popup--can-dock-to-bottom",
    hasPaginationMenuOpen: "esri-popup--feature-menu-open",
    alignTop: "esri-popup--top-aligned",
    alignBottom: "esri-popup--bottom-aligned",
    alignLeftTop: "esri-popup--left-top-aligned",
    alignLeftBottom: "esri-popup--left-bottom-aligned",
    alignRightTop: "esri-popup--right-top-aligned",
    alignRightBottom: "esri-popup--right-bottom-aligned",
    hasPendingPromises: "esri-popup--has-pending-promises",
    isPendingPromisesResult: "esri-popup--is-pending-promises-result",
    hasFeatureUpdated: "esri-popup--feature-updated",
    // header and content
    header: "esri-popup__header",
    headerButtons: "esri-popup__header-buttons",
    headerTitle: "esri-popup__header-title",
    content: "esri-popup__content",
    footer: "esri-popup__footer",
    // buttons
    button: "esri-popup__button",
    buttonDock: "esri-popup__button--dock",
    // icons
    icon: "esri-popup__icon",
    iconDock: "esri-popup__icon--dock-icon",
    // actions
    actions: "esri-popup__actions",
    action: "esri-popup__action",
    actionImage: "esri-popup__action-image",
    actionText: "esri-popup__action-text",
    // pointer
    pointer: "esri-popup__pointer",
    pointerDirection: "esri-popup__pointer-direction",
    // pagination
    pagination: "esri-popup__pagination",
    paginationPrevious: "esri-popup__pagination-previous",
    paginationNext: "esri-popup__pagination-next",
    paginationPreviousIconLTR: "esri-popup__pagination-previous-icon",
    paginationPreviousIconRTL: "esri-popup__pagination-previous-icon--rtl",
    paginationNextIconLTR: "esri-popup__pagination-next-icon",
    paginationNextIconRTL: "esri-popup__pagination-next-icon--rtl",
    paginationText: "esri-popup__pagination-page-text",
    paginationDocked: "esri-popup__pagination-docked",
    paginationDockedButtons: "esri-popup__pagination-docked-buttons",
    featureMenu: "esri-popup__feature-menu",
    featureMenuList: "esri-popup__feature-menu-list",
    featureMenuItem: "esri-popup__feature-menu-item",
    featureMenuViewport: "esri-popup__feature-menu-viewport",
    featureMenuHeader: "esri-popup__feature-menu-header",
    featureMenuNote: "esri-popup__feature-menu-note",
    featureMenuSelected: "esri-popup__feature-menu-item--selected",
    featureMenuButton: "esri-popup__feature-menu-button",
    featureMenuTitle: "esri-popup__feature-menu-title"
  };

  var ZOOM_TO_ACTION_ID = "zoom-to";

  var ALIGNMENT_POSITIONS = {
    top: "top",
    leftTop: "left-top",
    leftBottom: "left-bottom",
    bottom: "bottom",
    rightTop: "right-top",
    rightBottom: "right-bottom"
  };

  var DOCK_POSITIONS = {
    auto: "auto",
    topLeft: "top-left",
    topCenter: "top-center",
    topRight: "top-right",
    bottomLeft: "bottom-left",
    bottomCenter: "bottom-center",
    bottomRight: "bottom-right"
  };

  var DOCK_OPTIONS = {
    buttonEnabled: true,
    position: DOCK_POSITIONS.auto,
    breakpoint: {
      width: 544
    }
  };

  var REGISTRY_KEYS = {
    popupRenderer: "popup-renderer",
    acions: "actions",
    actionsChange: "actions-change",
    paginationTitles: "pagination-titles",
    view: "view"
  };

  var DATA_ATTRIBUTES = {
    actionIndex: "data-action-index",
    featureIndex: "data-feature-index",
    layerTitle: "data-layer-title",
    layerId: "data-layer-id"
  };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @mixes module:esri/core/Evented
   * @constructor module:esri/widgets/Popup
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   */
  var Popup = Widget.createSubclass([_TemplatedMixin], /** @lends module:esri/widgets/Popup.prototype */ {

    declaredClass: "esri.widgets.Popup",

    baseClass: CSS.base,

    templateString: templateString,

    /**
     * This is a class that contains all the logic
     * (properties and methods) that controls this widget's behavior. See the
     * {@link module:esri/widgets/Popup/PopupViewModel} class to access
     * all properties and methods on the widget.
     *
     * @name viewModel
     * @instance
     * @type {module:esri/widgets/Popup/PopupViewModel}
     * @autocast
     */

    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------

    constructor: function () {
      this._handleRegistry = new HandleRegistry();
      // temporary storage node for IE. Do not remove.
      this._contentStorage = domConstruct.create("div");
    },

    // bind listener for button to action
    postCreate: function () {
      var _self = this;
      this.inherited(arguments);
      var viewModel = this.viewModel;
      // Popup event listeners
      this.own(

        watchUtils.whenTrue(viewModel, "view.ready", function () {
          var viewModel = this.viewModel;
          this._wireUpView(viewModel.view);
        }.bind(this)),

        watchUtils.init(viewModel, "pendingPromisesCount,featureCount,promises,location", function () {
          var viewModel = this.viewModel;
          this._displayPendingFeaturesStatus(viewModel.pendingPromisesCount, viewModel.featureCount, viewModel.promises, viewModel.location);
        }.bind(this)),

        watchUtils.init(viewModel, "features", this._updateFeatures.bind(this)),

        watchUtils.init(viewModel, "selectedFeatureIndex,selectedFeature", function () {
          var viewModel = this.viewModel;
          this._updateSelectedFeature(viewModel.selectedFeature);
          this._updateActions(viewModel.actions, viewModel.features, viewModel.selectedFeature);
          this._updatePageText(viewModel.features, viewModel.selectedFeatureIndex);
          this._createPaginationNodes(viewModel.features, viewModel.selectedFeatureIndex);
          // scroll to the top of body content.
          this._bodyContentNode.scrollTop = 0;
        }.bind(this)),

        watchUtils.init(viewModel, "title", function (title) {
          this._updateTitle(title);
          this.reposition();
        }.bind(this)),

        watchUtils.init(viewModel, "actions", function (actions) {
          var viewModel = this.viewModel;
          this._updateActions(actions, viewModel.features, viewModel.selectedFeature);
          this._actionChangeListener(actions);
        }.bind(this)),

        watchUtils.init(viewModel, "content", function (content) {
          this._updateContent(content);
          this.reposition();
        }.bind(this)),

        watchUtils.init(viewModel, "location", function (location) {
          this._togglePopupLocationRepositioning(this.visible);
          this._autoAlign();
          this.reposition();
        }.bind(this)),

        // dock a11yclick
        on(this._dockNode, a11yclick, this._toggleDock.bind(this)),

        // close a11yclick
        on(this._closeNode, a11yclick, this.close.bind(this)),

        // previous a11yclick
        on(this._previousNode, a11yclick, viewModel.previous.bind(viewModel)),
        on(this._previousDockedNode, a11yclick, viewModel.previous.bind(viewModel)),

        // next a11yclick
        on(this._nextNode, a11yclick, viewModel.next.bind(viewModel)),
        on(this._nextDockedNode, a11yclick, viewModel.next.bind(viewModel)),

        // menu a11yclick
        on(this._pageMenuNode, a11yclick, this._togglePageMenu.bind(this)),
        on(this._pageMenuDockedNode, a11yclick, this._togglePageMenu.bind(this)),
        on(this._pageMenuInfoNode, a11yclick, this._togglePageMenu.bind(this)),

        // menu item a11yclick
        on(this._paginationNode, on.selector("li", a11yclick), function () {
          _self._selectFeature(this);
        }),

        // menu item keyup
        on(this._paginationNode, on.selector("li", "keyup"), function (evt) {
          _self._keyupFeature(evt, this);
        }),

        // action click
        on(this._actionsNode, on.selector("[" + DATA_ATTRIBUTES.actionIndex + "]", a11yclick), function () {
          _self._actionEvent(this);
        }),

        // action click listener for default actions
        on(viewModel, "trigger-action", function (evt) {
          // zoom-to action
          if (evt.action && evt.action.id === ZOOM_TO_ACTION_ID) {
            this.viewModel.zoomToLocation();
          }
        }.bind(this))

      );

      viewModelWiring.setUpEventDelegates(this, "trigger-action");
    },

    destroy: function () {
      // destroy view widgets
      this._destroyPopupRendererVMs();
      this._destroyMessage();
      this._destroySpinner();
      this._destroyPopupRenderer();
      this._handleRegistry.destroy();
      this._handleRegistry = null;
    },

    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------

    properties: /** @lends module:esri/widgets/Popup.prototype */ {

      //----------------------------------
      //  _popupRenderer
      //----------------------------------

      _popupRenderer: {
        readOnly: true,
        value: null
      },

      //----------------------------------
      //  actions
      //----------------------------------

      /**
       * Defines actions that may be executed by clicking the icon
       * or image symbolizing them in the popup. By default, every popup has a `zoom-to`
       * action styled with a magnifying glass icon
       * ![popupTemplate-zoom-action](../assets/img/apiref/widgets/popupTemplate-zoom-action.png).
       * When this icon is clicked, the view zooms in four LODs and centers on the selected feature.
       *
       * You may override this action by removing it from the `actions` array or by setting the
       * {@link module:esri/PopupTemplate#overwriteActions overwriteActions} property to `true` in a
       * {@link module:esri/PopupTemplate}. The order of each action in the popup is the order in which
       * they appear in the array.
       *
       * The [trigger-action](#event:trigger-action) event fires each time an action in the popup is clicked.
       * This event should be used to execute custom code for each action clicked. For example, if you would
       * like to add a `zoom-out` action to the popup that zooms the view out several LODs, you would
       * define the zoom-out code in a separate function. Then you would call the custom `zoom-out` function
       * in the [trigger-action](#event:trigger-action) event handler. See the sample code
       * snippet below for more details on how this works.
       *
       * Actions are defined with the properties listed in the {@link module:esri/support/Action} class.
       *
       * @name actions
       * @instance
       *
       * @type {module:esri/core/Collection}
       * @see [Sample - Popup actions](../sample-code/popup-actions/index.html)
       * @see [Sample - Custom popup actions per feature](../sample-code/popup-custom-action/index.html)
       *
       * @example
       * // Defines an action to zoom out from the selected feature
       * var zoomOutAction = {
       *   // This text is displayed as a tooltip
       *   title: "Zoom out",
       *   // The ID by which to reference the action in the event handler
       *   id: "zoom-out",
       *   // Sets the icon font used to style the action button
       *   className: "esri-icon-zoom-out-magnifying-glass"
       * };
       * // Adds the custom action to the popup.
       * view.popup.actions.push(zoomOutAction);
       *
       * // The function to execute when the zoom-out action is clicked
       * function zoomOut() {
       *   // in this case the view zooms out two LODs on each click
       *   view.goTo({
       *     center: view.center,
       *     zoom: view.zoom - 2
       *   });
       * }
       *
       * // This event fires for each click on any action
       * view.popup.on("trigger-action", function(event){
       *   // If the zoom-out action is clicked, fire the zoomOut() function
       *   if(event.action.id === "zoom-out"){
       *     zoomOut();
       *   }
       * });
       */
      actions: {
        aliasOf: "viewModel.actions"
      },

      //----------------------------------
      //  alignment
      //----------------------------------

      /**
       * Position of the popup in relation to the selected feature.
       *
       * **Known Values:** top | bottom | left | right
       *
       * @type {String}
       * @see [alignmentPositions](#alignmentPositions)
       * @default
       * @ignore
       *
       * @example
       * // The popup will display to the left of the feature
       * view.popup.alignment = "left";
       */
      alignment: {
        value: "top",

        set: function(value) {
          this._set("alignment", value);
          this.reposition();
        }
      },

      //----------------------------------
      //  autoPanEnabled
      //----------------------------------

      /**
       * Indicates whether to automatically pan the map to view the full popup when it opens outside
       * the bounds of the {@link module:esri/views/View}.
       *
       * @type {Boolean}
       * @default
       * @ignore
       */
      autoPanEnabled: true,

      //----------------------------------
      //  autoAlignmentEnabled
      //----------------------------------

      /**
       *
       * @type {Boolean}
       * @default
       * @ignore
       */
      autoAlignmentEnabled: false,

      //----------------------------------
      //  content
      //----------------------------------

      /**
       * The content of the popup. When set directly on the Popup, this content is
       * static and cannot use fields to set content templates. To set a template
       * for the content based on field or attribute names, see
       * {@link module:esri/PopupTemplate#content PopupTemplate.content}.
       *
       * @name content
       * @instance
       *
       * @type {string | Node}
       * @see [Sample - Popup Docking](../sample-code/popup-docking-position/index.html)
       *
       * @example
       * // This sets generic instructions in the popup that will always be displayed
       * // unless it is overridden by a PopupTemplate
       * view.popup.content = "Click a feature on the map to view its attributes";
       */
      content: {
        aliasOf: "viewModel.content"
      },

      //----------------------------------
      //  closeOnViewChangeEnabled
      //----------------------------------

      /**
       * TODO
       * @ignore
       */
      closeOnViewChangeEnabled: false,

      //----------------------------------
      //  currentDockPosition
      //----------------------------------

      /**
       * The position in the {@link module:esri/views/View} at which to the popup is dockEnabled.
       *
       * **Known Values:** top-left | top-center | top-right | bottom-left | bottom-center | bottom-right
       *
       * @type {string}
       * @readonly
       */
      currentDockPosition: {
        readOnly: true,
        value: null
      },

      //----------------------------------
      //  dockOptions
      //----------------------------------

      /**
       * Docking the popup allows for a better user experience, particularly when opening
       * popups in apps on mobile devices. When a popup is "dockEnabled" it means the popup no
       * longer points to the [selected feature](#selectedFeature) or the [location](#location)
       * assigned to it. Rather it is placed in one of the corners of the view or to the top or bottom
       * of it. This property allows the developer to set various options for docking the popup.
       *
       * See the object specification table below to override default docking properties on the popup.
       *
       * @type {Object}
       * @see [Sample - Popup docking](../sample-code/popup-docking-position/index.html)
       *
       * @property {Object | boolean} breakpoint - Defines the dimensions of the {@link module:esri/views/View}
       *                        at which to dock the popup. Set to `false` to disable docking at a breakpoint.
       *                        <br><br>**Default:** true
       * @property {number} breakpoint.width - The maximum width of the {@link module:esri/views/View}
       *                        at which the popup will be set to dockEnabled automatically.
       *                        <br><br>**Default:** 544
       * @property {number} breakpoint.height - The maximum height of the {@link module:esri/views/View}
       *                        at which the popup will be set to dockEnabled automatically.
       *                        <br><br>**Default:** 544
       * @property {boolean} buttonEnabled - If `true`, displays the dock button. If `false`, hides the dock
       *                         button from the popup.
       * @property {string | function} position - The position in the view at which to dock the popup.
       *                        Can be set as either a string or function. See the table below for known
       *                        string values and their position in the view based on the view's size.
       *                        <br><br>
       * Known Value | View size > breakpoint | View size < breakpoint
       * --------------- | ------------------------------- | -------------
       * auto | top-right | bottom 100%
       * top-left | top-left | top 100%
       * top-center | top-center | top 100%
       * top-right | top-right | top 100%
       * bottom-left | bottom-left | bottom 100%
       * bottom-center | bottom-center | bottom 100%
       * bottom-right | bottom-right | bottom 100%
       *
       * **Default:** auto
       *
       * @example
       * view.popup.dockOptions = {
       *   // Disable the dock button so users cannot undock the popup
       *   buttonEnabled: false,
       *   // Dock the popup when the size of the view is less than or equal to 600x1000 pixels
       *   breakpoint: {
       *     width: 600,
       *     height: 1000
       *   }
       * };
       */
      dockOptions: {
        value: DOCK_OPTIONS,

        set: function(value) {
          var dockOptionDefaults = lang.clone(DOCK_OPTIONS);
          var breakpoints = this.viewModel.get("view.breakpoints");
          var viewDockSize = {};
          if (breakpoints) {
            viewDockSize.width = breakpoints.xsmall;
            viewDockSize.height = breakpoints.xsmall;
          }
          var mixed = lang.mixin({}, dockOptionDefaults, value);
          var breakpointDefaults = lang.mixin({}, dockOptionDefaults.breakpoint, viewDockSize);
          if (mixed.breakpoint === true) {
            mixed.breakpoint = breakpointDefaults;
          }
          // mixin breakpoint defaults
          else if (typeof mixed.breakpoint === "object") {
            mixed.breakpoint = lang.mixin({}, breakpointDefaults, mixed.breakpoint);
          }
          this._set("dockOptions", mixed);
          this._toggleDockButton(mixed);
        }
      },

      //----------------------------------
      //  dockEnabled
      //----------------------------------

      /**
       * Indicates whether the placement of the popup is docked to the side of the view.
       *
       * Docking the popup allows for a better user experience, particularly when opening
       * popups in apps on mobile devices. When a popup is "dockEnabled" it means the popup no
       * longer points to the [selected feature](#selectedFeature) or the [location](#location)
       * assigned to it. Rather it is attached to a side, the top, or the bottom of the view.
       *
       * See [dockOptions](#dockOptions) to override default options related to docking the popup.
       *
       * @type {Boolean}
       * @default false
       * @see [Sample - Popup docking](../sample-code/popup-docking-position/index.html)
       *
       * @example
       * // The popup will automatically be dockEnabled when made visible
       * view.popup.dockEnabled = true;
       */
      dockEnabled: {
        value: false,

        set: function(value) {
          this._set("dockEnabled", value);
          this._togglePopupDocking(value);
          this._togglePopupLocationRepositioning(this.visible);
          this._autoAlign();
          this.reposition();
        }
      },

      //----------------------------------
      //  featureCount
      //----------------------------------

      /**
       * The number of selected [features](#features) available to the popup.
       *
       * @name featureCount
       * @instance
       *
       * @type {Number}
       * @default 0
       * @readonly
       */
      featureCount: {
        aliasOf: "viewModel.featureCount"
      },

      //----------------------------------
      //  features
      //----------------------------------

      /**
       * An array of features associated with the popup. Each graphic in this array must
       * have a valid {@link module:esri/PopupTemplate} set. They may share the same
       * {@link module:esri/PopupTemplate} or have unique
       * {@link module:esri/PopupTemplate PopupTemplates} depending on their attributes.
       * The [content](#content) and [title](#title)
       * of the poup is set based on the `content` and `title` properties of each graphic's respective
       * {@link module:esri/PopupTemplate}.
       *
       * When more than one graphic exists in this array, the current content of the
       * Popup is set based on the value of the [selected feature](#selectedFeature).
       *
       * This value is `null` if no features are associated with the popup.
       *
       * @name features
       * @instance
       *
       * @type {module:esri/Graphic[]}
       *
       * @example
       * // When setting the features property, the graphics pushed to this property
       * // must have a PopupTemplate set.
       * var g1 = new Graphic();
       * g1.popupTemplate = new PopupTemplate({
       *   title: "Results title",
       *   content: "Results: {ATTRIBUTE_NAME}"
       * });
       * // Set the graphics as an array to the popup instance. The content and title of
       * // the popup will be set depending on the PopupTemplate of the graphics.
       * // Each graphic may share the same PopupTemplate or have a unique PopupTemplate
       * var graphics = [g1, g2, g3, g4, g5];
       * view.popup.features = graphics;
       */
      features: {
        aliasOf: "viewModel.features"
      },

      //----------------------------------
      //  location
      //----------------------------------

      /**
       * Point used to position the popup. This is automatically set when viewing the
       * popup by selecting a feature. If using the Popup to display content not related
       * to features in the map, such as the results from a task, then you must set this
       * property before making the popup [visible](#visible) to the user.
       *
       * @name location
       * @instance
       *
       * @type {module:esri/geometry/Point}
       * @autocast
       *
       * @see [Get started with popups](../sample-code/get-started-popup/index.html)
       *
       * @example
       * // Sets the location of the popup to the center of the view
       * view.popup.location = view.center;
       * // Displays the popup
       * view.popup.visible = true;
       *
       * @example
       * // Sets the location of the popup to a specific place (using autocast)
       * // Note: using latlong only works if view is in Web Mercator or WGS84 spatial reference.
       * view.popup.location = {latitude: 34.0571, longitude: -117.1968};
       *
       * @example
       * // Sets the location of the popup to the location of a click on the view
       * view.on("click", function(event){
       *   view.popup.location = event.mapPoint;
       *   // Displays the popup
       *   view.popup.visible = true;
       * });
       */
      location: {
        aliasOf: "viewModel.location"
      },

      //----------------------------------
      //  messageEnabled
      //----------------------------------

      /**
       * Indicates whether to display a message that no features
       * were found when an asynchronous task returns zero results.
       *
       * @type {boolean}
       * @default
       * @ignore
       */
      messageEnabled: {
        value: true,

        set: function(value) {
          this._set("messageEnabled", value);
          this._createMessage(value, this.viewModel.view);
        }
      },

      //----------------------------------
      //  paginationEnabled
      //----------------------------------

      /**
       * Shows pagination for the popup if available. This allows the user to
       * scroll through various [selected features](#features) using either
       * arrows
       *
       * ![popup-pagination-arrows](../assets/img/apiref/widgets/popup-pagination-arrows.png)
       *
       * or a menu.
       *
       * ![popup-feature-menu](../assets/img/apiref/widgets/popup-pagination-menu.png)
       *
       * @type {Boolean}
       * @default
       * @ignore
       */
      paginationEnabled: {
        value: true,

        set: function(value) {
          var viewModel = this.viewModel;
          this._set("paginationEnabled", value);
          this._updatePagination(viewModel.features, viewModel.selectedFeatureIndex);
          this._updateFooterVisibility(viewModel.features, viewModel.actions);
          this.reposition();
        }
      },

      //----------------------------------
      //  promises
      //----------------------------------

      /**
       * An array of pending Promises that have not yet been fulfilled. If there are
       * no pending promises, the value is `null`. When the pending promises are
       * resolved they are removed from this array and the features they return
       * are pushed into the [features](#features) array.
       *
       * @name promises
       * @instance
       *
       * @type {Promise[]}
       */
      promises: {
        aliasOf: "viewModel.promises"
      },

      //----------------------------------
      //  rendered
      //----------------------------------

      /**
       * @todo doc rendered property
       * @type {boolean}
       * @readonly
       */
      rendered: {
        dependsOn: [
          "viewModel.content",
          "_popupRenderer.rendered"
        ],
        get: function () {
          var rendered = this._contentIsPopupRenderer() && this.get("_popupRenderer.rendered");
          return this._popupRenderer ? rendered : true;
        },
        readOnly: true
      },

      //----------------------------------
      //  selectedFeature
      //----------------------------------

      /**
       * The selected feature accessed by the popup. The content of the Popup is
       * determined based on the {@link module:esri/PopupTemplate} assigned to
       * this feature.
       *
       * @name selectedFeature
       * @instance
       *
       * @type {module:esri/Graphic}
       * @readonly
       */
      selectedFeature: {
        aliasOf: "viewModel.selectedFeature"
      },

      //----------------------------------
      //  selectedFeatureIndex
      //----------------------------------

      /**
       * Index of the feature that is [selected](#selectedFeature). When [features](#features) are set,
       * the first index is automatically selected.
       *
       * @name selectedFeatureIndex
       * @instance
       *
       * @type {Number}
       */
      selectedFeatureIndex: {
        aliasOf: "viewModel.selectedFeatureIndex"
      },

      //----------------------------------
      //  spinnerEnabled
      //----------------------------------

      /**
       * Indicates whether to display a spinner at the popup location prior to its
       * display when it has pending promises.
       *
       * @type {boolean}
       * @default
       * @ignore
       */
      spinnerEnabled: {
        value: true,

        set: function(value) {
          this._set("spinnerEnabled", value);
          this._createSpinner(value, this.viewModel.view);
        }
      },

      //----------------------------------
      //  title
      //----------------------------------

      /**
       * The title of the popup. This can be set generically on the popup no
       * matter the features that are selected. If the [selected feature](#selectedFeature)
       * has a {@link module:esri/PopupTemplate}, then the title set in the
       * corresponding template is used here.
       *
       * @name title
       * @instance
       *
       * @type {String}
       *
       * @example
       * // This title will display in the popup unless a selected feature's
       * // PopupTemplate overrides it
       * view.popup.title = "Population by zip codes in Southern California";
       */
      title: {
        aliasOf: "viewModel.title"
      },

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
      view: {
        aliasOf: "viewModel.view"
      },

      //----------------------------------
      //  viewModel
      //----------------------------------

      viewModel: {
        type: PopupViewModel
      },

      //----------------------------------
      //  visible
      //----------------------------------

      /**
       * Displays the popup in the view. The popup will only display if the view's size
       * constraints in [dockOptions](#dockOptions) are met or the [location](#location)
       * property is set to a geometry.
       *
       * @type {Boolean}
       * @default false
       * @see [Get started with popups](../sample-code/get-started-popup/index.html)
       * @see [Popup.open()](#open)
       *
       * @example
       * // Sets the location of the popup to the center of the view
       * view.popup.location = view.center;
       * // Displays the popup
       * view.popup.visible = true;
       *
       * @example
       * // Sets the location of the popup to the location of a click on the view
       * view.on("click", function(event){
       *   view.popup.location = event.mapPoint;
       *   // Displays the popup
       *   view.popup.visible = true;
       * });
       *
       * @example
       * // Hides the popup from the view
       * view.popup.visible = false;
       */
      visible: {
        value: false,

        set: function(value) {
          this._set("visible", value);
          domClass.remove(this._containerNode, CSS.hasPaginationMenuOpen);
          domClass.toggle(this.domNode, CSS.invisible, !value);
          this._togglePopupLocationRepositioning(value);
          this._toggleContentVisibility(value);
          this._autoAlign();
          this.reposition();
        }
      }

    },

    //--------------------------------------------------------------------------
    //
    //  Variables
    //
    //--------------------------------------------------------------------------

    _css: CSS,

    _i18n: i18n,

    _hideActionsTextNum: 3,

    _animationDelay: 10,

    _pointerOffset: 16,

    _popupRendererVMs: [],

    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------

    /**
     * Removes [promises](#promises), [features](#features), [content](#content),
     * [title](#title) and [location](#location) from the Popup.
     *
     * @method
     */
    clear: viewModelWiring.createMethodDelegate("clear"),

    /**
     * Closes the popup by setting its [visible](#visible) property to `false`.
     */
    close: function () {
      this.set("visible", false);
    },

    /**
     * Selects the feature at the next index in relation to the selected feature.
     *
     * @method
     *
     * @see [selectedFeatureIndex](#selectedFeatureIndex)
     *
     * @return {module:esri/widgets/Popup/PopupViewModel} Returns an instance of the popup's view model.
     */
    next: viewModelWiring.createMethodDelegate("next"),

    /**
     * Selects the feature at the previous index in relation to the selected feature.
     *
     * @method
     *
     * @see [selectedFeatureIndex](#selectedFeatureIndex)
     *
     * @return {module:esri/widgets/Popup/PopupViewModel} Returns an instance of the popup's view model.
     */
    previous: viewModelWiring.createMethodDelegate("previous"),

    /**
     * Positions the popup on the view.
     * Moves the popup into the view's extent if the popup is partially or fully outside
     * the view's extent.
     *
     * If the popup is partially out of view, the view will move to fully show the popup.
     * If the popup is fully out of view, the view will move to the popup's location.
     */
    reposition: function () {
      this._positionPopup();
      return this._moveIntoView();
    },

    /**
     * Opens the popup at the given location with content defined either explicitly with `content`
     * or driven from the {@link module:esri/PopupTemplate} of input features. This method sets
     * the popup's [visible](#visible) property to `true`.
     *
     * @param {Object} [options] - Defines the location and content of the popup when opened.
     * @param {string} [options.title] - Sets the [title](#title) of the popup.
     * @param {string} [options.content] - Sets the the [content](#content) of the popup.
     * @param {module:esri/geometry/Geometry} [options.location] - Sets the popup's [location](#location), which is the geometry used to position the popup.
     * @param {module:esri/Graphic[]} [options.features] - Sets the popup's [features](#features), which populate the title and content of the popup based on each graphic's {@link module:esri/PopupTemplate}.
     * @param {Promise[]} [options.promises] - Sets pending [promises](#promises) on the popup. The popup will display once the promises resolve. Each promise must resolve to an array of {@link module:esri/Graphic Graphics}.
     * @param {Boolean} [options.updateLocationEnabled] - When `true` indicates the popup should update its [location](#location) for each paginated feature based on the [selected feature's](#selectedFeature) geometry.
     * <br><br>**Default Value:** false
     *
     * @example
     * view.on("click", function(event){
     *   view.popup.open({
     *    location: event.mapPoint,  // location of the click on the view
     *    title: "You clicked here",  // title displayed in the popup
     *    content: "This is a point of interest"  // content displayed in the popup
     *   });
     * });
     *
     * @example
     * view.popup.open({
     *   features: graphics,  // array of graphics with popupTemplate set and geometries
     *   updateLocationEnabled: true  // updates the location of popup based on
     *   // selected feature's geometry
     * });
     */
    open: function (options) {
      var defaultOptions = {
        updateLocationEnabled: false
      };
      var setOptions = lang.mixin(defaultOptions, options);
      this.viewModel.set(setOptions);
      // todo: remove in 4.3 when we can force a watchable property to be updated.
      if (options.promises) {
        this.set("visible", false);
      }
      else {
        this.set("visible", true);
      }
    },

    /**
     * Triggers the [trigger-action](#event:trigger-action) event and executes the [action](#actions)
     * at the specified index in the [actions](#actions) array.
     *
     * @param {number} actionIndex - The index of the [action](#actions) to execute.
     *
     * @method
     */
    triggerAction: viewModelWiring.createMethodDelegate("triggerAction"),

    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------

    _actionChangeListener: function (actions) {
      this._handleRegistry.remove(REGISTRY_KEYS.actionsChange);
      if (actions) {
        this._handleRegistry.add([
          actions.on("change", function () {
            var viewModel = this.viewModel;
            this._updateActions(viewModel.actions, viewModel.features, viewModel.selectedFeature);
          }.bind(this))
        ], REGISTRY_KEYS.actionsChange);
      }
    },

    _actionEvent: function (node) {
      var viewModel = this.viewModel;
      var data = domAttr.get(node, DATA_ATTRIBUTES.actionIndex);
      if (data) {
        var actionIndex = parseInt(data, 10);
        viewModel.triggerAction(actionIndex);
      }
    },

    // puts the content back into the popup when visible. Content is removed so if a video is playing it will stop.
    _addContent: function () {
      var viewModel = this.viewModel;
      this._updateSelectedFeature(viewModel.selectedFeature);
      this._updateContent(viewModel.content);
      this._updateTitle(viewModel.title);
      this._updatePageText(viewModel.features, viewModel.selectedFeatureIndex);
    },

    _updateActions: function (actions, features, selectedFeature) {
      this._updateActionButtons(actions, selectedFeature);
      this._updateFooterVisibility(features, actions);
      this.reposition();
    },

    _contentIsPopupRenderer: function() {
      var content = this.get("viewModel.content");
      var popupRendererNode = this.get("_popupRenderer.domNode");
      return !!(content && popupRendererNode && content === popupRendererNode);
    },

    _updateActionButtons: function (actions, selectedFeature) {
      this._handleRegistry.remove(REGISTRY_KEYS.actions);

      if (this._actionsNode) {

        var frag = document.createDocumentFragment();

        var totalActions = actions.length;
        if (totalActions) {

          actions.forEach(function (action, i) {
            // set the default classes zoom action
            if (action.id === ZOOM_TO_ACTION_ID) {
              action.title = this._i18n.zoom;
              action.className = CSS.iconZoom;
            }

            var actionTitle = action.title;
            var actionClass = action.className;
            var actionImage = action.image;

            if(!actionImage && !actionClass){
              actionImage = DEFAULT_ACTION_IMAGE;
            }

            var featureAttributes = selectedFeature && selectedFeature.attributes;

            if (featureAttributes) {
              actionTitle = actionTitle ? esriLang.substitute(featureAttributes, actionTitle) : "";
              actionClass = actionClass ? esriLang.substitute(featureAttributes, actionClass) : null;
              actionImage = actionImage ? esriLang.substitute(featureAttributes, actionImage) : null;
            }

            // create action button
            var actionNode = domConstruct.create("div", {
              tabindex: "0",
              title: actionTitle
            }, frag);
            domAttr.set(actionNode, DATA_ATTRIBUTES.actionIndex, i);
            domClass.add(actionNode, [CSS.button, CSS.action]);
            // icon
            var iconNode = domConstruct.create("span", {
              "aria-hidden": true
            }, actionNode);
            domClass.add(iconNode, CSS.icon);
            if (actionClass) {
              domClass.add(iconNode, actionClass);
            }
            if (actionImage) {
              domClass.add(iconNode, CSS.actionImage);
              domStyle.set(iconNode, "background-image", "url(" + actionImage + ")");
            }
            // text
            var actionsText = {
              className: CSS.actionText,
              textContent: actionTitle
            };
            // hide action text if more than or equal to X actions are shown
            if (totalActions >= this._hideActionsTextNum) {
              actionsText.className = CSS.iconText;
            }
            var actionTextNode = domConstruct.create("span", actionsText, actionNode);
            // action listeners
            this._handleRegistry.add([
              watchUtils.init(action, "visible", function (value) {
                domClass.toggle(actionNode, CSS.hidden, !value);
              }),

              watchUtils.init(action, "className", function (value, oldValue) {
                if (featureAttributes) {
                  value = esriLang.substitute(featureAttributes, value);
                  oldValue = esriLang.substitute(featureAttributes, oldValue);
                }
                domClass.remove(iconNode, oldValue);
                domClass.add(iconNode, value);
              }),

              watchUtils.init(action, "image", function (value) {
                if (featureAttributes) {
                  value = esriLang.substitute(featureAttributes, value);
                }
                domClass.toggle(iconNode, CSS.actionImage, !!value);
                domStyle.set(iconNode, "background-image", value ? "url(" + value + ")" : "");
              }),

              watchUtils.init(action, "title", function (value) {
                if (featureAttributes) {
                  value = esriLang.substitute(featureAttributes, value);
                }
                var text = value || "";
                domAttr.set(actionNode, "title", text);
                domAttr.set(actionTextNode, "textContent", text);
              })

            ], REGISTRY_KEYS.actions);
          }, this);

        }

        domConstruct.place(frag, this._actionsNode, "only");

      }
    },

    _getLocationScreenPoint: function () {
      var viewModel = this.viewModel;
      var screenPoint;
      if (viewModel.location && this.visible) {
        // get feature location
        var point = viewModel.location;
        // if we have the info we need
        if (point && viewModel.get("view.ready")) {
          // get screen point
          screenPoint = viewModel.view.toScreen(point);
        }
      }
      return screenPoint;
    },

    // sets popup position
    _calculatePosition: function (screenPoint, sizes, view) {
      var alignment = this.alignment,
        positionStyle, height, width, pointerOffset = this._pointerOffset;
      var top = null,
        left = null,
        bottom = null,
        right = null;
      if (screenPoint && sizes && view) {
        // height of popup and tail
        height = sizes.h;
        if (alignment === ALIGNMENT_POSITIONS.top || alignment === ALIGNMENT_POSITIONS.bottom) {
          height += pointerOffset;
        }
        width = sizes.w;
        if (alignment === ALIGNMENT_POSITIONS.leftTop || alignment === ALIGNMENT_POSITIONS.leftBottom || alignment === ALIGNMENT_POSITIONS.rightTop || alignment === ALIGNMENT_POSITIONS.rightBottom) {
          width += pointerOffset;
          height += pointerOffset;
        }
        var halfWidth = width / 2;
        var y = screenPoint.y;
        var x = screenPoint.x;
        var viewHeightOffset = view.height - y;
        var viewWidthOffset = view.width - x;
        var widthOffset = width;

        switch (alignment) {
        case ALIGNMENT_POSITIONS.bottom:
          top = y + pointerOffset;
          left = x - halfWidth;
          widthOffset = halfWidth;
          break;
        case ALIGNMENT_POSITIONS.leftTop:
          bottom = viewHeightOffset + pointerOffset;
          right = viewWidthOffset + pointerOffset;
          break;
        case ALIGNMENT_POSITIONS.leftBottom:
          top = y + pointerOffset;
          right = viewWidthOffset + pointerOffset;
          break;
        case ALIGNMENT_POSITIONS.rightTop:
          bottom = viewHeightOffset + pointerOffset;
          left = x + pointerOffset;
          break;
        case ALIGNMENT_POSITIONS.rightBottom:
          top = y + pointerOffset;
          left = x + pointerOffset;
          break;
        default:
          bottom = viewHeightOffset + pointerOffset;
          left = x - halfWidth;
          widthOffset = halfWidth;
        }
        var padding = view.padding;
        // if popup is dockEnabled
        if (this.dockEnabled) {
          positionStyle = {
            left: padding.left ? padding.left + "px" : "",
            top: padding.top ? padding.top + "px" : "",
            right: padding.right ? padding.right + "px" : "",
            bottom: padding.bottom ? padding.bottom + "px" : ""
          };
        }
        else {
          positionStyle = {
            top: top !== null ? top + "px" : "auto",
            left: left !== null ? left + "px" : "auto",
            bottom: bottom !== null ? bottom + "px" : "auto",
            right: right !== null ? right + "px" : "auto"
          };
        }
        return {
          height: height,
          width: width,
          box: {
            top: top !== null ? top : screenPoint.y - height,
            left: left !== null ? left : screenPoint.x - widthOffset,
            bottom: bottom !== null ? bottom : screenPoint.y + height,
            right: right !== null ? right : screenPoint.x + widthOffset
          },
          style: positionStyle
        };
      }
    },

    _createPopupRendererVMs: function (features) {
      this._destroyPopupRendererVMs();
      if (features && features.length > 1) {
        features.forEach(function (feature, i) {
          var prvm = new PopupRendererViewModel({
            contentEnabled: false,
            graphic: feature
          });
          this._popupRendererVMs.push(prvm);
        }, this);
      }
    },

    _destroyPopupRendererVMs: function () {
      this._handleRegistry.remove(REGISTRY_KEYS.paginationTitles);
      this._popupRendererVMs.forEach(function (prvm) {
        prvm.destroy();
      });
      this._popupRendererVMs.length = 0;
    },

    _createPaginationNodes: function (features, selectedFeatureIndex) {
      this._handleRegistry.remove(REGISTRY_KEYS.paginationTitles);
      if (features) {
        var totalFeatures = features.length;
        if (this._paginationNode) {
          domAttr.set(this._paginationNode, "innerHTML", "");
        }
        if (totalFeatures > 1) {
          var infoText = esriLang.substitute({
            total: totalFeatures
          }, this._i18n.selectedFeatures);
          domAttr.set(this._pageMenuInfoNode, "textContent", infoText);
          features.forEach(function (feature, i) {
            var title = this._i18n.untitled;
            var item = domConstruct.create("li", {
              role: "menuitem",
              className: CSS.featureMenuItem
            }, this._paginationNode);
            if (i === selectedFeatureIndex) {
              domAttr.set(item, "aria-label", i18n.selectedFeature);
              domClass.add(item, CSS.featureMenuSelected);
            }
            else {
              domAttr.set(item, DATA_ATTRIBUTES.featureIndex, i);
            }
            // title
            var itemTitle = domConstruct.create("span", {
              className: CSS.featureMenuTitle,
              innerHTML: title
            }, item);
            var prvm = this._popupRendererVMs[i];
            if (prvm) {
              var watchTitle = watchUtils.init(prvm, "title", function (value) {
                domAttr.set(itemTitle, "innerHTML", value);
              });
              this._handleRegistry.add(watchTitle, REGISTRY_KEYS.paginationTitles);
            }
            if (i === selectedFeatureIndex) {
              domConstruct.create("span", {
                className: CSS.iconCheckMark
              }, itemTitle);
            }
          }, this);
        }
      }
    },

    _createMessage: function (enabled, view) {
      this._destroyMessage();
      if (enabled && view) {
        this._message = new Message({
          visible: false,
          text: this._i18n.noFeaturesFound,
          viewModel: {
            view: view
          }
        });
        this._message.startup();
        domConstruct.place(this._message.domNode, view.root);
      }
    },

    _createSpinner: function (enabled, view) {
      this._destroySpinner();
      if (enabled && view) {
        this._spinner = new Spinner({
          visible: false,
          viewModel: {
            view: view
          }
        });
        this._spinner.startup();
        domConstruct.place(this._spinner.domNode, view.root);
      }
    },

    _updateContent: function (content) {
      // content is a node
      if (content && content.nodeName) {
        // move node into storage div.
        // Note: IE does not like it when you empty a div that has a widget in it.
        domConstruct.place(content, this._contentStorage);
        // replace body content with new content
        domConstruct.place(content, this._bodyContentNode, "only");
      }
      // content is a html string
      else if (typeof content === "string") {
        this._destroyPopupRenderer();
        domAttr.set(this._bodyContentNode, "innerHTML", content);
      }
      // scroll to top of div
      this._bodyContentNode.scrollTop = 0;
      domClass.toggle(this._containerNode, CSS.hasPopupRenderer, this._contentIsPopupRenderer());
      domClass.toggle(this._containerNode, CSS.showContent, !!content);
      domClass.remove(this._containerNode, CSS.hasPaginationMenuOpen);
      this._autoAlign();
    },

    _destroyPopupRenderer: function () {
      // destroy popup renderer if it exists
      if (this._popupRenderer && !this._popupRenderer._destroyed) {
        // remove popup renderer listeners
        this._handleRegistry.remove(REGISTRY_KEYS.popupRenderer);
        this._popupRenderer.destroy();
        this._set("_popupRenderer", null);
      }
    },

    _destroyMessage: function () {
      if (this._message) {
        this._message.destroyRendering();
        this._message.destroy();
        this._message = null;
      }
    },

    _destroySpinner: function () {
      if (this._spinner) {
        this._spinner.destroyRendering();
        this._spinner.destroy();
        this._spinner = null;
      }
    },

    _setDockEnabledForViewSize: function (dockOptions) {
      // responsive dock is enabled and we need to switch dockEnabled state
      if (dockOptions.breakpoint) {
        this.set("dockEnabled", this._shouldDockAtCurrentViewSize(dockOptions));
      }
    },

    _togglePopupDocking: function (dockEnabled) {
      domClass.remove(this._containerNode, CSS.hasPaginationMenuOpen);
      domClass.toggle(this._containerNode, CSS.isDocked, !!dockEnabled);
      domAttr.set(this._dockNode, "title", dockEnabled ? this._i18n.undock : this._i18n.dock);
      this._updateDockPosition(this.dockOptions);
    },

    _dockingThresholdCrossed: function (newSize, oldSize, dockingThreshold) {
      var currWidth = newSize[0],
        currHeight = newSize[1],
        prevWidth = oldSize[0],
        prevHeight = oldSize[1],
        dockingWidth = dockingThreshold.width,
        dockingHeight = dockingThreshold.height;
      return (currWidth <= dockingWidth && prevWidth > dockingWidth) ||
        (currWidth > dockingWidth && prevWidth <= dockingWidth) ||
        (currHeight <= dockingHeight && prevHeight > dockingHeight) ||
        (currHeight > dockingHeight && prevHeight <= dockingHeight);
    },

    _determineDockPosition: function (dockPos) {
      var viewModel = this.viewModel;
      var view = viewModel.view;
      var viewPadding = view && view.padding;
      var viewWidth = view && view.width - viewPadding.left - viewPadding.right;
      var breakpoints = view && viewModel.get("view.breakpoints");
      if (breakpoints && viewWidth <= breakpoints.xsmall) {
        return dockPos.bottomCenter;
      }
      else {
        var RTL_DIRECTION = !this.isLeftToRight();
        return RTL_DIRECTION ? dockPos.topLeft : dockPos.topRight;
      }
    },

    _updateDockPosition: function (dockOptions) {
      domClass.remove(this._containerNode, [CSS.isDockedTopLeft, CSS.isDockedTopCenter, CSS.isDockedTopRight, CSS.isDockedBottomLeft, CSS.isDockedBottomCenter, CSS.isDockedBottomRight, CSS.canDockToTop, CSS.canDockToBottom, CSS.canDockToLeft, CSS.canDockToRight]);
      var position, positionClass, dockToClass;
      var dockPos = DOCK_POSITIONS;
      var currentPosition = dockOptions.position;
      if (currentPosition === dockPos.auto) {
        position = this._determineDockPosition(dockPos);
      }
      else if (typeof currentPosition === "function") {
         position = currentPosition.call(this);
      }
      else {
        position = currentPosition;
      }
      switch (position) {
      case dockPos.topLeft:
        positionClass = CSS.isDockedTopLeft;
        dockToClass = CSS.canDockToLeft;
        break;
      case dockPos.topCenter:
        positionClass = CSS.isDockedTopCenter;
        dockToClass = CSS.canDockToTop;
        break;
      case dockPos.bottomLeft:
        positionClass = CSS.isDockedBottomLeft;
        dockToClass = CSS.canDockToLeft;
        break;
      case dockPos.bottomCenter:
        positionClass = CSS.isDockedBottomCenter;
        dockToClass = CSS.canDockToBottom;
        break;
      case dockPos.bottomRight:
        positionClass = CSS.isDockedBottomRight;
        dockToClass = CSS.canDockToRight;
        break;
      default:
        positionClass = CSS.isDockedTopRight;
        dockToClass = CSS.canDockToRight;
      }
      domClass.toggle(this._containerNode, dockToClass, !!dockOptions.buttonEnabled);
      if (this.dockEnabled) {
        domClass.add(this._containerNode, positionClass);
        this._set("currentDockPosition", position);
      }
      else {
        this._set("currentDockPosition", null);
      }
      // resize popup renderer for charts
      if (this._popupRenderer) {
        this._popupRenderer.resize();
      }
      this.reposition();
    },

    _toggleDockButton: function (dockOptions) {
      var containerNode = this._containerNode;
      domClass.toggle(containerNode, CSS.showDock, !!dockOptions.buttonEnabled);
      domClass.toggle(containerNode, CSS.isDocked, !!this.dockEnabled);
      this._updateDockPosition(dockOptions);
    },

    _updateFooterVisibility: function (features, actions) {
      var showFooter = this._isPaginationEnabled(features) || (actions && actions.length);
      domClass.toggle(this._containerNode, CSS.showFooter, !!showFooter);
    },

    _isPaginationEnabled: function (features) {
      return this.paginationEnabled && features && features.length > 1;
    },

    _updatePagination: function (features, selectedFeatureIndex) {
      this._updatePageText(features, selectedFeatureIndex);
      this._createPaginationNodes(features, selectedFeatureIndex);
      domClass.toggle(this._containerNode, CSS.showPagination, this._isPaginationEnabled(features));
    },

    _displayPendingFeaturesStatus: function (pendingPromisesCount, featureCount, promises, point) {
      var waitingForResult = pendingPromisesCount > 0 && featureCount === 0;
      var promisesLen = promises && promises.length;

      // Hide popup if we have pending promises that are the same size of promises.
      if (pendingPromisesCount && promisesLen && pendingPromisesCount === promisesLen) {
        this.set("visible", false);
      }
      domClass.toggle(this._containerNode, CSS.hasPendingPromises, !!pendingPromisesCount);
      domClass.toggle(this._containerNode, CSS.isPendingPromisesResult, !!waitingForResult);
      domClass.toggle(this._containerNode, CSS.hasPromiseFeatures, !!featureCount);
      if (this._message) {
        // hide message
        this._message.set({
          visible: false
        });
      }
      // we have promises happening and we have a location
      if (waitingForResult) {
        if (this._spinner) {
          // show loading spinner
          this._spinner.set({
            visible: true
          });
          this._spinner.viewModel.point = point;
        }
      }
      // no promises happening
      else {
        if (this._spinner) {
          // hide loading spinner
          this._spinner.viewModel.point = null;
        }
        if (promisesLen && featureCount && !this.visible) {
          // we have features now, but previously there were no features.
          this.set("visible", true);
        }
        else if (promisesLen && !featureCount && this.visible) {
          // no more promises remaining, no features set and the popup is visible.
          this.set("visible", false);
        }
        // if we have no features and promises
        if (!featureCount && promisesLen) {
          if (this._message) {
            // show no features message
            this._message.set({
              visible: true
            });
            this._message.viewModel.point = point;
          }
        }
      }
    },

    _moveIntoView: function () {
      // new animation
      var def = new Deferred();
      // delay animation
      setTimeout(def.resolve.bind(this), this._animationDelay);
      // after delay, perform animateTo
      return def.then(function () {
        if (this._destroyed) {
          return;
        }
        var viewModel = this.viewModel;
        var view = this.get("viewModel.view");
        // return if we have no view
        if (!viewModel || !view || !view.stationary) {
          return;
        }
        var screenPoint = this._getLocationScreenPoint();
        if (!screenPoint) {
          return;
        }
        else {
          var sizes = this._sizePopup();
          var position = this._calculatePosition(screenPoint, sizes, view);
          // view box
          var viewWidth = view.width;
          var viewHeight = view.height;
          var viewPadding = view.padding;
          // view UI Box
          var uiPadding = view.ui.padding;
          if (this.autoPanEnabled && !this.autoAlignmentEnabled) {
            // point of the location is not in UI view
            if (
              screenPoint.y < (viewPadding.top) ||
              screenPoint.y > (viewHeight - viewPadding.bottom) ||
              screenPoint.x < (viewPadding.left) ||
              screenPoint.x > (viewWidth - viewPadding.right)
            ) {
              return viewModel.centerAtLocation();
            }
            // popup not dockEnabled, we have a position and popup fits inside of the view
            else if (!this.dockEnabled && position && position.width < view.width && position.height < view.height) {
              // offsets
              var dx = 0;
              var dy = 0;
              if (position.box.top < viewPadding.top) {
                // popup is above view
                dy = -(position.box.top) + uiPadding.top + viewPadding.top;
              }
              else if (position.box.bottom > (viewHeight - viewPadding.bottom)) {
                // popup is below view
                dy = -(position.box.bottom - viewHeight + viewPadding.bottom) - uiPadding.bottom;
              }
              if (position.box.left < viewPadding.left) {
                // popup is left of view
                dx = position.box.left - uiPadding.left - viewPadding.left;
              }
              else if (position.box.right > (viewWidth - viewPadding.right)) {
                // popup is right of view
                dx = (position.box.right - viewWidth + viewPadding.right) + uiPadding.right;
              }
              // we have offsets to do
              if (dx || dy) {
                // get offset point
                var viewPoint = viewpointUtils.translateBy(
                  viewpointUtils.create(),
                  view.viewpoint, [dx, dy]
                );
                // animate to offset point
                return view.goTo(viewPoint, viewModel.animationOptions);
              }
            }
            else {
              return;
            }
          }
          else {
            return;
          }
        }
      }.bind(this));
    },

    _isScreenPointWithinView: function (screenPoint, view) {
      return view && screenPoint &&
        (screenPoint.x > -1 &&
          screenPoint.y > -1 &&
          screenPoint.x <= view.width &&
          screenPoint.y <= view.height);
    },

    _autoAlign: function () {
      if (this.autoAlignmentEnabled && this.visible) {
        var view = this.get("viewModel.view");
        var screenPoint = this._getLocationScreenPoint();
        if (this._isScreenPointWithinView(screenPoint, view)) {
          var sizes = this._sizePopup();
          var pointerOffset = this._pointerOffset;
          var areaWidth = sizes.w + pointerOffset;
          var areaHeight = sizes.h + pointerOffset;
          var areaHalfWidth = areaWidth / 2;
          var outsideRight, outsideLeft, outsideTop, outsideBottom;
          var viewPadding = view.padding;

          if (screenPoint.x - areaHalfWidth < (0 + viewPadding.left)) {
            outsideLeft = true;
          }
          if ((screenPoint.x + areaHalfWidth) > (view.width - viewPadding.right)) {
            outsideRight = true;
          }
          if ((screenPoint.y - areaHeight) < (0 + viewPadding.top)) {
            outsideTop = true;
          }
          if ((screenPoint.y + areaHeight) > (view.height - viewPadding.bottom)) {
            outsideBottom = true;
          }

          if (outsideLeft) {
            this._set("alignment", outsideTop ? ALIGNMENT_POSITIONS.rightBottom : ALIGNMENT_POSITIONS.rightTop);
          }
          else if (outsideRight) {
            this._set("alignment", outsideTop ? ALIGNMENT_POSITIONS.leftBottom : ALIGNMENT_POSITIONS.leftTop);
          }
          else if (outsideTop) {
            this._set("alignment", outsideBottom ? ALIGNMENT_POSITIONS.top : ALIGNMENT_POSITIONS.bottom);
          }
          else {
            this._set("alignment", ALIGNMENT_POSITIONS.top);
          }

        }
      }
    },

    _positionPopup: function () {
      var viewModel = this.viewModel;
      var view = viewModel.view;
      if (view) {
        // remove alignment classes
        domClass.remove(this._containerNode, [CSS.alignTop, CSS.alignBottom, CSS.alignLeftTop, CSS.alignLeftBottom, CSS.alignRightTop, CSS.alignRightBottom]);

        this._triggerOffset();

        // add alignment class
        var alignmentClass;
        switch (this.alignment) {
        case ALIGNMENT_POSITIONS.bottom:
          alignmentClass = CSS.alignBottom;
          break;
        case ALIGNMENT_POSITIONS.rightTop:
          alignmentClass = CSS.alignRightTop;
          break;
        case ALIGNMENT_POSITIONS.rightBottom:
          alignmentClass = CSS.alignRightBottom;
          break;
        case ALIGNMENT_POSITIONS.leftTop:
          alignmentClass = CSS.alignLeftTop;
          break;
        case ALIGNMENT_POSITIONS.leftBottom:
          alignmentClass = CSS.alignLeftBottom;
          break;
        default:
          alignmentClass = CSS.alignTop;
        }
        domClass.add(this._containerNode, alignmentClass);
        var screenPoint = this._getLocationScreenPoint();
        var sizes = this._sizePopup();
        var position = this._calculatePosition(screenPoint, sizes, view);
        var positionStyle = position && position.style;
        if (positionStyle) {
          // Place popup at the right positionStyle
          domStyle.set(this._containerNode, positionStyle);
        }
      }
    },

    // removes content from the popup when the popup is hidden. This is so any video playing will stop.
    _removeContent: function () {
      this._destroyPopupRenderer();
      domAttr.set(this._bodyContentNode, "innerHTML", "");
      domAttr.set(this._titleNode, "innerHTML", "");
      domAttr.set(this._pageTextNode, "innerHTML", "");
      domAttr.set(this._pageTextDockedNode, "innerHTML", "");
      domClass.remove(this._containerNode, [CSS.showTitle, CSS.showContent]);
    },

    _keyupFeature: function (evt, target) {
      var keyCode = evt.keyCode;
      if (keyCode === keys.UP_ARROW || keyCode === keys.DOWN_ARROW) {
        evt.stopPropagation();
        evt.preventDefault();
        // get all list items
        var lists = query("li", this._paginationNode);
        var totalItems = lists.length;
        var itemIndex = lists.indexOf(target);
        var focusItemIndex;
        // up arrow key pressed
        if (keyCode === keys.UP_ARROW) {
          // set focus to previous item
          focusItemIndex = itemIndex - 1;
        }
        // down arrow key pressed
        else if (keyCode === keys.DOWN_ARROW) {
          // set focus to next item
          focusItemIndex = itemIndex + 1;
        }
        if (focusItemIndex < 0) {
          // set focus to last item
          focusItemIndex = totalItems - 1;
        }
        else if (focusItemIndex >= totalItems) {
          // set focus to first item
          focusItemIndex = 0;
        }
        lists[focusItemIndex].focus();
      }
    },

    _selectFeature: function (target) {
      var viewModel = this.viewModel;
      var index = -1;
      var dataIndex = domAttr.get(target, DATA_ATTRIBUTES.featureIndex);
      if (dataIndex) {
        index = parseInt(dataIndex, 10);
      }
      if (index !== -1) {
        viewModel.selectedFeatureIndex = index;
      }
      domClass.remove(this._containerNode, CSS.hasPaginationMenuOpen);
      this._pageMenuNode.focus();
    },

    _updateSelectedFeature: function (selectedFeature) {
      var viewModel = this.viewModel;
      var layer, layerId = "",
        layerTitle = "";
      if (selectedFeature) {
        layer = selectedFeature.layer;
        if (layer) {
          layerId = layer.id || "";
          layerTitle = layer.title || "";
        }
        // create popup renderer if it doesn't exist
        if (!this._popupRenderer || (this._popupRenderer && this._popupRenderer._destroyed)) {
          this._handleRegistry.remove(REGISTRY_KEYS.popupRenderer);
          this._set("_popupRenderer", new PopupRenderer());
          // change popup title if popup renderer title changes
          var titleWatcher = watchUtils.init(this._popupRenderer.viewModel, "title", function (value) {
            viewModel.title = value;
          });
          var contentWatcher = watchUtils.init(this._popupRenderer.viewModel, "content", function (value) {
            viewModel.content = value ? this._popupRenderer.domNode : null;
          }.bind(this));
          var resizeListener = on(this._popupRenderer, "resize", this.reposition.bind(this));
          this._handleRegistry.add([titleWatcher, contentWatcher, resizeListener], REGISTRY_KEYS.popupRenderer);
          // do it!
          this._popupRenderer.startup();
        }
        this._popupRenderer.viewModel.graphic = selectedFeature;
      }
      // toggle class to enable a feature change CSS animation
      this._toggleFeatureUpdatedClass();
      domAttr.set(this._containerNode, DATA_ATTRIBUTES.layerTitle, layerTitle);
      domAttr.set(this._containerNode, DATA_ATTRIBUTES.layerId, layerId);
      this.reposition();
    },

    _updateFeatures: function (features) {
      var viewModel = this.viewModel;
      this._createPopupRendererVMs(features);
      this._updatePagination(features, viewModel.selectedFeatureIndex);
      this._updateFooterVisibility(features, viewModel.actions);
      this.reposition();
    },

    _shouldDockAtCurrentViewSize: function (dockOptions) {
      var viewModel = this.viewModel;
      var breakpoint = dockOptions.breakpoint;
      return viewModel.view && (
        (breakpoint.hasOwnProperty("width") && viewModel.view.ui.width <= breakpoint.width) ||
        (breakpoint.hasOwnProperty("height") && viewModel.view.ui.height <= breakpoint.height));
    },

    _sizePopup: function () {
      return domGeometry.getContentBox(this._containerNode);
    },

    _updateTitle: function (title) {
      title = title || "";
      domAttr.set(this._titleNode, "innerHTML", title);
      domClass.toggle(this._containerNode, CSS.showTitle, !!title);
      domClass.remove(this._containerNode, CSS.hasPaginationMenuOpen);
    },

    _toggleDock: function () {
      this.set("dockEnabled", !this.dockEnabled);
    },

    _togglePageMenu: function () {
      domClass.toggle(this._containerNode, CSS.hasPaginationMenuOpen);
      var isOpen = domClass.contains(this._containerNode, CSS.hasPaginationMenuOpen);
      domAttr.set(this._pageMenuSectionNode, "aria-hidden", !isOpen);
      var lists = query("li", this._paginationNode);
      var firstItem = lists[0];
      lists.forEach(function (list) {
        domAttr.set(list, "tabIndex", isOpen ? "0" : "");
      });
      if (!isOpen) {
        this._pageMenuNode.focus();
      }
      else if (firstItem) {
        firstItem.focus();
      }
    },

    _updatePageText: function (features, selectedFeatureIndex) {
      var pageString = "";
      if (this._isPaginationEnabled(features)) {
        pageString = esriLang.substitute({
          index: selectedFeatureIndex + 1,
          total: features.length
        }, this._i18n.pageText);
      }
      if (this._pageTextNode) {
        domAttr.set(this._pageTextNode, {
          textContent: pageString
        });
      }
      if (this._pageTextDockedNode) {
        domAttr.set(this._pageTextDockedNode, {
          textContent: pageString
        });
      }
    },

    _triggerOffset: function() {
      // -> triggering reflow /* The actual magic */
      // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
      // https://css-tricks.com/restart-css-animation/
      this._containerNode.offsetWidth = this._containerNode.offsetWidth;
    },

    _toggleFeatureUpdatedClass: function () {
      domClass.remove(this._containerNode, CSS.hasFeatureUpdated);

      this._triggerOffset();

      domClass.add(this._containerNode, CSS.hasFeatureUpdated);
    },

    _viewPointChanged: function () {
      if (this.closeOnViewChangeEnabled) {
        this.close();
      }
      else {
        this._positionPopup();
      }
    },

    _wireUpView: function (view) {
      // clean up view handlers
      this._handleRegistry.remove(REGISTRY_KEYS.view);
      this._viewPointEvent = null;
      // If we have a view
      if (view) {
        // note: viewPoint may change to use visible for 3D cc @yann
        var viewWatchProp = "viewpoint";
        if (view.type === "3d") {
          viewWatchProp = "camera";
        }
        // create view listeners
        this._viewPointEvent = watchUtils.pausable(view, viewWatchProp, this._viewPointChanged.bind(this));
        this._handleRegistry.add([
          view.watch("padding", this.reposition.bind(this)),
          view.watch("size", this._updateDockEnabledForViewSize.bind(this)),
          on(view, "resize", this.reposition.bind(this)),
          this._viewPointEvent
        ], REGISTRY_KEYS.view);
        // update viewpoint watch status
        this._togglePopupLocationRepositioning(this.visible);
        // create widgets
        this._createMessage(this.messageEnabled, view);
        this._createSpinner(this.spinnerEnabled, view);
        // set initial docking state based on the view's size
        this._setDockEnabledForViewSize(this.dockOptions);
        this._toggleDockButton(this.dockOptions);
        // position any existing popup
        this.reposition();
      }
    },

    _updateDockEnabledForViewSize: function (newSize, oldSize) {
      var viewPadding = this.get("viewModel.view.padding");
      var widthPadding = viewPadding.left + viewPadding.right;
      var heightPadding = viewPadding.top + viewPadding.bottom;
      var newUISize = [],
        oldUISize = [];
      newUISize[0] = newSize[0] - widthPadding;
      newUISize[1] = newSize[1] - heightPadding;
      oldUISize[0] = oldSize[0] - widthPadding;
      oldUISize[1] = oldSize[1] - heightPadding;
      /*
        When the size of the view changes, check to see if we need to switch the dockEnabled state
      */
      var dockOptions = this.dockOptions;
      var breakpoint = dockOptions.breakpoint;
      if (this._dockingThresholdCrossed(newUISize, oldUISize, breakpoint)) {
        this._setDockEnabledForViewSize(dockOptions);
      }
      this._updateDockPosition(dockOptions);
    },

    _togglePopupLocationRepositioning: function (visible) {
      /*
        For best performance, don't watch the viewpoint if the popup is not visible, has no location or is dockEnabled.
      */
      var viewModel = this.viewModel;
      if (!this._viewPointEvent) {
        return;
      }
      if (visible && viewModel.location && !this.dockEnabled) {
        this._viewPointEvent.resume();
      }
      else {
        this._viewPointEvent.pause();
      }
    },

    _toggleContentVisibility: function (visible) {
      /*
        Only have the domNode in the document when the popup is visible.
        This will ensure that if a video is playing in the popup when closed, the video is removed and stopped, not just hidden.
      */
      if (!visible) {
        this._removeContent();
      }
      else {
        this._addContent();
      }
    }

  });

  return Popup;
});
