/**
 * The LayerList widget provides a way to display a list of layers, and switching on/off their visibility.
 *
 * @module esri/widgets/LayerList
 * @since 4.2
 *
 * @see [LayerList.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/LayerList.js)
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
  jsxFactory,
  accessibleHandler,
  join
} from "./support/widget";

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
  base: "esri-layer-list esri-widget",
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
  childOpened: "esri-layer-list__child-toggle-icon--opened",
  childClosed: "esri-layer-list__child-toggle-icon--closed",
  childClosed_RTL: "esri-layer-list__child-toggle-icon--closed-rtl",

  // common
  disabled: "esri-disabled",

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
 * Fires after the user clicks on an [action](#actions) inside the LayerList widget. This
 * event may be used to define a custom function to execute when particular
 * actions are clicked.
 *
 * @event module:esri/widgets/LayerList#trigger-action
 * @property {Object} action - The action clicked by the user. For a description
 *                    of this object and a specification of its properties,
 *                    see the [actions](#actions) property of this class.
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
   * Specify the function that will create actions for {@link module:esri/widgets/LayerList/ListItem ListItems}. 
   * Actions are defined with the properties listed in the {@link module:esri/support/Action Action class}. 
   *
   * @type {function}
   * @see [Sample - LayerList widget with actions](../sample-code/widgets-layerlist-actions/index.html)
   */
  @aliasOf("viewModel.createActionsFunction")
  @renderable()
  createActionsFunction: Function = null;

  //----------------------------------
  //  errorsVisible
  //----------------------------------

  /**
   * @todo document errorsVisible property
   * @type {boolean}
   * @default
   * @ignore
   */
  @property()
  @renderable()
  errorsVisible: false;

  //----------------------------------
  //  operationalItems
  //----------------------------------

  /**
   * @todo document operationalItems property
   * @type {module:esri/core/Collection}
   * @default
   * @ignore
   */
  @aliasOf("viewModel.operationalItems")
  @renderable()
  operationalItems: Collection<ListItem>;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {(module:esri/views/SceneView|module:esri/views/MapView)}
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
   * Triggers the [trigger-action](#event:trigger-action) event and executes the [action](#actions)
   * at the specified index in the [actions](#actions) array.
   *
   * @param {number} actionIndex - The index of the [action](#actions) to execute.
   */
  @aliasOf("viewModel.triggerAction")
  triggerAction: (action: Action) => void;

  render() {
    const items = this._getItems();

    const content = items.length === 0 ?
      (<div class={CSS.noItems}>{i18n.noItemsToDisplay}</div>) :
      (<ul class={join(CSS.list, CSS.listRoot, CSS.listIndependent)} role="tree">{items.map((item, key) => this._renderItem(item, null))}</ul>);

    const baseClasses = {
      [CSS.disabled]: this.viewModel.state === "disabled"
    };

    return (
      <div class={CSS.base} classes={baseClasses}>{content}</div>
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

    const hasChildren = !!(item.children.length);
    const hasError = !!item.error;

    const errorMessage = hasError ? i18n.layerError : "";

    const visibilityMode = item.visibilityMode;

    const childItems = item.children && item.children.toArray();

    const {exclusive, inherited} = VISIBILITY_MODES;

    const childClasses = {
      [CSS.listExclusive]: visibilityMode === exclusive,
      [CSS.listInherited]: visibilityMode === inherited,
      [CSS.listIndependent]: visibilityMode !== inherited && visibilityMode !== exclusive
    };

    const itemClasses = {
      [CSS.itemChildren]: hasChildren,
      [CSS.itemError]: !!errorMessage,
      [CSS.itemUpdating]: item.updating && !parent,
      [CSS.itemInvisibleAtScale]: !item.visibleAtCurrentScale
    };

    const actionsCount = this._countActions(item.actionsSections);

    const firstActionButton = actionsCount ? this._renderActionMenuItem(item.actionsSections) : null;

    const actionsMenuIconClasses = {
      [CSS.iconEllipses]: !item.actionsOpen,
      [CSS.iconClose]: item.actionsOpen
    };

    const actionsMenuIcon = actionsCount > 1 ? (
      <div key={`${item.uid}__actions-menu-toggle`} data-item={item} onclick={this._toggleActionsOpen} onkeydown={this._toggleActionsOpen}
        class={CSS.actionsMenuItem} tabindex="0" role="button" aria-controls={actionsUid}
        aria-expanded={item.actionsOpen ? "true" : "false"} title={item.actionsOpen ? i18nCommon.close : i18nCommon.open}>
        <span aria-hidden="true" classes={actionsMenuIconClasses}></span>
      </div>
    ) : null;

    const actionsMenu = actionsCount ? (
      <div key={`${item.uid}__actions-menu`} class={CSS.actionsMenu}>
        {firstActionButton}
        {actionsMenuIcon}
      </div>
    ) : null;

    const actions = actionsCount > 1 ? this._renderActionsSections(item, item.actionsSections, actionsUid) : null;

    const children: any = hasChildren ? (
      <ul key={`${item.uid}__child-list`} class={CSS.list} classes={childClasses} id={uid} role={visibilityMode === exclusive ? "radiogroup" : "group"} hidden={item.open ? null : true}>
        {
          childItems.map((childItem, childKey) => this._renderItem(childItem, item))
        }
      </ul>
    ) : null;

    const toggleChildren = hasChildren ? (
      <span onclick={this._toggleChildrenClick} onkeydown={this._toggleChildrenClick}
        data-item={item} key={`${uid}__toggle-children`} class={CSS.childToggle} tabindex="0"
        role="button" aria-expanded={item.open ? "true" : "false"} aria-controls={uid}
        title={item.open ? i18nCommon.collapse : i18nCommon.expand}>
        <span aria-hidden="true" class={join(CSS.childClosed, CSS.iconRightArrow)}></span>
        <span aria-hidden="true" class={join(CSS.childOpened, CSS.iconDownArrow)}></span>
        <span aria-hidden="true" class={join(CSS.childClosed_RTL, CSS.iconLeftArrow)}></span>
      </span>
    ) : null;

    const itemLabel = this._createLabelNode(item, parent);

    const errorBlock = hasError ? (
      <div key={`${item.uid}__error`} class={CSS.errorMessage} role="alert">
        <span aria-hidden="true" class={CSS.iconNoticeTriangle}></span>
        <span>{errorMessage}</span>
      </div>
    ) : null;

    return (
      <li key={`${item.uid}__list-item`} class={CSS.item} classes={itemClasses} role="treeitem">
        <div key={`${item.uid}__list-item-container`} class={CSS.itemContainer}>
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

  private _createLabelNode(item: ListItem, parent: ListItem): any {
    const {exclusive, inherited} = VISIBILITY_MODES;
    const parentVisibilityMode = parent && parent.visibilityMode;

    const toggleIconClasses = {
      [CSS.iconRadioSelected]: parentVisibilityMode === exclusive && item.visible,
      [CSS.iconRadioUnselected]: parentVisibilityMode === exclusive && !item.visible,
      [CSS.iconVisible]: parentVisibilityMode !== exclusive && item.visible,
      [CSS.iconInvisible]: parentVisibilityMode !== exclusive && !item.visible
    };

    const labelRole = parentVisibilityMode === exclusive ? "radio" : "checkbox";
    const labelAriaChecked = item.visible ? "true" : "false";

    const title = (<span class={CSS.title}>{item.title || i18n.untitledLayer}</span>);

    return parentVisibilityMode === inherited ?
      (
        <span key={`${item.uid}__label`} class={CSS.label} title={!item.visibleAtCurrentScale ? i18n.layerInvisibleAtScale : ""}>
          {title}
        </span>
      ) :
      (
        <span key={`${item.uid}__label`} onclick={this._labelClick} onkeydown={this._labelClick} data-item={item}
          data-parent-visibility={parentVisibilityMode} class={CSS.label} tabindex="0"
          aria-checked={labelAriaChecked} role={labelRole}
          title={!item.visibleAtCurrentScale ? i18n.layerInvisibleAtScale : item.visible ? i18nCommon.visibility.hide : i18nCommon.visibility.show}>
          <span class={CSS.toggleVisible}>
            <span class={CSS.toggleVisibleIcon}>
              <span aria-hidden="true" classes={toggleIconClasses}></span>
            </span>
          </span>
          {title}
        </span>
      );
  }

  private _renderActionMenuItem(actionsSections: Collection<Collection<Action>>): any {
    const actionSection = actionsSections.getItemAt(0);
    const action = actionSection && actionSection.getItemAt(0);

    if (action) {

      const actionStyles = this._getActionImageStyles(action);

      const iconClasses = {
        [action.className]: action.className,
        [CSS.actionImage]: actionStyles["background-image"]
      };

      return (
        <div key={`${action.uid}__action-menu-item`} bind={this} data-action={action} onclick={this._triggerAction}
          onkeydown={this._triggerAction} class={CSS.actionsMenuItem} role="button"
          tabindex="0" title={action.title}>
          <span classes={iconClasses} styles={actionStyles}></span>
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
    const actionSectionsArray = actionsSections.toArray();

    const actionSection = actionSectionsArray.map(actionSection => {
      return (
        <ul key={`${item.uid}__actions-list`} class={CSS.actionsList}>
          {this._renderActionSection(actionSection)}
        </ul>
      );
    });

    return (
      <div key={`${item.uid}__actions-section`} id={actionsUid} class={CSS.actions} hidden={item.actionsOpen ? null : true}>
        {actionSection}
      </div>
    );
  }

  private _renderActionSection(actionSection: Collection<Action>): any {
    const actionSectionArray = actionSection && actionSection.toArray();
    return actionSectionArray.map(action => this._renderAction(action));
  }

  private _renderAction(action: Action): any {
    const actionStyles = this._getActionImageStyles(action);

    const iconClasses = {
      [action.className]: action.className,
      [CSS.actionImage]: actionStyles["background-image"]
    };

    return (
      <li key={`${action.uid}__action`} bind={this} data-action={action} onclick={this._triggerAction}
        onkeydown={this._triggerAction} class={CSS.action} tabindex="0"
        role="button" title={action.title}>
        <span aria-hidden="true" class={CSS.actionIcon} classes={iconClasses} styles={actionStyles}></span>
        <span class={CSS.actionTitle}>{action.title}</span>
      </li>
    );
  }

  private _countActions(actionSections: Collection<Collection<Action>>): number {
    return actionSections.reduce((count, section) => count + section.length, 0);
  }

  private _getActionImageStyles(action: Action): HashMap<string | null> {
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
    const action = node["data-action"];
    this.triggerAction(action);
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
