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
 * [![popup-basic-example](../assets/img/apiref/widgets/popup-basic.png)](../sample-code/sandbox/sandbox.html?sample=intro-popup)
 *
 * In the image above, the text "Marriage in NY, Zip Code: 11385" is the popup's `title`. The remaining text is
 * its `content`. A dock button ![popup-dock-btn](../assets/img/apiref/widgets/popup-dock.png) may also be available in the
 * top right corner of the popup. This allows the user to dock the popup to one of the sides or corners of the view.
 * The options for docking may be set in the [dockOptions](#dockOptions) property.
 *
 * Popups can also contain [actions](#actions) that act like buttons,
 * which execute a function defined by the developer when clicked.
 * By default, every popup has a "Zoom in" action ![popupTemplate-zoom-action](../assets/img/apiref/widgets/popuptemplate-zoom-action.png)
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
 * @see [Popup.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Popup.tsx)
 * @see [Popup.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Popup.scss)
 * @see module:esri/PopupTemplate
 * @see {@link module:esri/views/View#popup View.popup}
 * @see [Intro to popups](../sample-code/intro-popup/index.html)
 * @see [Intro to PopupTemplate](../sample-code/intro-popuptemplate/index.html)
 * @see [Sample - Dock positions with popup](../sample-code/popup-docking-position/index.html)
 * @see [Sample - Popup actions](../sample-code/popup-actions/index.html)
 * @see [Sample - Custom popup actions per feature](../sample-code/popup-custom-action/index.html)
 * @see [Sample - Popup with DOM node](../sample-code/popup-domnode/index.html)
 * @see [Guide - Esri Icon Font](../guide/esri-icon-font/index.html)
 * @see module:esri/widgets/Popup/PopupViewModel
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />

// dojo
import domGeometry = require("dojo/dom-geometry");
import * as i18n from "dojo/i18n!esri/widgets/Popup/nls/Popup";
import { END, HOME, ESCAPE, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW } from "dojo/keys";

// esri
import Graphic = require("esri/Graphic");

// esri.core
import Collection = require("esri/core/Collection");
import Handles = require("esri/core/Handles");
import esriLang = require("esri/core/lang");
import Logger = require("esri/core/Logger");
import watchUtils = require("esri/core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.geometry
import Point = require("esri/geometry/Point");
import ScreenPoint = require("esri/geometry/ScreenPoint");

// esri.views
import { Breakpoints } from "esri/views/interfaces";
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.views.ui
import UI = require("esri/views/ui/UI");

// esri.widgets
import Feature = require("esri/widgets/Feature");
import Spinner = require("esri/widgets/Spinner");
import Widget = require("esri/widgets/Widget");

// esri.widgets.Popup
import {
  Action,
  ActionEvent,
  Alignment,
  DockOptions,
  DockOptionsBreakpoint,
  DockPosition,
  PopupOpenOptions,
  PopupOutsideViewOptions,
  PopupPosition,
  PopupPositionStyle,
  ViewPadding
} from "esri/widgets/Popup/interfaces";
import PopupViewModel = require("esri/widgets/Popup/PopupViewModel");

// esri.widgets.support
import widgetUtils = require("esri/widgets/support/widgetUtils");
import { GoToOverride } from "esri/widgets/support/interfaces";
import {
  accessibleHandler,
  tsx,
  renderable,
  vmEvent,
  isWidgetBase,
  isWidget
} from "esri/widgets/support/widget";

const DEFAULT_ACTION_IMAGE = require.toUrl("./Popup/images/default-action.svg");

const SELECTED_INDEX_HANDLE_KEY = "selected-index";

const SPINNER_KEY = "popup-spinner";

const CSS = {
  // common
  iconLeftTriangleArrow: "esri-icon-left-triangle-arrow",
  iconRightTriangleArrow: "esri-icon-right-triangle-arrow",
  iconDockToTop: "esri-icon-maximize",
  iconDockToBottom: "esri-icon-dock-bottom",
  iconDockToLeft: "esri-icon-dock-left",
  iconDockToRight: "esri-icon-dock-right",
  iconClose: "esri-icon-close",
  iconUndock: "esri-icon-minimize",
  iconFeatureMenu: "esri-icon-layer-list",
  iconCheckMark: "esri-icon-check-mark",
  iconLoading: "esri-icon-loading-indicator",
  iconZoom: "esri-icon-zoom-in-magnifying-glass",
  rotating: "esri-rotating",
  // base
  base: "esri-popup",
  // containers
  widget: "esri-widget",
  main: "esri-popup__main-container",
  loadingContainer: "esri-popup__loading-container",
  // global modifiers
  shadow: "esri-popup--shadow",
  isDocked: "esri-popup--is-docked",
  isDockedTopLeft: "esri-popup--is-docked-top-left",
  isDockedTopCenter: "esri-popup--is-docked-top-center",
  isDockedTopRight: "esri-popup--is-docked-top-right",
  isDockedBottomLeft: "esri-popup--is-docked-bottom-left",
  isDockedBottomCenter: "esri-popup--is-docked-bottom-center",
  isDockedBottomRight: "esri-popup--is-docked-bottom-right",
  alignTopCenter: "esri-popup--aligned-top-center",
  alignBottomCenter: "esri-popup--aligned-bottom-center",
  alignTopLeft: "esri-popup--aligned-top-left",
  alignBottomLeft: "esri-popup--aligned-bottom-left",
  alignTopRight: "esri-popup--aligned-top-right",
  alignBottomRight: "esri-popup--aligned-bottom-right",
  isFeatureMenuOpen: "esri-popup--feature-menu-open",
  hasFeatureUpdated: "esri-popup--feature-updated",
  // header and content
  header: "esri-popup__header",
  headerButtons: "esri-popup__header-buttons",
  headerTitle: "esri-popup__header-title",
  headerTitleButton: "esri-popup__header-title--button",
  content: "esri-popup__content",
  featureButtons: "esri-popup__feature-buttons",
  // buttons
  button: "esri-popup__button",
  buttonDisabled: "esri-popup__button--disabled",
  buttonDock: "esri-popup__button--dock",
  // icons
  icon: "esri-popup__icon",
  iconDock: "esri-popup__icon--dock-icon",
  // actions
  actions: "esri-popup__actions",
  action: "esri-popup__action",
  actionImage: "esri-popup__action-image",
  actionText: "esri-popup__action-text",
  actionToggle: "esri-popup__action-toggle",
  actionToggleOn: "esri-popup__action-toggle--on",
  // pointer
  pointer: "esri-popup__pointer",
  pointerDirection: "esri-popup__pointer-direction",
  // navigation
  navigation: "esri-popup__navigation",
  navigationButtons: "esri-popup__navigation-buttons",
  // pagination
  paginationPrevious: "esri-popup__pagination-previous",
  paginationNext: "esri-popup__pagination-next",
  paginationPreviousIconLTR: "esri-popup__pagination-previous-icon",
  paginationPreviousIconRTL: "esri-popup__pagination-previous-icon--rtl",
  paginationNextIconLTR: "esri-popup__pagination-next-icon",
  paginationNextIconRTL: "esri-popup__pagination-next-icon--rtl",
  paginationText: "esri-popup__pagination-page-text",
  // feature menu
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

const ZOOM_TO_ACTION_ID = "zoom-to";

const DOCK_OPTIONS: DockOptions = {
  buttonEnabled: true,
  position: "auto",
  breakpoint: {
    width: 544
  }
};

const WIDGET_KEY_PARTIAL = "esri-popup";

function buildKey(element: string, index?: number): string {
  if (index === undefined) {
    return `${WIDGET_KEY_PARTIAL}__${element}`;
  }

  return `${WIDGET_KEY_PARTIAL}__${element}-${index}`;
}

/**
 * Fires after the user clicks on an {@link module:esri/support/actions/ActionButton action} or {@link module:esri/support/actions/ActionToggle action toggle} inside a popup. This
 * event may be used to define a custom function to execute when particular
 * actions are clicked. See the example below for details of how this works.
 *
 * @event module:esri/widgets/Popup#trigger-action
 * @property {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} action - The action clicked by the user. For a description
 * of this object and a specification of its properties, see the [actions](#actions) property of this
 * class.
 *
 * @see [actions](#actions)
 * @example
 * // Defines an action to zoom out from the selected feature
 * var zoomOutAction = {
 *  // This text is displayed as a tooltip
 *  title: "Zoom out",
 *  // The ID used to reference this action in the event handler
 *  id: "zoom-out",
 *  // Sets the icon font used to style the action button
 *  className: "esri-icon-zoom-out-magnifying-glass"
 * };
 * // Adds the custom action to the popup
 * view.popup.actions.push(zoomOutAction);
 *
 * // Fires each time an action is clicked
 * view.popup.on("trigger-action"), function(event){
 *   // If the zoom-out action is clicked, than execute the following code
 *   if(event.action.id === "zoom-out"){
 *     // Zoom out two levels (LODs)
 *     view.goTo({
 *       center: view.center,
 *       zoom: view.zoom - 2
 *     });
 *   }
 * });
 */

const declaredClass = "esri.widgets.Popup";
const logger = Logger.getLogger(declaredClass);

@subclass(declaredClass)
class Popup extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @mixes module:esri/widgets/support/GoTo
   * @mixes module:esri/core/Evented
   * @constructor
   * @alias module:esri/widgets/Popup
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   */
  constructor(params?: any) {
    super();
  }

  postInitialize() {
    this._addSelectedFeatureIndexHandle();

    this.own(
      watchUtils.watch<ScreenPoint>(this, "viewModel.screenLocation", () =>
        this._positionContainer()
      ),

      watchUtils.watch(this, ["viewModel.visible", "dockEnabled"], () =>
        this._toggleScreenLocationEnabled()
      ),

      watchUtils.watch(this, "viewModel.screenLocation", (newValue, oldValue) => {
        if (!!newValue !== !!oldValue) {
          this.reposition();
        }
      }),

      watchUtils.watch<Graphic[]>(this, "viewModel.features", (features) =>
        this._createFeatureWidgets(features)
      ),

      watchUtils.watch(
        this,
        [
          "viewModel.view.padding",
          "viewModel.view.size",
          "viewModel.visible",
          "viewModel.waitingForResult",
          "viewModel.location",
          "alignment"
        ],
        () => this.reposition()
      ),

      watchUtils.watch<boolean>(this, "spinnerEnabled", (value) =>
        this._spinnerEnabledChange(value)
      ),

      watchUtils.watch<number[]>(this, "viewModel.view.size", (newSize, oldSize) =>
        this._updateDockEnabledForViewSize(newSize, oldSize)
      ),

      watchUtils.watch<MapView | SceneView>(this, "viewModel.view", (newView, oldView) =>
        this._viewChange(newView, oldView)
      ),

      watchUtils.watch<boolean>(this, "viewModel.view.ready", (isReady, wasReady) =>
        this._viewReadyChange(isReady, wasReady)
      ),

      watchUtils.watch(this, ["viewModel.waitingForResult", "viewModel.location"], () =>
        this._displaySpinner()
      ),

      watchUtils.watch(this, ["featureWidgets", "viewModel.selectedFeatureIndex"], () =>
        this._updateFeatureWidget()
      ),

      watchUtils.watch<string>(this, "selectedFeatureWidget.viewModel.title", (title) =>
        this._setTitleFromFeatureWidget(title)
      ),

      watchUtils.watch(
        this,
        [
          "selectedFeatureWidget.viewModel.content",
          "selectedFeatureWidget.viewModel.waitingForContent"
        ],
        () => this._setContentFromFeatureWidget()
      ),

      watchUtils.on<ActionEvent>(this, "viewModel", "trigger-action", (event) =>
        this._zoomToAction(event)
      )
    );
  }

  destroy() {
    this._destroyFeatureWidgets();
    this._destroySpinner();
    this._handles && this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _blurContainer = false;

  private _containerNode: HTMLDivElement = null;

  private _mainContainerNode: HTMLDivElement = null;

  private _featureMenuNode: HTMLElement = null;

  private _focusContainer = false;

  private _focusDockButton = false;

  private _focusFeatureMenuButton = false;

  private _focusFirstFeature = false;

  private _handles: Handles = new Handles();

  private _displayActionTextLimit = 2;

  private _pointerOffsetInPx = 16;

  private _spinner: Spinner = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  actions
  //----------------------------------

  /**
   * Defines actions that may be executed by clicking the icon
   * or image symbolizing them in the popup. By default, every popup has a `zoom-to`
   * action styled with a magnifying glass icon
   * ![popupTemplate-zoom-action](../assets/img/apiref/widgets/popuptemplate-zoom-action.png).
   * When this icon is clicked, the view zooms in four LODs and centers on the selected feature.
   *
   * You may override this action by removing it from the `actions` array or by setting the
   * [overwriteActions](esri-PopupTemplate.html#overwriteActions) property to `true` in a
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
   * Actions are defined with the properties listed in the {@link module:esri/support/actions/ActionButton} or {@link module:esri/support/actions/ActionToggle} classes.
   *
   * @name actions
   * @instance
   *
   * @type {module:esri/core/Collection<module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle>}
   *
   * @autocast { "value": "Object[]" }
   *
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
  @aliasOf("viewModel.actions")
  @renderable()
  actions: Collection<Action> = null;

  //----------------------------------
  //  alignment
  //----------------------------------

  /**
   * Position of the popup in relation to the selected feature.
   *
   * **Possible Values:** auto | top-center | top-right | bottom-left | bottom-center | bottom-right | Function
   *
   * @name alignment
   * @instance
   * @type {String | Function}
   * @default "auto"
   * @since 4.8
   *
   * @example
   * // The popup will display to the left of the feature
   * view.popup.alignment = "auto";
   */
  @property() alignment: Alignment = "auto";

  //----------------------------------
  //  autoCloseEnabled
  //----------------------------------

  /**
   *
   * This closes the popup when the {@link module:esri/views/View} camera or {@link module:esri/Viewpoint} changes.
   *
   * @since 4.5
   * @name autoCloseEnabled
   * @instance
   *
   * @type {boolean}
   * @default false
   */
  @aliasOf("viewModel.autoCloseEnabled") autoCloseEnabled: boolean = null;

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
   * @type {string | HTMLElement | module:esri/widgets/Widget}
   * @see [Sample - Popup Docking](../sample-code/popup-docking-position/index.html)
   * @see [Sample - Popup with DOM node](../sample-code/popup-domnode/index.html)
   *
   * @example
   * // This sets generic instructions in the popup that will always be displayed
   * // unless it is overridden by a PopupTemplate
   * view.popup.content = "Click a feature on the map to view its attributes";
   */
  @aliasOf("viewModel.content")
  @renderable()
  content: string | HTMLElement | Widget = null;

  //----------------------------------
  //  collapsed
  //----------------------------------

  /**
   *
   * Indicates whether the popup displays its content. If `true`, only the header displays.
   *
   * @name collapsed
   * @instance
   * @type {boolean}
   * @since 4.5
   * @default false
   */
  @property()
  @renderable()
  collapsed = false;

  //----------------------------------
  //  collapseEnabled
  //----------------------------------

  /**
   *
   * Indicates whether to enable collapse functionality for the popup.
   *
   * @name collapseEnabled
   * @instance
   * @type {boolean}
   * @default true
   */
  @property()
  @renderable()
  collapseEnabled = true;

  //----------------------------------
  //  currentAlignment
  //----------------------------------

  /**
   *
   * **Possible Values:**  auto | top-center | top-right | top-left | bottom-left | bottom-center | bottom-right
   *
   * @type {string}
   * @default
   * @ignore
   */
  @property({
    readOnly: true,
    dependsOn: ["dockEnabled", "alignment"]
  })
  @renderable()
  get currentAlignment(): Alignment {
    return this._getCurrentAlignment();
  }

  //----------------------------------
  //  currentDockPosition
  //----------------------------------

  /**
   * Dock position in the {@link module:esri/views/View}.
   *
   * **Possible Values:** top-left | top-center | top-right | bottom-left | bottom-center | bottom-right
   *
   * @type {string}
   * @instance
   * @name currentDockPosition
   * @readonly
   */
  @property({
    readOnly: true,
    dependsOn: ["viewModel.view.ready", "dockEnabled", "dockOptions"]
  })
  @renderable()
  get currentDockPosition(): DockPosition {
    return this._getCurrentDockPosition();
  }

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
   * @instance
   * @name dockOptions
   * @see [Sample - Popup docking](../sample-code/popup-docking-position/index.html)
   *
   * @property {Object | boolean} [breakpoint=true] - Defines the dimensions of the {@link module:esri/views/View}
   *                        at which to dock the popup. Set to `false` to disable docking at a breakpoint.
   * @property {number} [breakpoint.width=544] - The maximum width of the {@link module:esri/views/View}
   *                        at which the popup will be set to dockEnabled automatically.
   * @property {number} [breakpoint.height=544] - The maximum height of the {@link module:esri/views/View}
   *                        at which the popup will be set to dockEnabled automatically.
   * @property {boolean} [buttonEnabled] - If `true`, displays the dock button. If `false`, hides the dock
   *                         button from the popup.
   * @property {string | function} [position=auto] - The position in the view at which to dock the popup.
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
  @property()
  @renderable()
  get dockOptions() {
    return this._get<DockOptions>("dockOptions") || DOCK_OPTIONS;
  }
  set dockOptions(dockOptions: DockOptions) {
    const dockOptionDefaults = { ...DOCK_OPTIONS };
    const breakpoints = this.get<Breakpoints>("viewModel.view.breakpoints");
    const viewDockSize: DockOptionsBreakpoint = {};

    if (breakpoints) {
      viewDockSize.width = breakpoints.xsmall;
      viewDockSize.height = breakpoints.xsmall;
    }

    const dockOptionsMixin = { ...dockOptionDefaults, ...dockOptions };
    const breakpointDefaults = { ...dockOptionDefaults.breakpoint, ...viewDockSize };
    const { breakpoint } = dockOptionsMixin;

    if (breakpoint === true) {
      dockOptionsMixin.breakpoint = breakpointDefaults;
    } else if (typeof breakpoint === "object") {
      dockOptionsMixin.breakpoint = { ...breakpointDefaults, ...breakpoint };
    }

    this._set("dockOptions", dockOptionsMixin);
    this._setCurrentDockPosition();
    this.reposition();
  }

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
   * @name dockEnabled
   * @instance
   *
   * @type {Boolean}
   * @default false
   * @see [Sample - Popup docking](../sample-code/popup-docking-position/index.html)
   *
   * @example
   * // The popup will automatically be dockEnabled when made visible
   * view.popup.dockEnabled = true;
   */
  @property()
  @renderable()
  dockEnabled = false;

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
  @aliasOf("viewModel.featureCount")
  @renderable()
  featureCount: number = null;

  //----------------------------------
  //  featureMenuOpen
  //----------------------------------

  /**
   * @todo document
   */

  @property({
    dependsOn: ["viewModel.visible"]
  })
  @renderable()
  set featureMenuOpen(value: boolean) {
    this._set("featureMenuOpen", !!value);
  }
  get featureMenuOpen(): boolean {
    return this.viewModel.visible ? this._get("featureMenuOpen") : false;
  }

  //----------------------------------
  //  features
  //----------------------------------

  /**
   * An array of features associated with the popup. Each graphic in this array must
   * have a valid {@link module:esri/PopupTemplate} set. They may share the same
   * {@link module:esri/PopupTemplate} or have unique
   * {@link module:esri/PopupTemplate PopupTemplates} depending on their attributes.
   * The [content](#content) and [title](#title)
   * of the popup is set based on the `content` and `title` properties of each graphic's respective
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
  @aliasOf("viewModel.features")
  @renderable()
  features: Graphic[] = null;

  //----------------------------------
  //  featureNavigationEnabled
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
   * @name featureNavigationEnabled
   * @instance
   * @type {Boolean}
   * @default
   */
  @property()
  @renderable()
  featureNavigationEnabled = true;

  //----------------------------------
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride") goToOverride: GoToOverride = null;

  //----------------------------------
  //  highlightEnabled
  //----------------------------------

  /**
   * Highlight the selected popup feature using the {@link module:esri/views/MapView#highlightOptions highlightOptions}
   * set on the {@link module:esri/views/MapView} or the {@link module:esri/views/SceneView#highlightOptions highlightOptions}
   * set on the {@link module:esri/views/SceneView}.
   *
   * ::: esri-md class="panel trailer-1"
   * **Known Limitation**
   *
   * Only {@link module:esri/layers/FeatureLayer FeatureLayers} rendered with
   * [WebGL](esri-layers-FeatureLayer.html#webgl-rendering)
   * support highlight.
   * :::
   *
   * @name highlightEnabled
   * @instance
   *
   * @type {Boolean}
   * @default true
   */
  @aliasOf("viewModel.highlightEnabled") highlightEnabled: boolean = null;

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
   * @see [Intro to popups](../sample-code/intro-popup/index.html)
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
  @aliasOf("viewModel.location")
  @renderable()
  location: Point = null;

  //----------------------------------
  //  featureWidgets
  //----------------------------------

  /**
   * @todo document
   */
  @property({
    readOnly: true
  })
  @renderable()
  featureWidgets: Feature[] = [];

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
  @aliasOf("viewModel.promises") promises: IPromise<Graphic[]>[] = null;

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
  @aliasOf("viewModel.selectedFeature")
  @renderable()
  selectedFeature: Graphic = null;

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
  @aliasOf("viewModel.selectedFeatureIndex")
  @renderable()
  selectedFeatureIndex: number = null;

  //----------------------------------
  //  selectedFeatureWidget
  //----------------------------------

  /**
   * @todo document
   */
  @property({
    readOnly: true
  })
  @renderable()
  selectedFeatureWidget: Feature = null;

  //----------------------------------
  //  spinnerEnabled
  //----------------------------------

  /**
   * Indicates whether to display a spinner at the popup location prior to its
   * display when it has pending promises.
   *
   * @name spinnerEnabled
   * @instance
   * @type {boolean}
   * @default
   */
  @property() spinnerEnabled = true;

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
  @aliasOf("viewModel.title")
  @renderable()
  title: string = null;

  //----------------------------------
  //  updateLocationEnabled
  //----------------------------------

  /**
   * @todo document
   */
  @aliasOf("viewModel.updateLocationEnabled") updateLocationEnabled: boolean = null;

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
  @aliasOf("viewModel.view") view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

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
  @property({
    type: PopupViewModel
  })
  @renderable([
    "viewModel.allActions",
    "viewModel.screenLocation",
    "viewModel.screenLocationEnabled",
    "viewModel.state",
    "viewModel.pendingPromisesCount",
    "viewModel.promiseCount",
    "viewModel.waitingForResult"
  ])
  @vmEvent(["triggerAction", "trigger-action"])
  viewModel = new PopupViewModel();

  //----------------------------------
  //  visible
  //----------------------------------

  /**
   * Indicates whether the popup is visible.
   *
   * @name visible
   * @instance
   * @type {boolean}
   */
  @aliasOf("viewModel.visible")
  @renderable()
  visible: boolean = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Use this method to remove focus from the Widget.
   *
   * @method
   * @since 4.6
   *
   */
  blur(): void {
    const { visible } = this;

    if (!visible) {
      logger.warn("Popup cannot be blurred while visible is false");
    }

    this._blurContainer = true;
    this.scheduleRender();
  }

  /**
   * Removes [promises](#promises), [features](#features), [content](#content),
   * [title](#title) and [location](#location) from the Popup.
   *
   * @method
   */
  @aliasOf("viewModel.clear")
  clear(): void {}

  /**
   * Closes the popup by setting its [visible](#visible) property to `false`. Users can
   * alternatively close the popup
   * by directly setting the [visible](#visible) property to `false`.
   *
   * @see [Popup.visible](#visible)
   */
  close() {
    this.visible = false;
  }

  /**
   * Use this method to give focus to the Widget if the widget is able to be focused.
   *
   * @method
   * @since 4.6
   *
   */
  focus(): void {
    const { visible } = this;

    if (!visible) {
      logger.warn("Popup cannot be focused while visible is false");
    }

    this._focusContainer = true;
    this.scheduleRender();
  }

  /**
   * Selects the feature at the next index in relation to the selected feature.
   *
   * @method
   *
   * @see [selectedFeatureIndex](#selectedFeatureIndex)
   *
   * @return {module:esri/widgets/Popup/PopupViewModel} Returns an instance of the popup's view model.
   */
  @aliasOf("viewModel.next")
  next(): PopupViewModel {
    return null;
  }

  /**
   * Opens the popup at the given location with content defined either explicitly with `content`
   * or driven from the {@link module:esri/PopupTemplate} of input features. This method sets
   * the popup's [visible](#visible) property to `true`. Users can alternatively open the popup
   * by directly setting the [visible](#visible) property to `true`. The popup will only display if
   * the view's size constraints in [dockOptions](#dockOptions) are met or the [location](#location)
   * property is set to a geometry.
   *
   * @see [Intro to popups](../sample-code/intro-popup/index.html)
   * @see [Popup.visible](#visible)
   * @see [Sample - QueryTask](../sample-code/tasks-query/index.html)
   * @see [Sample - Popup with DOM node](../sample-code/popup-domnode/index.html)
   *
   * @param {Object} [options] - Defines the location and content of the popup when opened.
   * @param {string} [options.title] - Sets the [title](#title) of the popup.
   * @param {string} [options.content] - Sets the the [content](#content) of the popup.
   * @param {module:esri/geometry/Geometry} [options.location] - Sets the popup's [location](#location), which is the geometry used to position the popup.
   * @param {module:esri/Graphic[]} [options.features] - Sets the popup's [features](#features), which populate the title and content of the popup based on each graphic's {@link module:esri/PopupTemplate}.
   * @param {Promise[]} [options.promises] - Sets pending [promises](#promises) on the popup. The popup will display once the promises resolve. Each promise must resolve to an array of {@link module:esri/Graphic Graphics}.
   * @param {boolean} [options.featureMenuOpen=false] - **Since:** 4.5 <br> This property enables multiple features in a popup to display in a list rather than displaying the first selected feature. Setting this to `true`
   * allows the user to scroll through the list of features returned from the query and choose the selection they want to display within the popup.
   * @param {boolean} [options.updateLocationEnabled=false] - When `true` indicates the popup should update its [location](#location) for each paginated feature based on the [selected feature's](#selectedFeature) geometry.
   * @param {boolean} [options.collapsed=false] - **Since:** 4.5 <br> When `true`, indicates that only the popup header will display.
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
   *   title: "You clicked here",  // title displayed in the popup
   *   content: "This is a point of interest",  // content displayed in the popup
   *   updateLocationEnabled: true  // updates the location of popup based on
   *   // selected feature's geometry
   * });
   *
   * @example
   * view.popup.open({
   *   features: graphics,  // array of graphics
   *   featureMenuOpen: true, // selected features initially display in a list
   * });
   *
   */
  open(options?: PopupOpenOptions): void {
    this._handles.remove(SELECTED_INDEX_HANDLE_KEY);

    const featureMenuOpen = options ? !!options.featureMenuOpen : false;

    const setOptions: PopupOpenOptions = {
      featureMenuOpen
    };

    this.set(setOptions);

    this.viewModel.open(options);

    this._addSelectedFeatureIndexHandle();
  }

  /**
   * Selects the feature at the previous index in relation to the selected feature.
   *
   * @method
   *
   * @see [selectedFeatureIndex](#selectedFeatureIndex)
   *
   * @return {module:esri/widgets/Popup/PopupViewModel} Returns an instance of the popup's view model.
   */
  @aliasOf("viewModel.previous")
  previous(): PopupViewModel {
    return null;
  }

  /**
   * Positions the popup on the view.
   * Moves the popup into the view's extent if the popup is partially or fully outside
   * the view's extent.
   *
   * If the popup is partially out of view, the view will move to fully show the popup.
   * If the popup is fully out of view, the view will move to the popup's location.
   */
  reposition() {
    this.renderNow();
    this._positionContainer();
    this._setCurrentAlignment();
  }

  /**
   * Triggers the [trigger-action](#event:trigger-action) event and executes the [action](#actions)
   * at the specified index in the [actions](#actions) array.
   *
   * @param {number} actionIndex - The index of the [action](#actions) to execute.
   *
   * @method
   */
  @aliasOf("viewModel.triggerAction")
  triggerAction(actionIndex: number): void {
    return null;
  }

  render() {
    const {
      collapsed,
      collapseEnabled,
      dockEnabled,
      featureMenuOpen,
      featureNavigationEnabled,
      featureWidgets,
      visible
    } = this;

    const {
      allActions,
      content,
      featureCount,
      pendingPromisesCount,
      selectedFeatureIndex,
      title
    } = this.viewModel;

    const featureNavigationVisible = featureCount > 1 && featureNavigationEnabled;
    const isFeatureMenuOpen = featureCount > 1 && featureMenuOpen;
    const contentVisible = collapseEnabled && !isFeatureMenuOpen && collapsed;
    const actionsCount = allActions && allActions.length;
    const pageText =
      featureNavigationVisible && this._getPageText(featureCount, selectedFeatureIndex);
    const contentNode = this._renderContent();
    const isRtl = widgetUtils.isRtl();
    const hasContent = this.get("selectedFeatureWidget")
      ? this.get("selectedFeatureWidget.viewModel.waitingForContent") ||
        this.get("selectedFeatureWidget.viewModel.content")
      : contentNode;

    const dockTitle = dockEnabled ? i18n.undock : i18n.dock;

    const { currentAlignment, currentDockPosition } = this;

    const loadingContainerNode = !!pendingPromisesCount ? (
      <div
        key={buildKey("loading-container")}
        role="presentation"
        class={CSS.loadingContainer}
        aria-label={i18n.loading}
        title={i18n.loading}
      >
        <span aria-hidden="true" class={this.classes(CSS.icon, CSS.iconLoading, CSS.rotating)} />
      </div>
    ) : null;

    const featureMenuIconClasses = {
      [CSS.iconFeatureMenu]: !isFeatureMenuOpen,
      [CSS.iconClose]: isFeatureMenuOpen
    };

    const featureMenuIconNode = (
      <span aria-hidden="true" class={this.classes(CSS.icon, featureMenuIconClasses)} />
    );

    const previousIconClasses = {
      [CSS.iconRightTriangleArrow]: isRtl,
      [CSS.paginationPreviousIconRTL]: isRtl,
      [CSS.iconLeftTriangleArrow]: !isRtl,
      [CSS.paginationPreviousIconLTR]: !isRtl
    };

    const previousIconNode = (
      <span aria-hidden="true" class={this.classes(CSS.icon, previousIconClasses)} />
    );

    const paginationPreviousButtonNode = (
      <div
        role="button"
        tabIndex={0}
        bind={this}
        onclick={this._previous}
        onkeydown={this._previous}
        class={this.classes(CSS.button, CSS.paginationPrevious)}
        aria-label={i18n.previous}
        title={i18n.previous}
      >
        {previousIconNode}
      </div>
    );

    const nextIconClasses = {
      [CSS.iconLeftTriangleArrow]: isRtl,
      [CSS.paginationNextIconRTL]: isRtl,
      [CSS.iconRightTriangleArrow]: !isRtl,
      [CSS.paginationNextIconLTR]: !isRtl
    };

    const nextIconNode = (
      <span aria-hidden="true" class={this.classes(CSS.icon, nextIconClasses)} />
    );

    const paginationNextButtonNode = (
      <div
        role="button"
        tabIndex={0}
        bind={this}
        onclick={this._next}
        onkeydown={this._next}
        class={this.classes(CSS.button, CSS.paginationNext)}
        aria-label={i18n.next}
        title={i18n.next}
      >
        {nextIconNode}
      </div>
    );

    const featureUpdatedAnim = widgetUtils.cssTransition("enter", CSS.hasFeatureUpdated);

    const featureMenuId = `${this.id}-feature-menu`;

    const featureMenuToggleNode = (
      <div
        role="button"
        tabIndex={0}
        bind={this}
        onclick={this._toggleFeatureMenu}
        onkeydown={this._toggleFeatureMenu}
        afterCreate={this._focusFeatureMenuButtonNode}
        afterUpdate={this._focusFeatureMenuButtonNode}
        class={this.classes(CSS.button, CSS.featureMenuButton)}
        aria-haspopup="true"
        aria-controls={featureMenuId}
        aria-expanded={featureMenuOpen}
        aria-label={i18n.menu}
        title={i18n.menu}
      >
        {featureMenuIconNode}
      </div>
    );

    const paginationTextNode = <div class={CSS.paginationText}>{pageText}</div>;

    const navigationButtonsNode = featureNavigationVisible ? (
      <div class={CSS.navigationButtons} enterAnimation={featureUpdatedAnim}>
        {paginationPreviousButtonNode}
        {paginationTextNode}
        {paginationNextButtonNode}
        {loadingContainerNode || featureMenuToggleNode}
      </div>
    ) : null;

    const wouldDockTo = this._wouldDockTo();

    const dockIconClasses = {
      [CSS.iconUndock]: dockEnabled,
      [CSS.iconDock]: !dockEnabled,
      [CSS.iconDockToRight]:
        !dockEnabled && (wouldDockTo === "top-right" || wouldDockTo === "bottom-right"),
      [CSS.iconDockToLeft]:
        !dockEnabled && (wouldDockTo === "top-left" || wouldDockTo === "bottom-left"),
      [CSS.iconDockToTop]: !dockEnabled && wouldDockTo === "top-center",
      [CSS.iconDockToBottom]: !dockEnabled && wouldDockTo === "bottom-center"
    };

    const dockIconNode = (
      <span aria-hidden="true" class={this.classes(dockIconClasses, CSS.icon)} />
    );

    const dockButtonNode = this.get("dockOptions.buttonEnabled") ? (
      <div
        role="button"
        aria-label={dockTitle}
        title={dockTitle}
        tabIndex={0}
        bind={this}
        onclick={this._toggleDockEnabled}
        onkeydown={this._toggleDockEnabled}
        afterCreate={this._focusDockButtonNode}
        afterUpdate={this._focusDockButtonNode}
        class={this.classes(CSS.button, CSS.buttonDock)}
      >
        {dockIconNode}
      </div>
    ) : null;

    const canBeCollapsed =
      collapseEnabled && title && (hasContent || actionsCount || featureNavigationVisible);
    const titleClasses = {
      [CSS.headerTitleButton]: canBeCollapsed
    };

    const titleRole = canBeCollapsed ? "button" : "heading";

    const titleLabel = canBeCollapsed ? (contentVisible ? i18n.expand : i18n.collapse) : "";

    const titleId = `${this.id}-popup-title`;

    const titleNode = title ? (
      <h2
        class={this.classes(CSS.headerTitle, titleClasses)}
        key={title}
        enterAnimation={featureUpdatedAnim}
        id={titleId}
        role={titleRole}
        aria-label={titleLabel}
        title={titleLabel}
        bind={this}
        tabIndex={canBeCollapsed ? 0 : -1}
        onclick={this._toggleCollapsed}
        onkeydown={this._toggleCollapsed}
        innerHTML={title}
      />
    ) : null;

    const closeIconNode = <span aria-hidden="true" class={this.classes(CSS.icon, CSS.iconClose)} />;

    const closeButtonNode = (
      <div
        role="button"
        tabIndex={0}
        bind={this}
        onclick={this._close}
        onkeydown={this._close}
        class={CSS.button}
        aria-label={i18n.close}
        title={i18n.close}
      >
        {closeIconNode}
      </div>
    );

    const headerNode = (
      <header class={CSS.header}>
        {titleNode}
        <div class={CSS.headerButtons}>
          {dockButtonNode}
          {closeButtonNode}
        </div>
      </header>
    );

    const contentId = `${this.id}-popup-content`;

    const contentNodeContainer =
      hasContent && !contentVisible ? (
        <article
          key={content}
          enterAnimation={featureUpdatedAnim}
          id={contentId}
          class={CSS.content}
        >
          {contentNode}
        </article>
      ) : null;

    const showButtonsTop =
      !contentVisible &&
      (currentAlignment === "bottom-left" ||
        currentAlignment === "bottom-center" ||
        currentAlignment === "bottom-right" ||
        currentDockPosition === "top-left" ||
        currentDockPosition === "top-center" ||
        currentDockPosition === "top-right");

    const showButtonsBottom =
      !contentVisible &&
      (currentAlignment === "top-left" ||
        currentAlignment === "top-center" ||
        currentAlignment === "top-right" ||
        currentDockPosition === "bottom-left" ||
        currentDockPosition === "bottom-center" ||
        currentDockPosition === "bottom-right");

    const actionsNode = !isFeatureMenuOpen ? (
      <div key={buildKey("actions")} class={CSS.actions}>
        {this._renderActions()}
      </div>
    ) : null;

    const navigationNode = (
      <section key={buildKey("navigation")} class={CSS.navigation}>
        {navigationButtonsNode}
      </section>
    );

    const featureButtonsNode =
      featureNavigationVisible || actionsCount ? (
        <div key={buildKey("feature-buttons")} class={CSS.featureButtons}>
          {actionsNode}
          {navigationNode}
        </div>
      ) : null;

    const featureMenuNode = this._renderFeatureMenuNode(
      featureWidgets,
      selectedFeatureIndex,
      isFeatureMenuOpen,
      featureMenuId
    );

    const infoText = esriLang.substitute(
      {
        total: featureWidgets.length
      },
      i18n.selectedFeatures
    );

    const menuNode = (
      <section key={buildKey("menu")} class={CSS.featureMenu}>
        <h2 class={CSS.featureMenuHeader}>{infoText}</h2>
        <nav
          class={CSS.featureMenuViewport}
          afterCreate={this._featureMenuViewportNodeUpdated}
          afterUpdate={this._featureMenuViewportNodeUpdated}
        >
          {featureMenuNode}
        </nav>
      </section>
    );

    const pointerNode = !dockEnabled ? (
      <div key={buildKey("pointer")} class={CSS.pointer} role="presentation">
        <div class={this.classes(CSS.pointerDirection, CSS.shadow)} />
      </div>
    ) : null;

    const layerTitle = this.get("selectedFeature.layer.title");
    const layerId = this.get("selectedFeature.layer.id");

    const mainContainerClasses = {
      [CSS.shadow]: dockEnabled
    };

    const baseClasses = {
      [CSS.alignTopCenter]: visible && currentAlignment === "top-center",
      [CSS.alignBottomCenter]: visible && currentAlignment === "bottom-center",
      [CSS.alignTopLeft]: visible && currentAlignment === "top-left",
      [CSS.alignBottomLeft]: visible && currentAlignment === "bottom-left",
      [CSS.alignTopRight]: visible && currentAlignment === "top-right",
      [CSS.alignBottomRight]: currentAlignment === "bottom-right",
      [CSS.isDocked]: visible && dockEnabled,
      [CSS.shadow]: visible && !dockEnabled,
      [CSS.isDockedTopLeft]: visible && currentDockPosition === "top-left",
      [CSS.isDockedTopCenter]: visible && currentDockPosition === "top-center",
      [CSS.isDockedTopRight]: visible && currentDockPosition === "top-right",
      [CSS.isDockedBottomLeft]: visible && currentDockPosition === "bottom-left",
      [CSS.isDockedBottomCenter]: visible && currentDockPosition === "bottom-center",
      [CSS.isDockedBottomRight]: visible && currentDockPosition === "bottom-right",
      [CSS.isFeatureMenuOpen]: visible && isFeatureMenuOpen
    };

    const menuTopNode = showButtonsTop ? menuNode : null;
    const menuBottomNode = showButtonsBottom ? menuNode : null;
    const buttonsTopNode = showButtonsTop ? featureButtonsNode : null;
    const buttonsBottomNode = showButtonsBottom ? featureButtonsNode : null;

    const mainContainerNode = (
      <div
        class={this.classes(CSS.main, CSS.widget, mainContainerClasses)}
        tabIndex={-1}
        role="dialog"
        aria-labelledby={titleNode ? titleId : ""}
        aria-describedby={contentNodeContainer ? contentId : ""}
        bind={this}
        onkeyup={this._handleMainKeyup}
        afterCreate={this._mainContainerNodeUpdated}
        afterUpdate={this._mainContainerNodeUpdated}
      >
        {buttonsTopNode}
        {menuTopNode}
        {headerNode}
        {contentNodeContainer}
        {buttonsBottomNode}
        {menuBottomNode}
      </div>
    );

    return (
      <div
        key={buildKey("base")}
        class={this.classes(CSS.base, baseClasses)}
        role="presentation"
        data-layer-title={layerTitle}
        data-layer-id={layerId}
        bind={this}
        afterCreate={this._positionContainer}
        afterUpdate={this._positionContainer}
      >
        {visible ? [mainContainerNode, pointerNode] : null}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _featureMenuOpenChanged(value: boolean): void {
    if (value) {
      this._focusFirstFeature = true;
    } else {
      this._focusFeatureMenuButton = true;
    }
  }

  private _setTitleFromFeatureWidget(title: string): void {
    const { selectedFeatureWidget } = this;
    if (selectedFeatureWidget) {
      this.viewModel.title = title || "";
    }
  }

  private _setContentFromFeatureWidget(): void {
    const { selectedFeatureWidget } = this;
    if (selectedFeatureWidget) {
      this.viewModel.content = selectedFeatureWidget;
    }
  }

  private _handleFeatureMenuKeyup(event: KeyboardEvent): void {
    const { keyCode } = event;

    if (keyCode === ESCAPE) {
      event.stopPropagation();
      this.featureMenuOpen = false;
    }
  }

  private _handleFeatureMenuItemKeyup(event: KeyboardEvent): void {
    const { keyCode } = event;
    const { _featureMenuNode } = this;
    const count = this.get<number>("features.length");
    const node = event.currentTarget as Element;
    const featureIndex = node["data-feature-index"] as number;

    if (!_featureMenuNode) {
      return;
    }

    const items = _featureMenuNode.querySelectorAll("li");

    if (keyCode === UP_ARROW) {
      event.stopPropagation();
      const previousIndex = featureIndex - 1;
      const value = (previousIndex + count) % count;
      const previousElement = items[value] as HTMLElement;
      previousElement.focus();
      return;
    }

    if (keyCode === DOWN_ARROW) {
      event.stopPropagation();
      const nextIndex = featureIndex + 1;
      const value = (nextIndex + count) % count;
      const nextElement = items[value] as HTMLElement;
      nextElement.focus();
      return;
    }

    if (keyCode === HOME) {
      event.stopPropagation();
      const firstElement = items[0] as HTMLElement;
      firstElement.focus();
      return;
    }

    if (keyCode === END) {
      event.stopPropagation();
      const lastElement = items[items.length - 1] as HTMLElement;
      lastElement.focus();
      return;
    }
  }

  private _handleMainKeyup(event: KeyboardEvent): void {
    const { keyCode } = event;

    if (keyCode === LEFT_ARROW) {
      event.stopPropagation();
      this.previous();
    }

    if (keyCode === RIGHT_ARROW) {
      event.stopPropagation();
      this.next();
    }
  }

  private _zoomToAction(event: ActionEvent): void {
    if (!event.action || event.action.disabled || event.action.id !== ZOOM_TO_ACTION_ID) {
      return;
    }

    this.viewModel.zoomToLocation();
  }

  private _spinnerEnabledChange(spinnerEnabled: boolean): void {
    this._destroySpinner();

    if (!spinnerEnabled) {
      return;
    }

    const view = this.get<MapView | SceneView>("viewModel.view");
    this._createSpinner(view);
  }

  private _displaySpinner(): void {
    const { _spinner: spinner } = this;

    if (!spinner) {
      return;
    }

    const { location, waitingForResult } = this.viewModel;

    if (waitingForResult) {
      spinner.show({
        location
      });

      return;
    }

    spinner.hide();
  }

  private _getIconStyles(subActionImage: string): HashMap<string> {
    return {
      "background-image": subActionImage ? `url(${subActionImage})` : ""
    };
  }

  private _renderAction(
    action: Action,
    actionIndex: number,
    total: number,
    actionsKey: string
  ): any {
    const actionHandle = watchUtils.watch(
      action,
      ["active", "className", "disabled", "id", "title", "image", "visible"],
      () => this.scheduleRender()
    );

    this._handles.add(actionHandle, actionsKey);

    const selectedFeatureAttributes = this.get("selectedFeature.attributes");

    if (action.id === ZOOM_TO_ACTION_ID) {
      action.title = i18n.zoom;
      action.className = CSS.iconZoom;
    }

    const { title: actionTitle, className: actionClassName } = action;

    const actionImage = !action.image && !actionClassName ? DEFAULT_ACTION_IMAGE : action.image;

    const subActionTitle =
      actionTitle && selectedFeatureAttributes
        ? esriLang.substitute(selectedFeatureAttributes, actionTitle)
        : actionTitle;
    const subActionClass =
      actionClassName && selectedFeatureAttributes
        ? esriLang.substitute(selectedFeatureAttributes, actionClassName)
        : actionClassName;
    const subActionImage =
      actionImage && selectedFeatureAttributes
        ? esriLang.substitute(selectedFeatureAttributes, actionImage)
        : actionImage;

    const iconClasses = {
      [CSS.iconLoading]: action.active,
      [CSS.rotating]: action.active,
      [CSS.actionImage]: !action.active && !!subActionImage
    };

    if (subActionClass) {
      iconClasses[subActionClass] = !action.active;
    }

    const buttonClasses = {
      [CSS.action]: action.type !== "toggle",
      [CSS.actionToggle]: action.type === "toggle",
      [CSS.actionToggleOn]: action.type === "toggle" && action.value,
      [CSS.buttonDisabled]: action.disabled
    };

    const textNode =
      total <= this._displayActionTextLimit ? (
        <span key="text" class={CSS.actionText}>
          {subActionTitle}
        </span>
      ) : null;

    return action.visible ? (
      <div
        key={action}
        role="button"
        tabIndex={0}
        title={subActionTitle}
        aria-label={subActionTitle}
        class={this.classes(CSS.button, buttonClasses)}
        bind={this}
        data-action-index={actionIndex}
        onclick={this._triggerAction}
        onkeydown={this._triggerAction}
      >
        <span
          key={"icon"}
          aria-hidden="true"
          class={this.classes(CSS.icon, iconClasses)}
          styles={this._getIconStyles(subActionImage)}
        />
        {textNode}
      </div>
    ) : null;
  }

  private _renderActions(): any {
    const actionsKey = "actions";
    this._handles.remove(actionsKey);

    const { allActions } = this.viewModel;

    if (!allActions) {
      return;
    }

    const totalActions = allActions.length;

    const actionNodes = allActions
      .map((action, index) => {
        return this._renderAction(action, index, totalActions, actionsKey);
      })
      .toArray();

    return actionNodes;
  }

  private _addSelectedFeatureIndexHandle(): void {
    const selectedFeatureIndexHandle = watchUtils.watch<number>(
      this,
      "viewModel.selectedFeatureIndex",
      (value, oldValue) => this._selectedFeatureIndexUpdated(value, oldValue)
    );

    this._handles.add(selectedFeatureIndexHandle, SELECTED_INDEX_HANDLE_KEY);
  }

  private _selectedFeatureIndexUpdated(value: number, oldValue: number): void {
    const { featureCount, featureMenuOpen } = this;

    if (!featureCount || !featureMenuOpen || value === oldValue || value === -1) {
      return;
    }

    this.featureMenuOpen = false;
  }
  private _updateFeatureWidget(): void {
    const { featureWidgets } = this;
    const { selectedFeatureIndex } = this.viewModel;
    const selectedFeatureWidget = featureWidgets[selectedFeatureIndex] || null;

    if (selectedFeatureWidget && !selectedFeatureWidget.contentEnabled) {
      selectedFeatureWidget.contentEnabled = true;
    }

    this._set("selectedFeatureWidget", selectedFeatureWidget);
  }

  private _destroyFeatureWidgets(): void {
    this.featureWidgets.forEach((featureWidget) => featureWidget.destroy());
    this._set("featureWidgets", []);
  }

  private _createFeatureWidgets(features: Graphic[]): void {
    const { featureWidgets } = this;
    const featureWidgetsCopy = featureWidgets.slice(0);
    const view = this.get("viewModel.view");
    const newFeatureWidgets: Feature[] = [];

    features.forEach((feature, featureIndex) => {
      if (!feature) {
        return;
      }

      let foundWidget: Feature = null;

      featureWidgetsCopy.some((featureWidget, featureWidgetIndex) => {
        if (featureWidget && featureWidget.graphic === feature) {
          foundWidget = featureWidget;
          featureWidgetsCopy.splice(featureWidgetIndex, 1);
        }

        return !!foundWidget;
      });

      newFeatureWidgets[featureIndex] =
        foundWidget ||
        new Feature({
          contentEnabled: false,
          graphic: feature,
          view
        });
    });

    featureWidgetsCopy.forEach((featureWidget) => featureWidget && featureWidget.destroy());

    this._set("featureWidgets", newFeatureWidgets);
  }

  private _isScreenLocationWithinView(
    screenLocation: ScreenPoint,
    view: MapView | SceneView
  ): boolean {
    return (
      screenLocation.x > -1 &&
      screenLocation.y > -1 &&
      screenLocation.x <= view.width &&
      screenLocation.y <= view.height
    );
  }

  private _isOutsideView(options: PopupOutsideViewOptions): boolean {
    const { popupHeight, popupWidth, screenLocation, side, view } = options;

    if (isNaN(popupWidth) || isNaN(popupHeight) || !view || !screenLocation) {
      return false;
    }

    const padding = view.padding;

    if (side === "right" && screenLocation.x + popupWidth / 2 > view.width - padding.right) {
      return true;
    }

    if (side === "left" && screenLocation.x - popupWidth / 2 < padding.left) {
      return true;
    }

    if (side === "top" && screenLocation.y - popupHeight < padding.top) {
      return true;
    }

    if (side === "bottom" && screenLocation.y + popupHeight > view.height - padding.bottom) {
      return true;
    }

    return false;
  }

  private _determineCurrentAlignment(): Alignment {
    const {
      _pointerOffsetInPx: pointerOffset,
      _containerNode: containerNode,
      _mainContainerNode: mainContainerNode,
      viewModel
    } = this;

    const { screenLocation, view } = viewModel;

    if (!screenLocation || !view || !containerNode) {
      return "top-center";
    }

    if (!this._isScreenLocationWithinView(screenLocation, view)) {
      return this._get("currentAlignment") || "top-center";
    }

    function cssPropertyToInteger(value: string): number {
      return parseInt(value.replace(/[^-\d\.]/g, ""), 10);
    }

    const mainComputedStyle = mainContainerNode
      ? window.getComputedStyle(mainContainerNode, null)
      : null;

    const contentMaxHeight = mainComputedStyle
      ? cssPropertyToInteger(mainComputedStyle.getPropertyValue("max-height"))
      : 0;

    const contentHeight = mainComputedStyle
      ? cssPropertyToInteger(mainComputedStyle.getPropertyValue("height"))
      : 0;

    const contentBox = domGeometry.getContentBox(containerNode);
    const popupWidth = contentBox.w + pointerOffset;
    const popupHeight = Math.max(contentBox.h, contentMaxHeight, contentHeight) + pointerOffset;

    const isOutsideViewRight = this._isOutsideView({
      popupHeight,
      popupWidth,
      screenLocation,
      side: "right",
      view
    });

    const isOutsideViewLeft = this._isOutsideView({
      popupHeight,
      popupWidth,
      screenLocation,
      side: "left",
      view
    });

    const isOutsideViewTop = this._isOutsideView({
      popupHeight,
      popupWidth,
      screenLocation,
      side: "top",
      view
    });

    const isOutsideViewBottom = this._isOutsideView({
      popupHeight,
      popupWidth,
      screenLocation,
      side: "bottom",
      view
    });

    return isOutsideViewLeft
      ? isOutsideViewTop
        ? "bottom-right"
        : "top-right"
      : isOutsideViewRight
        ? isOutsideViewTop
          ? "bottom-left"
          : "top-left"
        : isOutsideViewTop
          ? isOutsideViewBottom
            ? "top-center"
            : "bottom-center"
          : "top-center";
  }

  private _getCurrentAlignment(): Alignment {
    const { alignment, dockEnabled } = this;

    if (dockEnabled) {
      return null;
    }

    const currentAlignment =
      alignment === "auto"
        ? this._determineCurrentAlignment()
        : typeof alignment === "function"
          ? alignment.call(this)
          : alignment;
    return currentAlignment;
  }

  private _setCurrentAlignment(): void {
    this._set("currentAlignment", this._getCurrentAlignment());
  }

  private _setCurrentDockPosition(): void {
    this._set("currentDockPosition", this._getCurrentDockPosition());
  }

  private _getDockPosition(): DockPosition {
    const dockPosition = this.get<DockPosition>("dockOptions.position");
    const position =
      dockPosition === "auto"
        ? this._determineCurrentDockPosition()
        : typeof dockPosition === "function"
          ? dockPosition.call(this)
          : dockPosition;
    return position;
  }

  private _getCurrentDockPosition(): DockPosition {
    return this.dockEnabled ? this._getDockPosition() : null;
  }

  private _wouldDockTo(): DockPosition {
    return !this.dockEnabled ? this._getDockPosition() : null;
  }

  private _renderFeatureMenuItemNode(
    featureWidget: Feature,
    featureWidgetIndex: number,
    selectedFeatureIndex: number,
    featureMenuOpen: boolean
  ): any {
    const isSelectedFeature = featureWidgetIndex === selectedFeatureIndex;

    const itemClasses = {
      [CSS.featureMenuSelected]: isSelectedFeature
    };

    const checkMarkNode = isSelectedFeature ? (
      <span
        key={buildKey(`feature-menu-selected-feature-${selectedFeatureIndex}`)}
        title={i18n.selectedFeature}
        aria-label={i18n.selectedFeature}
        class={CSS.iconCheckMark}
      />
    ) : null;

    const titleNode = <span innerHTML={featureWidget.title || i18n.untitled} />;

    return (
      <li
        role="menuitem"
        tabIndex={-1}
        key={buildKey(`feature-menu-feature-${selectedFeatureIndex}`)}
        class={this.classes(itemClasses, CSS.featureMenuItem)}
        bind={this}
        data-feature-index={featureWidgetIndex}
        onkeyup={this._handleFeatureMenuItemKeyup}
        onclick={this._selectFeature}
        onkeydown={this._selectFeature}
      >
        <span class={CSS.featureMenuTitle}>
          {titleNode}
          {checkMarkNode}
        </span>
      </li>
    );
  }

  private _renderFeatureMenuNode(
    featureWidgets: Feature[],
    selectedFeatureIndex: number,
    featureMenuOpen: boolean,
    featureMenuId: string
  ): any {
    return featureWidgets.length > 1 ? (
      <ol
        class={CSS.featureMenuList}
        id={featureMenuId}
        bind={this}
        afterCreate={this._featureMenuNodeUpdated}
        afterUpdate={this._featureMenuNodeUpdated}
        onkeyup={this._handleFeatureMenuKeyup}
        role="menu"
      >
        {featureWidgets.map((featureWidget, featureWidgetIndex) => {
          return this._renderFeatureMenuItemNode(
            featureWidget,
            featureWidgetIndex,
            selectedFeatureIndex,
            featureMenuOpen
          );
        })}
      </ol>
    ) : null;
  }

  private _determineCurrentDockPosition(): string {
    const view = this.get<MapView | SceneView>("viewModel.view");
    const defaultDockPosition = widgetUtils.isRtl() ? "top-left" : "top-right";

    if (!view) {
      return defaultDockPosition;
    }

    const viewPadding = view.padding || { left: 0, right: 0, top: 0, bottom: 0 };
    const viewWidth = view.width - viewPadding.left - viewPadding.right;
    const breakpoints = view.get<Breakpoints>("breakpoints");

    if (breakpoints && viewWidth <= breakpoints.xsmall) {
      return "bottom-center";
    }

    return defaultDockPosition;
  }

  private _renderContent(): any {
    const content = this.get("viewModel.content");

    if (typeof content === "string") {
      return <div key={content} innerHTML={content} />;
    }

    if (isWidget(content)) {
      return <div key={content}>{content.render()}</div>;
    }

    if (content instanceof HTMLElement) {
      return <div key={content} bind={content} afterCreate={this._attachToNode} />;
    }

    if (isWidgetBase(content)) {
      return <div key={content} bind={content.domNode} afterCreate={this._attachToNode} />;
    }
  }

  private _attachToNode(this: HTMLElement, node: HTMLElement): void {
    const content = this;
    node.appendChild(content);
  }

  private _positionContainer(containerNode: HTMLDivElement = this._containerNode): void {
    if (containerNode) {
      this._containerNode = containerNode;
    }

    if (!containerNode) {
      return;
    }

    const { screenLocation } = this.viewModel;
    const domGeometryBox = domGeometry.getContentBox(containerNode);
    const positionStyle = this._calculatePositionStyle(screenLocation, domGeometryBox);

    if (!positionStyle) {
      return;
    }

    containerNode.style.top = positionStyle.top;
    containerNode.style.left = positionStyle.left;
    containerNode.style.bottom = positionStyle.bottom;
    containerNode.style.right = positionStyle.right;
  }

  private _calculateFullWidth(width: number): number {
    const { currentAlignment, _pointerOffsetInPx: pointerOffset } = this;

    if (
      currentAlignment === "top-left" ||
      currentAlignment === "bottom-left" ||
      currentAlignment === "top-right" ||
      currentAlignment === "bottom-right"
    ) {
      return width + pointerOffset;
    }

    return width;
  }

  private _calculateAlignmentPosition(
    x: number,
    y: number,
    view: MapView | SceneView,
    width: number
  ): PopupPosition {
    const { currentAlignment, _pointerOffsetInPx: pointerOffset } = this;
    const halfWidth = width / 2;
    const viewHeightOffset = view.height - y;
    const viewWidthOffset = view.width - x;
    const { padding } = this.view;

    if (currentAlignment === "bottom-center") {
      return {
        top: y + pointerOffset - padding.top,
        left: x - halfWidth - padding.left
      };
    }

    if (currentAlignment === "top-left") {
      return {
        bottom: viewHeightOffset + pointerOffset - padding.bottom,
        right: viewWidthOffset + pointerOffset - padding.right
      };
    }

    if (currentAlignment === "bottom-left") {
      return {
        top: y + pointerOffset - padding.top,
        right: viewWidthOffset + pointerOffset - padding.right
      };
    }

    if (currentAlignment === "top-right") {
      return {
        bottom: viewHeightOffset + pointerOffset - padding.bottom,
        left: x + pointerOffset - padding.left
      };
    }

    if (currentAlignment === "bottom-right") {
      return {
        top: y + pointerOffset - padding.top,
        left: x + pointerOffset - padding.left
      };
    }

    if (currentAlignment === "top-center") {
      return {
        bottom: viewHeightOffset + pointerOffset - padding.bottom,
        left: x - halfWidth - padding.left
      };
    }
  }

  private _calculatePositionStyle(
    screenLocation: ScreenPoint,
    domGeometryBox: dojo.DomGeometryBox
  ): PopupPositionStyle {
    const { dockEnabled, view } = this;

    if (!view) {
      return;
    }

    if (dockEnabled) {
      return {
        left: "",
        top: "",
        right: "",
        bottom: ""
      };
    }

    if (!screenLocation || !domGeometryBox) {
      return;
    }

    const width = this._calculateFullWidth(domGeometryBox.w);
    const position = this._calculateAlignmentPosition(
      screenLocation.x,
      screenLocation.y,
      view,
      width
    );

    if (!position) {
      return;
    }

    return {
      top: position.top !== undefined ? `${position.top}px` : "auto",
      left: position.left !== undefined ? `${position.left}px` : "auto",
      bottom: position.bottom !== undefined ? `${position.bottom}px` : "auto",
      right: position.right !== undefined ? `${position.right}px` : "auto"
    };
  }

  private _viewChange(newView: MapView | SceneView, oldView: MapView | SceneView): void {
    if (newView && oldView) {
      this.close();
      this.clear();
    }
  }

  private _viewReadyChange(isReady: boolean, wasReady: boolean): void {
    if (isReady) {
      const view = this.get<MapView | SceneView>("viewModel.view");
      this._wireUpView(view);
      return;
    }

    if (wasReady) {
      this.close();
      this.clear();
    }
  }

  private _wireUpView(view?: MapView | SceneView): void {
    this._destroySpinner();

    if (!view) {
      return;
    }

    const { spinnerEnabled } = this;

    if (spinnerEnabled) {
      this._createSpinner(view);
    }

    this._setDockEnabledForViewSize(this.dockOptions);
  }

  private _dockingThresholdCrossed(
    newSize: number[],
    oldSize: number[],
    dockingThreshold: DockOptionsBreakpoint
  ): boolean {
    const [currWidth, currHeight] = newSize,
      [prevWidth, prevHeight] = oldSize,
      { width: dockingWidth, height: dockingHeight } = dockingThreshold;

    return (
      (currWidth <= dockingWidth && prevWidth > dockingWidth) ||
      (currWidth > dockingWidth && prevWidth <= dockingWidth) ||
      (currHeight <= dockingHeight && prevHeight > dockingHeight) ||
      (currHeight > dockingHeight && prevHeight <= dockingHeight)
    );
  }

  private _updateDockEnabledForViewSize(newSize: number[], oldSize: number[]): void {
    if (!newSize || !oldSize) {
      return;
    }

    const viewPadding = this.get<ViewPadding>("viewModel.view.padding") || {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    const widthPadding = viewPadding.left + viewPadding.right;
    const heightPadding = viewPadding.top + viewPadding.bottom;
    const newUISize: number[] = [],
      oldUISize: number[] = [];
    newUISize[0] = newSize[0] - widthPadding;
    newUISize[1] = newSize[1] - heightPadding;
    oldUISize[0] = oldSize[0] - widthPadding;
    oldUISize[1] = oldSize[1] - heightPadding;
    /*
      When the size of the view changes, check to see if we need to switch the dockEnabled state
    */
    const { dockOptions } = this;
    const breakpoint = dockOptions.breakpoint;

    if (this._dockingThresholdCrossed(newUISize, oldUISize, breakpoint)) {
      this._setDockEnabledForViewSize(dockOptions);
    }

    this._setCurrentDockPosition();
  }

  private _focusDockButtonNode(element: HTMLDivElement): void {
    if (!this._focusDockButton) {
      return;
    }

    this._focusDockButton = false;
    element.focus();
  }

  private _mainContainerNodeUpdated(element: HTMLDivElement): void {
    this._mainContainerNode = element;

    if (this._focusContainer) {
      this._focusContainer = false;
      element.focus();
      return;
    }

    if (this._blurContainer) {
      this._blurContainer = false;
      element.blur();
      return;
    }
  }

  private _featureMenuNodeUpdated(element: HTMLElement): void {
    this._featureMenuNode = element;

    if (!element || !this._focusFirstFeature) {
      return;
    }

    this._focusFirstFeature = false;
    const items = element.querySelectorAll("li");
    if (items.length) {
      const firstItem = items[0] as HTMLElement;
      firstItem.focus();
    }
  }

  private _focusFeatureMenuButtonNode(element: HTMLDivElement): void {
    if (!this._focusFeatureMenuButton) {
      return;
    }

    this._focusFeatureMenuButton = false;
    element.focus();
  }

  private _featureMenuViewportNodeUpdated(element: HTMLElement): void {
    if (!element) {
      return;
    }

    element.scrollTop = 0;
  }

  private _toggleScreenLocationEnabled(): void {
    const { dockEnabled, visible, viewModel } = this;

    if (!viewModel) {
      return;
    }

    const screenLocationEnabled = visible && !dockEnabled;
    viewModel.screenLocationEnabled = screenLocationEnabled;
  }

  private _shouldDockAtCurrentViewSize(dockOptions: DockOptions): boolean {
    const breakpoint = dockOptions.breakpoint;
    const { width: uiWidth, height: uiHeight } = this.get<UI>("viewModel.view.ui");

    if (isNaN(uiWidth) || isNaN(uiHeight)) {
      return false;
    }

    const crossedWidthBreakpoint =
      breakpoint.hasOwnProperty("width") && uiWidth <= breakpoint.width;
    const crossedHeightBreakpoint =
      breakpoint.hasOwnProperty("height") && uiHeight <= breakpoint.height;

    return crossedWidthBreakpoint || crossedHeightBreakpoint;
  }

  private _setDockEnabledForViewSize(dockOptions: DockOptions): void {
    if (dockOptions.breakpoint) {
      this.dockEnabled = this._shouldDockAtCurrentViewSize(dockOptions);
    }
  }

  private _getPageText(featureCount: number, selectedFeatureIndex: number): string {
    return esriLang.substitute(
      {
        index: selectedFeatureIndex + 1,
        total: featureCount
      },
      i18n.pageText
    );
  }

  private _destroySpinner(): void {
    const { _spinner, view } = this;
    if (_spinner) {
      view && view.ui.remove(this._spinner, SPINNER_KEY);
      _spinner.destroy();
      this._spinner = null;
    }
  }

  private _createSpinner(view: MapView | SceneView): void {
    if (!view) {
      return;
    }

    this._spinner = new Spinner({
      view: view
    });

    view.ui.add(this._spinner, {
      key: SPINNER_KEY,
      position: "manual"
    });
  }

  @accessibleHandler()
  private _toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  @accessibleHandler()
  private _close(): void {
    this.close();
    this.view && this.view.focus();
  }

  @accessibleHandler()
  private _toggleDockEnabled(): void {
    this.dockEnabled = !this.dockEnabled;
    this._focusDockButton = true;
    this.scheduleRender();
  }

  @accessibleHandler()
  private _toggleFeatureMenu(): void {
    const toggleValue = !this.featureMenuOpen;
    this._featureMenuOpenChanged(toggleValue);
    this.featureMenuOpen = toggleValue;
  }

  @accessibleHandler()
  private _triggerAction(event: Event): void {
    const node = event.currentTarget as Element;
    const actionIndex = node["data-action-index"] as number;
    const action = this.viewModel.allActions.getItemAt(actionIndex);

    if (action && action.type === "toggle") {
      action.value = !action.value;
    }

    this.viewModel.triggerAction(actionIndex);
  }

  @accessibleHandler()
  private _selectFeature(event: Event): void {
    const node = event.currentTarget as Element;
    const featureIndex = node["data-feature-index"] as number;

    if (!isNaN(featureIndex)) {
      this.viewModel.selectedFeatureIndex = featureIndex;
    }
  }

  @accessibleHandler()
  private _next(): void {
    this.next();
  }

  @accessibleHandler()
  private _previous(): void {
    this.previous();
  }
}

export = Popup;
