/**
 * A slider widget that can be used for filtering data, or gathering
 * numeric input from a user. The slider can have multiple thumbs, and provides you
 * with the ability to format labels and control user input.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![Slider with annotations](../../assets/img/apiref/widgets/sliders/slider-labels.png "Slider with annotations")
 *
 * @module esri/widgets/Slider
 * @since 4.12
 *
 * @example
 * const slider = new Slider({
 *   container: "sliderDiv",
 *   min: 0,
 *   max: 100,
 *   values: [ 50 ],
 *   snapOnClickEnabled: false,
 *   labelsVisible: true,
 *   rangeLabelsVisible: true
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Slider/nls/Slider";

// esri
import { substitute } from "esri/intl";

// esri.core
import Evented = require("esri/core/Evented");
import { eventKey } from "esri/core/events";
import { isSome } from "esri/core/maybe";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.libs.pep
import PEP = require("esri/core/libs/pep/pep");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Slider
import {
  LabelInfos,
  SegmentDragEvent,
  TickConfig,
  ThumbChangeEvent,
  ThumbCreatedFunction,
  ThumbDragEvent,
  ValueChangeEvent,
  ValuesChangeEvent
} from "esri/widgets/Slider/interfaces";
import SliderViewModel = require("esri/widgets/Slider/SliderViewModel");

// esri.widgets.support
import { LabelFormatFunction, VNode } from "esri/widgets/support/interfaces";
import { renderable, storeNode, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-slider",
  horizontalLayout: "esri-slider--horizontal",
  verticalLayout: "esri-slider--vertical",

  contentElement: "esri-slider__content",
  extraContentElement: "esri-slider__extra-content",
  trackElement: "esri-slider__track",

  ticksContainerElement: "esri-slider__ticks",
  tickElement: "esri-slider__tick",
  tickLabelElement: "esri-slider__tick-label",

  maxElement: "esri-slider__max",
  minElement: "esri-slider__min",
  maxElementInteractive: "esri-slider__max--interactive",
  minElementInteractive: "esri-slider__min--interactive",
  rangeInput: "esri-slider__range-input",

  // handle classes
  anchorElement: "esri-slider__anchor",
  movingAnchorElement: "esri-slider__anchor--moving",
  anchorElementIndexPrefix: "esri-slider__anchor-",
  segmentElement: "esri-slider__segment",
  segmentElementIndexPrefix: "esri-slider__segment-",
  segmentElementInteractive: "esri-slider__segment--interactive",
  thumbElement: "esri-slider__thumb",
  labelElement: "esri-slider__label",
  labelElementInteractive: "esri-slider__label--interactive",
  labelInput: "esri-slider__label-input",

  // common
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

const KEYS = {
  showInput: "Enter",
  hideInput1: "Enter",
  hideInput2: "Escape",
  hideInput3: "Tab",
  moveAnchorUp: "ArrowUp",
  moveAnchorDown: "ArrowDown",
  moveAnchorLeft: "ArrowLeft",
  moveAnchorRight: "ArrowRight",
  moveAnchorToMax: "End",
  moveAnchorToMin: "Home"
};

type Layout = "vertical" | "horizontal";

type State = "disabled" | "ready" | "dragging" | "editing";

interface DragStartInfo {
  clientX: number;
  clientY: number;
  index: number;
  position: number;
}

interface SegmentDragStartInfo {
  index: number;
  thumbIndices: [number, number];
  clientX: number;
  clientY: number;
  minPosition: number;
  maxPosition: number;
}

interface SliderEvents {
  "max-change": ValueChangeEvent;
  "min-change": ValueChangeEvent;
  "segment-drag": SegmentDragEvent;
  "thumb-change": ThumbChangeEvent;
  "thumb-drag": ThumbDragEvent;
  "value-change": ValueChangeEvent;
  "values-change": ValuesChangeEvent;
}

interface Slider extends Evented.IEvented<SliderEvents> {}

@subclass("esri.widgets.Slider")
class Slider extends declared(Widget, Evented) {
  //-----------------------------------------------------------s---------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when a user changes the [max](#max) value of the slider.
   *
   * @event module:esri/widgets/Slider#max-change
   *
   * @property {number} oldValue - The former [max](#max) value (or bound) of the slider.
   * @property {string} type - The type of the event. For this event, the type is always `max-change`.
   * @property {number} value - The [max](#max) value (or bound) of the slider when the event is emitted.
   */

  /**
   * Fires when a user changes the [min](#min) value of the slider.
   *
   * @event module:esri/widgets/Slider#min-change
   *
   * @property {number} oldValue - The former [min](#min) value (or bound) of the slider.
   * @property {string} type - The type of the event. For this event, the type is always `min-change`.
   * @property {number} value - The the [min](#min) value (or bound) of the slider when the event is emitted.
   */

  /**
   * Fires when a user drags a segment of the slider. A segment is the portion
   * of the track that lies between two thumbs. Therefore, this only applies when
   * two or more thumbs are set on the slider.
   *
   * @event module:esri/widgets/Slider#segment-drag
   *
   * @property {number} index - The 1-based index of the segment in the slider.
   * @property {string} state - The state of the drag.
   *
   * **Possible Values:** start | drag
   *
   * @property {string} type - The type of the event. For this event, the type is always `segment-drag`.
   * @property {number[]} thumbIndices - The indices of the thumbs on each end of the segment.
   */

  /**
   * Fires when a user changes the value of a thumb via keyboard editing of the label on the slider.
   *
   * @event module:esri/widgets/Slider#thumb-change
   *
   * @property {number} index - The 0-based index of the updated thumb.
   * @property {number} oldValue - The former value of the thumb before the change was made.
   * @property {string} type - The type of the event. For this event, the type is always `thumb-change`.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * Fires when a user drags a thumb on the Slider widget.
   *
   * @event module:esri/widgets/Slider#thumb-drag
   *
   * @property {number} index - The 0-based index of the updated thumb.
   * @property {string} state - The state of the drag.
   *
   * **Possible Values:** drag | start | stop
   *
   * @property {string} type - The type of the event. For this event, the type is always `thumb-drag`.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * Fires when a thumb value changes on the Slider widget.
   *
   * @event module:esri/widgets/Slider#value-change
   *
   * @property {number} index - The 0-based index of the thumb emitting the event.
   * @property {number} oldValue - The former value of the thumb before the change was made.
   * @property {string} type - The type of the event. For this event, the type is always `value-change`.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * Fires when the [values](#values) array changes on the Slider widget.
   *
   * @event module:esri/widgets/Slider#values-change
   *
   * @property {number[]} [indices] - The 0-based indices of the thumbs emitting the event.
   * @property {number[]} oldValues - The former values of the thumbs before the changes were made.
   * @property {string} type - The type of the event. For this event, the type is always `values-change`.
   * @property {number[]} values - The values of the thumbs when the event is emitted.
   */

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Slider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const slider = new Slider({
   *   container: "sliderDiv",
   *   min: 0,
   *   max: 100,
   *   values: [ 50 ]
   * });
   */
  constructor(params?: any) {
    super();

    this._onAnchorPointerDown = this._onAnchorPointerDown.bind(this);
    this._onAnchorPointerMove = this._onAnchorPointerMove.bind(this);
    this._onAnchorPointerUp = this._onAnchorPointerUp.bind(this);

    this._onLabelPointerDown = this._onLabelPointerDown.bind(this);
    this._onLabelPointerUp = this._onLabelPointerUp.bind(this);

    this._onSegmentPointerDown = this._onSegmentPointerDown.bind(this);
    this._onSegmentPointerMove = this._onSegmentPointerMove.bind(this);
    this._onSegmentPointerUp = this._onSegmentPointerUp.bind(this);

    this._onTrackPointerDown = this._onTrackPointerDown.bind(this);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeLabelInputIndex: number = null;

  private _anchorElements: HTMLElement[] = null;

  private _dragged: boolean = false;

  private _dragStartInfo: DragStartInfo = null;

  private _focusedAnchorIndex: number = null;

  private _isMinInputActive: boolean = false;

  private _isMaxInputActive: boolean = false;

  private _labelElements: HTMLElement[] = [];

  private _segmentDragStartInfo: SegmentDragStartInfo = null;

  private _segmentElements: HTMLElement[] = null;

  private _thumbElements: HTMLElement[] = [];

  private _tickElements: { line?: HTMLElement; label?: HTMLElement }[][] = [];

  private _trackHeight: number = null;

  private _trackWidth: number = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  extraNodes
  //----------------------------------

  /**
   * Array of VNodes that the slider renders as "extra content".
   *
   * @name extraNodes
   * @instance
   * @type {VNode[]}
   * @ignore
   */
  @property() extraNodes: VNode[] = [];

  //----------------------------------
  //  draggableSegmentsEnabled
  //----------------------------------

  /**
   * Indicates if the user can drag the segment between thumbs
   * to update thumb positions.
   *
   * @name draggableSegmentsEnabled
   * @instance
   * @type {boolean}
   * @default true
   * @example
   * // disables draggable segments
   * slider.draggableSegmentsEnabled = false;
   */
  @property()
  @renderable()
  draggableSegmentsEnabled = true;

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
  @property()
  label: string = i18n.widgetLabel;

  /**
   * Function used to format labels. This function should be set to the
   * [labelFormatFunction](#labelFormatFunction) property. It fires
   * each time a label is created or updated on the slider.
   *
   * @callback module:esri/widgets/Slider~LabelFormatter
   *
   * @param {number} value - The value of the thumb to be labeled.
   * @param {string} [type] - The label type. Valid types include `average`, `min`, `max`, `tick`, and `value`.
   * @param {number} [index] - The index of the thumb (or [value](#values)).
   *
   * @return {string} The formatted value of the label.
   */

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
   */
  @aliasOf("viewModel.labelFormatFunction") labelFormatFunction: LabelFormatFunction = null;

  //----------------------------------
  //  labelInputsEnabled
  //----------------------------------

  /**
   * Indicates whether to enable editing input values via keyboard input
   * when the user clicks a label. This allows the user to move the slider
   * thumb to precise values without sliding the thumbs.
   *
   * ![Slider editable labels](../../assets/img/apiref/widgets/sliders/slider-edit-label.png "Slider with editable labels")
   *
   * @name labelInputsEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @example
   * // allows the slider input label to be used for keyboard input
   * slider.labelInputsEnabled = true;
   */
  @property()
  labelInputsEnabled = false;

  //----------------------------------
  //  labels
  //----------------------------------

  /**
   * An array of strings associated with 'values' generated using an internal label formatter or
   * the values returned from [labelFormatFunction](#labelFormatFunction).
   *
   * @name labels
   * @instance
   * @type {String[]}
   * @readonly
   */
  @aliasOf("viewModel.labels") labels: LabelInfos = null;

  //----------------------------------
  //  labelsVisible
  //----------------------------------

  /**
   * Indicates whether to display labels alongside slider thumbs. By default, labels
   * display input thumb values as floating point values with a precision of two digits.
   * The format of labels can be customized via the [labelFormatFunction](#labelFormatFunction).
   *
   * Alternatively, developers may also use CSS (e.g. `display: none`) to show/hide labels.
   *
   * @name labelsVisible
   * @instance
   * @type {boolean}
   * @default false
   * @example
   * slider.labelsVisible = true;
   */
  @property()
  @renderable()
  labelsVisible = false;

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Determines the layout/orientation of the Slider widget.
   *
   * **Possible Values:** vertical | horizontal
   *
   * @name layout
   * @instance
   * @type {string}
   * @default horizontal
   * @example
   * slider.layout = "vertical";
   */
  @property({ value: "horizontal" })
  @renderable()
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
   * The maximum possible data/thumb value of the slider. In the constructor, if one of the values
   * specified in [values](#values) is greater than the `max` value specified
   * in this property, then the `max` will update to the highest value in `values`.
   *
   * To display the max value's label on the slider, then set [rangeLabelsVisible](#rangeLabelsVisible) to `true`.
   * To allow the end user to modify the max value, set
   * [rangeLabelInputsEnabled](#rangeLabelInputsEnabled) to `true`.
   *
   * @see [rangeLabelInputsEnabled](#rangeLabelInputsEnabled)
   * @see [rangeLabelsVisible](#rangeLabelsVisible)
   *
   * @name max
   * @instance
   * @type {number}
   * @example
   * const slider = new Slider({
   *   container: "sliderDiv",
   *   min: 0,
   *   max: 100,
   *   values: [ 50 ]
   * });
   */
  @aliasOf("viewModel.max") max: number = null;

  //----------------------------------
  //  min
  //----------------------------------

  /**
   * The minimum possible data/thumb value of the slider. In the constructor, if one of the values
   * specified in [values](#values) is less than the `min` value specified
   * in this property, then the `min` will update to the lowest value in `values`.
   *
   * To display the min value's label on the slider, then set [rangeLabelsVisible](#rangeLabelsVisible) to `true`.
   * To allow the end user to modify the min value, set
   * [rangeLabelInputsEnabled](#rangeLabelInputsEnabled) to `true`.
   *
   * @see [rangeLabelInputsEnabled](#rangeLabelInputsEnabled)
   * @see [rangeLabelsVisible](#rangeLabelsVisible)
   *
   * @name min
   * @instance
   * @type {number}
   * @example
   * const slider = new Slider({
   *   container: "sliderDiv",
   *   min: 0,
   *   max: 100,
   *   values: [ 50 ]
   * });
   */
  @aliasOf("viewModel.min") min: number = null;

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
   *
   * @example
   * slider.precision = 7;
   */
  @aliasOf("viewModel.precision") precision = 4;

  //----------------------------------
  //  rangeLabelInputsEnabled
  //----------------------------------

  /**
   * Indicates whether to enable editing range values via keyboard input
   * when the user clicks a [min](#min) or [max](#max) label.
   * This allows the user to increase or decrease the data range of the slider.
   *
   * ![Slider editable range labels](../../assets/img/apiref/widgets/sliders/slider-edit-range-label.png "Slider with editable range labels")
   *
   * @name rangeLabelInputsEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @example
   * slider.viewModel.rangeLabelInputsEnabled = false;
   */
  @property()
  rangeLabelInputsEnabled = false;

  //----------------------------------
  //  rangeLabelsVisible
  //----------------------------------

  /**
   * Indicates whether to display [min](#min) or [max](#max) range values on the slider.
   * The format of labels can be customized via the [labelFormatFunction](#labelFormatFunction).
   *
   * Alternatively, developers may also use CSS (e.g. `display: none`) to show/hide labels.
   *
   * @name rangeLabelsVisible
   * @instance
   * @type {boolean}
   * @default false
   * @example
   * slider.viewModel.rangeLabelInputsEnabled = true;
   */
  @property()
  @renderable()
  rangeLabelsVisible = false;

  //----------------------------------
  //  snapOnClickEnabled
  //----------------------------------

  /**
   * Indicates if the closest thumb will snap to the clicked location on the track.
   *
   * @name snapOnClickEnabled
   * @instance
   * @type {boolean}
   * @default true
   * @example
   * // disables snapping thumb values by click
   * slider.viewModel.snapOnClickEnabled = false;
   */
  @property()
  snapOnClickEnabled = true;

  //----------------------------------
  //  state
  //----------------------------------

  /**
   * The current state of the widget.
   *
   * **Possible Values:** ready | disabled | editing | dragging
   *
   * @name state
   * @instance
   * @type {string}
   * @readonly
   */
  @property({
    dependsOn: ["viewModel.state"],
    readOnly: true
  })
  get state(): State {
    const {
      _activeLabelInputIndex,
      _isMaxInputActive,
      _isMinInputActive,
      _dragStartInfo,
      _segmentDragStartInfo,
      viewModel
    } = this;

    const dragging = isSome(_dragStartInfo) || isSome(_segmentDragStartInfo);
    const editing = !!(_activeLabelInputIndex !== null || _isMaxInputActive || _isMinInputActive);

    return editing ? "editing" : dragging ? "dragging" : viewModel.state;
  }

  //----------------------------------
  //  steps
  //----------------------------------

  /**
   * Sets steps, or intervals, on the slider that restrict user
   * input to specific values. If an array of numbers is passed to this
   * property, the slider thumbs may only be moved to the positions
   * specified in the array.
   *
   * If a single number is set, then steps are set along the entire
   * slider range at an interval of the provided value. In this scenario,
   * the user may only slide the thumbs to values at the provided interval.
   * For example, if a value of `0.5` is set here, and the slider
   * [min](#min) is `0` and the slider [max](#max) is `10`, then the user will
   * only be able to update the thumbs to values of 0, 0.5, 1.0, 1.5, 2.0, etc.
   *
   * @name steps
   * @instance
   * @type {number | number[]}
   *
   * @example
   * // set steps at an interval of 0.5. So the
   * // slider thumb snaps at values of 0.5, 1.0, 1.5, etc.
   * slider.steps = 0.5;
   *
   * @example
   * // Set steps at specific slider positions
   * slider.steps = [ 5, 10, 15, 20, 25, 30, 35, 40 ];
   */

  @property()
  steps: number | number[] = null;

  /**
   * Function that executes each time a thumb is created on the slider. This function should be set to the
   * [thumbCreatedFunction](#thumbCreatedFunction) property.
   *
   * @callback module:esri/widgets/Slider~ThumbCreatedFunction
   *
   * @param {number} index - The index of the thumb.
   * @param {number} value - The value of the slider where the thumb is rendered.
   * @param {HTMLElement} thumbElement - The HTMLElement representing the thumb. You can add or modify the default style of individual
   *   thumbs by adding CSS classes to this element. You can also add custom behavior to thumbs by attaching
   *   event listeners to individual elements.
   * @param {HTMLElement} [labelElement] - The HTMLElement representing the label of the thumb. You can add or modify the default
   *   style of the thumb's labels by adding CSS classes to this element. You can also add custom behavior to thumb labels by attaching
   *   event listeners to individual elements.
   */

  //----------------------------------
  //  thumbCreatedFunction
  //----------------------------------

  /**
   * Function that executes each time a thumb is created on the slider. This can
   * be used to add custom styling to each thumb or hook event listeners to
   * specific thumbs.
   *
   * @name thumbCreatedFunction
   * @instance
   * @type {module:esri/widgets/Slider~ThumbCreatedFunction}
   *
   * @example
   * slider.thumbCreatedFunction = function(index, value, thumbElement) {
   *   thumbElement.classList.add("change-color");
   *   thumbElement.addEventListener("focus", function() {
   *     // add custom behavior here...tooltips, fire other actions, etc.
   *   };
   * };
   */
  @property() thumbCreatedFunction: ThumbCreatedFunction = null;

  /**
   * Function that fires each time a tick is created. It provides you access to each tick
   * element so you can add custom CSS and attach event listeners to individual ticks. This function should be set to the
   * `tickCreatedFunction` property of the {@link module:esri/widgets/Slider~TickConfig TickConfig}.
   *
   * @callback module:esri/widgets/Slider~TickCreatedFunction
   *
   * @param {number} value - The value of the slider where the tick is rendered.
   * @param {HTMLElement} tickElement - The HTMLElement representing the tick. You can add or modify the default style of individual
   *   ticks by adding CSS classes to this element. You can also add custom behavior to ticks by attaching
   *   event listeners to individual elements.
   * @param {HTMLElement} [labelElement] - The HTMLElement representing the label of the tick. You can add or modify the default
   *   style of the tick's labels by adding CSS classes to this element. You can also add custom behavior to tick labels by attaching
   *   event listeners to individual elements.
   */

  /**
   * Object specification for configuring ticks on the slider. An array of these objects should be set on the
   * [tickConfigs](#tickConfigs) property.
   *
   * @typedef module:esri/widgets/Slider~TickConfig
   *
   * @property {string} mode - The mode or method of positioning ticks along the slider track. See the table below for a list of possible values.
   *
   * Possible Value | Description
   * ---------------|------------
   * count | Places a fixed number of ticks (provided in the `values` property) at equal distances from each other below the slider track.
   * percent | When set, and a single number is set on the `values` property, ticks will be placed at the specified percentage interval along the length of the slider. For example, when `mode` is percent and `values` is `5`, then 20 ticks will be placed below the slider track (at 5-percent intervals from each other). If an array of `values` is provided, the values are interpreted as percentages along the slider. So if `values` is `[10, 50, 90]`, then three ticks will be placed below the track; one at the midway point, and two 10 percent of the length from either end of the slider.
   * position | Indicates that ticks will only be placed at the values specified in the `values` property.
   *
   * @property {number | number[]} values - Indicates where ticks will be rendered below the track. See the description for `mode` for more information about how this property is interpreted by each mode.
   * @property {boolean} [labelsVisible] - Indicates whether to render labels for the ticks.
   * @property {module:esri/widgets/Slider~TickCreatedFunction} [tickCreatedFunction] - Callback that fires for each tick. You can override default behaviors and styles with this property.
   * @property {module:esri/widgets/Slider~LabelFormatter} [labelFormatFunction] - Callback for formatting tick labels.
   *
   * @example
   * // places 25 ticks on the slider track
   * // evenly spaced from one another
   * slider.tickConfigs = [{
   *   mode: "count",
   *   values: 25
   * }];
   *
   * @example
   * // places ticks spanning the width of
   * // the slider at 20% intervals from one another
   * // this is the equivalent of setting mode to 'count'
   * // and the values to 5.
   * slider.tickConfigs = [{
   *   mode: "percent",
   *   values: 20
   * }];
   *
   * @example
   * // Places three ticks on the slider: one positioned
   * // 10% of the width from the start (or min value), another
   * // directly in the middle (50% from the start), and
   * // another 90% of the width from the start of the slider.
   * // Because the values are %s the values are always relative
   * // regardless of the range of the slider values.
   * slider.tickConfigs = [{
   *   mode: "percent",
   *   values: [ 10, 50, 90 ]
   * }];
   *
   * @example
   * // Places 5 ticks on the slider at the slider values
   * // provided below. These are absolute positions.
   * slider.tickConfigs = [{
   *   mode: "position",
   *   values: [ 0, 5, 10, 15, 20 ]
   * }];
   *
   * @example
   * // Places a single tick at the location of the value of 5.
   * slider.tickConfigs = [{
   *   mode: "position",
   *   values: 5
   * }];
   *
   * @example
   * // Renders three groups of ticks. The first is a basic set
   * // of 25 ticks. The second places 4 ticks and adds custom
   * // CSS classes to modify their styling. The third adds
   * // a click event handler to the tick labels.
   * slider.tickConfigs = [{
   *   mode: "count",
   *   values: 25
   * }, {
   *   mode: "percent",
   *   values: [12.5, 37.5, 62.5, 87.5],
   *   labelsVisible: true,
   *   tickCreatedFunction: function(initialValue, tickElement, labelElement) {
   *     tickElement.classList.add("mediumTicks");
   *     labelElement.classList.add("mediumLabels");
   *   }
   * }, {
   *   mode: "count",
   *   values: 5,
   *   labelsVisible: true,
   *   tickCreatedFunction: function(initialValue, tickElement, labelElement) {
   *     tickElement.classList.add("largeTicks");
   *     labelElement.classList.add("largeLabels");
   *     labelElement.onclick = function() {
   *       const newValue = labelElement["data-value"];
   *       slider.values = [ newValue ];
   *     };
   *   }
   * }];
   */

  //----------------------------------
  //  tickConfigs
  //----------------------------------

  /**
   * When set, renders ticks along the slider track. See the {@link module:esri/widgets/Slider~TickConfig} documentation
   * for more information on how to configure tick placement, style, and behavior.
   *
   * @name tickConfigs
   * @instance
   * @type {module:esri/widgets/Slider~TickConfig[]}
   *
   * @example
   * // places 25 ticks on the slider track
   * // evenly spaced from one another
   * slider.tickConfigs = [{
   *   mode: "count",
   *   values: 25
   * }];
   *
   * @example
   * // places ticks spanning the width of
   * // the slider at 20% intervals from one another
   * // this is the equivalent of setting mode to 'count'
   * // and the values to 5.
   * slider.tickConfigs = [{
   *   mode: "percent",
   *   values: 20
   * }];
   *
   * @example
   * // Places three ticks on the slider: one positioned
   * // 10% of the width from the start (or min value), another
   * // directly in the middle (50% from the start), and
   * // another 90% of the width from the start of the slider.
   * // Because the values are %s the values are always relative
   * // regardless of the range of the slider values.
   * slider.tickConfigs = [{
   *   mode: "percent",
   *   values: [ 10, 50, 90 ]
   * }];
   *
   * @example
   * // Places 5 ticks on the slider at the slider values
   * // provided below. These are absolute positions.
   * slider.tickConfigs = [{
   *   mode: "position",
   *   values: [ 0, 5, 10, 15, 20 ]
   * }];
   *
   * @example
   * // Places a single tick at the location of the value of 5.
   * slider.tickConfigs = [{
   *   mode: "position",
   *   values: 5
   * }];
   *
   * @example
   * // Renders three groups of ticks. The first is a basic set
   * // of 25 ticks. The second places 4 ticks and adds custom
   * // CSS classes to modify their styling. The third adds
   * // a click event handler to the tick labels.
   * slider.tickConfigs = [{
   *   mode: "count",
   *   values: 25
   * }, {
   *   mode: "percent",
   *   values: [12.5, 37.5, 62.5, 87.5],
   *   labelsVisible: true,
   *   tickCreatedFunction: function(initialValue, tickElement, labelElement) {
   *     tickElement.classList.add("mediumTicks");
   *     labelElement.classList.add("mediumLabels");
   *   }
   * }, {
   *   mode: "count",
   *   values: 5,
   *   labelsVisible: true,
   *   tickCreatedFunction: function(initialValue, tickElement, labelElement) {
   *     tickElement.classList.add("largeTicks");
   *     labelElement.classList.add("largeLabels");
   *     labelElement.onclick = function() {
   *       const newValue = labelElement["data-value"];
   *       slider.values = [ newValue ];
   *     };
   *   }
   * }];
   */
  @property() tickConfigs: TickConfig[] = null;

  //----------------------------------
  //  trackElement
  //----------------------------------

  /**
   * The HTML Element node representing the slider track. Use this property to attach event listeners to
   * the track or to customize the track's CSS.
   *
   * @name trackElement
   * @instance
   * @type {HTMLElement}
   *
   * @example
   * // Add CSS class to the track
   * slider.trackElement.classList.add("thickTrack");
   */
  @property()
  trackElement: HTMLElement = null;

  //----------------------------------
  //  values
  //----------------------------------

  /**
   * An array of numbers representing absolute thumb positions on the slider.
   *
   * @name values
   * @instance
   * @type {number[]}
   *
   * @see {@link module:esri/widgets/Slider/SliderViewModel#setValue SliderViewModel.setValue()}
   *
   * @example
   * const slider = new Slider({
   *   min: 20,
   *   max: 100,  // data range of 80
   *   values: [50.4331],
   *   // thumb label will display 50.43
   *   // thumb value will maintain precision, so
   *   // value will remain at 50.4331
   *   container: "sliderDiv"
   * });
   */
  @aliasOf("viewModel.values") values: number[] = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the Slider widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Slider/SliderViewModel}
   * class to access all properties and methods on the Slider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Slider/SliderViewModel}
   */
  @property()
  @renderable([
    "viewModel.max",
    "viewModel.min",
    "viewModel.precision",
    "viewModel.labelFormatFunction",
    "viewModel.labels",
    "viewModel.values"
  ])
  viewModel: SliderViewModel = new SliderViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { label, layout, state, trackElement } = this;
    const baseClasses = this.classes(
      CSS.base,
      CSS.esriWidget,
      layout === "horizontal" ? CSS.horizontalLayout : CSS.verticalLayout,
      state === "disabled" ? CSS.disabled : null
    );

    if (trackElement) {
      this._trackHeight = trackElement.offsetHeight;
      this._trackWidth = trackElement.offsetWidth;
    }

    return (
      <div aria-label={label} class={baseClasses} touch-action={"none"}>
        {state !== "disabled" ? this.renderContent() : null}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderContent(): VNode {
    if (this.rangeLabelsVisible) {
      return [this.renderMin(), this.renderSliderContainer(), this.renderMax()];
    }

    return this.renderSliderContainer();
  }

  protected renderSliderContainer(): VNode {
    return (
      <div bind={this} class={CSS.contentElement}>
        {this.renderTrackElement()}
        {this.renderTicksContainer()}
        {this.renderExtraContentElements()}
      </div>
    );
  }

  protected renderTrackElement(): VNode {
    return (
      <div
        afterCreate={this._afterTrackCreate}
        bind={this}
        class={CSS.trackElement}
        data-node-ref="trackElement"
        touch-action={"none"}
      >
        {this.renderSegmentElements()}
        {this.renderAnchorElements()}
      </div>
    );
  }

  protected renderSegmentElements(): VNode {
    if (!this.trackElement || !this.values || !this.values.length) {
      return;
    }

    this._segmentElements = [];
    const numberOfSegments = this.values.length + 1;
    const nodes: VNode[] = [];

    for (let i = 0; i < numberOfSegments; i++) {
      nodes.push(this.renderSegmentElement(i));
    }

    return nodes;
  }

  protected renderSegmentElement(index: number): VNode {
    const { _trackHeight, _trackWidth, draggableSegmentsEnabled, layout, values } = this;
    const isHorizontal = layout === "horizontal";
    const trackMax = isHorizontal ? _trackWidth : _trackHeight;

    // Information about surrounding thumb(s)
    const maxThumbIndex = index === values.length ? null : index;
    const hasMaxThumb = isSome(maxThumbIndex);
    const minThumbIndex = index === 0 ? null : index - 1;
    const hasMinThumb = isSome(minThumbIndex);

    // Get bounds of segment
    // Depending on layout, 'max' has a different meaning (top vs left)
    const max = hasMaxThumb
      ? this._calculatePositionFromValue(values[maxThumbIndex])
      : isHorizontal
      ? trackMax
      : 0;
    const min = hasMinThumb
      ? this._calculatePositionFromValue(values[minThumbIndex])
      : isHorizontal
      ? 0
      : trackMax;

    // Calculate 'length' (as a percent) and scale of segment relative to the primary axis
    const percentage = parseFloat(((min * 100) / trackMax).toFixed(5));
    const scale = (max - min) / trackMax;
    const style = isHorizontal
      ? `transform: translate(${percentage}%, 0px) scale(${scale}, 1);`
      : `transform: translate(0px, ${percentage}%) scale(1, ${scale});`;

    const segmentClasses = this.classes(
      CSS.segmentElement,
      CSS.segmentElementIndexPrefix + index,
      draggableSegmentsEnabled && hasMaxThumb && hasMinThumb ? CSS.segmentElementInteractive : null
    );

    return (
      <div
        afterCreate={this._afterSegmentCreate}
        bind={this}
        class={segmentClasses}
        data-max-thumb-index={maxThumbIndex}
        data-min-thumb-index={minThumbIndex}
        data-segment-index={index}
        style={style}
        touch-action={"none"}
      />
    );
  }

  protected renderAnchorElements(): VNode {
    const { trackElement, values } = this;

    // Remove all current elements from the reference properties
    // Ensures anchor positions are always up-to-date after a visibility change
    this._anchorElements = [];
    this._thumbElements = [];
    this._labelElements = [];

    return trackElement && values && values.length
      ? values.map((value, index) => this.renderAnchorElement(value, index))
      : null;
  }

  protected renderAnchorElement(value: number, index: number): VNode {
    const position = this._calculatePositionFromValue(value);
    const testValue = this._calculateValueFromPosition(position);

    if (!isSome(testValue) || isNaN(testValue)) {
      return;
    }

    const { _dragStartInfo, id, labelsVisible, layout, values } = this;
    const isDragging = _dragStartInfo && _dragStartInfo.index === index;

    const classes = this.classes(
      CSS.anchorElement,
      CSS.anchorElementIndexPrefix + index,
      isDragging ? CSS.movingAnchorElement : null
    );

    const label = this.labels.values[index];
    const style = this._calculatePositionStyleForElement(value);
    const [max, min] = this._calculateValueBoundsForAnchor(index);

    const ariaValueText =
      values.length === 2
        ? index === 0
          ? substitute(i18n.rangeMinimum, { value })
          : substitute(i18n.rangeMaximum, { value })
        : label;

    const ariaControls =
      values.length === 1
        ? null
        : index === 0
        ? `${id}-handle-${index + 1}`
        : index === values.length - 1
        ? `${id}-handle-${index - 1}`
        : `${id}-handle-${index - 1} ${id}-handle-${index + 1}`;

    return (
      <div
        afterCreate={this._afterAnchorCreate}
        afterUpdate={this._afterAnchorUpdate}
        aria-controls={ariaControls}
        aria-label={i18n.sliderValue}
        aria-labelledby={labelsVisible ? `${id}-label-${index}` : null}
        aria-orientation={layout}
        aria-valuemax={max.toString()}
        aria-valuemin={min.toString()}
        aria-valuenow={value.toString()}
        aria-valuetext={ariaValueText}
        bind={this}
        class={classes}
        data-thumb-index={index}
        data-value={value}
        id={`${id}-handle-${index}`}
        onkeydown={this._onAnchorKeyDown}
        touch-action={"none"}
        role={"slider"}
        style={style}
        tabIndex={0}
      >
        <span
          afterCreate={this._afterThumbCreate}
          bind={this}
          class={CSS.thumbElement}
          data-thumb-index={index}
          touch-action={"none"}
        />
        {labelsVisible ? this.renderThumbLabel(index) : null}
      </div>
    );
  }

  protected renderThumbLabel(index: number): VNode {
    const { id, labels } = this;
    const label = labels.values[index];
    const classes = this.classes(
      CSS.labelElement,
      this.labelInputsEnabled ? CSS.labelElementInteractive : null
    );

    return (
      <span
        afterCreate={this._afterLabelCreate}
        bind={this}
        class={classes}
        data-thumb-index={index}
        id={`${id}-label-${index}`}
        role={this.labelInputsEnabled ? "button" : null}
        touch-action={"none"}
      >
        {this._activeLabelInputIndex === index ? this.renderValueInput(index) : label}
      </span>
    );
  }

  protected renderValueInput(index: number): VNode {
    const value = this.values[index];

    return (
      <input
        afterCreate={this._afterInputCreate}
        aria-label={i18n.sliderValue}
        bind={this}
        class={CSS.labelInput}
        required={true}
        tabIndex={0}
        type={"text"}
        value={value.toString()}
        onblur={this._onLabelInputBlur}
        onkeydown={this._onInputKeyDown}
      />
    );
  }

  protected renderMax(): VNode {
    const { _isMaxInputActive, labels } = this;
    const classes = this.classes(
      CSS.maxElement,
      this.rangeLabelInputsEnabled ? CSS.maxElementInteractive : null
    );

    return (
      <div
        bind={this}
        class={classes}
        onclick={this._onMaxLabelClick}
        onkeydown={this._onMaxLabelKeyDown}
        role={this.rangeLabelInputsEnabled ? "button" : null}
        tabIndex={this.rangeLabelInputsEnabled ? 0 : null}
      >
        {_isMaxInputActive ? this.renderMaxInput() : labels.max}
      </div>
    );
  }

  protected renderMin(): VNode {
    const { _isMinInputActive, labels } = this;
    const classes = this.classes(
      CSS.minElement,
      this.rangeLabelInputsEnabled ? CSS.minElementInteractive : null
    );

    return (
      <div
        bind={this}
        class={classes}
        onclick={this._onMinLabelClick}
        onkeydown={this._onMinLabelKeyDown}
        role={this.rangeLabelInputsEnabled ? "button" : null}
        tabIndex={this.rangeLabelInputsEnabled ? 0 : null}
      >
        {_isMinInputActive ? this.renderMinInput() : labels.min}
      </div>
    );
  }

  protected renderMaxInput(): VNode {
    return (
      <input
        afterCreate={this._afterInputCreate}
        aria-label={i18n.maximumValue}
        bind={this}
        class={CSS.rangeInput}
        required={true}
        tabIndex={0}
        type={"text"}
        value={this.max.toString()}
        onblur={this._onMaxInputBlur}
        onkeydown={this._onInputKeyDown}
      />
    );
  }

  protected renderMinInput(): VNode {
    return (
      <input
        afterCreate={this._afterInputCreate}
        aria-label={i18n.minimumValue}
        bind={this}
        class={CSS.rangeInput}
        required={true}
        tabIndex={0}
        type={"text"}
        value={this.min.toString()}
        onblur={this._onMinInputBlur}
        onkeydown={this._onInputKeyDown}
      />
    );
  }

  protected renderExtraContentElements(): VNode {
    return (
      <div bind={this} class={CSS.extraContentElement}>
        {this.extraNodes}
      </div>
    );
  }

  protected renderTicksContainer(): VNode {
    if (!this.tickConfigs || !this.trackElement) {
      return;
    }

    return this.tickConfigs.map((config, index) => (
      <div key="ticks-container" class={this.classes(CSS.ticksContainerElement)}>
        {this.renderTicks(config, index)}
      </div>
    ));
  }

  protected renderTicks(config: TickConfig, configIndex: number): VNode {
    const { mode, values } = config;

    this._tickElements[configIndex] = [];

    if (mode === "position") {
      const valuesArray = Array.isArray(values) ? values : [values];

      return this._calculateTickPositions(valuesArray).map((position, groupIndex) =>
        this.renderTickGroup(config, groupIndex, configIndex, position)
      );
    }

    if (mode === "percent" && Array.isArray(values)) {
      const { max, min } = this;
      const range = max - min;
      const percentValues = values.map((value) =>
        parseFloat(((value / 100) * range + min).toFixed(5))
      );

      return this._calculateTickPositions(percentValues).map((position, groupIndex) =>
        this.renderTickGroup(config, groupIndex, configIndex, position)
      );
    }

    const value =
      Array.isArray(values) && values.length
        ? values[0]
        : !isNaN(values as number)
        ? (values as number)
        : null;

    const tickCount = this._getTickCounts(value, config);

    return this._calculateEquidistantTickPositions(tickCount).map((position, groupIndex) =>
      this.renderTickGroup(config, groupIndex, configIndex, position)
    );
  }

  protected renderTickGroup(
    config: TickConfig,
    groupIndex: number,
    configIndex: number,
    position: number
  ): VNode {
    const value =
      config.mode === "position"
        ? Array.isArray(config.values)
          ? config.values[groupIndex]
          : config.values
        : this._calculateValueFromPosition(position);

    if (!isSome(value) || isNaN(value)) {
      return;
    }

    return (
      <div
        afterCreate={this._afterTickGroupCreate}
        bind={this}
        data-config={config}
        data-position={position}
        data-tick-config-index={configIndex}
        data-tick-group-index={groupIndex}
        data-value={value}
        key={`tick-group-${groupIndex}`}
      >
        {this.renderTickLine(config, groupIndex, configIndex, value, position)}
        {config.labelsVisible
          ? this.renderTickLabel(config, groupIndex, configIndex, value, position)
          : null}
      </div>
    );
  }

  protected renderTickLine(
    config: TickConfig,
    groupIndex: number,
    configIndex: number,
    value: number,
    position: number
  ): VNode {
    return (
      <div
        afterCreate={this._afterTickLineCreate}
        aria-valuenow={value.toString()}
        bind={this}
        class={CSS.tickElement}
        data-tick-config-index={configIndex}
        data-tick-group-index={groupIndex}
        data-value={value}
        key={`tick-label-${groupIndex}`}
        style={this._calculatePositionStyleForElement(value)}
      />
    );
  }

  protected renderTickLabel(
    config: TickConfig,
    groupIndex: number,
    configIndex: number,
    value: number,
    position: number
  ): VNode {
    const label = config.labelFormatFunction
      ? config.labelFormatFunction(value, "tick", groupIndex)
      : this.viewModel.getLabelForValue(value, "tick", groupIndex);

    return (
      <div
        afterCreate={this._afterTickLabelCreate}
        aria-label={label}
        aria-valuenow={value.toString()}
        aria-valuetext={label}
        bind={this}
        class={CSS.tickLabelElement}
        data-tick-config-index={configIndex}
        data-tick-group-index={groupIndex}
        data-value={value}
        key={`tick-label-${groupIndex}`}
        style={`transform: translate(-50%); ${this._calculatePositionStyleForElement(value)}`}
      >
        {label}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterTrackCreate(element: HTMLElement): void {
    storeNode.call(this, element);

    PEP.applyLocal(element);
    element.addEventListener("pointerdown", this._onTrackPointerDown);

    // Anchors, segments and ticks rely on 'trackElement' for proper placement
    // During first render, 'trackElement' dimensions are 0, so a second render is required
    this.scheduleRender();
  }

  private _afterSegmentCreate(element: HTMLElement): void {
    this._segmentElements.push(element);

    PEP.applyLocal(element);
    element.addEventListener("pointerdown", this._onSegmentPointerDown);
  }

  private _afterAnchorCreate(element: HTMLElement): void {
    this._anchorElements.push(element);

    PEP.applyLocal(element);
    element.addEventListener("pointerdown", this._onAnchorPointerDown);

    if (this.thumbCreatedFunction) {
      const index = element["data-thumb-index"];
      const value = element["data-value"];
      const thumbElement = this._thumbElements[index] || null;
      const labelElement = this._labelElements[index] || null;

      this.thumbCreatedFunction(index, value, thumbElement, labelElement);
    }
  }

  private _afterAnchorUpdate(element: HTMLElement): void {
    this._anchorElements.push(element);

    if (isSome(this._focusedAnchorIndex)) {
      const index = element["data-thumb-index"];

      if (index === this._focusedAnchorIndex) {
        element.focus();
        this._focusedAnchorIndex = null;
      }
    }
  }

  private _afterThumbCreate(element: HTMLElement): void {
    this._thumbElements.push(element);
  }

  private _afterLabelCreate(element: HTMLElement): void {
    this._labelElements.push(element);

    PEP.applyLocal(element);
    element.addEventListener("pointerdown", this._onLabelPointerDown);
    element.addEventListener("pointerup", this._onLabelPointerUp);
  }

  private _afterInputCreate(element: HTMLInputElement): void {
    element.focus();
    element.select();
  }

  private _afterTickLineCreate(element: HTMLElement): void {
    const configIndex = element["data-tick-config-index"];
    const groupIndex = element["data-tick-group-index"];
    const configGroup = this._tickElements[configIndex];

    if (configGroup[groupIndex]) {
      configGroup[groupIndex].line = element;
    } else {
      configGroup[groupIndex] = { line: element, label: null };
    }
  }

  private _afterTickLabelCreate(element: HTMLElement): void {
    const configIndex = element["data-tick-config-index"];
    const groupIndex = element["data-tick-group-index"];
    const configGroup = this._tickElements[configIndex];

    if (configGroup[groupIndex]) {
      configGroup[groupIndex].label = element;
    } else {
      configGroup[groupIndex] = { label: element, line: null };
    }
  }

  private _afterTickGroupCreate(element: HTMLElement): void {
    const config = element["data-config"];

    if (config && config.tickCreatedFunction) {
      const configIndex = element["data-tick-config-index"];
      const groupIndex = element["data-tick-group-index"];
      const value = element["data-value"];
      const children = this._tickElements[configIndex][groupIndex];

      if (children) {
        const line = children.line || null;
        const label = children.label || null;

        config.tickCreatedFunction(value, line, label);
      }
    }
  }

  //--------------------------------------------------------------------------
  //  Event Handlers
  //--------------------------------------------------------------------------

  private _onAnchorKeyDown(event: KeyboardEvent): void {
    // Prevent action on this node if an input is active
    if (this.state === "editing") {
      return;
    }

    const { target } = event;
    const key = eventKey(event);
    const { _anchorElements, layout, values } = this;
    const index = (target as HTMLElement)["data-thumb-index"];
    const anchor = _anchorElements[index];
    const oldValue = values[index];
    const isHorizontal = layout === "horizontal";
    const MOVEMENT_KEYS = [
      KEYS.moveAnchorUp,
      KEYS.moveAnchorDown,
      KEYS.moveAnchorLeft,
      KEYS.moveAnchorRight
    ];

    // Triggers display of input for associated anchor
    if (key === KEYS.showInput && this.labelInputsEnabled) {
      this._activeLabelInputIndex = index;
      this.notifyChange("state");
    }

    // Shortcuts taken from:
    // https://w3c.github.io/aria-practices/#slider_kbd_interaction
    // --
    // Move target anchor in increments of 1 pixel or 1 step
    else if (MOVEMENT_KEYS.indexOf(key) > -1) {
      event.preventDefault();

      const position = isHorizontal ? anchor.offsetLeft : anchor.offsetTop;
      const direction = key === KEYS.moveAnchorUp || key === KEYS.moveAnchorRight ? 1 : -1;
      const newPosition = this._calculatePositionAfterMovementKeyPress(index, position, direction);

      // Automatically updates associated 'value'
      this._setAnchorPosition(index, newPosition);

      const value = values[index];
      this._emitThumbChangeEvent({ index, oldValue, value });
    }
    // Move anchor to 'minimum' or 'maximum' allowed value
    else if (key === KEYS.moveAnchorToMax || key === KEYS.moveAnchorToMin) {
      event.preventDefault();

      const [max, min] = this._calculatePixelBoundsForAnchor(index);
      const newPosition = isHorizontal
        ? key === KEYS.moveAnchorToMax
          ? max
          : min
        : key === KEYS.moveAnchorToMin
        ? max
        : min;

      // Automatically updates associated 'value'
      this._setAnchorPosition(index, newPosition);

      const value = values[index];
      this._emitThumbChangeEvent({ index, oldValue, value });
    }
  }

  private _onTrackPointerDown(event: PointerEvent): void {
    const { _dragStartInfo, snapOnClickEnabled, state, values } = this;
    const isInputOpenOrClickingOnHandle = state === "editing" || _dragStartInfo;

    if (isInputOpenOrClickingOnHandle) {
      return;
    }

    if (snapOnClickEnabled && values.length) {
      const { layout, steps } = this;
      const { clientX, clientY } = event;
      const bounds = this.trackElement.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      const cursorPosition = layout === "horizontal" ? x : y;
      const value = this._calculateValueFromPosition(cursorPosition);
      const index = this._getIndexOfNearestValue(value);

      if (!isSome(index)) {
        return;
      }

      // Initial, pre-drag value
      const oldValue = values[index];

      // Calculate the 'position' to store in _dragStartInfo
      const position = isSome(steps)
        ? this._calculateNearestStepPosition(cursorPosition)
        : cursorPosition;

      // Update current anchor position based on clicked location
      this._setAnchorPosition(index, position);

      // Handle already moved so need to reflect this in pointerup
      this._dragged = true;
      this._dragStartInfo = {
        clientX,
        clientY,
        index,
        position
      };

      // Causes anchor to be 'focused' on next render
      this._focusedAnchorIndex = index;
      this.notifyChange("state");

      this._emitThumbDragEvent({
        index,
        state: "start",
        value: oldValue
      });

      document.addEventListener("pointerup", this._onAnchorPointerUp);
      document.addEventListener("pointermove", this._onAnchorPointerMove);
    }
  }

  private _onSegmentPointerDown(event: PointerEvent): void {
    const { _anchorElements, draggableSegmentsEnabled } = this;
    const element = event.target as HTMLElement;
    const index = element["data-segment-index"];
    const maxThumbIndex = element["data-max-thumb-index"] as number;
    const minThumbIndex = element["data-min-thumb-index"] as number;

    if (draggableSegmentsEnabled && isSome(minThumbIndex) && isSome(maxThumbIndex)) {
      // Prevents 'snap to tap' behavior when clicking on a segment between two handles
      event.stopPropagation();

      const thumbIndices: [number, number] = [minThumbIndex, maxThumbIndex];

      // Store information about the segment
      this._segmentDragStartInfo = {
        index,
        thumbIndices,
        clientX: event.x,
        clientY: event.y,
        maxPosition: this._getAnchorPosition(_anchorElements[maxThumbIndex]),
        minPosition: this._getAnchorPosition(_anchorElements[minThumbIndex])
      };

      // 'dragging'
      this.notifyChange("state");
      this._emitSegmentDragEvent({ index, state: "start", thumbIndices });

      document.addEventListener("pointerup", this._onSegmentPointerUp);
      document.addEventListener("pointermove", this._onSegmentPointerMove);
    }
  }

  private _onSegmentPointerMove(event: PointerEvent): void {
    if (!this._segmentDragStartInfo) {
      return;
    }

    // Prevents selecting text labels on drag (i.e. min/max)
    event.preventDefault();

    const {
      layout,
      _segmentDragStartInfo: {
        clientX,
        clientY,
        index,
        thumbIndices: [minThumbIndex, maxThumbIndex],
        maxPosition,
        minPosition
      }
    } = this;

    // Track movement
    this._dragged = true;

    // Calculate boundaries for each handle
    const movement = layout === "horizontal" ? event.clientX - clientX : event.clientY - clientY;
    const newMaxPosition = maxPosition + movement;
    const newMinPosition = minPosition + movement;
    const maxBounds = this._calculatePixelBoundsForAnchor(maxThumbIndex);
    const minBounds = this._calculatePixelBoundsForAnchor(minThumbIndex);

    // Anchor must be within bounds
    if (newMinPosition < minBounds[1]) {
      this._setAnchorPositions(
        [minThumbIndex, maxThumbIndex],
        [minBounds[1], maxPosition - (minPosition - minBounds[1])]
      );
      return;
    }

    // Anchor must be within bounds
    if (newMaxPosition > maxBounds[0]) {
      this._setAnchorPositions(
        [minThumbIndex, maxThumbIndex],
        [minPosition - (maxPosition - maxBounds[0]), maxBounds[0]]
      );
      return;
    }

    const { _anchorElements } = this;
    const maxAnchor = _anchorElements[maxThumbIndex];
    const minAnchor = _anchorElements[minThumbIndex];
    const maxPos = this._getAnchorPosition(maxAnchor);
    const minPos = this._getAnchorPosition(minAnchor);

    // No changes
    if (maxPos === newMaxPosition || minPos === newMinPosition) {
      return;
    }

    const values = this.values;
    const oldValues = [values[minThumbIndex], values[maxThumbIndex]];

    this._setAnchorPositions([minThumbIndex, maxThumbIndex], [newMinPosition, newMaxPosition]);

    const newValues = [values[minThumbIndex], values[maxThumbIndex]];
    const valuesDidChange = !newValues.every((newValue, index) => newValue === oldValues[index]);

    if (valuesDidChange) {
      this._emitSegmentDragEvent({
        index,
        state: "drag",
        thumbIndices: [minThumbIndex, maxThumbIndex]
      });
    }
  }

  private _onSegmentPointerUp(event: PointerEvent): void {
    document.removeEventListener("pointerup", this._onSegmentPointerUp);
    document.removeEventListener("pointermove", this._onSegmentPointerMove);

    if (!this._segmentDragStartInfo) {
      return;
    }

    const { index, thumbIndices } = this._segmentDragStartInfo;

    this._dragged = false;
    this._segmentDragStartInfo = null;
    this.notifyChange("state");

    this.scheduleRender();
    this._emitSegmentDragEvent({
      index,
      state: "stop",
      thumbIndices
    });
  }

  private _onAnchorPointerDown(event: PointerEvent): void {
    const { target, clientX, clientY } = event;
    const index = (target as HTMLElement)["data-thumb-index"];

    // Clicked on label editor node
    if (index === undefined) {
      return;
    }

    const anchor = this._anchorElements[index];
    const { offsetTop: top, offsetLeft: left } = anchor;

    this._dragStartInfo = {
      clientX,
      clientY,
      index,
      position: this.layout === "horizontal" ? left : top
    };

    this.notifyChange("state");

    document.addEventListener("pointerup", this._onAnchorPointerUp);
    document.addEventListener("pointermove", this._onAnchorPointerMove);
  }

  private _onAnchorPointerMove(event: PointerEvent): void {
    // Prevent movement on this node if an input is active
    // Also allows text selection on the input
    if (this.state === "editing" || !this._dragStartInfo) {
      return;
    }

    const {
      layout,
      values,
      _anchorElements,
      _dragged,
      _dragStartInfo,
      _dragStartInfo: { index, position }
    } = this;

    const { clientX, clientY } = event;
    const state = _dragged ? "drag" : "start";
    const anchor = _anchorElements[index];
    const currentPosition = this._getAnchorPosition(anchor);
    const newPosition =
      layout === "horizontal"
        ? position + clientX - _dragStartInfo.clientX
        : position + clientY - _dragStartInfo.clientY;

    // No significant movement on relevant axis
    if (currentPosition === newPosition) {
      return;
    }

    const oldValue = values[index];

    // Track movement
    this._dragged = true;

    // Automatically updates associated 'value'
    this._setAnchorPosition(index, newPosition);

    // Use 'this' to get updated value
    const value = this.values[index];

    if (!_dragged) {
      this._emitThumbDragEvent({ index, state, value: oldValue });
    } else if (oldValue !== value) {
      this._emitThumbDragEvent({ index, state, value });
    }
  }

  private _onAnchorPointerUp(event: PointerEvent): void {
    document.removeEventListener("pointerup", this._onAnchorPointerUp);
    document.removeEventListener("pointermove", this._onAnchorPointerMove);

    if (!this._dragStartInfo) {
      return;
    }

    const { index } = this._dragStartInfo;
    const dragged = this._dragged;

    this._dragged = false;
    this._dragStartInfo = null;

    // Only update after thumb moves
    if (dragged) {
      this.notifyChange("state");
      this.scheduleRender();
      this._emitThumbDragEvent({ index, state: "stop", value: this.values[index] });
    } else {
      this.scheduleRender();
    }
  }

  private _onLabelPointerDown(event: PointerEvent): void {
    document.addEventListener("pointerup", this._onAnchorPointerUp);
    document.addEventListener("pointermove", this._onAnchorPointerMove);
  }

  private _onLabelPointerMove(event: PointerEvent): void {
    this._dragged = true;
  }

  private _onLabelPointerUp(event: PointerEvent): void {
    const index = (event.target as HTMLElement)["data-thumb-index"];

    // Label/handle was not dragged, activate the input
    if (this.labelInputsEnabled && !this._dragged && isSome(index)) {
      this._activeLabelInputIndex = index;
      this.notifyChange("state");
    }

    // Remove listeners
    document.removeEventListener("pointerup", this._onLabelPointerUp);
    document.removeEventListener("pointermove", this._onLabelPointerMove);
  }

  private _onLabelInputBlur(event: FocusEvent): void {
    const { _activeLabelInputIndex: index, values, viewModel } = this;
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;

    // Hides input on next render
    this._activeLabelInputIndex = null;
    this.notifyChange("state");

    // No value
    if (!inputValue) {
      return;
    }

    // Convert input value from string
    const value = this._applyPrecisionToValue(parseFloat(inputValue));
    const oldValue = values[index];
    const [max, min] = this._calculateValueBoundsForAnchor(index);

    // TODO
    // Date validation - followup PR

    // Check validity before updating the value and emitting event
    // -- value is number (not null), in range, and has changed
    if (!isNaN(value) && value <= max && value >= min && oldValue !== value) {
      viewModel.setValue(index, value);
      this._emitValueChangeEvent({ index, oldValue, value });
      this._emitThumbChangeEvent({ index, oldValue, value });
    }
  }

  // Triggers display of the 'max' Editor on next render
  private _onMaxLabelClick(event: PointerEvent): void {
    if (this.rangeLabelInputsEnabled) {
      this._isMaxInputActive = true;
      this.notifyChange("state");
    }
  }

  // Triggers display of the 'max' Editor on next render
  private _onMaxLabelKeyDown(event: KeyboardEvent): void {
    const key = eventKey(event);

    if (key === KEYS.showInput) {
      this._isMaxInputActive = true;
      this.notifyChange("state");
    }
  }

  // Updates 'max' and hides Editor on next render
  private _onMaxInputBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this._isMaxInputActive = false;
    this.notifyChange("state");

    // No value
    if (!value) {
      return;
    }
    const oldValue = this.max;
    this.viewModel.set("max", this._applyPrecisionToValue(parseFloat(value)));

    if (this.max !== oldValue) {
      this._emitMaxChangeEvent({ oldValue, value: this.max });
    }
  }

  // Triggers display of the 'min' Editor on next render
  private _onMinLabelClick(event: PointerEvent): void {
    if (this.rangeLabelInputsEnabled) {
      this._isMinInputActive = true;
      this.notifyChange("state");
    }
  }

  // Triggers display of the 'max' Editor on next render
  private _onMinLabelKeyDown(event: KeyboardEvent): void {
    const key = eventKey(event);

    if (key === KEYS.showInput) {
      this._isMinInputActive = true;
      this.notifyChange("state");
    }
  }

  // Updates 'min' and hides Editor on next render
  private _onMinInputBlur(): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this._isMinInputActive = false;
    this.notifyChange("state");

    if (!value) {
      return;
    }

    const oldValue = this.min;
    this.viewModel.set("min", this._applyPrecisionToValue(parseFloat(value)));

    if (this.min !== oldValue) {
      this._emitMinChangeEvent({ oldValue, value: this.min });
    }
  }

  // Keyboard shortcuts for hiding range Editors
  private _onInputKeyDown(event: KeyboardEvent): void {
    const { target } = event;
    const key = eventKey(event);
    const { hideInput1, hideInput2, hideInput3 } = KEYS;
    const { _activeLabelInputIndex, _anchorElements } = this;
    const node = target as HTMLElement;

    // Focus previous element
    if (key === hideInput1 || key === hideInput2 || key === hideInput3) {
      event.stopPropagation();

      // Save reference before calling 'blur'
      const activeIndex = _activeLabelInputIndex;

      node.blur();

      // Re-focus the appropriate node
      if (isSome(activeIndex)) {
        _anchorElements[activeIndex].focus();
      } else {
        node.parentElement.focus();
      }
    }
  }

  //--------------------------------------------------------------------------
  //  Anchor/Thumb Helpers
  //--------------------------------------------------------------------------

  private _applyPrecisionToValue(value: number): number {
    return parseFloat(value.toFixed(this.precision));
  }

  // Calculates 'position' (left/top) for given 'value'
  private _calculatePositionFromValue(value: number): number {
    const { _trackHeight, _trackWidth, layout, max, min } = this;
    const range = max - min;

    return layout === "horizontal"
      ? parseFloat(((_trackWidth * (value - min)) / range).toFixed(2))
      : parseFloat(((_trackHeight * (max - value)) / range).toFixed(2));
  }

  // Calculates 'value' at given 'position' (left/top)
  private _calculateValueFromPosition(position: number): number {
    const { _trackHeight, _trackWidth, layout, max, min, precision } = this;
    const range = max - min;
    const value =
      layout === "horizontal"
        ? (position * range) / _trackWidth + min
        : (range * (1000 - (position / _trackHeight) * 1000)) / 1000 + min;

    return parseFloat(value.toFixed(precision));
  }

  // Returns current 'position' (left/top) in pixels for given 'anchor'
  private _getAnchorPosition(anchor: HTMLElement): number {
    return this.layout === "horizontal" ? anchor.offsetLeft : anchor.offsetTop;
  }

  private _setAnchorPositions(indices: number[], positions: number[]): void {
    const { values } = this;

    if (!indices || indices.length === 0) {
      return;
    }

    if (indices.length === 1) {
      const index = indices[0];
      const oldValue = values[index];

      this._setAnchorPosition(index, positions[0]);

      const value = values[index];

      if (value !== oldValue) {
        this._emitValueChangeEvent({ index, oldValue, value });
      }
      return;
    }

    const oldValues = indices.map((anchorIndex) => values[anchorIndex]);

    for (let i = 0; i < indices.length; i++) {
      this._setAnchorPosition(indices[i], positions[i], true);
    }

    const adjustedValues = indices.map((anchorIndex) => this.values[anchorIndex]);
    const valuesDidChange = !adjustedValues.every(
      (adjustedValue, index) => adjustedValue === oldValues[index]
    );

    if (valuesDidChange) {
      this._emitValuesChangeEvent({
        indices,
        oldValues,
        values: adjustedValues
      });
    }
  }

  // Moves anchor to new position, based on provided left/top value (relies on 'layout')
  // Also updates associated value (by index)
  private _setAnchorPosition(index: number, position: number, preventEvent?: boolean): void {
    const { steps, values } = this;
    const oldValue = values[index];

    if (isSome(steps)) {
      position = this._calculateNearestStepPosition(position);
    }

    // Get value bounds
    const [valueMax, valueMin] = this._calculateValueBoundsForAnchor(index);
    const [positionMax, positionMin] = this._calculatePixelBoundsForAnchor(index);

    // Enforce bounds
    const constrainedPosition = Math.max(Math.min(position, positionMax), positionMin);

    // Handles potential issue with decimals
    // i.e. 0.5294 is the value, 0.529354 is the max
    const value = this._calculateValueFromPosition(constrainedPosition);

    // Sync up position and value
    const adjustedValue = Math.max(Math.min(value, valueMax), valueMin);
    const adjustedPosition = this._calculatePositionStyleForElement(adjustedValue);

    const { _anchorElements, layout, viewModel } = this;
    const anchor = _anchorElements[index];

    if (layout === "horizontal") {
      anchor.style.left = `${adjustedPosition}`;
    } else {
      anchor.style.top = `${adjustedPosition}`;
    }

    // Update associated value
    viewModel.setValue(index, adjustedValue);

    // Fetch 'up-to-date' value
    const newValue = this.values[index];

    if (oldValue !== newValue && !preventEvent) {
      this._emitValueChangeEvent({ index, oldValue, value: newValue });
    }
  }

  // Calculates min and max values for anchor at given index.
  private _calculateValueBoundsForAnchor(index: number): [number, number] {
    const { max, min, values } = this;
    const valueMax = isSome(values[index + 1]) ? values[index + 1] : max;
    const valueMin = isSome(values[index - 1]) ? values[index - 1] : min;

    return [valueMax, valueMin];
  }

  // Calculates min and max pixel values (for top/left) for anchor at given index.
  // If 'layout' is 'horizontal', returns left values based on track width
  // If 'layout' is 'vertical', returns top values based on track height
  private _calculatePixelBoundsForAnchor(index: number): [number, number] {
    const { _anchorElements, _trackHeight, _trackWidth, layout } = this;
    const prevAnchor = _anchorElements[index - 1];
    const nextAnchor = _anchorElements[index + 1];
    let max, min;

    // Note: anchors order reversed in 'vertical' layout
    if (layout === "horizontal") {
      max = nextAnchor ? nextAnchor.offsetLeft : _trackWidth;
      min = prevAnchor ? prevAnchor.offsetLeft : 0;
    } else {
      max = prevAnchor ? prevAnchor.offsetTop : _trackHeight;
      min = nextAnchor ? nextAnchor.offsetTop : 0;
    }

    return [max, min];
  }

  private _getIndexOfNearestValue(value: number): number {
    const values = this.values;
    const closest: number = values.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );

    return values.indexOf(closest);
  }

  private _getIndexOfNearestStepValue(value: number): number {
    const { steps } = this;

    if (!isSome(steps)) {
      return null;
    }

    const stepValues = this._getStepValues();
    const closest = stepValues.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );

    return stepValues.indexOf(closest);
  }

  private _calculateNearestStepPosition(position: number): number {
    const value = this._calculateValueFromPosition(position);
    const index = this._getIndexOfNearestStepValue(value);
    const stepValues = this._getStepValues();

    return this._calculatePositionFromValue(stepValues[index]);
  }

  private _getStepValues(): number[] {
    const { steps } = this;

    if (Array.isArray(steps)) {
      return steps;
    }

    const { max, min } = this;
    const numSteps = Math.ceil((max - min) / steps);
    const stepValues = [];

    for (let i = 0; i <= numSteps; i++) {
      const step = min + steps * i;

      stepValues.push(step > max ? max : step);
    }

    return stepValues;
  }

  private _calculatePositionAfterMovementKeyPress(
    index: number,
    position: number,
    direction: number
  ): number {
    const { steps, values } = this;
    const oldValue = values[index];

    // Adjusting anchor to nearest step
    if (isSome(steps)) {
      return this._calculateStepPositionAfterMovementKeyPress(oldValue, direction);
    }

    // Adjusting anchor by a single pixel
    const { layout, precision } = this;
    const pixelOffset = layout === "horizontal" ? direction : direction * -1;
    const newPosition = position + pixelOffset;

    return precision === 0
      ? this._calculatePositionFromValue(
          this._calculateValueFromPosition(newPosition) + pixelOffset
        )
      : newPosition;
  }

  private _calculateStepPositionAfterMovementKeyPress(oldValue: number, direction: number): number {
    const stepValues = this._getStepValues();
    const oldStepIndex = stepValues.indexOf(oldValue);

    // Anchor exists on a step
    if (oldStepIndex > -1) {
      return this._calculatePositionFromValue(
        isSome(stepValues[oldStepIndex + direction])
          ? stepValues[oldStepIndex + direction]
          : stepValues[oldStepIndex]
      );
    }

    // Anchor is not attached to a 'step' - could be a decimal or result of user-input
    // Adjust value slightly to handle case where a handle is positoned exactly between two steps
    const stepIndex = this._getIndexOfNearestStepValue(oldValue + 0.0001 * direction);

    return this._calculatePositionFromValue(stepValues[stepIndex + direction]);
  }

  private _getTickCounts(value: number, config: TickConfig): number {
    const { mode } = config;

    if (mode === "count" || mode === "position") {
      return value || 0;
    }

    if (mode === "percent") {
      return 100 / value || 0;
    }

    // if (mode === "steps") {
    //   return (max - min) / value;
    // }

    return 0;
  }

  private _calculateTickPositions(values: number[]): number[] {
    return values.map((value) => this._calculatePositionFromValue(value));
  }

  private _calculateEquidistantTickPositions(count: number): number[] {
    const { _trackWidth, _trackHeight, layout } = this;
    const trackMax = layout === "horizontal" ? _trackWidth : _trackHeight;
    const d = trackMax / (count - 1);
    const positions: number[] = [];

    // Center single tick
    if (count === 1) {
      return [trackMax / 2];
    }

    for (let i = 0; i < count; i++) {
      const position = i * d;

      // Tick is contained within the track
      if (position <= trackMax) {
        positions.push(position);
      }
    }

    return positions;
  }

  private _calculatePositionStyleForElement(value: number): string {
    const adjustedPosition = this._calculatePositionForElement(value);
    const prefix = this.layout === "horizontal" ? "left" : "top";

    return `${prefix}: ${adjustedPosition}`;
  }

  private _calculatePositionForElement(value: number): string {
    const { layout, max, min } = this;
    const range = max - min;
    const percentage = 100 * ((value - min) / range);
    const adjustedPosition = layout === "horizontal" ? percentage : 100 - percentage;

    return `${adjustedPosition}%`;
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  private _emitMaxChangeEvent(params: { oldValue: number; value: number }): void {
    this.emit("max-change", { ...params, type: "max-change" });
  }

  private _emitMinChangeEvent(params: { oldValue: number; value: number }): void {
    this.emit("min-change", { ...params, type: "min-change" });
  }

  private _emitValueChangeEvent(params: { index: number; oldValue: number; value: number }): void {
    this.emit("value-change", { ...params, type: "value-change" });
  }

  private _emitValuesChangeEvent(params: {
    indices: number[];
    oldValues: number[];
    values: number[];
  }): void {
    this.emit("values-change", { ...params, type: "values-change" });
  }

  private _emitThumbChangeEvent(params: { index: number; oldValue: number; value: number }): void {
    this.emit("thumb-change", { ...params, type: "thumb-change" });
  }

  private _emitThumbDragEvent(params: { index: number; state: string; value: number }): void {
    this.emit("thumb-drag", { ...params, type: "thumb-drag" });
  }

  private _emitSegmentDragEvent(params: {
    index: number;
    state: string;
    thumbIndices: [number, number];
  }): void {
    this.emit("segment-drag", { ...params, type: "segment-drag" });
  }
}

export = Slider;
