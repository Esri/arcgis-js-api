/**
 * The AreaMeasurement2D widget calculates and displays the area and perimeter of a polygon in a
 * {@link module:esri/views/MapView}. The widget will compute areas and perimeters geodetically
 * for geographic coordinate systems and web mercator. For projected coordinate systems (non-web mercator),
 * computations will be performed planimetrically for distances up to the threshold distance defined by
 * the {@link module:esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel#geodesicDistanceThreshold geodesicDistanceThreshold}.
 * Perimeters equivalent to and beyond the threshold will be computed geodetically. By default the threshold is set to 100km.
 *
 * [![measurement-area-2d](../../assets/img/apiref/widgets/AreaMeasurement2D_widget.png)](../sample-code/widgets-measurement-2d/index.html)
 *
 * ### Undo / Redo
 *
 * Gesture | Action |
 * ---------|---------|
 * Z | Incrementally undos actions recorded in the stack. |
 * R | Incrementally redos actions recorded in the stack. |
 *
 * This widget is designed to work with 2D MapViews. For measurements with 3D SceneViews, use
 * {@link module:esri/widgets/AreaMeasurement3D}.
 *
 * @example
 *
 * // To add the AreaMeasurement2D widget to your map
 * var measurementWidget = new AreaMeasurement2D({
 *   view: view
 * });
 * view.ui.add(measurementWidget, "top-right");
 *
 * @module esri/widgets/AreaMeasurement2D
 * @since 4.10
 *
 * @see [AreaMeasurement2D.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/AreaMeasurement2D.tsx)
 * @see [AreaMeasurement2D.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_AreaMeasurement3D.scss)
 * @see [Sample - Measurement in 2D](../sample-code/widgets-measurement-2d/index.html)
 * @see {@link module:esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel}
 * @see {@link module:esri/widgets/DistanceMeasurement2D}
 * @see {@link module:esri/views/View#ui View.ui}
 * @see {@link module:esri/views/ui/DefaultUI}
 */

// esri.core
import { ignoreAbortErrors } from "esri/core/promiseUtils";
import { SystemOrAreaUnit } from "esri/core/unitUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.AreaMeasurement2D
import AreaMeasurement2DViewModel = require("esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel");

// esri.widgets.AreaMeasurement2D.t9n
import AreaMeasurement2DMessages from "esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  // common
  button: "esri-button esri-button--secondary",
  buttonDisabled: "esri-button--disabled",
  widgetIcon: "esri-icon-measure-area",
  // base
  base: "esri-area-measurement-2d",
  widget: "esri-widget",
  panel: "esri-widget--panel",
  // container
  container: "esri-area-measurement-2d__container",
  // hint
  hint: "esri-area-measurement-2d__hint",
  hintText: "esri-area-measurement-2d__hint-text",
  panelError: "esri-area-measurement-2d__panel--error",
  // measurement
  measurement: "esri-area-measurement-2d__measurement",
  measurementItem: "esri-area-measurement-2d__measurement-item",
  measurementItemDisabled: "esri-area-measurement-2d__measurement-item--disabled",
  measurementItemTitle: "esri-area-measurement-2d__measurement-item-title",
  measurementItemValue: "esri-area-measurement-2d__measurement-item-value",
  // units
  settings: "esri-area-measurement-2d__settings",
  units: "esri-area-measurement-2d__units",
  unitsLabel: "esri-area-measurement-2d__units-label",
  unitsSelect: "esri-area-measurement-2d__units-select esri-select",
  unitsSelectWrapper: "esri-area-measurement-2d__units-select-wrapper",
  // clear
  actionSection: "esri-area-measurement-2d__actions",
  clearButton: "esri-area-measurement-2d__clear-button"
};

@subclass("esri.widgets.AreaMeasurement2D")
class AreaMeasurement2D extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  /**
   * @constructor
   * @alias module:esri/widgets/AreaMeasurement2D
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of
   *                                all the properties that may be passed into the constructor.
   * @example
   *
   * // Typical usage
   * var measurementWidget = new AreaMeasurement2D({
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
  active: boolean = null;

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
  @messageBundle("esri/widgets/AreaMeasurement2D/t9n/AreaMeasurement2D")
  messages: AreaMeasurement2DMessages = null;

  //----------------------------------
  //  unit
  //----------------------------------

  /**
   * Unit system (imperial, metric) or specific unit used for displaying the area values.
   *
   * @name unit
   * @instance
   * @type {"metric" | "imperial" | "square-inches" | "square-feet" | "square-us-feet" | "square-yards" | "square-miles" | "square-meters" | "square-kilometers" | "acres" | "ares" | "hectares"}
   * @example
   *
   * // To create the AreaMeasurement2D widget that displays area in square US feet
   * var measurementWidget = new AreaMeasurement2D({
   *   view: view,
   *   unit: "square-us-feet"
   * });
   *
   * // To display the current measurement unit
   * console.log("Current unit: ", measurementWidget.unit);
   */
  @aliasOf("viewModel.unit")
  unit: SystemOrAreaUnit = null;

  //----------------------------------
  //  unitOptions
  //----------------------------------

  /**
   * List of available units and unit systems (imperial, metric) for displaying the area values.
   *
   * @name unitOptions
   * @instance
   * @type {Array<"metric" | "imperial" | "square-inches" | "square-feet" | "square-us-feet" | "square-yards" | "square-miles" | "square-meters" | "square-kilometers" | "acres" | "ares" | "hectares">}
   * @example
   *
   * // To display the available units to the console
   * var measurementWidget = new AreaMeasurement2D({
   *   view: view
   * });
   * console.log("All units: ", measurementWidget.unitOptions.join(", "));
   */
  @aliasOf("viewModel.unitOptions")
  unitOptions: SystemOrAreaUnit[] = null;

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
   * {@link module:esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel}
   * class to access all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel}
   * @autocast
   * @example
   *
   * // Use the ViewModel to access and set advanced settings
   * var measurementWidget = new AreaMeasurement2D({
   *   viewModel: {
   *     view: view,
   *     unit: "square-us-feet"
   *   }
   * });
   * view.ui.add(measurementWidget, "top-right");
   */
  @property({
    type: AreaMeasurement2DViewModel
  })
  @renderable([
    "viewModel.state",
    "viewModel.unitOptions",
    "viewModel.unit",
    "viewModel.measurementLabel"
  ])
  viewModel: AreaMeasurement2DViewModel = new AreaMeasurement2DViewModel();

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
    const { id, viewModel, visible } = this;
    const { active, isSupported, measurementLabel, state, unit, unitOptions } = viewModel;

    const isDisabled = state === "disabled";
    const isReady = state === "ready";
    const isMeasuring = state === "measuring" || state === "measured";
    const { messages } = this;

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
        {measurementLabelNode(messages.area, measurementLabel.area, "area")}
        {measurementLabelNode(messages.perimeter, measurementLabel.perimeter, "perimeter")}
      </section>
    ) : null;

    const unitsId = `${id}__units`;

    const unitsNode = (
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
                {messages.units[unitOption]}
              </option>
            ))}
          </select>
        </div>
      </section>
    );

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
            type="button"
            aria-label={messages.newMeasurement}
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
      this.viewModel.unit = selected.value as SystemOrAreaUnit;
    }
  }
}

export = AreaMeasurement2D;
