/**
 * The LayerList widget provides a way to display a list of layers, and switch on/off their visibility.
 * The {@link module:esri/widgets/LayerList/ListItem} API provides access to each layer's properties, allows
 * the developer to configure actions related to the layer, and allows the developer to add content to the item related to the layer.
 *
 * To hide layers in the map from the LayerList widget, you must set the
 * {@link module:esri/layers/Layer#listMode listMode} property on the desired layers to `hide`.
 *
 * @module esri/widgets/LayerList
 * @since 4.2
 *
 * @see [LayerList.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/LayerList.tsx)
 * @see [LayerList.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_LayerList.scss)
 * @see [Sample - LayerList widget](../sample-code/widgets-layerlist/index.html)
 * @see [Sample - LayerList widget with actions](../sample-code/widgets-layerlist-actions/index.html)
 * @see module:esri/widgets/LayerList/LayerListViewModel
 *
 * @example
 * var layerList = new LayerList({
 *   view: view
 * });
 * // Adds widget below other elements in the top left corner of the view
 * view.ui.add(layerList, {
 *   position: "top-left"
 * });
 */

// esri.core
import Collection from "esri/core/Collection";
import { deprecatedProperty } from "esri/core/deprecate";
import { eventKey } from "esri/core/events";
import Handles from "esri/core/Handles";
import has from "esri/core/has";
import Logger from "esri/core/Logger";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.libs.sortablejs
import Sortable from "esri/libs/sortablejs/Sortable";

// esri.support.actions
import ActionButton from "esri/support/actions/ActionButton";
import ActionToggle from "esri/support/actions/ActionToggle";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.LayerList
import { Action, Actions, ListItemModifier, Sections } from "esri/widgets/LayerList/interfaces";
import LayerListViewModel from "esri/widgets/LayerList/LayerListViewModel";
import ListItem from "esri/widgets/LayerList/ListItem";
import ListItemPanel from "esri/widgets/LayerList/ListItemPanel";

// esri.widgets.LayerList.support
import {
  canSortSublayers,
  sortLayersToIds,
  sortChildLayersToIds,
  findSelectedItem
} from "esri/widgets/LayerList/support/layerListUtils";

// esri.widgets.LayerList.t9n
import LayerListMessages from "esri/widgets/LayerList/t9n/LayerList";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx, vmEvent, messageBundle } from "esri/widgets/support/widget";

function moveItem(data: any[], from: number, to: number): void {
  data.splice(to, 0, data.splice(from, 1)[0]);
}

const NEW_UI_FLAG = "esri-layerlist-new-ui";

const ListItemCollection = Collection.ofType<ListItem>(ListItem);

const SORT_FILTER_DATA_ATTR = "data-sort-filter";
const SORT_DATA_ATTR = "data-layer-uid";
const SORT_DATASET_ID = "layerUid";

const CSS = {
  // layerlist classes
  base: "esri-layer-list esri-widget esri-widget--panel",
  newUI: "esri-layer-list--new-ui",
  noItems: "esri-layer-list__no-items",
  list: "esri-layer-list__list",
  listRoot: "esri-layer-list__list--root",
  listExclusive: "esri-layer-list__list--exclusive",
  listInherited: "esri-layer-list__list--inherited",
  listIndependent: "esri-layer-list__list--independent",
  item: "esri-layer-list__item",
  itemContent: "esri-layer-list__item-content",
  itemError: "esri-layer-list__item--error",
  itemInvisible: "esri-layer-list__item--invisible",
  itemInvisibleAtScale: "esri-layer-list__item--invisible-at-scale",
  itemUpdating: "esri-layer-list__item--updating",
  itemChildren: "esri-layer-list__item--has-children",
  itemSelectable: "esri-layer-list__item--selectable",
  itemContainer: "esri-layer-list__item-container",
  actionsMenu: "esri-layer-list__item-actions-menu",
  actionsMenuItem: "esri-layer-list__item-actions-menu-item",
  actionsMenuItemActive: "esri-layer-list__item-actions-menu-item--active",
  actions: "esri-layer-list__item-actions",
  actionsList: "esri-layer-list__item-actions-list",
  action: "esri-layer-list__item-action",
  actionIcon: "esri-layer-list__item-action-icon",
  actionImage: "esri-layer-list__item-action-image",
  actionTitle: "esri-layer-list__item-action-title",
  actionToggle: "esri-layer-list__action-toggle",
  actionToggleOn: "esri-layer-list__action-toggle--on",
  label: "esri-layer-list__item-label",
  errorMessage: "esri-layer-list__item-error-message",
  title: "esri-layer-list__item-title",
  toggleVisible: "esri-layer-list__item-toggle",
  toggleVisibleIcon: "esri-layer-list__item-toggle-icon",
  toggleIcon: "esri-layer-list__item-toggle-icon",
  radioIcon: "esri-layer-list__item-radio-icon",
  childToggle: "esri-layer-list__child-toggle",
  childToggleOpen: "esri-layer-list__child-toggle--open",
  childOpened: "esri-layer-list__child-toggle-icon--opened",
  childClosed: "esri-layer-list__child-toggle-icon--closed",
  childClosed_RTL: "esri-layer-list__child-toggle-icon--closed-rtl",
  sortableChosen: "esri-layer-list--chosen",

  // common
  disabled: "esri-disabled",
  disabledElement: "esri-disabled-element",
  hidden: "esri-hidden",
  rotating: "esri-rotating",

  // icon classes
  iconEllipses: "esri-icon-handle-horizontal",
  iconVisible: "esri-icon-visible",
  iconInvisible: "esri-icon-non-visible",
  iconRadioSelected: "esri-icon-radio-checked",
  iconRadioUnselected: "esri-icon-radio-unchecked",
  iconNoticeTriangle: "esri-icon-notice-triangle",
  iconChildrenOpen: "esri-icon-down-arrow",
  iconDownArrow: "esri-icon-down-arrow",
  iconRightArrow: "esri-icon-right-triangle-arrow",
  iconLeftArrow: "esri-icon-left-triangle-arrow",
  iconLoading: "esri-icon-loading-indicator",
  iconDefaultAction: "esri-icon-default-action",
  widgetIcon: "esri-icon-layers"
};

const REGISTRY_KEYS = {
  actions: "actions",
  actionSection: "action-section",
  items: "items"
};

const VISIBILITY_MODES = {
  exclusive: "exclusive",
  inherited: "inherited",
  independent: "independent"
};

function closeItemActions(item: ListItem): void {
  const { actionsOpen, children } = item;

  if (actionsOpen) {
    item.actionsOpen = false;
  }

  children.forEach((child) => closeItemActions(child));
}

const SORTABLE_ROOT = "root";

/**
 * Fires after the user clicks on an {@link module:esri/support/actions/ActionButton action} or {@link module:esri/support/actions/ActionToggle action toggle} inside the LayerList widget.
 * This event may be used to define a custom function to execute when particular
 * actions are clicked.
 *
 * @event module:esri/widgets/LayerList#trigger-action
 * @property {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} action - The action clicked by the user.
 * @property {module:esri/widgets/LayerList/ListItem} item - An item associated with the action.
 */
const logger = Logger.getLogger("esri.widgets.LayerList");

interface VisibleElements {
  statusIndicators?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  statusIndicators: true
};

@subclass("esri.widgets.LayerList")
class LayerList extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/LayerList
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var layerlist = new LayerList({
   *   view: view
   * });
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    const operationalItems = this.operationalItems;
    this._setVisibleItems(operationalItems);

    this.own(
      watchUtils.on(this, "operationalItems", "change", () => this._itemsChanged(operationalItems)),
      watchUtils.init(this, "selectionEnabled", () => this._toggleAllSorting())
    );
  }

  destroy(): void {
    this._destroySortables();
    this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles: Handles = new Handles();

  private _sortableNodes: Map<string, HTMLUListElement> = new Map();

  private _sortableMap: Map<string, Sortable> = new Map();

  private _focusSortUid: string = null;

  private _newUI = has(NEW_UI_FLAG);

  @property()
  protected visibleItems: Collection<ListItem> = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @since 4.7
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property()
  iconClass = CSS.widgetIcon;

  //----------------------------------
  //  errorsVisible
  //----------------------------------

  /**
   *
   * @type {boolean}
   * @default false
   * @ignore
   */
  @property()
  @renderable()
  errorsVisible: false;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @since 4.7
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  listItemCreatedFunction
  //----------------------------------

  /**
   * Function definition for the [listItemCreatedFunction](#listItemCreatedFunction) property.
   * See the example snippet in the  [listItemCreatedFunction](#listItemCreatedFunction)
   * documentation for more details.
   *
   * @callback module:esri/widgets/LayerList~ListItemCreatedHandler
   * @param {Object} event - An object containing a list item created by the LayerList.
   * @param {module:esri/widgets/LayerList/ListItem} event.item - A list item
   *   created by the LayerList. You can modify the properties of this item to customize
   *   the text, actions, panel content, and visibility of the list item. See the
   *   documentation for the [listItemCreatedFunction](#listItemCreatedFunction) for more details.
   */

  /**
   * Specifies a function that accesses each {@link module:esri/widgets/LayerList/ListItem}.
   * Each list item can be modified
   * according to its modifiable properties. Actions can be added to list items
   * using the {@link module:esri/widgets/LayerList/ListItem#actionsSections actionsSections}
   * property of the ListItem.
   *
   * @since 4.4
   *
   * @name listItemCreatedFunction
   * @instance
   * @type {module:esri/widgets/LayerList~ListItemCreatedHandler}
   * @see [Sample - LayerList widget with actions](../sample-code/widgets-layerlist-actions/index.html)
   *
   * @example
   * var layerList = new LayerList({
   *   view: view,
   *   // executes for each ListItem in the LayerList
   *   listItemCreatedFunction: function (event) {
   *
   *     // The event object contains properties of the
   *     // layer in the LayerList widget.
   *
   *     var item = event.item;
   *
   *     if (item.title === "US Demographics") {
   *       // open the list item in the LayerList
   *       item.open = true;
   *       // change the title to something more descriptive
   *       item.title = "Population by county";
   *       // set an action for zooming to the full extent of the layer
   *       item.actionsSections = [[{
   *         title: "Go to full extent",
   *         className: "esri-icon-zoom-out-fixed",
   *         id: "full-extent"
   *       }]];
   *     }
   *   }
   * });
   */
  @aliasOf("viewModel.listItemCreatedFunction")
  @renderable()
  listItemCreatedFunction: ListItemModifier = null;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @renderable()
  @messageBundle("esri/widgets/LayerList/t9n/LayerList")
  messages: LayerListMessages = null;

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
  //  multipleSelectionEnabled
  //----------------------------------

  /**
   * Indicates whether more than one list item may be selected by the user at a single time.
   * You must first set [selectionEnabled](#selectionEnabled) to `true` for this property
   * to have an effect on the widget.
   *
   * Selected items are available in the [selectedItems](#selectedItems)
   * property.
   *
   * @name multipleSelectionEnabled
   * @instance
   * @type {boolean}
   * @default false
   *
   * @see [selectionEnabled](#selectionEnabled)
   * @see [selectedItems](#selectedItems)
   *
   * @example
   * layerList.selectionEnabled = true;
   * layerList.multipleSelectionEnabled = true;
   */
  @property()
  multipleSelectionEnabled = false;

  //----------------------------------
  //  operationalItems
  //----------------------------------

  /**
   * A collection of {@link module:esri/widgets/LayerList/ListItem}s representing operational layers.
   * To hide layers from the LayerList widget, set the
   * {@link module:esri/layers/Layer#listMode listMode} property on the layer(s) to `hide`.
   *
   * @name operationalItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/LayerList/ListItem>}
   * @readonly
   *
   * @see {@link module:esri/layers/Layer#listMode Layer.listMode}
   */
  @aliasOf("viewModel.operationalItems")
  @renderable()
  operationalItems: Collection<ListItem> = null;

  //----------------------------------
  //  selectionEnabled
  //----------------------------------

  /**
   * Indicates whether list items may be selected by the user. Selected items
   * may be reordered in the list by dragging gestures with the
   * mouse or touch screen, or with arrow keys on the keyboard.
   *
   * Selected items are available in the [selectedItems](#selectedItems)
   * property.
   *
   * @name selectionEnabled
   * @instance
   * @type {boolean}
   * @default false
   *
   * @see [selectedItems](#selectedItems)
   *
   * @example
   * layerList.selectionEnabled = true;
   */
  @property()
  @renderable()
  selectionEnabled = false;

  //----------------------------------
  //  selectedItems
  //----------------------------------

  /**
   * A collection of selected {@link module:esri/widgets/LayerList/ListItem}s representing operational layers
   * selected by the user.
   *
   * @name selectedItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/LayerList/ListItem>}
   *
   * @see [selectionEnabled](#selectionEnabled)
   */
  @property()
  @renderable()
  selectedItems: Collection<ListItem> = new ListItemCollection();

  //----------------------------------
  //  statusIndicatorsVisible
  //----------------------------------

  /**
   * Option for enabling status indicators, which indicate whether or not each layer
   * is loading resources.
   *
   * @name statusIndicatorsVisible
   * @instance
   *
   * @type {boolean}
   * @default true
   * @since 4.5
   * @deprecated since version 4.15. Use {@link module:esri/widgets/LayerList#visibleElements LayerList.visibleElements.statusIndicators} instead.
   *
   * @example
   * // disable status indicators for all layers listed in LayerList
   * layerList.statusIndicatorsVisible = false;
   */
  @property()
  @renderable()
  set statusIndicatorsVisible(value: boolean) {
    deprecatedProperty(logger, "statusIndicatorsVisible", {
      replacement: "visibleElements.statusIndicators",
      version: "4.15"
    });
    this.visibleElements = { ...this.visibleElements, statusIndicators: value };
  }

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/LayerList/LayerListViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/LayerList/LayerListViewModel}
   * @default
   */
  @vmEvent("trigger-action")
  @property({
    type: LayerListViewModel
  })
  @renderable("viewModel.state")
  viewModel: LayerListViewModel = new LayerListViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/LayerList~VisibleElements
   *
   * @property {boolean} [statusIndicators] - Indicates whether to the status indicators will be displayed. Default is `true`.
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/LayerList~VisibleElements}
   * @autocast
   *
   * @since 4.15
   *
   * @example
   * layerList.visibleElements = {
   *   statusIndicators: false
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
   * Triggers the [trigger-action](#event-trigger-action) event and executes
   * the given {@link module:esri/support/actions/ActionButton action} or {@link module:esri/support/actions/ActionToggle action toggle}.
   *
   * @param {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} - The action to execute.
   * @param {module:esri/widgets/LayerList/ListItem} - An item associated with the action.
   */
  @aliasOf("viewModel.triggerAction")
  triggerAction(action: Action, item: ListItem): void {
    this.viewModel.triggerAction(action, item);
  }

  render(): VNode {
    const { visibleItems, _newUI } = this;
    const state = this.viewModel?.state;

    const baseClasses = {
      [CSS.newUI]: _newUI,
      [CSS.hidden]: state === "loading",
      [CSS.disabled]: state === "disabled"
    };

    return (
      <div class={this.classes(CSS.base, baseClasses)}>
        {visibleItems?.length ? this.renderItems() : this.renderNoItems()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderNoItems(): VNode {
    return <div class={CSS.noItems}>{this.messages.noItemsToDisplay}</div>;
  }

  protected renderItems(): VNode {
    const { visibleItems, selectionEnabled, messages } = this;

    return (
      <ul
        aria-label={messages.widgetLabel}
        role={selectionEnabled ? "listbox" : undefined}
        afterCreate={this._sortNodeCreated}
        afterUpdate={this._sortNodeCreated}
        afterRemoved={this._sortNodeRemoved}
        data-group={SORTABLE_ROOT}
        bind={this}
        class={this.classes(CSS.list, CSS.listRoot, CSS.listIndependent)}
      >
        {visibleItems?.map((item) => this.renderItem(item, null)).toArray()}
      </ul>
    );
  }

  protected renderActionsMenuIcon(item: ListItem, actionsUid: string): VNode {
    const { messages } = this;

    const actionsMenuClasses = {
      [CSS.actionsMenuItemActive]: item.actionsOpen
    };

    const actionsMenuTitle = item.actionsOpen ? messages.closeActions : messages.openActions;

    return (
      <div
        key="actions-menu-toggle"
        data-item={item}
        bind={this}
        onclick={this._toggleActionsOpen}
        onkeydown={this._toggleActionsOpen}
        class={this.classes(CSS.actionsMenuItem, actionsMenuClasses)}
        tabindex="0"
        role="button"
        aria-controls={actionsUid}
        aria-label={actionsMenuTitle}
        title={actionsMenuTitle}
      >
        <span aria-hidden="true" class={CSS.iconEllipses} />
      </div>
    );
  }

  protected renderActionsMenu(
    item: ListItem,
    fitleredSections: Sections,
    actionsCount: number,
    actionsUid: string
  ): VNode {
    const { panel } = item;

    const panelActionNode = panel && panel.visible ? this.renderPanelButton(panel) : null;

    const singleAction = actionsCount === 1 && this._getSingleActionButton(fitleredSections);

    const singleActionNode = singleAction
      ? this.renderAction({ item, action: singleAction, singleAction: true })
      : null;

    const actionsMenuIcon =
      !singleAction && actionsCount ? this.renderActionsMenuIcon(item, actionsUid) : null;

    return actionsMenuIcon || panelActionNode || singleAction ? (
      <div key="actions-menu" class={CSS.actionsMenu}>
        {panelActionNode}
        {singleActionNode}
        {actionsMenuIcon}
      </div>
    ) : null;
  }

  protected renderChildList(item: ListItem, listUid: string): VNode {
    const { selectionEnabled } = this;
    const { visibilityMode, children } = item;
    const hasError = !!item.error;
    const hasChildren = !!children.length && !hasError;
    const showEmptyGroup = !hasChildren && selectionEnabled && item.layer?.type === "group";

    const { exclusive, inherited } = VISIBILITY_MODES;

    const childClasses = {
      [CSS.listExclusive]: visibilityMode === exclusive,
      [CSS.listInherited]: visibilityMode === inherited,
      [CSS.listIndependent]: visibilityMode !== inherited && visibilityMode !== exclusive
    };

    return hasChildren || showEmptyGroup ? (
      <ul
        bind={this}
        key="list-items"
        id={listUid}
        data-group={item.uid}
        data-item={item}
        afterCreate={this._sortNodeCreated}
        afterUpdate={this._sortNodeCreated}
        afterRemoved={this._sortNodeRemoved}
        class={this.classes(CSS.list, childClasses)}
        aria-expanded={item.open ? "true" : "false"}
        role={selectionEnabled ? "listbox" : visibilityMode === exclusive ? "radiogroup" : "group"}
        hidden={item.open || showEmptyGroup ? null : true}
      >
        {children?.map((childItem) => this.renderItem(childItem, item)).toArray()}
      </ul>
    ) : null;
  }

  protected renderChildrenToggle(item: ListItem, listUid: string): VNode {
    const { messagesCommon } = this;
    const { children } = item;
    const hasError = !!item.error;
    const hasChildren = !!children.length && !hasError;

    const childToggleClasses = {
      [CSS.childToggleOpen]: item.open
    };

    const toggleChildrenTitle = item.open ? messagesCommon.collapse : messagesCommon.expand;

    return hasChildren ? (
      <span
        onclick={this._toggleChildrenClick}
        onkeydown={this._toggleChildrenClick}
        data-item={item}
        key="toggle-children"
        class={this.classes(CSS.childToggle, childToggleClasses)}
        tabindex="0"
        role="button"
        aria-controls={listUid}
        aria-label={toggleChildrenTitle}
        title={toggleChildrenTitle}
      >
        <span aria-hidden="true" class={this.classes(CSS.childClosed, CSS.iconRightArrow)} />
        <span aria-hidden="true" class={this.classes(CSS.childOpened, CSS.iconDownArrow)} />
        <span aria-hidden="true" class={this.classes(CSS.childClosed_RTL, CSS.iconLeftArrow)} />
      </span>
    ) : null;
  }

  protected renderError(item: ListItem): VNode {
    return item.error ? (
      <div key="esri-layer-list__error" class={CSS.errorMessage} role="alert">
        <span>{this.messages.layerError}</span>
      </div>
    ) : null;
  }

  protected renderItemContent(item: ListItem, parent: ListItem, titleKey: string): VNode[] {
    const { id } = this;
    const uid = `${id}_${item.uid}`;
    const actionsUid = `${uid}_actions`;
    const listUid = `${uid}__list`;

    const { panel } = item;

    const filteredSections = this._filterActions(item.actionsSections);
    const actionsCount = this._countActions(filteredSections);

    return [
      <div key="list-item-container" class={CSS.itemContainer}>
        {this.renderChildrenToggle(item, listUid)}
        {this.renderLabel(item, parent, titleKey)}
        {this.renderActionsMenu(item, filteredSections, actionsCount, actionsUid)}
      </div>,
      this.renderError(item),
      actionsCount ? this.renderActionsSections(item, filteredSections, actionsUid) : null,
      panel && panel.open ? panel.render() : null,
      this.renderChildList(item, listUid)
    ];
  }

  protected renderItem(item: ListItem, parent: ListItem): VNode {
    const { _newUI, id, selectionEnabled, selectedItems, visibleElements } = this;
    const { children } = item;

    const uid = `${id}_${item.uid}`;
    const titleKey = `${uid}__title`;

    const hasError = !!item.error;
    const hasChildren = !!children.length && !hasError;

    const itemClasses = {
      [CSS.itemChildren]: hasChildren,
      [CSS.itemError]: !!hasError,
      [CSS.itemUpdating]: item.updating && !parent && visibleElements.statusIndicators,
      [CSS.itemInvisible]: _newUI && !item.visible,
      [CSS.itemInvisibleAtScale]: !item.visibleAtCurrentScale,
      [CSS.itemSelectable]: selectionEnabled
    };

    if (selectionEnabled) {
      const itemProps = {
        [SORT_DATA_ATTR]: item.layer?.uid,
        [SORT_FILTER_DATA_ATTR]: (!item.sortable).toString()
      };

      return (
        <li
          key={`item-with-selection-${item.uid}`}
          bind={this}
          afterCreate={this._focusListItem}
          afterUpdate={this._focusListItem}
          class={this.classes(CSS.item, itemClasses)}
          aria-labelledby={titleKey}
          onclick={this._toggleSelection}
          onkeydown={this._selectionKeydown}
          data-item={item}
          data-group={parent ? parent.uid : SORTABLE_ROOT}
          tabIndex={0}
          aria-selected={findSelectedItem(item, selectedItems) ? "true" : "false"}
          role="option"
          {...itemProps}
        >
          {this.renderItemContent(item, parent, titleKey)}
        </li>
      );
    }

    return (
      <li
        key={`item-no-selection-${item.uid}`}
        bind={this}
        afterCreate={this._focusListItem}
        afterUpdate={this._focusListItem}
        class={this.classes(CSS.item, itemClasses)}
        aria-labelledby={titleKey}
      >
        {this.renderItemContent(item, parent, titleKey)}
      </li>
    );
  }

  protected renderItemTitle(item: ListItem, titleKey: string): VNode {
    const { messages } = this;

    const title = item.title || messages.untitledLayer;
    const label = !item.visibleAtCurrentScale
      ? `${title} (${messages.layerInvisibleAtScale})`
      : title;

    return (
      <span
        key="layer-title-container"
        id={titleKey}
        title={label}
        aria-label={label}
        class={CSS.title}
      >
        {title}
      </span>
    );
  }

  protected renderItemToggleIcon(item: ListItem, parent: ListItem): VNode {
    const { _newUI } = this;
    const { exclusive } = VISIBILITY_MODES;
    const parentVisibilityMode = parent && parent.visibilityMode;

    const toggleIconClasses = {
      [CSS.toggleVisibleIcon]: _newUI,
      [CSS.toggleIcon]: _newUI && parentVisibilityMode !== exclusive,
      [CSS.radioIcon]: _newUI && parentVisibilityMode === exclusive,
      [CSS.iconRadioSelected]: parentVisibilityMode === exclusive && item.visible,
      [CSS.iconRadioUnselected]: parentVisibilityMode === exclusive && !item.visible,
      [CSS.iconVisible]: parentVisibilityMode !== exclusive && item.visible,
      [CSS.iconInvisible]: parentVisibilityMode !== exclusive && !item.visible
    };

    return (
      <span key="item-toggle-icon" class={this.classes(toggleIconClasses)} aria-hidden="true" />
    );
  }

  protected renderItemToggle(item: ListItem, parent: ListItem, titleKey: string): VNode {
    const { selectionEnabled } = this;
    const { exclusive } = VISIBILITY_MODES;
    const parentVisibilityMode = parent && parent.visibilityMode;
    const toggleRole = parentVisibilityMode === exclusive ? "radio" : "switch";

    if (selectionEnabled) {
      return (
        <span
          key="item-toggle-selection-enabled"
          class={CSS.toggleVisible}
          bind={this}
          onclick={this._toggleVisibility}
          onkeydown={this._toggleVisibility}
          data-item={item}
          data-parent-visibility={parentVisibilityMode}
          tabIndex={0}
          aria-checked={item.visible ? "true" : "false"}
          role={toggleRole}
          aria-labelledby={titleKey}
        >
          {this.renderItemToggleIcon(item, parent)}
        </span>
      );
    }
    return (
      <span key="item-toggle" class={CSS.toggleVisible}>
        {this.renderItemToggleIcon(item, parent)}
      </span>
    );
  }

  protected renderItemError(item: ListItem): VNode {
    return !!item.error ? (
      <span key="notice-triangle" aria-hidden="true" class={CSS.iconNoticeTriangle} />
    ) : null;
  }

  protected renderLabel(item: ListItem, parent: ListItem, titleKey: string): VNode {
    const { selectionEnabled, _newUI } = this;
    const { inherited, exclusive } = VISIBILITY_MODES;
    const parentVisibilityMode = parent?.visibilityMode;
    const toggleRole = parentVisibilityMode === exclusive ? "radio" : "switch";

    const labelContentNodes = [
      this.renderItemToggle(item, parent, titleKey),
      this.renderItemTitle(item, titleKey)
    ];

    if (_newUI) {
      labelContentNodes.reverse();
    }

    const labelNode = !selectionEnabled ? (
      <div
        key={`item-label-with-selection-${item.uid}`}
        class={CSS.label}
        bind={this}
        onclick={this._toggleVisibility}
        onkeydown={this._toggleVisibility}
        data-item={item}
        data-parent-visibility={parentVisibilityMode}
        tabIndex={0}
        aria-checked={item.visible ? "true" : "false"}
        role={toggleRole}
        aria-labelledby={titleKey}
      >
        {labelContentNodes}
      </div>
    ) : (
      <div key={`item-label-no-selection-${item.uid}`} class={CSS.label}>
        {labelContentNodes}
      </div>
    );

    return parentVisibilityMode === inherited || !!item.error ? (
      <div key={`item-label-container-${item.uid}`} class={CSS.label}>
        {this.renderItemError(item)}
        {this.renderItemTitle(item, titleKey)}
      </div>
    ) : (
      labelNode
    );
  }

  protected renderPanelButton(panel: ListItemPanel): VNode {
    const { className, open, title, image } = panel;

    const actionClass = !image && !className ? CSS.iconDefaultAction : className;

    const iconStyles = this._getIconImageStyles(panel);

    const buttonClasses = {
      [CSS.actionsMenuItemActive]: open
    };

    const iconClasses = {
      [CSS.actionImage]: !!iconStyles["background-image"]
    };

    if (actionClass) {
      iconClasses[actionClass] = !!actionClass;
    }

    return (
      <div
        key={`panel-${panel.uid}`}
        bind={this}
        data-panel={panel}
        onclick={this._triggerPanel}
        onkeydown={this._triggerPanel}
        class={this.classes(CSS.actionsMenuItem, buttonClasses)}
        role="button"
        tabindex="0"
        title={title}
        aria-label={title}
      >
        <span class={this.classes(iconClasses)} styles={iconStyles} />
      </div>
    );
  }

  protected renderActionsSections(
    item: ListItem,
    actionsSections: Sections,
    actionsUid: string
  ): VNode {
    const actionSectionsArray = actionsSections.toArray();

    const actionSection = actionSectionsArray.map((actionSection, index) => (
      <ul key={`${item}-action-section-${index}`} class={CSS.actionsList}>
        {this.renderActionSection(item, actionSection)}
      </ul>
    ));

    return (
      <div
        role="group"
        aria-expanded={item.actionsOpen ? "true" : "false"}
        key="actions-section"
        id={actionsUid}
        class={CSS.actions}
        hidden={item.actionsOpen ? null : true}
      >
        {actionSection}
      </div>
    );
  }

  protected renderActionSection(item: ListItem, actionSection: Actions): VNode {
    const actionSectionArray = actionSection && actionSection.toArray();
    return actionSectionArray.map((action) => this.renderAction({ item, action }));
  }

  protected renderActionIcon(action: Action): VNode {
    const { active, className } = action;
    const iconStyles = this._getIconImageStyles(action);

    const actionClass =
      action.type === "button" && !action.image && !className ? CSS.iconDefaultAction : className;

    const iconClasses = {
      [CSS.actionImage]: !active && !!iconStyles["background-image"],
      [CSS.iconLoading]: active,
      [CSS.rotating]: active
    };

    if (actionClass && !active) {
      iconClasses[actionClass] = true;
    }

    return (
      <span
        key="action-icon"
        aria-hidden="true"
        class={this.classes(CSS.actionIcon, iconClasses)}
        styles={iconStyles}
      />
    );
  }

  protected renderActionTitle(title: string, singleAction: boolean): VNode {
    return !singleAction ? (
      <span key="action-title" class={CSS.actionTitle}>
        {title}
      </span>
    ) : null;
  }

  protected renderAction(options: {
    item: ListItem;
    action: Action;
    singleAction?: boolean;
  }): VNode {
    const { item, action, singleAction } = options;
    const { active, disabled, title } = action;

    const buttonClasses = {
      [CSS.actionsMenuItem]: singleAction && action.type === "button",
      [CSS.action]: active || (!singleAction && action.type !== "toggle"),
      [CSS.actionToggle]: !active && action.type === "toggle",
      [CSS.actionToggleOn]: !active && action.type === "toggle" && action.value,
      [CSS.disabledElement]: disabled
    };

    const actionContentNodes = [
      this.renderActionIcon(action),
      this.renderActionTitle(title, singleAction)
    ];

    if (singleAction) {
      return (
        <div
          bind={this}
          data-item={item}
          data-action={action}
          role="button"
          key={`single-action-${action.uid}`}
          onclick={this._triggerAction}
          onkeydown={this._triggerAction}
          classes={buttonClasses}
          tabindex="0"
          title={title}
          aria-label={title}
        >
          {actionContentNodes}
        </div>
      );
    }

    return (
      <li
        bind={this}
        data-item={item}
        data-action={action}
        key={`action-${action.uid}`}
        onclick={this._triggerAction}
        onkeydown={this._triggerAction}
        classes={buttonClasses}
        tabindex="0"
        role="button"
        title={title}
        aria-label={title}
      >
        {actionContentNodes}
      </li>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _sortNodeRemoved(el: HTMLUListElement): void {
    const { _sortableMap } = this;
    const key = el.dataset.group;
    const sortable = _sortableMap.get(key);

    if (sortable) {
      sortable.destroy();
    }

    _sortableMap.delete(key);
  }

  private _destroySortables(): void {
    const { _sortableMap, _sortableNodes } = this;
    _sortableMap.forEach((item) => item && item.destroy());
    _sortableMap.clear();
    _sortableNodes.clear();
  }

  private _moveLayerFromChildList({
    to,
    from,
    item,
    newIndex
  }: {
    to: HTMLElement;
    from: HTMLElement;
    item: HTMLElement;
    newIndex: number;
  }): void {
    const targetItem = item["data-item"] as ListItem;
    const toItem = to["data-item"] as ListItem;
    const fromItem = from["data-item"] as ListItem;

    this.viewModel.moveListItem(targetItem, fromItem, toItem, newIndex);
  }

  private _onSortableSort = ({ to, from, item, newIndex }: Sortable.SortableEvent): void => {
    if (!from || !to) {
      return;
    }

    if (from === to) {
      this._sortLayers(this._sortableMap.get(from.dataset.group));
    } else {
      this._moveLayerFromChildList({ to, from, item, newIndex });
    }
  };

  private _sortLayers(sortable: Sortable): void {
    if (!sortable) {
      return;
    }

    const item = sortable.el["data-item"] as ListItem;
    const items = sortable.toArray();

    if (!item) {
      sortLayersToIds(this.view?.map?.layers, items);
    } else {
      sortChildLayersToIds(item, items);
    }
  }

  private _sortableCanPut = (to: Sortable, from: Sortable, dragEl: HTMLElement): boolean => {
    const toGroup = to.el.dataset.group;
    const fromGroup = from.el.dataset.group;
    const toItem = to.el["data-item"] as ListItem;
    const targetItem = dragEl["data-item"] as ListItem;
    const dragLayerType = targetItem?.layer?.type;
    const toLayerType = toItem?.layer?.type;
    const groupLayerInception = toLayerType === "group" && dragLayerType === "group";

    return toGroup && fromGroup && dragLayerType && !groupLayerInception;
  };

  private _sortableCanPull = (to: Sortable, from: Sortable, dragEl: HTMLElement): boolean => {
    const toGroup = to.el.dataset.group;
    const fromGroup = from.el.dataset.group;
    const targetItem = dragEl["data-item"] as ListItem;
    const dragLayerType = targetItem?.layer?.type;

    return toGroup && fromGroup && !!dragLayerType;
  };

  private _toggleSorting(node: HTMLUListElement, group: string): void {
    const { _sortableMap, selectionEnabled } = this;

    const instance = _sortableMap.get(group);
    const item = node["data-item"] as ListItem;
    const childrenSortable =
      group === SORTABLE_ROOT ? true : item.childrenSortable && canSortSublayers(item);
    const enabled = childrenSortable && selectionEnabled;

    if (instance) {
      instance.option("disabled", !enabled);
    } else if (enabled) {
      const sortableInstance = Sortable.create(node, {
        dataIdAttr: SORT_DATA_ATTR,
        group: {
          name: group,
          pull: this._sortableCanPull,
          put: this._sortableCanPut
        },
        filter: `[${SORT_FILTER_DATA_ATTR}="true"]`,
        fallbackTolerance: 4, // Note: some phones with very sensitive touch displays like the Samsung Galaxy S8 will fire unwanted touchmove events even when your finger is not moving, resulting in the sort not triggering. Only needed when the item can also be clicked/touched. #25015
        onSort: this._onSortableSort,
        onEnd: this._onSortableEnd,
        disabled: !enabled,
        chosenClass: CSS.sortableChosen
      });

      _sortableMap.set(group, sortableInstance);
    }
  }

  private _onSortableEnd = ({ oldIndex, from, to, item }: Sortable.SortableEvent): void => {
    if (from === to) {
      return;
    }

    // revert DOM changes -> VDOM will handle this for us
    from.insertBefore(item, from.children[oldIndex]);
  };

  private _toggleAllSorting(): void {
    this._sortableNodes.forEach((node, group) => this._toggleSorting(node, group));
  }

  private _sortNodeCreated(el: HTMLUListElement): void {
    const key = el.dataset.group;

    if (!key) {
      return;
    }

    this._sortableNodes.set(key, el);
    this._toggleSorting(el, key);
  }

  private _setVisibleItems(items: Collection<ListItem>): void {
    this.visibleItems = items?.filter((item) => this.errorsVisible || !item.error);
  }

  private _getSingleActionButton(sections: Sections): ActionButton {
    return sections
      .reduce((item) => item)
      .filter((item) => item && item.type === "button")
      .getItemAt(0) as ActionButton;
  }

  private _focusListItem(element: HTMLElement): void {
    const { _focusSortUid } = this;

    if (!element || !_focusSortUid) {
      return;
    }

    const item = element["data-item"] as ListItem;

    if (item.layer?.uid === _focusSortUid) {
      element.focus();
      this._focusSortUid = null;
    }
  }

  private _watchActionSectionChanges(actionSection: Actions, itemId: string): void {
    const registryKey = REGISTRY_KEYS.actionSection + itemId;

    this._handles.add(actionSection.on("change", this.scheduleRender.bind(this)), registryKey);

    actionSection.forEach((action) => this._renderOnActionChanges(action, itemId));
  }

  private _renderOnActionChanges(action: Action, itemId: string): void {
    const registryKey = REGISTRY_KEYS.actions + itemId;

    if (action.type === "toggle") {
      this._handles.add(
        [
          watchUtils.init(action, ["className", "image", "id", "title", "visible", "value"], () =>
            this.scheduleRender()
          )
        ],
        registryKey
      );

      return;
    }

    if (action.type === "slider") {
      this._handles.add(
        [
          watchUtils.init(
            action,
            [
              "className",
              "id",
              "title",
              "visible",
              "value",
              "displayValueEnabled",
              "max",
              "min",
              "step"
            ],
            () => this.scheduleRender()
          )
        ],
        registryKey
      );
      return;
    }

    this._handles.add(
      [
        watchUtils.init(action, ["className", "image", "id", "title", "visible"], () =>
          this.scheduleRender()
        )
      ],
      registryKey
    );
  }

  private _renderOnItemChanges(item: ListItem): void {
    const itemId = item.uid;

    const registryKey = REGISTRY_KEYS.items + itemId;

    this._handles.add(
      [
        watchUtils.init(
          item,
          [
            "actionsOpen",
            "visible",
            "open",
            "updating",
            "title",
            "visibleAtCurrentScale",
            "error",
            "visibilityMode",
            "panel",
            "panel.title",
            "panel.content",
            "panel.className",
            "sortable",
            "childrenSortable"
          ],
          () => this.scheduleRender()
        ),
        item.actionsSections.on("change", () => this.scheduleRender()),
        item.children.on("change", () => this.scheduleRender())
      ],
      registryKey
    );

    item.children.forEach((child) => this._renderOnItemChanges(child));
    item.actionsSections.forEach((actionSection) =>
      this._watchActionSectionChanges(actionSection, itemId)
    );
  }

  private _itemsChanged(items: Collection<ListItem>): void {
    this._handles.removeAll();

    items.forEach((item) => this._renderOnItemChanges(item));

    this._setVisibleItems(items);

    this.scheduleRender();
  }

  private _filterActions(actionSections: Sections): Sections {
    return actionSections.map((section) => section.filter((action) => action.visible));
  }

  private _countActions(actionSections: Sections): number {
    return actionSections.reduce((count, section) => count + section.length, 0);
  }

  private _getIconImageStyles(source: Action | ListItemPanel): HashMap<string> {
    const image =
      source.declaredClass === "esri.widgets.LayerList.ListItemPanel" ||
      source.declaredClass === "esri.support.Action.ActionButton" ||
      source.declaredClass === "esri.support.Action.ActionToggle"
        ? (source as ActionButton | ActionToggle | ListItemPanel).image
        : null;

    return {
      "background-image": image ? `url("${image}")` : null
    };
  }

  private _selectionKeydown(event: KeyboardEvent): void {
    const SELECTION_KEYS = ["ArrowDown", "ArrowUp"];

    const key = eventKey(event);

    if (SELECTION_KEYS.indexOf(key) === -1) {
      this._toggleSelection(event);
      return;
    }

    event.stopPropagation();

    const node = event.currentTarget as HTMLLIElement;
    const item = node["data-item"] as ListItem;

    const { _sortableMap, selectedItems } = this;
    const group = node.dataset.group;
    const sortable = _sortableMap.get(group);

    if (!sortable) {
      return;
    }

    const isSelected = findSelectedItem(item, selectedItems);
    const items = sortable.toArray();
    const target = event.target as HTMLElement;
    const index = items.indexOf(target.dataset[SORT_DATASET_ID]);

    if (index === -1) {
      return;
    }

    if (key === "ArrowDown") {
      const newIndex = index + 1;

      if (newIndex >= items.length) {
        return;
      }

      if (isSelected) {
        moveItem(items, index, newIndex);
        sortable.sort(items);
        this._sortLayers(sortable);
        this._focusSortUid = item.layer?.uid;
      } else {
        this._focusSortUid = item.layer?.uid;
        this.scheduleRender();
      }
    }

    if (key === "ArrowUp") {
      const newIndex = index - 1;

      if (newIndex <= -1) {
        return;
      }

      if (isSelected) {
        moveItem(items, index, newIndex);
        sortable.sort(items);
        this._sortLayers(sortable);
        this._focusSortUid = item.layer?.uid;
      } else {
        this._focusSortUid = item.layer?.uid;
        this.scheduleRender();
      }
    }
  }

  @accessibleHandler()
  private _toggleActionsOpen(event: Event): void {
    const node = event.currentTarget as Element;
    const item = node["data-item"] as ListItem;
    const { actionsOpen } = item;
    const toggledValue = !actionsOpen;

    if (toggledValue) {
      this.operationalItems.forEach((item) => closeItemActions(item));
    }

    item.actionsOpen = toggledValue;
    event.stopPropagation();
  }

  @accessibleHandler()
  private _triggerPanel(event: Event): void {
    const node = event.currentTarget as Element;
    const panel = node["data-panel"] as ListItemPanel;

    if (panel) {
      panel.open = !panel.open;
    }

    event.stopPropagation();
  }

  @accessibleHandler()
  private _triggerAction(event: Event): void {
    const node = event.currentTarget as Element;
    const action = node["data-action"] as Action;
    const item = node["data-item"] as ListItem;

    if (action.type === "toggle") {
      action.value = !action.value;
    }

    this.triggerAction(action, item);
    event.stopPropagation();
  }

  @accessibleHandler()
  private _toggleVisibility(event: Event): void {
    const node = event.currentTarget as Element;
    const parentVisibilityMode = node.getAttribute("data-parent-visibility");
    const item = node["data-item"] as ListItem;
    if (!(parentVisibilityMode === VISIBILITY_MODES.exclusive && item.visible)) {
      item.visible = !item.visible;
    }
    event.stopPropagation();
  }

  @accessibleHandler()
  private _toggleChildrenClick(event: Event): void {
    const node = event.currentTarget as Element;
    const item = node["data-item"] as ListItem;
    item.open = !item.open;
    event.stopPropagation();
  }

  @accessibleHandler()
  private _toggleSelection(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();
    const { multipleSelectionEnabled, selectedItems } = this;

    const allowMultipleSelected = multipleSelectionEnabled && (event.metaKey || event.ctrlKey);
    const node = event.currentTarget as Element;
    const item = node["data-item"] as ListItem;
    const found = findSelectedItem(item, selectedItems);

    const { length } = selectedItems;
    const singleMatch = found && length === 1;

    if (allowMultipleSelected) {
      found ? selectedItems.remove(found) : selectedItems.add(item);
      return;
    }

    if (length && !singleMatch) {
      selectedItems.removeAll();
      selectedItems.add(item);
      return;
    }

    found ? selectedItems.remove(found) : selectedItems.add(item);
  }
}

export default LayerList;
