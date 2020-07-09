// esri.core
import * as watchUtils from "esri/../../core/watchUtils";

// esri.core.accessorSupport
import { subclass, property } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget = require("esri/../Widget");

// esri.widgets.BuildingExplorer
import BuildingDisciplinesViewModel = require("esri/BuildingDisciplinesViewModel");

// esri.widgets.BuildingExplorer.BuildingDisciplinesTree
import BuildingDisciplinesNode = require("esri/widgets/BuildingDisciplinesNode");

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { tsx, renderable } from "esri/../support/widget";

interface ConstructionParameters {}

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

const BASE = "esri-building-disciplines-tree";

const CSS = {
  base: `${BASE}`
};

/**
 * Widget which displays a tree with the "Disciplines & Categories" of all the
 * components of one or more `BuildingSceneLayer`s.
 *
 * @ignore
 */
@subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesTree")
class BuildingDisciplinesTree extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: ConstructionParameters) {
    super(properties as any);
  }

  initialize(): void {
    this.own(
      watchUtils.on(
        this,
        "viewModel.root.children",
        "after-changes",
        this._updateChildWidgets,
        this._updateChildWidgets,
        this._updateChildWidgets
      ),
      watchUtils.init(this, "messages", this._updateChildWidgets)
    );
  }

  destroy(): void {
    this._destroyChildWidgets();

    if (this.viewModel !== this._defaultViewModel) {
      this._defaultViewModel.destroy();
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  private _defaultViewModel = new BuildingDisciplinesViewModel();

  /**
   * The view model used to control this widget.
   */
  @property({ type: BuildingDisciplinesViewModel })
  @renderable()
  viewModel = this._defaultViewModel;

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
   * Widgets which render the children of the tree's root (i.e. the categories).
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
    return (
      <div role="tree" class={CSS.base}>
        {this._childWidgets.map((child) => child.render())}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Rebuilds the list of child node widgets.
   *
   * @private
   */
  private _updateChildWidgets = (): void => {
    this._destroyChildWidgets(); // Nothing too fancy unless we get performance issues... just rebuild

    if (!this.viewModel) {
      return;
    }

    this._childWidgets = this.viewModel.root.children
      .toArray()
      .reverse() // Match the order used in the `LayerList` widget.
      .map((node) => new BuildingDisciplinesNode({ node, messages: this.messages }));
  };

  /**
   * Destroys all child node widgets.
   *
   * @private
   */
  private _destroyChildWidgets(): void {
    this._childWidgets.forEach((widget) => widget.destroy());
    this._childWidgets = [];
  }
}

export = BuildingDisciplinesTree;
