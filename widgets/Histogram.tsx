/**
 * Renders a histogram to visualize the spread of a dataset based on [bins](#bins) representing buckets, or sub-ranges, of
 * data. Each {@link module:esri/widgets/Histogram~Bin bin} is defined by a minimum and maximum value and a total count.
 *
 * You can generate the underlying histogram's bins with the {@link module:esri/smartMapping/statistics/histogram}
 * module. In this scenario, you can use the [fromHistogramResult()](#fromHistogramResult) helper method to conveniently
 * create the histogram from the result object.
 *
 * ```js
 * const params = {
 *   layer: povLayer,
 *   field: "POP_POVERTY",
 *   normalizationField: "TOTPOP_CY",
 *   numBins: 30
 * };
 *
 * histogram(params)
 *   .then(function(histogramResult) {
 *      const histogram = Histogram.fromHistogramResult(histogramResult);
 *      histogram.container = "histogram";
 *   })
 *    .catch(function(error) {
 *      console.log("there was an error: ", error);
 *    });
 * ```
 *
 * Other properties of this widget allow to display meaningful values on the histogram, such as the [average](#average)
 * and the [dataLines](#dataLines) properties.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![Histogram with annotations](../../assets/img/apiref/widgets/histogram-basic-labels.png "Histogram with annotations")
 *
 * The [barCreatedFunction](#barCreatedFunction) property may be used to style the histogram bins based on the color
 * of features in the renderer of a layer associated with the histogram.
 *
 * ![Histogram with color](../../assets/img/apiref/widgets/histogram-colors.png "Histogram with color")
 *
 * @module esri/widgets/Histogram
 * @since 4.12
 *
 * @see module:esri/smartMapping/statistics/histogram
 */

// esri
import { substitute } from "esri/intl";

// esri.core
import { isSome } from "esri/core/maybe";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.renderers.smartMapping.statistics
import { Bin, HistogramResult } from "esri/renderers/smartMapping/statistics/interfaces";

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Histogram
import HistogramViewModel = require("esri/widgets/Histogram/HistogramViewModel");
import {
  BarCreatedFunction,
  DataLineInfos,
  DataLineCreatedFunction,
  State
} from "esri/widgets/Histogram/interfaces";

// esri.widgets.Histogram.t9n
import HistogramMessages from "esri/widgets/Histogram/t9n/Histogram";

// esri.widgets.support
import { LabelFormatFunction, VNode } from "esri/widgets/support/interfaces";
import { messageBundle, renderable, storeNode, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-histogram",
  horizontalLayout: "esri-histogram--horizontal",
  verticalLayout: "esri-histogram--vertical",

  content: "esri-histogram__content",
  svg: "esri-histogram__svg",

  bar: "esri-histogram__bar",
  bars: "esri-histogram__bars",
  label: "esri-histogram__label",
  dataLines: "esri-histogram__data-lines",
  dataLinesSubgroup: "esri-histogram__data-lines-subgroup",
  dataLine: "esri-histogram__data-line",
  averageLabel: "esri-histogram__average-label",
  averageDataLine: "esri-histogram__average-data-line",
  averageSymbol: "esri-histogram__average-symbol",

  // common
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

type Layout = "vertical" | "horizontal";

type HistogramParams = Partial<
  Pick<
    Histogram,
    | "average"
    | "barCreatedFunction"
    | "bins"
    | "dataLines"
    | "dataLineCreatedFunction"
    | "labelFormatFunction"
    | "layout"
    | "max"
    | "min"
    | "viewModel"
  >
>;

@subclass("esri.widgets.Histogram")
class Histogram extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Histogram
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * const histogram = new Histogram({
   *   bins: [{
   *     minValue: 0,
   *     maxValue: 20,
   *     count: 1
   *   }, {
   *     minValue: 21,
   *     maxValue: 40,
   *     count: 60
   *   },{
   *     minValue: 41,
   *     maxValue: 60,
   *     count: 239
   *   },{
   *     minValue: 61,
   *     maxValue: 80,
   *     count: 88
   *   },{
   *     minValue: 81,
   *     maxValue: 100,
   *     count: 20
   *   }],
   *   max: 100,
   *   min: 0,
   *   average: 44
   * });
   */
  constructor(params?: HistogramParams, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _containerNode: HTMLElement = null;

  private _defaultBarColor: string = "#d8d8d8";

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  average
  //----------------------------------

  /**
   * The statistical average of the data in the histogram. You would typically
   * get this value from the `avg` property of
   * {@link module:esri/smartMapping/statistics/summaryStatistics#SummaryStatisticsResult SummaryStatisticsResult},
   * which is the result of the
   * {@link module:esri/smartMapping/statistics/summaryStatistics} function.
   *
   * When set, this value will render on the histogram with a symbol indicating it is the average.
   *
   * @name average
   * @instance
   * @type {number}
   *
   * @see {@link module:esri/smartMapping/statistics/summaryStatistics}
   *
   * @example
   * // sets result returned from a smart mapping method
   * // to the histogram
   * histogram.average = response.statistics.avg;
   *
   * @example
   * histogram.average = 34.5;
   */
  @aliasOf("viewModel.average") average: number = null;

  /**
   * Function used to style or attach custom interaction to histogram bars. This function should be set to the
   * [barCreatedFunction](#barCreatedFunction) property. It fires
   * for each bar when it is created.
   *
   * @callback module:esri/widgets/Histogram~BarCreatedFunction
   *
   * @param {number} index - The index of the histogram bar. This directly corresponds
   *   to the index of the associated [bin](#bins).
   * @param {SVGElement} element - The histogram bar element to style.
   */

  //----------------------------------
  //  barCreatedFunction
  //----------------------------------

  /**
   * Function for styling bars representing histogram bins.
   * This can be used to color bins with the same color of features in the
   * view that fall into bins representing the same range of data.
   *
   * @name barCreatedFunction
   * @instance
   * @type {module:esri/widgets/Histogram~BarCreatedFunction}
   *
   * @example
   * histogram.barCreatedFunction = function(index, element){
   *   var bin = histogram.bins[index];
   *   var midValue = ((bin.maxValue - bin.minValue) / 2) + bin.minValue;
   *   // colors the histogram bins with a custom function
   *   // (not defined here for brevity of the snippet) for interpolating
   *   // colors from data values to match the legend
   *   var color = getColorFromValue(midValue);
   *   element.setAttribute("fill", color.toHex());
   * };
   */
  @property()
  @renderable()
  barCreatedFunction: BarCreatedFunction = null;

  /**
   * Represents the bin of a histogram. A bin consists of
   * a minimum and a maximum value and a count. It indicates the
   * number of values in a dataset that lie between the
   * min and max values.
   *
   * @typedef module:esri/widgets/Histogram~Bin
   *
   * @property {number} count - The number of values in a dataset that are
   *   contained between the indicated `minValue` and `maxValue`.
   * @property {number} minValue - The minimum value (or bound) of the bin.
   * @property {number} maxValue - The maximum value (or bound) of the bin.
   */

  //----------------------------------
  //  bins
  //----------------------------------

  /**
   * An array of objects representing each bin in the histogram. This
   * information is typically returned from the
   * {@link module:esri/smartMapping/statistics/histogram} function.
   *
   * @name bins
   * @instance
   * @type {module:esri/widgets/Histogram~Bin[]}
   *
   * @example
   * // sets the bins of the histogram from the bins in the histogram() result
   * histogram.bins = histogramResult.bins;
   *
   * @example
   * // Creates a histogram with 7 bins.
   * histogram.bins = [
   *   { minValue: 0, maxValue: 10, count: 4 },
   *   { minValue: 10.1, maxValue: 20, count: 14 },
   *   { minValue: 20.1, maxValue: 30, count: 9 },
   *   { minValue: 30.1, maxValue: 40, count: 34 },
   *   { minValue: 40.1, maxValue: 50, count: 351 },
   *   { minValue: 50.1, maxValue: 60, count: 100 },
   *   { minValue: 60.1, maxValue: 70, count: 1 }
   * ];
   */
  @aliasOf("viewModel.bins") bins: Bin[] = null;

  //----------------------------------
  //  dataLines
  //----------------------------------

  /**
   * When set, renders lines on the histogram that indicate important or
   * meaningful values to the end user.
   *
   * @name dataLines
   * @instance
   * @type {Object[]}
   *
   * @property {number} value - The value on the data axis of the histogram where a line will be rendered.
   * @property {string | number} [label] - The label associated with the line.
   *
   * @example
   * // will render lines at the 25th, 50th, 75th, and 99th percentiles
   * histogram.dataLines = [{
   *   value: 30,
   *   label: "25 pctl"
   * }, {
   *   value: 45,
   *   label: "50 pctl"
   * }, {
   *   value: 65,
   *   label: "75 pctl"
   * }, {
   *   value: 89,
   *   label: "99 pctl"
   * }];
   *
   * @example
   * // calculate standard deviations from mean using stats
   * // returned from smart mapping statistic methods
   * const stddevs = smartMappingUtils.getDeviationValues(stats.stddev, stats.avg, 2);
   * histogram.dataLines = stddevs.map(function(stddev){
   *   return {
   *     value: stddev
   *   };
   * });
   */
  @property()
  @renderable()
  dataLines: DataLineInfos[] = null;

  /**
   * Function used to style [dataLines](#dataLines). This function should be set to the
   * [dataLineCreatedFunction](#dataLineCreatedFunction) property. It fires
   * when each data line is created.
   *
   * @callback module:esri/widgets/Histogram~DataLineCreatedFunction
   *
   * @param {SVGElement} lineElement - The SVG element representing the data line rendered
   *   on the histogram.
   * @param {SVGElement} [labelElement] - The SVG element representing the label
   *    rendered on the histogram for the associated line element.
   * @param {number} [index] - The index of the data line.
   */

  //----------------------------------
  //  dataLineCreatedFunction
  //----------------------------------

  /**
   * Function that fires each time a data line is created.
   * You can use this to style individual [dataLines](#dataLines) on the data axis.
   *
   * @name dataLineCreatedFunction
   * @instance
   * @type {module:esri/widgets/Histogram~DataLineCreatedFunction}
   *
   * @example
   * histogram.dataLineCreatedFunction = function (lineElement, labelElement, index) {
   *   lineElement.setAttribute("y2", "25%");
   *   lineElement.classList.add("line-style");
   * };
   */
  @property()
  @renderable()
  dataLineCreatedFunction: DataLineCreatedFunction = null;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label. This label displays when it is
   * used within another widget, such as the {@link module:esri/widgets/Expand}
   * or {@link module:esri/widgets/LayerList} widgets.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  /**
   * Function used to format labels. This function should be set to the
   * [labelFormatFunction](#labelFormatFunction) property. This function fires
   * every time a label is created or updated on the histogram.
   *
   * @callback module:esri/widgets/Histogram~LabelFormatter
   *
   * @param {number} value - The value for the line on the data axis.
   * @param {string} [type] - The label type. Currently, the only supported type is `average`.
   * @param {number} [index] - The index of the data line (or [value](#values)).
   *
   * @return {string} The formatted value of the label.
   */

  //----------------------------------
  //  labelFormatFunction
  //----------------------------------

  /**
   * A function used to format labels on the histogram. Overrides the default label formatter.
   *
   * @name labelFormatFunction
   * @instance
   * @type {module:esri/widgets/Histogram~LabelFormatter}
   * @example
   * // For thumb values, rounds each label to whole numbers.
   * slider.labelFormatFunction = function(value) {
   *   return value.toFixed(0);
   * }
   */
  @aliasOf("viewModel.labelFormatFunction") labelFormatFunction: LabelFormatFunction = null;

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Determines the orientation of the Histogram widget.
   *
   * @name layout
   * @instance
   * @default horizontal
   * @type {"vertical" | "horizontal"}
   *
   * @example
   * histogram.layout = "vertical";
   */
  @property({ value: "horizontal" })
  set layout(value: Layout) {
    if (value !== "vertical") {
      value = "horizontal";
    }

    this._set("layout", value);
  }

  //----------------------------------
  //  max
  //----------------------------------

  /**
   * The maximum value or bound of the entire histogram. This
   * should match the maximum bound of the last [bin](#bins).
   *
   * @name max
   * @instance
   * @type {number}
   *
   * @example
   * histogram.max = 100;
   *
   * @example
   * // sets result returned from a smart mapping method
   * // to the histogram
   * histogram.max = response.statistics.max;
   */
  @aliasOf("viewModel.max") max: number = null;

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
  @messageBundle("esri/widgets/Histogram/t9n/Histogram")
  messages: HistogramMessages = null;

  //----------------------------------
  //  min
  //----------------------------------

  /**
   * The minimum value or bound of the entire histogram. This
   * should match the minimum bound of the first [bin](#bins).
   *
   * @name min
   * @instance
   * @type {number}
   *
   * @example
   * histogram.min = 0;
   *
   * @example
   * // sets result returned from a smart mapping method
   * // to the histogram
   * histogram.min = response.statistics.min;
   */
  @aliasOf("viewModel.min") min: number = null;

  //----------------------------------
  //  state
  //----------------------------------

  /**
   * The state of the widget.
   *
   * @name state
   * @instance
   * @type {"ready" | "disabled"}
   * @readonly
   */
  @aliasOf("viewModel.state") state: State = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the Histogram widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Histogram/HistogramViewModel}
   * class to access all properties and methods on the Histogram widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Histogram/HistogramViewModel}
   */
  @property()
  @renderable([
    "viewModel.average",
    "viewModel.bins",
    "viewModel.labelFormatFunction",
    "viewModel.max",
    "viewModel.min",
    "viewModel.state"
  ])
  viewModel: HistogramViewModel = new HistogramViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * A convenience function used to create a Histogram widget instance from the result of
   * the {@link module:esri/smartMapping/statistics/histogram} statistics
   * function.
   *
   * @method fromHistogramResult
   * @static
   *
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} result -
   *   The result of the {@link module:esri/smartMapping/statistics/histogram} statistics
   *   function used to generate a histogram for a field or expression from a layer.
   * @return {module:esri/widgets/Histogram} The histogram instance representing the histogram
   *   returned from {@link module:esri/smartMapping/statistics/histogram}.
   *
   * @example
   * var colorParams = {
   *   layer: povLayer,
   *   basemap: map.basemap,
   *   field: "POP_POVERTY",
   *   normalizationField: "TOTPOP_CY",
   *   theme: "above-and-below"
   * };
   *
   * var stats = null;
   *
   * colorRendererCreator
   *   .createContinuousRenderer(colorParams)
   *   .then(function(response) {
   *      // set the renderer to the layer and add it to the map
   *      stats = response.statistics;
   *
   *      return histogram({
   *        layer: povLayer,
   *        field: "POP_POVERTY",
   *        normalizationField: "TOTPOP_CY",
   *        numBins: 100
   *      });
   *    })
   *    .then(function(histogramResult) {
   *
   *      var histogram = Histogram.fromHistogramResult(histogramResult);
   *      histogram.container = "histogram";
   *      histogram.average = stats.avg;
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  static fromHistogramResult(result: HistogramResult): Histogram {
    const { bins, maxValue: max, minValue: min } = result;

    return new Histogram({ bins, max, min });
  }

  render(): VNode {
    const { label, layout, state } = this;
    const baseClasses = this.classes(
      CSS.base,
      CSS.esriWidget,
      layout === "horizontal" ? CSS.horizontalLayout : CSS.verticalLayout,
      state === "disabled" ? CSS.disabled : null
    );

    return (
      <div
        aria-label={label}
        afterCreate={storeNode}
        bind={this}
        class={baseClasses}
        data-node-ref="_containerNode"
      >
        {state === "ready" ? this.renderContent() : null}
      </div>
    );
  }

  protected renderContent(): VNode {
    if (!this._containerNode) {
      return undefined;
    }

    return (
      <div class={CSS.content}>
        <svg class={CSS.svg} xmlns="http://www.w3.org/2000/svg">
          {this.renderBarsGroup()}
          {this.renderLinesGroup()}
        </svg>
      </div>
    );
  }

  protected renderBarsGroup(): VNode {
    return <g class={this.classes(CSS.bars)}>{this.renderBars()}</g>;
  }

  protected renderBars(): VNode {
    const {
      layout,
      viewModel: { binRange, range }
    } = this;

    if (!binRange || !range) {
      return undefined;
    }

    const rangeRatio = binRange / range;
    const [totalHeight, totalWidth] = this._getContainerDimensions();

    if (totalHeight === 0 && totalWidth === 0) {
      return undefined;
    }

    // Handle issue with dynamic height
    if (totalHeight === 0 && totalWidth !== 0) {
      this.scheduleRender();
      return undefined;
    }

    const [relHeight, relWidth] =
      layout === "vertical"
        ? [totalHeight * rangeRatio, totalWidth]
        : [totalHeight, totalWidth * rangeRatio];

    return this._getBarDimensions(relHeight, relWidth).map(([barHeight, barWidth], index) =>
      this.renderBar(index, barHeight, barWidth)
    );
  }

  protected renderBar(index: number, barHeight: number, barWidth: number): VNode {
    const {
      bins,
      layout,
      max,
      messages,
      viewModel: { range }
    } = this;

    const [totalHeight, totalWidth] = this._getContainerDimensions();
    const rBins = bins.slice();
    const bin = rBins[index];
    const { count, maxValue, minValue } = bin;
    const diffMax = max - maxValue;
    const [x, y] =
      layout === "vertical"
        ? [0, diffMax * (totalHeight / range)]
        : [totalWidth - barWidth - diffMax * (totalWidth / range), totalHeight - barHeight];

    const ariaLabel = substitute(messages.barLabel, { count, maxValue, minValue });

    return (
      <rect
        aria-label={ariaLabel}
        afterCreate={this._afterBarCreate}
        bind={this}
        class={CSS.bar}
        data-index={index}
        fill={this._defaultBarColor}
        height={barHeight}
        role="img"
        shape-rendering="crispEdges"
        stroke-width="0"
        width={barWidth}
        x={x}
        y={y}
      />
    );
  }

  protected renderLinesGroup(): VNode {
    return (
      <g class={this.classes(CSS.dataLines)}>
        {this.renderAverageLine()}
        {this.renderCustomLines()}
      </g>
    );
  }

  protected renderAverageLine(): VNode {
    const { average } = this;

    if (!isSome(average)) {
      return undefined;
    }

    const labelNodes: VNode = [
      <tspan class={this.classes(CSS.averageSymbol)}>x̄ </tspan>,
      <tspan class={this.classes(CSS.averageLabel)}>
        {this.labelFormatFunction ? this.labelFormatFunction(average, "average") : average}
      </tspan>
    ];

    return (
      <g
        afterCreate={this._afterLinesSubgroupCreate}
        bind={this}
        class={this.classes(CSS.dataLinesSubgroup)}
      >
        {this.renderLine(average, this.classes(CSS.averageDataLine))}
        {this.renderLabel(average, labelNodes)}
      </g>
    );
  }

  // Generate user-defined lines and associated labels
  protected renderCustomLines(): VNode {
    if (!this.dataLines || !this.dataLines.length) {
      return undefined;
    }

    return this.dataLines.map(({ value, label }, index) =>
      this.renderLineSubgroup(index, value, label)
    );
  }

  protected renderLineSubgroup(index: number, value: number, label: string | VNode): VNode {
    return (
      <g
        afterCreate={this._afterLinesSubgroupCreate}
        bind={this}
        class={this.classes(CSS.dataLinesSubgroup)}
        data-index={index}
      >
        {this.renderLine(value)}
        {this.renderLabel(value, label)}
      </g>
    );
  }

  protected renderLine(value: number, classes?: string): VNode {
    const [x1, x2, y1, y2] = this._getLinePosition(value);

    return (
      <line
        class={this.classes(CSS.dataLine, classes)}
        x1={x1}
        x2={x2}
        y1={y1}
        y2={y2}
        shape-rendering="crispEdges"
      />
    );
  }

  protected renderLabel(value: number, label: string | VNode, classes?: string): VNode {
    const [x, y] = this._getLabelPosition(value);
    const labelOffset = 2;

    return (
      <text
        class={this.classes(CSS.label, classes)}
        text-anchor="end" // Aligns label to container; grows towards data axis
        transform={this.layout === "horizontal" ? "rotate(270)" : null}
        x={x}
        y={y - labelOffset}
      >
        {label}
      </text>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterBarCreate(element: SVGElement): void {
    if (this.barCreatedFunction) {
      // IE11 requires using getAttribute
      const index = element.dataset
        ? parseInt(element.dataset.index, 10)
        : element.getAttribute("data-index")
        ? parseInt(element.getAttribute("data-index"), 10)
        : null;

      this.barCreatedFunction(!isNaN(index) ? index : null, element);
    }
  }

  private _afterLinesSubgroupCreate(element: SVGElement): void {
    if (this.dataLineCreatedFunction) {
      const index = element.dataset
        ? parseInt(element.dataset.index, 10)
        : element.getAttribute("data-index")
        ? parseInt(element.getAttribute("data-index"), 10)
        : null;

      const lineElement = element.childNodes[0] as SVGElement;
      const labelElement = element.childNodes[1] ? (element.childNodes[1] as SVGElement) : null;

      this.dataLineCreatedFunction(lineElement, labelElement, !isNaN(index) ? index : null);
    }
  }

  private _getContainerDimensions(): [number, number] {
    const { _containerNode } = this;

    return _containerNode ? [_containerNode.offsetHeight, _containerNode.offsetWidth] : [0, 0];
  }

  private _getBarDimensions(height: number, width: number): number[][] {
    const { bins, layout } = this;
    const counts = bins ? bins.map((bin) => bin.count) : [];
    const max = Math.max.apply(Math, counts);

    return counts.map((count) =>
      layout === "vertical"
        ? [height / counts.length, max !== 0 ? (count / max) * width : 0]
        : [max !== 0 ? (count / max) * height : 0, width / counts.length]
    );
  }

  private _getLinePosition(value: number): (number | string)[] {
    const {
      layout,
      min,
      viewModel: { range }
    } = this;

    // Get position of line, using shifted value as percent of total range
    // (e.g. value 10 of 0-100 or value 0 of -10 to 90 should be treated the same)
    // Use ratio to get relative position in pixels
    const asPercent = (value - min) / range;
    const [height, width] = this._getContainerDimensions();
    const [x, y] = [asPercent * width, height - asPercent * height];

    // Final position relies on layout
    return layout === "vertical" ? [0, "100%", y, y] : [x, x, "100%", 0];
  }

  private _getLabelPosition(value: number): [number, number] {
    // See note in '_getLinePosition' (but we only need two coordinates)
    const {
      layout,
      min,
      viewModel: { range }
    } = this;

    const asPercent = (value - min) / range;
    const [height, width] = this._getContainerDimensions();

    // Final position relies on layout
    return layout === "vertical" ? [width, height - asPercent * height] : [0, asPercent * width];
  }
}

export = Histogram;
