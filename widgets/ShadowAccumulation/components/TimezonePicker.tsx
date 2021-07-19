// @esri.calcite-components.dist.custom-elements.bundles
import "@esri/calcite-components/dist/custom-elements/bundles/icon";

// esri.core
import { applySome, isNone, isSome, Maybe } from "esri/../../core/maybe";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.ShadowAccumulation
import { TIMEZONE_PICKER_CSS as CSS } from "esri/css";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { getTimezoneInfos, TimezoneInfo } from "esri/../support/timeWidgetUtils";
import { messageBundle, tsx, WidgetProperties } from "esri/../support/widget";

// esri.widgets.support.t9n
import TimezoneMessages from "esri/../support/t9n/timezone";

type OptionalConstructProperties = Pick<TimezonePicker, "value" | "onChange">;
type ConstructProperties = Partial<OptionalConstructProperties> & WidgetProperties;

@subclass("esri.widgets.ShadowAccumulation.components.TimezonePicker")
export class TimezonePicker extends Widget<ConstructProperties> {
  //----------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //----------------------------------------------------------------------------

  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  render(): VNode {
    const offsets = this._gmtOffsets;
    const messages = this._timezoneMessages;

    if (isNone(offsets) || isNone(messages)) {
      return <div class={CSS.base} />;
    }

    const value = this.value;
    const selectedItemText = this._selectedItemText;

    return (
      <div class={CSS.base}>
        {/*
         We render a hidden <select> element which is focusable but hidden
         through CSS and placed on top of a div which we can freely style. The
         user always interact with the hidden select where the options have the 
         full timezone names and locations. In the visible div, however, we only
         display the short/abbreviated timezone names.
        */}
        <select
          key="hidden-select"
          class={CSS.hiddenSelect}
          aria-label={messages.chooseTimezone}
          title={messages.chooseTimezone}
          value={String(value)}
          bind={this}
          onfocus={this._onFocus}
          onblur={this._onBlur}
          onchange={this._onDropdownSelectChange}
        >
          {offsets.map(({ utcOffset, shortWithUTC, long }) => (
            <option value={String(utcOffset)}>
              {shortWithUTC} - {long}
            </option>
          ))}
        </select>

        <div
          key="visible-select"
          class={this.classes({
            [CSS.select]: true,
            [CSS.selectFocused]: this._focused
          })}
        >
          {selectedItemText}
          <calcite-icon icon="chevron-down" scale="s" />
        </div>
      </div>
    );
  }

  //----------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //----------------------------------------------------------------------------

  /**
   * Current UTC offset.
   */
  @property()
  value: number;

  /**
   * Function called when a timezone value is selected.
   */
  @property()
  onChange: Maybe<(value: number) => void>;

  //----------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //----------------------------------------------------------------------------

  @property()
  @messageBundle("esri/widgets/support/t9n/timezone")
  private _timezoneMessages: Maybe<TimezoneMessages>;

  @property()
  private _focused: boolean = false;

  @property({ readOnly: true })
  private get _gmtOffsets(): Maybe<TimezoneInfo[]> {
    return applySome(this._timezoneMessages, getTimezoneInfos);
  }

  @property({ readOnly: true })
  private get _selectedItem(): Maybe<TimezoneInfo> {
    const value = this.value;
    const offsets = this._gmtOffsets;

    if (isNone(value) || isNone(offsets)) {
      return null;
    }

    return offsets.find((o) => o.utcOffset === value);
  }

  @property({ readOnly: true })
  private get _selectedItemText(): string {
    const item = this._selectedItem;
    return isSome(item) ? item.short : "";
  }

  //----------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //----------------------------------------------------------------------------

  private _onDropdownSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const utcOffset = parseInt(selectElement?.value, 10);
    if (!Number.isFinite(utcOffset)) {
      return;
    }

    if (isSome(this.onChange)) {
      this.onChange(utcOffset);
    }
  }

  private _onFocus(): void {
    this._focused = true;
  }

  private _onBlur(): void {
    this._focused = false;
  }
}
