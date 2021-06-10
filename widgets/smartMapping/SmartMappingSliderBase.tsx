/**
 * The base class for all Smart Mapping slider widgets.
 *
 * @module esri/widgets/smartMapping/SmartMappingSliderBase
 * @since 4.12
 * @noconstructor
 */

// esri
import Color from "esri/../Color";

// esri.core
import { isSome } from "esri/../core/maybe";
import * as watchUtils from "esri/../core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.widgets
import Histogram from "esri/Histogram";
import Slider from "esri/Slider";
import Widget from "esri/Widget";

// esri.widgets.Histogram
import { DataLineInfos } from "esri/Histogram/interfaces";

// esri.widgets.smartMapping
import SmartMappingSliderViewModel from "esri/widgets/SmartMappingSliderViewModel";

// esri.widgets.smartMapping.support
import {
  GradientStopInfo,
  HistogramConfig,
  HistogramParams,
  ZoomOptions
} from "esri/widgets/support/interfaces";
import { getDeviationValues } from "esri/widgets/support/utils";

// esri.widgets.support
import {
  InputFormatFunction,
  InputParseFunction,
  LabelFormatFunction,
  VNode
} from "esri/support/interfaces";
import { tsx } from "esri/support/widget";

const CSS = {
  zoomCap: "zoom-cap",
  maxZoomCap: "zoom-cap--max",
  minZoomCap: "zoom-cap--min",
  zoomCapLine: "zoom-cap--line",
  zoomCapMask: "zoom-cap--mask",
  zoomCapUnderline: "zoom-cap--underline"
};

type State = "ready" | "disabled";

@subclass("esri.widgets.smartMapping.SmartMappingSliderBase")
export abstract class SmartMappingSliderBase extends Widget {
  /**
   * Fires when a user changes the [max](#max) of the slider.
   *
   * @event module:esri/widgets/smartMapping/SmartMappingSliderBase#max-change
   *
   * @property {number} oldValue - The former [max](#max) (or bound) of the slider.
   * @property {"max-change"} type - The type of the event.
   * @property {number} value - The value of the [max](#max) (or bound) of the slider when the event is emitted.
   *
   * @example
   * slider.on("max-change", function() {
   *   const renderer = layer.renderer.clone();
   *   const visualVariable = renderer.visualVariables[0].clone();
   *   colorVariable.stops = slider.stops;
   *   renderer.visualVariables = [ visualVariable ];
   *   layer.renderer = renderer;
   * });
   */

  /**
   * Fires when a user changes the [min](#min) of the slider.
   *
   * @event module:esri/widgets/smartMapping/SmartMappingSliderBase#min-change
   *
   * @property {number} oldValue - The former [min](#min) value (or bound) of the slider.
   * @property {"min-change"} type - The type of the event.
   * @property {number} value - The value of the [min](#min) value (or bound) of the slider when the event is emitted.
   *
   * @example
   * slider.on("min-change", function() {
   *   const renderer = layer.renderer.clone();
   *   const visualVariable = renderer.visualVariables[0].clone();
   *   colorVariable.stops = slider.stops;
   *   renderer.visualVariables = [ visualVariable ];
   *   layer.renderer = renderer;
   * });
   */

  /**
   * Fires when a user changes the value of a thumb via arrow keys and keyboard editing of the label on the widget.
   *
   * @event module:esri/widgets/smartMapping/SmartMappingSliderBase#thumb-change
   *
   * @property {number} index - The 0-based index of the thumb emitting the event.
   * @property {number} oldValue - The former value of the thumb before the change was made.
   * @property {"thumb-change"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   *
   * @example
   * slider.on("thumb-change", function() {
   *   const renderer = layer.renderer.clone();
   *   const visualVariable = renderer.visualVariables[0].clone();
   *   colorVariable.stops = slider.stops;
   *   renderer.visualVariables = [ visualVariable ];
   *   layer.renderer = renderer;
   * });
   */

  /**
   * Fires when a user drags a thumb on the widget.
   *
   * @event module:esri/widgets/smartMapping/SmartMappingSliderBase#thumb-drag
   *
   * @property {number} index - The 0-based index of the thumb emitting the event.
   * @property {"start" | "drag"} state - The state of the drag.
   * @property {"thumb-drag"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   *
   * @example
   * slider.on("thumb-drag", function() {
   *   const renderer = layer.renderer.clone();
   *   const visualVariable = renderer.visualVariables[0].clone();
   *   colorVariable.stops = slider.stops;
   *   renderer.visualVariables = [ visualVariable ];
   *   layer.renderer = renderer;
   * });
   */

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   */
  constructor(props?: any, parentNode?: string | Element) {
    super(props, parentNode);

    const slider = this.slider;

    // #34053 #34463 - disable editing of dates unless
    // ... user provides a custom parser. Will be refactored
    // ... when date support is added to the default slider
    if (props?.hasTimeData && !props?.inputParseFunction && !props?.inputFormatFunction) {
      slider.set({ labelInputsEnabled: false, rangeLabelInputsEnabled: false });
    }

    this.own(
      slider.on("max-change", (event) => this.emit("max-change", event)),
      slider.on("min-change", (event) => this.emit("min-change", event)),
      slider.on("thumb-change", (event) => this.emit("thumb-change", event)),
      slider.on("thumb-drag", (event) => this.emit("thumb-drag", event)),

      watchUtils.watch(this, ["histogramConfig", "max", "min", "zoomOptions"], () => {
        const {
          histogram,
          histogramConfig,
          viewModel: { max, min }
        } = this;
        const params = this.getParamsFromHistogramConfig(histogramConfig);

        histogram.set({ ...params, max, min });
      }),
      watchUtils.watch(this, "labelFormatFunction", () => {
        const { histogram, labelFormatFunction } = this;

        histogram.set({ labelFormatFunction });
      }),
      // Reactivate inputs if formatters are present
      watchUtils.watch(this, "hasTimeData", (newValue) => {
        const showInputs = !newValue || (this.inputFormatFunction && this.inputParseFunction);
        slider.set({ labelInputsEnabled: showInputs, rangeLabelInputsEnabled: showInputs });
      })
    );

    this._onMaxZoomCapPointerDown = this._onMaxZoomCapPointerDown.bind(this);
    this._onMinZoomCapPointerDown = this._onMinZoomCapPointerDown.bind(this);
  }

  initialize(): void {
    const { histogramConfig = {}, viewModel } = this;
    const { labelFormatFunction, max, min } = viewModel;
    const params = this.getParamsFromHistogramConfig(histogramConfig);

    this.own(
      watchUtils.watch(viewModel, "max", () => this.notifyChange("max")),
      watchUtils.watch(viewModel, "min", () => this.notifyChange("min"))
    );

    // Configure the histogram
    // Uses external bins, but syncs min/max with the widget
    this.histogram.set({
      labelFormatFunction,
      ...params,
      max,
      min
    });

    // Use SmartMappingSliderViewModel (syncs 'max', 'min', values' and 'stops')
    this.slider.set({ viewModel });
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

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
   * @ignore
   *
   * @example
   * // ColorSlider will render handle value labels as dates
   * slider.hasTimeData = true;
   */
  @aliasOf("viewModel.hasTimeData") hasTimeData: boolean = null;

  //----------------------------------
  //  histogram
  //----------------------------------

  @property()
  histogram: Histogram = new Histogram({
    layout: "vertical"
  });

  /**
   * Configuration options for defining the slider's {@link module:esri/widgets/Histogram}.
   *
   * @typedef module:esri/widgets/smartMapping/SmartMappingSliderBase~HistogramConfig
   *
   * @property {number} [average] - Indicates the average value of the dataset. When set,
   *   a solid line on the histogram will render at the location of the average value along
   *   with a label defaulting to the value set here.
   * @property {module:esri/widgets/Histogram~BarCreatedFunction} [barCreatedFunction] -
   *   Function for styling bars representing histogram bins.
   *   This can be used to style bins or add custom interaction to them. For
   *   example, you can use this function to color bins that match the colors on the slider's track.
   * @property {module:esri/widgets/Histogram~Bin[]} [bins] - The bins of the histogram. This is
   *   an array of objects indicating the range and count of data in each bin. This value is
   *   typically retrieved from the {@link module:esri/smartMapping/statistics/histogram}
   *   function.
   * @property {Object[]} [dataLines] - When set, renders lines on the histogram that indicate important or
   *   meaningful values to the end user.
   * @property {number} [dataLines.value] - The value on the data axis of the histogram where a line will be rendered.
   * @property {string | number} [dataLines.label] - The label associated with the line.
   * @property {module:esri/widgets/Histogram~DataLineCreatedFunction} [dataLineCreatedFunction] - Function
   *   that fires each time a data line is created.
   *   You can use this to style individual [dataLines](#dataLines) on the data axis.
   * @property {number} [standardDeviation] - Indicates the standard deviation of the dataset.
   *   When set, data lines are on the histogram at the locations of the standard deviations
   *   above and below the `average`.
   * @property {number} [standardDeviationCount] - Indicates the standard deviation of the dataset.
   *   When set, data lines are on the histogram at the locations of the standard deviations
   *   above and below the `average`.
   */

  //----------------------------------
  //  histogramConfig
  //----------------------------------

  /**
   * The {@link module:esri/widgets/Histogram} associated with the data represented on the slider. The bins are typically
   * generated using the {@link module:esri/smartMapping/statistics/histogram}
   * statistics function.
   *
   * @name histogramConfig
   * @instance
   * @type {module:esri/widgets/smartMapping/SmartMappingSliderBase~HistogramConfig}
   *
   * @see module:esri/smartMapping/statistics/histogram
   * @see module:esri/widgets/Histogram
   *
   * @example
   * histogram({
   *   layer: featureLayer,
   *   field: "fieldName",
   *   numBins: 30
   * }).then(function(histogramResult){
   *   // set the histogram to the slider
   *   slider.histogramConfig = {
   *     bins: histogramResult.bins
   *   };
   * });
   */
  @property()
  histogramConfig: HistogramConfig = null;

  //----------------------------------
  //  inputFormatFunction
  //----------------------------------

  /**
   * A function used to format user inputs. As opposed to [labelFormatFunction](#labelFormatFunction), which formats
   * thumb labels, the `inputFormatFunction` formats thumb values in the input element when the user begins
   * to edit them.
   *
   * The image below demonstrates how slider input values resemble corresponding slider values by default
   * and won't match the formatting set in `labelFormatFunction`.
   *
   * ![Slider without input formatter](../assets/img/apiref/widgets/sliders/slider-no-input-formatter.png "Slider without input formatter")
   *
   * If you want to format slider input values so they match thumb labels, you can pass the same function set in `labelFormatFunction` to
   * `inputFormatFunction` for consistent formatting.
   *
   * ![Slider with input formatter](../assets/img/apiref/widgets/sliders/slider-input-formatter.png "Slider with input formatter")
   *
   * However, if an `inputFormatFunction` is specified, you must also write a corresponding
   * [inputParseFunction](#inputParseFunction) to parse user inputs to understandable slider values. In most cases, if
   * you specify an `inputFormatFunction`, you should set the [labelFormatFunction](#labelFormatFunction) to the same value
   * for consistency between labels and inputs.
   *
   * This property overrides the default input formatter, which formats by calling `toString()` on the input value.
   *
   * @name inputFormatFunction
   * @instance
   * @type {module:esri/widgets/smartMapping/SmartMappingSliderBase~LabelFormatter}
   * @see [inputParseFunction](#inputParseFunction)
   * @since 4.14
   *
   * @example
   * // Formats the slider input to abbreviated numbers with units
   * // e.g. a thumb at position 1500 will render with an input label of 1.5k
   * slider.inputFormatFunction = function(value, type){
   *   if(value >= 1000000){
   *     return (value / 1000000).toPrecision(3) + "m"
   *   }
   *   if(value >= 100000){
   *     return (value / 1000).toPrecision(3) + "k"
   *   }
   *   if(value >= 1000){
   *     return (value / 1000).toPrecision(2) + "k"
   *   }
   *   return value.toFixed(0);
   * }
   */

  @aliasOf("viewModel.inputFormatFunction") inputFormatFunction: InputFormatFunction = null;

  //----------------------------------
  //  inputParseFunction
  //----------------------------------

  /**
   * Function used to parse slider inputs formatted by the [inputFormatFunction](#inputFormatFunction).
   * This property must be set if an `inputFormatFunction` is set. Otherwise the slider values will
   * likely not update to their expected positions.
   *
   * Overrides the default input parses, which is a parsed floating point number.
   *
   * @name inputParseFunction
   * @instance
   * @type {module:esri/widgets/Slider~InputParser}
   * @see [inputFormatFunction](#inputFormatFunction)
   * @since 4.14
   *
   * @example
   * // Parses the slider input (a string value) to a number value understandable to the slider
   * // This assumes the slider was already configured with an inputFormatFunction
   * // For example, if the input is 1.5k this function will parse
   * // it to a value of 1500
   * slider.inputParseFunction = function(value, type, index){
   *   var charLength = value.length;
   *   var valuePrefix = parseFloat(value.substring(0,charLength-1));
   *   var finalChar = value.substring(charLength-1);
   *
   *   if(parseFloat(finalChar) >= 0){
   *     return parseFloat(value);
   *   }
   *   if(finalChar === "k"){
   *     return valuePrefix * 1000;
   *   }
   *   if(finalChar === "m"){
   *     return valuePrefix * 1000000;
   *   }
   *   return value;
   * }
   */

  @aliasOf("viewModel.inputParseFunction") inputParseFunction: InputParseFunction = null;

  /**
   * Function used to format thumb labels. This function should be set to the
   * [labelFormatFunction](#labelFormatFunction) property. This function fires
   * every time a label is created or updated on the slider.
   *
   * @callback module:esri/widgets/smartMapping/SmartMappingSliderBase~LabelFormatter
   *
   * @param {number} value - The value of the thumb.
   * @param {"average" | "min" | "max" | "value"} [type] - The label type. Valid types include `average`, `min`, `max`, and `value`.
   * @param {number} [index] - The index of the thumb (or [value](#values)).
   *
   * @return {string} The formatted value for the label.
   */

  //----------------------------------
  //  labelFormatFunction
  //----------------------------------

  /**
   * A modified version of
   * {@link module:esri/widgets/Slider#labelFormatFunction Slider.labelFormatFunction},
   * which is a custom function used to format labels on the thumbs, min, max, and average
   * values. Overrides the default label formatter.
   * This function also supports date formatting.
   *
   * @name labelFormatFunction
   * @instance
   * @type {module:esri/widgets/smartMapping/SmartMappingSliderBase~LabelFormatter}
   *
   * @example
   * // For thumb values, rounds each label to whole numbers
   * slider.labelFormatFunction = function(value, type) {
   *   return (type === "value-change") ? value.toFixed(0): value;
   * }
   */
  @aliasOf("viewModel.labelFormatFunction") labelFormatFunction: LabelFormatFunction = null;

  //----------------------------------
  //  max
  //----------------------------------

  /**
   * The maximum value or upper bound of the slider. If the largest
   * slider [value](#values) _in the constructor_ is greater than the `max` set in
   * this property, then the `max` will update to match the largest
   * slider [value](#values).
   *
   * @name max
   * @instance
   * @type {number}
   *
   * @example
   * slider.max = 150;
   */
  @property()
  get max(): number {
    return this.viewModel ? this.viewModel.getUnzoomedMax() : null;
  }
  set max(value: number) {
    this.viewModel.max = value;
    this._set("max", value);
  }

  //----------------------------------
  //  min
  //----------------------------------

  /**
   * The minimum value or lower bound of the slider. If the smallest
   * slider [value](#values) _in the constructor_ is greater than the `min` set in
   * this property, then the `min` will update to match the smallest
   * slider [value](#values).
   *
   * @name min
   * @instance
   * @type {number}
   *
   * @example
   * slider.min = -150;
   */
  @property()
  get min(): number {
    return this.viewModel ? this.viewModel.getUnzoomedMin() : null;
  }
  set min(value: number) {
    this.viewModel.min = value;
    this._set("min", value);
  }

  //----------------------------------
  //  precision
  //----------------------------------

  /**
   * Defines how slider thumb values should be rounded. This number indicates the number
   * of decimal places slider thumb _values_ should round to when they have been moved.
   *
   * This value also indicates the precision of thumb [labels](#labels) when the data range
   * is less than `10` (i.e. `(max - min) < 10`).
   *
   * When the data range is larger than `10`, [labels](#labels) display with a precision of
   * no more than two decimal places, though actual slider thumb values will maintain the
   * precision specified in this property.
   *
   * For example, given the default precision of `4`, and the following slider configuration,
   * The labels of the thumbs will display two decimal places, but the precision of the actual
   * thumb values will not be lost even when the user slides or moves the thumb.
   *
   * ```js
   * const slider = new Slider({
   *   min: 20,
   *   max: 100,  // data range of 80
   *   values: [50.4331],
   *   // thumb label will display 50.43
   *   // thumb value will maintain precision, so
   *   // value will remain at 50.4331
   *   container: "sliderDiv"
   * });
   * ```
   *
   * If the user manually enters a value that has a higher precision than what's indicated by
   * this property, the precision of that thumb value will be maintained until the thumb
   * is moved by the user. At that point, the value will be rounded according to the indicated precision.
   *
   * If thumb labels aren't visible, they must be enabled with [labelInputsEnabled](#labelInputsEnabled).
   *
   * Keep in mind this property rounds thumb [values](#values) and shouldn't be used exclusively
   * for formatting purposes. To format thumb `labels`, use the [labelFormatFunction](#labelFormatFunction)
   * property.
   *
   * @name precision
   * @instance
   * @type {number}
   * @default 4
   * @since 4.14
   *
   * @example
   * slider.precision = 7;
   */

  @aliasOf("viewModel.precision") precision: number = 4;

  //----------------------------------
  //  slider
  //----------------------------------

  @property()
  slider: Slider = new Slider({
    layout: "vertical",
    visibleElements: {
      labels: true,
      rangeLabels: true
    },
    labelInputsEnabled: true,
    rangeLabelInputsEnabled: true
  });

  //----------------------------------
  //  state
  //----------------------------------

  /**
   * The state of the view model.
   *
   * @name state
   * @instance
   * @type {"ready" | "disabled"}
   * @readonly
   */
  @aliasOf("viewModel.state") state: State = null;

  //----------------------------------
  //  values
  //----------------------------------

  /**
   * The data values associated with the thumb positions of the slider.
   * These are computed from the slider's [stops](#stops) or [breaks](#breaks).
   *
   * @name values
   * @instance
   * @type {number[]}
   * @readonly
   */
  @aliasOf("viewModel.values") values: number[];

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   *
   * @ignore
   * @name viewModel
   * @instance
   * @type {}
   */
  @property()
  viewModel: SmartMappingSliderViewModel = null;

  //----------------------------------
  //  zoomOptions
  //----------------------------------

  /**
   * Zooms the slider track to the bounds provided in this property.
   * When min and/or max zoom values are provided, the absolute
   * [min](#min) and [max](#max) slider values are preserved and
   * rendered at their typical positions on the slider. However, the
   * slider track itself is zoomed so that thumbs cannot be moved above or
   * below the provided min and max zoomed values.
   *
   * When a slider is in a zoomed state, the zoomed
   * ends of the track will appear jagged. In the image below, notice how the
   * top thumb cannot be moved past the zoom max of `31` even though the slider
   * max is `200`.
   *
   * ![slider-zoom](../assets/img/apiref/widgets/sliders/slider-zoomed.png)
   *
   * To exit a zoomed state, the user can click the
   * jagged line or the developer can set the `zoomOptions` to `null`. It
   * is up to the developer to provide a UI option for end users to
   * enable zooming on the slider.
   *
   * Setting the `zoomOptions` is useful when the slider is tied to heavily skewed
   * datasets where the histogram renders only one or two bars because of outliers.
   *
   * ![slider-not-zoomed](../assets/img/apiref/widgets/sliders/slider-skewed-not-zoomed.png)
   *
   * You can remove the influence of outliers by zooming the slider and regenerating
   * a histogram based on the zoomed min and max. This will provide a better view of the data
   * and make the slider more useful to the end user.
   *
   * @name zoomOptions
   * @instance
   * @type {Object}
   *
   * @property {number} [min] - The lower bound of the zoom.
   * @property {number} [max] - The upper bound of the zoom.
   *
   * @example
   * // zooms the slider to so thumbs can only be moved
   * // to positions between the values of 10 and 25 while
   * // maintaining the slider's absolute minimum and
   * // maximum values
   * slider.zoomOptions = {
   *   min: 10,
   *   max: 25
   * };
   *
   * @example
   * // disables zooming on the slider
   * slider.zoomOptions = null;
   *
   * @example
   * // zooms the slider to so thumbs can only be moved
   * // to positions above the value of 10, while maintaining
   * // the slider's absolute minimum value
   * slider.zoomOptions = {
   *   min: 10
   * };
   * @example
   * // zooms the slider to so thumbs can only be moved
   * // to positions below the value of 25, while maintaining
   * // the slider's absolute maximum value
   * slider.zoomOptions = {
   *   max: 25
   * };
   * @example
   * // zooms the slider to the handle positions
   * // with some padding
   * document.getElementById("zoomInButton").onclick = function() {
   *   const lowerThumb = slider.values[0];
   *   const upperThumb = slider.values[1];
   *
   *   const range = upperThumb - lowerThumb;
   *   const padding = range * 0.3;
   *
   *   const zoomMin = (lowerThumb - padding) > slider.min ? (lowerThumb - padding) : slider.min;
   *   const zoomMax = (upperThumb + padding) < slider.max ? (upperThumb + padding) : slider.max;
   *
   *   slider.set({ zoomOptions: { min: zoomMin, max: zoomMax } });
   * };
   */
  @aliasOf("viewModel.zoomOptions") zoomOptions: ZoomOptions = null;

  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------

  protected renderContent(
    ramp: VNode,
    sliderContainerCSS?: string,
    histogramContainerCSS?: string
  ): VNode {
    this.slider.extraNodes = [ramp, this.renderHistogram(histogramContainerCSS)];

    return <div class={sliderContainerCSS}>{this.slider.render()}</div>;
  }

  protected renderHistogram(className: string): VNode {
    return this.histogramConfig ? (
      <div class={className ? className : null}>{this.histogram.render()}</div>
    ) : null;
  }

  protected renderBackgroundFillDefinition(id: string): VNode {
    return (
      <pattern id={id} patternUnits="userSpaceOnUse" x="0" y="0" width="15" height="15">
        <image
          x="0"
          y="0"
          width="15"
          height="15"
          href="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2Ij48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNjY2MiIC8+PHBhdGggZD0iTTAgMCBMOCAwIEw4IDggTDAgOCBaIiBmaWxsPSIjZmZmIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDgpIiAvPjxwYXRoIGQ9Ik0wIDAgTDggMCBMOCA4IEwwIDggWiIgZmlsbD0iI2NjYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCw4KSIgLz48cGF0aCBkPSJNMCAwIEw4IDAgTDggOCBMMCA4IFoiIGZpbGw9IiNmZmYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgsMCkiIC8+PC9zdmc+"
        />
      </pattern>
    );
  }

  protected renderRampFillDefinition(id: string, stopInfos: GradientStopInfo[]): VNode {
    return (
      <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
        {this.renderRampFillStops(stopInfos)}
      </linearGradient>
    );
  }

  protected renderRampFillStops(stopInfos: GradientStopInfo[]): VNode {
    return stopInfos
      .reverse() // force ordering from bottom to top
      .map((stopInfo, index) => this.renderStop(stopInfo, index));
  }

  // Returns an individual SVG node representing a stop in the linear gradient
  protected renderStop(stop: GradientStopInfo, index: number): VNode {
    const { color, offset, opacity } = this.getPropsForStop(stop);

    return <stop key={`${index}-stop`} offset={offset} stop-color={color} stop-opacity={opacity} />;
  }

  //--------------------------------------------------------------------------
  //
  //  Zoom UI Rendering Methods
  //
  //--------------------------------------------------------------------------

  protected renderZoomCaps(): VNode {
    return [this.renderMaxZoomCap(), this.renderMinZoomCap()];
  }

  protected renderMinZoomCap(): VNode {
    if (!this.zoomOptions || !isSome(this.zoomOptions.min)) {
      return undefined;
    }

    return (
      <svg
        key="bottom"
        class={this.classes(CSS.zoomCap, CSS.minZoomCap)}
        viewBox="0 0 30 11"
        xmlns="http://www.w3.org/2000/svg"
        onpointerdown={this._onMinZoomCapPointerDown}
      >
        <polygon
          class={CSS.zoomCapMask}
          key="mask"
          fill="#1B8617"
          points="0 11.3846154 30 11.3846154 30 1 25 5.38461538 20 1 15 5.38461538 10 1 5 5.38461538 0 1"
        />
        <polygon
          class={CSS.zoomCapUnderline}
          key="underline"
          fill="#69DCFF"
          points="0 0 5 4.38461538 10 0 15 4.38461538 20 0 25 4.38461538 30 0 30 4.61538462 25 9 20 4.61538462 15 9 10 4.61538462 5 9 0 4.61538462"
        />
        <polygon
          class={CSS.zoomCapLine}
          key="line"
          fill="#DA5656"
          points="0 1 5 5.38461538 10 1 15 5.38461538 20 1 25 5.38461538 30 1 30 5.61538462 25 10 20 5.61538462 15 10 10 5.61538462 5 10 0 5.61538462"
        />
      </svg>
    );
  }

  protected renderMaxZoomCap(): VNode {
    if (!this.zoomOptions || !isSome(this.zoomOptions.max)) {
      return undefined;
    }

    return (
      <svg
        key="top"
        class={this.classes(CSS.zoomCap, CSS.maxZoomCap)}
        viewBox="0 0 30 11"
        xmlns="http://www.w3.org/2000/svg"
        onpointerdown={this._onMaxZoomCapPointerDown}
      >
        <polygon
          class={CSS.zoomCapMask}
          key="mask"
          points="0 -1.81994377e-12 30 -1.81994377e-12 30 8.23076923 25 3.61538462 20 8.23076923 15 3.61538462 10 8.23076923 5 3.61538462 0 8.23076923"
        />
        <polygon
          class={CSS.zoomCapUnderline}
          key="underline"
          points="0 5.61538462 5 1 10 5.61538462 15 1 20 5.61538462 25 1 30 5.61538462 30 10.2307692 25 5.61538462 20 10.2307692 15 5.61538462 10 10.2307692 5 5.61538462 0 10.2307692"
        />
        <polygon
          class={CSS.zoomCapLine}
          key="line"
          points="0 4.61538462 5 -1.87329639e-12 10 4.61538462 15 -1.87329639e-12 20 4.61538462 25 -1.87329639e-12 30 4.61538462 30 9.23076923 25 4.61538462 20 9.23076923 15 4.61538462 10 9.23076923 5 4.61538462 0 9.23076923"
        />
      </svg>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  // TODO private
  getPropsForStop(stop: GradientStopInfo): { color: string; offset: string; opacity: number } {
    const { color, offset } = stop;

    return {
      color: color instanceof Color ? color.toCss(true) : Color.fromString(color).toCss(true),
      offset: (offset * 100).toFixed(2) + "%",
      opacity: color instanceof Color ? color.toRgba()[3] : null
    };
  }

  getParamsFromHistogramConfig(config: HistogramConfig): HistogramParams {
    if (!config) {
      return null;
    }

    const {
      average,
      barCreatedFunction,
      bins,
      dataLineCreatedFunction,
      dataLineUpdatedFunction
    } = config;

    return {
      average,
      barCreatedFunction,
      bins,
      dataLineCreatedFunction,
      dataLineUpdatedFunction,
      dataLines: this._getDataLines(config)
    };
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _onMaxZoomCapPointerDown(): void {
    const { zoomOptions } = this;

    if (zoomOptions && isSome(zoomOptions.max)) {
      const { min } = zoomOptions;
      this.zoomOptions = isSome(min) ? { min } : null;
    }
  }

  private _onMinZoomCapPointerDown(): void {
    const { zoomOptions } = this;

    if (zoomOptions && isSome(zoomOptions.min)) {
      const { max } = zoomOptions;
      this.zoomOptions = isSome(max) ? { max } : null;
    }
  }

  private _getDataLines(config: HistogramConfig): DataLineInfos[] {
    const { average, standardDeviation, standardDeviationCount } = config;

    return [
      ...this._getStandardDeviationDataLines(
        standardDeviation,
        average,
        standardDeviationCount || 1
      ),
      ...(config.dataLines || [])
    ];
  }

  private _getStandardDeviationDataLines(
    standardDeviation: number,
    average: number,
    count: number
  ): DataLineInfos[] {
    return getDeviationValues(standardDeviation, average, count).map((value) => ({ value }));
  }
}
