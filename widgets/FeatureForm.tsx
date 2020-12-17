/**
 * The FeatureForm widget displays attributes of a feature. This widget
 * renders input fields based on the feature's attributes and whether
 * the field allows editing. You can configure field groupings to aid in display
 * and organization of form data. Use this widget,
 * in combination with {@link module:esri/layers/FeatureLayer#applyEdits FeatureLayer.applyEdits},
 * to enable an end user to update a feature's attribute on a specified
 * editable feature layer(s).
 *
 * ![featureForm](../../assets/img/apiref/widgets/featureForm.png)
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * The FeatureForm widget is not yet at full parity with the functionality provided in the 3.x
 * [AttributeInspector](https://developers.arcgis.com/javascript/3/jsapi/attributeinspector-amd.html)
 * widget. For example, there is currently no support for editing attachments or related feature attributes.
 * Although, editing attachments is possible using the {@link module:esri/widgets/Editor} widget.
 * :::
 *
 * @module esri/widgets/FeatureForm
 * @since 4.9
 *
 * @see [FeatureForm.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/FeatureForm.tsx)
 * @see [FeatureForm.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_FeatureForm.scss)
 * @see [Sample - Update Feature Attributes](../sample-code/editing-groupedfeatureform/index.html)
 * @see [Sample - Update FeatureLayer using ApplyEdits](../sample-code/editing-applyedits/index.html)
 * @see [Sample - Advanced Attribute Editing](../sample-code/editing-featureform-fieldvisibility/index.html)
 * @see module:esri/widgets/FeatureForm/FeatureFormViewModel
 * @see module:esri/form/FormTemplate
 * @see module:esri/widgets/FeatureForm/InputField
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/layers/FeatureLayer
 *
 * @example
 * const featureForm = new FeatureForm({
 *   container: "formDiv",
 *   feature: graphic,
 *   formTemplate: template
 * });
 */

// esri
import Graphic from "esri/Graphic";
import { getLocale } from "esri/intl";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.form
import FormTemplate from "esri/form/FormTemplate";

// esri.intl
import { loadMoment } from "esri/intl/moment";

// esri.layers
import FeatureLayer from "esri/layers/FeatureLayer";

// esri.layers.support
import { getDomainRange } from "esri/layers/support/domains";
import { FieldValue, getFieldRange, NumericRange } from "esri/layers/support/fieldUtils";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.FeatureForm
import FeatureFormViewModel from "esri/widgets/FeatureForm/FeatureFormViewModel";
import FieldConfig from "esri/widgets/FeatureForm/FieldConfig";
import InputField from "esri/widgets/FeatureForm/InputField";
import InputFieldGroup from "esri/widgets/FeatureForm/InputFieldGroup";
import { Attributes } from "esri/widgets/FeatureForm/interfaces";

// esri.widgets.FeatureForm.t9n
import FeatureFormMessages from "esri/widgets/FeatureForm/t9n/FeatureForm";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { messageBundle, renderable, tsx, vmEvent } from "esri/widgets/support/widget";

interface FormattedDateParts {
  date: string;
  time: string;
}

interface DateEditParts {
  date: InProgressEdit;
  time: InProgressEdit;
}

interface InProgressEdit {
  value: string;
  input: HTMLInputElement;
}

type DateFieldValue = Exclude<FieldValue, string>;

const CSS = {
  base: "esri-feature-form",
  form: "esri-feature-form__form",
  formHeader: "esri-feature-form__form-header",
  label: "esri-feature-form__label",
  inputField: "esri-feature-form__input",
  inputDate: "esri-feature-form__input--date",
  inputTime: "esri-feature-form__input--time",
  inputDisabled: "esri-feature-form__input--disabled",
  inputInvalid: "esri-feature-form__input--invalid",
  inputIconInvalid: "esri-feature-form__input-icon--invalid",
  errorMessage: "esri-feature-form__field-error-message",
  description: "esri-feature-form__description-text",
  dateInputPart: "esri-feature-form__date-input-part",
  loneDateInputPart: "esri-feature-form__date-input-part--lone",
  dateInputContainer: "esri-feature-form__date-input-container",
  dateFormatHint: "esri-feature-form__date-format-hint",

  group: "esri-feature-form__group",
  groupLabel: "esri-feature-form__group-label",
  groupHeader: "esri-feature-form__group-header",
  groupHeading: "esri-feature-form__group-header",
  groupTitle: "esri-feature-form__group-title",
  groupDescription: "esri-feature-form__group-description",
  groupToggleIcon: "esri-feature-form__group-toggle-icon",
  groupCollapsed: "esri-feature-form__group--collapsed",
  groupSequential: "esri-feature-form__group--sequential",
  groupActive: "esri-feature-form__group--active",

  // icon
  collapseIcon: "esri-icon-up",
  errorIcon: "esri-icon-notice-triangle",
  expandIcon: "esri-icon-down",

  // common
  widget: "esri-widget",
  panel: "esri-widget--panel",
  input: "esri-input",
  select: "esri-select",
  heading: "esri-widget__heading"
};

const defaultDateFormat = {
  datePattern: "L",
  timePattern: "LTS"
};

function isGroupField(value: any): value is InputFieldGroup {
  return value && value.inputFields;
}

@subclass("esri.widgets.FeatureForm")
class FeatureForm extends Widget {
  /**
   * Fires when a field value is updated.
   *
   * @event module:esri/widgets/FeatureForm#value-change
   * @property {module:esri/layers/FeatureLayer} layer - The associated feature layer.
   * @property {module:esri/Graphic} feature - The associated feature.
   * @property {string} fieldName - The updated field.
   * @property {number | string | null } value - The updated field value.
   * @property {boolean} valid - When true, the value conforms to the field's definition.
   *
   */

  /**
   * Fires when the [submit()](#submit) method is called.
   * Call {@link module:esri/layers/FeatureLayer#applyEdits FeatureLayer.applyEdits()} method
   * to update a feature's attributes.
   *
   * @event module:esri/widgets/FeatureForm#submit
   * @property {string[]} valid - The valid field names.
   * @property {string[]} invalid - The invalid field names.
   * @property {Object} values - An object of key-value pairs of field names with all of their values,
   * regardless of whether or not they were updated.
   *
   * @example
   * // Listen to the feature form's submit event.
   * featureForm.on("submit", function(){
   *   if (editFeature) {
   *     // Grab updated attributes from the form.
   *     const updated = featureForm.getValues();
   *
   *     // Loop through updated attributes and assign
   *     // the updated values to feature attributes.
   *     Object.keys(updated).forEach(function(name) {
   *       editFeature.attributes[name] = updated[name];
   *     });
   *
   *     // Setup the applyEdits parameter with updates.
   *     const edits = {
   *       updateFeatures: [editFeature]
   *     };
   *     applyEdits(edits);
   *   }
   * });
   *
   * @see [submit()](#submit)
   * @see [getValues()](#getValues)
   */

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/FeatureForm
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const featureForm = new FeatureForm({
   *   container: "formDiv", // HTML div
   *   feature: graphic, // Pass in feature
   *   // Specify the form's template for how it is configured
   *   formTemplate: template
   * });
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);

    this._handleFormKeyDown = this._handleFormKeyDown.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this._handleInputFocus = this._handleInputFocus.bind(this);
    this._handleNumberInputMouseDown = this._handleNumberInputMouseDown.bind(this);
    this._handleInputKeyDown = this._handleInputKeyDown.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);
    this._handleGroupClick = this._handleGroupClick.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._afterScrollerCreateOrUpdate = this._afterScrollerCreateOrUpdate.bind(this);
  }

  protected async loadLocale(): Promise<void> {
    this._moment = await loadMoment();
  }

  initialize(): void {
    this.own(
      this.watch("feature", () => {
        const groupOrInput = this._getFocusableInput("forward");
        this._activeInputName = groupOrInput && groupOrInput.name;
        this._userUpdatedInputFieldNames.clear();

        this._fieldFocusNeeded = true;
      }),

      (this.on as FeatureFormViewModel["on"])("submit", (event) => {
        if (event.invalid.length > 0) {
          const [invalidFieldName] = event.invalid;

          event.invalid.forEach((fieldName) => this._userUpdatedInputFieldNames.add(fieldName));
          this._activeInputName = invalidFieldName;
          this._fieldFocusNeeded = true;

          this.scheduleRender();
        }
      })
    );
  }

  destroy(): void {
    this._userUpdatedInputFieldNames.clear();
    this._userUpdatedInputFieldNames = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeDateEdit: DateEditParts = null;

  private _activeInputName: string = null;

  private _fieldFocusNeeded: boolean = false;

  private _moment: typeof import("moment") = null;

  private _userUpdatedInputFieldNames = new Set<string>();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  description
  //----------------------------------

  /**
   * The description of the form. If this is not set, it
   * defaults to what is set within the {@link module:esri/form/FormTemplate}.
   *
   * This property was added at 4.16 to provide parity with the {@link module:esri/form/FormTemplate FormTemplate}.
   * The preferred way to set this property is via
   * the form template's {@link module:esri/form/FormTemplate#description description} property.
   * The `description` property on the {@link module:esri/widgets/FeatureForm form} or its
   * {@link module:esri/widgets/FeatureForm/FeatureFormViewModel view model} will eventually
   * be deprecated in a later release in favor of the setting it within the form
   * {@link module:esri/form/FormTemplate template}.
   *
   * @name description
   * @instance
   * @type {string}
   * @since 4.16
   */

  @aliasOf("viewModel.description")
  @renderable()
  description: string = null;

  //----------------------------------
  //  feature
  //----------------------------------

  /**
   * The associated feature containing the editable attributes.
   * A common way to access this is via the {@link module:esri/views/MapView#hitTest MapView}
   * or {@link module:esri/views/SceneView#hitTest SceneView's} `hitTest()`
   * method.
   *
   * @name feature
   * @type {module:esri/Graphic}
   * @instance
   *
   * @example
   * // Check if a user clicked on an incident feature.
   * view.on("click", function(event) {
   *   view.hitTest(event).then(function(response) {
   *     // Display the attributes of selected incident feature in the form
   *     if (response.results[0].graphic && response.results[0].graphic.layer.id == "incidentsLayer") {
   *        formVM.feature = result.results[0].graphic
   *     }
   *   });
   * });
   */
  @aliasOf("viewModel.feature")
  feature: Graphic = null;

  //----------------------------------
  //  fieldConfig
  //----------------------------------

  /**
   * Array of individual or grouped field configuration objects. This is where you specify what fields to
   * display and how you wish to display them. It is possible to configure individual
   * or {@link module:esri/widgets/FeatureForm/FieldGroupConfig grouped fields}. For an example of individual field configurations,
   * please refer to the [Update FeatureLayer using ApplyEdits](../sample-code/editing-applyedits/index.html)
   * sample.
   *
   * Starting with version 4.16, the preferred way to set the field or grouped field configurations is via
   * {@link module:esri/form/elements/FieldElement FieldElement(s)} or {@link module:esri/form/elements/GroupElement GroupElement(s)}
   * set within the form's {@link module:esri/widgets/FeatureForm#formTemplate template}.
   *
   * Currently, the field configuration settings take precedence over any {@link module:esri/form/elements/FieldElement FieldElement(s)}
   * that may be set within the form's {@link module:esri/form/FormTemplate template}. The `fieldConfigs` property
   * will be fully deprecated at a future release in favor of setting elements within the form's {@link module:esri/form/FormTemplate template}.
   *
   *
   * ::: esri-md class="panel trailer-1"
   * When not set, all fields except for `editor`, `globalID`, `objectID`, and system maintained area and length fields will be included.
   * Otherwise, it is up to the developer to set the right field(s) to override and display.
   * :::
   *
   * @name fieldConfig
   * @type {module:esri/widgets/FeatureForm/FieldConfig[] | module:esri/widgets/FeatureForm/FieldGroupConfig[]}
   * @instance
   * @autocast
   * @deprecated since version 4.16. Use {@link module:esri/form/elements/FieldElement esri/form/elements/FieldElement} and/or {@link module:esri/form/elements/GroupElement GroupElement} instead.
   *
   * @example
   * // Individual field configurations without grouping
   * const featureForm = new FeatureForm({
   *   container: "formDiv",
   *   feature: graphic, // Pass in feature
   *   // Configure fields to display without grouping
   *   fieldConfig: [ // Autocasts as FieldConfig
   *     {
   *       name: "Incident_desc",
   *       label: "Description"
   *     },{
   *       name: "Incident_Address",
   *       label: "Contact"
   *    }]
   * });
   *
   * @example
   * // Grouped field configurations
   * const featureForm = new FeatureForm({
   *   container: "formDiv",
   *   feature: graphic,
   *   fieldConfig: [{ // Autocasts to FieldGroupConfig
   *     label: "Inspector", // Group 1
   *     description: "Inspector information",
   *     // Individual field configurations within the group
   *     fieldConfig: [{
   *       name: "inspector",
   *       label: "Name"
   *     },
   *     {
   *       name: "inspemail",
   *       label: "Email address"
   *     }]
   *    }, {
   *     label: "Business", // Group 2
   *     description: "Business information",
   *     // Individual field configurations within the group
   *     fieldConfig: [{
   *       name: "placename",
   *       label: "Business name"
   *     }, {
   *       name: "firstname",
   *       label: "First name"
   *     }]
   *   }]
   * });
   */
  @aliasOf("viewModel.fieldConfig")
  fieldConfig: FieldConfig[] = null;

  //----------------------------------
  //  formTemplate
  //----------------------------------

  /**
   * The associated {@link module:esri/form/FormTemplate template} used for the form.
   *
   *
   * The {@link module:esri/form/FormTemplate formTemplate} is where you configure
   * how the form should display. Properties, i.e. `title`, `description`, `fieldConfigs`, etc,
   * set directly within the {@link module:esri/widgets/FeatureForm} take precedence
   * over any similar properties set within the `formTemplate`. This will change in a future release
   * as the preferred way to set the form's properties is via it's {@link module:esri/widgets/FeatureForm#formTemplate template}.
   *
   *
   * @name formTemplate
   * @type {module:esri/form/FormTemplate}
   * @instance
   * @since 4.16
   * @autocast
   * @see [Sample - Update Feature Attributes](../sample-code/editing-groupedfeatureform/index.html)
   * @see [Sample - Advanced Attribute Editing](../sample-code/editing-featureform-fieldvisibility/index.html)
   *
   * @example
   * // Create the Form template and pass in elements
   * const formTemplate = new FormTemplate({
   *   title: "Inspector report",
   *   description: "Enter all relevant information below",
   *   elements: [groupElement] // Add all elements to the template
   * });
   *
   * // Add a new feature form with grouped fields
   * const form = new FeatureForm({
   *   container: "form",
   *   groupDisplay: "sequential", // only display one group at a time
   *   formTemplate: formTemplate // set it to template created above
   * });
   */

  @aliasOf("viewModel.formTemplate")
  formTemplate: FormTemplate = null;

  //----------------------------------
  //  groupDisplay
  //----------------------------------

  /**
   * Defines how groups will be displayed to the user.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * all | All groups will be expanded.
   * sequential | A single group will be expanded at a time.
   *
   * @name groupDisplay
   * @type {"all" | "sequential"}
   * @default all
   * @instance
   * @since 4.10
   *
   * @see [Sample - Update Feature Attributes](../sample-code/editing-groupedfeatureform/index.html)
   */
  @property()
  @renderable()
  groupDisplay: "all" | "sequential" = "all";

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
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  label: string = undefined;

  //----------------------------------
  //  layer
  //----------------------------------

  /**
   * Layer containing the editable feature attributes.
   * If this layer is not specified, it is the same as the
   * {@link module:esri/Graphic#layer graphic's layer}.
   *
   * @name layer
   * @type {module:esri/layers/FeatureLayer}
   * @instance
   *
   * @example
   *
   * const form = new FeatureForm({
   *   container: "formDiv", // HTML div
   *   layer: featureLayer // Feature layer
   * });
   */
  @aliasOf("viewModel.layer")
  layer: FeatureLayer = null;

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
  @messageBundle("esri/widgets/FeatureForm/t9n/FeatureForm")
  messages: FeatureFormMessages = null;

  //----------------------------------
  //  strict
  //----------------------------------

  /**
   * Indicates whether to update a feature's attribute values, even if invalid. If `true`,
   * updates with invalid values are ignored. A value of `false` updates everything, regardless
   * of validity.
   *
   * @ignore
   * @name strict
   * @type {boolean}
   * @instance
   * @default false
   *
   */
  @aliasOf("viewModel.strict")
  strict: boolean = null;

  //----------------------------------
  //  title
  //----------------------------------

  /**
   * The title of the form. If this is not set, it
   * defaults to what is set within the {@link module:esri/form/FormTemplate}.
   *
   * This property was added at 4.16 to provide parity with the {@link module:esri/form/FormTemplate FormTemplate}.
   * The preferred way to set this property is via
   * the form template's {@link module:esri/form/FormTemplate#title title} property.
   * The `title` property on the {@link module:esri/widgets/FeatureForm form} or its
   * {@link module:esri/widgets/FeatureForm/FeatureFormViewModel view model} will eventually
   * be deprecated in a later release in favor of the setting it within the form
   * {@link module:esri/form/FormTemplate template}.
   *
   * @name title
   * @instance
   * @type {string}
   * @since 4.16
   */
  @aliasOf("viewModel.title")
  @renderable()
  title: string = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/FeatureForm/FeatureFormViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/FeatureForm/FeatureFormViewModel}
   * @autocast
   */
  @property()
  @renderable(["viewModel.inputFields", "viewModel.state"])
  @vmEvent(["value-change", "submit"])
  viewModel: FeatureFormViewModel = new FeatureFormViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  getValues
  //----------------------------------

  /**
   * Returns all of the field values, regardless of whether or not they were updated.
   *
   * @returns {Object} An object of key-value pairs of field names with their values.
   *
   * @see [submit](#event-submit) event
   * @see [submit()](#submit) method
   *
   * @example
   * function updateFeature() {
   *   // Get the updated field values
   *   const attributes = form.getValues();
   *   // Call applyEdits on the featurelayer
   *   layer.applyEdits({
   *     // Pass in the updated field values
   *     updateFeatures: [{ attributes }]
   *   });
   * }
   */
  @aliasOf("viewModel.getValues")
  getValues(): Attributes {
    return null;
  }

  //----------------------------------
  //  submit
  //----------------------------------

  /**
   * Fires the [submit](#event-submit) event.
   *
   * @example
   * // Listen for when 'submit' is called on the FeatureForm.
   * // Once it is fired, update the feature.
   * form.on("submit", updateFeature);
   * // When the DOM's button (btnUpdate) is clicked,
   * // execute the 'submit()' method.
   * on(dom.byId("btnUpdate"), "click", form.submit());
   */
  @aliasOf("viewModel.submit")
  submit(): void {
    return null;
  }

  render(): VNode {
    const { state } = this.viewModel;

    return (
      <div class={this.classes(CSS.base, CSS.widget, CSS.panel)}>
        {state === "ready" ? this.renderForm() : null}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderForm(): VNode {
    const titleNode = this.title ? (
      <h2 class={CSS.heading} key="title">
        {this.title}
      </h2>
    ) : null;

    const descriptionNode = this.description ? (
      <p class={CSS.description} key="description">
        {this.description}
      </p>
    ) : null;

    const headerNode =
      titleNode || descriptionNode ? (
        <div class={CSS.formHeader}>
          {titleNode}
          {descriptionNode}
        </div>
      ) : null;

    return (
      <form
        class={CSS.form}
        novalidate
        onsubmit={this._handleSubmit}
        onkeydown={this._handleFormKeyDown}
      >
        {headerNode}
        {this.renderFields()}
      </form>
    );
  }

  protected renderFields(): VNode {
    const {
      viewModel: { inputFields }
    } = this;

    return inputFields.map((inputField, index) =>
      isGroupField(inputField)
        ? this.renderGroup(inputField, index)
        : this.renderLabeledField(inputField)
    );
  }

  protected renderGroup(inputFieldGroup: InputFieldGroup, index: number): VNode {
    const { description, label, inputFields: inputs, state } = inputFieldGroup;

    const activeInput = this.viewModel.findField(this._activeInputName);
    const isGroupActive = !!(activeInput && activeInput.group === inputFieldGroup);

    const id = `${this.id}_group_${index}`;
    const labelId = `${this.id}_group-label_${index}`;
    const descriptionId = `${this.id}_group-description_${index}`;

    const descriptionNode = description ? (
      <p class={this.classes(CSS.groupDescription, CSS.description)} id={descriptionId}>
        {description}
      </p>
    ) : null;

    const sequential = this.groupDisplay === "sequential";
    const groupExpanded = !sequential ? state === "expanded" : isGroupActive;
    const toggleIcon = groupExpanded ? CSS.collapseIcon : CSS.expandIcon;

    return (
      <fieldset
        aria-expanded={groupExpanded.toString()}
        aria-labelledby={labelId}
        aria-describedby={description ? descriptionId : ""}
        class={this.classes(
          CSS.group,
          sequential ? CSS.groupSequential : null,
          groupExpanded ? null : CSS.groupCollapsed,
          isGroupActive ? CSS.groupActive : null
        )}
        data-group={inputFieldGroup}
        id={id}
        key={index}
        onclick={this._handleGroupClick}
      >
        <button
          role={sequential ? "presentation" : undefined}
          class={CSS.groupHeader}
          type="button"
          tabIndex={sequential ? -1 : 0}
        >
          <div class={CSS.groupTitle}>
            <h4 class={this.classes(CSS.groupLabel, CSS.heading)} id={labelId}>
              {label}
            </h4>
            {descriptionNode}
          </div>
          {!sequential ? <span class={this.classes(toggleIcon, CSS.groupToggleIcon)} /> : null}
        </button>
        {inputs.map((inputField) => this.renderLabeledField(inputField))}
      </fieldset>
    );
  }

  private _getFocusableInput(
    direction: "forward" | "backward",
    inputOrGroup?: InputField | InputFieldGroup
  ): InputField {
    const inputs = this.viewModel._allInputFields;
    const allInputs = direction === "forward" ? inputs : inputs.slice().reverse();

    let searchStartIndex: number;

    if (!inputOrGroup) {
      searchStartIndex = 0;
    } else if (isGroupField(inputOrGroup)) {
      searchStartIndex = allInputs.indexOf(inputOrGroup.inputFields[0]);
    } else {
      let referenceInput: InputField;

      if (!this._isFieldInClosedCollapsibleGroup(inputOrGroup)) {
        referenceInput = inputOrGroup;
      } else {
        const { inputFields } = inputOrGroup.group;
        referenceInput =
          direction === "forward" ? inputFields[inputFields.length - 1] : inputFields[0];
      }

      searchStartIndex = allInputs.indexOf(referenceInput) + 1;
    }

    for (let i = searchStartIndex; i < allInputs.length; i++) {
      const current = allInputs[i];

      if (current.visible && current.editable) {
        return current;
      }
    }

    return null;
  }

  protected renderLabeledField(inputField: InputField): VNode {
    const { label, layer, type } = inputField;

    return (
      <label key={`${layer.id}-${inputField.name}`} class={CSS.label}>
        {[
          label,
          type !== "unsupported"
            ? this.renderInputField(inputField)
            : this.renderUnsupportedField(inputField),
          this.renderAuxiliaryText(inputField)
        ]}
      </label>
    );
  }

  protected renderInputField(inputField: InputField): VNode {
    const { viewModel } = this;
    const { domain, editable, name, type } = inputField;
    const value = viewModel.getValue(name);
    const readOnly = !editable;
    const props = this.getCommonInputProps(inputField);

    if (domain && domain.type === "coded-value" && !readOnly) {
      return this.renderSelectInputField(
        value,
        domain.codedValues.map(({ code: value, name }) => ({
          value,
          name
        })),
        props
      );
    }

    return (type === "text" && inputField.editorType === "text-area") ||
      inputField.editorType === "rich-text" ? (
      <textarea {...props} />
    ) : inputField.editorType === "datetime-picker" || type === "date" ? (
      this.renderDateInputField(value as DateFieldValue, props)
    ) : (
      <input type={type === "text" ? "text" : "number"} {...props} />
    );
  }

  protected renderDateInputField(
    value: DateFieldValue,
    props: ReturnType<FeatureForm["getCommonInputProps"]>
  ): VNode {
    const { date: dateFormatHint, time: timeFormatHint } = this._formatDate(0);
    const commonHintId = `${this.id}-${props.key}`;
    const dateFormatHintId = `${commonHintId}-date`;
    const timeFormatHintId = `${commonHintId}-time`;
    const inputField = props["data-field"];
    const { includeTime } = inputField;
    const { date, time } = this._formatDate(value);

    return (
      <div key={`${props.key}-date`} class={CSS.dateInputContainer}>
        <div class={this.classes(CSS.dateInputPart, !includeTime ? CSS.loneDateInputPart : null)}>
          <input
            aria-label={inputField.label}
            aria-describedby={dateFormatHintId}
            type="text"
            {...props}
            data-date-part="date"
            class={this.classes(props.class, CSS.inputDate)}
            value={date}
          />
          <div class={CSS.dateFormatHint} id={dateFormatHintId}>
            {dateFormatHint}
          </div>
        </div>
        {includeTime ? (
          <div class={CSS.dateInputPart} key="time-input">
            <input
              aria-describedby={timeFormatHintId}
              aria-label={inputField.label}
              type="text"
              {...props}
              data-date-part="time"
              class={this.classes(props.class, CSS.inputTime)}
              value={time}
            />
            <div class={CSS.dateFormatHint} id={timeFormatHintId}>
              {timeFormatHint}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  protected renderUnsupportedField(inputField: InputField): VNode {
    const value = this.viewModel.getValue(inputField.name);

    return (
      <input
        class={this.classes(CSS.input, CSS.inputField, CSS.inputDisabled)}
        disabled={true}
        type="text"
        value={`${value}`}
      />
    );
  }

  protected renderSelectInputField(
    value: FieldValue,
    values: { value: FieldValue; name: string }[],
    props: ReturnType<FeatureForm["getCommonInputProps"]>
  ): VNode {
    let isNotOutlierValue = false;

    const options = values.map((v) => {
      if (v.value === value) {
        isNotOutlierValue = true;
      }

      return (
        <option value={`${v.value}`} key={v.name}>
          {v.name}
        </option>
      );
    });

    if (value != null && value !== "" && !isNotOutlierValue) {
      // non-matching value
      options.unshift(
        <option value={`${value}`} key="outlier-option">
          {value}
        </option>
      );
    }

    const inputField = props["data-field"];

    // only show empty option if existing value not previously set
    if (!inputField.required) {
      // "" is treated as null
      options.unshift(
        <option value={""} key="empty-option">
          {this.messages.empty}
        </option>
      );
    }

    return (
      <select
        {...props}
        class={this.classes(props.class, CSS.select)}
        onchange={this._handleOptionChange}
      >
        {options}
      </select>
    );
  }

  protected renderAuxiliaryText(inputField: InputField): VNode {
    if (this._userUpdatedInputFieldNames.has(inputField.name) && !inputField.valid) {
      return (
        <div key="error-message">
          <span class={this.classes(CSS.inputIconInvalid, CSS.errorIcon)} />
          <div class={CSS.errorMessage}>{inputField.errorMessage}</div>
        </div>
      );
    }

    if (inputField.description) {
      return (
        <div key="description" class={CSS.description}>
          {inputField.description}
        </div>
      );
    }

    return undefined;
  }

  // tslint:disable-next-line:typedef
  protected getCommonInputProps(inputField: InputField) {
    const { groupDisplay, viewModel } = this;
    const { editable, group, hint, maxLength, minLength, name, required, type, valid } = inputField;
    const value = viewModel.getValue(name);
    const userUpdated = this._userUpdatedInputFieldNames.has(name);
    const disabled = !editable;
    const shouldPreventTabbing = groupDisplay === "all" && group?.state === "collapsed";

    return {
      "afterCreate": this._afterScrollerCreateOrUpdate,
      "afterUpdate": this._afterScrollerCreateOrUpdate,
      "aria-invalid": valid ? "false" : "true",
      "class": this.classes(
        CSS.input,
        CSS.inputField,
        disabled ? CSS.inputDisabled : null,
        userUpdated && !valid ? CSS.inputInvalid : null
      ),
      "key": name,
      "minlength": minLength > -1 ? `${minLength}` : "",
      "maxlength": maxLength > -1 ? `${maxLength}` : "",
      ...this._getNumberFieldConstraints(inputField),
      disabled,
      "value": value == null ? "" : `${value}`,
      "data-field": inputField,
      "onfocus": this._handleInputFocus,
      "onblur": this._handleInputBlur,
      "onkeydown": this._handleInputKeyDown,
      "onmousedown": type === "number" ? this._handleNumberInputMouseDown : null,
      required,
      "tabIndex": shouldPreventTabbing ? -1 : 0,
      "title": hint
    };
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _isFieldInClosedCollapsibleGroup(
    inputOrGroup: InputField | InputFieldGroup
  ): inputOrGroup is InputField {
    return (
      this.groupDisplay === "all" &&
      !isGroupField(inputOrGroup) &&
      inputOrGroup?.group?.state === "collapsed"
    );
  }

  private _handleNumberInputMouseDown({ target }: Event): void {
    const input = target as HTMLInputElement;

    if (!input.disabled) {
      // workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1012818
      input.focus();
    }

    this.scheduleRender();
  }

  private _getNumberFieldConstraints(field: InputField): NumericRange {
    const constraints = getDomainRange(field.domain) || getFieldRange(field.field);

    if (
      !constraints ||
      constraints.max === Number.MAX_VALUE ||
      constraints.min === Number.MIN_VALUE
    ) {
      return {
        min: null,
        max: null
      };
    }

    return constraints;
  }

  private _afterScrollerCreateOrUpdate(node: HTMLElement): void {
    const inputField: InputField = node["data-field"];
    const activeInput = this.viewModel.findField(this._activeInputName);

    const shouldAutoFocusField =
      inputField.editable && this._fieldFocusNeeded && activeInput === inputField;

    if (shouldAutoFocusField) {
      this._fieldFocusNeeded = false;
      node.focus();
    }
  }

  private _handleInputFocus(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    this._activeInputName = (input["data-field"] as InputField).name;
  }

  private _handleInputBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const inputField: InputField = input["data-field"] as InputField;
    const maybeNextInput = event.relatedTarget as HTMLInputElement;

    const nextInputField: InputField = maybeNextInput && maybeNextInput["data-field"];

    this._syncDateEditsBeforeValueCommit(input);

    const willEditSameDate =
      nextInputField &&
      inputField.type === "date" &&
      nextInputField.type === "date" &&
      inputField.field === nextInputField.field;

    if (willEditSameDate) {
      const fillInDate = input.value !== "" && maybeNextInput.value === "";

      if (fillInDate) {
        const part = maybeNextInput.getAttribute("data-date-part") as keyof FormattedDateParts;
        maybeNextInput.value = this._formatDate(Date.now())[part];
      }

      // hold off on processing date until both parts are blurred
      return;
    }

    this._commitValue(input);

    this.scheduleRender();
  }

  private _commitValue(input: HTMLInputElement): void {
    const inputField: InputField = input["data-field"] as InputField;

    if (this._activeDateEdit) {
      const { date: dateEdits, time: timeEdits } = this._activeDateEdit;
      const dateValue: string = this._getDateEditValue(inputField, "date");
      const timeValue: string = this._getDateEditValue(inputField, "time");
      const clearDate = dateValue === "" || timeValue === "";

      if (dateEdits) {
        const { input } = dateEdits;
        input.value = clearDate ? "" : dateValue;
      }

      if (timeEdits) {
        const { input } = timeEdits;
        input.value = clearDate ? "" : timeValue;
      }

      this._activeDateEdit = null;

      if (dateEdits && timeEdits) {
        this._updateDateFieldValue(dateEdits.input, timeEdits.input);
        return;
      }
    }

    this._updateFieldValue(input);
  }

  private _getDateEditValue(inputField: InputField, part: "date" | "time"): string {
    const edits = this._activeDateEdit[part];

    if (!edits) {
      return undefined;
    }

    const { value: dateValue } = edits;

    if (dateValue === "") {
      return "";
    }

    const date = this._parseDate(edits.value, part);

    if (!date) {
      // if invalid, use previous value
      return this._formatDate(inputField.value as DateFieldValue)[part];
    }

    return this._formatDate(date.getTime())[part];
  }

  private _handleInputKeyDown(event: KeyboardEvent): void {
    const { key, altKey, ctrlKey, metaKey, shiftKey } = event;

    const input = event.target as HTMLInputElement;
    const inputField = input["data-field"] as InputField;

    if (key === "Tab") {
      const direction = shiftKey ? "backward" : "forward";
      const datePart = input.getAttribute("data-date-part") as keyof FormattedDateParts;
      this._syncDateEditsBeforeValueCommit(input);

      const movingToRelatedDateOrTimeInputField =
        (direction === "backward" && datePart === "time") ||
        (direction === "forward" && datePart === "date" && inputField.includeTime);

      if (movingToRelatedDateOrTimeInputField) {
        return;
      }

      this._commitValue(input);
      const latestInputField = this.viewModel.findField(inputField.name);
      const nextInputFocusTarget = this._getFocusableInput(direction, latestInputField);
      const movedBetweenGroups = latestInputField.group === nextInputFocusTarget?.group;

      this._activeInputName = nextInputFocusTarget?.name;

      if (nextInputFocusTarget && (this.groupDisplay === "sequential" || movedBetweenGroups)) {
        event.preventDefault();
        this._fieldFocusNeeded = true;
      } else {
        // ensure to-be-removed fields are removed to lose browser focus
        this.renderNow();
      }

      return;
    }

    if (key !== "Enter") {
      const { type } = inputField.field;

      const isInt = type === "integer" || type === "small-integer";
      const isFloat = type === "single" || type === "double";
      const noModifiers = !altKey && !ctrlKey && !metaKey;
      const numberInputChar = (isInt || isFloat) && noModifiers && key.length === 1;

      if (numberInputChar) {
        const keyAsDigit = Number(key);
        const signs = ["-", "+"];
        const floatCharExceptions = ["e", "."];
        const allowedNonNumericChars = isFloat ? [...signs, ...floatCharExceptions] : signs;

        if (isNaN(keyAsDigit) && allowedNonNumericChars.indexOf(key) === -1) {
          event.preventDefault();
        }
      }

      return;
    }

    if (this._isFieldInClosedCollapsibleGroup(inputField)) {
      inputField.group.state = "expanded";
      return;
    }

    this._updateFieldValue(event.target as HTMLInputElement);
    this.scheduleRender();
  }

  private _syncDateEditsBeforeValueCommit(input: HTMLInputElement): void {
    const inputField: InputField = input["data-field"] as InputField;

    if (inputField.type !== "date") {
      return;
    }

    const datePart = input.getAttribute("data-date-part") as keyof FormattedDateParts;

    this._activeDateEdit = {
      ...this._activeDateEdit,
      [datePart]: { value: input.value, input }
    };
  }

  private _updateFieldValue(input: HTMLInputElement | HTMLSelectElement): void {
    const inputField: InputField = input["data-field"];
    this.viewModel.setValue(inputField.name, this._parseValue(input));
    this._userUpdatedInputFieldNames.add(inputField.name);
  }

  /**
   * This method helps process changes to both date and time as one edit.
   *
   * @private
   */
  private _updateDateFieldValue(dateInput: HTMLInputElement, timeInput: HTMLInputElement): void {
    const inputField: InputField = dateInput["data-field"]; // only need one since both refer to the same field
    this.viewModel.setValue(inputField.name, this._parseDateTimeValue(dateInput, timeInput));
    this._userUpdatedInputFieldNames.add(inputField.name);
  }
  private _parseValue(input: HTMLInputElement | HTMLSelectElement): FieldValue {
    const inputField: InputField = input["data-field"];
    const valueAsText = input.value;

    const { type } = inputField;

    if (type === "number") {
      return parseFloat(valueAsText);
    }

    if (type === "date") {
      if (!valueAsText) {
        return null;
      }

      // coded-values get passed as numbers
      const utcDate = Number(valueAsText);

      if (!isNaN(utcDate)) {
        return utcDate;
      }

      const part = input.getAttribute("data-date-part") as keyof FormattedDateParts;
      const parsed = this._parseDate(valueAsText, part);

      if (!parsed) {
        return null;
      }

      const moment = this._moment;

      const latest = moment(parsed);

      const domain = inputField.domain;
      const now = moment();
      let defaultDate = now;

      if (domain && domain.type === "range") {
        const maxDate = moment(domain.maxValue);

        if (!now.isAfter(maxDate)) {
          defaultDate = maxDate;
        }
      }

      const prevValue = this.viewModel.getValue(inputField.name);
      const prev = moment(prevValue != null ? prevValue : defaultDate);

      if (part === "date") {
        latest.hour(prev.hour());
        latest.minutes(prev.minutes());
        latest.seconds(prev.seconds());
      } else {
        latest.date(prev.date());
        latest.month(prev.month());
        latest.year(prev.year());
      }

      return latest.valueOf();
    }

    return valueAsText;
  }

  private _parseDateTimeValue(
    dateInput: HTMLInputElement | HTMLSelectElement,
    timeInput?: HTMLInputElement
  ): FieldValue {
    const dateValueAsText = dateInput.value;
    const timeValueAsText = timeInput.value;

    if (!dateValueAsText || !timeValueAsText) {
      return null;
    }

    const parsedDate = this._parseDate(dateValueAsText, "date");
    const parsedTime = this._parseDate(timeValueAsText, "time");

    if (!parsedDate || !parsedTime) {
      return null;
    }

    const latestDate = this._moment(parsedDate);
    const latestTime = this._moment(parsedTime);

    latestDate.hour(latestTime.hour());
    latestDate.minutes(latestTime.minutes());
    latestDate.seconds(latestTime.seconds());

    return latestDate.valueOf();
  }

  private _handleOptionChange(event: Event): void {
    this._updateFieldValue(event.target as HTMLSelectElement);
    this.scheduleRender();
  }

  protected _handleGroupClick(event: Event): void {
    const fieldSet = event.currentTarget as HTMLFieldSetElement;
    const group = fieldSet["data-group"] as InputFieldGroup;
    const expanded = group.state === "expanded";
    const sequential = this.groupDisplay === "sequential";

    const headerSelector = `.${CSS.groupHeader}`;
    const clickedOnExpandedGroupInputFieldArea =
      expanded && !(event.target as HTMLElement).closest(headerSelector);

    if (clickedOnExpandedGroupInputFieldArea) {
      return;
    }

    this._activeInputName = this._getFocusableInput("forward", group)?.name;

    if (sequential) {
      const buttonClicked = (event.target as HTMLElement).closest(headerSelector);

      if (expanded && !buttonClicked) {
        // skip if already expanded
        return;
      }

      this.viewModel.inputFields.forEach((fieldOrGroup) => {
        if (isGroupField(fieldOrGroup) && fieldOrGroup !== group) {
          fieldOrGroup.state = "collapsed";
        }
      });
    }

    group.state = expanded ? "collapsed" : "expanded";
    this._fieldFocusNeeded = sequential;

    this.scheduleRender();
  }

  private _handleSubmit(event: Event): void {
    event.preventDefault();
  }

  private _handleFormKeyDown(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      this.viewModel.submit();
    }
  }

  private _formatDate(dateUTC: DateFieldValue): FormattedDateParts {
    if (dateUTC == null) {
      return { date: "", time: "" };
    }

    const date = this._moment(dateUTC);

    return {
      date: date.format(defaultDateFormat.datePattern),
      time: date.format(defaultDateFormat.timePattern)
    };
  }

  private _parseDate(dateString: string, part: "date" | "time"): Date {
    if (dateString == null || dateString === "") {
      return null;
    }

    const parsed = this._moment(
      dateString,
      part === "date" ? defaultDateFormat.datePattern : defaultDateFormat.timePattern,
      getLocale(),
      false
    );

    return parsed.isValid() ? parsed.toDate() : null;
  }
}

export default FeatureForm;
