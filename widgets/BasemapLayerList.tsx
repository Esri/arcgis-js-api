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
 *   view: view
 * });
 * // Adds the widget below other elements in the top left corner of the view
 * view.ui.add(basemapLayerList, {
 *   position: "top-left"
 * });
 */

// esri.core
import Collection from "esri/core/Collection";
import { deprecatedProperty } from "esri/core/deprecate";
import { eventKey } from "esri/core/events";
import { HandleOwnerMixin } from "esri/core/HandleOwner";
import has from "esri/core/has";
import Logger from "esri/core/Logger";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import Layer from "esri/layers/Layer";

// esri.support.actions
import ActionButton from "esri/support/actions/ActionButton";
import ActionToggle from "esri/support/actions/ActionToggle";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import { ISceneView } from "esri/views/ISceneView";
import MapView from "esri/views/MapView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.BasemapLayerList
import BasemapLayerListViewModel from "esri/widgets/BasemapLayerList/BasemapLayerListViewModel";
import { BasemapItemType, BasemapLayerListParams } from "esri/widgets/BasemapLayerList/interfaces";

// esri.widgets.BasemapLayerList.t9n
import BasemapLayerListMessages from "esri/widgets/BasemapLayerList/t9n/BasemapLayerList";

// esri.widgets.LayerList
import { Action, Actions, ListItemModifier, Sections } from "esri/widgets/LayerList/interfaces";
import ListItem from "esri/widgets/LayerList/ListItem";
import ListItemPanel from "esri/widgets/LayerList/ListItemPanel";

// esri.widgets.LayerList.support
import { findSelectedItem } from "esri/widgets/LayerList/support/layerListUtils";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx, vmEvent } from "esri/widgets/support/widget";

// sortablejs
import Sortable from "sortablejs";

const ListItemCollection = Collection.ofType<ListItem>(ListItem);

function moveItem(data: any[], from: number, to: number): void {
  data.splice(to, 0, data.splice(from, 1)[0]);
}

const NEW_UI_FLAG = "esri-basemaplayerlist-new-ui";

const SORT_GROUP_NAME = "root-layers";
const SORT_DATA_ATTR = "data-layer-uid";
const SORT_DATASET_ID = "layerUid";

const CSS = {
  // layerlist classes
  base: "esri-basemap-layer-list esri-widget esri-widget--panel",
  newUI: "esri-basemap-layer-list--new-ui",
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
  itemInvisible: "esri-basemap-layer-list__item--invisible",
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
  toggleIcon: "esri-basemap-layer-list__item-toggle-icon",
  radioIcon: "esri-basemap-layer-list__item-radio-icon",
  childToggle: "esri-basemap-layer-list__child-toggle",
  childToggleOpen: "esri-basemap-layer-list__child-toggle--open",
  childOpened: "esri-basemap-layer-list__child-toggle-icon--opened",
  childClosed: "esri-basemap-layer-list__child-toggle-icon--closed",
  childClosed_RTL: "esri-basemap-layer-list__child-toggle-icon--closed-rtl",
  sortableChosen: "esri-basemap-layer-list--chosen",

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
const logger = Logger.getLogger("esri.widgets.BasemapLayerList");

interface VisibleElements {
  baseLayers?: boolean;
  referenceLayers?: boolean;
  statusIndicators?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  baseLayers: true,
  referenceLayers: true,
  statusIndicators: true
};

@subclass("esri.widgets.BasemapLayerList")
class BasemapLayerList extends HandleOwnerMixin(Widget) {
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
   *   view: view
   * });
   */
  constructor(params?: BasemapLayerListParams, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
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

  private _newUI = has(NEW_UI_FLAG);

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
   * Function definition for the [baseListItemCreatedFunction](#baseListItemCreatedFunction)
   * and [referenceListItemCreatedFunction](#referenceListItemCreatedFunction) properties.
   * See the example snippets in the documentations for those properties for more details.
   *
   * @callback module:esri/widgets/BasemapLayerList~ListItemCreatedHandler
   * @param {Object} event - An object containing a list item created by the LayerList.
   * @param {module:esri/widgets/LayerList/ListItem} event.item - A list item
   *   created by the LayerList. You can modify the properties of this item to customize
   *   the text, actions, panel content, and visibility of the list item. See the
   *   documentation for the [listItemCreatedFunction](#listItemCreatedFunction) for more details.
   */

  /**
   * Specifies a function that accesses each {@link module:esri/widgets/LayerList/ListItem} representing a base layer.
   * Each list item's modifiable properties can be updated within. Actions can be added to list items
   * using the {@link module:esri/widgets/LayerList/ListItem#actionsSections actionsSections}
   * property of the ListItem.
   *
   * @name baseListItemCreatedFunction
   * @instance
   * @type {module:esri/widgets/BasemapLayerList~ListItemCreatedHandler}
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
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

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
  @messageBundle("esri/widgets/BasemapLayerList/t9n/BasemapLayerList")
  messages: BasemapLayerListMessages = null;

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
   * Indicates whether more than one list item may be selected by the user at a single time.
   * Selected items are available in the [selectedItems](#selectedItems)
   * property.
   *
   * @name multipleSelectionEnabled
   * @instance
   * @type {boolean}
   * @default false
   *
   * @see [selectedItems](#selectedItems)
   *
   * @example
   * basemapLayerList.multipleSelectionEnabled = true;
   */
  @property()
  multipleSelectionEnabled = false;

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
   * @type {module:esri/widgets/BasemapLayerList~ListItemCreatedHandler}
   *
   * @example
   *
   * var bmLayerList = new BasemapLayerList({
   *   view: view,
   *   editingEnabled: true,
   *   referenceListItemCreatedFunction: function(event){
   *     referenceListItem = event.item;
   *     if(referenceListItem.title === "World Imagery_01_reference_layer"){
   *       // clean up title
   *       referenceListItem.title = "Reference layer";
   *       // open the baseList item
   *       referenceListItem.open = true;
   *     }
   *   }
   * })
   */
  @aliasOf("viewModel.referenceListItemCreatedFunction")
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
   * @readonly
   */
  @aliasOf("viewModel.baseItems")
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
   * @readonly
   */
  @aliasOf("viewModel.referenceItems")
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
   */
  @property()
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
   * @deprecated since version 4.15. Use {@link module:esri/widgets/LayerList#visibleElements BasemapLayerList.visibleElements.statusIndicators} instead.
   *
   * @example
   * // disable status indicators for all layers listed in BasemapLayerList
   * basemapLayerList.statusIndicatorsVisible = false;
   */
  @property()
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
  view: MapView | ISceneView = null;

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
  @property({ type: BasemapLayerListViewModel })
  viewModel: BasemapLayerListViewModel = new BasemapLayerListViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/BasemapLayerList~VisibleElements
   *
   * @property {boolean} [statusIndicators] - Indicates whether to the status indicators will be displayed. Default is `true`.
   * @property {boolean} [baseLayers] - Indicates whether to the base layers will be displayed. Default is `true`.
   * @property {boolean} [referenceLayers] - Indicates whether to the reference layers will be displayed. Default is `true`.
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/BasemapLayerList~VisibleElements}
   * @autocast
   *
   * @since 4.15
   *
   * @example
   * basemapLayerList.visibleElements = {
   *   statusIndicators: false
   * };
   */
  @property()
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
  triggerAction(action: Action, item: ListItem): void {
    this.viewModel.triggerAction(action, item);
  }

  render(): VNode {
    const { state } = this.viewModel;

    const baseClasses = {
      [CSS.newUI]: this._newUI,
      [CSS.hidden]: state === "loading",
      [CSS.disabled]: state === "disabled"
    };

    const referenceSectionNode = this.renderReferenceSection();
    const baseSectionNode = this.renderBaseSection();
    const dividerNode =
      referenceSectionNode && baseSectionNode ? <hr class={CSS.horizontalRule} /> : null;

    return (
      <div class={this.classes(CSS.base, baseClasses)}>
        {this.renderTitleContainer()}
        {referenceSectionNode}
        {dividerNode}
        {baseSectionNode}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderEditingInput(): VNode {
    const { messages } = this;
    const { basemapTitle } = this.viewModel;

    return (
      <label class={CSS.editingInput}>
        {messages.basemapTitle}
        <input
          bind={this}
          class={CSS.input}
          title={messages.basemapTitle}
          aria-label={messages.basemapTitle}
          placeholder={messages.basemapTitle}
          type="text"
          role="textbox"
          value={basemapTitle}
          afterCreate={this._storeEditTitleInput}
          afterUpdate={this._focusEditElement}
        />
      </label>
    );
  }

  protected renderCancelButton(): VNode {
    const { messagesCommon } = this;

    return (
      <button
        title={messagesCommon.cancel}
        aria-label={messagesCommon.cancel}
        type="button"
        bind={this}
        class={this.classes(CSS.button, CSS.buttonTertiary)}
        onclick={this._toggleEditingTitle}
      >
        {messagesCommon.cancel}
      </button>
    );
  }

  protected renderSubmitButton(): VNode {
    const { messagesCommon } = this;

    return (
      <button
        title={messagesCommon.form.submit}
        aria-label={messagesCommon.form.submit}
        type="button"
        bind={this}
        class={CSS.button}
        onclick={this._formSubmit}
      >
        {messagesCommon.form.ok}
      </button>
    );
  }

  protected renderEditingForm(): VNode {
    return (
      <div class={CSS.editingCard}>
        <form bind={this} onsubmit={this._formSubmit}>
          {this.renderEditingInput()}
          <div class={CSS.editingActions}>
            {this.renderCancelButton()}
            {this.renderSubmitButton()}
          </div>
        </form>
      </div>
    );
  }

  protected renderBasemapTitle(): VNode {
    const { basemapTitle } = this.viewModel;

    return <h2 class={this.classes(CSS.heading, CSS.mainHeading)}>{basemapTitle}</h2>;
  }

  protected renderEditTitleButton(): VNode {
    const { _editingTitle, editingEnabled, messagesCommon } = this;

    return editingEnabled && !_editingTitle ? (
      <button
        bind={this}
        class={CSS.editButton}
        title={messagesCommon.edit}
        aria-label={messagesCommon.edit}
        onclick={this._toggleEditingTitle}
        afterCreate={this._storeEditTitleButton}
        afterUpdate={this._focusEditElement}
        data-node-ref="_editButtonNode"
      >
        <span aria-hidden="true" class={this.classes(CSS.iconEdit, CSS.editButtonIcon)} />
      </button>
    ) : null;
  }

  protected renderTitleContainer(): VNode {
    return (
      <div class={CSS.titleContainer}>
        {this._editingTitle ? this.renderEditingForm() : this.renderBasemapTitle()}
        {this.renderEditTitleButton()}
      </div>
    );
  }

  protected renderNoLayersInfo(text: string, key: string): VNode {
    return (
      <div key={key} class={CSS.noItems}>
        {text}
      </div>
    );
  }

  protected renderList(items: ListItem[], key: BasemapItemType): VNode {
    const { messages } = this;
    const afterRemoved =
      key === "reference" ? this._destroyReferenceSortable : this._destroyBaseSortable;

    return (
      <ul
        key={key}
        aria-label={messages.widgetLabel}
        role={this.editingEnabled && items.length ? "listbox" : undefined}
        afterCreate={this._sortNodeCreated}
        afterRemoved={afterRemoved}
        data-node-ref={key}
        bind={this}
        class={this.classes(CSS.list, CSS.listRoot, CSS.listIndependent)}
      >
        {items.map((item) =>
          this.renderItem({ item, parent: null, itemType: key, isOnlyChild: items.length === 1 })
        )}
      </ul>
    );
  }

  protected renderBaseHeader(): VNode {
    return (
      <h3 key="base-heading" class={this.classes(CSS.heading, CSS.listHeading)}>
        {this.messages.baseHeading}
      </h3>
    );
  }

  protected renderBaseSection(): VNode {
    const { baseItems, messages, visibleElements } = this;

    if (!visibleElements.baseLayers) {
      return null;
    }

    const validBaseItems = this._getItems(baseItems);

    const key = "base";

    return [
      this.renderBaseHeader(),
      [
        validBaseItems.length === 0 ? this.renderNoLayersInfo(messages.noBaseLayers, key) : null,
        this.renderList(validBaseItems, key)
      ]
    ];
  }

  protected renderReferenceHeader(): VNode {
    return (
      <h3 key="reference-heading" class={this.classes(CSS.heading, CSS.listHeading)}>
        {this.messages.referenceHeading}
      </h3>
    );
  }

  protected renderReferenceSection(): VNode {
    const { referenceItems, messages, visibleElements } = this;

    if (!visibleElements.referenceLayers) {
      return null;
    }

    const validReferenceItems = this._getItems(referenceItems);

    const key = "reference";

    return [
      this.renderReferenceHeader(),
      [
        validReferenceItems.length === 0
          ? this.renderNoLayersInfo(messages.noReferenceLayers, key)
          : null,
        this.renderList(validReferenceItems, key)
      ]
    ];
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
      <div key="error" class={CSS.errorMessage} role="alert">
        <span>{this.messages.layerError}</span>
      </div>
    ) : null;
  }

  protected renderActionsMenuIcon(item: ListItem, actionsUid: string): VNode {
    const { messagesCommon } = this;

    const actionsMenuClasses = {
      [CSS.actionsMenuItemActive]: item.actionsOpen
    };

    const actionsMenuTitle = item.actionsOpen ? messagesCommon.close : messagesCommon.open;

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
    const { editingEnabled } = this;
    const { visibilityMode, children } = item;
    const hasError = !!item.error;
    const hasChildren = !!children.length && !hasError;

    const { exclusive, inherited } = VISIBILITY_MODES;

    const childClasses = {
      [CSS.listExclusive]: visibilityMode === exclusive,
      [CSS.listInherited]: visibilityMode === inherited,
      [CSS.listIndependent]: visibilityMode !== inherited && visibilityMode !== exclusive
    };

    return hasChildren ? (
      <ul
        bind={this}
        key="list-items"
        id={listUid}
        data-group={item.uid}
        data-item={item}
        afterCreate={this._sortNodeCreated}
        afterUpdate={this._sortNodeCreated}
        class={this.classes(CSS.list, childClasses)}
        aria-expanded={item.open ? "true" : "false"}
        role={editingEnabled ? "listbox" : visibilityMode === exclusive ? "radiogroup" : "group"}
        hidden={item.open ? null : true}
      >
        {children?.map((childItem) => this.renderItem({ item: childItem, parent: item })).toArray()}
      </ul>
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

  protected renderItem({
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
    const { _newUI, id, editingEnabled, selectedItems, visibleElements } = this;
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
      [CSS.itemSelectable]: editingEnabled
    };

    if (editingEnabled) {
      const itemProps = {
        [SORT_DATA_ATTR]: item.layer?.uid
      };

      return (
        <li
          key={`item-with-selection-${item.uid}`}
          bind={this}
          afterCreate={this._focusListItem}
          afterUpdate={this._focusListItem}
          class={this.classes(CSS.item, itemClasses, { [CSS.itemOnlyChild]: isOnlyChild })}
          aria-labelledby={titleKey}
          onclick={this._toggleSelection}
          onkeydown={this._selectionKeydown}
          data-item-type={itemType}
          data-item={item}
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
    const { editingEnabled } = this;
    const { exclusive } = VISIBILITY_MODES;
    const parentVisibilityMode = parent && parent.visibilityMode;
    const toggleRole = parentVisibilityMode === exclusive ? "radio" : "switch";

    if (editingEnabled) {
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
    const { editingEnabled, _newUI } = this;
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

    const labelNode = !editingEnabled ? (
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

  private _filterActions(actionSections: Sections): Sections {
    return actionSections.map((section) => section.filter((action) => action.visible));
  }

  private _destroyReferenceSortable(): void {
    const { _sortableReferenceLayers } = this;

    _sortableReferenceLayers?.el && _sortableReferenceLayers.destroy();

    this._sortableReferenceLayersNode = null;
  }

  private _destroyBaseSortable(): void {
    const { _sortableBaseLayers } = this;

    _sortableBaseLayers?.el && _sortableBaseLayers.destroy();

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
        fallbackTolerance: 4, // Note: some phones with very sensitive touch displays like the Samsung Galaxy S8 will fire unwanted touchmove events even when your finger is not moving, resulting in the sort not triggering. #25015
        disabled,
        onSort: () =>
          this._sortLayersToItems({ type: "base", itemIds: sortableBaseLayers.toArray() }),
        onAdd: (event) => this._itemMovedList(event),
        chosenClass: CSS.sortableChosen
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
        fallbackTolerance: 4, // Note: some phones with very sensitive touch displays like the Samsung Galaxy S8 will fire unwanted touchmove events even when your finger is not moving, resulting in the sort not triggering. Only needed when the item can also be clicked/touched. #25015
        onSort: () =>
          this._sortLayersToItems({
            type: "reference",
            itemIds: sortableReferenceLayers.toArray()
          }),
        onAdd: (event) => this._itemMovedList(event),
        chosenClass: CSS.sortableChosen
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

  private _getItems(items: Collection<ListItem>): ListItem[] {
    return items.toArray().filter((item) => this.errorsVisible || !item.error);
  }

  private _getSingleActionButton(sections: Sections): ActionButton {
    return sections
      .reduce((item) => item)
      .filter((item) => item && item.type === "button")
      .getItemAt(0) as ActionButton;
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

    const item = element["data-item"] as ListItem;

    if (item.layer?.uid === _focusSortUid) {
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

    if (!sortable) {
      return;
    }

    const isSelected = findSelectedItem(item, selectedItems);
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
        this._focusSortUid = item.layer?.uid;
        this.scheduleRender();
        return;
      }

      if (exceedsItemsLength && itemType === "reference") {
        const focusItem = baseItems.getItemAt(0);
        this._focusSortUid = focusItem?.layer?.uid;
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

      this._focusSortUid = item.layer?.uid;
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
        this._focusSortUid = item.layer?.uid;
        this.scheduleRender();
        return;
      }

      if (isLessThanStartIndex && itemType === "base") {
        const focusItem = referenceItems.getItemAt(referenceItems.length - 1);
        this._focusSortUid = focusItem?.layer?.uid;
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

      this._focusSortUid = item.layer?.uid;
      this.scheduleRender();
    }
  }

  private _watchActionSectionChanges(actionSection: Actions, key: string): void {
    this.handles.add(
      actionSection.on("change", () => this.scheduleRender()),
      key
    );

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

export default BasemapLayerList;
