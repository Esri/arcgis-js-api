/**
 * The Swipe widget provides a tool to show a portion of a layer or layers
 * on top of a map. Layers can be swiped vertically or horizontally to easily
 * compare two layers or see what is underneath a layer.
 *
 * To use the Swipe widget, set the [leadingLayers](#leadingLayers) and [trailingLayers](#trailingLayers)
 * properties to determine what will be compared on either side of the widget. If one of these properties
 * is not set, then the Swipe widget will overlay the existing map. The [visibleElements](#visibleElements)
 * separate the leading and trailing layers, as shown in the image below.
 *
 * [![widgets-swipe-leadingLayers](../../assets/img/apiref/widgets/swipe.png)](../sample-code/widgets-swipe/index.html)
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * - This widget is not currently supported with a {@link module:esri/views/SceneView}.
 * - There is no current support for {@link module:esri/layers/GroupLayer} in the `leadingLayers` or `trailingLayers`.
 * :::
 *
 * @module esri/widgets/Swipe
 * @since 4.13
 *
 * @example
 * var swipe = new Swipe({
 *   view: view,
 *   leadingLayers: [layer1, layer2],
 *   trailingLayers: [layer3],
 *   direction: "vertical", // swipe widget will move from top to bottom of view
 *   position: 50 // position set to middle of the view (50%)
 * });
 * view.ui.add(swipe);
 *
 * @see [Swipe.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Swipe.tsx)
 * @see [Swipe.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Swipe.scss)
 * @see [Sample - Swipe widget](../sample-code/widgets-swipe/index.html)
 * @see [Sample - Swipe widget with scroll](../sample-code/widgets-swipe-scroll/index.html)
 * @see module:esri/widgets/Swipe/SwipeViewModel
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign"/>

// dojo
import * as i18n from "dojo/i18n!esri/widgets/Swipe/nls/Swipe";

// esri.core
import { eventKey } from "esri/core/events";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.libs.pep
import PEP = require("esri/core/libs/pep/pep");

// esri.views
import MapView = require("esri/views/MapView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Swipe
import { LayerCollection, Direction, VisibleElements } from "esri/widgets/Swipe/interfaces";
import SwipeViewModel = require("esri/widgets/Swipe/SwipeViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-swipe",
  baseDisabled: "esri-swipe--disabled",
  vertical: "esri-swipe--vertical",
  horizontal: "esri-swipe--horizontal",

  container: "esri-swipe__container",

  divider: "esri-swipe__divider",
  handle: "esri-swipe__handle",
  handleHidden: "esri-swipe__handle--hidden",

  widgetIcon: "esri-icon-up-down-arrows",
  handleIcon: "esri-swipe__handle-icon",
  dragIconHorizontal: "esri-icon-drag-horizontal",
  dragIconVertical: "esri-icon-drag-vertical",

  widget: "esri-widget",
  disabled: "esri-disabled"
};

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  handle: true,
  divider: true
};

@subclass("esri.widgets.Swipe")
class Swipe extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Swipe
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   */
  constructor(params?: any) {
    super(params);

    this._onContainerPointerDown = this._onContainerPointerDown.bind(this);
    this._onContainerPointerMove = this._onContainerPointerMove.bind(this);
    this._onContainerPointerUp = this._onContainerPointerUp.bind(this);
  }

  //--------------------------------------------------------------------------
  //
  // Type definitions
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  direction
  //----------------------------------

  /**
   * The direction the Swipe widget moves across the view.
   * If `"horizontal"`, the widget will move left and right and
   * if `"vertical"`, the widget will move up and down.
   *
   * | horizontal | vertical |
   * |------------|----------|
   * |[![widgets-swipe-horizontal](../../assets/img/apiref/widgets/widgets-swipe-horizontal.png)](../sample-code/widgets-swipe/index.html) |[![widgets-swipe-vertical](../../assets/img/apiref/widgets/widgets-swipe-vertical.png)](../sample-code/widgets-swipe/index.html)|
   *
   *
   * @name direction
   * @instance
   * @type {"horizontal"|"vertical"}
   * @default "horizontal"
   */

  @aliasOf("viewModel.direction")
  direction: Direction = null;

  //----------------------------------
  //  disabled
  //----------------------------------

  /**
   * When `true`, sets the widget to a disabled state so the user cannot interact with it.
   *
   * @name disabled
   * @instance
   *
   * @type {Boolean}
   * @default false
   */

  @property()
  @renderable()
  disabled = false;

  //----------------------------------
  //  dragLabel
  //----------------------------------

  /**
   * The text that shows in a tooltip when hovering over the handle of
   * the Swipe widget.
   *
   * @name dragLabel
   * @instance
   * @type {String}
   */

  @property()
  @renderable()
  dragLabel = i18n.dragLabel;

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
  //  leadingLayers
  //----------------------------------

  /**
   * A collection of {@link module:esri/layers/Layer}s that will show on the left or top side of the Swipe widget.
   * See the image in the [class description](#) at the top of the page.
   * Currently, all layers are supported except GroupLayers.
   *
   * @name leadingLayers
   * @instance
   * @autocast
   * @type {module:esri/core/Collection<module:esri/layers/Layer>}
   *
   * @see [trailingLayers](#trailingLayers)
   */

  @aliasOf("viewModel.leadingLayers")
  leadingLayers: LayerCollection = null;

  //----------------------------------
  //  position
  //----------------------------------

  /**
   * The position of the Swipe widget. This determines what percentage
   * of the view will be taken up by the [leadingLayers](#leadingLayers).
   *
   * @name position
   * @instance
   * @type {number}
   * @default 25
   */

  @aliasOf("viewModel.position")
  position: number = null;

  //----------------------------------
  //  trailingLayers
  //----------------------------------

  /**
   * A collection of {@link module:esri/layers/Layer}s that will show on the right or bottom side of the Swipe widget.
   * See the image in the [class description](#) at the top of the page.
   * Currently, all layers are supported except GroupLayers.
   *
   * @name trailingLayers
   * @instance
   * @autocast
   * @type {module:esri/core/Collection<module:esri/layers/Layer>}
   *
   * @see [leadingLayers](#leadingLayers)
   */

  @aliasOf("viewModel.trailingLayers")
  trailingLayers: LayerCollection = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   *
   * @type {module:esri/views/MapView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Swipe/SwipeViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Swipe/SwipeViewModel}
   * @autocast
   */

  @property({
    type: SwipeViewModel
  })
  @renderable(["viewModel.state", "viewModel.position", "viewModel.direction"])
  viewModel = new SwipeViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability change the visibility of individual elements of the widget's display.
   *
   * @name visibleElements
   * @instance
   * @type {Object}
   * @property {boolean} handle - Indicates whether the handle from which you drag the widget is visible.
   * Default value is `true`.
   * @property {boolean} divider - Indicates whether the divider between the leading and trailing layers is visible.
   * Default value is `true`.
   *
   * @example
   * swipe.visibleElements = {
   *    divider: true,
   *    handle: false // handle will not display
   * }
   */

  @property()
  @renderable()
  set visibleElements(value: VisibleElements) {
    this._set("visibleElements", {
      ...DEFAULT_VISIBLE_ELEMENTS,
      ...value
    });
  }
  get visibleElements(): VisibleElements {
    return this._get("visibleElements") || DEFAULT_VISIBLE_ELEMENTS;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _pointerOffset: number = null;

  private _container: HTMLElement = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  protected renderHandle(): VNode {
    const { direction } = this.viewModel;
    const { visibleElements } = this;
    const iconClasses = {
      [CSS.dragIconHorizontal]: direction === "vertical",
      [CSS.dragIconVertical]: direction === "horizontal"
    };
    const handleClasses = this.classes(CSS.handle, !visibleElements.handle && CSS.handleHidden);
    return (
      <div key="handle" role="presentation" class={handleClasses}>
        <span aria-hidden="true" class={this.classes(CSS.handleIcon, iconClasses)} />
      </div>
    );
  }

  protected renderDivider(): VNode {
    const { visibleElements } = this;

    return visibleElements && visibleElements.divider ? (
      <div key="divider" role="presentation" class={CSS.divider} />
    ) : null;
  }

  protected renderContent(): VNode[] {
    return [this.renderDivider(), this.renderHandle()];
  }

  protected renderContainer(): VNode {
    const { disabled, dragLabel, viewModel } = this;
    const { max, min, direction, position } = viewModel;

    const percentage = `${position}%`;

    const containerStyles = {
      top: direction === "vertical" ? percentage : null,
      left: direction === "vertical" ? null : percentage
    };

    const contentNodes = this.renderContent();

    return disabled ? (
      <div key="container" role="presentation" styles={containerStyles} class={CSS.container}>
        {contentNodes}
      </div>
    ) : (
      <div
        tabIndex={0}
        key="container"
        bind={this}
        afterCreate={this._afterContainerCreate}
        onkeydown={this._onContainerKeyDown}
        touch-action="none"
        role="slider"
        title={dragLabel}
        aria-label={dragLabel}
        aria-orientation={direction}
        aria-valuemax={`${max}`}
        aria-valuemin={`${min}`}
        aria-valuenow={`${position}`}
        aria-valuetext={percentage}
        styles={containerStyles}
        class={CSS.container}
      >
        {contentNodes}
      </div>
    );
  }

  render(): VNode {
    const { state, direction } = this.viewModel;

    const disabled = state === "disabled" || this.disabled;

    const rootClasses = {
      [CSS.disabled]: disabled,
      [CSS.baseDisabled]: disabled,
      [CSS.vertical]: direction === "vertical",
      [CSS.horizontal]: direction === "horizontal"
    };

    return (
      <div class={this.classes(CSS.base, CSS.widget, rootClasses)}>
        {state === "disabled" ? null : this.renderContainer()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterContainerCreate(element: HTMLElement): void {
    PEP.applyLocal(element);
    this._container = element;
    element.addEventListener("pointerdown", this._onContainerPointerDown);
  }

  private _calculatePointerOffset(event: PointerEvent): void {
    const { direction } = this;

    const target = event.target as HTMLElement;
    const containerSize = (direction === "vertical" ? target.clientHeight : target.clientWidth) / 2;

    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    this._pointerOffset =
      direction === "vertical" ? offsetY - containerSize : offsetX - containerSize;
  }

  private _onContainerPointerDown(event: PointerEvent): void {
    event.preventDefault();
    this._container && document.activeElement !== this.container && this._container.focus();

    this._calculatePointerOffset(event);
    document.addEventListener("pointerup", this._onContainerPointerUp);
    document.addEventListener("pointermove", this._onContainerPointerMove);
  }

  private _onContainerPointerUp(event: PointerEvent): void {
    event.preventDefault();

    document.removeEventListener("pointerup", this._onContainerPointerUp);
    document.removeEventListener("pointermove", this._onContainerPointerMove);
  }

  private _onContainerPointerMove(event: PointerEvent): void {
    event.preventDefault();

    const { _pointerOffset, container, direction } = this;
    const { clientX, clientY } = event;
    const { top, left, width, height } = container.getBoundingClientRect();
    const max = direction === "vertical" ? height : width;

    const value =
      direction === "vertical" ? clientY - top - _pointerOffset : clientX - left - _pointerOffset;

    const percentageValue = (value / max) * 100;

    this.position = percentageValue;
  }

  private _getKeyPosition(event: KeyboardEvent): number {
    const key = eventKey(event);
    const { position } = this;
    const { max, min, step, stepMultiplier, direction } = this.viewModel;
    const multipliedStep = step * stepMultiplier;

    const MOVEMENT_KEYS = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Home",
      "End",
      "PageUp",
      "PageDown"
    ];

    if (MOVEMENT_KEYS.indexOf(key) > -1) {
      event.preventDefault();
      event.stopPropagation();
    }

    const increaseKeys =
      direction === "vertical"
        ? key === "ArrowDown" || key === "ArrowRight"
        : key === "ArrowUp" || key === "ArrowRight";

    if (increaseKeys) {
      const stepValue = event.shiftKey ? multipliedStep : step;

      return position + stepValue;
    }

    const decreaseKeys =
      direction === "vertical"
        ? key === "ArrowUp" || key === "ArrowLeft"
        : key === "ArrowDown" || key === "ArrowLeft";

    if (decreaseKeys) {
      const stepValue = event.shiftKey ? multipliedStep : step;

      return position - stepValue;
    }

    if (key === "Home") {
      return min;
    }

    if (key === "End") {
      return max;
    }

    const multiIncreaseKey = direction === "vertical" ? key === "PageDown" : key === "PageUp";

    if (multiIncreaseKey) {
      return position + multipliedStep;
    }

    const multiDecreaseKey = direction === "vertical" ? key === "PageUp" : key === "PageDown";

    if (multiDecreaseKey) {
      return position - multipliedStep;
    }

    return null;
  }

  private _onContainerKeyDown(event: KeyboardEvent): void {
    const position = this._getKeyPosition(event);

    if (typeof position === "number") {
      this.position = position;
    }
  }
}

export = Swipe;
