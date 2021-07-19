// esri
import { substitute } from "esri/../../intl";

// esri.core
import { destroyMaybe } from "esri/../../core/maybe";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.ElevationProfile
import { LEGEND_ITEM_CSS as CSS } from "esri/css";
import { IElevationProfileLine, EffectiveUnits } from "esri/interfaces";

// esri.widgets.ElevationProfile.components
import { Statistics, ConstructProperties as StatisticsProps } from "esri/widgets/Statistics";

// esri.widgets.ElevationProfile.support
import { getTranslatedLineTitle } from "esri/support/intlUtils";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { messageBundle, tsx } from "esri/../support/widget";

export interface ConstructProperties {
  effectiveUnits: EffectiveUnits;
  line: IElevationProfileLine;
  expanded?: boolean;
  checkboxVisible?: boolean;
  onExpandedToggle: () => void;
}

/**
 * Widget which displays the title of a profile line, a checkbox to toggle its
 * visibility and its statistics, as well as a stripe to display the color of
 * the line.
 */
@subclass("esri.widgets.ElevationProfile.LegendItem")
export class LegendItem extends Widget implements ConstructProperties {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    this._statistics = new Statistics(this._statisticsProps);
    this.own(
      this.watch("_statisticsProps", (props: StatisticsProps) => {
        this._statistics.set(props);
      })
    );
  }

  destroy(): void {
    this._statistics = destroyMaybe(this._statistics);
  }

  render(): VNode {
    const expanded = this.expanded;

    return (
      <div
        key={this}
        class={this.classes(CSS.base, {
          [CSS.disabled]: this.disabled,
          [CSS.expanded]: expanded
        })}
      >
        {this._renderColorIndicator()}
        <div key="header" class={CSS.header}>
          {this._renderLabelWithCheckbox()}
          {this._renderCollapseToggleButton()}
        </div>
        {expanded && (
          <div key="content" class={CSS.content}>
            {this._statistics.render()}
          </div>
        )}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property({ nonNullable: true })
  effectiveUnits: EffectiveUnits;

  @property({ nonNullable: true })
  line: IElevationProfileLine;

  @property()
  expanded: boolean = false;

  @property()
  get disabled(): boolean {
    return !this.line.available;
  }

  @property()
  checkboxVisible: boolean = true;

  @property()
  onExpandedToggle: () => void;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @property()
  private _statistics: Statistics;

  /**
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")
  private _messages: ElevationProfileMessages = null;

  private get _statisticsProps(): StatisticsProps {
    return {
      line: this.line,
      effectiveUnits: this.effectiveUnits
    };
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderColorIndicator(): VNode {
    return (
      <div
        key="color-indicator"
        class={CSS.colorIndicator}
        styles={{ backgroundColor: this.line.color.toCss() }}
      ></div>
    );
  }

  private _renderCollapseToggleButton(): VNode {
    const msgs = this._messages;
    const title = this.expanded ? msgs.hideDetails : msgs.showDetails;

    return (
      <button
        key="collapse-toggle"
        bind={this}
        class={CSS.collapseToggle}
        onclick={this._onCollapseToggleClick}
        title={title}
        aria-label={title}
        type="button"
      >
        <span class={CSS.collapseToggleIcon} />
      </button>
    );
  }

  private _onCollapseToggleClick(): void {
    this.onExpandedToggle();
  }

  /**
   * Renders the checkbox used to toggle the visibility of the line.
   */
  private _renderLabelWithCheckbox(): VNode {
    const { line, checkboxVisible, disabled } = this;
    const id = `${CSS.base}__check-${line.id}`;

    return (
      <label
        key="id"
        for={id}
        class={this.classes(CSS.label, {
          [CSS.labelDisabled]: disabled || !checkboxVisible
        })}
      >
        {checkboxVisible && this._renderCheckbox(id)}
        <span>{getTranslatedLineTitle(line, this._messages)}</span>
      </label>
    );
  }

  private _renderCheckbox(id: string): VNode {
    const line = this.line;
    const checked = line.visible;
    const disabled = this.disabled;

    const msgs = this._messages;
    const labelTemplate = checked ? msgs.hideProfile : msgs.showProfile;
    const name = getTranslatedLineTitle(line, this._messages);
    const label = substitute(labelTemplate, { name });

    return (
      <input
        key="checkbox"
        id={id}
        type="checkbox"
        class={CSS.checkbox}
        title={label}
        checked={checked}
        disabled={disabled}
        aria-label={label}
        bind={this}
        onchange={(e) => this._onCheckboxToggle(e, line)}
      />
    );
  }

  private _onCheckboxToggle(event: Event, line: IElevationProfileLine): void {
    event.stopPropagation();
    line.toggleVisibility();
  }
}
