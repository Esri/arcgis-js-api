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
 * [![widgets-legend-basic](../assets/img/apiref/widgets/widgets-legend-basic.png)](../sample-code/sandbox/?sample=widgets-legend)
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
 * {@link module:esri/layers/VectorTileLayer}, and
 * {@link module:esri/layers/WebTileLayer}.
 * * {@link module:esri/symbols/Symbol3D  3D symbols} with more than one
 * {@link module:esri/symbols/Symbol3DLayer symbol layer} are not supported.
 * * {@link module:esri/renderers/DictionaryRenderer} is not supported.
 * :::
 *
 * @example
 * let legend = new Legend({
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
 * @see [Legend.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Legend.tsx)
 * @see [Legend.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Legend.scss)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

// esri.core
import Collection from "esri/core/Collection";
import Handles from "esri/core/Handles";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.accessorSupport.decorators
import { cast } from "esri/core/accessorSupport/decorators/cast";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import { LayerInfo } from "esri/widgets/interfaces";
import Widget from "esri/widgets/Widget";

// esri.widgets.Legend
import LegendViewModel from "esri/widgets/Legend/LegendViewModel";

// esri.widgets.Legend.styles
import Card from "esri/widgets/Legend/styles/Card";
import Classic from "esri/widgets/Legend/styles/Classic";

// esri.widgets.Legend.support
import ActiveLayerInfo from "esri/widgets/Legend/support/ActiveLayerInfo";

// esri.widgets.Legend.t9n
import LegendMessages from "esri/widgets/Legend/t9n/Legend";

// esri.widgets.support
import { HeadingLevel } from "esri/widgets/support/Heading";
import { VNode } from "esri/widgets/support/interfaces";
import { messageBundle, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-legend",
  widget: "esri-widget",
  panel: "esri-widget--panel",
  widgetIcon: "esri-icon-layer-list"
};

type StyleType = Card["type"] | Classic["type"];
type LegendStyle = Card | Classic;

@subclass("esri.widgets.Legend")
class Legend extends Widget {
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
   * let legend = new Legend({
   *   view: view
   * });
   */
  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    this.own(
      watchUtils.on(this, "activeLayerInfos", "change", () =>
        this._refreshActiveLayerInfos(this.activeLayerInfos)
      ),

      watchUtils.watch(this, "headingLevel", (headingLevel: HeadingLevel) => {
        const { style } = this;

        if (style) {
          style.headingLevel = headingLevel;
        }
      }),

      watchUtils.init<LegendStyle>(this, "style", (value, oldValue) => {
        if (oldValue && value !== oldValue) {
          oldValue.destroy();
        }

        if (value) {
          value.activeLayerInfos = this.activeLayerInfos;

          if (value.type === "card") {
            value.view = this.view;
          }

          value.headingLevel = this.headingLevel;
        }
      })
    );
  }

  override destroy(): void {
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
  activeLayerInfos: Collection<ActiveLayerInfo> = null;

  //----------------------------------
  //  basemapLegendVisible
  //----------------------------------

  /**
   * Indicates whether to show the {@link module:esri/Basemap} layers in the Legend. If you set this property to
   * `true` and specify [layerInfos](#layerInfos), the basemap layers you want included in the legend must also be
   * specified in `layerInfos`.
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
  groundLegendVisible = false;

  //----------------------------------
  //  headingLevel
  //----------------------------------

  /**
   * Indicates the heading level to use for the legend title. By default, legend titles
   * are rendered as level 3 headings (e.g. `<h3>Legend title</h3>`). Depending on the legend placement
   * in your app, you may need to adjust this heading for proper semantics. This is
   * important for meeting accessibility standards.
   *
   * @name headingLevel
   * @instance
   * @since 4.20
   * @type {number}
   * @default 3
   * @see [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
   *
   * @example
   * // legend title will render as an <h2>
   * legend.headingLevel = 2;
   */
  @property()
  headingLevel: HeadingLevel = 3;

  //----------------------------------
  //  hideLayersNotInCurrentView
  //----------------------------------

  /**
   * When `true`, layers will only be shown in the legend if
   * they are visible in the view's extent. When data from a layer
   * is not visible in the view, the layer's legend information
   * will be hidden.
   *
   * To hide layers completely
   * from the legend, you should set the `legendEnabled` property of
   * the layer to `false`.
   *
   * @name hideLayersNotInCurrentView
   * @instance
   * @since 4.21
   * @type {boolean}
   * @default false
   * @see [respectLayerVisibility](#respectLayerVisibility)
   *
   * @example
   * // layers not displayed in the view
   * // will not be shown in the legend
   * legend.hideLayersNotInCurrentView = true;
   */
  @aliasOf("viewModel.hideLayersNotInCurrentView")
  hideLayersNotInCurrentView = false;

  //----------------------------------
  //  keepCacheOnDestroy
  //----------------------------------

  @aliasOf("viewModel.keepCacheOnDestroy")
  keepCacheOnDestroy = false;

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
   * @see [hideLayersNotInCurrentView](#hideLayersNotInCurrentView)
   *
   * @example
   * // Always displays legend elements for the map's layers
   * // regardless of their minScale, maxScale, and legendEnabled properties
   * legend.respectLayerVisibility = false;
   */
  @aliasOf("viewModel.respectLayerVisibility")
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
  override iconClass = CSS.widgetIcon;

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
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  override label: string = undefined;

  //----------------------------------
  //  layerInfos
  //----------------------------------

  /**
   * Specifies a subset of the layers to display in the legend. This includes any [basemap layers](#basemapLegendVisible)
   * you want to be visible in the legend.
   * If this property is not set, all layers in the map will display in the legend, including
   * basemap layers if [basemapLegendVisible](#basemapLegendVisible) is `true`.
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
   */
  @aliasOf("viewModel.layerInfos")
  layerInfos: LayerInfo[] = null;

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
  @messageBundle("esri/widgets/Legend/t9n/Legend")
  messages: LegendMessages = null;

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
  view: IMapView | ISceneView = null;

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
  override viewModel = new LegendViewModel();

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  override render(): VNode {
    return (
      <div
        class={this.classes(CSS.base, CSS.widget, this.style instanceof Classic ? CSS.panel : null)}
      >
        {this.style.render()}
      </div>
    );
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

    const childrenChangeHandle = watchUtils.on(activeLayerInfo, "children", "change", () => {
      activeLayerInfo.children.forEach((childActiveLayerInfo) =>
        this._renderOnActiveLayerInfoChange(childActiveLayerInfo)
      );
    });
    this._handles.add(childrenChangeHandle, `children_${activeLayerInfo.layer.uid}`);

    activeLayerInfo.children.forEach((childActiveLayerInfo) =>
      this._renderOnActiveLayerInfoChange(childActiveLayerInfo)
    );
  }
}

export default Legend;
