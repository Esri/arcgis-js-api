// esri.core
import { clamp } from "esri/../core/mathUtils";

// esri.widgets.support
import { classes, tsx } from "esri/widgets/widget";

// maquette
import { VNode, VNodeProperties, VNodeChild } from "maquette";

interface HeadingVNodeProperties extends VNodeProperties {
  level: HeadingLevel;
}

/**
 * The heading level used for the HTML heading element.
 *
 * Value must be between 1-6.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements
 */
export type HeadingLevel = number;

export const CSS = {
  heading: "esri-widget__heading"
};

export function Heading(props: HeadingVNodeProperties, children?: VNodeChild): VNode {
  const level = clamp(Math.ceil(props.level), 1, 6);
  const HeadingTag = `h${level}`;

  delete props.level;

  return (
    <HeadingTag {...props} class={classes(CSS.heading, props.class)}>
      {children}
    </HeadingTag>
  );
}
