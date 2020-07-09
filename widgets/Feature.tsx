/**
 * The Feature widget displays a graphic according to its [PopupTemplate](esri-PopupTemplate.html).
 * This widget is useful in instances where you want to display information about a feature but without
 * the use of a [Popup](esri-widgets-Popup.html).
 *
 * @module esri/widgets/Feature
 * @since 4.7
 *
 * @see [Feature.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Feature.tsx)
 * @see [Feature.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Feature.scss)
 * @see [Sample - Feature widget](../sample-code/widgets-feature/index.html)
 * @see [Sample - Feature widget in a side panel](../sample-code/widgets-feature-sidepanel/index.html)
 * @see [Sample - Feature widget - Query graphics from multiple layerViews](../sample-code/widgets-feature-multiplelayers/index.html)
 * @see module:esri/widgets/Feature/FeatureViewModel
 * @see module:esri/widgets/Popup
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/PopupTemplate
 * @see [Arcade Profiles: Popup](https://developers.arcgis.com/arcade/guide/profiles/#popup)
 * @see [Arcade - expression language](https://developers.arcgis.com/javascript/latest/guide/arcade/index.html)
 *
 * @example
 * // Create graphic
 *
 * var graphic = new Graphic({
 *   geometry: view.center,
 *   popupTemplate: {
 *     content: [{
 *       // add popupTemplate content
 *     }]
 *   }
 * });
 *
 * var feature = new Feature({
 *   graphic: graphic,
 *   map: map,
 *   spatialReference: spatialReference
 * });
 *
 * view.ui.add(feature, "top-right");
 *
 */

// esri
import { SpatialReference } from "esri/geometry";
import Graphic = require("esri/Graphic");
import { substitute } from "esri/intl";
import EsriMap = require("esri/Map");

// esri.core
import { eventKey } from "esri/core/events";
import { throttle } from "esri/core/throttle";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.popup
import { Content as ContentElement } from "esri/popup/content";

// esri.popup.content
import Customcontent = require("esri/popup/content/CustomContent");
import ImageMediaInfo = require("esri/popup/content/ImageMediaInfo");
import MediaContent = require("esri/popup/content/MediaContent");
import TextContent = require("esri/popup/content/TextContent");

// esri.popup.content.support
import ChartMediaInfoValue = require("esri/popup/content/support/ChartMediaInfoValue");
import ChartMediaInfoValueSeries = require("esri/popup/content/support/ChartMediaInfoValueSeries");
import { MediaChartInfo, MediaInfo } from "esri/popup/content/support/mediaInfoTypes";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Attachments = require("esri/widgets/Attachments");
import Widget = require("esri/widgets/Widget");

// esri.widgets.Feature
import FeatureContent = require("esri/widgets/Feature/FeatureContent");
import FeatureFields = require("esri/widgets/Feature/FeatureFields");
import FeatureViewModel = require("esri/widgets/Feature/FeatureViewModel");

// esri.widgets.Feature.support
import { FeatureContentMixin } from "esri/widgets/Feature/support/FeatureContentMixin";
import { shouldOpenInNewTab } from "esri/widgets/Feature/support/featureUtils";

// esri.widgets.Feature.t9n
import type FeatureMessages from "esri/widgets/Feature/t9n/Feature";

// esri.widgets.support
import { AM4Charts, PieChart, XYChart, AM4Tooltip, AM4Core } from "esri/widgets/support/chartTypes";
import { loadChartsModule } from "esri/widgets/support/chartUtils";
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx, messageBundle } from "esri/widgets/support/widget";
import { isRTL } from "esri/widgets/support/widgetUtils";

// esri.widgets.support.t9n
import UriUtilsMessages from "esri/widgets/support/t9n/uriUtils";

type ChartOptions = {
  chartDiv: HTMLDivElement;
  contentElementIndex: number;
  type: MediaInfoChartType;
  value: ChartMediaInfoValue;
  mediaInfo: MediaInfo;
  chartsModule: AM4Charts;
};

interface VisibleContentElements {
  attachments?: boolean;
  fields?: boolean;
  media?: boolean;
  text?: boolean;
}

interface VisibleElements {
  title?: boolean;
  content?: boolean | VisibleContentElements;
  lastEditedInfo?: boolean;
}

type MediaInfoChartType = "pie-chart" | "line-chart" | "column-chart" | "bar-chart";
type MediaPageDirection = "previous" | "next";

interface MediaInfoMap {
  timestamp: number;
  sourceURL: string;
}

const RENDER_CHART_THROTTLE_INTERVAL_IN_MS = 100;

const CSS = {
  // common
  iconText: "esri-icon-font-fallback-text",
  iconLoading: "esri-icon-loading-indicator esri-rotating",
  iconLeftTriangleArrow: "esri-icon-left-triangle-arrow",
  iconRightTriangleArrow: "esri-icon-right-triangle-arrow",
  esriTable: "esri-widget__table",
  esriWidget: "esri-widget",
  // popup renderer
  base: "esri-feature",
  // containers and content
  container: "esri-feature__size-container",
  title: "esri-feature__title",
  main: "esri-feature__main-container",
  btn: "esri-feature__button",
  icon: "esri-feature__icon",
  content: "esri-feature__content",
  contentElement: "esri-feature__content-element",
  text: "esri-feature__text",
  lastEditedInfo: "esri-feature__last-edited-info",
  // global modifiers
  showMediaPagination: "esri-feature--media-pagination-visible",
  // attachment element
  attachments: "esri-feature__attachments",
  // fields element
  fields: "esri-feature__fields",
  fieldHeader: "esri-feature__field-header",
  fieldData: "esri-feature__field-data",
  fieldDataDate: "esri-feature__field-data--date",
  // media element
  media: "esri-feature__media",
  mediaContainer: "esri-feature__media-container",
  mediaItemContainer: "esri-feature__media-item-container",
  mediaItem: "esri-feature__media-item",
  mediaItemTitle: "esri-feature__media-item-title",
  mediaItemCaption: "esri-feature__media-item-caption",
  mediaPrevious: "esri-feature__media-previous",
  mediaPreviousIconLTR: "esri-feature__media-previous-icon",
  mediaPreviousIconRTL: "esri-feature__media-previous-icon--rtl",
  mediaNext: "esri-feature__media-next",
  mediaNextIconLTR: "esri-feature__media-next-icon",
  mediaNextIconRTL: "esri-feature__media-next-icon--rtl",
  mediaChart: "esri-feature__media-chart",
  // loading
  loadingSpinnerContainer: "esri-feature__loading-container",
  spinner: "esri-feature__loading-spinner"
};

const DEFAULT_VISIBLE_ELEMENTS = {
  title: true,
  content: true,
  lastEditedInfo: true
};

type ContentWidget = Attachments | FeatureContent | FeatureFields;

@subclass("esri.widgets.Feature")
class Feature extends FeatureContentMixin(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Feature
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this.own(
      watchUtils.init(this, "viewModel.content", () => {
        this._setupMediaRefreshTimers();
        this._setupContentWidgets();
      }),
      watchUtils.init(this, "viewModel.graphic", () => this._disposeCharts())
    );
  }

  destroy(): void {
    this._clearMediaRefreshTimers();
    this._activeMediaMap.clear();
    this._activeMediaMap = null;
    this._destroyContentWidgets();
    this._disposeCharts();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _chartUIds: Map<string, XYChart | PieChart> = new Map();

  private _contentElementCharts: Map<number, XYChart | PieChart> = new Map();

  private _activeMediaMap: Map<number, number> = new Map();

  private _refreshTimers: Map<number, number> = new Map();

  private _mediaInfo: Map<number, MediaInfoMap> = new Map();

  private _renderChartThrottled = throttle(
    (options: ChartOptions) => this._renderChart(options),
    RENDER_CHART_THROTTLE_INTERVAL_IN_MS
  );

  private _contentWidgets: ContentWidget[] = [];

  //--------------------------------------------------------------------------
  //
  // VisibleContentElements typedef
  //
  //--------------------------------------------------------------------------

  /**
   * @typedef module:esri/widgets/Feature~VisibleContentElements
   *
   * @property {boolean} [attachments] - Indicates whether to display any {@link module:esri/popup/content/AttachmentsContent} elements. Default is `true`.
   * @property {boolean} [fields] - Indicates whether to display any {@link module:esri/popup/content/FieldsContent} elements. Default is `true`.
   * @property {boolean} [media] - Indicates whether to display any {@link module:esri/popup/content/MediaContent} elements. Default is `true`.
   * @property {boolean} [text] - Indicates whether to display any {@link module:esri/popup/content/TextContent} elements. Default is `true`.
   */

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  graphic
  //----------------------------------

  /**
   * The {@link module:esri/Graphic Graphic} used to represent the feature.
   *
   * @name graphic
   * @instance
   * @type {module:esri/Graphic}
   * @default null
   * @see [PopupTemplate.content](esri-PopupTemplate.html#content)
   *
   * @example
   * var graphic = new Graphic({
   *   geometry: view.center,
   *   attributes: {
   *     "name": "Spruce",
   *     "family": "Pinaceae",
   *     "count": 126
   *   },
   *   symbol: new SimpleMarkerSymbol({
   *     style: "square",
   *     color: "blue",
   *     size: "8px"
   *   }),
   *   popupTemplate: {
   *     content: [
   *       {
   *         // Set popup template content
   *       }
   *     ]
   *   }
   * });
   *
   */

  @aliasOf("viewModel.graphic")
  graphic: Graphic = null;

  //----------------------------------
  //  defaultPopupTemplateEnabled
  //---------------------------------

  /**
   * Enables automatic creation of a popup template for layers that have popups enabled but no
   * popupTemplate defined. Automatic popup templates are supported for layers that
   * support the `createPopupTemplate` method. (Supported for
   * {@link module:esri/layers/FeatureLayer},
   * {@link module:esri/layers/GeoJSONLayer},
   * {@link module:esri/layers/SceneLayer},
   * {@link module:esri/layers/CSVLayer},
   * {@link module:esri/layers/OGCFeatureLayer}
   * {@link module:esri/layers/PointCloudLayer},
   * {@link module:esri/layers/StreamLayer}, and
   * {@link module:esri/layers/ImageryLayer}).
   *
   * @name defaultPopupTemplateEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @since 4.11
   */

  @aliasOf("viewModel.defaultPopupTemplateEnabled")
  defaultPopupTemplateEnabled: boolean = false;

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
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/widgets/Feature/t9n/Feature")
  messages: FeatureMessages = null;

  //----------------------------------
  //  messagesURIUtils
  //----------------------------------

  /**
   * @name messagesURIUtils
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/widgets/support/t9n/uriUtils")
  messagesURIUtils: UriUtilsMessages = null;

  //----------------------------------
  //  spatialReference
  //----------------------------------

  /**
   * The spatial reference used for [Arcade](https://developers.arcgis.com/arcade) operations.
   *
   * @name spatialReference
   * @instance
   * @since 4.11
   * @type {module:esri/geometry/SpatialReference}
   * @default null
   * @see [Type system](https://developers.arcgis.com/arcade/guide/types/#featuresetcollection)
   * @see [Arcade Profiles: Popop](https://developers.arcgis.com/arcade/guide/profiles/#popup)
   *
   */
  @aliasOf("viewModel.spatialReference")
  spatialReference: SpatialReference = null;

  //----------------------------------
  //  title
  //----------------------------------

  /**
   * The title for the feature. You can disable this via the [visibleElements](#visibleElements) property.
   *
   * @name title
   * @instance
   * @type {string}
   * @readonly
   * @default null
   *
   */
  @aliasOf("viewModel.title")
  title: string = null;

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * @typedef module:esri/widgets/Feature~VisibleElements
   *
   * @property {boolean} [title] - Indicates whether the title associated with the feature displays.
   * Default value is `true`.
   * @property {boolean | module:esri/widgets/Feature~VisibleContentElements} [content] - Indicates
   * whether content for the Feature displays, can also indicate the specific types of content elements
   * by setting it via {@link module:esri/widgets/Feature~VisibleContentElements}. The default value
   * is `true`, everything displays.
   * @property {boolean} [lastEditInfo] - Indicates whether [lastEditInfo](esri-widgets-Feature-FeatureViewModel.html#lastEditInfo) is displayed
   * within the feature. Default value is `true`.
   */

  /**
   * The visible elements that are displayed within the widget's [graphic.popupTemplate.content](esri-PopupTemplate.html#content).
   * This property provides the ability to turn individual elements of the widget's display on/off.
   * See the {@link module:esri/PopupTemplate#content PopupTemplate.content} documentation
   * for additional information on how these elements work.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Feature~VisibleElements}
   * @since 4.11
   *
   * @autocast
   * @see [PopupTemplate.content](esri-PopupTemplate.html#content)
   */
  @property()
  @renderable()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //----------------------------------
  //  map
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/View view's} {@link module:esri/Map}. Use this property
   * when needing to get access to the underlying layers within the map. This can then be used
   * within [Arcade](https://developers.arcgis.com/arcade) expressions.
   *
   * @name map
   * @instance
   * @type {module:esri/Map}
   * @default null
   * @since 4.11
   * @see [Type system](https://developers.arcgis.com/arcade/guide/types/#featuresetcollection)
   * @see [Arcade Profiles: Popop](https://developers.arcgis.com/arcade/guide/profiles/#popup)
   *
   * @example
   * // The building footprints represent the buildings that intersect a clicked parcel
   * let buildingFootprints = Intersects($feature, FeatureSetByName($map, "Building Footprints"));
   */
  @aliasOf("viewModel.map")
  map: EsriMap = null;

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
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Feature/FeatureViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Feature/FeatureViewModel}
   * @autocast
   */

  @property({
    type: FeatureViewModel
  })
  @renderable([
    "viewModel.waitingForContent",
    "viewModel.content",
    "viewModel.lastEditInfo",
    "viewModel.contentVMs"
  ])
  viewModel = new FeatureViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { waitingForContent } = this.viewModel;

    return (
      <div class={this.classes(CSS.base, CSS.esriWidget)}>
        <div class={CSS.container}>
          {this.renderTitle()}
          {waitingForContent ? this.renderLoading() : this.renderContentContainer()}
        </div>
      </div>
    );
  }

  /**
   * Paginates to a specified [media](esri-popup-content-MediaContent.html) info object. For example,
   * you may have [media](esri-popup-content-MediaContent.html) content which contains
   * multiple `mediaInfos`. This method allows you to specify the index of the `mediaInfos`
   * you wish to display.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-popup-content-MediaContent.html) content element to be updated.
   * @param {number} mediaInfoIndex - The index position of the [media](esri-popup-content-MediaContent.html) info object you wish to display.
   *
   */
  goToMedia(contentElementIndex: number, mediaInfoIndex: number): void {
    this._setContentElementMedia(contentElementIndex, mediaInfoIndex);
  }

  /**
   * Paginates to the next [media](esri-popup-content-MediaContent.html) info.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-popup-content-MediaContent.html) content element.
   *
   */
  nextMedia(contentElementIndex: number): void {
    this._pageContentElementMedia(contentElementIndex, "next");
  }

  /**
   * Paginates to the previous [media](esri-popup-content-MediaContent.html) info in the specified
   * [media](esri-popup-content-MediaContent.html) content element.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-popup-content-MediaContent.html) content element.
   */
  previousMedia(contentElementIndex: number): void {
    this._pageContentElementMedia(contentElementIndex, "previous");
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderLoading(): VNode {
    return (
      <div key={"loading-container"} class={CSS.loadingSpinnerContainer}>
        <span class={this.classes(CSS.iconLoading, CSS.spinner)} />
      </div>
    );
  }

  protected renderContentContainer(): VNode {
    const { visibleElements } = this;

    return !!visibleElements.content ? (
      <div class={CSS.main}>{[this.renderContent(), this.renderLastEditInfo()]}</div>
    ) : null;
  }

  protected renderTitle(): VNode {
    const { visibleElements, title } = this;

    return visibleElements.title ? <h4 class={CSS.title} innerHTML={title} /> : null;
  }

  protected renderContent(): VNode {
    const content = this.viewModel.content;
    const contentKey = "content";

    if (!content) {
      return null;
    }

    if (Array.isArray(content)) {
      return content.length ? (
        <div key={`${contentKey}-content-elements`}>
          {content.map(this.renderContentElement, this)}
        </div>
      ) : null;
    }

    if (typeof content === "string") {
      const contentWidget = this._contentWidgets[0];

      if (!contentWidget || contentWidget.destroyed) {
        return null;
      }

      return <div key={`${contentKey}-content`}>{contentWidget.render()}</div>;
    }

    return this.renderNodeContent(content);
  }

  protected renderContentElement(
    contentElement: ContentElement,
    contentElementIndex: number
  ): VNode {
    const { visibleElements } = this;

    if (
      typeof visibleElements.content !== "boolean" &&
      !visibleElements.content[contentElement.type]
    ) {
      return null;
    }

    switch (contentElement.type) {
      case "attachments":
        return this.renderAttachments(contentElementIndex);
      case "custom":
        return this.renderCustom(contentElement, contentElementIndex);
      case "fields":
        return this.renderFields(contentElementIndex);
      case "media":
        return this.renderMedia(contentElement, contentElementIndex);
      case "text":
        return this.renderText(contentElement, contentElementIndex);
      default:
        return null;
    }
  }

  protected renderAttachments(contentElementIndex: number): VNode {
    const attachmentsWidget = this._contentWidgets[contentElementIndex] as Attachments;

    if (!attachmentsWidget || attachmentsWidget.destroyed) {
      return null;
    }

    const { state, attachmentInfos } = attachmentsWidget.viewModel;
    const displaySection = state === "loading" || attachmentInfos.length > 0;

    return displaySection ? (
      <div
        key={this._buildKey("attachments-element", contentElementIndex)}
        class={this.classes(CSS.attachments, CSS.contentElement)}
      >
        <h2>{this.messages.attach}</h2>
        {attachmentsWidget.render()}
      </div>
    ) : null;
  }

  protected renderCustom(contentElement: Customcontent, contentElementIndex: number): VNode {
    const { creator } = contentElement;
    const contentWidget = this._contentWidgets[contentElementIndex] as FeatureContent;

    if (!contentWidget || contentWidget.destroyed) {
      return null;
    }

    return creator ? (
      <div key={this._buildKey("custom-element", contentElementIndex)} class={CSS.contentElement}>
        {contentWidget.render()}
      </div>
    ) : null;
  }

  protected renderFields(contentElementIndex: number): VNode {
    const contentWidget = this._contentWidgets[contentElementIndex] as FeatureFields;

    if (!contentWidget || contentWidget.destroyed) {
      return null;
    }

    return (
      <div key={this._buildKey("fields-element", contentElementIndex)} class={CSS.contentElement}>
        {contentWidget.render()}
      </div>
    );
  }

  protected renderMediaInfoType(options: {
    total: number;
    mediaInfo: MediaInfo;
    contentElementIndex: number;
    activeMediaIndex: number;
  }): VNode {
    const { mediaInfo, total, contentElementIndex, activeMediaIndex } = options;

    if (!mediaInfo) {
      return null;
    }

    const { title = "", altText = "" } = mediaInfo;

    if (mediaInfo.type === "image") {
      const info = mediaInfo;
      const { value, refreshInterval } = info;
      const { sourceURL, linkURL } = value;
      const linkOpenInNewTab = shouldOpenInNewTab(linkURL);
      const linkTarget = linkOpenInNewTab ? "_blank" : "_self";
      const linkRel = linkTarget === "_blank" ? "noreferrer" : "";
      const refreshIntervalInfo = refreshInterval ? this._mediaInfo.get(contentElementIndex) : null;
      const timestamp = refreshIntervalInfo ? refreshIntervalInfo.timestamp : 0;
      const imgSrc = refreshIntervalInfo ? refreshIntervalInfo.sourceURL : sourceURL;

      const imageNode = (
        <img
          alt={altText || title}
          /* unique key is needed to redraw image node when refreshInterval is defined for a mediaInfo. */
          key={this._buildKey(
            mediaInfo.type,
            total,
            contentElementIndex,
            activeMediaIndex,
            timestamp
          )}
          src={imgSrc}
        />
      );

      const linkNode = linkURL ? (
        <a title={title} href={linkURL} rel={linkRel} target={linkTarget}>
          {imageNode}
        </a>
      ) : null;

      return linkNode ? linkNode : imageNode;
    }
    if (mediaInfo.type.indexOf("chart") !== -1) {
      return (
        <div
          key={this._buildKey(mediaInfo.type, total, contentElementIndex, activeMediaIndex)}
          bind={this}
          data-media-info={mediaInfo}
          data-content-element-index={contentElementIndex}
          class={CSS.mediaChart}
          afterCreate={this._getChartDependencies}
          afterRemoved={this._disposeChartByNode}
        />
      );
    }
    return undefined;
  }

  protected renderMediaInfo(options: {
    total: number;
    mediaInfo: MediaInfo;
    contentElementIndex: number;
    activeMediaIndex: number;
  }): VNode {
    const { total, mediaInfo, contentElementIndex, activeMediaIndex } = options;

    if (!mediaInfo) {
      return null;
    }

    const titleNode = mediaInfo.title ? (
      <div
        key={this._buildKey("media-title", mediaInfo.type, total, contentElementIndex)}
        class={CSS.mediaItemTitle}
        innerHTML={mediaInfo.title}
      />
    ) : null;

    const captionNode = mediaInfo.caption ? (
      <div
        key={this._buildKey("media-caption", mediaInfo.type, total, contentElementIndex)}
        class={CSS.mediaItemCaption}
        innerHTML={mediaInfo.caption}
      />
    ) : null;

    return (
      <div
        key={this._buildKey("media-container", mediaInfo.type, total, contentElementIndex)}
        class={CSS.mediaItemContainer}
      >
        {titleNode}
        {captionNode}
        <div
          key={this._buildKey("media-item-container", mediaInfo.type, total, contentElementIndex)}
          class={CSS.mediaItem}
        >
          {this.renderMediaInfoType({
            total,
            mediaInfo,
            contentElementIndex,
            activeMediaIndex
          })}
        </div>
      </div>
    );
  }

  protected renderMediaPageButton(
    direction: MediaPageDirection,
    contentElementIndex: number
  ): VNode {
    const isPrevious = direction === "previous";
    const title = isPrevious ? this.messages.previous : this.messages.next;
    const buttonClasses = isPrevious
      ? this.classes(CSS.btn, CSS.mediaPrevious)
      : this.classes(CSS.btn, CSS.mediaNext);
    const LTRIconClasses = isPrevious
      ? this.classes(CSS.icon, CSS.mediaPreviousIconLTR, CSS.iconLeftTriangleArrow)
      : this.classes(CSS.icon, CSS.mediaNextIconLTR, CSS.iconRightTriangleArrow);
    const RTLIconClasses = isPrevious
      ? this.classes(CSS.icon, CSS.mediaPreviousIconRTL, CSS.iconRightTriangleArrow)
      : this.classes(CSS.icon, CSS.mediaNextIconRTL, CSS.iconLeftTriangleArrow);
    const keyName = isPrevious ? "media-previous" : "media-next";
    const buttonClick = isPrevious ? this._previousClick : this._nextClick;

    return (
      <div
        key={this._buildKey(keyName, contentElementIndex)}
        title={title}
        tabIndex={0}
        role="button"
        class={buttonClasses}
        data-content-element-index={contentElementIndex}
        bind={this}
        onkeydown={buttonClick}
        onclick={buttonClick}
      >
        <span aria-hidden="true" class={LTRIconClasses} />
        <span aria-hidden="true" class={RTLIconClasses} />
        <span class={CSS.iconText}>{title}</span>
      </div>
    );
  }

  protected renderMedia(contentElement: MediaContent, contentElementIndex: number): VNode {
    const mediaInfos = contentElement.mediaInfos?.filter(Boolean);
    const total = mediaInfos?.length || 0;
    const mediaClasses = {
      [CSS.showMediaPagination]: total > 1
    };

    const previousButtonNode = this.renderMediaPageButton("previous", contentElementIndex);
    const nextButtonNode = this.renderMediaPageButton("next", contentElementIndex);

    let activeMediaIndex = this._activeMediaMap.get(contentElementIndex);
    if (isNaN(activeMediaIndex)) {
      this._activeMediaMap.set(contentElementIndex, 0);
      activeMediaIndex = 0;
    }

    return total ? (
      <div
        key={this._buildKey("media-element", contentElementIndex)}
        data-content-element-index={contentElementIndex}
        bind={this}
        onkeyup={this._handleMediaKeyup}
        class={this.classes(CSS.media, CSS.contentElement, mediaClasses)}
      >
        <div
          key={this._buildKey("media-element-container", contentElementIndex)}
          class={CSS.mediaContainer}
        >
          {previousButtonNode}
          {this.renderMediaInfo({
            total,
            mediaInfo: mediaInfos[activeMediaIndex],
            contentElementIndex,
            activeMediaIndex
          })}
          {nextButtonNode}
        </div>
      </div>
    ) : null;
  }

  protected renderLastEditInfo(): VNode {
    const { visibleElements, messages } = this;
    const { lastEditInfo } = this.viewModel;

    if (!lastEditInfo || !visibleElements.lastEditedInfo) {
      return null;
    }

    const { date, user } = lastEditInfo;

    const nlsString =
      lastEditInfo.type === "edit"
        ? user
          ? messages.lastEditedByUser
          : messages.lastEdited
        : user
        ? messages.lastCreatedByUser
        : messages.lastCreated;

    const text = substitute(nlsString, {
      date,
      user
    });

    return (
      <div key={"edit-info-element"} class={this.classes(CSS.lastEditedInfo, CSS.contentElement)}>
        {text}
      </div>
    );
  }

  protected renderText(contentElement: TextContent, contentElementIndex: number): VNode {
    const hasText = contentElement.text;
    const contentWidget = this._contentWidgets[contentElementIndex];

    if (!contentWidget || contentWidget.destroyed) {
      return null;
    }

    return hasText ? (
      <div
        key={this._buildKey("text-element", contentElementIndex)}
        class={this.classes(CSS.contentElement, CSS.text)}
      >
        {contentWidget.render()}
      </div>
    ) : null;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _buildKey(id: string, ...extraIdentifiers: (string | number)[]): string {
    const featureId = this.get<string>("viewModel.graphic.uid") || "0";
    const argString = extraIdentifiers.join("-");

    return `${id}__${featureId}-${argString}`;
  }

  private async _disposeCharts(): Promise<void> {
    this._chartUIds.forEach((chart) => chart.dispose());
    this._chartUIds.clear();
    this._contentElementCharts.forEach((chart) => chart.dispose());
    this._contentElementCharts.clear();
  }

  private _clearMediaRefreshTimers(): void {
    this._refreshTimers.forEach((timerId) => clearTimeout(timerId));
    this._refreshTimers.clear();
  }

  private _clearMediaRefreshTimer(contentElementIndex: number): void {
    const refreshTimer = this._refreshTimers.get(contentElementIndex);

    if (!refreshTimer) {
      return;
    }

    clearTimeout(refreshTimer);
    this._refreshTimers.delete(contentElementIndex);
  }

  private _getImageSource(sourceURL: string, timestamp: number): string {
    const querySeparator = sourceURL.indexOf("?") !== -1 ? "&" : "?";
    const [url, hash = ""] = sourceURL.split("#");
    const hashSeparator = hash ? "#" : "";
    return `${url}${querySeparator}timestamp=${timestamp}${hashSeparator}${hash}`;
  }

  private _setupMediaRefreshTimer(contentElementIndex: number): void {
    const content = this.get("viewModel.content");

    if (!Array.isArray(content)) {
      return;
    }

    const contentElement = content[contentElementIndex];

    if (!contentElement || contentElement.type !== "media") {
      return;
    }

    let activeMediaIndex = this._activeMediaMap.get(contentElementIndex);
    if (isNaN(activeMediaIndex)) {
      activeMediaIndex = 0;
    }

    const mediaInfo = contentElement.mediaInfos[activeMediaIndex];

    if (!mediaInfo || mediaInfo.type !== "image" || !mediaInfo.refreshInterval) {
      return;
    }

    this._setRefreshTimeout(contentElementIndex, mediaInfo);
  }

  private _destroyContentWidgets(): void {
    this._contentWidgets.forEach(
      (contentWidget) => contentWidget && !contentWidget.destroyed && contentWidget.destroy()
    );
    this._contentWidgets = [];
  }

  private _setupContentWidgets(): void {
    this._destroyContentWidgets();

    this._activeMediaMap.clear();

    const content = this.get<ContentElement[]>("viewModel.content");
    const { contentVMs } = this.viewModel;

    if (Array.isArray(content)) {
      content.forEach((contentElement, contentElementIndex) => {
        if (contentElement.type === "attachments") {
          this._contentWidgets[contentElementIndex] = new Attachments({
            displayType: contentElement.displayType,
            viewModel: contentVMs[contentElementIndex]
          });
        }

        if (contentElement.type === "fields") {
          this._contentWidgets[contentElementIndex] = new FeatureFields({
            viewModel: contentVMs[contentElementIndex]
          });
        }

        if (contentElement.type === "text") {
          this._contentWidgets[contentElementIndex] = new FeatureContent({
            viewModel: contentVMs[contentElementIndex]
          });
        }

        if (contentElement.type === "custom") {
          this._contentWidgets[contentElementIndex] = new FeatureContent({
            viewModel: contentVMs[contentElementIndex]
          });
        }
      }, this);
    } else {
      const viewModel = contentVMs[0];

      if (viewModel && !viewModel.destroyed) {
        this._contentWidgets[0] = new FeatureContent({
          viewModel
        });
      }
    }

    this.scheduleRender();
  }

  private _setupMediaRefreshTimers(): void {
    this._clearMediaRefreshTimers();

    const content = this.get("viewModel.content");
    if (!Array.isArray(content)) {
      return;
    }

    content.forEach((_contentElement: ContentElement, contentElementIndex) =>
      this._setupMediaRefreshTimer(contentElementIndex)
    );
  }

  private _updateMediaInfoTimestamp(sourceURL: string, contentElementIndex: number): void {
    const timestamp = Date.now();
    this._mediaInfo.set(contentElementIndex, {
      timestamp,
      sourceURL: this._getImageSource(sourceURL, timestamp)
    });
    this.scheduleRender();
  }

  private _setRefreshTimeout(contentElementIndex: number, mediaInfo: ImageMediaInfo): void {
    const { refreshInterval, value } = mediaInfo;

    if (!refreshInterval) {
      return;
    }

    const intervalInMs = refreshInterval * 60000;
    this._updateMediaInfoTimestamp(value.sourceURL, contentElementIndex);

    const timerId = setInterval(() => {
      this._updateMediaInfoTimestamp(value.sourceURL, contentElementIndex);
    }, intervalInMs);
    this._refreshTimers.set(contentElementIndex, timerId);
  }

  private _getChartDependencies(chartDiv: HTMLDivElement): void {
    const mediaInfo = chartDiv["data-media-info"] as MediaChartInfo;
    const contentElementIndex = chartDiv["data-content-element-index"] as number;

    this._disposeChartByNode(chartDiv);
    this._disposeChartByContgentElementIndex(contentElementIndex);

    const value = mediaInfo.value;
    const type = mediaInfo.type;

    loadChartsModule().then((amCharts4Index) =>
      this._renderChartThrottled({
        chartDiv,
        mediaInfo,
        contentElementIndex,
        type,
        value,
        chartsModule: amCharts4Index
      })
    );
  }

  private _disposeChartByContgentElementIndex(contentElementIndex: number): void {
    const activeChart = this._contentElementCharts.get(contentElementIndex);

    if (activeChart) {
      activeChart.dispose();
    }
  }

  private _disposeChartByNode(chartDiv: HTMLDivElement): void {
    const chartUID = chartDiv.getAttribute("data-chart-uid");
    const activeChart = this._chartUIds.get(chartUID);

    if (activeChart) {
      activeChart.dispose();
    }
  }

  private _customizeChartTooltip(tooltip: AM4Tooltip, am4core: AM4Core): void {
    tooltip.label.wrap = true;
    tooltip.label.maxWidth = 200;
    tooltip.autoTextColor = false;
    tooltip.getFillFromObject = false;
    tooltip.label.fill = am4core.color("#ffffff");
    tooltip.background.fill = am4core.color({ r: 0, g: 0, b: 0, a: 0.7 });
  }

  private _createPieChart(options: ChartOptions): PieChart {
    const { chartDiv, chartsModule: amCharts4Index } = options;
    const { am4core, am4charts } = amCharts4Index;

    const chart = am4core.create(chartDiv, am4charts.PieChart);
    chart.rtl = isRTL();

    const series = chart.series.push(new am4charts.PieSeries());
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    series.dataFields.value = "y";
    series.dataFields.category = "x";
    this._customizeChartTooltip(series.tooltip, am4core);

    return chart;
  }

  private _getMinSeriesValue(series: ChartMediaInfoValueSeries[]): number {
    let min: number = 0;

    series.forEach((entry) => (min = Math.min(entry.x, min)));

    return min;
  }

  private _createXYChart(options: ChartOptions): XYChart {
    const CHART_RENDERER_MIN_LABEL_POSITION = 0.05;
    const CHART_RENDERER_MAX_LABEL_POSITION = 0.95;

    const { chartDiv, type, value, chartsModule: amCharts4Index } = options;
    const { am4core, am4charts } = amCharts4Index;

    const chart = am4core.create(chartDiv, am4charts.XYChart);
    chart.rtl = isRTL();

    const enableScrollbar = value.series.length > 15;

    if (type === "column-chart") {
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "x";
      categoryAxis.renderer.labels.template.disabled = true;
      this._customizeChartTooltip(categoryAxis.tooltip, am4core);

      // amcharts: fix to position tooltip within the chart otherwise it will get cutt off
      // https://amcharts.zendesk.com/hc/en-us/requests/45087
      categoryAxis.tooltip.events.on("sizechanged", () => {
        categoryAxis.tooltip.dy = -categoryAxis.tooltip.contentHeight;
      });

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      const label = valueAxis.renderer.labels.template;
      valueAxis.renderer.minLabelPosition = CHART_RENDERER_MIN_LABEL_POSITION;
      valueAxis.renderer.maxLabelPosition = CHART_RENDERER_MAX_LABEL_POSITION;
      valueAxis.min = this._getMinSeriesValue(value.series);
      this._customizeChartTooltip(valueAxis.tooltip, am4core);
      label.wrap = true;

      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "y";
      series.dataFields.categoryX = "x";

      chart.cursor = new am4charts.XYCursor();

      if (enableScrollbar) {
        chart.scrollbarX = new am4core.Scrollbar();
      }
    }

    if (type === "bar-chart") {
      const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "x";
      categoryAxis.renderer.inversed = true;
      categoryAxis.renderer.labels.template.disabled = true;

      this._customizeChartTooltip(categoryAxis.tooltip, am4core);

      // amcharts: fix to position tooltip within the chart otherwise it will get cutt off
      // https://amcharts.zendesk.com/hc/en-us/requests/45087
      categoryAxis.tooltip.events.on("sizechanged", () => {
        categoryAxis.tooltip.dx = categoryAxis.tooltip.contentWidth;
      });

      const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      const label = valueAxis.renderer.labels.template;
      valueAxis.renderer.minLabelPosition = CHART_RENDERER_MIN_LABEL_POSITION;
      valueAxis.renderer.maxLabelPosition = CHART_RENDERER_MAX_LABEL_POSITION;
      valueAxis.min = this._getMinSeriesValue(value.series);
      this._customizeChartTooltip(valueAxis.tooltip, am4core);
      label.wrap = true;

      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = "y";
      series.dataFields.categoryY = "x";

      chart.cursor = new am4charts.XYCursor();

      if (enableScrollbar) {
        chart.scrollbarY = new am4core.Scrollbar();
      }
    }

    if (type === "line-chart") {
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "x";
      categoryAxis.renderer.labels.template.disabled = true;
      this._customizeChartTooltip(categoryAxis.tooltip, am4core);

      // amcharts: fix to position tooltip within the chart otherwise it will get cutt off
      // https://amcharts.zendesk.com/hc/en-us/requests/45087
      categoryAxis.tooltip.events.on("sizechanged", () => {
        categoryAxis.tooltip.dy = -categoryAxis.tooltip.contentHeight;
      });

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      const label = valueAxis.renderer.labels.template;
      valueAxis.renderer.minLabelPosition = CHART_RENDERER_MIN_LABEL_POSITION;
      valueAxis.renderer.maxLabelPosition = CHART_RENDERER_MAX_LABEL_POSITION;
      valueAxis.min = this._getMinSeriesValue(value.series);
      this._customizeChartTooltip(valueAxis.tooltip, am4core);
      label.wrap = true;

      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.categoryX = "x";
      series.dataFields.valueY = "y";

      chart.cursor = new am4charts.XYCursor();

      if (enableScrollbar) {
        chart.scrollbarX = new am4core.Scrollbar();
      }
    }

    return chart;
  }

  private _renderChart(options: ChartOptions): void {
    const {
      type,
      mediaInfo,
      contentElementIndex,
      value,
      chartsModule: amCharts4Index,
      chartDiv
    } = options;
    const { am4core } = amCharts4Index;

    am4core.useTheme(amCharts4Index.am4themes_animated);

    const chart =
      type === "pie-chart" ? this._createPieChart(options) : this._createXYChart(options);

    this._chartUIds.set(chart.uid, chart);
    this._contentElementCharts.set(contentElementIndex, chart);
    chartDiv.setAttribute("data-chart-uid", chart.uid);
    chartDiv.setAttribute("aria-label", mediaInfo.altText || mediaInfo.title);

    chart.data = value.series.map((entry) => ({
      x: entry.tooltip,
      y: entry.y
    }));
  }

  private _handleMediaKeyup(event: KeyboardEvent): void {
    const node = event.currentTarget as Element;
    const elementIndex = node["data-content-element-index"] as number;
    const key = eventKey(event);

    if (key === "ArrowLeft") {
      event.stopPropagation();
      this.previousMedia(elementIndex);
    }

    if (key === "ArrowRight") {
      event.stopPropagation();
      this.nextMedia(elementIndex);
    }
  }

  private _setContentElementMedia(contentElementIndex: number, pagedMediaIndex: number): void {
    this._clearMediaRefreshTimer(contentElementIndex);

    const content = this.viewModel.content;
    const contentElement = content && content[contentElementIndex];
    const mediaInfos = contentElement && contentElement.mediaInfos;

    if (!mediaInfos || !mediaInfos.length) {
      return;
    }

    const pagedRoundRobin = (pagedMediaIndex + mediaInfos.length) % mediaInfos.length;
    this._activeMediaMap.set(contentElementIndex, pagedRoundRobin);
    this._setupMediaRefreshTimer(contentElementIndex);
    this.scheduleRender();
  }

  private _pageContentElementMedia(
    contentElementIndex: number,
    direction: MediaPageDirection
  ): void {
    const delta = direction === "previous" ? -1 : 1;
    const pagedMediaIndex = this._activeMediaMap.get(contentElementIndex) + delta;
    this._setContentElementMedia(contentElementIndex, pagedMediaIndex);
  }

  @accessibleHandler()
  private _previousClick(event: Event): void {
    const node = event.currentTarget as Element;
    const elementIndex = node["data-content-element-index"] as number;
    this.previousMedia(elementIndex);
  }

  @accessibleHandler()
  private _nextClick(event: Event): void {
    const node = event.currentTarget as Element;
    const elementIndex = node["data-content-element-index"] as number;
    this.nextMedia(elementIndex);
  }
}

export = Feature;
