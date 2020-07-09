// esri.core
import { find } from "esri/../../core/arrayUtils";
import { on } from "esri/../../core/events";
import Handles = require("esri/../../core/Handles");
import { clamp } from "esri/../../core/mathUtils";
import { Maybe, isSome } from "esri/../../core/maybe";
import * as watchUtils from "esri/../../core/watchUtils";

// esri.core.accessorSupport
import { subclass, property, aliasOf } from "esri/../../core/accessorSupport/decorators";

// esri.core.libs.pep
import PEP = require("esri/../../core/libs/pep/pep");

// esri.widgets
import Widget = require("esri/../Widget");

// esri.widgets.BuildingExplorer
import BuildingLevel = require("esri/BuildingLevel");

// esri.widgets.BuildingExplorer.BuildingLevelPicker
import * as constants from "esri/widgets/constants";
import { Label } from "esri/widgets/Label";
import { LevelItem } from "esri/widgets/LevelItem";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { tsx, renderable, storeNode } from "esri/../support/widget";

interface Messages {
  selectLevel: string;
  clearLevel: string;
  nextLevel: string;
  previousLevel: string;
  currentLevel: string;
}

const DEFAULT_MESSAGES: Messages = {
  selectLevel: "selectLevel",
  clearLevel: "clearLevel",
  nextLevel: "nextLevel",
  previousLevel: "previousLevel",
  currentLevel: "{{value}}"
};

const CONTAINER = "esri-building-level-picker";

const CSS = {
  container: CONTAINER,
  noLevel: `${CONTAINER}--no-level`,
  animateLevel: `${CONTAINER}--animate-level`,
  levelsContainer: `${CONTAINER}__levels-container`,
  labelContainer: `${CONTAINER}__label-container`,
  arrowUp: `${CONTAINER}__arrow-up`,
  arrowDown: `${CONTAINER}__arrow-down`
};

/**
 * Widget which displays a widget.
 */
@subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.BuildingLevelPicker")
class BuildingLevelPicker extends Widget {
  //--------------------------------------------------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  postInitialize(): void {
    this.own(
      watchUtils.init(this, "_levelsContainer", () => this._onContainerChange()),
      watchUtils.init(this, "_levels", () => this._createLevelWidgets()),
      watchUtils.init(this, "messages", () => (this._labelWidget.messages = this.messages))
    );
  }

  destroy(): void {
    this._levelHandles.destroy();
    this._levelEventHandles.destroy();
    this._levelWidgets.forEach((widget) => widget.destroy());
    this._labelWidget.destroy();

    if (this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }
  }

  //--------------------------------------------------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------------------------------------------------

  private _defaultViewModel = new BuildingLevel();

  /**
   * The view model used to control this widget.
   */
  @property({ type: BuildingLevel })
  @renderable(["viewModel.hasNext", "viewModel.hasPrevious"])
  viewModel = this._defaultViewModel;

  /**
   * The widget's message bundle.
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   */
  @property()
  messages: Messages = DEFAULT_MESSAGES;

  //--------------------------------------------------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------------------------------------------------

  private _levelHandles = new Handles();
  private _levelEventHandles = new Handles();

  /**
   * The widgets which represent the levels in the level stack visualization.
   */
  @property()
  @renderable()
  private _levelWidgets: LevelItem[] = [];

  /**
   * Widget used to display the currently selected level or a label asking the user to select one.
   */
  @property()
  @renderable()
  private _labelWidget: Label = new Label({
    onClear: () => this.viewModel.clear()
  });

  /**
   * The level item which is currently being hovered/focused.
   */
  @property()
  @renderable()
  private _hoveredLevel: Maybe<number> = null;

  /**
   * How information about the levels which are to be displayed.
   */
  @aliasOf("viewModel.allowedValues")
  @renderable()
  private readonly _levels: readonly number[];

  /**
   * The number of levels to be displayed in the widget.
   */
  @aliasOf("_levels.length")
  @renderable()
  private _numLevels: number;

  /**
   * The height of the levels container.
   */
  @property({ readOnly: true, dependsOn: ["_numLevels", "_levelHeight"] })
  @renderable()
  private get _levelsContainerHeight(): number {
    return Math.round(this._levelHeight * this._numLevels) + constants.LEVELS_PADDING * 2;
  }

  /**
   * The width of each level item.
   */
  @property({ readOnly: true, dependsOn: ["_numLevels"] })
  private get _levelWidth(): number {
    const { LEVEL_WIDTH_NOMINATOR: x, LEVEL_WIDTH_CONSTANT: c } = constants;
    const width = x / Math.sqrt(this._numLevels) + c;

    return Math.round(clamp(width, constants.LEVEL_WIDTH_MIN, constants.LEVEL_WIDTH_MAX));
  }

  /**
   * The height of each level item.
   */
  @property({ readOnly: true, dependsOn: ["_numLevels"] })
  private get _levelHeight(): number {
    const defaultHeight = constants.LEVEL_HEIGHT_DEFAULT;
    const height = (defaultHeight * 2) / Math.sqrt(this._numLevels);
    return Math.round(clamp(height, 2, defaultHeight));
  }

  /**
   * Property that determines how many levels after and before the hovered level have their size changed, according
   * to the gaussian size function.
   */
  @property({ readOnly: true, dependsOn: ["_numLevels"] })
  private get _gaussianFactor(): number {
    const n = this._numLevels;
    return (
      (n / Math.log(constants.ALPHA_LEVEL_DEPENDENCY_FACTOR * n)) * constants.ALPHA_SPREAD_FACTOR
    );
  }

  /**
   * The level which is closest to the pointer position.
   * Note that this isn't necessarily the hovered/focused level because we can also tab into levels.
   */
  @property({
    readOnly: true,
    dependsOn: ["_levels", "_numLevels", "_hovering", "_normalizedPointerPosition"]
  })
  private get _levelClosestToPointer(): Maybe<number> {
    if (!this._hovering) {
      return null;
    }

    const max = this._numLevels - 1;
    const y = this._normalizedPointerPosition;

    return max >= 0 && isSome(y) ? this._levels[Math.round((1 - y) * max)] : null;
  }

  /**
   * Pointer position relative to the levels container (0 at the top and 1 at the bottom).
   */
  @property({ type: Number, range: { min: 0, max: 1 } })
  @renderable()
  private _normalizedPointerPosition: number = 0;

  /**
   * Whether the use is hovering the stack of levels.
   */
  @property()
  private _hovering: boolean = false;

  /**
   * The vertical position of the widget within the page. Used to calculate when
   * to start tracking the mouse moving over the level items.
   */
  @property()
  private _containerPosTop: Maybe<number> = null;

  /**
   * Element which contains all the level widgets and which is where we will look for pointer events.
   */
  @property()
  private _levelsContainer: Maybe<HTMLElement> = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const numLevels = this._levelWidgets.length;
    const items = numLevels > 1 ? this._levelWidgets.map((l) => l.render()) : null;

    return (
      <div
        bind={this}
        key={this}
        class={this.classes("esri-widget", CSS.container, {
          [CSS.animateLevel]: !this._hovering,
          [CSS.noLevel]: numLevels < 2
        })}
        onkeydown={this._onKeyDown}
      >
        {this._renderLabelContainer()}

        <div
          bind={this}
          class={CSS.levelsContainer}
          styles={{ height: `${this._levelsContainerHeight}px` }}
          onfocus={this._onFocus}
          afterCreate={storeNode}
          data-node-ref="_levelsContainer"
        >
          {items}
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderLabelContainer(): VNode {
    const previousLabel = this.messages.previousLevel;
    const nextLabel = this.messages.nextLevel;

    return (
      <div class={CSS.labelContainer} tabIndex={0}>
        <button
          bind={this}
          class={CSS.arrowUp}
          disabled={!this.viewModel.hasNext}
          onclick={this._onArrowUpClick}
          aria-label={nextLabel}
          title={nextLabel}
        />
        {this._labelWidget.render()}
        <button
          bind={this}
          class={CSS.arrowDown}
          disabled={!this.viewModel.hasPrevious}
          onclick={this._onArrowDownClick}
          aria-label={previousLabel}
          title={previousLabel}
        />
      </div>
    );
  }

  private _updateComponents(): void {
    const selectedValue: Maybe<number> = this.viewModel.enabled ? this.viewModel.value : null;
    const displayedLevel: Maybe<number> = isSome(this._hoveredLevel)
      ? this._hoveredLevel
      : selectedValue;

    this._levelWidgets.forEach((widget) => {
      const valueLabel = this.viewModel.getValueLabel(widget.level);
      widget.label = isSome(valueLabel)
        ? valueLabel
        : this.messages?.currentLevel?.replace("{{level}}", String(widget.level));

      widget.active = widget.level === selectedValue;
      widget.hovering = widget.level === this._hoveredLevel;
    });

    this._labelWidget.level = displayedLevel;
    this._labelWidget.active = displayedLevel === selectedValue;
    this._labelWidget.hovering = isSome(this._hoveredLevel);
  }

  private _onWidthChange(): void {
    this._levelWidgets.forEach((item: LevelItem) => {
      item.width = this._levelWidth;
    });
  }

  private _createLevelWidgets(): void {
    this._levelWidgets.forEach((widget) => widget.destroy());

    this._levelWidgets = this._levels.map(
      (level) =>
        new LevelItem({
          level,
          onSelect: () => this._onLevelToggle(level)
        })
    );

    this._levelHandles.removeAll();
    this._levelHandles.add([
      watchUtils.init(
        this,
        ["messages", "viewModel.value", "viewModel.enabled", "_hoveredLevel", "_hovering"],
        () => this._updateComponents()
      ),
      watchUtils.init(this, ["_normalizedPointerPosition", "_hovering"], () =>
        this._onPointerPositionChange()
      ),
      watchUtils.init(this, "_width", () => this._onWidthChange())
    ]);
  }

  private _onContainerChange(): void {
    const container = this._levelsContainer;
    if (!isSome(container)) {
      return;
    }

    PEP.applyLocal(container);

    this._levelEventHandles.removeAll();
    this._levelEventHandles.add([
      on(container, "pointerenter", this._onPointerEnter),
      on(container, "pointerover", this._onPointerEnter),
      on(container, "pointerleave", this._onPointerLeave),
      on(container, "pointerup", this._onPointerUp),
      on(container, "pointermove", this._onPointerMove)
    ]);
  }

  /**
   * Called when the user presses a key within the phase picker.
   *
   * @private
   */
  private _onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowLeft":
        event.preventDefault();
        event.stopPropagation();

        this.viewModel.previous();
        this._focusCurrentLevel();
        break;
      case "ArrowUp":
      case "ArrowRight":
        event.preventDefault();
        event.stopPropagation();

        this.viewModel.next();
        this._focusCurrentLevel();
        break;
    }
  }

  private _focusCurrentLevel(): void {
    const currentLevelWidget = find(
      this._levelWidgets,
      (widget) => widget.level === this.viewModel.value
    );

    if (currentLevelWidget) {
      currentLevelWidget.focus();
    }
  }

  private _onFocus(): void {
    this._hoveredLevel = this._levels.length > 0 ? this._levels[0] : null;
  }

  private _onLevelToggle(level: number): void {
    if (this.viewModel.enabled && this.viewModel.value === level) {
      this.viewModel.clear();
    } else {
      this.viewModel.select(level);
    }
  }

  private _onArrowUpClick(): void {
    this.viewModel.next();
  }

  private _onArrowDownClick(): void {
    this.viewModel.previous();
  }

  private _onPointerUp = (): void => {
    // If some text is somehow selected during level picking, remove it.
    window.getSelection().removeAllRanges();

    if (!isSome(this._hoveredLevel)) {
      return;
    }

    if (this.viewModel.enabled && this._hoveredLevel === this.viewModel.value) {
      this.viewModel.clear();
    } else {
      this.viewModel.select(this._hoveredLevel);
    }
  };

  private _onPointerEnter = () => {
    if (this._hovering || !isSome(this._levelsContainer)) {
      return;
    }

    this._hovering = true;
    this._containerPosTop = this._levelsContainer.getBoundingClientRect().top ?? 0;
  };

  private _onPointerLeave = () => {
    if (!this._hovering) {
      return;
    }

    this._normalizedPointerPosition = 0;
    this._hoveredLevel = null;
    this._hovering = false;
  };

  private _onPointerMove = (event: PointerEvent): boolean => {
    if (!this._hovering) {
      return false;
    }

    // Prevent touch moves from selecting text.
    window.getSelection().removeAllRanges();

    if (isSome(this._containerPosTop)) {
      // We are interested in getting a normalized position from 0 to 1 where
      // 0 is the top of the container plus the padding and 1 is at the bottom
      // of the continer minus the padding. That is the area where our levels
      // are positioned. Note that we also need to remove the padding from the
      // full height of the container before we normalize.
      //
      // +---------+  <- containerTop (px)
      // | padding |
      // +---------+  <- normalized position === 0
      // |    h    |
      // |    e    |
      // |    i    |
      // |    g    |  <- event.clientY (px)
      // |    h    |
      // |    t    |
      // +---------+  <- normalized position === 1
      // | padding |
      // +---------+

      const padding = constants.LEVELS_PADDING;
      const containerTop = this._containerPosTop;
      const height = this._levelsContainerHeight - padding * 2;

      let pos = (event.clientY - padding - containerTop) / height;

      // Because of crazy CSS with 3D transforms and borders and so on, we need
      // to push everything slightly in order for the gaussian scaling effect
      // of levels to match with the mouse/pointer.
      pos += constants.LEVELS_POINTER_ADJUSTMENT;

      this._normalizedPointerPosition = pos;
    }

    return false;
  };

  private _onPointerPositionChange(): void {
    this._levelWidgets.forEach((widget: LevelItem, index: number) => {
      const { width, height } = this._getLevelWidgetSize(index);
      widget.height = height;
      widget.width = width;
    });

    // We could almost make the hovered level a computed property. However, we can set it by focusing on a level so
    // we need to assign here.
    this._hoveredLevel = this._levelClosestToPointer;
  }

  /**
   * Gets the size a level item should have at the specified index based on the pointer position.
   *
   * @param index
   *    The index of the level item whose dimensions are to be calculated.
   *
   * @private
   */
  private _getLevelWidgetSize(index: number): { width: number; height: number } {
    const size = { width: this._levelWidth, height: this._levelHeight };

    // When we're hovering, we expand the items near the pointer position.
    if (this._hovering) {
      const gaussian = this._getGaussianFactor(index, this._normalizedPointerPosition);
      size.width += constants.LEVEL_HOVERED_EXTRA_WIDTH * gaussian;
      size.height += constants.LEVEL_HOVERED_EXTRA_HEIGHT * gaussian;
    }

    return size;
  }

  private _getGaussianFactor(index: number, normalizedY: number): number {
    const n = this._numLevels - 1;
    const normalizedIndex = (n - index) / n;
    const factor = this._gaussianFactor * (normalizedIndex - normalizedY);

    return Math.exp(-(factor ** 2));
  }
}

export = BuildingLevelPicker;
