/**
 * The LayerList widget provides a way to display a list of layers, and switching on/off their visibility.
 *
 * @module esri/widgets/LayerList
 * @since 4.2
 *
 * @see [LayerList.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/LayerList.tsx)
 * @see [LayerList.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_LayerList.scss)
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

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, subclass, declared, property } from "../core/accessorSupport/decorators";

import Widget = require("./Widget");

import {
  vmEvent,
  renderable,
  tsx,
  accessibleHandler,
  join
} from "./support/widget";

import {
  ListItemModifier
} from "./LayerList/interfaces";

import * as i18nCommon from "dojo/i18n!../nls/common";
import * as i18n from "dojo/i18n!./LayerList/nls/LayerList";

import Action = require("../support/Action");
import Collection = require("../core/Collection");
import HandleRegistry = require("../core/HandleRegistry");
import LayerListViewModel = require("./LayerList/LayerListViewModel");
import ListItem = require("./LayerList/ListItem");
import View = require("../views/View");
import watchUtils = require("../core/watchUtils");

const CSS = {
  // layerlist classes
  base: "esri-layer-list esri-widget esri-widget--panel",
  noItems: "esri-layer-list__no-items",
  list: "esri-layer-list__list",
  listRoot: "esri-layer-list__list--root",
  listExclusive: "esri-layer-list__list--exclusive",
  listInherited: "esri-layer-list__list--inherited",
  listIndependent: "esri-layer-list__list--independent",
  item: "esri-layer-list__item",
  itemError: "esri-layer-list__item--error",
  itemInvisibleAtScale: "esri-layer-list__item--invisible-at-scale",
  itemUpdating: "esri-layer-list__item--updating",
  itemChildren: "esri-layer-list__item--has-children",
  itemContainer: "esri-layer-list__item-container",
  actionsMenu: "esri-layer-list__item-actions-menu",
  actionsMenuItem: "esri-layer-list__item-actions-menu-item",
  actions: "esri-layer-list__item-actions",
  actionsList: "esri-layer-list__item-actions-list",
  action: "esri-layer-list__item-action",
  actionIcon: "esri-layer-list__item-action-icon",
  actionImage: "esri-layer-list__item-action-image",
  actionTitle: "esri-layer-list__item-action-title",
  label: "esri-layer-list__item-label",
  errorMessage: "esri-layer-list__item-error-message",
  title: "esri-layer-list__item-title",
  toggleVisible: "esri-layer-list__item-toggle",
  toggleVisibleIcon: "esri-layer-list__item-toggle-icon",
  childToggle: "esri-layer-list__child-toggle",
  childToggleOpen: "esri-layer-list__child-toggle--open",
  childOpened: "esri-layer-list__child-toggle-icon--opened",
  childClosed: "esri-layer-list__child-toggle-icon--closed",
  childClosed_RTL: "esri-layer-list__child-toggle-icon--closed-rtl",

  // common
  disabled: "esri-disabled",
  hidden: "esri-hidden",

  // icon classes
  iconClose: "esri-icon-close",
  iconEllipses: "esri-icon-handle-horizontal",
  iconVisible: "esri-icon-visible",
  iconInvisible: "esri-icon-non-visible",
  iconRadioSelected: "esri-icon-radio-checked",
  iconRadioUnselected: "esri-icon-radio-unchecked",
  iconNoticeTriangle: "esri-icon-notice-triangle",
  iconChildrenOpen: "esri-icon-down-arrow",
  iconDownArrow: "esri-icon-down-arrow",
  iconRightArrow: "esri-icon-right-triangle-arrow",
  iconLeftArrow: "esri-icon-left-triangle-arrow"
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

const DEFAULT_ACTION_IMAGE = require.toUrl("./LayerList/images/default-action.svg");

/**
 * Fires after the user clicks on an {@link module:esri/support/Action action} inside the LayerList widget.
 * This event may be used to define a custom function to execute when particular
 * actions are clicked.
 *
 * @event module:esri/widgets/LayerList#trigger-action
 * @property {module:esri/support/Action} action - The action clicked by the user.
 * @property {module:esri/widgets/LayerList/ListItem} item - An item associated with the action.
 */

@subclass("esri.widgets.LayerList")
class LayerList extends declared(Widget) {
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
  constructor() {
    super();
  }

  postInitialize() {
    const operationalItems = this.operationalItems;

    this.own(
      watchUtils.on(this, "operationalItems", "change", () => this._itemsChanged(operationalItems))
    );
  }

  destroy() {
    this._handleRegistry.destroy();
    this._handleRegistry = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handleRegistry: HandleRegistry = new HandleRegistry();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  createActionsFunction
  //----------------------------------

  /**
   * **Use [listItemCreatedFunction](#listItemCreatedFunction) instead.**
   *
   * Specify the function that will create actions for {@link module:esri/widgets/LayerList/ListItem ListItems}.
   * Actions are defined with the properties listed in the {@link module:esri/support/Action Action class}. This function must return a two-dimensional array of
   * {@link module:esri/support/Action Actions}.
   *
   * @deprecated Since version 4.4.
   *
   * @name createActionsFunction
   * @instance
   * @type {function}
   * @see [Sample - LayerList widget with actions](../sample-code/widgets-layerlist-actions/index.html)
   */
  @aliasOf("viewModel.createActionsFunction")
  @renderable()
  createActionsFunction: ListItemModifier = null;

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
   *
   * @example
   * // disable status indicators for all layers listed in LayerList
   * layerList.statusIndicatorsVisible = false;
   */
  @property()
  @renderable()
  statusIndicatorsVisible = true;

  //----------------------------------
  //  errorsVisible
  //----------------------------------

  /**
   * @todo document errorsVisible property
   * @type {boolean}
   * @default false
   * @ignore
   */
  @property()
  @renderable()
  errorsVisible: false;

  //----------------------------------
  //  listItemCreatedFunction
  //----------------------------------

  /**
   * Specifies a function that accesses each {@link module:esri/widgets/LayerList/ListItem}.
   * Each list item can be modified
   * according to its modifiable propeties. Actions can be added to list items
   * using the {@link module:esri/widgets/LayerList/ListItem#actionsSections actionsSections}
   * property of the ListItem.
   *
   * @since 4.4
   *
   * @name listItemCreatedFunction
   * @instance
   * @type {function}
   * @see [Sample - LayerList widget with actions](../sample-code/widgets-layerlist-actions/index.html)
   *
   * @example
   * var layerList = new LayerList({
   *   view: view,
   *   // executes for each ListItem in the LayerList
   *   listItemCreatedFunction: function (event) {
   *
   *    // The event object contains properties of the
   *    // layer in the LayerList widget.
   *
   *    var item = event.item;
   *
   *    if (item.title === "US Demographics") {
   *      // open the list item in the LayerList
   *      item.open = true;
   *      // change the title to something more descriptive
   *      item.title = "Population by county";
   *      // set an action for zooming to the full extent of the layer
   *      item.actionsSections = [[{
   *        title: "Go to full extent",
   *        className: "esri-icon-zoom-out-fixed",
   *        id: "full-extent"
   *      }]];
   *    }
   * });
   */
  @aliasOf("viewModel.listItemCreatedFunction")
  @renderable()
  listItemCreatedFunction: Function = null;

  //----------------------------------
  //  operationalItems
  //----------------------------------

  /**
   * A collection of {@link module:esri/widgets/LayerList/ListItem}s representing operational layers.
   * @name operationalItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/LayerList/ListItem>}
   *
   */
  @aliasOf("viewModel.operationalItems")
  @renderable()
  operationalItems: Collection<ListItem> = null;

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
  view: View = null;

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

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Triggers the [trigger-action](#event:trigger-action) event and executes
   * the given {@link module:esri/support/Action action}.
   *
   * @param {module:esri/support/Action} - The action to execute.
   * @param {module:esri/widgets/LayerList/ListItem} - An item associated with the action.
   */
  @aliasOf("viewModel.triggerAction")
  triggerAction(action: Action, item: ListItem): void { }

  render() {
    const items = this._getItems();
    const state = this.get("viewModel.state");

    const content = items.length === 0 ?
      (<div class={CSS.noItems}>{i18n.noItemsToDisplay}</div>) :
      (<ul class={join(CSS.list, CSS.listRoot, CSS.listIndependent)}>{items.map((item, key) => this._renderItem(item, null))}</ul>);

    const baseClasses = {
      [CSS.hidden]: state === "loading",
      [CSS.disabled]: state === "disabled"
    };

    return (
      <div class={CSS.base}
        classes={baseClasses}>{content}</div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getItems() {
    return this.operationalItems.toArray().filter(item => this.errorsVisible || !item.error);
  }

  private _renderItem(item: ListItem, parent: ListItem): any {
    const widgetId = this.id;
    const uid = `${widgetId}_${item.uid}`;
    const actionsUid = `${uid}_actions`;
    const listUid = `${uid}__list`;
    const titleKey = `${uid}__title`;

    const childrenLen = item.children.length;
    const hasChildren = !!childrenLen;
    const hasError = !!item.error;

    const errorMessage = hasError ? i18n.layerError : "";

    const visibilityMode = item.visibilityMode;

    const childItems = item.children && item.children.toArray();

    const { exclusive, inherited } = VISIBILITY_MODES;

    const childClasses = {
      [CSS.listExclusive]: visibilityMode === exclusive,
      [CSS.listInherited]: visibilityMode === inherited,
      [CSS.listIndependent]: visibilityMode !== inherited && visibilityMode !== exclusive
    };

    const itemClasses = {
      [CSS.itemChildren]: hasChildren,
      [CSS.itemError]: !!errorMessage,
      [CSS.itemUpdating]: item.updating && !parent && this.statusIndicatorsVisible,
      [CSS.itemInvisibleAtScale]: !item.visibleAtCurrentScale
    };

    const actionsCount = this._countActions(item.actionsSections);

    const firstActionButton = actionsCount ? this._renderActionMenuItem(item, item.actionsSections) : null;

    const actionsMenuIconClasses = {
      [CSS.iconEllipses]: !item.actionsOpen,
      [CSS.iconClose]: item.actionsOpen
    };

    const actionsMenuTitle = item.actionsOpen ? i18nCommon.close : i18nCommon.open;

    const actionsMenuIcon = actionsCount > 1 ? (
      <div key={`${uid}__actions-menu-toggle`}
        data-item={item}
        onclick={this._toggleActionsOpen}
        onkeydown={this._toggleActionsOpen}
        class={CSS.actionsMenuItem}
        tabindex="0"
        role="button"
        aria-controls={actionsUid}
        aria-label={actionsMenuTitle}
        title={actionsMenuTitle}>
        <span aria-hidden="true" classes={actionsMenuIconClasses} />
      </div>
    ) : null;

    const actionsMenu = actionsCount ? (
      <div key={`${uid}__actions-menu`}
        class={CSS.actionsMenu}>
        {firstActionButton}
        {actionsMenuIcon}
      </div>
    ) : null;

    const actions = actionsCount > 1 ? this._renderActionsSections(item, item.actionsSections, actionsUid) : null;

    const children: any = hasChildren ? (
      <ul key={listUid}
        id={listUid}
        class={CSS.list}
        classes={childClasses}
        aria-expanded={item.open ? "true" : "false"}
        role={visibilityMode === exclusive ? "radiogroup" : "group"}
        hidden={item.open ? null : true}>
        {
          childItems.map((childItem, childKey) => this._renderItem(childItem, item))
        }
      </ul>
    ) : null;

    const childToggleClasses = {
      [CSS.childToggleOpen]: item.open
    };

    const toggleChildrenTitle = item.open ? i18nCommon.collapse : i18nCommon.expand;

    const toggleChildren = hasChildren ? (
      <span
        onclick={this._toggleChildrenClick}
        onkeydown={this._toggleChildrenClick}
        data-item={item}
        key={`${uid}__toggle-children`}
        class={CSS.childToggle}
        classes={childToggleClasses}
        tabindex="0"
        role="button"
        aria-controls={listUid}
        aria-label={toggleChildrenTitle}
        title={toggleChildrenTitle}>
        <span aria-hidden="true" class={join(CSS.childClosed, CSS.iconRightArrow)} />
        <span aria-hidden="true" class={join(CSS.childOpened, CSS.iconDownArrow)} />
        <span aria-hidden="true" class={join(CSS.childClosed_RTL, CSS.iconLeftArrow)} />
      </span>
    ) : null;

    const itemLabel = this._createLabelNode(item, parent, uid, titleKey);

    const errorBlock = hasError ? (
      <div key={`${uid}__error`}
        class={CSS.errorMessage}
        role="alert">
        <span aria-hidden="true"
          class={CSS.iconNoticeTriangle} />
        <span>{errorMessage}</span>
      </div>
    ) : null;

    return (
      <li key={`${uid}__list-item`}
        class={CSS.item}
        classes={itemClasses}
        aria-labelledby={titleKey}>
        <div key={`${uid}__list-item-container`}
          class={CSS.itemContainer}>
          {toggleChildren}
          {itemLabel}
          {actionsMenu}
        </div>
        {errorBlock}
        {actions}
        {children}
      </li>
    );
  }

  private _createLabelNode(item: ListItem, parent: ListItem, uid: string, titleKey: string): any {
    const labelKey = `${uid}__label`;
    const { exclusive, inherited } = VISIBILITY_MODES;
    const parentVisibilityMode = parent && parent.visibilityMode;

    const toggleIconClasses = {
      [CSS.iconRadioSelected]: parentVisibilityMode === exclusive && item.visible,
      [CSS.iconRadioUnselected]: parentVisibilityMode === exclusive && !item.visible,
      [CSS.iconVisible]: parentVisibilityMode !== exclusive && item.visible,
      [CSS.iconInvisible]: parentVisibilityMode !== exclusive && !item.visible
    };

    const toggleRole = parentVisibilityMode === exclusive ? "radio" : "checkbox";
    const title = item.title || i18n.untitledLayer;
    const label = !item.visibleAtCurrentScale ? `${title} (${i18n.layerInvisibleAtScale})` : title;
    const titleNode = (
      <span id={titleKey}
        title={label}
        aria-label={label}
        class={CSS.title}>{title}</span>
    );

    return parentVisibilityMode === inherited ?
      (
        <div key={labelKey}
          class={CSS.label}>
          {titleNode}
        </div>
      ) :
      (
        <div key={labelKey}
          onclick={this._labelClick}
          onkeydown={this._labelClick}
          data-item={item}
          data-parent-visibility={parentVisibilityMode}
          tabindex="0"
          aria-checked={item.visible ? "true" : "false"}
          role={toggleRole}
          aria-labelledby={titleKey}
          class={CSS.label}>
          <span class={CSS.toggleVisible}>
            <span class={CSS.toggleVisibleIcon}
              aria-hidden="true"
              classes={toggleIconClasses} />
          </span>
          {titleNode}
        </div>
      );
  }

  private _renderActionMenuItem(item: ListItem, actionsSections: Collection<Collection<Action>>): any {
    const actionSection = actionsSections.getItemAt(0);
    const action = actionSection && actionSection.getItemAt(0);

    if (action) {

      const actionStyles = this._getActionImageStyles(action);

      const iconClasses = {
        [action.className]: !!action.className,
        [CSS.actionImage]: !!actionStyles["background-image"]
      };

      const actionTitle = action.title;

      return (
        <div key={`${action.uid}__action-menu-item`}
          bind={this}
          data-item={item}
          data-action={action}
          onclick={this._triggerAction}
          onkeydown={this._triggerAction}
          class={CSS.actionsMenuItem}
          role="button"
          tabindex="0"
          title={actionTitle}
          aria-label={actionTitle}>
          <span classes={iconClasses}
            styles={actionStyles} />
        </div>
      );
    }
  }

  private _watchActionSectionChanges(actionSection: Collection<Action>, itemId: string): void {
    const registryKey = REGISTRY_KEYS.actionSection + itemId;

    this._handleRegistry.add(actionSection.on("change", this.scheduleRender.bind(this)), registryKey);

    actionSection.forEach(action => this._renderOnActionChanges(action, itemId));
  }

  private _renderOnActionChanges(action: Action, itemId: string): void {
    const registryKey = REGISTRY_KEYS.actions + itemId;

    this._handleRegistry.add([
      watchUtils.init(action, "className, image, id, title, visible", () => this.scheduleRender())
    ], registryKey);
  }

  private _renderOnItemChanges(item: ListItem): void {
    const itemId = item.uid;

    const registryKey = REGISTRY_KEYS.items + itemId;

    this._handleRegistry.add([
      watchUtils.init(item, "actionsOpen, visible, open, updating, title, visibleAtCurrentScale, error, visibilityMode", () => this.scheduleRender()),
      item.actionsSections.on("change", () => this.scheduleRender()),
      item.children.on("change", () => this.scheduleRender())
    ], registryKey);

    item.children.forEach(child => this._renderOnItemChanges(child));
    item.actionsSections.forEach(actionSection => this._watchActionSectionChanges(actionSection, itemId));
  }

  private _itemsChanged(items: Collection<ListItem>): void {
    this._handleRegistry.removeAll();

    items.forEach(item => this._renderOnItemChanges(item));

    this.scheduleRender();
  }

  private _renderActionsSections(item: ListItem, actionsSections: Collection<Collection<Action>>, actionsUid: string): any {
    const widgetId = this.id;
    const uid = `${widgetId}_${item.uid}`;
    const actionSectionsArray = actionsSections.toArray();

    const actionSection = actionSectionsArray.map(actionSection => {
      return (
        <ul key={`${uid}__actions-list`}
          class={CSS.actionsList}>
          {this._renderActionSection(item, actionSection)}
        </ul>
      );
    });

    return (
      <div role="group"
        aria-expanded={item.actionsOpen ? "true" : "false"}
        key={`${uid}__actions-section`}
        id={actionsUid}
        class={CSS.actions}
        hidden={item.actionsOpen ? null : true}>
        {actionSection}
      </div>
    );
  }

  private _renderActionSection(item: ListItem, actionSection: Collection<Action>): any {
    const actionSectionArray = actionSection && actionSection.toArray();
    return actionSectionArray.map(action => this._renderAction(item, action));
  }

  private _renderAction(item: ListItem, action: Action): any {
    const actionStyles = this._getActionImageStyles(action);

    const iconClasses = {
      [action.className]: !!action.className,
      [CSS.actionImage]: !!actionStyles["background-image"]
    };

    return (
      <li key={`${action.uid}__action`}
        bind={this}
        data-item={item}
        data-action={action}
        onclick={this._triggerAction}
        onkeydown={this._triggerAction}
        class={CSS.action}
        tabindex="0"
        role="button"
        title={action.title}
        aria-label={action.title}>
        <span aria-hidden="true" class={CSS.actionIcon} classes={iconClasses} styles={actionStyles} />
        <span class={CSS.actionTitle}>{action.title}</span>
      </li>
    );
  }

  private _countActions(actionSections: Collection<Collection<Action>>): number {
    return actionSections.reduce((count, section) => count + section.length, 0);
  }

  private _getActionImageStyles(action: Action): HashMap<string> {
    let image = action.image || null;
    if (!action.className && !image) {
      image = DEFAULT_ACTION_IMAGE;
    }

    return {
      "background-image": image ? `url("${image}")` : null
    };
  }

  @accessibleHandler()
  private _toggleActionsOpen(event: Event): void {
    const node = event.currentTarget as Element;
    const item = node["data-item"];
    item.actionsOpen = !item.actionsOpen;
  }

  @accessibleHandler()
  private _triggerAction(event: Event): void {
    const node = event.currentTarget as Element;
    const action = node["data-action"] as Action;
    const item = node["data-item"] as ListItem;
    this.triggerAction(action, item);
  }

  @accessibleHandler()
  private _labelClick(event: Event): void {
    const node = event.currentTarget as Element;
    const parentVisibilityMode = node.getAttribute("data-parent-visibility");
    const item = node["data-item"];
    if (!(parentVisibilityMode === VISIBILITY_MODES.exclusive && item.visible)) {
      item.visible = !item.visible;
    }
  }

  @accessibleHandler()
  private _toggleChildrenClick(event: Event): void {
    const node = event.currentTarget as Element;
    const item = node["data-item"];
    item.open = !item.open;
  }

}

export = LayerList;
