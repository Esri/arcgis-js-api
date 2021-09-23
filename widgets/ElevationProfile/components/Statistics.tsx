// esri.core
import { applySome, isSome } from "esri/../../core/maybe";
import { throttle } from "esri/../../core/throttle";
import * as unitFormatUtils from "esri/../../core/unitFormatUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/../../core/t9n/Units";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.ElevationProfile
import { STATISTICS_CSS as CSS } from "esri/css";
import { ElevationProfileStatistics, IElevationProfileLine, EffectiveUnits } from "esri/interfaces";

// esri.widgets.ElevationProfile.support
import { FORMAT_PRECISION, NOT_AVAILABLE } from "esri/support/constants";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { messageBundle, tsx } from "esri/../support/widget";

export interface ConstructProperties {
  effectiveUnits: EffectiveUnits;
  line: IElevationProfileLine;
}

const LAYOUT_UPDATE_THROTTLE_MILLIS = 100;

/**
 * Widget which displays the statistics for the generated elevation profile(s).
 */
@subclass("esri.widgets.ElevationProfile.Statistics")
export class Statistics extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  protected override initialize(): void {
    this.own(this._updateLayoutThrottled);
  }

  override render(): VNode {
    return (
      <div
        bind={this}
        class={CSS.base}
        afterCreate={this._updateLayout}
        afterUpdate={this._updateLayoutThrottled}
      >
        {this._renderStatistics()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property()
  effectiveUnits: EffectiveUnits;

  @property()
  line: IElevationProfileLine;

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

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderStatistics(): VNode {
    const msgs = this._messages?.statistics;
    if (!msgs) {
      return [];
    }

    return [
      this._renderDistanceStatistic("maxDistance", msgs.maxDistance),
      this._renderElevationStatistic("elevationGain", msgs.gain),
      this._renderElevationStatistic("elevationLoss", msgs.loss),
      this._renderElevationStatistic("minElevation", msgs.minElevation),
      this._renderElevationStatistic("maxElevation", msgs.maxElevation),
      this._renderElevationStatistic("avgElevation", msgs.avgElevation),
      this._renderSlopeStatistic("maxPositiveSlope", "maxNegativeSlope", msgs.maxSlope),
      this._renderSlopeStatistic("avgPositiveSlope", "avgNegativeSlope", msgs.avgSlope)
    ];
  }

  private _renderDistanceStatistic(key: keyof ElevationProfileStatistics, label: string): VNode {
    const value = this._renderValue(key, (v) => {
      const unit = this.effectiveUnits.distance;
      return unitFormatUtils.formatDecimal(this._messagesUnits, v, unit, FORMAT_PRECISION);
    });

    return this._renderStatistic(label, value);
  }

  private _renderElevationStatistic(key: keyof ElevationProfileStatistics, label: string): VNode {
    const value = this._renderValue(key, (v) => {
      const unit = this.effectiveUnits.elevation;
      return unitFormatUtils.formatDecimal(this._messagesUnits, v, unit, FORMAT_PRECISION);
    });

    return this._renderStatistic(label, value);
  }

  private _renderSlopeStatistic(
    upKey: keyof ElevationProfileStatistics,
    downKey: keyof ElevationProfileStatistics,
    label: string
  ): VNode {
    const value = (
      <div key="slope-up" class={CSS.slopeValue}>
        <div class={CSS.slopeUpIcon} />
        {this._renderValue(upKey, (v) =>
          unitFormatUtils.formatAngleDegrees(v, "degrees", FORMAT_PRECISION)
        )}
        <div class={CSS.slopeDownIcon} />
        {this._renderValue(downKey, (v) =>
          unitFormatUtils.formatAngleDegrees(v, "degrees", FORMAT_PRECISION)
        )}
      </div>
    );

    return this._renderStatistic(label, value);
  }

  private _renderStatistic(label: VNode, value: VNode): VNode {
    return (
      <div class={CSS.statistic}>
        <label class={CSS.statisticLabel}>{label}</label>
        <div class={CSS.statisticValue}>{value}</div>
      </div>
    );
  }

  private _renderValue(
    key: keyof ElevationProfileStatistics,
    format: (value: number) => string
  ): string {
    const line = this.line;
    // Only show actual statistics values when the line is fully refined.
    const statistics = line.progress === 1 ? line.statistics : null;

    const value = applySome(statistics, (s) => s[key]);
    return isSome(value) ? format(value) : NOT_AVAILABLE;
  }

  private _updateLayout = (container: HTMLElement): void => {
    const originalParent = container.parentElement;
    const originalDisplay = container.style.display;

    // We want to measure child widths isolated from the container of the statistics
    // so we need to move it elsewhere (e.g. parent may even be hidden) and reset
    // the styles. We'll restore everything again once we're done.
    originalParent.removeChild(container);
    document.body.appendChild(container);
    container.style.display = "block";

    let maxWidth = 80;

    for (const node of container.childNodes) {
      if (node instanceof HTMLElement) {
        maxWidth = Math.max(maxWidth, node.offsetWidth);
      }
    }

    // Restore everything now that we're done measuring.
    document.body.removeChild(container);
    originalParent.appendChild(container);
    container.style.display = originalDisplay;

    // "Tell" the container the size of the largest child element. We use that
    // in the CSS to set up our grid.
    container.style.setProperty("--max-width", `${maxWidth}px`);
  };

  private _updateLayoutThrottled = throttle(this._updateLayout, LAYOUT_UPDATE_THROTTLE_MILLIS);
}
