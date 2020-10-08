/**
 * The BuildingExplorer widget is used to filter and explore the various components of
 * {@link module:esri/layers/BuildingSceneLayer BuildingSceneLayers}.
 * {@link module:esri/layers/BuildingSceneLayer BuildingSceneLayers} are complex digital models
 * of buildings and interiors and can contain thousands of components grouped in sublayers.
 * Using this widget, buildings can be filtered by level, construction phase or by disciplines and categories.
 * Three elements are used to filter {@link module:esri/layers/BuildingSceneLayer BuildingSceneLayers}:
 * the Level element, the Construction phases element and the Disciplines are Categories list.
 * The visibility of these elements can be configured using the widget's [visibleElements](#visibleElements).
 *
 * [![building-explorer](../../assets/img/apiref/widgets/building-explorer.png)](../sample-code/building-scene-layer-filter/index.html)
 *
 * The {@link module:esri/layers/BuildingSceneLayer BuildingSceneLayers} to be explored
 * have to be set on the [layers](#layers) property of the widget. When setting multiple layers, the filters set
 * by the widget will be applied on all layers. The widget doesn't allow the user to select between multiple
 * {@link module:esri/layers/BuildingSceneLayer BuildingSceneLayers} in a
 * {@link module:esri/views/SceneView SceneView}.
 *
 * Often, {@link module:esri/layers/BuildingSceneLayer BuildingSceneLayers}
 * contain an overview {@link module:esri/layers/buildingSublayers/BuildingComponentSublayer} that serves as an exterior shell
 * and views the building model as a single feature. When a layer is added to the BuildingExplorer widget, the visibility of the overview
 * layer is turned off, so that the user can interact with the individual features in the full model
 * {@link module:esri/layers/buildingSublayers/BuildingGroupSublayer}.
 *
 * The Level element of the BuildingExplorer widget allows to select a single level in one or several buildings.
 * When selecting a level, the levels above it are hidden and the levels below it become semi-transparent for added visual context.
 *
 * Some {@link module:esri/layers/BuildingSceneLayer BuildingSceneLayers} include information indicating the phase when the components
 * were created, and optionally, when they were demolished. If a layer has multiple construction phases, these will be displayed in
 * the Construction phases element. When selecting a construction phase, all the components created
 * during or before the phase are selected. Demolished components aren't displayed.
 *
 * Discipline layers are {@link module:esri/layers/buildingSublayers/BuildingGroupSublayer group layers} that organize the
 * {@link module:esri/layers/BuildingSceneLayer} content into architectural,
 * structural, mechanical, or electrical groups. These layers contain a number of Category
 * layers such as walls, windows, furniture, and lighting fixtures. These layers can be turned on and off in the
 * Disciplines and Categories list.
 *
 * The widget can only display filters set by the widget itself. Filters set by other applications will be ignored.
 *
 * @example
 * const buildingExplorer = new BuildingExplorer({
 *   view: view,
 *   layers: [buildingSceneLayer]
 * });
 * // adds the BuildingExplorer to the top right corner of the SceneView
 * view.ui.add(buildingExplorer, "top-right");
 *
 * @module esri/widgets/BuildingExplorer
 * @since 4.16
 *
 * @see [Sample - BuildingExplorer widget](../sample-code/building-scene-layer-filter/index.html)
 * @see [BuildingExplorer.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/BuildingExplorer.tsx)
 * @see [BuildingExplorer.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_BuildingExplorer.scss)
 * @see module:esri/widgets/BuildingExplorer/BuildingExplorerViewModel
 */

// esri.core
import Collection = require("esri/core/Collection");
import Handles = require("esri/core/Handles");
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { property, subclass, cast, aliasOf } from "esri/core/accessorSupport/decorators";

// esri.layers
import BuildingSceneLayer = require("esri/layers/BuildingSceneLayer");

// esri.t9n
import CommonMessages from "esri/t9n/common";

// esri.views
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.BuildingExplorer
import BuildingExplorerViewModel = require("esri/widgets/BuildingExplorer/BuildingExplorerViewModel");

// esri.widgets.BuildingExplorer.BuildingDisciplinesTree
import BuildingDisciplinesTree = require("esri/widgets/BuildingExplorer/BuildingDisciplinesTree/BuildingDisciplinesTree");

// esri.widgets.BuildingExplorer.BuildingLevelPicker
import BuildingLevelPicker = require("esri/widgets/BuildingExplorer/BuildingLevelPicker/BuildingLevelPicker");

// esri.widgets.BuildingExplorer.BuildingPhasePicker
import BuildingPhasePicker = require("esri/widgets/BuildingExplorer/BuildingPhasePicker/BuildingPhasePicker");

// esri.widgets.BuildingExplorer.t9n
import BuildingExplorerMessages from "esri/widgets/BuildingExplorer/t9n/BuildingExplorer";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { tsx, renderable, messageBundle } from "esri/widgets/support/widget";

interface VisibleElements {
  levels?: boolean;
  phases?: boolean;
  disciplines?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  levels: true,
  phases: true,
  disciplines: true
};

interface ConstructionParameters {
  view: SceneView;
  viewModel?: BuildingExplorerViewModel;
  toggleSiblingsVisibility?: boolean;
}

const BASE = "esri-building-explorer";

const CSS = {
  esriWidget: "esri-widget",
  esriWidgetDisabled: "esri-widget--disabled",
  esriHeading: "esri-widget__heading",
  esriIconLoadingIndicator: "esri-icon-loading-indicator",
  esriRotating: "esri-rotating",
  widgetIcon: "esri-icon-organization",

  base: `${BASE} esri-widget--panel`,
  panelError: `${BASE}__panel--error`,
  loadingContainer: `${BASE}__loading-container`,
  content: `${BASE}__content`,
  section: `${BASE}__section`,
  levels: `${BASE}__levels`,
  phases: `${BASE}__phases`,
  disciplines: `${BASE}__disciplines`
};

@subclass("esri.widgets.BuildingExplorer")
class BuildingExplorer extends Widget implements ConstructionParameters {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/BuildingExplorer
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(params?: ConstructionParameters, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this._handles.add([
      watchUtils.init(this, "viewModel.level", () => {
        this._levelPicker.viewModel = this.viewModel.level;
      }),
      watchUtils.init(this, "viewModel.phase", () => {
        this._phasePicker.viewModel = this.viewModel.phase;
      }),
      watchUtils.init(this, "viewModel.disciplines", () => {
        this._disciplinesTree.viewModel = this.viewModel.disciplines;
      }),
      watchUtils.init(this, "messages", () => {
        this._levelPicker.messages = this.messages?.level;
        this._phasePicker.messages = this.messages?.phase;
        this._disciplinesTree.messages = this.messages?.disciplines;
      }),
      watchUtils.init(this, "toggleSiblingsVisibility", () => {
        this._disciplinesTree.toggleSiblingsVisibility = this.toggleSiblingsVisibility;
      })
    ]);
  }

  destroy(): void {
    this._handles.destroy();
    this._levelPicker.destroy();
    this._phasePicker.destroy();
    this._disciplinesTree.destroy();

    if (this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  private _defaultViewModel = new BuildingExplorerViewModel();

  /**
   * The view model for this widget. This is a class that contains all the logic (properties and methods)
   * that controls this widget's behavior. See the {@link module:esri/widgets/BuildingExplorer/BuildingExplorerViewModel}
   * class to access all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/BuildingExplorer/BuildingExplorerViewModel}
   * @autocast
   */
  @property({ type: BuildingExplorerViewModel })
  @renderable(["state", "level.state", "phase.state", "disciplines.state"])
  viewModel: BuildingExplorerViewModel = this._defaultViewModel;

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
   * A {@link module:esri/Collection collection} of layers of type {@link module:esri/layers/BuildingSceneLayer}
   * that are added to the widget for exploration. The widget is only displayed when this property is set.
   * In case of multiple layers, the widget will display and apply the filters on all layers.
   *
   * @name layers
   * @instance
   * @type {module:esri/core/Collection<module:esri/layers/BuildingSceneLayer>}
   */
  @aliasOf("viewModel.layers")
  layers: Collection<BuildingSceneLayer> = null;

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef module:esri/widgets/BuildingExplorer~VisibleElements
   *
   * @property {boolean} [levels=true] When set to `false`, the building levels filter is not displayed.
   * @property {boolean} [phases=true] When set to `false`, the construction phases filter is not displayed.
   * @property {boolean} [disciplines=true] When set to `false`, the disciplines and categories sublayer list is not displayed.
   */

  /**
   * This property provides the ability to display or hide the individual elements of the widget.
   * BuildingExplorer has three elements: buildings levels filter, construction phases filter and the sublayers list.
   * By default they are all displayed. In case the {@link module:esri/layers/BuildingSceneLayer} doesn't provide
   * {@link module:esri/layers/support/BuildingSummaryStatistics field statistics}
   * information, then the filters for building levels and construction phases will not be displayed.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/BuildingExplorer~VisibleElements}
   * @autocast
   *
   * @example
   * // only display the building levels filter
   * buildingExplorer.visibleElements = {
   *   phases: false,
   *   disciplines: false
   * };
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
  @messageBundle("esri/widgets/BuildingExplorer/t9n/BuildingExplorer")
  messages: BuildingExplorerMessages = null;

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
   * If true, when toggling a toggling a sublayer while the CTRL key is pressed,
   * we'll toggle also the siblings.
   *
   * @ignore
   */
  @property({ nonNullable: true })
  @renderable()
  toggleSiblingsVisibility: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  private _handles = new Handles();

  /**
   * Widget used to display and select the level.
   *
   * @private
   */
  @property()
  @renderable()
  private _levelPicker = new BuildingLevelPicker();

  /**
   * Widget used to display and select the building phase.
   *
   * @private
   */
  @property()
  @renderable()
  private _phasePicker = new BuildingPhasePicker();

  /**
   * Widget used to display the Disciplines & Categories of all the components
   * of the building.
   *
   * @private
   */
  @property()
  @renderable()
  private _disciplinesTree = new BuildingDisciplinesTree();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const disabled = this.viewModel.state === "disabled" || !this.viewModel.isSupported;

    return (
      <div
        key={this}
        class={this.classes(CSS.esriWidget, CSS.base, { [CSS.esriWidgetDisabled]: disabled })}
        aria-label={this.messages.widgetLabel}
      >
        {this._renderContent()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Renders the main content of the building explorer.
   *
   * @private
   */
  private _renderContent(): VNode {
    if (!this.viewModel.isSupported) {
      return <p class={CSS.panelError}>{this.messages.unsupported}</p>;
    }

    if (!this.viewModel.layers.length) {
      return <p class={CSS.panelError}>{this.messages.noData}</p>;
    }

    switch (this.viewModel.state) {
      case "loading":
        return this._renderLoadingIndicator();
      case "ready":
        return (
          <div key="content" class={CSS.content}>
            {this._renderLevelPickerSection()}
            {this._renderPhasePickerSection()}
            {this._renderDisciplinesSection()}
          </div>
        );
      case "failed":
        return <p class={CSS.panelError}>{this.messages.failed}</p>;
      default:
        return null;
    }
  }

  /**
   * Renders a loading indicator to be used when the building explorer is loading.
   *
   * @private
   */
  private _renderLoadingIndicator(): VNode {
    return (
      <div
        key="loading-container"
        role="presentation"
        class={CSS.loadingContainer}
        aria-label={this.messagesCommon.loading}
        title={this.messagesCommon.loading}
      >
        <span
          aria-hidden="true"
          class={this.classes(CSS.esriIconLoadingIndicator, CSS.esriRotating)}
        />
      </div>
    );
  }

  /**
   * Renders the "Levels" section, if is is visible.
   *
   * @private
   */
  private _renderLevelPickerSection(): VNode {
    const levelVM = this.viewModel.level;
    const ready = levelVM.state === "ready";
    const canSwitchLevels = levelVM.allowedValues.length > 1;
    if (!this.visibleElements.levels || !ready || !canSwitchLevels) {
      return [];
    }

    return (
      <div key="levels" class={this.classes(CSS.section, CSS.levels)}>
        <h4 class={CSS.esriHeading}>{this.messages.level.title}</h4>
        {this._levelPicker.render()}
      </div>
    );
  }

  /**
   * Renders the "Phases" section, if is is visible.
   *
   * @private
   */
  private _renderPhasePickerSection(): VNode {
    const phaseVM = this.viewModel.phase;
    const ready = phaseVM.state === "ready";
    const canSwitchPhases = phaseVM.allowedValues.length > 1;
    if (!this.visibleElements.phases || !ready || !canSwitchPhases) {
      return [];
    }

    return (
      <div key="phases" class={this.classes(CSS.section, CSS.phases)}>
        <h4 class={CSS.esriHeading}>{this.messages.phase.title}</h4>
        {this._phasePicker.render()}
      </div>
    );
  }

  /**
   * Renders the "Disciplines & Categories" section, if is is visible.
   *
   * @private
   */
  private _renderDisciplinesSection(): VNode {
    const disciplinesVM = this.viewModel.disciplines;
    const ready = disciplinesVM.state === "ready";
    const hasDisciplines = disciplinesVM.root.hasChildren;

    if (!this.visibleElements.disciplines || !ready || !hasDisciplines) {
      return [];
    }

    return (
      <div key="disciplines" class={this.classes(CSS.section, CSS.disciplines)}>
        <h4 class={CSS.esriHeading}>{this.messages.disciplines.title}</h4>
        {this._disciplinesTree.render()}
      </div>
    );
  }
}

export = BuildingExplorer;
