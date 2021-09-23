// esri.libs
import { VNode, VNodeChild, VNodeProperties } from "esri/../../libs/maquette";

// esri.widgets.ShadowCast
import { LABEL } from "esri/css";

// esri.widgets.support
import { classes, tsx } from "esri/../support/widget";

interface LabelProps {
  for: string;
  label: string;
}

export function Label(
  props: LabelProps & Omit<VNodeProperties, keyof LabelProps>,
  children?: VNodeChild
): VNode {
  const { for: id, label, tabIndex, ...otherProps } = props;

  return (
    <div class={classes(LABEL, otherProps?.class)} key={id} {...otherProps}>
      <calcite-label for={id} scale="s" tabIndex={tabIndex} disable-spacing="true">
        {label}
      </calcite-label>
      {children}
    </div>
  );
}
