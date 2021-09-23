/**
 * The Zoom widget allows users to zoom in/out within a view.
 *
 * An instance of the Zoom widget is available in every
 * {@link module:esri/views/MapView} and {@link module:esri/views/SceneView} by default.
 * See {@link module:esri/views/ui/DefaultUI} for details on how to place the Zoom widget
 * in other parts of the view.
 *
 * @example
 * let view = new MapView({
 *    container: "viewDiv",
 *    map: map
 * });
 *
 * let zoom = new Zoom({
 *   view: view
 * });
 *
 * @module esri/widgets/Zoom
 * @since 4.0
 *
 * @see [Zoom.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Zoom.tsx)
 * @see [Zoom.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Zoom.scss)
 * @see module:esri/views/MapView
 * @see module:esri/views/SceneView
 * @see module:esri/widgets/Zoom/ZoomViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { messageBundle, tsx } from "esri/widgets/support/widget";

// esri.widgets.Zoom
import IconButton from "esri/widgets/Zoom/IconButton";
import ZoomViewModel from "esri/widgets/Zoom/ZoomViewModel";

// esri.widgets.Zoom.t9n
import type ZoomMessages from "esri/widgets/Zoom/t9n/Zoom";

const CSS = {
  base: "esri-zoom esri-widget",
  horizontalLayout: "esri-zoom--horizontal",
  zoomInIcon: "esri-icon-plus",
  zoomOutIcon: "esri-icon-minus",
  widgetIcon: "esri-icon-zoom-in-magnifying-glass"
};

type Layout = "vertical" | "horizontal";

@subclass("esri.widgets.Zoom")
class Zoom extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Zoom
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    this._zoomInButton = new IconButton({
      action: this.zoomIn.bind(this),
      iconClass: CSS.zoomInIcon
    });

    this._zoomOutButton = new IconButton({
      action: this.zoomOut.bind(this),
      iconClass: CSS.zoomOutIcon
    });
  }

  override destroy(): void {
    this._zoomInButton.destroy();
    this._zoomOutButton.destroy();

    this._zoomInButton = null;
    this._zoomOutButton = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _zoomInButton: IconButton;

  private _zoomOutButton: IconButton;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

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
  //  layout
  //----------------------------------

  /**
   * Determines the layout/orientation of the Zoom widget.
   *
   * @name layout
   * @since 4.5
   * @instance
   * @default vertical
   * @type {"vertical" | "horizontal"}
   */
  @property({ value: "vertical" })
  set layout(value: Layout) {
    if (value !== "horizontal") {
      value = "vertical";
    }

    this._set("layout", value);
  }

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @messageBundle("esri/widgets/Zoom/t9n/Zoom")
  messages: ZoomMessages = null;

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
   * {@link module:esri/widgets/Zoom/ZoomViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Zoom/ZoomViewModel}
   * @autocast
   */
  @property({
    type: ZoomViewModel
  })
  override viewModel = new ZoomViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  override render(): VNode {
    const vm = this.viewModel;
    const rootClasses = {
      [CSS.horizontalLayout]: this.layout === "horizontal"
    };

    this._zoomInButton.enabled = vm.state === "ready" && vm.canZoomIn;
    this._zoomOutButton.enabled = vm.state === "ready" && vm.canZoomOut;

    this._zoomInButton.title = this.messages.zoomIn;
    this._zoomOutButton.title = this.messages.zoomOut;

    return (
      <div class={this.classes(CSS.base, rootClasses)}>
        {this._zoomInButton.render()}
        {this._zoomOutButton.render()}
      </div>
    );
  }

  /**
   * Zooms the view in by an LOD factor of 0.5.
   *
   * @method
   */
  zoomIn(): void {
    return this.viewModel.zoomIn();
  }

  /**
   * Zooms the view out by an LOD factor of 2.
   *
   * @method
   */
  zoomOut(): void {
    return this.viewModel.zoomOut();
  }
}

export default Zoom;
