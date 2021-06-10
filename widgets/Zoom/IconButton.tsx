// esri.core.accessorSupport
import { property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { accessibleHandler, tsx } from "esri/support/widget";

const CSS = {
  button: "esri-widget--button esri-widget",
  disabled: "esri-disabled",
  interactive: "esri-interactive",
  iconText: "esri-icon-font-fallback-text",
  icon: "esri-icon"
};

@subclass("esri.widgets.IconButton")
class IconButton extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  action
  //----------------------------------

  @property()
  action: Function;

  //----------------------------------
  //  enabled
  //----------------------------------

  @property()
  enabled = true;

  //----------------------------------
  //  iconClass
  //----------------------------------

  @property()
  iconClass = "";

  //----------------------------------
  //  title
  //----------------------------------

  @property()
  title = "";

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const tabIndex = this.enabled ? 0 : -1;
    const rootClasses = {
      [CSS.disabled]: !this.enabled,
      [CSS.interactive]: this.enabled
    };
    const iconClasses = {
      [this.iconClass]: !!this.iconClass
    };

    return (
      <div
        bind={this}
        class={this.classes(CSS.button, rootClasses)}
        onclick={this._triggerAction}
        onkeydown={this._triggerAction}
        role="button"
        tabIndex={tabIndex}
        title={this.title}
      >
        <span aria-hidden="true" role="presentation" class={this.classes(CSS.icon, iconClasses)} />
        <span class={CSS.iconText}>{this.title}</span>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _triggerAction(): void {
    this.action.call(this);
  }
}

export default IconButton;
