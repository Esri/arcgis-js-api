/**
 * Provides two simple buttons for toggling the
 * {@link module:esri/widgets/NavigationToggle/NavigationToggleViewModel#navigationMode navigation mode}
 * of a {@link module:esri/views/SceneView}. Note that this widget is designed only for 3D mouse interaction in a
 * {@link module:esri/views/SceneView}. It has no effect on touch navigation and it should not be used
 * with 2D mouse interaction in a {@link module:esri/views/MapView}.
 *
 * ![navigation-toggle](../assets/img/apiref/widgets/navigation-toggle.png)
 *
 * The default navigation mode of the {@link module:esri/views/SceneView} is always
 * `pan`. The various mouse interations of this mode are outlined
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
 * @see [NavigationToggle.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/NavigationToggle.tsx)
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

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import {aliasOf, declared, property, subclass} from "../core/accessorSupport/decorators";
import {accessibleHandler, join, tsx, renderable} from "./support/widget";

import Widget = require("./Widget");
import NavigationToggleViewModel = require("./NavigationToggle/NavigationToggleViewModel");
import View = require("../views/View");

import * as i18n from "dojo/i18n!./NavigationToggle/nls/NavigationToggle";

const CSS = {
  base: "esri-navigation-toggle esri-widget",
  button: "esri-navigation-toggle__button esri-widget-button",
  activeButton: "esri-navigation-toggle__button--active",
  panButton: "esri-navigation-toggle__button--pan",
  rotateButton: "esri-navigation-toggle__button--rotate",
  isLayoutHorizontal: "esri-navigation-toggle--horizontal",
  // icons
  rotationIcon: "esri-icon-rotate",
  panIcon: "esri-icon-pan",
  // common
  disabled: "esri-disabled"
};

type LayoutMode = "vertical" | "horizontal";

@subclass("esri.widgets.NavigationToggle")
class NavigationToggle extends declared(Widget) {

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
  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Sets the layout of the widget to either `horizontal` or `vertical`. See the
   * table below for a list of possible values.
   *
   * Possible Value | Example
   * ---------------|--------
   * vertical | ![navigation-toggle](../assets/img/apiref/widgets/navigation-toggle.png)
   * horizontal | ![navigation-toggle-horizontal](../assets/img/apiref/widgets/navigation-toggle-horizontal.png)
   *
   * @name layout
   * @instance
   * @type {string}
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
  view: View = null;

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
  @renderable([
    "viewModel.state",
    "viewModel.navigationMode"
  ])
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
  @aliasOf("viewModel.toggle")
  toggle(): void {}

  render() {
    const disabled = this.get<string>("viewModel.state") === "disabled";
    const panSelected = this.get<string>("viewModel.navigationMode") === "pan";

    const rootClasses = {
      [CSS.disabled]: disabled
    };

    const panButtonClasses = {
      [CSS.activeButton]: panSelected
    };

    const rotateButtonClasses = {
      [CSS.activeButton]: !panSelected
    };

    const tabIndex = disabled ? -1 : 0;

    return (
      <div bind={this} class={CSS.base} classes={rootClasses}
           onclick={this._toggle} onkeydown={this._toggle}
           tabIndex={tabIndex} title={i18n.toggle}>
        <div class={join(CSS.button, CSS.panButton)} classes={panButtonClasses}>
          <span class={CSS.panIcon} />
        </div>
        <div class={join(CSS.button, CSS.rotateButton)} classes={rotateButtonClasses}>
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
  private _toggle() {
    this.toggle();
  }

}

export = NavigationToggle;
