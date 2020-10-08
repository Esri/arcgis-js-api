/**
 * Provides two simple buttons for toggling the
 * {@link module:esri/widgets/NavigationToggle/NavigationToggleViewModel#navigationMode navigation mode}
 * of a {@link module:esri/views/SceneView}. Note that this widget is designed only for 3D mouse interaction in a
 * {@link module:esri/views/SceneView}. It has no effect on touch navigation and it should not be used
 * with 2D mouse interaction in a {@link module:esri/views/MapView}.
 *
 * ![navigation-toggle](../../assets/img/apiref/widgets/navigation-toggle.png)
 *
 * The default navigation mode of the {@link module:esri/views/SceneView} is always
 * `pan`. The various mouse interactions of this mode are outlined
 * [here](../api-reference/esri-views-SceneView.html#navigation).
 * The alternate navigation mode to toggle to is `rotate`. This allows the user to
 * rotate the view with a mouse drag and pan the view with a right-click and drag
 * gesture.
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 * See the example below.
 *
 * @module esri/widgets/NavigationToggle
 * @since 4.0
 *
 * @see [NavigationToggle.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/NavigationToggle.tsx)
 * @see module:esri/widgets/NavigationToggle/NavigationToggleViewModel
 * @see [SceneView navigation](../api-reference/esri-views-SceneView.html)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 *
 * @example
 * // creates a new instance of the NavigationToggle widget
 * var navigationToggle = new NavigationToggle({
 *   view: view
 * });
 *
 * // and adds it to the top right of the view
 * view.ui.add(navigationToggle, "top-right");
 */

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.NavigationToggle
import NavigationToggleViewModel = require("esri/widgets/NavigationToggle/NavigationToggleViewModel");

// esri.widgets.NavigationToggle.t9n
import NavigationToggleMessages from "esri/widgets/NavigationToggle/t9n/NavigationToggle";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-navigation-toggle esri-widget",
  button: "esri-navigation-toggle__button esri-widget--button",
  activeButton: "esri-navigation-toggle__button--active",
  panButton: "esri-navigation-toggle__button--pan",
  rotateButton: "esri-navigation-toggle__button--rotate",
  isLayoutHorizontal: "esri-navigation-toggle--horizontal",
  // icons
  rotationIcon: "esri-icon-rotate",
  panIcon: "esri-icon-pan",
  widgetIcon: "esri-icon-pan2",
  // common
  disabled: "esri-disabled"
};

type LayoutMode = "vertical" | "horizontal";

@subclass("esri.widgets.NavigationToggle")
class NavigationToggle extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/NavigationToggle
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var navigationToggle = new NavigationToggle({
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
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Sets the layout of the widget to either `horizontal` or `vertical`. See the
   * table below for a list of possible values.
   *
   * Possible Value | Example
   * ---------------|--------
   * vertical | ![navigation-toggle](../../assets/img/apiref/widgets/navigation-toggle.png)
   * horizontal | ![navigation-toggle-horizontal](../../assets/img/apiref/widgets/navigation-toggle-horizontal.png)
   *
   * @name layout
   * @instance
   * @type {"vertical" | "horizontal"}
   * @default vertical
   *
   * @example
   * // creates a new instance of the NavigationToggle widget
   * var navigationToggle = new NavigationToggle({
   *   view: view,
   *   layout: "horizontal"  // makes the layout horizontal
   * });
   */
  @property({
    value: "vertical"
  })
  @renderable()
  set layout(value: LayoutMode) {
    if (value !== "horizontal") {
      value = "vertical";
    }

    this._set("layout", value);
  }

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
  @messageBundle("esri/widgets/NavigationToggle/t9n/NavigationToggle")
  messages: NavigationToggleMessages = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/Scene SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   *
   * @type {module:esri/views/SceneView}
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
   * {@link module:esri/widgets/NavigationToggle/NavigationToggleViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/NavigationToggle/NavigationToggleViewModel}
   * @autocast
   */
  @property({
    type: NavigationToggleViewModel
  })
  @renderable(["viewModel.state", "viewModel.navigationMode"])
  viewModel = new NavigationToggleViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Toggles the navigation mode of the [view](#view) from `pan` to `rotate` or
   * vice versa.
   *
   * @method toggle
   * @instance
   */
  toggle(): void {
    return this.viewModel.toggle();
  }

  render(): VNode {
    const disabled = this.get<string>("viewModel.state") === "disabled";
    const panSelected = this.get<string>("viewModel.navigationMode") === "pan";

    const rootClasses = {
      [CSS.disabled]: disabled,
      [CSS.isLayoutHorizontal]: this.layout === "horizontal"
    };

    const panButtonClasses = {
      [CSS.activeButton]: panSelected
    };

    const rotateButtonClasses = {
      [CSS.activeButton]: !panSelected
    };

    const tabIndex = disabled ? -1 : 0;
    const title = this.messages.toggle;

    return (
      <div
        bind={this}
        class={this.classes(CSS.base, rootClasses)}
        onclick={this._toggle}
        onkeydown={this._toggle}
        tabIndex={tabIndex}
        aria-label={title}
        title={title}
      >
        <div class={this.classes(CSS.button, CSS.panButton, panButtonClasses)}>
          <span class={CSS.panIcon} />
        </div>
        <div class={this.classes(CSS.button, CSS.rotateButton, rotateButtonClasses)}>
          <span class={CSS.rotationIcon} />
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _toggle(): void {
    this.toggle();
  }
}

export = NavigationToggle;
