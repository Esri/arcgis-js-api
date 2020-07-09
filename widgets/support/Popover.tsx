/**
 * This is a support widget used to render and position content outside of the owning widget's render tree.
 *
 * @module esri/widgets/support/Popover
 * @since 4.13
 *
 * @private
 */

// esri.core
import { byId, remove } from "esri/../core/domUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.libs.maquette
import { VNode as MaquetteVNode } from "esri/../libs/maquette/index";

// esri.libs.popper
import { createPopper } from "esri/../libs/popper/index";

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

const BASE_Z_INDEX = 1000;

const CORE_STYLES = {
  "position": "absolute",
  "top": "-9999px",

  // we consider dir for the initial value to avoid scroll-related artifacts
  "left": `${(isRTL() ? 1 : -1) * 9999}px`,

  "z-index": ""
};

type PopoverParams = Partial<
  Pick<
    Popover,
    "owner" | "offset" | "open" | "placement" | "anchorElement" | "renderContentFunction"
  >
>;

@subclass("esri.widgets.support.Popover")
class Popover<W extends Widget = Widget> extends Widget {
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
  constructor(params?: PopoverParams, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this.when(() => {
      this._projector.append(document.body, this.render as () => MaquetteVNode);
      this._renderAttached = true;
    });
  }

  destroy(): void {
    this.owner = null;
    this.anchorElement = null;
    this.renderContentFunction = null;

    if (this._renderAttached) {
      this._projector.detach(this.render as () => MaquetteVNode);
      this._renderAttached = false;
    }

    if (this._rootNode) {
      remove(this._rootNode);
      this._rootNode = null;
    }

    if (this.popper) {
      this.popper.destroy();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _rootNode: HTMLElement;
  private _renderAttached: boolean = false;

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
  //  offset
  //----------------------------------

  /**
   * This property is used to offset the popover from the anchor element.
   * It takes two values, skidding and distance, to allow displacement of the popover.
   *
   * @name offset
   * @type [number, number]
   * @instance
   * @private
   */
  @property()
  @renderable()
  offset = [0, 0];

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

  private popper: ReturnType<typeof createPopper>;

  private _afterRootCreate = (node: HTMLElement): void => {
    this._rootNode = node;
    this._updatePosition(node);
  };

  private _updatePosition = (node: HTMLElement): void => {
    const { open, renderContentFunction } = this;

    if (!open || !renderContentFunction) {
      node.style.zIndex = CORE_STYLES["z-index"];
      return;
    }

    const anchor = this._getAnchor();
    if (!anchor) {
      return;
    }

    const { offset, placement } = this;

    const contentNode = node.firstElementChild as HTMLElement;
    this.popper = createPopper(anchor, contentNode, {
      placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset
          }
        }
      ]
    });

    node.style.zIndex = `${BASE_Z_INDEX}`;
  };

  private _getAnchor(): HTMLElement | null {
    const { anchorElement } = this;

    return byId(typeof anchorElement === "function" ? anchorElement() : anchorElement);
  }
}

export = Popover;
