// esri.core.accessorSupport
import { subclass } from "esri/core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { tsx, isWidget, hasDomNode } from "esri/support/widget";

export const FeatureContentMixin = <TBase extends Constructor<Widget>>(Base: TBase) => {
  @subclass("esri.widgets.Feature.ContentMixin")
  class FeatureContent extends Base {
    protected renderNodeContent = (content: HTMLElement | Widget): VNode | null => {
      if (isWidget(content) && !content.destroyed) {
        return <div key={content}>{content.render()}</div>;
      }

      if (content instanceof HTMLElement) {
        return <div key={content} bind={content} afterCreate={this._attachToNode} />;
      }

      if (hasDomNode(content)) {
        return <div key={content} bind={content.domNode} afterCreate={this._attachToNode} />;
      }

      return null;
    };

    private _attachToNode(this: HTMLElement, node: HTMLElement): void {
      const content = this;
      node.appendChild(content);
    }
  }

  return FeatureContent;
};

export type FeatureContentMixin = Mixin<typeof FeatureContentMixin>;
