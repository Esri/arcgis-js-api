/**
 * The Zoom widget allows users to zoom in/out within a view.
 *
 * An instance of the Zoom widget is available in every
 * {@link module:esri/views/MapView} and {@link module:esri/views/SceneView} by default.
 * See {@link module:esri/views/ui/DefaultUI} for details on how to place the Zoom widget
 * in other parts of the view.
 *
 * @example
 * var view = new MapView({
 *    container: "viewDiv",
 *    map: map
 * });
 *
 * var zoom = new Zoom({
 *   view: view
 * });
 *
 * @module esri/widgets/Zoom
 * @since 4.0
 *
 * @see [Zoom.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Zoom.tsx)
 * @see [Zoom.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Zoom.scss)
 * @see module:esri/views/MapView
 * @see module:esri/views/SceneView
 * @see module:esri/widgets/Zoom/ZoomViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Zoom/nls/Zoom";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Zoom
import IconButton = require("esri/widgets/Zoom/IconButton");
import ZoomViewModel = require("esri/widgets/Zoom/ZoomViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-zoom esri-widget",
  horizontalLayout: "esri-zoom--horizontal",
  zoomInIcon: "esri-icon-plus",
  zoomOutIcon: "esri-icon-minus",
  widgetIcon: "esri-icon-zoom-in-magnifying-glass"
};

type Layout = "vertical" | "horizontal";

@subclass("esri.widgets.Zoom")
class Zoom extends declared(Widget) {
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
  constructor(params?: any) {
    super();
  }

  postInitialize(): void {
    this._zoomInButton = new IconButton({
      action: this.zoomIn,
      iconClass: CSS.zoomInIcon,
      title: i18n.zoomIn
    });

    this._zoomOutButton = new IconButton({
      action: this.zoomOut,
      iconClass: CSS.zoomOutIcon,
      title: i18n.zoomOut
    });
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
  //  layout
  //----------------------------------

  /**
   * Determines the layout/orientation of the Zoom widget.
   *
   * **Possible Values:** vertical | horizontal
   *
   * @name layout
   * @since 4.5
   * @instance
   * @default vertical
   * @type {string}
   */
  @property({
    value: "vertical"
  })
  @renderable()
  set layout(value: Layout) {
    if (value !== "horizontal") {
      value = "vertical";
    }

    this._set("layout", value);
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
  @renderable(["viewModel.canZoomIn", "viewModel.canZoomOut", "viewModel.state"])
  viewModel = new ZoomViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const vm = this.viewModel;
    const rootClasses = {
      [CSS.horizontalLayout]: this.layout === "horizontal"
    };

    this._zoomInButton.enabled = vm.state === "ready" && vm.canZoomIn;
    this._zoomOutButton.enabled = vm.state === "ready" && vm.canZoomOut;

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
  @aliasOf("viewModel.zoomIn")
  zoomIn(): void {}

  /**
   * Zooms the view out by an LOD factor of 2.
   *
   * @method
   */
  @aliasOf("viewModel.zoomOut")
  zoomOut(): void {}
}

export = Zoom;
