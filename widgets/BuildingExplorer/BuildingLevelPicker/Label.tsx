// esri.core
import { Maybe, isNone } from "esri/../../core/maybe";

// esri.core.accessorSupport
import { subclass, property } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { tsx } from "esri/../support/widget";

const BASE = "esri-building-level-picker-label";

const CSS = {
  iconClose: "esri-icon-close",
  base: `${BASE}`,
  active: `${BASE}--active`,
  hover: `${BASE}--hover`,
  empty: `${BASE}--empty`,
  clearButton: `${BASE}__clear-button`
};

export interface Messages {
  selectLevel: string;
  clearLevel: string;
}

type OnClickFn = () => void;

export interface ConstructProperties {
  /**
   * The level represented by the label.
   */
  level?: Maybe<number | string>;
  /**
   * Whether the level shown on the label is the currently selected level.
   */
  active?: boolean;
  /**
   * Whether the user is hovering over a level.
   */
  hovering?: boolean;
  /**
   * Translated messages to be displayed in the widget.
   */
  messages?: Messages;
  /**
   * Function which is to be called when the label is clicked.
   */
  onClear?: OnClickFn;
}

/**
 * Label widget for a single building level.
 */
@subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.Label")
export class Label extends Widget implements ConstructProperties {
  //------------------------------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //------------------------------------------------------------------------------------------------

  constructor(properties: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  //------------------------------------------------------------------------------------------------
  //
  //  Properties
  //
  //------------------------------------------------------------------------------------------------

  /**
   * The level represented by the label.
   */
  @property()
  level: Maybe<number | string> = null;

  /**
   * Whether the level shown on the label is the currently selected level.
   */
  @property({ nonNullable: true })
  active: boolean = false;

  /**
   * Whether the user is hovering over a level.
   */
  @property({ nonNullable: true })
  hovering: boolean = false;

  /**
   * Translated messages to be used in the label.
   */
  @property()
  messages: Messages = { clearLevel: "", selectLevel: "" };

  /**
   * Function to be called when the label is clicked.
   */
  @property({ nonNullable: true })
  onClear: OnClickFn = () => {};

  //------------------------------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //------------------------------------------------------------------------------------------------

  override render(): VNode {
    if (isNone(this.level)) {
      return (
        <div class={CSS.empty} title={this.messages.selectLevel}>
          {this.messages.selectLevel}
        </div>
      );
    }

    const clearLabel = this.messages.clearLevel;

    return (
      <div
        bind={this}
        class={this.classes(CSS.base, {
          [CSS.active]: this.active,
          [CSS.hover]: this.hovering
        })}
        onclick={this.onClear}
        title={clearLabel}
        aria-label={clearLabel}
      >
        <span>{this.level}</span>
        <button
          bind={this}
          class={this.classes(CSS.clearButton, CSS.iconClose)}
          disabled={!this.active}
          onclick={this.onClear}
          type="button"
        ></button>
      </div>
    );
  }
}
