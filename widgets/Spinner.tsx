/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// esri.core
import * as promiseUtils from "esri/core/promiseUtils";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.geometry
import Point = require("esri/geometry/Point");

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Spinner
import SpinnerViewModel = require("esri/widgets/Spinner/SpinnerViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { renderable, tsx } from "esri/widgets/support/widget";

interface SpinnerShowOptions {
  promise?: Promise<any>;
  location?: Point;
}

const CSS = {
  base: "esri-spinner",
  spinnerStart: "esri-spinner--start",
  spinnerFinish: "esri-spinner--finish"
};

@subclass("esri.widgets.Spinner")
class Spinner extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any) {
    super(params);
  }

  postInitialize(): void {
    this.own([
      watchUtils.watch<boolean>(this, "visible", (visible) => this._visibleChange(visible))
    ]);
  }

  destroy(): void {
    this._animationPromise = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  private _animationDelay = 500;

  private _animationPromise: Promise<any> = null;

  //----------------------------------
  //  location
  //----------------------------------

  @aliasOf("viewModel.location")
  location: Point = null;

  //----------------------------------
  //  view
  //----------------------------------

  @aliasOf("viewModel.view")
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  @property({
    type: SpinnerViewModel
  })
  @renderable(["viewModel.screenLocation", "viewModel.screenLocationEnabled"])
  viewModel = new SpinnerViewModel();

  //----------------------------------
  //  visible
  //----------------------------------

  @aliasOf("viewModel.visible")
  visible: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  show(options?: SpinnerShowOptions): void {
    const { location, promise } = options;

    if (location) {
      this.viewModel.location = location;
    }

    this.visible = true;

    const hide = () => this.hide();

    if (promise) {
      promise.catch(() => {}).then(hide);
    }
  }

  hide(): void {
    this.visible = false;
  }

  render(): VNode {
    const { visible } = this;
    const { screenLocation } = this.viewModel;
    const hasScreenLocation = !!screenLocation;

    const showSpinnerStart = visible && hasScreenLocation;
    const showSpinnerFinish = !visible && hasScreenLocation;

    const baseClasses = {
      [CSS.spinnerStart]: showSpinnerStart,
      [CSS.spinnerFinish]: showSpinnerFinish
    };

    const positionStyles = this._getPositionStyles();

    return <div class={this.classes(CSS.base, baseClasses)} styles={positionStyles} />;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _visibleChange(visible: boolean): void {
    if (visible) {
      this.viewModel.screenLocationEnabled = true;
      return;
    }

    const animationPromise = promiseUtils.after(this._animationDelay);

    this._animationPromise = animationPromise;

    animationPromise
      .catch(() => {})
      .then(() => {
        if (this._animationPromise !== animationPromise) {
          return;
        }

        this.viewModel.screenLocationEnabled = false;
        this._animationPromise = null;
      });
  }

  private _getPositionStyles(): HashMap<string> {
    const { screenLocation, view } = this.viewModel;

    if (!view || !screenLocation) {
      return {};
    }

    const { padding } = view;

    return {
      left: `${screenLocation.x - padding.left}px`,
      top: `${screenLocation.y - padding.top}px`
    };
  }
}

export = Spinner;
