// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

/**
 * The Search widget provides a way to perform search operations on {@link module:esri/tasks/Locator locator service(s)}
 * and/or {@link module:esri/layers/MapImageLayer map}/{@link module:esri/layers/FeatureLayer feature}
 * service feature layer(s).
 * If using a locator with a geocoding service, the
 * [findAddressCandidates](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm)
 * operation is used, whereas {@link module:esri/tasks/support/Query queries} are used on feature layers.
 *
 * ![search](../assets/img/apiref/widgets/search.png)
 *
 * If the spatial reference of the {@link module:esri/views/View} is not Web Mercator or WGS84,
 * the user's location must be reprojected to match the
 * {@link module:esri/views/View#spatialReference view's spatial reference}. This is done with the
 * {@link module:esri/tasks/GeometryService} URL referenced in
 * {@link module:esri/config#geometryServiceUrl esriConfig}. You can optionally set the
 * {@link module:esri/config#geometryServiceUrl geometryServiceUrl} in esriConfig to your own
 * {@link module:esri/tasks/GeometryService} instance.
 * If not specified, however, it will refer to the service hosted in the default
 * {@link module:esri/portal/Portal portal} instance. See
 * {@link module:esri/config#geometryServiceUrl esriConfig.geometryServiceUrl} for an example.
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 * See the example below.
 *
 * @example
 * var searchWidget = new Search({
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
 * @see [Search.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Search.js)
 * @see [Search.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Search.scss)
 * @see [Sample - Search widget (3D)](../sample-code/widgets-search-3d/index.html)
 * @see [Sample - Search widget with multiple sources](../sample-code/widgets-search-multiplesource/index.html)
 * @see module:esri/tasks/Locator
 * @see module:esri/layers/FeatureLayer
 * @see module:esri/widgets/Search/SearchViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

/**
 * The following are properties that may only be set on {@link module:esri/tasks/Locator} sources. The table in the
 * [sources documentation](#sources) contains additional properties that may be set on any source.
 *
 * @typedef {Object} locatorSource
 *
 * @property {string[]} categories - A string array which limits the results to one or more categories. For example "Populated Place" or
 *                                    "airport". Only applicable when using the World Geocode Service. View the
 * [World Geocoding Service documentation](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-category-filtering.htm) for more information.
 * @property {string} countryCode - Constricts search results to a specified country code. For example, `US` for United States or `SE` for Sweden.
 *                                      Only applies to the World Geocode Service. View the
 * [World Geocoding Service documentation](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-category-filtering.htm) for more information.
 * @property {Object} localSearchOptions - Sets the sources for local `distance` and `minScale` for searching. See the object specification table below for details.
 * @property {number} localSearchOptions.distance - The distance to search.
 * @property {number} localSearchOptions.minScale - The minimum scale used to search locally.
 * @property {number} locationToAddressDistance - When reverse geocoding a result, use this distance in meters. The default is `1500`.
 * @property {string} searchTemplate - A template string used to display multiple fields in a defined order when results are displayed,
 * e.g. `"{Street}, {City}, {ZIP}"`.
 * @property {module:esri/tasks/Locator} locator - The locator task used to search. This is **required** and defaults to the
 * [World Geocoding Service](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-category-filtering.htm).
 * @property {string} singleLineFieldName - The field name of the Single Line Address Field in the REST services directory for the locator service.
 *                                          Common values are `SingleLine` and `SingleLineFieldName`.
 */

/**
 * The following are properties that may only be set on {@link module:esri/layers/FeatureLayer FeatureLayer sources}. The table in the
 * [sources documentation](#sources) contains additional properties that may be set on any source.
 *
 * @typedef {Object} featureLayerSource
 *
 * @property {string} displayField - The results are displayed using this field. Defaults to the layer's `displayField` or the first string field.
 * @property {boolean} exactMatch - Indicates to only return results that match the search value exactly. Default is `false`.
 * This property only applies to `string` field searches. `exactMatch` is always `true` when searching fields of type `number`.
 * @property {module:esri/layers/FeatureLayer} featureLayer - The feature layer queried in the search. This is **required**.
 * @property {string[]} searchFields - An array of string values representing the names of fields in the feature layer to search.
 * @property {Object} searchQueryParams - Defines the default options for a {@link module:esri/tasks/support/Query query} when searching feature layers.
 * Some of these options may be overwritten by the search widget. These include:
 * * **[outSpatialReference](esri-tasks-support-Query.html#outSpatialReference)**
 * * **[returnGeometry](esri-tasks-support-Query.html#returnGeometry)**
 * * **[num](esri-tasks-support-Query.html#num)**
 * * **[outFields](esri-tasks-support-Query.html#outFields)**
 * * **[where](esri-tasks-support-Query.html#where)**
 * * **[maxAllowableOffset](esri-tasks-support-Query.html#maxAllowableOffset)**
 * * **[objectIds](esri-tasks-support-Query.html#objectIds)**
 * @property {Object} suggestQueryParams - Defines the default options for a {@link module:esri/tasks/support/Query query} when requesting suggests on
 * feature layers. Some of these options may be overwritten by the search widget. These include:
 * * **[outSpatialReference](esri-tasks-support-Query.html#outSpatialReference)**
 * * **[returnGeometry](esri-tasks-support-Query.html#returnGeometry)**
 * * **[num](esri-tasks-support-Query.html#num)**
 * * **[outFields](esri-tasks-support-Query.html#outFields)**
 * * **[where](esri-tasks-support-Query.html#where)**
 * @property {string} suggestionTemplate - A template string used to display multiple fields in a defined order
 * when suggestions are displayed. This takes precedence over `displayField`. Field names in the template must have the following
 * format: `{FieldName}`. An example suggestionTemplate could look something like: `Name: {OWNER}, Parcel: {PARCEL_ID}`.
 */

/**
 * Fires when the widget's text input loses focus.
 *
 * @ignore
 * @event module:esri/widgets/Search#blur
 *
 * @example
 * var searchWidget = new Search();
 *
 * searchWidget.on("blur", function(event){
 *   console.log("Focus removed from search input textbox.");
 * });
 */

/**
 * Fires when the widget's text input sets focus.
 *
 * @ignore
 * @event module:esri/widgets/Search#focus
 *
 * @example
 * var searchWidget = new Search();
 *
 * searchWidget.on("focus", function(event){
 *   console.log("Search input textbox is focused.");
 * });
 */

/**
 * Fires when a result is cleared from the input box or a new result is selected.
 *
 * @event module:esri/widgets/Search#search-clear
 *
 * @example
 * var searchWidget = new Search();
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
* var searchWidget = new Search();
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
 * var searchWidget = new Search();
 *
 * searchWidget.on("suggest-start", function(event){
 *   console.log("suggest-start", event);
 * });
 */

/**
 * Fires when the widget has fully loaded.
 *
 * @event module:esri/widgets/Search#load
 *
 * @example
 * var searchWidget = new Search();
 *
 * searchWidget.on("load", function(event){
 *   console.log("Search widget has loaded!");
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
 * @property {Object[]} results.results - An array of objects containing the search results. See object specification table below for more information on this object.
 * @property {module:esri/geometry/Extent} results.results.extent - The extent of the result to zoom to.
 * @property {module:esri/Graphic} results.results.feature - The graphic feature to place at the location of the search result.
 * @property {string} results.results.name - The string name of the searched location.
 * @property {number} results.sourceIndex - The index of the currently selected source.
 * @property {Object} results.source - The [source](#sources) of the selected result.
 *
 * @example
 * var searchWidget = new Search();
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
 * var searchWidget = new Search();
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
 * @property {Object[]} results - An array of objects representing the results of suggest. See object specification
 * table below for more information about the result object.
 * @property {Object[]} results.results - An array of objects containing the suggest results. See object specification table below for more information on this object.
 * @property {module:esri/geometry/Extent} results.results.extent - The extent of the suggested result.
 * @property {module:esri/Graphic} results.results.feature - The graphic feature to place at the location of the search result.
 * @property {string} results.results.name - The string name of the searched location.
 * @property {boolean} results.results.isCollection - Indicates if the result is a Collection.
 * @property {string} results.results.magicKey - The magic key related to the suggest result.
 * @property {string} results.results.text - The string name of the suggested location to geocode.
 * @property {number} results.sourceIndex - The index of the currently selected source.
 * @property {Object} results.source - The [source](#sources) of the selected result.
 *
 * @example
 * var searchWidget = new Search();
 *
 * searchWidget.on("suggest-complete", function(event){
 *   // The results are stored in the event Object[]
 *   console.log("Results of suggest: ", event);
 * });
 */
define([
  "../core/lang",
  "../core/watchUtils",

  "./Search/SearchViewModel",

  "./support/viewModelWiring",

  "./Widgette",

  "dijit/_FocusMixin",
  "dijit/_TemplatedMixin",
  "dijit/a11yclick",

  "dojo/dom",
  "dojo/dom-attr",
  "dojo/dom-class",
  "dojo/dom-construct",
  "dojo/keys",
  "dojo/on",
  "dojo/query",

  "dojo/i18n!./Search/nls/Search",

  "dojo/text!./Search/templates/Search.html"
],
function(
  esriLang, watchUtils,
  SearchViewModel,
  viewModelWiring,
  Widget,
  _FocusMixin, _TemplatedMixin, a11yclick,
  dom, domAttr, domClass, domConstruct, keys, on, query,
  i18n,
  templateString
) {

  var CSS = {
    base: "esri-search",
    hasValue: "esri-search--has-value",
    hasMultipleSources: "esri-search--multiple-sources",
    isSearchLoading: "esri-search--loading",
    showSuggestions: "esri-search--show-suggestions",
    showSources: "esri-search--sources",
    showNoResults: "esri-search--no-results",
    container: "esri-search__container",
    input: "esri-search__input",
    inputContainer: "esri-search__input-container",
    form: "esri-search__form",
    submitButton: "esri-search__submit-button",
    sourcesButton: "esri-search__sources-button",
    clearButton: "esri-search__clear-button",
    sourceName: "esri-search__source-name",
    suggestionsMenu: "esri-search__suggestions-menu",
    sourcesMenu: "esri-search__sources-menu",
    source: "esri-search__source",
    activeSource: "esri-search__source--active",
    noResultsMenu: "esri-search__no-results-menu",
    noResultsBody: "esri-search__no-results-body",
    noResultsHeader: "esri-search__no-results-header",
    noResultsText: "esri-search__no-results-text",
    noValueText: "esri-search__no-value-text",
    showMoreResults: "esri-search__more-results--show-more-results",
    moreResults: "esri-search__more-results",
    moreResultsList: "esri-search__more-results-list",
    moreResultsHeader: "esri-search__more-results-header",
    moreResultsLatLonHeader: "esri-search__more-results-lat-long-header",
    moreResultsItem: "esri-search__more-results-item",
    moreResultsListHeader: "esri-search__more-results-list-header",

    // icons + common
    button: "esri-widget-button",
    fallbackText: "esri-icon-font-fallback-text",
    rotating: "esri-rotating",
    menu: "esri-menu",
    header: "esri-header",
    searchIcon: "esri-icon-search",
    dropdownIcon: "esri-icon-down-arrow esri-search__sources-button--down",
    dropupIcon: "esri-icon-up-arrow esri-search__sources-button--up",
    clearIcon: "esri-icon-close",
    spinnerIcon: "esri-icon-loading-indicator",
    noticeIcon: "esri-icon-notice-triangle"
  };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @mixes module:esri/core/Evented
   * @constructor module:esri/widgets/Search
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var search = new Search({
   *   view: view,
   *   sources: [ ... ]
   * });
   */
  var Search = Widget.createSubclass([_TemplatedMixin, _FocusMixin],
    /** @lends module:esri/widgets/Search.prototype */
    {

      declaredClass: "esri.widgets.Search",

      baseClass: CSS.base,

      templateString: templateString,

      //--------------------------------------------------------------------------
      //
      //  Lifecycle
      //
      //--------------------------------------------------------------------------

      postCreate: function () {
        this.inherited(arguments);

        var self = this;
        var vm = this.viewModel;
        var moreResultsId = this.id + "_more_results";

        this._moreResultsId = moreResultsId;

        vm.getExtraSearchResultAttributes = this._getExtraSearchResultAttributes.bind(this);
        vm.popupTemplate.set({
          title: i18n.searchResult,
          content: "<div class=\"{searchTheme}\"><div id=\"{searchMoreResultsId}\" class=\"{searchMoreResults}\"><div class=\"{searchMoreResultsItem}\">{searchResult}</div><div>{searchMoreResultsHtml}</div></div></div>"
        });

        this.own(

          // watched properties

          watchUtils.init(vm, "placeholder", function(value) {
            var name = this._getSourceName(vm.activeSourceIndex);

            domAttr.set(this._sourceNameNode, "textContent", name);
            domAttr.set(this._inputNode, {
              placeholder: value
            });
          }.bind(this)),

          watchUtils.init(vm, "searchTerm", function(value) {
            var clearNodeTitle = value ?
                                 i18n.clearButtonTitle :
                                 "";

            if (!value) {
              vm.clear();
              this._hideMenus();
              this._hideLoading();
            }

            if (value !== this._inputNode.value) {
              domAttr.set(this._inputNode, "value", value);
            }
            domAttr.set(this._clearNode, "title", clearNodeTitle);
            domClass.toggle(this._containerNode, CSS.hasValue, value);
          }.bind(this)),

          watchUtils.init(vm, "sources, activeSourceIndex", function() {
            this._updateSourcesMenu(vm.sources);
          }.bind(this)),

          watchUtils.init(vm, "activeSourceIndex", function() {
            this._updateSourcesMenu(vm.sources);
          }.bind(this)),

          watchUtils.init(vm, "view.popup", function(value) {
            var popupNode = value && value.domNode;
            if (popupNode && vm.popupEnabled) {
              this.own(
                on(popupNode, on.selector("#" + moreResultsId + "_show", a11yclick), this._handleShowMoreResultsClick.bind(this)),

                on(popupNode, on.selector("#" + moreResultsId + "_list li a", a11yclick), this._handleMoreResultClick.bind(this)),

                on(popupNode, on.selector("#" + moreResultsId + " [data-switch-coordinates]", a11yclick), this._handleSwitchCoordinatesClick.bind(this))
              );
            }
          }.bind(this)),

          // view-model events

          vm.on("search-complete", function(e) {
            if (e.numResults === 0) {
              this._createEmptyResultsStructure(e.searchTerm);
              this._showNoResultsMenu();
            }
            this._hideLoading();
          }.bind(this)),

          vm.on("suggest-complete", function(e) {
            this._updateSuggestionsMenu(e.results, e.searchTerm);
          }.bind(this)),

          vm.on("select-result", function() {
            this._hideMenus();
            this._hideLoading();
          }.bind(this)),

          vm.on("search-start", function() {
            this._hideMenus();
            this._showLoading();
          }.bind(this)),

          vm.on("search-clear, search-start", this._closePopup.bind(this)),

          // ui events

          on(this._submitNode, a11yclick, this._handleSearchButtonClick.bind(this)),

          on(this._sourceButtonNode, a11yclick, this._handleSourcesMenuToggleClick.bind(this)),

          on(this._inputNode, a11yclick, this._handleInputClick.bind(this)),

          on(this._clearNode, a11yclick, this._handleClearButtonClick.bind(this)),

          on(this._formNode, "submit", function(e) {
            e.preventDefault();
            vm.cancelSuggest();
            vm.search();
          }.bind(this)),

          on(this._inputNode, "keyup", this._handleInputKey.bind(this)),

          on(this._sourceButtonNode, "keyup", this._handleSourceButtonKey.bind(this)),

          on(this._suggestionsNode, "li:click, li:keyup", function(e) {
            self._suggestionsEvent(e, this);
          }),

          on(this._sourcesNode, "li:click, li:keyup", function(e) {
            self._sourcesEvent(e, this);
          }),

          on(this._inputNode, "input, paste", function() {
            if (vm.searchTerm !== this._inputNode.value) {
              vm.searchTerm = this._inputNode.value;
            }
            vm.suggest();
          }.bind(this)),

          this.on("blur", function() {
            this._hideMenus();
          }.bind(this))

        );

        viewModelWiring.setUpEventDelegates(this, [
          "search-clear",
          "search-complete",
          "search-start",
          "select-result",
          "suggest-start",
          "suggest-complete"
        ]);
      },

      //--------------------------------------------------------------------------
      //
      //  Variables
      //
      //--------------------------------------------------------------------------

      _css: CSS,

      _i18n: i18n,

      //--------------------------------------------------------------------------
      //
      //  Properties
      //
      //--------------------------------------------------------------------------

      properties: /** @lends module:esri/widgets/Search.prototype */ {

        //----------------------------------
        //  activeSource
        //----------------------------------

        /**
         * The [source](#sources) object currently selected. Can be either a
         * {@link module:esri/layers/FeatureLayer feature layer} or a {@link module:esri/tasks/Locator locator task}.
         *
         * @name activeSource
         * @instance
         *
         * @type {module:esri/layers/FeatureLayer | module:esri/tasks/Locator}
         * @readonly
         */
        activeSource: {
          aliasOf: "viewModel.activeSource"
        },

        //----------------------------------
        //  activeSourceIndex
        //----------------------------------

        /**
         * The selected source's index. This value is `-1` when all sources are selected.
         *
         * @name activeSourceIndex
         * @instance
         *
         * @type {number}
         * @default 0
         */
        activeSourceIndex: {
          aliasOf: "viewModel.activeSourceIndex"
        },

        //----------------------------------
        //  allPlaceholder
        //----------------------------------

        /**
         * String value used as a hint for input text when searching on multiple sources. See
         * the image below to view the location and style of this text in the context of the widget.
         *
         * ![search-allPlaceholder](../assets/img/apiref/widgets/search-allPlaceholder.png)
         *
         * @name allPlaceholder
         * @instance
         *
         * @type {string}
         * @default "Find address or place"
         */
        allPlaceholder: {
          aliasOf: "viewModel.allPlaceholder"
        },

        //----------------------------------
        //  autoNavigate
        //----------------------------------

        /**
         * Indicates whether to automatically navigate to the selected result.
         *
         * @type {boolean}
         * @default
         * @ignore
         */
        autoNavigate: {
          aliasOf: "viewModel.autoNavigate"
        },

        //----------------------------------
        //  autoSelect
        //----------------------------------

        /**
         * Indicates whether to automatically select and zoom to the first geocoded result. If `false`, the
         * [findAddressCandidates](https://developers.arcgis.com/rest/geocode/api-reference/geocoding-find-address-candidates.htm)
         * operation will still geocode the input string, but the top result will not be selected. To work with the
         * geocoded results, you can set up a [search-complete](#event:search-complete) event handler and get the results
         * through the event object.
         *
         * @name autoSelect
         * @instance
         *
         * @type {boolean}
         * @default true
         */
        autoSelect: {
          aliasOf: "viewModel.autoSelect"
        },

        //----------------------------------
        //  defaultSource
        //----------------------------------

        /**
         * The default source used for the Search widget. These can range from
         * a [Locator Source](#locatorSource) to a
         * [Feature Layer](#featureLayerSource).
         *
         * @name defaultSource
         * @instance
         *
         * @type {Object}
         * @readonly
         */
        defaultSource: {
          aliasOf: "viewModel.defaultSource"
        },

        //----------------------------------
        //  locationToAddressDistance
        //----------------------------------

        /**
         * The default distance in meters used to reverse geocode (if not specified by source).
         *
         * @type {number}
         * @default
         * @ignore
         */
        locationToAddressDistance: {
          aliasOf: "viewModel.locationToAddressDistance"
        },

        //----------------------------------
        //  maxResults
        //----------------------------------

        /**
         * The maximum number of results returned by the widget if not specified by the source.
         *
         * @name maxResults
         * @instance
         *
         * @type {number}
         * @default 6
         */
        maxResults: {
          aliasOf: "viewModel.maxResults"
        },

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
         *
         * @type {number}
         * @default 6
         */
        maxSuggestions: {
          aliasOf: "viewModel.maxSuggestions"
        },

        //----------------------------------
        //  minSuggestCharacters
        //----------------------------------

        /**
         * The minimum number of characters needed for the search if not specified by the source.
         *
         * @name minSuggestCharacters
         * @instance
         *
         * @type {number}
         * @default 1
         */
        minSuggestCharacters: {
          aliasOf: "viewModel.minSuggestCharacters"
        },

        //----------------------------------
        //  popupEnabled
        //----------------------------------

        /**
         * Indicates whether to display the {@link module:esri/widgets/Popup} on feature click. The graphic can
         * be clicked to display a {@link module:esri/widgets/Popup}. This is not the same as using
         * [popupOpenOnSelect](#popupOpenOnSelect) which opens the {@link module:esri/widgets/Popup} any time a
         * search is performed.
         *
         * It is possible to have `popupOpenOnSelect=false` but `popupEnabled=true` so the
         * {@link module:esri/widgets/Popup}
         * can be opened by someone but it is not opened by default.
         *
         * @name popupEnabled
         * @instance
         *
         * @type {boolean}
         * @default true
         */
        popupEnabled: {
          aliasOf: "viewModel.popupEnabled"
        },

        //----------------------------------
        //  popupOpenOnSelect
        //----------------------------------

        /**
         * Indicates whether to show the {@link module:esri/widgets/Popup} when a result is selected.
         * Using `popupOpenOnSelect` opens the {@link module:esri/widgets/Popup} any time a search is performed.
         *
         * It is possible to have `popupOpenOnSelect=false` but `popupEnabled=true` so the {@link module:esri/widgets/Popup}
         * can be opened by someone but not opened by default.
         *
         * @name popupOpenOnSelect
         * @instance
         *
         * @type {boolean}
         * @default true
         */
        popupOpenOnSelect: {
          aliasOf: "viewModel.popupOpenOnSelect"
        },

        //----------------------------------
        //  popupTemplate
        //----------------------------------

        /**
         * A customized PopupTemplate for the selected feature.
         * Note that specifying a wildcard {*} for the popupTemplate will return all fields in addition to search-specific fields.
         *
         * @name popupTemplate
         * @instance
         *
         * @type {module:esri/PopupTemplate}
         */
        popupTemplate: {
          aliasOf: "viewModel.popupTemplate"
        },

        //----------------------------------
        //  resultGraphic
        //----------------------------------

        /**
         * The graphic used to highlight the resulting feature or location.
         *
         * @name resultGraphic
         * @instance
         *
         * @type {module:esri/Graphic}
         * @readonly
         */
        resultGraphic: {
          aliasOf: "viewModel.resultGraphic"
        },

        //----------------------------------
        //  resultGraphicEnabled
        //----------------------------------

        /**
         * Indicates if the [resultGraphic](#resultGraphic) will display at the
         * location of the selected feature.
         *
         * @type {boolean}
         * @default true
         */
        resultGraphicEnabled: {
          aliasOf: "viewModel.resultGraphicEnabled"
        },

        //----------------------------------
        //  results
        //----------------------------------

        /**
         * An array of current results from the search.
         *
         * @name results
         * @instance
         *
         * @type {Object[]}
         */
        results: {
          aliasOf: "viewModel.results"
        },

        //----------------------------------
        //  searchAllEnabled
        //----------------------------------

        /**
         * Indicates whether to display the option to search all sources. When `true`, the "All" option
         * is displayed by default:
         *
         * ![search-searchAllEnabled-true](../assets/img/apiref/widgets/search-enableSearchingAll-true.png)
         *
         * When `false`, no option to search all sources at once is available:
         *
         * ![search-searchAllEnabled-false](../assets/img/apiref/widgets/search-enableSearchingAll-false.png)
         *
         * @name searchAllEnabled
         * @instance
         *
         * @type {boolean}
         * @default true
         */
        searchAllEnabled: {
          aliasOf: "viewModel.searchAllEnabled"
        },

        //----------------------------------
        //  searchTerm
        //----------------------------------

        /**
         * The value of the search box input text string.
         *
         * @name searchTerm
         * @instance
         *
         * @type {string}
         */
        searchTerm: {
          aliasOf: "viewModel.searchTerm"
        },

        //----------------------------------
        //  selectedResult
        //----------------------------------

        /**
         * The result selected from a search.
         *
         * @name selectedResult
         * @instance
         *
         * @type {Object}
         *
         * @see [Event: select-result](#event:select-result)
         * @see [select()](#select)
         */
        selectedResult: {
          aliasOf: "viewModel.selectedResult"
        },

        //----------------------------------
        //  sources
        //----------------------------------

        /**
         * This property defines which services will be used for the search. It is a collection of objects, each of which is called a `source`
         * and may be configured using the object specifications below and the properties listed in the
         * [Locator Source object specification table](#locatorSource) or the
         * [Feature Layer source object specification table](#featureLayerSource).
         *
         * Two types of sources may be searched:
         *
         * * {@link module:esri/layers/FeatureLayer **FeatureLayers**} - see the
         * [FeatureLayer Source object specification table](#featureLayerSource)
         * for more details on how to define FeatureLayer source objects.
         * * {@link module:esri/tasks/Locator **Locators**} - see the
         * [Locator Source object specification table](#locatorSource)
         * for more details on how to define Locator source objects.
         *
         * Any combination of one or more geocoding and feature layer sources may be used together in the same instance of the Search widget.
         * The following properties may be set on either Locator or FeatureLayer source objects:
         *
         * @property {boolean} autoNavigate - Indicates whether to automatically navigate to the selected result once selected. The default is `true`.
         * @property {boolean} resultGraphicEnabled - Indicates whether to show a graphic on the map for the selected source using the [resultSymbol](#resultSymbol).
         *                                       The default value is `true`.
         * @property {module:esri/symbols/Symbol} resultSymbol - The symbol used for the [resultGraphic](#resultGraphic).
         * @property {boolean} popupEnabled - Indicates whether to display a {@link module:esri/widgets/Popup Popup} when a selected result is clicked.
         *                                  The default is `true`.
         * @property {boolean} suggestionsEnabled - Indicates whether to display suggestions as the user enters input text in the widget. The default value is `true`.
         * @property {module:esri/widgets/Popup} popup - The Popup instance used for the selected result.
         * @property {number} maxResults - Indicates the maximum number of search results to return. The default value is `6`.
         * @property {number} maxSuggestions - Indicates the maximum number of suggestions to return for the widget's input. The default value is `6`.
         * @property {number} minSuggestCharacters - Indicates the minimum number of characters required before querying for a suggestion. The default value is `1`.
         * @property {string} name - The name of the source for display.
         * @property {string[]} outFields - Specifies the fields returned with the search results.
         * @property {string} placeholder - Used as a hint for the source input text.
         * @property {string} prefix - Specify this to prefix the input for the search text.
         * @property {module:esri/geometry/Extent[]} searchExtent - Set this to constrain the search results to an extent or array of Extents.
         * @property {boolean} popupOpenOnSelect - Indicates whether to show the {@link module:esri/widgets/Popup Popup} when a result is selected.
         *                                          The default value is `true`.
         * @property {string} suffix - Specify this to suffix the input for the search value.
         * @property {boolean} withinViewEnabled - Indicates whether to constrain the search results to the view's extent.
         * @property {number} zoomScale - Applicable to the specified source. If the result does not have an associated extent, specify this number to use as the zoom scale for the result.
         *
         * @name sources
         * @instance
         *
         * @type {module:esri/core/Collection}
         *
         * @example
         * // Default sources[] when sources is not specified
         * [
         *   {
         *     locator: new Locator("//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"),
         *     singleLineFieldName: "SingleLine",
         *     outFields: ["Addr_type"],
         *     name: i18n.esriLocatorName,
         *     localSearchOptions: {
         *       minScale: 300000,
         *       distance: 50000
         *     },
         *     placeholder: i18n.placeholder,
         *     resultSymbol: new PictureMarkerSymbol({
         *        url: this.basePath + "/images/search-symbol-32.png",
         *        size: 24,
         *        width: 24,
         *        height: 24,
         *        xoffset: 0,
         *        yoffset: 0
         *    })
         *   }
         * ]
         *
         * @example
         * // Example of multiple sources[]
         * var sources = [
         * {
         *   locator: ,
         *   singleLineFieldName: "SingleLine",
         *   name: "Custom Geocoding Service",
         *   localSearchOptions: {
         *     minScale: 300000,
         *     distance: 50000
         *   },
         *   placeholder: "Search Geocoder",
         *   maxResults: 3,
         *   maxSuggestions: 6,
         *   suggestionsEnabled: false,
         *   minSuggestCharacters: 0
         * }, {
         *   featureLayer: new FeatureLayer({
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
         *   featureLayer: new FeatureLayer({
         *     outFields: ["*"]
         *   });
         *   placeholder: "esri",
         *   name: "A FeatureLayer",
         *   prefix: "",
         *   suffix: "",
         *   maxResults: 1,
         *   maxSuggestions: 6,
         *   searchExtent: null,
         *   exactMatch: false,
         *   searchFields: [], // defaults to FeatureLayer.displayField
         *   displayField: "", // defaults to FeatureLayer.displayField
         *   minSuggestCharacters: 0
         * }
         * ];
         *
         * @example
         * // Set source(s) on creation
         * var searchWidget = new Search({
         *   sources: []
         * });
         *
         * @example
         * // Set source(s)
         * var searchWidget = new Search();
         * var sources = [{ ... }, { ... }, { ... }]; //array of sources
         * searchWidget.sources = sources;
         *
         * @example
         * // Add to source(s)
         * var searchWidget = new Search();
         * searchWidget.sources.push({ ... });  //new source
         */
        sources: {
          aliasOf: "viewModel.sources"
        },

        //----------------------------------
        //  suggestions
        //----------------------------------

        /**
         * An array of results from the [suggest method](#suggest).
         *
         * This is available if working with a 10.3 geocoding service that has suggest capability loaded or a
         * 10.3 feature layer that supports pagination, i.e. `supportsPagination = true`.
         *
         * @name suggestions
         * @instance
         *
         * @type {Object[]}
         * @readonly
         */
        suggestions: {
          aliasOf: "viewModel.suggestions"
        },

        //----------------------------------
        //  suggestionsEnabled
        //----------------------------------

        /**
         * Enable suggestions for the widget.
         *
         * This is only available if working with a 10.3 geocoding service that has suggest capability
         * loaded or a 10.3 feature layer that supports pagination, i.e. `supportsPagination = true`.
         *
         * @name suggestionsEnabled
         * @instance
         *
         * @type {boolean}
         * @default true
         */
        suggestionsEnabled: {
          aliasOf: "viewModel.suggestionsEnabled"
        },

        //----------------------------------
        //  view
        //----------------------------------

        /**
         * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
         *
         *
         * @name view
         * @instance
         *
         * @type {module:esri/views/MapView | module:esri/views/SceneView}
         */
        view: {
          aliasOf: "viewModel.view"
        },

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
        viewModel: {
          type: SearchViewModel
        }

      },

      //--------------------------------------------------------------------------
      //
      //  Public Methods
      //
      //--------------------------------------------------------------------------

      /**
       * Clears the current searchTerm, search results, suggest results, graphic, and graphics layer.
       * It also hides any open menus.
       *
       * @method
       */
      clear: function () {
        var vm = this.viewModel;

        vm.clearGraphics();

        if (domAttr.get(this._inputNode, "value")) {
          domAttr.set(this._inputNode, "value", "");
        }

        vm.searchTerm = "";

        domClass.remove(this._containerNode, CSS.hasValue);
        domAttr.set(this._clearNode, "title", "");

        this._hideMenus();
        this._hideLoading();
        this._closePopup();
      },

      /**
       * Brings focus to the widget's text input.
       *
       * @method
       * @ignore
       */
      focus: function() {
        this._focusManager.focus(this._inputNode);
      },

      /**
       * Unfocuses the widget's text input.
       *
       * @method
       * @ignore
       */
      blur: function() {
        this._inputNode.blur();
        if (this._focusManager.curNode) {
          this._focusManager.curNode.blur();
        }
      },

      /**
       * Depending on the sources specified, search() queries the feature layer(s) and/or performs
       * address matching using any specified {@link module:esri/tasks/Locator Locator(s)} and
       * returns any applicable results.
       *
       * @param {string|module:esri/geometry/Geometry|module:esri/tasks/Locator~SuggestionResult|number[][]} [searchTerm] - This searchTerm can be
       *        a string, geometry, suggest candidate object, or an array of [longitude,latitude] coordinate pairs.
       *        If a geometry is supplied, then it will reverse geocode (locator) or
       *        findAddressCandidates with geometry instead of text.
       *
       * @return {Promise} When resolved, returns an object containing an array of
       *                   search results.
       *
       * @method
       */
      search: viewModelWiring.createMethodDelegate("search"),

      /**
       * Performs a suggest() request on the active Locator. It also uses the current value of
       * the widget or one that is passed in.
       *
       * Suggestions are available if working with a 10.3 geocoding service that has
       * "suggest" capability loaded or a 10.3 feature layer that supports pagination, i.e.
       * supportsPagination = true.
       *
       * @param {string} [value] - The string value used to suggest() on an active Locator or feature layer. If
       *                         nothing is passed in, takes the current value of the widget.
       *
       * @return {Promise} When resolved, returns an object containing an array of suggestions.
       *
       * @method
       */
      suggest: viewModelWiring.createMethodDelegate("suggest"),

      //--------------------------------------------------------------------------
      //
      //  Private Methods
      //
      //--------------------------------------------------------------------------

      _getSourceName: function(index){
        var vm = this.viewModel;
        var sources = vm.sources;
        return index === SearchViewModel.ALL_INDEX ?
               i18n.all : sources.getItemAt(index).name;
      },

      _getExtraSearchResultAttributes: function(result) {
        return {
          searchTheme: CSS.root,
          searchResult: this._toSearchResultHTML(result),
          searchMoreResults: CSS.moreResults,
          searchMoreResultsItem: CSS.moreResultsItem,
          searchMoreResultsId: this._moreResultsId,
          searchMoreResultsHtml: this._toMoreResultsHTML()
        };
      },

      _handleClearButtonClick: function() {
        this.viewModel.clear();
        this.focus();
      },

      _handleSwitchCoordinatesClick: function (e) {
        e.preventDefault();

        var target = e.target;
        var switchedCoords = domAttr.get(target, "data-switch-coordinates");
        var vm = this.viewModel;

        if (switchedCoords) {
          vm.cancelSuggest();
          vm.searchTerm = switchedCoords;
          vm.search();
        }
      },

      _handleMoreResultClick: function(e) {
        e.preventDefault();

        var target = e.target;
        var dataSourceIdx = parseInt(domAttr.get(target, "data-source-index"), 10);
        var dataIdx = parseInt(domAttr.get(target, "data-index"), 10);
        var vm = this.viewModel;
        var results = vm.results;

        if (results && results[dataSourceIdx] && results[dataSourceIdx].results) {
          var selectFeature = results[dataSourceIdx].results[dataIdx];
          if (selectFeature) {
            vm.select(selectFeature);
          }
        }
      },

      _handleShowMoreResultsClick: function(e) {
        e.preventDefault();

        var moreResultsId = this._moreResultsId;
        var node = dom.byId(moreResultsId);
        var resultsToggleLabel;

        if (node) {
          domClass.toggle(node, CSS.showMoreResults);

          var showMoreResultsNode = dom.byId(moreResultsId + "_show");
          if (showMoreResultsNode) {
            resultsToggleLabel = domClass.contains(node, CSS.showMoreResults) ?
                                 i18n.hideMoreResults :
                                 i18n.showMoreResults;

            domAttr.set(showMoreResultsNode, "textContent", resultsToggleLabel);
          }
        }

        this._repositionPopup();
      },

      _closePopup: function() {
        var vm = this.viewModel;
        if (vm.popupEnabled && vm.get("view.popup")) {
          vm.view.popup.set("visible", false);
        }
      },

      _repositionPopup: function() {
        var vm = this.viewModel;
        if (vm.get("view.popup")) {
          vm.view.popup.reposition();
        }
      },

      _sourcesEvent: function(e, target) {
        var dataIdx = domAttr.get(target, "data-index");
        var lists = query("li", this._sourcesNode);
        var itemIndex = lists.indexOf(target);
        var keyCode = e.keyCode;
        var nextItemIndex;
        var focusTarget;
        dataIdx = parseInt(dataIdx, 10);

        if (keyCode === keys.ESCAPE) {
          this._hideSourcesMenu();
          this.focus();
          return;
        }

        if (e.type === "click" || keyCode === keys.ENTER) {
          this.viewModel.activeSourceIndex = dataIdx;
          this.focus();
          this._updateSourcesMenu(this.viewModel.sources);
          this._hideSourcesMenu();
          return;
        }

        if (keyCode === keys.UP_ARROW) {
          e.stopPropagation();
          e.preventDefault();

          nextItemIndex = itemIndex - 1;
          focusTarget = nextItemIndex < 0 ?
                        this._sourceButtonNode :
                        lists[nextItemIndex];

          this._focusManager.focus(focusTarget);

          return;
        }

        if (keyCode === keys.DOWN_ARROW) {
          e.stopPropagation();
          e.preventDefault();

          nextItemIndex = itemIndex + 1;
          focusTarget = nextItemIndex >= lists.length ?
                        this._sourceButtonNode :
                        lists[nextItemIndex];

          this._focusManager.focus(focusTarget);
        }
      },

      _suggestionsEvent: function (e, target) {
        var dataSourceIdx = domAttr.get(target, "data-source-index");
        var dataIdx = parseInt(domAttr.get(target, "data-index"), 10);
        var lists = query("li", this._suggestionsNode);
        var vm = this.viewModel;
        var sources = vm.sources;
        var itemIndex = lists.indexOf(target);
        var keyCode = e.keyCode;
        var nextItemIndex;

        dataSourceIdx = parseInt(dataSourceIdx, 10);

        vm.cancelSuggest();

        if (keyCode === keys.BACKSPACE || keyCode === keys.DELETE) {
          this.focus();
          return;
        }

        if (keyCode === keys.ESCAPE) {
          this._hideMenus();
          this.focus();
          return;
        }

        if (keyCode === keys.UP_ARROW) {
          e.stopPropagation();
          e.preventDefault();

          nextItemIndex = itemIndex - 1;

          if (nextItemIndex < 0) {
            this.focus();
          }
          else {
            this._focusManager.focus(lists[nextItemIndex]);
          }

          return;
        }

        if (keyCode === keys.DOWN_ARROW) {
          e.stopPropagation();
          e.preventDefault();

          nextItemIndex = itemIndex + 1;

          if (nextItemIndex >= lists.length) {
            this.focus();
          }
          else {
            this._focusManager.focus(lists[nextItemIndex]);
          }

          return;
        }

        if (e.type === "click" || keyCode === keys.ENTER) {
          var suggestions = vm.suggestions;
          var results, result;
          for(var i = 0; i < suggestions.length; i++){
            var suggestionSource = suggestions[i];
            if(suggestionSource.sourceIndex === dataSourceIdx){
              results = suggestionSource.results;
              result = results[dataIdx];
              break;
            }
          }

          if (result) {
            result.index = dataSourceIdx;

            if (sources.getItemAt(dataSourceIdx).featureLayer) {
              var objectIdField = sources.getItemAt(dataSourceIdx).featureLayer.objectIdField;
              result[SearchViewModel.OBJECT_ID_FIELD] = result.feature.attributes[objectIdField];
            }
            else if (result.magicKey && result.text) {
              vm.searchTerm = result.text;
              vm.currentSuggestion = result;
            }

            vm.search(result);
            this.focus();
          }
        }
      },

      _toSearchResultHTML: function (result) {
        var isLatLongType = result.feature &&
                            result.feature.attributes &&
                            result.feature.attributes.Addr_type &&
                            result.feature.attributes.Addr_type === "LatLong";

        if (!isLatLongType) {
          return result.name;
        }

        var lonLat = result.name.split(" ");
        var lon, lat;

        if (lonLat.length === 2) {
          lon = lonLat[0];
          lat = lonLat[1];
        }

        if (!lat || !lon) {
          return result.name;
        }

        lon = parseFloat(lon);
        lat = parseFloat(lat);

        var originalCoords = lon + ", " + lat;
        var switchedCoords = lat + ", " + lon;
        var strings = i18n;
        var html = "";

        html += "<div class=\"" + CSS.moreResultsItem + "\">";
        html += "<div class=\"" + CSS.moreResultsLatLonHeader + "\">" + strings.lonlat + "</div>";
        html += originalCoords;
        html += "</div>";
        html += "<div class=\"" + CSS.moreResultsItem + "\">";

        if (this._validSwitchCoordinates(lat, lon)) {
          html += "<div class=\"" + CSS.moreResultsLatLonHeader + "\">" + strings.reverseLonLatHeader + "</div>";
          html += "<a data-switch-coordinates=\"" + switchedCoords + "\" tabindex=\"0\" href=\"#\">" + switchedCoords + "</a>";
          html += "</div>";
        }

        return html;
      },

      _validSwitchCoordinates: function(lat, lon) {
        return lon !== lat && !(lon > 90 || lon < -90 || lat > 180 || lat < -180);
      },

      _toMoreResultsHTML: function () {
        var vm = this.viewModel;
        var html = "";
        var listHtml = "";
        var results = vm.results;
        var sources = vm.sources;
        var processedItems = 0;
        var result;
        var resultCount;
        var hasResults;

        if (results) {
          listHtml += "<div class=\"" + CSS.moreResultsItem + "\">";
          listHtml += "<a href=\"#\" id=\"" + this._moreResultsId + "_show" + "\">" + i18n.showMoreResults + "</a>";
          listHtml += "</div>";
          listHtml += "<div class=\"" + CSS.moreResultsList + "\">";
          listHtml += "<div id=\"" + this._moreResultsId + "_list" + "\">";

          for (var idx = 0; idx < results.length; idx++) {
            result = results[idx].results;
            hasResults = result && result.length > 0;

            if (!hasResults) {
              continue;
            }

            resultCount = result.length;

            // if more than one result and if one result, the one result is not the selected one
            var oneResultSelected = (resultCount === 1 && result[0] === result);
            if (this._totalResults(results) > 1 && !oneResultSelected) {
              var sourceName = this._getSourceName(idx);
              listHtml += "<div class=\"" + CSS.moreResultsListHeader + "\">" + sourceName + "</div>";
            }

            if (resultCount && !oneResultSelected) {
              listHtml += "<ul>";

              var maxResults = sources.getItemAt(idx).maxResults || vm.maxResults;

              for (var i = 0; i < resultCount && i < maxResults; ++i) {
                if (result[i] !== result && vm.selectedResult !== result[i]) {
                  listHtml += "<li><a tabindex=\"0\" data-index=\"" + i + "\" data-source-index=\"" + idx + "\" href=\"#\">" + result[i].name + "</a></li>";
                  processedItems++;
                }
              }

              listHtml += "</ul>";
            }
          }

          listHtml += "</div>";
          listHtml += "</div>";
        }

        if (processedItems > 0) {
          html += listHtml;
        }

        return html;
      },

      _totalResults: function (obj) {
        return Object.keys(obj).length;
      },

      _handleSearchButtonClick: function () {
        var vm = this.viewModel;
        vm.cancelSuggest();
          vm.search();
      },

      _handleSourceButtonKey: function(e) {
        if (!e) {
          return;
        }

        var isUp = e.keyCode === keys.UP_ARROW;
        var isDown = e.keyCode === keys.DOWN_ARROW;

        if (!isUp && !isDown) {
          return;
        }

        e.stopPropagation();
        e.preventDefault();
        this._showSourcesMenu();

        var lists = query("li", this._sourcesNode);
        var cursorIndex = isUp ? lists.length - 1 : 0;

        this._focusManager.focus(lists[cursorIndex]);
      },

      _handleInputKey: function(e) {
        if (!e) {
          return;
        }

        var keyCode = e.keyCode;
        var isIgnorableKey = e.ctrlKey || e.metaKey || keyCode === keys.copyKey || keyCode === keys.LEFT_ARROW || keyCode === keys.RIGHT_ARROW || keyCode === keys.ENTER;
        var lists = query("li", this._suggestionsNode);
        var vm = this.viewModel;
        var suggestions = vm.suggestions;
        var isUp;
        var isDown;
        var cursorIndex;

        if (isIgnorableKey) {
          return e;
        }

        if (keyCode === keys.TAB || keyCode === keys.ESCAPE) {
          vm.cancelSuggest();
          this._hideMenus();

          return;
        }

        isUp = keyCode === keys.UP_ARROW;
        isDown = keyCode === keys.DOWN_ARROW;

        if (isUp || isDown) {
          e.stopPropagation();
          e.preventDefault();
          vm.cancelSuggest();

          if (isDown && suggestions) {
            this._showSuggestionsMenu();
          }

          cursorIndex = isUp ? lists.length - 1 : 0;
          this._focusManager.focus(lists[cursorIndex]);

          return;
        }

        vm.suggest();
      },

      _handleInputClick: function () {
        this._hideSourcesMenu();
        this._hideNoResultsMenu();
      },

      _updateSuggestionsMenu: function(suggestions, value) {
        var vm = this.viewModel;

        if (!this._suggestionsNode) {
          return;
        }

        this._hideSourcesMenu();
        this._hideNoResultsMenu();

        var suggestionsContainer;
        var sources = vm.sources;

        if (!suggestions) {
          domConstruct.empty(this._suggestionsNode);
          this._hideSuggestionsMenu();
          return;
        }

        suggestionsContainer = domConstruct.create("div");

        for (var idx = 0; idx < suggestions.length; idx++) {
          if (suggestions[idx] && suggestions[idx].results && suggestions[idx].results.length) {
            var name = this._getSourceName(idx);

            if (sources.length > 1 && vm.activeSourceIndex === SearchViewModel.ALL_INDEX) {

              // header div
              domConstruct.create("div", {
                className: CSS.header,
                textContent: name
              }, suggestionsContainer);
            }

            var ul = domConstruct.create("ul", {}, suggestionsContainer);

            var maxSuggestions = sources.getItemAt(idx).maxSuggestions || vm.maxSuggestions;

            for (var i = 0; i < suggestions[idx].results.length && i < maxSuggestions; ++i) {
              var item = domConstruct.create("li", {
                "data-index": i,
                "data-source-index": suggestions[idx].sourceIndex,
                role: "menuitem",
                tabindex: 0
              }, ul);
              var partialMatchExpression = new RegExp("(" + value + ")", "gi");
              var suggestion = suggestions[idx].results[i];
              var text = suggestion.text || suggestion.name;
              var splitString = text.replace(partialMatchExpression, "|$1|");
              var parts = splitString.split("|");

              parts.forEach(function(part) {
                if (part.toLowerCase() === value.toLowerCase()) {
                  // bold part
                  domConstruct.create("strong", {
                    textContent: part
                  }, item);
                }
                else {
                  var textPart = document.createTextNode(part);
                  domConstruct.place(textPart, item);
                }
              });
            }
          }
        }

        domConstruct.place(suggestionsContainer, this._suggestionsNode, "only");

        this._suggestionsNode.scrollTop = 0;

        this._showSuggestionsMenu();
      },

      _updateSourcesMenu: function(sources) {
        var vm = this.viewModel;
        var containerNode = this._containerNode;
        var sourcesNode = this._sourcesNode;

        if (!sources || sources.length <= 1) {
          domClass.remove(containerNode, CSS.hasMultipleSources);
          domConstruct.empty(sourcesNode);
          return;
        }

        var layerClass, i;
        var activeSourceIndex = vm.activeSourceIndex;
        var list = domConstruct.create("ul");

        if (vm.searchAllEnabled) {
          var allActive = activeSourceIndex === SearchViewModel.ALL_INDEX ? CSS.source + " " + CSS.activeSource : CSS.source;

          domConstruct.create("li", {
            "data-index": SearchViewModel.ALL_INDEX,
            role: "menuitem",
            className: allActive,
            tabIndex: 0,
            textContent: i18n.all
          }, list);
        }

        for (i = 0; i < sources.length; i++) {
          layerClass = i === activeSourceIndex ?  CSS.source + " " + CSS.activeSource : CSS.source;

          domConstruct.create("li", {
            "data-index": i,
            role: "menuitem",
            className: layerClass,
            tabIndex: 0,
            textContent: this._getSourceName(i)
          }, list);
        }

        domClass.add(containerNode, CSS.hasMultipleSources);
        domConstruct.place(list, sourcesNode, "only");

        sourcesNode.scrollTop = 0;
      },

      _showLoading: function () {
        domClass.add(this._containerNode, CSS.isSearchLoading);
      },

      _hideLoading: function () {
        domClass.remove(this._containerNode, CSS.isSearchLoading);
      },

      _createEmptyResultsStructure: function(value) {
        var trimmedValue = value && value.trim();
        var strings = i18n;

        var rootNode = domConstruct.create("div", {
          className: CSS.noResultsBody
        });

        if (value && trimmedValue) {

          // header
          domConstruct.create("div", {
            className: CSS.noResultsHeader,
            textContent: strings.noResults
          }, rootNode);

          // no results text
          domConstruct.create("div", {
            className: CSS.noResultsText,
            textContent: esriLang.substitute({
              value: "\"" + value + "\""
            }, strings.noResultsFound)
          }, rootNode);
        }
        else {
          var container = domConstruct.create("div", {}, rootNode);

          // icon node
          domConstruct.create("span", {
            "aria-hidden": "true",
            className: CSS.noticeIcon
          }, container);

          // text node
          domConstruct.create("span", {
            className: CSS.noValueText,
            textContent: strings.emptyValue
          }, container);
        }

        domConstruct.place(rootNode, this._noResultsMenuNode, "only");
      },

      _hideMenus: function() {
        this._hideSourcesMenu();
        this._hideSuggestionsMenu();
        this._hideNoResultsMenu();
      },

      _hideNoResultsMenu: function() {
        domClass.remove(this._containerNode, CSS.showNoResults);
      },

      _showNoResultsMenu: function() {
        this._hideSourcesMenu();
        this._hideSuggestionsMenu();

        domClass.add(this._containerNode, CSS.showNoResults);
      },

      _hideSourcesMenu: function() {
        domClass.remove(this._containerNode, CSS.showSources);
      },

      _hideSuggestionsMenu: function() {
        domClass.remove(this._containerNode, CSS.showSuggestions);
      },

      _showSourcesMenu: function() {
        this._hideSuggestionsMenu();
        this._hideNoResultsMenu();

        domClass.add(this._containerNode, CSS.showSources);
      },

      _showSuggestionsMenu: function() {
        this._hideSourcesMenu();
        this._hideNoResultsMenu();

        domClass.add(this._containerNode, CSS.showSuggestions);
      },

      _handleSourcesMenuToggleClick: function() {
        this._hideSuggestionsMenu();
        this._hideNoResultsMenu();

        domClass.toggle(this._containerNode, CSS.showSources);
      }

    });

  return Search;
});
