/**
 * The FeatureForm widget displays attributes of a feature. This widget
 * renders input fields based on the feature's attributes and whether
 * the field allows editing. Use this widget,
 * in combination with {@link module:esri/layers/FeatureLayer#applyEdits FeatureLayer.applyEdits},
 * to enable an end user to update a feature's attribute on a specified
 * editable feature layer(s).
 *
 * ![featureForm](../../assets/img/apiref/widgets/featureForm.png)
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * The FeatureForm widget is currently in its beta release. It should be noted
 * that it is not yet at full parity with the functionality provided in the 3.x
 * [AttributeInspector](https://developers.arcgis.com/javascript/3/jsapi/attributeinspector-amd.html)
 * widget and is subject to change. For example, there is
 * currently no support for editing attachments or related feature attributes.
 * :::
 *
 * @module esri/widgets/FeatureForm
 * @since 4.9
 * @beta
 *
 * @see [FeatureForm.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/FeatureForm.tsx)
 * @see [FeatureForm.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_FeatureForm.scss)
 * @see [Sample - Update FeatureLayer using ApplyEdits](../sample-code/editing-applyedits/index.html)
 * @see module:esri/widgets/FeatureForm/FeatureFormViewModel
 * @see module:esri/widgets/FeatureForm/FieldConfig
 * @see module:esri/widgets/FeatureForm/InputField
 * @see module:esri/widgets/FeatureForm/FieldOptions
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/layers/FeatureLayer
 *
 * @example
 * var featureForm = new FeatureForm({
 *   container: "formDiv",
 *   feature: graphic
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo.date
import { format, parse } from "dojo/date/locale";

// esri
import * as Graphic from "esri/Graphic";
import moment = require("esri/moment");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.layers
import FeatureLayer = require("esri/layers/FeatureLayer");

// esri.layers.support
import { getDomainRange } from "esri/layers/support/domains";
import { FieldValue, getFieldRange, Range } from "esri/layers/support/fieldUtils";

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.FeatureForm
import FormViewModel = require("esri/widgets/FeatureForm/FeatureFormViewModel");
import FieldConfig = require("esri/widgets/FeatureForm/FieldConfig");
import InputField = require("esri/widgets/FeatureForm/InputField");
import { Attributes } from "esri/widgets/FeatureForm/interfaces";

// esri.widgets.support
import { renderable, tsx, vmEvent } from "esri/widgets/support/widget";

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

const CSS = {
  base: "esri-feature-form",
  form: "esri-feature-form__form",
  label: "esri-feature-form__label",
  inputField: "esri-feature-form__input",
  inputDate: "esri-feature-form__input--date",
  inputTime: "esri-feature-form__input--time",
  inputDisabled: "esri-feature-form__input--disabled",
  inputInvalid: "esri-feature-form__input--invalid",
  inputIconInvalid: "esri-feature-form__input-icon--invalid",
  errorMessage: "esri-feature-form__field-error-message",
  dateInputPart: "esri-feature-form__date-input-part",
  dateInputContainer: "esri-feature-form__date-input-container",
  dateFormatHint: "esri-feature-form__date-format-hint",

  // icon
  errorIcon: "esri-icon-notice-triangle",

  // common
  widget: "esri-widget",
  input: "esri-input",
  select: "esri-select"
};

const defaultDateFormat = {
  datePattern: "M/d/y",
  timePattern: "h:mm:ss a"
};

@subclass("esri.widgets.Form")
class FeatureForm extends declared(Widget) {
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
   *   // Configure fields to display
   *   fieldConfig: [
   *     {
   *       name: "Incident_desc",
   *       options: {
   *         label: "Description"
   *       }
   *     },
   *     {
   *       name: "Incident_Address",
   *       options: {
   *         label: "Contact"
   *       }
   *      }]
   * });
   */
  constructor(params?: any) {
    super();

    this._handleFormKeyDown = this._handleFormKeyDown.bind(this);
    this._handleInputBlur = this._handleInputBlur.bind(this);
    this._handleNumberInputMouseDown = this._handleNumberInputMouseDown.bind(this);
    this._handleInputKeyDown = this._handleInputKeyDown.bind(this);
    this._handleOptionChange = this._handleOptionChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._afterScrollerCreateOrUpdate = this._afterScrollerCreateOrUpdate.bind(this);
  }

  postInitialize() {
    this.own(this.watch("feature", () => (this._featureChanged = true)));
  }
  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _featureChanged: boolean = false;

  private _activeDateEdit: DateEditParts = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

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
   * Array of field configuration objects. This is where you specify what fields to
   * display and how you wish to display them.
   *
   * ::: esri-md class="panel trailer-1"
   * When not set, all fields except for `editor`, `globalID`, and `objectID` fields will be included,
   * otherwise it is up to the developer to set the right field(s) to override and display.
   * :::
   *
   * @name fieldConfig
   * @type {Array<module:esri/widgets/FeatureForm/FieldConfig>}
   * @instance
   *
   * @example
   * fieldConfig: [
   *   {
   *     name: "Incident_desc",
   *     options: {
   *       label: "Description"
   *     }
   *   },
   *   {
   *     name: "Incident_Address",
   *     options: {
   *       label: "Contact"
   *     }
   *   }]
   */
  @aliasOf("viewModel.fieldConfig")
  fieldConfig: FieldConfig[] = null;

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
  viewModel: FormViewModel = new FormViewModel();

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
   * @see [submit](#event:submit) event
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
   * Fires the [submit](#event:submit) event.
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

  render() {
    const { state } = this.viewModel;

    return (
      <div class={this.classes(CSS.base, CSS.widget)}>
        {state === "ready" ? this.renderForm() : null}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderForm(): any {
    return (
      <form
        class={CSS.form}
        novalidate
        onsubmit={this._handleSubmit}
        onkeydown={this._handleFormKeyDown}
      >
        {this.renderFields()}
      </form>
    );
  }

  protected renderFields(): any {
    const {
      viewModel: { inputFields, layer }
    } = this;

    return inputFields.map((inputField: InputField) => {
      const { label, type } = inputField;

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
    });
  }

  protected renderInputField(inputField: InputField): any {
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
    ) : type === "date" ? (
      this.renderDateInputField(value, props)
    ) : (
      <input type={type === "text" ? "text" : "number"} {...props} />
    );
  }

  protected renderDateInputField(
    value: FieldValue,
    props: ReturnType<FeatureForm["getCommonInputProps"]>
  ): any {
    const { date: dateFormatHint, time: timeFormatHint } = this._formatDate(0);
    const commonHintId = `${this.id}-${props.key}`;
    const dateFormatHintId = `${commonHintId}-date`;
    const timeFormatHintId = `${commonHintId}-time`;
    const inputField = props["data-field"];

    return (
      <div key={`${props.key}-date`} class={CSS.dateInputContainer}>
        <div class={CSS.dateInputPart}>
          <input
            aria-label={inputField.label}
            aria-describedby={dateFormatHintId}
            type="text"
            {...props}
            data-date-part="date"
            class={this.classes(props.class, CSS.inputDate)}
            value={this._formatDate(value as number).date}
          />
          <div class={CSS.dateFormatHint} id={dateFormatHintId}>
            {dateFormatHint}
          </div>
        </div>
        <div class={CSS.dateInputPart}>
          <input
            aria-describedby={timeFormatHintId}
            aria-label={inputField.label}
            type="text"
            {...props}
            data-date-part="time"
            class={this.classes(props.class, CSS.inputTime)}
            value={this._formatDate(value as number).time}
          />
          <div class={CSS.dateFormatHint} id={timeFormatHintId}>
            {timeFormatHint}
          </div>
        </div>
      </div>
    );
  }

  protected renderUnsupportedField(inputField: InputField): any {
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
  ): any {
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
    if (!inputField.required && inputField.value == null) {
      // "" is treated as null
      options.unshift(<option value={""} key="empty-option" />);
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

  protected renderAuxiliaryText(inputField: InputField): any {
    if (!inputField.valid) {
      return (
        <div key="error-message">
          <span class={this.classes(CSS.inputIconInvalid, CSS.errorIcon)} />
          <div class={CSS.errorMessage}>{inputField.errorMessage}</div>
        </div>
      );
    }

    if (inputField.valid && inputField.description) {
      return <div key="description">{inputField.description}</div>;
    }
  }

  protected getCommonInputProps(inputField: InputField) {
    const { viewModel } = this;
    const { editable, name, required, maxLength, hint, type, valid } = inputField;
    const value = viewModel.getValue(name);
    const disabled = !editable;

    return {
      afterCreate: this._afterScrollerCreateOrUpdate,
      afterUpdate: this._afterScrollerCreateOrUpdate,
      "aria-invalid": valid ? "false" : "true",
      class: this.classes(
        CSS.input,
        CSS.inputField,
        disabled ? CSS.inputDisabled : null,
        !valid ? CSS.inputInvalid : null
      ),
      key: name,
      maxlength: maxLength > -1 ? `${maxLength}` : "",
      ...this._getNumberFieldConstraints(inputField),
      disabled,
      value: value == null ? "" : `${value}`,
      "data-field": inputField,
      onblur: this._handleInputBlur,
      onkeydown: this._handleInputKeyDown,
      onmousedown: type === "number" ? this._handleNumberInputMouseDown : null,
      required,
      title: hint
    };
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _handleNumberInputMouseDown({ target }: Event): void {
    const input = target as HTMLInputElement;

    if (!input.disabled) {
      // workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=1012818
      input.focus();
    }

    this.scheduleRender();
  }

  private _getNumberFieldConstraints(field: InputField): Range {
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

    if (this._featureChanged && inputField.editable) {
      node.focus();
      this._featureChanged = false;
    }
  }

  private _handleInputBlur(event: FocusEvent): void {
    const input = event.target as HTMLInputElement;
    const inputField: InputField = input["data-field"] as InputField;
    const maybeNextInput = event.relatedTarget as HTMLInputElement;

    const nextInputField: InputField = maybeNextInput && maybeNextInput["data-field"];

    if (inputField.type === "date") {
      const part = input.getAttribute("data-date-part") as keyof FormattedDateParts;
      this._activeDateEdit = { ...this._activeDateEdit, [part]: { value: input.value, input } };
    }

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

    if (this._activeDateEdit) {
      const { date: dateEdits, time: timeEdits } = this._activeDateEdit;
      const dateValue: string = this._getDateEditValue(inputField, "date");
      const timeValue: string = this._getDateEditValue(inputField, "time");
      const clearDate = dateValue === "" || timeValue === "";

      if (dateEdits) {
        const { input } = dateEdits;
        input.value = clearDate ? "" : dateValue;
        this._updateFieldValue(input);
      }

      if (timeEdits) {
        const { input } = timeEdits;
        input.value = clearDate ? "" : timeValue;
        this._updateFieldValue(input);
      }

      this._activeDateEdit = null;
    } else {
      this._updateFieldValue(input);
    }

    this.scheduleRender();
  }

  private _getDateEditValue(inputField: InputField, part: "date" | "time"): string {
    const edits = this._activeDateEdit[part];

    if (!edits) {
      return;
    }

    const { value: dateValue } = edits;

    if (dateValue === "") {
      return "";
    }

    const date = this._parseDate(edits.value, part);

    if (!date) {
      // if invalid, use previous value
      return this._formatDate(inputField.value as number)[part];
    }

    return this._formatDate(date.getTime())[part];
  }

  private _handleInputKeyDown(event: KeyboardEvent): void {
    const { key, altKey, ctrlKey, metaKey } = event;

    if (key !== "Enter") {
      const input = event.target as HTMLInputElement;
      const inputField = input["data-field"] as InputField;
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

    this._updateFieldValue(event.target as HTMLInputElement);
    this.scheduleRender();
  }

  private _updateFieldValue(input: HTMLInputElement | HTMLSelectElement) {
    const inputField: InputField = input["data-field"];
    this.viewModel.setValue(inputField.name, this._parseValue(input));
  }

  private _parseValue(input: HTMLInputElement | HTMLSelectElement): string | number | null {
    const inputField: InputField = input["data-field"];
    const valueAsText = input.value;

    const { required, type } = inputField;

    if (!required && valueAsText === "") {
      return null;
    }

    if (type === "number") {
      return parseFloat(valueAsText);
    }

    if (type === "date") {
      if (!valueAsText) {
        return null;
      }

      const part = input.getAttribute("data-date-part") as keyof FormattedDateParts;

      // coded-values get passed as numbers
      const utcDate = Number(valueAsText);

      if (!isNaN(utcDate)) {
        return utcDate;
      }

      const parsed = this._parseDate(valueAsText, part);

      if (!parsed) {
        return null;
      }

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

  private _handleOptionChange(event: Event): void {
    this._updateFieldValue(event.target as HTMLSelectElement);
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

  private _formatDate(dateUTC: number): FormattedDateParts {
    if (dateUTC == null) {
      return { date: "", time: "" };
    }

    const date = new Date(dateUTC);

    return {
      date: format(date, { selector: "date", ...defaultDateFormat }),
      time: format(date, { selector: "time", ...defaultDateFormat })
    };
  }

  private _parseDate(dateString: string, part: "date" | "time"): Date {
    if (dateString == null || dateString === "") {
      return null;
    }

    return parse(dateString, { selector: part, ...defaultDateFormat });
  }
}

export = FeatureForm;
