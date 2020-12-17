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
 * [![popup-basic-example](../../assets/img/apiref/widgets/popup-basic.png)](../sample-code/sandbox/sandbox.html?sample=intro-popup)
 *
 * In the image above, the text "Marriage in NY, Zip Code: 11385" is the popup's `title`. The remaining text is
 * its `content`. A dock button ![popup-dock-btn](../../assets/img/apiref/widgets/popup-dock.png) may also be available in the
 * top right corner of the popup. This allows the user to dock the popup to one of the sides or corners of the view.
 * The options for docking may be set in the [dockOptions](#dockOptions) property.
 *
 * Popups can also contain [actions](#actions) that act like buttons,
 * which execute a function defined by the developer when clicked.
 * By default, every popup has a "Zoom in" action ![popupTemplate-zoom-action](../../assets/img/apiref/widgets/popuptemplate-zoom-action.png)
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
 * @see [Popup.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Popup.tsx)
 * @see [Popup.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Popup.scss)
 * @see module:esri/PopupTemplate
 * @see {@link module:esri/views/View#popup View.popup}
 * @see [Intro to popups](../sample-code/intro-popup/index.html)
 * @see [Intro to PopupTemplate](../sample-code/intro-popuptemplate/index.html)
 * @see [Sample - Dock positions with popup](../sample-code/popup-docking-position/index.html)
 * @see [Sample - Popup actions](../sample-code/popup-actions/index.html)
 * @see [Sample - Custom popup actions per feature](../sample-code/popup-custom-action/index.html)
 * @see [Sample - Popup with edit action](../sample-code/popup-editaction/index.html)
 * @see [Sample - Popup with DOM node](../sample-code/popup-domnode/index.html)
 * @see [Guide - Esri Icon Font](../guide/esri-icon-font/index.html)
 * @see module:esri/widgets/Popup/PopupViewModel
 */

// esri
import Graphic from "esri/Graphic";
import { substitute } from "esri/intl";

// esri.core
import Collection from "esri/core/Collection";
import { deprecatedProperty } from "esri/core/deprecate";
import { eventKey } from "esri/core/events";
import Handles from "esri/core/Handles";
import Logger from "esri/core/Logger";
import { ScreenPoint } from "esri/core/screenUtils";
import { throttle } from "esri/core/throttle";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.geometry
import Point from "esri/geometry/Point";

// esri.t9n
import type CommonMessages from "esri/t9n/common";

// esri.views
import { Breakpoints } from "esri/views/interfaces";
import MapView from "esri/views/MapView";
import { FetchPopupFeaturesResult } from "esri/views/PopupView";
import SceneView from "esri/views/SceneView";

// esri.widgets
import Feature from "esri/widgets/Feature";
import Spinner from "esri/widgets/Spinner";
import Widget from "esri/widgets/Widget";

// esri.widgets.Feature
import FeatureViewModel from "esri/widgets/Feature/FeatureViewModel";

// esri.widgets.Feature.support
import { FeatureContentMixin } from "esri/widgets/Feature/support/FeatureContentMixin";

// esri.widgets.Popup
import {
  Action,
  Alignment,
  DockOptions,
  DockOptionsBreakpoint,
  DockPosition,
  PositionValue,
  PositionResult,
  PopupOpenOptions,
  PopupOutsideViewOptions,
  PopupPosition,
  PopupPositionStyle,
  ViewPadding,
  FetchFeaturesOptions
} from "esri/widgets/Popup/interfaces";
import PopupViewModel from "esri/widgets/Popup/PopupViewModel";

// esri.widgets.Popup.t9n
import type PopupMessages from "esri/widgets/Popup/t9n/Popup";

// esri.widgets.support
import { GoToOverride } from "esri/widgets/support/GoTo";
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx, vmEvent, messageBundle } from "esri/widgets/support/widget";
import * as widgetUtils from "esri/widgets/support/widgetUtils";

interface DividedActions {
  inlineActions: Collection<Action>;
  menuActions: Collection<Action>;
}

const SELECTED_INDEX_HANDLE_KEY = "selected-index";

const SPINNER_THROTTLE_INTERVAL_IN_MS = 0;

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
  iconCheckMark: "esri-icon-check-mark",
  iconLoading: "esri-icon-loading-indicator",
  iconDefaultAction: "esri-icon-default-action",
  iconActionsMenu: "esri-icon-handle-horizontal",
  rotating: "esri-rotating",
  // base
  base: "esri-popup",
  // containers
  widget: "esri-widget",
  main: "esri-popup__main-container",
  loadingContainer: "esri-popup__loading-container",
  // global modifiers
  isCollapsible: "esri-popup--is-collapsible",
  isCollapsed: "esri-popup--is-collapsed",
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
  isActionsMenuOpen: "esri-popup--actions-menu-open",
  hasFeatureUpdated: "esri-popup--feature-updated",
  // header and content
  header: "esri-popup__header",
  headerButtons: "esri-popup__header-buttons",
  headerContainer: "esri-popup__header-container",
  headerContainerButton: "esri-popup__header-container--button",
  headerTitle: "esri-popup__header-title",
  content: "esri-popup__content",
  footer: "esri-popup__footer",
  footerHasPagination: "esri-popup__footer--has-pagination",
  footerHasActions: "esri-popup__footer--has-actions",
  footerHasActionsMenu: "esri-popup__footer--has-actions-menu",
  // buttons
  button: "esri-popup__button",
  buttonDisabled: "esri-popup__button--disabled",
  buttonDock: "esri-popup__button--dock",
  // icons
  icon: "esri-popup__icon",
  iconDock: "esri-popup__icon--dock-icon",
  // actions
  inlineActionsContainer: "esri-popup__inline-actions-container",
  actionsMenuButton: "esri-popup__actions-menu-button",
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
  // pagination
  paginationPrevious: "esri-popup__pagination-previous",
  paginationNext: "esri-popup__pagination-next",
  paginationPreviousIconLTR: "esri-popup__pagination-previous-icon",
  paginationPreviousIconRTL: "esri-popup__pagination-previous-icon--rtl",
  paginationNextIconLTR: "esri-popup__pagination-next-icon",
  paginationNextIconRTL: "esri-popup__pagination-next-icon--rtl",
  // feature menu
  featureMenu: "esri-popup__feature-menu",
  featureMenuList: "esri-popup__feature-menu-list",
  featureMenuItem: "esri-popup__feature-menu-item",
  featureMenuViewport: "esri-popup__feature-menu-viewport",
  featureMenuHeader: "esri-popup__feature-menu-header",
  featureMenuNote: "esri-popup__feature-menu-note",
  featureMenuSelected: "esri-popup__feature-menu-item--selected",
  featureMenuButton: "esri-popup__feature-menu-button",
  featureMenuTitle: "esri-popup__feature-menu-title",
  // collapse button
  collapseButton: "esri-popup__collapse-button"
};

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
 * view.popup.on("trigger-action", function(event){
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

interface VisibleElements {
  closeButton?: boolean;
  featureNavigation?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  closeButton: true,
  featureNavigation: true
};

@subclass(declaredClass)
class Popup extends FeatureContentMixin(Widget) {
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
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);

    this._addSelectedFeatureIndexHandle();

    this.own([
      watchUtils.watch<ScreenPoint>(this, "viewModel.screenLocation", () =>
        this._positionContainer()
      ),

      watchUtils.watch(this, ["viewModel.active", "dockEnabled"], () =>
        this._toggleScreenLocationEnabled()
      ),

      watchUtils.watch(this, "viewModel.screenLocation", (newValue, oldValue) => {
        if (!!newValue !== !!oldValue) {
          this.reposition();
        }
      }),

      watchUtils.watch(
        this,
        [
          "viewModel.view.padding",
          "viewModel.view.size",
          "viewModel.active",
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

      watchUtils.watch(this, ["viewModel.waitingForResult", "viewModel.location"], () => {
        this._hideSpinner();
        this._displaySpinnerThrottled();
      }),

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

      watchUtils.whenFalse(this, "collapsed", () => {
        if (
          this.viewModel?.view?.widthBreakpoint !== "xsmall" ||
          !this.viewModel.active ||
          !this.collapseEnabled
        ) {
          return;
        }

        this.viewModel.centerAtLocation();
      }),

      watchUtils.on(this, "viewModel.allActions", "change", () => this._watchActions()),
      watchUtils.init(this, "viewModel.allActions", () => this._watchActions())
    ]);
  }

  destroy(): void {
    this._destroySelectedFeatureWidget();
    this._destroySpinner();
    this._handles && this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _blurClose = false;

  private _blurContainer = false;

  private _containerNode: HTMLDivElement = null;

  private _mainContainerNode: HTMLDivElement = null;

  private _featureMenuNode: HTMLElement = null;

  private _actionsMenuNode: HTMLElement = null;

  private _focusClose = false;

  private _focusContainer = false;

  private _focusDockButton = false;

  private _focusFeatureMenuButton = false;

  private _focusActionsMenuButton = false;

  private _focusFirstFeature = false;

  private _focusFirstAction = false;

  private _handles: Handles = new Handles();

  private _pointerOffsetInPx = 16;

  private _spinner: Spinner = null;

  private _feature: Feature = null;

  private _displaySpinnerThrottled = throttle(
    () => this._displaySpinner(),
    SPINNER_THROTTLE_INTERVAL_IN_MS
  );

  @property({
    readOnly: true,
    dependsOn: ["id"]
  })
  @renderable()
  protected get actionsMenuId(): string {
    return `${this.id}-actions-menu`;
  }

  @property({
    readOnly: true,
    dependsOn: ["id"]
  })
  @renderable()
  protected get actionsMenuButtonId(): string {
    return `${this.id}-actions-menu-button`;
  }

  @property({
    readOnly: true,
    dependsOn: ["id"]
  })
  @renderable()
  protected get featureMenuId(): string {
    return `${this.id}-feature-menu`;
  }

  @property({
    readOnly: true,
    dependsOn: ["id"]
  })
  @renderable()
  protected get titleId(): string {
    return `${this.id}-popup-title`;
  }

  @property({
    readOnly: true,
    dependsOn: ["id"]
  })
  @renderable()
  protected get contentId(): string {
    return `${this.id}-popup-content`;
  }

  @property({
    readOnly: true,
    dependsOn: [
      "selectedFeatureWidget",
      "selectedFeatureWidget.viewModel",
      "selectedFeatureWidget.viewModel.waitingForContent",
      "selectedFeatureWidget.viewModel.content",
      "viewModel.content"
    ]
  })
  @renderable()
  protected get hasContent(): boolean {
    return !!(this.selectedFeatureWidget
      ? this.selectedFeatureWidget?.viewModel?.waitingForContent ||
        this.selectedFeatureWidget?.viewModel?.content
      : this.viewModel?.content);
  }

  @property({
    readOnly: true,
    dependsOn: ["viewModel.active", "viewModel.featureCount", "visibleElements.featureNavigation"]
  })
  @renderable()
  protected get featureNavigationVisible(): boolean {
    return (
      this.viewModel.active &&
      this.viewModel.featureCount > 1 &&
      this.visibleElements.featureNavigation
    );
  }

  @property({
    readOnly: true,
    dependsOn: ["collapseEnabled", "viewModel.title", "hasContent"]
  })
  @renderable()
  protected get collapsible(): boolean {
    return !!(this.collapseEnabled && this.viewModel.title && this.hasContent);
  }

  @property({
    readOnly: true,
    dependsOn: ["featureNavigationVisible", "featureMenuOpen"]
  })
  @renderable()
  protected get featureMenuVisible(): boolean {
    return this.featureNavigationVisible && this.featureMenuOpen;
  }

  @property({
    readOnly: true,
    dependsOn: ["collapsible", "featureMenuVisible", "collapsed"]
  })
  @renderable()
  protected get contentCollapsed(): boolean {
    return this.collapsible && !this.featureMenuVisible && this.collapsed;
  }

  @property({
    readOnly: true,
    dependsOn: [
      "featureNavigationVisible",
      "maxInlineActions",
      "viewModel.allActions",
      "viewModel.allActions.length"
    ]
  })
  @renderable()
  get dividedActions(): DividedActions {
    return this._divideActions();
  }

  //--------------------------------------------------------------------------
  //
  // FetchFeaturesOptions typedef
  //
  //--------------------------------------------------------------------------

  /**
   * Optional properties to use with the [fetchFeatures](#fetchFeatures) method.
   *
   * @typedef module:esri/widgets/Popup~FetchFeaturesOptions
   *
   * @property {ClickEvent} [event] - The `click` event for either the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. The event can be supplied in order to adjust the query radius depending on the pointer type. For example, touch events query a larger radius.
   * @property {AbortSignal} [signal] - The signal object that can be used to abort the asynchronous task.
   * The returned promise will be rejected with an {@link module:esri/core/Error Error} named `AbortError` when an abort is signaled.
   * See also [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) for more information on how to
   * construct a controller that can be used to deliver abort signals.
   */

  //--------------------------------------------------------------------------
  //
  // FetchPopupFeaturesResult typedef
  //
  //--------------------------------------------------------------------------

  /**
   * The resulting features returned from the [fetchFeatures](#fetchFeatures) method.
   *
   * @typedef module:esri/widgets/Popup~FetchPopupFeaturesResult
   *
   * @property {Promise<module:esri/Graphic[]>} [allGraphicsPromise] - An array of promises containing {@link esri/Graphic graphics} from the selected location. This can be a combination of graphics derived from a {@link module:esri/views/layers/LayerView layerview}, and/or {@link module:esri/Graphics graphics} that reside directly on the view, ie. {@link module:esri/views/View#graphics view.graphics}.
   * @property {module:esri/Graphic[]} [clientOnlyGraphics] - An array of {@link module:esri/Graphic graphics} that do not have any associated {@link module:esri/views/layers/LayerView}, ie. {@link module:esri/views/View#graphics view.graphics}.
   * @property {module:esri/geometry/Point} [location] - The resulting location of the {@link module:esri/views/MapView#hitTest MapView} or {@link module:esri/views/SceneView#hitTest SceneView}'s' `hitTest`.
   * @property {module:esri/widgets/Popup~FetchPopupFeaturesPromisesPerLayerView[]} [promisesPerLayerView] - An array of {@link module:esri/widgets/Popup~FetchPopupFeaturesPromisesPerLayerView}.
   */

  //--------------------------------------------------------------------------
  //
  // FetchPopupFeaturesPromisesPerLayerView typedef
  //
  //--------------------------------------------------------------------------

  /**
   * An object containing popup features for a specific location in addition to its associated {@link module:esri/views/layers/LayerView layerview}.
   *
   * @typedef module:esri/widgets/Popup~FetchPopupFeaturesPromisesPerLayerView
   *
   * @property {module:esri/views/layers/LayerView} layerView - The associated {@link module:esri/views/layers/LayerView layerview} in which the features are fetched.
   * @property {Promise<module:esri/Graphic[]>} promise - A promise containing an array of {@link module:esri/Graphic graphics} for the selected location associated with a specific {@link module:esri/views/layers/LayerView layerview}.
   */

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
   * ![popupTemplate-zoom-action](../../assets/img/apiref/widgets/popuptemplate-zoom-action.png).
   * When this icon is clicked, the view zooms in four LODs and centers on the selected feature.
   *
   * You may override this action by removing it from the `actions` array or by setting the
   * [overwriteActions](esri-PopupTemplate.html#overwriteActions) property to `true` in a
   * {@link module:esri/PopupTemplate}. The order of each action in the popup is the order in which
   * they appear in the array.
   *
   * The [trigger-action](#event-trigger-action) event fires each time an action in the popup is clicked.
   * This event should be used to execute custom code for each action clicked. For example, if you would
   * like to add a `zoom-out` action to the popup that zooms the view out several LODs, you would
   * define the zoom-out code in a separate function. Then you would call the custom `zoom-out` function
   * in the [trigger-action](#event-trigger-action) event handler. See the sample code
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
   * @see [Sample - Popup with edit action](../sample-code/popup-editaction/index.html)
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
  //  actionsMenuOpen
  //----------------------------------

  // We are not documenting this unless it comes up specifically from outside users

  /**
   * @private
   */

  @property({
    dependsOn: ["viewModel.active"]
  })
  @renderable()
  set actionsMenuOpen(value: boolean) {
    this._set("actionsMenuOpen", !!value);
  }
  get actionsMenuOpen(): boolean {
    return this.viewModel.active ? this._get("actionsMenuOpen") : false;
  }

  //----------------------------------
  //  alignment
  //----------------------------------

  /**
   * Position of the popup in relation to the selected feature. The default behavior
   * is to display above the feature and adjust if not enough room. If needing
   * to explicitly control where the popup displays in relation to the feature, choose
   * an option besides `auto`.
   *
   * @name alignment
   * @instance
   * @type {"auto" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | Function}
   * @default auto
   * @since 4.8
   *
   * @example
   * // Popup will display on the bottom-right of the selected feature regardless of where that feature is located
   * view.popup.alignment = "bottom-right";
   */
  @property()
  alignment: Alignment = "auto";

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
  @aliasOf("viewModel.autoCloseEnabled")
  autoCloseEnabled: boolean = null;

  //----------------------------------
  //  autoOpenEnabled
  //----------------------------------

  /**
   * This property indicates to the `Popup` that it needs to allow or disallow the click
   * event propagation.
   *
   * Use `view.popup.autoOpenEnabled = false;` when needing to stop the click event propagation.
   *
   * @instance
   * @name autoOpenEnabled
   * @type {boolean}
   * @default true
   * @since 4.10
   *
   * @example
   * view.popup.autoOpenEnabled = false;
   * view.on("click", function(event) {
   *   view.popup.open({
   *     // Set the popup
   *   });
   * });
   */
  @aliasOf("viewModel.autoOpenEnabled")
  autoOpenEnabled: boolean = null;

  //----------------------------------
  //  defaultPopupTemplateEnabled
  //----------------------------------

  /**
   * Enables automatic creation of a popup template for layers that have popups enabled but no
   * popupTemplate defined. Automatic popup templates are supported for layers that
   * support the `createPopupTemplate` method. (Supported for
   * {@link module:esri/layers/FeatureLayer},
   * {@link module:esri/layers/GeoJSONLayer},
   * {@link module:esri/layers/OGCFeatureLayer},
   * {@link module:esri/layers/SceneLayer},
   * {@link module:esri/layers/CSVLayer},
   * {@link module:esri/layers/PointCloudLayer},
   * {@link module:esri/layers/StreamLayer}, and
   * {@link module:esri/layers/ImageryLayer}).
   *
   * ::: esri-md class="panel trailer-1"
   * * Starting with version 4.12, {@link module:esri/PopupTemplate} content can no longer be set using a
   * wildcard, e.g. `*`. Instead, set the `defaultPopupTemplateEnabled` property to `true`.
   * * Starting with 4.16, the default popup has been improved to no longer display system
   * {@link module:esri/popup/FieldInfo fields}
   * that do not hold significant value, e.g. `Shape__Area` and `Shape__Length` are two fields that
   * no longer display.
   * :::
   *
   * @instance
   * @name defaultPopupTemplateEnabled
   * @type {boolean}
   * @default false
   * @since 4.11
   */
  @aliasOf("viewModel.defaultPopupTemplateEnabled")
  defaultPopupTemplateEnabled: boolean = null;

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
   * @type {"auto" | "top-center" | "top-right" | "top-left" | "bottom-left" | "bottom-center" | "bottom-right"}
   * @default
   * @ignore
   */
  @property({
    readOnly: true,
    dependsOn: ["dockEnabled", "alignment", "viewModel.active"]
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
   * @type {"auto" | "top-center" | "top-right" | "top-left" | "bottom-left" | "bottom-center" | "bottom-right"}
   * @instance
   * @name currentDockPosition
   * @readonly
   */
  @property({
    readOnly: true,
    dependsOn: ["viewModel.view.ready", "dockEnabled", "dockOptions", "viewModel.active"]
  })
  @renderable()
  get currentDockPosition(): PositionResult {
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
   * ::: esri-md class="panel trailer-1"
   * If viewing the popup in a mobile  UI, the default dock position is bottom 100%.
   * :::
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
  get dockOptions(): DockOptions {
    return this._get("dockOptions") || DOCK_OPTIONS;
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

  // This property works when used as a param of the `popup.open()` method.

  @property()
  @renderable()
  featureMenuOpen = false;

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
   * ![popup-pagination-arrows](../../assets/img/apiref/widgets/popup-pagination-arrows.png)
   *
   * or a menu.
   *
   * ![popup-feature-menu](../../assets/img/apiref/widgets/popup-pagination-menu.png)
   *
   * @name featureNavigationEnabled
   * @instance
   * @type {Boolean}
   * @default
   * @deprecated since version 4.15. Use {@link module:esri/widgets/Popup#visibleElements Popup.visibleElements.featureNavigation} instead.
   */
  @property()
  @renderable()
  set featureNavigationEnabled(value: boolean) {
    deprecatedProperty(logger, "featureNavigationEnabled", {
      replacement: "visibleElements.featureNavigation",
      version: "4.15"
    });
    this.visibleElements = { ...this.visibleElements, featureNavigation: value };
  }

  //----------------------------------
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride")
  goToOverride: GoToOverride = null;

  //----------------------------------
  //  highlightEnabled
  //----------------------------------

  /**
   * Highlight the selected popup feature using the {@link module:esri/views/MapView#highlightOptions highlightOptions}
   * set on the {@link module:esri/views/MapView} or the {@link module:esri/views/SceneView#highlightOptions highlightOptions}
   * set on the {@link module:esri/views/SceneView}.
   *
   * @name highlightEnabled
   * @instance
   *
   * @type {Boolean}
   * @default true
   */
  @aliasOf("viewModel.highlightEnabled")
  highlightEnabled: boolean = null;

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
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  maxInlineActions
  //----------------------------------

  /**
   * Defines the maximum icons displayed at one time in the action area.
   *
   * @name maxInlineActions
   * @instance
   * @type {number | null}
   * @default 3
   */
  @property()
  @renderable()
  maxInlineActions: number | null = 3;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's common message bundle
   *
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/widgets/Popup/t9n/Popup")
  messages: PopupMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

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
  @aliasOf("viewModel.promises")
  promises: Promise<Graphic[]>[] = null;

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
   * Returns a reference to the current {@link module:esri/widgets/Feature} that the Popup is using.
   * This is useful if needing to get a reference to the widget in order to make any changes to it.
   *
   * @name selectedFeatureWidget
   * @instance
   * @since 4.7
   * @type {module:esri/widgets/Feature}
   * @readonly
   */
  @property({
    readOnly: true,
    dependsOn: ["viewModel.selectedFeatureViewModel", "visibleElements"]
  })
  @renderable()
  get selectedFeatureWidget(): Feature {
    const { _feature, visibleElements } = this;
    const { selectedFeatureViewModel } = this.viewModel;
    const modifiedVisibleElements = { ...visibleElements, ...{ title: false } };

    if (!selectedFeatureViewModel) {
      return null;
    }

    if (_feature) {
      _feature.viewModel = selectedFeatureViewModel;
      _feature.visibleElements = modifiedVisibleElements;
    } else {
      this._feature = new Feature({
        viewModel: selectedFeatureViewModel,
        visibleElements: modifiedVisibleElements
      });
    }

    return this._feature;
  }

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
  @property()
  spinnerEnabled = true;

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
   * Indicates whether to update the [location](#location) when the [selectedFeatureIndex](#selectedFeatureIndex) changes.
   *
   * @name updateLocationEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @ignore
   */
  @aliasOf("viewModel.updateLocationEnabled")
  updateLocationEnabled: boolean = null;

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
  @aliasOf("viewModel.view")
  view: MapView | SceneView = null;

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
  @property({ type: PopupViewModel })
  @renderable([
    "viewModel.active",
    "viewModel.view.widthBreakpoint",
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

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/Popup~VisibleElements
   *
   * @property {boolean} [featureNavigation] - Indicates whether to the feature navigation will be displayed. Default value is `true`.
   * @property {boolean} [closeButton] - Indicates whether to display a close button on the popup dialog. Default value is `true`.
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Popup~VisibleElements}
   * @autocast
   *
   * @since 4.15
   *
   * @example
   * popup.visibleElements = {
   *   closeButton: false
   * };
   */
  @property()
  @renderable()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

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
    const { active } = this.viewModel;

    if (!active) {
      logger.warn("Popup can only be blurred when currently active.");
    }

    if (this.visibleElements.closeButton) {
      this._blurClose = true;
    } else {
      this._blurContainer = true;
    }

    this.scheduleRender();
  }

  /**
   * Removes [promises](#promises), [features](#features), [content](#content),
   * [title](#title) and [location](#location) from the Popup.
   *
   * @method
   */
  clear(): void {
    this.viewModel.clear();
  }

  /**
   * Closes the popup by setting its [visible](#visible) property to `false`. Users can
   * alternatively close the popup
   * by directly setting the [visible](#visible) property to `false`.
   *
   * @see [Popup.visible](#visible)
   */
  close(): void {
    this.visible = false;
  }

  /**
   * Use this method to return feature(s) at a given screen location.
   * These features are fetched from all of the {@link module:esri/views/layers/LayerView LayerViews}
   * in the {@link module:esri/views/View view}. In order to use this, a layer must already have an
   * associated {@link module:esri/PopupTemplate} and have its {@link module:esri/layers/FeatureLayer#popupEnabled popupEnabled}.
   * These features can then be used within a custom {@link module:esri/widgets/Popup}
   * or {@link module:esri/widgets/Feature} widget experience.
   * One example could be a custom side panel that displays feature-specific information based on
   * an end user's click location. This method allows a developer the ability to
   * control how the input location is handled, and then subsequently, what to do with the results.
   *
   * @example
   * // Add Feature widget to UI
   * view.ui.add(featureWidget, "top-right");
   *
   * // Get view's click event
   * view.on("click", function(event) {
   *   // Call fetchFeatures and pass in the click event screenPoint
   *   view.popup.fetchFeatures(event.screenPoint).then(function(response) {
   *     // Access the response from fetchFeatures
   *     response.allGraphicsPromise.then(function(graphics) {
   *       // Set the feature widget's graphic to the returned graphic from fetchFeatures
   *       featureWidget.graphic = graphics[0];
   *     });
   *   });
   * });
   *
   * @param {Object} screenPoint - An object representing a point on the screen. This point can be in either the
   * {@link module:esri/views/MapView#ScreenPoint MapView} or
   * {@link module:esri/views/SceneView#ScreenPoint SceneView}.
   * @param {number} screenPoint.x - The x coordinate.
   * @param {number} screenPoint.y - The y coordinate.
   * @param {module:esri/widgets/Popup~FetchFeaturesOptions} [options] - The {@link module:esri/widgets/Popup~FetchFeaturesOptions options}
   * to pass into the `fetchFeatures` method.
   *
   * @method
   * @since 4.15
   * @see [Sample - Feature widget - Query graphics from multiple layerViews](../sample-code/widgets-feature-multiplelayers/index.html)
   *
   * @return {Promise<module:esri/widgets/Popup~FetchPopupFeaturesResult>} Resolves with the selected `hitTest`
   * location. In addition, it also returns an array of {@link module:esri/Graphic graphics} if the `hitTest` is
   * performed directly on the {@link module:esri/views/View view}, a single Promise containing an array of all resulting
   * {@link module:esri/Graphic graphics}, or an array of objects containing this array of resulting {@link module:esri/Graphic graphics} in addition to its associated
   * {@link module:esri/views/layers/LayerView layerview}.
   *
   * Most commonly if accessing all features, use the single promise returned in the
   * {@link module:esri/widgets/Popup~FetchPopupFeaturesResult result's allGraphicsPromise} and call `.then()`
   * as seen in the example snippet.
   */
  fetchFeatures(
    screenPoint: ScreenPoint,
    options?: FetchFeaturesOptions
  ): Promise<FetchPopupFeaturesResult> {
    return this.viewModel.fetchFeatures(screenPoint, options);
  }

  /**
   * Use this method to give focus to the Widget if the widget is able to be focused.
   *
   * @method
   * @since 4.6
   *
   */
  focus(): void {
    const { active } = this.viewModel;

    if (!active) {
      logger.warn("Popup can only be focused when currently active.");
    }

    if (this.visibleElements.closeButton) {
      this._focusClose = true;
    } else {
      this._focusContainer = true;
    }

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
  next(): PopupViewModel {
    return this.viewModel.next();
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
   * @param {string | HTMLElement | module:esri/widgets/Widget} [options.content] - Sets the the [content](#content) of the popup.
   * @param {module:esri/geometry/Geometry} [options.location] - Sets the popup's [location](#location), which is the geometry used to position the popup.
   * @param {boolean} [options.fetchFeatures=false] - When `true`, indicates the popup should fetch the content of this feature and display it. If no {@link module:esri/PopupTemplate} exists, a default template is created for the layer if
   * [defaultPopupTemplateEnabled](#defaultPopupTemplateEnabled) = `true`. In order for this option to work, there must be a valid `view` and `location` set.
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
   *  view.on("click", function(event){
   *    view.popup.open({
   *      location: event.mapPoint,  // location of the click on the view
   *      fetchFeatures: true // display the content for the selected feature if a popupTemplate is defined.
   *    });
   *  });
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
    const actionsMenuOpen = options ? !!options.actionsMenuOpen : false;
    const collapsed = options ? !!options.collapsed : false;

    const setOptions: PopupOpenOptions = {
      collapsed,
      actionsMenuOpen,
      featureMenuOpen
    };

    if (this.viewModel?.view?.widthBreakpoint === "xsmall") {
      setOptions.collapsed = true;
    }

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
  previous(): PopupViewModel {
    return this.viewModel.previous();
  }

  /**
   * Positions the popup on the view.
   * Moves the popup into the view's extent if the popup is partially or fully outside
   * the view's extent.
   *
   * If the popup is partially out of view, the view will move to fully show the popup.
   * If the popup is fully out of view, the view will move to the popup's location.
   */
  reposition(): void {
    this.renderNow();
    this._positionContainer();
    this._setCurrentAlignment();
  }

  /**
   * Triggers the [trigger-action](#event-trigger-action) event and executes the [action](#actions)
   * at the specified index in the [actions](#actions) array.
   *
   * @param {number} actionIndex - The index of the [action](#actions) to execute.
   *
   * @method
   */
  triggerAction(actionIndex: number): void {
    this.viewModel.triggerAction(actionIndex);
  }

  render(): VNode {
    const {
      actionsMenuOpen,
      dockEnabled,
      featureMenuVisible,
      dividedActions,
      currentAlignment,
      currentDockPosition
    } = this;

    const { active } = this.viewModel;

    const { menuActions } = dividedActions;

    const actionsMenuVisible = active && menuActions.length > 1 && actionsMenuOpen;
    const docked = active && dockEnabled;
    const shadowed = active && !dockEnabled;

    const layerTitle = this.selectedFeature?.layer?.title;
    const layerId = this.selectedFeature?.layer?.id;

    const baseClasses = {
      [CSS.alignTopCenter]: currentAlignment === "top-center",
      [CSS.alignBottomCenter]: currentAlignment === "bottom-center",
      [CSS.alignTopLeft]: currentAlignment === "top-left",
      [CSS.alignBottomLeft]: currentAlignment === "bottom-left",
      [CSS.alignTopRight]: currentAlignment === "top-right",
      [CSS.alignBottomRight]: currentAlignment === "bottom-right",
      [CSS.isDocked]: docked,
      [CSS.shadow]: shadowed,
      [CSS.isDockedTopLeft]: currentDockPosition === "top-left",
      [CSS.isDockedTopCenter]: currentDockPosition === "top-center",
      [CSS.isDockedTopRight]: currentDockPosition === "top-right",
      [CSS.isDockedBottomLeft]: currentDockPosition === "bottom-left",
      [CSS.isDockedBottomCenter]: currentDockPosition === "bottom-center",
      [CSS.isDockedBottomRight]: currentDockPosition === "bottom-right",
      [CSS.isFeatureMenuOpen]: featureMenuVisible,
      [CSS.isActionsMenuOpen]: actionsMenuVisible
    };

    return (
      <div
        class={this.classes(CSS.base, baseClasses)}
        role="presentation"
        data-layer-title={layerTitle}
        data-layer-id={layerId}
        bind={this}
        afterCreate={this._positionContainer}
        afterUpdate={this._positionContainer}
      >
        {active ? [this.renderMainContainer(), this.renderPointer()] : null}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderLoadingIcon(): VNode {
    return (
      <span aria-hidden="true" class={this.classes(CSS.icon, CSS.iconLoading, CSS.rotating)} />
    );
  }

  protected renderNavigationLoading(): VNode {
    const { messagesCommon } = this;

    return !!this.viewModel.pendingPromisesCount ? (
      <div
        key={buildKey("loading-container")}
        role="presentation"
        class={CSS.loadingContainer}
        aria-label={messagesCommon.loading}
        title={messagesCommon.loading}
      >
        {this.renderLoadingIcon()}
      </div>
    ) : null;
  }

  protected renderPreviousIcon(): VNode {
    const isRtl = widgetUtils.isRTL();

    const previousIconClasses = {
      [CSS.iconRightTriangleArrow]: isRtl,
      [CSS.paginationPreviousIconRTL]: isRtl,
      [CSS.iconLeftTriangleArrow]: !isRtl,
      [CSS.paginationPreviousIconLTR]: !isRtl
    };

    return <span aria-hidden="true" class={this.classes(CSS.icon, previousIconClasses)} />;
  }

  protected renderPreviousButton(): VNode {
    const { messages } = this;

    return (
      <div
        role="button"
        tabIndex={0}
        bind={this}
        onclick={this._previous}
        onkeydown={this._previous}
        class={this.classes(CSS.button, CSS.paginationPrevious)}
        aria-label={messages.previous}
        title={messages.previous}
      >
        {this.renderPreviousIcon()}
      </div>
    );
  }

  protected renderNextIcon(): VNode {
    const isRtl = widgetUtils.isRTL();

    const nextIconClasses = {
      [CSS.iconLeftTriangleArrow]: isRtl,
      [CSS.paginationNextIconRTL]: isRtl,
      [CSS.iconRightTriangleArrow]: !isRtl,
      [CSS.paginationNextIconLTR]: !isRtl
    };

    return <span aria-hidden="true" class={this.classes(CSS.icon, nextIconClasses)} />;
  }

  protected renderNextButton(): VNode {
    const { messages } = this;

    return (
      <div
        role="button"
        tabIndex={0}
        bind={this}
        onclick={this._next}
        onkeydown={this._next}
        class={this.classes(CSS.button, CSS.paginationNext)}
        aria-label={messages.next}
        title={messages.next}
      >
        {this.renderNextIcon()}
      </div>
    );
  }

  protected renderFeatureMenuButton(): VNode {
    const { featureMenuOpen, featureMenuId, messagesCommon } = this;
    const { featureCount, selectedFeatureIndex } = this.viewModel;

    return (
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
        aria-label={messagesCommon.menu}
        title={messagesCommon.menu}
      >
        {this._getPageText(featureCount, selectedFeatureIndex)}
      </div>
    );
  }

  protected renderNavigationButtons(): VNode[] {
    return this.featureNavigationVisible
      ? [
          this.renderPreviousButton(),
          this.renderNavigationLoading() || this.renderFeatureMenuButton(),
          this.renderNextButton()
        ]
      : null;
  }

  protected renderDockIcon(): VNode {
    const { dockEnabled } = this;
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

    return <span aria-hidden="true" class={this.classes(dockIconClasses, CSS.icon)} />;
  }

  protected renderDockButton(): VNode {
    const { dockEnabled, messages } = this;
    const widthBreakpoint = this.viewModel?.view?.widthBreakpoint;
    const dockTitle = dockEnabled ? messages.undock : messages.dock;

    return widthBreakpoint !== "xsmall" && this.dockOptions?.buttonEnabled ? (
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
        {this.renderDockIcon()}
      </div>
    ) : null;
  }

  renderTitle(): VNode {
    const { title } = this.viewModel;

    const { titleId, collapsible, contentCollapsed, messagesCommon } = this;

    const containerClasses = {
      [CSS.headerContainerButton]: collapsible
    };

    const titleNode = <h2 class={CSS.headerTitle} innerHTML={title} />;

    const containerNode = collapsible ? (
      <button
        key={`${title}--collapsible`}
        id={titleId}
        title={contentCollapsed ? messagesCommon.expand : messagesCommon.collapse}
        bind={this}
        enterAnimation={this._createFeatureUpdatedAnimation()}
        class={this.classes(CSS.headerContainer, containerClasses)}
        aria-expanded={contentCollapsed ? "false" : "true"}
        onclick={this._toggleCollapsed}
      >
        {titleNode}
      </button>
    ) : (
      <div
        key={title}
        id={titleId}
        bind={this}
        enterAnimation={this._createFeatureUpdatedAnimation()}
        class={this.classes(CSS.headerContainer, containerClasses)}
      >
        {titleNode}
      </div>
    );

    return title ? containerNode : null;
  }

  protected renderCloseIcon(): VNode {
    return <span aria-hidden="true" class={this.classes(CSS.icon, CSS.iconClose)} />;
  }

  protected renderCloseButton(): VNode {
    const { visibleElements, messagesCommon } = this;

    return visibleElements.closeButton ? (
      <div
        role="button"
        tabIndex={0}
        bind={this}
        onclick={this._close}
        onkeydown={this._close}
        class={CSS.button}
        aria-label={messagesCommon.close}
        title={messagesCommon.close}
        afterCreate={this._closeButtonNodeUpdated}
        afterUpdate={this._closeButtonNodeUpdated}
      >
        {this.renderCloseIcon()}
      </div>
    ) : null;
  }

  protected renderHeader(): VNode {
    return (
      <header class={CSS.header}>
        {this.renderTitle()}
        <div class={CSS.headerButtons}>
          {this.renderDockButton()}
          {this.renderCloseButton()}
        </div>
      </header>
    );
  }

  protected renderContentContainer(): VNode {
    const { contentId, hasContent, contentCollapsed } = this;

    const { content } = this.viewModel;

    return hasContent && !contentCollapsed ? (
      <article
        key={content}
        enterAnimation={this._createFeatureUpdatedAnimation()}
        id={contentId}
        class={CSS.content}
      >
        {this.renderContent()}
      </article>
    ) : null;
  }

  protected renderActionsMenuButton(): VNode {
    const {
      actionsMenuId,
      actionsMenuButtonId,
      actionsMenuOpen,
      dividedActions,
      messagesCommon
    } = this;

    const actionsMenuLabel = actionsMenuOpen ? messagesCommon.close : messagesCommon.open;

    const { menuActions } = dividedActions;

    return !!menuActions.length ? (
      <div
        key={buildKey("actions-menu-button")}
        class={this.classes(CSS.button, CSS.actionsMenuButton)}
        role="button"
        id={actionsMenuButtonId}
        aria-haspopup="true"
        aria-controls={actionsMenuOpen ? actionsMenuId : null}
        tabIndex={0}
        bind={this}
        onclick={this._toggleActionsMenu}
        onkeydown={this._toggleActionsMenu}
        afterCreate={this._focusActionsMenuButtonNode}
        afterUpdate={this._focusActionsMenuButtonNode}
        aria-label={actionsMenuLabel}
        title={actionsMenuLabel}
      >
        <span aria-hidden="true" class={CSS.iconActionsMenu} />
      </div>
    ) : null;
  }

  protected renderMenuActions(): VNode {
    const { actionsMenuId, actionsMenuButtonId, actionsMenuOpen, dividedActions } = this;
    const { menuActions, inlineActions } = dividedActions;

    return !!menuActions.length && actionsMenuOpen ? (
      <ul
        id={actionsMenuId}
        role="menu"
        aria-labelledby={actionsMenuButtonId}
        key={buildKey("actions")}
        class={CSS.actions}
        bind={this}
        onkeyup={this._handleActionMenuKeyup}
        afterCreate={this._actionsMenuNodeUpdated}
        afterUpdate={this._actionsMenuNodeUpdated}
      >
        {menuActions.toArray().map((action, index) =>
          this.renderAction({
            action,
            index: index + inlineActions.length,
            type: "menu-item"
          })
        )}
      </ul>
    ) : null;
  }

  protected renderInlineActions(): VNode[] {
    const { inlineActions } = this.dividedActions;

    return (
      !!inlineActions.length &&
      inlineActions.toArray().map((action, index) =>
        this.renderAction({
          action,
          index,
          type: "inline"
        })
      )
    );
  }

  protected renderInlineActionsContainer(): VNode {
    const { inlineActions, menuActions } = this.dividedActions;

    const hasInlineActions = !!inlineActions.length;
    const hasMenuActions = !!menuActions.length;

    return hasInlineActions || hasMenuActions ? (
      <div
        key="inline-actions-container"
        data-inline-actions={hasInlineActions.toString()}
        data-menu-actions={hasMenuActions.toString()}
        class={CSS.inlineActionsContainer}
      >
        {this.renderInlineActions()}
        {this.renderActionsMenuButton()}
        {this.renderMenuActions()}
      </div>
    ) : null;
  }

  protected renderNavigation(): VNode {
    return this.featureNavigationVisible ? (
      <section key={buildKey("navigation")} class={this.classes(CSS.navigation)}>
        {this.renderNavigationButtons()}
      </section>
    ) : null;
  }

  protected renderFooter(): VNode {
    const { featureNavigationVisible, dividedActions } = this;
    const { inlineActions, menuActions } = dividedActions;

    const hasInlineActions = !!inlineActions.length;
    const hasMenuActions = !!menuActions.length;

    const footerClasses = {
      [CSS.footerHasPagination]: featureNavigationVisible,
      [CSS.footerHasActions]: hasInlineActions,
      [CSS.footerHasActionsMenu]: hasMenuActions
    };

    return featureNavigationVisible || hasInlineActions ? (
      <div key={buildKey("feature-buttons")} class={this.classes(CSS.footer, footerClasses)}>
        {this.renderInlineActionsContainer()}
        {this.renderNavigation()}
      </div>
    ) : null;
  }

  protected renderFeatureMenuContainer(): VNode {
    const { messages } = this;
    const { featureViewModels } = this.viewModel;

    const infoText = substitute(messages.selectedFeatures, {
      total: featureViewModels.length
    });

    return (
      <section key={buildKey("menu")} class={CSS.featureMenu}>
        <h2 class={CSS.featureMenuHeader}>{infoText}</h2>
        <nav
          class={CSS.featureMenuViewport}
          afterCreate={this._featureMenuViewportNodeUpdated}
          afterUpdate={this._featureMenuViewportNodeUpdated}
        >
          {this.renderFeatureMenu()}
        </nav>
      </section>
    );
  }

  protected renderPointer(): VNode {
    return !this.dockEnabled ? (
      <div key={buildKey("pointer")} class={CSS.pointer} role="presentation">
        <div class={this.classes(CSS.pointerDirection, CSS.shadow)} />
      </div>
    ) : null;
  }

  protected renderMainContainer(): VNode {
    const {
      dockEnabled,
      currentAlignment,
      currentDockPosition,
      titleId,
      contentId,
      collapsible,
      hasContent,
      contentCollapsed,
      visibleElements
    } = this;

    const { title } = this.viewModel;

    const showButtonsTop =
      currentAlignment === "bottom-left" ||
      currentAlignment === "bottom-center" ||
      currentAlignment === "bottom-right" ||
      currentDockPosition === "top-left" ||
      currentDockPosition === "top-center" ||
      currentDockPosition === "top-right";

    const showButtonsBottom =
      currentAlignment === "top-left" ||
      currentAlignment === "top-center" ||
      currentAlignment === "top-right" ||
      currentDockPosition === "bottom-left" ||
      currentDockPosition === "bottom-center" ||
      currentDockPosition === "bottom-right";

    const mainContainerClasses = {
      [CSS.shadow]: dockEnabled,
      [CSS.isCollapsible]: collapsible,
      [CSS.isCollapsed]: contentCollapsed
    };

    return (
      <div
        class={this.classes(CSS.main, CSS.widget, mainContainerClasses)}
        tabIndex={!visibleElements.closeButton ? -1 : null}
        role="dialog"
        aria-labelledby={title ? titleId : ""}
        aria-describedby={hasContent && !contentCollapsed ? contentId : ""}
        bind={this}
        onkeyup={this._handleMainKeyup}
        afterCreate={this._mainContainerNodeUpdated}
        afterUpdate={this._mainContainerNodeUpdated}
      >
        {showButtonsTop ? this.renderFooter() : null}
        {showButtonsTop ? this.renderFeatureMenuContainer() : null}
        {this.renderHeader()}
        {this.renderContentContainer()}
        {showButtonsBottom ? this.renderFooter() : null}
        {showButtonsBottom ? this.renderFeatureMenuContainer() : null}
      </div>
    );
  }

  protected renderContent(): VNode {
    const content = this.viewModel?.content;

    if (!content) {
      return null;
    }

    if (typeof content === "string") {
      return <div key={content} innerHTML={content} />;
    }

    return this.renderNodeContent(content);
  }

  protected renderActionText(text: string): VNode {
    return (
      <span key="text" class={CSS.actionText}>
        {text}
      </span>
    );
  }

  protected renderActionIcon(action: Action): VNode {
    const actionClass = this._getActionClass(action);
    const actionImage = this._getActionImage(action);

    const iconClasses = {
      [CSS.iconLoading]: action.active,
      [CSS.rotating]: action.active,
      [CSS.icon]: !!actionClass,
      [CSS.actionImage]: !action.active && !!actionImage
    };

    if (actionClass) {
      iconClasses[actionClass] = !action.active;
    }

    return (
      <span
        key="icon"
        aria-hidden="true"
        class={this.classes(CSS.icon, iconClasses)}
        styles={this._getIconStyles(actionImage)}
      />
    );
  }

  protected renderAction(options: {
    action: Action;
    index: number;
    type: "menu-item" | "inline";
  }): VNode {
    const { action, index, type } = options;
    const actionTitle = this._getActionTitle(action);

    const buttonClasses = {
      [CSS.action]: action.type !== "toggle",
      [CSS.actionToggle]: action.type === "toggle",
      [CSS.actionToggleOn]: action.type === "toggle" && action.value,
      [CSS.buttonDisabled]: action.disabled
    };

    const actionNodes = [this.renderActionIcon(action), this.renderActionText(actionTitle)];

    const baseNode =
      type === "menu-item" ? (
        <li
          key={action.uid}
          role="menuitem"
          tabIndex={0}
          title={actionTitle}
          aria-label={actionTitle}
          class={this.classes(CSS.button, buttonClasses)}
          onkeyup={this._handleActionMenuItemKeyup}
          bind={this}
          data-action-index={index}
          onclick={this._triggerAction}
          onkeydown={this._triggerAction}
        >
          {actionNodes}
        </li>
      ) : (
        <div
          key={action.uid}
          role="button"
          tabIndex={0}
          title={actionTitle}
          aria-label={actionTitle}
          class={this.classes(CSS.button, buttonClasses)}
          onkeyup={this._handleActionMenuItemKeyup}
          bind={this}
          data-action-index={index}
          onclick={this._triggerAction}
          onkeydown={this._triggerAction}
        >
          {actionNodes}
        </div>
      );

    return action.visible ? baseNode : null;
  }

  protected renderFeatureMenuItem(featureVM: FeatureViewModel, featureVMIndex: number): VNode {
    const { messages, messagesCommon } = this;
    const { selectedFeatureIndex, selectedFeatureViewModel } = this.viewModel;
    const isSelectedFeature = featureVM === selectedFeatureViewModel;

    const itemClasses = {
      [CSS.featureMenuSelected]: isSelectedFeature
    };

    const checkMarkNode = isSelectedFeature ? (
      <span
        key={buildKey(`feature-menu-selected-feature-${selectedFeatureIndex}`)}
        title={messages.selectedFeature}
        aria-label={messages.selectedFeature}
        class={CSS.iconCheckMark}
      />
    ) : null;

    const titleNode = <span innerHTML={featureVM.title || messagesCommon.untitled} />;

    return (
      <li
        role="menuitem"
        tabIndex={-1}
        key={buildKey(`feature-menu-feature-${selectedFeatureIndex}`)}
        class={this.classes(itemClasses, CSS.featureMenuItem)}
        bind={this}
        data-feature-index={featureVMIndex}
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

  protected renderFeatureMenu(): VNode {
    const { featureMenuId } = this;
    const { featureViewModels } = this.viewModel;

    return featureViewModels.length > 1 ? (
      <ol
        class={CSS.featureMenuList}
        id={featureMenuId}
        bind={this}
        afterCreate={this._featureMenuNodeUpdated}
        afterUpdate={this._featureMenuNodeUpdated}
        onkeyup={this._handleFeatureMenuKeyup}
        role="menu"
      >
        {featureViewModels.map((featureVM, index) => this.renderFeatureMenuItem(featureVM, index))}
      </ol>
    ) : null;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getActionTitle(action: Action): string {
    const { messages, selectedFeature, messagesCommon } = this;
    const { id } = action;

    const selectedFeatureAttributes = selectedFeature?.attributes;

    const actionTitle =
      id === "zoom-to-feature"
        ? substitute(action.title, { messages })
        : id === "remove-selected-feature"
        ? substitute(action.title, { messages: messagesCommon })
        : action.title;

    return actionTitle && selectedFeatureAttributes
      ? substitute(actionTitle, selectedFeatureAttributes)
      : actionTitle;
  }

  private _getActionClass(action: Action): string {
    const { selectedFeature } = this;
    const selectedFeatureAttributes = selectedFeature?.attributes;
    const { className: actionClassName, image: actionImage } = action;

    const actionClass = !actionImage && !actionClassName ? CSS.iconDefaultAction : actionClassName;

    return actionClass && selectedFeatureAttributes
      ? substitute(actionClass, selectedFeatureAttributes)
      : actionClass;
  }

  private _getActionImage(action: Action): string {
    const { selectedFeature } = this;
    const selectedFeatureAttributes = selectedFeature?.attributes;
    const { image: actionImage } = action;

    return actionImage && selectedFeatureAttributes
      ? substitute(actionImage, selectedFeatureAttributes)
      : actionImage;
  }

  private _createFeatureUpdatedAnimation(): {
    (element: Element): void;
  } {
    return widgetUtils.cssTransition("enter", CSS.hasFeatureUpdated);
  }

  private _getInlineActionCount(): number | null {
    const { maxInlineActions, featureNavigationVisible } = this;

    if (typeof maxInlineActions !== "number") {
      return null;
    }

    const roundedCount = Math.round(maxInlineActions);
    return Math.max(featureNavigationVisible ? roundedCount - 1 : roundedCount, 0);
  }

  private _watchActions(): void {
    const { allActions } = this.viewModel;
    this.notifyChange("dividedActions");

    const key = "actions";

    this._handles.remove(key);

    allActions &&
      allActions.forEach((action) => {
        this._handles.add(
          watchUtils.watch(
            action,
            ["active", "className", "disabled", "id", "title", "image", "visible"],
            () => this.scheduleRender()
          ),
          key
        );
      });
  }

  private _divideActions(): DividedActions {
    const { allActions } = this.viewModel;
    const inlineActionCount = this._getInlineActionCount();
    const onlyInlineActions = inlineActionCount === null;
    const zeroInlineActions = inlineActionCount === 0;

    return {
      inlineActions: onlyInlineActions
        ? allActions.slice(0)
        : zeroInlineActions
        ? new Collection()
        : allActions.slice(0, inlineActionCount),
      menuActions: onlyInlineActions
        ? new Collection()
        : zeroInlineActions
        ? allActions.slice(0)
        : allActions.slice(inlineActionCount)
    };
  }

  private _featureMenuOpenChanged(value: boolean): void {
    if (value) {
      this._focusFirstFeature = true;
    } else {
      this._focusFeatureMenuButton = true;
    }
  }

  private _actionsMenuOpenChanged(value: boolean): void {
    if (value) {
      this._focusFirstAction = true;
    } else {
      this._focusActionsMenuButton = true;
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
    const key = eventKey(event);

    if (key === "Escape") {
      event.stopPropagation();
      this._focusFeatureMenuButton = true;
      this.featureMenuOpen = false;
      this.scheduleRender();
    }
  }

  private _handleActionMenuKeyup(event: KeyboardEvent): void {
    const key = eventKey(event);

    if (key === "Escape") {
      event.stopPropagation();
      this._focusActionsMenuButton = true;
      this.actionsMenuOpen = false;
      this.scheduleRender();
    }
  }

  private _handleFeatureMenuItemKeyup(event: KeyboardEvent): void {
    const key = eventKey(event);
    const { _featureMenuNode } = this;
    const node = event.currentTarget as Element;
    const featureIndex = node["data-feature-index"] as number;

    if (!_featureMenuNode) {
      return;
    }

    const items = _featureMenuNode.querySelectorAll("li");
    const count = items.length;

    if (key === "ArrowUp") {
      event.stopPropagation();
      const previousIndex = featureIndex - 1;
      const value = (previousIndex + count) % count;
      const previousElement = items[value] as HTMLElement;
      previousElement.focus();
      return;
    }

    if (key === "ArrowDown") {
      event.stopPropagation();
      const nextIndex = featureIndex + 1;
      const value = (nextIndex + count) % count;
      const nextElement = items[value] as HTMLElement;
      nextElement.focus();
      return;
    }

    if (key === "Home") {
      event.stopPropagation();
      const firstElement = items[0] as HTMLElement;
      firstElement.focus();
      return;
    }

    if (key === "End") {
      event.stopPropagation();
      const lastElement = items[items.length - 1] as HTMLElement;
      lastElement.focus();
      return;
    }
  }

  private _handleActionMenuItemKeyup(event: KeyboardEvent): void {
    const key = eventKey(event);
    const { _actionsMenuNode } = this;
    const node = event.currentTarget as Element;
    const actionIndex = node["data-action-index"] as number;

    if (!_actionsMenuNode) {
      return;
    }

    const items = _actionsMenuNode.querySelectorAll("li");
    const count = items.length;

    if (key === "ArrowUp") {
      event.stopPropagation();
      const previousIndex = actionIndex - 1;
      const value = (previousIndex + count) % count;
      const previousElement = items[value] as HTMLElement;
      previousElement.focus();
      return;
    }

    if (key === "ArrowDown") {
      event.stopPropagation();
      const nextIndex = actionIndex + 1;
      const value = (nextIndex + count) % count;
      const nextElement = items[value] as HTMLElement;
      nextElement.focus();
      return;
    }

    if (key === "Home") {
      event.stopPropagation();
      const firstElement = items[0] as HTMLElement;
      firstElement.focus();
      return;
    }

    if (key === "End") {
      event.stopPropagation();
      const lastElement = items[items.length - 1] as HTMLElement;
      lastElement.focus();
      return;
    }
  }

  private _handleMainKeyup(event: KeyboardEvent): void {
    const key = eventKey(event);

    if (key === "ArrowLeft") {
      event.stopPropagation();
      this.previous();
    }

    if (key === "ArrowRight") {
      event.stopPropagation();
      this.next();
    }
  }

  private _spinnerEnabledChange(spinnerEnabled: boolean): void {
    this._destroySpinner();

    if (!spinnerEnabled) {
      return;
    }

    const view = this.get<MapView | SceneView>("viewModel.view");
    this._createSpinner(view);
  }

  private _hideSpinner(): void {
    const { _spinner: spinner } = this;

    if (!spinner) {
      return;
    }

    spinner.location = null;
    spinner.hide();
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

  private _addSelectedFeatureIndexHandle(): void {
    const selectedFeatureIndexHandle = watchUtils.watch<number>(
      this,
      "viewModel.selectedFeatureIndex",
      (value, oldValue) => this._selectedFeatureIndexUpdated(value, oldValue)
    );

    this._handles.add(selectedFeatureIndexHandle, SELECTED_INDEX_HANDLE_KEY);
  }

  private _selectedFeatureIndexUpdated(value: number, oldValue: number): void {
    const { featureCount } = this;

    if (!featureCount || value === oldValue || value === -1) {
      return;
    }

    this.actionsMenuOpen = false;
    this.featureMenuOpen = false;
  }

  private _destroySelectedFeatureWidget(): void {
    const { _feature } = this;

    if (_feature) {
      _feature.viewModel = null;
      _feature && !_feature.destroyed && _feature.destroy();
    }

    this._feature = null;
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

  private _calculateAutoAlignment(alignment: PositionValue): Exclude<PositionValue, "auto"> {
    if (alignment !== "auto") {
      return alignment;
    }

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

    const { height, width } = containerNode.getBoundingClientRect();
    const popupWidth = width + pointerOffset;
    const popupHeight = Math.max(height, contentMaxHeight, contentHeight) + pointerOffset;

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

  private _callCurrentAlignment(alignment: Alignment): PositionValue {
    return typeof alignment === "function" ? alignment.call(this) : alignment;
  }

  private _getCurrentAlignment(): PositionResult {
    const { alignment, dockEnabled } = this;

    if (dockEnabled || !this.viewModel.active) {
      return null;
    }

    return this._calculatePositionResult(
      this._calculateAutoAlignment(this._callCurrentAlignment(alignment))
    );
  }

  private _setCurrentAlignment(): void {
    this._set("currentAlignment", this._getCurrentAlignment());
  }

  private _setCurrentDockPosition(): void {
    this._set("currentDockPosition", this._getCurrentDockPosition());
  }

  private _calculatePositionResult(position: PositionValue): PositionResult {
    const values = ["left", "right"];

    if (widgetUtils.isRTL()) {
      values.reverse();
    }

    return position
      .replace(/leading/gi, values[0])
      .replace(/trailing/gi, values[1]) as PositionResult;
  }

  private _callDockPosition(dockPosition: DockPosition): PositionValue {
    return typeof dockPosition === "function" ? dockPosition.call(this) : dockPosition;
  }

  private _getDockPosition(): PositionResult {
    return this._calculatePositionResult(
      this._calculateAutoDockPosition(this._callDockPosition(this.dockOptions?.position))
    );
  }

  private _getCurrentDockPosition(): PositionResult {
    return this.dockEnabled && this.viewModel.active ? this._getDockPosition() : null;
  }

  private _wouldDockTo(): PositionResult {
    return !this.dockEnabled ? this._getDockPosition() : null;
  }

  private _calculateAutoDockPosition(dockPosition: PositionValue): Exclude<PositionValue, "auto"> {
    if (dockPosition !== "auto") {
      return dockPosition;
    }

    const view = this.viewModel?.view;
    const defaultDockPosition = widgetUtils.isRTL() ? "top-left" : "top-right";

    if (!view) {
      return defaultDockPosition;
    }

    const viewPadding = view.padding || { left: 0, right: 0, top: 0, bottom: 0 };
    const viewWidth = view.width - viewPadding.left - viewPadding.right;
    const { breakpoints } = view;

    if (breakpoints && viewWidth <= breakpoints.xsmall) {
      return "bottom-center";
    }

    return defaultDockPosition;
  }

  private _positionContainer(containerNode: HTMLDivElement = this._containerNode): void {
    if (containerNode) {
      this._containerNode = containerNode;
    }

    if (!containerNode) {
      return;
    }

    const { screenLocation } = this.viewModel;
    const { width } = containerNode.getBoundingClientRect();
    const positionStyle = this._calculatePositionStyle(screenLocation, width);

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

    return undefined;
  }

  private _calculatePositionStyle(
    screenLocation: ScreenPoint,
    domWidth: number
  ): PopupPositionStyle {
    const { dockEnabled, view } = this;

    if (!view) {
      return undefined;
    }

    if (dockEnabled) {
      return {
        left: "",
        top: "",
        right: "",
        bottom: ""
      };
    }

    if (!screenLocation || !domWidth) {
      return undefined;
    }

    const width = this._calculateFullWidth(domWidth);
    const position = this._calculateAlignmentPosition(
      screenLocation.x,
      screenLocation.y,
      view,
      width
    );

    if (!position) {
      return undefined;
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

  private _closeButtonNodeUpdated(element: HTMLButtonElement): void {
    if (this._focusClose) {
      this._focusClose = false;
      element.focus();
      return;
    }

    if (this._blurClose) {
      this._blurClose = false;
      element.blur();
      return;
    }
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

  private _actionsMenuNodeUpdated(element: HTMLElement): void {
    this._actionsMenuNode = element;

    if (!element || !this._focusFirstAction) {
      return;
    }

    this._focusFirstAction = false;
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

  private _focusActionsMenuButtonNode(element: HTMLDivElement): void {
    if (!this._focusActionsMenuButton) {
      return;
    }

    this._focusActionsMenuButton = false;
    element.focus();
  }

  private _featureMenuViewportNodeUpdated(element: HTMLElement): void {
    if (!element) {
      return;
    }

    element.scrollTop = 0;
  }

  private _toggleScreenLocationEnabled(): void {
    const { dockEnabled, viewModel } = this;

    if (!viewModel) {
      return;
    }

    const screenLocationEnabled = viewModel.active && !dockEnabled;
    viewModel.screenLocationEnabled = screenLocationEnabled;
  }

  private _shouldDockAtCurrentViewSize(dockOptions: DockOptions): boolean {
    const breakpoint = dockOptions.breakpoint;
    const ui = this.viewModel?.view?.ui;
    if (!ui) {
      return false;
    }

    const { width: uiWidth, height: uiHeight } = ui;
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
    return this.featureNavigationVisible
      ? substitute(this.messages.pageText, {
          index: selectedFeatureIndex + 1,
          total: featureCount
        })
      : null;
  }

  private _destroySpinner(): void {
    const { _spinner, view } = this;

    if (_spinner) {
      view && view.ui && view.ui.remove(this._spinner, SPINNER_KEY);
      _spinner.destroy();
      this._spinner = null;
    }
  }

  private _createSpinner(view: MapView | SceneView): void {
    if (!view) {
      return;
    }

    this._spinner = new Spinner({
      view
    });

    view.ui.add(this._spinner, {
      key: SPINNER_KEY,
      position: "manual"
    });
  }

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
    this.actionsMenuOpen = false;
    this.featureMenuOpen = toggleValue;
  }

  @accessibleHandler()
  private _toggleActionsMenu(): void {
    const toggleValue = !this.actionsMenuOpen;
    this._actionsMenuOpenChanged(toggleValue);
    this.featureMenuOpen = false;
    this.actionsMenuOpen = toggleValue;
  }

  @accessibleHandler()
  private _triggerAction(event: Event): void {
    const node = event.currentTarget as Element;
    const actionIndex = node["data-action-index"] as number;
    const action = this.viewModel.allActions.getItemAt(actionIndex);

    if (action && action.type === "toggle") {
      action.value = !action.value;
    }

    this.actionsMenuOpen = false;

    this.viewModel.triggerAction(actionIndex);
  }

  @accessibleHandler()
  private _selectFeature(event: Event): void {
    const node = event.currentTarget as Element;
    const featureIndex = node["data-feature-index"] as number;

    if (!isNaN(featureIndex)) {
      this.viewModel.selectedFeatureIndex = featureIndex;
    }

    this.featureMenuOpen = false;
    this._focusFeatureMenuButton = true;
    this.scheduleRender();
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

export default Popup;
