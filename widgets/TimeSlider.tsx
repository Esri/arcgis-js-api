/**
 * The TimeSlider widget simplifies visualization of temporal data
 * in your application. Before adding the TimeSlider to your application, you
 * first should understand how it can be configured to correctly display your temporal data.
 *
 * The [fullTimeExtent](#fullTimeExtent) property defines the entire time period within
 * which you can visualize your time aware data using the TimeSlider widget.
 * You can visualize temporal data up to a point in time, from a point in time,
 * at an instant of time, or from data that falls within a time range by setting the [mode](#mode) property.
 * The [stops](#stops) property defines specific locations on the TimeSlider where thumbs will snap to when
 * manipulated. You can set this property to be either an array of dates, a number of evenly spaced stops
 * or a specific time interval (e.g. days). The [timeExtent](#timeExtent) property defines the
 * current location of the thumbs.
 *
 * [![widgets-timeSlider](../assets/img/apiref/widgets/widgets-timeSlider.png)](../sample-code/sandbox/?sample=widgets-timeslider)
 *
 * If the time slider widget settings are invalid, the current time segment and thumbs will be drawn in a red color with a message indicating the issue.
 * [![widgets-timeSlider-invalid](../assets/img/apiref/widgets/timeslider/widgets-timeslider-invalid.png)](../sample-code/sandbox/?sample=widgets-timeslider)
 *
 * ### Configuring your time aware data
 *
 * The TimeSlider widget can be configured to manipulate your time aware data in two different ways
 * as outlined below:
 *
 * #### Update the view's timeExtent
 *
 * The TimeSlider widget can be configured to update the view's {@link module:esri/views/View#timeExtent timeExtent}
 * when the [view](#view) property is set on the widget. Use this approach if your service has been published with `timeInfo` information.
 * This approach requires less code.
 *
 * >>> esri-read-more
 * With this approach, whenever a TimeSlider's [timeExtent](#timeExtent) is updated, the assigned view's
 * {@link module:esri/views/View#timeExtent timeExtent} will also be updated. All time-aware layers will automatically update to conform to the view's timeExtent.
 * Check out the [Set time properties on data (ArcGIS Pro)](https://pro.arcgis.com/en/pro-app/help/mapping/time/set-the-time-properties-on-data.htm) and
 * [Configure time settings on a layer (ArcGIS Online)](https://doc.arcgis.com/en/arcgis-online/create-maps/configure-time-mv.htm) documents to learn how to enable time on your service.
 *
 * ```js
 * // Create a TimeSlider for the first decade of the 21st century.
 * // set the TimeSlider's view property.
 * // Only show content for the 1st year of the decade for all
 * // time aware layers in the view.
 * const timeSlider = new TimeSlider({
 *   container: "timeSliderDiv",
 *   view: view,
 *   // show data within a given time range
 *   // in this case data within one year
 *   mode: "time-window",
 *   fullTimeExtent: { // entire extent of the timeSlider
 *     start: new Date(2000, 0, 1),
 *     end: new Date(2010, 0, 1)
 *   },
 *   timeExtent: { // location of timeSlider thumbs
 *     start: new Date(2000, 0, 1),
 *     end: new Date(2001, 1, 1)
 *   }
 * });
 * view.ui.add(timeSlider, "manual");
 * ```
 * >>>
 *
 * #### Watch TimeSlider's timeExtent
 *
 * The TimeSlider widget can also be configured to apply a custom logic whenever the TimeSlider's [timeExtent](#timeExtent) property changes.
 * This approach can be used if your service has a date field but does not have time enabled. You can
 * also use this approach if you want to have a complete control over the logic whenever the timeSlider's timeExtent updates.
 *
 * >>> esri-read-more
 * For example, when the TimeSlider's [timeExtent](#timeExtent) is updated,
 * you may want to update the {@link module:esri/views/layers/support/FeatureFilter#timeExtent timeExtent}
 * property of client-side {@link module:esri/views/layers/FeatureLayerView#filter filters} and
 * {@link module:esri/views/layers/FeatureLayerView#effect effects} on a
 * {@link module:esri/views/layers/FeatureLayerView#filter},
 * {@link module:esri/views/layers/CSVLayerView#filter},
 * {@link module:esri/views/layers/GeoJSONLayerView#filter} or
 * {@link module:esri/views/layers/OGCFeatureLayerView#filter}.
 * A {@link module:esri/views/layers/support/FeatureFilter} can be used to filter out data that is not included in the current timeExtent,
 * and a {@link module:esri/views/layers/support/FeatureEffect} can be used to apply a visual effect to features that
 * are included in or excluded from the current timeExtent. The {@link module:esri/views/layers/support/FeatureEffect} can only be used in a
 * {@link module:esri/views/MapView 2D MapView}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Warning:** When watching the [timeExtent](#timeExtent) property, the [view](#view) should not be set on the TimeSlider widget instance.
 * Setting both the TimeSlider's [view](#view) property (explained above) and applying a
 * {@link module:esri/views/layers/support/FeatureFilter#timeExtent timeExtent} to a client-side
 * {@link module:esri/views/layers/FeatureLayerView#effect effect} may result in excluded features not being rendered to the view.
 * This is because excluded features have been filtered out by the view's timeExtent, so the effect will not show.
 *
 * :::
 *
 * ```js
 * // Create a time slider to update layerView filter
 * const timeSlider = new TimeSlider({
 *   container: "timeSliderDiv",
 *   mode: "cumulative-from-start",
 * });
 * view.ui.add(timeSlider, "manual");
 *
 * // wait until the layer view is loaded
 * let timeLayerView;
 * view.whenLayerView(layer).then((layerView) => {
 *   timeLayerView = layerView;
 *   const fullTimeExtent = layer.timeInfo.fullTimeExtent;
 *   const end = fullTimeExtent.start;
 *
 *   // set up time slider properties based on layer timeInfo
 *   timeSlider.fullTimeExtent = fullTimeExtent;
 *   timeSlider.timeExtent = {
 *     start: null,
 *     end: end
 *   };
 *   timeSlider.stops = {
 *     interval: layer.timeInfo.interval
 *   };
 * });
 *
 * timeSlider.watch("timeExtent", (value) => {
 *   // update layer view filter to reflect current timeExtent
 *   timeLayerView.filter = {
 *     timeExtent: value
 *   };
 * });
 * ```
 * >>>
 *
 * ### Set TimeSlider widget from a WebMap
 *
 * The TimeSlider widget will automatically import settings from a {@link module:esri/WebMap} if that WebMap contains a timeSlider definition
 * and is indirectly associated with the widget.
 *
 * >>> esri-read-more
 * For example, the following snippet shows how a WebMap with timeslider settings can be loaded into a view.
 *
 * ```js
 * const view = new MapView({
 *   map: WebMap.fromJSON({
 *     operationalLayers: [],
 *     widgets: {
 *       timeSlider: {
 *         properties:{
 *           currentTimeExtent: [1522299600000, 1524114000000],
 *           endTime: 1536814800000,
 *           startTime: 1522299600000,
 *           thumbCount: 2,
 *           thumbMovingRate: 2000,
 *           timeStopInterval: {
 *             interval: 3,
 *             units: "esriTimeUnitsWeeks"
 *           }
 *        }
 *      }
 *   }
 * });
 *
 * // set the timeslider widget to honor the timeslider settings
 * // from the webmap.
 * const timeSlider = new TimeSlider({
 *   view
 * });
 * const { unit, value } = timeSlider.stops.interval;
 * console.log(`The stop interval is every ${value} {$unit}.`); // output: "This stop interval is every 3 weeks."
 *
 * ```
 *
 * It is important to note that any settings that you define will take precedence of those imported from a webmap
 * that may be associated with the assigned View. In the example above, the timeSlider definition in the
 * webmap has a play rate (or `thumbMovingRate`) of 2 seconds. The following snippet overrides this setting.
 *
 * ```js
 * const timeSlider = new TimeSlider({
 *   view,
 *   playRate: 1000
 * });
 * console.log(`The playback rate is ${timeSlider.playRate} ms.`); // output: "The playback rate is 1000 ms."
 * ```
 *
 * It may be necessary to examine or adjust settings after they have been imported from a webmap. To determine when the
 * import has completed you can watch for the `ready` {@link module:esri/widgets/TimeSlider/TimeSliderViewModel#state state}
 * of the [viewModel](#viewModel). The snippet expands or snaps the [fullTimeExtent](#fullTimeExtent) after the property
 * has been computed from an associated webmap.
 *
 * ```js
 * watchUtils.whenEqualOnce(timeSlider.viewModel, "state", "ready", () => {
 *   timeSlider.fullTimeExtent = timeSlider.fullTimeExtent.expandTo("years");
 * });
 * ```
 * >>>
 *
 * @module esri/widgets/TimeSlider
 * @since 4.12
 *
 * @see [TimeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/TimeSlider.tsx)
 * @see [TimeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_TimeSlider.scss)
 * @see module:esri/widgets/TimeSlider/TimeSliderViewModel
 * @see [Sample - TimeSlider widget](../sample-code/widgets-timeslider/index.html)
 * @see [Sample - Filter features with TimeSlider](../sample-code/timeslider-filter/index.html)
 * @see [Sample - TimeSlider with offset](../sample-code/widgets-timeslider-offset/index.html)
 * @see [Sample - Visualizing wind data with VectorFieldRenderer](../sample-code/layers-imagery-vfrenderer/index.html)
 * @see [Temporal data (ArcGIS Pro)](https://pro.arcgis.com/en/pro-app/help/mapping/time/temporal-data.htm)
 * @see [Set time properties on data (ArcGIS Pro)](https://pro.arcgis.com/en/pro-app/help/mapping/time/set-the-time-properties-on-data.htm)
 * @see [Configure time settings on a layer (ArcGIS Online)](https://doc.arcgis.com/en/arcgis-online/create-maps/configure-time-mv.htm)
 * @see {@link module:esri/layers/GeoJSONLayer#timeInfo Set GeoJSONLayer timeInfo}
 * @see {@link module:esri/layers/CSVLayer#timeInfo Set CSVLayer timeInfo}
 * @see module:esri/views/ui/DefaultUI
 */

// esri
import TimeExtent from "esri/TimeExtent";
import TimeInterval from "esri/TimeInterval";
import WebMap from "esri/WebMap";
import WebScene from "esri/WebScene";

// esri.core
import { equals } from "esri/core/arrayUtils";
import Collection from "esri/core/Collection";
import { neverReached } from "esri/core/compilerUtils";
import { on } from "esri/core/events";
import { isSome, Maybe, isNone, andThen } from "esri/core/maybe";
import { throttle } from "esri/core/throttle";
import { offsetDate, truncateDate } from "esri/core/timeUtils";
import { init } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.intl
import { convertDateFormatToIntlOptions, formatDate } from "esri/intl/date";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import { PersistableWidget } from "esri/widgets/interfaces";
import Slider from "esri/widgets/Slider";
import Widget from "esri/widgets/Widget";

// esri.widgets.Slider
import { TickConfig } from "esri/widgets/Slider/interfaces";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx } from "esri/widgets/support/widget";

// esri.widgets.TimeSlider
import { Stops, TimeSliderMode } from "esri/widgets/TimeSlider/interfaces";
import TimeSliderViewModel from "esri/widgets/TimeSlider/TimeSliderViewModel";

// esri.widgets.TimeSlider.t9n
import TimeSliderMessages from "esri/widgets/TimeSlider/t9n/TimeSlider";

const CSS = {
  widgetIcon: "esri-icon-time-clock",

  esriWidget: "esri-widget",
  esriWidgetButton: "esri-widget--button",
  esriButtonDisabled: "esri-button--disabled",
  esriDisabled: "esri-disabled",

  timeSlider: "esri-time-slider",
  timeSliderOutOfBounds: "esri-time-slider--out-of-bounds",
  timeSliderMode: "esri-time-slider__mode--", // + mode (eg "instant", "time-extent")
  timeSliderLayout: "esri-time-slider__layout--", // + layout (eg "wide", "compact")
  timeSliderRow: "esri-time-slider__row",

  animation: "esri-time-slider__animation",
  animationButton: "esri-time-slider__animation-button",
  animationPlay: "esri-icon-play",
  animationPause: "esri-icon-pause",

  timeExtent: "esri-time-slider__time-extent",
  timeExtentGroup: "esri-time-slider__time-extent-group",
  timeExtentDate: "esri-time-slider__time-extent-date",
  timeExtentTime: "esri-time-slider__time-extent-time",
  timeExtentSeparator: "esri-time-slider__time-extent-separator",

  min: "esri-time-slider__min",
  minDate: "esri-time-slider__min-date",

  slider: "esri-time-slider__slider",
  sliderMajorTick: "majorTick",
  sliderMinorTick: "minorTick",

  max: "esri-time-slider__max",
  maxDate: "esri-time-slider__max-date",

  previous: "esri-time-slider__previous",
  previousButton: "esri-time-slider__previous-button",
  previousIcon: "esri-icon-reverse",

  next: "esri-time-slider__next",
  nextButton: "esri-time-slider__next-button",
  nextIcon: "esri-icon-forward",

  warning: "esri-time-slider__warning",
  warningIcon: "esri-icon-notice-triangle",
  warningText: "esri-time-slider__warning-text"
};

const MINIMUM_MINOR_TICK_SPACING = 3; // pixels
const RESIZE_THROTTLE_INTERVAL = 100; // milliseconds
const MINIMUM_WIDE_LAYOUT_WIDTH = 858;

type LabelType = "min" | "max" | "extent";
type Layout = "auto" | "compact" | "wide";

interface DateLabelFormatter {
  (
    value: Date | [Date, Date],
    type: LabelType,
    element: Element,
    layout: Exclude<Layout, "auto">
  ): void;
}

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
    | "disabled"
    | "effectiveStops"
    | "fullTimeExtent"
    | "loop"
    | "mode"
    | "playRate"
    | "stops"
    | "tickConfigs"
    | "timeExtent"
    | "timeVisible"
    | "values"
    | "view"
    | "viewModel"
  >
>;

@subclass("esri.widgets.TimeSlider")
class TimeSlider extends Widget implements PersistableWidget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * This function is used by the [labelFormatFunction](#labelFormatFunction)
   * property to specify custom formatting and styling of the min, max and
   * extent labels of the time slider widget.
   *
   * @callback module:esri/widgets/TimeSlider~DateLabelFormatter
   *
   * @param {Date | Date[]} value - The date(s) that correspond to labels. When the label
   *     type is `min` or `max` a single date value will be parsed. When the
   *     type is `extent` value will be a date array with two values.
   *     The first and second date in the array correspond the time extent's start and end values.
   * @param {"min" | "max" | "extent"} [type] - The label type that you want to format.
   * @param {HTMLElement} [element] - The HTML element corresponding to the label type. You can add or modify the
   *     default style of individual labels by adding CSS classes to this element.
   *     You can also add custom behavior to labels by attaching event listeners to individual elements.
   * @param {"compact" | "wide"} [layout] - The TimeSlider [layout](#layout).
   */

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
   *   timeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2001, 3, 8)
   *   },
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
   *   timeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2001, 0, 1)
   *   },
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
   * Divides the time slider's [fullTimeExtent](#fullTimeExtent) into equal parts.
   * A stop will be placed at the start and end of each division resulting in _count + 1_ [effectiveStops](#effectiveStops).
   *
   * @property {number} count - Number of evenly spaced divisions.
   * @property {module:esri/TimeExtent} [timeExtent] - The time period to divide. If unspecified, the time slider's [fullTimeExtent](#fullTimeExtent) will be used.
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
   *   timeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2000, 3, 8)
   *   },
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
  constructor(properties?: TimeSliderProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    this.own([
      this._slider.watch("values", (newValues: [number] | [number, number]) => {
        if (this._ignoreNextSliderUpdate) {
          this._ignoreNextSliderUpdate = false;
          return;
        }
        const newTimeExtent = this.viewModel.valuesToTimeExtent(newValues);
        if (isSome(this.timeExtent)) {
          if (isSome(newTimeExtent)) {
            if (!this.timeExtent.equals(newTimeExtent)) {
              this.timeExtent = newTimeExtent;
            }
          } else {
            this.timeExtent = null;
          }
        } else {
          if (isSome(newTimeExtent)) {
            this.timeExtent = newTimeExtent;
          }
        }
      }),
      on(
        window,
        "resize",
        throttle(() => this.scheduleRender(), RESIZE_THROTTLE_INTERVAL)
      ),
      init(this, "effectiveStops", () => this._updateSliderSteps())
    ]);
  }

  destroy(): void {
    this._slider.destroy();
    this._tickFormat = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  private _ignoreNextSliderUpdate = false;

  private readonly _slider = new Slider({
    precision: 0,
    visibleElements: {
      rangeLabels: false
    },
    rangeLabelInputsEnabled: false
  });

  private _tickFormat: Maybe<TickFormat> = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  disabled
  //----------------------------------

  /**
   * When `true`, sets the widget to a disabled state so the user cannot interact with it.
   *
   * @name disabled
   * @instance
   * @type {Boolean}
   * @since 4.16
   * @default false
   *
   * @example
   * // Create a timeslider widget that is initially disabled.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2000, 5, 1),
   *     end: new Date(2010, 0, 1)
   *   },
   *   disabled: true
   * });
   */
  @property()
  disabled = false;

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
   * timeSlider.effectiveStops.forEach((stop) => {
   *   console.log(stop);
   * });
   */
  @aliasOf("viewModel.effectiveStops")
  readonly effectiveStops: Maybe<Date[]> = null;

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
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   view: view
   * });
   *
   * // wait for the time-aware layer to load
   * layer.when(() => {
   *   // set up time slider properties based on layer timeInfo
   *   timeSlider.fullTimeExtent = layer.timeInfo.fullTimeExtent;
   *   timeSlider.stops = {
   *    interval: layer.timeInfo.interval
   *   };
   * });
   */
  @aliasOf("viewModel.fullTimeExtent")
  fullTimeExtent: Maybe<TimeExtent> = null;

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
  //  interactive
  //----------------------------------

  /**
   * Convenience property to determine if the widget is interactive.
   *
   * @name interactive
   * @instance
   * @type {Boolean}
   * @readonly
   * @ignore
   */
  @property({
    readOnly: true
  })
  get interactive(): boolean {
    return !this.disabled && this.viewModel && this.viewModel.state !== "disabled";
  }

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
  //  labelFormatFunction
  //----------------------------------

  /**
   * A function used to specify custom formatting and styling of the min, max, and extent labels of the TimeSlider.
   * Please refer to [DateLabelFormatter](#DateLabelFormatter) for more detailed information on how to configure the style and format of the labels.
   *
   * The image below demonstrates how the date format, color, size, and font family of the label can be customized.
   * The code for this specific configuration is shown in the following example.
   *
   * ![timeslider-custom-labels](../assets/img/apiref/widgets/timeslider-custom-labels.png)
   *
   * @name labelFormatFunction
   * @instance
   * @type {module:esri/widgets/TimeSlider~DateLabelFormatter}
   * @since 4.17
   * @default null
   *
   * @example
   * // The following example customizes the text and styling of the min, max and extent labels.
   * // Specifically:
   * // 1) min/max labels
   * //    - short date format with en-us locale (e.g. "9/1/2020", "9/2/2020", "9/3/2020" etc)
   * //    - use 'Orbitron' font, magenta color and 16pt size
   * // 2) extent label
   * //    - display accumulated days (e.g. "Day 0", "Day 1", "Day 2" etc)
   * //    - use 'Orbitron' font, red color and 22pt size
   * const timeSlider = new TimeSlider({
   *   container: "timeSlider",
   *   fullTimeExtent: {
   *     start: new Date(2020, 8, 1),
   *     end: new Date(2020, 8, 8)
   *   },
   *   stops: {
   *     interval: {
   *       value: 1,
   *       unit: "days"
   *     }
   *   },
   *   mode: "instant",
   *   labelFormatFunction: (value, type, element, layout) => {
   *     const normal = new Intl.DateTimeFormat('en-us');
   *     switch (type) {
   *       case "min":
   *       case "max":
   *         element.setAttribute("style", "font-family: 'Orbitron', sans-serif; font-size: 16px; color: magenta;");
   *         element.innerText = normal.format(value);
   *         break;
   *       case "extent":
   *         const start = timeSlider.fullTimeExtent.start;
   *         const days = (value[0].getTime() - start.getTime()) / 1000 / 3600 / 24;
   *         element.setAttribute(`style`, `font-family: 'Orbitron', sans-serif; font-size: 22px; color: red;`);
   *         element.innerText = `Day ${days}`;
   *         break;
   *     }
   *   }
   * });
   */
  @property()
  labelFormatFunction: Maybe<DateLabelFormatter> = null;

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Determines the layout used by the TimeSlider widget.
   *
   * Possible values are listed below:
   * | Value   | Description |
   * | ---     | --- |
   * | auto    | Automatically uses the "compact" layout when the widget width is less than 858 pixels. Otherwise the "wide" layout it used. |
   * | compact | Widget elements are oriented vertically. This layout is better suited to narrower widths. |
   * | wide    | Widget elements are oriented laterally. This thinner design is better suited to wide applications. |
   *
   * @name layout
   * @since 4.16
   * @instance
   * @type {"auto" | "compact" | "wide" }
   * @default auto
   * @example
   * timeSlider.layout = "compact";
   */
  @property({
    value: "auto"
  })
  set layout(value: Layout) {
    const layouts: Layout[] = ["auto", "compact", "wide"];

    if (layouts.indexOf(value) === -1) {
      value = "auto";
    }

    this._set("layout", value);
  }

  //----------------------------------
  //  loop
  //----------------------------------

  /**
   * When `true`, the time slider will play its animation in a loop.
   *
   * @name loop
   * @instance
   * @type {Boolean}
   * @default false
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
  loop = false;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/widgets/TimeSlider/t9n/TimeSlider")
  messages: TimeSliderMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

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
   * instant               | The slider will show temporal data that falls on a single instance in time. Set the [timeExtent](#timeExtent) property's `start` and `end` dates to same date: `{start: sameDate, end: sameDate}` | <img alt="mode-instance" src="../assets/img/apiref/widgets/timeslider/mode-instance.png"> |
   * time-window           | The slider will show temporal data that falls within a given time range. This is the default. Set [timeExtent](#timeExtent) property's `start` and `date` properties to desired dates. | <img alt="mode-instance" src="../assets/img/apiref/widgets/timeslider/mode-time-window.png"> |
   * cumulative-from-start | Similar to `time-window` with the start time is always pinned to the start of the slider. Set the [timeExtent](#timeExtent) property's `start` date to `null` and set `end` date to a desired date: `{start: null, end: date}` | <img alt="mode-instance" src="../assets/img/apiref/widgets/timeslider/mode-from-start.png"> |
   * cumulative-from-end   | Also, similar to the `time-window` with the end time pinned to the end of the slider. Set the [timeExtent](#timeExtent) property's `start` date to a desired date and set `end` date to `null`: `{start: date, end: null}` | <img alt="mode-instance" src="../assets/img/apiref/widgets/timeslider/mode-from-end.png"> |
   *
   * @name mode
   * @instance
   * @type {"instant" | "time-window" | "cumulative-from-start" | "cumulative-from-end"}
   * @default "time-window"
   * @see {@link module:esri/widgets/TimeSlider#timeExtent timeExtent}
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
   *   timeExtent: {
   *     start: null,
   *     end: new Date(2001, 0, 1) //end date
   *   }
   * });
   */
  @aliasOf("viewModel.mode")
  mode: TimeSliderMode = "time-window";

  //----------------------------------
  //  playRate
  //----------------------------------

  /**
   * The time (in milliseconds) between animation steps.
   *
   * ::: esri-md class="panel trailer-1"
   *
   * When a {@link module:esri/views/View} is associated with a TimeSlider and the TimeSlider is playing, the playback will pause before advancing if the View is still updating.
   * For example, if the `playRate` is set to 1,000 (one second) and the `View` takes 1.5 seconds to render then the TimeSlider thumb(s) will advance every
   * 1.5 seconds rather than every second.
   * :::
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
  //  stops
  //----------------------------------

  /**
   * Defines specific locations on the time slider where thumbs will snap to when manipulated.
   * If unspecified, ten evenly spaced stops will be added.
   *
   * For continuous sliding, set `stops` to `null`:
   * ```js
   * timeSlider.stops = null;
   * ```
   *
   * To define regularly spaced stops, parse an object with `interval` and `timeExtent` properties
   * with types {@link module:esri/TimeInterval} and {@link module:esri/TimeExtent} respectively.
   * The [timeExtent](#timeExtent) property is optional and used to confine stops to a certain date range.
   * This property is useful to commence stops on a specific day of the week or month.
   * If a stop definition by interval results in excess of 10,000 stops, then the view model
   * will default to ten evenly spaced stops.
   *
   * ```js
   * // Add yearly intervals starting from the beginning of the TimeSlider.
   * timeSlider.stops = {
   *   interval: {
   *     value: 1,
   *     unit: "years"
   *   }
   * };
   * ```
   * Rather than setting the stops as time intervals, the TimeSlider can be divided into evenly spaced
   * stops using the `count` property. Similar to the previous method, divisions can be confined to a specific date range
   * using the optional timeExtent property.
   * ```js
   * // Add stops at 15 evenly spaced intervals.
   * timeSlider.stops = {
   *   count: 15
   * };
   * ```
   * For irregularly spaced stops, simply assign an array of dates as demonstrated below.
   * ```js
   * // Add nine irregular stops.
   * timeSlider.stops = {
   *   dates: [
   *     new Date(2000, 0, 1), new Date(2001, 3, 8), new Date(2002, 0, 10),
   *     new Date(2003, 12, 8), new Date(2004, 2, 19), new Date(2005, 7, 5),
   *     new Date(2006, 9, 11), new Date(2007, 11, 21), new Date(2008, 1, 10)
   *   ]
   * };
   * ```
   * Lastly, to constrain or offset division by count or interval use the optional timeExtent property.
   * ```js
   * // Add yearly stops from Christmas 2019 to Christmas 2029 only
   * timeSlider.stops = {
   *   interval: {
   *     value: 1,
   *     unit: "years"
   *   },
   *   timeExtent: {
   *     start: new Date(2019, 11, 25),
   *     end: new Date(2029, 11, 25)
   *   }
   * };
   *
   * // Likewise, add stops that represent quarters of 2019 only.
   * timeSlider.stops = {
   *   count: 4,
   *   timeExtent: {
   *     start: new Date(2019, 0, 1),
   *     end: new Date(2020, 0, 1)
   *   }
   * };
   * ```
   *
   * @name stops
   * @instance
   * @type {module:esri/widgets/TimeSlider~StopsByDates | module:esri/widgets/TimeSlider~StopsByCount | module:esri/widgets/TimeSlider~StopsByInterval}
   * @autocast { "value": "Object" }
   * @default { count : 10 }
   *
   */
  @aliasOf("viewModel.stops")
  stops: Stops = { count: 10 };

  //----------------------------------
  //  tickConfigs
  //----------------------------------

  /**
   * When set, overrides the default TimeSlider ticks labelling system.
   * Please refer to {@link module:esri/widgets/Slider~TickConfig} for detailed documentation
   * on how to configure tick placement, style, and behavior.
   *
   * @name tickConfigs
   * @instance
   * @type {module:esri/widgets/Slider~TickConfig[]}
   * @default null
   * @since 4.16
   *
   * @example
   * // By default in "en-US" the TimeSlider will display ticks with "2010, 2011, 2012, etc".
   * // Overwrite TimeSlider tick configuration so that labels display "'10, '12, '14, etc" in red.
   * const timeSlider = new TimeSlider({
   *   container: "timeSliderDiv",
   *   fullTimeExtent: {
   *     start: new Date(2010, 0, 1),
   *     end: new Date(2020, 0, 1)
   *   },
   *   tickConfigs: [{
   *     mode: "position",
   *     values: [
   *       new Date(2010, 0, 1), new Date(2012, 0, 1), new Date(2014, 0, 1),
   *       new Date(2016, 0, 1), new Date(2018, 0, 1), new Date(2020, 0, 1)
   *     ].map((date) => date.getTime()),
   *     labelsVisible: true,
   *     labelFormatFunction: (value) => {
   *       const date = new Date(value);
   *       return `'${date.getUTCFullYear() - 2000}`;
   *     },
   *     tickCreatedFunction: (value, tickElement, labelElement) => {
   *       tickElement.classList.add("custom-ticks");
   *       labelElement.classList.add("custom-labels");
   *     }
   *   }]
   * };
   *
   * @example
   * // this CSS goes with the snippet above.
   * #timeSlider .custom-ticks {
   *   background-color: red;
   *   width: 1px;
   *   height: 8px;
   * }
   * #timeSlider .custom-labels {
   *   font-family: Georgia, 'Times New Roman', Times, serif;
   *   font-size: 15px;
   *   color: red;
   * }
   */
  @property()
  tickConfigs: Maybe<TickConfig[]> = null;

  //----------------------------------
  //  timeExtent
  //----------------------------------

  /**
   * The current time extent of the time slider. This property can be watched for
   * updates and used to update the time extent property in queries and/or the layer filters and effects.
   * The following table shows the `timeExtent` values returned for each [mode](#mode).
   *
   * | Mode    | The timeExtent value |
   * | ------- | -------------------- |
   * | `time-window` | `{start: startDate, end: endDate}` |
   * | `instant` | `{start: sameDate, end: sameDate}` |
   * | `cumulative-from-start` | `{start: null, end: endDate}` |
   * | `cumulative-from-end` | `{start: startDate, end: null}` |
   *
   * @name timeExtent
   * @instance
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
   *   timeExtent: {
   *     start: new Date(2019, 2, 1),
   *     end: new Date(2019, 2, 28)
   *   }
   * });
   * timeSlider.watch("timeExtent", (timeExtent) => {
   *   console.log("Time extent now starts at", timeExtent.start, "and finishes at:", timeExtent.end);
   * });
   */
  @aliasOf("viewModel.timeExtent")
  timeExtent: Maybe<TimeExtent> = null;

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
   *   timeExtent: {
   *     start: new Date(2019, 2, 1),
   *     end: new Date(2019, 2, 28)
   *   }
   * });
   */
  @property({
    nonNullable: true
  })
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
   * @deprecated since version 4.20. Use [timeExtent](#timeExtent) instead.
   */
  @aliasOf("viewModel.values")
  values: Maybe<Date[]> = null;

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
   *   timeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2000, 0, 1)
   *   }
   * });
   * view.ui.add(timeSlider, "top-left");
   *
   * view.watch("timeExtent", (timeExtent) => {
   *   console.log("New view time is: ", timeExtent.start);
   * });
   */
  @aliasOf("viewModel.view")
  view: Maybe<IMapView | ISceneView> = null;

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
   *     timeExtent: {
   *       start: new Date(2000, 0, 1),
   *       end: new Date(2000, 0, 1)
   *     }
   * });
   */
  @property({
    type: TimeSliderViewModel
  })
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
   *   timeExtent: {
   *     start: new Date(2000, 0, 1),
   *     end: new Date(2000, 0, 1)
   *   }
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
    const {
      _slider,
      domNode,
      effectiveStops,
      fullTimeExtent,
      interactive,
      messagesCommon,
      mode,
      tickConfigs,
      timeExtent,
      timeVisible,
      viewModel: { state, timeExtentValues }
    } = this;

    if (isSome(fullTimeExtent)) {
      const { start, end } = fullTimeExtent;

      if (isSome(start) && isSome(end)) {
        const startTime = start.getTime();
        const endTime = end.getTime();

        const fullTimeExtentChanged = _slider.min !== startTime || _slider.max !== endTime;
        if (fullTimeExtentChanged) {
          _slider.min = startTime;
          _slider.max = endTime;
        }

        if (isSome(tickConfigs)) {
          if (_slider.tickConfigs !== tickConfigs) {
            _slider.tickConfigs = tickConfigs;
          }
        } else {
          const sliderWidth = _slider.trackElement?.offsetWidth || 400;
          const millisecondsPerPixel = (endTime - startTime) / sliderWidth;

          const tickFormat = TickFormats.find((tickFormat) => {
            const duration = tickFormat.minor.toMilliseconds();
            return duration > MINIMUM_MINOR_TICK_SPACING * millisecondsPerPixel;
          });

          const tickFormatChanged = this._tickFormat !== tickFormat && tickFormat != null;
          if (tickFormatChanged) {
            this._tickFormat = tickFormat;
          }

          if (fullTimeExtentChanged || tickFormatChanged) {
            const minorValues = this._getTickPositions(tickFormat.minor);
            const minor: TickConfig = {
              mode: "position",
              values: minorValues,
              labelsVisible: false,
              tickCreatedFunction: (_value, tick) => {
                tick.classList.add(CSS.sliderMinorTick);
              }
            };

            const majorValues = this._getTickPositions(tickFormat.major);
            const major: TickConfig = {
              mode: "position",
              values: majorValues,
              labelsVisible: true,
              tickCreatedFunction: (_value, tick) => {
                tick.classList.add(CSS.sliderMajorTick);
              },
              labelFormatFunction: (value) => formatDate(value, tickFormat.format)
            };
            _slider.tickConfigs = [minor, major];
          }
        }
      }
    }

    const isOutOfBounds =
      isNone(this.fullTimeExtent) ||
      isNone(this.timeExtent) ||
      this.timeExtent.isAllTime ||
      this.timeExtent.isEmpty ||
      (isSome(this.timeExtent.start) &&
        (this.timeExtent.start < this.fullTimeExtent.start ||
          this.timeExtent.start > this.fullTimeExtent.end)) ||
      (isSome(this.timeExtent.end) &&
        (this.timeExtent.end > this.fullTimeExtent.end ||
          this.timeExtent.end < this.fullTimeExtent.start));

    if (isOutOfBounds) {
      this._ignoreNextSliderUpdate = true;
      switch (mode) {
        case "time-window":
          _slider.values = [_slider.min, _slider.max];
          break;
        case "instant":
        case "cumulative-from-end":
          _slider.values = [_slider.min];
          break;
        case "cumulative-from-start":
          _slider.values = [_slider.max];
          break;
      }
    } else {
      if (isSome(timeExtentValues)) {
        if (!equals(_slider.values, timeExtentValues)) {
          _slider.values = timeExtentValues;
        }
      } else {
        _slider.values = null;
      }
    }

    _slider.disabled = !interactive;

    const isReady = state === "ready";
    const isPlaying = state === "playing";
    const isDisabled =
      isOutOfBounds || !interactive || isNone(effectiveStops) || effectiveStops.length === 0;

    const layout: Exclude<Layout, "auto"> =
      this.layout === "auto"
        ? domNode.clientWidth < MINIMUM_WIDE_LAYOUT_WIDTH
          ? "compact"
          : "wide"
        : this.layout;

    const play = (
      <div class={CSS.animation}>
        <button
          aria-disabled={isDisabled ? "true" : "false"}
          aria-label={isPlaying ? messagesCommon.control.stop : messagesCommon.control.play}
          bind={this}
          class={this.classes(
            CSS.esriWidgetButton,
            CSS.animationButton,
            isDisabled && CSS.esriButtonDisabled
          )}
          disabled={isDisabled}
          title={isPlaying ? messagesCommon.control.stop : messagesCommon.control.play}
          onclick={this._playOrStopClick}
          type="button"
        >
          <div
            class={this.classes(
              (isReady || isDisabled) && CSS.animationPlay,
              isPlaying && CSS.animationPause
            )}
          />
        </button>
      </div>
    );

    const timeContent = isSome(this.labelFormatFunction) ? (
      <div
        key="extent"
        bind={this}
        class={CSS.timeExtentDate}
        data-type="extent"
        data-layout={layout}
        data-date={andThen(timeExtent, (t) => [t.start, t.end])}
        afterCreate={this._createLabel}
        afterUpdate={this._createLabel}
      />
    ) : isNone(timeExtent) || (isSome(timeExtent) && timeExtent.isAllTime) ? (
      [
        <div class={this.classes(CSS.warning, CSS.warningIcon)} />,
        <div key="warning-text" class={CSS.warningText}>
          {this.messages.noTimeExtent}
        </div>
      ]
    ) : timeExtent.isEmpty ? (
      [
        <div class={this.classes(CSS.warning, CSS.warningIcon)} />,
        <div key="warning-text" class={CSS.warningText}>
          {this.messages.emptyTimeExtent}
        </div>
      ]
    ) : (
      [
        isSome(timeExtent.start) && (
          <div key="start-date-group" class={CSS.timeExtentGroup}>
            <div key="start-date" class={CSS.timeExtentDate}>
              {this._formatDate(timeExtent.start)}
            </div>
            {timeVisible && (
              <div key="start-time" class={CSS.timeExtentTime}>
                {this._formatTime(timeExtent.start)}
              </div>
            )}
          </div>
        ),
        isSome(timeExtent.start) &&
          isSome(timeExtent.end) &&
          timeExtent.start.getTime() !== timeExtent.end.getTime() && (
            <div key="separator" class={CSS.timeExtentSeparator}>
              –
            </div>
          ),
        isSome(timeExtent.end) &&
          (isNone(timeExtent.start) || timeExtent.start.getTime() !== timeExtent.end.getTime()) && (
            <div key="end-date-group" class={CSS.timeExtentGroup}>
              <div key="end-date" class={CSS.timeExtentDate}>
                {this._formatDate(timeExtent.end)}
              </div>
              {timeVisible && (
                <div key="end-time" class={CSS.timeExtentTime}>
                  {this._formatTime(timeExtent.end)}
                </div>
              )}
            </div>
          )
      ]
    );

    const time = (
      <div class={this.classes(CSS.timeExtent, !interactive && CSS.esriButtonDisabled)}>
        {[timeContent]}
      </div>
    );

    const minContent = isSome(this.labelFormatFunction) ? (
      <div
        key="min-date"
        bind={this}
        class={CSS.minDate}
        data-date={andThen(fullTimeExtent, (t) => t.start)}
        data-type="min"
        data-layout={layout}
        afterCreate={this._createLabel}
        afterUpdate={this._createLabel}
      ></div>
    ) : (
      isSome(fullTimeExtent) &&
      isSome(fullTimeExtent.start) && [
        <div key="min-date" class={CSS.minDate}>
          {this._formatDate(fullTimeExtent.start)}
        </div>,
        timeVisible && <div key="min-time">{this._formatTime(fullTimeExtent.start)}</div>
      ]
    );

    const min = (
      <div class={this.classes(CSS.min, !interactive && CSS.esriButtonDisabled)}>
        {[minContent]}
      </div>
    );

    const slider = <div class={CSS.slider}>{_slider.render()}</div>;

    const maxContent = isSome(this.labelFormatFunction) ? (
      <div
        key="max-date"
        bind={this}
        class={CSS.maxDate}
        data-date={andThen(fullTimeExtent, (t) => t.end)}
        data-type="max"
        data-layout={layout}
        afterCreate={this._createLabel}
        afterUpdate={this._createLabel}
      ></div>
    ) : (
      isSome(fullTimeExtent) &&
      isSome(fullTimeExtent.end) && [
        <div key="max-date" class={CSS.maxDate}>
          {this._formatDate(fullTimeExtent.end)}
        </div>,
        timeVisible && <div key="max-time">{this._formatTime(fullTimeExtent.end)}</div>
      ]
    );

    const max = (
      <div class={this.classes(CSS.max, !interactive && CSS.esriButtonDisabled)}>
        {[maxContent]}
      </div>
    );

    const previous = (
      <div class={CSS.previous}>
        <button
          aria-disabled={isDisabled ? "true" : "false"}
          aria-label={messagesCommon.pagination.previous}
          bind={this}
          class={this.classes(
            CSS.esriWidgetButton,
            CSS.previousButton,
            (isPlaying || isDisabled) && CSS.esriButtonDisabled
          )}
          disabled={isDisabled}
          title={messagesCommon.pagination.previous}
          onclick={this._previousClick}
          type="button"
        >
          <div class={CSS.previousIcon} />
        </button>
      </div>
    );

    const next = (
      <div class={CSS.next}>
        <button
          aria-disabled={isDisabled ? "true" : "false"}
          aria-label={messagesCommon.pagination.next}
          bind={this}
          class={this.classes(
            CSS.esriWidgetButton,
            CSS.nextButton,
            (isPlaying || isDisabled) && CSS.esriButtonDisabled
          )}
          disabled={isDisabled}
          title={messagesCommon.pagination.next}
          onclick={this._nextClick}
          type="button"
        >
          <div class={CSS.nextIcon} />
        </button>
      </div>
    );

    const timeSlider = (
      <div
        class={this.classes(
          CSS.timeSlider,
          CSS.esriWidget,
          `${CSS.timeSliderMode}${mode}`,
          `${CSS.timeSliderLayout}${layout}`,
          !interactive && CSS.esriDisabled,
          isOutOfBounds && CSS.timeSliderOutOfBounds
        )}
      >
        {layout === "wide" && (
          <div class={CSS.timeSliderRow}>{[play, time, min, slider, max, previous, next]}</div>
        )}
        {layout === "compact" && [
          <div key="time-slider-row-1" class={CSS.timeSliderRow}>
            {[time]}
          </div>,
          <div key="time-slider-row-2" class={CSS.timeSliderRow}>
            {[slider]}
          </div>,
          <div key="time-slider-row-3" class={CSS.timeSliderRow}>
            {[min, previous, play, next, max]}
          </div>
        ]}
      </div>
    );
    return timeSlider;
  }

  /**
   * Updates the {@link module:esri/WebMap~TimeSlider time slider} widget definition in the provided {@link module:esri/WebMap}.
   *
   * @method updateWebDocument
   * @instance
   * @since 4.18
   *
   * @param {module:esri/WebMap} webmap - The webmap to be updated.
   *
   * @example
   * // Load a webmap containing a timeslider widget into a MapView. Once loaded, advance the current time
   * // extent by one stop and then update the original webmap.
   *
   * const webmap = new WebMap({
   *   portalItem: {
   *     id: "acea555a4b6f412dae98994bcfdbc002"
   *   }
   * });
   *
   * const view = new MapView({
   *   container: "viewDiv",
   *   map: webmap
   * });
   * await view.when();
   *
   * const timeSlider = new TimeSlider({
   *   view
   * });
   * // Advance to thumb to next time extent
   * timeSlider.next();
   * timeSlider.updateWebDocument(webmap);
   * webmap.save();
   */
  updateWebDocument(document: WebMap | WebScene): void {
    this.viewModel?.updateWebDocument(document);
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _createLabel(element: Element): void {
    if (isNone(this.labelFormatFunction)) {
      return;
    }
    const type = element.getAttribute("data-type") as LabelType;
    const layout = element.getAttribute("data-layout") as Exclude<Layout, "auto">;
    const dates = element["data-date"] as Date | [Date, Date];
    this.labelFormatFunction(dates, type, element, layout);
  }

  private _getTickPositions(interval: TimeInterval): number[] {
    const { fullTimeExtent } = this;
    if (isNone(fullTimeExtent) || isNone(fullTimeExtent.start) || isNone(fullTimeExtent.end)) {
      return [];
    }
    const { start, end } = fullTimeExtent;
    const values: number[] = [];
    const { value, unit } = interval;

    let step = truncateDate(start, unit);

    while (step.getTime() <= end.getTime()) {
      if (step.getTime() >= start.getTime()) {
        values.push(step.getTime());
      }
      step = offsetDate(step, value, unit);
    }
    return values;
  }

  private _formatDate(date: Date): string {
    if (!date) {
      return null;
    }
    return formatDate(date, convertDateFormatToIntlOptions("short-date"));
  }

  private _formatTime(date: Date): string {
    if (!date) {
      return null;
    }
    return formatDate(date, convertDateFormatToIntlOptions("long-time"));
  }

  private _updateSliderSteps(): void {
    this._slider.steps =
      isSome(this.effectiveStops) && this.effectiveStops.length > 0
        ? this.effectiveStops.map((date) => date.getTime())
        : null;
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

export default TimeSlider;
