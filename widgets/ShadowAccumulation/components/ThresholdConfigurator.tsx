// @esri.calcite-components.dist.custom-elements.bundles
import "@esri/calcite-components/dist/custom-elements/bundles/label";

// esri
import Color from "esri/../../Color";

// esri.core
import { destroyMaybe } from "esri/../../core/maybe";
import { convertTime } from "esri/../../core/timeUtils";
import { generateUUID } from "esri/../../core/uuid";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";
import { reactionInit } from "esri/../../core/accessorSupport/trackingUtils";

// esri.intl
import { formatNumber } from "esri/../../intl/number";

// esri.widgets
import Slider from "esri/../Slider";
import Widget from "esri/../Widget";

// esri.widgets.ShadowAccumulation
import { THRESHOLD_CONFIGURATOR_CSS as CSS } from "esri/css";
import ThresholdOptions from "esri/ThresholdOptions";

// esri.widgets.ShadowAccumulation.components
import { Label } from "esri/widgets/Label";
import { LabeledColorPicker } from "esri/widgets/LabeledColorPicker";

// esri.widgets.ShadowAccumulation.t9n
import ShadowAccumulationMessages from "esri/t9n/ShadowAccumulation";

// esri.widgets.support
import { SliderFormatType, VNode } from "esri/../support/interfaces";
import { messageBundle, tsx, WidgetProperties } from "esri/../support/widget";

interface ConstructProperties extends WidgetProperties {
  options: ThresholdOptions;
  colorPickerVisible?: boolean;
}

@subclass("esri.widgets.ShadowAccumulation.components.ThresholdConfigurator")
export class ThresholdConfigurator
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

  initialize(): void {
    const onValueChange = ({ value }: { value: number }) => {
      this.options.value = value;
    };

    this.own([
      reactionInit(
        () => {
          const { value, minValue, maxValue } = this.options;
          return { value, minValue, maxValue };
        },
        ({ value, minValue, maxValue }) => {
          const slider = this._valueSlider;
          slider.min = minValue;
          slider.max = maxValue;
          slider.values = [value];

          // Always primary ticks every hour and secondary ticks every half-hour.
          const range = maxValue - minValue;
          const rangeHours = Math.floor(convertTime(range, "milliseconds", "hours"));
          slider.tickConfigs = [
            { mode: "count", values: rangeHours * 2 + 1, labelsVisible: false },
            { mode: "count", values: rangeHours + 1, labelsVisible: true }
          ];
        }
      ),
      this._valueSlider.on("thumb-change", onValueChange),
      this._valueSlider.on("thumb-drag", onValueChange)
    ]);
  }

  destroy(): void {
    this._valueSlider = destroyMaybe(this._valueSlider);
  }

  render(): VNode {
    const messages = this._messages.threshold;
    const { color } = this.options;

    return (
      <div class={CSS.base}>
        <Label class={CSS.valueLabel} for={this._valueSliderId} label={messages.valueLabel}>
          {this._valueSlider.render()}
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
  options!: ThresholdOptions;

  @property()
  colorPickerVisible: boolean = true;

  @property()
  get testData(): { valueSlider: Slider } {
    return {
      valueSlider: this._valueSlider
    };
  }

  //----------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //----------------------------------------------------------------------------

  private readonly _valueSliderId = `value-slider-${generateUUID()}`;
  private readonly _colorPickerId = `color-picker-${generateUUID()}`;

  @property()
  private _valueSlider = new Slider({
    visibleElements: {
      labels: false,
      rangeLabels: false
    },
    steps: convertTime(30, "minutes", "milliseconds"),
    labelFormatFunction: (millis: number, type: SliderFormatType) => {
      const hours = convertTime(millis, "milliseconds", "hours");
      return type === "tick" ? formatNumber(hours, { maximumFractionDigits: 0 }) : "";
    }
  });

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
}
