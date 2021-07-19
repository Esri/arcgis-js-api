// esri.core
import * as events from "esri/../../core/events";
import { applySome, destroyMaybe, isSome, Maybe, removeMaybe } from "esri/../../core/maybe";
import { isMeasurementSystem, SystemOrLengthUnit } from "esri/../../core/unitUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/../../core/t9n/Units";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.ElevationProfile
import { SETTINGS_CSS as CSS } from "esri/css";
import ElevationProfileVisibleElements from "esri/ElevationProfileVisibleElements";
import { IElevationProfileViewModel } from "esri/interfaces";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import Popover from "esri/../support/Popover";
import { messageBundle, tsx } from "esri/../support/widget";

export interface ConstructProperties {
  viewModel: IElevationProfileViewModel;
  visibleElements: Partial<ElevationProfileVisibleElements>;
}

/**
 * Button which toggles the elevation profile settings popover.
 */
@subclass("esri.widgets.ElevationProfile.SettingsButton")
export class SettingsButton extends Widget implements ConstructProperties {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  destroy(): void {
    this._destroyPopover();
  }

  render(): VNode {
    // When there is nothing to render in the popup, don't even render the button.
    const { unitSelector, uniformChartScalingToggle } = this.visibleElements;
    if (!unitSelector && !uniformChartScalingToggle) {
      return <div key={`${this.id}-empty`}></div>;
    }

    const label =
      isSome(this._popover) && this._popover.open
        ? this._messages.hideSettings
        : this._messages.showSettings;

    return (
      <button
        class={CSS.base}
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
  viewModel: IElevationProfileViewModel;

  @property()
  visibleElements: Partial<ElevationProfileVisibleElements>;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @property()
  @messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")
  private _messages: ElevationProfileMessages;

  @property()
  @messageBundle("esri/core/t9n/Units")
  private _messagesUnits: UnitsMessages = null;

  private _popover: Maybe<Popover> = null;
  private _buttonElement: Maybe<HTMLButtonElement> = null;
  private _focusOutElement: Maybe<IHandle> = null;
  // When true, we'll focus on the unit select element after the popover is opened.
  private _requestFocusOnCreate = false;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _initializePopover(buttonElement: HTMLButtonElement): void {
    this._destroyPopover();

    this._buttonElement = buttonElement;

    this._popover = new Popover({
      owner: this,
      placement: "bottom-end",
      offset: [0, 0],
      anchorElement: buttonElement,
      renderContentFunction: () => this._renderPopoverContent()
    });
  }

  private _destroyPopover(): void {
    this._focusOutElement = removeMaybe(this._focusOutElement);
    this._popover = destroyMaybe(this._popover);
  }

  private _renderPopoverContent(): VNode {
    const { unitSelector, uniformChartScalingToggle } = this.visibleElements;

    return (
      <div class={CSS.popoverContent} bind={this} afterCreate={this._onPopoverContentAfterCreate}>
        {unitSelector && this._renderUnitSelector()}
        {uniformChartScalingToggle && this._renderUniformChartScalingToggle()}
      </div>
    );
  }

  private _renderUnitSelector(): VNode {
    const { unit, unitOptions } = this.viewModel;
    const messagesUnits = this._messagesUnits;

    return (
      <label key="unit-selector-label" class={CSS.selectLabel}>
        {this._messages.unitSelectLabel}
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
      </label>
    );
  }

  private _onUnitChange(event: InputEvent): void {
    this.viewModel.unit = (event.target as HTMLSelectElement).value as SystemOrLengthUnit;
  }

  private _onUnitSelectAfterCreate(element: HTMLElement): void {
    if (this._requestFocusOnCreate) {
      this._requestFocusOnCreate = false;
      element.focus();
    }
  }

  private _renderUniformChartScalingToggle(): VNode {
    const messages = this._messages;
    const checked = this.viewModel.uniformChartScaling;
    const label = checked
      ? messages.uniformChartScalingDisable
      : messages.uniformChartScalingEnable;

    return (
      <label
        key="uniform-chart-scaling-label"
        class={CSS.checkboxLabel}
        onmousedown={preventDefault} // prevent clicking on the label from triggering a focusout which would close the popover
      >
        <input
          class={this.classes(CSS.checkbox, CSS.uniformChartScalingCheckbox)}
          type="checkbox"
          checked={checked}
          title={label}
          aria-label={label}
          bind={this}
          onchange={this._onUniformChartScalingChange}
        />
        {messages.uniformChartScalingLabel}
      </label>
    );
  }

  private _onUniformChartScalingChange(event: Event): void {
    this.viewModel.uniformChartScaling = (event.target as HTMLInputElement).checked;
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

    if (focusOnButton) {
      // Switch focus back to the button to make keyboard navigation easier.
      applySome(this._buttonElement, (el) => el.focus());
    }
  }

  private _onPopoverContentAfterCreate(element: HTMLElement): void {
    removeMaybe(this._focusOutElement);

    // If the popover loses focus we need to close it. Note that we don't close
    // it when the user clicked the toggle button since that would simply cause
    // the popover to show up again right after.
    this._focusOutElement = events.on(element, "focusout", ({ relatedTarget }: FocusEvent) => {
      const stillInPopover = element.contains(relatedTarget as Node);
      const targetIsButton = relatedTarget === this._buttonElement;
      if (stillInPopover || targetIsButton) {
        return;
      }

      this._closePopover({ focusOnButton: false });
    });
  }
}

function preventDefault(e: Event): void {
  e.preventDefault();
}
