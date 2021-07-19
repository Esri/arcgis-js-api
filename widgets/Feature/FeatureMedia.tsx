// esri
import PopupTemplate from "esri/../PopupTemplate";

// esri.core
import { eventKey } from "esri/../core/events";
import * as watchUtils from "esri/../core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.popup
import FieldInfo from "esri/../popup/FieldInfo";

// esri.popup.content
import ImageMediaInfo from "esri/../popup/content/ImageMediaInfo";

// esri.popup.content.support
import ChartMediaInfoValueSeries from "esri/../popup/content/support/ChartMediaInfoValueSeries";
import { MediaInfo, MediaChartInfo } from "esri/../popup/content/support/mediaInfoTypes";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.Feature
import { FeatureSupportedLayer, RelatedInfo } from "esri/widgets/interfaces";

// esri.widgets.Feature.FeatureMedia
import FeatureMediaViewModel from "esri/widgets/FeatureMedia/FeatureMediaViewModel";

// esri.widgets.Feature.support
import FeatureElementInfo from "esri/widgets/support/FeatureElementInfo";
import { shouldOpenInNewTab } from "esri/widgets/support/featureUtils";

// esri.widgets.Feature.t9n
import type FeatureMessages from "esri/widgets/t9n/Feature";

// esri.widgets.support
import { AM4Charts, PieChart, XYChart, AM4Tooltip, AM4Core, ColorSet } from "esri/support/chartTypes";
import { loadChartsModule, getColorSet } from "esri/support/chartUtils";
import { VNode } from "esri/support/interfaces";
import { tsx, messageBundle } from "esri/support/widget";
import { isRTL, isDarkTheme } from "esri/support/widgetUtils";

const CSS = {
  base: "esri-feature-media",
  mediaContainer: "esri-feature-media__container",
  mediaItemContainer: "esri-feature-media__item-container",
  mediaItem: "esri-feature-media__item",
  mediaItemTitle: "esri-feature-media__item-title",
  mediaItemCaption: "esri-feature-media__item-caption",
  mediaPrevious: "esri-feature-media__previous",
  mediaPreviousIconLTR: "esri-feature-media__previous-icon",
  mediaPreviousIconRTL: "esri-feature-media__previous-icon--rtl",
  mediaNext: "esri-feature-media__next",
  mediaNextIconLTR: "esri-feature-media__next-icon",
  mediaNextIconRTL: "esri-feature-media__next-icon--rtl",
  mediaChart: "esri-feature-media__chart",
  mediaButton: "esri-feature-media__button",
  mediaIcon: "esri-feature-media__icon",
  // common
  iconLeftTriangleArrow: "esri-icon-left-triangle-arrow",
  iconRightTriangleArrow: "esri-icon-right-triangle-arrow"
};

type MediaPageDirection = "previous" | "next";

type ChartOptions = {
  chartDiv: HTMLDivElement;
  chartsModule: AM4Charts;
  mediaInfo: MediaChartInfo;
};

interface RefreshIntervalInfo {
  timestamp: number;
  sourceURL: string;
}

const CHART_RENDERER_MIN_LABEL_POSITION = 0.05;
const CHART_RENDERER_MAX_LABEL_POSITION = 0.95;
const CHART_SCROLLBAR_THRESHOLD = 15;

@subclass("esri.widgets.Feature.FeatureMedia")
class FeatureMedia extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    this._featureElementInfo = new FeatureElementInfo();

    this.own(
      watchUtils.init(this, ["viewModel.activeMediaInfo", "viewModel.activeMediaInfoIndex"], () =>
        this._setupMediaRefreshTimer()
      ),
      watchUtils.init(this, ["viewModel.description", "viewModel.title"], () =>
        this._setupFeatureElementInfo()
      )
    );
  }

  destroy(): void {
    this._clearMediaRefreshTimer();
    this._featureElementInfo.destroy();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _refreshTimer: number = null;
  private _refreshIntervalInfo: RefreshIntervalInfo = null;
  private _featureElementInfo: FeatureElementInfo = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  // attributes
  //----------------------------------

  @aliasOf("viewModel.attributes")
  attributes: HashMap<any> = null;

  //----------------------------------
  // activeMediaInfoIndex
  //----------------------------------

  @aliasOf("viewModel.activeMediaInfoIndex")
  activeMediaInfoIndex: number = null;

  //----------------------------------
  // description
  //----------------------------------

  @aliasOf("viewModel.description")
  description: string = null;

  //----------------------------------
  // fieldInfoMap
  //----------------------------------

  @aliasOf("viewModel.fieldInfoMap")
  fieldInfoMap: Map<string, FieldInfo> = null;

  //----------------------------------
  // layer
  //----------------------------------

  @aliasOf("viewModel.layer")
  layer: FeatureSupportedLayer = null;

  //----------------------------------
  // mediaInfos
  //----------------------------------

  @aliasOf("viewModel.mediaInfos")
  mediaInfos: MediaInfo[] = null;

  //----------------------------------
  // popupTemplate
  //----------------------------------

  @aliasOf("viewModel.popupTemplate")
  popupTemplate: PopupTemplate = null;

  //----------------------------------
  // relatedInfos
  //----------------------------------

  @aliasOf("viewModel.relatedInfos")
  relatedInfos: Map<string, RelatedInfo> = null;

  //----------------------------------
  // title
  //----------------------------------

  @aliasOf("viewModel.title")
  title: string = null;

  //----------------------------------
  // viewModel
  //----------------------------------

  @property({ type: FeatureMediaViewModel })
  viewModel = new FeatureMediaViewModel();

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
  @messageBundle("esri/widgets/Feature/t9n/Feature")
  messages: FeatureMessages = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    return (
      <div bind={this} class={CSS.base} onkeyup={this._handleMediaKeyup}>
        {this._featureElementInfo?.render()}
        {this.renderMedia()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderMedia(): VNode {
    const { formattedMediaInfoCount } = this.viewModel;

    return formattedMediaInfoCount ? (
      <div key="media-element-container" class={CSS.mediaContainer}>
        {this.renderMediaPageButton("previous")}
        {this.renderMediaInfo()}
        {this.renderMediaPageButton("next")}
      </div>
    ) : null;
  }

  protected renderImageMediaInfo(info: ImageMediaInfo): VNode {
    const { _refreshIntervalInfo } = this;
    const { activeMediaInfoIndex, formattedMediaInfoCount } = this.viewModel;
    const { value, refreshInterval, altText, title, type } = info;
    const { sourceURL, linkURL } = value;
    const linkOpenInNewTab = shouldOpenInNewTab(linkURL);
    const linkTarget = linkOpenInNewTab ? "_blank" : "_self";
    const linkRel = linkTarget === "_blank" ? "noreferrer" : "";
    const refreshIntervalInfo = refreshInterval ? _refreshIntervalInfo : null;
    const timestamp = refreshIntervalInfo ? refreshIntervalInfo.timestamp : 0;
    const imgSrc = refreshIntervalInfo ? refreshIntervalInfo.sourceURL : sourceURL;

    const imageNode = (
      <img
        alt={altText || title}
        /* unique key is needed to redraw image node when refreshInterval is defined for a mediaInfo. */
        key={`media-${type}-${activeMediaInfoIndex}-${formattedMediaInfoCount}-${timestamp}`}
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

  protected renderChartMediaInfo(info: MediaChartInfo): VNode {
    const { activeMediaInfoIndex, formattedMediaInfoCount } = this.viewModel;

    return (
      <div
        key={`media-${info.type}-${activeMediaInfoIndex}-${formattedMediaInfoCount}`}
        bind={this}
        class={CSS.mediaChart}
        afterCreate={this._getChartDependencies}
      />
    );
  }

  protected renderMediaInfoType(): VNode {
    const { activeMediaInfo } = this.viewModel;

    if (!activeMediaInfo) {
      return null;
    }

    if (activeMediaInfo.type === "image") {
      return this.renderImageMediaInfo(activeMediaInfo);
    }

    if (activeMediaInfo.type.indexOf("chart") !== -1) {
      return this.renderChartMediaInfo(activeMediaInfo);
    }

    return null;
  }

  protected renderMediaInfo(): VNode {
    const { activeMediaInfo } = this.viewModel;

    if (!activeMediaInfo) {
      return null;
    }

    const titleNode = activeMediaInfo.title ? (
      <div key={"media-title"} class={CSS.mediaItemTitle} innerHTML={activeMediaInfo.title} />
    ) : null;

    const captionNode = activeMediaInfo.caption ? (
      <div key={"media-caption"} class={CSS.mediaItemCaption} innerHTML={activeMediaInfo.caption} />
    ) : null;

    return (
      <div key={"media-container"} class={CSS.mediaItemContainer}>
        <div key={"media-item-container"} class={CSS.mediaItem}>
          {this.renderMediaInfoType()}
        </div>
        {titleNode}
        {captionNode}
      </div>
    );
  }

  protected renderMediaPageButton(direction: MediaPageDirection): VNode {
    if (this.viewModel.formattedMediaInfoCount < 2) {
      return null;
    }

    const isPrevious = direction === "previous";
    const title = isPrevious ? this.messages.previous : this.messages.next;
    const buttonClasses = isPrevious
      ? this.classes(CSS.mediaButton, CSS.mediaPrevious)
      : this.classes(CSS.mediaButton, CSS.mediaNext);
    const LTRIconClasses = isPrevious
      ? this.classes(CSS.mediaIcon, CSS.mediaPreviousIconLTR, CSS.iconLeftTriangleArrow)
      : this.classes(CSS.mediaIcon, CSS.mediaNextIconLTR, CSS.iconRightTriangleArrow);
    const RTLIconClasses = isPrevious
      ? this.classes(CSS.mediaIcon, CSS.mediaPreviousIconRTL, CSS.iconRightTriangleArrow)
      : this.classes(CSS.mediaIcon, CSS.mediaNextIconRTL, CSS.iconLeftTriangleArrow);
    const keyName = isPrevious ? "media-previous" : "media-next";
    const buttonClick = isPrevious ? this._previous : this._next;

    return (
      <button
        type="button"
        key={keyName}
        title={title}
        aria-label={title}
        tabIndex={0}
        class={buttonClasses}
        bind={this}
        onclick={buttonClick}
      >
        <span aria-hidden="true" class={LTRIconClasses} />
        <span aria-hidden="true" class={RTLIconClasses} />
      </button>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _setupFeatureElementInfo(): void {
    const { description, title } = this;

    this._featureElementInfo.set({ description, title });
  }

  private _next(): void {
    this.viewModel.next();
  }

  private _previous(): void {
    this.viewModel.previous();
  }

  private async _getChartDependencies(chartDiv: HTMLDivElement): Promise<void> {
    const amCharts4Index = await loadChartsModule();

    const { activeMediaInfo } = this.viewModel;

    this._renderChart({
      chartDiv,
      mediaInfo: activeMediaInfo as MediaChartInfo,
      chartsModule: amCharts4Index
    });
  }

  private _handleMediaKeyup(event: KeyboardEvent): void {
    const key = eventKey(event);

    if (key === "ArrowLeft") {
      event.stopPropagation();
      this.viewModel.previous();
    }

    if (key === "ArrowRight") {
      event.stopPropagation();
      this.viewModel.next();
    }
  }

  private _renderChart(options: ChartOptions): void {
    const { chartsModule: amCharts4Index, chartDiv, mediaInfo } = options;
    const { value, type } = mediaInfo;
    const { am4core } = amCharts4Index;
    const defaultColorSet = getColorSet(am4core);

    function am4themes_esriColorSet(target: ColorSet): void {
      if (target instanceof am4core.ColorSet && defaultColorSet) {
        target.list = defaultColorSet;
      }
    }

    if (isDarkTheme()) {
      am4core.useTheme(amCharts4Index.am4themes_dark);
    }

    am4core.useTheme(amCharts4Index.am4themes_animated);
    am4core.useTheme(am4themes_esriColorSet);

    const chart =
      type === "pie-chart" ? this._createPieChart(options) : this._createXYChart(options);

    chartDiv.setAttribute("aria-label", mediaInfo.altText || mediaInfo.title);

    chart.data = value.series
      .map((entry) => ({
        tooltip: entry.tooltip,
        value: entry.value
      }))
      .filter((data) => (type === "pie-chart" ? data.value > 0 : true));
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
    series.dataFields.value = "value";
    series.dataFields.category = "tooltip";
    this._customizeChartTooltip(series.tooltip, am4core);

    return chart;
  }

  private _getMinSeriesValue(series: ChartMediaInfoValueSeries[]): number {
    let min: number = 0;

    series.forEach((entry) => (min = Math.min(entry.value, min)));

    return min;
  }

  private _createColumnChart(chart: XYChart, options: ChartOptions): void {
    const { chartsModule: amCharts4Index, mediaInfo } = options;
    const { value } = mediaInfo;
    const { am4core, am4charts } = amCharts4Index;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tooltip";
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
    series.dataFields.valueY = "value";
    series.dataFields.categoryX = "tooltip";

    chart.cursor = new am4charts.XYCursor();

    if (value.series.length > CHART_SCROLLBAR_THRESHOLD) {
      chart.scrollbarX = new am4core.Scrollbar();
    }
  }

  private _createBarChart(chart: XYChart, options: ChartOptions): void {
    const { chartsModule: amCharts4Index, mediaInfo } = options;
    const { value } = mediaInfo;
    const { am4core, am4charts } = amCharts4Index;

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tooltip";
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
    series.dataFields.valueX = "value";
    series.dataFields.categoryY = "tooltip";

    chart.cursor = new am4charts.XYCursor();

    if (value.series.length > CHART_SCROLLBAR_THRESHOLD) {
      chart.scrollbarY = new am4core.Scrollbar();
    }
  }

  private _createLineChart(chart: XYChart, options: ChartOptions): void {
    const { chartsModule: amCharts4Index, mediaInfo } = options;
    const { value } = mediaInfo;
    const { am4core, am4charts } = amCharts4Index;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tooltip";
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
    series.dataFields.categoryX = "tooltip";
    series.dataFields.valueY = "value";

    chart.cursor = new am4charts.XYCursor();

    if (value.series.length > CHART_SCROLLBAR_THRESHOLD) {
      chart.scrollbarX = new am4core.Scrollbar();
    }
  }

  private _createXYChart(options: ChartOptions): XYChart {
    const { chartDiv, chartsModule: amCharts4Index, mediaInfo } = options;
    const { type } = mediaInfo;
    const { am4core, am4charts } = amCharts4Index;

    const chart = am4core.create(chartDiv, am4charts.XYChart);
    chart.rtl = isRTL();

    if (type === "column-chart") {
      this._createColumnChart(chart, options);
    }

    if (type === "bar-chart") {
      this._createBarChart(chart, options);
    }

    if (type === "line-chart") {
      this._createLineChart(chart, options);
    }

    return chart;
  }

  private _clearMediaRefreshTimer(): void {
    const { _refreshTimer } = this;

    if (!_refreshTimer) {
      return;
    }

    clearTimeout(_refreshTimer);

    this._refreshTimer = null;
  }

  private _updateMediaInfoTimestamp(sourceURL: string): void {
    const timestamp = Date.now();

    this._refreshIntervalInfo = {
      timestamp,
      sourceURL: this._getImageSource(sourceURL, timestamp)
    };

    this.scheduleRender();
  }

  private _setupMediaRefreshTimer(): void {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo } = this.viewModel;

    if (!activeMediaInfo || activeMediaInfo.type !== "image" || !activeMediaInfo.refreshInterval) {
      return;
    }

    this._setRefreshTimeout(activeMediaInfo);
  }

  private _setRefreshTimeout(mediaInfo: ImageMediaInfo): void {
    const { refreshInterval, value } = mediaInfo;

    if (!refreshInterval) {
      return;
    }

    const intervalInMs = refreshInterval * 60000;
    this._updateMediaInfoTimestamp(value.sourceURL);

    const timerId = setInterval(() => {
      this._updateMediaInfoTimestamp(value.sourceURL);
    }, intervalInMs);

    this._refreshTimer = timerId;
  }

  private _getImageSource(sourceURL: string, timestamp: number): string {
    const querySeparator = sourceURL.indexOf("?") !== -1 ? "&" : "?";
    const [url, hash = ""] = sourceURL.split("#");
    const hashSeparator = hash ? "#" : "";
    return `${url}${querySeparator}timestamp=${timestamp}${hashSeparator}${hash}`;
  }
}

export default FeatureMedia;
