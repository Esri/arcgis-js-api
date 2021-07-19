/**
 * The Shadow accumulation widget displays the cumulative shadows of 3D features in a
 * {@link module:esri/views/SceneView}. This type of analysis is helpful in urban development,
 * where new projects have to satisfy certainshadow duration constraints.
 *
 * The widget calculates the cumulative shadows for a time range during a single day. The user can
 * configure the time range and select a calendar date. This time range and calendar date are only used
 * for the shadow analysis and are not connected to the lighting in the scene.
 * To control the lighting in the scene, the {@link module:esri/widgets/Daylight} widget can be used.
 * Changing the timezone in the widget updates the visualization by interpreting the time range as being
 * in that timezone. This behavior is different than for the {@link module:esri/widgets/Daylight} widget
 * where selecting a timezone updates the scene date and time according to the camera position.
 *
 * The widget provides three visualization modes.
 *
 * In the **threshold** mode, only the areas that receive
 * shadows for more than a certain amount of time are displayed. In the image below, on May 1, 2021 the red areas receive
 * shadow for more than 4 hours within the time interval of 10AM to 4PM.
 *
 * [![threshold mode](../assets/img/apiref/widgets/shadow-accumulation/shadow-accumulation-threshold.png)](../sample-code/widgets-shadow-accumulation/)
 *
 * **Total shadow duration** mode displays the duration of the cumulative shadow using opacity: areas that don't
 * receive any shadow are fully transparent and areas that receive a maximum amount of shadow have a default opacity
 * of 0.7. The values in between are interpolated. Hovering over the view will display a tooltip showing the
 * amount of time that location is in shadow, rounded to 15 minute intervals. In this mode, the visualization
 * can display shadow accumulation in a continuous way or in 1 hour intervals.
 *
 * [![duration mode](../assets/img/apiref/widgets/shadow-accumulation/shadow-accumulation-duration.png)](../sample-code/widgets-shadow-accumulation/)
 *
 * **Discrete shadows** is a third visualization mode which displays individual shadows at a given time interval.
 * For example, setting the time range to 10AM-11AM and the visualization time interval to 30 minutes will display
 * shadows for 10AM, 10:30AM and 11:00AM.
 *
 * [![discrete mode](../assets/img/apiref/widgets/shadow-accumulation/shadow-accumulation-discrete.png)](../sample-code/widgets-shadow-accumulation/)
 *
 * The defaults for the time range and visualization settings can be changed using the
 * {@link module:esri/widgets/ShadowAccumulation/ShadowAccumulationViewModel}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * Terrain does not cast shadows and it is therefore not taken into account in this analysis.
 *
 * * The widget does not take into account the daylight savings.
 * Use the timezone dropdown to adjust the offset from the Coordinated Universal Time (UTC) and account for the daylight saving time.
 *
 * * The timezone is automatically detected by the widget based on the camera location. In some situations this might not be accurate.
 * In case of an inaccurate timezone, users can set it manually using the timezone dropdown.
 * :::
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets to the view's user interface via the
 * {@link module:esri/views/View#ui ui} property on the view. See the example below.
 *
 * @example
 * const shadowAccumulation = new ShadowAccumulation({
 *   view: view
 * });
 * // Adds the shadow accumulation widget in
 * // the top right corner of the view
 * view.ui.add(shadowAccumulation, "top-right");
 *
 * @module esri/widgets/ShadowAccumulation
 * @since 4.20
 * @beta
 *
 * @see [ShadowAccumulation.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/ShadowAccumulation.tsx)
 * @see [ShadowAccumulation.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ShadowAccumulation.scss)
 * @see module:esri/widgets/ShadowAccumulation/ShadowAccumulationViewModel
 * @see {@link module:esri/views/SceneView#environment SceneView.environment}
 * @see module:esri/views/ui/DefaultUI
 * @see [Sample - Shadow accumulation](../sample-code/widgets-shadow-accumulation/)
 */

// @esri.calcite-components.dist.custom-elements.bundles
import "@esri/calcite-components/dist/custom-elements/bundles/select";

// esri
import { formatDate } from "esri/intl";

// esri.core
import Handles from "esri/core/Handles";
import { applySome, destroyMaybe, isNone, isSome, Maybe } from "esri/core/maybe";
import { convertTime } from "esri/core/timeUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";
import { Castable } from "esri/core/accessorSupport/ensureType";
import { reactionInit } from "esri/core/accessorSupport/trackingUtils";

// esri.intl
import { substitute } from "esri/intl/substitute";

// esri.views
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import Slider from "esri/widgets/Slider";
import Widget from "esri/widgets/Widget";

// esri.widgets.ShadowAccumulation
import { CSS } from "esri/widgets/ShadowAccumulation/css";
import { ShadowAccumulationState } from "esri/widgets/ShadowAccumulation/ShadowAccumulationState";
import ShadowAccumulationViewModel from "esri/widgets/ShadowAccumulation/ShadowAccumulationViewModel";
import ShadowAccumulationVisibleElements from "esri/widgets/ShadowAccumulation/ShadowAccumulationVisibleElements";
import { ShadowVisualizationType } from "esri/widgets/ShadowAccumulation/ShadowVisualizationType";

// esri.widgets.ShadowAccumulation.components
import { DiscreteConfigurator } from "esri/widgets/ShadowAccumulation/components/DiscreteConfigurator";
import { DurationConfigurator } from "esri/widgets/ShadowAccumulation/components/DurationConfigurator";
import { ShadowTooltip } from "esri/widgets/ShadowAccumulation/components/ShadowTooltip";
import { ThresholdConfigurator } from "esri/widgets/ShadowAccumulation/components/ThresholdConfigurator";
import { TimezonePicker } from "esri/widgets/ShadowAccumulation/components/TimezonePicker";

// esri.widgets.ShadowAccumulation.t9n
import ShadowAccumulationMessages from "esri/widgets/ShadowAccumulation/t9n/ShadowAccumulation";

// esri.widgets.support
import DatePicker from "esri/widgets/support/DatePicker";
import { Heading, HeadingLevel } from "esri/widgets/support/Heading";
import { VNode } from "esri/widgets/support/interfaces";
import { formatSliderLabel } from "esri/widgets/support/timeWidgetUtils";
import { messageBundle, tsx, WidgetProperties } from "esri/widgets/support/widget";

interface OptionalConstructProperties {
  view: Maybe<ISceneView>;
  visibleElements: Partial<ShadowAccumulationVisibleElements>;
  headingLevel: HeadingLevel;
}

type ConstructProperties = Partial<OptionalConstructProperties> &
  WidgetProperties<Castable<ShadowAccumulationViewModel>>;

const enum HandlesKey {
  Slider = "slider"
}

const TIME_RANGE_FORMATTING_OPTIONS = {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "UTC"
} as const;

const TIME_SLIDER_OPTIONS = {
  labelFormatFunction: formatSliderLabel,
  min: 0, // midnight
  max: 23 * 60 + 59, // just before midnight
  steps: 5,
  rangeLabelInputsEnabled: false,
  visibleElements: {
    labels: false,
    rangeLabels: false
  },
  tickConfigs: [
    {
      mode: "position" as const,
      values: [0, 6 * 60, 12 * 60, 18 * 60, 23 * 60 + 59], // Every 6 hours, in minutes, stopping just before 24 hours
      labelsVisible: true,
      tickCreatedFunction: (
        _value: number,
        tickElement: HTMLElement,
        labelElement: HTMLElement
      ): void => {
        tickElement.classList.add(CSS.timeRangePrimaryTick);
        labelElement.classList.add(CSS.timeRangePrimaryTickLabel);

        // Wrap the AM/PM part in an element we can style separately in order to
        // place it below the numbers.
        const timeString = labelElement.innerText;
        if (timeString.indexOf(" ") !== -1) {
          labelElement.innerHTML = timeString.replace(
            /(.*) (.*)/,
            `$1<br><div class="${CSS.timeRangeAMPMLabel}">$2</div>`
          );
        }
      }
    },
    {
      mode: "position" as const,
      values: [2 * 60, 4 * 60, 8 * 60, 10 * 60, 14 * 60, 16 * 60, 20 * 60, 22 * 60], // Every 2 hours, in minutes, skipping primary
      tickCreatedFunction: (_value: number, element: HTMLElement): void => {
        element.classList.add(CSS.timeRangeSecondaryTick);
      }
    }
  ]
};

@subclass("esri.widgets.ShadowAccumulation")
class ShadowAccumulation extends Widget implements ConstructProperties {
  //----------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //----------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/ShadowAccumulation
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);

    if (!properties?.viewModel) {
      this._defaultViewModel = new ShadowAccumulationViewModel({ view: properties?.view });
      this.viewModel = this._defaultViewModel;
    }
  }

  initialize(): void {
    this._handles.add([
      reactionInit(
        () => ({ viewModel: this.viewModel, slider: this._timeSlider }),
        (params) => this._connectTimeSlider(params)
      ),
      reactionInit(
        () => ({
          container: applySome(this.view, (view) => view.surface),
          viewModel: this.viewModel,
          tooltipVisible: this.visibleElements.tooltip
        }),
        ({ container, viewModel, tooltipVisible }) => {
          this._tooltip = destroyMaybe(this._tooltip);
          if (isNone(container) || !tooltipVisible) {
            return;
          }

          this._tooltip = new ShadowTooltip({ viewModel, container });
        }
      ),
      reactionInit(
        () => ({ viewModel: this.viewModel, visible: this.visible }),
        ({ viewModel, visible }) => viewModel.setRunning(visible)
      )
    ]);
  }

  destroy(): void {
    this._handles = destroyMaybe(this._handles);

    this._timeSlider = destroyMaybe(this._timeSlider);

    // Only destroy the default VM if it's not the current `viewModel`. Otherwise
    // the Widget will destroy it.
    if (isSome(this._defaultViewModel) && this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }
  }

  render(): VNode {
    const { visibleElements, viewModel } = this;
    const disabled = viewModel.state === ShadowAccumulationState.Disabled;

    return (
      <div
        key={this}
        class={this.classes(CSS.base, CSS.esriWidget, { [CSS.esriWidgetDisabled]: disabled })}
      >
        {this._renderTimeRangeSection()}
        {visibleElements.visualizationOptions && this._renderVisualizationOptionsSection()}
      </div>
    );
  }

  //----------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //----------------------------------------------------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic (properties and methods)
   * that controls this widget's behavior. See the {@link module:esri/widgets/ShadowAccumulation/ShadowAccumulationViewModel}
   * class to access all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/ShadowAccumulation/ShadowAccumulationViewModel}
   * @autocast
   */
  @property()
  viewModel: ShadowAccumulationViewModel = null;

  /**
   * A reference to the {@link module:esri/views/View}. This widget is only supported in a {@link module:esri/views/SceneView}.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: Maybe<ISceneView> = null;

  /**
   * Indicates the heading level to use for the titles "Time range" and "Visualization". By default, this message is rendered
   * as level 4 headings (e.g. `<h4>Time range</h4>`). Depending on the widget's placement
   * in your app, you may need to adjust this heading for proper semantics. This is
   * important for meeting accessibility standards.
   *
   * @name headingLevel
   * @instance
   * @type {number}
   * @default 4
   * @see [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
   *
   * @example
   * shadowAccumulation.headingLevel = 3;
   */
  @property()
  headingLevel: HeadingLevel = 4;

  /**
   * The widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property()
  iconClass = CSS.widgetIcon;

  /**
   * The widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @aliasOf("messages.widgetLabel", { overridable: true })
  label: string = undefined;

  //------------------------
  // visibleElements
  //------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/ShadowAccumulation~VisibleElements
   *
   * @property {boolean} [timeRangeSlider=true] When set to `false`, the slider used to select a time range for the analysis is not displayed.
   * @property {boolean} [timezone=true] When set to `false`, the dropdown used to select a timezone for the time range is not displayed.
   * @property {boolean} [datePicker=true] When set to `false`, the date picker is not displayed.
   * @property {boolean} [visualizationOptions=true] When set to `false`, the options for the various visualization modes are not displayed.
   * @property {boolean} [colorPicker=true] When set to `false`, the color picker is not displayed in the options for any of the visualization modes.
   * @property {boolean} [tooltip=true] When set to `false`, the tooltip with the accumulated shadow time is not displayed when hovering the view.
   */

  /**
   * This property provides the ability to display or hide the individual elements of the widget.
   *
   * @instance
   * @name visibleElements
   * @type {module:esri/widgets/ShadowAccumulation~VisibleElements}
   * @example
   * shadowAccumulation.visibleElements = {
   *   timeRangeSlider: true,
   *   timezone: true,
   *   datePicker: true,
   *   visualizationOptions: true,
   *   colorPicker: true,
   *   tooltip: true
   * }
   */
  @property({
    type: ShadowAccumulationVisibleElements,
    nonNullable: true
  })
  visibleElements: Partial<ShadowAccumulationVisibleElements> = new ShadowAccumulationVisibleElements();

  //----------------------------------------------------------------------------
  //
  //  Internal Properties
  //
  //----------------------------------------------------------------------------

  /**
   * The widget's message bundle.
   *
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @messageBundle("esri/widgets/ShadowAccumulation/t9n/ShadowAccumulation")
  messages!: ShadowAccumulationMessages;

  get testData(): {
    tooltip: Maybe<ShadowTooltip>;
  } {
    return {
      tooltip: this._tooltip
    };
  }

  //----------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //----------------------------------------------------------------------------

  private _handles = new Handles();

  @property()
  private _defaultViewModel: Maybe<ShadowAccumulationViewModel> = null;

  @property()
  private _timeSlider: Maybe<Slider> = new Slider({
    ...TIME_SLIDER_OPTIONS,
    container: document.createElement("div")
  });

  @property()
  private _tooltip: Maybe<ShadowTooltip> = null;

  //----------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //----------------------------------------------------------------------------

  /**
   * Connects the slider used to pick the start/end times for the analysis to
   * the view model, in a two-way binding:
   *   - When the date picker's value changes, we update the view model.
   *   - When the view model changes, we update the date picker.
   *
   * @ignore
   */
  private _connectTimeSlider({
    viewModel,
    slider
  }: {
    viewModel: ShadowAccumulationViewModel;
    slider: Maybe<Slider>;
  }): void {
    this._handles.remove(HandlesKey.Slider);

    if (isNone(slider)) {
      return;
    }

    const toMinutes = (v: number) => convertTime(v, "milliseconds", "minutes");
    const toMillis = (v: number) => convertTime(v, "minutes", "milliseconds");

    const onDragOrChange = ({ index, value }: { index: number; value: number }): void => {
      if (index === 0) {
        viewModel.startTimeOfDay = toMillis(value);
      } else {
        viewModel.endTimeOfDay = toMillis(value);
      }
    };

    this._handles.add(
      [
        reactionInit(
          () => [viewModel.startTimeOfDay, viewModel.endTimeOfDay],
          (values) => {
            slider.values = values.map(toMinutes);
          }
        ),
        // Thumb change is emitted when using the keyboard.
        slider.on("thumb-change", onDragOrChange),
        // Thumb drag is emitted when the thumb is dragged.
        slider.on("thumb-drag", onDragOrChange),
        slider.on("segment-drag", () => {
          [viewModel.startTimeOfDay, viewModel.endTimeOfDay] = slider.values.map(toMillis);
        })
      ],
      HandlesKey.Slider
    );
  }

  private _renderTimeRangeSection(): VNode {
    const { visibleElements } = this;

    if (!visibleElements.timeRangeSlider && !visibleElements.datePicker) {
      return null;
    }

    return (
      <section key="time-range" class={CSS.timeRange}>
        <Heading level={this.headingLevel}>{this.messages.timeLabel}</Heading>
        {visibleElements.timeRangeSlider && this._renderTimeRange()}
        {visibleElements.datePicker && this._renderDatePicker()}
      </section>
    );
  }

  private _renderTimeRange(): VNode {
    const { messages, viewModel, visibleElements } = this;
    const { startTimeOfDay, endTimeOfDay } = viewModel;
    const [start, end] = [startTimeOfDay, endTimeOfDay].map((t) =>
      formatDate(new Date(t), TIME_RANGE_FORMATTING_OPTIONS)
    );

    return [
      <div key="time-range-indicator" class={CSS.timeRangeIndicator}>
        {substitute(messages.timeRange, { start, end })}

        {visibleElements.timezone && (
          <TimezonePicker value={viewModel.utcOffset} onChange={this._onTimezoneChange} />
        )}
      </div>,
      <div
        key="time-slider-container"
        bind={this}
        afterCreate={this._timeSliderContainerAfterCreate}
        afterRemoved={this._timeSliderContainerAfterRemoved}
      />
    ];
  }

  private _timeSliderContainerAfterCreate(element: HTMLElement): void {
    applySome(this._timeSlider, (slider) => {
      element.appendChild(slider.container);
    });
  }

  private _timeSliderContainerAfterRemoved(element: HTMLElement): void {
    applySome(this._timeSlider, (slider) => {
      element.removeChild(slider.container);
    });
  }

  private _onTimezoneChange = (value: number): void => {
    this.viewModel.utcOffset = value;
  };

  private _renderDatePicker(): VNode {
    return (
      <div key="date-picker" class={CSS.datePickerContainer}>
        <DatePicker value={this.viewModel.date} onChange={this._onDateChange} />
      </div>
    );
  }

  private _onDateChange = (value: Date): void => {
    this.viewModel.date = value;
  };

  private _renderVisualizationOptionsSection(): VNode {
    const { headingLevel, messages, viewModel, visibleElements } = this;

    const colorPickerVisible = visibleElements.colorPicker;

    // We always render all the configurators and then simply hide the ones not
    // currently active. This prevents flickering in the UI caused by the various
    // components loading (e.g. because of translations, Calcite, etc).
    const hiddenUnless = (type: ShadowVisualizationType) =>
      this.classes(viewModel.visualizationType === type ? null : CSS.visualizationConfigHidden);

    return (
      <section key="visualization" class={CSS.visualization}>
        <Heading level={headingLevel}>{messages.visualizationLabel}</Heading>

        {this._renderVisualizationSelect()}

        <div key="threshold-configurator" class={hiddenUnless(ShadowVisualizationType.Threshold)}>
          <ThresholdConfigurator
            options={viewModel.thresholdOptions}
            colorPickerVisible={colorPickerVisible}
          />
        </div>
        <div key="duration-configurator" class={hiddenUnless(ShadowVisualizationType.Duration)}>
          <DurationConfigurator
            options={viewModel.durationOptions}
            colorPickerVisible={colorPickerVisible}
          />
        </div>
        <div key="discrete-configurator" class={hiddenUnless(ShadowVisualizationType.Discrete)}>
          <DiscreteConfigurator
            options={viewModel.discreteOptions}
            colorPickerVisible={colorPickerVisible}
          />
        </div>
      </section>
    );
  }

  private _renderVisualizationSelect(): VNode {
    const messages = this.messages;
    const selectedType = this.viewModel.visualizationType;

    return (
      <calcite-select
        class={CSS.visualizationSelect}
        key="visualization-select"
        label={messages.visualizationLabel}
        bind={this}
        onCalciteSelectChange={this._onVisualizationTypeChange}
      >
        {[
          { type: ShadowVisualizationType.Threshold, label: messages.threshold.label },
          { type: ShadowVisualizationType.Duration, label: messages.duration.label },
          { type: ShadowVisualizationType.Discrete, label: messages.discrete.label }
        ].map(({ type, label }) => (
          <calcite-option value={type} selected={type === selectedType}>
            {label}
          </calcite-option>
        ))}
      </calcite-select>
    );
  }

  private _onVisualizationTypeChange(event: CustomEvent<any>): void {
    const target = event.target as HTMLCalciteSelectElement;
    const value = target.selectedOption?.value;

    this.viewModel.visualizationType = value ?? ShadowVisualizationType.Threshold;
  }
}

export default ShadowAccumulation;
