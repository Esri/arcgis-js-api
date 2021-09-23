// esri.core
import { on } from "esri/../../core/events";
import Handles from "esri/../../core/Handles";
import { clamp } from "esri/../../core/mathUtils";
import { Maybe, isSome } from "esri/../../core/maybe";
import * as watchUtils from "esri/../../core/watchUtils";

// esri.core.accessorSupport
import { subclass, property, aliasOf } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.BuildingExplorer
import BuildingLevel from "esri/BuildingLevel";

// esri.widgets.BuildingExplorer.BuildingLevelPicker
import * as constants from "esri/widgets/constants";
import { Label } from "esri/widgets/Label";
import { LevelItem } from "esri/widgets/LevelItem";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { tsx, storeNode } from "esri/../support/widget";

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
  innerLevelsContainer: `${CONTAINER}__inner-levels-container`,
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

  protected override postInitialize(): void {
    this.own(
      watchUtils.init(this, "_levelsContainer", () => this._onContainerChange()),
      watchUtils.init(this, "_levels", () => this._createLevelWidgets()),
      watchUtils.init(this, "messages", () => (this._labelWidget.messages = this.messages))
    );
  }

  override destroy(): void {
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
  override viewModel = this._defaultViewModel;

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
  private _levelWidgets: LevelItem[] = [];

  /**
   * Widget used to display the currently selected level or a label asking the user to select one.
   */
  @property()
  private _labelWidget: Label = new Label({
    onClear: () => this.viewModel.clear()
  });

  /**
   * The level item which is currently being hovered/focused.
   */
  @property()
  private _hoveredLevel: Maybe<number> = null;

  /**
   * How information about the levels which are to be displayed.
   */
  @aliasOf("viewModel.allowedValues")
  private readonly _levels: readonly number[];

  /**
   * The number of levels to be displayed in the widget.
   */
  @aliasOf("_levels.length")
  private _numLevels: number;

  /**
   * The height of the levels container when no level is hovered.
   */
  @property({ readOnly: true })
  private get _levelsHeight(): number {
    return Math.round(this._levelHeight * this._numLevels);
  }

  /**
   * When mouse/pointer hovers the level picker, some levels expand. This stores
   * the size of the levels when expanded.
   */
  @property()
  private _expandedLevelsHeight: number = undefined;

  /**
   * Margin we need to apply to the levels in order to compensate for their
   * expansion such that they are still properly aligned.
   */
  @property({ readOnly: true })
  private get _expandedLevelsMargin(): number {
    return Math.round((this._expandedLevelsHeight - this._levelsHeight) / 2);
  }

  /**
   * The width of each level item.
   */
  @property({ readOnly: true })
  private get _levelWidth(): number {
    const { LEVEL_WIDTH_NOMINATOR: x, LEVEL_WIDTH_CONSTANT: c } = constants;
    const width = x / Math.sqrt(this._numLevels) + c;

    return Math.round(clamp(width, constants.LEVEL_WIDTH_MIN, constants.LEVEL_WIDTH_MAX));
  }

  /**
   * The height of each level item.
   */
  @property({ readOnly: true })
  private get _levelHeight(): number {
    const defaultHeight = constants.LEVEL_HEIGHT_DEFAULT;
    const height = (defaultHeight * 2) / Math.sqrt(this._numLevels);
    return Math.round(clamp(height, 2, defaultHeight));
  }

  /**
   * Property that determines how many levels after and before the hovered level have their size changed, according
   * to the gaussian size function.
   */
  @property({ readOnly: true })
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
    readOnly: true
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

  override render(): VNode {
    const numLevels = this._levelWidgets.length;
    const items = numLevels > 1 ? this._levelWidgets.map((l) => l.render()) : null;

    // Larger padding, compensated by a negative margin. Visually, levels will
    // get the right padding, but they'll have "more space" without being clipped.
    const padding = constants.LEVELS_PADDING * constants.LEVELS_MARGIN_FACTOR;
    const outterMargin = -padding / constants.LEVELS_MARGIN_FACTOR;

    const innerHeight = this._levelsHeight;
    const outterHeight = innerHeight + padding * 2;

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
          styles={{
            height: `${outterHeight}px`,
            marginTop: `${outterMargin}px`,
            marginBottom: `${outterMargin}px`
          }}
          onfocus={this._onFocus}
          afterCreate={storeNode}
          data-node-ref="_levelsContainer"
        >
          <div
            styles={{
              height: `${innerHeight}px`,
              margin: `${constants.LEVELS_PADDING - this._expandedLevelsMargin}px 0 0 0`
            }}
            class={CSS.innerLevelsContainer}
          >
            {items}
          </div>
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
          type="button"
        />
        {this._labelWidget.render()}
        <button
          bind={this}
          class={CSS.arrowDown}
          disabled={!this.viewModel.hasPrevious}
          onclick={this._onArrowDownClick}
          aria-label={previousLabel}
          title={previousLabel}
          type="button"
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
    const currentLevelWidget = this._levelWidgets.find(
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
      // 0 is the top of the levels and 1 the bottom. In order to achieve that
      // we need to offset our `event.clientY` by the top of our container, the
      // padding and the top margin we apply to the levels in order to center
      // them when they're expanded.
      //
      // +---------------+  <- containerTop (px)
      // |    padding    |
      // +---------------+
      // | +-----------+ |
      // | | marginTop | |
      // | +-----------+ |  <- normalized position === 0
      // | |     h     | |
      // | |     e     | |
      // | |     i     | |  <- event.clientY (px)
      // | |     g     | |
      // | |     h     | |
      // | |     t     | |
      // | +-----------+ |  <- normalized position === 1
      // +---------------+
      // |    padding    |
      // +---------------+

      const containerTop = this._containerPosTop;
      const padding = constants.LEVELS_PADDING * constants.LEVELS_MARGIN_FACTOR;
      const marginTop = this._expandedLevelsMargin;

      let height = this._levelsHeight;
      let offset = containerTop + padding + marginTop;

      // Make sure levels are biggest when hovering their middle rather their bottom/top
      const halfLevelHeight = this._levelHeight / 2;
      offset += halfLevelHeight;
      height -= halfLevelHeight;

      let pos = (event.clientY - offset) / height;
      pos += constants.LEVELS_POINTER_ADJUSTMENT;

      this._normalizedPointerPosition = pos;
    }

    return false;
  };

  private _onPointerPositionChange(): void {
    let expandedLevelsHeight = 0;

    // Update the size of each level while also updating our total expanded height.
    this._levelWidgets.forEach((widget: LevelItem, index: number) => {
      const { width, height } = this._getLevelWidgetSize(index);
      widget.height = height;
      widget.width = width;
      expandedLevelsHeight += height;
    });

    // We could almost make the hovered level a computed property.
    // However, we can set it by focusing on a level so we need to assign here.
    this._hoveredLevel = this._levelClosestToPointer;

    // Only update when there is a significant change to avoid flickering.
    const oldHeight = this._expandedLevelsHeight;
    if (oldHeight == null || Math.abs(oldHeight - expandedLevelsHeight) > 30) {
      this._expandedLevelsHeight = expandedLevelsHeight;
    }
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

export default BuildingLevelPicker;
