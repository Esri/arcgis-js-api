/**
 * The Legend widget displays labels and symbols for layers in a map.
 * Labels and their corresponding symbols depend on the values set in the
 * {@link module:esri/renderers/Renderer} of the layer.
 * The legend will only display layers and sublayers that are
 * visible in the view.
 *
 * The legend automatically updates when
 *  - the visibility of a layer or sublayer changes
 *  - a layer is added or removed from the map
 *  - a layer's `renderer`, `opacity`, or `title` is changed
 *  - the `legendEnabled` property is changed (set to `true` or `false` on the layer)
 *
 * [![widgets-legend-basic](../assets/img/apiref/widgets/widgets-legend-basic.png)](../sample-code/sandbox/sandbox.html?sample=widgets-legend)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * Legend does not support the following layer types:
 * {@link module:esri/layers/ElevationLayer},
 * {@link module:esri/layers/IntegratedMeshLayer},
 * {@link module:esri/layers/KMLLayer},
 * {@link module:esri/layers/OpenStreetMapLayer},
 * {@link module:esri/layers/GraphicsLayer},
 * {@link module:esri/layers/GeoRSSLayer},
 * {@link module:esri/layers/VectorTileLayer}, and
 * {@link module:esri/layers/WebTileLayer}
 * * {@link module:esri/symbols/Symbol3D  3D symbols} with more than one
 * {@link module:esri/symbols/Symbol3DLayer symbol layer} are not supported.
 * :::
 *
 * @example
 * var legend = new Legend({
 *   view: view,
 *   layerInfos: [{
 *     layer: featureLayer,
 *     title: "Legend"
 *   }]
 * });
 *
 * view.ui.add(legend, "bottom-right");
 *
 * @module esri/widgets/Legend
 * @since 4.0
 *
 * @see [Sample - Legend widget](../sample-code/widgets-legend/index.html)
 * @see [Legend.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Legend.js)
 * @see [Legend.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Legend.scss)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />


// dojo
import * as i18n from "dojo/i18n!./Legend/nls/Legend";

// esri.core
import Collection = require("../core/Collection");
import Handles = require("../core/Handles");
import watchUtils = require("../core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, subclass, declared, property } from "../core/accessorSupport/decorators";

// esri.views
import MapView = require("../views/MapView");
import SceneView = require("../views/SceneView");

// esri.widgets
import { LayerInfo } from "./interfaces";
import Widget = require("./Widget");

// esri.widgets.Legend
import LegendViewModel = require("./Legend/LegendViewModel");

// esri.widgets.Legend.styles
import Card = require("./Legend/styles/Card");
import Classic = require("./Legend/styles/Classic");

// esri.widgets.Legend.support
import ActiveLayerInfo = require("./Legend/support/ActiveLayerInfo");

// esri.widgets.support
import { renderable } from "./support/widget";

const CSS = {
  widgetIcon: "esri-icon-layer-list"
};

type Style = "classic" | "card";

@subclass("esri.widgets.Legend")
class Legend extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Legend
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var legend = new Legend({
   *   view: view
   * });
   */
  constructor(params?: any) {
    super();
  }

  postInitialize() {
    this._updateStyleRenderer(this.style);

    this.own(
      watchUtils.on(this, "activeLayerInfos", "change", () => {
        return this._refreshActiveLayerInfos(this.activeLayerInfos);
      })
    );
  }

  destroy() {
    this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles = new Handles();

  private _styleRenderer: Card | Classic = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeLayerInfos
  //----------------------------------

  /**
   * Collection of {@link module:esri/widgets/Legend/support/ActiveLayerInfo} objects used by the legend view to
   * display data in the legend. The legend widget watches this property to hide or display the layer legend when
   * an {@link module:esri/widgets/Legend/support/ActiveLayerInfo} is removed from or added to this collection.
   *
   * @name activeLayerInfos
   * @instance
   *
   * @type {module:esri/core/Collection<Object>}
   * @autocast { "value": "Object[]" }
   * @ignore
   */
  @aliasOf("viewModel.activeLayerInfos")
  @renderable()
  activeLayerInfos: Collection<ActiveLayerInfo> = null;

  //----------------------------------
  //  basemapLegendVisible
  //----------------------------------

  /**
   * boolean that tells to show the basemaps or not in the legend
   *
   * @type {boolean}
   * @default false
   * @private
   */
  @aliasOf("viewModel.basemapLegendVisible")
  @renderable()
  basemapLegendVisible = false;

  //----------------------------------
  //  groundLegendVisible
  //----------------------------------

  /**
   * boolean that tells to show the ground layers or not in the legend
   *
   * @type {boolean}
   * @default false
   * @private
   */
  @aliasOf("viewModel.groundLegendVisible")
  @renderable()
  groundLegendVisible = false;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default icon font.
   *
   * @since 4.7
   * @name iconClass
   * @instance
   * @type {string}
   * @readonly
   */
  @property()
  iconClass = CSS.widgetIcon;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @since 4.7
   * @name label
   * @instance
   * @type {string}
   * @readonly
   */
  @property()
  label: string = i18n.widgetLabel;

  //----------------------------------
  //  layerInfos
  //----------------------------------

  /**
   * Specifies a subset of the layers to display in the legend.
   * If this property is not set, all layers in the map will display in the legend.
   * Objects in this array are defined with the properties listed below.
   *
   * @name layerInfos
   * @instance
   *
   * @type {object[]}
   *
   * @property {string} [title] - Specifies a title for the layer to display above its symbols and descriptions.
   * If no title is specified the service name is used.
   * @property {module:esri/layers/Layer} layer - A layer to display in the legend.
   * @todo @property {boolean} [defaultSymbol=true] - When `false`, the default symbol for the renderer will
   * not display in the legend. Only applicable to
   * {@link module:esri/layers/FeatureLayer}.
   * @todo @property {number[]} hideLayers -  List of sublayer ids that will not be displayed in the legend
   *                                    even if they are visible in the map.
   */
  @aliasOf("viewModel.layerInfos")
  @renderable()
  layerInfos: LayerInfo[] = null;

  //----------------------------------
  //  style
  //----------------------------------

  /**
   * Indicates the style of the legend. The style determines the legend's layout and behavior.
   * See the table below for a list of possible values.
   *
   * Value | Description
   * ------|------------
   * classic | The legend has a portrait orientation. The user can scroll vertically when many elements are included in the legend's content.
   * card | In wide views, the legend has a landscape orientation that allows users to scroll horizontally to view all legend elements. This style is responsive, making it ideal for mobile web apps. In smaller views, the legend collapses to occupy less space. One element is shown at a time in a card-style layout, which the user can navigate horizontally.
   *
   * @name style
   * @instance
   * @type {string}
   * @default classic
   * @since 4.7
   * @beta
   */
  @property({
    value: "classic",
    dependsOn: ["activeLayerInfos"]
  })
  @renderable()
  get style() {
    return this._get("style");
  }
  set style(value: Style) {
    this._updateStyleRenderer(value);
    this._set("style", value);
  }

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   *
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Legend/LegendViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @ignore
   *
   * @type {module:esri/widgets/Legend/LegendViewModel}
   * @autocast
   */
  @property()
  @renderable([
    "view.size"
  ])
  viewModel: LegendViewModel = new LegendViewModel();

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render() {
    return this._styleRenderer.render();
  }

  //--------------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  private _updateStyleRenderer(style: Style): void {
    if (this._styleRenderer) {
      this._styleRenderer.destroy();
    }

    this._styleRenderer = style === "card" ?
      new Card({
        activeLayerInfos: this.activeLayerInfos,
        view: this.view
      }) :
      new Classic({
        activeLayerInfos: this.activeLayerInfos
      });
  }

  private _refreshActiveLayerInfos(activeLayerInfos: Collection<ActiveLayerInfo>): void {
    this._handles.removeAll();
    activeLayerInfos.forEach(activeLayerInfo => this._renderOnActiveLayerInfoChange(activeLayerInfo));
    this.scheduleRender();
  }

  private _renderOnActiveLayerInfoChange(activeLayerInfo: ActiveLayerInfo): void {
    const infoVersionHandle = watchUtils.init(activeLayerInfo, "version", () => this.scheduleRender());
    this._handles.add(infoVersionHandle, `version_${activeLayerInfo.layer.uid}`);

    activeLayerInfo.children.forEach(childActiveLayerInfo => this._renderOnActiveLayerInfoChange(childActiveLayerInfo));
  }
}

export = Legend;
