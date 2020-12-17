// esri.core
import Collection from "esri/core/Collection";
import { on } from "esri/core/events";
import { HandleOwnerMixin } from "esri/core/HandleOwner";
import { isSome } from "esri/core/maybe";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.libs.vaadin-grid
import "./../../../libs/vaadin-grid/index";

// esri.widgets
import Widget from "esri/Widget";

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
import { VNode } from "esri/support/interfaces";
import { isRTL, messageBundle, renderable, tsx } from "esri/support/widget";

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
class Grid extends HandleOwnerMixin(Widget)<GridEvents> {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this.handles.add([
      // Vaadin-grid must be provided an accurate count/size
      watchUtils.watch(this, "viewModel.size", () => this._updateGridSize()),
      // Vaadin-grid's cache must be refreshed when the store is reloaded
      watchUtils.watch(this, "store.state", (newValue, oldValue) => {
        if (newValue === "ready" && oldValue === "loaded") {
          this.refreshCache();
        }
      })
    ]);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  @property()
  private _grid: GridElement = null;

  private _headerStyles = `display: flex; font-weight: 400;`;

  private _hostStyles = `font-family: "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 1em;`;

  private _rowHoverStyles = `background: #e2f1fb;`;

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
  @renderable()
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
  @renderable()
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
  @renderable([
    "viewModel.cellClassNameGenerator",
    "viewModel.columnReorderingEnabled",
    "viewModel.columns",
    "viewModel.dataProvider",
    "viewModel.pageSize",
    "viewModel.rowDetailsRenderer",
    "viewModel.size",
    "viewModel.state",
    "viewModel.store"
  ])
  viewModel: GridViewModel = new GridViewModel();

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
        frozen={!isRTL()}
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
      "afterCreate": this._afterColumnCreateOrUpdate,
      "afterUpdate": this._afterColumnCreateOrUpdate
    };
  }

  clearSelection(): void {
    this._clearSelection();
    this.scheduleRender();
  }

  clearSort(): void {
    this.columns.forEach((c) => (c.direction = null));

    if (this._grid) {
      this._grid._sorters = [];
    }

    this.scheduleRender();
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
    this._clearSelection();
    this.store?.reset();
    await this.store?.load();
    this.refreshCache();
  }

  // Client-side refresh
  // Forces sync between 'store' and 'GridElement' item store
  refreshCache(): void {
    this._grid?.clearCache();
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

  private _afterColumnCreateOrUpdate(element: ColumnElement): void {
    this._syncColumnRenderers(element);
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
    if (this._grid?.selectedItems) {
      //  Clone required; 'selectedItems' is mutated by '_grid.deselectItem()' during loop
      this._grid.selectedItems.slice().forEach((i) => this._deselectRowByItem(i));
      this._updateSelectionProps();
    }
  }

  //--------------------------------------------------------------------------
  //  Vaadin-grid state helpers
  //--------------------------------------------------------------------------

  private _onSelectionChange(event: Event): void {
    const e = event as SelectedItemsChangeEvent;
    this._updateSelectionProps();

    if (e.detail.path === "selectedItems.splices") {
      const { removed, index, object: added } = e.detail.value.indexSplices[0];

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

  private _syncColumnRenderers(element: ColumnElement): void {
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
