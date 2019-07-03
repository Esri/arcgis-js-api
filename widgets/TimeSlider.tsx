/**
 * The TimeSlider widget simplifies time manipulation in your application.
 *
 * It can be configured to update the view's {@link module:esri/views/MapView#timeExtent timeExtent}
 * when the [view](#view) property is set. All time-aware layers will automatically update to conform
 * to the view's time extent.
 *
 * The TimeSlider widget can also be used to set the
 * {@link module:esri/views/layers/support/FeatureFilter#timeExtent timeExtent}
 * property of client-side filters and effects on {@link module:esri/views/layers/FeatureLayerView#filter},
 * {@link module:esri/views/layers/CSVLayerView#filter}, and
 * {@link module:esri/views/layers/GeoJSONLayerView#filter}. In this case, it is advisable not to
 * set the [view](#view) property. Instead, watch the time slider's [timeExtent](#timeExtent) property. Whenever the property
 * is updated, assign the [timeExtent](#timeExtent) value to a layer's filter or effect property.
 *
 * If the time slider's [view](#view) property is set and the time slider's time extent is applied to an effect,
 * then excluded features will not be rendered. This is because excluded features have been filtered out by the view's
 * time extent.
 *
 * Using the time slider, you can visualize temporal data up to or from a point in time, an instant of time, or
 * data that falls within a time range by setting the [mode](#mode) property.
 *
 * [Stops](#stops), if undefined, will default to ten evenly spaced stops.
 * Lastly, [values](#values) will default to the first one or two stops of the time slider depending on the [mode](#mode).
 *
 * [![widgets-timeSlider](../../assets/img/apiref/widgets/widgets-timeSlider.png)](../sample-code/sandbox/sandbox.html?sample=widgets-timeslider)
 *
 * @module esri/widgets/TimeSlider
 * @since 4.12
 * @beta
 *
 * @see [TimeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/TimeSlider.tsx)
 * @see [TimeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_TimeSlider.scss)
 * @see module:esri/widgets/TimeSlider/TimeSliderViewModel
 * @see module:esri/views/ui/DefaultUI
 * @see [Sample - TimeSlider widget](../sample-code/widget-timeslider/index.html)
 * @see [Sample - Filter features with TimeSlider](../sample-code/timeslider-filter/index.html)
 *
 * @example
 * // Create a time slider for the first decade of the 21st century.
 * // Only show content for the 1st year of the decade for all time aware layers.
 * var timeSlider = new TimeSlider({
 *   container: "timeSliderDiv",
 *   view: view,
 *   mode: "time-window",
 *   fullTimeExtent: {
 *     start: new Date(2000, 0, 1),
 *     end: new Date(2010, 0, 1)
 *   },
 *   values:[
 *     new Date(2000, 0, 1),
 *     new Date(2001, 1, 1)
 *   ]
 * });
 * view.ui.add(timeSlider, "top-left");
 *
 * // print the current time extent to the console.
 * timeSlider.watch("timeExtent", function(value){
 *   console.log("Current time window is: " + value.toJSON());
 * });
 *
 * @example
 * // Create a time slider to update layerView filter
 * var timeSlider = new TimeSlider({
 *   container: "timeSliderDiv",
 *   mode: "cumulative-from-start",
 * });
 * view.ui.add(timeSlider, "top-left");
 *
 * // wait till the layer view is loaded
 * let timeLayerView;
 * view.whenLayerView(layer).then(function(layerView) {
 *   timeLayerView = layerView;
 *   const fullTimeExtent = layer.timeInfo.fullTimeExtent;
 *   const start = fullTimeExtent.start;
 *
 *   // set up time slider properties based on layer timeInfo
 *   timeSlider.fullTimeExtent = fullTimeExtent;
 *   timeSlider.values = [start];
 *   timeSlider.stops = {
 *     interval: layer.timeInfo.interval
 *   }
 * });
 *
 * timeSlider.watch("timeExtent", function(value){
 *   // update layerview filter to reflect current timeExtent
 *   timeLayerView.filter = {
 *     timeExtent: value
 *   };
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign"/>

// dojo
import * as i18nCommon from "dojo/i18n!esri/nls/common";
import * as i18n from "dojo/i18n!esri/widgets/TimeSlider/nls/TimeSlider";

// esri
import TimeExtent = require("esri/TimeExtent");
import TimeInterval = require("esri/TimeInterval");

// esri.core
import { equals } from "esri/core/arrayUtils";
import Collection = require("esri/core/Collection");
import { neverReached } from "esri/core/compilerUtils";
import EsriError = require("esri/core/Error");
import { on } from "esri/core/events";
import { clamp } from "esri/core/mathUtils";
import { Maybe, isSome } from "esri/core/maybe";
import { throttle } from "esri/core/throttle";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.intl
import { convertDateFormatToIntlOptions, formatDate } from "esri/intl/date";

// esri.layers.support
import { appendDate, truncateDate } from "esri/layers/support/timeUtils";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Slider = require("esri/widgets/Slider");
import Widget = require("esri/widgets/Widget");

// esri.widgets.Slider
import { TickConfig } from "esri/widgets/Slider/interfaces";

// esri.widgets.TimeSlider
import { Stops, TimeSliderMode } from "esri/widgets/TimeSlider/interfaces";
import TimeSliderViewModel = require("esri/widgets/TimeSlider/TimeSliderViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx } from "esri/widgets/support/widget";
import { isRTL } from "esri/widgets/support/widgetUtils";

const CSS = {
  slider: "esri-time-slider esri-widget",
  sliderMode: "esri-time-slider--", // + mode (e.g. "esri-time-slider--cumulative-from-start")
  widgetIcon: "esri-icon-time-clock",
  playButton: "esri-widget--button esri-time-slider__play",

  timeDisplay: "esri-time-slider__dates",
  timeExtentDate: "esri-time-slider__time-extent-date",
  timeExtentTime: "esri-time-slider__time-extent-time",
  timeExtentSeparator: "esri-time-slider__time-extent-separator",
  timeTrack: "esri-time-slider__track",
  previousButton: "esri-widget--button esri-time-slider__previous",
  nextButton: "esri-widget--button esri-time-slider__next",
  buttonDisabled: "esri-button--disabled",

  previousIcon: "esri-icon-reverse esri-time-slider__previous-icon",
  nextIcon: "esri-icon-forward esri-time-slider__next-icon",
  playIcon: "esri-icon-play esri-time-slider__play-icon",
  stopIcon: "esri-icon-pause esri-time-slider__pause-icon",

  majorTick: "majorTick",
  minorTick: "minorTick",
  majorLabel: "majorLabel"
};

const MINIMUM_MINOR_TICK_SPACING = 3; // pixels
const RESIZE_THROTTLE_INTERVAL = 100; // milliseconds

interface TickFormat {
  minor: TimeInterval;
  major: TimeInterval;
  format: Intl.DateTimeFormatOptions;
}

const TickFormats = new Collection<TickFormat>([
  {
    minor: new TimeInterval({ value: 100, unit: "milliseconds" }),
    major: new TimeInterval({ value: 1, unit: "seconds" }),
    format: { second: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 500, unit: "milliseconds" }),
    major: new TimeInterval({ value: 5, unit: "seconds" }),
    format: { second: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "seconds" }),
    major: new TimeInterval({ value: 20, unit: "seconds" }),
    format: { minute: "numeric", second: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 2, unit: "seconds" }),
    major: new TimeInterval({ value: 30, unit: "seconds" }),
    format: { minute: "numeric", second: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 10, unit: "seconds" }),
    major: new TimeInterval({ value: 1, unit: "minutes" }),
    format: { minute: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 15, unit: "seconds" }),
    major: new TimeInterval({ value: 5, unit: "minutes" }),
    format: { hour: "numeric", minute: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "minutes" }),
    major: new TimeInterval({ value: 20, unit: "minutes" }),
    format: { hour: "numeric", minute: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 5, unit: "minutes" }),
    major: new TimeInterval({ value: 2, unit: "hours" }),
    format: { hour: "numeric", minute: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 15, unit: "minutes" }),
    major: new TimeInterval({ value: 6, unit: "hours" }),
    format: { hour: "numeric", minute: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "hours" }),
    major: new TimeInterval({ value: 1, unit: "days" }),
    format: { day: "numeric", month: "short" }
  },
  {
    minor: new TimeInterval({ value: 6, unit: "hours" }),
    major: new TimeInterval({ value: 1, unit: "weeks" }),
    format: { day: "numeric", month: "short" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "days" }),
    major: new TimeInterval({ value: 1, unit: "months" }),
    format: { month: "long" }
  },
  {
    minor: new TimeInterval({ value: 2, unit: "days" }),
    major: new TimeInterval({ value: 1, unit: "months" }),
    format: { month: "short" }
  },
  {
    minor: new TimeInterval({ value: 3, unit: "days" }),
    major: new TimeInterval({ value: 1, unit: "months" }),
    format: { month: "short" }
  },
  {
    minor: new TimeInterval({ value: 4, unit: "days" }),
    major: new TimeInterval({ value: 3, unit: "months" }),
    format: { month: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "weeks" }),
    major: new TimeInterval({ value: 1, unit: "years" }),
    format: { year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "months" }),
    major: new TimeInterval({ value: 1, unit: "years" }),
    format: { year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 2, unit: "months" }),
    major: new TimeInterval({ value: 2, unit: "years" }),
    format: { year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "years" }),
    major: new TimeInterval({ value: 1, unit: "decades" }),
    format: { year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 2, unit: "years" }),
    major: new TimeInterval({ value: 5, unit: "decades" }),
    format: { year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 5, unit: "decades" }),
    major: new TimeInterval({ value: 10, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1, unit: "centuries" }),
    major: new TimeInterval({ value: 10, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 2, unit: "centuries" }),
    major: new TimeInterval({ value: 20, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 5, unit: "centuries" }),
    major: new TimeInterval({ value: 50, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 10, unit: "centuries" }),
    major: new TimeInterval({ value: 100, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 20, unit: "centuries" }),
    major: new TimeInterval({ value: 200, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 50, unit: "centuries" }),
    major: new TimeInterval({ value: 500, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 100, unit: "centuries" }),
    major: new TimeInterval({ value: 1000, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 200, unit: "centuries" }),
    major: new TimeInterval({ value: 1000, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 500, unit: "centuries" }),
    major: new TimeInterval({ value: 5000, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  },
  {
    minor: new TimeInterval({ value: 1000, unit: "centuries" }),
    major: new TimeInterval({ value: 10000, unit: "centuries" }),
    format: { era: "short", year: "numeric" }
  }
]);

type TimeSliderProperties = Partial<
  Pick<
    TimeSlider,
    | "effectiveStops"
    | "fullTimeExtent"
    | "loop"
    | "mode"
    | "playRate"
    | "stops"
    | "timeVisible"
    | "values"
    | "view"
    | "viewModel"
  >
>;

@subclass("esri.widgets.TimeSlider")
class TimeSlider extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * Specifies an array of dates for the time slider widget. Can be used to create irregularly spaced stops.
   *
   * @typedef {Object} module:esri/widgets/TimeSlider~StopsByDates
   *
   * @property {Date[]} dates - Array of dates.
   *
   * @example
   * // Explicitly define 5 stops.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2004, 2, 19)
   *   },
   *   values: [
   *     new Date(2000, 0, 1),
   *     new Date(2001, 3, 8)
   *   ],
   *   stops: {
   *     dates: [
   *       new Date(2000, 0, 1),
   *       new Date(2001, 3, 8),
   *       new Date(2002, 0, 10),
   *       new Date(2003, 12, 8),
   *       new Date(2004, 2, 19)
   *     ]
   *   }
   * });
   */

  /**
   * Defines regularly spaced stops on the time slider from a {@link module:esri/TimeInterval}. The optional
   * {@link module:esri/TimeExtent} can confine the subdivision to a specific time frame. StopByInterval is useful
   * when the spacing is in terms of months and years, which cannot be reliably expressed in milliseconds.
   *
   * @property {module:esri/TimeInterval} interval - Specifies a granularity of temporal data and allows you to visualize the data at specified intervals. It can be set at regular interval such as every hour or every day.
   * @property {module:esri/TimeExtent} [timeExtent] - A period of time with definitive start and end dates. The time slider widget's [fullTimeExtent](#fullTimeExtent) will be used if this property is not specified.
   *
   * @example
   * // Add yearly intervals starting from the beginning of the TimeSlider.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2015, 2, 19)
   *   },
   *   values: [
   *     new Date(2000, 0, 1),
   *     new Date(2001, 0, 1)
   *   ],
   *   stops: {
   *     interval: {
   *       value: 1,
   *       unit: "years"
   *     }
   *   }
   * });
   *
   * @typedef {Object} module:esri/widgets/TimeSlider~StopsByInterval
   */

  /**
   * Specifies number of stops for the time slider widget. The time slider stops are divided into
   * evenly spaced stops.
   *
   * @property {number} count - Specifies number of stops count.
   * @property {module:esri/TimeExtent} [timeExtent] - A period of time with definitive start and end dates. The time slider widget's [fullTimeExtent](#fullTimeExtent) will be used if this property is not specified.
   *
   * @typedef {Object} module:esri/widgets/TimeSlider~StopsByCount
   *
   *
   * @example
   * // Add ten evenly spaced stops.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2004, 2, 19)
   *   },
   *   values: [
   *     new Date(2000, 0, 1),
   *     new Date(2000, 3, 8)
   *   ],
   *   stops: {
   *     count: 10
   *   }
   * });
   */

  /**
   * @constructor
   * @alias module:esri/widgets/TimeSlider
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(params?: TimeSliderProperties) {
    super();
  }

  postInitialize(): void {
    this._slider = new Slider({
      precision: 0,
      rangeLabelsVisible: true,
      rangeLabelInputsEnabled: false,
      labelFormatFunction: (value: number, type: string) => {
        if ((type === "min" || type === "max") && value) {
          const date = new Date(value);
          const dateLabel = this._formateDate(date);
          const timeLabel = this._formateTime(date);
          return this.timeVisible ? `${dateLabel}\n${timeLabel}` : `${dateLabel}`;
        }
        return null;
      }
    });

    const throttledResize = throttle(() => this.scheduleRender(), RESIZE_THROTTLE_INTERVAL);

    this.own([
      this._slider.on(["value-change", "values-change"], () => {
        this.set("values", this._slider.values.map((value) => new Date(value)));
      }),
      on(window, "resize", throttledResize),
      this.watch("effectiveStops", () => {
        this._updateSliderSteps();
      }),
      this.watch(["stops", "fullTimeExtent"], () => {
        this._createDefaultValues();
      })
    ]);

    this._updateSliderSteps();
    this._createDefaultValues();
    this._validateTimeExtent();
  }

  destroy(): void {
    this.view = null;
    this._slider.destroy();
    this._tickFormat = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _slider: Slider = null;
  private _tickFormat: TickFormat = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  effectiveStops
  //----------------------------------

  /**
   * Lists the specific locations on the timeline where handle(s) will snap to when manipulated.
   *
   * @name effectiveStops
   * @instance
   * @type {Date[]}
   * @default null
   * @readonly
   *
   * @example
   * // Add yearly stops starting from the beginning of 2001.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 5, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   stops: {
   *     interval: {
   *       value: 1,
   *       unit: "years"
   *     },
   *     timeExtent: {
   *       start: new Date(2001, 0, 1),
   *       end: new Date(2010, 0, 1)
   *    }
   *   }
   * });
   * timeSlider.effectiveStops.forEach((stop) => {
   *   console.log(stop);
   * });
   */
  @aliasOf("viewModel.effectiveStops")
  @renderable()
  readonly effectiveStops: Date[] = null;

  //----------------------------------
  //  fullTimeExtent
  //----------------------------------

  /**
   * The temporal extent of the entire slider.
   * It defines the entire time period within which you can visualize
   * your time aware data using the time slider widget.
   *
   * @name fullTimeExtent
   * @instance
   * @type {module:esri/TimeExtent}
   * @autocast
   *
   * @example
   * // Create a new TimeSlider with set dates
   * var timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   view: view
   * });
   *
   * // wait for the time-aware layer to load
   * layer.when(function() {
   *   // set up time slider properties based on layer timeInfo
   *   timeSlider.fullTimeExtent = layer.timeInfo.fullTimeExtent;
   *   timeSlider.stops = {
   *    interval: layer.timeInfo.interval
   *   };
   * });
   */
  @aliasOf("viewModel.fullTimeExtent")
  @renderable()
  fullTimeExtent: TimeExtent = null;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   * @readonly
   */
  @property()
  iconClass: string = CSS.widgetIcon;

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
  //  loop
  //----------------------------------

  /**
   * When `true`, the time slider will play its animation in a loop.
   *
   * @name loop
   * @instance
   * @type {Boolean}
   * @default true
   *
   * @example
   * // Start a time slider animation that advances every second
   * // and restarts when it reaches the end.
   * timeSlider.set({
   *   loop: true,
   *   playRate: 1000
   * });
   * timeSlider.play();
   */
  @aliasOf("viewModel.loop")
  loop = true;

  //----------------------------------
  //  playRate
  //----------------------------------

  /**
   * The time (in milliseconds) between animation steps.
   *
   * @name playRate
   * @instance
   * @type {number}
   * @default 1000
   *
   * @example
   * // Start a time slider animation that advances
   * // ten times a second and stops when it reaches the end.
   * timeSlider.set({
   *   loop: false,
   *   playRate: 100
   * });
   * timeSlider.play();
   */
  @aliasOf("viewModel.playRate")
  playRate: number = 1000;

  //----------------------------------
  //  mode
  //----------------------------------

  /**
   * The time slider mode. This property is used for defining if the temporal data will be displayed
   * cumulatively up to a point in time, a single instant in time, or within a time range. See
   * the following table for possible values.
   *
   * Possible Values       | Description   | Example |
   * ----------------------|-------------- | ------- |
   * instant               | The slider will show temporal data that falls on a single instance in time. Set the [values](#values) property to an array with one date. | <img alt="mode-instance" src="../../assets/img/apiref/widgets/timeslider/mode-instance.png"> |
   * time-window           | The slider will show temporal data that falls within a given time range. This is the default. Set [values](#values) property to an array with two dates. | <img alt="mode-instance" src="../../assets/img/apiref/widgets/timeslider/mode-time-window.png"> |
   * cumulative-from-start | Similar to `time-window` with the start time is always pinned to the start of the slider. Set the [values](#values) property to have one date, which is the end date. | <img alt="mode-instance" src="../../assets/img/apiref/widgets/timeslider/mode-from-start.png"> |
   * cumulative-from-end   | Also, similar to the `time-window` with the end time pinned to the end of the slider. Set the [values](#values) property to have one date, which is the start date. | <img alt="mode-instance" src="../../assets/img/apiref/widgets/timeslider/mode-from-end.png"> |
   *
   * @name mode
   * @instance
   * @type {String}
   * @tstype "instant" | "time-window" | "cumulative-from-start" | "cumulative-from-end"
   * @default "time-window"
   * @example
   * // Create a single thumbed time slider that includes all historic content.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   view: view,
   *   mode: "cumulative-from-start",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   values: [new Date(2001, 0, 1)] //end date
   * });
   */
  @aliasOf("viewModel.mode")
  @renderable()
  mode: TimeSliderMode = "time-window";

  //----------------------------------
  //  stops
  //----------------------------------

  /**
   * Defines specific locations on the time slider where thumbs will snap to when manipulated.
   * If unspecified, ten evenly spaced stops will be added.
   *
   * To define regularly spaced stops based on specified {@link module:esri/TimeInterval time interval} and
   * {@link module:esri/TimeExtent time extent}, use {@link module:esri/widgets/TimeSlider~StopsByInterval}.
   * Use {@link module:esri/widgets/TimeSlider~StopsByCount} to define evenly spaced timeline stops. Lastly,
   * for irregular dates use {@link module:esri/widgets/TimeSlider~StopsByDates}. Please refer below for examples
   * of each of these objects.
   *
   * @name stops
   * @instance
   * @type {module:esri/widgets/TimeSlider~StopsByDates | module:esri/widgets/TimeSlider~StopsByCount | module:esri/widgets/TimeSlider~StopsByInterval}
   * @autocast { "value": "Object" }
   * @default { count : 10 }
   *
   * @example
   * // Add yearly stops starting from the beginning of 2001.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 5, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   stops: {
   *     interval: {
   *       value: 1,
   *       unit: "years"
   *     },
   *     timeExtent: {
   *       start: new Date(2001, 0, 1),
   *       end: new Date(2010, 0, 1)
   *     }
   *   }
   * });
   *
   * // Add ten stops that are evenly distributed for the year 2005 only.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 5, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   stops: {
   *     count: 10,
   *     timeExtent: {
   *       start: new Date(2005, 0, 1),
   *       end: new Date(2006, 0, 1)
   *     }
   *   }
   * });
   *
   * // Explicitly define nine stops.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   values: [
   *     new Date(2000, 0, 1),
   *     new Date(2000, 0, 1)],
   *   stops: {
   *     dates: [
   *       new Date(2000, 0, 1), new Date(2001, 3, 8), new Date(2002, 0, 10),
   *       new Date(2003, 12, 8), new Date(2004, 2, 19), new Date(2005, 7, 5),
   *       new Date(2006, 9, 11), new Date(2007, 11, 21), new Date(2008, 1, 10)
   *     ]
   *   }
   * });
   */
  @aliasOf("viewModel.stops")
  stops: Stops = { count: 10 };

  //----------------------------------
  //  timeExtent
  //----------------------------------

  /**
   * The current time extent of the time slider. This property can be watched for
   * updates and used to update the time extent property in queries and/or the layer filters and effects.
   *
   * @name timeExtent
   * @instance
   * @readonly
   * @type {module:esri/TimeExtent}
   * @default null
   *
   * @example
   * // Display the time extent to the console whenever it changes.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   mode: "time-window",
   *   fullTimeExtent: {
   *     start: new Date(2019, 2, 3),
   *     end: new Date(2019, 2, 5)
   *   },
   *   values: [
   *     new Date(2019, 2, 1),
   *     new Date(2019, 2, 28)
   *   ]
   * });
   * timeSlider.watch("timeExtent", function(timeExtent){
   *   console.log("Time extent now starts at", timeExtent.start, "and finishes at:", timeExtent.end);
   * });
   */
  @aliasOf("viewModel.timeExtent")
  readonly timeExtent: TimeExtent = null;

  //----------------------------------
  //  timeVisible
  //----------------------------------

  /**
   * Shows/hides time in the display.
   *
   * @name timeVisible
   * @instance
   * @type {Boolean}
   * @default false
   *
   * @example
   * // For time sliders with a small time extent it may be useful to display times as shown below.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   mode: "time-window",
   *   timeVisible: true,
   *   fullTimeExtent: {
   *     start: new Date(2019, 2, 3),
   *     end: new Date(2019, 2, 5)
   *   },
   *   values: [
   *     new Date(2019, 2, 1),
   *     new Date(2019, 2, 28)
   *   ]
   * });
   */
  @property({
    nonNullable: true
  })
  @renderable()
  timeVisible: boolean = false;

  //----------------------------------
  //  values
  //----------------------------------

  /**
   * The user defined time extent. Values define the current location of time slider
   * thumbs. The "time-window" [mode](#mode) has two values, the other modes only have one.
   *
   * @name values
   * @instance
   * @type {Date[]}
   * @default null
   *
   * @example
   * // Create a time slider and print handle positions to the console whenever they change.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   view: view,
   *   mode: "instant",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   values: [
   *     new Date(2000, 0, 1) // Initialize the current time for the beginning of the fullTimeExtent.
   *   ]
   * });
   * timeSlider.watch("values", function(values){
   *   console.log("The current time is: ", values[0]);
   * });
   */
  @aliasOf("viewModel.values")
  @renderable()
  values: Date[] = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}.
   * If this property is set, the TimeSlider widget will update the view's {@link module:esri/views/MapView.timeExtent timeExtent}
   * property whenever the time slider is manipulated or updated programmatically. This property will affect
   * any time-aware layer in the view.
   *
   * @name view
   * @instance
   * @type { module:esri/views/MapView | module:esri/views/SceneView }
   *
   * @example
   * // Create and then add a TimeSlider widget and then listen to changes in the View's time extent.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   view: view,
   *   mode: "instant",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   values: [new Date(2000, 0, 1)]
   * });
   * view.ui.add(timeSlider, "top-left");
   *
   * view.watch("timeExtent", function(timeExtent){
   *   console.log("New view time is: ", timeExtent.start);
   * });
   */
  @aliasOf("viewModel.view")
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/TimeSlider/TimeSliderViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/TimeSlider/TimeSliderViewModel}
   * @autocast
   *
   * @example
   * // Below is an example of initializing a TimeSlider widget using properties
   * // on the viewModel instead of the widget.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   viewModel: {
   *     view: view,
   *     mode: "instant",
   *     fullTimeExtent: {
   *       start: new Date(2000, 0, 1),
   *       end: new Date(2010, 0, 1)
   *     },
   *     values: [new Date(2000, 0, 1)]
   *   }
   * });
   */
  @property({
    type: TimeSliderViewModel
  })
  @renderable(["viewModel.state"])
  viewModel: TimeSliderViewModel = new TimeSliderViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Incrementally moves the time extent forward one stop.
   *
   * @method next
   * @instance
   *
   * @example
   * // Advance the slider's time extent.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   mode: "instant",
   *   fullTimeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   values: [new Date(2000, 0, 1)]
   * });
   * timeSlider.next();
   */
  @aliasOf("viewModel.next")
  next(): void {}

  /**
   * Initiates the time slider's temporal playback.
   *
   * @method play
   * @instance
   *
   * @example
   * // Start a TimeSlider animation if not already playing.
   * if (timeSlider.state === "ready") {
   *   timeSlider.play();
   * }
   */
  @aliasOf("viewModel.play")
  play(): void {}

  /**
   * Incrementally moves the time extent back one stop.
   *
   * @method previous
   * @instance
   *
   * @example
   * timeSlider.previous();
   */
  @aliasOf("viewModel.previous")
  previous(): void {}

  /**
   * Stops the time slider's temporal playback.
   *
   * @method stop
   * @instance
   *
   * @example
   * // Stop the current TimeSlider animation.
   * if (timeSlider.viewModel.state === "playing") {
   *   timeSlider.stop();
   * }
   */
  @aliasOf("viewModel.stop")
  stop(): void {
    return null;
  }

  render(): VNode {
    const { fullTimeExtent, mode, _slider, effectiveStops, timeVisible, values, viewModel } = this;

    if (fullTimeExtent != null) {
      const { start, end } = fullTimeExtent;

      // Min/max of slider.
      if (start == null || end == null) {
        return;
      }
      _slider.min = start.valueOf();
      _slider.max = end.valueOf();

      // Generate ticks and tick labels.
      const sliderWidth = _slider.trackElement ? _slider.trackElement.offsetWidth : 400;
      const millisecondsPerPixel = (end.getTime() - start.getTime()) / sliderWidth;

      const tickFormat = TickFormats.find((tickFormat) => {
        const duration = tickFormat.minor.toMilliseconds();
        return duration > MINIMUM_MINOR_TICK_SPACING * millisecondsPerPixel;
      });

      if (this._tickFormat !== tickFormat && tickFormat != null) {
        this._tickFormat = tickFormat;

        const minorValues = this._getTickPositions(tickFormat.minor);
        const minor: TickConfig = {
          mode: "position",
          values: minorValues,
          labelsVisible: false,
          tickCreatedFunction: (value, tick, label) => {
            tick.classList.add(CSS.minorTick);
          }
        };

        const majorValues = this._getTickPositions(tickFormat.major);
        const major: TickConfig = {
          mode: "position",
          values: majorValues,
          labelsVisible: true,
          tickCreatedFunction: (value, tick, label) => {
            tick.classList.add(CSS.majorTick);
            label.classList.add(CSS.majorLabel);
          },
          labelFormatFunction: (value) => formatDate(value, tickFormat.format)
        };
        _slider.tickConfigs = [minor, major];
      }
    }

    const thumbs = values ? values.map((date) => date.getTime()) : null;
    if (!equals(_slider.values, thumbs)) {
      _slider.values = thumbs;
    }

    let startDate: Maybe<string> = null;
    let startTime: Maybe<string> = null;
    let endDate: Maybe<string> = null;
    let endTime: Maybe<string> = null;
    if (values && values.length > 0) {
      const date = values[0];
      startDate = this._formateDate(date);
      if (timeVisible) {
        startTime = this._formateTime(date);
      }
    }
    if (mode === "time-window" && values && values.length > 1) {
      const date = values[1];
      endDate = this._formateDate(date);
      if (timeVisible) {
        endTime = this._formateTime(date);
      }
    }

    const { state } = viewModel;
    const isReady = state === "ready";
    const isPlaying = state === "playing";
    const isDisabled = state === "disabled" || effectiveStops.length === 0;

    const play = (
      <button
        aria-disabled={isDisabled ? "true" : "false"}
        aria-label={isPlaying ? i18nCommon.control.stop : i18nCommon.control.play}
        bind={this}
        class={this.classes(CSS.playButton, isDisabled && CSS.buttonDisabled)}
        disabled={isDisabled}
        title={isPlaying ? i18nCommon.control.stop : i18nCommon.control.play}
        onclick={this._playOrStopClick}
      >
        <div
          class={this.classes((isReady || isDisabled) && CSS.playIcon, isPlaying && CSS.stopIcon)}
        />
      </button>
    );
    const time = (
      <div class={CSS.timeDisplay}>
        {isSome(startDate) ? (
          <div key="start-date" class={CSS.timeExtentDate}>
            {startDate}
          </div>
        ) : null}
        {isSome(startTime) ? (
          <div key="start-time" class={CSS.timeExtentTime}>
            {startTime}
          </div>
        ) : null}
        {isSome(endDate) ? (
          <div key="separator" class={CSS.timeExtentSeparator}>
            –
          </div>
        ) : null}
        {isSome(endDate) ? (
          <div key="end-date" class={CSS.timeExtentDate}>
            {endDate}
          </div>
        ) : null}
        {isSome(endTime) ? (
          <div key="end-time" class={CSS.timeExtentTime}>
            {endTime}
          </div>
        ) : null}
      </div>
    );
    const slider = <div class={CSS.timeTrack}>{_slider.render()}</div>;
    const previous = (
      <button
        aria-disabled={isDisabled ? "true" : "false"}
        aria-label={i18nCommon.pagination.previous}
        bind={this}
        class={this.classes(CSS.previousButton, (isPlaying || isDisabled) && CSS.buttonDisabled)}
        disabled={isDisabled}
        title={i18nCommon.pagination.previous}
        onclick={this._previousClick}
      >
        <div class={CSS.previousIcon} />
      </button>
    );
    const next = (
      <button
        aria-disabled={isDisabled ? "true" : "false"}
        aria-label={i18nCommon.pagination.next}
        bind={this}
        class={this.classes(CSS.nextButton, (isPlaying || isDisabled) && CSS.buttonDisabled)}
        disabled={isDisabled}
        title={i18nCommon.pagination.next}
        onclick={this._nextClick}
      >
        <div class={CSS.nextIcon} />
      </button>
    );
    const nodes = [play, time, slider, previous, next];
    if (isRTL()) {
      nodes.reverse();
    }
    const timeSlider = (
      <div class={this.classes(CSS.slider, `${CSS.sliderMode}${mode}`)}>{nodes}</div>
    );
    return timeSlider;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _createDefaultValues(): void {
    // If no preset time extent then set to the first stop(s).
    const { fullTimeExtent, effectiveStops, mode, values } = this;
    if (fullTimeExtent && effectiveStops && mode && !values) {
      if (mode === "time-window") {
        this.values = effectiveStops.length > 1 ? [effectiveStops[0], effectiveStops[1]] : null;
      } else {
        this.values = effectiveStops.length > 0 ? [effectiveStops[0]] : null;
      }
    }
  }

  private _getTickPositions(interval: TimeInterval): number[] {
    const { fullTimeExtent } = this;
    const { start, end } = fullTimeExtent;
    const values: number[] = [];

    let step = truncateDate(start, interval.unit);

    while (step.getTime() <= end.getTime()) {
      if (step.getTime() >= start.getTime()) {
        values.push(step.getTime());
      }
      step = appendDate(step, interval);
    }
    return values;
  }

  private _formateDate(date: Date): string {
    return formatDate(date, convertDateFormatToIntlOptions("short-date"));
  }

  private _formateTime(date: Date): string {
    return formatDate(date, convertDateFormatToIntlOptions("long-time"));
  }

  private _updateSliderSteps(): void {
    this._slider.steps =
      this.effectiveStops.length > 0 ? this.effectiveStops.map((date) => date.getTime()) : null;
  }

  private _validateTimeExtent(): void {
    // Detect and/or attempt to repair invalid values.
    if (this.fullTimeExtent && this.mode && this.values) {
      // Throw error if array is invalid.
      if (!Array.isArray(this.values)) {
        throw new EsriError("time-slider:invalid-values", "Values must be an array of dates.");
      }
      if (this.values.length === 0 || this.values.some((value) => !(value instanceof Date))) {
        throw new EsriError("time-slider:invalid-values", "Values must be an array of dates.");
      }

      // Clamp values to the full time extent.
      this.values = this.values.map((value) => {
        const time = value.getTime();
        const clamped = clamp(
          time,
          this.fullTimeExtent.start.getTime(),
          this.fullTimeExtent.end.getTime()
        );
        return new Date(clamped);
      });

      // Ensure that the value count is correct relative to the slider mode.
      switch (this.mode) {
        case "instant":
        case "cumulative-from-start":
        case "cumulative-from-end":
          if (this.values.length > 1) {
            this.values.splice(1);
          }
          break;
        case "time-window":
          if (this.values.length === 1) {
            this.values.push(this.fullTimeExtent.end);
          } else if (this.values.length > 2) {
            this.values.splice(2);
          }
          this.values.sort((a, b) => a.getTime() - b.getTime());
          break;
        default:
          neverReached(this.mode);
      }
    }
  }

  @accessibleHandler()
  private _playOrStopClick(): void {
    switch (this.viewModel.state) {
      case "ready":
        this.viewModel.play();
        break;
      case "playing":
        this.viewModel.stop();
        break;
      case "disabled":
        break;
      default:
        neverReached(this.viewModel.state);
    }
  }

  @accessibleHandler()
  private _previousClick(): void {
    this.viewModel.previous();
  }

  @accessibleHandler()
  private _nextClick(): void {
    this.viewModel.next();
  }
}

export = TimeSlider;
