// esri
import { substitute } from "esri/../../intl";

// esri.core
import { roundToNearest } from "esri/../../core/mathUtils";
import { isNone, Maybe } from "esri/../../core/maybe";
import { convertTime } from "esri/../../core/timeUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.intl
import { formatDuration } from "esri/../../intl/duration";

// esri.views
import { ISceneView } from "esri/../../views/ISceneView";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.ShadowAccumulation
import { TOOLTIP_CSS as CSS } from "esri/css";

// esri.widgets.ShadowAccumulation.t9n
import ShadowAccumulationMessages from "esri/t9n/ShadowAccumulation";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { messageBundle, tsx } from "esri/../support/widget";

interface ConstructProperties {
  accumulatedShadowTime?: Maybe<number>;
}

const ONE_MINUTE = convertTime(1, "minutes", "milliseconds");
const FIFTEEN_MINUTES = convertTime(15, "minutes", "milliseconds");

/**
 * Renders the contents of the tooltip which displays the time a certain point
 * (e.g. under the mouse pointer) was in shadow during a shadow accumulation
 * analysis.
 */
@subclass("esri.widgets.ShadowAccumulation.components.ShadowTooltipContent")
export class ShadowTooltipContent extends Widget implements ConstructProperties {
  // ---------------------------------------------------------------------------
  //
  // Lifecycle
  //
  // ---------------------------------------------------------------------------

  constructor(properties: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  render(): VNode {
    const content = this._formattedContent;

    return <div class={CSS.base}>{content && <div class={CSS.content}>{content}</div>}</div>;
  }

  // ---------------------------------------------------------------------------
  //
  // Public Properties
  //
  // ---------------------------------------------------------------------------

  /**
   * How long the hovered point was in shadow (in milliseconds).
   */
  @property()
  accumulatedShadowTime: Maybe<number> = null;

  @property()
  view!: ISceneView;

  // ---------------------------------------------------------------------------
  //
  // Private Properties
  //
  // ---------------------------------------------------------------------------

  @property()
  @messageBundle("esri/widgets/ShadowAccumulation/t9n/ShadowAccumulation")
  private _messages: Maybe<ShadowAccumulationMessages> = null;

  @property({ readOnly: true })
  private get _formattedContent(): Maybe<string> {
    const messages = this._messages;
    const millis = this.accumulatedShadowTime;

    if (isNone(messages) || isNone(millis)) {
      return null;
    }

    // Round to the nearest 15-minutes to avoid showing values which are too precise.
    // The exception is when the value is below 15-minutes where we don't want to
    // display just "0 seconds".
    const roundedMillis =
      millis < FIFTEEN_MINUTES
        ? roundToNearest(millis, ONE_MINUTE)
        : roundToNearest(millis, FIFTEEN_MINUTES);

    return substitute(messages.timeInShadow, {
      duration: formatDuration(roundedMillis, { round: true, largest: 2 }, "milliseconds")
    });
  }
}
