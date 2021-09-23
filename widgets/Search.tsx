/**
 * The Search widget provides a way to perform search operations on {@link module:esri/rest/locator locator service(s)},
 * {@link module:esri/layers/MapImageLayer map}/{@link module:esri/layers/FeatureLayer feature} service feature
 * layer(s), {@link module:esri/layers/SceneLayer SceneLayers} with an associated feature layer,
 * {@link module:esri/layers/buildingSublayers/BuildingComponentSublayer} with an associated feature layer,
 * {@link module:esri/layers/GeoJSONLayer}, {@link module:esri/layers/CSVLayer}, {@link module:esri/layers/OGCFeatureLayer}, and/or
 * {@link module:esri/webdoc/applicationProperties/SearchTable table(s)}. If using a locator with a geocoding service, the
 * [findAddressCandidates](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm)
 * operation is used, whereas {@link module:esri/rest/support/Query queries} are used on feature layers.
 *
 * By default, the Search widget sets the view on the [Search result](#SearchResult). The level of detail (LOD)
 * at the center of the view depends on the data source, with higher quality data sources returning extents closer to the
 * `feature` obtained from the search. To manually define the scale of the view at the Search result, use the `zoomScale` property
 * of the {@link module:esri/widgets/Search/LocatorSearchSource#zoomScale LocatorSearchSource}
 * or {@link module:esri/widgets/Search/LayerSearchSource#zoomScale LayerSearchSource}.
 *
 * Search widget results are typically sorted according to their relevance to the search and their relative importance.
 * However, when the scale of the {@link module:esri/views/MapView#scale MapView} or
 * {@link module:esri/views/SceneView#scale SceneView} is less than or equal to 300,000, the operations
 * support prioritization of candidates based on their distance from a specified point (the center of the view)
 * by passing in the `location` parameter. Features closest to the input location show up higher in the list of results.
 *
 * ![search](../assets/img/apiref/widgets/search.png)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets to the view's user interface via the
 * {@link module:esri/views/View#ui ui} property on the view. See the example below.
 *
 * @example
 * const searchWidget = new Search({
 *   view: view
 * });
 * // Adds the search widget below other elements in
 * // the top left corner of the view
 * view.ui.add(searchWidget, {
 *   position: "top-left",
 *   index: 2
 * });
 *
 * @module esri/widgets/Search
 * @since 4.0
 *
 * @see [Search.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Search.tsx)
 * @see [Search.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Search.scss)
 * @see module:esri/widgets/Search/SearchViewModel
 * @see module:esri/rest/locator
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 * @see [Sample - Search widget (3D)](../sample-code/widgets-search-3d/index.html)
 * @see [Sample - Search widget with multiple sources](../sample-code/widgets-search-multiplesource/index.html)
 * @see [Proximity searches](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm#ESRI_SECTION1_6B80D672B3F74F4697212696D890CFE1)
 */

// esri
import Graphic from "esri/Graphic";
import { substitute } from "esri/intl";
import PopupTemplate from "esri/PopupTemplate";

// esri.core
import Collection from "esri/core/Collection";
import { eventKey } from "esri/core/events";
import Handles from "esri/core/Handles";
import { createAbortController } from "esri/core/promiseUtils";
import { escapeRegExpString } from "esri/core/string";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.portal
import Portal from "esri/portal/Portal";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import {
  ActiveMenu,
  SearchItem,
  SearchResponse,
  SearchResult,
  SearchResults,
  SuggestResult,
  SupportedSearchSource
} from "esri/widgets/interfaces";
import Widget from "esri/widgets/Widget";

// esri.widgets.Search
import SearchResultRenderer from "esri/widgets/Search/SearchResultRenderer";
import SearchViewModel from "esri/widgets/Search/SearchViewModel";

// esri.widgets.Search.t9n
import SearchMessages from "esri/widgets/Search/t9n/Search";

// esri.widgets.support
import { GoToOverride } from "esri/widgets/support/GoTo";
import { VNode } from "esri/widgets/support/interfaces";
import {
  isActivationKey,
  keepMenuItemWithinView,
  messageBundle,
  storeNode,
  tsx,
  vmEvent
} from "esri/widgets/support/widget";

const CSS = {
  base: "esri-search esri-widget",
  loader: "esri-widget__loader",
  loaderText: "esri-widget__loader-text",
  loaderAnimation: "esri-widget__loader-animation",
  esriInput: "esri-input",
  hasMultipleSources: "esri-search--multiple-sources",
  isLoading: "esri-search--loading",
  isSearching: "esri-search--searching",
  showSuggestions: "esri-search--show-suggestions",
  showSources: "esri-search--sources",
  showWarning: "esri-search--warning",
  container: "esri-search__container",
  input: "esri-search__input",
  inputContainer: "esri-search__input-container",
  form: "esri-search__form",
  submitButton: "esri-search__submit-button",
  sourcesButton: "esri-search__sources-button",
  clearButton: "esri-search__clear-button",
  sourceName: "esri-search__source-name",
  suggestionsMenu: "esri-search__suggestions-menu",
  suggestionList: "esri-search__suggestions-list",
  suggestionListCurrentLocation: "esri-search__suggestions-list--current-location",
  sourcesMenu: "esri-search__sources-menu",
  source: "esri-search__source",
  warningMenu: "esri-search__warning-menu",
  warningMenuBody: "esri-search__warning-body",
  warningMenuHeader: "esri-search__warning-header",
  warningMenuText: "esri-search__warning-text",
  noValueText: "esri-search__no-value-text",
  esriWidgetDisabled: "esri-widget--disabled",

  // icons + common
  button: "esri-widget--button",
  fallbackText: "esri-icon-font-fallback-text",
  header: "esri-widget__heading",
  locate: "esri-icon-locate-circled",
  menu: "esri-menu",
  menuList: "esri-menu__list",
  menuItem: "esri-menu__list-item",
  menuItemActive: "esri-menu__list-item--active",
  menuItemFocus: "esri-menu__list-item--focus",
  menuHeader: "esri-menu__header",
  loadingIcon: "esri-icon-loading-indicator esri-rotating",
  searchIcon: "esri-icon-search",
  dropdownIcon: "esri-icon-down-arrow esri-search__sources-button--down",
  dropupIcon: "esri-icon-up-arrow esri-search__sources-button--up",
  clearIcon: "esri-icon-close",
  noticeIcon: "esri-icon-notice-triangle",
  widgetIcon: "esri-icon-search",

  // common
  disabled: "esri-disabled"
};

const regexContainsHTML = /<[a-z/][\s\S]*>/i;

@subclass("esri.widgets.Search")
class Search extends Widget {
  /**
   * The result object returned from a [search()](#search).
   *
   * @typedef SearchResult
   *
   * @property {module:esri/geometry/Extent} extent - The extent, or bounding box, of the returned feature. The value depends on
   * the data source, with higher quality data sources returning extents closer to the `feature` obtained from the search.
   * @property {module:esri/Graphic} feature - The resulting feature or location obtained from the search.
   * @property {string} name - The name of the result.
   * @property {module:esri/Graphic} target - The target of the result, which is a {@link module:esri/Graphic} used
   * for either {@link module:esri/views/MapView#goTo MapView goTo()} or {@link module:esri/views/SceneView#goTo SceneView goTo()} navigation.
   */

  /**
   * The result object returned from a [suggest()](#suggest).
   *
   * @typedef SuggestResult
   *
   * @property {string} key - The key related to the suggest result.
   * @property {string} text - The string name of the suggested location to geocode.
   * @property {number} sourceIndex - The index of the currently selected result.
   */

  /**
   * When resolved, returns this response after calling [search](#search).
   *
   * @typedef SearchResponse
   *
   * @property {number} activeSourceIndex - The index of the source from which the search result was obtained.
   * @property {Error[]} errors - An array of error objects returned from the search results.
   * @property {number} numResults - The number of search results.
   * @property {string} searchTerm - The searched expression
   * @property {Object[]} results - An array of objects representing the results of search. See object specification
   * table below for more information about the result object.
   * @property {module:esri/widgets/Search~SearchResult[]} results.results - An array of search results.
   * @property {number} results.sourceIndex - The index of the currently selected source.
   * @property {Object} results.source - The [source](#sources) of the selected result.
   */

  /**
   * When resolved, returns this response after calling [suggest](#suggest).
   *
   * @typedef SuggestResponse
   *
   * @property {number} activeSourceIndex - The index of the source from which suggestions are obtained. This value is `-1` when all sources are selected.
   * @property {Error[]} errors - An array of error objects returned from the suggest results.
   * @property {number} numResults - The number of suggest results.
   * @property {string} searchTerm - The search expression used for the suggest.
   * @property {Object[]} results - An array of objects representing the results of suggest. See object specification
   * table below for more information about the result object.
   * @property {module:esri/widgets/Search~SuggestResult[]} results.results - An array of suggest results.
   * @property {number} results.sourceIndex - The index of the currently selected source.
   * @property {Object} results.source - The [source](#sources) of the selected result.
   */

  /**
   * Fires when the widget's text input loses focus.
   *
   * @event module:esri/widgets/Search#search-blur
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("search-blur", function(event){
   *   console.log("Focus removed from search input textbox.");
   * });
   */

  /**
   * Fires when the widget's text input sets focus.
   *
   * @event module:esri/widgets/Search#search-focus
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("search-focus", function(event){
   *   console.log("Search input textbox is focused.");
   * });
   */

  /**
   * Fires when a result is cleared from the input box or a new result is selected.
   *
   * @event module:esri/widgets/Search#search-clear
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("search-clear", function(event){
   *   console.log("Search input textbox was cleared.");
   * });
   */

  /**
   * Fires when the [search()](#search) method starts.
   *
   * @event module:esri/widgets/Search#search-start
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("search-start", function(event){
   *   console.log("Search started.");
   * });
   */

  /**
   * Fires when the [suggest()](#suggest) method starts.
   *
   * @event module:esri/widgets/Search#suggest-start
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("suggest-start", function(event){
   *   console.log("suggest-start", event);
   * });
   */

  /**
   * Fires when the [search()](#search) method is called and returns its results.
   *
   * @event module:esri/widgets/Search#search-complete
   * @property {number} activeSourceIndex - The index of the source from which the search result was obtained.
   * @property {Error[]} errors - An array of error objects returned from the search results.
   * @property {number} numResults - The number of results from the search.
   * @property {string} searchTerm - The searched expression.
   * @property {Object[]} results - An array of objects representing the results of the search. See object specification
   * table below for more information about the result object.
   * @property {module:esri/widgets/Search~SearchResult[]} results.results - An array of objects containing the search results.
   * @property {number} results.sourceIndex - The index of the currently selected source.
   * @property {Object} results.source - The [source](#sources) of the selected result.
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("search-complete", function(event){
   *   // The results are stored in the event Object[]
   *   console.log("Results of the search: ", event);
   * });
   */

  /**
   * Fires when a search result is selected.
   *
   * @event module:esri/widgets/Search#select-result
   * @property {Object} result - An object containing the results of the search.
   * @property {module:esri/geometry/Extent} result.extent - The extent of the result to zoom to.
   * @property {module:esri/Graphic} result.feature - The graphic feature to place at the location of the search result.
   * @property {string} result.name - The string name of the geocoded location.
   * @property {Object} source - The source of the selected result. Please see [sources](#sources) for
   * additional information on its properties.
   * @property {number} sourceIndex - The index of the source of the selected result.
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("select-result", function(event){
   *   console.log("The selected search result: ", event);
   * });
   */

  /**
   * Fires when the [suggest](#suggest) method is called and returns its results.
   *
   * @event module:esri/widgets/Search#suggest-complete
   * @property {number} activeSourceIndex - The index of the source from which suggestions are obtained. This value is `-1` when all sources are selected.
   * @property {Error[]} errors - An array of error objects returned from the suggest results.
   * @property {number} numResults - The number of suggest results.
   * @property {string} searchTerm - The search expression used for the suggest.
   * @property {Object[]} results - An array of objects representing the results of suggest. See object specification table below for more information on this object.
   * @property {module:esri/widgets/Search~SuggestResult[]} results.results - An array of objects containing the suggest results.
   * @property {number} results.sourceIndex - The index of the currently selected source.
   * @property {Object} results.source - The [source](#sources) of the selected result.
   *
   * @example
   * const searchWidget = new Search();
   *
   * searchWidget.on("suggest-complete", function(event){
   *   // The results are stored in the event Object[]
   *   console.log("Results of suggest: ", event);
   * });
   */

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Search
   * @extends module:esri/widgets/Widget
   * @mixes module:esri/widgets/support/GoTo
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * const searchWidget = new Search({
   *   view: view,
   *   sources: [ ... ]
   * });
   */
  constructor(value?: any, parentNode?: string | Element) {
    super(value, parentNode);

    this.own(
      watchUtils.watch(this, "searchTerm", (value) => {
        const hideActiveMenu =
          (value && this.activeMenu === "warning") ||
          (!value && !this.get("viewModel.selectedSuggestion.location"));

        if (hideActiveMenu) {
          this._clearActiveMenu();
        }
      }),
      watchUtils.on(this, "viewModel.allSources", "change", () => this._watchSourceChanges()),
      watchUtils.init(this, "activeMenu", () => this._resetActiveMenuItemIndex()),
      watchUtils.init(
        this,
        "viewModel.defaultPopupTemplate",
        (defaultPopupTemplate: PopupTemplate) => {
          if (defaultPopupTemplate) {
            defaultPopupTemplate.content = this._renderSearchResultsContent.bind(this);
          }
        }
      )
    );
  }

  override destroy(): void {
    this._handles.destroy();
    this._handles = null;

    this._cancelSuggest();
    this._cancelSearch();

    if (this._searchResultRenderer) {
      this._searchResultRenderer.viewModel = null;
      this._searchResultRenderer.destroy();
      this._searchResultRenderer = null;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  @property()
  private _activeMenuItemIndex = -1;

  private _handles = new Handles();

  private _inputNode: HTMLInputElement = null;

  private _menuItemCount = 0;

  private _sourceMenuButtonNode: HTMLDivElement = null;

  private _sourceListNode: HTMLUListElement = null;

  private _suggestionListNode: HTMLDivElement = null;

  private _searchResultRenderer = new SearchResultRenderer();

  private _suggestController: AbortController;

  private _searchController: AbortController;

  private _locateFailed: boolean = null;

  private _container: HTMLDivElement = null;

  @property()
  protected get displayedSearchTerm(): string {
    return `${this.viewModel.searchTerm}`.trim();
  }

  @property({ readOnly: true })
  protected get inputId(): string {
    return this._buildId("input");
  }

  @property({ readOnly: true })
  protected get suggestionsMenuId(): string {
    return this._buildId("suggest-menu");
  }

  @property({ readOnly: true })
  protected get sourceMenuId(): string {
    return this._buildId("source-menu");
  }

  @property({ readOnly: true })
  protected get sourceMenuButtonId(): string {
    return this._buildId("source-menu-button");
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeMenu
  //----------------------------------

  /**
   * The current active menu of the Search widget.
   *
   * @name activeMenu
   * @instance
   * @type {"none" | "suggestion" | "source" | "warning"}
   * @default none
   */
  @property()
  activeMenu: ActiveMenu = "none";

  //----------------------------------
  //  activeSource
  //----------------------------------

  /**
   * The [source](#sources) object currently selected. Can be either a
   * {@link module:esri/widgets/Search/LayerSearchSource} or a {@link module:esri/widgets/Search/LocatorSearchSource}.
   *
   * @name activeSource
   * @instance
   * @default null
   * @type {module:esri/widgets/Search/LayerSearchSource | module:esri/widgets/Search/LocatorSearchSource}
   * @readonly
   */
  @aliasOf("viewModel.activeSource")
  activeSource: SupportedSearchSource = null;

  //----------------------------------
  //  activeSourceIndex
  //----------------------------------

  /**
   * The selected source's index. This value is `-1` when all sources are selected.
   *
   * @name activeSourceIndex
   * @instance
   * @type {number}
   * @default 0
   */
  @aliasOf("viewModel.activeSourceIndex")
  activeSourceIndex: number = null;

  //----------------------------------
  //  allPlaceholder
  //----------------------------------

  /**
   * String value used as a hint for input text when searching on multiple sources. See
   * the image below to view the location and style of this text in the context of the widget.
   *
   * ![search-allPlaceholder](../assets/img/apiref/widgets/search-allplaceholder.png)
   *
   * @name allPlaceholder
   * @instance
   * @type {string}
   * @default "Find address or place"
   */
  @aliasOf("viewModel.allPlaceholder")
  allPlaceholder: string = null;

  //----------------------------------
  //  allSources
  //----------------------------------

  //----------------------------------
  //  allSources
  //----------------------------------
  /**
   * The combined collection of {@link module:esri/widgets/Search/SearchViewModel#defaultSources defaultSources}
   * and {@link module:esri/widgets/Search/SearchViewModel#sources sources}.
   * The {@link module:esri/widgets/Search/SearchViewModel#defaultSources defaultSources}
   * displays first in the Search UI.
   *
   * @name allSources
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/Search/LayerSearchSource | module:esri/widgets/Search/LocatorSearchSource>}
   * @readonly
   * @since 4.8
   */
  @aliasOf("viewModel.allSources")
  allSources: Collection<SupportedSearchSource> = null;

  //----------------------------------
  //  autoNavigate
  //----------------------------------

  /**
   * Indicates whether to automatically navigate to the selected result.
   *
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.autoNavigate")
  autoNavigate: boolean = null;

  //----------------------------------
  //  autoSelect
  //----------------------------------

  /**
   * Indicates whether to automatically select and zoom to the first geocoded result. If `false`, the
   * [findAddressCandidates](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm)
   * operation will still geocode the input string, but the top result will not be selected. To work with the
   * geocoded results, you can set up a [search-complete](#event-search-complete) event handler and get the results
   * through the event object.
   *
   * @name autoSelect
   * @instance
   * @type {boolean}
   * @default true
   */
  @aliasOf("viewModel.autoSelect")
  autoSelect: boolean = null;

  //----------------------------------
  //  defaultSources
  //----------------------------------
  /**
   * A read-only property that is a {@link module:esri/core/Collection Collection}
   * of {@link module:esri/widgets/Search/LayerSearchSource}
   * and/or {@link module:esri/widgets/Search/LocatorSearchSource}. This property
   * may contain [ArcGIS Portal](https://enterprise.arcgis.com/en/portal/)
   * [locators](http://enterprise.arcgis.com/en/server/latest/publish-services/windows/geocode-services.htm)
   * and any web map or web scene [configurable search sources](http://doc.arcgis.com/en/arcgis-online/create-maps/configure-feature-search.htm).
   * Web maps or web scenes may contain
   * {@link module:esri/layers/MapImageLayer map}/{@link module:esri/layers/FeatureLayer feature} service feature
   * layer(s), and/or {@link module:esri/webdoc/applicationProperties/SearchTable table(s)} as sources.
   *
   * This property is used to populate the Search UI if the {@link module:esri/widgets/Search/SearchViewModel#sources sources} property is not set.
   *
   * @name defaultSources
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/Search/LayerSearchSource | module:esri/widgets/Search/LocatorSearchSource>}
   * @readonly
   * @since 4.8
   */
  @aliasOf("viewModel.defaultSources")
  defaultSources: Collection<SupportedSearchSource> = null;

  //----------------------------------
  //  disabled
  //----------------------------------

  /**
   * When true, the widget is visually withdrawn and cannot be interacted with.
   *
   * @name disabled
   * @instance
   * @type {boolean}
   * @since 4.15
   * @default false
   */
  @property()
  disabled = false;

  //----------------------------------
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride")
  goToOverride: GoToOverride = null;

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
  override iconClass = CSS.widgetIcon;

  //----------------------------------
  //  includeDefaultSources
  //----------------------------------

  /**
   * Indicates whether or not to include {@link module:esri/widgets/Search/SearchViewModel#defaultSources defaultSources} in the Search UI.
   * This can be a boolean value or a function that returns an array of Search {@link module:esri/widgets/Search/SearchViewModel#sources sources}.
   *
   * @name includeDefaultSources
   * @instance
   * @type {boolean | Function}
   * @default true
   * @since 4.8
   *
   * @example
   * // includeDefaultSources passed as a boolean value
   * const searchWidget = new Search({
   *   view: view,
   *   sources: [customSearchSource],
   *   includeDefaultSources: false
   * });
   *
   * // includeDefaultSources passed as a function
   * const searchWidget = new Search({
   *   view: view,
   *   sources: [customSearchSource],
   *   includeDefaultSources: function(sourcesResponse) {
   *     return sourcesResponse.defaultSources;
   *   }
   * });
   */
  @aliasOf("viewModel.includeDefaultSources")
  includeDefaultSources: boolean = null;

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
  override label: string = undefined;

  //----------------------------------
  //  locationEnabled
  //----------------------------------

  /**
   * Enables location services within the widget.
   *
   * ![locationEnabled](../assets/img/apiref/widgets/search-locationEnabled.png)
   *
   * ::: esri-md class="panel trailer-1"
   * The use of this property is only supported on secure origins.
   * To use it, switch your application to a secure origin, such as HTTPS.
   * Note that localhost is considered "potentially secure" and can be used for easy testing in browsers that supports
   * [Window.isSecureContext](https://developer.mozilla.org/en-US/docs/Web/API/isSecureContext#browser_compatibility)
   * (currently Chrome and Firefox).
   * :::
   *
   * @name locationEnabled
   * @instance
   * @since 4.6
   * @type {boolean}
   * @default true
   *
   */
  @aliasOf("viewModel.locationEnabled")
  locationEnabled: boolean = null;

  //----------------------------------
  //  maxResults
  //----------------------------------

  /**
   * The maximum number of results returned by the widget if not specified by the source.
   *
   * @name maxResults
   * @instance
   * @type {number}
   * @default 6
   */
  @aliasOf("viewModel.maxResults")
  maxResults: number = null;

  //----------------------------------
  //  maxSuggestions
  //----------------------------------

  /**
   * The maximum number of suggestions returned by the widget if not specified by the source.
   *
   * If working with the default
   * [ArcGIS Online Geocoding service](https://developers.arcgis.com/rest/geocode/api-reference/overview-world-geocoding-service.htm),
   * the default remains at `5`.
   *
   * @name maxSuggestions
   * @instance
   * @type {number}
   * @default 6
   */
  @aliasOf("viewModel.maxSuggestions")
  maxSuggestions: number = null;

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
  @messageBundle("esri/widgets/Search/t9n/Search")
  messages: SearchMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * The widget's common message bundle
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
  //  minSuggestCharacters
  //----------------------------------

  /**
   * The minimum number of characters needed for the search if not specified by the source.
   *
   * @name minSuggestCharacters
   * @instance
   * @type {number}
   * @default 3
   */
  @aliasOf("viewModel.minSuggestCharacters")
  minSuggestCharacters: number = null;

  //----------------------------------
  //  popupEnabled
  //----------------------------------

  /**
   * Indicates whether to display the {@link module:esri/widgets/Popup} on feature click. The graphic can
   * be clicked to display a {@link module:esri/widgets/Popup}.
   *
   * @name popupEnabled
   * @instance
   * @type {boolean}
   * @default true
   */
  @aliasOf("viewModel.popupEnabled")
  popupEnabled: boolean = null;

  //----------------------------------
  //  popupTemplate
  //----------------------------------

  /**
   * A customized {@link module:esri/PopupTemplate} for the selected feature.
   * Note that any {@link module:esri/PopupTemplate templates}
   * defined on [allSources](#allSources) take precedence over those defined directly on the template.
   *
   * @name popupTemplate
   * @instance
   * @type {module:esri/PopupTemplate}
   */
  @aliasOf("viewModel.popupTemplate")
  popupTemplate: PopupTemplate = null;

  //----------------------------------
  //  portal
  //----------------------------------

  /**
   * It is possible to search a specified portal instance's [locator services](http://enterprise.arcgis.com/en/portal/latest/administer/windows/configure-portal-to-geocode-addresses.htm)
   * Use this property to set this [ArcGIS Portal](https://enterprise.arcgis.com/en/portal/) instance to search.
   *
   * @name portal
   * @instance
   * @type {module:esri/portal/Portal}
   * @default
   * @since 4.8
   */
  @aliasOf("viewModel.portal")
  portal: Portal = null;

  //----------------------------------
  //  resultGraphic
  //----------------------------------

  /**
   * The graphic used to highlight the resulting feature or location.
   *
   * :::esri-md class="panel trailer-1"
   * A graphic will be placed in the View's
   * {@link module:esri/views/View#graphics graphics}
   * for {@link module:esri/views/layers/LayerView layer views}
   * that do not support the `highlight` method.
   * :::
   *
   * @name resultGraphic
   * @instance
   * @type {module:esri/Graphic}
   * @readonly
   */
  @aliasOf("viewModel.resultGraphic")
  resultGraphic: Graphic = null;

  //----------------------------------
  //  resultGraphicEnabled
  //----------------------------------

  /**
   * Indicates if the [resultGraphic](#resultGraphic) will display at the
   * location of the selected feature.
   *
   * @name resultGraphicEnabled
   * @instance
   * @type {boolean}
   * @default true
   */
  @aliasOf("viewModel.resultGraphicEnabled")
  resultGraphicEnabled: boolean = null;

  //----------------------------------
  //  results
  //----------------------------------

  /**
   * An array of objects, each containing a [SearchResult](#SearchResult) from the search.
   *
   * @name results
   * @instance
   * @type {Object[]}
   * @readonly
   */
  @aliasOf("viewModel.results")
  results: SearchResults<SearchResult>[] = null;

  //----------------------------------
  //  searchAllEnabled
  //----------------------------------

  /**
   * Indicates whether to display the option to search all sources. When `true`, the "All" option
   * is displayed by default:
   *
   * ![search-searchAllEnabled-true](../assets/img/apiref/widgets/search-enablesearchingall-true.png)
   *
   * When `false`, no option to search all sources at once is available:
   *
   * ![search-searchAllEnabled-false](../assets/img/apiref/widgets/search-enablesearchingall-false.png)
   *
   * @name searchAllEnabled
   * @instance
   * @type {boolean}
   * @default true
   */
  @aliasOf("viewModel.searchAllEnabled")
  searchAllEnabled: boolean = null;

  //----------------------------------
  //  searchTerm
  //----------------------------------

  /**
   * The value of the search box input text string.
   *
   * @name searchTerm
   * @instance
   * @type {string}
   */
  @aliasOf("viewModel.searchTerm")
  searchTerm: string = null;

  //----------------------------------
  //  selectedResult
  //----------------------------------

  /**
   * The result selected from a search.
   *
   * @name selectedResult
   * @instance
   * @type {module:esri/widgets/Search~SearchResult}
   *
   * @see [Event: select-result](#event-select-result)
   * @see [select()](#select)
   * @readonly
   */
  @aliasOf("viewModel.selectedResult")
  selectedResult: SearchResult = null;

  //----------------------------------
  //  sources
  //----------------------------------

  /**
   * The Search widget may be used to search features in a
   * {@link module:esri/layers/MapImageLayer map}/{@link module:esri/layers/FeatureLayer feature} service feature
   * layer(s), {@link module:esri/layers/SceneLayer SceneLayers} with an associated feature layer,
   * {@link module:esri/layers/buildingSublayers/BuildingComponentSublayer} with an associated feature layer,
   * {@link module:esri/layers/GeoJSONLayer}, {@link module:esri/layers/CSVLayer} or
   * {@link module:esri/layers/OGCFeatureLayer}, or {@link module:esri/webdoc/applicationProperties/SearchTable table},
   * or geocode locations with a {@link module:esri/rest/locator}. The `sources` property defines the sources from which
   * to search for the [view](#view) specified by the Search widget instance. There are two types of sources:
   *
   * * {@link module:esri/widgets/Search/LayerSearchSource}
   * * {@link module:esri/widgets/Search/LocatorSearchSource}
   *
   * Any combination of these sources may be used
   * together in the same instance of the Search widget.
   *
   * ::: esri-md class="panel trailer-1"
   * Feature layers created from client-side graphics are not supported.
   * :::
   *
   * @name sources
   * @autocast
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/Search/SearchSource>}
   *
   * @example
   * // Default sources[] when sources is not specified
   * [
   *   {
   *     locator: new Locator({ url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer" }),
   *     singleLineFieldName: "SingleLine",
   *     outFields: ["Addr_type"],
   *     name: "ArcGIS World Geocoding Service",
   *     placeholder: "Address",
   *     resultSymbol: {
   *        type: "picture-marker",  // autocasts as new PictureMarkerSymbol()
   *        url: this.basePath + "/images/search/search-symbol-32.png",
   *        size: 24,
   *        width: 24,
   *        height: 24,
   *        xoffset: 0,
   *        yoffset: 0
   *    }
   *   }
   * ]
   *
   * @example
   * // Example of multiple sources[]
   * const sources = [
   * {
   *   locator: new Locator({ url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer" }),
   *   singleLineFieldName: "SingleLine",
   *   name: "Custom Geocoding Service",
   *   placeholder: "Search Geocoder",
   *   maxResults: 3,
   *   maxSuggestions: 6,
   *   suggestionsEnabled: false,
   *   minSuggestCharacters: 0
   * }, {
   *   layer: new FeatureLayer({
   *     url: "https://services.arcgis.com/DO4gTjwJVIJ7O9Ca/arcgis/rest/services/GeoForm_Survey_v11_live/FeatureServer/0",
   *     outFields: ["*"]
   *   }),
   *   searchFields: ["Email", "URL"],
   *   displayField: "Email",
   *   exactMatch: false,
   *   outFields: ["*"],
   *   name: "Point FS",
   *   placeholder: "example: esri",
   *   maxResults: 6,
   *   maxSuggestions: 6,
   *   suggestionsEnabled: true,
   *   minSuggestCharacters: 0
   * },
   * {
   *   layer: new FeatureLayer({
   *     outFields: ["*"]
   *   }),
   *   placeholder: "esri",
   *   name: "A FeatureLayer",
   *   prefix: "",
   *   suffix: "",
   *   maxResults: 1,
   *   maxSuggestions: 6,
   *   exactMatch: false,
   *   searchFields: [], // defaults to FeatureLayer.displayField
   *   displayField: "", // defaults to FeatureLayer.displayField
   *   minSuggestCharacters: 0
   * }
   * ];
   *
   * @example
   * // Set source(s) on creation
   * const searchWidget = new Search({
   *   sources: []
   * });
   *
   * @example
   * // Set source(s)
   * const searchWidget = new Search();
   * const sources = [{ ... }, { ... }, { ... }]; //array of sources
   * searchWidget.sources = sources;
   *
   * @example
   * // Add to source(s)
   * const searchWidget = new Search();
   * searchWidget.sources.push({ ... });  //new source
   */
  @aliasOf("viewModel.sources")
  sources: Collection<SupportedSearchSource> = null;

  //----------------------------------
  //  suggestions
  //----------------------------------

  /**
   * An array of results from the [suggest method](#suggest).
   *
   * This is available if working with a 10.3 or greater geocoding service that has [suggest capability
   * loaded](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm) or a
   * 10.3 or greater feature layer that supports pagination, i.e. `supportsPagination = true`.
   *
   * @name suggestions
   * @instance
   * @type {module:esri/widgets/Search~SuggestResult[]}
   * @readonly
   */
  @aliasOf("viewModel.suggestions")
  suggestions: SearchResults<SuggestResult>[] = null;

  //----------------------------------
  //  suggestionsEnabled
  //----------------------------------

  /**
   * Enable suggestions for the widget.
   *
   * This is only available if working with a 10.3 or greater geocoding service that has [suggest capability
   * loaded](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm) or a 10.3 or greater feature layer that supports pagination, i.e. `supportsPagination = true`.
   *
   * @name suggestionsEnabled
   * @instance
   * @type {boolean}
   * @default true
   */
  @aliasOf("viewModel.suggestionsEnabled")
  suggestionsEnabled: boolean = null;

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
  view: IMapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Search/SearchViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Search/SearchViewModel}
   * @autocast
   */
  @vmEvent([
    "search-complete",
    "search-clear",
    "search-start",
    "select-result",
    "suggest-start",
    "suggest-complete"
  ])
  @property({ type: SearchViewModel })
  override viewModel = new SearchViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Clears the current searchTerm, search results, suggest results, graphic, and graphics layer.
   * It also hides any open menus.
   */
  @aliasOf("viewModel.clear")
  clear(): void {}

  /**
   * Brings focus to the widget's text input.
   *
   * @method
   */
  focus(): void {
    this._inputNode?.focus();
    this.emit("search-focus");
  }

  /**
   * Unfocuses the widget's text input.
   *
   * @method
   */
  blur(): void {
    this._inputNode?.blur();
    this.emit("search-blur");
  }

  /**
   * Depending on the sources specified, search() queries the feature layer(s) and/or performs
   * address matching using any specified {@link module:esri/rest/locator locator(s)} and
   * returns any applicable results.
   *
   * @param {string|module:esri/geometry/Geometry|module:esri/widgets/Search~SuggestResult|number[][]} [searchTerm] - This searchTerm can be
   *        a string, geometry, suggest candidate object, or an array of [longitude,latitude] coordinate pairs.
   *        If a geometry is supplied, then it will reverse geocode (locator) or
   *        findAddressCandidates with geometry instead of text.
   *
   * @return {Promise<module:esri/widgets/Search~SearchResponse>} When resolved, returns a [SearchResponse](#SearchResponse) containing a
   *                   [SearchResult](#SearchResult).
   */

  search(searchItem?: SearchItem): Promise<SearchResponse<SearchResults<SearchResult>>> {
    this._clearActiveMenu();
    this._cancelSuggest();
    this._cancelSearch();

    const controller = createAbortController();
    const { signal } = controller;

    this._searchController = controller;

    return this.viewModel
      .search(searchItem, { signal })
      .catch((response) => {
        if (this._searchController !== controller) {
          return undefined;
        }

        this._clearActiveMenu();
        this._searchController = null;
        return response;
      })
      .then((searchResponse) => {
        if (this._searchController !== controller) {
          return undefined;
        }

        this.activeMenu = !searchResponse.numResults ? "warning" : "none";
        this._searchController = null;
        return searchResponse;
      });
  }

  /**
   * Performs a suggest() request on the active Locator. It also uses the current value of
   * the widget or one that is passed in.
   *
   * Suggestions are available if working with a 10.3 or greater geocoding service that has
   * [suggest capability
   * loaded](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-suggest.htm) or a 10.3 or greater feature layer that supports pagination, i.e.
   * `supportsPagination = true`.
   *
   * @param {string} [value] - The string value used to suggest() on an active Locator or feature layer. If
   *                         nothing is passed in, takes the current value of the widget.
   *
   *
   * @return {Promise<module:esri/widgets/Search~SuggestResponse>} When resolved, returns [SuggestResponse](#SuggestResponse) containing an array of result objects. Each of these results contains a [SuggestResult](#SuggestResult).
   */
  suggest(query?: string): Promise<SearchResponse<SearchResults<SuggestResult>>> {
    this._cancelSuggest();

    const controller = createAbortController();
    const { signal } = controller;

    this._suggestController = controller;

    return this.viewModel
      .suggest(query, null, { signal })
      .then((suggestResponse) => {
        if (this._suggestController !== controller) {
          return undefined;
        }

        this._suggestController = null;

        if (suggestResponse.numResults) {
          this._openSuggestionMenu();
        }

        this._scrollToTopSuggestion();

        return suggestResponse;
      })
      .catch(() => {
        if (this._suggestController !== controller) {
          return;
        }

        this._suggestController = null;

        return null;
      });
  }

  override render(): VNode {
    const { state } = this.viewModel;

    const baseClasses = {
      [CSS.disabled]: state === "disabled",
      [CSS.esriWidgetDisabled]: this.disabled
    };

    return (
      <div class={this.classes(CSS.base, baseClasses)}>
        {state === "loading" ? this.renderLoader() : this.renderContainer()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------
  protected renderSubmitButton(): VNode {
    const { messages } = this;

    return (
      <button
        aria-label={messages.searchButtonTitle}
        bind={this}
        class={this.classes(CSS.submitButton, CSS.button)}
        key="esri-search__submit-button"
        onclick={this._handleSearchButtonClick}
        title={messages.searchButtonTitle}
      >
        <span aria-hidden="true" class={CSS.searchIcon} />
      </button>
    );
  }

  protected renderWarningMenu(): VNode {
    return (
      <div key="esri-search__error-menu" class={this.classes(CSS.menu, CSS.warningMenu)}>
        <div class={CSS.warningMenuBody}>{this.renderWarning()}</div>
      </div>
    );
  }

  protected renderSourceMenuButton(): VNode {
    const { messages, activeMenu, sourceMenuId, sourceMenuButtonId } = this;
    const { activeSourceIndex, allSources } = this.viewModel;

    return allSources.length > 1 ? (
      <button
        id={sourceMenuButtonId}
        key="esri-search__source-menu-button"
        bind={this}
        aria-label={messages.searchIn}
        title={messages.searchIn}
        aria-haspopup="true"
        aria-expanded={(activeMenu === "source").toString()}
        aria-controls={sourceMenuId}
        class={this.classes(CSS.sourcesButton, CSS.button)}
        onclick={this._handleSourcesMenuToggleClick}
        onfocus={this._clearActiveMenu}
        afterCreate={storeNode}
        data-node-ref="_sourceMenuButtonNode"
      >
        <span aria-hidden="true" class={CSS.dropdownIcon} />
        <span aria-hidden="true" class={CSS.dropupIcon} />
        <span class={CSS.sourceName}>{this._getSourceName(activeSourceIndex)}</span>
      </button>
    ) : null;
  }

  protected renderSourcesList(): VNode {
    const { allSources, searchAllEnabled } = this.viewModel;
    const { _activeMenuItemIndex, activeMenu, sourceMenuId, sourceMenuButtonId } = this;

    const activeDescendantId =
      activeMenu === "source" && _activeMenuItemIndex > -1
        ? this._buildId("source-item", _activeMenuItemIndex)
        : null;

    return allSources.length > 1 ? (
      <ul
        aria-activedescendant={activeDescendantId}
        aria-labelledby={sourceMenuButtonId}
        id={sourceMenuId}
        role="menu"
        bind={this}
        afterCreate={storeNode}
        onkeydown={this._handleSourceMenuKeydown}
        onkeyup={this._handleSourceMenuKeyup}
        data-node-ref="_sourceListNode"
        class={CSS.menuList}
        tabIndex={-1}
      >
        {searchAllEnabled ? this.renderSource(SearchViewModel.ALL_INDEX) : null}
        {allSources.map((_source, sourceIndex) => this.renderSource(sourceIndex)).toArray()}
      </ul>
    ) : null;
  }

  protected renderSourcesMenu(): VNode {
    const { allSources } = this.viewModel;

    return allSources.length > 1 ? (
      <div key="esri-search__source-menu" class={this.classes(CSS.menu, CSS.sourcesMenu)}>
        {this.renderSourcesList()}
      </div>
    ) : null;
  }

  protected renderLoader(): VNode {
    const { messages, messagesCommon } = this;

    return (
      <div class={CSS.loader} key="base-loader">
        <span aria-hidden="true" class={CSS.loaderAnimation} />
        <span class={CSS.fallbackText}>{messages.searchButtonTitle}</span>
        <span class={CSS.loaderText}>{messagesCommon.loading}</span>
      </div>
    );
  }

  protected renderContainer(): VNode {
    const { allSources, state } = this.viewModel;
    const { activeMenu } = this;

    const containerNodeClasses = {
      [CSS.hasMultipleSources]: allSources.length > 1,
      [CSS.isLoading]: state === "loading",
      [CSS.isSearching]: state === "searching",
      [CSS.showWarning]: activeMenu === "warning",
      [CSS.showSources]: activeMenu === "source",
      [CSS.showSuggestions]: activeMenu === "suggestion"
    };

    return (
      <div
        tabIndex={-1}
        afterCreate={(el: HTMLDivElement) => {
          this._container = el;
          el.addEventListener("focusout", this._removeActiveMenu);
        }}
        afterRemoved={(el: HTMLInputElement) => {
          el.removeEventListener("focusout", this._removeActiveMenu);
        }}
        class={this.classes(containerNodeClasses, CSS.container)}
        key="base-container"
      >
        {this.renderSourceMenuButton()}
        {this.renderSourcesMenu()}
        {this.renderInputContainer()}
        {this.renderSubmitButton()}
        {this.renderWarningMenu()}
      </div>
    );
  }

  protected renderClearButton(): VNode {
    return this.searchTerm ? (
      <button
        bind={this}
        class={this.classes(CSS.clearButton, CSS.button)}
        key="esri-search__clear-button"
        onclick={this._handleClearButtonClick}
        onfocus={this._clearActiveMenu}
        title={this.messages.clearButtonTitle}
      >
        <span aria-hidden="true" class={CSS.clearIcon} />
      </button>
    ) : null;
  }

  protected renderLocationGroup(): VNode {
    const { messages, locationEnabled, displayedSearchTerm } = this;
    const showLocationOption = locationEnabled && !displayedSearchTerm;
    const focused = this.activeMenu === "suggestion" && this._activeMenuItemIndex === 0;

    return showLocationOption ? (
      <ul
        role="group"
        key={`esri-search__suggestion-list-current-location`}
        class={this.classes(CSS.menuList, CSS.suggestionList, CSS.suggestionListCurrentLocation)}
      >
        <li
          bind={this}
          data-current-location-item={true}
          onclick={this._handleUseCurrentLocationClick}
          id={this._buildId("suggestion-item", 0)}
          aria-selected={(
            this.activeMenu === "suggestion" && this._activeMenuItemIndex === 0
          ).toString()}
          role="option"
          class={this.classes(CSS.menuItem, focused ? CSS.menuItemFocus : null)}
        >
          <span aria-hidden="true" class={CSS.locate} /> {messages.useCurrentLocation}
        </li>
      </ul>
    ) : null;
  }

  protected renderInput(): VNode {
    const {
      activeMenu,
      locationEnabled,
      displayedSearchTerm,
      messages,
      suggestionsMenuId,
      inputId,
      _activeMenuItemIndex
    } = this;
    const { maxInputLength, placeholder, searchTerm, suggestionCount } = this.viewModel;

    const showLocationOption = locationEnabled && !displayedSearchTerm;
    const hasSuggestions = !!(showLocationOption || suggestionCount);
    const activeDescendantId =
      activeMenu === "suggestion" && _activeMenuItemIndex > -1
        ? this._buildId("suggestion-item", _activeMenuItemIndex)
        : null;

    return (
      <input
        aria-activedescendant={activeDescendantId}
        aria-autocomplete="list"
        aria-expanded={(hasSuggestions && activeMenu === "suggestion").toString()}
        aria-controls={hasSuggestions ? suggestionsMenuId : null}
        aria-haspopup="listbox"
        aria-label={messages.searchButtonTitle}
        bind={this}
        placeholder={placeholder}
        maxlength={maxInputLength}
        autocomplete="off"
        type="text"
        class={this.classes(CSS.esriInput, CSS.input)}
        value={searchTerm}
        id={inputId}
        role="combobox"
        onkeyup={this._handleInputKeyup}
        onclick={this._openSuggestionMenu}
        oninput={this._handleInputPaste}
        onpaste={this._handleInputPaste}
        afterCreate={storeNode}
        data-node-ref="_inputNode"
        onfocus={this.focus}
        onblur={this.blur}
        title={searchTerm ? "" : placeholder}
      />
    );
  }

  protected renderForm(): VNode {
    return (
      <form
        key="esri-search__form"
        bind={this}
        class={CSS.form}
        onsubmit={this._formSubmit}
        role="search"
      >
        {this.renderInput()}
      </form>
    );
  }

  protected renderSuggestList(suggestResults: SearchResults<SuggestResult>): VNode {
    const { sourceIndex } = suggestResults;
    const suggestResultCount = suggestResults.results.length;

    const results = suggestResults.results;

    return suggestResultCount ? (
      <ul
        role="group"
        key={`esri-search__suggestion-list-${sourceIndex}`}
        class={this.classes(CSS.menuList, CSS.suggestionList)}
      >
        {results.map((suggestion) => this.renderSuggestion(suggestion, this._menuItemCount++))}
      </ul>
    ) : null;
  }

  protected renderSuggestionsGroup(): VNode[][] {
    const { suggestions } = this.viewModel;

    return suggestions
      ? suggestions.map((suggestResults) => [
          this.renderSuggestionHeader(suggestResults),
          this.renderSuggestList(suggestResults)
        ])
      : null;
  }

  protected renderSuggestionsMenu(): VNode {
    const { displayedSearchTerm, locationEnabled, suggestionsMenuId, inputId } = this;
    const { suggestionCount } = this.viewModel;
    const showLocationOption = locationEnabled && !displayedSearchTerm;
    const hasSuggestions = showLocationOption || suggestionCount;
    this._menuItemCount = 0;

    return hasSuggestions ? (
      <div
        id={suggestionsMenuId}
        key="esri-search__suggestions-menu"
        class={this.classes(CSS.menu, CSS.suggestionsMenu)}
        role="listbox"
        aria-labelledby={inputId}
        bind={this}
        afterCreate={storeNode}
        data-node-ref="_suggestionListNode"
      >
        {this.renderLocationGroup()}
        {this.renderSuggestionsGroup()}
      </div>
    ) : null;
  }

  protected renderInputContainer(): VNode {
    return (
      <div key="esri-search__input-container" class={CSS.inputContainer}>
        {this.renderForm()}
        {this.renderSuggestionsMenu()}
        {this.renderClearButton()}
      </div>
    );
  }

  protected renderSuggestionHeader(suggestResults: SearchResults<SuggestResult>): VNode {
    const { allSources, activeSourceIndex } = this.viewModel;
    const { sourceIndex } = suggestResults;
    const suggestResultCount = suggestResults.results.length;

    const showMultipleSourceResults =
      allSources.length > 1 && activeSourceIndex === SearchViewModel.ALL_INDEX;

    return suggestResultCount && showMultipleSourceResults ? (
      <div key={`esri-search__suggestion-header-${sourceIndex}`} class={CSS.menuHeader}>
        {this._getSourceName(sourceIndex)}
      </div>
    ) : null;
  }

  protected renderSuggestion(suggestion: SuggestResult, suggestionIndex: number): VNode {
    const { _activeMenuItemIndex, messages } = this;
    const { searchTerm } = this.viewModel;
    if (searchTerm) {
      const { text } = suggestion;
      const resultText = text || messages.untitledResult;
      const containsHTML = regexContainsHTML.test(resultText);
      const matches: VNode[] = [];
      if (containsHTML) {
        matches.push(<div innerHTML={resultText} />);
      } else {
        const resultParts = this._splitResult(resultText, searchTerm);
        const searchTermLC = searchTerm.toLowerCase();
        resultParts.forEach((part, partIndex) => {
          if (part && part.length) {
            if (part.toLowerCase() === searchTermLC) {
              matches.push(<strong key={partIndex}>{part}</strong>);
            } else {
              matches.push(part);
            }
          }
        });
      }

      const focused = this.activeMenu === "suggestion" && _activeMenuItemIndex === suggestionIndex;

      return (
        <li
          bind={this}
          id={this._buildId("suggestion-item", suggestionIndex)}
          aria-selected={(
            this.activeMenu === "suggestion" && this._activeMenuItemIndex === suggestionIndex
          ).toString()}
          onclick={this._handleSuggestionClick}
          key={`esri-search__suggestion_${suggestionIndex}`}
          data-suggestion={suggestion}
          role="option"
          class={this.classes(CSS.menuItem, focused ? CSS.menuItemFocus : null)}
        >
          {matches}
        </li>
      );
    }

    return undefined;
  }

  protected renderSource(sourceIndex: number): VNode {
    const { activeSourceIndex, searchAllEnabled } = this.viewModel;

    const itemClasses = {
      [CSS.menuItemActive]: sourceIndex === activeSourceIndex,
      [CSS.menuItemFocus]:
        this.activeMenu === "source" &&
        sourceIndex ===
          (searchAllEnabled ? this._activeMenuItemIndex - 1 : this._activeMenuItemIndex)
    };

    const activeItemIndex = searchAllEnabled ? sourceIndex + 1 : sourceIndex;

    return (
      <li
        bind={this}
        key={`esri-search__source-${sourceIndex}`}
        id={this._buildId("source-item", activeItemIndex)}
        aria-checked={(sourceIndex === activeSourceIndex).toString()}
        onclick={this._handleSourceClick}
        data-source-index={sourceIndex}
        role="menuitemradio"
        class={this.classes(CSS.source, CSS.menuItem, itemClasses)}
      >
        {this._getSourceName(sourceIndex)}
      </li>
    );
  }

  protected renderNoResultsWarning(searchTerm: string): VNode {
    const { messages } = this;

    const notFoundText = searchTerm
      ? substitute(messages.noResultsFoundForValue, {
          value: `"${searchTerm}"`
        })
      : messages.noResultsFound;

    return (
      <div key="esri-search__no_results">
        <div class={CSS.warningMenuHeader}>{messages.noResults}</div>
        <div class={CSS.warningMenuText}>{notFoundText}</div>
      </div>
    );
  }

  protected renderEmptySearchWarning(): VNode {
    const { messages } = this;

    return (
      <div key="esri-search__empty-search">
        <span aria-hidden="true" class={CSS.noticeIcon} />
        <span class={CSS.noValueText}>{messages.emptyValue}</span>
      </div>
    );
  }

  protected renderLocateWarning(): VNode {
    const { messages } = this;

    return (
      <div key="esri-search__locate-error">
        <span aria-hidden="true" class={CSS.noticeIcon} />
        <span class={CSS.noValueText}>{messages.locateError}</span>
      </div>
    );
  }

  protected renderWarning(): VNode {
    const { displayedSearchTerm, _locateFailed } = this;
    const { viewModel } = this;

    if (_locateFailed) {
      return this.renderLocateWarning();
    }

    if (viewModel.selectedSuggestion?.location || displayedSearchTerm) {
      return this.renderNoResultsWarning(displayedSearchTerm);
    }

    return this.renderEmptySearchWarning();
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _resetActiveMenuItemIndex(): void {
    this._activeMenuItemIndex = -1;
  }

  private _buildId(type: string, index?: number): string {
    return `${this.id}-${type}${index === undefined ? "" : `-${index}`}`;
  }

  private _watchSourceChanges(): void {
    const {
      _handles,
      viewModel: { allSources }
    } = this;

    const handleKey = "sources";
    _handles.remove(handleKey);

    allSources.forEach((source) =>
      _handles.add(
        watchUtils.watch(source, "name", () => this.scheduleRender()),
        handleKey
      )
    );
  }

  private _handleSourcesMenuToggleClick(): void {
    const isSourceActive = this.activeMenu === "source";

    this.activeMenu = isSourceActive ? "none" : "source";

    this.renderNow();

    if (this.activeMenu === "source") {
      this._sourceListNode?.focus();
    }
  }

  private _handleClearButtonClick(): void {
    this.viewModel.clear();
    this._focus();
  }

  private _handleSearchButtonClick(): void {
    this.search();
  }

  private _handleSuggestionClick(event: Event): void {
    const node = event.currentTarget as HTMLElement;
    const suggestResult = node["data-suggestion"] as SuggestResult;
    if (suggestResult) {
      this._focus();
      this.search(suggestResult);
    }
  }

  private _handleUseCurrentLocationClick(): void {
    this._useCurrentLocation();
  }

  private _useCurrentLocation(): void {
    this._focus("none");

    this._cancelSuggest();
    this._cancelSearch();

    const controller = createAbortController();
    const { signal } = controller;

    this._searchController = controller;

    this.viewModel
      .searchNearby({ signal })
      .catch(() => {
        this._locateFailed = true;
        this.activeMenu = "warning";
      })
      .then(() => {
        this._searchController = null;
      });
  }

  private _handleSourceClick(event: Event): void {
    this._setSourceFromMenuItem(event.currentTarget as HTMLElement);
  }

  private _setSourceFromMenuItem(item: HTMLElement): void {
    if (!item) {
      return;
    }

    const sourceIndex = item["data-source-index"] as number;
    this.viewModel.activeSourceIndex = sourceIndex;
    this._clearActiveMenu();
    this._sourceMenuButtonNode?.focus();
  }

  private _clearActiveMenu = (): void => {
    this.activeMenu = "none";
  };

  private _removeActiveMenu = (event: FocusEvent): void => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (relatedTarget && this._container?.contains(relatedTarget)) {
      return;
    }

    this._clearActiveMenu();
  };

  private _cancelSuggest(): void {
    if (this._suggestController) {
      this._suggestController.abort();
      this._suggestController = null;
    }
  }

  private _cancelSearch(): void {
    if (this._searchController) {
      this._searchController.abort();
      this._searchController = null;
    }
    this._locateFailed = false;
  }

  private _handleInputKeyup(event: KeyboardEvent): void {
    const key = eventKey(event);

    const isIgnorableKey =
      event.ctrlKey ||
      event.metaKey ||
      key === "Copy" ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "Shift";

    if (isIgnorableKey) {
      return;
    }

    if (key === "Tab" || key === "Escape" || (event.shiftKey && key === "Tab")) {
      this._cancelSuggest();

      if (key === "Escape") {
        this._clearActiveMenu();
      }

      return;
    }

    const isNavigationKey =
      key === "Home" || key === "End" || key === "ArrowUp" || key === "ArrowDown";

    if (key === "Enter" && this._activeMenuItemIndex < 0) {
      this._cancelSuggest();
      return;
    }

    const list = this._suggestionListNode?.getElementsByTagName("li");

    if (list?.length) {
      if (this.activeMenu !== "suggestion") {
        this._openSuggestionMenu();
      }

      if (isNavigationKey) {
        event.preventDefault();
        this._cancelSuggest();
        this.handleItemNavigation(key, list, this._suggestionListNode);
        return;
      }

      const item = list[this._activeMenuItemIndex];

      if (key === "Enter" && item) {
        const suggestResult = item["data-suggestion"] as SuggestResult;

        if (suggestResult) {
          this._focus();
          this.search(suggestResult);
        } else if (item["data-current-location-item"]) {
          this._useCurrentLocation();
        }

        return;
      }
    }

    if (!this.viewModel.searchTerm) {
      return;
    }

    this.suggest();
  }

  private handleItemNavigation(
    key: string,
    items: HTMLCollectionOf<HTMLLIElement>,
    scroller: HTMLElement
  ): void {
    const originalIndex = this._activeMenuItemIndex;

    if (key === "Home") {
      this._activeMenuItemIndex = 0;
    }

    if (key === "End") {
      this._activeMenuItemIndex = items.length - 1;
    }

    if (key === "ArrowUp") {
      this._activeMenuItemIndex =
        this._activeMenuItemIndex <= 0 ? items.length - 1 : this._activeMenuItemIndex - 1;
    }

    if (key === "ArrowDown") {
      this._activeMenuItemIndex =
        this._activeMenuItemIndex === items.length - 1 ? 0 : this._activeMenuItemIndex + 1;
    }

    if (originalIndex !== this._activeMenuItemIndex) {
      keepMenuItemWithinView(items[this._activeMenuItemIndex], scroller);
    }
  }

  private _scrollToTopSuggestion(): void {
    if (this._suggestionListNode) {
      this._suggestionListNode.scrollTop = 0;
    }
  }

  private _openSuggestionMenu(): void {
    this.activeMenu = "suggestion";
  }

  private _handleInputPaste(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (this.viewModel.searchTerm !== input.value) {
      this.viewModel.searchTerm = input.value;
    }

    if (!this.viewModel.searchTerm) {
      return;
    }

    this.suggest();
  }

  private _handleSourceMenuKeydown(event: KeyboardEvent): void {
    const key = eventKey(event);

    if (isActivationKey(key)) {
      event.preventDefault();
      const list = this._sourceListNode.getElementsByTagName("li");
      const item = list[this._activeMenuItemIndex];
      this._setSourceFromMenuItem(item);
      return;
    }

    if (key === "ArrowUp" || key === "ArrowDown" || key === "End" || key === "Home") {
      event.preventDefault();
    }
  }

  private _handleSourceMenuKeyup(event: KeyboardEvent): void {
    const key = eventKey(event);

    const isNavigationKey =
      key === "ArrowUp" || key === "ArrowDown" || key === "End" || key === "Home";

    if (isNavigationKey) {
      event.preventDefault();
    }

    if (key === "Escape") {
      this._clearActiveMenu();
      this._sourceMenuButtonNode?.focus();
      return;
    }

    const list = this._sourceListNode?.getElementsByTagName("li");

    if (!list || list.length === 0) {
      return;
    }

    if (isNavigationKey) {
      if (this.activeMenu !== "source") {
        this.activeMenu = "source";
      }

      this.handleItemNavigation(key, list, this._sourceListNode.parentElement);
      return;
    }
  }

  private _focus(activeMenu?: ActiveMenu): void {
    this.focus();

    if (!activeMenu) {
      return;
    }

    this.activeMenu = activeMenu;
  }

  private _formSubmit(event: Event): void {
    event.preventDefault();

    if (this._activeMenuItemIndex === -1) {
      this.search();
    }
  }

  private _getSourceName(sourceIndex: number): string {
    const { messages } = this;
    const vm = this.viewModel;
    const { allSources } = vm;
    const source = allSources.getItemAt(sourceIndex);
    return sourceIndex === SearchViewModel.ALL_INDEX
      ? messages.all
      : source
      ? source.name || messages.untitledSource
      : messages.untitledSource;
  }

  private _splitResult(input: string, needle: string): string[] {
    const escapedNeedle = escapeRegExpString(needle);
    const matches = input.replace(new RegExp(`(^|)(${escapedNeedle})(|$)`, "ig"), "$1|$2|$3");
    return matches.split("|");
  }

  private _renderSearchResultsContent(): SearchResultRenderer {
    this._searchResultRenderer.showMoreResultsOpen = false;
    this._searchResultRenderer.viewModel = this.viewModel;
    return this._searchResultRenderer;
  }
}

export default Search;
