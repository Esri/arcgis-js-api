/**
 * The DirectLineMeasurement3D widget calculates and displays the 3D distance between two points.
 * This widget can be used in a {@link module:esri/views/SceneView} to measure the vertical, horizontal,
 * and direct distance between two points.
 *
 * [![measurement-line-3d](../assets/img/apiref/widgets/3D_DirectLineMeasurement_widget.png)](../sample-code/widgets-measurement-3d/index.html)
 *
 * When the widget is active, a horizontal "laser" line is drawn which indicates the height at the current mouse position.
 * This line can help in analyzing the heights of objects relative to each other and the terrain.
 * A second laser line shows the intersection of the scene with the vertical plane that passes through the checkered line.
 *
 * DirectLineMeasurement3D widget labels the direct, horizontal, and vertical orange distance lines and displays the same values
 * in the UI panel. In a WGS84 or WebMercator scene, when the distance between the points is greater than 100 km,
 * DirectLineMeasurement3D widget switches to displaying only the Horizontal and Vertical distances taking into consideration
 * the curvature of the earth (i.e. ellipsoid-based geodesic distance).
 *
 * ![measurement-line-3d](../assets/img/apiref/widgets/direct-line-measurement-3d.png)
 *
 * This widget is designed to work with 3D SceneViews. For measurements with 2D MapViews, use
 * {@link module:esri/widgets/DistanceMeasurement2D}.
 *
 * @example
 * let measurementWidget = new DirectLineMeasurement3D({
 *   view: view
 * });
 *
 * view.ui.add(measurementWidget, "top-right");
 *
 * @module esri/widgets/DirectLineMeasurement3D
 * @since 4.6
 *
 * @see [DirectLineMeasurement3D.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/DirectLineMeasurement3D.tsx)
 * @see [DirectLineMeasurement3D.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_DirectLineMeasurement3D.scss)
 * @see [Sample - Measurement in 3D](../sample-code/widgets-measurement-3d/index.html)
 * @see {@link module:esri/widgets/DirectLineMeasurement3D/DirectLineMeasurement3DViewModel}
 * @see {@link module:esri/widgets/AreaMeasurement3D}
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
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.views.3d.layers
import "../views/3d/layers/DirectLineMeasurementLayerView3D";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.DirectLineMeasurement3D
import DirectLineMeasurement3DViewModel from "esri/widgets/DirectLineMeasurement3D/DirectLineMeasurement3DViewModel";

// esri.widgets.DirectLineMeasurement3D.t9n
import DirectLineMeasurement3DMessages from "esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx } from "esri/widgets/support/widget";

type DirectLineMeasurement3DUIStrings = Partial<
  Pick<DirectLineMeasurement3DMessages, "widgetLabel" | "hint" | "newMeasurement">
>;

const BASE = "esri-direct-line-measurement-3d";

const CSS = {
  // common
  buttonDisabled: "esri-button--disabled",

  // base
  base: `${BASE} esri-widget esri-widget--panel`,

  // container
  container: `${BASE}__container`,

  // hint
  hint: `${BASE}__hint`,
  hintText: `${BASE}__hint-text`,
  panelError: `${BASE}__panel--error`,

  // measurement
  measurement: `${BASE}__measurement`,
  measurementItem: `${BASE}__measurement-item`,
  measurementItemDisabled: `${BASE}__measurement-item--disabled`,
  measurementItemTitle: `${BASE}__measurement-item-title`,
  measurementItemValue: `${BASE}__measurement-item-value`,

  // units
  settings: `${BASE}__settings`,
  units: `${BASE}__units`,
  unitsLabel: `${BASE}__units-label`,
  unitsSelect: `${BASE}__units-select esri-select`,
  unitsSelectWrapper: `${BASE}__units-select-wrapper`,

  // actions
  actionSection: `${BASE}__actions`,
  newMeasurementButton: `${BASE}__clear-button esri-button esri-button--primary`,

  // icon
  widgetIcon: "esri-icon-measure-line"
};

@subclass("esri.widgets.DirectLineMeasurement3D")
class DirectLineMeasurement3D extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/DirectLineMeasurement3D
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * let measurementWidget = new DirectLineMeasurement3D({
   *   view: view
   * });
   */
  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
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
  view: IMapView | ISceneView = null;

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
  override visible: boolean = null;

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
  override iconClass = CSS.widgetIcon;

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
  override label: string = undefined;

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
  @messageBundle("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")
  messages: DirectLineMeasurement3DMessages = null;

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
  @messageBundle("esri/core/t9n/Units")
  messagesUnits: UnitsMessages = null;

  //----------------------------------
  //  uiStrings
  //----------------------------------

  /**
   * @todo documentation
   */
  @property()
  override uiStrings?: DirectLineMeasurement3DUIStrings;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/DirectLineMeasurement3D/DirectLineMeasurement3DViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @since 4.7
   * @type {module:esri/widgets/DirectLineMeasurement3D/DirectLineMeasurement3DViewModel}
   * @autocast
   */
  @property({ type: DirectLineMeasurement3DViewModel })
  override viewModel = new DirectLineMeasurement3DViewModel();

  //----------------------------------
  //  unitOptions
  //----------------------------------
  /**
   * List of unit systems (imperial, metric) and specific units for displaying the distance values.
   *
   * @name unitOptions
   * @instance
   * @since 4.7
   * @type {module:esri/core/units~SystemOrLengthUnit[]}
   */
  @aliasOf("viewModel.unitOptions")
  unitOptions: SystemOrLengthUnit[] = null;

  //----------------------------------
  //  unit
  //----------------------------------
  /**
   * Unit system (imperial, metric) or specific unit used for displaying the distance values.
   *
   * @name unit
   * @instance
   * @since 4.8
   * @type {module:esri/core/units~SystemOrLengthUnit}
   */
  @aliasOf("viewModel.unit")
  unit: SystemOrLengthUnit = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  override render(): VNode {
    const { supported, active, state, measurement, unit } = this.viewModel;
    const isDisabled = state === "disabled";
    const isReady = state === "ready";
    const isMeasuring = state === "measuring" || state === "measured";
    const { messages, messagesUnits } = this;

    const hintNode =
      active && isReady ? (
        <section key="esri-direct-line-measurement-3d__hint" class={CSS.hint}>
          <p class={CSS.hintText}>{messages.hint}</p>
        </section>
      ) : null;

    const unsupportedNode = !supported ? (
      <section key="esri-direct-line-measurement-3d__unsupported" class={CSS.panelError}>
        <p>{messages.unsupported}</p>
      </section>
    ) : null;

    const measurementLabelNode = (
      title: string,
      value: DirectLineMeasurement3DViewModel.MeasurementValue,
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
      }
    };

    const measurementNode = isMeasuring ? (
      <section key="esri-direct-line-measurement-3d__measurement" class={CSS.measurement}>
        {measurementLabelNode(messages.direct, measurement.directDistance, "direct")}
        {measurementLabelNode(messages.horizontal, measurement.horizontalDistance, "horizontal")}
        {measurementLabelNode(messages.vertical, measurement.verticalDistance, "vertical")}
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

    const unitsNode = (
      <section key="esri-direct-line-measurement-3d__units" class={CSS.units}>
        {unitsLabelNode}
        {unitsSelectNode}
      </section>
    );

    const settingsNode = isMeasuring ? (
      <div key="settings" class={CSS.settings}>
        {unitsNode}
      </div>
    ) : null;

    const newMeasurementNode =
      supported && (!active || isMeasuring) ? (
        <div class={CSS.actionSection}>
          <button
            disabled={isDisabled}
            class={this.classes(CSS.newMeasurementButton, isDisabled && CSS.buttonDisabled)}
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
      <div key={this} class={CSS.base} role="presentation">
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
      this.unit = selected.value as SystemOrLengthUnit;
    }
  }
}

export default DirectLineMeasurement3D;
