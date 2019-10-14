/**
 * The BasemapLayerList widget provides a way to display a list of {@link module:esri/Basemap} layers and switch on/off their visibility.
 * {@link module:esri/Basemap#baseLayers Base layers} and {@link module:esri/Basemap#referenceLayers reference layers}
 * are divided into separate sections. When editing is enabled,
 * layers can be reordered by dragging and dropping between the lists and the title can be edited.
 *
 * BasemapLayerList is very similar to our LayerList widget. See below samples for code inspiration:\
 * [Sample - LayerList widget](../sample-code/widgets-layerlist/index.html)\
 * [Sample - LayerList widget with actions](../sample-code/widgets-layerlist-actions/index.html)
 *
 * @module esri/widgets/BasemapLayerList
 * @since 4.13
 *
 * @see [BasemapLayerList.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/BasemapLayerList.tsx)
 * @see [BasemapLayerList.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_BasemapLayerList.scss)
 * @see module:esri/widgets/BasemapLayerList/BasemapLayerListViewModel
 *
 *
 * @example
 * var basemapLayerList = new BasemapLayerList({
 *   view: view;
 * });
 * // Adds the widget below other elements in the top left corner of the view
 * view.ui.add(basemapLayerList, {
 *   position: "top-left"
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />

// dojo
import * as i18nCommon from "dojo/i18n!esri/nls/common";
import * as i18n from "dojo/i18n!esri/widgets/BasemapLayerList/nls/BasemapLayerList";

// esri.core
import Collection = require("esri/core/Collection");
import { eventKey } from "esri/core/events";
import { HandleOwnerMixin } from "esri/core/HandleOwner";
import watchUtils = require("esri/core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import Layer = require("esri/layers/Layer");

// esri.libs.sortablejs
import Sortable = require("esri/libs/sortablejs/Sortable");

// esri.support.actions
import ActionButton = require("esri/support/actions/ActionButton");
import ActionToggle = require("esri/support/actions/ActionToggle");

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.BasemapLayerList
import BasemapLayerListViewModel = require("esri/widgets/BasemapLayerList/BasemapLayerListViewModel");
import {
  Action,
  BasemapItemType,
  BasemapLayerListParams,
  Actions,
  ListItemModifier,
  Sections
} from "esri/widgets/BasemapLayerList/interfaces";

// esri.widgets.LayerList
import ListItem = require("esri/widgets/LayerList/ListItem");
import ListItemPanel = require("esri/widgets/LayerList/ListItemPanel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx, vmEvent } from "esri/widgets/support/widget";

const ListItemCollection = Collection.ofType<ListItem>(ListItem);

function moveItem(data: any[], from: number, to: number): void {
  data.splice(to, 0, data.splice(from, 1)[0]);
}

const SORT_GROUP_NAME = "root-layers";
const SORT_DATA_ATTR = "data-layer-uid";
const SORT_DATASET_ID = "layerUid";

const CSS = {
  // layerlist classes
  base: "esri-basemap-layer-list esri-widget esri-widget--panel",
  titleContainer: "esri-basemap-layer-list__title-container",
  mainHeading: "esri-basemap-layer-list__main-heading",
  editingCard: "esri-basemap-layer-list__editing-card",
  editingInput: "esri-basemap-layer-list__editing-input",
  editingActions: "esri-basemap-layer-list__editing-actions",
  editButton: "esri-basemap-layer-list__edit-button",
  editButtonIcon: "esri-basemap-layer-list__edit-button-icon",
  submitButton: "esri-basemap-layer-list__submit-button",
  cancelButton: "esri-basemap-layer-list__cancel-button",
  noItems: "esri-basemap-layer-list__no-items",
  horizontalRule: "esri-basemap-layer-list__hr",
  listHeading: "esri-basemap-layer-list__list-heading",
  list: "esri-basemap-layer-list__list",
  listRoot: "esri-basemap-layer-list__list--root",
  listExclusive: "esri-basemap-layer-list__list--exclusive",
  listInherited: "esri-basemap-layer-list__list--inherited",
  listIndependent: "esri-basemap-layer-list__list--independent",
  item: "esri-basemap-layer-list__item",
  itemOnlyChild: "esri-basemap-layer-list__item--only-child",
  itemContent: "esri-basemap-layer-list__item-content",
  itemError: "esri-basemap-layer-list__item--error",
  itemInvisibleAtScale: "esri-basemap-layer-list__item--invisible-at-scale",
  itemUpdating: "esri-basemap-layer-list__item--updating",
  itemChildren: "esri-basemap-layer-list__item--has-children",
  itemSelectable: "esri-basemap-layer-list__item--selectable",
  itemContainer: "esri-basemap-layer-list__item-container",
  actionsMenu: "esri-basemap-layer-list__item-actions-menu",
  actionsMenuItem: "esri-basemap-layer-list__item-actions-menu-item",
  actionsMenuItemActive: "esri-basemap-layer-list__item-actions-menu-item--active",
  actions: "esri-basemap-layer-list__item-actions",
  actionsList: "esri-basemap-layer-list__item-actions-list",
  action: "esri-basemap-layer-list__item-action",
  actionIcon: "esri-basemap-layer-list__item-action-icon",
  actionImage: "esri-basemap-layer-list__item-action-image",
  actionTitle: "esri-basemap-layer-list__item-action-title",
  actionToggle: "esri-basemap-layer-list__action-toggle",
  actionToggleOn: "esri-basemap-layer-list__action-toggle--on",
  label: "esri-basemap-layer-list__item-label",
  errorMessage: "esri-basemap-layer-list__item-error-message",
  title: "esri-basemap-layer-list__item-title",
  toggleVisible: "esri-basemap-layer-list__item-toggle",
  toggleVisibleIcon: "esri-basemap-layer-list__item-toggle-icon",
  childToggle: "esri-basemap-layer-list__child-toggle",
  childToggleOpen: "esri-basemap-layer-list__child-toggle--open",
  childOpened: "esri-basemap-layer-list__child-toggle-icon--opened",
  childClosed: "esri-basemap-layer-list__child-toggle-icon--closed",
  childClosed_RTL: "esri-basemap-layer-list__child-toggle-icon--closed-rtl",

  // common
  button: "esri-button",
  buttonTertiary: "esri-button--tertiary",
  input: "esri-input",
  disabled: "esri-disabled",
  disabledElement: "esri-disabled-element",
  hidden: "esri-hidden",
  rotating: "esri-rotating",
  heading: "esri-widget__heading",

  // icon classes
  iconEdit: "esri-icon-edit",
  iconCheckMark: "esri-icon-check-mark",
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
  iconLeftArrow: "esri-icon-left-triangle-arrow",
  iconLoading: "esri-icon-loading-indicator",
  iconDefaultAction: "esri-icon-default-action",
  widgetIcon: "esri-icon-layers"
};

const REGISTRY_KEYS = {
  actions: "actions",
  actionSection: "action-section",
  baseItems: "base-items",
  referenceItems: "reference-items"
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
 * Fires after the user clicks on an {@link module:esri/support/actions/ActionButton action} or {@link module:esri/support/actions/ActionToggle action toggle} inside the BasemapLayerList widget.
 * This event may be used to define a custom function to execute when particular
 * actions are clicked.
 *
 * @event module:esri/widgets/BasemapLayerList#trigger-action
 * @property {module:esri/support/actions/ActionButton | module:esri/support/actions/ActionToggle} action - The action clicked by the user.
 * @property {module:esri/widgets/LayerList/ListItem} item - An item associated with the action.
 */

@subclass("esri.widgets.BasemapLayerList")
class BasemapLayerList extends declared(HandleOwnerMixin(Widget)) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/BasemapLayerList
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var BasemapLayerList = new BasemapLayerList({
   *   view: view;
   * });
   */
  constructor(params?: BasemapLayerListParams) {
    super();
  }

  postInitialize(): void {
    const { baseItems, referenceItems } = this;

    this.own([
      watchUtils.on(this, "baseItems", "change", () => {
        this._itemsChanged(baseItems, REGISTRY_KEYS.baseItems);
        this._toggleSortingBaseLayers();
      }),
      watchUtils.on(this, "referenceItems", "change", () =>
        this._itemsChanged(referenceItems, REGISTRY_KEYS.referenceItems)
      ),
      watchUtils.init(this, "editingEnabled", () => this._toggleSorting())
    ]);
  }

  destroy(): void {
    this._destroyBaseSortable();
    this._destroyReferenceSortable();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _editingTitle = false;

  private _editTitleInput: HTMLInputElement = null;

  private _editTitleButton: HTMLButtonElement = null;

  private _focusOnElement: "edit-input" | "edit-button" = null;

  private _sortableBaseLayers: Sortable = null;

  private _sortableReferenceLayers: Sortable = null;

  private _sortableBaseLayersNode: HTMLUListElement = null;

  private _sortableReferenceLayersNode: HTMLUListElement = null;

  private _focusSortUid: string = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  basemapTitle
  //----------------------------------

  /**
   * The current basemap's title.
   *
   * @name basemapTitle
   * @instance
   * @type {string}
   */
  @aliasOf("viewModel.basemapTitle")
  basemapTitle: string = null;

  //----------------------------------
  //  baseListItemCreatedFunction
  //----------------------------------

  /**
   * Specifies a function that accesses each {@link module:esri/widgets/LayerList/ListItem} representing a base layer.
   * Each list item's modifiable properties can be updated within. Actions can be added to list items
   * using the {@link module:esri/widgets/LayerList/ListItem#actionsSections actionsSections}
   * property of the ListItem.
   *
   * @name baseListItemCreatedFunction
   * @instance
   * @type {function}
   *
   * @example
   *
   * var bmLayerList = new BasemapLayerList({
   *   view: view,
   *   editingEnabled: true,
   *   baseListItemCreatedFunction: function(event){
   *     baseListItem = event.item;
   *     if(baseListItem.title === "World Imagery_01"){
   *       // clean up title
   *       baseListItem.title = "World Imagery";
   *       // open the baseList item
   *       baseListItem.open = true;
   *     }
   *   }
   * })
   */
  @aliasOf("viewModel.baseListItemCreatedFunction")
  @renderable()
  baseListItemCreatedFunction: ListItemModifier = null;

  //----------------------------------
  //  editingEnabled
  //----------------------------------

  /**
   * Indicates whether the basemap’s title, layer order and layer grouping can be edited by the user.
   * Any edits made will only be shown locally and will not
   * be saved.
   *
   * @name editingEnabled
   * @instance
   * @type {boolean}
   * @default false
   *
   * @example
   * // to enable editing
   * basemapLayerList.editingEnabled = true;
   */
  @property()
  @renderable()
  editingEnabled = false;

  //----------------------------------
  //  errorsVisible
  //----------------------------------

  /**
   * @name errorsVisible
   * @type {boolean}
   * @ignore
   */
  @property()
  @renderable()
  errorsVisible: false;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @name iconClass
   * @istance
   * @type {string}
   */
  @property()
  iconClass = CSS.widgetIcon;

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
  @property()
  label: string = i18n.widgetLabel;

  //----------------------------------
  //  referenceListItemCreatedFunction
  //----------------------------------

  /**
   * Specifies a function that accesses each {@link module:esri/widgets/LayerList/ListItem} representing a reference layer.
   * Each list item's modifiable properties can be updated within. Actions can be added to list items
   * using the {@link module:esri/widgets/LayerList/ListItem#actionsSections actionsSections}
   * property of the ListItem.
   *
   * @name referenceListItemCreatedFunction
   * @instance
   * @type {function}
   */
  @aliasOf("viewModel.referenceListItemCreatedFunction")
  @renderable()
  referenceListItemCreatedFunction: ListItemModifier = null;

  //----------------------------------
  //  baseItems
  //----------------------------------

  /**
   * A collection of {@link module:esri/widgets/LayerList/ListItem}s representing the {@link module:esri/Basemap#baseLayers baseLayers}.
   *
   * @name baseItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/LayerList/ListItem>}
   */
  @aliasOf("viewModel.baseItems")
  @renderable()
  baseItems: Collection<ListItem> = null;

  //----------------------------------
  //  referenceItems
  //----------------------------------

  /**
   * A collection of {@link module:esri/widgets/LayerList/ListItem}s representing the {@link module:esri/Basemap#referenceLayers referenceLayers}.
   *
   * @name referenceItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/LayerList/ListItem>}
   */
  @aliasOf("viewModel.referenceItems")
  @renderable()
  referenceItems: Collection<ListItem> = null;

  //----------------------------------
  //  selectedItems
  //----------------------------------

  /**
   * A collection of selected {@link module:esri/widgets/LayerList/ListItem}s representing basemap layers
   * selected by the user.
   *
   * @name selectedItems
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/LayerList/ListItem>}
   * @readonly
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
   * @type {boolean}
   * @default true
   *
   * @example
   * // enable status indicators for all layers listed in BasemapLayerList
   * basemapLayerList.statusIndicatorVisible = true;
   */
  @property()
  @renderable()
  statusIndicatorsVisible = true;

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
   * {@link module:esri/widgets/BasemapLayerList/BasemapLayerListViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/BasemapLayerList/BasemapLayerListViewModel}
   * @default
   */
  @vmEvent("trigger-action")
  @property({
    type: BasemapLayerListViewModel
  })
  @renderable("viewModel.state")
  viewModel: BasemapLayerListViewModel = new BasemapLayerListViewModel();

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
  triggerAction(action: Action, item: ListItem): void {}

  render(): VNode {
    const { state } = this.viewModel;

    const baseClasses = {
      [CSS.hidden]: state === "loading",
      [CSS.disabled]: state === "disabled"
    };

    return (
      <div class={this.classes(CSS.base, baseClasses)}>
        {this._renderTitleContainer()}
        {this._renderReferenceSection()}
        {this._renderBaseSection()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _destroyReferenceSortable(): void {
    const { _sortableReferenceLayers } = this;

    _sortableReferenceLayers && _sortableReferenceLayers.destroy();

    this._sortableReferenceLayersNode = null;
  }

  private _destroyBaseSortable(): void {
    const { _sortableBaseLayers } = this;

    _sortableBaseLayers && _sortableBaseLayers.destroy();

    this._sortableBaseLayersNode = null;
  }

  private _toggleEditingTitle(): void {
    const { _editingTitle } = this;

    const isEditing = !_editingTitle;

    this._editingTitle = isEditing;

    if (isEditing) {
      this._focusOnElement = "edit-input";
    } else {
      this._focusOnElement = "edit-button";
    }

    this.scheduleRender();
  }

  private _storeEditTitleInput(node: HTMLInputElement): void {
    this._editTitleInput = node;

    this._focusEditElement();
  }

  private _focusEditElement(): void {
    if (this._editTitleInput && this._focusOnElement === "edit-input") {
      this._focusOnElement = null;
      this._editTitleInput.focus();
    }

    if (this._editTitleButton && this._focusOnElement === "edit-button") {
      this._focusOnElement = null;
      this._editTitleButton.focus();
    }
  }

  private _storeEditTitleButton(node: HTMLInputElement): void {
    this._editTitleButton = node;

    this._focusEditElement();
  }

  private _formSubmit(event: Event): void {
    event.preventDefault();

    const { _editTitleInput } = this;

    if (_editTitleInput) {
      this.basemapTitle = _editTitleInput.value;
    }

    this._toggleEditingTitle();
  }

  private _renderTitleContainer(): VNode {
    const { _editingTitle, editingEnabled } = this;
    const { basemapTitle } = this.viewModel;

    const titleHeaderNode = _editingTitle ? (
      <div class={CSS.editingCard}>
        <form bind={this} onsubmit={this._formSubmit}>
          <label class={CSS.editingInput}>
            {i18n.basemapTitle}
            <input
              bind={this}
              class={CSS.input}
              title={i18n.basemapTitle}
              aria-label={i18n.basemapTitle}
              placeholder={i18n.basemapTitle}
              type="text"
              role="textbox"
              value={basemapTitle}
              afterCreate={this._storeEditTitleInput}
              afterUpdate={this._focusEditElement}
            />
          </label>
          <div class={CSS.editingActions}>
            <button
              title={i18nCommon.cancel}
              aria-label={i18nCommon.cancel}
              type="button"
              bind={this}
              class={this.classes(CSS.button, CSS.buttonTertiary)}
              onclick={this._toggleEditingTitle}
            >
              {i18nCommon.cancel}
            </button>
            <button
              title={i18nCommon.form.submit}
              aria-label={i18nCommon.form.submit}
              type="button"
              bind={this}
              class={CSS.button}
              onclick={this._formSubmit}
            >
              {i18nCommon.form.ok}
            </button>
          </div>
        </form>
      </div>
    ) : (
      <h2 class={this.classes(CSS.heading, CSS.mainHeading)}>{basemapTitle}</h2>
    );

    const editTitleButtonNode =
      editingEnabled && !_editingTitle ? (
        <button
          bind={this}
          class={CSS.editButton}
          title={i18nCommon.edit}
          aria-label={i18nCommon.edit}
          onclick={this._toggleEditingTitle}
          afterCreate={this._storeEditTitleButton}
          afterUpdate={this._focusEditElement}
          data-node-ref="_editButtonNode"
        >
          <span aria-hidden="true" class={this.classes(CSS.iconEdit, CSS.editButtonIcon)} />
        </button>
      ) : null;

    return (
      <div class={CSS.titleContainer}>
        {titleHeaderNode}
        {editTitleButtonNode}
      </div>
    );
  }

  private _renderNoLayersInfo(text: string, key: string): VNode {
    return (
      <div key={key} class={CSS.noItems}>
        {text}
      </div>
    );
  }

  private _renderList(items: ListItem[], key: BasemapItemType): VNode {
    const afterRemoved =
      key === "reference" ? this._destroyReferenceSortable : this._destroyBaseSortable;

    return (
      <ul
        key={key}
        aria-label={i18n.widgetLabel}
        role={this.editingEnabled && items.length ? "listbox" : undefined}
        afterCreate={this._sortNodeCreated}
        afterRemoved={afterRemoved}
        data-node-ref={key}
        bind={this}
        class={this.classes(CSS.list, CSS.listRoot, CSS.listIndependent)}
      >
        {items.map((item) =>
          this._renderItem({ item, parent: null, itemType: key, isOnlyChild: items.length === 1 })
        )}
      </ul>
    );
  }

  private _itemMovedList(event: Sortable.SortableEvent): void {
    const itemElement = event.item;
    const listItem = itemElement["data-item"];
    const to = event.to.dataset.nodeRef as BasemapItemType;
    const from = event.from.dataset.nodeRef as BasemapItemType;
    const { newIndex } = event;

    this.viewModel.transferListItem({
      listItem,
      from,
      to,
      newIndex
    });
  }

  private _toggleSortingBaseLayers(): void {
    const { _sortableBaseLayers, _sortableBaseLayersNode, editingEnabled } = this;

    if (!_sortableBaseLayersNode) {
      return;
    }

    const disabled = !editingEnabled;

    if (_sortableBaseLayers) {
      _sortableBaseLayers.option("disabled", disabled);
    } else {
      const sortableBaseLayers = Sortable.create(_sortableBaseLayersNode, {
        dataIdAttr: SORT_DATA_ATTR,
        group: SORT_GROUP_NAME,
        filter: `.${CSS.itemOnlyChild}`,
        disabled,
        onSort: () =>
          this._sortLayersToItems({ type: "base", itemIds: sortableBaseLayers.toArray() }),
        onAdd: (event) => this._itemMovedList(event)
      });

      this._sortableBaseLayers = sortableBaseLayers;
    }
  }

  private _toggleSortingReferenceLayers(): void {
    const { _sortableReferenceLayers, _sortableReferenceLayersNode, editingEnabled } = this;

    if (!_sortableReferenceLayersNode) {
      return;
    }

    const disabled = !editingEnabled;

    if (_sortableReferenceLayers) {
      _sortableReferenceLayers.option("disabled", disabled);
    } else {
      const sortableReferenceLayers = Sortable.create(_sortableReferenceLayersNode, {
        dataIdAttr: SORT_DATA_ATTR,
        group: SORT_GROUP_NAME,
        disabled,
        onSort: () =>
          this._sortLayersToItems({
            type: "reference",
            itemIds: sortableReferenceLayers.toArray()
          }),
        onAdd: (event) => this._itemMovedList(event)
      });

      this._sortableReferenceLayers = sortableReferenceLayers;
    }
  }

  private _toggleSorting(): void {
    this._toggleSortingBaseLayers();
    this._toggleSortingReferenceLayers();
  }

  private _sortNodeCreated(el: HTMLUListElement): void {
    const ref = el.getAttribute("data-node-ref") as BasemapItemType;

    if (ref === "base") {
      this._sortableBaseLayersNode = el;
    }

    if (ref === "reference") {
      this._sortableReferenceLayersNode = el;
    }

    this._toggleSorting();
  }

  private _renderBaseSection(): VNode {
    const { baseItems } = this;

    const validBaseItems = this._getItems(baseItems);

    const headerNode = (
      <h3 class={this.classes(CSS.heading, CSS.listHeading)}>{i18n.baseHeading}</h3>
    );

    const key = "base";

    const listNode = this._renderList(validBaseItems, key);

    const noLayersInfoNode =
      validBaseItems.length === 0 ? this._renderNoLayersInfo(i18n.noBaseLayers, key) : null;

    const contentNode = [noLayersInfoNode, listNode];

    const hrNode = <hr class={CSS.horizontalRule} />;

    return [hrNode, headerNode, contentNode];
  }

  private _renderReferenceSection(): VNode {
    const { referenceItems } = this;

    const validReferenceItems = this._getItems(referenceItems);

    const headerNode = (
      <h3 class={this.classes(CSS.heading, CSS.listHeading)}>{i18n.referenceHeading}</h3>
    );

    const key = "reference";

    const listNode = this._renderList(validReferenceItems, key);

    const noLayersInfoNode =
      validReferenceItems.length === 0
        ? this._renderNoLayersInfo(i18n.noReferenceLayers, key)
        : null;

    const contentNode = [noLayersInfoNode, listNode];

    return [headerNode, contentNode];
  }

  private _getItems(items: Collection<ListItem>): ListItem[] {
    return items.toArray().filter((item) => this.errorsVisible || !item.error);
  }

  private _getSingleActionButton(item: ListItem): ActionButton {
    return item.actionsSections
      .reduce((item) => item)
      .filter((item) => item && item.type === "button")
      .getItemAt(0) as ActionButton;
  }

  private _renderItem({
    item,
    parent,
    itemType,
    isOnlyChild
  }: {
    item: ListItem;
    parent: ListItem;
    itemType?: BasemapItemType;
    isOnlyChild?: boolean;
  }): VNode {
    const widgetId = this.id;
    const uid = `${widgetId}_${item.uid}`;
    const actionsUid = `${uid}_actions`;
    const listUid = `${uid}__list`;
    const titleKey = `${uid}__title`;

    const childrenLen = item.children.length;
    const hasError = !!item.error;
    const hasChildren = !!childrenLen && !hasError;
    const errorMessage = hasError ? i18n.layerError : "";

    const { visibilityMode } = item;

    const childItems = item.children && item.children.toArray();

    const { exclusive, inherited } = VISIBILITY_MODES;

    const childClasses = {
      [CSS.listExclusive]: visibilityMode === exclusive,
      [CSS.listInherited]: visibilityMode === inherited,
      [CSS.listIndependent]: visibilityMode !== inherited && visibilityMode !== exclusive
    };

    const itemClasses = {
      [CSS.itemChildren]: hasChildren,
      [CSS.itemError]: !!hasError,
      [CSS.itemUpdating]: item.updating && !parent && this.statusIndicatorsVisible,
      [CSS.itemInvisibleAtScale]: !item.visibleAtCurrentScale,
      [CSS.itemSelectable]: this.editingEnabled
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
        <div key={`esri-basemap-layer-list__actions-menu`} class={CSS.actionsMenu}>
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
        key={`esri-basemap-layer-list__list-items`}
        id={listUid}
        class={this.classes(CSS.list, childClasses)}
        aria-expanded={item.open ? "true" : "false"}
        role={visibilityMode === exclusive ? "radiogroup" : "group"}
        hidden={item.open ? null : true}
      >
        {childItems.map((childItem) => this._renderItem({ item: childItem, parent: item }))}
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
        key={`esri-basemap-layer-list__toggle-children`}
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
      <div key={`esri-basemap-layer-list__error`} class={CSS.errorMessage} role="alert">
        <span>{errorMessage}</span>
      </div>
    ) : null;

    const isSelected = this.selectedItems.indexOf(item) > -1;

    const sortDataAttrValue = !parent ? item.get<string>("layer.uid") : null;

    const sortProps = {
      [SORT_DATA_ATTR]: sortDataAttrValue
    };

    const itemContainerNode = (
      <div key={`esri-basemap-layer-list__list-item-container`} class={CSS.itemContainer}>
        {toggleChildren}
        {itemLabel}
        {actionsMenu}
      </div>
    );

    if (this.editingEnabled) {
      return (
        <li
          key={item}
          bind={this}
          onclick={this._toggleSelection}
          onkeydown={this._selectionKeydown}
          data-item={item}
          data-item-type={itemType}
          tabIndex={0}
          aria-labelledby={titleKey}
          afterCreate={this._focusListItem}
          afterUpdate={this._focusListItem}
          class={this.classes(CSS.item, itemClasses, { [CSS.itemOnlyChild]: isOnlyChild })}
          aria-selected={isSelected ? "true" : "false"}
          role="option"
          {...sortProps}
        >
          {itemContainerNode}
          {errorBlock}
          {actions}
          {contentNode}
          {children}
        </li>
      );
    }

    return (
      <li
        key={item}
        class={this.classes(CSS.item, itemClasses, { [CSS.itemOnlyChild]: isOnlyChild })}
      >
        {itemContainerNode}
        {errorBlock}
        {actions}
        {contentNode}
        {children}
      </li>
    );
  }

  private _sortLayersToItems({
    type,
    itemIds
  }: {
    type: BasemapItemType;
    itemIds: string[];
  }): void {
    const layers =
      type === "base"
        ? this.get<Collection<Layer>>("view.map.basemap.baseLayers")
        : type === "reference"
        ? this.get<Collection<Layer>>("view.map.basemap.referenceLayers")
        : null;

    if (!layers) {
      return;
    }

    layers.sort((a: Layer, b: Layer) => {
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

  private _focusListItem(element: HTMLElement): void {
    const { _focusSortUid } = this;

    if (!element || !_focusSortUid) {
      return;
    }

    const uid = element.dataset[SORT_DATASET_ID];

    if (uid === _focusSortUid) {
      element.focus();
      this._focusSortUid = null;
    }
  }

  private _selectionKeydown(event: KeyboardEvent): void {
    const SELECTION_KEYS = ["ArrowDown", "ArrowUp"];

    const key = eventKey(event);

    if (SELECTION_KEYS.indexOf(key) === -1) {
      this._toggleSelection(event);
      return;
    }

    event.stopPropagation();

    const node = event.currentTarget as HTMLElement;
    const item = node["data-item"] as ListItem;
    const itemType = node.dataset.itemType as BasemapItemType;

    const { _sortableBaseLayers, _sortableReferenceLayers, selectedItems } = this;

    const sortable =
      itemType === "base"
        ? _sortableBaseLayers
        : itemType === "reference"
        ? _sortableReferenceLayers
        : null;

    const isSelected = selectedItems.indexOf(item) > -1;
    const items = sortable.toArray();
    const target = event.target as HTMLElement;
    const index = items.indexOf(target.dataset[SORT_DATASET_ID]);
    const { baseItems, referenceItems } = this.viewModel;

    if (index === -1) {
      return;
    }

    if (key === "ArrowDown") {
      const newIndex = index + 1;
      const exceedsItemsLength = newIndex >= items.length;

      if (exceedsItemsLength && itemType === "reference" && isSelected) {
        const transferIndex = baseItems.length;
        this.viewModel.transferListItem({
          listItem: item,
          from: "reference",
          to: "base",
          newIndex: transferIndex
        });
        this._focusSortUid = item.get("layer.uid");
        this.scheduleRender();
        return;
      }

      if (exceedsItemsLength && itemType === "reference") {
        const focusItem = baseItems.getItemAt(0);
        this._focusSortUid = focusItem && focusItem.get("layer.uid");
        this.scheduleRender();
        return;
      }

      if (exceedsItemsLength) {
        return;
      }

      if (isSelected) {
        moveItem(items, index, newIndex);
        sortable.sort(items);
        this._sortLayersToItems({ type: itemType, itemIds: sortable.toArray() });
      }

      this._focusSortUid = items[newIndex];
      this.scheduleRender();
      return;
    }

    if (key === "ArrowUp") {
      const newIndex = index - 1;
      const isLessThanStartIndex = newIndex < 0;

      if (isLessThanStartIndex && itemType === "base" && isSelected) {
        const isLastBaseItem = baseItems.length === 1;

        if (isLastBaseItem) {
          return;
        }

        const transferIndex = 0;
        this.viewModel.transferListItem({
          listItem: item,
          from: "base",
          to: "reference",
          newIndex: transferIndex
        });
        this._focusSortUid = item.get("layer.uid");
        this.scheduleRender();
        return;
      }

      if (isLessThanStartIndex && itemType === "base") {
        const focusItem = referenceItems.getItemAt(referenceItems.length - 1);
        this._focusSortUid = focusItem && focusItem.get("layer.uid");
        this.scheduleRender();
        return;
      }

      if (isLessThanStartIndex) {
        return;
      }

      if (isSelected) {
        moveItem(items, index, newIndex);
        sortable.sort(items);
        this._sortLayersToItems({ type: itemType, itemIds: sortable.toArray() });
      }

      this._focusSortUid = items[newIndex];
      this.scheduleRender();
    }
  }

  private _createLabelNode(item: ListItem, parent: ListItem, titleKey: string): VNode {
    const { editingEnabled } = this;
    const { exclusive, inherited } = VISIBILITY_MODES;
    const parentVisibilityMode = parent && parent.visibilityMode;

    const toggleIconClasses = {
      [CSS.iconRadioSelected]: parentVisibilityMode === exclusive && item.visible,
      [CSS.iconRadioUnselected]: parentVisibilityMode === exclusive && !item.visible,
      [CSS.iconVisible]: parentVisibilityMode !== exclusive && item.visible,
      [CSS.iconInvisible]: parentVisibilityMode !== exclusive && !item.visible
    };

    const toggleRole = parentVisibilityMode === exclusive ? "radio" : "switch";
    const title = item.title || i18n.untitledLayer;
    const label = !item.visibleAtCurrentScale ? `${title} (${i18n.layerInvisibleAtScale})` : title;
    const titleNode = (
      <span id={titleKey} title={label} aria-label={label} class={CSS.title}>
        {title}
      </span>
    );

    const visibilityIconNode = (
      <span class={this.classes(CSS.toggleVisibleIcon, toggleIconClasses)} aria-hidden="true" />
    );

    const iconNode = editingEnabled ? (
      <span
        key="label-icon"
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
        {visibilityIconNode}
      </span>
    ) : (
      <span key="label-icon" class={CSS.toggleVisible}>
        {visibilityIconNode}
      </span>
    );

    const labelNode = editingEnabled ? (
      <div key="label" class={CSS.label}>
        {iconNode}
        {titleNode}
      </div>
    ) : (
      <div
        key="label"
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
        {iconNode}
        {titleNode}
      </div>
    );

    const hasError = !!item.error;

    const errorIconNode = hasError ? (
      <span aria-hidden="true" class={CSS.iconNoticeTriangle} />
    ) : null;

    return parentVisibilityMode === inherited || hasError ? (
      <div key={item} class={CSS.label}>
        {errorIconNode}
        {titleNode}
      </div>
    ) : (
      labelNode
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

  private _watchActionSectionChanges(actionSection: Actions, key: string): void {
    this.handles.add(actionSection.on("change", () => this.scheduleRender()), key);

    actionSection.forEach((action) => this._renderOnActionChanges(action, key));
  }

  private _renderOnActionChanges(action: Action, key: string): void {
    if (action.type === "toggle") {
      this.handles.add(
        [
          watchUtils.init(action, ["className", "image", "id", "title", "visible", "value"], () =>
            this.scheduleRender()
          )
        ],
        key
      );

      return;
    }

    if (action.type === "slider") {
      this.handles.add(
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
        key
      );
      return;
    }

    this.handles.add(
      [
        watchUtils.init(action, ["className", "image", "id", "title", "visible"], () =>
          this.scheduleRender()
        )
      ],
      key
    );
  }

  private _renderOnItemChanges(item: ListItem, key: string): void {
    this.handles.add(
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
      key
    );

    item.children.forEach((child) => this._renderOnItemChanges(child, key));
    item.actionsSections.forEach((actionSection) =>
      this._watchActionSectionChanges(actionSection, key)
    );
  }

  private _itemsChanged(items: Collection<ListItem>, key: string): void {
    this.handles.remove(key);

    items.forEach((item) => this._renderOnItemChanges(item, key));

    this.scheduleRender();
  }

  private _renderActionsSections(
    item: ListItem,
    actionsSections: Sections,
    actionsUid: string
  ): VNode {
    const actionSectionsArray = actionsSections.toArray();

    const actionSection = actionSectionsArray.map((actionSection) => (
      <ul key={actionSection} class={CSS.actionsList}>
        {this._renderActionSection(item, actionSection)}
      </ul>
    ));

    return (
      <div
        role="group"
        aria-expanded={item.actionsOpen ? "true" : "false"}
        key={`esri-basemap-layer-list__actions-section`}
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
          role={item.actionsOpen ? "button" : null}
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
        role={item.actionsOpen ? "button" : null}
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

  @accessibleHandler()
  private _toggleActionsOpen(event: Event): void {
    event.stopPropagation();

    const node = event.currentTarget as Element;
    const item = node["data-item"];
    const { actionsOpen } = item;
    const toggledValue = !actionsOpen;

    const { baseItems, referenceItems } = this;

    if (toggledValue) {
      baseItems.forEach((item) => closeItemActions(item));
      referenceItems.forEach((item) => closeItemActions(item));
    }

    item.actionsOpen = toggledValue;
  }

  @accessibleHandler()
  private _triggerPanel(event: Event): void {
    event.stopPropagation();

    const node = event.currentTarget as Element;
    const panel = node["data-panel"] as ListItemPanel;

    if (panel) {
      panel.open = !panel.open;
    }
  }

  @accessibleHandler()
  private _triggerAction(event: Event): void {
    event.stopPropagation();

    const node = event.currentTarget as Element;
    const action = node["data-action"] as Action;
    const item = node["data-item"] as ListItem;

    if (action.type === "toggle") {
      action.value = !action.value;
    }

    this.triggerAction(action, item);
  }

  @accessibleHandler()
  private _toggleVisibility(event: Event): void {
    event.stopPropagation();

    const node = event.currentTarget as Element;
    const parentVisibilityMode = node.getAttribute("data-parent-visibility");
    const item = node["data-item"];
    if (!(parentVisibilityMode === VISIBILITY_MODES.exclusive && item.visible)) {
      item.visible = !item.visible;
    }
  }

  @accessibleHandler()
  private _toggleChildrenClick(event: Event): void {
    event.stopPropagation();

    const node = event.currentTarget as Element;
    const item = node["data-item"];
    item.open = !item.open;
  }

  @accessibleHandler()
  private _toggleSelection(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation();

    const isControlSelection = event.metaKey || event.ctrlKey;
    const node = event.currentTarget as Element;
    const item = node["data-item"] as ListItem;
    const { selectedItems } = this;
    const found = selectedItems.indexOf(item) > -1;

    const { length } = selectedItems;
    const singleMatch = found && length === 1;

    if (isControlSelection) {
      found ? selectedItems.remove(item) : selectedItems.add(item);
      return;
    }

    if (length && !singleMatch) {
      selectedItems.removeAll();
      selectedItems.add(item);
      return;
    }

    found ? selectedItems.remove(item) : selectedItems.add(item);
  }
}

export = BasemapLayerList;
