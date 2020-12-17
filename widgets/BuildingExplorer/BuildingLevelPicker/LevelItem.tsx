/**
 * Visualization for a single level.
 */

// esri.core
import { Maybe, isNone } from "esri/core/maybe";

// esri.core.accessorSupport
import { subclass, property } from "esri/core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { tsx, renderable, storeNode } from "esri/support/widget";

type Callback = () => void;

const CSS = {
  container: "esri-building-level-picker-item",
  base: "esri-building-level-picker-item__base",
  hover: "esri-building-level-picker-item--hover",
  active: "esri-building-level-picker-item--active"
};

@subclass("esri.widgets.BuildingExplorer.BuildingLevelPicker.LevelItem")
export class LevelItem extends Widget {
  //------------------------------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //------------------------------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  //------------------------------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //------------------------------------------------------------------------------------------------

  /**
   * The level which the item represents.
   *
   * @type {boolean}
   */
  @property({ nonNullable: true })
  @renderable()
  level: number;

  /**
   * The label for the level.
   */
  @property()
  @renderable()
  label: string;

  /**
   * Whether the level is active.
   *
   * @type {boolean}
   */
  @property({ nonNullable: true })
  @renderable()
  active: boolean = false;

  /**
   * Whether the item is being hovered.
   *
   * @type {boolean}
   */
  @property({ nonNullable: true })
  @renderable()
  hovering: boolean = false;

  /**
   * The width of the widget.
   */
  @property({ nonNullable: true })
  @renderable()
  width: number = 0;

  /**
   * The height of the widget.
   */
  @property({ nonNullable: true })
  @renderable()
  height: number = 0;

  /**
   * Function which is to be called when the item is clicked or enter is pressed.
   */
  @property({ nonNullable: true })
  onSelect: Callback = () => {};

  /**
   * Function which is to be called when the item is focused.
   */
  @property({ nonNullable: true })
  onFocus: Callback = () => {};

  /**
   * Function which is to be called when the item is focused.
   */
  @property({ nonNullable: true })
  onBlur: Callback = () => {};

  //------------------------------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //------------------------------------------------------------------------------------------------

  private _baseElement: Maybe<HTMLButtonElement> = null;

  //------------------------------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //------------------------------------------------------------------------------------------------

  render(): VNode {
    return (
      <div
        key={this}
        bind={this}
        class={this.classes(CSS.container, {
          [CSS.active]: this.active,
          [CSS.hover]: this.hovering
        })}
        styles={{ height: `${this.height}px` }}
      >
        {this._renderBase()}
      </div>
    );
  }

  focus(): void {
    if (isNone(this._baseElement)) {
      return;
    }

    this._baseElement.focus();
  }

  //------------------------------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //------------------------------------------------------------------------------------------------

  private _renderBase(): VNode {
    const width = this.width;
    const rectWidth = this.width * 0.8;

    return (
      <div
        class={CSS.base}
        styles={{
          width: `${Math.round(width)}px`,
          height: `${Math.round(width)}px`
        }}
      >
        <button
          bind={this}
          class="rect"
          styles={{
            width: `${Math.round(rectWidth)}px`,
            height: `${Math.round(rectWidth)}px`
          }}
          onclick={this.onSelect}
          onfocus={this.onFocus}
          onblur={this.onBlur}
          afterCreate={storeNode}
          data-node-ref="_baseElement"
          aria-label={this.label}
          title={this.label}
          tabIndex={-1}
          type="button"
        />
      </div>
    );
  }
}
