/**
 * The daylight widget can be used to manipulate the time and date and
 * to toggle shadows in a {@link module:esri/views/SceneView}. When changing the time and date,
 * the position of the sun and the stars gets updated accordingly, changing the lighting and the
 * shadows in the scene. This widget modifies the `date` and `directShadowsEnabled` properties of
 * {@link module:esri/views/SceneView#environment SceneView.environment.lighting}.
 *
 * [![daylight-default](../../assets/img/apiref/widgets/daylight/daylight-default.png)](../sample-code/widgets-daylight/index.html)
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
 * ![daylight-seasons](../../assets/img/apiref/widgets/daylight/daylight-seasons.png)
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
 * ![daylight-animation](../../assets/img/apiref/widgets/daylight/daylight-animation.gif)
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
 * ![daylight-no-elements](../../assets/img/apiref/widgets/daylight/daylight-no-elements.png)
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

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign"/>
/// <amd-dependency path="esri/core/tsSupport/generatorHelper" name="__generator"/>
/// <amd-dependency path="esri/core/tsSupport/awaiterHelper" name="__awaiter"/>

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Daylight/nls/Daylight";

// esri.core
import { findIndex } from "esri/core/arrayUtils";
import Logger = require("esri/core/Logger");
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { subclass, declared, property, aliasOf, cast } from "esri/core/accessorSupport/decorators";

// esri.intl
import { loadMoment } from "esri/intl/moment";

// esri.views
import SceneView = require("esri/views/SceneView");

// esri.widgets
import { DateOrSeason, Season } from "esri/widgets/interfaces";
import Widget = require("esri/widgets/Widget");

// esri.widgets.Daylight
import * as dayUtils from "esri/widgets/Daylight/daylightUtils";
import DaylightViewModel = require("esri/widgets/Daylight/DaylightViewModel");

// esri.widgets.Daylight.support
import SliderWithDropdown = require("esri/widgets/Daylight/support/SliderWithDropdown");

// esri.widgets.Slider
import { ThumbChangeEvent, ThumbDragEvent } from "esri/widgets/Slider/interfaces";

// esri.widgets.support
import DatePicker = require("esri/widgets/support/DatePicker");
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, renderable } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-daylight",
  button: "esri-button",
  checkbox: "esri-daylight__checkbox",
  checked: "esri-icon-checkbox-checked",
  container: "esri-daylight__container",
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

// Hemispheres have opposite seasons
const enum Hemisphere {
  north,
  south
}
const DEFAULT_HEMISPHERE: Hemisphere = Hemisphere.north;

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

const GMTOffsets = dayUtils.getGMTOffsets();

const logger = Logger.getLogger("esri.widgets.Daylight");

const momentPromise = loadMoment();

const DEFAULT_DATE_OR_SEASON: DateOrSeason = "date";

const seasons: Season[] = ["spring", "summer", "fall", "winter"];

@subclass("esri.widgets.Daylight")
class Daylight extends declared(Widget) {
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
  constructor(params?: any) {
    super(params);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private readonly _timeSlider: SliderWithDropdown<dayUtils.GMTOffset> = new SliderWithDropdown({
    labelFormatFunction: dayUtils.formatSliderLabel,
    inputFormatFunction: dayUtils.formatSliderLabel,
    container: "sliderDiv",
    min: 0, // Midnight
    max: 23 * 60 + 59, // Just before the next midnight,
    steps: 5,
    values: [0], // Represents the time of day expressed in minutes
    labelInputsEnabled: false,
    visibleElements: {
      labels: true
    },
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
    items: GMTOffsets,
    currentIndex: findIndex(GMTOffsets, (offset) => offset.abbr === 0),
    buttonTooltip: i18n.chooseTimezone
  });

  private readonly _datePicker: DatePicker = new DatePicker({ commitOnMonthChange: true });

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

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
  @property({
    type: DaylightViewModel
  })
  @renderable([
    "viewModel.directShadowsEnabled",
    "viewModel.timeSliderPosition",
    "viewModel.localDate",
    "viewModel.utcOffset"
  ])
  viewModel: DaylightViewModel = new DaylightViewModel();

  //----------------------------------
  //  playSpeedMultiplier
  //----------------------------------

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

  //----------------------------------
  //  visibleElements
  //----------------------------------

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
  @renderable()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //----------------------------------
  //  dateOrSeason
  //----------------------------------

  /**
   * Controls whether the widget displays a date or a season picker. When the date picker
   * is set, the user selects the date from a calendar. The season picker allows the user
   * to choose a season from a drop-down list. Each season uses a fixed date corresponding to
   * the Northern equinoxes and solstices.
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
  @renderable()
  dateOrSeason: DateOrSeason = DEFAULT_DATE_OR_SEASON;

  @property()
  @renderable()
  private _currentHemisphere = DEFAULT_HEMISPHERE;

  @property({ aliasOf: "viewModel.currentSeason" })
  @renderable()
  private _currentSeason: string;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  postInitialize(): void {
    const isSupported = this.viewModel.isSupported;
    if (!isSupported) {
      return;
    }

    // Enforce season date if created with season option
    if (this.dateOrSeason === "season") {
      watchUtils.when(this.viewModel, "view", () => {
        this.viewModel.enforceSeasonDate();
      });
    }

    this.own(
      // Set time from slider position
      this._timeSlider.on(
        ["thumb-change", "thumb-drag"],
        (event: ThumbChangeEvent | ThumbDragEvent) => {
          this._stopPlay();
          this.viewModel.timeSliderPosition = event.value;
        }
      ),
      // Set timezone from slider dropdown
      this._timeSlider.watch("currentItem", (offset: dayUtils.GMTOffset) => {
        this.viewModel.utcOffset = offset.abbr;
      }),
      // show timezone dropdown
      this._timeSlider.watch("open", () => this._stopPlay()),
      // Set slider position from view time
      this.viewModel.watch("timeSliderPosition", (value: number) => {
        this._timeSlider.viewModel.setValue(0, value);
      }),
      // Set view date from date picker date
      this._datePicker.watch("value", (date) => {
        this.viewModel.dayPlaying = false;
        this.viewModel.localDate = date.toDate();
      }),
      // Set date picker date from view date
      this.viewModel.watch("localDate", async (value) => {
        // DatePicker doesn't perform equality checks before assignment
        if (this._datePicker.value.valueOf() !== value.getTime()) {
          const moment = await momentPromise;
          this._datePicker.set("value", moment(value));
        }
      }),
      // Set timezone from view camera tracking
      this.viewModel.watch("utcOffset", (newOffsetAbbr) => {
        const currentOffset = this._timeSlider.currentItem;
        if (!currentOffset || currentOffset.abbr !== newOffsetAbbr) {
          const offsets = GMTOffsets;
          const index = findIndex(offsets, (offset) => offset.abbr === newOffsetAbbr);
          if (index >= 0) {
            this._timeSlider.currentIndex = index;
          }
        }
      }),
      // Change hemisphere when appropriate
      this.viewModel.watch("view.camera.position.latitude", (value: number) => {
        this._currentHemisphere = value >= 0 ? Hemisphere.north : Hemisphere.south;
      })
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
        <h3 class={CSS.header}>{i18n.title}</h3>
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
          <p>{i18n.unsupported}</p>
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

    this._timeSlider.showDropDown = this.visibleElements.timezone;

    return (
      <div
        class={this.classes(CSS.container, dynamicShadowStateClasses, dynamicDateStateClasses)}
        key="daylight-time-options"
      >
        {this._timeSlider.render()}
        {this.visibleElements.playButtons ? (
          <button
            bind={this}
            onclick={this._playDay}
            aria-label={i18n.playDay}
            title={i18n.playDay}
            role="button"
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
      <div class={CSS.container} key="daylight-date-options">
        {this._datePicker.render()}
        {this.visibleElements.playButtons ? (
          <button
            bind={this}
            aria-label={i18n.playYear}
            title={i18n.playYear}
            onclick={this._playYear}
            role="button"
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
          bind={this}
          name={shadowId}
          class={this.classes(CSS.button, CSS.checkbox, dynamicShadowsClasses)}
          onclick={this._toggleDirectShadows}
          aria-label={i18n.directShadow}
          title={i18n.directShadow}
        />
        <label
          bind={this}
          for={shadowId}
          onclick={this._toggleDirectShadows}
          class={this.classes(CSS.label, CSS.interactive)}
          aria-label={i18n.directShadow}
          title={i18n.directShadow}
        >
          {i18n.directShadow}
        </label>
      </div>
    );
  }

  protected renderSeasonOptions(): VNode {
    return (
      <select
        bind={this}
        onchange={this._changeSeason}
        class={this.classes(CSS.select, CSS.seasonPicker)}
        key={`daylight-season-${this._currentHemisphere}`}
        value={this._currentSeason}
        aria-label={i18n.season}
      >
        {seasons.map((season, idx, arr) => (
          <option value={season}>
            {
              // Swap season labels in southern hemisphere
              i18n[
                this._currentHemisphere === Hemisphere.north ? season : arr[(idx + 2) % arr.length]
              ]
            }
          </option>
        ))}
      </select>
    );
  }

  private _toggleDirectShadows(): void {
    this._stopPlay();
    this.viewModel.directShadowsEnabled = !this.viewModel.directShadowsEnabled;
  }

  private _playDay(): void {
    this.viewModel.yearPlaying = false;
    this.viewModel.dayPlaying = !this.viewModel.dayPlaying;
  }

  private _playYear(): void {
    this.viewModel.dayPlaying = false;
    this.viewModel.yearPlaying = !this.viewModel.yearPlaying;
  }

  private _stopPlay(): void {
    this.viewModel.yearPlaying = this.viewModel.dayPlaying = false;
  }

  private _changeSeason(event: Event): void {
    this._stopPlay();
    this.viewModel.changeSeason(event);
  }

  private _onPrimaryTickCreated(
    value: number,
    tickElement: HTMLElement,
    labelElement: HTMLElement
  ): void {
    tickElement.className +=
      " esri-interactive esri-widget__anchor " + CSS.tick + " " + CSS.labelledTick;
    labelElement.className += " esri-interactive esri-widget__anchor";
    const gotToTime = () => {
      this.viewModel.timeSliderPosition = value;
      this._stopPlay();
    };
    tickElement.onclick = labelElement.onclick = gotToTime;

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
    const gotToTime = () => {
      this._stopPlay();
      this.viewModel.timeSliderPosition = value;
    };
    tickElement.onclick = gotToTime;
  }
}

export = Daylight;
