// esri.core
import { isNone } from "esri/core/maybe";
import { after } from "esri/core/promiseUtils";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.geometry
import Point from "esri/geometry/Point";

// esri.views
import { ISceneView } from "esri/views/ISceneView";
import MapView from "esri/views/MapView";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.Spinner
import SpinnerViewModel from "esri/widgets/Spinner/SpinnerViewModel";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { tsx } from "esri/widgets/support/widget";

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
class Spinner extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
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
  view: MapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  @property({ type: SpinnerViewModel })
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

    const animationPromise = after(this._animationDelay);

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

    if (!view || isNone(screenLocation)) {
      return {};
    }

    const { padding } = view;

    return {
      left: `${screenLocation.x - padding.left}px`,
      top: `${screenLocation.y - padding.top}px`
    };
  }
}

export default Spinner;
