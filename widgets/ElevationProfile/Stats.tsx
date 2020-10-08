// esri
import * as intl from "esri/../intl";

// esri.core
import { isNone, Maybe } from "esri/../core/maybe";
import * as unitFormatUtils from "esri/../core/unitFormatUtils";
import {
  convertUnit,
  getMetersPerVerticalUnitForSR,
  preferredVerticalLengthUnit,
  SystemOrLengthUnit
} from "esri/../core/unitUtils";

// esri.core.t9n
import UnitsMessages from "esri/../core/t9n/Units";

// esri.geometry
import SpatialReference = require("esri/../geometry/SpatialReference");

// esri.widgets.ElevationProfile
import ElevationProfileLine = require("esri/widgets/ElevationProfileLine");

// esri.widgets.ElevationProfile.support
import { STATS_FORMAT_PRECISION } from "esri/widgets/support/constants";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/widgets/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { tsx } from "esri/support/widget";

const BASE = "esri-elevation-profile-stats";

const CSS = {
  base: BASE,
  noStats: `${BASE} ${BASE}--no-stats`,
  elevationStats: `${BASE}__elevation-stats`,
  slopeStats: `${BASE}__slope-stats`,
  stat: `${BASE}__stat`,
  statValue: `${BASE}__stat-value`
};

interface StatsProps {
  line: Maybe<ElevationProfileLine>;
  messages: ElevationProfileMessages;
  messagesUnits: UnitsMessages;
  systemOrUnit: SystemOrLengthUnit;
  spatialReference: Maybe<SpatialReference>;
}

export function renderStats(props: StatsProps): VNode | null {
  const { line, messages } = props;
  if (isNone(line)) {
    return null;
  }

  const stats = line.stats;
  const generating = line.progress < 1;

  if (isNone(stats) || generating) {
    return (
      <div key="no-stats-container" class={CSS.noStats}>
        {generating ? messages.generatingStats : messages.noStats}
      </div>
    );
  }

  const { elevationStats: elevationMsgs, slopeStats: slopeMsgs } = messages;

  const elevationStats = [
    { label: elevationMsgs.min, value: formatElevationStat(stats.minElevation, props) },
    { label: elevationMsgs.max, value: formatElevationStat(stats.maxElevation, props) },
    { label: elevationMsgs.avg, value: formatElevationStat(stats.avgElevation, props) },
    { label: elevationMsgs.gain, value: formatElevationStat(stats.elevationGain, props) },
    { label: elevationMsgs.loss, value: formatElevationStat(stats.elevationLoss, props) }
  ].map(renderStat);

  const slopeStats = [
    { label: slopeMsgs.maxPositive, value: formatSlopeStat(stats.maxPositiveSlope) },
    { label: slopeMsgs.maxNegative, value: formatSlopeStat(-stats.maxNegativeSlope) },
    { label: slopeMsgs.avgPositive, value: formatSlopeStat(stats.avgPositiveSlope) },
    { label: slopeMsgs.avgNegative, value: formatSlopeStat(-stats.avgNegativeSlope) }
  ].map(renderStat);

  return (
    <div key="stats-container" class={CSS.base}>
      <div class={CSS.elevationStats}>
        <label>{elevationMsgs.label}</label>
        {elevationStats}
      </div>

      <div class={CSS.slopeStats}>
        <label>{slopeMsgs.label}</label>
        {slopeStats}
      </div>
    </div>
  );
}

function renderStat({ label, value }: { label: string; value: string }): VNode {
  return (
    <div class={CSS.stat}>
      <label>{label}</label>
      <div class={CSS.statValue}>{value}</div>
    </div>
  );
}

function formatElevationStat(
  value: number,
  { messagesUnits, spatialReference, systemOrUnit }: StatsProps
): string {
  if (isNone(spatialReference)) {
    return intl.formatNumber(value, {
      minimumFractionDigits: STATS_FORMAT_PRECISION,
      maximumFractionDigits: STATS_FORMAT_PRECISION
    });
  }

  const elevationInMeters = value * getMetersPerVerticalUnitForSR(spatialReference);
  const dstUnit = preferredVerticalLengthUnit(elevationInMeters, "meters", systemOrUnit);
  const convertedElevation = convertUnit(elevationInMeters, "meters", dstUnit);

  return unitFormatUtils.formatDecimal(
    messagesUnits,
    convertedElevation,
    dstUnit,
    STATS_FORMAT_PRECISION
  );
}

function formatSlopeStat(value: number): string {
  return intl.formatNumber(value, {
    style: "percent",
    maximumFractionDigits: STATS_FORMAT_PRECISION
  });
}
