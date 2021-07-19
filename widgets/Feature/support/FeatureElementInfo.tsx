// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.support
import { Heading, HeadingLevel } from "esri/../support/Heading";
import { VNode } from "esri/../support/interfaces";
import { tsx } from "esri/../support/widget";

const CSS = {
  base: "esri-feature-element-info",
  title: "esri-feature-element-info__title",
  description: "esri-feature-element-info__description"
};

@subclass("esri.widgets.Feature.support.FeatureElementInfo")
class FeatureElementInfo extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  // description
  //----------------------------------

  @property()
  description: string = null;

  //----------------------------------
  //  headingLevel
  //----------------------------------

  @property()
  headingLevel: HeadingLevel = 2;

  //----------------------------------
  // title
  //----------------------------------

  @property()
  title: string = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    return (
      <div class={CSS.base}>
        {this.renderTitle()}
        {this.renderDescription()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderTitle(): VNode {
    const { title } = this;

    return title ? (
      <Heading level={this.headingLevel} class={CSS.title}>
        {title}
      </Heading>
    ) : null;
  }

  protected renderDescription(): VNode {
    const { description } = this;
    return description ? (
      <div key="description" class={CSS.description}>
        {description}
      </div>
    ) : null;
  }
}

export default FeatureElementInfo;
