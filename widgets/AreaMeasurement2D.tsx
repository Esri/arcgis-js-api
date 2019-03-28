/**
 * The AreaMeasurement2D widget calculates and displays the area and perimeter of a polygon in a
 * {@link module:esri/views/MapView}. When the perimeter is less
 * than 100 km, the default {@link module:esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel#mode mode}
 * is `planar`. When the perimeter is greater than or equal to 100 km, the default
 * {@link module:esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel#mode mode} is `geodesic`.
 *
 * [![measurement-area-2d](../../assets/img/apiref/widgets/AreaMeasurement2D_screenshot.png)](../sample-code/widgets-measurement-2d/index.html)
 *
 * ### Undo / Redo
 *
 * Gesture | Action |
 * ---------|---------|
 * Z | Incrementally undos actions recorded in the stack. |
 * R | Incrementally redos actions recorded in the stack. |
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * This widget is designed to work with 2D MapViews. For measurements with 3D SceneViews, use
 * {@link module:esri/widgets/AreaMeasurement3D}.
 *
 * :::
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

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/AreaMeasurement2D/nls/AreaMeasurement2D";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import View = require("esri/views/View");

// esri.widgets
import { AreaUnit, MeasurementMode } from "esri/widgets/interfaces";
import Widget = require("esri/widgets/Widget");

// esri.widgets.AreaMeasurement2D
import AreaMeasurement2DViewModel = require("esri/widgets/AreaMeasurement2D/AreaMeasurement2DViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  // common
  button: "esri-button esri-button--secondary",
  buttonDisabled: "esri-button--disabled",
  widgetIcon: "esri-icon-description",
  // base
  base: "esri-area-measurement-3d esri-widget esri-widget--panel",
  // container
  container: "esri-area-measurement-3d__container",
  // hint
  hint: "esri-area-measurement-3d__hint",
  hintText: "esri-area-measurement-3d__hint-text",
  panelError: "esri-area-measurement-3d__panel--error",
  // measurement
  measurement: "esri-area-measurement-3d__measurement",
  measurementItem: "esri-area-measurement-3d__measurement-item",
  measurementItemDisabled: "esri-area-measurement-3d__measurement-item--disabled",
  measurementItemTitle: "esri-area-measurement-3d__measurement-item-title",
  measurementItemValue: "esri-area-measurement-3d__measurement-item-value",
  // units
  settings: "esri-area-measurement-3d__settings",
  units: "esri-area-measurement-3d__units",
  unitsLabel: "esri-area-measurement-3d__units-label",
  unitsSelect: "esri-area-measurement-3d__units-select esri-select",
  unitsSelectWrapper: "esri-area-measurement-3d__units-select-wrapper",
  // clear
  actionSection: "esri-area-measurement-3d__actions",
  clearButton: "esri-area-measurement-3d__clear-button"
};

@subclass("esri.widgets.AreaMeasurement2D")
class AreaMeasurement2D extends declared(Widget) {
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
  constructor(params?: any) {
    super();
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
  @property()
  label: string = i18n.title;

  //----------------------------------
  //  unit
  //----------------------------------

  /**
   * Unit system (imperial, metric) or specific unit used for displaying the area values.
   *
   * **Possible Values:** metric | imperial | square-inches | square-feet | square-us-feet | square-yards | square-miles | square-meters | square-kilometers | acres | ares | hectares
   *
   * @name unit
   * @instance
   * @type {string}
   * @tstype "metric" | "imperial" | "square-inches" | "square-feet" | "square-us-feet" | "square-yards" | "square-miles" | "square-meters" | "square-kilometers" | "acres" | "ares" | "hectares"
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
  unit: AreaUnit = null;

  //----------------------------------
  //  unitOptions
  //----------------------------------

  /**
   * List of available units and unit systems (imperial, metric) for displaying the area values.
   * By default, the following units are included: `metric`, `imperial`, `square-inches`, `square-feet`, `square-us-feet`, `square-yards`, `square-miles`, `square-meters`, `square-kilometers`, `acres`, `ares`, `hectares`.
   *
   * @name unitOptions
   * @instance
   * @type {string[]}
   * @example
   *
   * // To display the available units to the console
   * var measurementWidget = new AreaMeasurement2D({
   *   view: view
   * });
   * console.log("All units: ", measurementWidget.unitOptions.join(", "));
   */
  @aliasOf("viewModel.unitOptions")
  unitOptions: AreaUnit[] = null;

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
  view: View = null;

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
   *     mode: "planar",
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
    const isSupported = this.viewModel.isSupported;
    const isActive = this.viewModel.active;
    const isDisabled = this.viewModel.state === "disabled";
    const isReady = this.viewModel.state === "ready";
    const isMeasuring = this.viewModel.state === "measuring" || this.viewModel.state === "measured";
    const label = this.viewModel.measurementLabel;

    const hintNode =
      isActive && isReady ? (
        <section key="hint" class={CSS.hint}>
          <p class={CSS.hintText}>{i18n.hint}</p>
        </section>
      ) : null;

    const unsupportedNode = !isSupported ? (
      <section key="unsupported" class={CSS.panelError}>
        <p>{i18n.unsupported}</p>
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
        {measurementLabelNode(i18n.area, label.area, "area")}
        {measurementLabelNode(i18n.perimeter, label.perimeter, "perimeter")}
      </section>
    ) : null;

    const unitsId = `${this.id}__units`;

    const unitsNode = (
      <section key="units" class={CSS.units}>
        <label class={CSS.unitsLabel} for={unitsId}>
          {i18n.unit}
        </label>
        <div class={CSS.unitsSelectWrapper}>
          <select
            class={CSS.unitsSelect}
            id={unitsId}
            onchange={this._changeUnit}
            bind={this}
            value={this.viewModel.unit}
          >
            {this.viewModel.unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {i18n.units[unit]}
              </option>
            ))}
          </select>
        </div>
      </section>
    );

    const modesId = `${this.id}__modes`;

    const modesNode = (
      <section key="modes" class={CSS.units}>
        <label class={CSS.unitsLabel} for={modesId}>
          {i18n.mode}
        </label>
        <div class={CSS.unitsSelectWrapper}>
          <select
            class={CSS.unitsSelect}
            id={modesId}
            onchange={this._changeMode}
            bind={this}
            value={this.viewModel.mode}
          >
            {this.viewModel.modes.map((mode) => (
              <option key={mode} value={mode}>
                {i18n.modes[mode]}
              </option>
            ))}
          </select>
        </div>
      </section>
    );

    const settingsNode = isMeasuring ? (
      <div key="settings" class={CSS.settings}>
        {unitsNode}
        {modesNode}
      </div>
    ) : null;

    const newMeasurementNode =
      isSupported && (!isActive || isMeasuring) ? (
        <div class={CSS.actionSection}>
          <button
            disabled={isDisabled}
            class={this.classes(CSS.button, CSS.clearButton, isDisabled && CSS.buttonDisabled)}
            bind={this}
            onclick={this._newMeasurement}
            title={i18n.newMeasurement}
            aria-label={i18n.newMeasurement}
          >
            {i18n.newMeasurement}
          </button>
        </div>
      ) : null;

    const containerNode = this.visible ? (
      <div class={CSS.container}>
        {unsupportedNode}
        {hintNode}
        {settingsNode}
        {measurementNode}
        {newMeasurementNode}
      </div>
    ) : null;

    return <div class={CSS.base}>{containerNode}</div>;
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
    this.viewModel.newMeasurement();
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
      this.viewModel.unit = selected.value as AreaUnit;
    }
  }

  /**
   * Called when the user selects a new computational mode from the dropdown menu.
   * @private
   */
  @accessibleHandler()
  private _changeMode(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selected = target.options[target.selectedIndex];
    if (selected) {
      this.viewModel.mode = selected.value as MeasurementMode;
    }
  }
}

export = AreaMeasurement2D;
