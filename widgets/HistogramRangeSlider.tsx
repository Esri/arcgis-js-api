/**
 * A slider widget that can be used for filtering data or gathering
 * numeric input from a user for a range of data. When [bins](#bins) are provided,
 * a histogram will render on the slider showing where data is distributed along
 * the range. Use the [rangeType](#rangeType) property
 * to indicate how the histogram should be styled as the user interacts with slider
 * handles.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![HistogramRangeSlider with annotations](../assets/img/apiref/widgets/sliders/histogramrangeslider-labels.png "HistogramRangeSlider with annotations")
 *
 * At a minimum, the slider's [container](#container) or parent container must have a `width` set in CSS for it to render.
 *
 * @module esri/widgets/HistogramRangeSlider
 * @since 4.12
 *
 * @see module:esri/widgets/Histogram
 * @see module:esri/widgets/Slider
 *
 * @see [HistogramRangeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/HistogramRangeSlider.tsx)
 * @see [HistogramRangeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_HistogramRangeSlider.scss)
 * @see module:esri/widgets/HistogramRangeSlider/HistogramRangeSliderViewModel
 */

// esri
import Color from "esri/Color";

// esri.core
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";
import { Integer } from "esri/core/accessorSupport/ensureType";

// esri.renderers.smartMapping.statistics
import { Bin } from "esri/renderers/smartMapping/statistics/interfaces";

// esri.widgets
import Histogram from "esri/widgets/Histogram";
import Slider from "esri/widgets/Slider";
import Widget from "esri/widgets/Widget";

// esri.widgets.Histogram
import { BarCreatedFunction, DataLineInfos, DataLineCreatedFunction } from "esri/widgets/Histogram/interfaces";

// esri.widgets.HistogramRangeSlider
import HistogramRangeSliderViewModel from "esri/widgets/HistogramRangeSlider/HistogramRangeSliderViewModel";
import { RangeType } from "esri/widgets/HistogramRangeSlider/interfaces";

// esri.widgets.HistogramRangeSlider.t9n
import HistogramRangeSliderMessages from "esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider";

// esri.widgets.smartMapping.support
import { getDeviationValues } from "esri/widgets/smartMapping/support/utils";

// esri.widgets.support
import { LabelFormatFunction, VNode } from "esri/widgets/support/interfaces";
import { messageBundle, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-histogram-range-slider",
  sliderContainer: "esri-histogram-range-slider__slider-container",
  histogramContainer: "esri-histogram-range-slider__histogram-container",

  // For segment customization
  rangeTypePrefix: "esri-histogram-range-slider__range-type--",

  // common
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

@subclass("esri.widgets.HistogramRangeSlider")
class HistogramRangeSlider extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when a user changes the [max](#max) value of the slider.
   *
   * @event module:esri/widgets/HistogramRangeSlider#max-change
   *
   * @property {number} oldValue - The former [max](#max) value (or bound) of the slider.
   * @property {"max-change"} type - The type of the event.
   * @property {number} value - The value of the [max](#max) value (or bound) of the slider when the event is emitted.
   */

  /**
   * Fires when a user changes the [min](#min) value of the slider.
   *
   * @event module:esri/widgets/HistogramRangeSlider#min-change
   *
   * @property {number} oldValue - The former [min](#min) value (or bound) of the slider.
   * @property {"min-change"} type - The type of the event.
   * @property {number} value - The value of the [min](#min) value (or bound) of the slider when the event is emitted.
   */

  /**
   * Fires when a user drags a segment of the slider. A segment is the portion
   * of the track that lies between two thumbs. Therefore, this is only applicable when
   * two or more thumbs are set on the slider.
   *
   * @event module:esri/widgets/HistogramRangeSlider#segment-drag
   *
   * @property {number} index - The 1-based index of the segment in the slider.
   * @property {"start" | "drag"} state - The state of the drag.
   * @property {"segment-drag"} type - The type of the event.
   * @property {number[]} thumbIndices - The indices of the thumbs on each end of the segment.
   */

  /**
   * Fires when a user changes the value of a thumb via the keyboard arrow keys.
   *
   * @event module:esri/widgets/HistogramRangeSlider#thumb-change
   *
   * @property {number} index - The 0-based index of the updated thumb position.
   * @property {number} oldValue - The former value of the thumb before the change was made.
   * @property {"thumb-change"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * Fires when a user drags a thumb on the widget.
   *
   * @event module:esri/widgets/HistogramRangeSlider#thumb-drag
   *
   * @property {number} index - The 0-based index of the updated thumb position.
   * @property {"start" | "drag"} state - The state of the drag.
   * @property {"thumb-drag"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/HistogramRangeSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const slider = new HistogramRangeSlider({
   *   container: "sliderDiv",
   *   min: 0,
   *   max: 100,
   *   values: [ 50, 150 ]
   * });
   */
  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    const { average, bins, hasTimeData, max, min, viewModel } = this;

    this._updateBarFill = this._updateBarFill.bind(this);

    // Configure the histogram
    // Uses external bins, but syncs min/max with the widget
    this._histogram = new Histogram({
      average,
      bins,
      barCreatedFunction: (index, element) => {
        if (index === 0) {
          this._barElements = [];
        }

        this._barElements.push(element);
        this._updateBarFill(index, element);
        this.barCreatedFunction && this.barCreatedFunction(index, element);
      },
      dataLines: this._getDataLines(),
      dataLineCreatedFunction: (lineElement, labelElement) => {
        this.dataLineCreatedFunction && this.dataLineCreatedFunction(lineElement, labelElement);
      },
      labelFormatFunction: this.labelFormatFunction,
      layout: "horizontal",
      max,
      min
    });

    // Reuse HistogramRangeSliderViewModel
    this._slider = new Slider({
      labelFormatFunction: this.labelFormatFunction,
      layout: "horizontal",
      visibleElements: {
        labels: true,
        rangeLabels: true
      },
      rangeLabelInputsEnabled: !hasTimeData,
      viewModel
    });

    this.own(
      this._slider.on(["max-change", "min-change"], (event) => this.emit(event.type, event)),

      this._slider.on(["segment-drag", "thumb-change", "thumb-drag"], (event) => {
        this._updateBarFills();
        this.emit(event.type, event);
      }),

      watchUtils.watch(this, "bins", () => {
        const { _histogram, bins } = this;

        if (!bins || !_histogram.bins) {
          this._barElements = [];
        } else {
          const spliceCount = _histogram.bins.length - bins.length;
          this._barElements.splice(-spliceCount, spliceCount);
        }

        _histogram.set({ bins });

        this._updateBarFills();
        this.scheduleRender();
      }),
      watchUtils.watch(this, ["max", "min", "rangeType", "values"], () => {
        const { _histogram, max, min } = this;

        _histogram.set({
          max,
          min
        });

        this._updateBarFills();
        this.scheduleRender();
      }),
      watchUtils.watch(
        this,
        ["average", "dataLines", "standardDeviation", "standardDeviationCount"],
        () => {
          const { _histogram, average } = this;

          _histogram.set({
            average,
            dataLines: this._getDataLines()
          });
        }
      ),
      watchUtils.watch(this, "labelFormatFunction", () => {
        const { _histogram, labelFormatFunction } = this;

        _histogram.set({ labelFormatFunction });
      }),
      watchUtils.watch(this, "hasTimeData", () => {
        this._slider.set({ rangeLabelInputsEnabled: !this.hasTimeData });
      })
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _barElements: SVGElement[] = [];

  private _histogram: Histogram = null;

  private _slider: Slider = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  // average
  //----------------------------------

  /**
   * The statistical average of the data in the histogram. You would typically
   * get this value from the `avg` property of
   * {@link module:esri/smartMapping/statistics/summaryStatistics#SummaryStatisticsResult SummaryStatisticsResult},
   * which is the result of the
   * {@link module:esri/smartMapping/statistics/summaryStatistics} function.
   *
   * When set, this value will render on the histogram with a line and an average symbol.
   *
   * @name average
   * @instance
   * @type {number}
   *
   * @example
   * // sets result returned from a smart mapping method
   * // to the histogram
   * slider.average = response.statistics.avg;
   *
   * @example
   * slider.average = 34.5;
   */
  @aliasOf("viewModel.average") average: number = null;

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
   * slider.barCreatedFunction = function(index, element){
   *   const bin = slider.bins[index];
   *   element.addEventListener("focus", function(){
   *     layerView.filter = {
   *       where: `POPULATION >= ${bin.minValue} AND POPULATION < ${bin.maxValue}`
   *     };
   *   });
   *   element.addEventListener("blur", function(){
   *     layerView.filter = null;
   *   });
   * };
   */
  @property()
  barCreatedFunction: BarCreatedFunction = null;

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
  dataLines: DataLineInfos[] = null;

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
   * histogram.dataLineCreatedFunction = function (lineElement, labelElement) {
   *   lineElement.setAttribute("y2", "25%");
   *   lineElement.classList.add("line-style");
   * };
   */
  @property()
  dataLineCreatedFunction: DataLineCreatedFunction = null;

  //----------------------------------
  //  excludedBarColor
  //----------------------------------

  /**
   * Sets the color of the histogram bars that are excluded based on the specified
   * [rangeType](#rangeType). For example, when a rangeType of `between` is used,
   * all bars **not** between the slider thumbs will be rendered with the color set here.
   *
   * To change the style of histogram bars representing included data based on the
   * [rangeType](#rangeType), use the [includedBarColor](#includedBarColor) property.
   *
   * @type {module:esri/Color}
   * @name excludedBarColor
   * @instance
   * @autocast { "value": "Number[] | String | Object" }
   * @see [includedBarColor](#includedBarColor)
   * @see [rangeType](#rangetype)
   * @default #d7e5f0
   *
   * @example
   * slider.excludedBarColor = "black";
   */

  @property({
    type: Color,
    json: {
      type: [Integer],
      write: true
    }
  })
  excludedBarColor: Color = new Color("#d7e5f0");

  //----------------------------------
  //  hasTimeData
  //----------------------------------

  /**
   * Indicates whether the dataset contains time data. When `true`
   * the slider labels will be formatted as dates.
   *
   * @name hasTimeData
   * @instance
   * @type {boolean}
   * @default false
   *
   * @example
   * // Slider will render handle value labels as dates
   * slider.hasTimeData = true;
   *
   * @ignore
   */
  @aliasOf("viewModel.hasTimeData") hasTimeData: boolean = null;

  //----------------------------------
  //  includedBarColor
  //----------------------------------

  /**
   * Sets the color of the histogram bars that are included in the specified
   * [rangeType](#rangeType). For example, when a rangeType of `between` is used,
   * all bars between the slider thumbs will be rendered with the color set here.
   *
   * To change the style of histogram bars representing excluded data based on the
   * [rangeType](#rangeType), use the [excludedBarColor](#excludedBarColor) property.
   *
   * @type {module:esri/Color}
   * @name includedBarColor
   * @instance
   * @autocast { "value": "Number[] | String | Object" }
   * @see [excludedBarColor](#excludedBarColor)
   * @see [rangeType](#rangetype)
   * @default #599dd4
   *
   * @example
   * slider.includedBarColor = "green";
   */

  @property({
    type: Color,
    json: {
      type: [Integer],
      write: true
    }
  })
  includedBarColor: Color = new Color("#599dd4");

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

  //----------------------------------
  //  labelFormatFunction
  //----------------------------------

  /**
   * A function used to format labels. Overrides the default label formatter.
   *
   * By default labels are formatted in the following way:
   *
   * - When the data range is less than `10` (`(max - min) < 10`), labels
   *   are rounded based on the value set in the [precision](#precision) property.
   * - When the data range is larger than `10`, [labels](#labels) display with a precision of
   *   no more than two decimal places, though actual slider thumb values will maintain the
   *   precision specified in [precision](#precision).
   *
   * Use this property to override the behavior defined above.
   *
   * @name labelFormatFunction
   * @instance
   * @type {module:esri/widgets/Slider~LabelFormatter}
   * @example
   * // For thumb values, rounds each label to whole numbers.
   * // Note the actual value of the thumb continues to be stored
   * // based on the indicated data `precision` despite this formatting
   * slider.labelFormatFunction = function(value, type) {
   *   return (type === "value") ? value.toFixed(0) : value;
   * }
   *
   * @example
   * // Format thumb values as dates
   * slider.labelFormatFunction = function(value, type) {
   *   return new Date(value).toLocaleDateString();
   * }
   */
  @aliasOf("viewModel.labelFormatFunction") labelFormatFunction: LabelFormatFunction = null;

  //----------------------------------
  //  max
  //----------------------------------

  /**
   * The maximum value or upper bound of the slider. If the largest
   * slider [value](#values) _in the constructor_ is greater than the `maxValue` set in
   * this property, then the `maxValue` will update to match the largest
   * slider [value](#values).
   *
   * @name max
   * @instance
   * @type {number}
   *
   * @example
   * slider.max = 150;
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
  @messageBundle("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")
  messages: HistogramRangeSliderMessages = null;

  //----------------------------------
  //  min
  //----------------------------------

  /**
   * The minimum value or lower bound of the slider. If the smallest
   * slider [value](#values) _in the constructor_ is greater than the `minValue` set in
   * this property, then the `minValue` will update to match the smallest
   * slider [value](#values).
   *
   * @name min
   * @instance
   * @type {number}
   *
   * @example
   * slider.min = -150;
   */

  @aliasOf("viewModel.min") min: number = null;

  //----------------------------------
  //  precision
  //----------------------------------

  /**
   * Defines how slider thumb values should be rounded. This number indicates the number
   * of decimal places slider thumb values should round to when they have been moved.
   *
   * This value also indicates the precision of thumb [labels](#labels) when the data range
   * ([max](#max) - [min](#min)) is less than `10`.
   *
   * When the data range is larger than `10`, [labels](#labels) display with a precision of
   * no more than two decimal places, though actual slider thumb values will maintain the
   * precision specified in this property.
   *
   * For example, given the default precision of `4`, and the following slider configuration,
   * The label of the thumb will display two decimal places, but the precision of the actual
   * thumb value will not be lost even when the user slides or moves the thumb.
   *
   * ```js
   * const slider = new HistogramRangeSliderViewModel({
   *   min: 20,
   *   max: 100,  // data range of 80
   *   values: [50.4331],
   *   // thumb label will display 50.43
   *   // thumb value will maintain precision, so
   *   // value will remain at 50.4331
   * });
   * ```
   *
   * If the user manually enters a value that has a higher precision than what's indicated by
   * this property, the precision of that thumb value will be maintained until the thumb
   * is moved by the user. At that point, the value will be rounded according to the indicated precision.
   *
   * Keep in mind this property rounds thumb [values](#values) and shouldn't be used exclusively
   * for formatting purposes. To format thumb `labels`, use the [labelFormatFunction](#labelFormatFunction)
   * property.
   *
   * @name precision
   * @instance
   * @type {number}
   * @default 4
   *
   * @example
   * histogramRangeSlider.precision = 7;
   */
  @aliasOf("viewModel.precision") precision = 4;

  //----------------------------------
  //  rangeType
  //----------------------------------

  /**
   * Indicates how the histogram bins should be rendered as the user slides the thumbs. By default,
   * blue bars indicate data bins included in the range. Gray bars indicate data bins excluded from
   * the range. These colors can be customized with the [includedBarColor](#includedBarColor) and
   * [excludedBarColor](#includedBarColor) properties.
   *
   * This property also determines the SQL where clause generated in [generateWhereClause()](#generateWhereClause)
   * for filtering purposes. The value set here determines the number of [values](#values)
   * allowed on the slider.
   *
   * See the table below for a description and requirements of all possible values. `value1` refers to
   * the value of the first thumb position. `value2` refers to the value of the final thumb position, if applicable.
   *
   * Possible Value | Number of [Values](#values) | [Where clause](#generateWhereClause)
   * ---------------|----------------------------|----------------------
   * equal | 1 | `${field} = ${value1}`
   * not-equal | 1 | `${field} <> ${value1}`
   * less-than | 1 | `${field} < ${value1}`
   * greater-than | 1 | `${field} > ${value1}`
   * at-most | 1 | `${field} <= ${value1}`
   * at-least | 1 | `${field} >= ${value1}`
   * between | 2 | `${field} BETWEEN ${value1} AND ${value2}`
   * not-between | 2 | `${field} NOT BETWEEN ${value1} AND ${value2}`
   *
   * @name rangeType
   * @instance
   * @type {"equal" | "not-equal" | "less-than" | "greater-than" | "at-most" | "at-least" | "between" | "not-between"}
   *
   * @see [values](#values)
   * @see [generateWhereClause()](#generateWhereClause)
   *
   * @example
   * // renders the histogram so that all bins between
   * // the two handles are shaded with a blue color
   * slider.rangeType = "between";
   *
   * // filters the layer view based on the configuration
   * // of the slider
   * layerView.filter = {
   *   where: slider.generateWhereClause("POPULATION")
   * }
   */

  @aliasOf("viewModel.rangeType") rangeType: RangeType = null;

  //----------------------------------
  //  standardDeviation
  //----------------------------------

  /**
   * Indicates the standard deviation of the dataset.
   * When set, computed [dataLines](#dataLines) will render on the histogram
   * at the location of the given standard deviation
   * above and below the `average`.
   *
   * @name standardDeviation
   * @instance
   * @type {number}
   *
   * @example
   * // stddev returned from summaryStatistics
   * slider.standardDeviation = stats.stddev;
   */
  @aliasOf("viewModel.standardDeviation") standardDeviation: number = null;

  //----------------------------------
  //  standardDeviationCount
  //----------------------------------

  /**
   * Indicates the number of standard deviation lines to render on the histogram
   * from the [average].
   *
   * @name standardDeviationCount
   * @instance
   * @type {number}
   * @default 1
   *
   * @example
   * slider.standardDeviationCount = 2;
   */
  @property()
  standardDeviationCount = 1;

  //----------------------------------
  //  values
  //----------------------------------

  /**
   * An array of either one or two numbers representing thumb positions on the slider.
   * The number of values that should be indicated here depends on the associated [rangeType](#rangeType).
   *
   * @name values
   * @instance
   * @type {number[]}
   *
   * @see [rangeType](#rangeType)
   *
   * @example
   * const slider = new HistogramRangeSlider({
   *   min: 20,
   *   max: 100,  // data range of 80
   *   values: [50.4331],
   *   rangeType: "at-least"
   *   container: "sliderDiv"
   * });
   */
  @aliasOf("viewModel.values")
  values: number[] = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link esri/widgets/HistogramRangeSlider/HistogramRangeSliderViewModel}
   * class to access all properties and methods on the Slider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/HistogramRangeSlider/HistogramRangeSliderViewModel}
   */
  @property()
  viewModel: HistogramRangeSliderViewModel = new HistogramRangeSliderViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Generates a SQL where clause based on a given field and the slider's
   * [rangeType](#rangeType). This is a convenience function for data filtering
   * or data queries.
   *
   * @method generateWhereClause
   * @instance
   * @param {string} field - Name of the field used in the where clause. This
   *   field should correspond to the data used to generate the histogram
   *   associated with the slider.
   *
   * @return {string} The SQL where clause to apply to a filter or query.
   *
   * @see [rangeType](#rangeType)
   * @see {@link module:esri/views/layers/FeatureLayerView#filter FeatureLayerView.filter}
   * @see {@link module:esri/views/layers/support/FeatureEffect#filter FeatureEffect.filter}
   * @see {@link module:esri/views/layers/FeatureLayerView#queryFeatures FeatureLayerView.queryFeatures()}
   *
   * @example
   * // renders the histogram so that all bins between
   * // the two handles are shaded with a blue color by default
   * slider.rangeType = "between";
   *
   * // filters the layerview based on the configuration
   * // of the slider
   * layerView.filter = {
   *   where: slider.generateWhereClause("POPULATION")
   * }
   */
  generateWhereClause(field: string): string {
    return this.viewModel.generateWhereClause(field);
  }

  render(): VNode {
    const { rangeType, viewModel, label } = this;

    const baseClasses = this.classes(
      CSS.base,
      CSS.esriWidget,
      `${CSS.rangeTypePrefix}${rangeType}`,
      viewModel.state === "disabled" ? CSS.disabled : null
    );

    return (
      <div aria-label={label} class={baseClasses}>
        {viewModel.state === "disabled" ? null : this.renderContent()}
      </div>
    );
  }

  protected renderContent(): VNode {
    return [this.renderHistogram(), this.renderSlider()];
  }

  protected renderSlider(): VNode {
    return (
      <div key={`${this.id}-slider-container`} class={CSS.sliderContainer}>
        {this._slider.render()}
      </div>
    );
  }

  protected renderHistogram(): VNode {
    return <div class={CSS.histogramContainer}>{this._histogram.render()}</div>;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getDataLines(): DataLineInfos[] {
    return [...this._getStandardDeviationDataLines(), ...(this.dataLines || [])];
  }

  private _getStandardDeviationDataLines(): DataLineInfos[] {
    const { average, standardDeviation, standardDeviationCount } = this;
    const values = getDeviationValues(standardDeviation, average, standardDeviationCount);

    return values.map((value) => ({ value }));
  }

  private _updateBarFills(): void {
    this._barElements.forEach((element, index) => this._updateBarFill(index, element));
  }

  // Calculate 'fill' for each bar
  // Fill depends on 'rangeType', and handle position relative to the bar
  private _updateBarFill(index: number, element: SVGElement): void {
    element.setAttribute("fill", this._getFillForBar(index).toHex());
  }

  private _getFillForBar(index: number): Color {
    const { bins, rangeType, values } = this;

    if (!bins || !bins.length || !rangeType || !values.length) {
      return null;
    }

    const bin = bins[index];

    if (!bin) {
      return null;
    }

    const { maxValue, minValue } = bin;
    const range = maxValue - minValue;
    const inRange = values[0] > minValue && values[0] < maxValue;

    switch (rangeType) {
      // All bars are blue
      case "equal":
      case "not-equal": {
        return this.includedBarColor;
      }
      // Bars to the left of the handle are blue
      case "less-than":
      case "at-most": {
        if (inRange) {
          return this._getBlendedColor((values[0] - minValue) / range);
        }

        if (maxValue <= values[0]) {
          return this.includedBarColor;
        }

        return this.excludedBarColor;
      }
      // Bars to the right of the handle are blue
      case "greater-than":
      case "at-least": {
        if (inRange) {
          return this._getBlendedColor(1 - (values[0] - minValue) / range);
        }

        if (minValue >= values[0]) {
          return this.includedBarColor;
        }

        return this.excludedBarColor;
      }
      // Bars between the handles are blue
      case "between": {
        if (values.length === 2) {
          if (values[0] > minValue && values[0] < maxValue) {
            return this._getBlendedColor(1 - (values[0] - minValue) / range);
          }

          if (values[1] > minValue && values[1] < maxValue) {
            return this._getBlendedColor((values[1] - minValue) / range);
          }

          if (minValue >= values[0] && maxValue <= values[1]) {
            return this.includedBarColor;
          }

          return this.excludedBarColor;
        }
      }
      // Bars *not* between the handles are blue (outer)
      case "not-between": {
        if (values.length === 2) {
          if (values[0] > minValue && values[0] < maxValue) {
            return this._getBlendedColor((values[0] - minValue) / range);
          }

          if (values[1] > minValue && values[1] < maxValue) {
            return this._getBlendedColor(1 - (values[1] - minValue) / range);
          }

          if (minValue > values[0] && maxValue < values[1]) {
            return this.excludedBarColor;
          }

          return this.includedBarColor;
        }
      }
      default: {
        return this.includedBarColor;
      }
    }
  }

  private _getBlendedColor(weight: number): Color {
    return Color.blendColors(this.excludedBarColor, this.includedBarColor, weight);
  }
}

export default HistogramRangeSlider;
