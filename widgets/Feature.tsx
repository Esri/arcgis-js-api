/**
 * The Feature widget displays a graphic according to its [PopupTemplate](esri-PopupTemplate.html).
 * This widget is useful in instances where you want to display information about a feature but without
 * the use of a [Popup](esri-widgets-Popup.html).
 *
 * @module esri/widgets/Feature
 * @since 4.7
 *
 * @see [Feature.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Feature.tsx)
 * @see [Feature.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Feature.scss)
 * @see module:esri/widgets/Feature/FeatureViewModel
 * @see module:esri/views/ui/DefaultUI
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
 *   view: view
 * });
 *
 * view.ui.add(feature, "top-right");
 *
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!./Feature/nls/Feature";

import {
  LEFT_ARROW,
  RIGHT_ARROW
} from "dojo/keys";

// dojox.charting.Chart2DConstructor
import Chart2DConstructor = dojox.charting.Chart2DConstructor;

// dojox.charting.ThemeConstructor
import ThemeConstructor = dojox.charting.ThemeConstructor;

// dojox.charting.action2d.TooltipConstructor
import TooltipConstructor = dojox.charting.action2d.TooltipConstructor;

// esri
import Graphic = require("../Graphic");

// esri.core
import promiseUtils = require("../core/promiseUtils");
import watchUtils = require("../core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, subclass, property, declared } from "../core/accessorSupport/decorators";

// esri.portal
import { AttachmentInfo, ContentElement, FieldInfo, MediaInfo } from "../portal/jsonTypes";

// esri.views
import MapView = require("../views/MapView");
import SceneView = require("../views/SceneView");

// esri.widgets
import Widget = require("./Widget");

// esri.widgets.Feature
import FeatureViewModel = require("./Feature/FeatureViewModel");
import { FeatureMediaInfo, FeatureChartOption, FeatureValue } from "./Feature/interfaces";

// esri.widgets.Feature.support
import attachmentUtils = require("./Feature/support/attachmentUtils");

// esri.widgets.support
import uriUtils = require("./support/uriUtils");

import {
  accessibleHandler, join, tsx, renderable,
  isWidget, isWidgetBase
} from "./support/widget";

const CSS = {
  // common
  iconText: "esri-icon-font-fallback-text",
  iconLoading: "esri-icon-loading-indicator esri-rotating",
  iconLeftTriangleArrow: "esri-icon-left-triangle-arrow",
  iconRightTriangleArrow: "esri-icon-right-triangle-arrow",
  iconMedia: "esri-icon-media",
  iconChart: "esri-icon-chart",
  esriTable: "esri-table",
  // popup renderer
  base: "esri-feature",
  // containers and content
  container: "esri-feature__size-container",
  main: "esri-feature__main-container",
  btn: "esri-feature__button",
  icon: "esri-feature__icon",
  content: "esri-feature__content",
  contentElement: "esri-feature__content-element",
  // text element
  text: "esri-feature__text",
  // global modifiers
  showMediaPagination: "esri-feature--media-pagination-visible",
  // attachment element
  attachments: "esri-feature__attachments",
  attachmentsList: "esri-feature__attachments--list",
  attachmentsPreview: "esri-feature__attachments--preview",
  attachmentsTitle: "esri-feature__attachments-title",
  attachmentsItems: "esri-feature__attachments-items",
  attachmentsItem: "esri-feature__attachments-item",
  attachmentsItemMask: "esri-feature__attachment-item-mask",
  attachmentsItemMaskIcon: "esri-feature__attachment-item-mask--icon",
  attachmentsItemImage: "esri-feature__attachments-image",
  attachmentsItemImageOverlay: "esri-feature__attachments-image-overlay",
  attachmentsItemLinkIcon: "esri-feature__attachments-link-icon esri-icon-link-external",
  attachmentsItemImageResizable: "esri-feature__attachments-image--resizable",
  attachmentsItemFilename: "esri-feature__attachments-filename",
  attachmentsItemLink: "esri-feature__attachments-item-link",
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
  mediaSummary: "esri-feature__media-summary",
  mediaCount: "esri-feature__media-count",
  mediaImageSummary: "esri-feature__media-image-summary",
  mediaImageIcon: "esri-feature__media-image-icon",
  mediaChart: "esri-feature__media-chart",
  mediaChartSummary: "esri-feature__media-chart-summary",
  mediaChartIcon: "esri-feature__media-chart-icon",
  // loading
  loadingSpinnerContainer: "esri-feature__loading-container",
  spinner: "esri-feature__loading-spinner"
};

type MediaInfoType = "image" | "pie-chart" | "line-chart" | "column-chart" | "bar-chart";
type MediaStat = "image" | "chart";
type MediaPageDirection = "previous" | "next";

interface MediaInfoMap {
  timestamp: number;
  sourceURL: string;
}

interface MediaStats {
  total: number;
  images: number;
  charts: number;
}

interface ChartModules {
  chart: any;
  tooltip: any;
}

interface AttachmentInfoOptions {
  attachmentInfo: AttachmentInfo;
  attachmentInfoIndex: number;
  supportsResizeAttachments: boolean;
  contentElement: ContentElement;
}

const WIDGET_KEY_PARTIAL = "esri-feature";

function buildKey(element: string, index?: number): string {
  if (index === undefined) {
    return `${WIDGET_KEY_PARTIAL}__${element}`;
  }

  return `${WIDGET_KEY_PARTIAL}__${element}-${index}`;
}

@subclass("esri.widgets.Feature")
class Feature extends declared(Widget) {

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

  constructor(params?: any) {
    super();
  }

  postInitialize() {
    this.own(
      watchUtils.init(this, "viewModel.content", () => this._setupMediaRefreshTimers())
    );
  }

  destroy() {
    this._clearMediaRefreshTimers();
    this._activeMediaMap.clear();
    this._activeMediaMap = null;
    this._cancelChartModules();
    this._destroyCharts();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _chartMap: Map<number, ChartModules> = new Map();

  private _activeMediaMap: Map<number, number> = new Map();

  private _chartRequirePromise: IPromise<void> = null;

  private _refreshTimers: Map<number, number> = new Map();

  private _mediaInfo: Map<number, MediaInfoMap> = new Map();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  contentEnabled
  //----------------------------------

  @aliasOf("viewModel.contentEnabled")
  contentEnabled: boolean = null;

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
   *     type: "simple-marker",
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
  //  title
  //----------------------------------

  /**
   * The title for the feature.
   *
   * @name title
   * @instance
   * @type {string}
   * @default null
   * @readonly
   *
   */
  @aliasOf("viewModel.title")
  title: string = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {(module:esri/views/MapView | module:esri/views/SceneView)}
   * @default null
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
    "viewModel.content"
  ])
  viewModel = new FeatureViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const loadingNode = (
      <div key={buildKey("loading-container")}
        class={CSS.loadingSpinnerContainer}>
        <span class={join(CSS.iconLoading, CSS.spinner)}></span>
      </div>
    );

    const content = this.viewModel.waitingForContent ? loadingNode : this._renderContent();

    return (
      <div class={CSS.base}>
        <div class={CSS.container}>
          <div class={CSS.main}>{content}</div>
        </div>
      </div>
    );
  }

  /**
   * Paginates to a specified [media](esri-PopupTemplate.html#media) info object. For example,
   * you may have [media](esri-PopupTemplate.html#media) content which contains
   * multiple `mediaInfos`. This method allows you to specify the index of the `mediaInfos`
   * you wish to display.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-PopupTemplate.html#media) content element to be updated.
   * @param {number} mediaInfoIndex - The index position of the [media](esri-PopupTemplate.html#media) info object you wish to display.
   *
   */
  goToMedia(contentElementIndex: number, mediaInfoIndex: number): void {
    this._setContentElementMedia(contentElementIndex, mediaInfoIndex);
  }

  /**
   * Paginates to the next [media](esri-PopupTemplate.html#media) info.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-PopupTemplate.html#media) content element.
   *
   */
  nextMedia(contentElementIndex: number): void {
    this._pageContentElementMedia(contentElementIndex, "next");
  }

  /**
   * Paginates to the previous [media](esri-PopupTemplate.html#media) info in the specified
   * [media](esri-PopupTemplate.html#media) content element.
   *
   * @method
   * @param {number} contentElementIndex - The index position of the [media](esri-PopupTemplate.html#media) content element.
   */
  previousMedia(contentElementIndex: number): void {
    this._pageContentElementMedia(contentElementIndex, "previous");
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _cancelChartModules(): void {
    if (this._chartRequirePromise) {
      this._chartRequirePromise.cancel();
    }
  }

  private _destroyChart(contentElementIndex: number): void {
    const mapItem = this._chartMap.get(contentElementIndex);
    if (mapItem) {
      mapItem.chart.destroy();
      mapItem.tooltip.destroy();
    }
    this._chartMap.delete(contentElementIndex);
  }

  private _destroyCharts(): void {
    this._chartMap.forEach(mapItem => {
      mapItem.chart.destroy();
      mapItem.tooltip.destroy();
    });
    this._chartMap.clear();
  }

  private _renderContent(): any {
    this._destroyCharts();
    const content = this.viewModel.content;
    const contentKey = "content";

    if (typeof content === "string") {
      return <div key={buildKey(`${contentKey}-string`)} innerHTML={content} />;
    }

    if (isWidget(content)) {
      return <div key={buildKey(`${contentKey}-widget`)}>
        {content.render()}
      </div>;
    }

    if (content instanceof HTMLElement) {
      return <div key={buildKey(`${contentKey}-html-element`)}
        bind={content}
        afterCreate={this._attachToNode} />;
    }

    if (isWidgetBase(content)) {
      return <div key={buildKey(`${contentKey}-dijit`)}
        bind={content.domNode}
        afterCreate={this._attachToNode} />;
    }

    if (Array.isArray(content)) {
      return content.length ? (
        <div key={buildKey(`${contentKey}-content-elements`)}>
          {content.map(this._renderContentElement, this)}
        </div>
      ) : null;
    }
  }

  private _renderContentElement(contentElement: ContentElement, contentElementIndex: number): any {
    const elementType = contentElement.type;

    switch (elementType) {
      case "attachments":
        return this._renderAttachments(contentElement, contentElementIndex);
      case "fields":
        return this._renderFields(contentElement, contentElementIndex);
      case "media":
        return this._renderMedia(contentElement, contentElementIndex);
      case "text":
        return this._renderText(contentElement, contentElementIndex);
      default:
        return null;
    }
  }

  private _renderAttachmentInfo(options: AttachmentInfoOptions): any {
    const {
      attachmentInfo,
      supportsResizeAttachments
    } = options;

    const {
      contentType,
      name,
      url
    } = attachmentInfo;

    const thumbSize = 48;

    const hasSupportedImageFormat = supportsResizeAttachments &&
      attachmentUtils.isSupportedImage(contentType);

    const sep = url.indexOf("?") === -1 ? "?" : "&";

    const thumbnail = hasSupportedImageFormat ?
      `${url}${sep}w=${thumbSize}` :
      attachmentUtils.getIconPath(contentType);

    const attachmentsItemMaskClasses = {
      [CSS.attachmentsItemMaskIcon]: !hasSupportedImageFormat
    };

    const attachmentsItemImageClasses = {
      [CSS.attachmentsItemImageResizable]: supportsResizeAttachments
    };

    return (
      <li class={CSS.attachmentsItem} key={attachmentInfo}>
        <a class={CSS.attachmentsItemLink} href={url} target="_blank">
          <div classes={attachmentsItemMaskClasses} class={CSS.attachmentsItemMask}>
            <img alt={name}
              classes={attachmentsItemImageClasses}
              class={CSS.attachmentsItemImage}
              title={name}
              src={thumbnail} />
            <span class={CSS.attachmentsItemImageOverlay}>
              <span aria-hidden="true" class={CSS.attachmentsItemLinkIcon}></span>
            </span>
          </div>
          <span class={CSS.attachmentsItemFilename}>{name || i18n.noTitle}</span>
        </a>
      </li>
    );
  }

  private _renderAttachments(contentElement: ContentElement, contentElementIndex: number): any {
    const {
      displayType,
      attachmentInfos
    } = contentElement;

    const hasAttachments = attachmentInfos && attachmentInfos.length;
    const supportsResizeAttachments = this.get<boolean>("graphic.layer.capabilities.operations.supportsResizeAttachments");

    const attachmentsClasses = {
      [CSS.attachmentsList]: displayType !== "preview",
      [CSS.attachmentsPreview]: displayType === "preview"
    };

    return hasAttachments ? (
      <div key={buildKey("attachments-element")}
        class={join(CSS.attachments, CSS.contentElement)}
        classes={attachmentsClasses}>
        <div class={CSS.attachmentsTitle}>{i18n.attach}</div>
        <ul class={CSS.attachmentsItems}>
          {attachmentInfos.map((attachmentInfo, attachmentInfoIndex) => this._renderAttachmentInfo({
            attachmentInfo,
            attachmentInfoIndex,
            supportsResizeAttachments,
            contentElement
          }))}
        </ul>
      </div>
    ) : null;
  }

  private _forceLTR(value: number | string): string {
    /*
    * We use "&lrm;" when displaying numeric attribute field
    * values. We can use it to force LTR text direction - regardless of whether
    * the page is in LTR or RTL mode. Even in LTR mode, a number can be surrounded
    * by English or RTL scripts - but we need the number to be displayed in LTR
    * direction.
    * When not forced, minus sign of negative numbers is displayed after
    * the number - we want to avoid this.
    */
    return `&lrm;${value}`;
  }

  private _renderFieldInfo(fieldInfo: FieldInfo, contentElementIndex: number): any {
    const viewModel = this.viewModel;
    const { formattedAttributes } = viewModel;
    const availableFormattedAttributes = formattedAttributes ?
      formattedAttributes.content[contentElementIndex] || formattedAttributes.global :
      null;
    const fieldName = fieldInfo.fieldName;
    const fieldLabel = fieldInfo.label || fieldName;
    const fieldValue = availableFormattedAttributes ?
      availableFormattedAttributes[fieldName] == null ?
        "" :
        availableFormattedAttributes[fieldName] :
      "";
    const isDateField = !!(fieldInfo.format && fieldInfo.format.dateFormat);
    const isNumericField = (
      typeof fieldValue === "number" &&
      !isDateField
    );
    const formattedFieldValue = isNumericField ?
      this._forceLTR(fieldValue) :
      uriUtils.autoLink(fieldValue);
    const valueCellClasses = {
      [CSS.fieldDataDate]: isDateField
    };

    return (
      <tr key={buildKey("fields-element-info-row", contentElementIndex)}>
        <th key={buildKey("fields-element-info-row-header", contentElementIndex)} class={CSS.fieldHeader} innerHTML={fieldLabel} />
        <td key={buildKey("fields-element-info-row-data", contentElementIndex)} class={CSS.fieldData} classes={valueCellClasses} innerHTML={formattedFieldValue} />
      </tr>
    );
  }

  private _renderFields(contentElement: ContentElement, contentElementIndex: number): any {
    const fieldInfos = contentElement.fieldInfos;

    return fieldInfos ? (
      <div key={buildKey("fields-element", contentElementIndex)}
        class={join(CSS.fields, CSS.contentElement)}>
        <table class={CSS.esriTable} summary={i18n.fieldsSummary} key={buildKey("fields-element-table", contentElementIndex)}>
          <tbody key={buildKey("fields-element-table-body", contentElementIndex)}>
            {fieldInfos.map(fieldInfo => this._renderFieldInfo(fieldInfo, contentElementIndex))}
          </tbody>
        </table>
      </div>
    ) : null;
  }

  private _shouldOpenInNewTab(url: string = ""): boolean {
    // Returns false if the given url uses "mailto" or "tel" protocol.
    // This is to prevent adding blank target to such links, thereby
    // preventing browsers from opening a blank tab enroute to opening the
    // appropriate desktop application.
    // Refs:
    // https://code.google.com/p/chromium/issues/detail?id=144126
    const startsWithMailToOrTelProtocolRE = /^(?:mailto:|tel:)/;
    return !startsWithMailToOrTelProtocolRE.test(url.trim().toLowerCase());
  }

  private _clearMediaRefreshTimers(): void {
    this._refreshTimers.forEach(timerId => clearTimeout(timerId));
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

  private _setupMediaRefreshTimers(): void {
    this._clearMediaRefreshTimers();

    const content = this.get("viewModel.content");
    if (!Array.isArray(content)) {
      return;
    }

    content.forEach((contentElement: ContentElement, contentElementIndex) => this._setupMediaRefreshTimer(contentElementIndex));
  }

  private _updateMediaInfoTimestamp(sourceURL: string, contentElementIndex: number): void {
    const timestamp = Date.now();
    this._mediaInfo.set(contentElementIndex, {
      timestamp: timestamp,
      sourceURL: this._getImageSource(sourceURL, timestamp)
    });
    this.scheduleRender();
  }

  private _setRefreshTimeout(contentElementIndex: number, mediaInfo: MediaInfo): void {
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

  private _renderMediaInfoType(mediaInfo: FeatureMediaInfo, contentElementIndex: number): any {
    const { value, title = "", type, refreshInterval } = mediaInfo;
    const { sourceURL, linkURL } = value;

    if (type === "image") {
      const linkOpenInNewTab = !this._shouldOpenInNewTab(linkURL);
      const linkTarget = linkOpenInNewTab ? "_blank" : "_self";
      const mediaInfo = refreshInterval ? this._mediaInfo.get(contentElementIndex) : null;
      const timestamp = mediaInfo ? mediaInfo.timestamp : 0;
      const imgSrc = mediaInfo ? mediaInfo.sourceURL : sourceURL;

      const imageNode = (
        <img
          alt={title}
          key={buildKey(`media-image-${timestamp}`, contentElementIndex)} // unique key is needed to redraw image node when refreshInterval is defined for a mediaInfo.
          src={imgSrc}
        />
      );

      const linkNode = linkURL ? (
        <a title={title} href={linkURL} target={linkTarget}>{imageNode}</a>
      ) : null;

      return linkNode ? linkNode : imageNode;
    }
    else if (type.indexOf("chart") !== -1) {
      return (
        <div key={buildKey("chart", contentElementIndex)}
          bind={this}
          data-media-info={mediaInfo}
          data-content-element-index={contentElementIndex}
          class={CSS.mediaChart}
          afterCreate={this._getChartDependencies}
          afterUpdate={this._getChartDependencies} />
      );
    }
    return undefined;
  }

  private _getChartDependencies(divElement: HTMLDivElement): void {
    const mediaInfo = divElement["data-media-info"] as FeatureMediaInfo;
    const contentElementIndex = divElement["data-content-element-index"] as number;
    const value = mediaInfo.value;
    const theme = value.theme || "Claro";
    const type = mediaInfo.type as MediaInfoType;

    let formattedTheme = theme;
    if (typeof theme === "string") {
      // Convert dots in legacy module names to AMD slashes
      formattedTheme = theme.replace(/\./g, "/");
    }

    this._cancelChartModules();

    this._chartRequirePromise = promiseUtils.create<any[]>(resolve => require([
      "dojox/charting/Chart2D", "dojox/charting/action2d/Tooltip", `dojox/charting/themes/${formattedTheme}`
    ], (...modules) => resolve(modules)))
      .then(([Chart2D, ChartTooltip, Theme]) => {
        this._renderChart(divElement, contentElementIndex, type, value, Chart2D, ChartTooltip, Theme);
        this._chartRequirePromise = null;
      });
  }

  private _renderChart<T extends ThemeConstructor>(chartDiv: HTMLDivElement, contentElementIndex: number, type: MediaInfoType, value: FeatureValue, Chart2D: Chart2DConstructor, ChartTooltip: TooltipConstructor, ThemeClass: T): void {
    const chart = new Chart2D(chartDiv, {
      margins: {
        l: 4,
        t: 4,
        r: 4,
        b: 4
      }
    });
    if (ThemeClass) {
      chart.setTheme(ThemeClass);
    }

    switch (type) {
      case "pie-chart":
        chart.addPlot("default", {
          type: "Pie",
          labels: false
        });
        chart.addSeries("Series A", value.chartOptions);
        break;
      case "line-chart":
        chart.addPlot("default", {
          type: "Markers"
        });
        chart.addAxis("x", {
          min: 0,
          majorTicks: false,
          minorTicks: false,
          majorLabels: false,
          minorLabels: false
        });
        chart.addAxis("y", {
          includeZero: true,
          vertical: true,
          fixUpper: "minor"
        });
        value.chartOptions.forEach((info: FeatureChartOption, idx: number) => {
          info.x = idx + 1;
        });
        chart.addSeries("Series A", value.chartOptions);
        break;
      case "column-chart":
        chart.addPlot("default", {
          type: "Columns",
          gap: 3
        });
        chart.addAxis("y", {
          includeZero: true,
          vertical: true,
          fixUpper: "minor"
        });
        chart.addSeries("Series A", value.chartOptions);
        break;
      case "bar-chart":
        chart.addPlot("default", {
          type: "Bars",
          gap: 3
        });
        chart.addAxis("x", {
          includeZero: true,
          fixUpper: "minor",
          minorLabels: false
        });
        chart.addAxis("y", {
          vertical: true,
          majorTicks: false,
          minorTicks: false,
          majorLabels: false,
          minorLabels: false
        });
        chart.addSeries("Series A", value.chartOptions);
        break;
    }
    const chartTooltip = new ChartTooltip(chart);
    chart.render();

    this._chartMap.set(contentElementIndex, {
      chart,
      tooltip: chartTooltip
    });
  }

  private _renderMediaInfo(mediaInfo: FeatureMediaInfo, contentElementIndex: number): any {
    this._destroyChart(contentElementIndex);

    const mediaTypeNode = this._renderMediaInfoType(mediaInfo, contentElementIndex);

    const titleNode = mediaInfo.title ? (
      <div key={buildKey("media-title", contentElementIndex)}
        class={CSS.mediaItemTitle}
        innerHTML={mediaInfo.title} />
    ) : null;

    const captionNode = mediaInfo.caption ? (
      <div key={buildKey("media-caption", contentElementIndex)}
        class={CSS.mediaItemCaption}
        innerHTML={mediaInfo.caption} />
    ) : null;

    return (
      <div key={buildKey("media-container", contentElementIndex)}
        class={CSS.mediaItemContainer}>
        <div key={buildKey("media-item-container", contentElementIndex)}
          class={CSS.mediaItem}>
          {mediaTypeNode}
        </div>
        {titleNode}
        {captionNode}
      </div>
    );
  }

  private _renderMediaStatsItem(label: string, total: number, stat: MediaStat): any {
    const mediaIconClasses = stat === "chart" ?
      join(CSS.mediaChartIcon, CSS.iconChart) :
      join(CSS.mediaImageIcon, CSS.iconMedia);

    return (
      <li class={CSS.mediaImageSummary}>
        <span aria-hidden="true" class={mediaIconClasses}></span>
        <span class={CSS.mediaCount} aria-label={label}>{`(${total})`}</span>
      </li>
    );
  }

  private _renderMediaPageButton(direction: MediaPageDirection, contentElementIndex: number): any {
    const isPrevious = direction === "previous";
    const title = isPrevious ? i18n.previous : i18n.next;
    const buttonClasses = isPrevious ?
      join(CSS.btn, CSS.mediaPrevious) :
      join(CSS.btn, CSS.mediaNext);
    const LTRIconClasses = isPrevious ?
      join(CSS.icon, CSS.mediaPreviousIconLTR, CSS.iconLeftTriangleArrow) :
      join(CSS.icon, CSS.mediaNextIconLTR, CSS.iconRightTriangleArrow);
    const RTLIconClasses = isPrevious ?
      join(CSS.icon, CSS.mediaPreviousIconRTL, CSS.iconRightTriangleArrow) :
      join(CSS.icon, CSS.mediaNextIconRTL, CSS.iconLeftTriangleArrow);
    const keyName = isPrevious ? "previous" : "next";
    const buttonClick = isPrevious ? this._previousClick : this._nextClick;

    return (
      <div key={buildKey(keyName, contentElementIndex)}
        title={title}
        tabIndex={0}
        role="button"
        class={buttonClasses}
        data-content-element-index={contentElementIndex}
        bind={this}
        onkeydown={buttonClick}
        onclick={buttonClick}>
        <span aria-hidden="true" class={LTRIconClasses}></span>
        <span aria-hidden="true" class={RTLIconClasses}></span>
        <span class={CSS.iconText}>{title}</span>
      </div>
    );
  }

  private _handleMediaKeyup(event: KeyboardEvent): void {
    const node = event.currentTarget as Element;
    const elementIndex = node["data-content-element-index"] as number;
    const { keyCode } = event;

    if (keyCode === LEFT_ARROW) {
      event.stopPropagation();
      this.previousMedia(elementIndex);
    }

    if (keyCode === RIGHT_ARROW) {
      event.stopPropagation();
      this.nextMedia(elementIndex);
    }
  }

  private _renderMedia(contentElement: ContentElement, contentElementIndex: number): any {
    const mediaInfos = contentElement.mediaInfos as FeatureMediaInfo[];
    const mediaStats = this._getMediaStats(mediaInfos);
    const total = mediaStats.total;
    const mediaClasses = {
      [CSS.showMediaPagination]: mediaStats.total > 1
    };

    const mediaStatsNode = this._renderMediaStatsItem(i18n.numImages, mediaStats.images, "image");
    const chartStatsNode = this._renderMediaStatsItem(i18n.numCharts, mediaStats.charts, "chart");

    const previousButtonNode = this._renderMediaPageButton("previous", contentElementIndex);
    const nextButtonNode = this._renderMediaPageButton("next", contentElementIndex);

    let activeMediaIndex = this._activeMediaMap.get(contentElementIndex);
    if (isNaN(activeMediaIndex)) {
      this._activeMediaMap.set(contentElementIndex, 0);
      activeMediaIndex = 0;
    }

    return total ? (
      <div key={buildKey("media-element", contentElementIndex)}
        data-content-element-index={contentElementIndex}
        bind={this}
        onkeyup={this._handleMediaKeyup}
        class={join(CSS.media, CSS.contentElement)}
        classes={mediaClasses}>
        <ul class={CSS.mediaSummary}>
          {mediaStatsNode}
          {chartStatsNode}
        </ul>
        <div key={buildKey("media-element-container", contentElementIndex)}
          class={CSS.mediaContainer}>
          {previousButtonNode}
          {this._renderMediaInfo(mediaInfos[activeMediaIndex], contentElementIndex)}
          {nextButtonNode}
        </div>
      </div>
    ) : null;
  }

  private _renderText(contentElement: ContentElement, contentElementIndex: number): any {
    const hasText = contentElement.text;

    return hasText ? (
      <div key={buildKey("text-element", contentElementIndex)}
        innerHTML={contentElement.text}
        class={join(CSS.text, CSS.contentElement)} />
    ) : null;
  }

  private _attachToNode(this: HTMLElement, node: HTMLElement): void {
    const content = this;
    node.appendChild(content);
  }

  private _getMediaStats(mediaInfos: FeatureMediaInfo[]): MediaStats {
    let images = 0,
      charts = 0;
    mediaInfos.forEach(mediaInfo => {
      const type = mediaInfo.type;
      if (type === "image") {
        images++;
      }
      else if (type.indexOf("chart") !== -1) {
        charts++;
      }
    });
    return {
      total: charts + images,
      images,
      charts
    };
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

  private _pageContentElementMedia(contentElementIndex: number, direction: MediaPageDirection): void {
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
