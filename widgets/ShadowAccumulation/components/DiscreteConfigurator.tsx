// @esri.calcite-components.dist.custom-elements.bundles
import "@esri/calcite-components/dist/custom-elements/bundles/label";
import "@esri/calcite-components/dist/custom-elements/bundles/select";

// esri
import Color from "esri/../../Color";

// esri.core
import { unwrapOr } from "esri/../../core/maybe";
import { generateUUID } from "esri/../../core/uuid";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.intl
import { formatDuration } from "esri/../../intl/duration";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.ShadowAccumulation
import { DISCRETE_CONFIGURATOR_CSS as CSS } from "esri/css";
import DiscreteOptions from "esri/DiscreteOptions";

// esri.widgets.ShadowAccumulation.components
import { Label } from "esri/widgets/Label";
import { LabeledColorPicker } from "esri/widgets/LabeledColorPicker";

// esri.widgets.ShadowAccumulation.t9n
import ShadowAccumulationMessages from "esri/t9n/ShadowAccumulation";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { messageBundle, tsx, WidgetProperties } from "esri/../support/widget";

interface ConstructProperties extends WidgetProperties {
  options: DiscreteOptions;
  colorPickerVisible?: boolean;
}

@subclass("esri.widgets.ShadowAccumulation.components.DiscreteConfigurator")
export class DiscreteConfigurator
  extends Widget<ConstructProperties>
  implements ConstructProperties
{
  //----------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //----------------------------------------------------------------------------

  constructor(properties: ConstructProperties) {
    super(properties);
  }

  render(): VNode {
    const messages = this._messages.discrete;
    const intervalLabel = messages.intervalLabel;
    const { color, interval, intervalOptions } = this.options;

    return (
      <div class={CSS.base}>
        <Label for={this._selectId} label={intervalLabel}>
          <calcite-select
            id={this._selectId}
            label={intervalLabel}
            bind={this}
            onCalciteSelectChange={this._onIntervalChange}
          >
            {intervalOptions.toArray().map((t) => (
              <calcite-option key={t} selected={t === interval} value={String(t)}>
                {unwrapOr(formatDuration(t, { round: true, largest: 2 }), "")}
              </calcite-option>
            ))}
          </calcite-select>
        </Label>

        {this.colorPickerVisible && (
          <LabeledColorPicker
            id={this._colorPickerId}
            label={messages.colorLabel}
            value={color}
            onChange={this._onColorChange}
          />
        )}
      </div>
    );
  }

  //----------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //----------------------------------------------------------------------------

  @property()
  options!: DiscreteOptions;

  @property()
  colorPickerVisible: boolean = true;

  //----------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //----------------------------------------------------------------------------

  private readonly _selectId = `select-${generateUUID()}`;
  private readonly _colorPickerId = `color-picker-${generateUUID()}`;

  @property()
  @messageBundle("esri/widgets/ShadowAccumulation/t9n/ShadowAccumulation")
  private _messages!: ShadowAccumulationMessages;

  //----------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //----------------------------------------------------------------------------

  private _onColorChange = (color: Color) => {
    this.options.color = color;
  };

  private _onIntervalChange(event: CustomEvent<any>): void {
    const target = event.target as HTMLCalciteSelectElement;
    const value = parseInt(target.selectedOption?.value, 10);

    if (!Number.isFinite(value)) {
      return;
    }

    this.options.interval = value;
  }
}
