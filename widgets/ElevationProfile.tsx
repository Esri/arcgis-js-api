/**
 * The ElevationProfile widget is used to generate and display an elevation profile from an [input line graphic](#input).
 * The input graphic can be set interactively by drawing a single or multi-segment line, or by selecting a line feature in the view.
 * Alternatively the widget allows to set an input graphic programmatically on creation, or at runtime, by setting the
 * [input](#input) property.
 *
 * [![elevation-profile](../assets/img/apiref/widgets/elevation-profile/elevation-profile-city.png)](../sample-code/widgets-elevation-profile/index.html)
 * _ElevationProfile widget used in a city scene, displaying ground and building profiles. See [Sample - ElevationProfile widget](../sample-code/widgets-elevation-profile/index.html)_
 *
 * The widget can visualize multiple profile lines, depending on the environment (2D versus 3D) and elevation source data:
 *
 * * {@link module:esri/widgets/ElevationProfile/ElevationProfileLineGround} can be used in both {@link module:esri/views/MapView}
 * and {@link module:esri/views/SceneView}. In this case, the elevation is sampled directly from
 * {@link module:esri/Map#ground Map.ground}. Whether your map is displayed in 2D or 3D, the ground property needs to be set on the map.
 *
 * * {@link module:esri/widgets/ElevationProfile/ElevationProfileLineInput} samples elevation data from the geometry of
 * the input graphic. It is typically used with input line data with z values. If the input line data doesn't have z values, a profile line
 * is also computed if the line is displayed with a non-draped elevation mode. An elevation offset can also be applied.
 * Currently in 2D z values are not fetched from feature based layers, so in a {@link module:esri/views/MapView}
 * this profile line can only be used with client-side graphics with z values.
 *
 * * {@link module:esri/widgets/ElevationProfile/ElevationProfileLineQuery} samples elevation data from the elevation source set in the
 * {@link module:esri/widgets/ElevationProfile/ElevationProfileLineQuery#source source} property. The elevation source can be an
 * {@link module:esri/layers/ElevationLayer} or any object with a method called `queryElevation`, with the same signature as
 * {@link mdoule:esri/layers/ElevationLayer#queryElevation queryElevation}.
 *
 * * {@link module:esri/widgets/ElevationProfile/ElevationProfileLineView} is available only in a
 * {@link module:esri/views/SceneView} and it displays the elevation sampled directly from the view along the input graphic.
 * All volumetric objects in a {@link module:esri/views/SceneView} contribute to the resulting profile.
 *
 * You can choose to display one or several profile lines in the chart, by setting them in the [profiles](#profiles) property.
 *
 * Once all profiles are refined to their maximum resolution, the corresponding 3D profile lines appear in the
 * {@link module:esri/views/SceneView} (currently no lines are displayed in a {@link module:esri/views/MapView}),
 * and {@link module:esri/widgets/ElevationProfile/ElevationProfileLine~ElevationProfileStatistics profile statistics} display in the legend for each profile line.
 * Hovering on the chart shows an overlayed tooltip with elevation values of all profiles,
 * and displays colored dot markers in the 3D view on the matching positions.
 *
 * Checkboxes in the legend allow to hide individual profiles.
 * Chart units can be set via the settings menu to metric, imperial or a specific unit.
 * Click-and-drag on the chart zooms in to a specific part of the profile chart. When zoomed in, click on the minus button to reset zoom.
 *
 * ![elevation-profile-draw](../assets/img/apiref/widgets/elevation-profile/elevation-profile-draw.gif)
 * _Drawing a path to get a ground profile._
 *
 * ![elevation-profile-zline](../assets/img/apiref/widgets/elevation-profile/elevation-profile-zline.png)
 * _Profile generated from a line feature with z-values shows a paraglide track above ground._
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * In 3D {@link module:esri/widgets/ElevationProfile/ElevationProfileLineInput} is not taking into consideration
 * the `featureExpression` set on the {@link module:esri/layers/GraphicsLayer#elevationInfo elevation mode} of the layer.
 * * In 2D z values are not fetched from feature based layers. Therefore,
 * {@link module:esri/widgets/ElevationProfile/ElevationProfileLineInput} can only be used with client-side graphics with z values
 * in a {@link module:esri/views/MapView}.
 * :::
 *
 * @example
 * const elevationProfile = new ElevationProfile({
 *   view: view
 * });
 * // adds the ElevationProfile to the top right corner of the view
 * view.ui.add(elevationProfile, "top-right");
 *
 * @example
 * // elevation profile with all the line profiles
 * const elevationProfile = new ElevationProfile({
 *   view: view,
 *   profiles: [{
 *     // displays elevation values from Map.ground
 *     type: "ground", //autocasts as new ElevationProfileLineGround()
 *     color: "#61d4a4",
 *     title: "Ground elevation"
 *   }, {
 *     // displays elevation values from the input line graphic
 *     type: "input", //autocasts as new ElevationProfileLineInput()
 *     color: "#f57e42",
 *     title: "Line elevation"
 *   }, {
 *     // displays elevation values from a SceneView
 *     type: "view", //autocasts as new ElevationProfileLineView()
 *     color: "#8f61d4",
 *     title: "View elevation"
 *     // by default ground and all layers are used to compute elevation, but
 *     // you can define which elements should be included/excluded from the computation
 *     exclude: [map.ground]
 *   }, {
 *     // displays elevation values from a custom source
 *     type: "query",
 *     source: new ElevationLayer({
 *       url: "https://elevation3d.arcgis.com/arcgis/rest/../Terrain3D/ImageServer"
 *     }),
 *     color: "#d46189",
 *     title: "Custom elevation"
 *   }]
 * });
 * view.ui.add(elevationProfile, "bottom-right");
 *
 * @module esri/widgets/ElevationProfile
 * @since 4.18
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
import { Maybe, isSome, isNone, destroyMaybe, applySome, abortMaybe } from "esri/core/maybe";
import { memoize } from "esri/core/memoize";
import { createTask, Task } from "esri/core/promiseUtils";
import { SystemOrLengthUnit } from "esri/core/unitUtils";
import { init } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { property, subclass, aliasOf } from "esri/core/accessorSupport/decorators";
import { Castable } from "esri/core/accessorSupport/ensureType";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.libs.resize-observer
import ResizeObserver from "esri/libs/resize-observer/ResizeObserver";

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.ElevationProfile
import { CSS } from "esri/widgets/ElevationProfile/css";
import {
  ElevationProfileLineArrayOrCollection,
  ElevationProfileLine
} from "esri/widgets/ElevationProfile/elevationProfileLineTypes";
import ElevationProfileViewModel from "esri/widgets/ElevationProfile/ElevationProfileViewModel";
import ElevationProfileVisibleElements from "esri/widgets/ElevationProfile/ElevationProfileVisibleElements";
import { ChartData, IElevationProfileLine } from "esri/widgets/ElevationProfile/interfaces";

// esri.widgets.ElevationProfile.components
import { Legend, ConstructProperties as LegendProps } from "esri/widgets/ElevationProfile/components/Legend";
import {
  SettingsButton,
  ConstructProperties as SettingsButtonProps
} from "esri/widgets/ElevationProfile/components/SettingsButton";

// esri.widgets.ElevationProfile.support
import { Chart, createChart } from "esri/widgets/ElevationProfile/support/chartUtils";
import {
  PORTRAIT_MODE_PIXEL_BREAKPOINT,
  ElevationProfileState,
  ElevationProfileErrorState,
  LARGE_CHART_SAMPLES
} from "esri/widgets/ElevationProfile/support/constants";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/widgets/ElevationProfile/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, messageBundle, WidgetProperties } from "esri/widgets/support/widget";

interface OptionalConstructProperties {
  view: Maybe<IMapView | ISceneView>;
  input: Maybe<Graphic>;
  profiles: ElevationProfileLineArrayOrCollection;
  unitOptions: SystemOrLengthUnit[];
  unit: SystemOrLengthUnit;
  geodesicDistanceThreshold: number;
  visibleElements: Partial<ElevationProfileVisibleElements>;
}

type ConstructProperties = Partial<OptionalConstructProperties> &
  WidgetProperties<Castable<ElevationProfileViewModel>>;

interface ChartUpdateParams {
  chart: Maybe<Chart>;
  stationary: boolean;
  data: Maybe<ChartData>;
  messages: UnitsMessages & ElevationProfileMessages;
}

const enum Action {
  Sketch = "sketch",
  SketchCancel = "sketch-cancel",
  SketchDone = "sketch-done",
  Select = "select",
  SelectCancel = "select-cancel"
}

interface ActionConfig {
  type: Action;
  disabled?: boolean;
}

const MAIN_ACTIONS: ActionConfig[] = [{ type: Action.Select }, { type: Action.Sketch }];

const ERROR_MESSAGES: Record<
  ElevationProfileErrorState,
  keyof ElevationProfileMessages["errors"] | null
> = {
  [ElevationProfileErrorState.None]: null,
  [ElevationProfileErrorState.NoValidInput]: "noProfile",
  [ElevationProfileErrorState.NoVisibleProfiles]: "noProfile",
  [ElevationProfileErrorState.RefinedButNoChartData]: "noProfile",
  [ElevationProfileErrorState.TooComplex]: "tooComplex",
  [ElevationProfileErrorState.UnknownError]: "unknown",
  [ElevationProfileErrorState.InvalidGeometry]: "invalidGeometry",
  [ElevationProfileErrorState.InvalidElevationInfo]: "invalidElevationInfo"
};

@subclass("esri.widgets.ElevationProfile")
class ElevationProfile extends Widget implements ConstructProperties {
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
  constructor(properties: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);

    if (!properties?.viewModel) {
      this._defaultViewModel = new ElevationProfileViewModel({ view: properties?.view });
      this.viewModel = this._defaultViewModel;
    }
  }

  initialize(): void {
    this._legend = new Legend(this._legendProps);
    this._settingsButton = new SettingsButton(this._settingsButtonProps);

    this.own([
      this.watch("_legendProps", (props: LegendProps) => this._legend.set(props)),
      this.watch("_settingsButtonProps", (props: SettingsButtonProps) =>
        this._settingsButton.set(props)
      )
    ]);
  }

  postInitialize(): void {
    this.own([
      init(this, "_chartContainer", () => {
        this._destroyChart(); // Make sure we don't have an old chart.

        const container = this._chartContainer;
        if (isNone(container)) {
          return;
        }

        this._chartInitTask = createTask((signal) => this._initializeChart(container, signal));
      }),
      init(this, "_chartUpdateParams", () => this._updateChart(this._chartUpdateParams))
    ]);
  }

  destroy(): void {
    this._destroyChart();

    // Only destroy the default VM if it's not the current `viewModel`. Otherwise
    // the Widget will destroy it.
    if (isSome(this._defaultViewModel) && this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }

    this._legend = destroyMaybe(this._legend);
    this._settingsButton = destroyMaybe(this._settingsButton);

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
  view: Maybe<IMapView | ISceneView> = null;

  //------------------------
  // input
  //------------------------

  /**
   * The input line graphic along which elevation will be queried in order to generate an elevation profile.
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
  input: Maybe<Graphic> = null;

  //------------------------
  // profiles
  //------------------------

  /**
   * Collection of elevation profile lines which are to be generated and displayed in the widget's
   * chart. See the different profile line types for details on usage and behavior.
   *
   * Once an elevation profile is generated, each line will contain the raw data used to
   * generate the chart and {@link module:esri/widgets/ElevationProfile/ElevationProfileLine~ElevationProfileStatistics profile statistics}.
   * The order of the profiles within the collection determines the drawing order on the chart.
   *
   * In a {@link module:esri/views/MapView} {@link module:esri/widgets/ElevationProfile/ElevationProfileLineView}
   * is not supported.
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
   *     // displays elevation values from Map.ground
   *     type: "ground", //autocasts as new ElevationProfileLineGround()
   *   }, {
   *     // displays elevation values from the input line graphic
   *     type: "input", //autocasts as new ElevationProfileLineInput()
   *   }, {
   *     // displays elevation values from an elevation source
   *     type: "query", //autocasts as new ElevationProfileLineQuery()
   *     source: elevationLayer
   *   }, {
   *     // displays elevation values from a SceneView
   *     type: "view" //autocasts as new ElevationProfileLineView()
   *   }]
   * });
   */
  @aliasOf("viewModel.profiles")
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
  geodesicDistanceThreshold: number = 100_000;

  //------------------------
  // visibleElements
  //------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   * The visual elements in this widget are the legend, chart, settingsButton, sketchButton, and selectButton.
   * These are all set to true by default.
   *
   * @typedef module:esri/widgets/ElevationProfile~VisibleElements
   *
   * @property {boolean} [legend=true] When set to `false`, the legend (which includes statistics) is not displayed.
   * @property {boolean} [chart=true] When set to `false`, the chart is not displayed.
   * @property {boolean} [clearButton=true] When set to `false` the button used to clear the current elevation profile is not displayed.
   * @property {boolean} [settingsButton=true] When set to `false`, the button used to open the settings popup is not displayed.
   * @property {boolean} [sketchButton=true] When set to `false`, the button used to start drawing/sketchinng is not displayed.
   * @property {boolean} [selectButton=true] When set to `false`, the button used to select a path is not displayed.
   * @property {boolean} [unitSelector=true] When set to `false`, the dropdown used to select the units is not displayed.
   * @property {boolean} [uniformChartScalingToggle=true] When set to `false`, the element used to toggle uniform chart scaling on or off is not displayed.
   */

  /**
   * This property provides the ability to display or hide the individual elements of the widget.
   *
   * @instance
   * @name visibleElements
   * @type {module:esri/widgets/ElevationProfile~VisibleElements}
   * @example
   * elevationProfile.visibleElements = {
   *    legend: true,
   *    chart: true,
   *    clearButton: true,
   *    settingsButton: true,
   *    sketchButton: true,
   *    selectButton: true
   *    uniformChartScalingToggle: true
   * }
   */
  @property({
    type: ElevationProfileVisibleElements,
    nonNullable: true
  })
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
  label: string = undefined;

  //----------------------------------
  //  visible
  //----------------------------------

  /**
   * Indicates whether the widget is visible.
   *
   * @name visible
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.visible")
  visible: boolean;

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

  @property()
  private _chartInitTask: Maybe<Task<any>> = null;

  @property()
  private _chartIsRefined: boolean = false;

  @property()
  private _settingsButton: SettingsButton;

  @property()
  private _legend: Legend;

  private _resizeObserver: Maybe<ResizeObserver> = null;

  @property()
  private _portrait: boolean = false;

  @property()
  private _zoomOutButtonVisible: boolean = false;

  /**
   * Property which collects all the parameters needed to update the chart. This
   * way we can watch only this property and have full type checking, rather
   * than watch each property individually.
   *
   * @ignore
   */
  @property()
  private get _chartUpdateParams(): ChartUpdateParams {
    const view = this.view;

    return this._getChartUpdateParamsMemoized(
      this._chart,
      this.viewModel.chartData,
      isSome(view) ? view.stationary : true,
      this._chartMessages
    );
  }

  private _getChartUpdateParamsMemoized = memoize(
    (
      chart: ChartUpdateParams["chart"],
      data: ChartUpdateParams["data"],
      stationary: ChartUpdateParams["stationary"],
      messages: ChartUpdateParams["messages"]
    ): ChartUpdateParams => ({
      chart,
      data,
      stationary,
      messages
    })
  );

  @property()
  private get _chartMessages(): UnitsMessages & ElevationProfileMessages {
    return { ...this.messagesUnits, ...this.messages };
  }

  @property()
  private get _legendProps(): LegendProps {
    return this._getDetailsPropsMemoized(
      this.viewModel.effectiveUnits,
      // Read from a compute property so we always return the same array unless
      // the collection changes. Otherwise we trigger unnecessary rebuilds of
      // the DetailsItem widgets.
      this._profilesArray
    );
  }

  private _getDetailsPropsMemoized = memoize(
    (
      effectiveUnits: LegendProps["effectiveUnits"],
      profiles: LegendProps["profiles"]
    ): LegendProps => ({
      effectiveUnits,
      profiles
    })
  );

  @property()
  private get _profilesArray(): IElevationProfileLine[] {
    return this.profiles.toArray();
  }

  @property()
  private get _settingsButtonProps(): SettingsButtonProps {
    return {
      viewModel: this.viewModel,
      visibleElements: this.visibleElements
    };
  }

  //----------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //----------------------------------------------------------------------------

  render(): VNode {
    const { viewModel, visible } = this;

    return (
      <div
        key={this}
        class={this.classes({
          [CSS.base]: visible,
          [CSS.esriWidget]: visible,
          [CSS.esriWidgetDisabled]: visible && viewModel.state === "disabled",
          [CSS.portrait]: this._portrait,
          [CSS.refined]: this.viewModel.progress === 1
        })}
        bind={this}
        afterCreate={this._onAfterCreate}
        aria-label={this.messages.widgetLabel}
      >
        {visible && this._renderContentForState()}
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
        return this._renderContentForSelectedState();
      case ElevationProfileState.Created:
        return this._renderContentForCreatedState();
      case ElevationProfileState.Disabled:
        return this._renderContentForReadyState(); // Same as ready, but user won't be able to interact with the widget.
    }
  }

  private _renderContentForReadyState(): VNode {
    const { sketchButton, selectButton } = this.visibleElements;
    const msgs = this.messages;

    let prompt: string;
    if (sketchButton && selectButton) {
      prompt = msgs.readyPrompt;
    } else if (sketchButton) {
      prompt = msgs.readyPromptCreateOnly;
    } else if (selectButton) {
      prompt = msgs.readyPromptSelectOnly;
    } else {
      prompt = msgs.errors?.noProfile;
    }

    return this._renderContent({ prompt, chart: false, actions: MAIN_ACTIONS });
  }

  private _renderContentForSelectingState(): VNode {
    const view = this.view;
    if (isNone(view)) {
      return null;
    }

    const prompt = this.messages[`selectingPrompt-${view.type}`];
    return this._renderContent({
      prompt,
      chart: false,
      actions: [{ type: Action.SelectCancel }]
    });
  }

  private _renderContentForCreatingState(): VNode {
    const { view, viewModel } = this;

    if (isNone(view)) {
      return null;
    }

    const actions = viewModel.hasVertices
      ? [
          { type: Action.SketchCancel },
          { type: Action.SketchDone, disabled: !viewModel.tool.interaction.canStopCreating }
        ]
      : [{ type: Action.Select }, { type: Action.Sketch, disabled: true }];

    if (viewModel.errorState === ElevationProfileErrorState.NoValidInput) {
      const prompt = this.messages[`creatingPrompt-${view.type}`];
      return this._renderContent({
        chart: false,
        actions,
        prompt
      });
    }

    const errorMessage = this._getErrorMessage();
    return errorMessage
      ? this._renderContent({ chart: false, actions, prompt: errorMessage })
      : this._renderContent({ chart: true, actions });
  }

  private _renderContentForSelectedState(): VNode {
    const errorMessage = this._getErrorMessage();
    return errorMessage
      ? this._renderContent({ chart: false, actions: MAIN_ACTIONS, prompt: errorMessage })
      : this._renderContent({ chart: true, actions: MAIN_ACTIONS });
  }

  private _renderContentForCreatedState(): VNode {
    const errorMessage = this._getErrorMessage();
    return errorMessage
      ? this._renderContent({ chart: false, actions: MAIN_ACTIONS, prompt: errorMessage })
      : this._renderContent({ chart: true, actions: MAIN_ACTIONS });
  }

  private _getErrorMessage(): string | null {
    const key = ERROR_MESSAGES[this.viewModel.errorState];
    return this.messages?.errors?.[key];
  }

  private _renderContent(props: {
    prompt?: Maybe<string>;
    chart: boolean;
    actions: ActionConfig[];
  }): VNode {
    const mainContainerNodes: VNode[] = isSome(props.prompt)
      ? this._renderPrompt(props.prompt)
      : props.chart && this._renderChart();

    const hasProfile = isSome(this.viewModel.input);

    return [
      <header key="header" class={CSS.header}>
        {this._zoomOutButtonVisible && this._renderZoomOutButton()}
        {this.visibleElements.clearButton && hasProfile && this._renderClearButton()}
        {this.visibleElements.settingsButton && this._settingsButton.render()}
      </header>,

      <div class={CSS.mainContainer}>{...mainContainerNodes}</div>,

      this.visibleElements.legend && this._legend.render(),
      this._renderActions(props)
    ];
  }

  private _renderZoomOutButton(): VNode {
    return (
      <button
        key="zoom-out"
        class={CSS.zoomOutButton}
        bind={this}
        onclick={this._onZoomOutButtonClick}
        title={this.messages.zoomOut}
      ></button>
    );
  }

  private _onZoomOutButtonClick(): void {
    applySome(this._chart, (chart) => chart.zoomOut());
  }

  private _renderClearButton(): VNode {
    return (
      <button
        key="clear-profile"
        class={CSS.clearButton}
        bind={this}
        onclick={this._onClearButtonClick}
        title={this.messages.clearProfile}
      ></button>
    );
  }

  private _onClearButtonClick(): void {
    this.viewModel.clear();
  }

  private _renderPrompt(message: string): VNode[] {
    return [
      <div key="prompt-container" bind={this} class={CSS.promptContainer}>
        <p>{message}</p>
      </div>
    ];
  }

  private _renderChart(): VNode[] {
    if (!this.visibleElements.chart) {
      return [<div key="empty-chart-container" class={CSS.chartContainer}></div>];
    }

    const chartVisible = this._chartIsRefined || this._canRenderChart();

    if (!chartVisible) {
      // Chart is not visible either because the initial preview hasn't arrived
      // or because it's too complex to render progressively. In such case we
      // show a large spinner instead of the chart, with a delay so that it's
      // only really seen by the user if the chart doesn't appear within a
      // reasonable amount of time.
      return [
        this._renderSpinner({ size: "large" }),
        <div key="chart-container-empty" class={CSS.chartContainer} />
      ];
    }

    // When we do display the chart, it can happen that the profile is still
    // being refined. In such cases we display a smaller spinner to indicate
    // that things are still happening. As with the large spinner above, this
    // one also appears with a delay so it shouldn't be visible when the profile
    // refines quickly enough.
    const { chartData, progress } = this.viewModel;
    const spinnerVisible = isSome(chartData) && progress > 0 && progress < 1;

    return [
      spinnerVisible && this._renderSpinner({ size: chartVisible ? "small" : "large" }),
      <div
        key="chart-container"
        bind={this}
        class={CSS.chartContainer}
        afterCreate={this._onChartContainerAfterCreate}
        afterRemoved={this._onChartContainerRemoved}
      ></div>
    ];
  }

  private _renderSpinner(props: { size: "small" | "large" }): VNode {
    return (
      <div
        key="spinner"
        class={this.classes(CSS.chartSpinner, { [CSS.chartSpinnerSmall]: props.size === "small" })}
        afterCreate={this._onSpinnerAfterCreate}
        exitAnimation={this._onSpinnerExit}
      />
    );
  }

  private _onSpinnerAfterCreate(domNode: HTMLElement): void {
    // Apply the visible class on the next frame so that the CSS transition-delay
    // gets applied and the spinner smoothly fades in.
    requestAnimationFrame(() => domNode.classList.add(CSS.chartSpinnerVisible));
  }

  public _onSpinnerExit(domNode: HTMLElement, removeDomNodeFunction: () => void): void {
    domNode.classList.remove(CSS.chartSpinnerVisible);
    setTimeout(removeDomNodeFunction, 200); // Wait for the animation to complete before telling Maquette remove the node.
  }

  private _canRenderChart(): boolean {
    const data = this.viewModel.chartData;
    if (isNone(data)) {
      return false;
    }

    // When the input path was selected we only show the chart once it's fully
    // generated. No point in showing graudal refinement in such cases and it
    // would only slow down the generation.
    if (!this.viewModel.inputIsSketched) {
      return data.refined;
    }

    // When we have too many samples to display in the chart, we also don't show
    // the chart until it is fully refined so that we don't block the main thread.
    let totalNumSamples = 0;
    for (const { samples } of data.lines) {
      totalNumSamples += isSome(samples) ? samples.length : 0;
    }

    return data.refined || totalNumSamples <= LARGE_CHART_SAMPLES;
  }

  private _renderActions({ actions }: { actions: ActionConfig[] }): VNode {
    const actionNodes = actions
      .map((action): VNode => {
        switch (action.type) {
          case Action.Sketch:
            return (
              this.visibleElements.sketchButton &&
              this._renderAction({
                action,
                onClick: this._onSketchButtonClick,
                className: CSS.sketchButton,
                label: this.messages.sketchButtonLabel
              })
            );
          case Action.SketchCancel:
            return (
              this.visibleElements.sketchButton &&
              this._renderAction({
                action,
                onClick: this._onCancelButtonClick,
                className: CSS.sketchCancelButton,
                label: this.messagesCommon.cancel
              })
            );
          case Action.SketchDone: {
            return (
              this.visibleElements.sketchButton &&
              this._renderAction({
                action,
                onClick: this._onDoneButtonClick,
                className: CSS.sketchDoneButton,
                label: this.messagesCommon.done
              })
            );
          }
          case Action.Select:
            return (
              this.visibleElements.selectButton &&
              this._renderAction({
                action,
                onClick: this._onSelectButtonClick,
                className: CSS.selectButton,
                label: this.messages.selectButtonLabel
              })
            );
          case Action.SelectCancel:
            return (
              this.visibleElements.selectButton &&
              this._renderAction({
                action,
                onClick: this._onCancelButtonClick,
                className: CSS.selectCancelButton,
                label: this.messagesCommon.cancel
              })
            );
        }
      })
      .filter(Boolean); // Make sure we exclude any actions which rendered to null/undefined

    return actionNodes.length ? (
      <footer key="footer" class={CSS.footer}>
        {...actionNodes}
      </footer>
    ) : null;
  }

  private _renderAction({
    action,
    onClick,
    className,
    label
  }: {
    action: ActionConfig;
    onClick: (e: Event) => void;
    className: string;
    label: string;
  }): VNode {
    return (
      <button
        key={`action-${action.type}`}
        class={this.classes(CSS.actionButton, className, {
          [CSS.buttonDisabled]: action.disabled
        })}
        bind={this}
        disabled={action.disabled}
        onclick={onClick}
      >
        {label}
      </button>
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

  private _updateChart(params: ChartUpdateParams): void {
    const { data, chart, messages, stationary } = params;

    if (isNone(chart) || isNone(messages) || !stationary || !this._canRenderChart()) {
      return;
    }

    chart.update(params);
    this._chartIsRefined = isSome(data) && data.refined;
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
      onRangeChange: (zoomFactorX: number, zoomFactorY: number) => {
        this._zoomOutButtonVisible = zoomFactorX !== 1 || zoomFactorY !== 1;
      },
      onCursorPositionChange: (x: Maybe<number>) => {
        this.viewModel.hoveredChartPosition = x;
      }
    });

    this._updateChart(this._chartUpdateParams);
  }

  private _destroyChart(): void {
    this._chartInitTask = abortMaybe(this._chartInitTask);
    this._chart = destroyMaybe(this._chart);
    this._chartIsRefined = false;
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
