/**
 * The Bookmarks widget allows end users to quickly navigate to a particular area of interest.
 * It displays a list of {@link module:esri/webmap/Bookmark bookmarks},
 * which typically are defined inside the {@link module:esri/WebMap#bookmarks WebMap}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * This widget is designed to work in 2D. It shouldn't be used in a {@link module:esri/views/SceneView}
 * unless you supply the bookmarks manually.
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

// esri.core
import Collection = require("esri/core/Collection");
import { eventKey } from "esri/core/events";
import Handles = require("esri/core/Handles");
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.libs.sortablejs
import Sortable = require("esri/libs/sortablejs/Sortable");

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import MapView = require("esri/views/MapView");

// esri.webmap
import Bookmark = require("esri/webmap/Bookmark");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Bookmarks
import BookmarksViewModel = require("esri/widgets/Bookmarks/BookmarksViewModel");
import { BookmarkCreationOptions } from "esri/widgets/Bookmarks/interfaces";

// esri.widgets.Bookmarks.t9n
import BookmarksMessages from "esri/widgets/Bookmarks/t9n/Bookmarks";

// esri.widgets.support
import { GoToOverride } from "esri/widgets/support/GoTo";
import { VNode } from "esri/widgets/support/interfaces";
import { renderable, tsx, vmEvent, messageBundle } from "esri/widgets/support/widget";

function moveItem(data: any[], from: number, to: number): void {
  data.splice(to, 0, data.splice(from, 1)[0]);
}

const SORT_GROUP_NAME = "bookmarks";
const SORT_DATA_ATTR = "data-bookmark-uid";

const CSS = {
  base: "esri-bookmarks esri-widget--panel",
  loaderContainer: "esri-bookmarks__loader-container",
  loader: "esri-bookmarks__loader",
  fadeIn: "esri-bookmarks--fade-in",

  bookmarkList: "esri-bookmarks__list",
  bookmarkListSortable: "esri-bookmarks__list--sortable",

  bookmark: "esri-bookmarks__bookmark",
  bookmarkButton: "esri-bookmarks__bookmark-button",
  bookmarkImageContainer: "esri-bookmarks__bookmark-image-container",
  bookmarkEditButton: "esri-bookmarks__bookmark-edit-button",
  bookmarkDragHandle: "esri-bookmarks_bookmark-drag-handle",
  bookmarkDragHandleIcon: "esri-bookmarks_bookmark-drag-handle-icon",
  bookmarkIcon: "esri-bookmarks__bookmark-icon",
  bookmarkImage: "esri-bookmarks__image",
  bookmarkName: "esri-bookmarks__bookmark-name",
  bookmarkActive: "esri-bookmarks__bookmark--active",

  noBookmarksContainer: "esri-widget__content--empty",
  noBookmarksHeader: "esri-bookmarks__no-bookmarks-heading",
  noBookmarksIcon: "esri-widget__no-bookmark-icon",
  noBookmarksDescription: "esri-bookmarks__no-bookmarks-description",

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
  esriWidgetDisabled: "esri-widget--disabled",
  esriButton: "esri-button",
  esriButtonTertiary: "esri-button--tertiary",
  esriInput: "esri-input",
  iconHandle: "esri-icon-handle-vertical",
  iconPlus: "esri-icon-plus",
  iconEdit: "esri-icon-edit",
  widgetIcon: "esri-icon-bookmark",
  header: "esri-widget__heading",
  loading: "esri-icon-loading-indicator",
  rotating: "esri-rotating"
};

interface VisibleElements {
  addBookmark?: boolean;
  thumbnail?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  addBookmark: true,
  thumbnail: true
};

@subclass("esri.widgets.Bookmarks")
class Bookmarks extends Widget {
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
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this.own([
      watchUtils.init(this, "viewModel.bookmarks", () => this._bookmarksInitialized()),
      watchUtils.init(this, "editingEnabled", () => this._toggleSorting())
    ]);
  }

  destroy(): void {
    this._destroySortable();
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

  private _focusEditInputBox = false;

  private _focusAddInputBox = false;

  private _addBookmark = false;

  private _editBookmark: Bookmark = null;

  private _invalidEntry = false;

  private _creatingBookmark = false;

  private _sortable: Sortable = null;

  private _sortableNode: HTMLUListElement = null;

  private _focusSortUid: string = null;

  private _selectedSortUid: string = null;

  private _sortableSavedItems: string[] = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  bookmarkCreationOptions
  //----------------------------------

  /**
   * Specifies how new bookmarks will be created if [editingEnabled](#editingEnabled) is set to `true`.
   * Can be used to enable or disable taking screenshots or creating an extent based on the current
   * view when a bookmark is created. See {@link module:esri/widgets/Bookmarks/BookmarksViewModel~BookmarkCreationOptions BookmarkCreationOptions}
   * for more information.
   *
   * @name bookmarkCreationOptions
   * @instance
   * @type {module:esri/widgets/Bookmarks/BookmarksViewModel~BookmarkCreationOptions}
   *
   * @since 4.13
   *
   * @example
   * const bookmarks = new Bookmarks({
   *    view: view,
   *    editingEnabled: true,
   *    // whenever a new bookmark is created, a 100x100 px
   *    // screenshot of the view will be taken and the extent
   *    // of the view will not be set as the extent of the new bookmark
   *    bookmarkCreationOptions: {
   *      takeScreenshot: true,
   *      captureExtent: false,
   *      screenshotSettings: {
   *        width: 100,
   *        height: 100
   *      }
   *    }
   * });
   *
   */
  @property()
  bookmarkCreationOptions: BookmarkCreationOptions = null;

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
  @renderable()
  @property()
  disabled = false;

  //----------------------------------
  //  editingEnabled
  //----------------------------------

  /**
   * Indicates whether the widget is able to be edited.
   * When `true`, allows bookmarks to be added, edited,
   * reordered, or deleted from within the widget. Any
   * edits made will only be shown locally and will not
   * be saved.
   *
   * @name editingEnabled
   * @instance
   * @type {boolean}
   * @since 4.13
   * @default false
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
  @messageBundle("esri/widgets/Bookmarks/t9n/Bookmarks")
  messages: BookmarksMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

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
  @property({ type: BookmarksViewModel })
  @renderable(["activeBookmark", "state", "bookmarks"])
  @vmEvent(["select-bookmark"])
  viewModel: BookmarksViewModel = new BookmarksViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/Bookmarks~VisibleElements
   *
   * @property {boolean} [addBookmark] - Indicates whether to button to add a new bookmark displays. Default is `true`.
   * @property {boolean} [thumbnail] - Indicates whether the thumbnail associated with the bookmark displays.
   * Default value is `true`.
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Bookmarks~VisibleElements}
   * @autocast
   *
   * @since 4.13
   *
   * @example
   * bookmarks.visibleElements = {
   *   thumbnail: false
   * };
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

  /**
   * @todo document
   * Closes the add bookmark form.
   * @ignore
   */
  @property()
  endAddBookmark(): void {
    this._invalidEntry = false;
    this._addBookmark = false;
    this._creatingBookmark = false;
    this.scheduleRender();
  }

  /**
   * Zoom to a specific bookmark.
   *
   * @param {module:esri/webmap/Bookmark} Bookmark - The bookmark to zoom to.
   * @return {Promise} Resolves after the animation to specified bookmark finishes.
   */
  goTo(bookmark: Bookmark): Promise<void> {
    return this.viewModel.goTo(bookmark);
  }

  render(): VNode {
    const { state } = this.viewModel;

    const bookmarkListNode = state === "loading" ? this.renderLoading() : this.renderBookmarks();

    return (
      <div
        class={this.classes(CSS.base, CSS.esriWidget, { [CSS.esriWidgetDisabled]: this.disabled })}
      >
        {bookmarkListNode}
      </div>
    );
  }

  /**
   * @todo document
   * Opens the add bookmark form.
   * @ignore
   */
  @property()
  startAddBookmark(): void {
    this._editBookmark = null;
    this._addBookmark = true;
    this._focusAddInputBox = true;
    this.scheduleRender();
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderLoading(): VNode {
    return (
      <div class={CSS.loaderContainer} key="loader">
        <div class={CSS.loader} />
      </div>
    );
  }

  protected renderNoBookmarksContainer(): VNode {
    const { messages } = this;

    return (
      <div class={CSS.noBookmarksContainer} key="no-bookmarks">
        <span aria-hidden="true" class={this.classes(CSS.noBookmarksIcon, CSS.widgetIcon)} />
        <h1 class={this.classes(CSS.header, CSS.noBookmarksHeader)}>
          {messages.noBookmarksHeading}
        </h1>
        <p class={CSS.noBookmarksDescription}>{messages.noBookmarksDescription}</p>
      </div>
    );
  }

  protected renderAddBookmarkLoading(): VNode {
    return (
      <div key="adding-bookmark" class={CSS.addingBookmark}>
        <span aria-hidden="true" class={this.classes(CSS.loading, CSS.rotating)} />
        {this.messages.addingBookmark}
      </div>
    );
  }

  protected renderBookmarkItems(bookmarks: Collection<Bookmark>): VNode[] {
    if (!bookmarks) {
      return null;
    }

    return bookmarks
      .map((bookmark) =>
        this.editingEnabled && this._editBookmark && bookmark && this._editBookmark === bookmark
          ? this.renderEditingBookmark(bookmark)
          : this.renderBookmark(bookmark)
      )
      .toArray();
  }

  protected renderBookmarksContainer(bookmarks: Collection<Bookmark>): VNode {
    const addBookmark =
      this.editingEnabled && !this._addBookmark ? this.renderAddBookmarkButton() : null;

    const creatingBookmark = this.editingEnabled
      ? this._creatingBookmark
        ? this.renderAddBookmarkLoading()
        : this._addBookmark
        ? this.renderAddingBookmark()
        : null
      : null;

    return [
      <ul
        key="bookmark-list"
        aria-label={this.messages.widgetLabel}
        class={this.classes(CSS.bookmarkList, { [CSS.bookmarkListSortable]: this.editingEnabled })}
        afterCreate={this._sortNodeCreated}
        afterRemoved={this._destroySortable}
        data-node-ref="_sortableNode"
        bind={this}
      >
        {this.renderBookmarkItems(bookmarks)}
      </ul>,
      addBookmark,
      creatingBookmark
    ];
  }

  protected renderAddBookmarkButton(): VNode {
    return this.visibleElements.addBookmark ? (
      <div key="add-bookmark-item" class={CSS.addBookmark}>
        <button
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary, CSS.addBookmarkButton)}
          onclick={this.startAddBookmark}
          afterCreate={this._storeAddBookmarkButton}
          afterUpdate={this._storeAddBookmarkButton}
          data-node-ref="_addBookmarkButtonNode"
          bind={this}
        >
          <span aria-hidden="true" class={this.classes(CSS.addBookmarkIcon, CSS.iconPlus)} />
          {this.messages.addBookmark}
        </button>
      </div>
    ) : null;
  }

  protected renderBookmarks(): VNode {
    const { bookmarks } = this.viewModel;

    const validBookmarks = bookmarks && bookmarks.filter(Boolean);

    const hasBookmarks = validBookmarks && validBookmarks.length;

    const bookmarksNode =
      hasBookmarks || this.editingEnabled ? this.renderBookmarksContainer(validBookmarks) : null;
    const noBookmarksNode = !hasBookmarks ? this.renderNoBookmarksContainer() : null;

    return [noBookmarksNode, bookmarksNode];
  }

  protected renderEditContainer(bookmark: Bookmark): VNode {
    const { messagesCommon } = this;

    return (
      <div key="edit-container">
        <button
          title={messagesCommon.edit}
          aria-label={messagesCommon.edit}
          data-bookmark={bookmark}
          onclick={this._showEditBookmarkForm}
          bind={this}
          class={CSS.bookmarkEditButton}
        >
          <span aria-hidden="true" class={CSS.iconEdit} />
        </button>
      </div>
    );
  }

  protected renderDragHandle(bookmark: Bookmark): VNode {
    const { messagesCommon } = this;
    const sortProps = { [SORT_DATA_ATTR]: bookmark.uid };

    return (
      <div
        role="button"
        tabIndex={0}
        key="drag-handle"
        bind={this}
        class={CSS.bookmarkDragHandle}
        onkeydown={this._dragHandleKeydown}
        afterCreate={this._focusDragHandle}
        afterUpdate={this._focusDragHandle}
        onblur={this._dragHandleBlur}
        aria-pressed={this._selectedSortUid === bookmark.uid ? "true" : "false"}
        aria-label={messagesCommon.dragHandleLabel}
        title={messagesCommon.dragHandleTitle}
        {...sortProps}
      >
        <span aria-hidden="true" class={this.classes(CSS.bookmarkDragHandleIcon, CSS.iconHandle)} />
      </div>
    );
  }

  protected renderBookmarkImage(bookmark: Bookmark): VNode {
    const { visibleElements } = this;
    const { thumbnail } = bookmark;

    const imageSource = (thumbnail && thumbnail.url) || "";

    return visibleElements.thumbnail && imageSource ? (
      <img src={imageSource} alt="" class={CSS.bookmarkImage} />
    ) : (
      <span aria-hidden="true" class={this.classes(CSS.bookmarkIcon, CSS.widgetIcon)} />
    );
  }

  protected renderBookmarkButton(bookmark: Bookmark): VNode {
    const { messagesCommon } = this;
    const { name } = bookmark;

    const title = name || messagesCommon.untitled;

    const imageContainerNode = (
      <div class={CSS.bookmarkImageContainer}>{this.renderBookmarkImage(bookmark)}</div>
    );

    return (
      <button
        key="bookmark-button"
        class={CSS.bookmarkButton}
        bind={this}
        data-bookmark={bookmark}
        onclick={this._goToBookmark}
      >
        {imageContainerNode}
        <span class={CSS.bookmarkName}>{title}</span>
      </button>
    );
  }

  protected renderBookmark(bookmark: Bookmark): VNode {
    const { activeBookmark } = this.viewModel;

    const bookmarkClasses = {
      [CSS.bookmarkActive]: activeBookmark === bookmark
    };

    const editContainer = this.editingEnabled ? this.renderEditContainer(bookmark) : null;

    const sortProps = { [SORT_DATA_ATTR]: bookmark.uid };

    const dragHandleNode = this.editingEnabled ? this.renderDragHandle(bookmark) : null;

    return (
      <li key={bookmark} class={this.classes(CSS.bookmark, bookmarkClasses)} {...sortProps}>
        {dragHandleNode}
        {this.renderBookmarkButton(bookmark)}
        {editContainer}
      </li>
    );
  }

  protected renderEditingBookmarkName(bookmark: Bookmark): VNode {
    const { messages } = this;

    return (
      <label class={CSS.authoringLabel}>
        {messages.title}
        <input
          required
          bind={this}
          class={this.classes(CSS.esriInput, this._invalidEntry ? CSS.authoringInputInvalid : null)}
          type="text"
          value={bookmark.name}
          afterCreate={this._storeEditInput}
          afterUpdate={this._focusEditInput}
          data-bookmark={bookmark}
          data-node-ref="_editInputNode"
          placeholder={messages.addPlaceholder}
        />
      </label>
    );
  }

  protected renderEditingBookmarkActions(bookmark: Bookmark): VNode {
    const { messagesCommon } = this;

    return (
      <div class={CSS.authoringActions}>
        <input
          type="button"
          value={messagesCommon.delete}
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary, CSS.authoringDeleteButton)}
          data-bookmark={bookmark}
          onclick={this._deleteBookmark}
          bind={this}
        />
        <input
          type="button"
          value={messagesCommon.cancel}
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary)}
          onclick={this._closeEditBookmarkForm}
          bind={this}
        />
        <input class={CSS.esriButton} type="submit" value={messagesCommon.save} />
      </div>
    );
  }

  protected renderEditingBookmark(bookmark: Bookmark): VNode {
    const liProps = { [SORT_DATA_ATTR]: bookmark.uid };

    return (
      <li key="edit-bookmark-form" class={CSS.authoringCard} {...liProps}>
        <form class={CSS.authoringForm} onsubmit={this._editBookmarkSubmit} bind={this}>
          {this.renderEditingBookmarkName(bookmark)}
          {this.renderEditingBookmarkActions(bookmark)}
        </form>
      </li>
    );
  }

  protected renderAddingBookmarkName(): VNode {
    const { messages } = this;

    return (
      <label class={CSS.authoringLabel}>
        {messages.title}
        <input
          required
          bind={this}
          class={this.classes(CSS.esriInput, this._invalidEntry ? CSS.authoringInputInvalid : null)}
          type="text"
          afterCreate={this._storeAddInput}
          afterUpdate={this._focusAddInput}
          data-node-ref="_addInputNode"
          value=""
          placeholder={messages.addPlaceholder}
        />
      </label>
    );
  }

  protected renderAddingBookmarkActions(): VNode {
    const { messagesCommon } = this;

    return (
      <div class={this.classes(CSS.authoringActions)}>
        <input
          type="button"
          value={messagesCommon.cancel}
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary, CSS.authoringCancelButton)}
          onclick={this._endAddBookmark.bind(this)}
          bind={this}
        />
        <input class={CSS.esriButton} type="submit" value={messagesCommon.add} />
      </div>
    );
  }

  protected renderAddingBookmark(): VNode {
    return (
      <div key="add-bookmark-form" class={CSS.authoringCard}>
        <form class={CSS.authoringForm} onsubmit={this._addBookmarkSubmit} bind={this}>
          {this.renderAddingBookmarkName()}
          {this.renderAddingBookmarkActions()}
        </form>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _dragHandleBlur(): void {
    this._selectedSortUid = null;
    this.scheduleRender();
  }

  private _dragHandleKeydown(event: KeyboardEvent): void {
    event.stopPropagation();

    const { _sortableSavedItems } = this;

    const SELECTION_KEYS = ["ArrowDown", "ArrowUp", "Escape", "Tab", " ", "Enter"];

    const key = eventKey(event);

    if (SELECTION_KEYS.indexOf(key) === -1) {
      return;
    }

    const { _sortable, _selectedSortUid } = this;

    const items = _sortable.toArray();
    const node = event.target as HTMLElement;
    const uid = node.getAttribute(SORT_DATA_ATTR) as string;
    const index = items.indexOf(uid);

    if (key === " " || key === "Enter") {
      const pressed = _selectedSortUid && _selectedSortUid === uid;

      this._selectedSortUid = pressed ? null : uid;
      this._sortableSavedItems = pressed ? null : this._sortable.toArray();
      this.scheduleRender();
      return;
    }

    if (key === "Tab") {
      this._selectedSortUid = null;
      this.scheduleRender();
      return;
    }

    if (key === "Escape" && _sortableSavedItems) {
      this._selectedSortUid = null;
      this._updateSortItems(_sortableSavedItems, _sortable, uid);
      this.scheduleRender();
      return;
    }

    if (index === -1 || !_selectedSortUid) {
      return;
    }

    const newIndex = key === "ArrowUp" ? index - 1 : index + 1;

    if (newIndex >= items.length || newIndex <= -1) {
      return;
    }

    moveItem(items, index, newIndex);
    this._updateSortItems(items, _sortable, uid);
  }

  private _updateSortItems(items: string[], sortable: Sortable, uid: string): void {
    sortable.sort(items);
    this._sortBookmarks(sortable);
    this._focusSortUid = uid;
    this._selectedSortUid = uid;
  }

  private _focusDragHandle(element: HTMLElement): void {
    const { _focusSortUid } = this;

    if (!element || !_focusSortUid) {
      return;
    }

    const uid = element.getAttribute(SORT_DATA_ATTR) as string;

    if (uid === _focusSortUid) {
      element.focus();
      this._focusSortUid = null;
    }
  }

  private _toggleSorting(): void {
    const { _sortable, _sortableNode, editingEnabled } = this;

    if (!_sortableNode) {
      return;
    }

    if (_sortable) {
      _sortable.option("disabled", !editingEnabled);
    } else {
      const itemSort = Sortable.create(_sortableNode, {
        dataIdAttr: SORT_DATA_ATTR,
        handle: `.${CSS.bookmarkDragHandle}`,
        group: SORT_GROUP_NAME,
        disabled: !editingEnabled,
        onSort: () => this._sortBookmarks(itemSort)
      });

      this._sortable = itemSort;
    }
  }

  private _sortNodeCreated(el: HTMLUListElement): void {
    this._sortableNode = el;
    this._toggleSorting();
  }

  private _sortBookmarks(sortable: Sortable): void {
    const { bookmarks } = this.viewModel;

    if (!bookmarks) {
      return;
    }

    const items = sortable.toArray();

    bookmarks.sort((a: Bookmark, b: Bookmark) => {
      const aIndex = items.indexOf(a.uid);
      const bIndex = items.indexOf(b.uid);

      if (aIndex > bIndex) {
        return 1;
      }

      if (aIndex < bIndex) {
        return -1;
      }

      return 0;
    });
  }

  private _destroySortable(): void {
    const { _sortable } = this;
    _sortable && _sortable.destroy();
    this._sortable = null;
  }

  private _endAddBookmark(): void {
    this._focusAddBookmarkButton = true;
    this.endAddBookmark();
  }

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

  private _showEditBookmarkForm(event: Event): void {
    const node = event.currentTarget as Element;
    const bookmark = node["data-bookmark"] as Bookmark;

    this._addBookmark = false;
    this._focusEditInputBox = true;
    this._editBookmark = bookmark;
    this.scheduleRender();
  }

  private _closeEditBookmarkForm(): void {
    this._invalidEntry = false;
    this._editBookmark = null;
    this.scheduleRender();
  }

  private _addBookmarkSubmit(event: Event): void {
    event.preventDefault();

    const { _addInputNode, bookmarkCreationOptions } = this;

    const name = _addInputNode && _addInputNode.value.trim();

    if (!name) {
      this._invalidEntry = true;
      this.scheduleRender();
      return;
    }

    this._creatingBookmark = true;
    this.scheduleRender();

    this.viewModel.createBookmark(bookmarkCreationOptions).then((bookmark) => {
      bookmark.name = name;

      this.viewModel.bookmarks.add(bookmark);

      this._endAddBookmark();
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

    this._closeEditBookmarkForm();
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
    if (this._addInputNode && this._focusAddInputBox) {
      this._focusAddInputBox = false;
      this._addInputNode.focus();
    }
  }

  private _focusAddBookmark(): void {
    if (this._addBookmarkButtonNode && this._focusAddBookmarkButton) {
      this._focusAddBookmarkButton = false;
      this._addBookmarkButtonNode.focus();
    }
  }

  private _focusEditInput(): void {
    if (this._editInputNode && this._focusEditInputBox) {
      this._focusEditInputBox = false;
      this._editInputNode.focus();
    }
  }

  private _deleteBookmark(event: Event): void {
    const node = event.currentTarget as Element;
    const bookmark = node["data-bookmark"] as Bookmark;

    this.viewModel.bookmarks.remove(bookmark);
  }

  private _goToBookmark(event: Event): void {
    const node = event.currentTarget as Element;
    const bookmark = node["data-bookmark"] as Bookmark;

    this.endAddBookmark();
    this._closeEditBookmarkForm();

    this.viewModel.goTo(bookmark);
  }
}

export = Bookmarks;
