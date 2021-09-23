/**
 * The FeatureForm widget displays attributes of a feature. This widget
 * renders input fields based on the feature's attributes and whether
 * the field allows editing. You can configure field groupings to aid in display
 * and organization of form data. All of the properties and field configurations set on the form are handled via its {@link module:esri/widgets/FeatureForm#formTemplate template}.
 *
 * Use this widget, in combination with {@link module:esri/layers/FeatureLayer#applyEdits FeatureLayer.applyEdits},
 * to enable an end user to update a feature's attribute on a specified
 * editable feature layer(s).
 *
 * ::: esri-md class="panel trailer-1"
 * Set any field configurations via {@link module:esri/form/elements/FieldElement FieldElement(s)} or {@link module:esri/form/elements/GroupElement GroupElement(s)} within the form's template {@link module:esri/widgets/FeatureForm#formTemplate elements}.
 * :::
 *
 * ![featureForm](../assets/img/apiref/widgets/featureForm.png)
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
 * @see [FeatureForm.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/FeatureForm.tsx)
 * @see [FeatureForm.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_FeatureForm.scss)
 * @see [Sample - Update Feature Attributes](../sample-code/editing-groupedfeatureform/index.html)
 * @see [Sample - Update FeatureLayer using ApplyEdits](../sample-code/editing-applyedits/index.html)
 * @see [Sample - Advanced Attribute Editing](../sample-code/editing-featureform-fieldvisibility/index.html)
 * @see module:esri/widgets/FeatureForm/FeatureFormViewModel
 * @see module:esri/form/FormTemplate
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

// esri.layers
import FeatureLayer from "esri/layers/FeatureLayer";

// esri.layers.support
import { getDomainRange } from "esri/layers/support/domains";
import { FieldValue, getFieldRange } from "esri/layers/support/fieldUtils";
import { NumericRange } from "esri/layers/support/NumericRange";

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
import { Heading, HeadingLevel } from "esri/widgets/support/Heading";
import { VNode } from "esri/widgets/support/interfaces";
import { messageBundle, tsx, vmEvent } from "esri/widgets/support/widget";

// luxon
import { DateTime } from "luxon";

type DatePart = "date" | "time";

type FormattedDateParts = {
  [Part in DatePart]: string;
};

type DateFieldEditParts = {
  [Part in DatePart]: InProgressEdit;
};

interface InProgressEdit {
  active: boolean;
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
  inputRadioGroup: "esri-feature-form__input--radio-group",
  inputRadio: "esri-feature-form__input--radio",
  inputRadioLabel: "esri-feature-form__input--radio-label",
  inputDisabled: "esri-feature-form__input--disabled",
  inputSwitch: "esri-feature-form__input--switch",
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
  select: "esri-select"
};

// https://moment.github.io/luxon/#/formatting?id=table-of-tokens
const defaultDateFormat = {
  datePattern: "D",
  timePattern: "tt"
};

function isGroupField(value: any): value is InputFieldGroup {
  return value && value.inputFields;
}

type FeatureFormProperties = Partial<
  Pick<
    FeatureForm,
    | "container"
    | "description"
    | "feature"
    | "fieldConfig"
    | "formTemplate"
    | "groupDisplay"
    | "headingLevel"
    | "label"
    | "layer"
    | "title"
    | "viewModel"
  >
>;

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
  constructor(properties?: FeatureFormProperties, parentNode?: string | Element) {
    super(properties, parentNode);

    this._handleFormKeyDown = this._handleFormKeyDown.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this._handleInputFocus = this._handleInputFocus.bind(this);
    this._handleNumberInputMouseDown = this._handleNumberInputMouseDown.bind(this);
    this._handleInputKeyDown = this._handleInputKeyDown.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);
    this._handleGroupClick = this._handleGroupClick.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._afterInputCreateOrUpdate = this._afterInputCreateOrUpdate.bind(this);
  }

  protected override initialize(): void {
    this.own(
      this.watch("feature", () => {
        const groupOrInput = this._getFocusableInput("forward");
        this._activeInputName = groupOrInput && groupOrInput.name;
        this._userUpdatedInputFieldNames.clear();
        this._fieldToInitialIncompatibleDomainValue.clear();
        this._switchFieldsWithInitialIncompatibleValue.clear();

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

  protected override loadDependencies(): Promise<any> {
    return import("@esri/calcite-components/dist/custom-elements/bundles/switch");
  }

  override destroy(): void {
    this._userUpdatedInputFieldNames.clear();
    this._userUpdatedInputFieldNames = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeDateFieldEdit: DateFieldEditParts = null;

  private _activeInputName: string = null;

  private _fieldFocusNeeded: boolean = false;

  private _fieldToInitialIncompatibleDomainValue = new Map<string, FieldValue>();

  private _switchFieldsWithInitialIncompatibleValue = new Set<string>();

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
   * The recommended way to set this property is via
   * the form template's {@link module:esri/form/FormTemplate#description description} property.
   *
   * @name description
   * @instance
   * @type {string}
   * @since 4.16
   * @deprecated since version 4.20. Set it via the {@link module:esri/form/FormTemplate#description FormTemplate.description}.
   *
   * @ignore
   */

  @aliasOf("viewModel.description")
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
   * Array of individual or grouped field configuration objects. This is where you can specify which fields to display and how you wish to display them.
   *
   * It is recommended to set field configurations via
   * {@link module:esri/form/elements/FieldElement FieldElement(s)} or {@link module:esri/form/elements/GroupElement GroupElement(s)}
   * within the form's {@link module:esri/widgets/FeatureForm#formTemplate template}.
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
   * @ignore
   *
   */
  @aliasOf("viewModel.fieldConfig")
  fieldConfig: FieldConfig[] = null;

  //----------------------------------
  //  formTemplate
  //----------------------------------

  /**
   * The associated {@link module:esri/form/FormTemplate template} used for the form.
   *
   * The {@link module:esri/form/FormTemplate formTemplate} is where you configure how the form should display and set any associated properties for the form, e.g. title, description, field elements, etc.
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
  groupDisplay: "all" | "sequential" = "all";

  //----------------------------------
  //  headingLevel
  //----------------------------------

  /**
   * Indicates the heading level to use for the [title](#title) of the form.
   * By default, the title is rendered as a level 2 heading (e.g. `<h2>Form title</h2>`).
   * In addition, group element labels default to a level 3 heading (e.g. `<h3>Group element label</h3>`).
   * Depending on the widget's placement
   * in your app, you may need to adjust this heading for proper semantics. This is
   * important for meeting accessibility standards.
   *
   * @name headingLevel
   * @instance
   * @since 4.20
   * @type {number}
   * @default 2
   * @see [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
   *
   * @example
   * // form title will render as an <h3>
   * // group element labels will render as an <h4>
   * featureForm.headingLevel = 3;
   */
  @property()
  headingLevel: HeadingLevel = 2;

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
  override label: string = undefined;

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
   * The recommended way to set this property is via
   * the form template's {@link module:esri/form/FormTemplate#title title} property.
   *
   * @name title
   * @instance
   * @type {string}
   * @since 4.16
   * @see [headingLevel](#headingLevel)
   * @deprecated since version 4.20. Set it via the {@link module:esri/form/FormTemplate#title FormTemplate.title}.
   *
   * @ignore
   */
  @aliasOf("viewModel.title")
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
  @vmEvent(["value-change", "submit"])
  override viewModel = new FeatureFormViewModel();

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

  override render(): VNode {
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
      <Heading key="title" level={this.headingLevel}>
        {this.title}
      </Heading>
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
    const { description, inputFields: inputs, label, state } = inputFieldGroup;

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
            <Heading
              class={CSS.groupLabel}
              id={labelId}
              level={this.headingLevel + (this.title ? 1 : 0)}
            >
              {label}
            </Heading>
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

      if (current.visible) {
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

    if (domain?.type === "coded-value" && !readOnly) {
      if (inputField.editorType === "switch") {
        if (
          this._switchFieldsWithInitialIncompatibleValue.has(name) ||
          value == null ||
          (inputField.config.onValue !== value && inputField.config.offValue !== value)
        ) {
          this._switchFieldsWithInitialIncompatibleValue.add(name);
        } else {
          return this.renderSwitchInputField(value, props);
        }
      }

      if (inputField.editorType === "radio-buttons") {
        return this.renderRadioButtonsInputField(
          value,
          domain.codedValues.map(({ code: value, name }) => ({
            value,
            name
          })),
          props
        );
      }

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

  protected _parseDateTime(
    valueAsText: string,
    inputField: InputField,
    part?: DatePart
  ): FieldValue {
    if (part) {
      let parsedActivePart = DateTime.fromJSDate(this._parseDate(valueAsText, part));
      const parsedInactivePart = DateTime.fromMillis((inputField.value as number) ?? Date.now());

      if (part === "date") {
        parsedActivePart = parsedActivePart.set({
          hour: parsedInactivePart.hour,
          minute: parsedInactivePart.minute,
          second: parsedInactivePart.second
        });
      } else {
        parsedActivePart = parsedActivePart.set({
          day: parsedInactivePart.day,
          month: parsedInactivePart.month,
          year: parsedInactivePart.year
        });
      }

      return parsedActivePart.isValid ? parsedActivePart.toMillis() : null;
    }

    const parsedDateTime = DateTime.fromJSDate(this._parseDate(valueAsText));
    return parsedDateTime.isValid ? parsedDateTime.toMillis() : null;
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
    const { _activeDateFieldEdit } = this;
    let { date, time } = this._formatDate(value);

    if (_activeDateFieldEdit) {
      date = _activeDateFieldEdit.date.input?.value ?? date;
      time = _activeDateFieldEdit.time.input?.value ?? time;
    }

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
    const props = this.getCommonInputProps(inputField);

    return (
      <input
        afterCreate={props.afterCreate}
        afterUpdate={props.afterUpdate}
        class={this.classes(CSS.input, CSS.inputField, CSS.inputDisabled)}
        data-field={props["data-field"]}
        onfocus={props.onfocus}
        readOnly={true}
        tabIndex={props.tabIndex}
        type="text"
        value={props.value}
      />
    );
  }

  protected renderSelectInputField(
    value: FieldValue,
    values: { value: FieldValue; name: string }[],
    props: ReturnType<FeatureForm["getCommonInputProps"]>
  ): VNode {
    const options = values.map((v) => (
      <option value={`${v.value}`} key={v.name}>
        {v.name}
      </option>
    ));

    const inputField = props["data-field"];

    this.registerIncompatibleValue(value, values, inputField, (incompatibleValue) => {
      options.unshift(
        <option value={`${incompatibleValue}`} key="incompatible-option" readOnly={true}>
          {incompatibleValue}
        </option>
      );
    });

    if (
      !inputField.required &&
      (inputField.editorType !== "combo-box" || inputField.config.showNoValueOption)
    ) {
      const emptyOptionValue = ""; // "" is treated as null
      const emptyOptionLabel = inputField.config?.noValueOptionLabel || this.messages.empty;

      options.unshift(
        <option value={emptyOptionValue} key="empty-option">
          {emptyOptionLabel}
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

  private registerIncompatibleValue(
    value: FieldValue,
    values: { value: FieldValue; name: string }[],
    inputField: InputField,
    handleIncompatibleValue?: (incompatibleValue: FieldValue) => void
  ): void {
    const incompatibleValueLookup = this._fieldToInitialIncompatibleDomainValue;
    const hasRegisteredIncompatibleValue = incompatibleValueLookup.has(inputField.name);

    if (
      hasRegisteredIncompatibleValue ||
      (value != null && value !== "" && !values.find((v) => v.value === value)) ||
      hasRegisteredIncompatibleValue
    ) {
      if (!hasRegisteredIncompatibleValue) {
        incompatibleValueLookup.set(inputField.name, value);
      }

      handleIncompatibleValue?.(incompatibleValueLookup.get(inputField.name));
    }
  }

  protected renderRadioButtonsInputField(
    value: FieldValue,
    values: { value: FieldValue; name: string }[],
    props: ReturnType<FeatureForm["getCommonInputProps"]>
  ): VNode {
    const inputField = props["data-field"];

    const radios = values.map((v) =>
      this.renderRadioButton({
        key: v.name,
        label: v.name,
        name: inputField.name,
        value: v.value,
        selected: v.value === value,
        props
      })
    );

    // incompatible value option is intentionally not rendered
    this.registerIncompatibleValue(value, values, inputField);

    if (!inputField.required && (!inputField.config || inputField.config.showNoValueOption)) {
      const emptyOptionValue = ""; // "" is treated as null
      const emptyOptionLabel = inputField.config?.noValueOptionLabel || this.messages.empty;
      const emptyOptionSelected = value === emptyOptionValue || value === null;

      radios.unshift(
        this.renderRadioButton({
          key: "empty-option",
          label: emptyOptionLabel,
          name: inputField.name,
          value: emptyOptionValue,
          selected: emptyOptionSelected,
          props
        })
      );
    }

    return (
      <div key={`${props.key}-radio`} class={CSS.inputRadioGroup}>
        {radios}
      </div>
    );
  }

  protected renderSwitchInputField(
    value: FieldValue,
    props: ReturnType<FeatureForm["getCommonInputProps"]>
  ): VNode {
    const inputField = props["data-field"];

    return (
      <calcite-switch
        {...props}
        class={CSS.inputSwitch}
        switched={value === inputField.config.onValue}
        onCalciteSwitchChange={(event: CustomEvent) => {
          this._parseValue(event.currentTarget as HTMLCalciteSwitchElement);
        }}
      />
    );
  }

  protected renderRadioButton({
    key,
    name,
    value,
    selected,
    label,
    props
  }: {
    key: string;
    name: string;
    value: any;
    selected: boolean;
    label: string;
    props: any;
  }): VNode {
    return (
      <label key={key} class={CSS.inputRadioLabel}>
        <input
          {...props}
          class={CSS.inputRadio}
          name={name}
          type="radio"
          value={value}
          checked={selected}
          onchange={this._handleRadioInputChange}
        />
        {label}
      </label>
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
    const readOnly = !editable;
    const shouldPreventTabbing = groupDisplay === "all" && group?.state === "collapsed";

    return {
      "afterCreate": this._afterInputCreateOrUpdate,
      "afterUpdate": this._afterInputCreateOrUpdate,
      "aria-invalid": valid ? "false" : "true",
      "class": this.classes(
        CSS.input,
        CSS.inputField,
        readOnly ? CSS.inputDisabled : null,
        userUpdated && !valid ? CSS.inputInvalid : null
      ),
      "key": name,
      "minlength": minLength > -1 ? `${minLength}` : "",
      "maxlength": maxLength > -1 ? `${maxLength}` : "",
      ...this._getNumberFieldConstraints(inputField),
      readOnly,
      "value": value == null ? "" : `${value}`,
      "data-field": inputField,
      "onfocus": this._handleInputFocus,
      "oninput": this._handleInputInput,
      "onblur": this._handleInputBlur,
      "onkeydown": this._handleInputKeyDown,
      "onmousedown": type === "number" ? this._handleNumberInputMouseDown : null,
      "placeholder": type === "number" || type === "text" ? hint : "",
      required,
      "tabIndex": shouldPreventTabbing ? -1 : 0
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

    // workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1012818
    input.focus();

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

  private _afterInputCreateOrUpdate(node: HTMLElement): void {
    const inputField: InputField = node["data-field"];
    const activeInput = this.viewModel.findField(this._activeInputName);
    const incompatibleValueSelected =
      this._fieldToInitialIncompatibleDomainValue.get(inputField.name) === inputField.value;

    const shouldAutoFocusField =
      this._fieldFocusNeeded &&
      activeInput === inputField &&
      (inputField.editorType !== "radio-buttons" ||
        incompatibleValueSelected ||
        (node as HTMLInputElement).checked);

    if (shouldAutoFocusField) {
      this._fieldFocusNeeded = false;
      node.focus();
    }
  }

  private _handleInputFocus(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const inputField: InputField = input["data-field"] as InputField;

    this._activeInputName = inputField.name;

    if (inputField.type !== "date") {
      return;
    }

    this._syncDateFieldEdits(input);
  }

  private _handleInputBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const inputField: InputField = input["data-field"] as InputField;

    if (inputField.type === "date") {
      const maybeNextInput = event.relatedTarget as HTMLInputElement;
      const nextInputField: InputField = maybeNextInput && maybeNextInput["data-field"];

      const willEditSameDateInputField =
        nextInputField &&
        inputField.type === "date" &&
        nextInputField.type === "date" &&
        inputField.field === nextInputField.field;

      if (willEditSameDateInputField) {
        const fillInDate = input.value !== "" && maybeNextInput.value === "";

        if (fillInDate) {
          const part = maybeNextInput.getAttribute("data-date-part") as DatePart;
          maybeNextInput.value = this._formatDate((inputField.value as number) ?? Date.now())[part];

          if (this._parseDate(input.value, input.getAttribute("data-date-part") as DatePart)) {
            // updated value will be valid, so we skip existing value for parsing
            this._commitInputValue(event.target as HTMLInputElement, true, false);
          }
        }

        // we'll check date value and adjust when neither date field input is focused
        return;
      }
    }

    this._commitInputValue(input);
    this.scheduleRender();
  }

  private _handleRadioInputChange = (event: Event): void => {
    this._commitInputValue(event.target as HTMLInputElement);
  };

  private _commitInputValue(
    input: HTMLInputElement | HTMLSelectElement,
    atomic = false,
    requireExistingDateValueToParse = true /* only applicable with atomic */
  ): void {
    const inputField: InputField = input["data-field"] as InputField;

    if (this._activeDateFieldEdit) {
      const { date: dateEdits, time: timeEdits } = this._activeDateFieldEdit;
      const parsedDateValue = this._parseDateTime(
        input.value,
        inputField,
        dateEdits.active ? "date" : "time"
      );

      const hasDateValue = this.viewModel.getValue(inputField.name) !== null;
      const bothPartsFilledOut = dateEdits.input && timeEdits.input;
      const invalidOrNoValue = parsedDateValue === null;

      if (atomic) {
        // atomic updates never clear or commit invalid values
        if (invalidOrNoValue) {
          return;
        }

        const parsedValueValid =
          bothPartsFilledOut || !requireExistingDateValueToParse || hasDateValue;

        if (parsedValueValid) {
          this._updateDateFieldValue(inputField, parsedDateValue);
        }
      } else {
        const shouldClearValue = dateEdits.input?.value === "" || timeEdits.input?.value === "";

        // clear
        if (shouldClearValue) {
          this._updateDateFieldValue(inputField, null);
        }
        // or discard invalid values
        else if (bothPartsFilledOut) {
          const dateAndTimeAsText = `${dateEdits.input.value} ${timeEdits.input.value}`;
          const parsedDateAndTimeValue = this._parseDateTime(dateAndTimeAsText, inputField);
          const parsedDateAndTimeValueValid = parsedDateAndTimeValue !== null;

          if (parsedDateAndTimeValueValid || !hasDateValue) {
            this._updateDateFieldValue(inputField, parsedDateAndTimeValue);
          }
        }

        this._activeDateFieldEdit = null;
      }

      return;
    }

    this._updateFieldValue(input);
  }

  private _handleInputInput = (event: InputEvent): void => {
    this._commitInputValue(event.target as HTMLInputElement, true);
  };

  private _handleInputKeyDown(event: KeyboardEvent): void {
    const { key, altKey, ctrlKey, metaKey } = event;

    const input = event.target as HTMLInputElement;
    const inputField = input["data-field"] as InputField;

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
  }

  private _syncDateFieldEdits(input: HTMLInputElement): void {
    const inputField: InputField = input["data-field"] as InputField;

    if (inputField.type !== "date") {
      return;
    }

    const datePart = input.getAttribute("data-date-part") as DatePart;
    const activePart = datePart === "date" ? "date" : "time";
    const inactivePart = datePart === "date" ? "time" : "date";

    this._activeDateFieldEdit = {
      [activePart]: { value: input.value, input, active: true },
      [inactivePart]: { ...this._activeDateFieldEdit?.[inactivePart], active: false }
    } as DateFieldEditParts;
  }

  private _updateFieldValue(input: HTMLInputElement | HTMLSelectElement): void {
    const inputField: InputField = input["data-field"];
    this.viewModel.setValue(inputField.name, this._parseValue(input));
    this._userUpdatedInputFieldNames.add(inputField.name);
  }

  /**
   * This method helps process changes to both date and time as one edit.
   *
   * @ignore
   */
  private _updateDateFieldValue(dateInputField: InputField, dateFieldValue: FieldValue): void {
    this.viewModel.setValue(dateInputField.name, dateFieldValue);
    this._userUpdatedInputFieldNames.add(dateInputField.name);
  }

  private _parseValue(
    input: HTMLInputElement | HTMLSelectElement | HTMLCalciteSwitchElement
  ): FieldValue {
    const inputField: InputField = input["data-field"];
    const valueAsText = input.value;

    if (inputField.editorType === "switch" && !(input instanceof HTMLSelectElement)) {
      return (input as HTMLCalciteSwitchElement).switched
        ? inputField.config.onValue
        : inputField.config.offValue;
    }

    const unselectedRadioGroup =
      inputField.editorType === "radio-buttons" &&
      (input as Exclude<typeof input, HTMLCalciteSwitchElement>).type === "radio" &&
      !(input as HTMLInputElement).checked;

    if (unselectedRadioGroup) {
      // return the field's value since we don't render this option for parsing
      return inputField.value;
    }

    const { type } = inputField;

    if (type === "number") {
      return valueAsText ? parseFloat(valueAsText) : null;
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

      const part = input.getAttribute("data-date-part") as DatePart;
      const parsed = this._parseDate(valueAsText, part);

      if (!parsed) {
        return null;
      }

      let latest = DateTime.fromJSDate(parsed);

      const domain = inputField.domain;
      const now = DateTime.now();
      let defaultDate = now;

      if (domain && domain.type === "range") {
        const maxDate = DateTime.fromMillis(domain.maxValue);

        if (now < maxDate) {
          defaultDate = maxDate;
        }
      }

      const prevValue = this.viewModel.getValue(inputField.name);
      const prev = prevValue != null ? DateTime.fromMillis(prevValue as number) : defaultDate;

      if (part === "date") {
        latest = latest.set({ hour: prev.hour, minute: prev.minute, second: prev.second });
      } else {
        latest = latest.set({ day: prev.day, month: prev.month, year: prev.year });
      }

      return latest.toMillis();
    }

    return valueAsText;
  }

  private _handleOptionChange(event: Event): void {
    this._commitInputValue(event.target as HTMLSelectElement);
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

    const dt = DateTime.fromMillis(dateUTC, { locale: getLocale(), numberingSystem: "latn" });

    return {
      // this isn't using `defaultDateFormat.datePattern` since the Luxon `D` pattern
      // uses "numeric" for month and day, which isn't the same as the Moment `L` pattern
      date: dt.toLocaleString({ year: "numeric", month: "2-digit", day: "2-digit" }),
      time: dt.toFormat(defaultDateFormat.timePattern)
    };
  }

  private _parseDate(dateString: string, part?: DatePart): Date {
    if (dateString == null || dateString === "") {
      return null;
    }

    const { timePattern, datePattern } = defaultDateFormat;

    const format = part
      ? part === "date"
        ? datePattern
        : timePattern
      : `${datePattern} ${timePattern}`;

    const parsed = DateTime.fromFormat(dateString, format, {
      locale: getLocale(),
      numberingSystem: "latn"
    });

    return parsed.isValid ? parsed.toJSDate() : null;
  }
}

export default FeatureForm;
