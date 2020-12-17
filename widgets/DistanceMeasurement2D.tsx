/**
 * The DistanceMeasurement2D widget calculates and displays the distance between two or more points
 * in a {@link module:esri/views/MapView}. The widget will compute distances geodetically
 * for geographic coordinate systems and web mercator. For projected coordinate systems (non-web mercator),
 * computations will be performed planimetrically for distances up to the threshold distance defined by
 * {@link module:esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel#geodesicDistanceThreshold geodesicDistanceThreshold}.
 * Distances equivalent to and beyond the threshold will be computed geodetically. By default the threshold is set to 100km.
 *
 * [![measurement-line-2d](../../assets/img/apiref/widgets/DistanceMeasurement2D_widget.png)](../sample-code/widgets-measurement-2d/index.html)
 *
 * ### Undo / Redo
 *
 * Gesture | Action |
 * ---------|---------|
 * Z | Incrementally undos actions recorded in the stack. |
 * R | Incrementally redos actions recorded in the stack. |
 *
 * This widget is designed to work with 2D MapViews. For measurements with 3D SceneViews, use
 * {@link module:esri/widgets/DirectLineMeasurement3D}.
 *
 * @example
 *
 * // To add the DistanceMeasurement2D widget to the map
 * var measurementWidget = new DistanceMeasurement2D({
 *   view: view
 * });
 * view.ui.add(measurementWidget, "top-right");
 *
 * @module esri/widgets/DistanceMeasurement2D
 * @since 4.10
 *
 * @see [DistanceMeasurement2D.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/DistanceMeasurement2D.tsx)
 * @see [DistanceMeasurement2D.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_DirectLineMeasurement3D.scss)
 * @see [Sample - Measurement in 2D](../sample-code/widgets-measurement-2d/index.html)
 * @see {@link module:esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel}
 * @see {@link module:esri/widgets/AreaMeasurement2D}
 * @see {@link module:esri/views/View#ui View.ui}
 * @see {@link module:esri/views/ui/DefaultUI}
 */

// esri.core
import { ignoreAbortErrors } from "esri/core/promiseUtils";
import { isMeasurementSystem, SystemOrLengthUnit } from "esri/core/unitUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.views
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.DistanceMeasurement2D
import DistanceMeasurement2DViewModel from "esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel";

// esri.widgets.DistanceMeasurement2D.t9n
import DistanceMeasurement2DMessages from "esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  // common
  button: "esri-button esri-button--secondary",
  buttonDisabled: "esri-button--disabled",
  widgetIcon: "esri-icon-measure-line",
  // base
  base: "esri-distance-measurement-2d",
  widget: "esri-widget",
  panel: "esri-widget--panel",
  // container
  container: "esri-distance-measurement-2d__container",
  // hint
  hint: "esri-distance-measurement-2d__hint",
  hintText: "esri-distance-measurement-2d__hint-text",
  panelError: "esri-distance-measurement-2d__panel--error",
  // measurement
  measurement: "esri-distance-measurement-2d__measurement",
  measurementItem: "esri-distance-measurement-2d__measurement-item",
  measurementItemDisabled: "esri-distance-measurement-2d__measurement-item--disabled",
  measurementItemTitle: "esri-distance-measurement-2d__measurement-item-title",
  measurementItemValue: "esri-distance-measurement-2d__measurement-item-value",
  // units
  settings: "esri-distance-measurement-2d__settings",
  units: "esri-distance-measurement-2d__units",
  unitsLabel: "esri-distance-measurement-2d__units-label",
  unitsSelect: "esri-distance-measurement-2d__units-select esri-select",
  unitsSelectWrapper: "esri-distance-measurement-2d__units-select-wrapper",
  // clear
  actionSection: "esri-distance-measurement-2d__actions",
  clearButton: "esri-distance-measurement-2d__clear-button"
};

@subclass("esri.widgets.DistanceMeasurement2D")
class DistanceMeasurement2D extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  /**
   * @constructor
   * @alias module:esri/widgets/DistanceMeasurement2D
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of
   *                                all the properties that may be passed into the constructor.
   * @example
   *
   * // To add the DistanceMeasurement2D widget to the map
   * var measurementWidget = new DistanceMeasurement2D({
   *   view: view
   * });
   * view.ui.add(measurementWidget, "top-right");
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  active
  //----------------------------------

  /**
   * Indicates whether the widget is active.
   *
   * @name active
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.active")
  @renderable()
  active: boolean;

  //----------------------------------
  //  iconClass
  //----------------------------------

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
   * The widget's default label.
   *
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
  @messageBundle("esri/widgets/DistanceMeasurement2D/t9n/DistanceMeasurement2D")
  messages: DistanceMeasurement2DMessages = null;

  //----------------------------------
  //  messagesUnits
  //----------------------------------

  /**
   * @name messagesUnits
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/core/t9n/Units")
  messagesUnits: UnitsMessages = null;

  //----------------------------------
  //  unit
  //----------------------------------

  /**
   * Unit system (imperial, metric) or specific unit used for displaying the distance values.
   *
   * @name unit
   * @instance
   * @type {module:esri/core/units~SystemOrLengthUnit}
   * @example
   *
   * // To create the DistanceMeasurement2D widget that displays distance in yards
   * var measurementWidget = new DistanceMeasurement2D({
   *   view: view,
   *   unit: "yards"
   * });
   *
   * // To display the current measurement unit
   * console.log('Current unit: ', measurementWidget.unit);
   */
  @aliasOf("viewModel.unit")
  unit: SystemOrLengthUnit = null;

  //----------------------------------
  //  unitOptions
  //----------------------------------

  /**
   * List of available units and unit systems (imperial, metric) for displaying the distance values.
   *
   * @name unitOptions
   * @instance
   * @type {module:esri/core/units~SystemOrLengthUnit[]}
   * @example
   *
   * // To display the available units to the console
   * var measurementWidget = new DistanceMeasurement2D({
   *   view: view
   * });
   * console.log('All units: ', measurementWidget.unitOptions.join(", "));
   */
  @aliasOf("viewModel.unitOptions")
  unitOptions: SystemOrLengthUnit[] = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView}. Set this to link the widget
   * to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView}
   * @example
   *
   * // Typical usage
   * var measurementWidget = new DistanceMeasurement2D({
   *   view: view
   * });
   * view.ui.add(measurementWidget, "top-right");
   */
  @aliasOf("viewModel.view")
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel}
   * class to access all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/DistanceMeasurement2D/DistanceMeasurement2DViewModel}
   * @autocast
   * @example
   *
   * // Use the ViewModel to access and set advanced settings
   * var measurementWidget = new DistanceMeasurement2D({
   *   viewModel: {
   *     view: view,
   *     unit: "feet"
   *   }
   * });
   * view.ui.add(measurementWidget, "top-right");
   */
  @property({
    type: DistanceMeasurement2DViewModel
  })
  @renderable([
    "viewModel.state",
    "viewModel.unitOptions",
    "viewModel.unit",
    "viewModel.measurementLabel"
  ])
  viewModel: DistanceMeasurement2DViewModel = new DistanceMeasurement2DViewModel();

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
  @renderable()
  visible: boolean;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { id, messages, messagesUnits, viewModel, visible } = this;
    const { active, isSupported, measurementLabel, state, unit, unitOptions } = viewModel;

    const isDisabled = state === "disabled";
    const isReady = state === "ready";
    const isMeasuring = state === "measuring" || state === "measured";

    const hintNode =
      active && isReady ? (
        <section key="hint" class={CSS.hint}>
          <p class={CSS.hintText}>{messages.hint}</p>
        </section>
      ) : null;

    const unsupportedNode = !isSupported ? (
      <section key="unsupported" class={CSS.panelError}>
        <p>{messages.unsupported}</p>
      </section>
    ) : null;

    const measurementLabelNode = (title: string, value: string, key: string) =>
      value ? (
        <div key={`${key}-enabled`} class={CSS.measurementItem}>
          <span class={CSS.measurementItemTitle}>{title}</span>
          <span class={CSS.measurementItemValue}>{value}</span>
        </div>
      ) : (
        <div
          key={`${key}-disabled`}
          class={this.classes(CSS.measurementItem, CSS.measurementItemDisabled)}
          aria-disabled="true"
        >
          <span class={CSS.measurementItemTitle}>{title}</span>
        </div>
      );

    const measurementNode = isMeasuring ? (
      <section key="measurement" class={CSS.measurement}>
        {measurementLabelNode(messages.distance, measurementLabel, "distance")}
      </section>
    ) : null;

    const unitsId = `${id}-units`;

    const unitsNode = isMeasuring ? (
      <section key="units" class={CSS.units}>
        <label class={CSS.unitsLabel} for={unitsId}>
          {messages.unit}
        </label>
        <div class={CSS.unitsSelectWrapper}>
          <select
            class={CSS.unitsSelect}
            id={unitsId}
            onchange={this._changeUnit}
            bind={this}
            value={unit}
          >
            {unitOptions.map((unitOption) => (
              <option key={unitOption} value={unitOption}>
                {isMeasurementSystem(unitOption)
                  ? messagesUnits.systems[unitOption]
                  : messagesUnits.units[unitOption]?.pluralCapitalized}
              </option>
            ))}
          </select>
        </div>
      </section>
    ) : null;

    const settingsNode = isMeasuring ? (
      <div key="settings" class={CSS.settings}>
        {unitsNode}
      </div>
    ) : null;

    const newMeasurementNode =
      isSupported && (!active || isMeasuring) ? (
        <div class={CSS.actionSection}>
          <button
            disabled={isDisabled}
            class={this.classes(CSS.button, CSS.clearButton, isDisabled && CSS.buttonDisabled)}
            bind={this}
            onclick={this._newMeasurement}
            title={messages.newMeasurement}
            aria-label={messages.newMeasurement}
            type="button"
          >
            {messages.newMeasurement}
          </button>
        </div>
      ) : null;

    const containerNode = visible ? (
      <div class={CSS.container}>
        {unsupportedNode}
        {hintNode}
        {settingsNode}
        {measurementNode}
        {newMeasurementNode}
      </div>
    ) : null;

    return <div class={this.classes(CSS.base, CSS.widget, CSS.panel)}>{containerNode}</div>;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Starts a new measurement.
   * @private
   */
  @accessibleHandler()
  private _newMeasurement(): void {
    ignoreAbortErrors(this.viewModel.start());
  }

  /**
   * Called when the user selects a new linear unit from the dropdown menu.
   * @private
   */
  @accessibleHandler()
  private _changeUnit(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selected = target.options[target.selectedIndex];
    if (selected) {
      this.viewModel.unit = selected.value as SystemOrLengthUnit;
    }
  }
}

export default DistanceMeasurement2D;
