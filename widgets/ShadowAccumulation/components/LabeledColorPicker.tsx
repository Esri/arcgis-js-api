// @esri.calcite-components.dist.custom-elements.bundles
import "@esri/calcite-components/dist/custom-elements/bundles/label";

// esri
import Color from "esri/../../Color";

// esri.libs
import { VNode } from "esri/../../libs/maquette";

// esri.widgets.ShadowAccumulation.components
import { Label } from "esri/widgets/Label";

// esri.widgets.support
import { ColorPicker } from "esri/../support/ColorPicker";
import { tsx } from "esri/../support/widget";

export function LabeledColorPicker(props: {
  id: string;
  label: string;
  value: Color;
  onChange: (color: Color) => void;
}): VNode {
  return (
    <Label for={props.id} label={props.label} tabIndex={-1}>
      <ColorPicker id={props.id} value={props.value} onChange={props.onChange} />
    </Label>
  );
}
