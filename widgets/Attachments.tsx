/**
 * This widget allows users to view and edit attachments associated with a feature and is
 * considered a standalone experience that can be utilized in widgets such {@link module:esri/widgets/Popup} and {@link module:esri/widgets/Editor}.
 * When viewing attachments, the attachment's thumbnail, file format, and size are
 * displayed. The {@link module:esri/widgets/Popup} widget uses this widget's
 * functionality to display attachments. Whereas the {@link module:esri/widgets/Editor}
 * widget has the functionality to edit attachments automatically configured within it.
 *
 * If the associated feature layer(s) contains an `attachment` {@link module:esri/layers/FeatureLayer#capabilities capability},
 * the widget will recognize it as such. And based on the functionality needed, will display the attachment for viewing
 * or editing.
 *
 * If needing to edit attachments, the feature layer must first be enabled for editing. The ability
 * to create, update, and delete attachments will display based on the feature layer's editing permissions.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 * * Editing attachments is currently available using the {@link module:esri/widgets/Editor} widget. Future API releases
 * will have additional functionality to edit outside of this widget.
 * * Batch attachment editing is not supported.
 * :::
 *
 * The following image displays the various displays of the attachment widget.
 * ![attachments](../../assets/img/apiref/widgets/attachments-merged.png)
 *
 * @module esri/widgets/Attachments
 * @amdalias Attachments
 * @since 4.15
 *
 * @see [Attachments.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Attachments.tsx)
 * @see [Attachments.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Attachments.scss)
 * @see [Sample - Popup with edit action](../sample-code/popup-editaction/index.html)
 * @see module:esri/widgets/Attachments/AttachmentsViewModel
 * @see module:esri/widgets/Editor
 * @see module:esri/widgets/Popup
 * @see module:esri/PopupTemplate
 * @see module:esri/popup/content/AttachmentsContent
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/layers/FeatureLayer
 * @see module:esri/layers/support/AttachmentInfo
 * @see [ArcGIS REST API - Attachment Infos (Feature Service)](https://developers.arcgis.com/rest/services-reference/attachment-infos-feature-service-.htm)
 */

// esri
import Graphic = require("esri/Graphic");

// esri.core
import EsriError = require("esri/core/Error");
import { formatFileSize } from "esri/core/unitFormatUtils";
import * as watchUtils from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.t9n
import UnitsMessages from "esri/core/t9n/Units";

// esri.layers.support
import AttachmentInfo = require("esri/layers/support/AttachmentInfo");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.Attachments
import AttachmentsViewModel = require("esri/widgets/Attachments/AttachmentsViewModel");
import { AttachmentsDisplay, Abilities } from "esri/widgets/Attachments/interfaces";

// esri.widgets.Attachments.support
import * as attachmentUtils from "esri/widgets/Attachments/support/attachmentUtils";

// esri.widgets.Attachments.t9n
import type AttachmentsMessages from "esri/widgets/Attachments/t9n/Attachments";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { isRTL, renderable, tsx, storeNode, discardNode, messageBundle } from "esri/widgets/support/widget";

interface VisibleElements {
  addButton?: boolean;
  addSubmitButton?: boolean;
  cancelAddButton?: boolean;
  cancelUpdateButton?: boolean;
  deleteButton?: boolean;
  errorMessage?: boolean;
  progressBar?: boolean;
  updateButton?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  addButton: true,
  addSubmitButton: true,
  cancelAddButton: true,
  cancelUpdateButton: true,
  deleteButton: true,
  errorMessage: true,
  progressBar: true,
  updateButton: true
};

const CSS = {
  base: "esri-attachments",
  loaderContainer: "esri-attachments__loader-container",
  loader: "esri-attachments__loader",
  fadeIn: "esri-attachments--fade-in",
  container: "esri-attachments__container",
  containerList: "esri-attachments__container--list",
  containerPreview: "esri-attachments__container--preview",
  actions: "esri-attachments__actions",
  deleteButton: "esri-attachments__delete-button",
  addAttachmentButton: "esri-attachments__add-attachment-button",
  errorMessage: "esri-attachments__error-message",
  items: "esri-attachments__items",
  item: "esri-attachments__item",
  itemButton: "esri-attachments__item-button",
  itemMask: "esri-attachments__item-mask",
  itemMaskIcon: "esri-attachments__item-mask--icon",
  itemImage: "esri-attachments__image",
  itemImageResizable: "esri-attachments__image--resizable",
  itemLabel: "esri-attachments__label",
  itemFilename: "esri-attachments__filename",
  itemChevronIcon: "esri-attachments__item-chevron-icon",
  itemLink: "esri-attachments__item-link",
  itemLinkOverlay: "esri-attachments__item-link-overlay",
  itemLinkOverlayIcon: "esri-attachments__item-link-overlay-icon",
  itemEditIcon: "esri-attachments__item-edit-icon",
  itemAddIcon: "esri-attachments__item-add-icon",
  itemAddButton: "esri-attachments__item-add-button",
  formNode: "esri-attachments__form-node",
  fileFieldset: "esri-attachments__file-fieldset",
  fileLabel: "esri-attachments__file-label",
  fileName: "esri-attachments__file-name",
  fileInput: "esri-attachments__file-input",
  metadata: "esri-attachments__metadata",
  metadataFieldset: "esri-attachments__metadata-fieldset",
  progressBar: "esri-attachments__progress-bar",
  // Common
  esriWidget: "esri-widget",
  esriButton: "esri-button",
  buttonDisabled: "esri-button--disabled",
  esriButtonSecondary: "esri-button--secondary",
  esriButtonTertiary: "esri-button--tertiary",
  esriButtonThird: "esri-button--third",
  esriButtonSmall: "esri-button--small",
  esriButtonHalf: "esri-button--half",
  empty: "esri-widget__content--empty",
  // Icons
  iconExternalLink: "esri-icon-link-external",
  iconEdit: "esri-icon-edit",
  iconRight: "esri-icon-right",
  iconLeft: "esri-icon-left",
  iconPlus: "esri-icon-plus"
};

const WINDOW_CSS = window["CSS"];

@subclass("esri.widgets.Attachments")
class Attachments extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Attachments
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   */

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    this.own(
      watchUtils.on(this, "viewModel.attachmentInfos", "change", () => this.scheduleRender()),
      watchUtils.init(this, "viewModel.mode", () => this._modeChanged())
    );
  }

  //--------------------------------------------------------------------------
  //
  // Type definitions
  //
  //--------------------------------------------------------------------------

  //--------------------------------------------------------------------------
  //
  // VisibleElements typedef
  //
  //--------------------------------------------------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @ignore
   * @typedef module:esri/widgets/Attachments~VisibleElements
   *
   * @property {boolean} [addButton] - Indicates whether to display the `Add` button which prompts the dialog to add a new attachment. Default is `true`.
   * @property {boolean} [addSubmitButton] - Indicates whether to display the `add` button after selecting the attachment to add. Default value is `true`.
   * @property {boolean} [cancelAddButton] - Indicates whether to display the `cancel` button after selecting the attachment to add. Default value is `true`.
   * @property {boolean} [cancelUpdateButton] - Indicates whether to display the `cancel` button after selecting an attachment to update an existing attachment. Default value is `true`.
   * @property {boolean} [deleteButton] - Indicates whether to display the `delete` button to delete an existing attachment. Default value is `true`.
   * @property {boolean} [errorMessage] - Indicates whether to display an error message if adding or updating an attachment results in errors. Default value is `true`.
   * @property {boolean} [progressBar] - Indicates whether to display a progress bar when adding an attachment. Default value is `true`.
   * @property {boolean} [updateButton] - Indicates whether to display an `update` button to allow updating on existing attachments. Default value is `true`.
   */

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  abilities
  //----------------------------------

  /**
   * Configures the functionality that can be performed by the user.
   *
   * @ignore
   * @name abilities
   * @type {Object}
   *
   * @property {boolean} [editing] - Indicates whether editing the attachment is allowed. Note that the feature layer must first be enabled to support editing. Default value is `false`.
   * @property {Object} [operations] - The available workflow operations within the widget.
   *
   * @property {boolean}[operations.add] - Allows adding attachments. Default value is `true`.
   * @property {boolean}[operations.update] - Allows updating an existing attachment. Default value is `true`.
   * @property {boolean}[operations.delete] - Allows deleting an existing attachment. Default value is `true`.
   *
   */
  @aliasOf("viewModel.abilities")
  abilities: Abilities = null;

  //----------------------------------
  //  displayType
  //----------------------------------

  /**
   * A string value indicating how to display the attachment.
   *
   * If `list` is specified, attachments show as links. If `preview` is specified, a thumbnail of each attachment will be shown.
   *
   * @instance
   * @name displayType
   * @type {"preview" | "list"}
   * @default "list"
   */
  @property()
  @renderable()
  displayType: AttachmentsDisplay = "list";

  //----------------------------------
  //  graphic
  //----------------------------------

  /**
   * The graphic for the attachments.
   *
   * @name graphic
   * @instance
   * @type {module:esri/Graphic}
   */
  @aliasOf("viewModel.graphic")
  graphic: Graphic = null;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's label.
   *
   * @ignore
   * @name label
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
   * @name messages
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/widgets/Attachments/t9n/Attachments")
  messages: AttachmentsMessages = null;

  //----------------------------------
  //  messagesUnits
  //----------------------------------

  /**
   * @name messagesUnits
   * @instance
   * @type {Object}
   *
   * @ignore
   * @todo intl doc
   */
  @property()
  @renderable()
  @messageBundle("esri/core/t9n/Units")
  messagesUnits: UnitsMessages = null;

  //----------------------------------
  //  selectedFile
  //----------------------------------

  /**
   * The selected file defined by the user from the `update` or `add` attachment form.
   *
   * @ignore
   * @name selectedFile
   * @instance
   * @type {File}
   * @readonly
   */
  @property({
    readOnly: true
  })
  selectedFile: File = null;

  //----------------------------------
  //  submitting
  //----------------------------------

  /**
   * Indicates whether there is currently an attachment being added, updated or deleted.
   *
   * @ignore
   * @name submitting
   * @type {boolean}
   * @readonly
   * @default false
   */
  @renderable()
  @property({
    readOnly: true
  })
  readonly submitting: boolean = false;

  //----------------------------------
  //  error
  //----------------------------------

  /**
   * Error defined when adding, updating or deleting an attachment fails.
   *
   * @name error
   * @instance
   * @type {module:esri/core/Error}
   * @readonly
   *
   */
  @renderable()
  @property({
    readOnly: true
  })
  readonly error: EsriError;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Attachments/AttachmentsViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Attachments/AttachmentsViewModel}
   * @autocast
   */

  @property({
    type: AttachmentsViewModel
  })
  @renderable([
    "viewModel.activeAttachmentInfo",
    "viewModel.mode",
    "viewModel.state",
    "viewModel.supportsResizeAttachments",
    "viewModel.attachmentInfos",
    "viewModel.graphic",
    "viewModel.abilities",
    "viewModel.abilities.editing",
    "viewModel.abilities.operations"
  ])
  viewModel: AttachmentsViewModel = new AttachmentsViewModel();

  //----------------------------------
  //  visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * @ignore
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Attachments~VisibleElements}
   * @autocast { "value": "Object[]" }
   */

  @property()
  @renderable()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _supportsImageOrientation =
    WINDOW_CSS && WINDOW_CSS.supports && WINDOW_CSS.supports("image-orientation", "from-image");

  private _addAttachmentForm: HTMLFormElement = null;

  private _updateAttachmentForm: HTMLFormElement = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Adds a new attachment.
   *
   * @ignore
   * @method addAttachment
   * @instance
   *
   * @return {Promise<module:esri/layers/support/AttachmentInfo>} When resolved, returns the {@link module:esri/layers/support/AttachmentInfo}
   * of a feature layer.
   */
  addAttachment(): Promise<AttachmentInfo> {
    const { _addAttachmentForm, viewModel } = this;

    this._set("submitting", true);
    this._set("error", null);

    return viewModel
      .addAttachment(_addAttachmentForm)
      .then((response) => {
        this._set("submitting", false);
        this._set("error", null);
        viewModel.mode = "view";
        return response;
      })
      .catch((error) => {
        this._set("submitting", false);
        this._set(
          "error",
          new EsriError("attachments:add-attachment", this.messages.addErrorMessage, error)
        );
        throw error;
      });
  }

  /**
   * Deletes an attachment.
   *
   * @ignore
   * @method deleteAttachment
   * @instance
   *
   * @param {module:esri/layers/support/AttachmentInfo} attachmentInfo - The attachment to delete.
   *
   * @return {Promise<module:esri/layers/support/AttachmentInfo>} When resolved, returns the {@link module:esri/layers/support/AttachmentInfo}
   * of a feature layer.
   */
  deleteAttachment(attachmentInfo: AttachmentInfo): Promise<AttachmentInfo> {
    const { viewModel } = this;
    this._set("submitting", true);
    this._set("error", null);

    return viewModel
      .deleteAttachment(attachmentInfo)
      .then((response) => {
        this._set("submitting", false);
        this._set("error", null);
        viewModel.mode = "view";
        return response;
      })
      .catch((error) => {
        this._set("submitting", false);
        this._set(
          "error",
          new EsriError("attachments:delete-attachment", this.messages.deleteErrorMessage, error)
        );
        throw error;
      });
  }

  /**
   * Updates an existing attachment.
   *
   * @ignore
   * @method updateAttachment
   * @instance
   *
   * @return {Promise<module:esri/layers/support/AttachmentInfo>} When resolved, returns the {@link module:esri/layers/support/AttachmentInfo}
   * of a feature layer.
   */
  updateAttachment(): Promise<AttachmentInfo> {
    const { viewModel } = this;
    const { _updateAttachmentForm } = this;

    this._set("submitting", true);
    this._set("error", null);

    return viewModel
      .updateAttachment(_updateAttachmentForm)
      .then((response) => {
        this._set("submitting", false);
        this._set("error", null);
        viewModel.mode = "view";
        return response;
      })
      .catch((error) => {
        this._set("submitting", false);
        this._set(
          "error",
          new EsriError("attachments:update-attachment", this.messages.updateErrorMessage, error)
        );
        throw error;
      });
  }

  render(): VNode {
    const { submitting, viewModel } = this;
    const { state } = viewModel;

    return (
      <div class={this.classes(CSS.base, CSS.esriWidget)}>
        {submitting ? this.renderProgressBar() : null}
        {state === "loading" ? this.renderLoading() : this.renderAttachments()}
        {this.renderErrorMessage()}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderErrorMessage(): VNode {
    const { error, visibleElements } = this;

    return error && visibleElements.errorMessage ? (
      <div key="error-message" class={CSS.errorMessage}>
        {error.message}
      </div>
    ) : null;
  }

  protected renderAttachments(): VNode {
    const { mode, activeAttachmentInfo } = this.viewModel;

    return mode === "add"
      ? this.renderAddForm()
      : mode === "edit"
      ? this.renderDetailsForm(activeAttachmentInfo)
      : this.renderAttachmentContainer();
  }

  protected renderLoading(): VNode {
    return (
      <div class={CSS.loaderContainer} key="loader">
        <div class={CSS.loader} />
      </div>
    );
  }

  protected renderProgressBar(): VNode {
    return this.visibleElements.progressBar ? (
      <div class={CSS.progressBar} key="progress-bar" />
    ) : null;
  }

  protected renderAddForm(): VNode {
    const { submitting, selectedFile } = this;
    const disabled = submitting || !selectedFile;
    const cancelButtonNode = this.visibleElements.cancelAddButton ? (
      <button
        type="button"
        bind={this}
        disabled={submitting}
        onclick={this._cancelForm}
        class={this.classes(
          CSS.esriButton,
          CSS.esriButtonTertiary,
          CSS.esriButtonSmall,
          CSS.esriButtonHalf,
          submitting && CSS.buttonDisabled
        )}
      >
        {this.messages.cancel}
      </button>
    ) : null;
    const submitButtonNode = this.visibleElements.addSubmitButton ? (
      <button
        type="submit"
        disabled={disabled}
        class={this.classes(
          CSS.esriButton,
          CSS.esriButtonSecondary,
          CSS.esriButtonSmall,
          CSS.esriButtonHalf,
          {
            [CSS.buttonDisabled]: disabled
          }
        )}
      >
        {this.messages.add}
      </button>
    ) : null;
    const fileNameNode = selectedFile ? (
      <span key="file-name" class={CSS.fileName}>
        {selectedFile.name}
      </span>
    ) : null;
    const formNode = (
      <form
        bind={this}
        afterCreate={storeNode}
        afterRemoved={discardNode}
        data-node-ref="_addAttachmentForm"
        onsubmit={this._submitAddAttachment}
      >
        <fieldset class={CSS.fileFieldset}>
          {fileNameNode}
          <label class={this.classes(CSS.fileLabel, CSS.esriButton, CSS.esriButtonSecondary)}>
            {selectedFile ? this.messages.changeFile : this.messages.selectFile}
            <input
              class={CSS.fileInput}
              type="file"
              name="attachment"
              bind={this}
              onchange={this._handleFileInputChange}
            />
          </label>
        </fieldset>
        {submitButtonNode}
        {cancelButtonNode}
      </form>
    );

    return (
      <div key="add-form-container" class={CSS.formNode}>
        {formNode}
      </div>
    );
  }

  protected renderDetailsForm(attachmentInfo: AttachmentInfo): VNode {
    const { visibleElements, viewModel, selectedFile, submitting } = this;
    const { contentType, size, url } = attachmentInfo;
    const { abilities } = viewModel;
    const disabled = submitting || !selectedFile;

    const deleteButtonNode =
      abilities.editing && abilities.operations.delete && visibleElements.deleteButton ? (
        <button
          key="delete-button"
          type="button"
          disabled={submitting}
          bind={this}
          onclick={(event: MouseEvent) => this._submitDeleteAttachment(event, attachmentInfo)}
          class={this.classes(
            CSS.esriButton,
            CSS.esriButtonSmall,
            CSS.esriButtonTertiary,
            CSS.deleteButton,
            {
              [CSS.buttonDisabled]: submitting
            }
          )}
        >
          {this.messages.delete}
        </button>
      ) : null;

    const updateButtonNode =
      abilities.editing && abilities.operations.update && visibleElements.updateButton ? (
        <button
          disabled={disabled}
          key="update-button"
          type="submit"
          class={this.classes(CSS.esriButton, CSS.esriButtonSmall, CSS.esriButtonThird, {
            [CSS.buttonDisabled]: disabled
          })}
        >
          {this.messages.update}
        </button>
      ) : null;

    const cancelButtonNode = this.visibleElements.cancelUpdateButton ? (
      <button
        disabled={submitting}
        key="cancel-button"
        type="button"
        bind={this}
        onclick={this._cancelForm}
        class={this.classes(
          CSS.esriButton,
          CSS.esriButtonSmall,
          CSS.esriButtonTertiary,
          CSS.esriButtonThird,
          {
            [CSS.buttonDisabled]: submitting
          }
        )}
      >
        {this.messages.cancel}
      </button>
    ) : null;
    const fileNameNode = selectedFile ? (
      <span key="file-name" class={CSS.fileName}>
        {selectedFile.name}
      </span>
    ) : null;
    const attachmentFileNode =
      abilities.editing && abilities.operations.update ? (
        <fieldset key="file" class={CSS.fileFieldset}>
          {fileNameNode}
          <label class={this.classes(CSS.fileLabel, CSS.esriButton, CSS.esriButtonSecondary)}>
            {this.messages.changeFile}
            <input
              class={CSS.fileInput}
              type="file"
              name="attachment"
              bind={this}
              onchange={this._handleFileInputChange}
            />
          </label>
        </fieldset>
      ) : null;

    const fileSizeNode = (
      <fieldset key="size" class={CSS.metadataFieldset}>
        <label>{formatFileSize(this.messagesUnits, size)}</label>
      </fieldset>
    );

    const contentTypeNode = (
      <fieldset key="content-type" class={CSS.metadataFieldset}>
        <label>{contentType}</label>
      </fieldset>
    );

    const formNode = (
      <form
        bind={this}
        afterCreate={storeNode}
        afterRemoved={discardNode}
        data-node-ref="_updateAttachmentForm"
        onsubmit={this._submitUpdateAttachment}
      >
        <div class={CSS.metadata}>
          {fileSizeNode}
          {contentTypeNode}
        </div>
        {attachmentFileNode}
        <div class={CSS.actions}>
          {deleteButtonNode}
          {cancelButtonNode}
          {updateButtonNode}
        </div>
      </form>
    );

    return (
      <div key="edit-form-container" class={CSS.formNode}>
        <a class={CSS.itemLink} href={url} rel="noreferrer" target="_blank" alt={name}>
          {this.renderImageMask({
            attachmentInfo,
            size: 400
          })}
          <div class={CSS.itemLinkOverlay}>
            <span class={CSS.itemLinkOverlayIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path d="M28 13h1v16H3V3h16v1H4v24h24zm-5-9h4.293L15.646 15.638l.707.707L28 4.707V9h1V3h-6z" />
                <path fill="none" d="M0 0h32v32H0z" />
              </svg>
            </span>
          </div>
        </a>
        {formNode}
      </div>
    );
  }

  protected renderImageMask({
    attachmentInfo,
    size
  }: {
    attachmentInfo: AttachmentInfo;
    size: number;
  }): VNode {
    const { supportsResizeAttachments } = this.viewModel;
    const { contentType, url } = attachmentInfo;

    const hasSupportedImageFormat =
      supportsResizeAttachments && attachmentUtils.isSupportedImage(contentType);
    const transform = this._getCSSTransform(attachmentInfo, hasSupportedImageFormat);
    const imageStyles = transform ? { transform, "image-orientation": "none" } : {};
    const sep = url.indexOf("?") === -1 ? "?" : "&";

    const thumbnail = hasSupportedImageFormat
      ? `${url}${sep}w=${size}`
      : attachmentUtils.getIconPath(contentType);

    const itemMaskClasses = {
      [CSS.itemMaskIcon]: !hasSupportedImageFormat
    };

    const itemImageClasses = {
      [CSS.itemImageResizable]: supportsResizeAttachments
    };

    return (
      <div class={this.classes(itemMaskClasses, CSS.itemMask)}>
        <img
          styles={imageStyles}
          alt=""
          src={thumbnail}
          class={this.classes(itemImageClasses, CSS.itemImage)}
        />
      </div>
    );
  }

  protected renderAttachmentInfo({
    attachmentInfo,
    displayType
  }: {
    attachmentInfo: AttachmentInfo;
    displayType: AttachmentsDisplay;
  }): VNode {
    const { viewModel } = this;
    const { abilities } = viewModel;
    const { name, url } = attachmentInfo;
    const imageMaskNode = this.renderImageMask({
      attachmentInfo,
      size: displayType === "list" ? 48 : 400
    });

    const chevronNode = abilities.editing ? (
      <span
        aria-hidden="true"
        class={this.classes(CSS.itemChevronIcon, isRTL() ? CSS.iconLeft : CSS.iconRight)}
      />
    ) : null;

    const labelNode = (
      <label class={CSS.itemLabel}>
        <span class={CSS.itemFilename}>{name || this.messages.noTitle}</span>
        {chevronNode}
      </label>
    );

    const imageAndLabelNodes = [imageMaskNode, labelNode];

    const buttonNode = abilities.editing ? (
      <button
        key="details-button"
        bind={this}
        class={CSS.itemButton}
        title={this.messages.attachmentDetails}
        aria-label={this.messages.attachmentDetails}
        data-attachment-info-id={attachmentInfo.id}
        onclick={() => this._startEditAttachment(attachmentInfo)}
        type="button"
      >
        {imageAndLabelNodes}
      </button>
    ) : (
      <a key="details-link" class={CSS.itemButton} href={url} target="_blank">
        {imageAndLabelNodes}
      </a>
    );

    return (
      <li class={CSS.item} key={attachmentInfo}>
        {buttonNode}
      </li>
    );
  }

  protected renderAttachmentContainer(): VNode {
    const { displayType, viewModel, visibleElements } = this;
    const { attachmentInfos, abilities } = viewModel;

    const hasAttachments = attachmentInfos && attachmentInfos.length;

    const attachmentsClasses = {
      [CSS.containerList]: displayType !== "preview",
      [CSS.containerPreview]: displayType === "preview"
    };

    const addAttachmentButtonNode =
      abilities.editing && abilities.operations.add && visibleElements.addButton ? (
        <button
          bind={this}
          onclick={() => this._startAddAttachment()}
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary, CSS.addAttachmentButton)}
          type="button"
        >
          <span aria-hidden="true" class={this.classes(CSS.itemAddIcon, CSS.iconPlus)} />
          {this.messages.add}
        </button>
      ) : null;

    const attachmentsListNode = hasAttachments ? (
      <ul class={CSS.items}>
        {attachmentInfos.toArray().map((attachmentInfo) =>
          this.renderAttachmentInfo({
            attachmentInfo,
            displayType
          })
        )}
      </ul>
    ) : (
      <div class={CSS.empty}>{this.messages.noAttachments}</div>
    );

    return (
      <div key={"attachments-container"} class={this.classes(CSS.container, attachmentsClasses)}>
        {attachmentsListNode}
        {addAttachmentButtonNode}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _modeChanged(): void {
    this._set("error", null);
    this._set("selectedFile", null);
  }

  private _handleFileInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selectedFile = input && input.files && input.files.item(0);
    this._set("selectedFile", selectedFile);
  }

  private _submitDeleteAttachment(event: MouseEvent, attachmentInfo: AttachmentInfo): void {
    event.preventDefault();
    this.deleteAttachment(attachmentInfo);
  }

  private _submitAddAttachment(event: MouseEvent): void {
    event.preventDefault();
    this.addAttachment();
  }

  private _submitUpdateAttachment(event: MouseEvent): void {
    event.preventDefault();
    this.updateAttachment();
  }

  private _startEditAttachment(attachmentInfo: AttachmentInfo): void {
    const { viewModel } = this;
    viewModel.activeAttachmentInfo = attachmentInfo;
    viewModel.mode = "edit";
  }

  private _startAddAttachment(): void {
    this.viewModel.mode = "add";
  }

  private _cancelForm(event: MouseEvent): void {
    event.preventDefault();

    this.viewModel.mode = "view";
  }

  private _getCSSTransform(
    attachmentInfo: AttachmentInfo,
    hasSupportedImageFormat: boolean
  ): string {
    const { orientationInfo } = attachmentInfo;

    return !this._supportsImageOrientation && hasSupportedImageFormat && orientationInfo
      ? [
          orientationInfo.rotation ? `rotate(${orientationInfo.rotation}deg)` : "",
          orientationInfo.mirrored ? "scaleX(-1)" : ""
        ].join(" ")
      : "";
  }
}

export = Attachments;
