/**
 * The ElevationProfile widget is used to display and explore elevation data along a path.
 */

// esri.core
import Collection = require("esri/core/Collection");
import { Maybe, isSome, isNone } from "esri/core/maybe";
import * as promiseUtils from "esri/core/promiseUtils";
import { SystemOrLengthUnit } from "esri/core/unitUtils";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { property, subclass, cast, aliasOf } from "esri/core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.geometry
import Polyline = require("esri/geometry/Polyline");

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.ElevationProfile
import ElevationProfileLine = require("esri/widgets/ElevationProfile/ElevationProfileLine");
import ElevationProfileViewModel = require("esri/widgets/ElevationProfile/ElevationProfileViewModel");
import { renderStats } from "esri/widgets/ElevationProfile/Stats";

// esri.widgets.ElevationProfile.support
import { Chart, createChart } from "esri/widgets/ElevationProfile/support/chartUtils";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/widgets/ElevationProfile/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, renderable, messageBundle } from "esri/widgets/support/widget";

interface ConstructionParameters {
  view: SceneView;
  viewModel?: ElevationProfileViewModel;
  profiles?: Collection<ElevationProfileLine>;
  unitOptions?: SystemOrLengthUnit[];
  unit?: SystemOrLengthUnit;
}

interface VisibleElements {
  newProfileButton: boolean;
  stats: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  newProfileButton: true,
  stats: true
};

const BASE = "esri-elevation-profile";

const CSS = {
  esriWidgetDisabled: "esri-widget--disabled",
  widgetIcon: "",

  base: `${BASE} esri-widget--panel esri-widget`,
  headerContainer: `${BASE}__header-container`,
  header: `${BASE}__header esri-widget__heading`,
  progressBar: `${BASE}__progress-bar`,
  progressBarVisible: `${BASE}__progress-bar--visible`,
  noPathContainer: `${BASE}__no-path-container`,
  newProfileButton: `${BASE}__new-profile-button esri-button`,
  chartContainer: `${BASE}__chart-container`,
  statsContainer: `${BASE}__stats-container`,
  noStats: `${BASE}__stats-container--no-stats`,
  elevationStatsContainer: `${BASE}__elevation-stats-container`,
  slopeStatsContainer: `${BASE}__slope-stats-container`,
  stat: `${BASE}__stat`,
  statValue: `${BASE}__stat-value`
};

@subclass("esri.widgets.ElevationProfile")
class ElevationProfile extends Widget implements ConstructionParameters {
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
  constructor(params?: ConstructionParameters, parentNode?: string | Element) {
    super(params, parentNode);

    this._defaultViewModel = new ElevationProfileViewModel({ view: params.view });
    this.viewModel = params.viewModel ?? this._defaultViewModel;
  }

  postInitialize(): void {
    this.own([
      watchUtils.init(this, "_chartContainer", () => this._initializeChart()),
      watchUtils.init(this, ["viewModel.chartData", "messages", "messagesUnits"], () => {
        this._updateChart();
      })
    ]);
  }

  destroy(): void {
    this._destroyChart();

    if (this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  private _defaultViewModel: ElevationProfileViewModel;

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
  @renderable(["state", "chartData", "progress", "updating"])
  viewModel: ElevationProfileViewModel;

  /**
   * A reference to the {@link module:esri/views/SceneView}.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: SceneView = null;

  /**
   * This property provides the ability to display or hide the individual elements of the widget.
   */
  @property()
  @renderable()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected _castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

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

  /**
   * The widget's message bundle.
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @renderable()
  @messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")
  messages: ElevationProfileMessages = null;

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

  /**
   * The path along which elevation will be queried in order to generate an elevation profile.
   */
  @aliasOf("viewModel.path")
  path: Maybe<Polyline>;

  /**
   * Collection of elevation profile lines which is to be generated and displayed in the widget's
   * graph. By default, we'll generate an elevation profile for the `Ground` elevation layers:
   */
  @aliasOf("viewModel.profiles")
  profiles: Collection<ElevationProfileLine>;

  @aliasOf("viewModel.unitOptions")
  unitOptions: SystemOrLengthUnit[];

  @aliasOf("viewModel.unit")
  unit: SystemOrLengthUnit;

  //----------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //----------------------------------------------------------------------------

  @property()
  private _chartContainer: Maybe<HTMLElement> = null;

  @property()
  private _chart: Maybe<Chart> = null;

  private _chartAbortController: Maybe<AbortController> = null;

  //----------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //----------------------------------------------------------------------------

  render(): VNode {
    const { viewModel, messages, messagesUnits, visibleElements } = this;
    const state = viewModel.state;
    const path = viewModel.path;
    const systemOrUnit = viewModel.unit;
    const spatialReference = isSome(path) ? path.spatialReference : null;

    const creating = state === "creating";
    const showNoPath = state === "ready" || (creating && isNone(path));
    const showChart = state === "created" || (creating && isSome(path));
    const showStats = showChart && visibleElements.stats;

    const firstProfileLine: Maybe<ElevationProfileLine> =
      viewModel.profiles.length === 1 ? this.profiles.getItemAt(0) : null;

    return (
      <div
        key={this}
        class={this.classes(CSS.base, { [CSS.esriWidgetDisabled]: state === "disabled" })}
        aria-label={messages.widgetLabel}
      >
        {this._renderProgressBar(viewModel.updating, viewModel.progress)}
        {this._renderHeader()}

        {showNoPath && this._renderNoPathMessage()}
        {showChart && this._renderChartContainer()}
        {showStats &&
          renderStats({
            line: firstProfileLine,
            messages,
            messagesUnits,
            systemOrUnit,
            spatialReference
          })}
      </div>
    );
  }

  //----------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //----------------------------------------------------------------------------

  private _renderProgressBar(updating: boolean, progress: number): VNode {
    return (
      <div
        key="progress-bar"
        class={this.classes(CSS.progressBar, { [CSS.progressBarVisible]: updating })}
        styles={{ width: `${progress * 100}%` }}
        role="presentation"
        aria-hidden="true"
        title={this.messagesCommon.loading}
      ></div>
    );
  }

  private _renderNoPathMessage(): VNode {
    return (
      <div key="no-path-message" bind={this} class={CSS.noPathContainer}>
        <p>{this.messages.noPath}</p>
      </div>
    );
  }

  private _renderChartContainer(): VNode {
    return (
      <div
        key="chart-container"
        bind={this}
        class={CSS.chartContainer}
        afterCreate={this._onChartContainerCreate}
        afterRemoved={this._onChartContainerRemoved}
      ></div>
    );
  }

  private _renderHeader(): VNode {
    const messages = this.messages;

    return (
      <div class={CSS.headerContainer}>
        <h4 class={CSS.header}>{messages.widgetLabel}</h4>
        <button bind={this} class={CSS.newProfileButton} onclick={this._onNewProfileClick}>
          {messages.newProfile}
        </button>
      </div>
    );
  }

  private _onNewProfileClick(): void {
    this.viewModel.start();
  }

  private _updateChart(): void {
    if (isNone(this._chart) || !this.messages || !this.messagesUnits) {
      return;
    }

    this._chart.update({
      data: this.viewModel.chartData,
      messages: { ...this.messagesUnits, ...this.messages }
    });
  }

  private _onChartContainerCreate(element: HTMLElement): void {
    this._chartContainer = element;
  }

  private _onChartContainerRemoved(): void {
    this._chartContainer = null;
  }

  private async _initializeChart(): Promise<void> {
    this._destroyChart(); // Make sure we don't have an old chart.

    const container = this._chartContainer;
    if (isNone(container)) {
      return;
    }

    const abortController = promiseUtils.createAbortController();
    this._chartAbortController = abortController;

    try {
      this._chart = await createChart({
        container,
        onCursorPositionChange: (x: number, _y: number) => {
          this.viewModel.hoveredChartPosition = x;
        },
        abortOptions: { signal: abortController.signal }
      });
    } catch (e) {
      if (promiseUtils.isAbortError(e)) {
        // Clear the abort controller if we aborted to avoid leaks.
        if (this._chartAbortController === abortController) {
          this._chartAbortController = null;
        }
      } else {
        throw e;
      }
    }

    this._updateChart();
  }

  private _destroyChart(): void {
    if (isSome(this._chartAbortController)) {
      this._chartAbortController.abort();
      this._chartAbortController = null;
    }

    if (isSome(this._chart)) {
      this._chart.destroy();
      this._chart = null;
    }
  }
}

export = ElevationProfile;
