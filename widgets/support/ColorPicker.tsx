// esri
import Color from "esri/../Color";

// esri.core
import Handles from "esri/../core/Handles";
import { makeHandle } from "esri/../core/handleUtils";
import { applySome, destroyMaybe, isNone, isSome, Maybe } from "esri/../core/maybe";

// esri.core.accessorSupport
import { property, subclass } from "esri/../core/accessorSupport/decorators";
import { autorun } from "esri/../core/accessorSupport/trackingUtils";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.support
import { VNode } from "esri/widgets/interfaces";
import { tsx } from "esri/widgets/jsxFactory";
import Popover from "esri/widgets/Popover";
import { messageBundle, WidgetProperties } from "esri/widgets/widget";

// esri.widgets.support.t9n
import ColorPickerMessages from "esri/widgets/t9n/ColorPicker";

interface RequiredConstructProperties {
  value: Color;
}

interface OptionalConstructProperties {
  class: string;
  value: Color;
  alphaEnabled: boolean;
  onChange: Maybe<(value: Color) => void>;
}

type ConstructProperties = RequiredConstructProperties &
  Partial<OptionalConstructProperties> &
  WidgetProperties;

const BASE = "esri-color-picker";

const CSS = {
  base: BASE,
  backgroundPattern: `${BASE}__bg-pattern`,
  toggleButton: `${BASE}__toggle-button`,
  popover: `${BASE}__popover`,
  opacitySliderContainer: `${BASE}__opacity-slider-container`,
  opacitySlider: `${BASE}__opacity-slider`
};

const enum HandleKeys {
  /**
   * Handle for the timeout used to poll for the presence of the hex input in
   * the color picker so we can focus it.
   */
  HexInputPollTimeout = "hex-input-poll-timeout",
  /**
   * Handle for the timeout used to set the focus on the toggle button after
   * closing the popover.
   */
  ButtonFocusTimeout = "button-focus-timeout"
}

@subclass("esri.widgets.support.ColorPicker")
export class ColorPicker extends Widget<ConstructProperties> implements ConstructProperties {
  //----------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //----------------------------------------------------------------------------

  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    this.own(
      autorun(() => {
        applySome(this._containerElement, (container) => {
          container.style.setProperty("--esri-color-picker-value", this.value.toCss(true));
        });
      })
    );
  }

  protected override loadDependencies(): Promise<any> {
    return Promise.all([
      import("@esri/calcite-components/dist/custom-elements/bundles/button"),
      import("@esri/calcite-components/dist/custom-elements/bundles/color-picker"),
      import("@esri/calcite-components/dist/custom-elements/bundles/label"),
      import("@esri/calcite-components/dist/custom-elements/bundles/slider")
    ]);
  }

  override destroy(): void {
    this._destroyPopover();
    this._handles = destroyMaybe(this._handles);
    this._buttonElement = null;
  }

  override render(): VNode {
    const messages = this._messages;
    const label = isSome(this._popover) && this._popover.open ? messages.close : messages.open;

    return (
      <div
        class={this.classes(CSS.base, this.class)}
        bind={this}
        afterCreate={this._onContainerAfterCreate}
      >
        <div class={CSS.backgroundPattern}></div>
        <calcite-button
          appearance="transparent"
          label={label}
          class={CSS.toggleButton}
          color="neutral"
          id={this.id}
          scale="s"
          tabIndex={-1}
          title={label}
          bind={this}
          onclick={this._togglePopover}
          afterCreate={this._onButtonAfterCreate}
        />
      </div>
    );
  }

  //----------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //----------------------------------------------------------------------------

  /**
   * Extra classname to be added to the widget's container element.
   *
   * @instance
   * @name class
   * @type {string}
   */
  @property()
  class: string;

  /**
   * The current color to be shown on the widget.
   *
   * @instance
   * @name value
   * @type {esri:Color}
   */
  @property()
  value: Color = new Color();

  /**
   * Whether the opacity/alpha can be modified through the widget.
   *
   * @instance
   * @name alphaEnabled
   * @type {boolean}
   */
  @property()
  alphaEnabled = true;

  /**
   * Called when the selected color is changed.
   *
   * @instance
   * @name onChange
   * @type {Function}
   */
  @property()
  onChange: Maybe<(value: Color) => void>;

  //----------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //----------------------------------------------------------------------------

  private _handles = new Handles();

  @property()
  private _containerElement: Maybe<HTMLElement> = null;

  @property()
  private _popover: Maybe<Popover> = null;

  @property()
  private _popoverElement: Maybe<HTMLElement> = null;

  @property()
  private _buttonElement: Maybe<HTMLCalciteButtonElement> = null;

  @property()
  @messageBundle("esri/widgets/support/t9n/ColorPicker")
  private _messages!: ColorPickerMessages;

  //----------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //----------------------------------------------------------------------------

  private _onContainerAfterCreate(container: HTMLDivElement): void {
    this._containerElement = container;
  }

  private _onButtonAfterCreate(button: HTMLCalciteButtonElement): void {
    this._destroyPopover();

    this._buttonElement = button;
    this._popover = new Popover({
      owner: this,
      anchorElement: button,
      placement: "bottom-start",
      renderContentFunction: this._renderPopoverContent
    });
  }

  private _destroyPopover(): void {
    this._handles.remove(HandleKeys.HexInputPollTimeout);
    this._popover = destroyMaybe(this._popover);
    this._popoverElement = null;
  }

  private _renderPopoverContent(): VNode {
    const color = this.value;
    const messages = this._messages;

    return (
      <div
        class={CSS.popover}
        tabIndex={-1}
        bind={this}
        afterCreate={this._onPopoverAfterCreate}
        onfocusout={this._onPopoverFocusOut}
        onkeydown={this._onPopoverKeyDown}
      >
        <calcite-color-picker
          appearance="minimal"
          hideSaved
          hideChannels
          scale="m"
          value={color.toCss()}
          bind={this}
          onCalciteColorPickerInput={this._onColorInput}
          afterCreate={this._onColorPickerAfterCreate}
        />
        {this.alphaEnabled && (
          <section class={CSS.opacitySliderContainer}>
            <calcite-label scale="s">
              {messages.opacity}
              <calcite-slider
                class={CSS.opacitySlider}
                labelHandles
                min={0}
                max={1}
                step={0.01}
                value={color.a}
                bind={this}
                onCalciteSliderChange={this._onOpacityChange}
              />
            </calcite-label>
          </section>
        )}
      </div>
    );
  }

  private _onColorInput(e: CustomEvent): void {
    const target = e.target as HTMLCalciteColorPickerElement;
    const value = target.value;

    const newColor = typeof value === "string" ? Color.fromRgb(value) : new Color();
    newColor.a = this.value.a;

    this._onChange(newColor);
  }

  private _onOpacityChange(e: CustomEvent): void {
    const target = e.target as HTMLCalciteSliderElement;

    const newColor = this.value.clone();
    newColor.a = target.value;

    this._onChange(newColor);
  }

  private _onChange(color: Color): void {
    this.value = color;

    if (isSome(this.onChange)) {
      this.onChange(color);
    }
  }

  private _onColorPickerAfterCreate(picker: HTMLCalciteColorPickerElement): void {
    // We need to poll for the presence of the hex input before we can focus it =(
    this._handles.remove(HandleKeys.HexInputPollTimeout);
    this._handles.add(
      pollUntil(
        () => !!(picker as any).hexInputNode,
        () => {
          this._handles.remove(HandleKeys.HexInputPollTimeout);
          picker.setFocus();
        }
      ),
      HandleKeys.HexInputPollTimeout
    );
  }

  private _togglePopover(_: MouseEvent): void {
    if (isSome(this._popover) && this._popover.open) {
      this._closePopover();
    } else {
      this._openPopover();
    }
  }

  private _openPopover(): void {
    applySome(this._popover, (popover) => (popover.open = true));
  }

  private _closePopover(): void {
    this._handles.remove(HandleKeys.HexInputPollTimeout);
    applySome(this._popover, (popover) => (popover.open = false));

    this._setFocusOnButton();
  }

  private _setFocusOnButton(): void {
    this._handles.remove(HandleKeys.ButtonFocusTimeout);
    this._handles.add(
      timeout(() => {
        applySome(this._buttonElement, (btn) => btn.setFocus());
      }),
      HandleKeys.ButtonFocusTimeout
    );
  }

  private _onPopoverAfterCreate(element: HTMLElement): void {
    this._popoverElement = element;
  }

  private _onPopoverFocusOut(event: FocusEvent): void {
    const popoverElement = this._popoverElement;
    if (isNone(popoverElement)) {
      return;
    }

    const relatedTarget = event.relatedTarget;

    if (relatedTarget && relatedTarget instanceof Node) {
      // If we're still in the popover we don't want internal events to close it.
      if (popoverElement.contains(relatedTarget)) {
        return;
      }

      // If the toggle button or the associated label are clicked, we'll let the
      // normal toggling behavior happen. Otherwise the popup would just get
      // opened again right after being closed.
      if (relatedTarget === this._buttonElement || this._isAssociatedLabel(relatedTarget)) {
        return;
      }
    }

    this._closePopover();
  }

  private _isAssociatedLabel(element: any): boolean {
    const id = this.id;
    const tagName = element.tagName?.toLowerCase();
    return (
      (tagName === "calcite-label" && (element as HTMLCalciteLabelElement).for === id) ||
      (tagName === "label" && element.htmlFor === id)
    );
  }

  private _onPopoverKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape" || event.key === "Enter") {
      event.stopPropagation();
      this._closePopover();
    }
  }
}

function timeout(cb: () => void, timeoutMillis?: number): IHandle {
  const timeoutId = setTimeout(cb, timeoutMillis);
  return makeHandle(() => clearTimeout(timeoutId));
}

function pollUntil(predicate: () => boolean, cb: () => void, interval: number = 50): IHandle {
  let timeoutId: number;

  function _poll(): void {
    if (predicate()) {
      cb();
      return;
    }

    timeoutId = setTimeout(_poll, interval);
  }

  timeoutId = setTimeout(_poll, interval);
  return makeHandle(() => clearTimeout(timeoutId));
}
