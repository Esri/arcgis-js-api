/**
 * This is a support widget used to render and position content outside of the owning widget's render tree.
 *
 * @module esri/widgets/support/Popover
 * @since 4.13
 *
 * @private
 */

/// <amd-dependency path="esri/../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/../core/tsSupport/decorateHelper" name="__decorate" />

// esri.core
import { byId, remove } from "esri/../core/domUtils";

// esri.core.accessorSupport
import { declared, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.libs.maquette
import { VNode as MaquetteVNode } from "esri/../libs/maquette/index";

// esri.widgets
import Widget = require("esri/Widget");

// esri.widgets.support
import { VNode } from "esri/widgets/interfaces";
import { isRTL, renderable, tsx } from "esri/widgets/widget";

type NodeReference = HTMLElement | string;
type GetNodeReferenceFunction = () => NodeReference;

type Placement =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";

const placements: Placement[] = [
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end",
  "right",
  "right-start",
  "right-end",
  "top",
  "top-start",
  "top-end"
];

const CSS = {
  base: "esri-popover",
  open: "esri-popover--open"
};

const CORE_STYLES = {
  position: "absolute",
  top: "-9999px",

  // we consider dir for the initial value to avoid scroll-related artifacts
  left: `${(isRTL() ? 1 : -1) * 9999}px`,

  "z-index": ""
};

const BASE_Z_INDEX = 1000;

type PopoverParams = Partial<
  Pick<Popover, "owner" | "open" | "placement" | "anchorElement" | "renderContentFunction">
>;

@subclass("esri.widgets.support.Popover")
class Popover<W extends Widget = Widget> extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/support/Popover
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(params?: PopoverParams) {
    super(params);
  }

  initialize(): void {
    this._projector.append(document.body, this.render as () => MaquetteVNode);
  }

  destroy(): void {
    this.owner = null;
    this.anchorElement = null;
    this.renderContentFunction = null;

    this._projector.detach(this.render as () => MaquetteVNode);
    remove(this._rootNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _rootNode: HTMLElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  anchorElement
  //----------------------------------

  /**
   * The element where the content will be positioned relative to.
   *
   * @name anchorElement
   * @type {string | HTMLElement | Function}
   * @instance
   *
   * @todo revisit description and type (Fn)
   */
  @property()
  @renderable()
  anchorElement: NodeReference | GetNodeReferenceFunction | null = null;

  //----------------------------------
  //  container
  //----------------------------------

  /**
   * This will always be the document body.
   *
   * @private
   */
  @property()
  set container(_value: HTMLElement) {}

  //----------------------------------
  //  open
  //----------------------------------

  /**
   * When true, the content will be displayed and positioned. Otherwise, the content is hidden.
   *
   * @name open
   * @type boolean
   * @instance
   */
  @property()
  @renderable()
  open = false;

  //----------------------------------
  //  owner
  //----------------------------------

  /**
   * The owning widget. Needed to provide proper context for rendering.
   *
   * @name owner
   * @type {module:esri/widgets/Widget}
   * @instance
   *
   * @todo revisit doc
   */
  @property()
  @renderable()
  set owner(value: W) {
    this._set("owner", value);
  }

  //----------------------------------
  //  placement
  //----------------------------------

  /**
   * This property defines where the content will be positioned relative to the anchor.
   *
   * @name placement
   * @type {"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"}
   * @instance
   * @default "top"
   *
   * @todo revisit doc
   */
  @property()
  @renderable()
  get placement(): Placement {
    return "top";
  }
  set placement(value: Placement) {
    if (placements.indexOf(value) === -1) {
      this._clearOverride("placement");
      return;
    }

    this._override("placement", value);
  }

  //----------------------------------
  //  renderContentFunction
  //----------------------------------

  /**
   * The content to be rendered and positioned.
   *
   * @name renderContentFunction
   * @type Function
   * @instance
   *
   * @todo revisit description and type
   */
  @property()
  @renderable()
  renderContentFunction: () => VNode = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const { open, owner, renderContentFunction } = this;

    return (
      <div
        class={this.classes(CSS.base, open ? CSS.open : null)}
        styles={CORE_STYLES}
        afterCreate={this._afterRootCreate}
        afterUpdate={this._updatePosition}
      >
        {open && renderContentFunction && renderContentFunction.call(owner)}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _afterRootCreate = (node: HTMLElement): void => {
    this._rootNode = node;
    this._updatePosition(node);
  };

  private _updatePosition = (node: HTMLElement): void => {
    const { open, renderContentFunction } = this;

    if (!open || !renderContentFunction) {
      node.style.top = CORE_STYLES.top;
      node.style.left = CORE_STYLES.left;
      node.style.zIndex = CORE_STYLES["z-index"];
      return;
    }

    const anchor = this._getAnchor();
    if (!anchor) {
      return;
    }

    const { placement } = this;

    const {
      left: anchorLeft,
      height: anchorHeight,
      width: anchorWidth,
      top: anchorTop
    } = anchor.getBoundingClientRect();

    const contentNode = node.firstElementChild as HTMLElement;
    const contentStyles = getComputedStyle(contentNode);
    const yMargin =
      parseInt(contentStyles.marginTop, 10) + parseInt(contentStyles.marginBottom, 10);
    const xMargin =
      parseInt(contentStyles.marginLeft, 10) + parseInt(contentStyles.marginRight, 10);
    const contentHeight = contentNode.offsetHeight + yMargin;
    const contentWidth = contentNode.offsetWidth + xMargin;

    let left: number;
    let top: number;

    if (placement.indexOf("top") > -1) {
      top = anchorTop - contentHeight;

      if (placement === "top-start") {
        left = anchorLeft;
      } else if (placement === "top-end") {
        left = anchorLeft + anchorWidth - contentWidth;
      } else {
        left = anchorLeft + anchorWidth / 2 - contentWidth / 2;
      }
    }

    if (placement.indexOf("bottom") > -1) {
      top = anchorTop + anchorHeight;

      if (placement === "bottom-start") {
        left = anchorLeft;
      } else if (placement === "bottom-end") {
        left = anchorLeft + anchorWidth - contentWidth;
      } else {
        left = anchorLeft + anchorWidth / 2 - contentWidth / 2;
      }
    }

    if (placement.indexOf("left") > -1) {
      left = anchorLeft - contentWidth;

      if (placement === "left-start") {
        top = anchorTop;
      } else if (placement === "left-end") {
        top = anchorTop + anchorHeight - contentHeight;
      } else {
        top = anchorTop + anchorHeight / 2 - contentHeight / 2;
      }
    }

    if (placement.indexOf("right") > -1) {
      left = anchorLeft + anchorWidth;

      if (placement === "right-start") {
        top = anchorTop;
      } else if (placement === "right-end") {
        top = anchorTop + anchorHeight - contentHeight;
      } else {
        top = anchorTop + anchorHeight / 2 - contentHeight / 2;
      }
    }

    const { clientWidth: viewportWidth, clientHeight: viewportHeight } = document.documentElement;

    if (left < 0) {
      left = anchorLeft;
    } else if (left + contentWidth > viewportWidth) {
      const delta = left + contentWidth - viewportWidth;
      left -= delta;
    }

    if (top < 0) {
      top = anchorTop + anchorHeight;
    } else if (top + contentHeight > viewportHeight) {
      const delta = top + contentHeight - viewportHeight;
      top -= delta;
    }

    const scrollingElement = document.scrollingElement || document.documentElement;
    const { scrollLeft, scrollTop } = scrollingElement;

    node.style.top = `${top + scrollTop}px`;
    node.style.left = `${left + scrollLeft}px`;
    node.style.zIndex = `${BASE_Z_INDEX}`;
  };

  private _getAnchor(): HTMLElement | null {
    const { anchorElement } = this;

    return byId(typeof anchorElement === "function" ? anchorElement() : anchorElement);
  }
}

export = Popover;
