// esri.core
import { Maybe, isSome, unwrap, isNone } from "esri/../../core/maybe";

// esri.core.accessorSupport
import { subclass, property, aliasOf } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.BuildingExplorer
import BuildingPhase from "esri/BuildingPhase";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { tsx, storeNode, isRTL } from "esri/../support/widget";

interface ButtonProps {
  phase: number;
  active: boolean;
  current: boolean;
}

interface Messages {
  nextPhase: string;
  previousPhase: string;
  currentPhase: string;
}

const DEFAULT_MESSAGES: Messages = {
  nextPhase: "nextPhase",
  previousPhase: "previousPhase",
  currentPhase: "{{value}}"
};

const CONTAINER = "esri-building-phase-picker";

const CSS = {
  container: `${CONTAINER}`,
  phasesContainer: `${CONTAINER}__phases-container`,
  phase: `${CONTAINER}__phase`,
  phaseActive: `${CONTAINER}__phase--active`,
  phaseCurrent: `${CONTAINER}__phase--current`,
  divider: `${CONTAINER}__divider`,
  dividerActive: `${CONTAINER}__divider--active`,
  arrowLeft: `${CONTAINER}__arrow-left`,
  arrowRight: `${CONTAINER}__arrow-right`
};

/**
 * Widget which disaplays available building phases and allows users to select the phase they wish to view.
 */
@subclass("esri.widgets.BuildingExplorer.BuildingPhasePicker.BuildingPhasePicker")
class BuildingPhasePicker extends Widget {
  //--------------------------------------------------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    this.own(
      this.watch(["_currentPhase", "_container"], () => {
        this._shouldScrollCurrentPhaseIntoView = true;
      })
    );
  }

  destroy(): void {
    if (this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }
  }

  //--------------------------------------------------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------------------------------------------------

  private _defaultViewModel = new BuildingPhase();

  /**
   * The view model used to control this widget.
   */
  @property({ type: BuildingPhase })
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

  /**
   * The phases which are to be rendered.
   *
   * @private
   */
  @aliasOf("viewModel.allowedValues")
  private _phases: readonly number[];

  /**
   * The phase which is currently selected/active, if any.
   *
   * @private
   */
  @property({ readOnly: true })
  private get _currentPhase(): Maybe<number> {
    return this.viewModel.enabled ? this.viewModel.value : null;
  }

  /**
   * The element which contains the picker.
   */
  @property()
  private _phasesContainer: Maybe<HTMLElement> = null;

  /**
   * When true, we will scroll the current phase button into view after the next render.
   *
   * @private
   */
  private _shouldScrollCurrentPhaseIntoView = true;

  /**
   * When true, we will focus the current phase button after the next render.
   */
  private _shouldFocusCurrentPhase = false;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    if (this._phases.length < 2) {
      return <div></div>;
    }

    const rtl = isRTL();
    const previousPhaseLabel = this.messages.previousPhase;
    const nextPhaseLabel = this.messages.nextPhase;

    return (
      <div
        bind={this}
        key={this}
        class={this.classes("esri-widget", CSS.container)}
        onkeydown={this._onKeyDown}
      >
        <button
          bind={this}
          class={rtl ? CSS.arrowRight : CSS.arrowLeft}
          disabled={!this.viewModel.hasPrevious}
          onclick={this._onArrowLeftClick}
          aria-label={previousPhaseLabel}
          title={previousPhaseLabel}
          type="button"
        />

        <div
          bind={this}
          class={CSS.phasesContainer}
          afterCreate={storeNode}
          data-node-ref="_phasesContainer"
          afterUpdate={this._onPhasesContainerAfterUpdate}
        >
          {this._renderPhaseButtons()}
        </div>

        <button
          bind={this}
          class={rtl ? CSS.arrowLeft : CSS.arrowRight}
          disabled={!this.viewModel.hasNext}
          onclick={this._onArrowRightClick}
          aria-label={nextPhaseLabel}
          title={nextPhaseLabel}
          type="button"
        />
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Renders all the buttons (and the dividers between them) for the available phases.
   *
   * @private
   */
  private _renderPhaseButtons(): VNode {
    const phases = this._phases;
    const nodes: VNode[] = [];

    for (let i = 0; i < phases.length; ++i) {
      const phase = phases[i];
      const props = {
        phase,
        active: isSome(this._currentPhase) ? phase <= this._currentPhase : false,
        current: isSome(this._currentPhase) ? phase === this._currentPhase : false
      };

      // The first button doesn't need a divider before it.
      // 0 - 1 - 2 - 3
      //
      if (i > 0) {
        nodes.push(this._renderDivider(props));
      }

      nodes.push(this._renderPhaseButton(props));
    }

    return nodes;
  }

  /**
   * Renders a single button which allow selecting a phase.
   *
   * @private
   */
  private _renderPhaseButton({ phase, active, current }: ButtonProps): VNode {
    const label = unwrap(this.viewModel.getValueLabel(phase));

    return (
      <button
        key={`phase-${phase}`}
        class={this.classes(CSS.phase, {
          [CSS.phaseActive]: active,
          [CSS.phaseCurrent]: current
        })}
        aria-label={label}
        title={label}
        onclick={() => this.viewModel.select(phase)}
        type="button"
      >
        {phase}
      </button>
    );
  }

  /**
   * Renders a line which connects two phase buttons.
   *
   * @private
   */
  private _renderDivider({ phase, active }: ButtonProps): VNode {
    return (
      <div
        key={`phase-divider-${phase}`}
        class={this.classes(CSS.divider, { [CSS.dividerActive]: active })}
      />
    );
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
        event.stopPropagation();
        event.preventDefault();

        this.viewModel.previous();
        this._shouldFocusCurrentPhase = true;
        break;
      case "ArrowUp":
      case "ArrowRight":
        event.stopPropagation();
        event.preventDefault();

        this.viewModel.next();
        this._shouldFocusCurrentPhase = true;
        break;
    }
  }

  /**
   * Called when the user clicks the left arrow button or presses enter when it is focused.
   *
   * @private
   */
  private _onArrowLeftClick(): void {
    this.viewModel.previous();
  }

  /**
   * Called when the user clicks the right arrow button or presses enter when it is focused.
   *
   * @private
   */
  private _onArrowRightClick(): void {
    this.viewModel.next();
  }

  /**
   * Called when the phases container element gets updated in order to scroll
   * the current phase button into view.
   *
   * @private
   */
  private _onPhasesContainerAfterUpdate(): void {
    if (isNone(this._phasesContainer)) {
      return;
    }

    const currentPhaseElement: Maybe<HTMLButtonElement> = this._phasesContainer.querySelector(
      `.${CSS.phaseCurrent}`
    ) as HTMLButtonElement;
    if (isNone(currentPhaseElement)) {
      return;
    }

    if (this._shouldScrollCurrentPhaseIntoView) {
      // This scrolls the current phase button into the center of the container
      // despite it having having `overflow: hidden` in its CSS (so we don't get
      // a scrollbar.)
      const containerWidth = this._phasesContainer.offsetWidth;
      const phaseLeft = currentPhaseElement.offsetLeft;
      const phaseWidth = currentPhaseElement.offsetWidth;

      this._phasesContainer.scrollLeft = -(containerWidth / 2) + phaseLeft - phaseWidth / 2;
      this._shouldScrollCurrentPhaseIntoView = false;
    }

    if (this._shouldFocusCurrentPhase) {
      currentPhaseElement.focus();
      this._shouldFocusCurrentPhase = false;
    }
  }
}

export default BuildingPhasePicker;
