/**
 * Provides a simple widget to present the {@link module:esri/views/View} or a user-defined {@link HTMLElement} using the entire screen.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * The Fullscreen widget only works with browsers that implement
 * the [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API). Thus, iOS Safari is not supported.
 * :::
 *
 * @module esri/widgets/Fullscreen
 * @since 4.6
 *
 * @see [Fullscreen.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Fullscreen.tsx)
 * @see [Sample - Animate opacity visual variable](../../sample-code/visualization-vv-opacity-animate/index.html)
 * @see [Sample - Animate color visual variable](../sample-code/visualization-vv-color-animate/index.html)
 * @see module:esri/widgets/Fullscreen/FullscreenViewModel
 * @see module:esri/views/ui/DefaultUI
 *
 * @example
 *
 * fullscreen = new Fullscreen({
 *   view: view
 * });
 * view.ui.add(fullscreen, "top-right");
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, subclass, property, declared } from "../core/accessorSupport/decorators";
import { accessibleHandler, tsx, renderable } from "./support/widget";

import Widget = require("./Widget");
import FullscreenViewModel = require("./Fullscreen/FullscreenViewModel");
import View = require("../views/View");

import * as i18n from "dojo/i18n!./Fullscreen/nls/Fullscreen";

const CSS = {
  base: "esri-fullscreen esri-widget-button esri-widget",
  text: "esri-icon-font-fallback-text",
  icon: "esri-icon",
  enter: "esri-icon-zoom-out-fixed",
  exit: "esri-icon-zoom-in-fixed",

  // common
  disabled: "esri-disabled"
};

@subclass("esri.widgets.Fullscreen")
class Fullscreen extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Fullscreen
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
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
  //  element
  //----------------------------------

  /**
   * The {@link HTMLElement} to present in fullscreen mode.
   *
   * @type {HTMLElement}
   *
   * @name element
   * @instance
   */
  @aliasOf("viewModel.element")
  element: HTMLElement = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   *
   * @name view
   * @instance
   */
  @aliasOf("viewModel.view")
  view: View = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Fullscreen/FullscreenViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Fullscreen/FullscreenViewModel}
   * @autocast
   */
  @property({
    type: FullscreenViewModel
  })
  @renderable("viewModel.state")
  viewModel = new FullscreenViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const state = this.get("viewModel.state");

    const rootClasses = {
      [CSS.disabled]: state === "disabled" || state === "feature-unsupported"
    };

    const iconClasses = {
      [CSS.enter]: state === "ready" || state === "disabled" || state === "feature-unsupported",
      [CSS.exit]: state === "active"
    };

    const title = state === "active" ?
      i18n.exit :
      state === "ready" ?
        i18n.enter :
        "";

    return (
      <div bind={this}
        class={CSS.base}
        classes={rootClasses}
        role="button"
        tabIndex={0}
        onclick={this._toggle}
        onkeydown={this._toggle}
        aria-label={title}
        title={title}>
        <span class={CSS.icon}
          classes={iconClasses}
          aria-hidden="true" />
        <span class={CSS.text}>{title}</span>
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
    this.viewModel.toggle();
  }

}

export = Fullscreen;
