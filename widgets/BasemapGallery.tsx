/**
 * The BasemapGallery widget displays a collection images representing basemaps from ArcGIS.com or a user-defined set
 * of map or image services. When a new basemap is selected from the BasemapGallery, the map's basemap
 * layers are removed and replaced with the basemap layers of the associated basemap selected in the gallery. By default,
 * the BasemapGallery widget looks like the following image.
 *
 * ![basemap-gallery](../../assets/img/apiref/widgets/basemap-gallery.png)
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * All basemaps added to the gallery need to have the same spatial reference.
 * :::
 *
 * @module esri/widgets/BasemapGallery
 * @since 4.3
 *
 * @see [BasemapGallery.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/BasemapGallery.tsx)
 * @see [BasemapGallery.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_BasemapGallery.scss)
 * @see [Sample - BasemapGallery widget](../sample-code/widgets-basemapgallery/index.html)
 * @see module:esri/widgets/BasemapGallery/BasemapGalleryViewModel
 *
 * @example
 * var basemapGallery = new BasemapGallery({
 *   view: view
 * });
 * // Add widget to the top right corner of the view
 * view.ui.add(basemapGallery, {
 *   position: "top-right"
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/BasemapGallery/nls/BasemapGallery";

// esri
import Basemap = require("esri/Basemap");

// esri.core
import Collection = require("esri/core/Collection");
import Handles = require("esri/core/Handles");
import { CollectionChangeEvent } from "esri/core/interfaces";
import { on, whenOnce } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.BasemapGallery
import BasemapGalleryViewModel = require("esri/widgets/BasemapGallery/BasemapGalleryViewModel");
import { BasemapsSource } from "esri/widgets/BasemapGallery/interfaces";

// esri.widgets.BasemapGallery.support
import BasemapGalleryItem = require("esri/widgets/BasemapGallery/support/BasemapGalleryItem");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx } from "esri/widgets/support/widget";

const DEFAULT_BASEMAP_IMAGE = require.toUrl("../themes/base/images/basemap-toggle-64.svg");

const CSS = {
  base: "esri-basemap-gallery esri-widget esri-widget--panel-height-only",
  sourceLoading: "esri-basemap-gallery--source-loading",
  loader: "esri-basemap-gallery__loader",
  item: "esri-basemap-gallery__item",
  itemContainer: "esri-basemap-gallery__item-container",
  itemTitle: "esri-basemap-gallery__item-title",
  itemThumbnail: "esri-basemap-gallery__item-thumbnail",
  selectedItem: "esri-basemap-gallery__item--selected",
  itemLoading: "esri-basemap-gallery__item--loading",
  itemError: "esri-basemap-gallery__item--error",
  emptyMessage: "esri-widget__content--empty",
  widgetIcon: "esri-icon-basemap",

  // common
  disabled: "esri-disabled",
  header: "esri-widget__heading"
};

@subclass("esri.widgets.BasemapGallery")
class BasemapGallery extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/BasemapGallery
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var basemapGallery = new BasemapGallery({
   *   view: view
   * });
   */
  constructor(params?: any) {
    super();
  }

  postInitialize(): void {
    const handles = this._handles;

    this.own([
      on<CollectionChangeEvent<BasemapGalleryItem>>(this, "viewModel.items", "change", (event) => {
        const key = "basemap-gallery-item-changes";
        const { added, moved } = event;

        handles.remove(key);

        handles.add(
          [...added, ...moved].map((item) => item.watch("state", () => this.scheduleRender())),
          key
        );

        this.scheduleRender();
      }),

      handles,

      whenOnce(this, "source", () => this.viewModel.load())
    ]);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles = new Handles();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeBasemap
  //----------------------------------

  /**
   * The map's {@link module:esri/Map#basemap basemap}.
   *
   * @type {module:esri/Basemap}
   * @name activeBasemap
   * @instance
   */
  @aliasOf("viewModel.activeBasemap")
  @renderable()
  activeBasemap: Basemap = null;

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
  @property()
  label: string = i18n.widgetLabel;

  //----------------------------------
  //  source
  //----------------------------------

  /**
   * The source for basemaps that the widget will display.
   * This property can be autocast with an array or {@link module:esri/core/Collection} of {@link module:esri/Basemap}s,
   * a {@link module:esri/portal/Portal} instance, or a URL to a portal instance.
   * The default source is a {@link module:esri/widgets/BasemapGallery/support/PortalBasemapsSource} that points to
   * the default portal instance set in {@link module:esri/config#portalUrl esriConfig.portalUrl}.
   *
   * @type {module:esri/widgets/BasemapGallery/support/LocalBasemapsSource | module:esri/widgets/BasemapGallery/support/PortalBasemapsSource}
   * @name source
   * @instance
   * @autocast
   *
   * @todo doc custom BasemapSource (interface) also supported
   */
  @aliasOf("viewModel.source")
  @renderable("source.state")
  source: BasemapsSource = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * The view from which the widget will operate. This view
   * provides access to the active
   * {@link module:esri/Map#basemap basemap}
   * via the view's {@link module:esri/views/View#map map} property.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/BasemapGallery/BasemapGalleryViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/BasemapGallery/BasemapGalleryViewModel}
   * @autocast
   */
  @property()
  @renderable(["viewModel.state"])
  viewModel = new BasemapGalleryViewModel();

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render(): VNode {
    const sourceLoading = this.get("source.state") === "loading";
    const isDisabled = this.get("viewModel.state") === "disabled";
    const items = this.get<Collection<BasemapGalleryItem>>("viewModel.items")
      .toArray()
      .map(this._renderBasemapGalleryItem, this);

    const rootClasses = {
      [CSS.sourceLoading]: sourceLoading,
      [CSS.disabled]: isDisabled
    };

    const loader = sourceLoading ? (
      <div class={CSS.loader} key="esri-basemap-gallery__loader" />
    ) : null;

    const content = sourceLoading ? null : items.length > 0 ? (
      <ul class={CSS.itemContainer} key="esri-basemap-gallery__item-container" role="menu">
        {items}
      </ul>
    ) : (
      <div class={CSS.emptyMessage} key="esri-basemap-gallery__empty-message">
        <h2 class={CSS.header}>{i18n.noBasemaps}</h2>
      </div>
    );

    return (
      <div class={this.classes(CSS.base, rootClasses)}>
        {loader}
        {content}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  @accessibleHandler()
  private _handleClick(event: Event): void {
    const item = event.currentTarget["data-item"] as BasemapGalleryItem;

    if (item.state === "ready") {
      this.activeBasemap = item.basemap;
    }
  }

  private _renderBasemapGalleryItem(item: BasemapGalleryItem): VNode {
    const thumbnailUrl = item.get<string>("basemap.thumbnailUrl");
    const thumbnailSource = thumbnailUrl || DEFAULT_BASEMAP_IMAGE;
    const title = item.get<string>("basemap.title");
    const snippet = item.get<string>("basemap.portalItem.snippet");
    const tooltip = item.get<string>("error.message") || snippet || title;
    const tabIndex = item.state === "ready" ? 0 : -1;
    const isSelected = this.viewModel.basemapEquals(item.basemap, this.activeBasemap);

    const itemClasses = {
      [CSS.selectedItem]: isSelected,
      [CSS.itemLoading]: item.state === "loading",
      [CSS.itemError]: item.state === "error"
    };

    return (
      <li
        aria-selected={isSelected}
        bind={this}
        class={this.classes(CSS.item, itemClasses)}
        data-item={item}
        onkeydown={this._handleClick}
        onclick={this._handleClick}
        role="menuitem"
        tabIndex={tabIndex}
        title={tooltip}
      >
        <img alt="" class={CSS.itemThumbnail} src={thumbnailSource} />
        <div class={CSS.itemTitle}>{title}</div>
      </li>
    );
  }
}

export = BasemapGallery;
