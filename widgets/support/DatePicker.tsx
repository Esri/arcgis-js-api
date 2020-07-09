/**
 * The `DatePicker` class provides functionality to easily choose an input date.
 * This helper widget is utilized by the {@link module:esri/widgets/Directions} widget.
 *
 * @module esri/widgets/support/DatePicker
 * @since 4.15
 *
 * @see [DatePicker.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/support/DatePicker.tsx)
 * @see [DatePicker.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_DatePicker.scss)
 * @see module:esri/widgets/support/TimePicker
 */

// esri
import { formatDate } from "esri/../intl";

// esri.core
import { eventKey } from "esri/../core/events";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.intl
import { loadMoment } from "esri/../intl/moment";

// esri.widgets
import Widget = require("esri/Widget");

// esri.widgets.support
import DatePickerViewModel = require("esri/widgets/DatePickerViewModel");
import { VNode } from "esri/widgets/interfaces";
import Popover = require("esri/widgets/Popover");
import { accessibleHandler, isRTL, messageBundle, renderable, storeNode, tsx } from "esri/widgets/widget";

// esri.widgets.support.t9n
import DatePickerMessages from "esri/widgets/t9n/DatePicker";

const CSS = {
  base: "esri-date-picker",
  datePicker: "esri-date-picker__calendar",
  monthPicker: "esri-date-picker__month-picker",
  dayPicker: "esri-date-picker__day-picker",
  week: "esri-date-picker__week-item",
  nearbyMonth: "esri-date-picker__day-item--nearby-month",
  activeDay: "esri-date-picker__day-item--active",
  today: "esri-date-picker__day-item--today",
  selectedDay: "esri-date-picker__day-item--selected",
  day: "esri-date-picker__day-item",
  dayHeader: "esri-date-picker__day-item--header",
  yearPicker: "esri-date-picker__year-picker",
  selectedYear: "esri-date-picker__year-picker-item--selected",
  year: "esri-date-picker__year-picker-item",
  monthDropdown: "esri-date-picker__month-dropdown",
  date: "esri-date-picker__date",
  datePickerToggle: "esri-date-picker__calendar-toggle",

  // icons
  openIcon: "esri-icon-down-arrow",
  closeIcon: "esri-icon-up-arrow",
  previousIcon: "esri-icon-left",
  nextIcon: "esri-icon-right",

  // common
  widget: "esri-widget",
  button: "esri-widget--button",
  select: "esri-select"
};

const DATE_PICKER_FORMAT = { year: "numeric", month: "2-digit", day: "2-digit" };

const DAY_PICKER_NAVIGATION_KEYS = [
  " ",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Enter",
  "Home",
  "PageDown",
  "PageUp"
];

type Moment = typeof import("moment");
type MomentInstance = ReturnType<Moment>;

interface DayLabel {
  name: string;
  abbr: string;
}

// IE11 needs onfocusout for `relatedTarget` event property, else we can use blur
const supportsOnFocusOut = "onfocusout" in HTMLElement.prototype;

@subclass("esri.widgets.support.DatePicker")
class DatePicker extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/support/DatePicker
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var DatePicker = new DatePicker({
   *   container: "date-picker", // DOM element for widget
   *   value: "2019-12-25", // value that will initially display
   * });
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  async loadLocale(): Promise<void> {
    this._moment = await loadMoment();

    if (this._isOpen) {
      this._activeDate = this._moment(this._activeDate.toDate());
    }
  }

  destroy(): void {
    this._calendarPopover.destroy();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeDate: ReturnType<typeof import("moment")> = null;

  private _calendarNode: HTMLElement = null;

  private _calendarPopover: Popover = new Popover({
    owner: this,
    placement: "bottom-start",
    anchorElement: () => this._rootNode,
    renderContentFunction: this._renderCalendar
  });

  private _closedByUserAction = false;

  private _isOpen = false;

  private _moment: Moment;

  private _rootNode: HTMLElement = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @since 4.15
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

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
  @messageBundle("esri/widgets/support/t9n/DatePicker")
  messages: DatePickerMessages = null;

  //----------------------------------
  //  value
  //----------------------------------

  /**
   * The input value for the widget.
   * @name value
   * @instance
   * @type {Date}
   */
  @aliasOf("viewModel.value")
  value: Date = null;

  //----------------------------------
  //  commitOnMonthChange
  //----------------------------------

  /**
   * Indicates whether the date gets updated when the user changes the month in the drop-down.
   *
   * @name commitOnMonthChange
   * @instance
   * @default false
   * @type {boolean}
   */
  @property()
  commitOnMonthChange: boolean = false;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/support/DatePickerViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/support/DatePickerViewModel}
   * @autocast
   */
  @property({
    type: DatePickerViewModel
  })
  @renderable("viewModel.value")
  viewModel = new DatePickerViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const date = formatDate(this.viewModel.value, DATE_PICKER_FORMAT);
    const isOpen = this._isOpen;
    const calendarToggleClasses = {
      [CSS.openIcon]: !isOpen,
      [CSS.closeIcon]: isOpen
    };

    return (
      <div
        afterCreate={storeNode}
        bind={this}
        class={this.classes(CSS.base, CSS.widget)}
        data-node-ref="_rootNode"
      >
        <div
          afterUpdate={this._focusSelectedOrClosed}
          aria-pressed={isOpen.toString()}
          bind={this}
          class={this.classes(CSS.button, CSS.datePickerToggle)}
          onclick={this._toggle}
          onkeydown={this._toggle}
          role="button"
          tabIndex={0}
        >
          <span class={CSS.date}>{date}</span>
          <span aria-hidden="true" class={this.classes(calendarToggleClasses)} />
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _focusSelectedOrClosed(node: HTMLElement): void {
    if (this._closedByUserAction) {
      this._closedByUserAction = false;
      node.focus();
    }
  }

  private _handleDatePickerKeydown(event: KeyboardEvent): void {
    const key = eventKey(event);

    if (key === "Escape") {
      this._closedByUserAction = true;
      this._close();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  private _renderCalendar(): VNode {
    const activeDate = this._activeDate;
    const userDate = this._moment(this.viewModel.value);

    return (
      <div
        afterCreate={storeNode}
        bind={this}
        class={this.classes(CSS.datePicker, CSS.widget)}
        data-node-ref="_calendarNode"
        key="esri-date-picker__calendar"
        onkeydown={this._handleDatePickerKeydown}
      >
        {this._renderMonthPicker(activeDate)}
        {this._renderDayPicker(activeDate, userDate)}
        {this._renderYearPicker(activeDate)}
      </div>
    );
  }

  private _handleDatePickerBlurOrFocusOut(event: FocusEvent): void {
    const bubbled = event.currentTarget !== event.target;

    if (bubbled) {
      return;
    }

    const element = event.relatedTarget as HTMLElement;

    if (!this._calendarNode.contains(element) && !this._rootNode.contains(element)) {
      this._close();
    }
  }

  private _handleDatePickerBlur = supportsOnFocusOut ? null : this._handleDatePickerBlurOrFocusOut;

  private _handleDatePickerFocusOut = supportsOnFocusOut
    ? this._handleDatePickerBlurOrFocusOut
    : null;

  private _renderMonthPicker(activeDate: MomentInstance): VNode {
    const rtl = isRTL();
    const prevIconClass = rtl ? CSS.nextIcon : CSS.previousIcon;
    const nextIconClass = rtl ? CSS.previousIcon : CSS.nextIcon;

    const options = this._moment.months().map((month, index) => {
      const sameMonth = activeDate.month() === index;
      return <option selected={sameMonth}>{month}</option>;
    });

    const { messages } = this;

    return (
      <div class={CSS.monthPicker}>
        <div
          aria-label={messages.goToPreviousMonth}
          bind={this}
          class={CSS.button}
          onblur={this._handleDatePickerBlur}
          onclick={this._setPreviousMonth}
          onfocusout={this._handleDatePickerFocusOut}
          onkeydown={this._setPreviousMonth}
          role="button"
          tabIndex={0}
          title={messages.goToPreviousMonth}
        >
          <span aria-hidden="true" class={prevIconClass} />
        </div>
        <select
          aria-live="assertive"
          bind={this}
          class={this.classes(CSS.monthDropdown, CSS.select)}
          id={`${this.id}__month-picker`}
          onblur={this._handleDatePickerBlur}
          onchange={this._setMonth}
          onfocusout={this._handleDatePickerFocusOut}
          onkeydown={this._setMonth}
        >
          {options}
        </select>
        <div
          aria-label={messages.goToNextMonth}
          bind={this}
          class={CSS.button}
          onblur={this._handleDatePickerBlur}
          onclick={this._setNextMonth}
          onfocusout={this._handleDatePickerFocusOut}
          onkeydown={this._setNextMonth}
          role="button"
          tabIndex={0}
          title={messages.goToNextMonth}
        >
          <span aria-hidden="true" class={nextIconClass} />
        </div>
      </div>
    );
  }

  private _renderDayPicker(activeDate: MomentInstance, selectedDate: MomentInstance): VNode {
    const firstDayOfWeek = activeDate.clone().day(this._moment.localeData().firstDayOfWeek());
    const dayLabels = this._getWeekLabels(firstDayOfWeek);
    const activeDescendantId = this._getDayId(activeDate);

    const calendarMonth = this._renderMonth(activeDate, selectedDate);

    return (
      <div
        afterCreate={this._handleDayPickerCreate}
        aria-activedescendant={activeDescendantId}
        aria-labelledby={`${this.id}__month-picker ${this.id}__selected-year`}
        bind={this}
        class={CSS.dayPicker}
        id={`${this.id}__day-picker`}
        onblur={this._handleDatePickerBlur}
        onfocusout={this._handleDatePickerFocusOut}
        onkeydown={this._handleDayPickerKeydown}
        role="grid"
        tabIndex={0}
      >
        <div class={CSS.week} role="row">
          {dayLabels.map((label) => (
            <div
              aria-label={label.name}
              class={this.classes(CSS.day, CSS.dayHeader)}
              role="columnheader"
              title={label.name}
            >
              {label.abbr}
            </div>
          ))}
        </div>
        {calendarMonth}
      </div>
    );
  }

  private _getDayId(date: MomentInstance): string {
    return `${this.id}__${formatDate(date.valueOf(), DATE_PICKER_FORMAT)}`;
  }

  private _handleDayPickerCreate(node: HTMLElement): void {
    node.focus();
  }

  private _getWeekLabels(firstDayOfWeek: MomentInstance): DayLabel[] {
    const dayLetters: DayLabel[] = [];
    const fullDayNameFormat = { weekday: "long" };
    const abbreviatedDayNameFormat = { weekday: "narrow" };

    for (let i = 0; i < 7; i++) {
      dayLetters.push({
        name: formatDate(firstDayOfWeek.valueOf(), fullDayNameFormat),
        abbr: formatDate(firstDayOfWeek.valueOf(), abbreviatedDayNameFormat)
      });

      firstDayOfWeek.add(1, "day");
    }

    return dayLetters;
  }

  private _handleDayPickerKeydown(event: KeyboardEvent): void {
    const { ctrlKey, shiftKey } = event;
    const key = eventKey(event);
    const activeDate = this._activeDate;

    // keyboard interactions as defined in
    // https://www.w3.org/TR/2009/WD-wai-aria-practices-20090224/
    // (under Date Picker (widget))

    if (DAY_PICKER_NAVIGATION_KEYS.indexOf(key) === -1) {
      return;
    }

    if (key === "ArrowLeft") {
      activeDate.subtract(1, "day");
    } else if (key === "ArrowRight") {
      activeDate.add(1, "day");
    } else if (key === "ArrowUp") {
      activeDate.subtract(1, "week");
    } else if (key === "ArrowDown") {
      activeDate.add(1, "week");
    } else if (key === "PageUp") {
      const yearOrMonth = shiftKey ? "year" : "month";
      activeDate.subtract(1, yearOrMonth);
    } else if (key === "PageDown") {
      const yearOrMonth = shiftKey ? "year" : "month";
      activeDate.add(1, yearOrMonth);
    } else if (key === "Home") {
      const yearOrMonth = ctrlKey ? "year" : "month";
      activeDate.startOf(yearOrMonth);
    } else if (key === "End") {
      const yearOrMonth = ctrlKey ? "year" : "month";
      activeDate.endOf(yearOrMonth);
    } else if (key === "Enter" || key === " ") {
      this.viewModel.value = activeDate.toDate();
      this._closedByUserAction = true;
      this._close();
    }

    event.preventDefault();
    event.stopPropagation();
  }

  private _renderMonth(activeDate: MomentInstance, selectedDate: MomentInstance): VNode {
    const today = this._moment();
    const startOfMonth = activeDate.clone().startOf("month");
    const endOfMonth = activeDate.clone().endOf("month");

    const weekStart = startOfMonth.clone().subtract(startOfMonth.weekday(), "day");

    const weeksToDisplay = 6;
    const daysInWeek = 7;

    const currDay = weekStart;
    const weeks: VNode[] = [];

    for (let i = 0; i < weeksToDisplay; i++) {
      const week: VNode[] = [];

      for (let i = 0; i < daysInWeek; i++) {
        const weekday = currDay.date();
        const isActive = currDay.isSame(activeDate, "day");
        const isSelected = currDay.isSame(selectedDate, "day");
        const dayId = this._getDayId(currDay);

        const classes = {
          [CSS.nearbyMonth]: !currDay.isBetween(startOfMonth, endOfMonth, null, "[]"),
          [CSS.today]: currDay.isSame(today, "day"),
          [CSS.activeDay]: isActive,
          [CSS.selectedDay]: isSelected
        };

        week.push(
          <div
            aria-label={weekday.toString()}
            aria-selected={isActive.toString()}
            bind={this}
            class={this.classes(CSS.day, classes)}
            data-iso-date={currDay.toISOString()}
            id={dayId}
            onclick={this._handleSelectedDate}
            onkeydown={this._handleSelectedDate}
            role="gridcell"
          >
            {weekday}
          </div>
        );

        currDay.add(1, "day");
      }

      weeks.push(
        <div class={CSS.week} role="row">
          {week}
        </div>
      );
    }

    return weeks;
  }

  private _renderYearPicker(activeDate: MomentInstance): VNode {
    const yearFormat = { year: "numeric" };
    const date = activeDate.clone();
    const currYear = formatDate(date.valueOf(), yearFormat);
    const nextYear = formatDate(date.add(1, "year").valueOf(), yearFormat);
    const prevYear = formatDate(date.subtract(2, "year").valueOf(), yearFormat);
    const { messages } = this;

    return (
      <div class={CSS.yearPicker}>
        <div
          aria-label={messages.goToPreviousYear}
          bind={this}
          class={CSS.year}
          onblur={this._handleDatePickerBlur}
          onclick={this._setPreviousYear}
          onfocusout={this._handleDatePickerFocusOut}
          onkeydown={this._setPreviousYear}
          tabIndex={0}
          title={messages.goToPreviousYear}
        >
          {prevYear}
        </div>
        <div class={this.classes(CSS.year, CSS.selectedYear)} id={`${this.id}__selected-year`}>
          {currYear}
        </div>
        <div
          aria-label={messages.goToNextYear}
          bind={this}
          class={CSS.year}
          onblur={this._handleDatePickerBlur}
          onclick={this._setNextYear}
          onfocusout={this._handleDatePickerFocusOut}
          onkeydown={this._setNextYear}
          tabIndex={0}
          title={messages.goToNextYear}
        >
          {nextYear}
        </div>
      </div>
    );
  }

  @accessibleHandler()
  private _toggle(): void {
    if (this._isOpen) {
      this._close();
      return;
    }

    this._open(this.viewModel.value);
  }

  private _setMonth(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const month: string = select.value;
    this._activeDate.month(month);
    if (this.commitOnMonthChange) {
      this.viewModel.value = this._activeDate.toDate();
    }
  }

  private _close(): void {
    this._activeDate = null;
    this._isOpen = false;
    this._calendarPopover.open = false;
  }

  private _open(activeDate: Date): void {
    this._activeDate = this._moment(activeDate);
    this._isOpen = true;
    this._calendarPopover.open = true;
  }

  @accessibleHandler()
  private _setPreviousMonth(): void {
    this._activeDate.subtract(1, "month");
    if (this.commitOnMonthChange) {
      this.viewModel.value = this._activeDate.toDate();
    }
  }

  @accessibleHandler()
  private _setNextMonth(): void {
    this._activeDate.add(1, "month");
    if (this.commitOnMonthChange) {
      this.viewModel.value = this._activeDate.toDate();
    }
  }

  @accessibleHandler()
  private _setPreviousYear(): void {
    this._activeDate.subtract(1, "year");
  }

  @accessibleHandler()
  private _setNextYear(): void {
    this._activeDate.add(1, "year");
  }

  @accessibleHandler()
  private _handleSelectedDate(event: Event): void {
    const div = event.target as HTMLDivElement;
    this.viewModel.value = this._moment(div.getAttribute("data-iso-date")).toDate();
    this._closedByUserAction = true;
    this._close();
  }
}

export = DatePicker;
