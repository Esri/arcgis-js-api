// esri
import * as intl from "esri/intl";

// esri.core.accessorSupport
import { property, subclass } from "esri/core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.ElevationProfile
import { LEGEND_CSS as CSS } from "esri/widgets/css";
import { ElevationProfileLine } from "esri/widgets/elevationProfileLineTypes";
import ElevationProfileViewModel from "esri/widgets/ElevationProfileViewModel";

// esri.widgets.ElevationProfile.support
import { getTranslatedLineTitle } from "esri/widgets/support/intlUtils";

// esri.widgets.ElevationProfile.t9n
import ElevationProfileMessages from "esri/widgets/t9n/ElevationProfile";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { messageBundle, renderable, tsx } from "esri/support/widget";

export interface ConstructionParameters {
  viewModel: ElevationProfileViewModel;
}

/**
 * Widget which displays a legend for the elevation profile chart and allows
 * toggling lines' visibility.
 */
@subclass("esri.widgets.ElevationProfile.ElevationProfileLegend")
class ChartLegend extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: ConstructionParameters, parentNode?: string | Element) {
    super(params, parentNode);
  }

  render(): VNode {
    return (
      <div key={this} class={CSS.base}>
        {this.viewModel.profiles.items.map((line) => this._renderLabel(line))}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property()
  @renderable(["viewModel.chartData"])
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

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Renders a single label of the legend widget with a checkbox and a color
   * indicator.
   */
  private _renderLabel(line: ElevationProfileLine): VNode {
    const id = `${CSS.base}__check-${line.id}`;

    return (
      <label key={id} for={id} class={this.classes(CSS.label, { [CSS.labelActive]: line.visible })}>
        {this._renderCheckbox(line, id)}
        <span
          key="color-indicator"
          class={CSS.colorIndicator}
          styles={{ background: line.color.toCss() }}
        ></span>
        <span key="label-content" class={CSS.labelContent}>
          {getTranslatedLineTitle(line, this._messages)}
        </span>
      </label>
    );
  }

  /**
   * Renders the checkbox used to toggle the visibility of the layers controlled
   * by the node.
   */
  private _renderCheckbox(line: ElevationProfileLine, id: string): VNode {
    const checked = line.visible;
    const msgs = this._messages;

    const labelTemplate = checked ? msgs.hideProfile : msgs.showProfile;
    const name = getTranslatedLineTitle(line, this._messages);
    const label = intl.substitute(labelTemplate, { name });

    return (
      <button
        id={id}
        bind={this}
        class={this.classes(CSS.checkbox, { [CSS.checkboxChecked]: checked })}
        onclick={(e) => this._onCheckboxToggle(e, line)}
        role="checkbox"
        aria-checked={checked ? "true" : "false"}
        aria-label={label}
        title={label}
        type="button"
      ></button>
    );
  }

  private _onCheckboxToggle(event: Event, line: ElevationProfileLine): void {
    event.stopPropagation();
    line.toggleVisibility();
  }
}

export default ChartLegend;
