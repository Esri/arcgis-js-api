/**
 * Provides a simple widget that switches the {@link module:esri/views/View} to its
 * initial {@link module:esri/Viewpoint} or a previously defined [viewpoint](#viewpoint).
 * By default this button looks like the following:
 *
 * ![home-button](../../assets/img/apiref/widgets/widgets-home.png)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 * See the example below.
 *
 * @module esri/widgets/Home
 * @since 4.0
 *
 * @see [Home.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Home.tsx)
 * @see [button.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Widget.scss)
 * @see [Sample - Home widget](../sample-code/widgets-home/index.html)
 * @see module:esri/widgets/Home/HomeViewModel
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 *
 * @example
 * var homeWidget = new Home({
 *   view: view
 * });
 *
 * // adds the home widget to the top left corner of the MapView
 * view.ui.add(homeWidget, "top-left");
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18nCommon from "dojo/i18n!esri/nls/common";
import * as i18n from "dojo/i18n!esri/widgets/Home/nls/Home";

// esri
import Viewpoint = require("esri/Viewpoint");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import View = require("esri/views/View");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Home
import HomeViewModel = require("esri/widgets/Home/HomeViewModel");

// esri.widgets.support
import { GoToOverride, VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, renderable, tsx, vmEvent } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-home esri-widget--button esri-widget",
  text: "esri-icon-font-fallback-text",
  homeIcon: "esri-icon esri-icon-home",
  loadingIcon: "esri-icon-loading-indicator",
  rotatingIcon: "esri-rotating",
  widgetIcon: "esri-icon-home",

  // common
  disabled: "esri-disabled"
};

@subclass("esri.widgets.Home")
class Home extends declared(Widget) {
  /**
   * Fires when the [go()](#go) method is called.
   *
   * @event module:esri/widgets/Home#go
   *
   * @see [go()](#go)
   *
   * @example
   * homeWidget.on("go", function(event){
   *   console.log("updating viewpoint");
   * });
   */

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Home
   * @extends module:esri/widgets/Widget
   * @mixes module:esri/widgets/support/GoTo
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var homeButton = new Home({
   *   view: view,
   *   viewpoint: new Viewpoint()
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
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride")
  goToOverride: GoToOverride = null;

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
  @renderable()
  view: View = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Home/HomeViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @autocast
   * @type {module:esri/widgets/Home/HomeViewModel}
   */

  @property({
    type: HomeViewModel
  })
  @renderable("viewModel.state")
  @vmEvent("go")
  viewModel = new HomeViewModel();

  //----------------------------------
  //  viewpoint
  //----------------------------------

  /**
   * The {@link module:esri/Viewpoint}, or point of view, to zoom to when
   * going home. The initial value is determined a few different ways:
   *
   * * If no {@link module:esri/views/View} is provided, the value is `null`.
   * * If the {@link module:esri/views/View} is ready, but the {@link module:esri/Viewpoint} is not defined, the  initial
   * value of the {@link module:esri/Viewpoint} is determined when the {@link module:esri/views/View} became ready.
   * * If the {@link module:esri/views/View} is ready and the {@link module:esri/Viewpoint} is defined by the user, the initial viewpoint value is the user-defined {@link module:esri/Viewpoint}.
   *
   * @type {module:esri/Viewpoint}
   * @name viewpoint
   * @instance
   *
   * @example
   * // Creates a viewpoint centered on the extent of a polygon geometry
   * var vp = new Viewpoint({
   *   targetGeometry: geom.extent
   * });
   *
   * // Sets the model's viewpoint to the Viewpoint based on a polygon geometry
   * home.viewpoint = vp;
   */
  @aliasOf("viewModel.viewpoint")
  viewpoint: Viewpoint = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * This function provides the ability to interrupt and cancel the process
   * of navigating the view back to the view's initial extent.
   *
   * @since 4.9
   *
   * @method
   */
  @aliasOf("viewModel.cancelGo")
  cancelGo(): IPromise<void> {
    return null;
  }

  /**
   * Animates the view to the initial Viewpoint of the view or the
   * value of [viewpoint](#viewpoint).
   *
   * @method
   * @see [Event: go](#event:go)
   */
  @aliasOf("viewModel.go")
  go(): IPromise<void> {
    return null;
  }

  render(): VNode {
    const state = this.get("viewModel.state");
    const rootClasses = {
      [CSS.disabled]: state === "disabled"
    };
    const iconClasses = {
      [CSS.loadingIcon]: state === "going-home",
      [CSS.rotatingIcon]: state === "going-home"
    };

    const title = state === "going-home" ? i18nCommon.cancel : i18n.title;

    return (
      <div
        bind={this}
        class={this.classes(CSS.base, rootClasses)}
        role="button"
        tabIndex={0}
        onclick={this._go}
        onkeydown={this._go}
        aria-label={title}
        title={title}
      >
        <span aria-hidden="true" class={this.classes(CSS.homeIcon, iconClasses)} />
        <span class={CSS.text}>{i18n.button}</span>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _go(): void {
    const { viewModel } = this;

    viewModel.state === "going-home" ? viewModel.cancelGo() : viewModel.go();
  }
}

export = Home;
