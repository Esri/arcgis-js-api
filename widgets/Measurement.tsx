/**
 * The Measurement widget groups and manages multiple measurement tools and allows you to easily switch between them using
 * the [activeTool](#activeTool) property. The tools correspond to the measurement widgets for area and distance in 2D
 * ({@link module:esri/widgets/AreaMeasurement2D}, {@link module:esri/widgets/DistanceMeasurement2D}) and in 3D
 * ({@link module:esri/widgets/AreaMeasurement3D}, {@link module:esri/widgets/DirectLineMeasurement3D}).
 *
 * This widget follows a composite pattern that allows developers to configure the UI to best match their specific requirements.
 * The measurement tools, placements, and icons can all be configured, which offers great flexibility to use with tabbed
 * interfaces or other customized UI. See the [Measurement widget sample](../sample-code/widgets-measurement/index.html)
 * for an example of this flexibility.
 *
 * [![measurement-widget](../assets/img/apiref/widgets/measurement_widget_2D_distance_3D_area.png)](../sample-code/widgets-measurement/index.html)
 *
 * For 2D MapViews, distances are computed geodetically for geographic coordinate systems and web mercator.
 * For non-web mercator projected coordinate systems, computations will be performed planimetrically for distances
 * up to the threshold distance defined by the `geodesicDistanceThreshold` property of the widget's ViewModel.
 * Distances equivalent to and beyond the threshold will be computed geodetically. By default the threshold is set to 100km.
 *
 * For 3D SceneViews, the mode in which distances are computed is either `euclidean` or `geodesic`.
 * In `euclidean` mode, the distances are measured as straight lines in the ECEF coordinate system.
 * In `geodesic` mode, the distances are measured as geodesic lines on the WGS84 ellipsoid.
 *
 * @module esri/widgets/Measurement
 * @since 4.13
 *
 * @see [Measurement.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Measurement.tsx)
 * @see [Measurement.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Measurement.scss)
 * @see module:esri/widgets/Measurement/MeasurementViewModel
 * @see [Sample - Measurement widget](../sample-code/widgets-measurement/index.html)
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/widgets/AreaMeasurement2D
 * @see module:esri/widgets/DistanceMeasurement2D
 * @see module:esri/widgets/AreaMeasurement3D
 * @see module:esri/widgets/DirectLineMeasurement3D
 *
 * @example
 * // Add the measurement widget to the upper right hand corner
 * // with the distance tool active
 * const map = new Map({
 *   basemap: "hybrid"
 * });
 *
 * const view = new MapView({
 *   container: "viewDiv",
 *   map: map,
 *   center: [-71.69, 43.76],
 *   zoom: 15
 * });
 *
 * const measurement = new Measurement({
 *   view: view,
 *   activeTool: "distance"
 * });
 * view.ui.add(measurement, "top-right");
 *
 * // Switch between area and distance measurement
 * function switchTool() {
 *  const tool = measurement.activeTool === "distance" ? "area" : "distance";
 *  measurement.activeTool = tool;
 * }
 *
 */

// esri.core
import { neverReached } from "esri/core/compilerUtils";
import { ignoreAbortErrors } from "esri/core/promiseUtils";
import { SystemOrAreaUnit, SystemOrLengthUnit } from "esri/core/unitUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import AreaMeasurement2D from "esri/widgets/AreaMeasurement2D";
import AreaMeasurement3D from "esri/widgets/AreaMeasurement3D";
import DirectLineMeasurement3D from "esri/widgets/DirectLineMeasurement3D";
import DistanceMeasurement2D from "esri/widgets/DistanceMeasurement2D";
import Widget from "esri/widgets/Widget";

// esri.widgets.Measurement
import { MeasurementComponentType } from "esri/widgets/Measurement/interfaces";
import MeasurementViewModel from "esri/widgets/Measurement/MeasurementViewModel";

// esri.widgets.Measurement.t9n
import MeasurementMessages from "esri/widgets/Measurement/t9n/Measurement";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { messageBundle, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-measurement",
  widgetIcon: "esri-icon-measure"
};

type MeasurementProperties = Partial<
  Pick<
    Measurement,
    "activeTool" | "activeWidget" | "areaUnit" | "linearUnit" | "view" | "viewModel"
  >
>;

type MeasurementLocaleStrings = DeepPartial<
  Pick<MeasurementMessages, "widgetLabel"> & {
    "area-2d": AreaMeasurement2D["localeStrings"];
    "distance-2d": DistanceMeasurement2D["localeStrings"];
    "area-3d": AreaMeasurement3D["localeStrings"];
    "direct-line-3d": DirectLineMeasurement3D["localeStrings"];
  }
>;

type MeasurementWidget =
  | AreaMeasurement2D
  | AreaMeasurement3D
  | DirectLineMeasurement3D
  | DistanceMeasurement2D;

function isAreaMeasurement(
  widget: MeasurementWidget
): widget is AreaMeasurement2D | AreaMeasurement3D {
  return (
    widget &&
    (widget.declaredClass === "esri.widgets.AreaMeasurement2D" ||
      widget.declaredClass === "esri.widgets.AreaMeasurement3D")
  );
}

@subclass("esri.widgets.Measurement")
class Measurement extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Measurement
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(properties?: MeasurementProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    if (this.activeWidget) {
      this.viewModel.set("activeViewModel", this.activeWidget.viewModel);
    }

    if (this.view && this.activeTool) {
      this._getActiveWidget().then((widget) => {
        this._set("activeWidget", widget);
      });
    }

    this.own([
      this.watch(["view", "activeTool"], () => {
        this._getActiveWidget().then((widget) => {
          this._set("activeWidget", widget);
        });
      }),
      this.watch("activeWidget", (newWidget, oldWidget) => {
        this.viewModel.set("activeViewModel", newWidget ? newWidget.viewModel : null);
        if (oldWidget) {
          oldWidget.visible = false;
        }
      }),
      this.watch(["areaUnit", "linearUnit", "localeStrings"], () =>
        this._updateSubWidgetProperties()
      )
    ]);
  }

  destroy(): void {
    this._destroyWidgets();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _widgets = new Map<MeasurementComponentType, MeasurementWidget>();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeTool
  //----------------------------------

  /**
   * Specifies the current measurement tool to display. Setting its value to `area` activates
   * the area measurement tool and it works for both {@link module:esri/views/MapView} and
   * {@link module:esri/views/SceneView}. To measure distance in a {@link module:esri/views/MapView}
   * set the property to `distance` and in a {@link module:esri/views/SceneView} set it to `direct-line`.
   * If this property is not set, the widget will not be displayed.
   *
   * @name activeTool
   * @instance
   * @type {"area" | "distance" | "direct-line"}
   * @default null
   *
   * @example
   * // To create the Measurement widget with SceneView's direct-line tool active.
   * const measurement = new Measurement({
   *   view: view,
   *   activeTool: "direct-line"
   * });
   *
   * // To switch between direct line and area measurement tools
   * function switchTool() {
   *  const tool = measurement.activeTool === "direct-line" ? "area" : "direct-line";
   *  measurement.activeTool = tool;
   * }
   */
  @aliasOf("viewModel.activeTool")
  activeTool: MeasurementComponentType = null;

  // ----------------------------------
  //  activeWidget
  // ----------------------------------

  /**
   * The measurement widget that is currently being used. Use this property to
   * get access to the active widget.
   *
   * @name activeWidget
   * @instance
   * @readonly
   * @type {module:esri/widgets/AreaMeasurement2D|module:esri/widgets/AreaMeasurement3D|module:esri/widgets/DirectLineMeasurement3D|module:esri/widgets/DistanceMeasurement2D}
   * @default null
   *
   * @example
   * // Print the active widget to the console.
   * const measurement = new Measurement({
   *   view: view,
   *   activeTool: "distance"
   * });
   * view.ui.add(measurement, "top-right");
   * console.log("Active Widget: ", measurement.activeWidget);
   */
  @property({ readOnly: true })
  readonly activeWidget: MeasurementWidget = null;

  // ----------------------------------
  //  areaUnit
  // ----------------------------------

  /**
   * Unit system (imperial, metric) or specific unit used for displaying the area values.
   *
   * @name areaUnit
   * @instance
   * @type {module:esri/core/units~SystemOrAreaUnit}
   *
   * @example
   * // To create the Measurement widget that displays area in square US feet
   * const measurement = new Measurement({
   *   view: view,
   *   activeTool: "area",
   *   unit: "square-us-feet"
   * });
   *
   * // To display the current measurement unit
   * console.log("Current unit: ", measurement.unit);
   */
  @aliasOf("viewModel.areaUnit")
  areaUnit: SystemOrAreaUnit = null;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   * @readonly
   */
  @property()
  iconClass: string = CSS.widgetIcon;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label. This property is useful whenever the widget is controlled by another one
   * (e.g. {@link module:esri/widgets/Expand}).
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  // ----------------------------------
  //  linearUnit
  // ----------------------------------

  /**
   * Unit system (imperial, metric) or specific unit used for displaying the distance values.
   *
   * @name linearUnit
   * @instance
   * @type {module:esri/core/units~SystemOrLengthUnit}
   *
   * @example
   * // To create the Measurement widget that displays distance in yards
   * const measurement = new Measurement({
   *   view: view,
   *   activeTool: "distance",
   *   linearUnit: "yards"
   * });
   *
   * // To display the current measurement unit
   * console.log('Current linear unit: ', measurement.linearUnit);
   */
  @aliasOf("viewModel.linearUnit")
  linearUnit: SystemOrLengthUnit = null;

  //----------------------------------
  //  localeStrings
  //----------------------------------

  @property()
  localeStrings: MeasurementLocaleStrings;

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
  @messageBundle("esri/widgets/Measurement/t9n/Measurement")
  messages: MeasurementMessages = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}.
   * Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type { module:esri/views/MapView | module:esri/views/SceneView }
   *
   * @example
   * // To create the Measurement widget for SceneView with the direct-line tool active.
   * const measurement = new Measurement({
   *   view: sceneView,
   *   activeTool: "direct-line"
   * });
   */
  @aliasOf("viewModel.view")
  view: IMapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Measurement/MeasurementViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Measurement/MeasurementViewModel}
   * @autocast
   *
   * @example
   * // Intialize a measurement widget using the view model.
   * const measurement = new Measurement({
   *   viewModel: {
   *     view: view,
   *     activeTool: "distance",
   *     unit: "yards"
   *   }
   * });
   */
  @property({
    type: MeasurementViewModel
  })
  viewModel: MeasurementViewModel = new MeasurementViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { activeWidget } = this;
    const widget = activeWidget && !activeWidget.destroyed ? activeWidget.render() : null;
    return <div class={CSS.base}>{widget}</div>;
  }

  /**
   * Removes all measurement widgets and associated graphics.
   *
   * @method clear
   * @instance
   */
  clear(): void {
    this.activeTool = null;
    this._destroyWidgets();
  }

  /**
   * Starts a new measurement for the active measurement widget.
   *
   * @method startMeasurement
   * @instance
   *
   * @example
   * const measurement = new Measurement({
   *   view: view,
   *   activeTool: "distance"
   * });
   *
   * function measure () {
   *   measurement.startMeasurement();
   * }
   *
   * measure();
   */
  startMeasurement(): void {
    const { activeViewModel } = this.viewModel;
    activeViewModel && ignoreAbortErrors(activeViewModel.start());
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private async _createWidget(activeTool: MeasurementComponentType): Promise<MeasurementWidget> {
    const { areaUnit, linearUnit, view } = this;
    switch (activeTool) {
      case "area": {
        const { type } = view;
        switch (type) {
          case "2d": {
            const AreaMeasurement2D = (await import("./AreaMeasurement2D")).default;
            return new AreaMeasurement2D({
              view,
              unit: areaUnit,
              localeStrings: this._createLocaleStringsForWidget(activeTool)
            });
          }
          case "3d": {
            const AreaMeasurement3D = (await import("./AreaMeasurement3D")).default;
            return new AreaMeasurement3D({
              view,
              unit: areaUnit,
              localeStrings: this._createLocaleStringsForWidget(activeTool)
            });
          }
          default:
            neverReached(type);
            return null;
        }
      }
      case "distance": {
        const DistanceMeasurement2D = (await import("./DistanceMeasurement2D")).default;
        return new DistanceMeasurement2D({
          view,
          unit: linearUnit,
          localeStrings: this._createLocaleStringsForWidget(activeTool)
        });
      }
      case "direct-line": {
        const DirectLineMeasurement3D = (await import("./DirectLineMeasurement3D")).default;
        return new DirectLineMeasurement3D({
          view,
          unit: linearUnit,
          localeStrings: this._createLocaleStringsForWidget(activeTool)
        });
      }
      default:
        neverReached(activeTool);
        return null;
    }
  }

  private _destroyWidgets(): void {
    this._widgets.forEach((widget) => widget.destroy());
    this._widgets.clear();
  }

  private async _getActiveWidget(): Promise<MeasurementWidget> {
    const { activeTool, view } = this;
    if (!view || !activeTool) {
      return null;
    }

    let widget: MeasurementWidget = null;
    if (this._widgets.has(activeTool)) {
      widget = this._widgets.get(activeTool);
      widget.visible = true;
    } else {
      widget = await this._createWidget(activeTool);
      if (!widget) {
        return null;
      }

      await widget.viewModel.start();

      this._widgets.set(activeTool, widget);
    }
    return widget;
  }

  private _createLocaleStringsForWidget(
    type: MeasurementComponentType
  ):
    | AreaMeasurement2D["localeStrings"]
    | AreaMeasurement3D["localeStrings"]
    | DirectLineMeasurement3D["localeStrings"]
    | DistanceMeasurement2D["localeStrings"] {
    if (!this.localeStrings) {
      return null;
    }
    const key = (type + "-" + this.view.type) as
      | "area-2d"
      | "distance-2d"
      | "area-3d"
      | "direct-line-3d";

    return this.localeStrings[key];
  }

  private _updateSubWidgetProperties(): void {
    this._widgets.forEach((widget, type) => {
      const { areaUnit, linearUnit } = this;
      widget.unit = isAreaMeasurement(widget) ? areaUnit : linearUnit;
      widget.localeStrings = this._createLocaleStringsForWidget(type);
    });
  }
}

export default Measurement;
