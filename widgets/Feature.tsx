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

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign"/>
/// <amd-dependency path="esri/core/tsSupport/generatorHelper" name="__generator"/>
/// <amd-dependency path="esri/core/tsSupport/awaiterHelper" name="__awaiter"/>

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Feature/nls/Feature";

// esri
import { SpatialReference } from "esri/geometry";
import Graphic = require("esri/Graphic");
import { substitute } from "esri/intl";
import EsriMap = require("esri/Map");

// esri.core
import { eventKey } from "esri/core/events";
import watchUtils = require("esri/core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, cast, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers.support
import AttachmentInfo = require("esri/layers/support/AttachmentInfo");

// esri.popup
import { Content as ContentElement } from "esri/popup/content";
import FieldInfo = require("esri/popup/FieldInfo");

// esri.popup.content
import AttachmentsContent = require("esri/popup/content/AttachmentsContent");
import FieldsContent = require("esri/popup/content/FieldsContent");
import ImageMediaInfo = require("esri/popup/content/ImageMediaInfo");
import MediaContent = require("esri/popup/content/MediaContent");
import TextContent = require("esri/popup/content/TextContent");

// esri.popup.content.support
import ChartMediaInfoValue = require("esri/popup/content/support/ChartMediaInfoValue");
import { MediaChartInfo, MediaInfo } from "esri/popup/content/support/mediaInfoTypes";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Feature
import FeatureViewModel = require("esri/widgets/Feature/FeatureViewModel");

// esri.widgets.Feature.support
import attachmentUtils = require("esri/widgets/Feature/support/attachmentUtils");

// esri.widgets.support
import { AM4Charts, PieChart, XYChart } from "esri/widgets/support/chartTypes";
import { loadChartsModule } from "esri/widgets/support/chartUtils";
import { VNode } from "esri/widgets/support/interfaces";
import uriUtils = require("esri/widgets/support/uriUtils");
import { accessibleHandler, isWidget, isWidgetBase, renderable, tsx } from "esri/widgets/support/widget";
import { isRTL } from "esri/widgets/support/widgetUtils";

type ChartOptions = {
  chartDiv: HTMLDivElement;
  contentElementIndex: number;
  type: MediaInfoChartType;
  value: ChartMediaInfoValue;
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

interface AttachmentInfoOptions {
  attachmentInfo: AttachmentInfo;
  attachmentInfoIndex: number;
  supportsResizeAttachments: boolean;
  contentElement: AttachmentsContent;
}

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

const CHART_TOOLTIP_LABEL_MAX_WIDTH = 200;
const CHART_RENDERER_MIN_LABEL_POSITION = 0.05;
const CHART_RENDERER_MAX_LABEL_POSITION = 0.95;

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
    super(params);
  }

  postInitialize(): void {
    this.own(watchUtils.init(this, "viewModel.content", () => this._setupMediaRefreshTimers()));
  }

  destroy(): void {
    this._clearMediaRefreshTimers();
    this._activeMediaMap.clear();
    this._activeMediaMap = null;
    this._destroyCharts();
  }

  /**
   * Disposes of chart instances.
   * @private
   */
  destroyCharts(): Promise<void> {
    return this._destroyCharts();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _chartMap: Map<number, XYChart | PieChart> = new Map();

  private _activeMediaMap: Map<number, number> = new Map();

  private _refreshTimers: Map<number, number> = new Map();

  private _mediaInfo: Map<number, MediaInfoMap> = new Map();

  private _loadingChartsModule: Promise<void> = null;

  //--------------------------------------------------------------------------
  //
  // Type definitions
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  // VisibleElements typedef
  //
  //--------------------------------------------------------------------------

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
   * support the `createPopupTemplate` method. (Supported for {@link module:esri/layers/FeatureLayer}, {@link module:esri/layers/GeoJSONLayer},
   * {@link module:esri/layers/SceneLayer}, {@link module:esri/layers/CSVLayer}, {@link module:esri/layers/PointCloudLayer},
   * {@link module:esri/layers/StreamLayer} and {@link module:esri/layers/ImageryLayer}).
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
  @property()
  label: string = i18n.widgetLabel;

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
   * The visible elements that are displayed within the widget's [graphic.popupTemplate.content](esri-PopupTemplate.html#content).
   * This property provides the ability to turn individual elements of the widget's display on/off.
   * See the {@link module:esri/PopupTemplate#content PopupTemplate.content} documentation
   * for additional information on how these elements work.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Feature~VisibleElements}
   * @since 4.11
   * @autocast { "value": "Object[]" }
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
  @renderable(["viewModel.waitingForContent", "viewModel.content", "viewModel.lastEditInfo"])
  viewModel = new FeatureViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const loadingNode = (
      <div key={"loading-container"} class={CSS.loadingSpinnerContainer}>
        <span class={this.classes(CSS.iconLoading, CSS.spinner)} />
      </div>
    );

    const { visibleElements } = this;
    const { waitingForContent, title } = this.viewModel;

    const titleNode = visibleElements.title ? <h4 class={CSS.title} innerHTML={title} /> : null;

    const contentNode = !!visibleElements.content ? (
      <div class={CSS.main}>{[this._renderContent(), this._renderLastEditInfo()]}</div>
    ) : null;

    return (
      <div class={this.classes(CSS.base, CSS.esriWidget)}>
        <div class={CSS.container}>
          {titleNode}
          {waitingForContent ? loadingNode : contentNode}
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
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _buildKey(id: string, ...extraIdentifiers: (string | number)[]): string {
    const featureId = this.get<string>("viewModel.graphic.uid") || "0";
    const argString = extraIdentifiers.join("-");

    return `${id}__${featureId}-${argString}`;
  }

  private async _destroyCharts(): Promise<void> {
    const { _loadingChartsModule } = this;

    if (_loadingChartsModule) {
      await _loadingChartsModule;
    }

    this._chartMap.forEach((chart) => chart.dispose());
    this._chartMap.clear();
  }

  private _renderContent(): VNode {
    const content = this.viewModel.content;
    const contentKey = "content";

    if (!content) {
      return null;
    }

    if (typeof content === "string") {
      return <div key={`${contentKey}-string`} innerHTML={content} />;
    }

    if (isWidget(content)) {
      return <div key={`${contentKey}-widget`}>{content.render()}</div>;
    }

    if (content instanceof HTMLElement) {
      return (
        <div key={`${contentKey}-html-element`} bind={content} afterCreate={this._attachToNode} />
      );
    }

    if (isWidgetBase(content)) {
      return (
        <div key={`${contentKey}-dijit`} bind={content.domNode} afterCreate={this._attachToNode} />
      );
    }

    if (Array.isArray(content)) {
      return content.length ? (
        <div key={`${contentKey}-content-elements`}>
          {content.map(this._renderContentElement, this)}
        </div>
      ) : null;
    }

    return null;
  }

  private _renderContentElement(
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
        return this._renderAttachments(contentElement);
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

  private _renderAttachmentInfo(options: AttachmentInfoOptions): VNode {
    const { attachmentInfo, supportsResizeAttachments, contentElement } = options;
    const { displayType } = contentElement;
    const { contentType, orientationInfo, name, url } = attachmentInfo;
    const thumbSize = displayType === "list" ? 48 : 400;

    const transform = orientationInfo
      ? [
          orientationInfo.rotation ? `rotate(${orientationInfo.rotation}deg)` : "",
          orientationInfo.mirrored ? "scaleX(-1)" : ""
        ].join(" ")
      : "";

    const imageStyles = transform ? { transform } : {};

    const hasSupportedImageFormat =
      supportsResizeAttachments && attachmentUtils.isSupportedImage(contentType);

    const sep = url.indexOf("?") === -1 ? "?" : "&";

    const thumbnail = hasSupportedImageFormat
      ? `${url}${sep}w=${thumbSize}`
      : attachmentUtils.getIconPath(contentType);

    const attachmentsItemMaskClasses = {
      [CSS.attachmentsItemMaskIcon]: !hasSupportedImageFormat
    };

    const attachmentsItemImageClasses = {
      [CSS.attachmentsItemImageResizable]: supportsResizeAttachments
    };

    return (
      <li class={CSS.attachmentsItem} key={attachmentInfo}>
        <a class={CSS.attachmentsItemLink} href={url} rel="noreferrer" target="_blank">
          <div class={this.classes(attachmentsItemMaskClasses, CSS.attachmentsItemMask)}>
            <img
              styles={imageStyles}
              alt=""
              class={this.classes(attachmentsItemImageClasses, CSS.attachmentsItemImage)}
              src={thumbnail}
            />
            <span class={CSS.attachmentsItemImageOverlay}>
              <span aria-hidden="true" class={CSS.attachmentsItemLinkIcon} />
            </span>
          </div>
          <span class={CSS.attachmentsItemFilename}>{name || i18n.noTitle}</span>
        </a>
      </li>
    );
  }

  private _renderAttachments(contentElement: AttachmentsContent): VNode {
    const { displayType, attachmentInfos } = contentElement;

    const hasAttachments = attachmentInfos && attachmentInfos.length;
    const supportsResizeAttachments = this.get<boolean>(
      "graphic.layer.capabilities.operations.supportsResizeAttachments"
    );

    const attachmentsClasses = {
      [CSS.attachmentsList]: displayType !== "preview",
      [CSS.attachmentsPreview]: displayType === "preview"
    };

    return hasAttachments ? (
      <div
        key={"attachments-element"}
        class={this.classes(CSS.attachments, CSS.contentElement, attachmentsClasses)}
      >
        <div class={CSS.attachmentsTitle}>{i18n.attach}</div>
        <ul class={CSS.attachmentsItems}>
          {attachmentInfos.map((attachmentInfo, attachmentInfoIndex) =>
            this._renderAttachmentInfo({
              attachmentInfo,
              attachmentInfoIndex,
              supportsResizeAttachments,
              contentElement
            })
          )}
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

  private _renderFieldInfo(fieldInfo: FieldInfo, contentElementIndex: number): VNode {
    const { formattedAttributes } = this.viewModel;
    const availableFormattedAttributes = formattedAttributes
      ? formattedAttributes.content[contentElementIndex] || formattedAttributes.global
      : null;
    const fieldName = fieldInfo.fieldName;
    const fieldLabel = fieldInfo.label || fieldName;
    const fieldValue = availableFormattedAttributes
      ? availableFormattedAttributes[fieldName] == null
        ? ""
        : availableFormattedAttributes[fieldName]
      : "";
    const isDateField = !!(fieldInfo.format && fieldInfo.format.dateFormat);
    const isNumericField = typeof fieldValue === "number" && !isDateField;
    const formattedFieldValue = isNumericField
      ? this._forceLTR(fieldValue)
      : uriUtils.autoLink(fieldValue);
    const valueCellClasses = {
      [CSS.fieldDataDate]: isDateField
    };

    return (
      <tr key={this._buildKey("fields-element-info-row", contentElementIndex)}>
        <th
          key={this._buildKey("fields-element-info-row-header", contentElementIndex)}
          class={CSS.fieldHeader}
          innerHTML={fieldLabel}
        />
        <td
          key={this._buildKey("fields-element-info-row-data", contentElementIndex)}
          class={this.classes(CSS.fieldData, valueCellClasses)}
          innerHTML={formattedFieldValue}
        />
      </tr>
    );
  }

  private _renderFields(contentElement: FieldsContent, contentElementIndex: number): VNode {
    const fieldInfos = contentElement.fieldInfos;

    return fieldInfos ? (
      <div
        key={this._buildKey("fields-element", contentElementIndex)}
        class={this.classes(CSS.fields, CSS.contentElement)}
      >
        <table
          class={CSS.esriTable}
          summary={i18n.fieldsSummary}
          key={this._buildKey("fields-element-table", contentElementIndex)}
        >
          <tbody key={this._buildKey("fields-element-table-body", contentElementIndex)}>
            {fieldInfos.map((fieldInfo) => this._renderFieldInfo(fieldInfo, contentElementIndex))}
          </tbody>
        </table>
      </div>
    ) : null;
  }

  private _shouldOpenInNewTab(url: string = ""): boolean {
    if (!url) {
      return undefined;
    }
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

  private _renderMediaInfoType(options: {
    mediaInfo: MediaInfo;
    contentElementIndex: number;
    activeMediaIndex: number;
  }): VNode {
    const { mediaInfo, contentElementIndex, activeMediaIndex } = options;
    const { title = "" } = mediaInfo;

    if (mediaInfo.type === "image") {
      const info = mediaInfo;
      const { value, refreshInterval } = info;
      const { sourceURL, linkURL } = value;
      const linkOpenInNewTab = this._shouldOpenInNewTab(linkURL);
      const linkTarget = linkOpenInNewTab ? "_blank" : "_self";
      const linkRel = linkTarget === "_blank" ? "noreferrer" : "";
      const refreshIntervalInfo = refreshInterval ? this._mediaInfo.get(contentElementIndex) : null;
      const timestamp = refreshIntervalInfo ? refreshIntervalInfo.timestamp : 0;
      const imgSrc = refreshIntervalInfo ? refreshIntervalInfo.sourceURL : sourceURL;

      const imageNode = (
        <img
          alt={title}
          /* unique key is needed to redraw image node when refreshInterval is defined for a mediaInfo. */
          key={this._buildKey("media-image", contentElementIndex, activeMediaIndex, timestamp)}
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
          key={this._buildKey("media-chart", contentElementIndex, activeMediaIndex)}
          bind={this}
          data-media-info={mediaInfo}
          data-content-element-index={contentElementIndex}
          class={CSS.mediaChart}
          afterCreate={this._getChartDependencies}
        />
      );
    }
    return undefined;
  }

  private _getChartDependencies(chartDiv: HTMLDivElement): void {
    const mediaInfo = chartDiv["data-media-info"] as MediaChartInfo;
    const contentElementIndex = chartDiv["data-content-element-index"] as number;

    const activeChart = this._chartMap.get(contentElementIndex);

    if (activeChart) {
      activeChart.dispose();
    }

    const value = mediaInfo.value;
    const type = mediaInfo.type;

    this._loadingChartsModule = loadChartsModule().then((amCharts4Index) =>
      this._renderChart({
        chartDiv,
        contentElementIndex,
        type,
        value,
        chartsModule: amCharts4Index
      })
    );
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
    series.tooltip.label.wrap = true;
    series.tooltip.label.maxWidth = CHART_TOOLTIP_LABEL_MAX_WIDTH;
    series.tooltip.label.rtl = chart.rtl;

    return chart;
  }

  private _createXYChart(options: ChartOptions): XYChart {
    const { chartDiv, type, value, chartsModule: amCharts4Index } = options;
    const { am4core, am4charts } = amCharts4Index;

    const chart = am4core.create(chartDiv, am4charts.XYChart);
    chart.rtl = isRTL();

    const enableScrollbar = value.series.length > 15;

    if (type === "column-chart") {
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "x";
      categoryAxis.renderer.labels.template.disabled = true;
      categoryAxis.tooltip.label.wrap = true;
      categoryAxis.tooltip.label.maxWidth = CHART_TOOLTIP_LABEL_MAX_WIDTH;
      categoryAxis.tooltip.label.rtl = chart.rtl;

      // amcharts: fix to position tooltip within the chart otherwise it will get cutt off
      // https://amcharts.zendesk.com/hc/en-us/requests/45087
      categoryAxis.tooltip.events.on("sizechanged", () => {
        categoryAxis.tooltip.dy = -categoryAxis.tooltip.contentHeight;
      });

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      const label = valueAxis.renderer.labels.template;
      valueAxis.renderer.minLabelPosition = CHART_RENDERER_MIN_LABEL_POSITION;
      valueAxis.renderer.maxLabelPosition = CHART_RENDERER_MAX_LABEL_POSITION;
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

      categoryAxis.tooltip.label.wrap = true;
      categoryAxis.tooltip.label.maxWidth = CHART_TOOLTIP_LABEL_MAX_WIDTH;
      categoryAxis.tooltip.label.rtl = chart.rtl;

      // amcharts: fix to position tooltip within the chart otherwise it will get cutt off
      // https://amcharts.zendesk.com/hc/en-us/requests/45087
      categoryAxis.tooltip.events.on("sizechanged", () => {
        categoryAxis.tooltip.dx = categoryAxis.tooltip.contentWidth;
      });

      const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      const label = valueAxis.renderer.labels.template;
      valueAxis.renderer.minLabelPosition = CHART_RENDERER_MIN_LABEL_POSITION;
      valueAxis.renderer.maxLabelPosition = CHART_RENDERER_MAX_LABEL_POSITION;
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
      categoryAxis.tooltip.label.wrap = true;
      categoryAxis.tooltip.label.maxWidth = CHART_TOOLTIP_LABEL_MAX_WIDTH;
      categoryAxis.tooltip.label.rtl = chart.rtl;

      // amcharts: fix to position tooltip within the chart otherwise it will get cutt off
      // https://amcharts.zendesk.com/hc/en-us/requests/45087
      categoryAxis.tooltip.events.on("sizechanged", () => {
        categoryAxis.tooltip.dy = -categoryAxis.tooltip.contentHeight;
      });

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      const label = valueAxis.renderer.labels.template;
      valueAxis.renderer.minLabelPosition = CHART_RENDERER_MIN_LABEL_POSITION;
      valueAxis.renderer.maxLabelPosition = CHART_RENDERER_MAX_LABEL_POSITION;
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
    const { contentElementIndex, type, value, chartsModule: amCharts4Index } = options;
    const { am4core } = amCharts4Index;

    am4core.useTheme(amCharts4Index.am4themes_animated);

    const chart =
      type === "pie-chart" ? this._createPieChart(options) : this._createXYChart(options);

    chart.data = value.series.map((entry) => ({
      x: entry.tooltip,
      y: entry.y
    }));

    this._chartMap.set(contentElementIndex, chart);
  }

  private _renderMediaInfo(options: {
    mediaInfo: MediaInfo;
    contentElementIndex: number;
    activeMediaIndex: number;
  }): VNode {
    const { mediaInfo, contentElementIndex, activeMediaIndex } = options;
    const mediaTypeNode = this._renderMediaInfoType({
      mediaInfo,
      contentElementIndex,
      activeMediaIndex
    });

    const titleNode = mediaInfo.title ? (
      <div
        key={this._buildKey("media-title", contentElementIndex)}
        class={CSS.mediaItemTitle}
        innerHTML={mediaInfo.title}
      />
    ) : null;

    const captionNode = mediaInfo.caption ? (
      <div
        key={this._buildKey("media-caption", contentElementIndex)}
        class={CSS.mediaItemCaption}
        innerHTML={mediaInfo.caption}
      />
    ) : null;

    return (
      <div
        key={this._buildKey("media-container", contentElementIndex)}
        class={CSS.mediaItemContainer}
      >
        <div
          key={this._buildKey("media-item-container", contentElementIndex)}
          class={CSS.mediaItem}
        >
          {mediaTypeNode}
        </div>
        {titleNode}
        {captionNode}
      </div>
    );
  }

  private _renderMediaPageButton(
    direction: MediaPageDirection,
    contentElementIndex: number
  ): VNode {
    const isPrevious = direction === "previous";
    const title = isPrevious ? i18n.previous : i18n.next;
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

  private _renderMedia(contentElement: MediaContent, contentElementIndex: number): VNode {
    const mediaInfos = contentElement.mediaInfos as MediaInfo[];
    const total = (mediaInfos && mediaInfos.length) || 0;
    const mediaClasses = {
      [CSS.showMediaPagination]: total > 1
    };

    const previousButtonNode = this._renderMediaPageButton("previous", contentElementIndex);
    const nextButtonNode = this._renderMediaPageButton("next", contentElementIndex);

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
          {this._renderMediaInfo({
            mediaInfo: mediaInfos[activeMediaIndex],
            contentElementIndex,
            activeMediaIndex
          })}
          {nextButtonNode}
        </div>
      </div>
    ) : null;
  }

  private _renderLastEditInfo(): VNode {
    const { visibleElements } = this;
    const { lastEditInfo } = this.viewModel;

    if (!lastEditInfo || !visibleElements.lastEditedInfo) {
      return null;
    }

    const { date, user } = lastEditInfo;

    const nlsString =
      lastEditInfo.type === "edit"
        ? user
          ? i18n.lastEditedByUser
          : i18n.lastEdited
        : user
        ? i18n.lastCreatedByUser
        : i18n.lastCreated;

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

  private _renderText(contentElement: TextContent, contentElementIndex: number): VNode {
    const hasText = contentElement.text;

    return hasText ? (
      <div
        key={this._buildKey("text-element", contentElementIndex)}
        innerHTML={contentElement.text}
        class={this.classes(CSS.text, CSS.contentElement)}
      />
    ) : null;
  }

  private _attachToNode(this: HTMLElement, node: HTMLElement): void {
    const content = this;
    node.appendChild(content);
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
