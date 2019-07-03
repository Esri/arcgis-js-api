/**
 * This widget provides an out-of-the-box editing experience to help streamline the editing
 * experience within a web application. The widget has two different {@link module:esri/widgets/Editor/Workflow Workflows},
 * `create` and `update`. These workflows allow you to either add features or edit and/or delete existing features within an editable feature layer.
 * The widget automatically recognizes if there are editable feature layers within the map. If it recognizes that they are editable,
 * the layers can be used by the widget. In addition, it is also possible to configure how the `Editor` behaves by setting its
 * {@link module:esri/widgets/Editor#layerInfos layerInfos} property.
 * This property takes an array of configuration objects which allow you to configure the editing experience for these layers.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * The Editor widget is not yet at full parity with the functionality provided in the 3.x
 * [Editor](https://developers.arcgis.com/javascript/3/jsapi/editor-amd.html)
 * widget. For example, there is currently no support for editing attachments or related feature attributes.
 * There is also currently no support for editing feature layers derived from feature collections and is currently only supported when
 * working with {@link module:esri/views/MapView MapViews}.
 * :::
 *
 * ![editor](../../assets/img/apiref/widgets/editor_in_action.gif)
 *
 * @module esri/widgets/Editor
 * @amdalias Editor
 * @since 4.11
 *
 * @see [Editor.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Editor.tsx)
 * @see [Editor.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Editor.scss)
 * @see [Sample - Edit features with the Editor widget](../sample-code/widgets-editor-basic/index.html)
 * @see [Sample - Editor widget with configurations](../sample-code/widgets-editor-configurable/index.html)
 * @see [Sample - Popup with edit action](../sample-code/popup-editaction/index.html)
 * @see module:esri/widgets/Editor/EditorViewModel
 * @see module:esri/widgets/Editor/Workflow
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/layers/FeatureLayer
 *
 * @example
 * var editor = new Editor({
 *   view: view
 * });
 *
 * view.ui.add(editor, "top-right");
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />
/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign"/>

// @dojo

// @dojo.framework.shim
import Map from "@dojo/framework/shim/Map";

// dojo
import * as i18nCommon from "dojo/i18n!esri/nls/common";
import * as i18n from "dojo/i18n!esri/widgets/Editor/nls/Editor";
import * as i18nTemplates from "dojo/i18n!esri/widgets/FeatureTemplates/nls/FeatureTemplates";

// esri
import { Polygon, Polyline } from "esri/geometry";
import Graphic = require("esri/Graphic");
import { substitute } from "esri/intl";

// esri.core
import { eventKey } from "esri/core/events";
import HandleOwner = require("esri/core/HandleOwner");
import { init, on, watch, whenNot } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import FeatureLayer = require("esri/layers/FeatureLayer");

// esri.views
import MapView = require("esri/views/MapView");

// esri.widgets
import FeatureForm = require("esri/widgets/FeatureForm");
import FeatureTemplates = require("esri/widgets/FeatureTemplates");
import Spinner = require("esri/widgets/Spinner");
import Widget = require("esri/widgets/Widget");

// esri.widgets.Editor
import EditorViewModel = require("esri/widgets/Editor/EditorViewModel");
import {
  CancelWorkflowOptions,
  CreateWorkflow,
  CreateWorkflowParams,
  FailedOperation,
  LayerInfo,
  SupportingWidgetDefaults,
  UpdateWorkflow,
  UpdateWorkflowParams,
  WorkflowType
} from "esri/widgets/Editor/interfaces";

// esri.widgets.FeatureTemplates
import { ItemList } from "esri/widgets/FeatureTemplates/ItemList";

// esri.widgets.Sketch.support
import { CreateEvent } from "esri/widgets/Sketch/support/interfaces";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { accessibleHandler, isRTL, renderable, tsx } from "esri/widgets/support/widget";

const CSS = {
  base: "esri-editor esri-widget",
  header: "esri-editor__header",
  scroller: "esri-editor__scroller",
  content: "esri-editor__content",
  contentWrapper: "esri-editor__temp-wrapper",
  message: "esri-editor__message",
  controls: "esri-editor__controls",
  title: "esri-editor__title",
  backButton: "esri-editor__back-button",
  modeSelection: "esri-editor__mode-selection",
  progressBar: "esri-editor__progress-bar",

  warningCard: "esri-editor__warning-card",
  warningHeader: "esri-editor__warning-header",
  warningHeading: "esri-editor__warning-heading",
  warningMessage: "esri-editor__warning-message",
  warningDivider: "esri-editor__warning-divider",
  warningOption: "esri-editor__warning-option",
  warningOptionPrimary: "esri-editor__warning-option--primary",
  warningOptionNegative: "esri-editor__warning-option--negative",
  warningOptionPositive: "esri-editor__warning-option--positive",

  featureList: "esri-editor__feature-list",
  featureListItem: "esri-editor__feature-list-item",
  featureListItemDisabled: "esri-editor__feature-list-item--disabled",
  featureListName: "esri-editor__feature-list-name",
  featureListIcon: "esri-editor__feature-list-icon",
  featureListIndex: "esri-editor__feature-list-index",

  controlButton: "esri-editor__control-button",

  overlay: "esri-editor__overlay",

  // icon
  errorIcon: "esri-icon-error2",
  basemapIcon: "esri-basemap",
  rightArrowIcon: "esri-icon-right",
  leftArrowIcon: "esri-icon-left",
  warningIcon: "esri-icon-notice-triangle",
  widgetIcon: "esri-icon-edit",

  // common
  button: "esri-button",
  buttonDisabled: "esri-button--disabled",
  buttonSecondary: "esri-button--secondary",
  buttonTertiary: "esri-button--tertiary",
  heading: "esri-heading",
  input: "esri-input",
  interactive: "esri-interactive",
  select: "esri-select"
};

interface ControlButton {
  label: string;
  type: "primary" | "secondary" | "tertiary";
  clickHandler: () => void;
  disabled?: boolean;
}

interface Button {
  label: string;
  class: string;
  clickHandler: () => void;
  disabled?: boolean;
  key: string | number;
}

interface Prompt {
  title: string;
  message: string;
  options: PromptOption[];
}

interface PromptOption {
  label: string;
  action: () => void;
  type?: "neutral" | "negative" | "positive";
}

function focusOnCreate(node: HTMLElement): void {
  node.focus();
}

interface Editor extends HandleOwner {}

type EditorParams = Partial<
  Pick<
    Editor,
    "allowedWorkflows" | "layerInfos" | "supportingWidgetDefaults" | "view" | "viewModel"
  >
>;

@subclass("esri.widgets.Editor")
class Editor extends declared(Widget, HandleOwner) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Editor
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // Typical usage for Editor widget. This will recognize all editable layers in the map.
   * const editor = new Editor({
   *   view: viewDiv
   * });
   *
   */
  constructor(params?: EditorParams) {
    super();

    this._handleSave = this._handleSave.bind(this);
    this._handleBack = this._handleBack.bind(this);
    this._handleDone = this._handleDone.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
    this._handleAdd = this._handleAdd.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
  }

  postInitialize(): void {
    this.own([
      init(this, "viewModel", (viewModel) => {
        this._featureForm.viewModel = viewModel ? viewModel.featureFormViewModel : null;
        this._featureTemplates.viewModel = viewModel ? viewModel.featureTemplatesViewModel : null;
        this._spinner.viewModel = viewModel ? viewModel.spinnerViewModel : null;
      }),

      init(this, "view", (view, oldView) => {
        const key = `editor-${this.id}-spinner`;

        if (oldView) {
          oldView.ui.remove(this._spinner, key);
        }

        view &&
          view.ui.add(this._spinner, {
            key,
            position: "manual"
          });
      }),

      on<CreateEvent>(this, "viewModel.sketchViewModel", "create", () => {
        // re-render to get appropriate tip for 'in-progress' sketch graphic
        this.scheduleRender();
      }),

      on(this, "viewModel.activeWorkflow", "cancel-request", ({ controller }) => {
        this._prompt = {
          title: i18n.cancelRequestTitle,
          message: i18n.cancelRequestWarningMessage,
          options: [
            {
              label: i18nCommon.form.no,
              type: "neutral",
              action: () => {
                controller.deny();
                return (this._prompt = null);
              }
            },
            {
              label: i18nCommon.form.yes,
              type: "negative",
              action: () => {
                controller.allow();
                this._prompt = null;
              }
            }
          ]
        };

        this.scheduleRender();
      }),

      init<SupportingWidgetDefaults>(this, "supportingWidgetDefaults", (defaults) => {
        if (!defaults) {
          return;
        }

        this._featureForm.set(defaults.featureForm);
        this._featureTemplates.set(defaults.featureTemplates);
        this.viewModel.sketchViewModel.set(defaults.sketch);
      }),

      watch<FailedOperation[]>(this, "viewModel.failures", (failures) => {
        if (!failures) {
          return;
        }

        const [{ error, retry, cancel }] = failures;

        this._prompt = {
          title: i18n.errorWarningTitle,
          message: substitute(i18n.errorWarningMessageTemplate, { errorMessage: error.message }),
          options: [
            {
              label: i18n.retry,
              type: "positive",
              action: () => {
                retry();
                this._prompt = null;
              }
            },
            {
              label: i18n.ignore,
              type: "neutral",
              action: () => {
                cancel();
                return (this._prompt = null);
              }
            }
          ]
        };
      }),

      whenNot(this, "viewModel.activeWorkflow", () => (this._featureTemplates.filterText = ""))
    ]);
  }

  destroy(): void {
    this._featureForm.destroy();
    this._featureTemplates.destroy();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _featureForm: FeatureForm = new FeatureForm();

  private _featureTemplates: FeatureTemplates = new FeatureTemplates();

  private _filterText: string = "";

  private _prompt: Prompt = null;

  private _spinner: Spinner = new Spinner();

  //--------------------------------------------------------------------------
  //
  // Type definitions
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  // CreationInfo typedef
  //
  //--------------------------------------------------------------------------

  /**
   * This object provides the feature template and layer for creating a new feature.
   *
   * @typedef module:esri/widgets/Editor~CreationInfo
   *
   * @property {module:esri/layers/FeatureLayer} layer - The associated feature layer where
   * the new feature is created.
   * @property {module:esri/layers/support/FeatureTemplate} template - The associated feature template
   * used to create the new feature.
   */

  //--------------------------------------------------------------------------
  //
  // LayerInfo typedef
  //
  //--------------------------------------------------------------------------

  /**
   * Editor configurations used for an array of fields.
   *
   * @typedef module:esri/widgets/Editor~LayerInfo
   *
   * @property {module:esri/layers/FeatureLayer} layer - The associated feature layer containing
   * the editable fields.
   * @property {module:esri/widgets/FeatureForm/FieldConfig[]} [fieldConfig] - The configuration options
   * for displaying an array of fields within the widget. Take note that all fields except for `editor`,
   * `globalID`, `objectID`, and system maintained area and length fields will be included.
   * Otherwise, it is up to the developer to set the right field(s) to override and display.
   *
   * ::: esri-md class="panel trailer-1"
   * If this is set, in addition to overrides in the [supportingWidgetDefaults](#supportingWidgetDefaults), the overrides specified in
   * the [supportingWidgetDefaults](#supportingWidgetDefaults) property take precedence.
   * :::
   *
   * @property {boolean} [enabled = true] - Indicates whether to enable editing on the layer. Defaults to `true` if service supports it.
   * @property {boolean} [addEnabled] - Indicates whether to enable `Add feature` functionality. Defaults to `true` if service supports it.
   * @property {boolean} [updateEnabled] - Indicates whether to enable `Update feature` functionality. Defaults to `true` if service supports it.
   * @property {boolean} [deleteEnabled] - Indicates whether to enable the ability to delete features. Defaults to `true` if service supports it.
   */

  //--------------------------------------------------------------------------
  //
  // SupportingWidgetDefaults typedef
  //
  //--------------------------------------------------------------------------

  /**
   * Set this to customize any supporting Editor widgets default behavior. These widgets include
   * {@link module:esri/widgets/FeatureForm}, {@link module:esri/widgets/FeatureTemplates},
   * and {@link module:esri/widgets/Sketch}.
   *
   * @typedef module:esri/widgets/Editor~SupportingWidgetDefaults
   *
   * @property {Object} [featureForm] - An object containing properties specific for customizing the
   * {@link module:esri/widgets/FeatureForm} widget.
   * @property {module:esri/widgets/FeatureForm/FieldConfig[]} [featureForm.fieldConfig] - An array of
   * {@link module:esri/widgets/FeatureForm/FieldConfig} objects to use within the {@link module:esri/widgets/FeatureForm}.
   * ::: esri-md class="panel trailer-1"
   * Any {@link module:esri/widgets/FeatureForm/FieldConfig field configurations} set within the [layerInfos](#layerInfos) property will be
   * overridden if it is set here in the [supportingWidgetDefaults](#supportingWidgetDefaults) property.
   * :::
   * @property {string} [featureForm.groupDisplay] - String indicating the
   * {@link module:esri/widgets/FeatureForm#groupDisplay groupDisplay} and how they will be displayed to the end user.
   *
   * @property {Object} [featureTemplates] - An object containing properties specific for customizing
   * the {@link module:esri/widgets/FeatureTemplates} widget.
   * @property {string | module:esri/widgets/FeatureTemplates~GroupByFunction} [featureTemplates.groupBy] - Aids in managing
   * various template items and how they display within the widget. Please refer to
   * {@link module:esri/widgets/FeatureTemplates#groupBy groupBy API reference} for additional
   * information.
   * @property {boolean} [featureTemplates.filterEnabled] - Indicates whether the {@link module:esri/widgets/FeatureTemplates#filterEnabled templates filter}
   * displays.
   *
   * @property {Object} [sketch] - An object containing properties specific for customizng the
   * {@link module:esri/widgets/Sketch} widget.
   * @property {Object} [sketch.defaultUpdateOptions] - An object containing the `defaultUpdateOptions`
   * for the {@link module:esri/widgets/Sketch} widget.
   * @property {module:esri/symbols/SimpleMarkerSymbol} [sketch.markerSymbol] - The marker symbol used to symbolize any
   * point feature updates.
   * @property {module:esri/symbols/SimpleFillSymbol} [sketch.polygonSymbol] - The polygon symbol used to symbolize any
   * polygon feature updates.
   * @property {module:esri/symbols/SimpleLineSymbol} [sketch.polylineSymbol] - The line symbol used to symbolize any
   * line feature updates.
   */

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeWorkflow
  //----------------------------------

  /**
   * A property indicating the current active workflow.
   *
   * @name activeWorkflow
   * @instance
   * @type {module:esri/widgets/Editor/Workflow}
   * @readonly
   *
   */
  @aliasOf("viewModel.activeWorkflow")
  activeWorkflow: CreateWorkflow | UpdateWorkflow = null;

  //----------------------------------
  //  allowedWorkflows
  //----------------------------------

  /**
   * An array of string values which specifies what end users are allowed to
   * edit. For example, a feature layer with full editing privileges may
   * be available. But you may only want the end user to have the
   * ability to update existing features. Set the `allowedWorkflows`
   * to only `update`.
   *
   * Possible Value | Description | Example
   * ---------------|------------|----------
   * create | Indicated in the widget via the `Add feature` option. This allows the end user to create new features in the feature service. | ![combinedcreate](../../assets/img/apiref/widgets/editor_combined_create.png)
   * update | Indicated in the widget via the `Edit feature` option. This allows the end user to update and/or delete features in the feature service. | ![combinedupdate](../../assets/img/apiref/widgets/editor_combined_update.png)
   *
   * ::: esri-md class="panel trailer-1"
   * These workflows are only enabled if the feature service allows these operations.
   * For example, if a feature service is only enabled to allow updates, `Add features`
   * is not enabled.
   * :::
   *
   * @name allowedWorkflows
   * @instance
   * @type {string[]}
   *
   * @example
   * const editor = new Editor({
   *   view: view,
   *   allowedWorkflows: ["update"] // allows only updates and no adds
   * });
   *
   */
  @aliasOf("viewModel.allowedWorkflows")
  allowedWorkflows: WorkflowType[] = null;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   * @readonly
   */
  @property()
  iconClass: string = CSS.widgetIcon;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property()
  label: string = i18n.widgetLabel;

  //----------------------------------
  //  layerInfos
  //----------------------------------

  /**
   * An array of editing configurations for individual layers.
   *
   * If you have an editable feature layer but do not want
   * the end user to do any type of editing, you can limit this by
   * setting the `enabled` property to `false`.
   *
   * @name layerInfos
   * @instance
   * @type {module:esri/widgets/Editor~LayerInfo[]}
   * @see [Sample - Editor widget with configurations](../sample-code/widgets-editor-configurable/index.html)
   *
   * @example
   * const editor = new Editor({
   *   layerInfos: [{
   *     layer: featureLayer, // pass in the feature layer
   *     fieldConfig: [ // Specify which fields to configure
   *       {
   *         name: "fulladdr",
   *         label: "Full Address"
   *       },
   *       {
   *         name: "neighborhood",
   *         label: "Neighborhood"
   *       }],
   *     enabled: true, // default is true, set to false to disable editing functionality
   *     addEnabled: true, // default is true, set to false to disable the ability to add a new feature
   *     updateEnabled: false // default is true, set to false to disable the ability to edit an existing feature
   *     deleteEnabled: false // default is true, set to false to disable the ability to delete features
   *   }]
   * });
   *
   */
  @aliasOf("viewModel.layerInfos")
  layerInfos: LayerInfo[] = null;

  //----------------------------------
  //  supportingWidgetDefaults
  //----------------------------------

  /**
   * This property allows customization of supporting Editor widgets and their default behavior.
   * These widgets include {@link module:esri/widgets/FeatureForm}, {@link module:esri/widgets/FeatureTemplates}, and
   * {@link module:esri/widgets/Sketch}.
   *
   * ::: esri-md class="panel trailer-1"
   * This property is useful for basic overrides of the default widgets. There may be some limitations
   * to what the Editor can do with these overridden properties. For example, the Editor will always
   * disable the `multipleSelectionEnabled` property in {@link module:esri/widgets/Sketch#defaultUpdateOptions Sketch.defaultUpdateOptions}
   * no matter what is set within this property.
   * :::
   *
   * @name supportingWidgetDefaults
   * @instance
   * @type {module:esri/widgets/Editor~SupportingWidgetDefaults}
   * @see [Sample - Editor widget with configurations](../sample-code/widgets-editor-configurable/index.html)
   *
   */
  @property()
  supportingWidgetDefaults: SupportingWidgetDefaults = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView}. This view
   * provides the editable layers for the Editor widget.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView}
   *
   */
  @aliasOf("viewModel.view")
  view: MapView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Editor/EditorViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Editor/EditorViewModel}
   * @autocast
   */
  @property()
  @renderable([
    "viewModel.canCreate",
    "viewModel.canUpdate",
    "viewModel.failures",
    "viewModel.state",
    "viewModel.syncing",
    "viewModel.activeWorkflow.data.edits.modified"
  ])
  viewModel: EditorViewModel = new EditorViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Initiates the `create` workflow by displaying the [FeatureTemplates]{@link module:esri/widgets/FeatureTemplates} panel.
   *
   * @method startCreateWorkflowAtFeatureTypeSelection
   * @instance
   */
  @aliasOf("viewModel.startCreateWorkflowAtFeatureTypeSelection")
  startCreateWorkflowAtFeatureTypeSelection(): Promise<void> {
    return null;
  }

  /**
   * Initiates the `create` workflow by displaying the panel where feature creation begins. This method
   * takes a {@link module:esri/widgets/Editor~CreationInfo} object containing the layer(s) and template(s)
   * to use.
   *
   * @method startCreateWorkflowAtFeatureCreation
   * @instance
   *
   * @param {module:esri/widgets/Editor~CreationInfo} creationInfo - An object containing
   * information needed to create a new feature using the Editor widget. This object
   * provides the feature template and layer for creating a new feature.
   */
  @aliasOf("viewModel.startCreateWorkflowAtFeatureCreation")
  startCreateWorkflowAtFeatureCreation(
    creationInfo: CreateWorkflowParams["creationInfo"]
  ): Promise<void> {
    return null;
  }

  /**
   * This method starts the Editor workflow where it waits for the feature
   * to be selected.
   *
   * @method startCreateWorkflowAtFeatureEdit
   * @instance
   * @param {module:esri/Graphic} feature - The feature to be edited.
   *
   */
  @aliasOf("viewModel.startCreateWorkflowAtFeatureEdit")
  startCreateWorkflowAtFeatureEdit(feature: CreateWorkflowParams["feature"]): Promise<void> {
    return null;
  }

  /**
   * Starts the `update` workflow using the current selected feature.
   *
   * @method startUpdateWorkflowAtFeatureSelection
   * @instance
   *
   */
  @aliasOf("viewModel.startUpdateWorkflowAtFeatureSelection")
  startUpdateWorkflowAtFeatureSelection(): Promise<void> {
    return null;
  }

  /**
   * This method starts the Editor workflow where it waits for multiple features
   * to be selected.
   *
   * @method startUpdateWorkflowAtMultipleFeatureSelection
   * @instance
   *
   * @param {module:esri/Graphic[]} candidates - An array of features to be updated.
   * This is only relevant when there are multiple candidates to update.
   *
   */
  @aliasOf("viewModel.startUpdateWorkflowAtMultipleFeatureSelection")
  startUpdateWorkflowAtMultipleFeatureSelection(
    candidates: UpdateWorkflowParams["candidates"]
  ): Promise<void> {
    return null;
  }

  /**
   * Starts the `update` workflow at the feature geometry and attribute editing panel.
   *
   * @method startUpdateWorkflowAtFeatureEdit
   * @instance
   *
   * @param {module:esri/Graphic} feature - The feature to be updated.
   */
  @aliasOf("viewModel.startUpdateWorkflowAtFeatureEdit")
  startUpdateWorkflowAtFeatureEdit(feature: UpdateWorkflowParams["feature"]): Promise<void> {
    return null;
  }

  /**
   * This is applicable if there is an active update workflow. If so, this method
   * deletes the workflow feature.
   *
   * @method deleteFeatureFromWorkflow
   * @instance
   *
   */
  @aliasOf("viewModel.deleteFeatureFromWorkflow")
  deleteFeatureFromWorkflow(): Promise<void> {
    return null;
  }

  /**
   * Cancels any active workflow.
   *
   * @method cancelWorkflow
   * @instance
   */
  @aliasOf("viewModel.cancelWorkflow")
  cancelWorkflow(options?: CancelWorkflowOptions): Promise<void> {
    return null;
  }

  render(): VNode {
    const { viewModel } = this;

    if (!viewModel) {
      return <div class={CSS.base} />;
    }

    const { state } = viewModel;

    const overlay = this._prompt ? (
      <div class={CSS.overlay} key="overlay">
        {this.renderPrompt({
          message: this._prompt.message,
          title: this._prompt.title,
          options: this._prompt.options
        })}
      </div>
    ) : null;

    return (
      <div class={CSS.base}>
        {this.viewModel.syncing ? this.renderProgressBar() : null}
        {state === "disabled"
          ? null
          : state === "ready"
          ? this.renderLanding()
          : state === "awaiting-feature-creation-info"
          ? this.renderTemplates()
          : state === "editing-new-feature" || state === "editing-existing-feature"
          ? this.renderAttributeEditing()
          : state === "awaiting-feature-to-update"
          ? this.renderFeatureUpdating()
          : state === "awaiting-update-feature-candidate"
          ? this.renderFeatureList()
          : state === "awaiting-feature-to-create"
          ? this.renderFeatureCreation()
          : null}
        {overlay}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderTemplates(): VNode {
    return (
      <div class={CSS.contentWrapper} key="wrapper">
        {this.renderHeader(i18n.selectTemplate, true)}
        <div key="content" class={CSS.content}>
          {this._featureTemplates.render()}
        </div>
      </div>
    );
  }

  protected renderAttributeEditing(): VNode {
    const { activeWorkflow: workflow, featureFormViewModel } = this.viewModel;
    const feature = workflow.data.edits.feature;

    const disabled =
      (workflow.type === "update" && !workflow.data.edits.modified) ||
      (featureFormViewModel.inputFields.length > 0 && !featureFormViewModel.valid);

    const primaryButtonLabel = workflow.type === "create" ? i18nCommon.add : i18nCommon.update;

    const controls: ControlButton[] = [
      {
        label: primaryButtonLabel,
        type: "primary",
        disabled,
        clickHandler: this._handleSave
      }
    ];

    if (workflow.type === "update" && workflow.data.editableItem.supports.indexOf("delete") > -1) {
      controls.push({
        label: i18nCommon.delete,
        type: "tertiary",
        clickHandler: this._handleDelete
      });
    }

    const header = this._getLabel(feature);

    return (
      <div class={CSS.contentWrapper} key="wrapper">
        {this.renderHeader(header, true)}
        <div key="content" class={this.classes(CSS.content, CSS.scroller)}>
          {featureFormViewModel.inputFields.length > 0
            ? this._featureForm.render()
            : this.renderMessage(
                substitute(i18n.clickToFinishTemplate, { button: primaryButtonLabel })
              )}
        </div>
        {this.renderControls(controls)}
      </div>
    );
  }

  protected renderFeatureUpdating(): VNode {
    return (
      <div class={CSS.contentWrapper} key="wrapper">
        {this.renderHeader(i18n.selectFeature, true)}
        <div key="content" class={this.classes(CSS.content, CSS.scroller)}>
          {this.renderMessage(i18n.selectFeatureToEdit)}
        </div>
      </div>
    );
  }

  protected renderMessage(message: string): VNode {
    return <div class={CSS.message}>{message}</div>;
  }

  protected renderFeatureCreation(): VNode {
    const { viewModel } = this;
    const sketchVM = viewModel.sketchViewModel;
    const workflow = viewModel.activeWorkflow as CreateWorkflow;
    const layer = workflow.data.creationInfo.layer;
    const validInProgressGraphic =
      sketchVM.canUndo() && sketchVM.createGraphic ? sketchVM.createGraphic : null;

    const tip = this._getSketchingTip(layer.geometryType, validInProgressGraphic);

    return (
      <div class={CSS.contentWrapper} key="wrapper">
        {this.renderHeader(i18n.placeFeature, true)}
        <div key="content" class={this.classes(CSS.content, CSS.scroller)}>
          {this.renderMessage(tip)}
        </div>
      </div>
    );
  }

  protected renderControls(buttons: ControlButton[]): VNode {
    return (
      <div class={CSS.controls} key="controls">
        {buttons.map(({ disabled = false, label, type, clickHandler }, index) =>
          this.renderButton({
            label,
            class: this.classes(
              CSS.controlButton,
              CSS.button,
              type === "secondary"
                ? CSS.buttonSecondary
                : type === "tertiary"
                ? CSS.buttonTertiary
                : null,
              disabled ? CSS.buttonDisabled : null
            ),
            disabled,
            clickHandler,
            key: index
          })
        )}
      </div>
    );
  }

  protected renderPrompt({ title, message, options = [] }: Prompt): VNode {
    return (
      <div class={CSS.warningCard} role="alert">
        <div class={CSS.warningHeader}>
          <span class={CSS.warningIcon} aria-hidden="true" />
          <h4 class={this.classes(CSS.heading, CSS.warningHeading)}>{title}</h4>
        </div>
        <div class={CSS.warningMessage}>{message}</div>
        <div class={CSS.warningDivider} />
        {options.map(({ label, action, type }, index) => {
          const first = index === 0;

          return (
            <div
              afterCreate={first ? focusOnCreate : null}
              class={this.classes(
                CSS.warningOption,
                first ? CSS.warningOptionPrimary : null,
                type === "positive"
                  ? CSS.warningOptionPositive
                  : type === "negative"
                  ? CSS.warningOptionNegative
                  : null
              )}
              key={index}
              onclick={action}
              onkeydown={(event: KeyboardEvent) => {
                const key = eventKey(event);

                if (key === "Enter" || key === " ") {
                  event.preventDefault();
                  action.call(null);
                }
              }}
              tabIndex={0}
              role="button"
            >
              {label}
            </div>
          );
        })}
      </div>
    );
  }

  protected renderProgressBar(): VNode {
    return <div class={this.classes(CSS.progressBar)} key="progress-bar" />;
  }

  protected renderButton(props: Button): VNode {
    return (
      <button
        class={props.class}
        disabled={props.disabled}
        key={props.key}
        onclick={props.clickHandler}
      >
        {props.label}
      </button>
    );
  }

  protected renderHeader(title: string, breadcrumb: boolean = false): VNode {
    return (
      <header class={CSS.header} key="header">
        {breadcrumb ? (
          <div
            aria-label={i18nCommon.back}
            class={this.classes(CSS.backButton, CSS.interactive)}
            key="back-button"
            onclick={this._handleBack}
            onkeydown={this._handleBack}
            tabIndex={0}
            title={i18nCommon.back}
          >
            <span aria-hidden="true" class={isRTL() ? CSS.rightArrowIcon : CSS.leftArrowIcon} />
          </div>
        ) : null}
        <h4 class={this.classes(CSS.title, CSS.heading)}>{title}</h4>
      </header>
    );
  }

  protected renderLanding(): VNode {
    const { allowedWorkflows, canCreate, canUpdate } = this.viewModel;
    const arrowIconClass = isRTL() ? CSS.leftArrowIcon : CSS.rightArrowIcon;

    return (
      <div class={CSS.contentWrapper} key="wrapper">
        {this.renderHeader(i18n.widgetLabel)}
        <div key="content" class={CSS.content} role="group">
          <div class={CSS.modeSelection} key="mode-selection">
            {allowedWorkflows.indexOf("update") > -1 ? (
              <div
                aria-disabled={canUpdate ? "false" : "true"}
                class={this.classes(
                  CSS.featureListItem,
                  !canUpdate ? CSS.featureListItemDisabled : null
                )}
                key="update"
                onclick={this._handleEdit}
                onkeydown={this._handleEdit}
                role="button"
                tabIndex={!canUpdate ? -1 : 0}
              >
                <span class={CSS.featureListName}>{i18n.editFeature}</span>
                <span
                  aria-hidden="true"
                  class={this.classes(CSS.featureListIcon, arrowIconClass)}
                />
              </div>
            ) : null}
            {allowedWorkflows.indexOf("create") > -1 ? (
              <div
                class={this.classes(
                  CSS.featureListItem,
                  !canCreate ? CSS.featureListItemDisabled : null
                )}
                key="create"
                onclick={this._handleAdd}
                onkeydown={this._handleAdd}
                role="button"
                tabIndex={!canCreate ? -1 : 0}
              >
                <span class={CSS.featureListName}>{i18n.addFeature}</span>
                <span
                  aria-hidden="true"
                  class={this.classes(CSS.featureListIcon, arrowIconClass)}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  protected renderFeatureList(): VNode {
    const {
      viewModel: { editableItems, activeWorkflow }
    } = this;

    const workflow = activeWorkflow as UpdateWorkflow;
    const candidates = workflow.data.candidates;
    const title = substitute(i18n.multipleFeaturesTemplate, { total: candidates.length });

    type Item = { label: string; id: string; data: any };

    const grouped: Map<Graphic["layer"], { label: string; id: string; items: Item[] }> = new Map();

    candidates
      .map((feature) => {
        const label = this._getLabel(feature);

        return {
          label,
          id: feature.attributes[(feature.layer as FeatureLayer).objectIdField],
          data: feature
        };
      })
      .filter((item) => {
        const { label, data } = item;
        const lowerCasedFilter = this._filterText.toLowerCase();
        const { title } = data.layer;

        const match = this.viewModel.editableItems.find((item) => item.layer === data.layer);

        return (
          match.supports.indexOf("update") > -1 &&
          (!lowerCasedFilter ||
            (label.toLowerCase().indexOf(lowerCasedFilter) > -1 ||
              title.toLowerCase().indexOf(lowerCasedFilter) > -1))
        );
      })
      .forEach((item) => {
        const layer = item.data.layer;

        if (!grouped.has(layer)) {
          grouped.set(layer, {
            id: layer.id,
            label: layer.title,
            items: [item]
          });

          return;
        }

        grouped.get(layer).items.push(item);
      });

    const sortedAndGrouped = editableItems
      .filter(({ layer }) => grouped.has(layer))
      .map(({ layer }) => grouped.get(layer))
      .toArray();

    return (
      <div class={CSS.contentWrapper} key="wrapper">
        {this.renderHeader(title, true)}
        <div key="content" class={this.classes(CSS.content, CSS.scroller)}>
          {ItemList<{ label: string; id: string; data: any }>({
            id: this.id,
            filterText: this._filterText,
            items: sortedAndGrouped,
            messages: {
              filterPlaceholder: i18nTemplates.filterPlaceholder,
              noItems: i18nTemplates.noItems,
              noMatches: i18nTemplates.noMatches
            },
            onItemMouseEnter: ({ data: feature }) => {
              workflow.data.edits.feature = feature;
            },
            onItemMouseLeave: () => {
              workflow.data.edits.feature = null;
            },
            onItemSelect: ({ data: feature }) => {
              workflow.data.edits.feature = feature;
              workflow.next();
            },
            onFilterChange: (value) => {
              this._filterText = value;
            }
          })}
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _getSketchingTip(
    geometryType: FeatureLayer["geometryType"],
    graphicInProgress: Graphic
  ): string {
    if (geometryType === "point") {
      return i18n.tips.clickToAddPoint;
    }

    if (geometryType === "polygon" || geometryType === "polyline") {
      if (!graphicInProgress) {
        return i18n.tips.clickToStart;
      }

      const geometry = graphicInProgress.geometry as Polygon | Polyline;
      const segmentProperty = geometryType === "polygon" ? "rings" : "paths";
      const [segment] = geometry[segmentProperty];

      if (geometryType === "polygon" && segment < 4) {
        return i18n.tips.clickToContinue;
      }

      return i18n.tips.clickToContinueThenDoubleClickToEnd;
    }

    return i18n.tips.clickToAddFeature;
  }

  private _getLabel(feature: Graphic): string {
    const layer = feature.layer as FeatureLayer;
    const { displayField, objectIdField } = layer;
    const { attributes } = feature;

    return (
      (displayField && attributes[displayField]) ||
      substitute(i18n.untitledFeatureTemplate, { id: attributes[objectIdField] })
    );
  }

  @accessibleHandler()
  private _handleDelete(): void {
    this._prompt = {
      title: i18n.deleteWarningTitle,
      message: i18n.deleteWarningMessage,
      options: [
        {
          label: i18n.keepFeature,
          type: "neutral",
          action: () => (this._prompt = null)
        },
        {
          label: i18nCommon.delete,
          type: "positive",
          action: () => {
            this.viewModel.deleteFeatureFromWorkflow();
            this._prompt = null;
          }
        }
      ]
    };
  }

  private _handleSave(): void {
    const { activeWorkflow: workflow } = this.viewModel;

    workflow.commit();
    workflow.reset();
  }

  @accessibleHandler()
  private _handleAdd(): void {
    if (!this.viewModel.canCreate) {
      return;
    }
    this.viewModel.startCreateWorkflowAtFeatureTypeSelection();
  }

  @accessibleHandler()
  private _handleEdit(): void {
    if (!this.viewModel.canUpdate) {
      return;
    }
    this.viewModel.startUpdateWorkflowAtFeatureSelection();
  }

  @accessibleHandler()
  private _handleDone(): void {
    this.viewModel.cancelWorkflow({ force: true });
  }

  @accessibleHandler()
  private _handleBack(): void {
    const { activeWorkflow: workflow } = this.viewModel;
    const { stepId, data, type } = workflow;

    const goBack = () => {
      if (workflow.hasPreviousStep) {
        workflow.previous();
        return;
      }

      this.viewModel.cancelWorkflow({ force: true });
    };

    if (
      stepId === "editing-new-feature" ||
      (stepId === "editing-existing-feature" && data.edits.modified)
    ) {
      const message =
        type === "create" ? i18n.cancelAddWarningMessage : i18n.cancelEditWarningMessage;
      const title = type === "create" ? i18n.cancelAddTitle : i18n.cancelEditTitle;
      const continueOption = type === "create" ? i18n.continueAdding : i18n.continueEditing;
      const discardOption = type === "create" ? i18n.discardFeature : i18n.discardEdits;

      this._prompt = {
        title,
        message,
        options: [
          {
            label: continueOption,
            type: "neutral",
            action: () => (this._prompt = null)
          },
          {
            label: discardOption,
            type: "negative",
            action: () => {
              goBack();
              this._prompt = null;
            }
          }
        ]
      };

      return;
    }

    goBack();
  }
}

export = Editor;
