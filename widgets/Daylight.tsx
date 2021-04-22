/**
 * The daylight widget can be used to manipulate the time and date and
 * to toggle shadows in a {@link module:esri/views/SceneView}. When changing the time and date,
 * the position of the sun and the stars gets updated accordingly, changing the lighting and the
 * shadows in the scene. This widget modifies the `date` and `directShadowsEnabled` properties of
 * {@link module:esri/views/SceneView#environment SceneView.environment.lighting}.
 *
 * [![daylight-default](../assets/img/apiref/widgets/daylight/daylight-default.png)](../sample-code/widgets-daylight/index.html)
 *
 * The daytime slider has an option to select the timezone. When the user changes the timezone, a new time
 * in that timezone is calculated and displayed in the slider. The timezone selector can be disabled
 * by setting `timezone` to `false` in the [visibleElements](#visibleElements) property.
 *
 * By default a calendar is displayed where the user can select the day, month and year.
 * With the [dateOrSeason](#dateOrSeason) property, the calendar can be replaced with
 * a dropdown menu where a season can be selected:
 *
 * ```js
 * const daylight = new Daylight({
 *   view: view,
 *   dateOrSeason: "season"
 * });
 * ```
 *
 * ![daylight-seasons](../assets/img/apiref/widgets/daylight/daylight-seasons.png)
 *
 * There are two play buttons, one corresponds to the daytime slider and it animates the time as
 * it cycles through the minutes of the day. The second button corresponds to the date picker
 * and it animates the time as it cycles through the months of the year. The speed of the animation can
 * be set using the [playSpeedMultiplier](#playSpeedMultiplier) property.
 *
 * ```js
 * const daylight = new Daylight({
 *   view: view,
 *   playSpeedMultiplier: 2
 * });
 * ```
 *
 * ![daylight-animation](../assets/img/apiref/widgets/daylight/daylight-animation.gif)
 *
 * Except for the daytime slider, all the elements in the daylight widget can be hidden by using the
 * [visibleElements](#visibleElements) property:
 *
 * ```js
 * const daylight = new Daylight({
 *   view: view,
 *   visibleElements: {
 *     timezone: false,
 *     datePicker: false,
 *     playButtons: false,
 *     shadowsToggle: false
 *   }
 * });
 * ```
 *
 * With these settings, the widget looks like this:
 *
 * ![daylight-no-elements](../assets/img/apiref/widgets/daylight/daylight-no-elements.png)
 *
 * @example
 * // basic usage of the daylight widget using the default settings
 * const daylight = new Daylight({
 *   view: view
 * });
 * view.ui.add(daylight, "top-right");
 *
 * @module esri/widgets/Daylight
 * @since 4.14
 *
 * @see [Daylight.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Daylight.tsx)
 * @see [Daylight.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Daylight.scss)
 * @see [Sample - Daylight widget](../sample-code/widgets-daylight/index.html)
 * @see {@link module:esri/widgets/Daylight/DaylightViewModel}
 * @see {@link module:esri/views/SceneView#environment SceneView.environment}
 */

// esri.core
import Logger from "esri/core/Logger";
import { Maybe, isSome } from "esri/core/maybe";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { subclass, property, aliasOf, cast } from "esri/core/accessorSupport/decorators";

// esri.views
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import { DateOrSeason, Season } from "esri/widgets/interfaces";
import Widget from "esri/widgets/Widget";

// esri.widgets.Daylight
import {
  getGMTOffsets,
  GMTOffset,
  formatSliderLabel,
  ORDERED_SEASONS
} from "esri/widgets/Daylight/daylightUtils";
import DaylightViewModel from "esri/widgets/Daylight/DaylightViewModel";

// esri.widgets.Daylight.support
import SliderWithDropdown from "esri/widgets/Daylight/support/SliderWithDropdown";

// esri.widgets.Daylight.t9n
import DaylightMessages from "esri/widgets/Daylight/t9n/Daylight";

// esri.widgets.support
import DatePicker from "esri/widgets/support/DatePicker";
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, messageBundle } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-daylight",
  widgetIcon: "esri-icon-environment-settings",
  button: "esri-button",
  checkbox: "esri-daylight__checkbox",
  checked: "esri-icon-checkbox-checked",
  dayContainer: "esri-daylight__container esri-daylight__day-container",
  dateContainer: "esri-daylight__container esri-daylight__date-container",
  header: "esri-widget__heading",
  interactive: "esri-interactive",
  label: " esri-widget__anchor",
  labelledTick: "esri-daylight__container__labelled-tick",
  pause: "esri-icon-pause",
  play: "esri-icon-play",
  playPauseButton: "esri-daylight__play-pause-button",
  select: "esri-select",
  seasonPicker: "esri-daylight__season-picker",
  shadow: "esri-daylight__shadow-container",
  shadowOff: "esri-slider--shadow-off",
  shadowOn: "esri-slider--shadow-on",
  tick: "esri-daylight__container__tick",
  unchecked: "esri-icon-checkbox-unchecked",
  widget: "esri-widget",
  sliderDateOn: "esri-slider--date-on",
  sliderDateOff: "esri-slider--date-off",
  panelError: "esri-daylight__panel--error"
};

interface VisibleElements {
  playButtons: boolean;
  shadowsToggle: boolean;
  datePicker: boolean;
  timezone: boolean;
}
const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  playButtons: true,
  shadowsToggle: true,
  datePicker: true,
  timezone: true
};

const logger = Logger.getLogger("esri.widgets.Daylight");

const DEFAULT_DATE_OR_SEASON: DateOrSeason = "date";

@subclass("esri.widgets.Daylight")
class Daylight extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Daylight
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *     that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const daylightWidget = new Daylight({
   *   view: view
   * });
   *
   * view.ui.add(daylightWidget, "top-right");
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property({
    readOnly: true
  })
  get gmtOffsets(): Maybe<GMTOffset[]> {
    return this.messages ? getGMTOffsets(this.messages) : null;
  }

  /**
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @messageBundle("esri/widgets/Daylight/t9n/Daylight")
  messages: DaylightMessages;

  //------------------------
  // iconClass
  //------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property()
  iconClass = CSS.widgetIcon;

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
    aliasOf: { source: "messages.title", overridable: true }
  })
  label: string = undefined;

  /**
   * Controls the speed of the daytime and date animation.
   *
   * @name playSpeedMultiplier
   * @instance
   * @type {number}
   * @default 1.0
   * @example
   * // Plays the daylight animation at half of the default speed
   * daylightWidget.playSpeedMultiplier = 0.5;
   */
  @aliasOf("viewModel.playSpeedMultiplier")
  playSpeedMultiplier: number = 1;

  /**
   * Sets steps, or intervals, on the time slider to restrict the times
   * of the day that can be selected when dragging the thumb. All values are in
   * minutes, where `0` is midnight and `23 * 60 + 59` is just before midnight
   * the following day.
   *
   * If an array of numbers is passed to this property, the slider thumbs may
   * only be moved to the times specified in the array.
   *
   * If a single number is set, then steps are set for the entire day at an
   * interval of `timeSliderSteps` minutes. For example, if a value of `60` is
   * set here, dragging the slider will allow selecting each of 24 hours of the day.
   *
   * @name timeSliderSteps
   * @instance
   * @type {number | number[]}
   * @since 4.16
   * @default 5
   *
   * @example
   * // set steps at an interval of 60. So the
   * // slider thumb snaps at each hour of the day.
   * daylightWidget.timeSliderSteps = 60;
   *
   * @example
   * // Set steps at specific times.
   * daylightWidget.timeSliderSteps = [60, 100, 120, 160];
   */
  @aliasOf("_timeSlider.steps")
  timeSliderSteps: number | number[] = 5;

  /**
   * A reference to the {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: ISceneView = null;

  /**
   * The view model for the Daylight widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Daylight/DaylightViewModel} class.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Daylight/DaylightViewModel}
   * @autocast
   */
  @property({ type: DaylightViewModel })
  viewModel: DaylightViewModel = new DaylightViewModel();

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/Daylight~VisibleElements
   *
   * @property {boolean} [playButtons=true] When set to `false`, neither of the play buttons are displayed.
   * @property {boolean} [shadowsToggle=true] When set to `false`, the shadow toggle button is not displayed.
   * @property {boolean} [datePicker=true] When set to `false`, neither the date nor the season picker are displayed.
   * @property {boolean} [timezone=true] When set to `false`, the timezone selector is not displayed.
   */

  /**
   * This property provides the ability to display or hide the individual elements of the widget.
   * Play buttons, shadow toggle button, date picker and timezone selector can be displayed or hidden by setting their
   * corresponding properties to `true` or `false`. By default, all the elements are displayed.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Daylight~VisibleElements}
   * @autocast
   *
   * @example
   * // display all elements, except the shadow toggle button
   * daylightWidget.visibleElements.shadowsToggle = false;
   * // disable all elements
   * daylightWidget.visibleElements = {
   *   playButtons: false,
   *   shadowsToggle: false,
   *   datePicker: false,
   *   timezone: false
   * };
   */
  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  /**
   * Controls whether the widget displays a date or a season picker. When the date picker
   * is set, the user selects the date from a calendar. The season picker allows the user
   * to choose a season from a drop-down list. Each season uses a fixed date corresponding to
   * the equinoxes and solstices of 2014.
   *
   * @name dateOrSeason
   * @instance
   * @type { "season" | "date" }
   * @default "date"
   * @example
   * // set the season picker
   * daylightWidget.dateOrSeason = "season";
   */
  @property({
    cast: (value: string): DateOrSeason => {
      if (value === "season" || value === "date") {
        return value;
      }

      logger.warn(
        `"${value}" is not a valid option. Acceptable values are only "date" or "season". Defaulting to "${DEFAULT_DATE_OR_SEASON}".`
      );
      return DEFAULT_DATE_OR_SEASON;
    }
  })
  dateOrSeason: DateOrSeason = DEFAULT_DATE_OR_SEASON;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @property()
  private _timeSlider = new SliderWithDropdown<GMTOffset>({
    viewModel: this.viewModel.timeSliderViewModel,
    labelFormatFunction: formatSliderLabel,
    inputFormatFunction: formatSliderLabel,
    min: 0, // Midnight
    max: 23 * 60 + 59, // Just before the next midnight,
    steps: this.timeSliderSteps ?? 5,
    values: [0], // Represents the time of day expressed in minutes
    labelInputsEnabled: false,
    visibleElements: { labels: true },
    tickConfigs: [
      {
        mode: "position",
        values: [0, 6 * 60, 12 * 60, 18 * 60, 23 * 60 + 59], // Every 6 hours, in minutes, stopping just before 24 hours
        labelsVisible: true,
        tickCreatedFunction: this._onPrimaryTickCreated.bind(this)
      },
      {
        mode: "position",
        values: [2 * 60, 4 * 60, 8 * 60, 10 * 60, 14 * 60, 16 * 60, 20 * 60, 22 * 60], // Every 2 hours, in minutes, skipping primary
        tickCreatedFunction: this._onSecondaryTickCreated.bind(this)
      }
    ],
    items: []
  });

  @property()
  private _datePicker: DatePicker = new DatePicker({
    viewModel: this.viewModel.datePickerViewModel,
    commitOnMonthChange: true
  });

  //--------------------------------------------------------------------------
  //
  //  Internal Methods
  //
  //--------------------------------------------------------------------------

  postInitialize(): void {
    const isSupported = this.viewModel.isSupported;
    if (!isSupported) {
      return;
    }

    this.own(
      // Keep the sub-component view models up-to-date.
      watchUtils.init(this.viewModel, "datePickerViewModel", (vm) => {
        this._datePicker.viewModel = vm;
      }),
      watchUtils.init(this.viewModel, "timeSliderViewModel", (vm) => {
        this._timeSlider.viewModel = vm;
      }),

      // Keep the time slider updated.
      watchUtils.init(this, "messages", () => {
        this._timeSlider.buttonTooltip = this.messages.chooseTimezone;
      }),
      watchUtils.init(this, "visibleElements", () => {
        this._timeSlider.showDropDown = this.visibleElements.timezone;
      }),

      watchUtils.init(this, "gmtOffsets", (offsets: Maybe<GMTOffset[]>) => {
        if (isSome(offsets)) {
          this._timeSlider.items = offsets;
        }
      }),

      // Set timezone from view camera tracking
      watchUtils.init(this, ["viewModel.utcOffset", "gmtOffsets"], () => this._onUTCOffsetChange())
    );
  }

  destroy(): void {
    this._datePicker.destroy();
    this._timeSlider.destroy();
  }

  render(): VNode {
    const isSupported = this.viewModel.isSupported;

    return isSupported ? (
      <div class={this.classes(CSS.base, CSS.widget)}>
        <h3 class={CSS.header}>{this.messages.title}</h3>
        {this.renderTimeOptions()}
        {this.visibleElements.datePicker
          ? this.dateOrSeason === "date"
            ? this.renderDateOptions()
            : this.renderSeasonOptions()
          : null}
        {this.visibleElements.shadowsToggle ? this.renderShadowOptions() : null}
      </div>
    ) : (
      <div class={this.classes(CSS.base, CSS.widget)}>
        <div key="daylight__unsupported" class={CSS.panelError}>
          <p>{this.messages.unsupported}</p>
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  protected renderTimeOptions(): VNode {
    // Play/pause icon switch
    const dynamicPlayDayClasses = {
      [CSS.play]: !this.viewModel.dayPlaying,
      [CSS.pause]: this.viewModel.dayPlaying
    };
    // Shadow on slider thumb easter-egg
    const dynamicShadowStateClasses = {
      [CSS.shadowOn]: this.viewModel.directShadowsEnabled,
      [CSS.shadowOff]: !this.viewModel.directShadowsEnabled
    };

    const dynamicDateStateClasses = {
      [CSS.sliderDateOn]: this.visibleElements.datePicker,
      [CSS.sliderDateOff]: !this.visibleElements.datePicker
    };

    return (
      <div
        class={this.classes(CSS.dayContainer, dynamicShadowStateClasses, dynamicDateStateClasses)}
        key="daylight-time-options"
      >
        {this._timeSlider.render()}
        {this.visibleElements.playButtons ? (
          <button
            bind={this.viewModel}
            onclick={this.viewModel.toggleDayPlaying}
            aria-label={this.messages.playDay}
            title={this.messages.playDay}
            type="button"
            class={this.classes(CSS.button, CSS.playPauseButton, dynamicPlayDayClasses)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M6 3.745L11.255 8 6 12.255z" />
            </svg>
          </button>
        ) : null}
      </div>
    );
  }

  protected renderDateOptions(): VNode {
    // Play/pause icon switch
    const dynamicPlayYearClasses = {
      [CSS.play]: !this.viewModel.yearPlaying,
      [CSS.pause]: this.viewModel.yearPlaying
    };

    return (
      <div class={CSS.dateContainer} key="daylight-date-options">
        {this._datePicker.render()}
        {this.visibleElements.playButtons ? (
          <button
            bind={this.viewModel}
            onclick={this.viewModel.toggleYearPlaying}
            aria-label={this.messages.playYear}
            title={this.messages.playYear}
            type="button"
            class={this.classes(CSS.button, CSS.playPauseButton, dynamicPlayYearClasses)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M6 3.745L11.255 8 6 12.255z" />
            </svg>
          </button>
        ) : null}
      </div>
    );
  }

  protected renderShadowOptions(): VNode {
    const shadowId = `${this.id}__shadowButton`;

    // On/off icon switch
    const dynamicShadowsClasses = {
      [CSS.checked]: this.viewModel.directShadowsEnabled,
      [CSS.unchecked]: !this.viewModel.directShadowsEnabled
    };

    return (
      <div class={CSS.shadow} key="daylight-shadow-options">
        <button
          bind={this.viewModel}
          onclick={this.viewModel.toggleDirectShadows}
          name={shadowId}
          class={this.classes(CSS.button, CSS.checkbox, dynamicShadowsClasses)}
          aria-label={this.messages.directShadow}
          title={this.messages.directShadow}
          type="button"
        />
        <label
          bind={this.viewModel}
          onclick={this.viewModel.toggleDirectShadows}
          for={shadowId}
          class={this.classes(CSS.label, CSS.interactive)}
          aria-label={this.messages.directShadow}
          title={this.messages.directShadow}
        >
          {this.messages.directShadow}
        </label>
      </div>
    );
  }

  protected renderSeasonOptions(): VNode {
    return (
      <select
        bind={this}
        onchange={this._onSeasonChange}
        class={this.classes(CSS.select, CSS.seasonPicker)}
        value={this.viewModel.currentSeason}
        aria-label={this.messages.season}
      >
        {ORDERED_SEASONS.map((season) => (
          <option value={season}>{this.messages[season]}</option>
        ))}
      </select>
    );
  }

  private _onSeasonChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.viewModel.currentSeason = select.value as Season;
  }

  private _onUTCOffsetChange(): void {
    const currentViewUtcOffset = this.viewModel.utcOffset;
    const timeSliderUtcOffset = this._timeSlider.currentItem?.abbr;
    const allOffsets = this.gmtOffsets;
    if (!isSome(allOffsets) || timeSliderUtcOffset === currentViewUtcOffset) {
      return;
    }

    // Update the time slider based on the view's UTC offset.
    const index = allOffsets.findIndex(({ abbr }) => abbr === currentViewUtcOffset);
    if (index > -1) {
      this._timeSlider.currentIndex = index;
    }
  }

  private _onPrimaryTickCreated(
    value: number,
    tickElement: HTMLElement,
    labelElement: HTMLElement
  ): void {
    tickElement.className +=
      " esri-interactive esri-widget__anchor " + CSS.tick + " " + CSS.labelledTick;
    labelElement.className += " esri-interactive esri-widget__anchor";

    const goToTime = () => {
      this.viewModel.timeSliderPosition = value;
    };

    tickElement.onclick = goToTime;
    labelElement.onclick = goToTime;

    const timeString = labelElement.innerText;
    if (timeString.indexOf(" ") !== -1) {
      labelElement.innerHTML = timeString.replace(
        /(.*) (.*)/,
        '$1<br><div class="esri-label__ampm">$2</div>'
      );
    }
  }

  private _onSecondaryTickCreated(value: number, tickElement: HTMLElement): void {
    tickElement.className += " esri-interactive esri-widget__anchor " + CSS.tick;
    tickElement.onclick = () => {
      this.viewModel.timeSliderPosition = value;
    };
  }
}

export default Daylight;
