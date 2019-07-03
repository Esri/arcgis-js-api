/**
 * The Bookmarks widget allows end users to quickly navigate to a particular area of interest.
 * It displays a list of {@link module:esri/webmap/Bookmark bookmarks},
 * which typically are defined inside the {@link module:esri/WebMap#bookmarks WebMap}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * This widget is designed to work in 2D only, so it shouldn't be used in a {@link module:esri/views/SceneView}.
 *
 * :::
 *
 * @module esri/widgets/Bookmarks
 * @since 4.8
 *
 * @see [Bookmarks.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Bookmarks.tsx)
 * @see [Bookmarks.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Bookmarks.scss)
 * @see [Sample - Bookmarks widget](../sample-code/widgets-bookmarks/index.html)
 * @see module:esri/widgets/Bookmarks/BookmarksViewModel
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import i18nCommon = require("dojo/i18n!esri/nls/common");
import i18n = require("dojo/i18n!esri/widgets/Bookmarks/nls/Bookmarks");

// esri.core
import Collection = require("esri/core/Collection");
import Handles = require("esri/core/Handles");
import watchUtils = require("esri/core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import MapView = require("esri/views/MapView");

// esri.webmap
import Bookmark = require("esri/webmap/Bookmark");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Bookmarks
import BookmarksViewModel = require("esri/widgets/Bookmarks/BookmarksViewModel");

// esri.widgets.support
import { GoToOverride, VNode } from "esri/widgets/support/interfaces";
import { renderable, tsx, vmEvent } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-bookmarks esri-widget--panel",
  loaderContainer: "esri-bookmarks__loader-container",
  loader: "esri-bookmarks__loader",
  fadeIn: "esri-bookmarks--fade-in",

  bookmarkList: "esri-bookmarks__list",

  bookmark: "esri-bookmarks__bookmark",
  bookmarkButton: "esri-bookmarks__bookmark-button",
  bookmarkImageContainer: "esri-bookmarks__bookmark-image-container",
  bookmarkIcon: "esri-bookmarks__bookmark-icon",
  bookmarkImage: "esri-bookmarks__image",
  bookmarkName: "esri-bookmarks__bookmark-name",
  bookmarkActive: "esri-bookmarks__bookmark--active",

  noBookmarksContainer: "esri-widget__content--empty",
  noBookmarksHeader: "esri-bookmarks__no-bookmarks-heading",
  noBookmarksIcon: "esri-widget__no-bookmark-icon",
  noBookmarksDescription: "esri-bookmarks__no-bookmarks-description",

  disabledContainer: "esri-bookmarks__disabled-container",
  disabledHeading: "esri-bookmarks__disabled-heading",
  disabledDescription: "esri-bookmarks__disabled-description",

  addingBookmark: "esri-bookmarks__adding-bookmark",

  addBookmark: "esri-bookmarks__add-bookmark",
  addBookmarkButton: "esri-bookmarks__add-bookmark-button",
  addBookmarkIcon: "esri-bookmarks__add-bookmark-icon",

  authoringCard: "esri-bookmarks__authoring-card",
  authoringForm: "esri-bookmarks__authoring-form",
  authoringLabel: "esri-bookmarks__authoring-label",
  authoringActions: "esri-bookmarks__authoring-actions",
  authoringInputInvalid: "esri-bookmarks__authoring-input--invalid",
  authoringDeleteButton: "esri-bookmarks__authoring-delete-button",
  authoringCancelButton: "esri-bookmarks__authoring-cancel-button",

  // common
  esriWidget: "esri-widget",
  esriButton: "esri-button",
  esriButtonTertiary: "esri-button--tertiary",
  esriInput: "esri-input",
  iconPlus: "esri-icon-plus",
  iconEdit: "esri-icon-edit",
  widgetIcon: "esri-icon-bookmark",
  header: "esri-widget__heading",
  disabled: "esri-disabled",
  loading: "esri-icon-loading-indicator",
  rotating: "esri-rotating"
};

@subclass("esri.widgets.Bookmarks")
class Bookmarks extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when a {@link module:esri/webmap/Bookmark} is selected.
   *
   * @event module:esri/widgets/Bookmarks#select-bookmark
   *
   * @property {module:esri/webmap/Bookmark} bookmark - The bookmark selected by the user.
   *
   * @example
   * const bookmarksWidget = new Bookmarks({
   *   view: view
   * });
   *
   * const bookmarksExpand = new Expand({
   *   view: view,
   *   content: bookmarksWidget
   * });
   * view.ui.add(bookmarksExpand, "top-right");
   *
   * // collapses the associated Expand instance
   * // when the user selects a bookmark
   * bookmarksWidget.on("select-bookmark", function(event){
   *   bookmarksExpand.expanded = false;
   * });
   */

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @mixes module:esri/widgets/support/GoTo
   * @constructor
   * @alias module:esri/widgets/Bookmarks
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(params?: any) {
    super();
  }

  postInitialize(): void {
    this.own([watchUtils.init(this, "viewModel.bookmarks", () => this._bookmarksInitialized())]);
  }

  destroy(): void {
    this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles: Handles = new Handles();

  private _addInputNode: HTMLInputElement = null;

  private _editInputNode: HTMLInputElement = null;

  private _addBookmarkButtonNode: HTMLButtonElement = null;

  private _focusAddBookmarkButton = false;

  private _addBookmark = false;

  private _editBookmark: Bookmark = null;

  private _invalidEntry = false;

  private _creatingBookmark = false;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  bookmarks
  //----------------------------------

  /**
   * A collection of {@link module:esri/webmap/Bookmark}s.
   *
   * @name bookmarks
   * @instance
   * @type {module:esri/core/Collection<module:esri/webmap/Bookmark>}
   */
  @aliasOf("viewModel.bookmarks")
  bookmarks: Collection<Bookmark> = null;

  //----------------------------------
  //  editingEnabled
  //----------------------------------

  /**
   * @todo document
   */
  @renderable()
  @property()
  editingEnabled = false;

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
   * @name label
   * @instance
   * @type {string}
   */
  @property()
  label = i18n.widgetLabel;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * The view from which the widget will operate.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView}
   */
  @aliasOf("viewModel.view")
  view: MapView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Bookmarks/BookmarksViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Bookmarks/BookmarksViewModel}
   * @autocast
   */
  @property({
    type: BookmarksViewModel
  })
  @renderable(["activeBookmark", "state", "bookmarks"])
  @vmEvent(["select-bookmark"])
  viewModel: BookmarksViewModel = new BookmarksViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Zoom to a specific bookmark.
   *
   * @param {module:esri/webmap/Bookmark} Bookmark - The bookmark to zoom to.
   * @return {Promise} Resolves after the animation to specified bookmark finishes.
   */
  @aliasOf("viewModel.goTo")
  goTo(bookmark: Bookmark): IPromise<void> {
    return null;
  }

  render(): VNode {
    const { state } = this.viewModel;

    const bookmarkListNode =
      state === "disabled"
        ? this._renderDisabled()
        : state === "loading"
        ? this._renderLoading()
        : this._renderBookmarks();

    const baseClasses = {
      [CSS.disabled]: state === "disabled"
    };

    return (
      <div class={this.classes(baseClasses, CSS.base, CSS.esriWidget)}>{bookmarkListNode}</div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected _renderLoading(): VNode {
    return (
      <div class={CSS.loaderContainer} key="loader">
        <div class={CSS.loader} />
      </div>
    );
  }

  protected _renderDisabled(): VNode {
    return (
      <div
        key="bookmarks-disabled"
        class={this.classes(CSS.noBookmarksContainer, CSS.disabledContainer)}
      >
        <h1 class={CSS.header}>{i18n.disabledHeading}</h1>
        <p class={CSS.disabledDescription}>{i18n.disabledDescription}</p>
      </div>
    );
  }

  protected _renderNoBookmarksContainer(): VNode {
    return (
      <div class={CSS.noBookmarksContainer} key="no-bookmarks">
        <span aria-hidden="true" class={this.classes(CSS.noBookmarksIcon, CSS.widgetIcon)} />
        <h1 class={this.classes(CSS.header, CSS.noBookmarksHeader)}>{i18n.noBookmarksHeading}</h1>
        <p class={CSS.noBookmarksDescription}>{i18n.noBookmarksDescription}</p>
      </div>
    );
  }

  protected _renderAddBookmarkLoading(): VNode {
    return (
      <li key="adding-bookmark" class={CSS.addingBookmark}>
        <span aria-hidden="true" class={this.classes(CSS.loading, CSS.rotating)} />
        {i18n.addingBookmark}
      </li>
    );
  }

  protected _renderBookmarkItems(bookmarks: Collection<Bookmark>): VNode[] {
    if (!bookmarks) {
      return null;
    }

    return bookmarks
      .map((bookmark) =>
        this.editingEnabled && this._editBookmark && bookmark && this._editBookmark === bookmark
          ? this._renderEditingBookmark(bookmark)
          : this._renderBookmark(bookmark)
      )
      .toArray();
  }

  protected _renderBookmarksContainer(bookmarks: Collection<Bookmark>): VNode {
    const addBookmarkNode = this.editingEnabled
      ? this._creatingBookmark
        ? this._renderAddBookmarkLoading()
        : this._addBookmark
        ? this._renderAddingBookmark()
        : this._renderAddBookmarkButton()
      : null;

    return (
      <ul key="bookmark-list" aria-label={i18n.widgetLabel} class={CSS.bookmarkList}>
        {this._renderBookmarkItems(bookmarks)}
        {addBookmarkNode}
      </ul>
    );
  }

  protected _renderAddBookmarkButton(): VNode {
    return (
      <li key="add-bookmark-item" class={CSS.addBookmark}>
        <button
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary, CSS.addBookmarkButton)}
          onclick={this._showAddBookmarkForm}
          afterCreate={this._storeAddBookmarkButton}
          afterUpdate={this._storeAddBookmarkButton}
          data-node-ref="_addBookmarkButtonNode"
          bind={this}
        >
          <span aria-hidden="true" class={this.classes(CSS.addBookmarkIcon, CSS.iconPlus)} />
          {i18n.addBookmark}
        </button>
      </li>
    );
  }

  protected _renderBookmarks(): VNode {
    const { bookmarks } = this.viewModel;

    const validBookmarks = bookmarks && bookmarks.filter(Boolean);

    const hasBookmarks = validBookmarks && validBookmarks.length;

    const bookmarksNode =
      hasBookmarks || this.editingEnabled ? this._renderBookmarksContainer(validBookmarks) : null;
    const noBookmarksNode = !hasBookmarks ? this._renderNoBookmarksContainer() : null;

    return [noBookmarksNode, bookmarksNode];
  }

  protected _renderBookmark(bookmark: Bookmark): VNode {
    const { activeBookmark } = this.viewModel;

    const { name, thumbnail } = bookmark;
    const title = name || i18nCommon.untitled;

    const bookmarkClasses = {
      [CSS.bookmarkActive]: activeBookmark === bookmark
    };

    const imageSource = (thumbnail && thumbnail.url) || "";

    const imageNode = imageSource ? (
      <img src={imageSource} alt="" class={CSS.bookmarkImage} />
    ) : (
      <span aria-hidden="true" class={this.classes(CSS.bookmarkIcon, CSS.widgetIcon)} />
    );

    const imageContainerNode = <div class={CSS.bookmarkImageContainer}>{imageNode}</div>;

    const editContainer = this.editingEnabled ? (
      <div key="edit-container">
        <button
          title={i18nCommon.edit}
          aria-label={i18nCommon.edit}
          data-bookmark-item={bookmark}
          onclick={this._showEditBookmarkForm}
          bind={this}
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary)}
        >
          <span aria-hidden="true" class={CSS.iconEdit} />
        </button>
      </div>
    ) : null;

    return (
      <li key={bookmark} class={this.classes(CSS.bookmark, bookmarkClasses)}>
        <button
          bind={this}
          data-bookmark-item={bookmark}
          onclick={this._goToBookmark}
          class={CSS.bookmarkButton}
        >
          {imageContainerNode}
          <span class={CSS.bookmarkName}>{title}</span>
          {editContainer}
        </button>
      </li>
    );
  }

  protected _renderEditingBookmark(bookmark: Bookmark): VNode {
    return (
      <li key="edit-bookmark-form" class={CSS.authoringCard}>
        <form class={CSS.authoringForm} onsubmit={this._editBookmarkSubmit} bind={this}>
          <label class={CSS.authoringLabel}>
            {i18n.title}
            <input
              required
              bind={this}
              class={this.classes(
                CSS.esriInput,
                this._invalidEntry ? CSS.authoringInputInvalid : null
              )}
              type="text"
              value={bookmark.name}
              afterCreate={this._storeEditInput}
              afterUpdate={this._focusEditInput}
              data-bookmark-item={bookmark}
              data-node-ref="_editInputNode"
              placeholder={i18n.addPlaceholder}
            />
          </label>
          <div class={CSS.authoringActions}>
            <input
              type="button"
              value={i18nCommon.delete}
              class={this.classes(
                CSS.esriButton,
                CSS.esriButtonTertiary,
                CSS.authoringDeleteButton
              )}
              data-bookmark-item={bookmark}
              onclick={this._deleteBookmark}
              bind={this}
            />
            <input
              type="button"
              value={i18nCommon.cancel}
              class={this.classes(CSS.esriButton, CSS.esriButtonTertiary)}
              onclick={this._hideEditBookmarkForm}
              bind={this}
            />
            <input class={CSS.esriButton} type="submit" value={i18nCommon.save} />
          </div>
        </form>
      </li>
    );
  }

  protected _renderAddingBookmark(): VNode {
    return (
      <li key="add-bookmark-form" class={CSS.authoringCard}>
        <form class={CSS.authoringForm} onsubmit={this._addBookmarkSubmit} bind={this}>
          <label class={CSS.authoringLabel}>
            {i18n.title}
            <input
              required
              bind={this}
              class={this.classes(
                CSS.esriInput,
                this._invalidEntry ? CSS.authoringInputInvalid : null
              )}
              type="text"
              afterCreate={this._storeAddInput}
              afterUpdate={this._focusAddInput}
              data-node-ref="_addInputNode"
              value=""
              placeholder={i18n.addPlaceholder}
            />
          </label>
          <div class={this.classes(CSS.authoringActions)}>
            <input
              type="button"
              value={i18nCommon.cancel}
              class={this.classes(
                CSS.esriButton,
                CSS.esriButtonTertiary,
                CSS.authoringCancelButton
              )}
              onclick={this._hideAddBookmarkForm}
              bind={this}
            />
            <input class={CSS.esriButton} type="submit" value={i18nCommon.add} />
          </div>
        </form>
      </li>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _bookmarksInitialized(): void {
    const bookmarksKey = "bookmarks-init";
    const { _handles } = this;

    _handles.remove(bookmarksKey);

    _handles.add(
      watchUtils.on(this, "viewModel.bookmarks", "change", () => this._bookmarksChanged()),
      bookmarksKey
    );
  }

  private _bookmarksChanged(): void {
    const itemsKey = "bookmarks-change";
    const { bookmarks } = this.viewModel;
    const { _handles } = this;

    _handles.remove(itemsKey);

    const handles = bookmarks.map((bookmark) =>
      watchUtils.watch(bookmark, ["active", "name", "thumbnail.url"], () => this.scheduleRender())
    );

    _handles.add(handles, itemsKey);

    this.scheduleRender();
  }

  private _showAddBookmarkForm(): void {
    this._editBookmark = null;
    this._addBookmark = true;
    this.scheduleRender();
  }

  private _hideAddBookmarkForm(): void {
    this._invalidEntry = false;
    this._addBookmark = false;
    this._creatingBookmark = false;
    this._focusAddBookmarkButton = true;
    this.scheduleRender();
  }

  private _showEditBookmarkForm(event: Event): void {
    event.stopPropagation();

    const node = event.currentTarget as Element;
    const bookmark = node["data-bookmark-item"] as Bookmark;

    this._addBookmark = false;
    this._editBookmark = bookmark;
    this.scheduleRender();
  }

  private _hideEditBookmarkForm(): void {
    this._invalidEntry = false;
    this._editBookmark = null;
    this.scheduleRender();
  }

  private _addBookmarkSubmit(event: Event): void {
    event.preventDefault();

    const { _addInputNode } = this;

    const name = _addInputNode && _addInputNode.value.trim();

    if (!name) {
      this._invalidEntry = true;
      this.scheduleRender();
      return;
    }

    this._creatingBookmark = true;
    this.scheduleRender();

    this.viewModel.createBookmark().then((bookmark) => {
      bookmark.name = name;

      this.viewModel.bookmarks.add(bookmark);

      this._hideAddBookmarkForm();
    });
  }

  private _editBookmarkSubmit(event: Event): void {
    event.preventDefault();

    const { _editInputNode, _editBookmark } = this;

    const name = _editInputNode && _editInputNode.value.trim();

    if (!name) {
      this._invalidEntry = true;
      this.scheduleRender();
      return;
    }

    _editBookmark.name = name;

    this._hideEditBookmarkForm();
  }

  private _storeAddBookmarkButton(node: HTMLButtonElement): void {
    this._addBookmarkButtonNode = node;

    this._focusAddBookmark();
  }

  private _storeEditInput(node: HTMLInputElement): void {
    this._editInputNode = node;

    this._focusEditInput();
  }

  private _storeAddInput(node: HTMLInputElement): void {
    this._addInputNode = node;

    this._focusAddInput();
  }

  private _focusAddInput(): void {
    this._addInputNode && this._addInputNode.focus();
  }

  private _focusAddBookmark(): void {
    if (this._addBookmarkButtonNode && this._focusAddBookmarkButton) {
      this._focusAddBookmarkButton = false;
      this._addBookmarkButtonNode.focus();
    }
  }

  private _focusEditInput(): void {
    this._editInputNode && this._editInputNode.focus();
  }

  private _deleteBookmark(event: Event): void {
    event.stopPropagation();

    const node = event.currentTarget as Element;
    const bookmark = node["data-bookmark-item"] as Bookmark;

    this.viewModel.bookmarks.remove(bookmark);
  }

  private _goToBookmark(event: Event): void {
    const node = event.currentTarget as Element;
    const bookmark = node["data-bookmark-item"] as Bookmark;

    this._hideAddBookmarkForm();
    this._hideEditBookmarkForm();

    this.viewModel.goTo(bookmark);
  }
}

export = Bookmarks;
