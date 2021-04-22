/**
 * Provides a simple widget to present the {@link module:esri/views/View} or a user-defined {@link HTMLElement} using the entire screen.
 *
 * ::: esri-md class="panel trailer-1"
 * **Note:**
 *
 * The default background color of the view in fullscreen mode is black.
 * The background color can be changed in CSS using `.esri-view:fullscreen` selector.
 * The background color defined on `.esri-view` and [WebMap.initialViewProperties](../api-reference/esri-WebMap.html#initialViewProperties) will also be used in fullscreen mode.
 * :::
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
 * @see [Fullscreen.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Fullscreen.tsx)
 * @see [Sample - Animate opacity visual variable](../sample-code/visualization-vv-opacity-animate/index.html)
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

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import { ISceneView } from "esri/views/ISceneView";
import MapView from "esri/views/MapView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.Fullscreen
import FullscreenViewModel from "esri/widgets/Fullscreen/FullscreenViewModel";

// esri.widgets.Fullscreen.t9n
import FullscreenMessages from "esri/widgets/Fullscreen/t9n/Fullscreen";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-fullscreen esri-widget--button esri-widget",
  text: "esri-icon-font-fallback-text",
  icon: "esri-icon",
  enter: "esri-icon-zoom-out-fixed",
  exit: "esri-icon-zoom-in-fixed",

  // common
  disabled: "esri-disabled"
};

@subclass("esri.widgets.Fullscreen")
class Fullscreen extends Widget {
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
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
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
  //  fullscreenTitle
  //----------------------------------

  /**
   * @todo document.
   */
  @property({ readOnly: true })
  get fullscreenTitle(): string {
    const state = this.viewModel?.state;

    return state === "active" ? this.messages.exit : state === "ready" ? this.messages.enter : "";
  }

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
  label: string = undefined;

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
  @messageBundle("esri/widgets/Fullscreen/t9n/Fullscreen")
  messages: FullscreenMessages = null;

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
  view: MapView | ISceneView = null;

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
  viewModel = new FullscreenViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const state = this.viewModel?.state;
    const { fullscreenTitle } = this;

    const rootClasses = {
      [CSS.disabled]: state === "disabled" || state === "feature-unsupported"
    };

    return (
      <div
        bind={this}
        class={this.classes(CSS.base, rootClasses)}
        role="button"
        tabIndex={0}
        onclick={this._toggle}
        onkeydown={this._toggle}
        aria-label={fullscreenTitle}
        title={fullscreenTitle}
      >
        {this.renderIcon()}
        {this.renderTitle()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderIcon(): VNode {
    const state = this.viewModel?.state;

    const iconClasses = {
      [CSS.enter]: state === "ready" || state === "disabled" || state === "feature-unsupported",
      [CSS.exit]: state === "active"
    };

    return <span class={this.classes(CSS.icon, iconClasses)} aria-hidden="true" />;
  }

  protected renderTitle(): VNode {
    return <span class={CSS.text}>{this.fullscreenTitle}</span>;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _toggle(): void {
    this.viewModel.toggle();
  }
}

export default Fullscreen;
