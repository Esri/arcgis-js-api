// esri.core
import * as watchUtils from "esri/../../core/watchUtils";

// esri.core.accessorSupport
import { subclass, property } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget = require("esri/../Widget");

// esri.widgets.BuildingExplorer.support
import { LayerTreeNode } from "esri/support/LayerTreeNode";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { tsx, renderable, isRTL } from "esri/../support/widget";

interface ConstructionParameters {
  node: LayerTreeNode;
  messages?: Messages;
}

interface Messages {
  expand: string;
  collapse: string;
  hideSublayer: string;
  showSublayer: string;
}

const DEFAULT_MESSAGES: Messages = {
  expand: "expand",
  collapse: "collapse",
  hideSublayer: "hideSublayer",
  showSublayer: "showSublayer"
};

const BASE = "esri-building-disciplines-tree-node";

const CSS = {
  base: `${BASE}`,
  root: `${BASE}--root`,
  leaf: `${BASE}--leaf`,
  label: `${BASE}__label`,
  checkbox: `${BASE}__checkbox`,
  checkboxChecked: `${BASE}__checkbox--checked esri-icon-check-mark`,
  checkboxIndeterminate: `${BASE}__checkbox--indeterminate esri-icon-minus`,
  collapseToggle: `${BASE}__collapse-toggle esri-icon-right`,
  collapseToggleCollapsed: `${BASE}__collapse-toggle--collapsed`,
  children: `${BASE}__children`,
  level: (level: number) => `${BASE}--level-${level}`
};

/**
 * Widget which renders a node of the Disciplines & Categories tree as well as
 * its children. Therefore it recursively renders the whole subtree starting at
 * the specified node.
 *
 * @ignore
 */
@subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesNode")
class BuildingDisciplinesNode extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties: ConstructionParameters) {
    super(properties as any);
  }

  initialize(): void {
    this.own(
      watchUtils.on(
        this,
        "node.children",
        "after-changes",
        this._updateChildWidgets,
        this._updateChildWidgets,
        this._updateChildWidgets
      ),
      this.watch("messages", this._updateChildWidgets)
    );
  }

  destroy(): void {
    this._destroyChildWidgets();
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /**
   * The node which is to be rendered by this widget. Acts as a sort of VM.
   */
  @property({ type: LayerTreeNode })
  @renderable(["node.hasChildren", "node.isDiscipline", "node.level", "node.title", "node.visible"])
  node: LayerTreeNode;

  /**
   * The widget's message bundle.
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @renderable()
  messages: Messages = DEFAULT_MESSAGES;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  /**
   * Widgets which render the children of this node.
   */
  @property()
  @renderable()
  private _childWidgets: BuildingDisciplinesNode[] = [];

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const node = this.node;
    const isRoot = node.isRoot;
    const isLeaf = node.isLeaf;

    // We don't want to render empty disciplines.
    const isEmptyDiscipline = node.isDiscipline && isLeaf;
    if (isEmptyDiscipline) {
      return [];
    }

    return (
      <div
        key={node.id}
        class={this.classes(CSS.base, CSS.level(node.level), {
          [CSS.root]: isRoot,
          [CSS.leaf]: isLeaf
        })}
        bind={this}
        onkeydown={this._onKeydown}
        tabIndex={isLeaf ? null : 0}
        role="treeitem"
        aria-expanded={node.collapsed ? "false" : "true"}
      >
        <label bind={this} class={CSS.label} onclick={this._onCheckboxToggle}>
          {this._renderCollapseToggle()}
          {this._renderCheckbox()}
          <span>{node.title}</span>
        </label>
        {this._renderChildren(node)}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Renders the checkbox used to toggle the visibility of the layers controlled
   * by the node.
   */
  private _renderCheckbox(): VNode {
    const visible = this.node.visible;
    const checked = visible === true;
    const indeterminate = visible === null;

    const label = checked ? this.messages?.hideSublayer : this.messages?.showSublayer;

    return (
      <button
        bind={this}
        class={this.classes(CSS.checkbox, {
          [CSS.checkboxChecked]: checked,
          [CSS.checkboxIndeterminate]: indeterminate
        })}
        onclick={this._onCheckboxToggle}
        role="checkbox"
        aria-checked={checked ? "true" : "false"}
        aria-label={label}
        title={label}
      ></button>
    );
  }

  /**
   * Renders an element which can be used to collapse/expand the node.
   *
   * @private
   */
  private _renderCollapseToggle(): VNode {
    if (!this.node.hasChildren) {
      return [];
    }

    const collapsed = this.node.collapsed;
    const label = collapsed ? this.messages?.expand : this.messages?.collapse;

    return (
      <div
        bind={this}
        class={this.classes(CSS.collapseToggle, { [CSS.collapseToggleCollapsed]: collapsed })}
        onclick={this._onCollapseToggle}
        aria-label={label}
        title={label}
      ></div>
    );
  }

  /**
   * Renders the children of this node.
   *
   * @private
   */
  private _renderChildren(node: LayerTreeNode): VNode {
    if (!node.hasChildren || node.collapsed) {
      return [];
    }

    return <div class={CSS.children}>{this._childWidgets.map((child) => child.render())}</div>;
  }

  /**
   * Called when the user presses a key while the node is focused.
   * This implements most of the logic used for keyboard accessibility:
   *   - Collapse/expand node when Enter or Space are pressed.
   *   - Toggle visibility when the node is a leaf and can't be collapsed/expanded.
   *   - Collapse node when left arrow is pressed.
   *   - Expand node when right arrow is pressed.
   *
   * @private
   */
  private _onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case "Space":
      case "Enter":
        // We only care about events on the node itself, not on any children.
        if (!(event.target as HTMLElement).classList.contains(CSS.base)) {
          return;
        }

        event.stopPropagation();
        this.node.toggleVisibility();
        break;
      case "ArrowLeft":
        event.stopPropagation();
        this.node.toggleCollapsed(isRTL() ? false : true);
        break;
      case "ArrowRight":
        event.stopPropagation();
        this.node.toggleCollapsed(isRTL() ? true : false);
        break;
    }
  }

  /**
   * Called when the user clicks the checkbox or presses enter while it's focused.
   *
   * @private
   */
  private _onCheckboxToggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.node.toggleVisibility();
  }

  /**
   * Called when the user clicks the collapse/expand toggle.
   *
   * @private
   */
  private _onCollapseToggle(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    this.node.toggleCollapsed();
  }

  /**
   * Rebuilds the list of child node widgets.
   *
   * @private
   */
  private _updateChildWidgets = (): void => {
    this._destroyChildWidgets(); // Nothing too fancy unless we get performance issues... just rebuild

    this._childWidgets = this.node.children
      .toArray()
      .reverse() // Match the order used in the `LayerList` widget.
      .map((node) => new BuildingDisciplinesNode({ node, messages: this.messages }));
  };

  /**
   * Destroys the child node widgets.
   *
   * @private
   */
  private _destroyChildWidgets(): void {
    this._childWidgets.forEach((widget) => widget.destroy());
    this._childWidgets = [];
  }
}

export = BuildingDisciplinesNode;
