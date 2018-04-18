/**
 * The Directions Widget provides a way to build driving and walking directions using ArcGIS online and custom
 * Network Analysis Route services. Similar to how the {@link module:esri/tasks/RouteTask} works, this widget
 * generates a route finding a least-cost path between multiple points using a specified network. The resulting
 * directions are displayed with detailed turn-by-turn instructions.
 *
 * The widget wraps pre-built search functionality directly within it so all you need to do is reference the widget
 * within your application. The routing service defaults to the [Esri World Route service](http://www.arcgis.com/home/item.html?id=1feb41652c5c4bd2ba5c60df2b4ea2c4).
 * This is a subscription based service available through ArcGIS Online. You can use this default
 * or specify your own ArcGIS Server route service. Please see the
 * [routeServiceUrl](#routeServiceUrl) property.
 *
 * Any types of customizations made to the underlying functionality of the widget should be handled via its [viewModel](#viewModel) property.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * The Directions widget is currently in its beta release. It should be noted that it is not yet
 * at full parity with the functionality provided in the [3.x version of the Directions widget](../../3/jsapi/directions-amd.html)
 * and is subject to change.
 * :::
 *
 * @example
 * var directionsWidget = new Directions({
 *   view: view
 * });
 * // Adds the Directions widget below other elements in
 * // the top right corner of the view
 * view.ui.add(directionsWidget, {
 *   position: "top-right",
 *   index: 2
 * });
 *
 * @module esri/widgets/Directions
 * @since 4.6
 * @beta
 *
 * @see module:esri/widgets/Directions/DirectionsViewModel
 * @see [Directions.js]({{ JSAPI_BOWER_URL }}/widgets/Directions.js)
 * @see [Directions.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Directions.scss)
 * @see [Guide topic - Proxy pages](../guide/proxies/index.html)
 * @see [Sample - Directions widget](../sample-code/widgets-directions/index.html)
 *
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="../core/tsSupport/assignHelper" name="__assign" />

// dojo
import * as i18nCommon from "dojo/i18n!../nls/common";
import * as i18n from "dojo/i18n!./Directions/nls/Directions";

// esri
import Graphic = require("../Graphic");
import moment = require("../moment");

// esri.core
import Collection = require("../core/Collection");
import Handles = require("../core/Handles");
import { PausableHandle } from "../core/interfaces";
import { substitute } from "../core/lang";
import { on, pausable } from "../core/on";
import { init, when, whenOnce } from "../core/watchUtils";

// esri.core.accessorSupport
import {
  aliasOf,
  declared,
  property,
  subclass
} from "../core/accessorSupport/decorators";

// esri.symbols
import Symbol = require("../symbols/Symbol");

// esri.views
import MapView = require("../views/MapView");
import SceneView = require("../views/SceneView");

// esri.widgets
import { SearchProperties, SearchResponse, SearchResult, SearchResults } from "./interfaces";
import Search = require("./Search");
import Widget = require("./Widget");

// esri.widgets.Directions
import DirectionsViewModel = require("./Directions/DirectionsViewModel");

// esri.widgets.Directions.support
import CostSummary = require("./Directions/support/CostSummary");
import DatePicker = require("./Directions/support/DatePicker");

import {
  formatDistance, formatTime,
  getAssociatedStop,
  toSpatiallyLocalTimeString,
  useSpatiallyLocalTime
} from "./Directions/support/directionsUtils";


import {
  Maneuver,
  PlaceholderStop,
  StopSymbols
} from "./Directions/support/interfaces";

import { toIconName } from "./Directions/support/maneuverUtils";
import RouteSections = require("./Directions/support/RouteSections");
import TimePicker = require("./Directions/support/TimePicker");

// esri.widgets.support
import { accessibleHandler, join, renderable, tsx } from "./support/widget";

const NOW = "now";
const DEPART_BY = "depart-by";

const CSS = {
  base: "esri-directions esri-widget esri-widget--panel",
  button: "esri-directions__button",
  scroller: "esri-directions__scroller",
  panelContent: "esri-directions__panel-content",
  panelContentLoading: "esri-directions__panel-content--loading",
  panelContentError: "esri-directions__panel-content--error",
  loader: "esri-directions__loader",
  message: "esri-directions__message",
  travelModeSelect: "esri-directions__travel-modes-select",
  departureTime: "esri-directions__departure-time",
  departureTimeSelect: "esri-directions__departure-time-select",
  directionsSection: "esri-directions__directions-section",
  departureTimeControls: "esri-directions__departure-time-controls",
  section: "esri-directions__section",
  summary: "esri-directions__summary",
  stopIcon: "esri-directions__stop-icon",
  interactiveStopIcon: "esri-directions__stop-icon--interactive",
  removeStopButton: "esri-directions__remove-stop",
  removeStop: "esri-directions__remove-stop-icon",
  reverseStops: "esri-directions__reverse-stops",
  stopIconContainer: "esri-directions__stop-icon-container",
  lastStopIconContainer: "esri-directions__stop-icon-container--last",
  stopHandle: "esri-directions__stop-handle",
  stopInput: "esri-directions__stop-input",
  stopOptions: "esri-directions__stop-options",
  stopUnderline: "esri-directions__stop-underline",
  underlineDragInProcess: "esri-directions__stop-underline--drag-in-process",
  stopHandleIcon: "esri-directions__stop-handle-icon",
  verticalSplitter: "esri-directions__vertical-splitter",
  stopRow: "esri-directions__stop-row",
  stopRowGhost: "esri-directions__stop-row-ghost",
  stopRowDragged: "esri-directions__stop-row--dragged",
  stopRowDropTarget: "esri-directions__stop-row--target",
  validStopRow: "esri-directions__stop-row--valid",
  stops: "esri-directions__stops",
  addStop: "esri-directions__add-stop",
  addStopText: "esri-directions__add-stop-text",
  directionCosts: "esri-directions__costs",
  costsDetails: "esri-directions__costs-details",
  primaryCosts: "esri-directions__costs-value",
  secondaryCosts: "esri-directions__other-costs-total",
  maneuvers: "esri-directions__maneuvers",
  maneuverList: "esri-directions__maneuver-list",
  maneuverSection: "esri-directions__maneuver-section",
  maneuverSectionHeader: "esri-directions__maneuver-section-header",
  maneuverSectionHeaderButton: "esri-directions__maneuver-section-header-toggle-button",
  maneuverSectionTitle: "esri-directions__maneuver-section-title",
  collapsibleSection: "esri-directions__maneuver-section--collapsible",
  maneuverSectionToggle: "esri-directions__maneuver-section-toggle",
  maneuver: "esri-directions__maneuver",
  maneuverActive: "esri-directions__maneuver--active",
  maneuverCosts: "esri-directions__maneuver-costs",
  maneuverCostsContainer: "esri-directions__maneuver-costs-container",
  maneuverIcon: "esri-directions__maneuver-icon",
  cumulativeCost: "esri-directions__cost--cumulative",
  intermediateCost: "esri-directions__cost--intermediate",
  horizontalSplitter: "esri-directions__horizontal-splitter",
  sectionSplitter: "esri-directions__section-splitter",
  disclaimer: "esri-directions__disclaimer",

  // icons
  stopsIcon: "esri-icon-radio-unchecked",
  lastStopIcon: "esri-icon-radio-checked",
  handleIcon: "esri-icon-handle-vertical",
  addStopIcon: "esri-icon-plus",
  removeStopIcon: "esri-icon-close",
  reverseStopIcon: "esri-icon-up-down-arrows",
  openIcon: "esri-icon-right-triangle-arrow",
  closeIcon: "esri-icon-down-arrow",
  widgetIcon: "esri-icon-directions",

  // common
  emptyContent: "esri-widget__content--empty",
  offscreen: "esri-offscreen",
  select: "esri-select",
  screenReaderText: "esri-icon-font-fallback-text"
};

const REGISTRY_KEYS = {
  awaitingViewClickStop: "awaiting-view-click-stop"
};

const DEFAULT_STOPS: PlaceholderStop[] = [{}, {}];

const MANEUVER_ICON_DIR = require.toUrl("../themes/base/images/maneuvers/");

function getFirstResult(response: SearchResponse<SearchResults<SearchResult>>): SearchResult {
  return response.results[0].results[0];
}

const defaultDelayInMs = 100;
const viewClickDelayInMs = 500;

@subclass("esri.widgets.Directions")
class Directions extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Directions
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(params?: any) {
    super();
  }

  postInitialize() {
    this.own([
      init(this, "viewModel.lastRoute", () => {
        this._routeSections.routePath = this.get<Graphic[]>("viewModel.directionLines");
        this._activeManeuver = null;
        this._focusedManeuver = null;
        this.scheduleRender();
      }),

      init(this, "viewModel.selectedTravelMode, viewModel.departureTime", () => {
        if (this.get("viewModel.stops.length") > 1) {
          this.getDirections();
        }
      }),

      when<MapView | SceneView>(this, "view", (value, oldValue) => {
        if (oldValue) {
          this._viewClickHandle = null;
          this._handles.remove(oldValue);
        }

        if (value) {
          const viewClickHandle = this._prepViewClick();

          this._handles.add([
              on(value.surface, "mousedown", () => this._autoStopRemovalDelay = viewClickDelayInMs),
              on(value.surface, "mouseup", () => this._autoStopRemovalDelay = defaultDelayInMs),
              viewClickHandle
            ],
            this.view.surface
          );

          this._viewClickHandle = viewClickHandle;
        }
      }),

      whenOnce(this, "routeServiceUrl", () => this.viewModel.load())
    ]);
  }

  destroy() {
    this._datePicker.destroy();
    this._timePicker.destroy();

    this._stopsToSearches.forEach(search => search.destroy());
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeStop: PlaceholderStop;

  private _activeManeuver: Maneuver;

  private _autoStopRemovalDelay: number = defaultDelayInMs;

  private _autoStopRemovalTimeoutId: number;

  private _costSummary = new CostSummary();

  private _departureTime: "now" | "depart-by" = NOW;

  private _datePicker: DatePicker = new DatePicker();

  private _draggedStopIndex: number;

  private _dropTargetStopIndex: number;

  private _focusedManeuver: Maneuver;

  private _handles = new Handles();

  private _ghost: HTMLElement;

  private _newPlaceholderStop: PlaceholderStop = null;

  private _previousCursor: string;

  private _routeSections: RouteSections = new RouteSections();

  private _stops: Collection<PlaceholderStop> = new Collection(DEFAULT_STOPS);

  private _stopsToSearches = new Map<PlaceholderStop, Search>();

  private _timePicker: TimePicker = new TimePicker();

  private _viewClickHandle: PausableHandle;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default icon font.
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
  //  maxStops
  //----------------------------------

  /**
   * The maximum number of stops allowed for routing.
   *
   * @name maxStops
   * @type {number}
   * @instance
   * @default 50
   */
  @aliasOf("viewModel.maxStops")
  maxStops: number = null;

  //----------------------------------
  //  routeServiceUrl
  //----------------------------------

  /**
   * The URL of the REST endpoint of the Route service.
   *
   * @name routeServiceUrl
   * @instance
   * @type {string}
   * @default "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
   * @autocast
   */
  @aliasOf("viewModel.routeServiceUrl")
  routeServiceUrl: string = null;

  //----------------------------------
  //  routeSymbol
  //----------------------------------

  /**
   * Defines the symbol used to draw the route on the map.
   *
   * @name routeSymbol
   * @instance
   * @type {module:esri/symbols/SimpleLineSymbol}
   */

  @aliasOf("viewModel.routeSymbol")
  routeSymbol: Symbol = null;

  //----------------------------------
  //  searchProperties
  //----------------------------------

  /**
   * Controls the default properties used when {@link module:esri/widgets/Search searching}.
   * Note that the default `searchProperties` differ slightly from
   * the {@link module:esri/widgets/Search Search widget}.
   *
   * @name searchProperties
   * @instance
   * @type {module:esri/widgets/Directions~SearchProperties}
   * @default null
   *
   */

  @property()
  searchProperties: SearchProperties = null;

  ////////////////////////////////////////////////////////////
  //
  // Type definitions
  //
  ////////////////////////////////////////////////////////////

  /**
   * Configurable Search properties of the widget.
   *
   * @typedef SearchProperties
   *
   * @property {number} [activeSourceIndex] - Number index indicating the current selected source.
   * @property {string} [allPlaceholder] - String value used as a hint for input text when searching on multiple sources.
   * @property {boolean} [autoNavigate=true] - Indicates whether to automatically navigate to the selected result once selected.
   * @property {boolean} [autoSelect] - Indicates whether to automatically select and zoom to the first geocoded result.
   * @property {number} [maxResults=6] - Indicates the maximum number of search results to return.
   * @property {number} [maxSuggestions=6] - Indicates the maximum number of suggestions to return for the widget's input.
   * @property {number} [minSuggestCharacters=1] - Indicates the minimum number of characters required before querying for a suggestion.
   * @property {boolean} [popupEnabled=false] - Indicates whether to display a {@link module:esri/widgets/Popup Popup} when a selected result is clicked.
   * @property {boolean} [popupOpenOnSelect=true] - Indicates whether to show the {@link module:esri/widgets/Popup Popup} when a result is selected.
   * @property {module:esri/PopupTemplate} [popupTemplate] - A customized PopupTemplate for the selected feature.
   * @property {boolean} [resultGraphicEnabled=false] - Indicates whether to show a graphic on the map for the selected source.
   * @property {boolean} [searchAllEnabled] - Indicates whether to display the option to search all sources.
   * @property {string} [searchTerm] - The value of the search box input text string.
   * @property {module:esri/core/Collection<module:esri/widgets/Search~FeatureLayerSource | module:esri/widgets/Search~LocatorSource>} [sources] - Specifies the sources
   * to search in the [view](#view).
   * @property {boolean} [suggestionsEnabled=true] - Indicates whether to display suggestions as the user enters input text in the widget.
   * @property {module:esri/views/MapView | module:esri/views/SceneView} [view] - The view of the widget.
   * @property {module:esri/widgets/Search/SearchViewModel} [viewModel] - The Search widget's view model.
   */

  //----------------------------------
  //  stopSymbols
  //----------------------------------

  /**
   * The default stop symbols used to display locations between the origin and final destination.
   *
   * @name stopSymbols
   * @instance
   * @type {Object}
   *
   * @property {module:esri/symbols/Symbol} [first] - The first stop symbol.
   * @property {module:esri/symbols/Symbol} [middle] - The middle stop symbol.
   * @property {module:esri/symbols/Symbol} [last] - The last stop symbol.
   * @property {module:esri/symbols/Symbol} [unlocated] - An unlocated stop symbol.
   * @property {module:esri/symbols/Symbol} [waypoint] - A waypoint stop symbol.
   *
   */
  @aliasOf("viewModel.stopSymbols")
  stopSymbols: StopSymbols = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * The view from which the widget will operate.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Directions/DirectionsViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Directions/DirectionsViewModel}
   * @default
   * @autocast
   *
   */
  @renderable([
    "lastRoute",
    "state",
    "travelModes"
  ])
  @property({
    type: DirectionsViewModel
  })
  viewModel: DirectionsViewModel = new DirectionsViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Calculate the route to the input locations and display the list of directions.
   *
   * @method
   *
   * @return {Promise<module:esri/tasks/support/RouteResult>} When resolved, returns an object containing the calculated {@link module:esri/tasks/support/RouteResult}.
   *
   */
  @aliasOf("viewModel.getDirections")
  getDirections(): IPromise<void> { return null; }

  /**
   * Zoom so that the full route is displayed within the current map extent.
   */
  @aliasOf("viewModel.zoomToRoute")
  zoomToRoute(): void { }

  render() {
    return (
      <div class={join(CSS.base, CSS.scroller)}>{
        this._renderPanelContent()
      }</div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderPanelContent(): any {
    const { viewModel: { state, loadStatus } } = this;
    const initializing = state === "initializing";
    const failed = state === "error" && loadStatus === "failed";

    const panelClasses = {
      [CSS.panelContentLoading]: initializing,
      [CSS.panelContentError]: failed
    };

    const role = initializing ? "presentation" : "group";

    const content = failed ? this._renderMessage(i18n.serviceError) :
                    initializing ? this._renderLoader() :
                    this._renderReadyContent();

    return (
      <div class={CSS.panelContent} classes={panelClasses} role={role}>{content}</div>
    );
  }

  private _renderReadyContent(): any {
    return [
      this._renderStopsContainer(),
      this._renderTravelModeOptions(),
      this._renderDepartureTimeControls(),
      this._renderSectionSplitter(),
      this._renderDirectionsContainer(),
      this._renderDisclaimer()
    ];
  }

  private _renderTravelModeOptions(): any {
    const { selectedTravelMode: travelMode, travelModes } = this.viewModel;
    const title = travelMode.name || i18n.travelMode;

    return travelModes.length > 0 ? (
      <select aria-label={title}
              bind={this}
              class={join(CSS.travelModeSelect, CSS.select)}
              key="esri-directions__travel-mode-options"
              onchange={this._handleTravelModeChange}
              title={title}>{
        travelModes.map(mode => {
          const selected = mode.id === travelMode.id;
          return (
            <option key={mode as any}
                    data-mode={mode}
                    selected={selected}
                    value={mode.id}>{mode.name}</option>
          );
        })
      }</select>
    ) : null;
  }

  private _handleTravelModeChange(event: Event): void {
    const select = event.currentTarget as HTMLSelectElement;
    const option = select.item(select.selectedIndex);
    this.viewModel.selectedTravelMode = option["data-mode"];
  }

  private _renderStopsContainer(): any {
    return (
      <div class={CSS.section} key="esri-directions__stops-container" role="group">{this._renderStops()}</div>
    );
  }

  private _renderDepartureTimeControls(): any {
    const startTimeIsNow = this._departureTime === NOW;
    const title = i18n.departureTime;

    return (
      <div class={CSS.departureTime} key="esri-directions__departure-time-controls" role="group">
        <select aria-label={title}
                bind={this}
                class={join(CSS.departureTimeSelect, CSS.select)}
                onchange={this._handleDepartureOptionChange}
                title={title}>
          <option value={NOW}
                  selected={startTimeIsNow}>{i18n.leaveNow}</option>
          <option value={DEPART_BY}
                  selected={!startTimeIsNow}>{i18n.departBy}</option>
        </select>
        {startTimeIsNow ? null : this._renderTimeControls()}
      </div>
    );
  }

  private _renderStops(): any {
    const stops = this._stops;
    const rows: any[] = stops.toArray().map((stop, i) => {
      const numStops = stops.length;
      const newRow = i > 1 && !stop.result;

      const stopIconClasses = {
        [CSS.stopsIcon]: i >= 0 && i < numStops - 1,
        [CSS.lastStopIcon]: i === numStops - 1
      };

      const stopIconContainerClasses = {
        [CSS.lastStopIconContainer]: i === numStops - 1
      };

      const rowClasses = {
        [CSS.stopRowDragged]: this._draggedStopIndex === i,
        [CSS.stopRowDropTarget]: this._dropTargetStopIndex === i,
        [CSS.validStopRow]: !newRow
      };

      const underlineClasses = {
        [CSS.underlineDragInProcess]: !isNaN(this._draggedStopIndex)
      };

      const lastStop = stops.getItemAt(numStops - 1);
      const lastStopIsValid = lastStop && lastStop.result;
      const nextStop = stops.getItemAt(i + 1);
      const nextStopIsValid = nextStop && nextStop.result;
      const isLast = i === numStops - 1;
      const nextIsLast = i === numStops - 2;
      const shouldHideReverseIcon = numStops === 2 && i === 0 ||
        numStops > 2 && !isLast && !nextIsLast ||
        numStops > 2 && nextIsLast && nextStopIsValid ||
        numStops > 2 && isLast && !stop.result;
      const shouldHideClearIcon = numStops === 2 ||
        numStops === 3 && !lastStopIsValid ||
        newRow;
      const draggable = newRow ? "false" : "true";

      const search = this._acquireSearch(stop);

      const { removeStop: removeStopTitle, reverseStops: reverseStopsTitle, unlocated } = i18n;
      const label = substitute({ number: i + 1, label: (stop.result ? stop.result.name : unlocated) }, i18n.stopLabelTemplate);
      const stopListItemId = `${this.id}__stop--${i}`;

      const centerOnStopEnabled = !!search.searchTerm &&
        !!search.selectedResult && !!stop.result &&
        search.selectedResult === stop.result;

      return (
        <li aria-label={label}
            afterCreate={this._handleStopFieldCreation}
            bind={this}
            class={CSS.stopRow}
            classes={rowClasses}
            id={stopListItemId}
            key={i}
            data-stop-index={i}
            ondragend={this._handleStopFieldDragEnd}
            ondragover={this._handleStopFieldDragOver}
            ondragstart={this._handleStopFieldDragStart}
            ondrop={this._handleStopFieldDrop}>
          <div class={CSS.stopHandle} draggable={draggable}>
            <span aria-hidden="true" class={join(CSS.stopIcon, CSS.handleIcon, CSS.stopHandleIcon, CSS.interactiveStopIcon)} />
            <div bind={this}
                 aria-labelledby={stopListItemId}
                 class={CSS.stopIconContainer}
                 classes={stopIconContainerClasses}
                 data-stop-index={i}
                 onclick={this._handleStopIconClick}
                 onkeydown={this._handleStopIconClick}
                 role="button">
              {
                /* tab index on icon to prevent weird focus outline */
                /* `tabindex` used to remove attribute from DOM; node is still focusable via click with `tabIndex` */
              }
              <span class={CSS.stopIcon} classes={stopIconClasses} tabindex={centerOnStopEnabled ? "0" : null} />
            </div>
          </div>
          <div class={CSS.stopInput}>
            {search.render()}
            <div class={CSS.stopUnderline} classes={underlineClasses}/>
          </div>
          <div class={CSS.stopOptions} role="group">
            <div aria-label={removeStopTitle}
                 class={CSS.removeStopButton}
                 bind={this}
                 data-stop-index={i}
                 hidden={shouldHideClearIcon}
                 onkeydown={this._handleRemoveStop}
                 onclick={this._handleRemoveStop}
                 role="button"
                 tabIndex={0}
                 title={removeStopTitle}>
              <span aria-hidden="true" class={join(CSS.stopIcon, CSS.removeStop, CSS.removeStopIcon, CSS.interactiveStopIcon)} />
              <span class={CSS.screenReaderText}>removeStopTitle</span>
            </div>
            <div aria-label={reverseStopsTitle}
                 class={CSS.reverseStops}
                 bind={this}
                 hidden={shouldHideReverseIcon}
                 onkeydown={this._handleReverseStops}
                 onclick={this._handleReverseStops}
                 role="button"
                 tabIndex={0}
                 title={reverseStopsTitle}>
              <span aria-hidden="true" class={join(CSS.stopIcon, CSS.reverseStopIcon, CSS.interactiveStopIcon)} />
              <span class={CSS.screenReaderText}>removeStopTitle</span>
            </div>
          </div>
        </li>
      );
    });

    const allStopsValid = stops.every(stop => {
      const search = this._stopsToSearches.get(stop);
      return stop.result &&
        search.selectedResult === stop.result;
    });
    const exceededMaxStops = this._stops.length >= this.maxStops;
    const addStopTitle = i18n.addStop;

    const addStop = stops.length >= 2 && allStopsValid && !exceededMaxStops ? (
      <div aria-label={addStopTitle}
           bind={this}
           class={CSS.addStop}
           key="esri-directions__add-stop"
           onfocus={this._handleAddStopFocus}
           tabIndex={0}>
        <span aria-hidden="true" class={join(CSS.addStopIcon, CSS.stopIcon, CSS.interactiveStopIcon)} />
        <div aria-hidden="true" class={CSS.addStopText}>{addStopTitle}</div>
      </div>
    ) : null;

    return (
      <div>
        <ol class={CSS.stops} role="group">
          {rows}
        </ol>
        {addStop}
      </div>
    );
  }

  @accessibleHandler()
  private _handleStopIconClick(event: Event): void {
    const element = event.currentTarget;
    const stopIndex = element["data-stop-index"];
    const stop = this._stops.getItemAt(stopIndex);

    if (stop && stop.result) {
      this._centerAtStop(stop);
    }
  }

  private _centerAtStop(stop: PlaceholderStop): void {
    this.viewModel.centerAt(stop.result.feature);
  }

  private _handleStopFieldCreation(node: Element): void {
    const newPlaceholderStop = this._newPlaceholderStop;

    if (!newPlaceholderStop) {
      return;
    }

    const stopIndex = node["data-stop-index"] as number;
    const stop = this._stops.getItemAt(stopIndex);

    if (newPlaceholderStop === stop) {
      this._acquireSearch(stop).focus();
    }

    this._newPlaceholderStop = null;
  }

  private _handleStopInputBlur(search: Search, stop: PlaceholderStop): void {
    this._handles.remove(REGISTRY_KEYS.awaitingViewClickStop);
    this.view.cursor = this._previousCursor;

    const unchanged = !!search.selectedResult && !!stop.result &&
      search.selectedResult === stop.result;

    if (unchanged) {
      return;
    }

    if (search.activeMenu === "none" &&
      search.searchTerm &&
      (search.selectedResult !== stop.result ||
      !search.selectedResult && !stop.result)
    ) {
      search.search();
      return;
    }

    if (!search.searchTerm) {
      this._viewClickHandle.resume();

      clearTimeout(this._autoStopRemovalTimeoutId);

      this._autoStopRemovalTimeoutId = setTimeout(() => {
        if (this.destroyed) {
          return;
        }

        this._pauseViewClickHandles();

        if (search.state === "searching") {
          return;
        }

        this._removeStop(stop);

        const stopUsedInRoute = !!stop.result;
        if (stopUsedInRoute) {
          stop.result = null;
          this._processStops();
        }

        this.scheduleRender();
      }, this._autoStopRemovalDelay);
    }
  }

  private _handleStopInputFocus(search: Search, stop: PlaceholderStop): void {
    if (this._handles.has(REGISTRY_KEYS.awaitingViewClickStop)) {
      return;
    }

    const { view, view: { cursor: previousCursor } } = this;

    this._previousCursor = previousCursor;

    this._handles.add(
      init(search, "searchTerm", term => {
        view.cursor = term.length === 0 ? "copy" : previousCursor;
      }),
      REGISTRY_KEYS.awaitingViewClickStop
    );

    this._activeStop = stop;
  }

  private _prepViewClick(): PausableHandle {
    const view = this.get<MapView | SceneView>("viewModel.view");
    const viewClickHandle = pausable(view, "click", this._handleViewClick.bind(this));
    const surfaceClickHandle = pausable(view.surface, "click", () => {
      clearTimeout(this._autoStopRemovalTimeoutId);
      surfaceClickHandle.pause();
    });

    return {
      remove: function() {
        surfaceClickHandle.remove();
        viewClickHandle.remove();
      },
      pause: function() {
        surfaceClickHandle.pause();
        viewClickHandle.pause();
      },
      resume: function() {
        surfaceClickHandle.resume();
        viewClickHandle.resume();
      }
    };
  }

  private _handleViewClick(event: any): void {
    const input = this._stopsToSearches.get(this._activeStop);

    if (input && !input.searchTerm) {
      input.search(event.mapPoint)
        .then(response => {
          const result = getFirstResult(response);

          const stop = this._activeStop;
          stop.result = result;

          stop.result.feature.attributes.Name = result.name;
          input.searchTerm = result.name;

          this._processStops();
          this.scheduleRender();
        });
      this.scheduleRender();
    }

    this._pauseViewClickHandles();
    clearTimeout(this._autoStopRemovalTimeoutId);
  }

  private _pauseViewClickHandles(): void {
    this._viewClickHandle.pause();
  }

  private _handleAddStopFocus(event: FocusEvent): void {
    this._addNewPlaceholder();
  }

  private _addNewPlaceholder() {
    if (this._newPlaceholderStop) {
      return;
    }
    const placeholder = {};
    this._stops.add(placeholder);
    this._newPlaceholderStop = placeholder;
  }

  @accessibleHandler()
  private _handleReverseStops(): void {
    this._reverseStops();
  }

  private _reverseStops(): void {
    this._stops.reverse();
    this._processStops();
  }

  @accessibleHandler()
  private _handleRemoveStop(event: Event): void {
    const element = event.currentTarget;
    const stopIndex = element["data-stop-index"];

    this._removeStop(this._stops.getItemAt(stopIndex));
    this._processStops();
  }

  private _removeStop(stop: PlaceholderStop): void {
    if (this._stops.length <= 2) {
      return;
    }

    this._disposeSearch(stop);
    this._stops.remove(stop);
  }

  private _getStopFieldGhost(): HTMLElement {
    let ghost = this._ghost;

    if (!ghost) {
      ghost = document.createElement("div");
      ghost.classList.add(CSS.stopRowGhost, CSS.offscreen);
      this._ghost = ghost;
    }

    return ghost;
  }

  private _handleStopFieldDragStart(event: DragEvent): void {
    const { currentTarget, dataTransfer } = event;

    const element = currentTarget as HTMLElement;
    const index = Number(element["data-stop-index"]);
    this._draggedStopIndex = index;

    const ghost = this._getStopFieldGhost();
    const search = this._acquireSearch(this._stops.getItemAt(index));

    ghost.innerHTML = search.searchTerm || search.activeSource.placeholder;
    document.body.appendChild(ghost);

    const { height } = ghost.getBoundingClientRect();

    dataTransfer.effectAllowed = "move";
    dataTransfer.setDragImage(ghost, 20, height / 2);
    dataTransfer.setData("text/plain", element["data-stop-index"]);
  }

  private _handleStopFieldDragEnd(): void {
    this._draggedStopIndex = null;
    this._dropTargetStopIndex = null;
    document.body.removeChild(this._getStopFieldGhost());
  }

  private _handleStopFieldDragOver(event: DragEvent): void {
    const element = event.currentTarget as HTMLElement;
    const stopIndex = Number(element["data-stop-index"]);

    event.preventDefault(); // needed to allow drop

    if (this._draggedStopIndex === stopIndex) {
      this._dropTargetStopIndex = null;
      return;
    }

    this._dropTargetStopIndex = stopIndex;
  }

  private _handleStopFieldDrop(event: DragEvent): void {
    event.stopPropagation();
    event.preventDefault();

    const element = event.currentTarget as HTMLElement;
    const targetIndex = Number(element["data-stop-index"]);

    const sourceIndex = Number(event.dataTransfer.getData("text/plain"));

    if (sourceIndex === targetIndex) {
      return;
    }

    const stops = this._stops;
    stops.reorder(stops.getItemAt(sourceIndex), targetIndex);
    this._processStops();
  }

  private _handleDepartureOptionChange(): void {
    const select = event.currentTarget as HTMLSelectElement;
    const option = select.item(select.selectedIndex);

    if (option.value === NOW) {
      this._departureTime = NOW;
      this.viewModel.departureTime = NOW;
      this._handles.remove("departure-time-controls");
    }
    else if (option.value === DEPART_BY) {
      this._departureTime = DEPART_BY;

      this._handles.add([
        init(this._datePicker, "value", () => this._updateDepartureTime()),
        init(this._timePicker, "value", () => this._updateDepartureTime())
      ], "departure-time-controls");
    }
  }

  private _updateDepartureTime(): void {
    const date = this._datePicker.value;
    const time = this._timePicker.value;

    const joinedTime = moment({
      date: date.date(),
      month: date.month(),
      year: date.year(),
      hour: time.hour(),
      minute: time.minute()
    });

    this.viewModel.departureTime = joinedTime.toDate();
  }

  private _renderTimeControls(): any {
    return (
      <div class={CSS.departureTimeControls} key="esri-directions__time-controls" role="group">
        {this._datePicker.render()}
        {this._timePicker.render()}
      </div>
    );
  }

  private _renderSectionSplitter(): any {
    return (
      <div class={CSS.sectionSplitter} />
     );
  }

  private _renderDisclaimer(): any {
    const link = `<a href="http://www.esri.com/legal/software-license" target="_blank">${i18n.esriTerms}</a>`;
    const disclaimer = substitute({ esriTerms: link}, i18n.disclaimer);

    return (
      <div class={CSS.disclaimer} innerHTML={disclaimer} key="esri-directions__disclaimer" />
     );
  }

  private _renderDirectionsContainer(): any {
    return (
      <div class={join(CSS.directionsSection, CSS.section)} key="esri-directions__container">
        {this._renderDirectionsContainerContent()}
      </div>
    );
  }

  private _renderLoader(): any {
    return (
      <div class={CSS.loader} key="loader" />
    );
  }

  private _renderDirectionsContainerContent(): any {
    const { lastRoute: directions, state } = this.viewModel;
    const hasError = state === "error";
    const isRouting = state === "routing";

    if (hasError) {
      return this._renderMessage(i18n.serviceError, "esri-directions__message");
    }

    if (isRouting) {
      return this._renderLoader();
    }

    if (directions) {
      return (
        <div class={CSS.summary} key="esri-directions__summary" role="group">
          {this._renderCosts()}
          {this._renderManeuverSections()}
        </div>
      );
    }

    return (
      <div key="esri-directions__placeholder" class={CSS.emptyContent}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path fill="currentcolor"
                d="M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"
          />
        </svg>
        <h4 class={CSS.message}>{i18n.directionsPlaceholder}</h4>
      </div>
    );
  }

  private _renderMessage(text: string, key?: any): any {
    return (
      <h3 class={CSS.message} key={key}>{text}</h3>
    );
  }

  private _renderManeuverSections(): any {
    const { sections } = this._routeSections;

    return (
      <div class={CSS.maneuvers} role="group">{
        sections.map((section, index) => {
          const { open } = section;

          let maneuvers: any;

          if (section.maneuvers.length > 0 && open) {
            maneuvers = (
              <ol class={CSS.maneuverList}>{
                section.maneuvers.map((maneuver: any) => this._renderManeuver(maneuver))
              }</ol>
            );
          }

          const multiSectionRoute = sections.length > 2;
          const last = index === sections.length - 1;

          const sectionClasses = {
            [CSS.collapsibleSection]: multiSectionRoute
          };

          const sectionHeaderIconClasses = {
            [CSS.openIcon]: !open,
            [CSS.closeIcon]: open
          };

          let sectionHeader: any;

          if (!multiSectionRoute) {
            sectionHeader = null;
          }
          else if (last) {
            sectionHeader = (
              <header class={CSS.maneuverSectionHeader}
                      key="esri-directions__maneuver-section-header">
                <span aria-hidden="true" class={CSS.lastStopIcon} />
                <h2 class={CSS.maneuverSectionTitle}>{section.name}</h2>
              </header>
            );
          }
          else {
            const title = open ? i18nCommon.open : i18nCommon.close;

            sectionHeader = (
              <header class={join(CSS.maneuverSectionHeader, CSS.maneuverSectionToggle)}
                      key="esri-directions__maneuver-section-header">
                <div aria-expanded={open}
                     aria-label={title}
                     bind={this}
                     class={CSS.maneuverSectionHeaderButton}
                     data-maneuver-section={section}
                     onkeydown={this._handleSectionToggle}
                     onclick={this._handleSectionToggle}
                     role="button"
                     tabIndex={0}
                     title={title}>
                  <span aria-hidden="true" classes={sectionHeaderIconClasses} />
                  <h2 class={CSS.maneuverSectionTitle}>{section.name}</h2>
                </div>
              </header>
            );
          }

          return (
            <section class={CSS.maneuverSection} classes={sectionClasses}>
              {sectionHeader}
              {maneuvers}
            </section>
          );
        })
      }</div>
    );
  }

  @accessibleHandler()
  private _handleSectionToggle(event: Event): void {
    const element = event.currentTarget as HTMLElement;
    const section = element["data-maneuver-section"] as any;
    section.open = !section.open;
  }

  private _renderCosts(): any {
    const directionLines = this.get<Graphic[]>("viewModel.directionLines");
    const last = directionLines[directionLines.length - 1];
    const now = moment(last.attributes.arriveTimeUTC);
    const time = now.format("LT");
    const gmt = now.format("[GMT]ZZ");
    const costSummary = this._costSummary.set({
      directionsViewModel: this.viewModel
    });
    const title = i18n.zoomToRoute;
    const eta = substitute({ time: `<strong>${time}</strong>`, gmt }, i18n.etaTemplate);
    const primaryCostsTitle = i18n.primaryCosts;
    const secondaryCostsTitle = i18n.secondaryCosts;
    const etaTitle = i18n.eta;

    return (
      <div aria-label={title}
           bind={this}
           class={CSS.directionCosts}
           onkeydown={this._handleSummaryInteraction}
           onclick={this._handleSummaryInteraction}
           role="button"
           tabIndex={0}
           title={title}>
        <div class={CSS.costsDetails} role="group">
          <div aria-label={primaryCostsTitle}
               class={CSS.primaryCosts}
               title={primaryCostsTitle}>{costSummary.primary}</div>
          <div class={CSS.verticalSplitter} />
          <div aria-label={secondaryCostsTitle}
               class={CSS.secondaryCosts}
               title={secondaryCostsTitle}>{costSummary.secondary}</div>
        </div>
        <div aria-label={etaTitle} innerHTML={eta} title={etaTitle} />
      </div>
    );
  }

  @accessibleHandler()
  private _handleSummaryInteraction(): any {
    this._activeManeuver = null;
    this._focusedManeuver = null;
    this.viewModel.clearHighlights();
    this.zoomToRoute();
  }

  private _acquireSearch(stop: PlaceholderStop): Search {
    const view: MapView | SceneView = this.get("viewModel.view");
    const placeholder = view ?
                        i18n.searchFieldPlaceholder :
                        i18n.viewlessSearchFieldPlaceholder;

    if (this._stopsToSearches.has(stop)) {
      const search = this._stopsToSearches.get(stop);
      search.view = view;
      search.defaultSource.placeholder = placeholder;
      return search;
    }

    const search = new Search({
      view,
      resultGraphicEnabled: false,
      popupEnabled: false,
      ...this.searchProperties
    });

    search.defaultSource.placeholder = placeholder;
    search.defaultSource.autoNavigate = false;

    this._handles.add([
      search.on("select-result", () => {
        stop.result = search.selectedResult;

        stop.result.feature.attributes.Name = search.selectedResult.name;

        this._processStops();
        this.scheduleRender();
      }),
      search.on("search-focus", () => this._handleStopInputFocus(search, stop)),
      search.on("search-blur", () => this._handleStopInputBlur(search, stop))
    ], search);

    this._stopsToSearches.set(stop, search);

    return search;
  }

  private _disposeSearch(stop: PlaceholderStop): void {
    this._stopsToSearches.get(stop).destroy();
    this._stopsToSearches.delete(stop);
  }

  private _processStops(): void {
    const vm = this.viewModel;

    vm.stops.removeAll();
    vm.stops.addMany(
      this._stops.filter(stop => !!stop.result)
        .map(stop => stop.result.feature)
    );

    if (vm.stops.length > 1) {
      vm.getDirections();
    }
  }

  private _renderManeuver(maneuver: Maneuver): any {
    const cumulativeCosts = "";
    let intermediateCosts: string;

    const { attributes } = maneuver;
    const distanceUnits = this.get<string>("viewModel.routeParameters.directionsLengthUnits");

    const length = formatDistance(attributes.length, { toUnits: distanceUnits });
    const time = formatTime(attributes.time);

    const associatedStop: Graphic = getAssociatedStop(maneuver);

    if (useSpatiallyLocalTime(maneuver, this.get("viewModel.routeParameters.startTime"))) {
      intermediateCosts = toSpatiallyLocalTimeString(attributes.arriveTimeUTC, attributes.ETA, this._departureTime === NOW);
    }
    else if (length) {
      intermediateCosts = time ?
                          `${length}&nbsp;&middot;<wbr>&nbsp;${time}` :
                          length;
    }

    const showAsHeader = associatedStop;

    const maneuverText = this._getFormattedManeuverText(maneuver);
    const iconPath = this._getIconPath(attributes.maneuverType);

    if (showAsHeader) {
      return (
        <li class={CSS.maneuver} key={maneuver}>
          <header>{associatedStop.attributes.Name}</header>
        </li>
      );
    }

    const maneuverId = `esri-directions__maneuver-${maneuver.uid}`;
    const cumulativeCostsId = `esri-directions__cumulative-costs-${maneuver.uid}`;
    const intermediateCostsId = `esri-directions__intermediate-costs-${maneuver.uid}`;

    const maneuverClasses = {
      [CSS.maneuverActive]: this._activeManeuver === maneuver
    };

    return (
      <li
        aria-labelledby={`${maneuverId} ${cumulativeCostsId} ${intermediateCostsId}`}
        bind={this}
        class={CSS.maneuver}
        classes={maneuverClasses}
        data-maneuver={maneuver}
        key={maneuver}
        onclick={this._handleManeuverClick}
        onkeydown={this._handleManeuverClick}
        onfocus={this._handleManeuverFocus}
        onmouseover={this._handleManeuverMouseOver}
        onmouseout={this._handleManeuverMouseOut}
        onblur={this._handleManeuverBlur}
        tabIndex={0}>
        <img alt="" class={CSS.maneuverIcon} src={iconPath} />
        <div class={CSS.maneuverCostsContainer}>
          <span id={maneuverId} innerHTML={maneuverText} />
          <div class={CSS.maneuverCosts}>
            <div class={CSS.horizontalSplitter} />
            <div id={cumulativeCostsId} aria-label={i18n.cumulativeCosts}
                 class={CSS.cumulativeCost}
                 innerHTML={cumulativeCosts}
                 title={i18n.cumulativeCosts} />
            <div id={intermediateCostsId} aria-label={i18n.intermediateCosts}
                 class={CSS.intermediateCost}
                 innerHTML={intermediateCosts}
                 title={i18n.intermediateCosts} />
          </div>
        </div>
      </li>
    );
  }

  private _getIconPath(maneuverType: string) {
    const iconName = toIconName(maneuverType);
    const iconFormat = window.devicePixelRatio === 2 ? "@2x" : "";

    return `${MANEUVER_ICON_DIR}${iconName}${iconFormat}.png`;
  }

  @accessibleHandler()
  private _handleManeuverClick(event: Event): void {
    const element = event.currentTarget as HTMLElement;
    const maneuver = element["data-maneuver"] as Maneuver;

    if (this._activeManeuver === maneuver) {
      this._activeManeuver = null;
      this.zoomToRoute();
      return;
    }

    this._activeManeuver = maneuver;
    this.viewModel.centerAt(maneuver);
    this.viewModel.highlightSegment(maneuver);
  }

  private _handleManeuverMouseOver(event: Event): void {
    if (this._activeManeuver || this._focusedManeuver) {
      return;
    }
    const element = event.currentTarget as HTMLElement;
    const maneuver = element["data-maneuver"] as Maneuver;
    this.viewModel.highlightSegment(maneuver);
  }

  private _handleManeuverMouseOut(): void {
    if (this._activeManeuver || this._focusedManeuver) {
      return;
    }
    this.viewModel.clearHighlights();
  }

  private _handleManeuverBlur(): void {
    if (this._activeManeuver) {
      return;
    }
    this._focusedManeuver = null;
    this.viewModel.clearHighlights();
  }

  private _handleManeuverFocus(event: Event): void {
    if (this._activeManeuver) {
      return;
    }
    const element = event.currentTarget as HTMLElement;
    const maneuver = element["data-maneuver"] as Maneuver;
    this._focusedManeuver = maneuver;
    this.viewModel.highlightSegment(maneuver);
  }

  private _getFormattedManeuverText(maneuver: Maneuver): string {
    const { attributes: { text }, strings: toEmphasize } = maneuver;

    if (!toEmphasize) {
      return text;
    }

    let maneuverText = text;

    toEmphasize.forEach(string => {
      maneuverText = maneuverText.replace(string.string, `<strong>${string.string}</strong>`);
    });

    return maneuverText;
  }

}

export = Directions;
