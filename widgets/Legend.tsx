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
 * [![widgets-legend-basic](../../assets/img/apiref/widgets/widgets-legend-basic.png)](../sample-code/sandbox/sandbox.html?sample=widgets-legend)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * Currently, the legend widget does not support the following layer types:
 * {@link module:esri/layers/ElevationLayer},
 * {@link module:esri/layers/GraphicsLayer},
 * {@link module:esri/layers/IntegratedMeshLayer},
 * {@link module:esri/layers/KMLLayer},
 * {@link module:esri/layers/MapNotesLayer},
 * {@link module:esri/layers/OpenStreetMapLayer},
 * {@link module:esri/layers/RouteLayer},
 * {@link module:esri/layers/VectorTileLayer}, and
 * {@link module:esri/layers/WebTileLayer}.
 * * {@link module:esri/symbols/Symbol3D  3D symbols} with more than one
 * {@link module:esri/symbols/Symbol3DLayer symbol layer} are not supported.
 * * {@link module:esri/renderers/DictionaryRenderer} is not supported.
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
 * @see [Legend.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Legend.tsx)
 * @see [Legend.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Legend.scss)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Legend/nls/Legend";

// esri.core
import Collection = require("esri/core/Collection");
import Handles = require("esri/core/Handles");
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.accessorSupport.decorators
import { cast } from "esri/core/accessorSupport/decorators/cast";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import { LayerInfo } from "esri/widgets/interfaces";
import Widget = require("esri/widgets/Widget");

// esri.widgets.Legend
import LegendViewModel = require("esri/widgets/Legend/LegendViewModel");

// esri.widgets.Legend.styles
import Card = require("esri/widgets/Legend/styles/Card");
import Classic = require("esri/widgets/Legend/styles/Classic");

// esri.widgets.Legend.support
import ActiveLayerInfo = require("esri/widgets/Legend/support/ActiveLayerInfo");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { renderable } from "esri/widgets/support/widget";

const CSS = {
  widgetIcon: "esri-icon-layer-list"
};

type StyleType = Card["type"] | Classic["type"];
type LegendStyle = Card | Classic;

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
    super(params);
  }

  postInitialize(): void {
    this.own(
      watchUtils.on(this, "activeLayerInfos", "change", () =>
        this._refreshActiveLayerInfos(this.activeLayerInfos)
      ),

      watchUtils.init<LegendStyle>(this, "style", (value, oldValue) => {
        if (oldValue && value !== oldValue) {
          oldValue.destroy();
        }

        if (value) {
          value.activeLayerInfos = this.activeLayerInfos;

          if (value.type === "card") {
            value.view = this.view;
          }
        }
      })
    );
  }

  destroy(): void {
    this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles = new Handles();

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
   * display data in the legend. The legend widget watches this property to hide or display the layer's legend when
   * an {@link module:esri/widgets/Legend/support/ActiveLayerInfo} is removed from or added to this collection.
   *
   * @name activeLayerInfos
   * @instance
   *
   * @type {module:esri/core/Collection<module:esri/widgets/Legend/support/ActiveLayerInfo>}
   * @autocast { "value": "Object[]" }
   */
  @aliasOf("viewModel.activeLayerInfos")
  @renderable()
  activeLayerInfos: Collection<ActiveLayerInfo> = null;

  //----------------------------------
  //  basemapLegendVisible
  //----------------------------------

  /**
   * Indicates whether to show the {@link module:esri/Basemap} layers in the Legend.
   *
   * @name basemapLegendVisible
   * @instance
   * @type {boolean}
   * @default false
   *
   * @example
   * legend.basemapLegendVisible = true;
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
  //  respectLayerVisibility
  //----------------------------------

  /**
   * Determines whether to respect the properties of the layers in the map that
   * control the legend's visibility (`minScale`, `maxScale`, `legendEnabled`).
   * By default, a layer's legend elements **will
   * not render** in the legend given the following conditions:
   *
   * - The layer's {@link module:esri/layers/FeatureLayer#legendEnabled legendEnabled} property
   * is set to `false`.
   * - If the view's scale is outside the visibility range
   * defined by the layer's {@link module:esri/layers/FeatureLayer#minScale minScale} and
   * {@link module:esri/layers/FeatureLayer#maxScale maxScale} properties.
   *
   * When the `respectLayerVisibility` property of the legend is set to `false`, the legend elements for each
   * layer in the map will always display, thus disregarding the `minScale`, `maxScale`,
   * and `legendEnabled` properties for each layer in the map.
   *
   * @since 4.13
   * @name respectLayerVisibility
   * @instance
   * @type {boolean}
   * @default true
   *
   * @example
   * // Always displays legend elements for the map's layers
   * // regardless of their minScale, maxScale, and legendEnabled properties
   * legend.respectLayerVisibility = false;
   */
  @aliasOf("viewModel.respectLayerVisibility")
  @renderable()
  respectLayerVisibility = true;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @since 4.7
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
   * @since 4.7
   * @name label
   * @instance
   * @type {string}
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
   * @type {Object[]}
   *
   * @property {string} [title] - Specifies a title for the layer to display above its symbols and descriptions.
   * If no title is specified the service name is used.
   * @property {module:esri/layers/Layer} layer - A layer to display in the legend.
   * @todo doc later \@property {boolean} [defaultSymbol=true] - When `false`, the default symbol for the renderer will
   * not display in the legend. Only applicable to
   * {@link module:esri/layers/FeatureLayer}.
   * @todo doc later \@property {number[]} hideLayers -  List of sublayer ids that will not be displayed in the legend
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
   * You can either specify a string or an object to indicate the style. The known string values are the same values listed in
   * the table within the `type` property.
   *
   * @property {"classic" | "card"} type - Specifies the style of the legend. There are two possible values listed in the table below:
   *
   * Value | Description
   * ------|------------
   * classic | The legend has a portrait orientation. The user can scroll vertically when many elements are included in the legend's content.
   * card | In wide views, the legend has a landscape orientation that allows users to scroll horizontally to view all legend elements. This style can be responsive, making it ideal for mobile web apps. In smaller views, the legend collapses to occupy less space. One element is shown at a time in a card-style layout, which the user can navigate horizontally.
   *
   * @property {"auto" | "side-by-side" | "stack"} [layout=stack] - When a `card` type is specified, you can specify one of the following layout options.
   *
   * Value | Description
   * ------|------------
   * auto | This layout is responsive so that in wide views the legend has a `side-by-side` layout, and a `stack` layout in smaller (mobile) views.
   * side-by-side | The legend has a landscape orientation that allows users to scroll horizontally to view multiple legend cards at a time.
   * stack | The legend cards are stacked, which conserves space, but restricts the user to seeing only one card at a time.
   *
   * @name style
   * @instance
   * @type {Object | string}
   * @default classic
   * @since 4.7
   *
   * @example
   * // renders the legend in the card style with a "stack" layout
   * legend.style = "card";
   *
   * @example
   * // renders the legend in the card style with a responsive
   * // layout that toggles between "stack" and "side-by-side"
   * legend.style = {
   *   type: "card",
   *   layout: "auto"
   * };
   *
   * @example
   * // renders the legend in the classic layout
   * legend.style = "classic";
   */
  @property()
  @renderable()
  style: LegendStyle = new Classic();

  @cast("style")
  protected castStyle(value: StyleType | LegendStyle | { type: StyleType }): LegendStyle {
    if (value instanceof Card || value instanceof Classic) {
      return value;
    }

    if (typeof value === "string") {
      return value === "card" ? new Card() : new Classic();
    }

    if (value && typeof value.type === "string") {
      const options = { ...value };
      delete options.type;
      const StyleClass = value.type === "card" ? Card : Classic;

      return new StyleClass(options);
    }

    return new Classic();
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
   *
   * @type {module:esri/widgets/Legend/LegendViewModel}
   * @autocast
   */
  @property()
  @renderable(["view.size"])
  viewModel: LegendViewModel = new LegendViewModel();

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render(): VNode {
    return this.style.render();
  }

  //--------------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  private _refreshActiveLayerInfos(activeLayerInfos: Collection<ActiveLayerInfo>): void {
    this._handles.removeAll();
    activeLayerInfos.forEach((activeLayerInfo) =>
      this._renderOnActiveLayerInfoChange(activeLayerInfo)
    );
    this.scheduleRender();
  }

  private _renderOnActiveLayerInfoChange(activeLayerInfo: ActiveLayerInfo): void {
    const infoVersionHandle = watchUtils.init(activeLayerInfo, "version", () =>
      this.scheduleRender()
    );
    this._handles.add(infoVersionHandle, `version_${activeLayerInfo.layer.uid}`);

    activeLayerInfo.children.forEach((childActiveLayerInfo) =>
      this._renderOnActiveLayerInfoChange(childActiveLayerInfo)
    );
  }
}

export = Legend;
