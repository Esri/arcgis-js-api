/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// esri.core
import promiseUtils = require("esri/core/promiseUtils");
import watchUtils = require("esri/core/watchUtils");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.geometry
import Point = require("esri/geometry/Point");

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.support
import AnchorElementViewModel = require("esri/widgets/support/AnchorElementViewModel");
import { tsx, renderable } from "esri/widgets/support/widget";

interface SpinnerShowOptions {
  promise?: IPromise<any>;
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
    super();
  }

  postInitialize() {
    this.own([
      watchUtils.watch<boolean>(this, "visible", (visible) => this._visibleChange(visible))
    ]);
  }

  destroy() {
    this._cancelAnimationPromise();
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  private _animationDelay = 500;

  private _animationPromise: IPromise<any> = null;

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
  //  visible
  //----------------------------------

  @property()
  @renderable()
  visible: boolean = false;

  //----------------------------------
  //  viewModel
  //----------------------------------

  @property({
    type: AnchorElementViewModel
  })
  @renderable(["viewModel.screenLocation", "viewModel.screenLocationEnabled"])
  viewModel = new AnchorElementViewModel();

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

  render() {
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

  private _cancelAnimationPromise(): void {
    const { _animationPromise } = this;

    if (_animationPromise) {
      _animationPromise.cancel();
    }

    this._animationPromise = null;
  }

  private _visibleChange(visible: boolean): void {
    if (visible) {
      this.viewModel.screenLocationEnabled = true;
      return;
    }

    this._cancelAnimationPromise();

    this._animationPromise = promiseUtils.after(this._animationDelay).then(() => {
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
