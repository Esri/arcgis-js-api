/**
 * The AreaMeasurement3D widget calculates and displays the area and perimeter of a polygon.
 * This widget can be used in a {@link module:esri/views/SceneView} to measure the area and perimeter of a polygon.
 *
 * [![measurement-line-3d](../../assets/img/apiref/widgets/3D_AreaMeasurement_widget.png)](../sample-code/widgets-measurement-3d/index.html)
 *
 * When the widget is active, a horizontal "laser" line is drawn which indicates the height at the current mouse position.
 * This line can help in analyzing the heights of objects relative to each other and the terrain.
 *
 * This widget is designed to work with 3D SceneViews. For measurements with 2D MapViews, use
 * {@link module:esri/widgets/AreaMeasurement2D}.
 *
 * @example
 * var measurementWidget = new AreaMeasurement3D({
 *   view: view
 * });
 *
 * view.ui.add(measurementWidget, "top-right");
 *
 * @module esri/widgets/AreaMeasurement3D
 * @since 4.7
 *
 * @see [AreaMeasurement3D.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/AreaMeasurement3D.tsx)
 * @see [AreaMeasurement3D.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_AreaMeasurement3D.scss)
 * @see [Sample - Measurement in 3D](../sample-code/widgets-measurement-3d/index.html)
 * @see {@link module:esri/widgets/AreaMeasurement3D/AreaMeasurement3DViewModel}
 * @see {@link module:esri/widgets/DirectLineMeasurement3D}
 * @see {@link module:esri/views/View#ui View.ui}
 * @see {@link module:esri/views/ui/DefaultUI}
 */

// esri.core
import { ignoreAbortErrors } from "esri/core/promiseUtils";
import { isMeasurementSystem, SystemOrAreaUnit } from "esri/core/unitUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.views
import MapView from "esri/views/MapView";
import SceneView from "esri/views/SceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.AreaMeasurement3D
import AreaMeasurement3DViewModel from "esri/widgets/AreaMeasurement3D/AreaMeasurement3DViewModel";

// esri.widgets.AreaMeasurement3D.t9n
import AreaMeasurement3DMessages from "esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  // common
  button: "esri-button esri-button--secondary",
  buttonDisabled: "esri-button--disabled",
  // base
  base: "esri-area-measurement-3d",
  widget: "esri-widget",
  panel: "esri-widget--panel",
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
  clearButton: "esri-area-measurement-3d__clear-button",
  // icon
  widgetIcon: "esri-icon-measure-area"
};

@subclass("esri.widgets.AreaMeasurement3D")
class AreaMeasurement3D extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/AreaMeasurement3D
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var measurementWidget = new AreaMeasurement3D({
   *   view: view
   * });
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
  view: MapView | SceneView = null;

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
  visible: boolean = null;

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
  @messageBundle("esri/widgets/AreaMeasurement3D/t9n/AreaMeasurement3D")
  messages: AreaMeasurement3DMessages = null;

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
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/AreaMeasurement3D/AreaMeasurement3DViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/AreaMeasurement3D/AreaMeasurement3DViewModel}
   * @autocast
   */
  @property({
    type: AreaMeasurement3DViewModel
  })
  @renderable([
    "viewModel.state",
    "viewModel.unitOptions",
    "viewModel.unit",
    "viewModel.measurement"
  ])
  viewModel: AreaMeasurement3DViewModel = new AreaMeasurement3DViewModel();

  //----------------------------------
  //  unitOptions
  //----------------------------------

  /**
   * List of available units and unit systems (imperial, metric) for displaying the area values.
   *
   * @name unitOptions
   * @instance
   * @type {module:esri/core/units~SystemOrAreaUnit[]}
   */
  @aliasOf("viewModel.unitOptions")
  unitOptions: SystemOrAreaUnit[] = null;

  //----------------------------------
  //  unit
  //----------------------------------
  /**
   * Unit system (imperial, metric) or specific unit used for displaying the area values.
   *
   * @name unit
   * @instance
   * @since 4.8
   * @type {module:esri/core/units~SystemOrAreaUnit}
   */

  @aliasOf("viewModel.unit")
  unit: SystemOrAreaUnit = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { isSupported, active: isActive, measurement, state, unit } = this.viewModel;
    const isDisabled = state === "disabled";
    const isReady = state === "ready";
    const isMeasuring = state === "measuring" || state === "measured";
    const { messages, messagesUnits } = this;

    const hintNode =
      isActive && isReady ? (
        <section key="esri-area-measurement-3d__hint" class={CSS.hint}>
          <p class={CSS.hintText}>{messages.hint}</p>
        </section>
      ) : null;

    const unsupportedNode = !isSupported ? (
      <section key="esri-area-measurement-3d__unsupported" class={CSS.panelError}>
        <p>{messages.unsupported}</p>
      </section>
    ) : null;

    const measurementLabelNode = (
      title: string,
      value: AreaMeasurement3DViewModel.MeasurementValue,
      key: string
    ) => {
      switch (value.state) {
        case "available":
          return (
            <div key={`${key}-enabled`} class={CSS.measurementItem}>
              <span class={CSS.measurementItemTitle}>{title}</span>
              <span class={CSS.measurementItemValue}>{value.text}</span>
            </div>
          );

        case "unavailable":
          return (
            <div
              key={`${key}-disabled`}
              class={this.classes(CSS.measurementItem, CSS.measurementItemDisabled)}
            >
              <span class={CSS.measurementItemTitle}>{title}</span>
            </div>
          );

        case "invalid":
          return (
            <div key={`${key}-enabled`} class={CSS.measurementItem}>
              <span class={CSS.measurementItemTitle}>{title}</span>
              <span class={CSS.measurementItemValue}>{messages.notApplicable}</span>
            </div>
          );
      }
    };

    const measurementNode = isMeasuring ? (
      <section key="esri-area-measurement-3d__measurement" class={CSS.measurement}>
        {measurementLabelNode(messages.area, measurement.area, "area")}
        {measurementLabelNode(
          messages.perimeterLength,
          measurement.perimeterLength,
          "perimeter-length"
        )}
      </section>
    ) : null;

    const unitsId = `${this.id}__units`;

    const unitsLabelNode = (
      <label class={CSS.unitsLabel} for={unitsId}>
        {messages.unit}
      </label>
    );

    const unitsSelectNode = (
      <div class={CSS.unitsSelectWrapper}>
        <select
          class={CSS.unitsSelect}
          id={unitsId}
          onchange={this._changeUnit}
          bind={this}
          value={unit}
        >
          {this.viewModel.unitOptions.map((unitOption) => (
            <option key={unitOption} value={unitOption}>
              {isMeasurementSystem(unitOption)
                ? messagesUnits.systems[unitOption]
                : messagesUnits.units[unitOption]?.pluralCapitalized}
            </option>
          ))}
        </select>
      </div>
    );

    const unitsNode = isMeasuring ? (
      <section key="esri-area-measurement-3d__units" class={CSS.units}>
        {unitsLabelNode}
        {unitsSelectNode}
      </section>
    ) : null;

    const settingsNode = isMeasuring ? (
      <div key="settings" class={CSS.settings}>
        {unitsNode}
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
            type="button"
          >
            {messages.newMeasurement}
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

    return (
      <div key="" class={this.classes(CSS.base, CSS.widget, CSS.panel)} role="presentation">
        {containerNode}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _newMeasurement(): void {
    ignoreAbortErrors(this.viewModel.start());
  }

  @accessibleHandler()
  private _changeUnit(event: Event): void {
    const target = event.target as HTMLSelectElement;

    const selected = target.options[target.selectedIndex];

    if (selected) {
      this.unit = selected.value as SystemOrAreaUnit;
    }
  }
}

export default AreaMeasurement3D;
