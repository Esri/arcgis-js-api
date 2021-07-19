/**
 * The BasemapGallery widget displays a collection images representing basemaps from ArcGIS.com or a user-defined set
 * of map or image services. When a new basemap is selected from the BasemapGallery, the map's basemap
 * layers are removed and replaced with the basemap layers of the associated basemap selected in the gallery. By default,
 * the BasemapGallery widget looks like the following image.
 *
 * ![basemap-gallery](../assets/img/apiref/widgets/basemap-gallery.png)
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
 * let basemapGallery = new BasemapGallery({
 *   view: view
 * });
 * // Add widget to the top right corner of the view
 * view.ui.add(basemapGallery, {
 *   position: "top-right"
 * });
 */

// esri
import { getAssetUrl } from "esri/assets";
import Basemap from "esri/Basemap";

// esri.core
import Collection from "esri/core/Collection";
import Handles from "esri/core/Handles";
import { CollectionChangeEvent } from "esri/core/interfaces";
import { on, whenOnce } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.BasemapGallery
import BasemapGalleryViewModel from "esri/widgets/BasemapGallery/BasemapGalleryViewModel";
import { BasemapsSource } from "esri/widgets/BasemapGallery/interfaces";

// esri.widgets.BasemapGallery.support
import BasemapGalleryItem from "esri/widgets/BasemapGallery/support/BasemapGalleryItem";

// esri.widgets.BasemapGallery.t9n
import BasemapGalleryMessages from "esri/widgets/BasemapGallery/t9n/BasemapGallery";

// esri.widgets.support
import { Heading, HeadingLevel } from "esri/widgets/support/Heading";
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx } from "esri/widgets/support/widget";

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
  disabled: "esri-disabled"
};

type BasemapGalleryProperties = Partial<
  Pick<
    BasemapGallery,
    | "activeBasemap"
    | "container"
    | "disabled"
    | "headingLevel"
    | "iconClass"
    | "label"
    | "source"
    | "view"
    | "viewModel"
  >
>;

@subclass("esri.widgets.BasemapGallery")
class BasemapGallery extends Widget {
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
   * let basemapGallery = new BasemapGallery({
   *   view: view
   * });
   */
  constructor(properties?: BasemapGalleryProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
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
  activeBasemap: Basemap = null;

  //----------------------------------
  //  disabled
  //----------------------------------

  /**
   * When `true`, sets the widget to a disabled state so the user cannot interact with it.
   *
   * @name disabled
   * @instance
   * @type {Boolean}
   * @default false
   * @since 4.15
   */
  @property()
  disabled: boolean = false;

  //----------------------------------
  //  headingLevel
  //----------------------------------

  /**
   * Indicates the heading level to use for the message "No basemaps available" when no basemaps
   * are available in the BasemapGallery. By default, this message is rendered
   * as level 2 headings (e.g. `<h2>No basemaps available</h2>`). Depending on the widget's placement
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
   * // "No basemaps available" will render as an <h3>
   * basemapGallery.headingLevel = 3;
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
  @messageBundle("esri/widgets/BasemapGallery/t9n/BasemapGallery")
  messages: BasemapGalleryMessages = null;

  //----------------------------------
  //  source
  //----------------------------------

  /**
   * The source for basemaps that the widget will display.
   * This property can be autocast with an array or {@link module:esri/core/Collection} of {@link module:esri/Basemap}s, or
   * a {@link module:esri/portal/Portal} instance.
   * The default source is a {@link module:esri/widgets/BasemapGallery/support/PortalBasemapsSource} that points to
   * the default portal instance set in {@link module:esri/config#portalUrl esriConfig.portalUrl}.
   *
   * @type {module:esri/widgets/BasemapGallery/support/LocalBasemapsSource | module:esri/widgets/BasemapGallery/support/PortalBasemapsSource}
   * @name source
   * @instance
   * @autocast {"value": "module:esri/core/Collection<module:esri/Basemap> | module:esri/Basemap[] | module:esri/portal/Portal | Object"}
   *
   * @example
   * const basemapGallery = new BasemapGallery({
   *    view: view,
   *    source: [Basemap.fromId("topo-vector"), Basemap.fromId("hybrid")] // autocasts to LocalBasemapsSource
   * });
   *
   * @example
   * const basemapGallery = new BasemapGallery({
   *    view: view,
   *    source: { // autocasts to PortalBasemapsSource
   *      portal: "https://www.yourportal.arcgis.com"
   *    }
   * });
   *
   * @example
   * const basemapGallery = new BasemapGallery({
   *    view: view,
   *    source: new Portal({url: "https://www.yourportal.arcgis.com"}) // autocasts to PortalBasemapsSource
   * });
   *
   * @todo doc custom BasemapSource (interface) also supported
   */
  @aliasOf("viewModel.source")
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
  view: IMapView | ISceneView = null;

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
  viewModel = new BasemapGalleryViewModel();

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render(): VNode {
    const sourceLoading = this.get("source.state") === "loading";
    const isDisabled = this.disabled || this.get("viewModel.state") === "disabled";
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
        <Heading level={this.headingLevel}>{this.messages.noBasemaps}</Heading>
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
    const thumbnailSource =
      thumbnailUrl || getAssetUrl("esri/themes/base/images/basemap-toggle-64.svg");
    const title = item.get<string>("basemap.title");
    const snippet = item.get<string>("basemap.portalItem.snippet");
    const tooltip = item.get<string>("error.message") || snippet || title;
    const { viewModel } = this;
    const selectable = !this.disabled && viewModel.state === "ready" && item.state === "ready";
    const tabIndex = selectable ? 0 : -1;
    const isSelected = viewModel.basemapEquals(item.basemap, this.activeBasemap);

    const itemClasses = {
      [CSS.selectedItem]: isSelected,
      [CSS.itemLoading]: item.state === "loading",
      [CSS.itemError]: item.state === "error"
    };

    return (
      <li
        aria-selected={isSelected.toString()}
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

export default BasemapGallery;
