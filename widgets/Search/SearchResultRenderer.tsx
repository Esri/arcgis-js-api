/**
 * The `SearchResultRenderer` renders the [Search]{@link module:esri/widgets/Search} widget
 * results and allows expanding a DOM element to show alternative matches. These alternative matches
 * appear in the `Show more results` link of the Search widget.
 *
 * The required properties are: [view](#view) and [viewModel](#viewModel).
 *
 * @module esri/widgets/Search/SearchResultRenderer
 * @since 4.3
 *
 * @see module:esri/widgets/Search
 * @see module:esri/widgets/Search/SearchViewModel
 */

// esri.core.accessorSupport
import { property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.widgets
import { SearchResult, SearchResults, SupportedSearchSource } from "esri/interfaces";
import Popup = require("esri/Popup");
import Widget = require("esri/Widget");

// esri.widgets.Search
import SearchViewModel = require("esri/widgets/SearchViewModel");

// esri.widgets.Search.t9n
import SearchMessages from "esri/widgets/t9n/Search";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { accessibleHandler, messageBundle, renderable, tsx } from "esri/support/widget";

const CSS = {
  base: "esri-search-result-renderer esri-widget",
  anchor: "esri-widget__anchor",
  showMoreResults: "esri-search-result-renderer__more-results--show-more-results",
  moreResults: "esri-search-result-renderer__more-results",
  moreResultsList: "esri-search-result-renderer__more-results-list",
  moreResultsHeader: "esri-search-result-renderer__more-results-header",
  moreResultsItem: "esri-search-result-renderer__more-results-item",
  moreResultsListHeader: "esri-search-result-renderer__more-results-list-header"
};

/**
 * @constructor
 * @alias module:esri/widgets/Search/SearchResultRenderer
 * @extends module:esri/widgets/Widget
 * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
 *                              that may be passed into the constructor.
 */
@subclass("esri.widgets.Search.SearchResultRenderer")
class SearchResultRenderer extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(value?: any, parentNode?: string | Element) {
    super(value, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

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
  @messageBundle("esri/widgets/Search/t9n/Search")
  messages: SearchMessages = null;

  //----------------------------------
  // showMoreResultsOpen
  //----------------------------------

  /**
   * Indicates whether to display the `Show more results` link within the search result's popup.
   * A value of `true` will not display the link in the popup.
   *
   * @name showMoreResultsOpen
   * @instance
   * @type {boolean}
   * @default false
   *
   * @example
   * const searchResult = new SearchResultRenderer({
   *   view: view,
   *   container: document.createElement("div"),
   *   showMoreResultsOpen: true,
   *   viewModel: searchWidget.viewModel
   * });
   *
   * // Add the result to the bottom-right corner of the view
   * view.ui.add(searchResult, {
   *   position: "bottom-right"
   * });
   */
  @renderable()
  @property()
  showMoreResultsOpen = false;

  //----------------------------------
  // viewModel
  //----------------------------------

  /**
   * The view model for this Search widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Search/SearchViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Search/SearchViewModel}
   * @autocast
   *
   * @example
   * const searchResult = new SearchResultRenderer({
   *   view: view,
   *   container: document.createElement("div"),
   *   showMoreResultsOpen: true,
   *   viewModel: searchWidget.viewModel
   * });
   *
   * // Add the result to the bottom-right corner of the view
   * view.ui.add(searchResult, {
   *   position: "bottom-right"
   * });
   */
  @property()
  @renderable(["viewModel.results", "viewModel.selectedResult", "viewModel.resultCount"])
  viewModel: SearchViewModel = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const moreResultsClasses = {
      [CSS.showMoreResults]: this.showMoreResultsOpen
    };

    return (
      <div class={CSS.base}>
        <div
          key="esri-search-renderer__container"
          class={this.classes(CSS.moreResults, moreResultsClasses)}
        >
          {this.renderSearchResultName()}
          {this.renderMoreResults()}
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderMoreResults(): VNode {
    return (
      <div key="esri-search-renderer__more-results">
        {this.renderMoreResultsButton()}
        {this.renderMoreResultsLists()}
      </div>
    );
  }

  protected renderSearchResultName(): VNode {
    const searchResult = this.viewModel?.selectedResult;
    const searchResultName = (searchResult && searchResult.name) || "";

    return (
      <div key="esri-search-renderer__result-name" class={CSS.moreResultsItem}>
        {searchResultName}
      </div>
    );
  }

  protected renderMoreResultsLists(): VNode {
    const searchResults = this.viewModel?.results;
    const { resultCount } = this.viewModel;

    if (resultCount < 2) {
      return null;
    }

    const resultsLists = searchResults.map((sourceResult) =>
      this.renderMoreResultsList(sourceResult)
    );

    return (
      <div key="esri-search-renderer__more-results-container" class={CSS.moreResultsList}>
        {resultsLists}
      </div>
    );
  }

  protected renderMoreResultsButton(): VNode {
    const { messages } = this;
    const { resultCount } = this.viewModel;

    if (resultCount < 2) {
      return null;
    }

    return (
      <div key="esri-search-renderer__more-results-button" class={CSS.moreResultsItem}>
        <a
          class={CSS.anchor}
          href="#"
          bind={this}
          onclick={this._showMoreResultsClick}
          onkeydown={this._showMoreResultsClick}
        >
          {this.showMoreResultsOpen ? messages.hideMoreResults : messages.showMoreResults}
        </a>
      </div>
    );
  }

  protected renderMoreResultsHeader(sourceName: string, sourceIndex: number): VNode {
    return (
      <div
        key={`esri-search-result-renderer__header-${sourceIndex}`}
        class={CSS.moreResultsListHeader}
      >
        {sourceName}
      </div>
    );
  }

  protected renderMoreResultsList(searchResults: SearchResults<SearchResult>): VNode {
    const { results } = searchResults;
    const resultCount = results.length;
    const hasResults = !!resultCount;
    const searchResult = this.viewModel?.selectedResult;
    const oneResultSelected = resultCount === 1 && results[0] === searchResult;

    const sourceName = this._getSourceName(searchResults.source, searchResults.sourceIndex);

    const moreResultsHeaderNode =
      this.viewModel?.results.length > 1 && !oneResultSelected
        ? this.renderMoreResultsHeader(sourceName, searchResults.sourceIndex)
        : null;

    const resultListItems =
      hasResults &&
      results.map((resultListItem, resultListItemIndex) =>
        this.renderMoreResultsListItem(resultListItem, resultListItemIndex)
      );

    const moreResultsListNode =
      hasResults && !oneResultSelected ? (
        <ul key={`esri-search-result-renderer__list-${searchResults.sourceIndex}`}>
          {resultListItems}
        </ul>
      ) : null;

    const resultsSectionNode = hasResults ? (
      <div key={`esri-search-result-renderer__results-${searchResults.sourceIndex}`}>
        {moreResultsHeaderNode}
        {moreResultsListNode}
      </div>
    ) : null;

    return resultsSectionNode;
  }

  protected renderMoreResultsListItem(result: SearchResult, index: number): VNode {
    const searchResult = this.get<SearchResult>("viewModel.selectedResult");

    const resultItemNode =
      result !== searchResult ? (
        <li key={`esri-search-result-renderer__list-item-${index}`}>
          <a
            class={CSS.anchor}
            href="#"
            tabindex="0"
            bind={this}
            data-result={result}
            onclick={this._selectResultClick}
            onkeydown={this._selectResultClick}
          >
            {result.name}
          </a>
        </li>
      ) : null;

    return resultItemNode;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _showMoreResultsClick(event: Event): void {
    event.preventDefault();
    this.showMoreResultsOpen = !this.showMoreResultsOpen;
    const popup = this.get<Popup>("viewModel.view.popup");
    popup && popup.reposition();
  }

  @accessibleHandler()
  private _selectResultClick(event: Event): void {
    event.preventDefault();
    const node = event.currentTarget as HTMLElement;
    const result = node["data-result"] as SearchResult;
    this.viewModel && this.viewModel.select(result);
  }

  private _getSourceName(source: SupportedSearchSource, sourceIndex: number): string {
    return sourceIndex === SearchViewModel.ALL_INDEX ? this.messages.all : source.name;
  }
}

export = SearchResultRenderer;
