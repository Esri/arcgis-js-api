/**
 * The LayerList widget provides a way to display a list of layers, and switching on/off their visibility.
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

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18nCommon from "dojo/i18n!esri/nls/common";
import * as i18n from "dojo/i18n!esri/widgets/LayerList/nls/LayerList";

// esri.core
import Collection = require("esri/core/Collection");
import Handles = require("esri/core/Handles");
import watchUtils = require("esri/core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.support.actions
import ActionButton = require("esri/support/actions/ActionButton");
import ActionToggle = require("esri/support/actions/ActionToggle");

// esri.views
import View = require("esri/views/View");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.LayerList
import { Action, Actions, ListItemModifier, Sections } from "esri/widgets/LayerList/interfaces";
import LayerListViewModel = require("esri/widgets/LayerList/LayerListViewModel");
import ListItem = require("esri/widgets/LayerList/ListItem");
import ListItemPanel = require("esri/widgets/LayerList/ListItemPanel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx, vmEvent } from "esri/widgets/support/widget";

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
  itemContent: "esri-layer-list__item-content",
  itemError: "esri-layer-list__item--error",
  itemInvisibleAtScale: "esri-layer-list__item--invisible-at-scale",
  itemUpdating: "esri-layer-list__item--updating",
  itemChildren: "esri-layer-list__item--has-children",
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
  childToggle: "esri-layer-list__child-toggle",
  childToggleOpen: "esri-layer-list__child-toggle--open",
  childOpened: "esri-layer-list__child-toggle-icon--opened",
  childClosed: "esri-layer-list__child-toggle-icon--closed",
  childClosed_RTL: "esri-layer-list__child-toggle-icon--closed-rtl",

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

/**
 * Fires after the user clicks on an {@link module:esri/support/actions/ActionButton action} or {@link module:esri/support/actions/ActionToggle action toggle} inside the LayerList widget.
 * This event may be used to define a custom function to execute when particular
 * actions are clicked.
 *
 * @event module:esri/widgets/LayerList#trigger-action
 * @property {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} action - The action clicked by the user.
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

  postInitialize(): void {
    const operationalItems = this.operationalItems;

    this.own(
      watchUtils.on(this, "operationalItems", "change", () => this._itemsChanged(operationalItems))
    );
  }

  destroy(): void {
    this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles: Handles = new Handles();

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
   * @readonly
   */
  @property()
  iconClass = CSS.widgetIcon;

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
   * @readonly
   */
  @property()
  label: string = i18n.widgetLabel;

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
  //  operationalItems
  //----------------------------------

  /**
   * A collection of {@link module:esri/widgets/LayerList/ListItem}s representing operational layers.
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
   * the given {@link module:esri/support/actions/ActionButton action} or {@link module:esri/support/actions/ActionToggle action toggle}.
   *
   * @param {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} - The action to execute.
   * @param {module:esri/widgets/LayerList/ListItem} - An item associated with the action.
   */
  @aliasOf("viewModel.triggerAction")
  triggerAction(action: Action, item: ListItem): void {}

  render(): VNode {
    const items = this._getItems();
    const state = this.get("viewModel.state");

    const content =
      items.length === 0 ? (
        <div class={CSS.noItems}>{i18n.noItemsToDisplay}</div>
      ) : (
        <ul class={this.classes(CSS.list, CSS.listRoot, CSS.listIndependent)}>
          {items.map((item, key) => this._renderItem(item, null))}
        </ul>
      );

    const baseClasses = {
      [CSS.hidden]: state === "loading",
      [CSS.disabled]: state === "disabled"
    };

    return <div class={this.classes(CSS.base, baseClasses)}>{content}</div>;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getItems(): ListItem[] {
    return this.operationalItems.toArray().filter((item) => this.errorsVisible || !item.error);
  }

  private _getSingleActionButton(item: ListItem): ActionButton {
    return item.actionsSections
      .reduce((item) => item)
      .filter((item) => item && item.type === "button")
      .getItemAt(0) as ActionButton;
  }

  private _renderItem(item: ListItem, parent: ListItem): VNode {
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

    const { panel } = item;

    const contentNode = panel && panel.open ? panel.render() : null;

    const contentActionNode = panel && panel.visible ? this._renderPanelButton(panel) : null;

    const actionsMenuClasses = {
      [CSS.actionsMenuItemActive]: item.actionsOpen
    };

    const actionsMenuTitle = item.actionsOpen ? i18nCommon.close : i18nCommon.open;

    const singleAction = actionsCount === 1 && this._getSingleActionButton(item);
    const singleActionNode = singleAction
      ? this._renderAction({ item, action: singleAction, singleAction: true })
      : null;

    const actionsMenuIcon =
      !singleAction && actionsCount ? (
        <div
          key={`actions-menu-toggle`}
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
      ) : null;

    const actionsMenu =
      actionsMenuIcon || contentActionNode || singleActionNode ? (
        <div key={`esri-layer-list__actions-menu`} class={CSS.actionsMenu}>
          {contentActionNode}
          {singleActionNode}
          {actionsMenuIcon}
        </div>
      ) : null;

    const actions = actionsCount
      ? this._renderActionsSections(item, item.actionsSections, actionsUid)
      : null;

    const children: VNode = hasChildren ? (
      <ul
        key={`esri-layer-list__list-items`}
        id={listUid}
        class={this.classes(CSS.list, childClasses)}
        aria-expanded={item.open ? "true" : "false"}
        role={visibilityMode === exclusive ? "radiogroup" : "group"}
        hidden={item.open ? null : true}
      >
        {childItems.map((childItem, childKey) => this._renderItem(childItem, item))}
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
        key={`esri-layer-list__toggle-children`}
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

    const itemLabel = this._createLabelNode(item, parent, titleKey);

    const errorBlock = hasError ? (
      <div key={`esri-layer-list__error`} class={CSS.errorMessage} role="alert">
        <span aria-hidden="true" class={CSS.iconNoticeTriangle} />
        <span>{errorMessage}</span>
      </div>
    ) : null;

    return (
      <li key={item} class={this.classes(CSS.item, itemClasses)} aria-labelledby={titleKey}>
        <div key={`esri-layer-list__list-item-container`} class={CSS.itemContainer}>
          {toggleChildren}
          {itemLabel}
          {actionsMenu}
        </div>
        {errorBlock}
        {actions}
        {contentNode}
        {children}
      </li>
    );
  }

  private _createLabelNode(item: ListItem, parent: ListItem, titleKey: string): VNode {
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
      <span id={titleKey} title={label} aria-label={label} class={CSS.title}>
        {title}
      </span>
    );

    return parentVisibilityMode === inherited ? (
      <div key={item} class={CSS.label}>
        {titleNode}
      </div>
    ) : (
      <div
        key={item}
        onclick={this._labelClick}
        onkeydown={this._labelClick}
        data-item={item}
        data-parent-visibility={parentVisibilityMode}
        tabindex="0"
        aria-checked={item.visible ? "true" : "false"}
        role={toggleRole}
        aria-labelledby={titleKey}
        class={CSS.label}
      >
        <span class={CSS.toggleVisible}>
          <span class={this.classes(CSS.toggleVisibleIcon, toggleIconClasses)} aria-hidden="true" />
        </span>
        {titleNode}
      </div>
    );
  }

  private _renderPanelButton(panel: ListItemPanel): VNode {
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
        key={panel}
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
            "panel.className"
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

    this.scheduleRender();
  }

  private _renderActionsSections(
    item: ListItem,
    actionsSections: Sections,
    actionsUid: string
  ): VNode {
    const actionSectionsArray = actionsSections.toArray();

    const actionSection = actionSectionsArray.map((actionSection) => {
      return (
        <ul key={actionSection} class={CSS.actionsList}>
          {this._renderActionSection(item, actionSection)}
        </ul>
      );
    });

    return (
      <div
        role="group"
        aria-expanded={item.actionsOpen ? "true" : "false"}
        key={`esri-layer-list__actions-section`}
        id={actionsUid}
        class={CSS.actions}
        hidden={item.actionsOpen ? null : true}
      >
        {actionSection}
      </div>
    );
  }

  private _renderActionSection(item: ListItem, actionSection: Actions): VNode {
    const actionSectionArray = actionSection && actionSection.toArray();
    return actionSectionArray.map((action) => this._renderAction({ item, action }));
  }

  private _renderAction(options: {
    item: ListItem;
    action: Action;
    singleAction?: boolean;
  }): VNode {
    const { item, action, singleAction } = options;
    const iconStyles = this._getIconImageStyles(action);

    const { active, className, disabled, title } = action;

    const actionClass =
      action.type === "button" && !action.image && !className ? CSS.iconDefaultAction : className;

    const buttonClasses = {
      [CSS.actionsMenuItem]: singleAction && action.type === "button",
      [CSS.action]: !singleAction && action.type !== "toggle",
      [CSS.actionToggle]: action.type === "toggle",
      [CSS.actionToggleOn]: action.type === "toggle" && action.value,
      [CSS.disabledElement]: disabled
    };

    const iconClasses = {
      [CSS.actionImage]: !active && !!iconStyles["background-image"],
      [CSS.iconLoading]: active,
      [CSS.rotating]: active
    };

    if (actionClass) {
      iconClasses[actionClass] = true;
    }

    const iconNode = (
      <span
        aria-hidden="true"
        class={this.classes(CSS.actionIcon, iconClasses)}
        styles={iconStyles}
      />
    );

    const titleNode = !singleAction ? <span class={CSS.actionTitle}>{title}</span> : null;

    const actionContentNodes = [iconNode, titleNode];

    if (singleAction) {
      return (
        <div
          bind={this}
          data-item={item}
          data-action={action}
          role="button"
          key={action}
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
        key={action}
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

  private _countActions(actionSections: Sections): number {
    return actionSections.reduce((count, section) => count + section.length, 0);
  }

  private _getIconImageStyles(source: Action | ListItemPanel): HashMap<string> {
    const image = (source.declaredClass =
      "esri.widgets.LayerList.ListItemPanel" ||
      source.declaredClass === "esri.support.Action.ActionButton" ||
      source.declaredClass === "esri.support.Action.ActionToggle"
        ? (source as ActionButton | ActionToggle | ListItemPanel).image
        : null);

    return {
      "background-image": image ? `url("${image}")` : null
    };
  }

  @accessibleHandler()
  private _toggleActionsOpen(event: Event): void {
    const node = event.currentTarget as Element;
    const item = node["data-item"];
    const { actionsOpen } = item;
    const toggledValue = !actionsOpen;

    if (toggledValue) {
      this.operationalItems.forEach((item) => closeItemActions(item));
    }

    item.actionsOpen = toggledValue;
  }

  @accessibleHandler()
  private _triggerPanel(event: Event): void {
    const node = event.currentTarget as Element;
    const panel = node["data-panel"] as ListItemPanel;

    if (panel) {
      panel.open = !panel.open;
    }
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
