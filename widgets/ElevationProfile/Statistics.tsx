// esri.core
import * as events from "esri/core/events";
import { handlesGroup } from "esri/core/handleUtils";
import has from "esri/core/has";
import { applySome, destroyMaybe, isNone, isSome, Maybe, unwrapOr } from "esri/core/maybe";
import * as unitFormatUtils from "esri/core/unitFormatUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.ElevationProfile
import { STATISTICS_CSS as CSS } from "esri/widgets/css";
import ElevationProfileViewModel from "esri/widgets/ElevationProfileViewModel";

// esri.widgets.ElevationProfile.support
import { FORMAT_PRECISION, NOT_AVAILABLE } from "esri/widgets/support/constants";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/widgets/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import Popover from "esri/support/Popover";
import { messageBundle, renderable, tsx } from "esri/support/widget";

export interface ConstructionParameters {
  viewModel: ElevationProfileViewModel;
}

const STATISTIC_SPACING = 15;
const POPOVER_TOGGLE_WIDTH = 34;

interface StatisticInfo {
  label: string;
  available: boolean;
  renderValue: () => VNode;
}

// Sorting function which places available statistics first.
const availableFirst = (a: StatisticInfo, b: StatisticInfo) =>
  Number(b.available) - Number(a.available);

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

  constructor(params?: ConstructionParameters, parentNode?: string | Element) {
    super(params, parentNode);
  }

  destroy(): void {
    if (isSome(this._resizeObserver)) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }

    this._destroyPopover();
  }

  render(): VNode {
    const allStatistics = this._allStatistics;
    const maxNumStatistics = unwrapOr(this._maxNumStatistics, Infinity);

    if (allStatistics.length === 0) {
      return <div class={this.classes(CSS.base)}></div>;
    }

    return (
      <div
        class={CSS.base}
        bind={this}
        afterCreate={this._onContainerAfterCreate}
        afterUpdate={this._onContainerResize}
      >
        {allStatistics.map((info, index) =>
          this._renderStatistic(info, { hidden: index >= maxNumStatistics, inPopover: false })
        )}

        {/* when we couldn't fit all the statistics we display a button to show them in a popover */}
        {maxNumStatistics < allStatistics.length && (
          <button
            class={CSS.popoverToggle}
            bind={this}
            onclick={this._togglePopover}
            afterCreate={this._initializePopover}
            afterRemoved={this._destroyPopover}
          />
        )}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property()
  @renderable(["unit", "unitOptions", "statistics", "effectiveUnits"])
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

  private _resizeObserver: Maybe<ResizeObserver> = null;

  /**
   * How many statistics can be displayed based on the current size of the widget.
   */
  @property()
  @renderable()
  private _maxNumStatistics: Maybe<number> = null;

  private _clickOutsideHandle: Maybe<IHandle> = null;

  /**
   * Popover which displays all the statistics and which can be opened when not
   * all the statistics fit in the available width.
   */
  private _popover: Maybe<Popover> = null;

  @property({ readOnly: true })
  @renderable()
  private get _allStatistics(): StatisticInfo[] {
    const statistics = this.viewModel.statistics;
    if (isNone(statistics)) {
      return [];
    }

    const msgs = this._messages.statistics;

    const result = [
      {
        label: msgs.maxDistance,
        available: isSome(statistics.maxDistance),
        renderValue: () => this._renderDistanceValue(statistics.maxDistance)
      },
      {
        label: msgs.minElevation,
        available: isSome(statistics.minElevation),
        renderValue: () => this._renderElevationValue(statistics.minElevation)
      },
      {
        label: msgs.maxElevation,
        available: isSome(statistics.maxElevation),
        renderValue: () => this._renderElevationValue(statistics.maxElevation)
      },
      {
        label: msgs.avgElevation,
        available: isSome(statistics.avgElevation),
        renderValue: () => this._renderElevationValue(statistics.avgElevation)
      },
      {
        label: msgs.gain,
        available: isSome(statistics.elevationGain),
        renderValue: () => this._renderElevationValue(statistics.elevationGain)
      },
      {
        label: msgs.loss,
        available: isSome(statistics.elevationLoss),
        renderValue: () => this._renderElevationValue(statistics.elevationLoss)
      }
    ];

    if (has("elevation-profile-slope-stats")) {
      result.push(
        {
          label: msgs.maxSlope,
          available: isSome(statistics.maxPositiveSlope) || isSome(statistics.maxNegativeSlope),
          renderValue: () =>
            this._renderSlopeValue(statistics.maxPositiveSlope, statistics.maxNegativeSlope)
        },
        {
          label: msgs.avgSlope,
          available: isSome(statistics.avgPositiveSlope) || isSome(statistics.avgNegativeSlope),
          renderValue: () =>
            this._renderSlopeValue(statistics.avgPositiveSlope, statistics.avgNegativeSlope)
        }
      );
    }

    return result.sort(availableFirst);
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderDistanceValue(value: Maybe<number>): VNode {
    const msgs = this._messagesUnits;
    const unit = this.viewModel.effectiveUnits.distance;

    return (
      <div class={CSS.statisticValue}>
        {isSome(value)
          ? unitFormatUtils.formatDecimal(msgs, value, unit, FORMAT_PRECISION)
          : NOT_AVAILABLE}
      </div>
    );
  }

  private _renderElevationValue(value: Maybe<number>): VNode {
    const msgs = this._messagesUnits;
    const unit = this.viewModel.effectiveUnits.elevation;

    return (
      <div class={CSS.statisticValue}>
        {isSome(value)
          ? unitFormatUtils.formatDecimal(msgs, value, unit, FORMAT_PRECISION)
          : NOT_AVAILABLE}
      </div>
    );
  }

  private _renderSlopeValue(up: Maybe<number>, down: Maybe<number>): VNode {
    return (
      <div class={CSS.statisticValue}>
        <div
          key="slope-up"
          class={this.classes(CSS.slopeValue, { [CSS.slopeValueNotAvailable]: isNone(up) })}
        >
          <div class={CSS.slopeUpIcon} />
          {isSome(up)
            ? unitFormatUtils.formatSlope(up, "degrees", FORMAT_PRECISION)
            : NOT_AVAILABLE}
        </div>
        <div
          key="slope-down"
          class={this.classes(CSS.slopeValue, { [CSS.slopeValueNotAvailable]: isNone(down) })}
        >
          <div class={CSS.slopeDownIcon} />
          {isSome(down)
            ? unitFormatUtils.formatSlope(down, "degrees", FORMAT_PRECISION)
            : NOT_AVAILABLE}
        </div>
      </div>
    );
  }

  private _renderStatistic(
    { label, available, renderValue }: StatisticInfo,
    { hidden, inPopover }: { hidden: boolean; inPopover: boolean }
  ): VNode {
    return (
      <div
        key={label}
        class={this.classes(CSS.statistic, {
          [CSS.statistic]: !inPopover,
          [CSS.statisticHidden]: hidden,
          [CSS.statisticNotAvailable]: !available,
          [CSS.popoverStatistic]: inPopover
        })}
      >
        <h5 class={CSS.statisticLabel}>{label}</h5>
        {renderValue()}
      </div>
    );
  }

  private _initializePopover(element: HTMLElement): void {
    this._destroyPopover();

    this._popover = new Popover({
      owner: this,
      placement: "bottom-end",
      anchorElement: element,
      renderContentFunction: () => this._renderPopoverContent()
    });
  }

  private _destroyPopover(): void {
    destroyMaybe(this._popover);
    applySome(this._clickOutsideHandle, (handle) => handle.remove());
  }

  /**
   * Renders all the statistics into the popover which can be opened when the
   * statistics don't fit in the available space.
   */
  private _renderPopoverContent(): VNode {
    // Display only the statistics which couldn't be displayed in the main container.
    const allStatistics = this._allStatistics;
    const hiddenStatistics = isSome(this._maxNumStatistics)
      ? allStatistics.slice(this._maxNumStatistics, allStatistics.length)
      : [];

    return (
      <div class={CSS.popoverContent} bind={this} afterCreate={this._onPopoverContentAfterCreate}>
        {hiddenStatistics.map((info) =>
          this._renderStatistic(info, { hidden: false, inPopover: true })
        )}
      </div>
    );
  }

  private _togglePopover(): void {
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
    applySome(this._clickOutsideHandle, (handle) => handle.remove());
    applySome(this._popover, (popover) => (popover.open = false));
  }

  private _onPopoverContentAfterCreate(element: HTMLElement): void {
    applySome(this._clickOutsideHandle, (handle) => handle.remove());

    // If the user clicks inside the popover, we stop propagation and if they
    // click outside, the event propagates to the window and we'll close the popover.
    this._clickOutsideHandle = handlesGroup([
      events.on(element, "click", (e) => e.stopPropagation()),
      events.on(window, "click", () => this._closePopover())
    ]);
  }

  private _onContainerAfterCreate(element: HTMLElement): void {
    this._resizeObserver = new ResizeObserver(() => this._onContainerResize(element));
    this._resizeObserver.observe(element);
  }

  private _onContainerResize(element: HTMLElement): void {
    const { width } = element.getBoundingClientRect();

    let usedWidth = 0;

    const statistics = Array.from(element.querySelectorAll(`.${CSS.statistic}`));
    const numStatistics = statistics.length;

    for (let i = 0; i < numStatistics; ++i) {
      const node = statistics[i];

      if (!(node instanceof HTMLElement)) {
        continue;
      }

      // Make node visible so we can measure the width.
      const wasHidden = node.classList.contains(CSS.statisticHidden);
      node.classList.remove(CSS.statisticHidden);

      const measuredWidth = node.offsetWidth + STATISTIC_SPACING;
      usedWidth += measuredWidth;

      // Restore node visibility.
      node.classList.toggle(CSS.statisticHidden, wasHidden);

      if (usedWidth > width) {
        usedWidth -= measuredWidth; // Remove the item we last measured.
        usedWidth += POPOVER_TOGGLE_WIDTH + STATISTIC_SPACING; // Add space for toggle button.
        this._maxNumStatistics = usedWidth > width ? Math.max(0, i - 1) : i;

        return;
      }
    }

    this._maxNumStatistics = numStatistics;
  }
}
