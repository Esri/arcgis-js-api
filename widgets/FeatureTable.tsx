/**
 * This widget provides an interactive tabular view of each feature's attributes in a feature layer. In addition, it also works
 * with standalone tables that are not associated with underlying geometries.
 * When working with a large dataset, the table loads additional features as the user scrolls.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 * * Number and date formatting is not yet supported but will be added in a future release.
 * * Viewing related records is currently not supported.
 * * Viewing attachments is currently not supported, although if a feature contains
 * attachments, the total count per feature will display.
 * * SceneLayers are supported only starting with version 4.20. SceneLayer are only supported if they have an associated FeatureLayer.
 * :::
 *
 * The following image displays the standalone `FeatureTable` widget
 * without any associated map.
 *
 * ![standalone featuretable widget](../assets/img/apiref/widgets/featuretable/featuretable-standalone.png)
 *
 * The following image displays the `FeatureTable` widget with an associated map.
 *
 * ![standalone featuretable widget](../assets/img/apiref/widgets/featuretable/featuretable-map.png)
 *
 *
 * @module esri/widgets/FeatureTable
 * @amdalias FeatureTable
 * @since 4.15
 *
 * @see [FeatureTable.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/FeatureTable.tsx)
 * @see [FeatureTable.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_FeatureTable.scss)
 * @see module:esri/widgets/FeatureTable/FeatureTableViewModel
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/layers/FeatureLayer
 * @see [Sample - FeatureTable Widget](../sample-code/widgets-featuretable/index.html)
 * @see [Sample - FeatureTable widget using a map](../sample-code/widgets-featuretable-map/index.html)
 * @see [Sample - FeatureTable with editing enabled](../sample-code/widgets-featuretable-editing/index.html)
 * @see [Sample - FeatureTable with popup interaction](../sample-code/widgets-featuretable-popup-interaction/index.html)
 *
 */

// esri
import { Geometry } from "esri/geometry";
import { fetchMessageBundle, onLocaleChange, substitute } from "esri/intl";

// esri.core
import Collection from "esri/core/Collection";
import { HandleOwnerMixin } from "esri/core/HandleOwner";
import { CollectionChangeEvent } from "esri/core/interfaces";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.FeatureForm
import FieldConfig from "esri/widgets/FeatureForm/FieldConfig";

// esri.widgets.FeatureTable
import FeatureTableViewModel from "esri/widgets/FeatureTable/FeatureTableViewModel";

// esri.widgets.FeatureTable.Grid
import Column from "esri/widgets/FeatureTable/Grid/Column";
import Grid from "esri/widgets/FeatureTable/Grid/Grid";
import { State } from "esri/widgets/FeatureTable/Grid/interfaces";

// esri.widgets.FeatureTable.Grid.support
import ButtonMenu from "esri/widgets/FeatureTable/Grid/support/ButtonMenu";
import ButtonMenuItem from "esri/widgets/FeatureTable/Grid/support/ButtonMenuItem";
import {
  ButtonMenuConfig,
  ButtonMenuItemClickFunctionParams
} from "esri/widgets/FeatureTable/Grid/support/interfaces";

// esri.widgets.FeatureTable.support
import { FeatureData, FeatureTableSupportedLayers } from "esri/widgets/FeatureTable/support/interfaces";

// esri.widgets.FeatureTable.t9n
import FeatureTableMessages from "esri/widgets/FeatureTable/t9n/FeatureTable";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { messageBundle, tsx, WidgetProperties } from "esri/widgets/support/widget";

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  header: true,
  menu: true,
  menuItems: {
    clearSelection: true,
    refreshData: true,
    toggleColumns: true
  },
  selectionColumn: true
};

const CSS = {
  base: "esri-feature-table",
  header: "esri-feature-table__header",
  title: "esri-feature-table__title",
  content: "esri-feature-table__content",
  loader: "esri-feature-table__loader",
  loaderContainer: "esri-feature-table__loader-container",
  menuContainer: "esri-feature-table__menu",

  // Icons
  menuIcon: "esri-icon-handle-horizontal",
  menuItemGroupOpenedIcon: "esri-icon-down",
  menuItemGroupClosedIcon: "esri-icon-right",
  checkmarkIcon: "esri-icon-check-mark",

  // common
  widget: "esri-widget"
};

interface VisibleElements {
  header?: true;
  menu?: boolean;
  selectionColumn?: boolean;
  menuItems?: {
    clearSelection: true;
    refreshData: true;
    toggleColumns: true;
  };
}

type SelectionChangeEvent = Partial<Pick<CollectionChangeEvent, "added" | "removed">>;

interface Events {
  "selection-change": SelectionChangeEvent;
}

type ConstructProperties = Partial<
  Pick<
    FeatureTable,
    | "attachmentsEnabled"
    | "container"
    | "editingEnabled"
    | "fieldConfigs"
    | "layer"
    | "menuConfig"
    | "viewModel"
    | "visibleElements"
  >
> &
  Partial<WidgetProperties>;

@subclass("esri.widgets.FeatureTable")
class FeatureTable extends HandleOwnerMixin(Widget)<ConstructProperties, Events> {
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
   * @property {module:esri/rest/query/support/AttachmentInfo[]} added.attachments - If applicable,
   * an array of {@link module:esri/rest/query/support/AttachmentInfo}
   * associated with the row (feature) added to the
   * feature table selection.
   * @property {module:esri/Graphic[]} added.relatedRecords - (Currently not implemented). If
   * applicable, an array of related {@link module:esri/Graphic features} associated with the
   * row (feature) added to the feature table selection.
   * @property {Object[]} removed - An array of objects containing row (feature) data removed in the table selection.
   * @property {module:esri/Graphic} removed.feature - The associated row (feature)
   * removed from the feature table selection.
   * @property {module:esri/rest/query/support/AttachmentInfo[]} removed.attachments - If applicable,
   * an array of {@link module:esri/rest/query/support/AttachmentInfo}
   * associated with the row (feature) removed from the
   * feature table selection.
   * @property {module:esri/Graphic[]} removed.relatedRecords - (Currently not implemented). If
   * applicable, an array of related {@link module:esri/Graphic features} associated with the
   * row (feature) removed from the feature table selection.
   *
   * @see [Sample - FeatureTable widget with a map](../sample-code/widgets-featuretable-map/index.html)
   * @see [Sample - FeatureTable with editing enabled](../sample-code/widgets-featuretable-editing/index.html)
   * @see [Sample - FeatureTable with popup interaction](../sample-code/widgets-featuretable-popup-interaction/index.html)
   *
   * @example
   * // This function will fire each time a row (feature) is either added
   * // or removed from the feature table's selection
   * featureTable.on("selection-change", (event) => {
   *   let addedRows = event.added; // An array of features added to the selection
   *   let removedRows = event.removed;  // An array of features removed from the selection
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
   * // Typical usage for FeatureTable widget. This will recognize all fields in the layer if none are set.
   * const featureTable = new FeatureTable({
   *   view: view, // The view property must be set for the select/highlight to work
   *   layer: featureLayer,
   *   container: "tableDiv"
   * });
   *
   */
  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    const loadMessages = async (): Promise<void> =>
      (this.messages = await fetchMessageBundle("esri/widgets/FeatureTable/t9n/FeatureTable"));

    loadMessages();

    this.handles.add([
      onLocaleChange(loadMessages),
      watchUtils.on(this, "grid.selectedItems", "change", (event) =>
        this._onSelectionChange(event as CollectionChangeEvent)
      ),
      watchUtils.watch(
        this,
        ["viewModel.store.querying", "viewModel.store.syncing", "grid.size"],
        () => this.scheduleRender()
      ),
      watchUtils.on(this, "viewModel.columns", "change", () => this._updateMenuItems()),
      watchUtils.watch(this, "menuConfig", () => this._syncMenuConfig()),
      watchUtils.watch(this, "messages", () => {
        this.menu.label = this.messages?.options;
        this._updateMenuItems();
      })
    ]);

    this._set(
      "menu",
      new ButtonMenu({
        label: this.messages?.options,
        iconClass: CSS.menuIcon,
        ...this.menuConfig
      })
    );

    const { attachmentsEnabled, relatedRecordsEnabled } = this;

    this.viewModel?.store?.set({
      attachmentsEnabled,
      relatedRecordsEnabled
    });
  }

  destroy(): void {
    this.clearSelection();
    this.handles.removeAll();
    this.menu?.destroy();
  }

  //--------------------------------------------------------------------------
  //
  // Type definitions
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  // ButtonMenuConfig typedef
  //
  //--------------------------------------------------------------------------

  /**
   * The configurable options to customize either the feature table or {@link module:esri/widgets/FeatureTable/FieldColumn column} menu via the [menuConfig](#menuConfig)
   * property.
   *
   * @typedef module:esri/widgets/FeatureTable~ButtonMenuConfig
   *
   * @property {HTMLElement} [container] - The DOM Element containing the menu.
   * @property {boolean} [iconClass] - Adds a CSS class to the menu button's DOM node.<br></br>
   * ![menu items iconClass](../assets/img/apiref/widgets/featuretable/button-menu-icon-class.png)
   * @property {module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem[]} [items] - An array of {@link module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem ButtonMenuItems}.
   * The following image shows the default menu with two additional items.<br></br>
   * ![ButtonMenuItems array](../assets/img/apiref/widgets/featuretable/custom-menu-items.png)
   * @property {boolean} [open] - Indicates if the menu content is visible. Default is `false`.
   * @property {module:esri/widgets/FeatureTable/Grid/support/ButtonMenuViewModel} [viewModel] - The associated viewModel for the {@link module:esri/widgets/FeatureTable/Grid/support/ButtonMenu}.
   *
   * @see [menuConfig](#menuConfig)
   * @see [FieldColumn.menuConfig](../api-reference/esri-widgets-FeatureTable-FieldColumn.html#menuConfig)
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenu
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuViewModel
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem
   */

  //--------------------------------------------------------------------------
  //
  // ButtonMenuItemConfig typedef
  //
  //--------------------------------------------------------------------------

  /**
   * The configurable options to customize either the feature table or column menu via the [menuConfig](#menuConfig)
   * item property.
   *
   * @typedef module:esri/widgets/FeatureTable~ButtonMenuItemConfig
   *
   * @property {boolean} [autoCloseMenu] - Indicates whether to automatically close the menu's item.
   * @property {module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem~ButtonMenuItemClickFunction} [clickFunction] - A function that executes on the ButtonMenuItem's `click` event.
   * @property {string} [iconClass] - Adds a CSS class to the menu button's DOM node.
   * @property {module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem[]} [items]- An array of individual menu items.
   * @property {string} [label] - The label of the menu item. This can be used in conjunction with the [iconClass](#iconClass) property.
   * @property {boolean} [open] - Indicates if the menu content is visible.
   * @property {boolean} [selectionEnabled] - Indicates whether a toggled state should be applied to individual menu items.
   * @property {boolean} [selected] - Indicates whether the menu item is selected.
   *
   * @see {@link module:esri/widgets/FeatureTable/FieldColumn#getMenuItems FieldColumn.getMenuItems()}
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenu
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuViewModel
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem
   * @see module:esri/widgets/FeatureTable/Grid/Column
   */

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
   * @property {boolean} [selectionColumn] - Indicates whether to display the selection column in the table. Each row has a checkbox that selects its corresponding feature.
   * @property {Object} [menuItems] - The menu items within the feature table menu.
   * This image shows the individual items within the widget's menu.
   *
   * ![featuretable widget menu items](../assets/img/apiref/widgets/featuretable/menuitems.png)
   * @property {boolean} [menuItems.clearSelection] - Indicates whether to display the `Clear selection` menu item. Default value is `true`.
   * @property {boolean} [menuItems.refreshData] - Indicates whether to display the `Refresh data` menu item. Default value is `true`.
   * @property {toggleColumns} [menuItems.toggleColumns] - Indicates whether to enable toggling column visibility within the menu. Default value is `true`.
   */

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

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
   * ![featuretable attachmentsEnabled](../assets/img/apiref/widgets/featuretable/attachments-enabled.png)
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
  //  columnReorderingEnabled - virtual doc from GridVM
  //----------------------------------

  /**
   * When `true`, columns can be reordered by dragging a column's header.
   *
   * @name columnReorderingEnabled
   * @type {boolean}
   * @default true
   * @instance
   * @since 4.16
   */

  //----------------------------------
  //  columns
  //----------------------------------

  /**
   * A collection of {@link module:esri/widgets/FeatureTable/Grid/Column columns} within the table.
   *
   * @name columns
   * @type {module:esri/core/Collection<module:esri/widgets/FeatureTable/FieldColumn>}
   * @autocast { "value": "Object[]" }
   * @instance
   * @since 4.16
   */
  @aliasOf("viewModel.columns")
  readonly columns: Collection<Column> = new Collection();

  //----------------------------------
  //  editingEnabled
  //----------------------------------

  /**
   * Indicates whether editing is enabled on the data within the feature table. Double-clicking in
   * a cell will enable editing for that value.
   *
   * Editing permissions can be broken down with the following levels of priority:
   *
   * 1. {@link module:esri/layers/support/Field Field} - This is derived
   * from the {@link module:esri/layers/FeatureLayer}. It takes what is set in the
   * {@link module:esri/layers/support/Field#editable Field.editable} property. This
   * must always be `true` for editing to be enabled. This can be overriden using a
   * {@link module:esri/widgets/FeatureTable/FieldColumnConfig field column configuration}.
   * 2. {@link module:esri/widgets/FeatureTable/FieldColumnConfig Config} - The editable
   * permissions on a field can be configured by setting the
   * {@link module:esri/widgets/FeatureTable/FieldColumnConfig#editable editable} property
   * of the {@link module:esri/widgets/FeatureTable/FieldColumnConfig}.
   * 3. {@link module:esri/widgets/FeatureTable} - The {@link module:esri/widgets/FeatureTable#editingEnabled editingEnabled}
   * property must be set on the table in order for any type of editing to be enabled.
   *
   * For example, if table editing is disabled in the widget, i.e. `enableEditing` is not set,
   * it is still possible to enable editing for a specific column by setting the
   * {@link module:esri/widgets/FeatureTable/FieldColumnConfig#editable editable} property. Vice versa
   * is also true, if table editing is enabled, a field configuration can be used to disable editing
   * for a specific column.
   *
   * ::: esri-md class="panel trailer-1"
   * Ultimately, if the service's field is not editable, it is not possible to override its permissions
   * using one of the options above.
   * :::
   *
   * ![featuretable editing](../assets/img/apiref/widgets/featuretable/editing.png)
   *
   * @name editingEnabled
   * @type {boolean}
   * @instance
   * @default false
   * @since 4.16
   * @see [Sample - FeatureTable with editing enabled](../sample-code/widgets-featuretable-editing/)
   *
   */
  @aliasOf("viewModel.editingEnabled")
  editingEnabled: boolean = null;

  //----------------------------------
  //  fieldConfigs
  //----------------------------------

  /**
   * An array of individual field configuration objects. This is where you can specify what fields to
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
   * @autocast
   *
   */
  @aliasOf("viewModel.fieldConfigs")
  fieldConfigs: FieldConfig[] = null;

  //----------------------------------
  //  filterGeometry
  //----------------------------------

  /**
   *
   * Set this property to filter the features displayed in the table. It accepts a {@link module:esri/geometry/Geometry}, e.g. {@link module:esri/geometry/Extent}, and uses it as a spatial filter. When modifying this property, the FeatureTable will completely refresh and re-query for all features.
   *
   * @name filterGeometry
   * @instance
   * @type {module:esri/geometry/Geometry}
   * @since 4.19
   * @autocast
   *
   * @see [Sample - FeatureTable widget using a map](../sample-code/widgets-featuretable-map/index.html)
   *
   * @example
   * // Filter the table to only display the associated feature(s) that fall within the filterGeometry's geometry, (e.g. Extent)
   * featureLayer.watch("loaded", () => {
   *   watchUtils.whenFalse(view, "updating", () => {
   *     // Get the new extent of view/map whenever map is updated
   *     if (view.extent) {
   *       // Filter and show only the visible features in the feature table
   *       featureTable.filterGeometry = view.extent;
   *     }
   *   });
   * });
   *
   */
  @aliasOf("viewModel.filterGeometry")
  filterGeometry: Geometry = null;

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
  //  highlightOnRowSelectEnabled
  //----------------------------------
  /**
   * Indicates whether to highlight the associated feature when a row is selected.
   *
   * @name highlightOnRowSelectEnabled
   * @type {boolean}
   * @instance
   * @default true
   * @since 4.16
   *
   */

  @aliasOf("viewModel.highlightOnRowSelectEnabled")
  highlightOnRowSelectEnabled: boolean = true;

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
  //  layer
  //----------------------------------

  /**
   *
   * The associated {@link module:esri/layers/FeatureLayer}, {@link module:esri/layers/SceneLayer}, {@link module:esri/layers/GeoJSONLayer}, {@link module:esri/layers/CSVLayer}, {@link module:esri/layers/ImageryLayer}, or {@link module:esri/layers/WFSLayer} containing the fields and
   * attributes to display within the widget.
   * The table's pagination defaults to `50` records at a time. If the layer contains less than 50 records, it will use whatever
   * count it has. Note that 0 records do not apply.
   *
   * ::: esri-md class="panel trailer-1"
   * - Support for {@link module:esri/layers/GeoJSONLayer}, {@link module:esri/layers/CSVLayer}, {@link module:esri/layers/ImageryLayer}, and {@link module:esri/layers/WFSLayer} was added at version 4.21.
   * - For an {@link module:esri/layers/ImageryLayer} to work with FeatureTable, it must have mosaic dataset. Currently, `Map` and `FeatureTable` interaction with `ImageryLayers` is not supported.
   * :::
   *
   * @name layer
   * @type {module:esri/layers/FeatureLayer|module:esri/layers/SceneLayer|module:esri/layers/GeoJSONLayer|module:esri/layers/CSVLayer|module:esri/layers/WFSLayer|module:esri/layers/ImageryLayer}
   * @instance
   *
   */
  @aliasOf("viewModel.layer")
  layer: FeatureTableSupportedLayers = null;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle.
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")
  messages: FeatureTableMessages = null;

  //----------------------------------
  //  menu
  //----------------------------------

  /**
   * Reference to the FeatureTable's primary menu.
   *
   * :::esri-md class="panel trailer-1"
   * The menu's items are regenerated when a column's visibility changes. Use the FeatureTable's [menuConfig](#menuConfig) and {@link module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem menuConfig.items} to customize menu items. These options are recommended, rather than updating The table's `items` directly off of its `menu`. This helps ensure the menu always shows the correct items.
   * :::
   *
   * @name menu
   * @type {module:esri/widgets/FeatureTable/Grid/support/ButtonMenu}
   * @instance
   * @since 4.19
   * @readonly
   *
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuViewModel
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem
   *
   */
  @property({
    readOnly: true
  })
  readonly menu: ButtonMenu = null;

  //----------------------------------
  //  menuConfig
  //----------------------------------

  /**
   * Set this object to customize the feature table's menu content.
   *
   * ![default and custom feature table menus](../assets/img/apiref/widgets/featuretable/combined-menu-items.jpg)
   *
   * @name menuConfig
   * @type {module:esri/widgets/FeatureTable~ButtonMenuConfig}
   * @instance
   * @since 4.16
   *
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenu
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuViewModel
   * @see module:esri/widgets/FeatureTable/Grid/support/ButtonMenuItem
   * @see [Sample - FeatureTable with editing enabled](../sample-code/widgets-featuretable-editing/index.html)
   *
   */
  @property()
  menuConfig: ButtonMenuConfig = null;

  //----------------------------------
  //  pageSize
  //----------------------------------

  /**
   * The default page size used when displaying features within the table. By default, the page loads the first 50 features returned by the service.
   *
   * ::: esri-md class="panel trailer-1"
   * It is not possible to overwrite the maximum page size on the server, ie. `maxRecordCount`, as this property only applies to set values less than the maximum page size, i.e. `maxRecordCount`, set on the service.
   * :::
   *
   * @name pageSize
   * @instance
   * @type {number}
   * @since 4.19
   * @default 50
   * @see [ArcGIS REST API - FeatureLayer - maxRecordCount](https://developers.arcgis.com/rest/services-reference/feature-layer.htm)
   *
   */
  @aliasOf("viewModel.pageSize")
  pageSize = 50;

  //----------------------------------
  //  relatedRecordsEnabled
  //----------------------------------

  /**
   *
   * Indicates whether to display any related records associated with rows within the table.
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
   * @name state
   * @type {"disabled" | "loading" | "ready"}
   * @instance
   * @default
   *
   */
  @aliasOf("viewModel.state")
  state: State;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView}. This property must be set for select/highlighting in the map to work.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView}
   *
   */
  @aliasOf("viewModel.view")
  view: IMapView | ISceneView = null;

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
  override viewModel = new FeatureTableViewModel();

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
   *    },
   *    selectionColumn: false
   * }
   */
  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    const elements = { ...DEFAULT_VISIBLE_ELEMENTS, ...value };

    // Sync selection column visibility between widgets
    this.grid?.set("visibleElements", {
      ...this.grid.visibleElements,
      selectionColumn: elements.selectionColumn
    });

    return elements;
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  clearHighlights
  //----------------------------------

  /**
   * This clears any highlighted features. Take note that the associated rows are not deselected.
   *
   * @method clearHighlights
   * @instance
   * @since 4.16
   *
   */
  @aliasOf("viewModel.clearHighlights")
  clearHighlights(): void {}

  //----------------------------------
  //  clearSelection
  //----------------------------------

  /**
   * Clears the current selection within the table.
   *
   * @method clearSelection
   * @instance
   * @since 4.16
   *
   */
  @aliasOf("viewModel.clearSelection")
  clearSelection(): void {}

  //----------------------------------
  //  deselectRows
  //----------------------------------

  /**
   * Unselects the specified rows within the table.
   *
   * @method deselectRows
   * @instance
   * @since 4.16
   * @see [Sample - FeatureTable with popup interaction](../sample-code/widgets-featuretable-popup-interaction/index.html)
   *
   * @param {number | module:esri/Graphic | Array<number | module:esri/Graphic>} params - The
   * selection parameters to deselect within the feature table.
   *
   */
  @aliasOf("viewModel.deselectRows")
  deselectRows(): void {}

  //----------------------------------
  //  findColumn - virtual doc from GridVM
  //----------------------------------

  /**
   * Finds the specified column within the feature table.
   *
   * @method findColumn
   * @instance
   * @since 4.16
   *
   * @param {string} fieldName - The `fieldName` of the column to find.
   *
   * @return {module:esri/widgets/FeatureTable/FieldColumn} The returned {@link module:esri/widgets/FeatureTable/FieldColumn column} from the table.
   */

  //----------------------------------
  //  hideColumn
  //----------------------------------

  /**
   * Hides the specified column from the feature table.
   *
   * @method hideColumn
   * @instance
   * @since 4.16
   *
   * @param {string} fieldName - The `fieldName` of the column to hide.
   *
   */
  hideColumn(fieldName: string): void {
    this.grid?.hideColumn(fieldName);
    this._updateMenuItems();
  }

  //----------------------------------
  //  refresh
  //----------------------------------

  /**
   *
   * Refreshes the table contents.
   *
   * @method refresh
   * @instance
   * @since 4.16
   *
   */
  @aliasOf("viewModel.refresh")
  refresh(): void {}

  //----------------------------------
  //  showAllColumns - virtual doc from GridVM
  //----------------------------------

  /**
   * Shows all the columns in the table.
   *
   * @method showAllColumns
   * @instance
   * @since 4.16
   *
   */

  //----------------------------------
  //  showColumn - virtual doc from GridVM
  //----------------------------------

  /**
   * Shows the specified column within the feature table.
   *
   * @method showColumn
   * @instance
   * @since 4.16
   *
   * @param {string} fieldName - The `fieldName` of the column to show.
   *
   */
  showColumn(fieldName: string): void {
    this.grid?.showColumn(fieldName);
    this._updateMenuItems();
  }

  //----------------------------------
  //  sortColumn
  //----------------------------------

  /**
   * Sorts the column.
   *
   * * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * asc | Sorts the column in ascending order.
   * desc | Sorts the column in descending order.
   *
   * @method sortColumn
   * @instance
   * @since 4.16
   *
   * @param {string} path - The specified field name to sort.
   * @param {"asc" | "desc"} direction - The direction to sort.
   *
   */
  @aliasOf("viewModel.sortColumn")
  sortColumn(): void {}

  //----------------------------------
  //  selectRows
  //----------------------------------

  /**
   * Selects the specified rows within the table.
   *
   * @method selectRows
   * @instance
   * @since 4.16
   * @see [Sample - FeatureTable with popup interaction](../sample-code/widgets-featuretable-popup-interaction/index.html)
   *
   * @param {number | module:esri/Graphic | Array<number | module:esri/Graphic>} params - The
   * selection parameters to select within the feature table.
   *
   */
  @aliasOf("viewModel.selectRows")
  selectRows(): void {}

  //----------------------------------
  //  scrollToIndex
  //----------------------------------

  /**
   *
   * Scrolls the table to a row based on specified index.
   *
   * @method scrollToIndex
   * @instance
   * @since 4.19
   *
   */
  @aliasOf("viewModel.scrollToIndex")
  scrollToIndex(): void {}

  //----------------------------------
  //  render
  //----------------------------------

  /**
   *
   * @method render
   * @instance
   * @ignore
   *
   */
  override render(): VNode {
    return (
      <div bind={this} class={this.classes(CSS.base, CSS.widget)}>
        {this.visibleElements.header ? this._renderHeader() : null}
        <div class={CSS.content}>{this.state !== "disabled" && this.grid?.render()}</div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderHeader(): VNode {
    return (
      <div key="header" class={CSS.header}>
        {this._renderLoader()}
        {this._renderTitle()}
        {this.visibleElements.menu ? this._renderMenu() : null}
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
      messages,
      viewModel: { size: count }
    } = this;

    if (!grid) {
      return "";
    }

    return substitute(messages.header, {
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
    return <div class={CSS.menuContainer}>{this.menu.render()}</div>;
  }

  //--------------------------------------------------------------------------
  //  Events
  //--------------------------------------------------------------------------

  private _onSelectionChange(event: CollectionChangeEvent): void {
    const { added, removed } = event;

    this.emit("selection-change", {
      added: [...added] as FeatureData[],
      removed: [...removed] as FeatureData[]
    });
  }

  private _syncMenuConfig(): void {
    this.menu?.set({ ...this.menuConfig, items: this._getMenuItems() });
  }

  private _updateMenuItems(): void {
    this.menu?.set("items", this._getMenuItems());
  }

  private _getMenuItems(): ButtonMenuItem[] {
    const configItems = this.menuConfig?.items;
    const defaultItems = this._getDefaultMenuItems();
    const items = [];

    defaultItems?.length && items.push(...defaultItems);
    configItems?.length && items.push(...configItems);

    return items;
  }

  private _getDefaultMenuItems(): ButtonMenuItem[] {
    const { messages, viewModel, visibleElements } = this;
    const { menuItems } = visibleElements;
    const items = [];

    menuItems?.clearSelection &&
      items.push(
        new ButtonMenuItem({
          selectionEnabled: false,
          label: messages?.clearSelection,
          clickFunction: () => this.clearSelection()
        })
      );

    menuItems?.refreshData &&
      items.push(
        new ButtonMenuItem({
          selectionEnabled: false,
          label: messages?.refreshData,
          clickFunction: () => this.refresh()
        })
      );

    menuItems?.toggleColumns &&
      items.push(
        new ButtonMenuItem({
          iconClass: CSS.menuItemGroupClosedIcon,
          label: messages?.toggleColumns,
          clickFunction: this._toggleMenuItemSelectedIcon,
          items: viewModel?.columns?.items.map(
            ({ header, hidden, path }) =>
              new ButtonMenuItem({
                label: header || path,
                selected: !hidden,
                selectionEnabled: true,
                iconClass: CSS.checkmarkIcon,
                clickFunction: () => this._toggleColumnFromMenuItem(path)
              })
          )
        })
      );

    return items.length ? items : null;
  }

  private _toggleMenuItemSelectedIcon({ item }: ButtonMenuItemClickFunctionParams): void {
    item?.set(
      "iconClass",
      item?.selected ? CSS.menuItemGroupOpenedIcon : CSS.menuItemGroupClosedIcon
    );
  }

  private _toggleColumnFromMenuItem(path: string): void {
    const { grid, viewModel } = this;
    const column = viewModel.findColumn(path);

    if (column?.hidden) {
      grid.showColumn(path);
    } else {
      grid.hideColumn(path);
    }
  }
}

export default FeatureTable;
