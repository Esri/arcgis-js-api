// esri.core
import { handlesGroup } from "esri/../core/handleUtils";
import { Maybe, removeMaybe } from "esri/../core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, subclass, property } from "esri/../core/accessorSupport/decorators";

// esri.layers
import GraphicsLayer from "esri/../layers/GraphicsLayer";

// esri.views
import IMapView from "esri/../views/IMapView";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.support
import { VNode } from "esri/widgets/interfaces";
import { messageBundle, tsx, WidgetProperties } from "esri/widgets/widget";

// esri.widgets.support.SelectionToolbar
import SelectionToolbarViewModel from "esri/widgets/SelectionToolbar/SelectionToolbarViewModel";

// esri.widgets.support.SelectionToolbar.t9n
import SelectionToolbarMessages from "esri/widgets/SelectionToolbar/t9n/SelectionToolbar";

// esri.widgets.support.Selector2D
import { SelectionOperation2DEvents, SelectionOperation2DOptions } from "esri/widgets/Selector2D/interfaces";
import SelectionOperation2D from "esri/widgets/Selector2D/SelectionOperation2D";

interface VisibleElements {
  lassoTool?: boolean;
  rectangleTool?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  lassoTool: true,
  rectangleTool: true
};

const DEFAULT_LASSO_TOOL_OPTIONS: SelectionOperation2DOptions = {
  createTool: "polygon",
  createOptions: {
    mode: "freehand"
  }
};

const DEFAULT_RECTANGLE_TOOL_OPTIONS: SelectionOperation2DOptions = {
  createTool: "rectangle"
};

type DefaultTool = "lasso" | "rectangle";

type ToolName = DefaultTool | string;

interface ActiveToolInfo {
  toolName: ToolName;
  operation: SelectionOperation2D;
}

interface SelectionToolConfig extends SelectionOperation2DOptions {
  toolName: ToolName;
  icon: string;
}

interface SelectionToolbarEvents extends SelectionOperation2DEvents {}

type RequiredConstructProperties = {
  view: IMapView;
};

type WidgetConstructProperties = WidgetProperties<SelectionToolbarViewModel> & {
  layers?: GraphicsLayer[];
  toolConfigs?: SelectionToolConfig[];
  visibleElements?: VisibleElements;
};

type ConstructProperties = RequiredConstructProperties & WidgetConstructProperties;

const CSS = {
  base: "esri-selection-toolbar",
  container: "esri-selection-toolbar__container",
  toolButton: "esri-selection-toolbar__tool-button",

  // common
  disabled: "esri-disabled",
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-vertex-gps" // TODO
};

@subclass("esri.widgets.support.SelectionToolbar")
class SelectionToolbar
  extends Widget<WidgetConstructProperties, SelectionToolbarEvents>
  implements ConstructProperties
{
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);

    this._viewModelHandlesGroup = handlesGroup([
      this.viewModel.on("selection-change", (event) => this.emit("selection-change", event)),
      this.viewModel.on("complete", (event) => {
        this._set("activeToolInfo", null);
        this.emit("complete", event);
      })
    ]);
  }

  override destroy(): void {
    this._viewModelHandlesGroup = removeMaybe(this._viewModelHandlesGroup);
  }

  protected override loadDependencies(): Promise<any> {
    return import("@esri/calcite-components/dist/custom-elements/bundles/action");
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _viewModelHandlesGroup: Maybe<IHandle> = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeToolInfo
  //----------------------------------

  /**
   * Information regarding the active tool.
   *
   * @name activeToolInfo
   * @instance
   * @type {module:esri/widgets/support/SelectionToolbar/ActiveToolInfo}
   * @readonly
   * @todo revisit doc
   */
  @property({
    readOnly: true
  })
  activeToolInfo: ActiveToolInfo = null;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The SelectionToolbar widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  override label: string = undefined;

  //----------------------------------
  //  layers
  //----------------------------------

  /**
   * An array of {@link module:esri/layers/GraphicsLayer}, containing selection candidates.
   *
   * @name layers
   * @instance
   * @type {module:esri/layers/GraphicsLayer[]}
   *
   */
  @aliasOf("viewModel.layers")
  layers: GraphicsLayer[] = [];

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
  @messageBundle("esri/widgets/support/SelectionToolbar/t9n/SelectionToolbar")
  messages: SelectionToolbarMessages = null;

  //----------------------------------
  //  toolConfigs
  //----------------------------------

  /**
   * An array of configurations for custom selection tools to display in the widget UI.
   *
   * @name toolConfigs
   * @instance
   * @type {module:esri/widgets/support/SelectionToolbar/SelectionToolConfig[]}
   */
  @property()
  toolConfigs: SelectionToolConfig[] = [];

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * The view from which the widget will operate.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView}
   */
  @aliasOf("viewModel.view")
  view: IMapView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/support/SelectionToolbar/SelectionToolbarViewModel}
   */
  @property()
  override viewModel = new SelectionToolbarViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Sketch~VisibleElements}
   * @autocast
   * @todo revisit doc
   *
   */

  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Activates a specified tool. Custom tools must be preconfigured via the 'toolConfigs' property.
   *
   * @method activate
   * @instance
   * @todo revisit doc
   *
   */
  activate(toolName: ToolName): void {
    this.cancel();

    switch (toolName) {
      case "lasso":
        this._activateTool("lasso");
      case "rectangle":
        this._activateTool("rectangle");
      default:
        this._activateTool(toolName);
    }
  }

  /**
   * Cancels the active operation and fires the 'complete' event.
   * The 'complete' event indicates if the operation was cancelled via the 'aborted' property.
   *
   * @method cancel
   * @instance
   * @todo revisit doc
   *
   */
  cancel(): void {
    this.viewModel.cancel();
    this._set("activeToolInfo", null);
  }

  override render(): VNode {
    return (
      <div aria-label={this.label} class={this.classes(CSS.base, CSS.esriWidget)}>
        <div class={CSS.container}>
          {this.renderDefaultTools()}
          {this.renderCustomTools()}
        </div>
      </div>
    );
  }

  protected renderDefaultTools(): VNode[] {
    if (this.view?.type !== "2d") {
      return undefined;
    }

    return [this.renderRectangleTool(), this.renderLassoTool()];
  }

  protected renderCustomTools(): VNode[] {
    if (!this.toolConfigs || !this.toolConfigs.length) {
      return undefined;
    }

    return this.toolConfigs.map((config) => (
      <calcite-action
        active={this.activeToolInfo?.toolName === config.toolName}
        bind={this}
        class={CSS.toolButton}
        icon={config.icon || "selection"}
        label={config.toolName}
        onclick={() => this._onCustomToolClick(config.toolName)}
        scale="s"
        text={config.toolName}
        title={config.toolName}
      />
    ));
  }

  protected renderLassoTool(): VNode {
    const { activeToolInfo, messages, visibleElements } = this;

    if (!visibleElements.lassoTool) {
      return undefined;
    }

    return (
      <calcite-action
        active={activeToolInfo?.toolName === "lasso"}
        bind={this}
        icon="lasso"
        label={messages.selectByLasso}
        onclick={this._onLassoToolClick}
        scale="s"
        text={messages.selectByLasso}
        title={messages.selectByLasso}
      />
    );
  }

  protected renderRectangleTool(): VNode {
    const { activeToolInfo, messages, visibleElements } = this;

    if (!visibleElements.rectangleTool) {
      return undefined;
    }

    return (
      <calcite-action
        active={activeToolInfo?.toolName === "rectangle"}
        bind={this}
        icon="cursor-marquee"
        label={messages.selectByRectangle}
        onclick={this._onRectangleToolClick}
        scale="s"
        text={messages.selectByRectangle}
        title={messages.selectByRectangle}
      />
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _onCustomToolClick(toolName: ToolName): void {
    this._toggleTool(toolName);
  }

  private _onLassoToolClick(): void {
    this._toggleTool("lasso");
  }

  private _onRectangleToolClick(): void {
    this._toggleTool("rectangle");
  }

  // Initialize a new selection operation
  private _activateTool(toolName: ToolName): void {
    const options = this._getToolOptions(toolName);

    if (!options) {
      return;
    }

    const operation = this.viewModel.activate(options);

    this._set("activeToolInfo", {
      toolName,
      operation
    });
  }

  // Used by UI buttons to toggle active operations
  // Allows deactivating active tools with a second click
  private _toggleTool(toolName: ToolName): void {
    if (this.activeToolInfo) {
      const activeTool = this.activeToolInfo.toolName;

      this.cancel();

      if (activeTool === toolName) {
        return;
      }
    }

    this._activateTool(toolName);
  }

  private _getToolOptions(toolName: ToolName): SelectionOperation2DOptions {
    if (toolName === "lasso") {
      return DEFAULT_LASSO_TOOL_OPTIONS;
    }

    if (toolName === "rectangle") {
      return DEFAULT_RECTANGLE_TOOL_OPTIONS;
    }

    const options = this.toolConfigs.find((config) => config.toolName === toolName);

    if (!options) {
      return undefined;
    }

    const { createTool, createOptions, selectionOptions } = options;

    return { createTool, createOptions, selectionOptions };
  }
}

export default SelectionToolbar;
