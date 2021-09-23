/**
 * A slider widget that can be used for filtering data, or gathering
 * numeric input from a user. The slider can have multiple thumbs, and provides you
 * with the ability to format labels and control user input.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![Slider with annotations](../assets/img/apiref/widgets/sliders/slider-labels.png "Slider with annotations")
 *
 * At a minimum, the slider's [container](#container) or parent container must have a `width` set in CSS for it to render.
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
 *   visibleElements: {
 *     labels: true,
 *     rangeLabels: true
 *   }
 * });
 *
 * @see [Slider.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Slider.tsx)
 * @see [Slider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Slider.scss)
 * @see module:esri/widgets/Slider/SliderViewModel
 */

// esri
import { substitute } from "esri/intl";

// esri.core
import Collection from "esri/core/Collection";
import { deprecatedProperty } from "esri/core/deprecate";
import { eventKey } from "esri/core/events";
import Logger from "esri/core/Logger";
import { isSome } from "esri/core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.libs.resize-observer
import ResizeObserver from "esri/libs/resize-observer/ResizeObserver";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.Slider
import {
  Bounds,
  InputCreatedFunction,
  InputType,
  LabelInfos,
  RangeLabelClickEvent,
  SegmentClickEvent,
  SegmentDragEvent,
  ThumbChangeEvent,
  ThumbClickEvent,
  ThumbCreatedFunction,
  ThumbDragEvent,
  TickClickEvent,
  TrackClickEvent,
  TickConfig,
  ValueChangeEvent
} from "esri/widgets/Slider/interfaces";
import SliderViewModel from "esri/widgets/Slider/SliderViewModel";

// esri.widgets.Slider.t9n
import SliderMessages from "esri/widgets/Slider/t9n/Slider";

// esri.widgets.support
import {
  InputFormatFunction,
  InputParseFunction,
  LabelFormatFunction,
  SliderFormatType,
  VNode
} from "esri/widgets/support/interfaces";
import { messageBundle, tsx, WidgetProperties } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-slider",
  reversed: "esri-slider--reversed",
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
  lastMovedAnchorElement: "esri-slider__anchor--moved",
  anchorElementActive: "esri-slider__anchor--active",

  anchorElementIndexPrefix: "esri-slider__anchor-",
  segmentElement: "esri-slider__segment",
  segmentElementIndexPrefix: "esri-slider__segment-",
  segmentElementInteractive: "esri-slider__segment--interactive",
  segmentElementActive: "esri-slider__segment--active",
  thumbElement: "esri-slider__thumb",
  labelElement: "esri-slider__label",
  labelElementInteractive: "esri-slider__label--interactive",
  labelInput: "esri-slider__label-input",

  // common
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled",
  hidden: "esri-hidden"
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

const declaredClass = "esri.widgets.Slider";

type Layout = "vertical" | "vertical-reversed" | "horizontal" | "horizontal-reversed";

type State = "disabled" | "ready" | "dragging" | "editing";

interface DragStartInfo {
  clientX: number;
  clientY: number;
  index: number;
  position: number;
}

interface SegmentDragStartInfo {
  cursorPosition: number;
  index: number;
  details: SegmentDetails;
}

interface SegmentDetails {
  min: AnchorDetails;
  max: AnchorDetails;
}

interface AnchorDetails {
  index: number;
  position: number;
  value: number;
}

interface TickElementGroup {
  groupElement?: HTMLElement;
  tickElement?: HTMLElement;
  labelElement?: HTMLElement;
}

interface SliderEvents {
  "max-change": ValueChangeEvent;
  "max-click": RangeLabelClickEvent;
  "min-change": ValueChangeEvent;
  "min-click": RangeLabelClickEvent;
  "segment-click": SegmentClickEvent;
  "segment-drag": SegmentDragEvent;
  "thumb-change": ThumbChangeEvent;
  "thumb-click": ThumbClickEvent;
  "thumb-drag": ThumbDragEvent;
  "tick-click": TickClickEvent;
  "track-click": TrackClickEvent;
}

const logger = Logger.getLogger("esri.widgets.Slider");

interface VisibleElements {
  labels?: boolean;
  rangeLabels?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  labels: false,
  rangeLabels: false
};

interface OptionalConstructProperties extends WidgetProperties<SliderViewModel> {
  disabled: boolean;
  extraNodes: VNode[];
  draggableSegmentsEnabled: boolean;
  inputCreatedFunction: InputCreatedFunction;
  inputFormatFunction: InputFormatFunction;
  inputParseFunction: InputParseFunction;
  labelInputsEnabled: boolean;
  labelFormatFunction: LabelFormatFunction;
  labels: LabelInfos;
  labelsVisible: boolean;
  layout: Layout;
  max: number;
  min: number;
  precision: number;
  rangeLabelInputsEnabled: boolean;
  rangeLabelsVisible: boolean;
  snapOnClickEnabled: boolean;
  steps: number | number[];
  syncedSegmentsEnabled: boolean;
  thumbsConstrained: boolean;
  thumbCreatedFunction: ThumbCreatedFunction;
  tickConfigs: TickConfig[];
  values: number[];
  visibleElements: VisibleElements;
}

type ConstructProperties = Partial<OptionalConstructProperties>;

@subclass(declaredClass)
class Slider extends Widget<ConstructProperties, SliderEvents> implements ConstructProperties {
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
   * @property {"max-change"} type - The type of the event.
   * @property {number} value - The [max](#max) value (or bound) of the slider when the event is emitted.
   */

  /**
   * Fires when a user changes the [min](#min) value of the slider.
   *
   * @event module:esri/widgets/Slider#min-change
   *
   * @property {number} oldValue - The former [min](#min) value (or bound) of the slider.
   * @property {"min-change"} type - The type of the event.
   * @property {number} value - The the [min](#min) value (or bound) of the slider when the event is emitted.
   */

  /**
   * Fires when a user clicks a [segment element](#segmentElements) on the slider. A segment is a portion
   * of the track that lies between two thumbs. This only applies when
   * two or more thumbs are set on the slider.
   *
   * @event module:esri/widgets/Slider#segment-click
   * @since 4.20
   *
   * @property {number} index - The 1-based index of the segment on the slider.
   * @property {number[]} thumbIndices - The indices of the thumbs on each end of the segment.
   * @property {"segment-click"} type - The type of the event.
   * @property {number} value - The approximate value of the slider at the location of the click event.
   */

  /**
   * Fires when a user drags a [segment](#segmentElements) of the slider. A segment is the portion
   * of the track that lies between two thumbs. Therefore, this only applies when
   * two or more thumbs are set on the slider.
   *
   * @event module:esri/widgets/Slider#segment-drag
   *
   * @property {number} index - The 1-based index of the segment in the slider.
   * @property {"start" | "drag"} state - The state of the drag.
   * @property {"segment-drag"} type - The type of the event.
   * @property {number[]} thumbIndices - The indices of the thumbs on each end of the segment.
   */

  /**
   * Fires when a user changes the value of a thumb via the arrow keys or by keyboard editing of the label on the slider.
   *
   * @event module:esri/widgets/Slider#thumb-change
   *
   * @property {number} index - The 0-based index of the updated thumb.
   * @property {number} oldValue - The former value of the thumb before the change was made.
   * @property {"thumb-change"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * Fires when a user clicks a [thumb element](#thumbElements).
   *
   * @event module:esri/widgets/Slider#thumb-click
   * @since 4.20
   *
   * @property {number} index - The 0-based index of the thumb.
   * @property {"thumb-click"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * Fires when a user drags a thumb on the Slider widget.
   *
   * @event module:esri/widgets/Slider#thumb-drag
   *
   * @property {number} index - The 0-based index of the updated thumb.
   * @property {"drag" | "start" | "stop"} state - The state of the drag.
   * @property {"thumb-drag"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   */

  /**
   * Fires when a user clicks the [track element](#trackElement).
   *
   * @event module:esri/widgets/Slider#track-click
   * @since 4.20
   *
   * @property {"track-click"} type - The type of the event.
   * @property {number} value - The approximate value of the slider at the location of the click event.
   */

  /**
   * Fires when a user clicks the [max label element](#maxLabelElement).
   *
   * @event module:esri/widgets/Slider#max-click
   * @since 4.20
   *
   * @property {"max-click"} type - The type of the event.
   * @property {number} value - The max value of the slider.
   */

  /**
   * Fires when a user clicks the [min label element](#minLabelElement).
   *
   * @event module:esri/widgets/Slider#min-click
   * @since 4.20
   *
   * @property {"min-click"} type - The type of the event.
   * @property {number} value - The  min value of the slider.
   */

  /**
   * Fires when a user clicks a [tick or its associated label](#tickElements).
   *
   * @event module:esri/widgets/Slider#tick-click
   * @since 4.20
   *
   * @property {"tick-click"} type - The type of the event.
   * @property {number} value - The approximate value that the tick represents on the slider track.
   * @property {number} configIndex - The 0-based index of the associated configuration provided in [tickConfigs](#tickConfigs).
   * @property {number} groupIndex - The 0-based index of the tick and/or group (associated label) relative to other ticks in the same configuration.
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
  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);

    this._observer = new ResizeObserver(() => this.scheduleRender());

    this._onAnchorPointerDown = this._onAnchorPointerDown.bind(this);
    this._onAnchorPointerMove = this._onAnchorPointerMove.bind(this);
    this._onAnchorPointerUp = this._onAnchorPointerUp.bind(this);

    this._onLabelPointerDown = this._onLabelPointerDown.bind(this);
    this._onLabelPointerUp = this._onLabelPointerUp.bind(this);

    this._onSegmentPointerDown = this._onSegmentPointerDown.bind(this);
    this._onSegmentPointerMove = this._onSegmentPointerMove.bind(this);
    this._onSegmentPointerUp = this._onSegmentPointerUp.bind(this);

    this._onTrackPointerDown = this._onTrackPointerDown.bind(this);
    this._onTrackPointerMove = this._onTrackPointerMove.bind(this);
    this._onTrackPointerUp = this._onTrackPointerUp.bind(this);
  }

  override destroy(): void {
    // widget could be destroyed while dragging thumb
    document.removeEventListener("pointerup", this._onLabelPointerUp);
    document.removeEventListener("pointermove", this._onLabelPointerMove);
    document.removeEventListener("pointerup", this._onAnchorPointerUp);
    document.removeEventListener("pointermove", this._onAnchorPointerMove);

    this.labelElements.removeAll();
    this.labelElements.destroy();

    this.segmentElements.removeAll();
    this.segmentElements.destroy();

    this.thumbElements.removeAll();
    this.thumbElements.destroy();

    this.tickElements.removeAll();
    this.tickElements.destroy();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeLabelInputIndex: number = null;

  private _anchorElements: HTMLElement[] = [];

  private _baseNode: HTMLElement = null;

  private _dragged: boolean = false;

  private _dragStartInfo: DragStartInfo = null;

  private _focusedAnchorIndex: number = null;

  private _isMinInputActive: boolean = false;

  private _isMaxInputActive: boolean = false;

  private _lastMovedHandleIndex: number = null;

  private _observer: ResizeObserver = null;

  private _positionPrecision: number = 5;

  private _segmentDragStartInfo: SegmentDragStartInfo = null;

  private _trackHeight: number = null;

  private _trackWidth: number = null;

  private _zIndices: number[] = null;

  private _zIndexOffset = 3;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  disabled
  //----------------------------------

  /**
   * When `true`, sets the slider to a disabled state so the user cannot interact
   * with it.
   *
   * @name disabled
   * @instance
   * @type {boolean}
   * @default false
   */
  @property()
  disabled = false;

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
  @property()
  extraNodes: VNode[] = [];

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
  draggableSegmentsEnabled = true;

  //----------------------------------
  //  inputCreatedFunction
  //----------------------------------

  /**
   * Function that executes each time an input element is created. It allows the developer to validate
   * a user's manually entered slider thumb values. This function should be set to the
   * [inputCreatedFunction](#inputCreatedFunction) property.
   *
   * @callback module:esri/widgets/Slider~InputCreatedFunction
   *
   * @param {HTMLInputElement} inputElement - The HTMLInputElement allowing the user to manually input
   *   slider thumb values. You can customize this element to validate user input, for example by setting
   *   the `type` and `pattern` attributes.
   * @param {"max" | "min" | "thumb"} type - The type of input created.
   * @param {number} [thumbIndex] - The index of the thumb corresponding to the input element.
   */

  /**
   * A function that provides the developer with access to the input elements when
   * [rangeLabelInputsEnabled](#rangeLabelInputsEnabled) and/or [labelInputsEnabled](#labelInputsEnabled) are set to `true`.
   * This allows the developer to customize the input elements corresponding to slider min/max and thumb values
   * to validate user input. For example, you can access input elements and customize them with `type` and `pattern` attributes.
   *
   * @name inputCreatedFunction
   * @instance
   * @type {module:esri/widgets/Slider~InputCreatedFunction}
   * @see [labelInputsEnabled](#labelInputsEnabled)
   * @see [rangeLabelInputsEnabled](#rangeLabelInputsEnabled)
   *
   * @example
   * // Sets the slider thumb inputs as number inputs
   * slider.inputCreatedFunction = function(input, type, index){
   *   input.setAttribute("type", "number");
   *   input.setAttribute("pattern", "[0-9]*");
   * };
   */
  @property()
  inputCreatedFunction: InputCreatedFunction = null;

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
   * @type {module:esri/widgets/Slider~LabelFormatter}
   * @see [inputParseFunction](#inputParseFunction)
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
  @aliasOf("viewModel.inputFormatFunction")
  inputFormatFunction: InputFormatFunction = null;

  /**
   * Function definition for the
   * [inputParseFunction](#inputParseFunction) property. It fires
   * each time the user modifies slider input by key entry.
   *
   * @callback module:esri/widgets/Slider~InputParser
   *
   * @param {string} value - The formatted input value of the thumb to be parsed.
   * @param {"average" | "min" | "max" | "tick" | "value"} [type] - The label type. Valid types include `average`, `min`, `max`, `tick`, and `value`.
   * @param {number} [index] - The index of the thumb (or [value](#values)).
   *
   * @return {number} The parsed number value of the thumb.
   */

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
   *
   * @example
   * // Parses the slider input (a string value) to a number value understandable to the slider
   * // This assumes the slider was already configured with an inputFormatFunction
   * // For example, if the input is 1.5k this function will parse
   * // it to a value of 1500
   * slider.inputParseFunction = function(value, type, index){
   *   let charLength = value.length;
   *   let valuePrefix = parseFloat(value.substring(0,charLength-1));
   *   let finalChar = value.substring(charLength-1);
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
  @aliasOf("viewModel.inputParseFunction")
  inputParseFunction: InputParseFunction = null;

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
  override label: string = undefined;

  //----------------------------------
  //  labelElements
  //----------------------------------

  /**
   * The HTML Element nodes representing [labels](#labels) attached to slider thumbs. You can use this property to customize the style of labels and attach event handlers to each element.
   *
   * @name labelElements
   * @instance
   * @type {module:esri/core/Collection<HTMLElement>}
   * @since 4.20
   * @readonly
   *
   * @example
   * slider.labelElements.forEach( labelElement => labelElement.classList.add("newStyle") );
   */
  @property({
    readOnly: true
  })
  readonly labelElements: Collection<HTMLElement> = new Collection();

  //----------------------------------
  //  labelInputsEnabled
  //----------------------------------

  /**
   * Indicates whether to enable editing input values via keyboard input
   * when the user clicks a label. This allows the user to move the slider
   * thumb to precise values without sliding the thumbs.
   *
   * ![Slider editable labels](../assets/img/apiref/widgets/sliders/slider-edit-label.png "Slider with editable labels")
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

  /**
   * Function used to format labels. This function should be set to the
   * [labelFormatFunction](#labelFormatFunction) property. It fires
   * each time a label is created or updated on the slider.
   *
   * @callback module:esri/widgets/Slider~LabelFormatter
   *
   * @param {number} value - The value of the thumb to be labeled.
   * @param {"average" | "min" | "max" | "tick" | "value"} [type] - The label type. Valid types include `average`, `min`, `max`, `tick`, and `value`.
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
  @aliasOf("viewModel.labelFormatFunction")
  labelFormatFunction: LabelFormatFunction = null;

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
  @aliasOf("viewModel.labels")
  labels: LabelInfos = null;

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
   * @deprecated since version 4.15. Use {@link module:esri/widgets/Slider#visibleElements Slider.visibleElements.labels} instead.
   * @example
   * slider.labelsVisible = true;
   */
  @property()
  set labelsVisible(value: boolean) {
    deprecatedProperty(logger, "labelsVisible", {
      replacement: "visibleElements.labels",
      version: "4.15"
    });
    this.visibleElements = { ...this.visibleElements, labels: value };
  }

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Determines the layout/orientation of the Slider widget. By default, the slider
   * will render horizontally with the min value on the left side of the track. The
   * possible values are described below.
   *
   * **`horizontal`**
   *
   * ![Slider horizontal not reversed](../assets/img/apiref/widgets/sliders/slider-horizontal-not-reversed.png "default horizontal slider")
   *
   * **`horizontal-reversed`**
   *
   * When the slider is set to `horizontal-reversed`, the max value will render on the
   * left side and the min on the right.
   *
   * ![Slider horizontal reversed](../assets/img/apiref/widgets/sliders/slider-horizontal-reversed.png "reversed horizontal slider")
   *
   * **`vertical`**
   *
   * When the slider is set to `vertical`, the max value will render on the
   * top of the track and the min on the bottom.
   *
   * ![Slider vertical not reversed](../assets/img/apiref/widgets/sliders/slider-vertical-not-reversed.png "default vertical slider")
   *
   * **`vertical-reversed`**
   *
   * When the slider is set to `vertical-reversed`, the max value will render on the
   * bottom of the track and the min on the top.
   *
   * ![Slider vertical reversed](../assets/img/apiref/widgets/sliders/slider-vertical-reversed.png "reversed vertical slider")
   *
   * @name layout
   * @instance
   * @type {"horizontal" | "horizontal-reversed" | "vertical" | "vertical-reversed" }
   * @default horizontal
   * @example
   * slider.layout = "vertical";
   */
  @property({ value: "horizontal" })
  set layout(value: Layout) {
    const layouts: Layout[] = [
      "vertical",
      "vertical-reversed",
      "horizontal",
      "horizontal-reversed"
    ];

    if (layouts.indexOf(value) === -1) {
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
   * To display the `max` value's label on the slider, set [visibleElements.rangeLabels](#visibleElements) to `true`.
   * To allow the end user to modify the max value, set
   * [rangeLabelInputsEnabled](#rangeLabelInputsEnabled) to `true`.
   *
   * @see [rangeLabelInputsEnabled](#rangeLabelInputsEnabled)
   * @see [visibleElements](#visibleElements)
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
  @aliasOf("viewModel.max")
  max: number = null;

  //----------------------------------
  //  maxLabelElement
  //----------------------------------

  /**
   * The HTML Element node representing the [max](#max) value label. You can use this property
   * to customize the style and attach event handlers.
   *
   * @name maxLabelElement
   * @instance
   * @type {HTMLElement}
   * @readonly
   * @since 4.20
   *
   * @example
   * slider.maxLabelElement.classList.add('maxClass');
   *
   * @example
   * slider.maxLabelElement.addEventListener('click', () => {
   *   slider.values = [ slider.max ];
   * });
   */
  @property({
    readOnly: true
  })
  readonly maxLabelElement: HTMLElement = null;

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
  @messageBundle("esri/widgets/Slider/t9n/Slider")
  messages: SliderMessages = null;

  //----------------------------------
  //  min
  //----------------------------------

  /**
   * The minimum possible data/thumb value of the slider. In the constructor, if one of the values
   * specified in [values](#values) is less than the `min` value specified
   * in this property, then the `min` will update to the lowest value in `values`.
   *
   * To display the `min` value's label on the slider, set [visibleElements.rangeLabels](#visibleElements) to `true`.
   * To allow the end user to modify the min value, set
   * [rangeLabelInputsEnabled](#rangeLabelInputsEnabled) to `true`.
   *
   * @see [rangeLabelInputsEnabled](#rangeLabelInputsEnabled)
   * @see [visibleElements](#visibleElements)
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
  @aliasOf("viewModel.min")
  min: number = null;

  //----------------------------------
  //  minLabelElement
  //----------------------------------

  /**
   * The HTML Element node representing the [min](#min) value label. You can use this property
   * to customize the style and attach event handlers.
   *
   * @name minLabelElement
   * @instance
   * @type {HTMLElement}
   * @readonly
   * @since 4.20
   *
   * @example
   * slider.minLabelElement.classList.add('minClass');
   *
   * @example
   * slider.minLabelElement.addEventListener('click', () => {
   *   slider.values = [ slider.min ];
   * });
   */
  @property({
    readOnly: true
  })
  readonly minLabelElement: HTMLElement = null;

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
  @aliasOf("viewModel.precision")
  precision = 4;

  //----------------------------------
  //  rangeLabelInputsEnabled
  //----------------------------------

  /**
   * Indicates whether to enable editing range values via keyboard input
   * when the user clicks a [min](#min) or [max](#max) label.
   * This allows the user to increase or decrease the data range of the slider.
   *
   * ![Slider editable range labels](../assets/img/apiref/widgets/sliders/slider-edit-range-label.png "Slider with editable range labels")
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
   * @deprecated since version 4.15. Use {@link module:esri/widgets/Slider#visibleElements Slider.visibleElements.rangeLabels} instead.
   * @example
   * slider.viewModel.rangeLabelInputsEnabled = true;
   */
  @property()
  set rangeLabelsVisible(value: boolean) {
    deprecatedProperty(logger, "rangeLabelsVisible", {
      replacement: "visibleElements.rangeLabels",
      version: "4.15"
    });
    this.visibleElements = { ...this.visibleElements, rangeLabels: value };
  }

  //----------------------------------
  //  segmentElements
  //----------------------------------

  /**
   * The HTML Element nodes representing interactive slider segments. Segments are interactive when situated between two thumbs. You can use this property to customize the style and attach event handlers to segments.
   *
   * @name segmentElements
   * @instance
   * @type {module:esri/core/Collection<HTMLElement>}
   * @readonly
   * @since 4.20
   *
   * @example
   * slider.segmentElements.forEach( segmentElement => segmentElement.classList.add("thickLine") );
   */
  @property({
    readOnly: true
  })
  readonly segmentElements: Collection<HTMLElement> = new Collection();

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
   * @name state
   * @instance
   * @type {"ready" | "disabled" | "editing" | "dragging"}
   * @readonly
   */
  @property({
    readOnly: true
  })
  get state(): State {
    const {
      _activeLabelInputIndex,
      _isMaxInputActive,
      _isMinInputActive,
      _dragStartInfo,
      _segmentDragStartInfo,
      disabled,
      viewModel
    } = this;

    const dragging = isSome(_dragStartInfo) || isSome(_segmentDragStartInfo);
    const editing = !!(_activeLabelInputIndex !== null || _isMaxInputActive || _isMinInputActive);

    return disabled ? "disabled" : editing ? "editing" : dragging ? "dragging" : viewModel.state;
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

  //----------------------------------
  //  syncedSegmentsEnabled
  //----------------------------------

  /**
   * When `true`, all segments will sync together in updating thumb values when the user drags any segment. This maintains the interval between all thumbs when any segment is dragged.
   * Only applicable when [draggableSegmentsEnabled](#draggableSegmentsEnabled) is `true`.
   *
   * @name syncedSegmentsEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @since 4.20
   *
   * @example
   * slider.draggableSegmentsEnabled = true;
   * slider.syncedSegmentsEnabled = true;
   */
  @property()
  syncedSegmentsEnabled = false;

  /**
   * Function that executes each time a thumb is created on the slider. This function should be set to the
   * [thumbCreatedFunction](#thumbCreatedFunction) property.
   *
   * @callback module:esri/widgets/Slider~ThumbCreatedFunction
   *
   * @param {number} index - The index of the thumb when the Slider was constructed.
   * @param {number} value - The value of the slider where the thumb is rendered.
   * @param {HTMLElement} thumbElement - The HTMLElement representing the thumb. You can add or modify the default style of individual
   *   thumbs by adding CSS classes to this element. You can also add custom behavior to thumbs by attaching
   *   event listeners to individual elements.
   * @param {HTMLElement} [labelElement] - The HTMLElement representing the label of the thumb. You can add or modify the default
   *   style of the thumb's labels by adding CSS classes to this element. You can also add custom behavior to thumb labels by attaching
   *   event listeners to individual elements.
   */

  //----------------------------------
  //  thumbsConstrained
  //----------------------------------

  /**
   * When `false`, the user can freely move any slider thumb to any
   * position along the track. By default, a
   * thumb's position is constrained to the positions of neighboring thumbs so
   * you cannot move one thumb past another. Set this property to `false` to
   * disable this constraining behavior.
   *
   * @name thumbsConstrained
   * @instance
   * @type {boolean}
   * @default true
   *
   * @example
   * // allows the user to freely move slider
   * // thumbs to any position along the track
   * slider.thumbsConstrained = false;
   */
  @aliasOf("viewModel.thumbsConstrained")
  thumbsConstrained = true;

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
   *   });
   * });
   */
  @property()
  thumbCreatedFunction: ThumbCreatedFunction = null;

  //----------------------------------
  //  thumbElements
  //----------------------------------

  /**
   * The HTML Element nodes representing slider thumbs. You can use this property to customize the style of thumbs and attach event handlers to each thumb.
   *
   * @name thumbElements
   * @instance
   * @type {module:esri/core/Collection<HTMLElement>}
   * @readonly
   * @since 4.20
   *
   * @example
   * slider.thumbElements.forEach( thumbElement => thumbElement.classList.add("greenThumb") );
   */
  @property({
    readOnly: true
  })
  readonly thumbElements: Collection<HTMLElement> = new Collection();

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
   * @property {"count" | "percent" | "position"} mode - The mode or method of positioning ticks along the slider track. See the table below for a list of possible values.
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
  @property()
  set tickConfigs(config: TickConfig[]) {
    this._set("tickConfigs", config);
    this.scheduleRender();
  }

  //----------------------------------
  //  tickElements
  //----------------------------------

  /**
   * The HTML Element nodes representing a single slider tick and its associated label.
   *
   * @typedef module:esri/widgets/Slider~TickElementGroup
   * @since 4.20
   *
   * @property {HTMLElement} [tickElement] - The HTMLElement representing a tick. You can add or modify the style of a tick by adding CSS classes to this element. You can also attach event listeners to this element.
   * @property {HTMLElement} [labelElement] - The HTMLElement representing the label associated with the tick element. You can add or modify the style of a tick label by adding CSS classes to this element. You can also attach event listeners to this element.
   */

  /**
   * The HTML Element nodes representing slider ticks and their associated labels. These elements are created in [TickCreatedFunction](#TickCreatedFunction) and configured in [tickConfigs](#tickConfigs).
   *
   * @name tickElements
   * @instance
   * @type {module:esri/core/Collection<module:esri/core/Collection<module:esri/widgets/Slider~TickElementGroup>>}
   * @readonly
   * @since 4.20
   *
   * @example
   * slider.tickElements.getItemAt(0).forEach((tickElementGroup) => {
   *   const { tickElement, labelElement } = tickElementGroup;
   *   const newValue = labelElement["data-value"];
   *   const setValue = () => {
   *     slider.values = [ newValue ];
   *   };
   *   tickElement.addEventListener("click", setValue);
   *   tickElement.style.cursor = "pointer";
   *   labelElement.addEventListener("click", setValue);
   *   labelElement.style.cursor = "pointer";
   * });
   */
  @property({
    readOnly: true
  })
  readonly tickElements: Collection<Collection<TickElementGroup>> = new Collection();

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
  @property({
    readOnly: true
  })
  readonly trackElement: HTMLElement = null;

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
  @aliasOf("viewModel.values")
  values: number[] = null;

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
  override viewModel = new SliderViewModel();

  //----------------------------------
  // visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   * Alternatively, developers may also use CSS (e.g. `display: none`) to show/hide elements, such as labels.
   *
   * @typedef module:esri/widgets/Slider~VisibleElements
   *
   * @property {boolean} [labels=false] - Indicates whether to display labels for slider thumbs. By default, labels
   *   display input thumb values as floating point values with a precision of two digits.
   *   The format of labels can be customized via the [labelFormatFunction](#labelFormatFunction).
   * @property {boolean} [rangeLabels=false] - Indicates whether to display [min](#min) or [max](#max) range values on the slider.
   *   The format of labels can be customized via the [labelFormatFunction](#labelFormatFunction).
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Slider~VisibleElements}
   * @autocast
   *
   * @since 4.15
   *
   * @example
   * slider.visibleElements = {
   *   labels: true,
   *   rangeLabels: true
   * };
   */
  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  override render(): VNode {
    const { label } = this;
    const baseClasses = this.classes(
      CSS.base,
      CSS.esriWidget,
      this._isHorizontalLayout() ? CSS.horizontalLayout : CSS.verticalLayout,
      this._isReversedLayout() ? CSS.reversed : null,
      this._isDisabled() ? CSS.disabled : null
    );

    // Update references used to calculate position of anchors and ticks
    // Requires 'trackElement' to already be rendered at least once
    this._storeTrackDimensions();

    return (
      <div
        afterCreate={this._afterBaseNodeCreate}
        bind={this}
        aria-label={label}
        class={baseClasses}
        touch-action={"none"}
      >
        {this.renderContent()}
      </div>
    );
  }

  toNextStep(index: number): void {
    this._toStep(index, 1);
  }

  toPreviousStep(index: number): void {
    this._toStep(index, -1);
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderContent(): VNode {
    const { max, min } = this;

    // Check for invalid range configuration
    if (!isSome(min) || !isSome(max) || min >= max) {
      return undefined;
    }

    return [this.renderMin(), this.renderSliderContainer(), this.renderMax()];
  }

  protected renderSliderContainer(): VNode {
    return (
      <div key="slider-container" bind={this} class={CSS.contentElement}>
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
        afterRemoved={this._afterTrackRemoved}
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
      return undefined;
    }

    const numberOfSegments = this.values.length + 1;
    const nodes: VNode[] = [];

    for (let i = 0; i < numberOfSegments; i++) {
      nodes.push(this.renderSegmentElement(i));
    }

    return nodes;
  }

  protected renderSegmentElement(index: number): VNode {
    const { _trackHeight, _trackWidth, draggableSegmentsEnabled, id, state, values } = this;
    const isHorizontal = this._isHorizontalLayout();
    const trackMax = isHorizontal ? _trackWidth : _trackHeight;

    // Information about surrounding thumb(s)
    const maxThumbIndex = index === values.length ? null : index;
    const minThumbIndex = index === 0 ? null : index - 1;
    const hasMaxThumb = isSome(maxThumbIndex);
    const hasMinThumb = isSome(minThumbIndex);
    let max, min;

    // Sort values
    // True order of values overcomplicates this workflow
    const sortedValues = [...values].sort((n1, n2) => n1 - n2);

    // Get bounds of segment
    // Depending on layout, 'max' has a different meaning (top vs left)
    if (this._isReversedLayout()) {
      max = hasMinThumb
        ? this._positionFromValue(sortedValues[minThumbIndex])
        : isHorizontal
        ? trackMax
        : 0;
      min = hasMaxThumb
        ? this._positionFromValue(sortedValues[maxThumbIndex])
        : isHorizontal
        ? 0
        : trackMax;
    } else {
      max = hasMaxThumb
        ? this._positionFromValue(sortedValues[maxThumbIndex])
        : isHorizontal
        ? trackMax
        : 0;
      min = hasMinThumb
        ? this._positionFromValue(sortedValues[minThumbIndex])
        : isHorizontal
        ? 0
        : trackMax;
    }

    // Calculate 'length' (as a percent) and scale of segment relative to the primary axis
    const percentage = this._applyPrecisionToPosition((min * 100) / trackMax);
    const scale = (max - min) / trackMax;
    const style = isHorizontal
      ? `transform: translate(${percentage}%, 0px) scale(${scale}, 1);`
      : `transform: translate(0px, ${percentage}%) scale(1, ${scale});`;

    const segmentClasses = this.classes(
      CSS.segmentElement,
      CSS.segmentElementIndexPrefix + index,
      draggableSegmentsEnabled && hasMaxThumb && hasMinThumb && state !== "disabled"
        ? CSS.segmentElementInteractive
        : null
    );

    return (
      <div
        afterCreate={this._afterSegmentCreate}
        afterRemoved={this._afterSegmentRemoved}
        bind={this}
        class={segmentClasses}
        data-max-thumb-index={maxThumbIndex}
        data-min-thumb-index={minThumbIndex}
        data-segment-index={index}
        key={`${id}-segment-${index}`}
        style={style}
        touch-action={"none"}
      />
    );
  }

  protected renderAnchorElements(): VNode {
    const { trackElement, values } = this;

    if (!values || !values.length) {
      return undefined;
    }

    // (#8319, #21529, #22693) Calculate and store z-indices
    // This prevents issues with handles getting stuck at the slider ends
    // Handles in the first 50% of the slider have a higher index
    this._zIndices = values.map((value, index) => {
      const position = this._positionFromValue(value);
      const percent = this._positionToPercent(position);
      const greaterThan = this._isHorizontalLayout() ? percent > 50 : percent < 50;
      const direction = greaterThan ? -1 : 1;

      return this._zIndexOffset + (values.length + direction * index);
    });

    return trackElement && values && values.length
      ? values.map((value, index) => this.renderAnchorElement(value, index))
      : null;
  }

  protected renderAnchorElement(value: number, index: number): VNode {
    const position = this._positionFromValue(value);
    const testValue = this._valueFromPosition(position);

    if (!isSome(testValue) || isNaN(testValue)) {
      return undefined;
    }

    const {
      _dragStartInfo,
      _lastMovedHandleIndex,
      id,
      layout,
      values,
      visibleElements: { labels: labelsVisible }
    } = this;
    const isDragging = _dragStartInfo && _dragStartInfo.index === index;
    const lastMoved = _lastMovedHandleIndex === index;

    const classes = this.classes(
      CSS.anchorElement,
      CSS.anchorElementIndexPrefix + index,
      isDragging ? CSS.movingAnchorElement : null,
      lastMoved ? CSS.lastMovedAnchorElement : null
    );

    const label = this.labels.values[index];
    const style = this._getStyleForAnchor(value, index, isDragging || lastMoved);
    const { min, max } = this.viewModel.getBoundsForValueAtIndex(index);
    const { messages } = this;

    const ariaValueText =
      values.length === 2
        ? index === 0
          ? substitute(messages.rangeMinimum, { value })
          : substitute(messages.rangeMaximum, { value })
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
        afterRemoved={this._afterAnchorRemoved}
        aria-controls={ariaControls}
        aria-label={messages.sliderValue}
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
        key={`${id}-handle-${index}`}
        onkeydown={this._onAnchorKeyDown}
        touch-action={"none"}
        role={"slider"}
        style={style}
        tabIndex={0}
      >
        <span
          afterCreate={this._afterThumbCreate}
          afterRemoved={this._afterThumbRemoved}
          bind={this}
          class={CSS.thumbElement}
          data-thumb-index={index}
          touch-action={"none"}
        />
        {this.renderThumbLabel(index)}
      </div>
    );
  }

  protected renderThumbLabel(index: number): VNode {
    const { id, labels, labelInputsEnabled, state } = this;
    const labelsVisible = this.visibleElements.labels;
    const label = labels.values[index];
    const classes = this.classes(
      CSS.labelElement,
      !labelsVisible ? CSS.hidden : null,
      labelInputsEnabled && state !== "disabled" ? CSS.labelElementInteractive : null
    );

    return (
      <span
        afterCreate={this._afterLabelCreate}
        afterRemoved={this._afterLabelRemoved}
        aria-hidden={(!labelsVisible).toString()}
        bind={this}
        class={classes}
        data-thumb-index={index}
        key={`${id}-label-${index}`}
        id={`${id}-label-${index}`}
        role={labelInputsEnabled ? "button" : null}
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
        aria-label={this.messages.sliderValue}
        bind={this}
        class={CSS.labelInput}
        data-input-type={"thumb"}
        data-input-index={index}
        required={true}
        tabIndex={0}
        type={"text"}
        value={this._formatInputValue(value, "value", index)}
        onblur={this._onLabelInputBlur}
        onkeydown={this._onInputKeyDown}
      />
    );
  }

  protected renderMax(): VNode {
    const { _isMaxInputActive, labels, rangeLabelInputsEnabled, state } = this;
    const rangeLabelsVisible = this.visibleElements.rangeLabels;
    const classes = this.classes(
      CSS.maxElement,
      !rangeLabelsVisible ? CSS.hidden : null,
      rangeLabelInputsEnabled && state !== "disabled" ? CSS.maxElementInteractive : null
    );

    return (
      <div
        aria-hidden={(!rangeLabelsVisible).toString()}
        afterCreate={this._afterMaxLabelCreate}
        bind={this}
        class={classes}
        onclick={this._onMaxLabelClick}
        onkeydown={this._onMaxLabelKeyDown}
        role={rangeLabelInputsEnabled ? "button" : null}
        tabIndex={rangeLabelInputsEnabled ? 0 : null}
      >
        {_isMaxInputActive ? this.renderMaxInput() : labels.max}
      </div>
    );
  }

  protected renderMin(): VNode {
    const { _isMinInputActive, labels, rangeLabelInputsEnabled, state } = this;
    const rangeLabelsVisible = this.visibleElements.rangeLabels;
    const classes = this.classes(
      CSS.minElement,
      !rangeLabelsVisible ? CSS.hidden : null,
      rangeLabelInputsEnabled && state !== "disabled" ? CSS.minElementInteractive : null
    );

    return (
      <div
        aria-hidden={(!rangeLabelsVisible).toString()}
        afterCreate={this._afterMinLabelCreate}
        bind={this}
        class={classes}
        onclick={this._onMinLabelClick}
        onkeydown={this._onMinLabelKeyDown}
        role={rangeLabelInputsEnabled ? "button" : null}
        tabIndex={rangeLabelInputsEnabled ? 0 : null}
      >
        {_isMinInputActive ? this.renderMinInput() : labels.min}
      </div>
    );
  }

  protected renderMaxInput(): VNode {
    return (
      <input
        afterCreate={this._afterInputCreate}
        aria-label={this.messages.maximumValue}
        bind={this}
        class={CSS.rangeInput}
        data-input-type={"max"}
        required={true}
        tabIndex={0}
        type={"text"}
        value={this._formatInputValue(this.max, "max")}
        onblur={this._onMaxInputBlur}
        onkeydown={this._onInputKeyDown}
      />
    );
  }

  protected renderMinInput(): VNode {
    return (
      <input
        afterCreate={this._afterInputCreate}
        aria-label={this.messages.minimumValue}
        bind={this}
        class={CSS.rangeInput}
        data-input-type={"min"}
        required={true}
        tabIndex={0}
        type={"text"}
        value={this._formatInputValue(this.min, "min")}
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
    if (
      !this.tickConfigs ||
      !this.trackElement ||
      (this._trackHeight === 0 && this._trackWidth === 0)
    ) {
      return undefined;
    }

    return this.tickConfigs.map((config, index) => (
      <div key="ticks-container" class={this.classes(CSS.ticksContainerElement)}>
        {this.renderTicks(config, index)}
      </div>
    ));
  }

  protected renderTicks(config: TickConfig, configIndex: number): VNode {
    const { mode, values } = config;

    if (!this.tickElements.getItemAt(configIndex)) {
      this.tickElements.add(new Collection(), configIndex);
    }

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
        this._applyPrecisionToPosition((value / 100) * range + min)
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
        : this._valueFromPosition(position);

    if (!isSome(value) || isNaN(value)) {
      return undefined;
    }

    return (
      <div
        afterCreate={this._afterTickGroupCreate}
        afterRemoved={this._afterTickGroupRemoved}
        bind={this}
        data-config={config}
        data-position={position}
        data-tick-config-index={configIndex}
        data-tick-group-index={groupIndex}
        data-value={value}
        onclick={this._onTickGroupClick}
        key={`tick-group-${groupIndex}`}
      >
        {this.renderTickLine(config, groupIndex, configIndex, value)}
        {config.labelsVisible ? this.renderTickLabel(config, groupIndex, configIndex, value) : null}
      </div>
    );
  }

  protected renderTickLine(
    config: TickConfig,
    groupIndex: number,
    configIndex: number,
    value: number
  ): VNode {
    return (
      <div
        afterCreate={this._afterTickLineCreate}
        aria-valuenow={value.toString()}
        bind={this}
        class={CSS.tickElement}
        data-config={config}
        data-tick-config-index={configIndex}
        data-tick-group-index={groupIndex}
        data-value={value}
        key={`tick-label-${groupIndex}`}
        style={this._getPositionStyleForElement(value)}
      />
    );
  }

  protected renderTickLabel(
    config: TickConfig,
    groupIndex: number,
    configIndex: number,
    value: number
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
        data-config={config}
        data-tick-config-index={configIndex}
        data-tick-group-index={groupIndex}
        data-value={value}
        key={`tick-label-${groupIndex}`}
        style={`transform: translate(-50%); ${this._getPositionStyleForElement(value)}`}
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

  private _afterBaseNodeCreate(element: HTMLElement): void {
    if (this._baseNode) {
      this._observer.unobserve(this._baseNode);
    }

    this._baseNode = element;
    this._observer.observe(this._baseNode);
  }

  private _afterTrackCreate(element: HTMLElement): void {
    this._set("trackElement", element);

    element.addEventListener("pointerdown", this._onTrackPointerDown);

    // Anchors, segments and ticks rely on 'trackElement' for proper placement
    // During first render, 'trackElement' dimensions are 0, so a second render is required
    this.scheduleRender();
  }

  private _afterTrackRemoved(element: HTMLElement): void {
    element.removeEventListener("pointerdown", this._onTrackPointerDown);
    document.removeEventListener("pointermove", this._onTrackPointerMove);
    document.removeEventListener("pointerup", this._onTrackPointerUp);
  }

  private _afterSegmentCreate(element: HTMLElement): void {
    this.segmentElements.add(element);
    element.addEventListener("pointerdown", this._onSegmentPointerDown);
  }

  private _afterSegmentRemoved(element: HTMLElement): void {
    this.segmentElements.remove(element);
    element.removeEventListener("pointerdown", this._onSegmentPointerDown);
  }

  private _afterAnchorCreate(element: HTMLElement): void {
    this._anchorElements.push(element);

    element.addEventListener("pointerdown", this._onAnchorPointerDown);

    if (this.thumbCreatedFunction) {
      const index = element["data-thumb-index"];
      const value = element["data-value"];
      const thumbElement = this.thumbElements.getItemAt(index) || null;
      const labelElement = this.labelElements.getItemAt(index) || null;

      this.thumbCreatedFunction(index, value, thumbElement, labelElement);
    }
  }

  private _afterAnchorUpdate(element: HTMLElement): void {
    if (isSome(this._focusedAnchorIndex)) {
      const index = element["data-thumb-index"];

      if (index === this._focusedAnchorIndex) {
        element.focus();
        this._focusedAnchorIndex = null;
      }
    }
  }

  private _afterAnchorRemoved(element: HTMLElement): void {
    const index = this._anchorElements.indexOf(element, 0);

    if (index > -1) {
      this._anchorElements.splice(index, 1);
    }

    element.removeEventListener("pointerdown", this._onAnchorPointerDown);
  }

  private _afterThumbCreate(element: HTMLElement): void {
    this.thumbElements.add(element);
  }

  private _afterThumbRemoved(element: HTMLElement): void {
    this.thumbElements.remove(element);
  }

  private _afterLabelCreate(element: HTMLElement): void {
    this.labelElements.add(element);

    element.addEventListener("pointerdown", this._onLabelPointerDown);
    element.addEventListener("pointerup", this._onLabelPointerUp);
  }

  private _afterLabelRemoved(element: HTMLElement): void {
    this.labelElements.remove(element);

    element.removeEventListener("pointerdown", this._onLabelPointerDown);
    element.removeEventListener("pointerup", this._onLabelPointerUp);
  }

  private _afterInputCreate(element: HTMLInputElement): void {
    element.focus();
    element.select();

    if (this.inputCreatedFunction) {
      const type = element.getAttribute("data-input-type") as InputType;
      const index = type === "thumb" ? element["data-input-index"] : null;

      this.inputCreatedFunction(element, type, index);
    }
  }

  private _afterTickLineCreate(element: HTMLElement): void {
    const configIndex = element["data-tick-config-index"];
    const groupIndex = element["data-tick-group-index"];
    const configGroup = this.tickElements.getItemAt(configIndex);

    if (configGroup.getItemAt(groupIndex)) {
      configGroup.getItemAt(groupIndex).tickElement = element;
    } else {
      configGroup.add({ groupElement: null, tickElement: element, labelElement: null }, groupIndex);
    }
  }

  private _afterTickLabelCreate(element: HTMLElement): void {
    const configIndex = element["data-tick-config-index"];
    const groupIndex = element["data-tick-group-index"];
    const configGroup = this.tickElements.getItemAt(configIndex);

    if (configGroup.getItemAt(groupIndex)) {
      configGroup.getItemAt(groupIndex).labelElement = element;
    } else {
      configGroup.add({ groupElement: null, labelElement: element, tickElement: null }, groupIndex);
    }
  }

  private _afterTickGroupRemoved(element: HTMLElement): void {
    // groupIndex may have dynamically changed from earlier removal
    const configIndex = element["data-tick-config-index"];
    const configCollection = this.tickElements.items[configIndex];
    const group = configCollection?.find((item) => item.groupElement === element);

    group && configCollection.remove(group);
  }

  private _afterTickGroupCreate(element: HTMLElement): void {
    const config = element["data-config"];

    if (config && config.tickCreatedFunction) {
      const configIndex = element["data-tick-config-index"];
      const groupIndex = element["data-tick-group-index"];
      const value = element["data-value"];
      const group = this.tickElements?.getItemAt(configIndex)?.getItemAt(groupIndex);

      if (group) {
        // Used to keep 'tickElements' in sync
        group.groupElement = element;

        const line = group.tickElement || null;
        const label = group.labelElement || null;

        config.tickCreatedFunction(value, line, label);
      }
    }
  }

  private _afterMaxLabelCreate(element: HTMLElement): void {
    this._set("maxLabelElement", element);
  }

  private _afterMinLabelCreate(element: HTMLElement): void {
    this._set("minLabelElement", element);
  }

  //--------------------------------------------------------------------------
  //  Anchor Event Handlers
  //--------------------------------------------------------------------------

  // Logic related to keyboard events when handle is focused
  // - Anchors can be moved using 'Arrow' keys
  // - Handle label inputs can be toggled with the 'Enter' key
  private _onAnchorKeyDown(event: KeyboardEvent): void {
    // Prevent action on this node if an input is active
    if (this._isDisabled() || this.state === "editing") {
      return;
    }

    const { target } = event;
    const key = eventKey(event);
    const { _anchorElements, values } = this;
    const index = (target as HTMLElement)["data-thumb-index"];
    const anchor = _anchorElements[index];
    const oldValue = values[index];
    const isHorizontal = this._isHorizontalLayout();
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

      const { steps } = this;
      const direction = key === KEYS.moveAnchorUp || key === KEYS.moveAnchorRight ? 1 : -1;

      // Move anchor to nearest step based on index and provided direction
      // Also depends on layout direction (reversed)
      // Otherwise calculate the nearest position based on a single pixel
      if (isSome(steps)) {
        this._toStep(index, this._isReversedLayout() ? direction * -1 : direction);
      } else {
        const { precision } = this;
        const currentPosition = this._getPositionOfElement(anchor);
        const currentValue = this._valueFromPosition(currentPosition);
        const offset = this._isHorizontalLayout() ? direction : direction * -1;
        let finalPosition: number;

        // #30098 - Account for precision
        // For precise cases, a single pixel causes rounding issues
        // Use the actual value and increment accordingly
        if (precision === 0) {
          finalPosition = this._positionFromValue(currentValue + offset);
        } else if (precision === 1) {
          finalPosition = this._positionFromValue(currentValue + offset * 0.1);
        } else {
          finalPosition = currentPosition + offset;
        }

        this._toPosition(index, finalPosition);
      }

      const newValue = this.values[index];

      if (oldValue !== newValue) {
        this._emitThumbChangeEvent({ index, oldValue, value: newValue });
      }
    }
    // Move anchor to 'minimum' or 'maximum' allowed value
    else if (key === KEYS.moveAnchorToMax || key === KEYS.moveAnchorToMin) {
      event.preventDefault();

      const { min, max } = this._getAnchorBoundsInPixels(index);
      const newPosition = isHorizontal
        ? key === KEYS.moveAnchorToMax
          ? max
          : min
        : key === KEYS.moveAnchorToMin
        ? max
        : min;

      this._toPosition(index, newPosition);

      // Get updated value
      const newValue = this.values[index];

      if (oldValue !== newValue) {
        this._emitThumbChangeEvent({ index, oldValue, value: newValue });
      }
    }
  }

  // Logic related to handle movement via interaction
  // - Stores information about the target handle and wires up additional event listeners
  private _onAnchorPointerDown(event: PointerEvent): void {
    if (this._isDisabled()) {
      return;
    }

    const { target, clientX, clientY } = event;
    const index = (target as HTMLElement)["data-thumb-index"];

    // Clicked on label editor node
    if (index === undefined) {
      return;
    }

    event.preventDefault();

    this._anchorElements[index] && this._anchorElements[index].focus();

    // Update references
    this._storeTrackDimensions();

    this._dragStartInfo = {
      clientX,
      clientY,
      index,
      position: this._getPositionOfElement(this._anchorElements[index])
    };

    this.notifyChange("state");
    document.addEventListener("pointerup", this._onAnchorPointerUp);
    document.addEventListener("pointermove", this._onAnchorPointerMove);
  }

  // Logic related to handle movement while dragging
  private _onAnchorPointerMove(event: PointerEvent): void {
    // Prevent movement on this node if an input is active
    // Also allows text selection on the input
    if (this.state === "editing" || !this._dragStartInfo) {
      return;
    }

    event.preventDefault();

    const {
      values,
      _anchorElements,
      _dragged,
      _dragStartInfo,
      _dragStartInfo: { index, position }
    } = this;

    const { clientX, clientY } = event;
    const state = _dragged ? "drag" : "start";
    const anchor = _anchorElements[index];

    // Use current position and event coordinates to calculate new position
    // New position must take 'precision' into account
    const currentPosition = this._getPositionOfElement(anchor);
    const newPosition = this._applyPrecisionToPosition(
      this._isHorizontalLayout()
        ? position + clientX - _dragStartInfo.clientX
        : position + clientY - _dragStartInfo.clientY
    );

    // No significant movement on relevant axis
    if (currentPosition === newPosition) {
      return;
    }

    // Store old value for use in associated event
    const oldValue = values[index];

    // Track movement
    this._dragged = true;

    // Automatically updates associated 'value'
    this._toPosition(index, newPosition);

    // Use 'this' to get updated value
    const newValue = this.values[index];

    if (!_dragged) {
      this._emitThumbDragEvent({ index, state, value: oldValue });
    } else if (oldValue !== newValue) {
      this._emitThumbDragEvent({ index, state, value: newValue });
    }
  }

  // Logic related to finished handle movement
  // - Cleans up temporary variables and removes related event listeners
  private _onAnchorPointerUp(event: PointerEvent): void {
    document.removeEventListener("pointerup", this._onAnchorPointerUp);
    document.removeEventListener("pointermove", this._onAnchorPointerMove);

    if (!this._dragStartInfo) {
      return;
    }

    event.preventDefault();

    const { index } = this._dragStartInfo;
    const dragged = this._dragged;
    const value = this.values[index];

    this._dragged = false;
    this._dragStartInfo = null;
    this._lastMovedHandleIndex = index;
    this.notifyChange("state");

    // Only update after thumb moves
    if (dragged) {
      this._emitThumbDragEvent({ index, state: "stop", value });
    } else {
      this.scheduleRender();

      // Label may have been primary target
      if (this.state !== "editing") {
        this._emitThumbClickEvent({ index, value });
      }
    }
  }

  //--------------------------------------------------------------------------
  //  Track Event Handlers
  //--------------------------------------------------------------------------

  // Logic related to moving a handle when the track is targetted
  // Moves the nearest handle to clicked location and initializes a drag operation
  private _onTrackPointerDown(event: PointerEvent): void {
    const { _dragStartInfo, snapOnClickEnabled, state, values } = this;

    // widget/behavior is disabled, an input is open, a handle was targetted
    if (this._isDisabled() || state === "editing" || _dragStartInfo) {
      return;
    }

    // For 'track-click' event
    document.addEventListener("pointermove", this._onTrackPointerMove);
    document.addEventListener("pointerup", this._onTrackPointerUp);

    // Handle positions remain the same
    if (!snapOnClickEnabled || !values.length) {
      return;
    }

    const { steps } = this;
    const { clientX, clientY } = event;

    // Convert cursor position to raw value
    // Use value to find the nearest anchor to move
    const cursorPosition = this._getCursorPositionFromEvent(event);
    const value = this._valueFromPosition(cursorPosition);
    const potentialIndex = this._getIndexOfNearestValue(value);
    const nearestValue = values[potentialIndex];

    // Account for duplicate values (return higher index)
    // Otherwise the lowest index is always returned
    const index =
      values.some((v, i) => v === nearestValue && i !== potentialIndex) && value > nearestValue
        ? this.values.lastIndexOf(nearestValue)
        : potentialIndex;

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
    this._toPosition(index, position);

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

    // Get updated value
    const newValue = this.values[index];

    if (oldValue !== newValue) {
      this._emitThumbDragEvent({ index, state: "drag", value: newValue });
    }

    document.addEventListener("pointerup", this._onAnchorPointerUp);
    document.addEventListener("pointermove", this._onAnchorPointerMove);
  }

  private _onTrackPointerMove(event: PointerEvent): void {
    event.preventDefault();
    this._dragged = true;
  }

  private _onTrackPointerUp(event: PointerEvent): void {
    event.preventDefault();
    document.removeEventListener("pointermove", this._onTrackPointerMove);
    document.removeEventListener("pointerup", this._onTrackPointerUp);

    if (!this.snapOnClickEnabled) {
      this._dragged = false;
    }

    // Because '_dragged' is updated in '_onThumbPointerMove'
    // the 'track-click' event will not fire when 'snapOnClickEnabled' is true
    if (!this._dragged) {
      const cursorPosition = this._getCursorPositionFromEvent(event);
      const value = this._valueFromPosition(cursorPosition);
      this._emitTrackClickEvent({ value });
    }
  }

  //--------------------------------------------------------------------------
  //  Segment Event Handlers
  //--------------------------------------------------------------------------

  // Logic related to moving multiple handles via draggable segments
  // - Stores information about the target handles and wires up additional event listeners
  private _onSegmentPointerDown(event: PointerEvent): void {
    event.preventDefault();

    const element = event.target as HTMLElement;
    const index = element["data-segment-index"];
    const minIndex = element["data-min-thumb-index"] as number;
    const maxIndex = element["data-max-thumb-index"] as number;

    // Segments support events only when positioned between thumbs
    if (this._isDisabled() || !isSome(minIndex) || !isSome(maxIndex)) {
      return;
    }

    // Prevents 'snap to tap' behavior when clicking on a segment between two handles
    event.stopPropagation();

    // Update references
    this._storeTrackDimensions();

    // Required for 'segment-click' event
    document.addEventListener("pointerup", this._onSegmentPointerUp);

    const minDetails = this._getAnchorDetails(minIndex);
    const maxDetails = this._getAnchorDetails(maxIndex);

    if (this.syncedSegmentsEnabled) {
      this.segmentElements.forEach((element) => element.classList.add(CSS.segmentElementActive));
      this._anchorElements.forEach((element) => element.classList.add(CSS.anchorElementActive));
    } else {
      this.segmentElements.getItemAt(index).classList.add(CSS.segmentElementActive);
      this._anchorElements[minDetails.index]?.classList.add(CSS.anchorElementActive);
      this._anchorElements[maxDetails.index]?.classList.add(CSS.anchorElementActive);
    }

    // Store information about the segment
    // Used to calculate new handle positions based on total changes
    // Need to 'normalize' information about the
    // ... handles depending on direction and layout
    // This makes updating position of the handles conceptually easier
    this._segmentDragStartInfo = {
      cursorPosition: this._getCursorPositionFromEvent(event),
      index,
      details: this._normalizeSegmentDetails({
        min: minDetails,
        max: maxDetails
      })
    };

    if (this.draggableSegmentsEnabled) {
      document.addEventListener("pointermove", this._onSegmentPointerMove);

      // 'dragging'
      this.notifyChange("state");
      this._emitSegmentDragEvent({ index, state: "start", thumbIndices: [minIndex, maxIndex] });
    }
  }

  // Logic related to movement of handles while dragging the segment
  private _onSegmentPointerMove(event: PointerEvent): void {
    if (!this._segmentDragStartInfo) {
      return;
    }

    // Prevents selecting text labels on drag (i.e. min/max)
    event.preventDefault();

    const {
      _trackHeight,
      _trackWidth,
      _segmentDragStartInfo: {
        index,
        cursorPosition,
        details: { min: minDetails, max: maxDetails }
      }
    } = this;

    const { index: minIndex, position: minPosition, value: minValue } = minDetails;
    const { index: maxIndex, position: maxPosition, value: maxValue } = maxDetails;

    // Track movement
    this._dragged = true;

    // Track total change using cursor movement
    const newCursorPosition = this._getCursorPositionFromEvent(event);

    // No movement
    // TODO - refactor, cursorPosition is the 'original' position
    // Need to compare position to immediate previous event rather than initial position
    if (newCursorPosition === cursorPosition) {
      return;
    }

    // Convert position(s) to percent of slider width
    // Convert current min/max values to percents for comparison
    // Comparison is used to determine if one handle is out-of-bounds
    // Min bounds always refers to the 'left' or 'top' side of the slider
    // Max bounds always refers to the 'right' or 'bottom' side of the slider
    const cursorPositionAsPercent = this._positionToPercent(cursorPosition);
    const newPositionAsPercent = this._positionToPercent(newCursorPosition);
    const percentDiff = newPositionAsPercent - cursorPositionAsPercent;
    const adjustedMinAsPercent = this._positionToPercent(minPosition) + percentDiff;
    const adjustedMaxAsPercent = this._positionToPercent(maxPosition) + percentDiff;
    const { min: minBoundAsPercent } = this._getAnchorBoundsAsPercents(minIndex);
    const { max: maxBoundsAsPercent } = this._getAnchorBoundsAsPercents(maxIndex);
    let atMinBounds = false;
    let atMaxBounds = false;

    // Beyond bounds
    if (adjustedMinAsPercent < minBoundAsPercent) {
      atMinBounds = true;
    } else if (adjustedMaxAsPercent > maxBoundsAsPercent) {
      atMaxBounds = true;
    }

    // Adjust anchors using explicit values
    if (atMinBounds) {
      const { min, max } = this.viewModel.getBoundsForValueAtIndex(minIndex);
      const bound = this._isPositionInverted() ? max : min;
      const newMin = bound;
      const newMax = maxValue + (bound - minValue);
      const oldMax = this.values[maxIndex];
      const diff = newMax - oldMax;

      // Move anchors to proposed values
      // Final values may be adjusted (e.g. steps)
      if (this.syncedSegmentsEnabled) {
        this._updateAnchorValuesByDifference(diff);
      } else {
        this._updateAnchorValues([minIndex, maxIndex], [newMin, newMax]);
      }
      return;
    }

    // Adjust anchors using explicit values
    if (atMaxBounds) {
      const { min, max } = this.viewModel.getBoundsForValueAtIndex(maxIndex);
      const bound = this._isPositionInverted() ? min : max;
      const newMax = bound;
      const newMin = minValue + (bound - maxValue);
      const oldMin = this.values[minIndex];
      const diff = newMin - oldMin;

      // Move anchors to proposed values
      // Final values may be adjusted (e.g. steps)
      if (this.syncedSegmentsEnabled) {
        this._updateAnchorValuesByDifference(diff);
      } else {
        this._updateAnchorValues([minIndex, maxIndex], [newMin, newMax]);
      }
      return;
    }

    // Calculate new pixel positions using percent values
    const trackMax = this._isHorizontalLayout() ? _trackWidth : _trackHeight;
    const newMaxPosition = (adjustedMaxAsPercent / 100) * trackMax;
    const newMinPosition = (adjustedMinAsPercent / 100) * trackMax;

    // Store old values and calculate potential new values (pre-validation)
    const values = this.values;
    const oldValues = [values[minIndex], values[maxIndex]];
    const newMinValue = this._getValueForAnchorAtPosition(minIndex, newMinPosition);
    const newMaxValue = this._getValueForAnchorAtPosition(maxIndex, newMaxPosition);

    // Move anchors to proposed values
    // Final values may be adjusted (e.g. steps)
    if (this.syncedSegmentsEnabled) {
      this._updateAnchorValuesByDifference(newMinValue - oldValues[0]);
    } else {
      this._updateAnchorValues([minIndex, maxIndex], [newMinValue, newMaxValue]);
    }

    // Calculate new values
    const newValues = [this.values[minIndex], this.values[maxIndex]];

    // Verify changes after final validation
    if (!newValues.every((newValue, index) => newValue === oldValues[index])) {
      this._emitSegmentDragEvent({
        index,
        state: "drag",
        thumbIndices: [minIndex, maxIndex]
      });
    }
  }

  // Logic related to finished segment movement
  // - Cleans up temporary variables and removes related event listeners
  private _onSegmentPointerUp(event: PointerEvent): void {
    event.preventDefault();

    document.removeEventListener("pointerup", this._onSegmentPointerUp);
    document.removeEventListener("pointermove", this._onSegmentPointerMove);

    if (!this._segmentDragStartInfo) {
      return;
    }

    const { _dragged, max, min, values } = this;
    const {
      index,
      details: {
        min: { index: minIndex },
        max: { index: maxIndex }
      }
    } = this._segmentDragStartInfo;

    this.segmentElements.forEach((element) => element.classList.remove(CSS.segmentElementActive));
    this._anchorElements.forEach((element) => element.classList.remove(CSS.anchorElementActive));

    if (this.draggableSegmentsEnabled) {
      const range = max - min;
      const minHandleValue = values[minIndex];
      const maxHandleValue = values[maxIndex];

      // Overlapping handles...
      if (minHandleValue === maxHandleValue) {
        // Depending on handle position compared to slider center
        // ... we want to store an index that allows handle movement, to avoid dead-ends
        this._lastMovedHandleIndex = minHandleValue > range / 2 ? minIndex : maxIndex;
      } else {
        this._lastMovedHandleIndex = null;
      }

      this._dragged = false;
      this._segmentDragStartInfo = null;
      this.notifyChange("state");

      this._emitSegmentDragEvent({
        index,
        state: "stop",
        thumbIndices: [minIndex, maxIndex]
      });
    }

    // Fire click after drag stop
    if (!_dragged) {
      const cursorPosition = this._getCursorPositionFromEvent(event);
      const value = this._valueFromPosition(cursorPosition);

      this._emitSegmentClickEvent({
        index,
        value,
        thumbIndices: [minIndex, maxIndex]
      });
    }
  }

  //--------------------------------------------------------------------------
  //  Tick Event Handlers
  //--------------------------------------------------------------------------

  private _onTickGroupClick(event: MouseEvent): void {
    const element = event.target;
    const config = element["data-config"];

    if (config) {
      const configIndex = element["data-tick-config-index"];
      const groupIndex = element["data-tick-group-index"];
      const value = element["data-value"];

      this._emitTickClickEvent({ configIndex, groupIndex, value });
    }
  }

  //--------------------------------------------------------------------------
  //  Rendering
  //--------------------------------------------------------------------------

  // Used to calculate position of anchors and ticks
  private _storeTrackDimensions(): void {
    if (this.trackElement) {
      const dimensions = this._getDimensions(this.trackElement);

      this._trackHeight = dimensions.height;
      this._trackWidth = dimensions.width;
    }
  }

  //--------------------------------------------------------------------------
  //  Handle Label Event Handlers
  //--------------------------------------------------------------------------

  private _onLabelPointerDown(): void {
    if (this._isDisabled()) {
      return;
    }

    this._dragged = false;
    document.addEventListener("pointerup", this._onAnchorPointerUp);
    document.addEventListener("pointermove", this._onAnchorPointerMove);
  }

  private _onLabelPointerMove(): void {
    if (this._isDisabled()) {
      return;
    }

    this._dragged = true;
  }

  private _onLabelPointerUp(event: PointerEvent): void {
    if (this._isDisabled()) {
      return;
    }

    const index = (event.target as HTMLElement)["data-thumb-index"];

    // Label/handle was not dragged, activate the input
    if (this.labelInputsEnabled && !this._dragged && isSome(index)) {
      this._activeLabelInputIndex = index;
    }

    this._dragged = false;
    this.notifyChange("state");

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
    const value = this._parseInputValue(inputValue, "value", index);
    const oldValue = values[index];

    // Range validation
    const { min: boundMin, max: boundMax } = this.viewModel.getBoundsForValueAtIndex(index);

    if (value < boundMin || value > boundMax) {
      return;
    }

    viewModel.setValue(index, value);

    const newValue = this.values[index];

    if (oldValue !== newValue) {
      this._emitThumbChangeEvent({ index, oldValue, value: newValue });
    }
  }

  // Keyboard shortcuts for hiding range Editors
  private _onInputKeyDown(event: KeyboardEvent): void {
    if (this._isDisabled()) {
      return;
    }

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
  //  Min/Max Label Event Handlers
  //--------------------------------------------------------------------------

  // Triggers display of the 'max' Editor on next render
  private _onMaxLabelClick(): void {
    if (this._isDisabled()) {
      return;
    }

    this._emitRangeLabelClickEvent({ type: "max-click", value: this.max });

    if (!this.rangeLabelInputsEnabled) {
      return;
    }

    this._isMaxInputActive = true;
    this.notifyChange("state");
  }

  // Triggers display of the 'max' Editor on next render
  private _onMaxLabelKeyDown(event: KeyboardEvent): void {
    if (this._isDisabled() || eventKey(event) !== KEYS.showInput) {
      return;
    }

    this._isMaxInputActive = true;
    this.notifyChange("state");
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
    const newValue = this._parseInputValue(value, "max");

    if (newValue <= this.min) {
      return;
    }

    this.viewModel.set("max", newValue);

    if (this.max !== oldValue) {
      this._emitMaxChangeEvent({ oldValue, value: this.max });
    }
  }

  // Triggers display of the 'min' Editor on next render
  private _onMinLabelClick(): void {
    if (this._isDisabled()) {
      return;
    }

    this._emitRangeLabelClickEvent({ type: "min-click", value: this.min });

    if (!this.rangeLabelInputsEnabled) {
      return;
    }

    this._isMinInputActive = true;
    this.notifyChange("state");
  }

  // Triggers display of the 'max' Editor on next render
  private _onMinLabelKeyDown(event: KeyboardEvent): void {
    if (this._isDisabled() || eventKey(event) !== KEYS.showInput) {
      return;
    }

    this._isMinInputActive = true;
    this.notifyChange("state");
  }

  // Updates 'min' and hides Editor on next render
  private _onMinInputBlur(): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    this._isMinInputActive = false;
    this.notifyChange("state");

    // No value
    if (!value) {
      return;
    }

    const oldValue = this.min;
    const newValue = this._parseInputValue(value, "min");

    if (newValue >= this.max) {
      return;
    }

    this.viewModel.set("min", newValue);

    if (this.min !== oldValue) {
      this._emitMinChangeEvent({ oldValue, value: this.min });
    }
  }

  //--------------------------------------------------------------------------
  //  State helpers
  //--------------------------------------------------------------------------

  private _isDisabled(): boolean {
    return this.disabled || this.state === "disabled";
  }

  //--------------------------------------------------------------------------
  //  Value & position conversion helpers
  //--------------------------------------------------------------------------

  // Calculates 'position' (left/top) for given 'value'
  private _positionFromValue(value: number): number {
    const { max, min } = this;
    const range = max - min;

    if (range === 0) {
      return 0;
    }

    const { _trackHeight, _trackWidth } = this;
    const isHorizontal = this._isHorizontalLayout();

    // Position changes based on layout (orientation)
    let position = isHorizontal
      ? parseFloat(((_trackWidth * (value - min)) / range).toFixed(2))
      : parseFloat(((_trackHeight * (max - value)) / range).toFixed(2));

    // Inverse
    if (this._isReversedLayout()) {
      position = isHorizontal ? _trackWidth - position : _trackHeight - position;
    }

    return position;
  }

  // Calculates 'value' at given 'position' (left/top)
  private _valueFromPosition(position: number): number {
    const { _trackHeight, _trackWidth, max, min, precision } = this;
    const range = max - min;
    let value = this._isHorizontalLayout()
      ? (position * range) / _trackWidth + min
      : (range * (1000 - (position / _trackHeight) * 1000)) / 1000 + min;

    // Inverse
    if (this._isReversedLayout()) {
      value = max + min - value;
    }

    return parseFloat(value.toFixed(precision));
  }

  // Converts a static pixel position to percent...
  // relative to slider dimensions (width or height)
  private _positionToPercent(position: number): number {
    const { _trackHeight, _trackWidth } = this;
    const max = this._isHorizontalLayout() ? _trackWidth : _trackHeight;
    const percent = (position * 100) / max;

    return this._applyPrecisionToPosition(percent);
  }

  private _applyPrecisionToPosition(position: number): number {
    return parseFloat(position.toFixed(this._positionPrecision));
  }

  // Layout and direction
  // Used to determine position(s) depending on layout (left/top)
  // Also used to identify proper anchor order depending on direction
  private _isPositionInverted(): boolean {
    const { layout } = this;

    return layout === "horizontal-reversed" || layout === "vertical";
  }

  private _isHorizontalLayout(): boolean {
    return this.layout.indexOf("horizontal") > -1;
  }

  private _isReversedLayout(): boolean {
    return this.layout.indexOf("reversed") > -1;
  }

  // Used to simplify segment dragging logic
  // Returns inverted anchor details depending on if the position is "inverted"
  // Being "inverted" is based on a combination of layout and direction
  private _normalizeSegmentDetails(details: SegmentDetails): SegmentDetails {
    if (this._isPositionInverted()) {
      const { min, max } = details;

      return {
        min: max,
        max: min
      };
    }

    return details;
  }

  // Uses user defined parsing function if available
  private _parseInputValue(value: string, type: string, index?: number): number {
    return this.inputParseFunction
      ? this.inputParseFunction(value, type, index)
      : this.viewModel.defaultInputParseFunction(value);
  }

  // Uses user defined formatting function if available
  private _formatInputValue(value: number, type: SliderFormatType, index?: number): string {
    return this.inputFormatFunction
      ? this.inputFormatFunction(value, type, index)
      : this.viewModel.defaultInputFormatFunction(value);
  }

  //--------------------------------------------------------------------------
  //  Anchor/Thumb Helpers
  //--------------------------------------------------------------------------

  private _getAnchorDetails(index: number): AnchorDetails {
    // 'values' may not be ascending
    const sortedValues = [...this.values].sort((n1, n2) => n1 - n2);
    const value = sortedValues[index];
    const actualIndex = this.values.indexOf(value);
    const position = this._getPositionOfElement(this._anchorElements[actualIndex]);

    return { index: actualIndex, position, value };
  }

  // Utility to update an anchor element's style
  // Avoids overriding other properties after anchor creation
  private _updateAnchorStyle(index: number, style: string): void {
    const anchor = this._anchorElements[index];

    if (!anchor) {
      return;
    }

    if (this._isHorizontalLayout()) {
      anchor.style.left = `${style}`;
    } else {
      anchor.style.top = `${style}`;
    }
  }

  // Returns anchor style with appropriate position and z-index
  private _getStyleForAnchor(value: number, index: number, isActive: boolean): string {
    const position = this._getPositionStyleForElement(value);

    // (#27906) Avoid setting z-index in single handle case
    // Since this is the most common slider configuration
    // ... this addresses the issue of the handle appearing
    // ... on "top" of floating panels/dialogs/popups in simple apps
    // Z-index is still required for multi-handle cases
    if (this.values.length === 1) {
      return `${position}`;
    }

    const zIndex = this._zIndices[index];
    const adjustedZ = isActive ? this._zIndexOffset + zIndex : zIndex;

    return `${position}; z-index: ${adjustedZ}`;
  }

  // Returns position (as a percent) to be used for element's style
  // Percentage is used for improved accuracy
  private _getPositionStyleForElement(value: number): string {
    const position = this._positionFromValue(value);
    const percent = this._positionToPercent(position);

    return `${this._isHorizontalLayout() ? "left" : "top"}: ${percent + "%"}`;
  }

  // Returns current 'position' (left/top) in pixels for given element
  // Use 'rects' to calculate precise left/top values
  // 'offsetTop' and 'offsetLeft' are imprecise due to integer type
  private _getPositionOfElement(element: HTMLElement): number {
    const parentRect = this._getDimensions(element.offsetParent);
    const elementRect = this._getDimensions(element);

    return this._isHorizontalLayout()
      ? this._applyPrecisionToPosition(elementRect.left - parentRect.left)
      : this._applyPrecisionToPosition(elementRect.top - parentRect.top);
  }

  // Move anchor(s) to specific value(s)
  // Relies on view model validation
  // If steps are involved, this method assumes the values exist on steps
  private _updateAnchorValues(indices: number[], values: number[]): void {
    // Update anchor position using provided values
    indices.forEach((index, i) => this._toValue(index, values[i]));
  }

  private _updateAnchorValuesByDifference(diff: number): void {
    const { min, max, values } = this;
    values.forEach((value, i) => this._toValue(i, Math.max(Math.min(value + diff, max), min)));
  }

  private _toValue(index: number, value: number): void {
    // Locate nearest step to get updated value
    if (isSome(this.steps)) {
      const stepValues = this._getStepValues();
      const stepValueIndex = this._getIndexOfNearestStepValue(value);

      value = stepValues[stepValueIndex];
    }

    // Update anchor with modified style
    // Update associated value
    this._updateAnchorStyle(index, this._getPositionStyleForElement(value));
    this.viewModel.setValue(index, value);
  }

  // Moves anchor to new position, based on provided left/top value (relies on 'layout')
  // Also updates associated value (by index)
  private _toPosition(index: number, position: number): void {
    // Calculate new value based on position
    // If applicable, the anchor snaps to the nearest step
    const value = isSome(this.steps)
      ? this._getStepValueForAnchorAtPosition(index, position)
      : this._getValueForAnchorAtPosition(index, position);

    // Update anchor with modified style
    // Update associated value
    this._updateAnchorStyle(index, this._getPositionStyleForElement(value));
    this.viewModel.setValue(index, value);
  }

  // Returns 'value' based on provided 'position'
  // Ensures the value is contained within its allowed bounds, using anchor index
  private _getValueForAnchorAtPosition(index: number, position: number): number {
    const { min: positionMin, max: positionMax } = this._getAnchorBoundsInPixels(index);
    const { min: boundMin, max: boundMax } = this.viewModel.getBoundsForValueAtIndex(index);
    let value: number = null;
    let valueMax, valueMin;

    // Layout and direction
    if (this._isPositionInverted()) {
      valueMax = boundMin;
      valueMin = boundMax;
    } else {
      valueMax = boundMax;
      valueMin = boundMin;
    }

    // Apply bounds to value
    // Check if the provided position is out-of-bounds
    // If so, we'll use the nearest bound value
    if (position > positionMax) {
      value = valueMax;
    } else if (position < positionMin) {
      value = valueMin;
    } else {
      value = this._valueFromPosition(position);
    }

    // Verify that the actual value is still in bounds
    // Rounded decimal values can cause issues with precision
    if (value > boundMax) {
      value = boundMax;
    } else if (value < boundMin) {
      value = boundMin;
    }

    return value;
  }

  private _getStepValueForAnchorAtPosition(index: number, position: number): number {
    const stepValues = this._getStepValues();
    const stepPos = this._calculateNearestStepPosition(position);
    const value = this._getValueForAnchorAtPosition(index, stepPos);
    const stepValueIndex = this._getIndexOfNearestStepValue(value);

    return stepValues[stepValueIndex];
  }

  private _getAnchorBoundsAsPercents(index: number): Bounds {
    const { min, max } = this._getAnchorBoundsInPixels(index);

    return {
      min: this._positionToPercent(min),
      max: this._positionToPercent(max)
    };
  }

  // Calculates min and max pixel values (for top/left) for anchor at given index.
  // If 'layout' is 'horizontal', returns left values based on track width
  // If 'layout' is 'vertical', returns top values based on track height
  private _getAnchorBoundsInPixels(index: number): Bounds {
    const { _anchorElements, _trackHeight, _trackWidth, thumbsConstrained } = this;
    const prevAnchor = _anchorElements[index - 1];
    const nextAnchor = _anchorElements[index + 1];
    const trackMax = this._isHorizontalLayout() ? _trackWidth : _trackHeight;

    if (!thumbsConstrained) {
      return {
        max: trackMax,
        min: 0
      };
    }

    // Layout and direction
    if (this._isPositionInverted()) {
      return {
        max: prevAnchor ? this._getPositionOfElement(prevAnchor) : trackMax,
        min: nextAnchor ? this._getPositionOfElement(nextAnchor) : 0
      };
    }

    return {
      max: nextAnchor ? this._getPositionOfElement(nextAnchor) : trackMax,
      min: prevAnchor ? this._getPositionOfElement(prevAnchor) : 0
    };
  }

  // Returns index of nearest provided value
  // -- Used to find the nearest handle to a given location (value) on the track
  private _getIndexOfNearestValue(value: number): number {
    return this.values.indexOf(
      this.values.reduce((prev, curr) =>
        Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
      )
    );
  }

  // Returns position (x or y) of the cursor, depending on layout
  // Only a single value from a specific axis is needed for comparison
  private _getCursorPositionFromEvent(event: PointerEvent): number {
    const bounds = this._getDimensions(this.trackElement);

    return this._isHorizontalLayout() ? event.clientX - bounds.left : event.clientY - bounds.top;
  }

  //--------------------------------------------------------------------------
  //  Steps
  //--------------------------------------------------------------------------

  // Returns an array of values representing 'steps' given the current settings
  // With 'steps' configured, handles will only snap to values contained within this array
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

  private _toStep(index: number, direction: number): void {
    const { values, viewModel } = this;
    const currentValue = values[index];
    const stepValues = this._getStepValues();
    const stepValueIndex = stepValues.indexOf(currentValue);
    let newValue: number = null;

    // Determine if an anchor exists on a step
    // If not, it could be a decimal or result of user-input
    // In this case, snap to the nearest step and increment based on direction
    // This will cause the slider to 'skip' a step
    // Alternatively, we could adjust the position of the anchor to snap to always snap
    // ... to the closest step, regardless of direction
    if (stepValueIndex > -1) {
      const stepValue = stepValues[stepValueIndex + direction];
      const stepPosition = this._positionFromValue(stepValue);

      newValue = this._getStepValueForAnchorAtPosition(index, stepPosition);
    } else {
      const stepIndex = this._getIndexOfNearestStepValue(currentValue);
      newValue = stepValues[stepIndex + direction];
    }

    viewModel.setValue(index, newValue);
  }

  // Returns the 'index' of the nearest step to the provided value
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
    const value = this._valueFromPosition(position);
    const index = this._getIndexOfNearestStepValue(value);
    const stepValues = this._getStepValues();

    return this._positionFromValue(stepValues[index]);
  }

  //--------------------------------------------------------------------------
  //  Ticks
  //--------------------------------------------------------------------------

  // Returns the number of ticks to be displayed for a given configuration
  // Property 'value' is derived from user settings
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

  // Returns positions for ticks at the specified values
  // -- Ticks are directly tied to slider values
  private _calculateTickPositions(values: number[]): number[] {
    return values.map((value) => this._positionFromValue(value));
  }

  // Returns positions for equidistant ticks
  // -- Ticks have equal spacing between them, spread along the range of the slider
  private _calculateEquidistantTickPositions(count: number): number[] {
    const { _trackWidth, _trackHeight } = this;
    const trackMax = this._isHorizontalLayout() ? _trackWidth : _trackHeight;
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

  // #22912 - getBoundingClientRect() can cause an exception in IE
  private _getDimensions(element: HTMLElement | Element): ClientRect | DOMRect {
    try {
      return element.getBoundingClientRect();
    } catch (e) {
      if (typeof e === "object" && e !== null) {
        return { top: 0, bottom: 0, left: 0, width: 0, height: 0, right: 0 };
      }

      throw e;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  private _emitTrackClickEvent(params: Pick<TrackClickEvent, "value">): void {
    this.emit("track-click", { ...params, type: "track-click" });
  }

  private _emitTickClickEvent(
    params: Pick<TickClickEvent, "value" | "configIndex" | "groupIndex">
  ): void {
    this.emit("tick-click", { ...params, type: "tick-click" });
  }

  private _emitMaxChangeEvent(params: Pick<ValueChangeEvent, "oldValue" | "value">): void {
    this.emit("max-change", { ...params, type: "max-change" });
  }

  private _emitMinChangeEvent(params: Pick<ValueChangeEvent, "oldValue" | "value">): void {
    this.emit("min-change", { ...params, type: "min-change" });
  }

  private _emitThumbChangeEvent(
    params: Pick<ThumbChangeEvent, "index" | "oldValue" | "value">
  ): void {
    this.emit("thumb-change", { ...params, type: "thumb-change" });
  }

  private _emitThumbClickEvent(params: Pick<ThumbClickEvent, "index" | "value">): void {
    this.emit("thumb-click", { ...params, type: "thumb-click" });
  }

  private _emitThumbDragEvent(params: Pick<ThumbDragEvent, "index" | "state" | "value">): void {
    this.emit("thumb-drag", { ...params, type: "thumb-drag" });
  }

  private _emitSegmentClickEvent(
    params: Pick<SegmentClickEvent, "index" | "thumbIndices" | "value">
  ): void {
    this.emit("segment-click", { ...params, type: "segment-click" });
  }

  private _emitSegmentDragEvent(
    params: Pick<SegmentDragEvent, "index" | "state" | "thumbIndices">
  ): void {
    this.emit("segment-drag", { ...params, type: "segment-drag" });
  }

  private _emitRangeLabelClickEvent(params: Pick<RangeLabelClickEvent, "type" | "value">): void {
    this.emit(params.type, { ...params });
  }
}

export default Slider;
