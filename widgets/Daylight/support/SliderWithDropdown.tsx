// esri.core
import { eventKey } from "esri/core/events";
import { isSome, Maybe } from "esri/core/maybe";

// esri.core.accessorSupport
import { subclass, property } from "esri/core/accessorSupport/decorators";

// esri.widgets
import Slider from "esri/Slider";

// esri.widgets.Daylight.support
import { Item, SliderWithDropdownViewModel } from "esri/widgets/SliderWithDropdownViewModel";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { tsx, renderable } from "esri/support/widget";

const CSS = {
  interactive: "esri-interactive",
  label: "esri-slider__label",
  box: "esri-slider-with-dropdown__box",
  dropdownRoot: "esri-slider-with-dropdown__dropdown-root",
  anchor: " esri-widget__anchor esri-slider-with-dropdown__anchor",
  anchorOpen: "esri-slider-with-dropdown__anchor--open",
  anchorClosed: "esri-slider-with-dropdown__anchor--closed",
  dropdownList: "esri-slider-with-dropdown__list",
  dropdownListItem: "esri-slider-with-dropdown__list-item",
  dropdownListItemSelected: "esri-slider-with-dropdown__list-item--selected",
  boxDropDownOn: "esri-slider-with-dropdown__box--drop-down-on",
  boxDropDownOff: "esri-slider-with-dropdown__box--drop-down-off"
};

const KEYS = {
  selectItem: "Enter",
  closeDropdown: "Escape",
  moveSelectionUp: "ArrowUp",
  moveSelectionDown: "ArrowDown"
};

// Extends slider by adding a dropdown menu to the label
@subclass("esri.widgets.Daylight.SliderWithDropdown")
class SliderWithDropdown<T extends Item> extends Slider {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property()
  @renderable()
  viewModel: SliderWithDropdownViewModel<T> = new SliderWithDropdownViewModel();

  @property()
  @renderable()
  buttonTooltip = "";

  @property()
  @renderable()
  showDropDown = true;

  @property({ aliasOf: "viewModel.items" })
  @renderable()
  items: T[];

  @property({ aliasOf: "viewModel.currentIndex" })
  @renderable()
  currentIndex: number = 0;

  @property({ aliasOf: "viewModel.currentItem" })
  @renderable()
  readonly currentItem: T;

  @property({ aliasOf: "viewModel.isDropdownOpen" })
  @renderable()
  isDropdownOpen: boolean;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  private _rootNode: Maybe<HTMLElement> = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  protected renderThumbLabel(index: number): VNode {
    const dynamicDropDownStateClasses = {
      [CSS.boxDropDownOn]: this.showDropDown,
      [CSS.boxDropDownOff]: !this.showDropDown
    };

    return (
      <div class={this.classes(CSS.box, CSS.label, dynamicDropDownStateClasses)}>
        {super.renderThumbLabel(index)}
        {this.showDropDown ? (
          <div bind={this} afterCreate={this._onRootNodeCreate} class={CSS.dropdownRoot}>
            <button
              class={this.classes(
                CSS.interactive,
                CSS.anchor,
                this.isDropdownOpen ? CSS.anchorOpen : CSS.anchorClosed
              )}
              bind={this}
              onclick={this._onAnchorClick}
              onpointerdown={this._killEvent}
              aria-label={this.buttonTooltip}
              title={this.buttonTooltip}
              aria-expanded={this.isDropdownOpen}
              aria-haspopup="listbox"
              type="button"
            >
              {this.currentItem ? this.currentItem.name + " " : ""}
            </button>

            {this.isDropdownOpen ? (
              <ol
                class={this.classes(CSS.dropdownList)}
                onpointerdown={this._killEvent}
                onblur={this._onDropdownBlur}
                bind={this}
                tabindex="-1"
                aria-label={this.buttonTooltip}
                role="listbox"
                onkeydown={this._onOlKeyDown}
                afterCreate={this._focusOnSelectedItem}
              >
                {this.items.map((item, index) => (
                  <li
                    class={
                      index === this.currentIndex
                        ? this.classes(
                            CSS.interactive,
                            CSS.dropdownListItem,
                            CSS.dropdownListItemSelected
                          )
                        : this.classes(CSS.interactive, CSS.dropdownListItem)
                    }
                    bind={this}
                    onclick={this._onDropdownItemClick}
                    data-result={index}
                    aria-label={item.label.join(" ")}
                    role="option"
                    aria-selected={index === this.currentIndex}
                    onkeydown={this._onLiKeyDown}
                    onblur={this._onDropdownBlur}
                    tabindex="0"
                  >
                    {item.label.map((value) => (
                      <span bind={this}>{value}</span>
                    ))}
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _onRootNodeCreate(node: HTMLElement): void {
    this._rootNode = node;
  }

  private _focusOnSelectedItem(node: HTMLElement): void {
    const nodeToSelect: Maybe<Element> =
      node.querySelector(`.${CSS.dropdownListItemSelected}`) ?? (node.firstChild as HTMLElement);

    if (isSome(nodeToSelect) && nodeToSelect instanceof HTMLElement) {
      nodeToSelect.scrollIntoView();
      nodeToSelect.focus();
    }
  }

  private _onAnchorClick(): boolean {
    this.viewModel.toggle();
    return true;
  }

  private _onDropdownItemClick(event: Event): void {
    const node = event.currentTarget as HTMLElement;
    this.viewModel.selectItem(node["data-result"] as number);
  }

  private _onDropdownBlur(event: FocusEvent): void {
    let element = event.relatedTarget as HTMLElement;
    if (element === null) {
      element = document.activeElement as HTMLElement;
    }

    // Slider thumb anchor is grandparent of root node, it takes focus when dropdown button is clicked
    // Ignore it so that we do not close and re-open immediately
    if (
      isSome(this._rootNode) &&
      !this._rootNode.contains(element) &&
      element !== this._rootNode.parentElement &&
      element !== this._rootNode.parentElement.parentElement
    ) {
      this.viewModel.isDropdownOpen = false;
    }
  }

  // Slider eagerly captures onpointerdown, to avoid unwanted movements when clicking on dropdown we stop the events here
  private _killEvent(event: Event): boolean {
    event.stopPropagation();
    return true;
  }

  private _onOlKeyDown(evt: KeyboardEvent): void {
    event.stopPropagation();
    if (eventKey(evt) === KEYS.closeDropdown) {
      this.viewModel.isDropdownOpen = false;
    }
  }

  private _onLiKeyDown(evt: KeyboardEvent): void {
    const element = event.target as HTMLLIElement;
    switch (eventKey(evt)) {
      case KEYS.moveSelectionUp:
        if (element.previousElementSibling) {
          const prevElem = element.previousElementSibling as HTMLLIElement;
          prevElem.focus();
        }
        break;
      case KEYS.moveSelectionDown:
        if (element.nextElementSibling) {
          const nextElem = element.nextElementSibling as HTMLLIElement;
          nextElem.focus();
        }
        break;
      case KEYS.selectItem:
        element.click();
        break;
    }
  }
}

export default SliderWithDropdown;
