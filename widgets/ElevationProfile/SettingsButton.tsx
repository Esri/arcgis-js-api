// esri.core
import * as events from "esri/core/events";
import { handlesGroup } from "esri/core/handleUtils";
import { applySome, destroyMaybe, isSome, Maybe } from "esri/core/maybe";
import { isMeasurementSystem, SystemOrLengthUnit } from "esri/core/unitUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.ElevationProfile
import { SETTINGS_CSS as CSS } from "esri/widgets/css";
import ElevationProfileViewModel from "esri/widgets/ElevationProfileViewModel";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/widgets/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import Popover from "esri/support/Popover";
import { messageBundle, renderable, tsx } from "esri/support/widget";

export interface ConstructionParameters {
  viewModel: ElevationProfileViewModel;
}

/**
 * Button which toggles the elevation profile settings popover.
 */
@subclass("esri.widgets.ElevationProfile.SettingsButton")
export class SettingsButton extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params: ConstructionParameters, parentNode?: string | Element) {
    super(params, parentNode);
  }

  destroy(): void {
    this._destroyPopover();
  }

  render(): VNode {
    const label =
      isSome(this._popover) && this._popover.open
        ? this._messages.hideSettings
        : this._messages.showSettings;

    return (
      <button
        class={this.classes(CSS.base)}
        title={label}
        bind={this}
        afterCreate={this._initializePopover}
        onclick={this._togglePopover}
        aria-label={label}
      ></button>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property()
  @renderable(["unit", "unitOptions"])
  viewModel: ElevationProfileViewModel;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @property()
  @renderable()
  @messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")
  private _messages: ElevationProfileMessages;

  @property()
  @renderable()
  @messageBundle("esri/core/t9n/Units")
  private _messagesUnits: UnitsMessages = null;

  private _popover: Maybe<Popover> = null;
  private _buttonElement: Maybe<HTMLElement> = null;
  private _clickOutsideHandle: Maybe<IHandle> = null;
  // When true, we'll focus on the unit select element after the popover is opened.
  private _requestFocusOnCreate = false;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _initializePopover(buttonElement: HTMLElement): void {
    this._destroyPopover();

    this._buttonElement = buttonElement;

    // Offset used to align the button icon to the edge of the widget. We'll have
    // to shift the popover by the same amount.
    const buttonOffset = parseInt(
      getComputedStyle(buttonElement).getPropertyValue("--button-offset"),
      10
    );

    this._popover = new Popover({
      owner: this,
      placement: "bottom-end",
      offset: [buttonOffset, 0],
      anchorElement: buttonElement,
      renderContentFunction: () => this._renderPopoverContent()
    });
  }

  private _destroyPopover(): void {
    applySome(this._clickOutsideHandle, (handle) => handle.remove());
    destroyMaybe(this._popover);
  }

  private _renderPopoverContent(): VNode {
    const messagesUnits = this._messagesUnits;
    const { unit, unitOptions } = this.viewModel;

    return (
      <div
        class={CSS.popoverContent}
        bind={this}
        onkeydown={this._onPopoverKeyDown}
        afterCreate={this._onPopoverContentAfterCreate}
      >
        <label class={CSS.selectLabel}>{this._messages.unitSelectLabel}</label>
        <select
          class={CSS.select}
          value={unit}
          bind={this}
          onchange={this._onUnitChange}
          afterCreate={this._onUnitSelectAfterCreate}
        >
          {unitOptions.map((unitOption) => (
            <option key={unitOption} value={unitOption}>
              {isMeasurementSystem(unitOption)
                ? messagesUnits.systems[unitOption]
                : messagesUnits.units[unitOption].pluralCapitalized}
            </option>
          ))}
        </select>
      </div>
    );
  }

  private _onUnitChange(event: InputEvent): void {
    const selectElement = event.target as HTMLSelectElement;
    this.viewModel.unit = selectElement.value as SystemOrLengthUnit;

    this._closePopover();
  }

  private _onUnitSelectAfterCreate(element: HTMLElement): void {
    if (this._requestFocusOnCreate) {
      this._requestFocusOnCreate = false;
      element.focus();
    }
  }

  private _onPopoverKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case "Enter":
      case "Escape":
        // We need to stop the event so that it doesn't trigger `_togglePopover`
        // by triggering a click on the button.
        event.stopPropagation();
        event.preventDefault();

        this._closePopover();
        break;
    }
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

    // Let's focus on the unit select element when the popover opens.
    this._requestFocusOnCreate = true;
  }

  private _closePopover({ focusOnButton = true }: { focusOnButton?: boolean } = {}): void {
    applySome(this._popover, (popover) => (popover.open = false));
    applySome(this._clickOutsideHandle, (handle) => handle.remove());

    if (focusOnButton) {
      // Switch focus back to the button to make keyboard navigation easier.
      applySome(this._buttonElement, (el) => el.focus());
    }
  }

  private _onPopoverContentAfterCreate(element: HTMLElement): void {
    applySome(this._clickOutsideHandle, (handle) => handle.remove());

    // If the user clicks inside the popover, we stop propagation and if they
    // click outside, the event propagates to the window and we'll close the popover.
    this._clickOutsideHandle = handlesGroup([
      events.on(element, "click", (e) => e.stopPropagation()),
      events.on(window, "click", () => this._closePopover({ focusOnButton: false }))
    ]);
  }
}
