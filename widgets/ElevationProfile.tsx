/**
 * The ElevationProfile widget is used to generate and display an elevation profile from an input path.
 * The input path can be set interactively by drawing a single or multi-segment line, or by selecting a line feature.
 * Alternatively the widget allows to set an input path programmatically on creation, or at runtime.
 *
 * [![elevation-profile](../../assets/img/apiref/widgets/elevation-profile/elevation-profile-city.png)](../sample-code/widgets-elevation-profile/index.html)
 * _ElevationProfile widget used in a city scene, displaying ground and building profiles. See [Sample - ElevationProfile widget](../sample-code/widgets-elevation-profile/index.html)_
 *
 * Once all profiles are refined to their maximum resolution, the corresponding 3D profile lines appear in the scene view (no lines in map view),
 * and profile statistics display in the widget. Note that certain statistics fields display only when a single profile is active.
 * Hovering on the chart shows an overlayed tooltip with elevation values of all profiles,
 * and displays colored dot markers in the 3D view on the matching positions.
 *
 * Checkboxes in the legend allow hiding individual profiles.
 * Chart units can be set via the settings menu to metric, imperial or a specific unit.
 * Click-and-drag on the chart zooms in to a specific part of the profile chart. When zoomed in, click on the minus button to reset zoom.
 *
 * ![elevation-profile-draw](../../assets/img/apiref/widgets/elevation-profile/elevation-profile-draw.gif)
 * _Drawing a path to get a ground profile._
 *
 * ![elevation-profile-zline](../../assets/img/apiref/widgets/elevation-profile/elevation-profile-zline.png)
 * _Profile generated from a line feature with z-values shows a paraglide track above ground._
 *
 * @example
 * const elevationProfile = new ElevationProfile({
 *   view: view
 * });
 * // adds the ElevationProfile to the top right corner of the view
 * view.ui.add(elevationProfile, "top-right");
 *
 * @module esri/widgets/ElevationProfile
 * @since 4.18
 * @beta
 *
 * @see [Sample - ElevationProfile widget](../sample-code/widgets-elevation-profile/index.html)
 * @see [ElevationProfile.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/ElevationProfile.tsx)
 * @see [ElevationProfile.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ElevationProfile.scss)
 * @see module:esri/widgets/ElevationProfile/ElevationProfileViewModel
 * @see module:esri/widgets/ElevationProfile/ElevationProfileLineGround
 * @see module:esri/widgets/ElevationProfile/ElevationProfileLineInput
 * @see module:esri/widgets/ElevationProfile/ElevationProfileLineQuery
 * @see module:esri/widgets/ElevationProfile/ElevationProfileLineView
 */

// esri
import Graphic from "esri/Graphic";

// esri.core
import Collection from "esri/core/Collection";
import { Maybe, isSome, isNone } from "esri/core/maybe";
import * as promiseUtils from "esri/core/promiseUtils";
import { SystemOrLengthUnit } from "esri/core/unitUtils";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { property, subclass, aliasOf } from "esri/core/accessorSupport/decorators";
import { Castable } from "esri/core/accessorSupport/ensureType";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.ElevationProfile
import ChartLegend from "esri/widgets/ElevationProfile/ChartLegend";
import { CSS } from "esri/widgets/ElevationProfile/css";
import {
  ElevationProfileLineArrayOrCollection,
  ElevationProfileLine
} from "esri/widgets/ElevationProfile/elevationProfileLineTypes";
import ElevationProfileViewModel from "esri/widgets/ElevationProfile/ElevationProfileViewModel";
import ElevationProfileVisibleElements from "esri/widgets/ElevationProfile/ElevationProfileVisibleElements";
import { ChartData } from "esri/widgets/ElevationProfile/interfaces";
import { SettingsButton } from "esri/widgets/ElevationProfile/SettingsButton";
import { Statistics } from "esri/widgets/ElevationProfile/Statistics";

// esri.widgets.ElevationProfile.support
import { Chart, createChart } from "esri/widgets/ElevationProfile/support/chartUtils";
import {
  PORTRAIT_MODE_PIXEL_BREAKPOINT,
  ElevationProfileState,
  ElevationProfileErrorState
} from "esri/widgets/ElevationProfile/support/constants";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/widgets/ElevationProfile/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, renderable, messageBundle } from "esri/widgets/support/widget";

interface ConstructionParameters {
  view: MapView | SceneView;
  viewModel: Castable<ElevationProfileViewModel>;
  input: Maybe<Graphic>;
  profiles: ElevationProfileLineArrayOrCollection;
  unitOptions: SystemOrLengthUnit[];
  unit: SystemOrLengthUnit;
  geodesicDistanceThreshold: number;
  visibleElements: Partial<ElevationProfileVisibleElements>;
}

interface ChartUpdateParams {
  chart: Maybe<Chart>;
  stationary: boolean;
  data: Maybe<ChartData>;
  elevationUnitsPerPixel: Maybe<number>;
  messages: UnitsMessages & ElevationProfileMessages;
}

const enum Action {
  Sketch,
  SketchCancel,
  SketchDone,
  SketchDoneDisabled,
  Select,
  SelectCancel
}

const MAIN_ACTIONS: Action[] = [Action.Select, Action.Sketch];

@subclass("esri.widgets.ElevationProfile")
class ElevationProfile extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/ElevationProfile
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(
    params: Partial<ConstructionParameters> & Pick<ConstructionParameters, "view">,
    parentNode?: string | Element
  ) {
    super(params, parentNode);

    if (!params.viewModel) {
      this._defaultViewModel = new ElevationProfileViewModel({ view: params.view });
      this.viewModel = this._defaultViewModel;
    }
  }

  postInitialize(): void {
    this.own([
      watchUtils.init(this, "_chartContainer", () => {
        this._destroyChart(); // Make sure we don't have an old chart.

        const container = this._chartContainer;
        if (isNone(container)) {
          return;
        }

        this._chartInitTask = promiseUtils.createTask((signal) =>
          this._initializeChart(container, signal)
        );
      }),
      watchUtils.init(this, "viewModel", (vm) => {
        this._settingsButton.viewModel = vm;
        this._statisticsWidget.viewModel = vm;
        this._legend.viewModel = vm;
      }),
      watchUtils.init(this, "_chartUpdateParams", () => this._updateChart())
    ]);
  }

  destroy(): void {
    this._destroyChart();

    if (isSome(this._defaultViewModel) && this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }

    this._statisticsWidget.destroy();
    this._statisticsWidget = null;

    this._legend.destroy();
    this._legend = null;

    this._settingsButton.destroy();
    this._settingsButton = null;

    if (isSome(this._resizeObserver)) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  //------------------------
  // viewModel
  //------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic (properties and methods)
   * that controls this widget's behavior. See the {@link module:esri/widgets/ElevationProfile/ElevationProfileViewModel}
   * class to access all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/ElevationProfile/ElevationProfileViewModel}
   * @autocast
   */
  @property({ type: ElevationProfileViewModel })
  @renderable(["chartData", "progress", "statistics", "canStopCreating"])
  viewModel: ElevationProfileViewModel = null;

  //------------------------
  // view
  //------------------------

  /**
   * A reference to the {@link module:esri/views/SceneView} or the {@link module:esri/views/MapView}.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView | module:esri/views/MapView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView | SceneView = null;

  //------------------------
  // input
  //------------------------

  /**
   * The input path along which elevation will be queried in order to generate an elevation profile.
   *
   * Typically not set when creating the widget. In this case the widget starts empty,
   * and waits for the user to either draw a new profile or generate a profile from selecting a line feature.
   * The result of this action populates `input`.
   * `input` can be set when constructing the widget, or set or changed at runtime.
   * The input graphic must contain a geometry of type {@link module:esri/geometry/Polyline},
   * symbol and attributes of the input graphic are ignored.
   *
   * @name input
   * @instance
   * @type {module:esri/Graphic}
   * @default null
   * @autocast
   */
  @aliasOf("viewModel.input")
  @renderable()
  input: Maybe<Graphic> = null;

  //------------------------
  // profiles
  //------------------------

  /**
   * Collection of elevation profile lines which are to be generated and displayed in the widget's
   * chart. See the different profile line types for details on usage and behavior.
   *
   * Once an elevation profile is generated, each line will contain the raw data used to
   * generate the chart and statistics.
   * The order of the profiles within the collection determines the drawing order on the chart.
   *
   * In a {@link module:esri/views/MapView} `ground` is the only supported profile line type.
   *
   * @name profiles
   * @instance
   * @type {module:esri/core/Collection<
   *    module:esri/widgets/ElevationProfile/ElevationProfileLineGround |
   *    module:esri/widgets/ElevationProfile/ElevationProfileLineInput |
   *    module:esri/widgets/ElevationProfile/ElevationProfileLineQuery |
   *    module:esri/widgets/ElevationProfile/ElevationProfileLineView
   * >}
   * @autocast
   * @example
   * const elevationProfile = new ElevationProfile({
   *   view: view,
   *   profiles: [{
   *     type: "ground", //autocasts as new ElevationProfileLineGround()
   *   }, {
   *     type: "input",  //autocasts as new ElevationProfileLineInput()
   *   }, {
   *     type: "query",  //autocasts as new ElevationProfileLineQuery()
   *   }, {
   *     type: "view"    //autocasts as new ElevationProfileLineView()
   *   }]
   * });
   */
  @aliasOf("viewModel.profiles")
  @renderable()
  profiles: Collection<ElevationProfileLine> = null;

  //------------------------
  // unitOptions
  //------------------------

  /**
   * List of available units and unit systems (imperial, metric) for displaying the elevation and distance values.
   *
   * @name unitOptions
   * @instance
   * @type {module:esri/core/units~SystemOrLengthUnit[]}
   */
  @aliasOf("viewModel.unitOptions")
  @renderable()
  unitOptions: SystemOrLengthUnit[] = [];

  //------------------------
  // unit
  //------------------------

  /**
   * Unit system (imperial, metric) or specific unit used for displaying the elevation and distance values.
   *
   * @name unit
   * @instance
   * @type {module:esri/core/units~SystemOrLengthUnit}
   */
  @aliasOf("viewModel.unit")
  @renderable()
  unit: SystemOrLengthUnit = "metric";

  /**
   * When the spatial reference is projected (other than web mercator) and the
   * path is shorter than this threshold, distances will be computed planimetrically.
   * Otherwise distances will be computed geodetically.
   *
   * @instance
   * @name geodesicDistanceThreshold
   * @type {number}
   * @default 100000
   */
  @aliasOf("viewModel.geodesicDistanceThreshold")
  @renderable()
  geodesicDistanceThreshold: number = 100_000;

  //------------------------
  // visibleElements
  //------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   * The visual elements in this widget are statistics, legend, sketchButton, and selectButton.
   * These are all set to true by default.
   *
   * @typedef module:esri/widgets/ElevationProfile~VisibleElements
   *
   * @property {boolean} [statistics=true] When set to `false`, the statistics are not displayed.
   * @property {boolean} [legend=true] When set to `false`, chart legend is not displayed.
   * @property {boolean} [sketchButton=true] When set to `false`, the button used to start drawing/sketchinng is not displayed.
   * @property {boolean} [selectButton=true] When set to `false`, the button used to select a path is not displayed.
   */

  /**
   * This property provides the ability to display or hide the individual elements of the widget.
   *
   * @instance
   * @name visibleElements
   * @type {module:esri/widgets/ElevationProfile~VisibleElements}
   * @example
   * elevationProfile.visibleElements = {
   *    statistics: true,
   *    legend: true,
   *    sketchButton: true,
   *    selectButton: true
   * }
   */
  @property({ type: ElevationProfileVisibleElements })
  @renderable()
  visibleElements: Partial<ElevationProfileVisibleElements> = new ElevationProfileVisibleElements();

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
  @renderable()
  iconClass = CSS.widgetIcon;

  //------------------------
  // label
  //------------------------

  /**
   * The widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @aliasOf("messages.widgetLabel", { overridable: true })
  @renderable()
  label: string = undefined;

  //----------------------------------------------------------------------------
  //
  //  Internal Properties
  //
  //----------------------------------------------------------------------------

  //------------------------
  // messages
  //------------------------

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
  @renderable()
  @messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")
  messages: ElevationProfileMessages = null;

  //------------------------
  // messagesCommon
  //------------------------

  /**
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @renderable()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

  //------------------------
  // messagesUnits
  //------------------------

  /**
   * @name messagesUnits
   * @instance
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @renderable()
  @messageBundle("esri/core/t9n/Units")
  messagesUnits: UnitsMessages = null;

  //----------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //----------------------------------------------------------------------------

  private _defaultViewModel: Maybe<ElevationProfileViewModel>;

  @property()
  private _chartContainer: Maybe<HTMLElement> = null;

  @property()
  private _chart: Maybe<Chart> = null;

  private _settingsButton = new SettingsButton({ viewModel: this.viewModel });
  private _statisticsWidget = new Statistics({ viewModel: this.viewModel });
  private _legend = new ChartLegend({ viewModel: this.viewModel });

  private _resizeObserver: Maybe<ResizeObserver> = null;

  @property()
  @renderable()
  private _portrait: boolean = false;

  private _chartInitTask: Maybe<promiseUtils.Task<any>> = null;

  /**
   * Property which collects all the parameters needed to update the chart. This
   * way we can watch only this property and have full type checking, rather
   * than watch each property individually.
   *
   * @ignore
   */
  @property()
  private get _chartUpdateParams(): ChartUpdateParams {
    return {
      chart: this._chart,
      data: this.viewModel.chartData,
      stationary: this.view.stationary,
      elevationUnitsPerPixel: this.viewModel.elevationUnitsPerPixel,
      messages: { ...this.messagesUnits, ...this.messages }
    };
  }

  //----------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //----------------------------------------------------------------------------

  render(): VNode {
    const { viewModel } = this;
    const progress = viewModel.progress;

    return (
      <div
        key={this}
        class={this.classes(CSS.base, CSS.esriWidget, {
          [CSS.esriWidgetDisabled]: viewModel.state === "disabled",
          [CSS.portrait]: this._portrait
        })}
        aria-label={this.messages.widgetLabel}
        bind={this}
        afterCreate={this._onAfterCreate}
      >
        <div
          key="progress-bar"
          class={this.classes(CSS.progressBar, { [CSS.progressBarVisible]: progress < 1 })}
          styles={{ width: `${progress * 100}%` }}
          role="presentation"
          aria-hidden="true"
          title={this.messagesCommon.loading}
        ></div>

        {this._renderContentForState()}
      </div>
    );
  }

  //----------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //----------------------------------------------------------------------------

  private _renderContentForState(): VNode {
    switch (this.viewModel.state) {
      case ElevationProfileState.Ready:
        return this._renderContentForReadyState();
      case ElevationProfileState.Selecting:
        return this._renderContentForSelectingState();
      case ElevationProfileState.Creating:
        return this._renderContentForCreatingState();
      case ElevationProfileState.Selected:
      case ElevationProfileState.Created:
        return this._renderContentForCreatedState();
      case ElevationProfileState.Disabled:
        return null;
    }
  }

  private _renderContentForReadyState(): VNode {
    return this._renderContent({
      prompt: this.messages.readyPrompt,
      statistics: false,
      chart: false,
      legend: false,
      actions: MAIN_ACTIONS
    });
  }

  private _renderContentForSelectingState(): VNode {
    return this._renderContent({
      prompt: this.messages.selectingPrompt,
      statistics: false,
      chart: false,
      legend: false,
      actions: [Action.SelectCancel]
    });
  }

  private _renderContentForCreatingState(): VNode {
    const errorActions = [Action.SketchCancel, Action.SketchDoneDisabled];
    const errorOptions = {
      statistics: false,
      chart: false,
      legend: false,
      actions: errorActions
    };

    switch (this.viewModel.errorState) {
      case ElevationProfileErrorState.NoValidInput:
        return this._renderContent({ ...errorOptions, prompt: this.messages.creatingPrompt });
      case ElevationProfileErrorState.MultiPathInput:
        return this._renderContent({ ...errorOptions, prompt: this.messages.noMultiPathSupport });
      case ElevationProfileErrorState.NoVisibleProfiles:
      case ElevationProfileErrorState.RefinedButNoChartData:
        return this._renderContent({
          ...errorOptions,
          prompt: this.messages.noProfile,
          legend: true // Show legend so that profiles can be made visible.
        });
      case ElevationProfileErrorState.None: {
        const doneAction = this.viewModel.canStopCreating
          ? Action.SketchDone
          : Action.SketchDoneDisabled;

        return this._renderContent({
          statistics: true,
          chart: true,
          legend: true,
          actions: [Action.SketchCancel, doneAction]
        });
      }
    }
  }

  private _renderContentForCreatedState(): VNode {
    const errorActions = MAIN_ACTIONS;
    const errorOptions = {
      statistics: false,
      chart: false,
      legend: false,
      actions: errorActions
    };

    switch (this.viewModel.errorState) {
      case ElevationProfileErrorState.NoValidInput:
        return this._renderContent({ ...errorOptions, prompt: this.messages.noProfile });
      case ElevationProfileErrorState.MultiPathInput:
        return this._renderContent({ ...errorOptions, prompt: this.messages.noMultiPathSupport });
      case ElevationProfileErrorState.NoVisibleProfiles:
      case ElevationProfileErrorState.RefinedButNoChartData:
        return this._renderContent({
          ...errorOptions,
          prompt: this.messages.noProfile,
          legend: true // Show legend so that profiles can be made visible.
        });
      case ElevationProfileErrorState.None:
        return this._renderContent({
          statistics: true,
          chart: true,
          legend: true,
          actions: MAIN_ACTIONS
        });
    }
  }

  private _renderContent({
    statistics,
    prompt,
    chart,
    legend,
    actions
  }: {
    prompt?: Maybe<string>;
    statistics: boolean;
    chart: boolean;
    legend: boolean;
    actions: Action[];
  }): VNode {
    return [
      this._renderHeader({ statistics }),
      isSome(prompt) ? this._renderPrompt(prompt) : chart && this._renderChart(),
      this._renderActions({ legend, actions })
    ];
  }

  private _renderHeader(props: { statistics: boolean }): VNode {
    const { progress } = this.viewModel;
    const showStatistics = progress === 1 && props.statistics && this.visibleElements.statistics;
    const loading = progress > 0 && progress < 1;

    return (
      <header key="header" class={CSS.header}>
        {loading && (
          <div key="loading-message" class={CSS.loadingMessage}>
            {this.messages.loading}
          </div>
        )}
        {showStatistics ? (
          this._statisticsWidget.render()
        ) : (
          <div key="header-spacer" class={CSS.headerSpacer}></div>
        )}
        {this._settingsButton.render()}
      </header>
    );
  }

  private _renderPrompt(message: string): VNode {
    return (
      <div key="prompt-container" bind={this} class={CSS.promptContainer}>
        <p>{message}</p>
      </div>
    );
  }

  private _renderChart(): VNode {
    return (
      <div
        key="chart-container"
        bind={this}
        class={CSS.chartContainer}
        afterCreate={this._onChartContainerAfterCreate}
        afterRemoved={this._onChartContainerRemoved}
      ></div>
    );
  }

  private _renderActions({ legend, actions }: { legend: boolean; actions: Action[] }): VNode {
    const actionNodes = actions.map(
      (action): VNode => {
        switch (action) {
          case Action.Sketch:
            return (
              this.visibleElements.sketchButton && (
                <button
                  key="sketch"
                  class={this.classes(CSS.actionButton, CSS.sketchButton)}
                  bind={this}
                  onclick={this._onSketchButtonClick}
                >
                  {this.messages.sketchButtonLabel}
                </button>
              )
            );
          case Action.SketchCancel:
            return (
              this.visibleElements.sketchButton && (
                <button
                  key="sketch-cancel"
                  class={this.classes(CSS.actionButton, CSS.sketchCancelButton)}
                  bind={this}
                  onclick={this._onCancelButtonClick}
                >
                  {this.messagesCommon.cancel}
                </button>
              )
            );
          case Action.SketchDone: {
            return (
              this.visibleElements.sketchButton && (
                <button
                  key="sketch-done"
                  class={this.classes(CSS.actionButton, CSS.sketchDoneButton)}
                  bind={this}
                  onclick={this._onDoneButtonClick}
                >
                  {this.messagesCommon.done}
                </button>
              )
            );
          }
          case Action.SketchDoneDisabled: {
            return (
              this.visibleElements.sketchButton && (
                <button
                  key="sketch-done-disabled"
                  class={this.classes(CSS.actionButton, CSS.sketchDoneButton, CSS.buttonDisabled)}
                  bind={this}
                  disabled={true}
                >
                  {this.messagesCommon.done}
                </button>
              )
            );
          }
          case Action.Select:
            return (
              this.visibleElements.selectButton && (
                <button
                  key="select"
                  class={this.classes(CSS.actionButton, CSS.selectButton)}
                  bind={this}
                  onclick={this._onSelectButtonClick}
                >
                  {this.messages.selectButtonLabel}
                </button>
              )
            );
          case Action.SelectCancel:
            return (
              this.visibleElements.selectButton && (
                <button
                  key="select-cancel"
                  class={this.classes(CSS.actionButton, CSS.selectCancelButton)}
                  bind={this}
                  onclick={this._onCancelButtonClick}
                >
                  {this.messagesCommon.cancel}
                </button>
              )
            );
        }
      }
    );

    return (
      <div class={CSS.footer}>
        <div class={CSS.legendContainer}>
          {this.visibleElements.legend && legend && this._legend.render()}
        </div>
        <div class={CSS.actionsContainer}>{...actionNodes}</div>
      </div>
    );
  }

  private _onSketchButtonClick(): void {
    this.viewModel.start({ mode: "sketch" });
  }

  private _onSelectButtonClick(): void {
    this.viewModel.start({ mode: "select" });
  }

  private _onCancelButtonClick(): void {
    this.viewModel.cancel();
  }

  private _onDoneButtonClick(): void {
    this.viewModel.stop();
  }

  private _updateChart(): void {
    const params = this._chartUpdateParams;

    if (params.stationary && isSome(params.chart) && params.messages) {
      params.chart.update(params);
    }
  }

  private _onChartContainerAfterCreate(element: HTMLElement): void {
    this._chartContainer = element;
  }

  private _onChartContainerRemoved(): void {
    this._chartContainer = null;
  }

  private async _initializeChart(container: HTMLElement, signal: AbortSignal): Promise<void> {
    this._chart = await createChart({
      container,
      abortOptions: { signal },
      onCursorPositionChange: (x: number) => {
        this.viewModel.hoveredChartPosition = x;
      }
    });

    this._updateChart();
  }

  private _destroyChart(): void {
    if (isSome(this._chartInitTask)) {
      this._chartInitTask.abort();
      this._chartInitTask = null;
    }

    if (isSome(this._chart)) {
      this._chart.destroy();
      this._chart = null;
    }
  }

  private _onAfterCreate(element: HTMLElement): void {
    const onResize = () => {
      this._portrait = element.getBoundingClientRect().width < PORTRAIT_MODE_PIXEL_BREAKPOINT;
    };

    onResize();

    this._resizeObserver = new ResizeObserver(() => onResize());
    this._resizeObserver.observe(element);
  }
}

export default ElevationProfile;
