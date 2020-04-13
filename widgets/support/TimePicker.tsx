/**
 * The `TimePicker` class provides functionality to easily choose an input date.
 * This helper widget is utilized by the {@link module:esri/widgets/Directions} widget.
 *
 * @module esri/widgets/support/TimePicker
 * @since 4.15
 *
 * @see [TimePicker.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/support/TimePicker.tsx)
 * @see [TimePicker.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_TimePicker.scss)
 * @see module:esri/widgets/support/DatePicker
 */

/// <amd-dependency path="esri/../core/tsSupport/decorateHelper" name="__decorate"/>
/// <amd-dependency path="esri/../core/tsSupport/declareExtendsHelper" name="__extends"/>

// Intl.DateTimeFormatOptions
import DateTimeFormatOptions = Intl.DateTimeFormatOptions;

// dojo
import * as i18n from "dojo/i18n!esri/widgets/nls/TimePicker";

// esri
import { formatDate } from "esri/../intl";
import moment = require("esri/../moment");

// esri.core
import { eventKey } from "esri/../core/events";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.widgets
import Widget = require("esri/Widget");

// esri.widgets.support
import { VNode } from "esri/widgets/interfaces";
import TimePickerViewModel = require("esri/widgets/TimePickerViewModel");
import { renderable, tsx } from "esri/widgets/widget";

type Moment = moment.Moment;

type TimeEditPart = "hours" | "minutes" | "meridiem";

const CSS = {
  base: "esri-time-picker esri-widget",
  timePicker: "esri-time-picker__date-picker",
  timePickerInput: "esri-time-picker__input",

  // common
  input: "esri-input",
  button: "esri-widget--button"
};

const dateFormatOptions: DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric"
};

const TIME_PICKER_FORMAT = "LT";

const TIME_PICKER_NAVIGATION_KEYS = ["ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "Tab"];

/**
 * Helper to determine if a moment uses meridiem or not
 * @private
 * @returns {boolean}
 */
function isMeridiem(time: Moment): boolean {
  return formatDate(time.valueOf(), dateFormatOptions).indexOf(" ") > -1; // "<time> <meridiem>" or "<time>"
}

@subclass("esri.widgets.support.TimePicker")
class TimePicker extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/support/TimePicker
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var TimePicker = new TimePicker({
   *   container: "timePicker", // DOM element for widget
   *   value: "20130208T0809" // This will display time as 8:09 AM
   * });
   */
  constructor(params?: any) {
    super(params);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activePart: TimeEditPart;

  private _activeTime: Moment = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  value
  //----------------------------------

  /**
   * The input value for the widget.
   *
   * @name value
   * @instance
   * @type {*}
   */
  @aliasOf("viewModel.value")
  value: Moment = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/support/TimePickerViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/support/TimePickerViewModel}
   * @autocast
   */
  @property({
    type: TimePickerViewModel
  })
  @renderable("viewModel.value")
  viewModel = new TimePickerViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const time = this._activeTime || this.viewModel.value;

    return (
      <div class={CSS.base}>
        <input
          afterUpdate={this._handleInputUpdate}
          aria-label={i18n.inputTitle}
          bind={this}
          class={this.classes(CSS.timePickerInput, CSS.input)}
          onblur={this._handleInputBlur}
          onfocus={this._handleInputFocus}
          onkeydown={this._handleInputKeydown}
          onclick={this._handleInputClick}
          onpaste={this._handleInputPaste}
          onwheel={this._handleInputWheel}
          value={formatDate(time.valueOf(), dateFormatOptions)}
        />
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handleInputBlur(): void {
    if (this._activeTime.isValid()) {
      this.viewModel.value = this._activeTime;
    }

    this._activeTime = null;
    this._activePart = null;
  }

  private _handleInputUpdate(input: HTMLInputElement): void {
    this._selectPart(input, this._activePart);
  }

  private _selectPart(input: HTMLInputElement, name: TimeEditPart): void {
    const time = this._activeTime;

    if (!time) {
      return;
    }

    const formattedTime = formatDate(time.valueOf(), dateFormatOptions);

    const hourStart = 0;
    const hourEnd = formattedTime.indexOf(":");

    if (name === "hours") {
      input.setSelectionRange(hourStart, hourEnd);
      return;
    }

    const minutesStart = hourEnd + 1; // skip ':' delimiter
    const minutesEnd = minutesStart + 2; // skip 2 chars for minutes

    if (name === "minutes") {
      input.setSelectionRange(minutesStart, minutesEnd);
      return;
    }

    const meridiemStart = minutesEnd + 1; // skip ' ' delimiter
    const meridiemEnd = formattedTime.length;

    if (name === "meridiem") {
      input.setSelectionRange(meridiemStart, meridiemEnd);
      return;
    }
  }

  private _handleInputFocus(event: FocusEvent): void {
    this._activePart = "hours";
    this._activeTime = this.viewModel.value.clone().startOf("minute");

    this._selectPart(event.target as HTMLInputElement, "hours");
  }

  private _caretIndexToPartName(index: number): TimeEditPart {
    const time = this._activeTime.format(TIME_PICKER_FORMAT);
    const hourEndIndex = time.indexOf(":");
    const meridiemStartIndex = time.indexOf(" ");

    return index <= hourEndIndex
      ? "hours"
      : index > hourEndIndex && index <= meridiemStartIndex
      ? "minutes"
      : "meridiem";
  }

  private _handleInputKeydown(event: KeyboardEvent): void {
    const { ctrlKey, metaKey, shiftKey } = event;
    const key = eventKey(event);
    const time = this._activeTime;
    const activePart = this._activePart;
    const isDigit = /\d/.test(key);
    const isMeridiemKey = /^a|p$/i.test(key);
    const hasKeyboardShortcutModifier = metaKey || ctrlKey;

    const supportedInput =
      TIME_PICKER_NAVIGATION_KEYS.indexOf(key) > -1 ||
      isDigit ||
      (activePart === "meridiem" && isMeridiemKey && !hasKeyboardShortcutModifier);

    if (!supportedInput) {
      if (!hasKeyboardShortcutModifier) {
        // halt modifying text via unsupported keys
        event.preventDefault();
        event.stopImmediatePropagation();
      }

      return;
    }

    if (key === "ArrowLeft") {
      this._activePart = this._prevPart();
    } else if (key === "ArrowRight") {
      this._activePart = this._nextPart();
    } else if (key === "Tab") {
      const part = shiftKey ? this._prevPart() : this._nextPart();

      if (part === this._activePart) {
        return;
      }

      this._activePart = part;
    } else if (key === "ArrowUp") {
      this._shift("up", time, activePart);
    } else if (key === "ArrowDown") {
      this._shift("down", time, activePart);
    } else if (isDigit) {
      this._setTime(time, activePart, Number(key));
    } else if (isMeridiemKey) {
      const lowercase = key.toLowerCase();
      const hour = time.hour();
      const changed = (lowercase === "a" && hour >= 12) || (lowercase === "p" && hour < 12);

      if (changed) {
        // both `up` or `down` work for updating meridiem
        this._shift("up", time, activePart);
      }
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  private _handleInputClick(event: MouseEvent): void {
    const input = event.target as HTMLInputElement;
    this._activePart = null;
    this.renderNow();
    this._activePart = this._caretIndexToPartName(input.selectionStart);
  }

  private _getOrderedParts(): TimeEditPart[] {
    return isMeridiem(this._activeTime) ? ["hours", "minutes", "meridiem"] : ["hours", "minutes"];
  }

  private _prevPart(): TimeEditPart {
    const partsInOrder = this._getOrderedParts();
    const currPartIndex = partsInOrder.indexOf(this._activePart) - 1;
    const prevPartIndex = Math.max(currPartIndex, 0);

    return partsInOrder[prevPartIndex];
  }

  private _nextPart(): TimeEditPart {
    const partsInOrder = this._getOrderedParts();
    const currPartIndex = partsInOrder.indexOf(this._activePart) + 1;
    const nextPartIndex = Math.min(currPartIndex, partsInOrder.length - 1);

    return partsInOrder[nextPartIndex];
  }

  private _setTime(time: Moment, activePart: TimeEditPart, duration: number): void {
    if (activePart === "hours") {
      const hourUpperLimit = isMeridiem(time) ? 12 : 24;
      const hours = `${time.hour() % hourUpperLimit}`;

      const inputHour = duration;
      const joinedInputHour = Number(`${hours}${duration}`);

      if (hours.length === 2 || joinedInputHour > hourUpperLimit) {
        time.hour(inputHour);
      } else if (joinedInputHour <= hourUpperLimit) {
        time.hour(joinedInputHour);
      }
    } else if (activePart === "minutes") {
      const minuteUpperLimit = 59;
      const minutes = `${time.minute()}`;

      const inputMinutes = duration;
      const joinedInputMinutes = Number(`${minutes}${duration}`);

      if (minutes.length === 2 || joinedInputMinutes > minuteUpperLimit) {
        time.minute(inputMinutes);
      } else if (joinedInputMinutes < minuteUpperLimit) {
        time.minute(joinedInputMinutes);
      }
    }
  }

  private _handleInputPaste(event: ClipboardEvent): void {
    const content = event.clipboardData.getData("text/plain");
    const parsed = moment(content);

    if (parsed.isValid()) {
      this._activeTime = parsed;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  private _handleInputWheel(event: WheelEvent): void {
    const direction = event.deltaY < 0 ? "up" : "down";

    this._shift(direction, this._activeTime, this._activePart);
  }

  private _shift(direction: "up" | "down", time: Moment, part: TimeEditPart): void {
    if (!direction || !time || !part) {
      return;
    }

    const operation = direction === "up" ? "add" : "subtract";
    const duration = part === "meridiem" ? 12 : 1;
    const unit = part === "hours" ? "hour" : part === "minutes" ? "minute" : "hours";

    time[operation](duration, unit);
  }
}

export = TimePicker;
