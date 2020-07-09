/**
 * The LineOfSight widget is a 3D analysis tool that allows you to perform visibility analysis
 * in a {@link module:esri/views/SceneView}.
 * Visibility between a given observer and multiple target points is calculated against
 * the currently displayed content in the view, including ground, integrated meshes and
 * 3D objects such as buildings or trees.
 *
 * The results from the analysis are displayed as lines, where the visible part, indicating what the
 * observer can see, is colored green. Occluded targets are displayed as a red sphere, and the
 * occluded part of the line of sight is also displayed in red. Visible targets are displayed with
 * a green sphere, and a fully green line of sight. When the line of sight can't be calculated,
 * it will be displayed with a gray color. This happens when either the target or the observer
 * are not in the view, or when neither of them are in the view.
 *
 * ![line-of-sight](../../assets/img/apiref/widgets/line-of-sight.png)
 *
 * To use the widget, instantiate it and add it to the view:
 * ```js
 * const lineOfSight = new LineOfSight({
 *   view: view
 * });
 *
 * // Add widget to the bottom left corner of the view
 * view.ui.add(lineOfSight, {
 *   position: "bottom-left"
 * });
 * ```
 *
 * With the interactive widget you can click once in the scene to set the observer, and
 * then click again to set one or multiple targets. Both observer and target points can be moved
 * by dragging them.
 *
 * Using the {@link module:esri/widgets/LineOfSight/LineOfSightViewModel} you can also set
 * the observer and targets programmatically. Read more about it in the
 * {@link module:esri/widgets/LineOfSight/LineOfSightViewModel} documentation or
 * explore the code in the [Line of sight sample](../sample-code/widgets-line-of-sight/index.html).
 *
 * LineOfSight only works with {@link module:esri/views/SceneView}. The results displayed by
 * the line of sight are temporary and cannot be persisted in a {@link module:esri/WebScene}
 * or in {@link module:esri/webscene/Slide slides}.
 *
 * @module esri/widgets/LineOfSight
 * @since 4.14
 *
 * @see [LineOfSight.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/LineOfSight.tsx)
 * @see [LineOfSight.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_LineOfSight.scss)
 * @see module:esri/widgets/LineOfSight/LineOfSightViewModel
 * @see [Sample - Line of sight widget](../sample-code/widgets-line-of-sight/index.html)
 */

// esri.core
import { ignoreAbortErrors } from "esri/core/promiseUtils";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import SceneView = require("esri/views/SceneView");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.LineOfSight
import LineOfSightViewModel = require("esri/widgets/LineOfSight/LineOfSightViewModel");

// esri.widgets.LineOfSight.t9n
import LineOfSightMessages from "esri/widgets/LineOfSight/t9n/LineOfSight";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, messageBundle, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  // common
  button: "esri-button esri-button--secondary",
  buttonDisabled: "esri-button--disabled",
  // base
  base: "esri-line-of-sight esri-widget esri-widget--panel",
  // container
  container: "esri-line-of-sight__container",
  actionSection: "esri-line-of-sight__actions",
  // hint
  hint: "esri-line-of-sight__hint",
  hintText: "esri-line-of-sight__hint-text",
  panelError: "esri-line-of-sight__panel--error",
  // clear
  newAnalysisButton: "esri-line-of-sight__new-analysis-button",
  secondaryButton: "esri-line-of-sight__secondary-button"
};

@subclass("esri.widgets.LineOfSight")
class LineOfSight extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/LineOfSight
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * const lineOfSight = new LineOfSight({
   *   view: view
   * });
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @since 4.14
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @renderable()
  @messageBundle("esri/widgets/LineOfSight/t9n/LineOfSight")
  messages: LineOfSightMessages = null;

  //----------------------------------
  //  view
  //----------------------------------
  /**
   * A reference to the {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: SceneView = null;

  //----------------------------------
  //  visible
  //----------------------------------
  /**
   * Indicates whether the widget is visible.
   *
   * @name visible
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.visible")
  @renderable()
  visible: boolean;

  //----------------------------------
  //  active
  //----------------------------------
  /**
   * Indicates whether the widget is active.
   *
   * @name active
   * @instance
   * @type {boolean}
   * @ignore
   */
  @aliasOf("viewModel.active")
  @renderable()
  active: boolean;

  //----------------------------------
  //  viewModel
  //----------------------------------
  /**
   * The view model for this widget. This is a class that contains the
   * properties and methods that control this widget's behavior. See the {@link
   * module:esri/widgets/LineOfSight/LineOfSightViewModel} class to access all
   * properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/LineOfSight/LineOfSightViewModel}
   * @autocast
   */
  @property({
    type: LineOfSightViewModel
  })
  @renderable(["viewModel.state", "viewModel.isSupported"])
  viewModel: LineOfSightViewModel = new LineOfSightViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    return (
      <div class={CSS.base} role="presentation">
        {this.renderContainerNode()}
      </div>
    );
  }

  renderContainerNode(): VNode {
    if (!this.visible) {
      return null;
    }

    if (!this.viewModel.isSupported) {
      return this.renderUnsupportedMessage();
    }

    let hintNode: VNode = null;
    const actionNodes: VNode[] = [this.renderNewAnalysisButton()];

    if (this.viewModel.state === "creating") {
      hintNode = this.renderHint();
      actionNodes.unshift(this.renderDoneButton());
    } else if (this.viewModel.state === "created" && this.viewModel.targets.length > 0) {
      actionNodes.unshift(this.renderContinueButton());
    }

    return (
      <div class={CSS.container}>
        {hintNode}
        <div class={CSS.actionSection}>{actionNodes}</div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private renderUnsupportedMessage(): VNode {
    return (
      <div class={CSS.panelError} key="esri-line-of-sight__unsupported">
        <p>{this.messages.unsupported}</p>
      </div>
    );
  }

  private renderHint(): VNode {
    return (
      <div class={CSS.hint} key="esri-line-of-sight__hint">
        <p class={CSS.hintText}>{this.messages.hint}</p>
      </div>
    );
  }

  private renderNewAnalysisButton(): VNode {
    return this.renderButton(
      this.onNewAnalysis,
      this.messages.newAnalysis,
      CSS.newAnalysisButton,
      "esri-line-of-sight__new-button"
    );
  }

  private renderDoneButton(): VNode {
    return this.renderButton(
      this.onDone,
      this.messages.done,
      CSS.secondaryButton,
      "esri-line-of-sight__done-button"
    );
  }

  private renderContinueButton(): VNode {
    return this.renderButton(
      this.onContinue,
      this.messages.continueAnalysis,
      CSS.secondaryButton,
      "esri-line-of-sight__continue-button"
    );
  }

  private renderButton(onClick: () => void, label: string, cssClass: string, key: string): VNode {
    const isDisabled = this.viewModel.state === "disabled";

    return (
      <button
        disabled={isDisabled}
        class={this.classes(cssClass, CSS.button, isDisabled && CSS.buttonDisabled)}
        bind={this}
        onclick={onClick}
        key={key}
      >
        {label}
      </button>
    );
  }

  @accessibleHandler()
  private onNewAnalysis(): void {
    this.viewModel.clear();
    ignoreAbortErrors(this.viewModel.start());
  }

  @accessibleHandler()
  private onDone(): void {
    this.viewModel.stop();
  }

  @accessibleHandler()
  private onContinue(): void {
    this.viewModel.continue();
  }
}

export = LineOfSight;
