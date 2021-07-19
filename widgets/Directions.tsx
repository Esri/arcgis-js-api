/**
 * The Directions Widget provides a way to build driving and walking directions using ArcGIS Online and custom
 * Network Analysis Route services. Similar to how the {@link module:esri/tasks/RouteTask} works, this widget
 * generates a route finding a least-cost path between multiple points using a specified network. When searching
 * for an address, the location of the points used to navigate depends on the `locationType` of the [Search properties](#SearchProperties).
 * The default value will be `"street"` for any locator source that does not define a `locationType`. The
 * resulting directions are displayed with detailed turn-by-turn instructions.
 *
 * The widget wraps pre-built search functionality directly within it so all you need to do is reference the widget
 * within your application. The routing service defaults to the [Esri World Route service](http://www.arcgis.com/home/item.html?id=1feb41652c5c4bd2ba5c60df2b4ea2c4).
 * This is a subscription based service available through ArcGIS Online. You can use this default
 * or specify your own ArcGIS Server route service. Please see the
 * [routeServiceUrl](#routeServiceUrl) property.
 *
 * The `Clear route` button calls the {@link module:esri/widgets/Directions/DirectionsViewModel#reset reset()} method, which
 * clears all the input stops and results in the widget and in the map.
 *
 * Any types of customizations made to the underlying functionality of the widget should be handled via its [viewModel](#viewModel) property.
 *
 * @example
 * let directionsWidget = new Directions({
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
 *
 * @see module:esri/widgets/Directions/DirectionsViewModel
 * @see [Directions.tsx]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Directions.tsx)
 * @see [Directions.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Directions.scss)
 * @see [Guide topic - Proxy pages](../guide/proxies/index.html)
 * @see [Sample - Directions widget](../sample-code/widgets-directions/index.html)
 *
 */

// esri
import Graphic from "esri/Graphic";
import { formatDate, formatNumber, substitute } from "esri/intl";

// esri.core
import Collection from "esri/core/Collection";
import { on, pausable } from "esri/core/events";
import Handles from "esri/core/Handles";
import { PausableHandle } from "esri/core/interfaces";
import { init, on as watchOn, watch, when, whenOnce } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.rest.support
import RouteResultsContainer from "esri/rest/support/RouteResultsContainer";

// esri.symbols
import Symbol from "esri/symbols/Symbol";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";
import { ViewCursor } from "esri/views/IViewBase";

// esri.widgets
import { SearchProperties, SearchResponse, SearchResult, SearchResults } from "esri/widgets/interfaces";
import Search from "esri/widgets/Search";
import Widget from "esri/widgets/Widget";

// esri.widgets.Directions
import DirectionsViewModel from "esri/widgets/Directions/DirectionsViewModel";

// esri.widgets.Directions.support
import CostSummary from "esri/widgets/Directions/support/CostSummary";
import {
  formatDistance,
  formatTime,
  getAssociatedStop,
  toSpatiallyLocalTimeString,
  useSpatiallyLocalTime
} from "esri/widgets/Directions/support/directionsUtils";
import { Maneuver, PlaceholderStop, StopSymbols } from "esri/widgets/Directions/support/interfaces";
import { toIconName } from "esri/widgets/Directions/support/maneuverUtils";
import { CSS, DepartureTime, getManeuversIconDir } from "esri/widgets/Directions/support/resources";
import RouteSections from "esri/widgets/Directions/support/RouteSections";

// esri.widgets.Directions.t9n
import DirectionsMessages from "esri/widgets/Directions/t9n/Directions";

// esri.widgets.Search.support
import { isArcGISWorldGeocoder, meteredArcGISLocatorUrl } from "esri/widgets/Search/support/locatorUtils";

// esri.widgets.support
import DatePicker from "esri/widgets/support/DatePicker";
import { GoToOverride } from "esri/widgets/support/GoTo";
import { Heading, HeadingLevel } from "esri/widgets/support/Heading";
import { VNode } from "esri/widgets/support/interfaces";
import TimePicker from "esri/widgets/support/TimePicker";
import { accessibleHandler, messageBundle, tsx } from "esri/widgets/support/widget";

// sortablejs
import Sortable from "sortablejs";

const REGISTRY_KEYS = {
  awaitingViewClickStop: "awaiting-view-click-stop"
};

function getFirstResult(response: SearchResponse<SearchResults<SearchResult>>): SearchResult {
  return response.results[0].results[0];
}

function getDefaultStops(): [PlaceholderStop, PlaceholderStop] {
  return [{}, {}];
}

const etaTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric"
} as const;

const gmtOffsetFormatOptions = {
  minimumIntegerDigits: 2
} as const;

function formatGMTOffset(date: Date): string {
  const timeZoneOffset = date.getTimezoneOffset();
  const sign = timeZoneOffset > 0 ? "-" : "+";
  const minutesInHour = 60;
  const offsetInHours = Math.abs(Math.floor(timeZoneOffset / minutesInHour));
  const offsetInMinutes = Math.abs(Math.floor(timeZoneOffset) % minutesInHour);

  return `GMT${sign}${formatNumber(offsetInHours, gmtOffsetFormatOptions)}${formatNumber(
    offsetInMinutes,
    gmtOffsetFormatOptions
  )}`;
}

const defaultDelayInMs = 100;
const viewClickDelayInMs = 500;

function isPointerOnSuggestion(event: PointerEvent): boolean {
  return !!event
    .composedPath?.()
    .find((el: HTMLElement) => el.classList?.contains("esri-search__suggestions-list"));
}

type DirectionsProperties = Partial<
  Pick<
    Directions,
    | "apiKey"
    | "goToOverride"
    | "headingLevel"
    | "iconClass"
    | "label"
    | "maxStops"
    | "routeServiceUrl"
    | "routeSymbol"
    | "searchProperties"
    | "stopSymbols"
    | "view"
    | "viewModel"
  >
>;

@subclass("esri.widgets.Directions")
class Directions extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @mixes module:esri/widgets/support/GoTo
   * @constructor
   * @alias module:esri/widgets/Directions
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(properties?: DirectionsProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
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

      when<IMapView | ISceneView>(this, "view", (value, oldValue) => {
        if (oldValue) {
          this._viewClickHandle = null;
          this._handles.remove(oldValue);
        }

        if (value) {
          const pointerDownUpHandle = this._prepPointerDownUpClick();
          const viewClickHandle = this._prepViewClick();

          pointerDownUpHandle.pause();
          viewClickHandle.pause();

          this._handles.add(
            [
              on(
                value.surface,
                "mousedown",
                () => (this._autoStopRemovalDelay = viewClickDelayInMs)
              ),
              on(value.surface, "mouseup", () => (this._autoStopRemovalDelay = defaultDelayInMs)),
              pointerDownUpHandle,
              viewClickHandle
            ],
            this.view.surface
          );

          this._pointerDownUpHandle = pointerDownUpHandle;
          this._viewClickHandle = viewClickHandle;
        }
      }),

      whenOnce(this, "routeServiceUrl", () => this.viewModel.load()),

      watch(this, "viewModel.stops.length", (numStops) => {
        if (numStops !== 0) {
          return;
        }

        this._stops.toArray().forEach((stop) => this._removeStop(stop, true));
        this._stops.addMany(getDefaultStops());
        this.scheduleRender();
      })
    ]);
  }

  destroy(): void {
    this._datePicker.destroy();
    this._timePicker.destroy();
    this._stopsToSearches.forEach((search) => search.destroy());

    if (this._sortable) {
      this._sortable.destroy();
    }
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

  private _departureTime: DepartureTime = DepartureTime.NOW;

  private _datePicker: DatePicker = new DatePicker();

  private _focusedManeuver: Maneuver;

  private _handles = new Handles<any>();

  private _newPlaceholderStop: PlaceholderStop = null;

  private _pointerDownUpHandle: PausableHandle;

  private _pointerPressedSearchSuggestionStop: PlaceholderStop = null;

  private _previousCursor: ViewCursor;

  private _routeSections: RouteSections = new RouteSections();

  private _sortable: Sortable;

  private _stops: Collection<PlaceholderStop> = new Collection(getDefaultStops());

  private _stopsToSearches = new Map<PlaceholderStop, Search>();

  private _timePicker: TimePicker = new TimePicker();

  private _viewClickHandle: PausableHandle;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  apiKey
  //----------------------------------

  /**
   * An authorization string used to access a resource or service.
   * [API keys](/documentation/security-and-authentication/api-keys/) are generated
   * and managed in the [ArcGIS Developer dashboard](/api-keys). An API key is tied
   * explicitly to an ArcGIS account; it is also used to monitor service usage.
   * Setting a fine-grained API key on a specific class overrides the [global API key](esri-config.html#apiKey).
   *
   * By default, if this property is defined in the widget, or if using the
   * {@link module:esri/config#apiKey esriConfig.apiKey} property instead, the following URLs
   * will be used (unless overwritten in the app, or if using different defaults from a portal):
   *
   * Geocoding URL: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer"
   *
   * Routing URL: "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
   *
   * @instance
   * @name apiKey
   * @type {string}
   * @since 4.19
   * @example
   * const directionsWidget = new Directions({
   *   view: view,
   *   apiKey: "abcdefghijklmnopqrstuvwxyz"
   * });
   * // Add the Directions widget to the top right corner of the view
   * view.ui.add(directionsWidget, {
   *   position: "top-right"
   * });
   *
   */
  @aliasOf("viewModel.apiKey")
  apiKey: string = null;

  //----------------------------------
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride")
  goToOverride: GoToOverride = null;

  //----------------------------------
  //  headingLevel
  //----------------------------------

  /**
   * Indicates the heading level to use for the origin and destination addresses (i.e. "380 New York Street").
   * By default, this is rendered
   * as a level 2 heading (e.g. `<h2>380 New York Street</h2>`). Depending on the widget's placement
   * in your app, you may need to adjust this heading for proper semantics. This is
   * important for meeting accessibility standards.
   *
   * @name headingLevel
   * @instance
   * @since 4.20
   * @type {number}
   * @default 2
   * @see [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
   *
   * @example
   * // address text will render as an <h3>
   * directions.headingLevel = 3;
   */
  @property()
  headingLevel: HeadingLevel = 2;

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
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  lastRoute
  //----------------------------------

  /**
   * The most recent route result. Returns an object containing properties for any barriers used when generating the route, messages
   * that may arise when solving the route, and finally an array of returned {@link module:esri/rest/support/RouteResult RouteResults}.
   *
   * @name lastRoute
   * @instance
   * @type {Object}
   * @since 4.12
   * @readonly
   * @default null
   *
   * @property {module:esri/Graphic[]} barriers  - Array of graphics representing the point barriers. For a list of properties returned for each barrier,
   * see the [barriers](https://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/barriers.htm) help documentation.
   * @property {Object[]} messages - An array of messages serialized to JSON.
   * @property {string} messages.description - A descriptive message of the returned mesage.
   * @property {number} messages.type - Number indicating the message type returned from the service. This number correlates to one of the
   * possible values listed below.
   * Number | Value
   * ------|------------
   * 0 | informative
   * 1 | process-definition
   * 2 | process-start
   * 3 | process-stop
   * 50 | warning
   * 100 | error
   * 101 | empty
   * 200 | abort
   * @property {module:esri/Graphic[]} polygonBarriers - Array of graphics representing the polygon barriers. For a list of properties returned for each barrier,
   * see the [barriers](https://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/barriers.htm) help documentation.
   * @property {module:esri/Graphic[]} polylineBarriers - Array of graphics representing the polygon barriers. For a list of properties returned for each barrier,
   * see the [barriers](https://desktop.arcgis.com/en/arcmap/latest/extensions/network-analyst/barriers.htm) help documentation.
   * @property {module:esri/rest/support/RouteResult} routeResults - An array of {@link module:esri/rest/support/RouteResult RouteResults}.
   */
  @aliasOf("viewModel.lastRoute")
  lastRoute: RouteResultsContainer = null;

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
  @messageBundle("esri/widgets/Directions/t9n/Directions")
  messages: DirectionsMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * The widget's common message bundle.
   *
   * @instance
   * @name messagesCommon
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

  //----------------------------------
  //  messagesUnits
  //----------------------------------

  /**
   * @name messagesUnits
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @messageBundle("esri/core/t9n/Units")
  messagesUnits: UnitsMessages = null;

  //----------------------------------
  //  routeServiceUrl
  //----------------------------------

  /**
   * The URL of the REST endpoint of the Route service.
   *
   * If an [apiKey](#apiKey) is defined in the widget, the default URL is:
   *
   * "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World".
   *
   * @name routeServiceUrl
   * @instance
   * @type {string}
   * @default "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
   * @autocast
   */
  @aliasOf("viewModel.routeServiceUrl")
  routeServiceUrl: string = undefined;

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
   * @property {boolean | Function} [includeDefaultSources] - Indicates whether or not to include {@link module:esri/widgets/Search/SearchViewModel#defaultSources defaultSources} in the Search UI.
   * This can be a boolean value or a function that returns an array of Search {@link module:esri/widgets/Search/SearchViewModel#sources sources}.
   * @property {string} [locationType] - Define the type of location, either `"street"` or `"rooftop"`.
   * The default value will be `"street"` for any locator source that does not define a locationType.
   * @property {number} [maxResults=6] - Indicates the maximum number of search results to return.
   * @property {number} [maxSuggestions=6] - Indicates the maximum number of suggestions to return for the widget's input.
   * @property {number} [minSuggestCharacters=1] - Indicates the minimum number of characters required before querying for a suggestion.
   * @property {boolean} [popupEnabled=false] - Indicates whether to display a {@link module:esri/widgets/Popup Popup} when a selected result is clicked.
   * @property {module:esri/PopupTemplate} [popupTemplate] - A customized PopupTemplate for the selected feature.
   * @property {boolean} [resultGraphicEnabled=false] - Indicates whether to show a graphic on the map for the selected source.
   * @property {boolean} [searchAllEnabled] - Indicates whether to display the option to search all sources.
   * @property {string} [searchTerm] - The value of the search box input text string.
   * @property {module:esri/core/Collection<module:esri/widgets/Search/LayerSearchSource | module:esri/widgets/Search/LocatorSearchSource>} [sources] - Specifies the sources
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
  view: IMapView | ISceneView = null;

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
   * @return {Promise<module:esri/rest/support/RouteResult>} When resolved, returns an object containing the calculated {@link module:esri/rest/support/RouteResult}.
   *
   */
  @aliasOf("viewModel.getDirections")
  getDirections(): Promise<void> {
    return null;
  }

  /**
   * Zoom so that the full route is displayed within the current map extent.
   */
  @aliasOf("viewModel.zoomToRoute")
  zoomToRoute(): void {}

  render(): VNode {
    return <div class={this.classes(CSS.base, CSS.scroller)}>{this._renderPanelContent()}</div>;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderPanelContent(): VNode {
    const {
      viewModel: { state }
    } = this;
    const initializing = state === "initializing";
    const failed = state === "error" && !this.viewModel.serviceDescription;
    const signInPending = state === "unauthenticated";

    const panelClasses = {
      [CSS.panelContentLoading]: initializing,
      [CSS.panelContentError]: failed,
      [CSS.panelContentSignIn]: signInPending
    };

    const role = initializing ? "presentation" : "group";

    const content = signInPending
      ? this._renderSignIn()
      : failed
      ? this._renderMessage(this._getErrorMessage())
      : initializing
      ? this._renderLoader()
      : this._renderReadyContent();

    return (
      <div class={this.classes(CSS.panelContent, panelClasses)} role={role}>
        {content}
      </div>
    );
  }

  private _renderReadyContent(): VNode {
    return [
      this._renderStopsContainer(),
      this._renderTravelModeOptions(),
      this._renderDepartureTimeControls(),
      this._renderSectionSplitter(),
      this._renderDirectionsContainer(),
      this._renderDisclaimer()
    ];
  }

  private _renderSignIn(): VNode {
    return (
      <div key="sign-in" class={CSS.signInContent}>
        <Heading class={CSS.contentTitle} level={this.headingLevel}>
          {this.messages.widgetLabel}
        </Heading>
        {this._renderPlaceholder()}
        <Heading level={this.headingLevel + 1}>{this.messages.signInRequired}</Heading>
        <button
          class={this.classes(CSS.button, CSS.buttonSecondary, CSS.signInButton)}
          tabIndex={0}
          onclick={this._handleSignInClick}
          bind={this}
          type="button"
        >
          {this.messagesCommon.auth.signIn}
        </button>
      </div>
    );
  }

  private _handleSignInClick(): void {
    this.viewModel.load().catch(() => {});
  }

  private _renderTravelModeOptions(): VNode {
    const { travelModes } = this.viewModel;

    if (travelModes.length === 0) {
      return null;
    }

    const { selectedTravelMode: travelMode } = this.viewModel;
    const title = travelMode.name || this.messages.travelMode;

    return (
      <select
        aria-label={title}
        bind={this}
        class={this.classes(CSS.travelModeSelect, CSS.select)}
        key="esri-directions__travel-mode-options"
        onchange={this._handleTravelModeChange}
        title={title}
      >
        {travelModes.map((mode) => {
          const selected = mode.id === travelMode.id;
          return (
            <option key={mode as any} data-mode={mode} selected={selected} value={mode.id}>
              {mode.name}
            </option>
          );
        })}
      </select>
    );
  }

  private _handleTravelModeChange(event: Event): void {
    const select = event.currentTarget as HTMLSelectElement;
    const option = select.item(select.selectedIndex);
    this.viewModel.selectedTravelMode = option["data-mode"];
  }

  private _renderStopsContainer(): VNode {
    return (
      <div class={CSS.section} key="esri-directions__stops-container" role="group">
        {this._renderStops()}
      </div>
    );
  }

  private _renderDepartureTimeControls(): VNode {
    const departureTime = this._departureTime;
    const { messages } = this;
    const title = messages.departureTime;

    return (
      <div class={CSS.departureTime} key="esri-directions__departure-time-controls" role="group">
        <select
          aria-label={title}
          bind={this}
          class={this.classes(CSS.departureTimeSelect, CSS.select)}
          onchange={this._handleDepartureOptionChange}
          title={title}
        >
          <option value={DepartureTime.NOW} selected={departureTime === DepartureTime.NOW}>
            {messages.leaveNow}
          </option>
          <option
            value={DepartureTime.DEPART_BY}
            selected={departureTime === DepartureTime.DEPART_BY}
          >
            {messages.departBy}
          </option>
          <option
            value={DepartureTime.UNSPECIFIED}
            selected={departureTime === DepartureTime.UNSPECIFIED}
          >
            {messages.timeUnspecified}
          </option>
        </select>
        {departureTime === DepartureTime.DEPART_BY ? this._renderTimeControls() : null}
      </div>
    );
  }

  private _renderStops(): VNode {
    const stops = this._stops;
    let activeSearchMenuZIndices = 0;

    stops.forEach((stop) => {
      if (this._acquireSearch(stop).activeMenu !== "none") {
        activeSearchMenuZIndices += 1;
      }
    });

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
        [CSS.validStopRow]: !newRow
      };

      const lastStop = stops.getItemAt(numStops - 1);
      const lastStopIsValid = lastStop && lastStop.result;
      const nextStop = stops.getItemAt(i + 1);
      const nextStopIsValid = nextStop && nextStop.result;
      const isLast = i === numStops - 1;
      const nextIsLast = i === numStops - 2;
      const shouldHideReverseIcon =
        (numStops === 2 && i === 0) ||
        (numStops > 2 && !isLast && !nextIsLast) ||
        (numStops > 2 && nextIsLast && nextStopIsValid) ||
        (numStops > 2 && isLast && !stop.result);
      const shouldHideClearIcon = numStops === 2 || (numStops === 3 && !lastStopIsValid) || newRow;

      const search = this._acquireSearch(stop);

      const { messages } = this;
      const { removeStop: removeStopTitle, reverseStops: reverseStopsTitle, unlocated } = messages;
      const label = substitute(messages.stopLabelTemplate, {
        number: i + 1,
        label: stop.result ? stop.result.name : unlocated
      });
      const stopListItemId = `${this.id}__stop--${i}`;

      const centerOnStopEnabled =
        !!search.searchTerm &&
        !!search.selectedResult &&
        !!stop.result &&
        search.selectedResult === stop.result;

      const rowStyles = {
        zIndex: search.activeMenu !== "none" ? `${activeSearchMenuZIndices--}` : ""
      };

      return (
        <li
          aria-label={label}
          afterCreate={this._handleStopFieldCreation}
          bind={this}
          class={this.classes(CSS.stopRow, rowClasses)}
          id={stopListItemId}
          key={i}
          data-stop-index={i}
          styles={rowStyles}
        >
          <div class={CSS.stopHandle}>
            <span
              aria-hidden="true"
              class={this.classes(
                CSS.stopIcon,
                CSS.handleIcon,
                CSS.stopHandleIcon,
                CSS.interactiveStopIcon
              )}
              onpointerdown={this._handleDragHandlePointerDown}
            />
            <div
              bind={this}
              aria-labelledby={stopListItemId}
              class={this.classes(CSS.stopIconContainer, stopIconContainerClasses)}
              data-stop-index={i}
              onclick={this._handleStopIconClick}
              onkeydown={this._handleStopIconClick}
              role="button"
            >
              {/* tab index on icon to prevent weird focus outline */
              /* `tabindex` used to remove attribute from DOM; node is still focusable via click with `tabIndex` */}
              <span
                class={this.classes(CSS.stopIcon, stopIconClasses)}
                tabindex={centerOnStopEnabled ? "0" : null}
              />
            </div>
          </div>
          <div class={CSS.stopInput}>{search.render()}</div>
          <div class={CSS.stopOptions} role="group">
            <div
              aria-label={removeStopTitle}
              class={CSS.removeStopButton}
              bind={this}
              data-stop-index={i}
              hidden={shouldHideClearIcon}
              onkeydown={this._handleRemoveStop}
              onclick={this._handleRemoveStop}
              role="button"
              tabIndex={0}
              title={removeStopTitle}
            >
              <span
                aria-hidden="true"
                class={this.classes(
                  CSS.stopIcon,
                  CSS.removeStop,
                  CSS.removeStopIcon,
                  CSS.interactiveStopIcon
                )}
              />
              <span class={CSS.screenReaderText}>removeStopTitle</span>
            </div>
            <div
              aria-label={reverseStopsTitle}
              class={CSS.reverseStops}
              bind={this}
              hidden={shouldHideReverseIcon}
              onkeydown={this._handleReverseStops}
              onclick={this._handleReverseStops}
              role="button"
              tabIndex={0}
              title={reverseStopsTitle}
            >
              <span
                aria-hidden="true"
                class={this.classes(CSS.stopIcon, CSS.reverseStopIcon, CSS.interactiveStopIcon)}
              />
              <span class={CSS.screenReaderText}>removeStopTitle</span>
            </div>
          </div>
        </li>
      );
    });

    const allStopsValid = stops.every((stop) => {
      const search = this._stopsToSearches.get(stop);
      return stop.result && search.selectedResult === stop.result;
    });
    const exceededMaxStops = this._stops.length >= this.maxStops;
    const addStopTitle = this.messages.addStop;

    const addStop =
      stops.length >= 2 && allStopsValid && !exceededMaxStops ? (
        <div
          aria-label={addStopTitle}
          bind={this}
          class={CSS.addStop}
          key="esri-directions__add-stop"
          onfocus={this._handleAddStopFocus}
          tabIndex={0}
        >
          <span
            aria-hidden="true"
            class={this.classes(CSS.addStopIcon, CSS.stopIcon, CSS.interactiveStopIcon)}
          />
          <div aria-hidden="true" class={CSS.addStopText}>
            {addStopTitle}
          </div>
        </div>
      ) : null;

    return (
      <div>
        <ol class={CSS.stops} role="group" afterCreate={this._setUpDragAndDropStops}>
          {rows}
        </ol>
        {addStop}
      </div>
    );
  }

  private _setUpDragAndDropStops = (node: HTMLElement): void => {
    this._sortable = Sortable.create(node, {
      draggable: `.${CSS.validStopRow}`,
      ghostClass: CSS.stopRowGhost,
      handle: `.${CSS.stopHandle}`,
      onEnd: this._handleStopInputDragEnd
    });
  };

  private _handleDragHandlePointerDown = (): void =>
    this._stops.forEach((stop) => (this._acquireSearch(stop).activeMenu = "none"));

  @accessibleHandler()
  private _handleStopIconClick(event: Event): void {
    const element = event.currentTarget;
    const stopIndex = element["data-stop-index"];
    const stop = this._stops.getItemAt(stopIndex);

    if (stop && stop.result) {
      this._centerAtStop(stop);
    }
  }

  @accessibleHandler()
  private _handleClearRouteClick(): void {
    this.viewModel.reset();
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
      const search = this._acquireSearch(stop);
      search.when(() => {
        this.renderNow();
        search.focus();
      });
    }

    this._newPlaceholderStop = null;
  }

  private _handleStopInputBlur(search: Search, stop: PlaceholderStop): void {
    this._handles.remove(REGISTRY_KEYS.awaitingViewClickStop);
    this.view.cursor = this._previousCursor;

    const unchanged =
      !!search.selectedResult && !!stop.result && search.selectedResult === stop.result;

    if (unchanged) {
      this._pointerDownUpHandle.pause();
      return;
    }

    if (
      search.activeMenu === "none" &&
      search.searchTerm &&
      (search.selectedResult !== stop.result || (!search.selectedResult && !stop.result))
    ) {
      search.search();
      this._pointerDownUpHandle.pause();
      return;
    }

    if (!search.searchTerm) {
      this._viewClickHandle.resume();

      clearTimeout(this._autoStopRemovalTimeoutId);

      this._autoStopRemovalTimeoutId = setTimeout(() => {
        if (this.destroyed) {
          return;
        }

        this._viewClickHandle.pause();

        if (search.viewModel.state === "searching") {
          this._pointerDownUpHandle.pause();
          return;
        }

        if (this._pointerPressedSearchSuggestionStop) {
          // blur caused by pointer down interaction, we'll wait for pointer up to decide whether to remove or not
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
    this._pointerDownUpHandle.resume();

    if (this._handles.has(REGISTRY_KEYS.awaitingViewClickStop)) {
      return;
    }

    const {
      view,
      view: { cursor: previousCursor }
    } = this;

    this._previousCursor = previousCursor;

    this._handles.add(
      init(search, "searchTerm", (term) => {
        view.cursor = term.length === 0 ? ("copy" as ViewCursor) : previousCursor;
      }),
      REGISTRY_KEYS.awaitingViewClickStop
    );

    this._activeStop = stop;
  }

  private _prepViewClick(): PausableHandle {
    const view = this.get<IMapView | ISceneView>("viewModel.view");
    const viewClickHandle = pausable(view, "click", this._handleViewClick.bind(this));
    const surfaceClickHandle = pausable(view.surface, "click", () => {
      clearTimeout(this._autoStopRemovalTimeoutId);
      surfaceClickHandle.pause();
    });

    return {
      remove(): void {
        surfaceClickHandle.remove();
        viewClickHandle.remove();
      },
      pause(): void {
        surfaceClickHandle.pause();
        viewClickHandle.pause();
      },
      resume(): void {
        surfaceClickHandle.resume();
        viewClickHandle.resume();
      }
    };
  }

  private _prepPointerDownUpClick(): PausableHandle {
    const pointerDownHandle = pausable(document, "pointerdown", (event: PointerEvent) => {
      this._pointerPressedSearchSuggestionStop = isPointerOnSuggestion(event)
        ? this._activeStop
        : null;
    });

    const pointerUpHandle = pausable(document, "pointerup", (event: PointerEvent) => {
      this._pointerDownUpHandle.pause();
      const pointerOnSuggestion = isPointerOnSuggestion(event);
      const activeStop = this._activeStop;

      if (!pointerOnSuggestion && activeStop === this._pointerPressedSearchSuggestionStop) {
        this._removeStop(activeStop);
      }

      this.scheduleRender();
      this._pointerPressedSearchSuggestionStop = pointerOnSuggestion ? this._activeStop : null;
    });

    return {
      remove(): void {
        pointerUpHandle.remove();
        pointerDownHandle.remove();
      },
      pause(): void {
        pointerUpHandle.pause();
        pointerDownHandle.pause();
      },
      resume(): void {
        // only resume the first step of a pointer down/up interaction
        pointerDownHandle.resume();
      }
    };
  }

  private _handleViewClick(event: any): void {
    const input = this._stopsToSearches.get(this._activeStop);

    if (input && !input.searchTerm) {
      input.search(event.mapPoint).then((response) => {
        const result = getFirstResult(response);

        const stop = this._activeStop;
        stop.result = result;

        stop.result.feature.attributes.Name = result.name;
        input.searchTerm = result.name;

        // let "select-result" event trigger stop processing & rendering
      });

      this.scheduleRender();
    }

    this._viewClickHandle.pause();
    clearTimeout(this._autoStopRemovalTimeoutId);
  }

  private _handleAddStopFocus(): void {
    this._addNewPlaceholder();
  }

  private _addNewPlaceholder(): void {
    this._pointerDownUpHandle.pause();
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

  private _removeStop(stop: PlaceholderStop, force: boolean = false): void {
    if (this._stops.length <= 2 && !force) {
      return;
    }

    this._disposeSearch(stop);
    this._stops.remove(stop);
  }

  private _handleStopInputDragEnd = ({
    oldIndex,
    newIndex,
    target: list
  }: Sortable.SortableEvent): void => {
    if (oldIndex === newIndex) {
      return;
    }

    // revert DOM changes -> VDOM will handle this for us
    const { children } = list;
    const itemA = children[newIndex];
    const itemB = children[oldIndex];
    const movedUp = newIndex - oldIndex < 0;
    list.insertBefore(itemA, movedUp ? itemB.nextElementSibling : itemB);

    const stops = this._stops;

    stops.reorder(stops.getItemAt(oldIndex), newIndex);
    this._processStops();
  };

  private _handleDepartureOptionChange(event: Event): void {
    const select = event.currentTarget as HTMLSelectElement;
    const option = select.item(select.selectedIndex) as HTMLOptionElement;

    if (option.value === DepartureTime.NOW) {
      this._departureTime = DepartureTime.NOW;
      this.viewModel.departureTime = DepartureTime.NOW;
      this._handles.remove("departure-time-controls");
    } else if (option.value === DepartureTime.DEPART_BY) {
      this._departureTime = DepartureTime.DEPART_BY;

      this._handles.add(
        [
          init(this._datePicker, "value", () => this._updateDepartureTime()),
          init(this._timePicker, "value", () => this._updateDepartureTime())
        ],
        "departure-time-controls"
      );
    } else {
      this._departureTime = DepartureTime.UNSPECIFIED;
      this.viewModel.departureTime = null;
    }
  }

  private _updateDepartureTime(): void {
    const date = this._datePicker.value;
    const time = this._timePicker.value;
    this.viewModel.departureTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    );
  }

  private _renderTimeControls(): VNode {
    return (
      <div class={CSS.departureTimeControls} key="esri-directions__time-controls" role="group">
        {this._datePicker.render()}
        {this._timePicker.render()}
      </div>
    );
  }

  private _renderSectionSplitter(): VNode {
    return <div class={CSS.sectionSplitter} />;
  }

  private _renderDisclaimer(): VNode {
    const { messages } = this;
    const link = `<a class="${CSS.anchor}" href="http://www.esri.com/legal/software-license" rel="noreferrer" target="_blank">${messages.esriTerms}</a>`;
    const disclaimer = substitute(messages.disclaimer, { esriTerms: link });

    return <div class={CSS.disclaimer} innerHTML={disclaimer} key="esri-directions__disclaimer" />;
  }

  private _renderDirectionsContainer(): VNode {
    return (
      <div
        class={this.classes(CSS.directionsSection, CSS.section)}
        key="esri-directions__container"
      >
        {this._renderDirectionsContainerContent()}
      </div>
    );
  }

  private _renderLoader(): VNode {
    return <div class={CSS.loader} key="loader" />;
  }

  private _renderWarningCard(): VNode {
    return (
      <div class={CSS.warningCard} role="alert">
        <div class={CSS.warningHeader}>
          <span class={CSS.warningIcon} aria-hidden="true" />
          <Heading class={CSS.warningHeading} level={this.headingLevel}>
            {this.messagesCommon.warning}
          </Heading>
        </div>
        <div class={CSS.warningMessage}>{this._getErrorMessage()}</div>
      </div>
    );
  }

  private _renderDirectionsContainerContent(): VNode {
    const { lastRoute: directions, state } = this.viewModel;
    const hasError = state === "error";
    const isRouting = state === "routing";

    if (hasError) {
      return this._renderWarningCard();
    }

    if (isRouting) {
      return this._renderLoader();
    }

    if (directions) {
      return (
        <div class={CSS.summary} key="esri-directions__summary" role="group">
          {this._renderCosts()}
          {this._renderRouteActions()}
          {this._renderManeuverSections()}
        </div>
      );
    }

    return (
      <div key="esri-directions__placeholder" class={CSS.emptyContent}>
        {this._renderPlaceholder()}
        <Heading class={CSS.message} level={this.headingLevel}>
          {this.messages.directionsPlaceholder}
        </Heading>
      </div>
    );
  }

  private _renderPlaceholder(): VNode {
    return (
      <svg class={CSS.emptyIllustration} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <path
          fill="currentcolor"
          d="M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"
        />
      </svg>
    );
  }

  private _renderMessage(text: string): VNode {
    return <Heading level={this.headingLevel}>{text}</Heading>;
  }

  private _renderRouteActions(): VNode {
    return (
      <div class={CSS.routeActions}>
        <button
          aria-label={this.messages.clearRoute}
          class={this.classes(CSS.clearRouteButton, CSS.button, CSS.buttonTertiary)}
          tabIndex={0}
          onclick={this._handleClearRouteClick}
          bind={this}
          type="button"
        >
          {this.messages.clearRoute}
        </button>
      </div>
    );
  }

  private _renderManeuverSections(): VNode {
    const { sections } = this._routeSections;

    return (
      <div class={CSS.maneuvers} role="group">
        {sections.map((section, index) => {
          const { open } = section;

          let maneuvers: any;

          if (section.maneuvers.length > 0 && open) {
            maneuvers = (
              <ol class={CSS.maneuverList}>
                {section.maneuvers.map((maneuver: any) => this._renderManeuver(maneuver))}
              </ol>
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

          let sectionHeader: VNode;

          if (multiSectionRoute && !last) {
            const title = open ? this.messagesCommon.open : this.messagesCommon.close;

            sectionHeader = (
              <header
                class={this.classes(CSS.maneuverSectionHeader, CSS.maneuverSectionToggle)}
                key="esri-directions__maneuver-section-header"
              >
                <div
                  aria-expanded={open.toString()}
                  aria-label={title}
                  bind={this}
                  class={CSS.maneuverSectionHeaderButton}
                  data-maneuver-section={section}
                  onkeydown={this._handleSectionToggle}
                  onclick={this._handleSectionToggle}
                  role="button"
                  tabIndex={0}
                  title={title}
                >
                  <Heading class={CSS.maneuverSectionTitle} level={this.headingLevel}>
                    {section.name}
                  </Heading>
                  <span aria-hidden="true" class={this.classes(sectionHeaderIconClasses)} />
                </div>
              </header>
            );
          } else {
            sectionHeader = (
              <header
                class={CSS.maneuverSectionHeader}
                key="esri-directions__maneuver-section-header"
              >
                <Heading class={CSS.maneuverSectionTitle} level={this.headingLevel}>
                  {section.name}
                </Heading>
              </header>
            );
          }

          return (
            <section class={this.classes(CSS.maneuverSection, sectionClasses)}>
              {sectionHeader}
              {maneuvers}
            </section>
          );
        })}
      </div>
    );
  }

  @accessibleHandler()
  private _handleSectionToggle(event: Event): void {
    const element = event.currentTarget as HTMLElement;
    const section = element["data-maneuver-section"] as any;
    section.open = !section.open;
  }

  private _renderCosts(): VNode {
    const directionLines = this.get<Graphic[]>("viewModel.directionLines");
    const last = directionLines[directionLines.length - 1];
    const arriveTime = new Date(last.attributes.arriveTimeUTC);

    const costSummary = this._costSummary.set({
      directionsViewModel: this.viewModel,
      messages: this.messages,
      messagesUnits: this.messagesUnits
    });

    const { messages } = this;
    const title = messages.zoomToRoute;
    const time = formatDate(arriveTime, etaTimeFormatOptions);
    const eta = substitute(messages.etaTemplate, {
      time: `<strong>${time}</strong>`,
      gmt: `${formatGMTOffset(arriveTime)}`
    });
    const primaryCostsTitle = messages.primaryCosts;
    const secondaryCostsTitle = messages.secondaryCosts;
    const etaTitle = messages.eta;

    return (
      <div
        aria-label={title}
        bind={this}
        class={CSS.directionCosts}
        onkeydown={this._handleSummaryInteraction}
        onclick={this._handleSummaryInteraction}
        role="button"
        tabIndex={0}
        title={title}
      >
        <div class={CSS.costsDetails} role="group">
          <div aria-label={primaryCostsTitle} class={CSS.primaryCosts} title={primaryCostsTitle}>
            {costSummary.primary}
          </div>
          <div class={CSS.verticalSplitter} />
          <div
            aria-label={secondaryCostsTitle}
            class={CSS.secondaryCosts}
            title={secondaryCostsTitle}
          >
            {costSummary.secondary}
          </div>
        </div>
        <div aria-label={etaTitle} innerHTML={eta} title={etaTitle} />
      </div>
    );
  }

  @accessibleHandler()
  private _handleSummaryInteraction(): void {
    this._activeManeuver = null;
    this._focusedManeuver = null;
    this.viewModel.clearHighlights();
    this.zoomToRoute();
  }

  private _getErrorMessage(): string {
    const { messages } = this;
    const { error } = this.viewModel;

    if (error.name === "directions-view-model:unable-to-route") {
      return messages.errors.unableToRoute;
    }

    if (error.name === "directions-view-model:service-metadata-unavailable") {
      return messages.errors.unableToLoadServiceMetadata;
    }

    return messages.errors.unknownError;
  }

  private _normalizeSearchSources(search: Search): void {
    this._overrideDefaultSources(search);
    this._applyLocatorSourceOverrides(search);
  }

  private _overrideDefaultSources(search: Search): void {
    search.viewModel.defaultSources.forEach((source) => {
      source.autoNavigate = false;
    });
  }

  private _applyLocatorSourceOverrides({ allSources }: Search): void {
    if (allSources.length === 0) {
      return;
    }

    allSources.forEach((source) => {
      if ("locator" in source && source.locator) {
        // ensuring route-appropriate locationType default
        // see https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/20496
        if (source.locationType === null) {
          source.locationType = "street";
        }

        if (isArcGISWorldGeocoder(source.locator.url) && this.apiKey && source.apiKey == null) {
          source.apiKey = this.apiKey;
          source.locator.url = meteredArcGISLocatorUrl;
        }
      }
    });
  }

  private _acquireSearch(stop: PlaceholderStop): Search {
    const view: IMapView | ISceneView = this.get("viewModel.view");

    if (this._stopsToSearches.has(stop)) {
      const search = this._stopsToSearches.get(stop);
      search.view = view;
      this._overrideDefaultSources(search);
      return search;
    }

    const search = new Search({
      view,
      resultGraphicEnabled: false,
      popupEnabled: false,
      ...this.searchProperties
    });

    this._normalizeSearchSources(search);

    this._handles.add(
      [
        watchOn(search, "allSources", "change", () => this._normalizeSearchSources(search)),
        search.on("select-result", () => {
          stop.result = search.selectedResult;

          stop.result.feature.attributes.Name = search.selectedResult.name;

          this._processStops();
          this.scheduleRender();
        }),
        search.on("search-focus", () => this._handleStopInputFocus(search, stop)),
        search.on("search-blur", () => this._handleStopInputBlur(search, stop))
      ],
      search
    );

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
      this._stops.filter((stop) => !!stop.result).map((stop) => stop.result.feature)
    );

    if (vm.stops.length > 1) {
      vm.getDirections();
    }
  }

  private _renderManeuver(maneuver: Maneuver): VNode {
    const cumulativeCosts = "";
    let intermediateCosts: string;

    const { attributes } = maneuver;
    const distanceUnits = this.get<string>("viewModel.routeParameters.directionsLengthUnits");

    const { messages, messagesUnits } = this;
    const length = formatDistance(messages, messagesUnits, attributes.length, {
      toUnits: distanceUnits
    });
    const time = formatTime(attributes.time);

    const associatedStop: Graphic = getAssociatedStop(maneuver);

    if (useSpatiallyLocalTime(maneuver, this.get("viewModel.routeParameters.startTime"))) {
      intermediateCosts = toSpatiallyLocalTimeString(
        messages,
        attributes.arriveTimeUTC,
        attributes.ETA,
        this._departureTime === DepartureTime.NOW
      );
    } else if (length) {
      intermediateCosts = time ? `${length}&nbsp;&middot;&nbsp;${time}` : length;
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
        class={this.classes(CSS.maneuver, maneuverClasses)}
        data-maneuver={maneuver}
        key={maneuver}
        onclick={this._handleManeuverClick}
        onkeydown={this._handleManeuverClick}
        onfocus={this._handleManeuverFocus}
        onmouseover={this._handleManeuverMouseOver}
        onmouseout={this._handleManeuverMouseOut}
        onblur={this._handleManeuverBlur}
        tabIndex={0}
      >
        <img alt="" class={CSS.maneuverIcon} src={iconPath} />
        <div class={CSS.maneuverCostsContainer}>
          <span id={maneuverId} innerHTML={maneuverText} />
          <div class={CSS.maneuverCosts}>
            <div class={CSS.horizontalSplitter} />
            <div
              id={cumulativeCostsId}
              aria-label={messages.cumulativeCosts}
              class={CSS.cumulativeCost}
              innerHTML={cumulativeCosts}
              title={messages.cumulativeCosts}
            />
            <div
              id={intermediateCostsId}
              aria-label={messages.intermediateCosts}
              class={CSS.intermediateCost}
              innerHTML={intermediateCosts}
              title={messages.intermediateCosts}
            />
          </div>
        </div>
      </li>
    );
  }

  private _getIconPath(maneuverType: string): string {
    const iconName = toIconName(maneuverType);
    const iconFormat = window.devicePixelRatio === 2 ? "@2x" : "";

    return `${getManeuversIconDir()}${iconName}${iconFormat}.png`;
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
    const {
      attributes: { text },
      strings: toEmphasize
    } = maneuver;

    if (!toEmphasize) {
      return text;
    }

    let maneuverText = text;

    toEmphasize.forEach((string) => {
      maneuverText = maneuverText.replace(string.string, `<strong>${string.string}</strong>`);
    });

    return maneuverText;
  }
}

export default Directions;
