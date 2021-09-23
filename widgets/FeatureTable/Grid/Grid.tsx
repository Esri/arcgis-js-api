// esri.core
import Collection from "esri/../../core/Collection";
import { on } from "esri/../../core/events";
import { HandleOwnerMixin } from "esri/../../core/HandleOwner";
import { isSome } from "esri/../../core/maybe";
import * as watchUtils from "esri/../../core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.libs.vaadin-grid
import "../../../libs/vaadin-grid/index";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.FeatureTable.Grid
import Column from "esri/widgets/Column";
import GridViewModel from "esri/widgets/GridViewModel";
import {
  ColumnElement,
  DataProvider,
  GridElement,
  GridRowClickEvent,
  GridSelectionChangeEvent,
  RowData,
  SelectedItemsChangeEvent
} from "esri/widgets/interfaces";

// esri.widgets.FeatureTable.Grid.support
import { SortOrder, Store, StoreItem } from "esri/widgets/support/interfaces";

// esri.widgets.FeatureTable.t9n
import FeatureTableMessages from "esri/t9n/FeatureTable";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { isRTL, messageBundle, tsx } from "esri/../support/widget";

interface VisibleElements {
  selectionColumn?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  selectionColumn: true
};

const CSS = {
  base: "esri-grid",
  content: "esri-grid__content",
  grid: "esri-grid__grid",

  // common
  widget: "esri-widget"
};

interface GridEvents {
  "row-click": GridRowClickEvent;
  "selection-change": GridSelectionChangeEvent;
}

@subclass("esri.widgets.FeatureTable.Grid.Grid")
class Grid extends HandleOwnerMixin(Widget)<any, GridEvents> {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    this.handles.add([
      // Ensure current ColumnElements aren't using destroyed Column(s)
      this.columns.on("change", () => this._syncColumnRenderers()),
      // Vaadin-grid must be provided an accurate count/size
      watchUtils.watch(this, "viewModel.size", () => this._updateGridSize()),
      // Vaadin-grid's cache must be refreshed when the store is reloaded
      // Store may also have been in an error state from an unsupported layer
      watchUtils.watch(this, "store.state", (newValue, oldValue) => {
        if (newValue === "ready" && (oldValue === "loaded" || oldValue === "error")) {
          this.refreshCache();
        }
      }),
      // #34480 - hide column menus after scroll
      // Inspired by: https://vaadin.com/forum/thread/18388019/vaadin-grid-detect-scroll-listener
      watchUtils.on(this, "_grid.$.table", "scroll", () => {
        this.viewModel?.closeColumnMenus();
      })
    ]);
  }

  override destroy(): void {
    this.handles.removeAll();
    this.resetColumns();
    this.columns?.destroy();
  }

  resetColumns(): void {
    this.columns.items.forEach((c) => c.destroy());
    this.columns.removeAll();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  @property()
  private _grid: GridElement = null;

  private _headerStyles = `display: flex; font-weight: 400;`;

  private _hostStyles = `font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 1em; background-color: inherit; color: inherit;`;

  // Connected to calcite variable(s) in widget stylesheet
  private _rowHoverStyles = `background-color: var(--lumo-row-background-hover);`;

  private _columnElements: ColumnElement[] = [];

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  cellClassNameGenerator
  //----------------------------------

  @aliasOf("viewModel.cellClassNameGenerator")
  cellClassNameGenerator: (_column: ColumnElement, _rowData: RowData) => string = null;

  //----------------------------------
  //  columns
  //----------------------------------

  @aliasOf("viewModel.columns")
  columns: Collection<Column>;

  //----------------------------------
  //  columnReorderingEnabled
  //----------------------------------

  @aliasOf("viewModel.columnReorderingEnabled")
  columnReorderingEnabled: boolean = true;

  //----------------------------------
  //  dataProvider
  //----------------------------------

  @aliasOf("viewModel.dataProvider")
  dataProvider: DataProvider = null;

  //----------------------------------
  //  itemIdPath
  //----------------------------------

  @property()
  itemIdPath: string = null;

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
  @messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")
  messages: FeatureTableMessages = null;

  //----------------------------------
  //  pageSize
  //----------------------------------

  @aliasOf("viewModel.pageSize")
  pageSize: number = 50;

  //----------------------------------
  //  selectedItems
  //----------------------------------

  /**
   *
   *
   * @todo finish doc
   * @name selectedItems
   * @type {module:esri/widgets/FeatureTable/support/interfaces~StoreItem}
   * @instance
   *
   */
  @property({
    readOnly: true
  })
  readonly selectedItems: Collection<StoreItem> = new Collection();

  //----------------------------------
  //  size
  //----------------------------------

  @aliasOf("viewModel.size") size: number = null;

  //----------------------------------
  //  rowDetailsRenderer
  //----------------------------------

  @aliasOf("viewModel.rowDetailsRenderer")
  rowDetailsRenderer: (root: HTMLElement, grid: GridElement, rowData: RowData) => void = null;

  //----------------------------------
  //  store
  //----------------------------------

  @aliasOf("viewModel.store")
  store: Store = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/FeatureTable/Grid/GridViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/FeatureTable/Grid/GridViewModel}
   * @autocast
   */
  @property()
  override viewModel = new GridViewModel();

  //----------------------------------
  // visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/FeatureTable/Grid~VisibleElements}
   * @autocast { "value": "Object[]" }
   *
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

  override render(): VNode {
    return (
      <div bind={this} class={this.classes(CSS.base, CSS.widget)}>
        <div bind={this} class={CSS.content}>
          {this.renderGrid()}
        </div>
      </div>
    );
  }

  protected renderGrid(): VNode {
    return <vaadin-grid {...this.getGridProps()}>{this.renderAllColumns()}</vaadin-grid>;
  }

  protected renderAllColumns(): VNode {
    if (this.viewModel.state === "disabled" || !this.columns || !this.columns.length) {
      return undefined;
    }

    return [this.renderSelectionColumn(), this.renderColumns()];
  }

  protected renderSelectionColumn(): VNode {
    // NOTE: 'frozen' behavior is broken in RTL
    // https://github.com/vaadin/vaadin-grid/issues/1490
    return (
      <vaadin-grid-selection-column
        _selectAllHidden={true}
        selectAll={false}
        bind={this}
        hidden={!this.visibleElements.selectionColumn}
        sortable={false}
        frozen={!isRTL(this.container)}
      />
    );
  }

  protected renderColumns(): VNode {
    return this.columns.items.map((column, index) => (
      <vaadin-grid-column {...this.getColumnProps(column, index)} />
    ));
  }

  protected getGridProps(): any {
    const { columnReorderingEnabled, id, pageSize, size } = this;

    return {
      _safari: false, // #28062
      class: CSS.grid,
      id: `${id}_grid`,
      theme: "compact column-borders",
      ref: "grid",
      bind: this,
      afterCreate: this._afterGridCreate,
      afterUpdate: this._afterGridUpdate,
      columnReorderingAllowed: columnReorderingEnabled,
      pageSize,
      size
    };
  }

  protected getColumnProps(column: Column, index?: number): any {
    const { id } = this;
    const {
      autoWidth,
      direction,
      flexGrow,
      frozen,
      header,
      hidden,
      path,
      resizable,
      textAlign,
      width
    } = column;
    const key = `${id}_${name}_${isSome(index) ? index : path}`;
    const computedWidth = typeof width === "number" ? `${width}px` : width;

    return {
      autoWidth,
      direction,
      flexGrow,
      frozen,
      header,
      hidden,
      key,
      path,
      resizable,
      "text-align": textAlign,
      "width": computedWidth,
      "bind": this,
      "afterCreate": this._afterColumnCreate,
      "afterRemoved": this._afterColumnRemoved
    };
  }

  clearSelection(): void {
    this._clearSelection();
    this.scheduleRender();
  }

  clearSort(): void {
    let sortDidChange = false;

    // Reset the sort order on the component
    // This will also trigger a re-render
    if (this._grid && this._grid._sorters && this._grid._sorters.length) {
      this._grid._sorters = [];
      sortDidChange = true;
    }

    // Columns must also be reset regardless of the Grid state
    if (this.columns && this.columns.length) {
      const hasDirection = !!this.columns.find((item) => !!item.direction);

      if (hasDirection) {
        this.columns.forEach((c) => (c.direction = null));
        sortDidChange = true;
      }
    }

    if (sortDidChange) {
      this.scheduleRender();
    }
  }

  deselectItem(item: StoreItem): void {
    this._deselectRowByItem(item);
  }

  deselectRow(index: number): void {
    const item = this.viewModel.getRowItemAt(index);

    item && this._deselectRowByItem(item);
  }

  @aliasOf("viewModel.findColumn")
  findColumn(): void {}

  // Re-render cells
  generateCellClassNames(): void {
    this._grid?.generateCellClassNames();
  }

  // Internal method required for accessibility reasons
  getSlotElementByName(name: string): HTMLElement {
    return this._grid?.shadowRoot?.querySelector(`slot[name='${name}']`);
  }

  hideColumn(path: string): void {
    this.viewModel?.hideColumn(path);
    this.scheduleRender();
  }

  notifyResize(): void {
    this._grid?.notifyResize();
  }

  recalculateColumnWidths(): void {
    this._grid?.recalculateColumnWidths();
  }

  // Server-side refresh
  async refresh(): Promise<void> {
    // Selected rows may have been deleted
    this._clearSelection();
    // Triggers watcher via 'store.state' which empties local VaadinGrid cache
    // This causes a new 'dataProvider' call which also loads the store
    await this.store?.reset();
    // Prevent issue with vaadin scrolling to
    // the fourth row after a refresh
    this.scrollToTop();
  }

  // Client-side refresh
  // Forces sync between 'store' and 'GridElement' item store
  refreshCache(): void {
    this._grid?.clearCache();
  }

  selectRows(items: StoreItem[]): void {
    const currentItems = this._grid.selectedItems.slice();

    // Avoid adding duplicates to selection set
    items.forEach((item) => {
      const idx = currentItems.findIndex((cItem) => cItem.objectId === item.objectId);

      if (idx < 0) {
        this._grid.selectedItems.push(item);
      }
    });

    this._updateSelectionProps();
    this._grid.render();
  }

  deselectRows(items: StoreItem[]): void {
    const currentItems = this._grid.selectedItems.slice();

    // Ensure item is actually selected before attempting to remove
    // Required to deselect rows that may not be loaded, but were selected via API
    items.forEach((item) => {
      const idx = currentItems.findIndex((cItem) => cItem.objectId === item.objectId);

      if (idx > -1) {
        currentItems.splice(idx, 1);
      }
    });

    this._grid.selectedItems = currentItems;
    this._updateSelectionProps();
    this._grid.render();
  }

  selectItem(item: StoreItem): void {
    this._selectRowByItem(item);
  }

  selectRow(index: number): void {
    const item = this.viewModel.getRowItemAt(index);

    item && this._selectRowByItem(item);
  }

  showColumn(path: string): void {
    this.viewModel?.showColumn(path);
    this.scheduleRender();
  }

  // Used internally by Vaadin-grid
  // Name must remain as such
  sort({ path, direction }: SortOrder): void {
    this.viewModel?.sortColumn(path, direction);
  }

  scrollToIndex(index: number): void {
    this._grid?.scrollToIndex(index);
  }

  scrollToTop(): void {
    this._grid?.scrollToIndex(0);
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterGridCreate(element: GridElement): void {
    const { cellClassNameGenerator, dataProvider, itemIdPath, rowDetailsRenderer } = this;

    element.cellClassNameGenerator = cellClassNameGenerator;
    element.dataProvider = dataProvider;
    element.rowDetailsRenderer = rowDetailsRenderer;
    element.itemIdPath = itemIdPath;

    this._grid = element;

    customElements.whenDefined("vaadin-grid").then(() => {
      this._appendStyles();
      this._addGridEventListeners();
    });
  }

  private _afterGridUpdate(element: GridElement): void {
    if (!this._grid) {
      this._grid = element;
    }
  }

  private _afterColumnCreate(element: ColumnElement): void {
    this._applyRenderersToColumnElement(element);
    this._columnElements.push(element);
  }

  private _afterColumnRemoved(element: ColumnElement): void {
    const index = this._columnElements.indexOf(element, 0);

    if (index > -1) {
      this._columnElements.splice(index, 1);
    }
  }

  // Causes a re-render of every cell in the table
  private _syncColumnRenderers(): void {
    this._columnElements.forEach((element) => this._applyRenderersToColumnElement(element));
  }

  private _appendStyles(): void {
    const shadowRoot = this._grid?.shadowRoot;
    const style = document.createElement("style");

    style.textContent = `
      :host { ${this._hostStyles} }
      [part~="header-cell"] ::slotted(vaadin-grid-cell-content) { ${this._headerStyles} }
      [part~="row"]:hover [part~="body-cell"] { ${this._rowHoverStyles} }
    `;

    shadowRoot?.appendChild(style);
  }

  private _updateGridSize(): void {
    if (!this._grid) {
      return;
    }

    this._grid.size = this.size || 0;
    this.scheduleRender();
  }

  //--------------------------------------------------------------------------
  //  Event Handling
  //--------------------------------------------------------------------------

  private _addGridEventListeners(): void {
    const { _grid } = this;

    // Navigation and Selection
    // Update count display in header
    this.handles.add([
      on(_grid, "click", (event) => this._onRowClick(event)),
      on(_grid, "selected-items-changed", (event) => this._onSelectionChange(event))
    ]);
  }

  private _onRowClick(native: MouseEvent): void {
    const { _grid } = this;
    const context = _grid.getEventContext(event);
    const { item, section } = context;

    // Empty table space, details, header (sorting)
    if (!item || !section || section === "details" || section === "header") {
      return;
    }

    this.emit("row-click", { context, native });
  }

  //--------------------------------------------------------------------------
  //  Selection
  //--------------------------------------------------------------------------

  private _selectRowByItem(item: StoreItem): void {
    this._grid?.selectItem(item);
  }

  private _deselectRowByItem(item: StoreItem): void {
    this._grid?.deselectItem(item);
  }

  private _clearSelection(): void {
    if (this._grid?.selectedItems?.length) {
      this._grid.selectedItems = [];
      this._updateSelectionProps();
      this._grid.render();
    }
  }

  //--------------------------------------------------------------------------
  //  Vaadin-grid state helpers
  //--------------------------------------------------------------------------

  private _onSelectionChange(event: Event): void {
    const e = event as SelectedItemsChangeEvent;

    if (e.detail.path === "selectedItems.splices") {
      const { removed, index, object: added } = e.detail.value.indexSplices[0];

      this._updateSelectionProps();
      this.emit("selection-change", {
        index,
        added,
        removed
      });
    }
  }

  private _updateSelectionProps(): void {
    this.selectedItems.length && this.selectedItems.removeAll();
    this._grid && this.selectedItems.addMany(this._grid.selectedItems as StoreItem[]);
  }

  private _applyRenderersToColumnElement(element: ColumnElement): void {
    const path = element.getAttribute("path");
    const col = this.viewModel.findColumn(path);

    if (!col) {
      return;
    }

    // Required in case `cell.parentElement` is not defined at time of render
    // This usually means VaadinGrid is in the process of rendering cells
    // ... for a column whose visibility recently changed
    try {
      if (col.renderFunction) {
        element.renderer = (root, column, rowData) => col.renderFunction({ root, column, rowData });
      }

      if (col.footerRenderFunction) {
        element.footerRenderer = (root, column) => col.footerRenderFunction({ root, column });
      }

      if (col.headerRenderFunction) {
        element.headerRenderer = (root, column) => col.headerRenderFunction({ root, column });
      }
    } catch (e) {}
  }
}

export default Grid;
