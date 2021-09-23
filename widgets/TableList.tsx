/**
 * The TableList widget provides a way to display a list of tables associated with a {@link module:esri/Map}.
 * It is meant to be used with {@link module:esri/layers/FeatureLayer feature layer} tables.
 *
 * If a map contains feature layer tables, they will display within the widget. Tables can also be added to the map's
 * {@link module:esri/Map#tables tables} collection. Any tables referenced in the [map](#map)
 * property will display in the widget. If unsure of whether the
 * layer is a table, check the feature layer's {@link module:esri/layers/FeatureLayer#isTable isTable} property.
 *
 * The {@link module:esri/widgets/TableList/ListItem ListItem} API provides access to each table, allows
 * the developer to configure actions related to the table, and allows the developer to add content to the item related to the table.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 * The TableList widget is not supported with {@link module:esri/WebScene web scenes}.
 * :::
 *
 * ![tablelist widget](../assets/img/apiref/widgets/tablelist-widget.png)
 *
 * @module esri/widgets/TableList
 * @since 4.17
 *
 * @see [TableList.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/TableList.tsx)
 * @see [TableList.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_TableList.scss)
 * @see module:esri/widgets/TableList/TableListViewModel
 * @see {@link module:esri/Map#tables Map.tables}
 * @see {@link module:esri/WebMap#tables WebMap.tables}
 * @see [Sample - TableList Widget](../sample-code/widgets-tablelist/index.html)
 *
 * @example
 * const tableList = new TableList({
 *   map: map, // takes any tables associated with the map and displays in widget
 *   selectionEnabled: true,
 *   listItemCreatedFunction: function(event) {
 *     let item = event.item;
 *     item.actionsSections = [
 *       {
 *         title: "Show table",
 *         className: "esri-icon-table",
 *         id: "table",
 *         type: "toggle"
 *       },
 *       {
 *        title: "Layer information",
 *        className: "esri-icon-description",
 *        id: "information"
 *       }
 *     ]
 * });
 */

// esri
import WebMap from "esri/WebMap";
import WebScene from "esri/WebScene";

// esri.core
import Collection from "esri/core/Collection";
import { eventKey } from "esri/core/events";
import Handles from "esri/core/Handles";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import Layer from "esri/layers/Layer";

// esri.support.actions
import ActionButton from "esri/support/actions/ActionButton";
import ActionToggle from "esri/support/actions/ActionToggle";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.LayerList
import { Action, Actions, Sections } from "esri/widgets/LayerList/interfaces";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, tsx, vmEvent, messageBundle } from "esri/widgets/support/widget";

// esri.widgets.TableList
import { ListItemModifier } from "esri/widgets/TableList/interfaces";
import ListItem from "esri/widgets/TableList/ListItem";
import TableListViewModel from "esri/widgets/TableList/TableListViewModel";

// esri.widgets.TableList.support
import { findSelectedItem } from "esri/widgets/TableList/support/tableListUtils";

// esri.widgets.TableList.t9n
import TableListMessages from "esri/widgets/TableList/t9n/TableList";

// sortablejs
import Sortable from "sortablejs";

function moveItem(data: any[], from: number, to: number): void {
  data.splice(to, 0, data.splice(from, 1)[0]);
}

const ListItemCollection = Collection.ofType<ListItem>(ListItem);

const SORT_GROUP_NAME = "root-tables";
const SORT_DATA_ATTR = "data-layer-uid";
const SORT_DATASET_ID = "layerUid";

const CSS = {
  // tableList classes
  base: "esri-table-list",
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  noItems: "esri-table-list__no-items",
  list: "esri-table-list__list",
  listRoot: "esri-table-list__list--root",
  item: "esri-table-list__item",
  itemChosen: "esri-table-list__item--chosen",
  itemError: "esri-table-list__item--error",
  itemSelectable: "esri-table-list__item--selectable",
  itemContainer: "esri-table-list__item-container",
  actionsMenu: "esri-table-list__item-actions-menu",
  actionsMenuItem: "esri-table-list__item-actions-menu-item",
  actionsMenuItemActive: "esri-table-list__item-actions-menu-item--active",
  actions: "esri-table-list__item-actions",
  actionsList: "esri-table-list__item-actions-list",
  action: "esri-table-list__item-action",
  actionIcon: "esri-table-list__item-action-icon",
  actionImage: "esri-table-list__item-action-image",
  actionTitle: "esri-table-list__item-action-title",
  actionToggle: "esri-table-list__action-toggle",
  actionToggleOn: "esri-table-list__action-toggle--on",
  errorMessage: "esri-table-list__item-error-message",
  title: "esri-table-list__item-title",
  // common
  disabled: "esri-disabled",
  disabledElement: "esri-disabled-element",
  hidden: "esri-hidden",
  rotating: "esri-rotating",

  // icon classes
  iconEllipses: "esri-icon-handle-horizontal",
  iconNoticeTriangle: "esri-icon-notice-triangle",
  iconLoading: "esri-icon-loading-indicator",
  iconDefaultAction: "esri-icon-default-action",
  widgetIcon: "esri-icon-table"
};

const REGISTRY_KEYS = {
  actions: "actions",
  actionSection: "action-section",
  items: "items"
};

function closeItemActions(item: ListItem): void {
  const { actionsOpen } = item;

  if (actionsOpen) {
    item.actionsOpen = false;
  }
}

/**
 * Fires after the user clicks on an {@link module:esri/support/actions/ActionButton action}
 * or {@link module:esri/support/actions/ActionToggle action toggle}
 * inside the TableList widget. This event may be used to define a
 * custom function to execute when particular actions are clicked.
 *
 * @event module:esri/widgets/TableList#trigger-action
 * @property {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} action - The action clicked by the user.
 * @property {module:esri/widgets/TableList/ListItem} item - An item associated with the action.
 *
 * @example
 * tableList.on("trigger-action", function (event) {
 *   let item = event.item;
 *   // Capture the action id.
 *   let id = event.action.id;
 *
 *   if (id === "information") {
 *     window.open(item.layer.url);
 *   }
 * });
 *
 */

@subclass("esri.widgets.TableList")
class TableList extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/TableList
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const tableList = new TableList({
   *   map: map
   * });
   */

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    this._setVisibleItems(this.tableItems);

    this.own(
      watchUtils.on(this.viewModel, "tableItems", "change", () => this._itemsChanged()),
      watchUtils.init(this, "selectionEnabled", () => this._toggleSorting())
    );
  }

  override destroy(): void {
    this._destroySortable();
    this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles: Handles = new Handles();

  private _sortable: Sortable = null;

  private _sortableNode: HTMLUListElement = null;

  private _focusSortUid: string = null;

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
   * @name iconClass
   * @type {string}
   */
  @property()
  override iconClass = CSS.widgetIcon;

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
  errorsVisible: false;

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
  override label: string = undefined;

  //----------------------------------
  //  listItemCreatedFunction
  //----------------------------------
  /**
   * Function definition for the [listItemCreatedFunction](#listItemCreatedFunction) property.
   *
   * @callback module:esri/widgets/TableList~ListItemCreatedHandler
   * @param {Object} event - An object containing a list item created by the TableList.
   * @param {module:esri/widgets/TableList/ListItem} event.item - A list item
   *   created by the TableList. You can modify the properties of this item to customize
   *   the text, actions, and visibility of the list item. See the
   *   documentation for the [listItemCreatedFunction](#listItemCreatedFunction) for more details.
   */

  /**
   * Specifies a function that accesses each {@link module:esri/widgets/TableList/ListItem}.
   * Each list item can be modified according to its modifiable properties. Actions can be added
   * to list items using the {@link module:esri/widgets/TableList/ListItem#actionsSections actionsSections}
   * property of the ListItem.
   *
   * @name listItemCreatedFunction
   * @instance
   * @type {module:esri/widgets/TableList~ListItemCreatedHandler}
   *
   * @example
   * const tableList = new TableList({
   *   map: map,
   *   selectionEnabled: true,
   *   listItemCreatedFunction: function(event) {
   *     let item = event.item;
   *     item.actionsSections = [
   *       [
   *         {
   *           title: "Go to full extent",
   *           className: "esri-icon-zoom-out-fixed",
   *           id: "full-extent"
   *         }
   *       ]
   *     ];
   *    }
   * });
   */
  @aliasOf("viewModel.listItemCreatedFunction")
  listItemCreatedFunction: ListItemModifier = null;

  //----------------------------------
  //  map
  //----------------------------------

  /**
   * A reference to a {@link module:esri/Map map} containing the tables. Set this property
   * to access the underlying tables within the map.
   *
   * @name map
   * @instance
   * @type {module:esri/Map | module:esri/WebMap}
   * @see {@link module:esri/Map#tables Map.tables}
   * @see {@link module:esri/WebMap#tables WebMap.tables}
   *
   * @example
   * Layer.fromPortalItem({
   *   // Loads a layer (table) from a portal item
   *   portalItem: { // autocasts new PortalItem()
   *     id: "add portal item id"
   *   }
   * }).then(function(layer) {
   *   // Load the layer
   *   layer.load().then(function() {
   *     // Check if the layer is a table
   *     if (layer.isTable) {
   *       map.tables.add(layer);
   *       console.log(map.tables);
   *     }
   *   });
   * });
   *
   * const tableList = new TableList({
   *   map: map //  map contains tables collection
   * });
   */
  @aliasOf("viewModel.map")
  map: WebMap | WebScene = null;

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
  @messageBundle("esri/widgets/TableList/t9n/TableList")
  messages: TableListMessages = null;

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
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

  //----------------------------------
  //  multipleSelectionEnabled
  //----------------------------------

  /**
   * Indicates whether more than one {@link module:esri/widgets/TableList/ListItem list item} can be selected by a user at a single time.
   * [SelectionEnabled](#selectionEnabled) must be set to `true` for this property to have an effect on the widget.
   *
   * Selected items are available in the [selectedItems](#selectedItems) property.
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
   * tableList.selectionEnabled = true;
   * tableList.multipleSelectionEnabled = true;
   */
  @property()
  multipleSelectionEnabled = false;

  //----------------------------------
  //  selectionEnabled
  //----------------------------------

  /**
   * Indicates whether {@link module:esri/widgets/TableList/ListItem list items} may be selected by the user.
   * Selected items can by reordered in the list by drag and drop
   * using the mouse or touch screen as well as with arrows on the keyboard.
   *
   * Selected items are available in the [selectedItems](#selectedItems) property.
   *
   * @name selectionEnabled
   * @instance
   * @type {boolean}
   * @default false
   *
   * @see [selectedItems](#selectedItems)
   *
   * @example
   * tableList.selectionEnabled = true;
   */
  @property()
  selectionEnabled = false;

  //----------------------------------
  //  selectedItems
  //----------------------------------

  /**
   * A collection of selected {@link module:esri/widgets/TableList/ListItem}s representing table list items
   * selected by the user.
   *
   * @name selectedItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/TableList/ListItem>}
   *
   * @see [selectionEnabled](#selectionEnabled)
   */
  @property()
  selectedItems: Collection<ListItem> = new ListItemCollection();

  //----------------------------------
  //  tableItems
  //----------------------------------

  /**
   * The collection of table {@link module:esri/widgets/TableList/ListItem}s displayed within the widget.
   *
   * @name tableItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/TableList/ListItem>}
   * @readonly
   */
  @aliasOf("viewModel.tableItems")
  tableItems: Collection<ListItem> = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/TableList/TableListViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/TableList/TableListViewModel}
   * @default
   * @autocast
   */
  @vmEvent("trigger-action")
  @property({
    type: TableListViewModel
  })
  override viewModel = new TableListViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Triggers the [trigger-action](#event-trigger-action) event and executes
   * the given {@link module:esri/support/actions/ActionButton action} or
   * {@link module:esri/support/actions/ActionToggle action toggle}.
   *
   * @param {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} - The action to execute.
   * @param {module:esri/widgets/TableList/ListItem} - An item associated with the action.
   */
  @aliasOf("viewModel.triggerAction")
  triggerAction(action: Action, item: ListItem): void {
    this.viewModel.triggerAction(action, item);
  }

  override render(): VNode {
    const { visibleItems } = this;
    const state = this.viewModel?.state;

    const baseClasses = {
      [CSS.hidden]: state === "loading",
      [CSS.disabled]: state === "disabled"
    };

    return (
      <div class={this.classes(CSS.base, CSS.esriWidget, CSS.esriWidgetPanel, baseClasses)}>
        {visibleItems?.length ? this.renderList() : this.renderNoItems()}
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

  protected renderList(): VNode {
    const { visibleItems, messages, selectionEnabled } = this;

    return (
      <ul
        aria-label={messages.widgetLabel}
        role={selectionEnabled ? "listbox" : undefined}
        afterCreate={this._sortNodeCreated}
        afterRemoved={this._destroySortable}
        data-node-ref="_sortableNode"
        bind={this}
        class={this.classes(CSS.list, CSS.listRoot)}
      >
        {visibleItems.map((item) => this.renderItem(item)).toArray()}
      </ul>
    );
  }

  protected renderItem(item: ListItem): VNode {
    const { id, selectionEnabled, selectedItems } = this;

    const uid = `${id}_${item.uid}`;
    const titleKey = `${uid}__title`;
    const hasError = !!item.error;

    const itemClasses = {
      [CSS.itemError]: !!hasError,
      [CSS.itemSelectable]: selectionEnabled
    };

    if (selectionEnabled) {
      const itemProps = {
        [SORT_DATA_ATTR]: item.layer?.uid
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
          tabIndex={0}
          aria-selected={findSelectedItem(item, selectedItems) ? "true" : "false"}
          role="option"
          {...itemProps}
        >
          {this.renderItemContent(item, titleKey)}
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
        {this.renderItemContent(item, titleKey)}
      </li>
    );
  }

  protected renderActionsMenuIcon(item: ListItem, actionsUid: string): VNode {
    const { messagesCommon } = this;

    const actionsMenuClasses = {
      [CSS.actionsMenuItemActive]: item.actionsOpen
    };

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
        aria-label={messagesCommon.options}
        title={messagesCommon.options}
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
    const singleAction = actionsCount === 1 && this._getSingleActionButton(fitleredSections);

    const singleActionNode = singleAction
      ? this.renderAction({ item, action: singleAction, singleAction: true })
      : null;

    const actionsMenuIcon =
      !singleAction && actionsCount ? this.renderActionsMenuIcon(item, actionsUid) : null;

    return actionsMenuIcon || singleAction ? (
      <div key="actions-menu" class={CSS.actionsMenu}>
        {singleActionNode}
        {actionsMenuIcon}
      </div>
    ) : null;
  }

  protected renderError(item: ListItem): VNode {
    return item.error ? (
      <div key="error" class={CSS.errorMessage} role="alert">
        <span>{this.messages.tableError}</span>
      </div>
    ) : null;
  }

  protected renderItemContent(item: ListItem, titleKey: string): VNode[] {
    const { id } = this;
    const uid = `${id}_${item.uid}`;
    const actionsUid = `${uid}_actions`;

    const filteredSections = this._filterActions(item.actionsSections);
    const actionsCount = this._countActions(filteredSections);

    return [
      <div key="list-item-container" class={CSS.itemContainer}>
        {this.renderLabel(item, titleKey)}
        {this.renderActionsMenu(item, filteredSections, actionsCount, actionsUid)}
      </div>,
      this.renderError(item),
      actionsCount ? this.renderActionsSections(item, filteredSections, actionsUid) : null
    ];
  }

  protected renderTitle(item: ListItem, titleKey: string): VNode {
    const { messages } = this;
    const title = item.title || messages.untitledTable;

    return (
      <span key="layer-title-container" id={titleKey} class={CSS.title}>
        {title}
      </span>
    );
  }

  protected renderItemError(item: ListItem): VNode {
    return !!item.error ? (
      <span key="notice-triangle" aria-hidden="true" class={CSS.iconNoticeTriangle} />
    ) : null;
  }

  protected renderLabel(item: ListItem, titleKey: string): VNode {
    return !!item.error
      ? [this.renderItemError(item), this.renderTitle(item, titleKey)]
      : this.renderTitle(item, titleKey);
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

  private _filterActions(actionSections: Sections): Sections {
    return actionSections.map((section) => section.filter((action) => action.visible));
  }

  private _setVisibleItems(items: Collection<ListItem>): void {
    this.visibleItems = items?.filter((item) => this.errorsVisible || !item.error);
  }

  private _destroySortable(): void {
    const { _sortable } = this;
    _sortable && _sortable.destroy();
    this._sortable = null;
  }

  private _toggleSorting(): void {
    const { _sortable, _sortableNode, selectionEnabled } = this;

    if (!_sortableNode) {
      return;
    }

    if (_sortable) {
      _sortable.option("disabled", !selectionEnabled);
    } else {
      const itemSort = Sortable.create(_sortableNode, {
        dataIdAttr: SORT_DATA_ATTR,
        group: SORT_GROUP_NAME,
        fallbackTolerance: 4, // Note: some phones with very sensitive touch displays like the Samsung Galaxy S8 will fire unwanted touchmove events even when your finger is not moving, resulting in the sort not triggering. Only needed when the item can also be clicked/touched. #25015
        disabled: !selectionEnabled,
        onSort: () => this._sortTablesToItems(itemSort.toArray()),
        chosenClass: CSS.itemChosen
      });

      this._sortable = itemSort;
    }
  }

  private _sortNodeCreated(el: HTMLUListElement): void {
    this._sortableNode = el;
    this._toggleSorting();
  }

  private _sortTablesToItems(itemIds: string[]): void {
    const tables = this.map?.tables;

    if (!tables) {
      return;
    }

    tables.sort((a: Layer, b: Layer) => {
      const aIndex = itemIds.indexOf(a.uid);
      const bIndex = itemIds.indexOf(b.uid);

      if (aIndex > bIndex) {
        return -1;
      }

      if (aIndex < bIndex) {
        return 1;
      }

      return 0;
    });
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

    const scheduleRenderHelper = () => this.scheduleRender();

    this._handles.add(actionSection.on("change", scheduleRenderHelper), registryKey);

    actionSection.forEach((action) => this._renderOnActionChanges(action, itemId));
  }

  private _renderOnActionChanges(action: Action, itemId: string): void {
    const registryKey = REGISTRY_KEYS.actions + itemId;

    const scheduleRenderHelper = () => this.scheduleRender();

    if (action.type === "toggle") {
      this._handles.add(
        [
          watchUtils.init(
            action,
            ["className", "image", "id", "title", "visible", "value"],
            scheduleRenderHelper
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
            scheduleRenderHelper
          )
        ],
        registryKey
      );
      return;
    }

    this._handles.add(
      [
        watchUtils.init(
          action,
          ["className", "image", "id", "title", "visible"],
          scheduleRenderHelper
        )
      ],
      registryKey
    );
  }

  private _renderOnItemChanges(item: ListItem): void {
    const itemId = item.uid;

    const registryKey = REGISTRY_KEYS.items + itemId;

    const scheduleRenderHelper = () => this.scheduleRender();

    this._handles.add(
      [
        watchUtils.init(item, ["actionsOpen", "open", "title", "error"], scheduleRenderHelper),
        item.actionsSections.on("change", scheduleRenderHelper)
      ],
      registryKey
    );

    item.actionsSections.forEach((actionSection) =>
      this._watchActionSectionChanges(actionSection, itemId)
    );
  }

  private _itemsChanged(): void {
    const { tableItems } = this.viewModel;

    this._setVisibleItems(tableItems);

    this._handles.removeAll();

    tableItems.forEach((item) => this._renderOnItemChanges(item));

    this.scheduleRender();
  }

  private _countActions(actionSections: Sections): number {
    return actionSections.reduce((count, section) => count + section.length, 0);
  }

  private _getIconImageStyles(source: Action): HashMap<string> {
    const image =
      source.declaredClass === "esri.support.Action.ActionButton" ||
      source.declaredClass === "esri.support.Action.ActionToggle"
        ? (source as ActionButton | ActionToggle).image
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

    const node = event.currentTarget as Element;
    const item = node["data-item"];

    const { _sortable, selectedItems } = this;

    const isSelected = findSelectedItem(item, selectedItems);
    const items = _sortable.toArray();
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
        _sortable.sort(items);
        this._sortTablesToItems(_sortable.toArray());
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
        _sortable.sort(items);
        this._sortTablesToItems(_sortable.toArray());
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
    const item = node["data-item"];
    const { actionsOpen } = item;
    const toggledValue = !actionsOpen;

    if (toggledValue) {
      this.tableItems.forEach((item) => closeItemActions(item));
    }

    item.actionsOpen = toggledValue;
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

export default TableList;
