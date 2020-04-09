/**
 * This widget provides an interactive tabular view of each feature's attributes in a feature layer.
 * When working with a large dataset, the table loads additional features as the user scrolls. Users can
 * select rows (features) within the table.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 * * Not supported in Internet Explorer 11.
 * * Editing is currently not supported.
 * * Viewing related records is currently not supported.
 * * Viewing attachments is currently not supported, although if a feature contains
 * attachments, the total count per feature will display.
 * * Selecting features from a map and having it reflected in the table is
 * currently not implemented but will be in an upcoming release.
 * * [Dark themed](../guide/styling/#themes) CSS is currently not supported.
 * * Customizing date strings via the FeatureTable API is currently not supported.
 * :::
 *
 * The following image displays the standalone `FeatureTable` widget
 * without any associated map.
 * ![standalone featuretable widget](../../assets/img/guide/whats-new/415/featuretable-standalone.png)
 *
 * The following image displays the `FeatureTable` widget with an associated map.
 * ![standalone featuretable widget](../../assets/img/guide/whats-new/415/featuretable-map.png)
 *
 *
 *
 * @beta
 * @module esri/widgets/FeatureTable
 * @amdalias FeatureTable
 * @since 4.15
 *
 * @see [FeatureTable.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/FeatureTable.tsx)
 * @see [FeatureTable.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_FeatureTable.scss)
 * @see [Sample - FeatureTable Widget](../sample-code/widgets-featuretable/index.html)
 * @see [Sample - FeatureTable widget using a map](../sample-code/widgets-featuretable-map/index.html)
 * @see module:esri/widgets/FeatureTable/FeatureTableViewModel
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/layers/FeatureLayer
 */

/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/FeatureTable/nls/FeatureTable";

// esri
import { substitute } from "esri/intl";

// esri.core
import { HandleOwnerMixin } from "esri/core/HandleOwner";
import { CollectionChangeEvent } from "esri/core/interfaces";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import FeatureLayer = require("esri/layers/FeatureLayer");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.FeatureForm
import FieldConfig = require("esri/widgets/FeatureForm/FieldConfig");

// esri.widgets.FeatureTable
import FeatureTableViewModel = require("esri/widgets/FeatureTable/FeatureTableViewModel");

// esri.widgets.FeatureTable.Grid
import Grid = require("esri/widgets/FeatureTable/Grid/Grid");
import { Direction } from "esri/widgets/FeatureTable/Grid/interfaces";

// esri.widgets.FeatureTable.support
import { FeatureData, State } from "esri/widgets/FeatureTable/support/interfaces";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { /* accessibleHandler, isRTL, */ renderable, tsx } from "esri/widgets/support/widget";

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  header: true,
  menu: true,
  menuItems: {
    clearSelection: true,
    refreshData: true,
    toggleColumns: true
  }
};

const CSS = {
  base: "esri-feature-table",
  header: "esri-feature-table__header",
  title: "esri-feature-table__title",
  content: "esri-feature-table__content",
  loader: "esri-feature-table__loader",
  loaderContainer: "esri-feature-table__loader-container",

  // menu
  menuContainer: "esri-feature-table__menu",
  menuAnchor: "esri-feaute-table__menu-anchor",
  menuContent: "esri-feature-table__menu-content",
  menuAccordion: "esri-feature-table__menu-accordion",
  menuAccordionSub: "esri-feature-table__menu-accordion-sub",
  menuItem: "esri-feature-table__menu-item",
  menuItemLabel: "esri-feature-table__menu-item-label",
  menuItemLabelContent: "esri-feature-table__menu-item-label__content",
  menuInput: "esri-feature-table__menu-input",
  menuItemIcon: "esri-feature-table__menu-item__icon",
  menuItemInput: "esri-feature-table__menu-item__input",

  // icons
  button: "esri-feature-table__button",
  buttonSelected: "esri-feature-table__button--selected",
  menuIcon: "esri-icon-menu",
  tableIcon: "esri-icon-table",
  menuItemGroup: "esri-icon-right",
  checkmark: "esri-icon-check-mark",

  // common
  widget: "esri-widget",
  input: "esri-input",
  select: "esri-select"
};

interface VisibleElements {
  header?: true;
  menu?: boolean;
  menuItems?: {
    clearSelection: true;
    refreshData: true;
    toggleColumns: true;
  };
}

type SelectionChangeEvent = Partial<Pick<CollectionChangeEvent, "added" | "removed">>;

interface FeatureTableEvents {
  "selection-change": SelectionChangeEvent;
}

type FeatureTableParams = Partial<
  Pick<FeatureTable, "attachmentsEnabled" | "layer" | "viewModel" | "visibleElements">
>;

@subclass("esri.widgets.FeatureTable")
class FeatureTable extends declared(HandleOwnerMixin(Widget))<FeatureTableEvents> {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when a row selection is added and/or removed within the FeatureTable.
   *
   * @event module:esri/widgets/FeatureTable#selection-change
   *
   * @property {Object[]} added - An array of objects containing row (feature) data added to the table selection.
   * @property {module:esri/Graphic} added.feature - The associated row (feature)
   * added to the feature table selection.
   * @property {module:esri/layers/support/AttachmentInfo[]} added.attachments - If applicable,
   * an array of {@link module:esri/layers/support/AttachmentInfo}
   * associated with the row (feature) added to the
   * feature table selection.
   * @property {module:esri/Graphic[]} added.relatedRecords - (Currently not implemented). If
   * applicable, an array of related {@link module:esri/Graphic features} associated with the
   * row (feature) added to the feature table selection.
   * @property {Object[]} removed - An array of objects containing row (feature) data removed in the table selection.
   * @property {module:esri/Graphic} removed.feature - The associated row (feature)
   * removed from the feature table selection.
   * @property {module:esri/layers/support/AttachmentInfo[]} removed.attachments - If applicable,
   * an array of {@link module:esri/layers/support/AttachmentInfo}
   * associated with the row (feature) removed from the
   * feature table selection.
   * @property {module:esri/Graphic[]} removed.relatedRecords - (Currently not implemented). If
   * applicable, an array of related {@link module:esri/Graphic features} associated with the
   * row (feature) removed from the feature table selection.
   *
   * @example
   * // This function will fire each time a row (feature) is either added
   * // or removed from the feature table's selection
   * featureTable.on("selection-change", function(event){
   *   const addedRows = event.added; // An array of rows (features) added to the selection
   *   const removedRows = event.removed;  // An array of rows (features) removed from the selection
   * });
   */

  /**
   * @constructor
   * @alias module:esri/widgets/FeatureTable
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // Typical usage for FeatureTable widget. This will recognize all fields in the layer.
   * const featureTable = new FeatureTable({
   *   layer: featureLayer,
   *   container: "tableDiv"
   * });
   *
   */
  constructor(params?: FeatureTableParams) {
    super(params);
  }

  postInitialize(): void {
    this.handles.add([
      watchUtils.on(this, "grid.selectedItems", "change", (event) =>
        this._onSelectionChange(event as CollectionChangeEvent)
      ),
      watchUtils.watch(
        this,
        ["viewModel.store.querying", "viewModel.store.syncing", "grid.size"],
        () => this.scheduleRender()
      )
    ]);
  }

  //--------------------------------------------------------------------------
  //
  // Type definitions
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  // VisibleElements typedef
  //
  //--------------------------------------------------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/FeatureTable~VisibleElements
   *
   * @property {boolean} [header] - Indicates whether to display the feature table's header information. Default value is `true`.
   * @property {boolean} [menu] - Indicates whether to display the feature table's menu.Default value is `true`.
   * @property {Object} [menuItems] - The menu items within the feature table menu.
   * This image shows the individual items within the widget's menu.
   *
   * ![featuretable widget menu items](../../assets/img/apiref/widgets/featuretable/menuitems.png)
   * @property {boolean} [menuItems.clearSelection] - Indicates whether to display the `Clear selection` menu item. Default value is `true`.
   * @property {boolean} [menuItems.refreshData] - Indicates whether to display the `Refresh data` menu item. Default value is `true`.
   * @property {toggleColums} [menuItems.toggleColumns] - Indicates whether to enable toggling column visibility within the menu. Default value is `true`.
   */

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _menuActive: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  attachmentsEnabled
  //----------------------------------

  /**
   * Indicates whether to display the `Attachments` field in the table. This is only
   * applicable if the feature layer supports attachments. Currently, this field only
   * displays the count of attachments per feature.
   *
   * ![featuretable attachmentenabled](../../assets/img/apiref/widgets/featuretable/attachments-enabled.png)
   *
   * @name attachmentsEnabled
   * @type {boolean}
   * @instance
   * @default false
   *
   */
  @aliasOf("viewModel.attachmentsEnabled")
  attachmentsEnabled: boolean = null;

  //----------------------------------
  //  fieldConfigs
  //----------------------------------

  /**
   * An array of individual configuration objects.  This is where you can specify what fields to
   * display and how you wish to display them.
   *
   * When not set, all fields except for `CreationDate`, `Creator`, `EditDate`, `Editor`, and `GlobalID`
   * will be included. Otherwise, it is up to the developer to set the right field(s)
   * to override and display.
   *
   * @name fieldConfigs
   * @instance
   * @type {module:esri/widgets/FeatureTable/FieldColumnConfig[]}
   * @default null
   *
   */
  @aliasOf("viewModel.fieldConfigs")
  fieldConfigs: FieldConfig[] = null;

  //----------------------------------
  //  grid
  //----------------------------------

  /**
   * This provides much of the underlying functionality used in the implementation of the FeatureTable.
   *
   * @ignore
   * @name grid
   * @type {Object}
   * @instance
   * @readonly
   *
   */
  @aliasOf("viewModel.grid")
  grid: Grid = null;

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
  //  layer
  //----------------------------------

  /**
   *
   * The associated {@link module:esri/layers/FeatureLayer} containing the fields and attributes to display within the widget.
   *
   * @name layer
   * @type {module:esri/layers/FeatureLayer}
   * @instance
   *
   */
  @aliasOf("viewModel.layer")
  layer: FeatureLayer = null;

  //----------------------------------
  //  relatedRecordsEnabled
  //----------------------------------

  /**
   *
   * Indicates whether to display any related records associated with rows (features) within the table.
   *
   * @ignore
   * @name relatedRecordsEnabled
   * @type {boolean}
   * @instance
   * @default false
   *
   */
  @aliasOf("viewModel.relatedRecordsEnabled")
  relatedRecordsEnabled: false;

  //----------------------------------
  //  state
  //----------------------------------

  /**
   * The state of the widget.
   *
   * **Possible Values:** disabled | loading | ready
   *
   * @name state
   * @type {"disabled" | "loading" | "ready"}
   * @instance
   * @default
   *
   */
  @aliasOf("viewModel.state")
  state: State;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/FeatureTable/FeatureTableViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/FeatureTable/FeatureTableViewModel}
   * @autocast
   */
  @property()
  @renderable([
    "viewModel.attachmentsEnabled",
    "viewModel.layer",
    "viewModel.relatedRecordsEnabled",
    "viewModel.state"
  ])
  viewModel: FeatureTableViewModel = new FeatureTableViewModel();

  //----------------------------------
  // visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/FeatureTable~VisibleElements}
   * @autocast
   *
   * @example
   * featureTable.visibleElements = {
   *    header: true,
   *    menu: true,
   *    menuItems: {
   *      clearSelection: true,
   *      refreshData: false,
   *      toggleColumns: false
   *    }
   * }
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

  render(): VNode {
    return (
      <div bind={this} class={this.classes(CSS.base, CSS.widget)}>
        {this.visibleElements.header ? this._renderHeader() : null}
        <div class={CSS.content}>
          {this.state !== "disabled" && this.grid && this.grid.render()}
        </div>
      </div>
    );
  }

  sortColumn(fieldName: string, direction: Direction): void {
    this.viewModel && this.viewModel.sortColumn(fieldName, direction);
  }

  showColumn(fieldName: string): void {
    this.grid && this.grid.showColumn(fieldName);
  }

  hideColumn(fieldName: string): void {
    this.grid && this.grid.hideColumn(fieldName);
  }

  clearSelection(): void {
    this.grid && this.grid.clearSelection();
  }

  refresh(): void {
    this.grid && this.grid.refresh();
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  _selectRow(objectId: number): void {
    const { viewModel } = this;

    if (!viewModel) {
      return;
    }

    const { store } = viewModel;
    const index = store && store.getIndexForObjectId(objectId);
    this.grid && this.grid.selectRow(index);
  }

  _deselectRow(objectId: number): void {
    const { viewModel } = this;

    if (!viewModel) {
      return;
    }

    const { store } = viewModel;
    const index = store && store.getIndexForObjectId(objectId);
    this.grid && this.grid.deselectRow(index);
  }

  private _renderHeader(): VNode {
    return (
      <div key="header" class={CSS.header}>
        {this._renderLoader()}
        {this._renderTitle()}
        {this._renderMenu()}
      </div>
    );
  }

  private _renderTitle(): VNode {
    return (
      <div class={CSS.title} key="title">
        {this._getTitle()}
      </div>
    );
  }

  private _getTitle(): string {
    const {
      grid,
      layer: { title },
      viewModel: { size: count }
    } = this;

    if (!grid) {
      return "";
    }

    return substitute(i18n.header, {
      title,
      count,
      selected: grid.selectedItems.length || 0
    });
  }

  private _renderLoader(): VNode {
    const { state, store } = this.viewModel;
    const isLoadingOrSyncing = state === "loading" || store.syncing || store.querying;

    return (
      <div class={CSS.loaderContainer}>
        {isLoadingOrSyncing ? <div class={CSS.loader} key="loader" /> : null}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //  Menu
  //--------------------------------------------------------------------------

  private _renderMenu(): VNode {
    if (!this.visibleElements.menu) {
      return undefined;
    }

    return (
      <div class={CSS.menuContainer} key="menu">
        <div class={CSS.menuAnchor}>
          {this._renderMenuButton()}
          {this._renderMenuContent()}
        </div>
      </div>
    );
  }

  private _renderMenuButton(): VNode {
    const title = i18n.menu;
    const menuButtonClasses = this.classes([
      CSS.button,
      CSS.menuIcon,
      this._menuActive ? CSS.buttonSelected : null
    ]);

    return (
      <button
        aria-label={title}
        bind={this}
        class={menuButtonClasses}
        title={title}
        selected={this._menuActive}
        onclick={this._onMenuButtonClick}
      />
    );
  }

  private _renderMenuContent(): VNode {
    const {
      menuItems: { clearSelection, refreshData, toggleColumns }
    } = this.visibleElements;

    return (
      <div class={CSS.menuContent} bind={this} hidden={!this._menuActive}>
        <ul class={CSS.menuAccordion} role="menu">
          {clearSelection ? this._renderMenuItem(i18n.clearSelection, this.clearSelection) : null}
          {refreshData ? this._renderMenuItem(i18n.refreshData, this.refresh) : null}
          {toggleColumns ? this._renderColumnToggleMenuItemGroup() : null}
        </ul>
      </div>
    );
  }

  private _renderMenuItem(label: string, callback: () => void): VNode {
    return (
      <li class={CSS.menuItem} role="menuitem">
        <button bind={this} onclick={callback} class={this.classes(CSS.button, CSS.menuItemLabel)}>
          <span class={CSS.menuItemLabelContent}>{label}</span>
        </button>
      </li>
    );
  }

  private _renderColumnToggleMenuItemGroup(): VNode {
    const groupId = `${this.id}-menu-group`;

    return (
      <li class={CSS.menuItem} role="menuitem">
        <input class={CSS.menuInput} type="checkbox" name={groupId} id={groupId} />
        <label class={CSS.menuItemLabel} for={groupId}>
          <span
            class={this.classes(CSS.menuItemLabelContent, CSS.menuItemGroup)}
            aria-hidden={true}
          />
          <span class={CSS.menuItemLabelContent}>{i18n.toggleColumns}</span>
        </label>

        {this._renderColumnToggleMenuItem()}
      </li>
    );
  }

  private _renderColumnToggleMenuItem(): VNode {
    const {
      id,
      viewModel: { columns }
    } = this;

    return (
      <ul class={CSS.menuAccordionSub}>
        {columns &&
          columns.items.map(({ header, hidden, path }) => {
            const key = `${id}-menu-item-${path}`;

            return (
              <li key={key} class={CSS.menuItem}>
                <a class={CSS.menuItemLabel}>
                  <input
                    class={CSS.menuItemInput}
                    type="checkbox"
                    name={key}
                    id={key}
                    checked={!hidden}
                    onchange={({ target }) =>
                      this._onColumnCheckboxChange(path, target as HTMLInputElement)
                    }
                  />
                  <label
                    for={key}
                    class={this.classes(CSS.menuItemIcon, hidden ? null : CSS.checkmark)}
                  />
                  <label class={CSS.menuItemLabel} for={key}>
                    {header || path}
                  </label>
                </a>
              </li>
            );
          })}
      </ul>
    );
  }

  //--------------------------------------------------------------------------
  //  Events
  //--------------------------------------------------------------------------

  private _onColumnCheckboxChange(path: string, input: HTMLInputElement): void {
    const checked = input && input.checked;

    if (checked) {
      this.showColumn(path);
    } else {
      this.hideColumn(path);
    }
  }

  private _onMenuButtonClick(): void {
    this._menuActive = !this._menuActive;
  }

  private _onSelectionChange(event: CollectionChangeEvent): void {
    const { added, removed } = event;

    this.emit("selection-change", {
      added: [...added] as FeatureData[],
      removed: [...removed] as FeatureData[]
    });
  }
}

export = FeatureTable;
