/**
 * The CoordinateConversion widget provides a way to display user cursor position either as map coordinates or
 * as any of several popular coordinate notations.  Additionally, the widget provides a way to convert
 * user input coordinates into a {@link module:esri/geometry/Point}.
 *
 * [![coordinate-conversion](../../assets/img/apiref/widgets/coordinate-conversion.png)](../sample-code/widgets-coordinateconversion/index.html)
 *
 * Several common [formats](esri-widgets-CoordinateConversion-support-Format.html) are included by default:
 * * XY - Longitude, Latitude (WGS84)
 * * MGRS - [Military Grid Reference System](http://earth-info.nga.mil/GandG/publications/tm8358.1/tr83581b.html)
 * * UTM - [Universal Transverse Mercator](http://earth-info.nga.mil/GandG/coordsys/grids/utm.html)
 * * DD - Decimal Degrees
 * * DDM - Degrees Decimal Minutes
 * * DMS - Degrees Minutes Seconds
 * * Basemap - X, Y in the coordinate system used by the current {@link module:esri/Basemap} in the units used by the {@link module:esri/Basemap}.
 * Web Mercator is the standard for Esri-provided {@link module:esri/Map#basemap basemaps}.
 *
 * Additional [formats](esri-widgets-CoordinateConversion-support-Format.html) can be created by a developer and made available
 * through the widget.
 *
 * @module esri/widgets/CoordinateConversion
 * @since 4.7
 *
 * @see [CoordinateConversion.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/CoordinateConversion.tsx)
 * @see [CoordinateConversion.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_CoordinateConversion.scss)
 * @see [Sample - Coordinate widget](../sample-code/widgets-coordinateconversion/index.html)
 * @see [Sample - Add custom coordinate formats](../sample-code/widgets-coordinateconversion-custom/index.html)
 * @see module:esri/widgets/CoordinateConversion/CoordinateConversionViewModel
 * @see module:esri/geometry/coordinateFormatter
 *
 * @example
 * var ccWidget = new CoordinateConversion({
 *   view: view
 * });
 *
 * // Adds widget in the bottom left corner of the view
 * view.ui.add(ccWidget, "bottom-left");
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18nCommon from "dojo/i18n!esri/nls/common";
import * as i18n from "dojo/i18n!esri/widgets/CoordinateConversion/nls/CoordinateConversion";
import { ENTER } from "dojo/keys";

// esri.core
import Collection = require("esri/core/Collection");
import global = require("esri/core/global");
import Logger = require("esri/core/Logger");

// esri.core.accessorSupport
import { aliasOf, subclass, property, declared } from "esri/core/accessorSupport/decorators";

// esri.geometry
import Point = require("esri/geometry/Point");

// esri.symbols
import PictureMarkerSymbol = require("esri/symbols/PictureMarkerSymbol");

// esri.views
import MapView = require("esri/views/MapView");
import SceneView = require("esri/views/SceneView");

// esri.widgets
import { Mode } from "esri/widgets/interfaces";
import Widget = require("esri/widgets/Widget");

// esri.widgets.CoordinateConversion
import CoordinateViewModel = require("esri/widgets/CoordinateConversion/CoordinateConversionViewModel");

// esri.widgets.CoordinateConversion.support
import Conversion = require("esri/widgets/CoordinateConversion/support/Conversion");
import Format = require("esri/widgets/CoordinateConversion/support/Format");

// esri.widgets.support
import { GoToOverride, VNode } from "esri/widgets/support/interfaces";
import { renderable, tsx, accessibleHandler, storeNode } from "esri/widgets/support/widget";

type Orientation = "expand-up" | "expand-down" | "auto";

const CSS: any = {
  base: "esri-coordinate-conversion esri-widget",
  captureMode: "esri-coordinate-conversion--capture-mode",
  noBasemap: "esri-coordinate-conversion--no-basemap",
  popup: "esri-coordinate-conversion__popup",

  conversionList: "esri-coordinate-conversion__conversion-list",
  conversionRow: "esri-coordinate-conversion__row",
  coordDisplay: "esri-coordinate-conversion__display",
  expanded: "esri-coordinate-conversion__conversions-view--expanded",
  expandDown: "esri-coordinate-conversion__conversions-view--expand-down",
  expandUp: "esri-coordinate-conversion__conversions-view--expand-up",
  conversionsView: "esri-coordinate-conversion__conversions-view",
  primarySelect: "esri-coordinate-conversion__select-primary",
  rowSelect: "esri-coordinate-conversion__select-row",
  toolDisplay: "esri-coordinate-conversion__tools",
  modeToggle: "esri-coordinate-conversion__mode-toggle",
  rowButton: "esri-coordinate-conversion__row-button",

  backButton: "esri-coordinate-conversion__back-button",
  convertButton: "esri-coordinate-conversion__button",
  coordinateInput: "esri-coordinate-conversion__input-coordinate",
  inputForm: "esri-coordinate-conversion__input-form",
  inputFormGroup: "esri-coordinate-conversion__input-group",
  rejectInput: "esri-coordinate-conversion__input-coordinate--rejected",

  sectionHeading: "esri-coordinate-conversion__heading",
  patternInput: "esri-coordinate-conversion__pattern-input",
  settings: "esri-coordinate__settings",
  settingsFormGroup: "esri-coordinate-conversion__settings-group",
  settingsFormGroupHorizontal: "esri-coordinate-conversion__settings-group-horizontal",
  previewCoordinate: "esri-coordinate-conversion__preview-coordinate",

  disabled: "esri-disabled",
  input: "esri-input",
  button: "esri-button",
  header: "esri-widget__heading",
  widgetButton: "esri-widget--button",
  leftArrow: "esri-icon-left-arrow",
  captureButton: "esri-icon-map-pin",
  collapseButton: "esri-icon-down",
  copyButton: "esri-icon-duplicate",
  editButton: "esri-icon-edit",
  esriSelect: "esri-select",
  expandButton: "esri-icon-up",
  goToButton: "esri-icon-locate",
  refresh: "esri-icon-refresh",
  removeConversion: "esri-icon-close",
  settingsButton: "esri-icon-settings2"
};

const logger = Logger.getLogger("esri.widgets.CoordinateConversion");

@subclass("esri.widgets.CoordinateConversion")
class CoordinateConversion extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @mixes module:esri/widgets/support/GoTo
   * @constructor
   * @alias module:esri/widgets/CoordinateConversion
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                              that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var ccWidget = new CoordinateConversion({
   *   view: view
   * });
   */
  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _popupMessage: string = null;
  private _popupId: number = null;

  private _coordinateInput: HTMLInputElement = null;
  private _badInput: boolean = false;
  private _goToEnabled: boolean = false;

  private _conversionFormat: Format = null;
  private _settingsFormat: Format = null;
  private _previewConversion: Conversion = null;

  private _expanded: boolean = false;
  private _popupVisible: boolean = false;
  private _settingsVisible: boolean = false;
  private _inputVisible: boolean = false;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  conversions
  //----------------------------------

  /**
   * A {@link module:esri/core/Collection} containing every {@link module:esri/widgets/CoordinateConversion/support/Conversion}
   * that the widget is currently displaying.
   *
   * @name conversions
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/CoordinateConversion/support/Conversion>}
   * @since 4.7
   */
  @aliasOf("viewModel.conversions")
  conversions: Collection<Conversion> = null;

  //----------------------------------
  //  currentLocation
  //----------------------------------

  /**
   * Describes the location of the coordinates currently displayed by the widget as a {@link module:esri/geometry/Point}.
   * Setting this property will update all [conversions](#conversions).
   *
   * @name currentLocation
   * @instance
   * @type {module:esri/geometry/Point}
   * @since 4.7
   */
  @aliasOf("viewModel.currentLocation")
  @renderable()
  currentLocation: Point = null;

  //----------------------------------
  //  formats
  //----------------------------------

  /**
   * A {@link module:esri/core/Collection} containing every {@link module:esri/widgets/CoordinateConversion/support/Format}
   * that the widget is capable of displaying.
   *
   * The default formats are `basemap`, `dd`, `ddm`, `dms`, `mgrs`, `usng`, `utm`, and `xy`.
   *
   * @name formats
   * @instance
   * @type {module:esri/core/Collection<module:esri/widgets/CoordinateConversion/support/Format>}
   */
  @aliasOf("viewModel.formats")
  @renderable()
  formats: Collection<Format> = null;

  //----------------------------------
  //  goToOverride
  //----------------------------------

  @aliasOf("viewModel.goToOverride")
  goToOverride: GoToOverride = null;

  //----------------------------------
  //  mode
  //----------------------------------

  /**
   * Describes the current mode of the widget.
   *
   * **Possible Values:** live | capture
   *
   * * While in `live` mode, the widget will update as the cursor moves.
   * * While in `capture` mode, the widget will update on mouse click and display a graphic
   * marking the current location.
   *
   * @name mode
   * @instance
   * @type {string}
   * @default live
   * @since 4.7
   */
  @aliasOf("viewModel.mode")
  @renderable()
  mode: Mode = null;

  //----------------------------------
  //  orientation
  //----------------------------------

  /**
   * Determines whether the widget should expand up or down.  If set to `auto`
   * the widget will be oriented based on its position in the view.
   *
   * **Possible Values:** auto | expand-up | expand-down
   *
   * @name orientation
   * @instance
   * @type {string}
   * @default auto
   * @since 4.7
   */
  @property()
  @renderable()
  orientation: Orientation = "auto";

  //----------------------------------
  //  requestDelay
  //----------------------------------

  /**
   * The number of milliseconds of delay before conversion requests will be sent
   * to the {@link module:esri/tasks/GeometryService}.  This only affects conversions that cannot be
   * performed in the browser.
   *
   * @name requestDelay
   * @instance
   * @type {number}
   * @since 4.7
   * @default 300
   */
  @aliasOf("viewModel.requestDelay")
  requestDelay: number = null;

  //----------------------------------
  //  multipleConversions
  //----------------------------------

  /**
   * If this property is set to `true`, multiple conversions can be displayed.  For a simpler experience with only
   * one conversion at a time, this property can be set to `false`.
   *
   * @name multipleConversions
   * @instance
   * @default true
   * @type {boolean}
   * @since 4.7
   */
  @property()
  @renderable()
  set multipleConversions(value: boolean) {
    if (value === false) {
      this._expanded = false;
      this.conversions.splice(1, this.conversions.length - 1);
    }
    this._set("multipleConversions", value);
  }
  get multipleConversions(): boolean {
    const stored = this._get("multipleConversions");
    return typeof stored === "boolean" ? stored : true;
  }

  //----------------------------------
  //  locationSymbol
  //----------------------------------

  /**
   * This symbol is used to visualize the location currently described by the widget when `capture` mode
   * is active.
   *
   * @name locationSymbol
   * @instance
   * @type {module:esri/symbols/SimpleMarkerSymbol | module:esri/symbols/PictureMarkerSymbol}
   */
  @aliasOf("viewModel.locationSymbol")
  locationSymbol: PictureMarkerSymbol;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView | SceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. The view model contains the logic that controls the Coordinate Widget's behavior.  See the
   * {@link module:esri/widgets/CoordinateConversion/CoordinateConversionViewModel} class to access all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/CoordinateConversion/CoordinateConversionViewModel}
   */
  @property({
    type: CoordinateViewModel
  })
  @renderable(["viewModel.state", "viewModel.waitingForConversions"])
  viewModel: CoordinateViewModel = new CoordinateViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Attempt to convert a string into a {@link module:esri/geometry/Point}.  The format of the
   * string must be specified.  A {@link module:esri/core/Collection} of available formats can be
   * obtained from the [formats](#formats) property.
   *
   * @param {string} coordinate - The coordinate string.
   *
   * @param {module:esri/widgets/CoordinateConversion/support/Format} format - Specifies the format of the input coordinate.
   *
   * @return {Promise<module:esri/geometry/Point>} When resolved, returns a {@link module:esri/geometry/Point}.
   */
  @aliasOf("viewModel.reverseConvert")
  reverseConvert(coordinate: string, format: Format): IPromise<Point> {
    return null;
  }

  render(): VNode {
    const state = this.get("viewModel.state"),
      noBasemapAlert =
        state === "disabled" ? (
          <div key={"esri-coordinate__no-basemap"}>{i18n.noBasemap}</div>
        ) : null,
      inputForm = !noBasemapAlert && this._inputVisible ? this._renderInputForm() : null,
      settings = !noBasemapAlert && this._settingsVisible ? this._renderSettings() : null,
      conversionsView =
        !noBasemapAlert && !inputForm && !settings ? this._renderConversionsView() : null,
      popup = this._popupVisible ? this._renderPopup() : null,
      widgetWrapperClasses = {
        [CSS.captureMode]: this.mode === "capture",
        [CSS.disabled]: state === "loading",
        [CSS.noBasemap]: state === "disabled"
      };

    return (
      <div class={this.classes(CSS.base, widgetWrapperClasses)}>
        {popup}
        {noBasemapAlert}
        {conversionsView}
        {settings}
        {inputForm}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _addConversion(event: Event): void {
    const select = event.target as HTMLSelectElement,
      formatToAdd = select.options[select.options.selectedIndex]["data-format"] as Format,
      insertIndex = select["data-index"] as number,
      newConversion = new Conversion({
        format: formatToAdd
      });

    select.options.selectedIndex = 0;
    if (insertIndex >= 0) {
      this.conversions.removeAt(insertIndex);
    }
    this.conversions.add(newConversion, insertIndex);
  }

  private _findSettingsFormat(): Format {
    return (
      this._settingsFormat ||
      this.conversions.reduceRight((format: Format, conversion, index) => {
        const currentFormat = conversion.format;
        return currentFormat.get<boolean>("hasDisplayProperties") ? currentFormat : format;
      }, null) ||
      this.formats.find((format) => format.hasDisplayProperties)
    );
  }

  private _hidePopup(): void {
    if (this._popupId) {
      clearTimeout(this._popupId);
      this._popupId = null;
    }
    this._popupVisible = false;
    this._popupMessage = null;
    this.scheduleRender();
  }

  private _onConvertComplete(): void {
    this._inputVisible = false;
    this._coordinateInput.value = "";
  }

  private _onCopy(event: ClipboardEvent): void {
    const target = event.currentTarget as HTMLElement;
    const coordinate = target["data-conversion"].displayCoordinate;

    // IE 11
    if ("clipboardData" in global) {
      (global.clipboardData as DataTransfer).setData("text", coordinate);
    } else {
      event.clipboardData.setData("text/plain", coordinate);
    }
    this._showPopup(i18n.copySuccessMessage);
    event.preventDefault();
  }

  private _processUserInput(event: KeyboardEvent | MouseEvent): void {
    const { keyCode } = event as KeyboardEvent,
      vm = this.viewModel;

    if (keyCode === ENTER || !keyCode) {
      const format = this._coordinateInput["data-format"] as Format,
        userInput = this._coordinateInput.value;

      this._reverseConvert(userInput, format)
        .then((point) => {
          this.mode === "capture" ? vm.resume() : (this.mode = "capture");

          // trigger all conversions to be updated
          this.currentLocation = point;
          vm.setLocation(point);
          this._onConvertComplete();
        })
        .catch((error: Error) => {
          logger.error(error);
          this._showPopup(i18n.invalidCoordinate);
          this._badInput = true;
        });
    } else {
      if (this._badInput) {
        this._badInput = false;
      }
    }
  }

  private _reverseConvert(userInput: string, format: Format): IPromise<Point> {
    const vm = this.viewModel;
    return format.reverseConvert(userInput).then((result) => {
      if (this._goToEnabled) {
        vm.goToLocation(result).catch((error) => {
          logger.warn(error);
          this._showPopup(i18n.locationOffBasemap);
        });
      }
      return result;
    });
  }

  private _setInputFormat(event: Event): void {
    const select = event.target as HTMLSelectElement,
      format = select[select.options.selectedIndex]["data-format"] as Format;

    this._conversionFormat = format;
  }

  private _setPreviewConversion(): void {
    const format = this._findSettingsFormat(),
      vm = this.viewModel;

    if (format) {
      const existingConversion = this.conversions.find(
        (conversion) => conversion.format === format
      );
      this._previewConversion = new Conversion({
        format,
        position: {
          location: this.currentLocation,
          coordinate: existingConversion && existingConversion.position.coordinate
        }
      });

      if (!this._previewConversion.position.coordinate) {
        vm.previewConversion(this._previewConversion);
      }
    }
  }

  private _setSettingsFormat(event: Event): void {
    const select = event.target as HTMLSelectElement,
      format = select[select.options.selectedIndex]["data-format"] as Format;

    this._settingsFormat = format;
    this._setPreviewConversion();
  }

  private _showPopup(message: string, duration: number = 2500): void {
    this._popupMessage = message;

    this._popupVisible ? clearTimeout(this._popupId) : (this._popupVisible = true);
    this.scheduleRender();

    this._popupId = setTimeout(() => {
      this._popupId = null;
      this._hidePopup();
    }, duration);
  }

  private _toggleGoTo(): void {
    this._goToEnabled = !this._goToEnabled;
  }

  private _updateCurrentPattern(event: Event): void {
    event.stopPropagation();
    const input = event.target as HTMLInputElement,
      format = this._findSettingsFormat();

    if (format) {
      format.currentPattern = input.value;
    }
  }

  private _renderConversion(conversion: Conversion, index: number): VNode {
    const widgetId = this.id,
      rowId = `${widgetId}__list-item-${index}`,
      rowLabel = `${conversion.format.name} ${i18n.conversionOutputSuffix}`,
      firstRow = index === 0,
      rowVisible = firstRow || this._expanded,
      tools = firstRow
        ? this._renderFirstConversion(conversion, rowId)
        : this._renderTools(index, conversion, rowId),
      displayedCoordinate =
        firstRow && !conversion.displayCoordinate ? i18n.noLocation : conversion.displayCoordinate,
      displayOutput = (
        <div
          aria-label={displayedCoordinate}
          class={CSS.coordDisplay}
          data-conversion={conversion}
          role="listitem"
          tabindex="0"
          title={displayedCoordinate}
        >
          {displayedCoordinate}
        </div>
      );

    const coordinateOptions = this._renderOptions(
      this.formats.filter((format) => format !== conversion.format)
    );

    return rowVisible ? (
      <li
        aria-label={rowLabel}
        class={CSS.conversionRow}
        id={rowId}
        key={conversion}
        role="group"
        title={rowLabel}
        tabindex="0"
      >
        <select
          aria-controls={rowId}
          aria-label={i18n.selectFormat}
          class={this.classes(CSS.esriSelect, CSS.rowSelect)}
          bind={this}
          data-index={index}
          onchange={this._addConversion}
          title={i18n.selectFormat}
        >
          <option aria-label={conversion.format.name} selected title={conversion.format.name}>
            {conversion.format.name.toUpperCase()}
          </option>
          {coordinateOptions}
        </select>
        {displayOutput}
        {tools}
      </li>
    ) : null;
  }

  private _renderCopyButton(conversion: Conversion): VNode {
    return (
      <li
        aria-label={i18nCommon.copy}
        bind={this}
        class={this.classes(CSS.widgetButton, CSS.rowButton)}
        data-conversion={conversion}
        onclick={this._copyCoordinateOutput}
        onkeydown={this._copyCoordinateOutput}
        oncopy={this._onCopy}
        role="button"
        tabindex="0"
        title={i18nCommon.copy}
      >
        <span aria-hidden="true" class={CSS.copyButton} />
      </li>
    );
  }

  private _renderFirstConversion(conversion: Conversion, rowId: string): VNode {
    const widgetId = this.id;

    const expandButtonClasses = {
      [CSS.expandButton]: !this._expanded,
      [CSS.collapseButton]: this._expanded
    };

    const modeTitle = this.mode === "live" ? i18n.captureMode : i18n.liveMode,
      buttonTitle = !this._expanded ? i18nCommon.expand : i18nCommon.collapse,
      copyButton =
        conversion.displayCoordinate && this.mode === "capture"
          ? this._renderCopyButton(conversion)
          : null,
      modeButtonOrExpandButton = this.multipleConversions ? (
        <li
          aria-controls={`${widgetId}__${CSS.conversionList}`}
          aria-label={buttonTitle}
          bind={this}
          class={CSS.widgetButton}
          key={`esri-coordinate-conversion__expand-button`}
          onclick={this._toggleExpand}
          onkeydown={this._toggleExpand}
          role="button"
          tabindex="0"
          title={buttonTitle}
        >
          <span aria-hidden="true" class={this.classes(expandButtonClasses)} />
        </li>
      ) : (
        <li
          aria-label={modeTitle}
          bind={this}
          class={this.classes(CSS.widgetButton, CSS.modeToggle)}
          key={`esri-coordinate-conversion__mode-toggle`}
          onclick={this._toggleMode}
          onkeydown={this._toggleMode}
          role="button"
          tabindex="0"
          title={modeTitle}
        >
          <span aria-hidden="true" class={CSS.captureButton} />
        </li>
      );

    return (
      <ul class={CSS.toolDisplay}>
        {copyButton}
        {modeButtonOrExpandButton}
      </ul>
    );
  }

  private _renderInputForm(): VNode {
    const selectFormat = this._conversionFormat || this.conversions.getItemAt(0).format,
      selectIndex = this.formats.findIndex((format) => format.name === selectFormat.name),
      widgetId = this.id,
      inputId = `${widgetId}__${CSS.coordinateInput}`,
      headerId = `${widgetId}__${CSS.coordinateInput}__header`;

    const options = this._renderOptions(this.formats, true, selectIndex);

    const inputClasses = {
      [CSS.rejectInput]: this._badInput
    };

    return (
      <div
        aria-labelledby={headerId}
        class={CSS.inputForm}
        key={`esri-coordinate-conversion__input-form`}
        role="search"
      >
        <div class={CSS.sectionHeading}>
          <div
            aria-label={i18nCommon.back}
            bind={this}
            class={this.classes(CSS.widgetButton, CSS.backButton)}
            onclick={this._toggleInputVisibility}
            onkeydown={this._toggleInputVisibility}
            role="button"
            tabindex="0"
            title={i18nCommon.back}
          >
            <span aria-hidden="true" class={CSS.leftArrow} />
          </div>
          <h4 class={CSS.header} id={headerId}>
            {i18n.inputCoordTitle}
          </h4>
        </div>

        <div class={CSS.inputFormGroup}>
          <select
            aria-controls={inputId}
            aria-label={i18n.selectFormat}
            bind={this}
            class={this.classes(CSS.esriSelect, CSS.rowSelect)}
            onchange={this._setInputFormat}
            title={i18n.selectFormat}
          >
            {options}
          </select>

          <input
            afterCreate={storeNode}
            aria-labelledby={headerId}
            aria-required="true"
            bind={this}
            class={this.classes(CSS.coordinateInput, CSS.input, inputClasses)}
            data-format={selectFormat}
            data-node-ref="_coordinateInput"
            id={inputId}
            onkeydown={this._processUserInput}
            placeholder={i18n.inputCoordTitle}
            role="textbox"
            spellcheck={false}
            title={i18n.inputCoordTitle}
            type="text"
          />
        </div>

        <div class={CSS.inputFormGroup}>
          <label aria-label={i18n.goTo}>
            <input
              bind={this}
              checked={this._goToEnabled}
              onclick={this._toggleGoTo}
              title={i18n.goTo}
              type="checkbox"
            />
            {i18n.goTo}
          </label>

          <button
            aria-label={i18n.convert}
            bind={this}
            class={this.classes(CSS.convertButton, CSS.button)}
            onclick={this._processUserInput}
            title={i18n.convert}
            type="button"
          >
            {i18n.convert}
          </button>
        </div>
      </div>
    );
  }

  private _renderConversionsView(): VNode {
    const widgetId = this.id,
      listId = `${widgetId}__${CSS.conversionList}`,
      addRowTools = this._renderPrimaryTools(),
      coordinateOptions = this._renderOptions(this.formats),
      conversionListItems = this.conversions
        .map((conversion, index) => this._renderConversion(conversion, index))
        .toArray();

    const mainTools = this._expanded ? (
      <div class={CSS.conversionRow}>
        <select
          aria-controls={listId}
          aria-label={i18n.addConversion}
          bind={this}
          class={this.classes(CSS.esriSelect, CSS.primarySelect)}
          onchange={this._addConversion}
          title={i18n.addConversion}
        >
          <option disabled selected value="">
            {i18n.addConversion}
          </option>
          {coordinateOptions}
        </select>
        {addRowTools}
      </div>
    ) : null;

    const conversionsViewClasses = {
      [CSS.expanded]: this._expanded,
      [CSS.expandUp]: this.orientation === "expand-up",
      [CSS.expandDown]: this.orientation === "expand-down"
    };

    return (
      <div
        class={this.classes(CSS.conversionsView, conversionsViewClasses)}
        key={`esri-coordinate-conversion__main-view`}
      >
        <ul
          aria-expanded={this._expanded ? "true" : "false"}
          class={CSS.conversionList}
          id={listId}
        >
          {conversionListItems}
        </ul>
        {mainTools}
      </div>
    );
  }

  private _renderOptions(
    formats: Collection<Format>,
    skipDisabled?: boolean,
    selectedIndex?: number
  ): VNode {
    const firstConversion = this.conversions.getItemAt(0);

    return formats
      .map((format, index) => {
        const disabled =
          skipDisabled || !firstConversion
            ? false
            : firstConversion.format.name === format.name ||
              this.conversions.map((conversion) => conversion.format.name).includes(format.name);

        return (
          <option
            aria-label={format.name}
            data-format={format}
            disabled={disabled}
            key={format.name}
            selected={index === selectedIndex}
            value={format.name}
          >
            {format.name.toUpperCase()}
          </option>
        );
      })
      .toArray();
  }

  private _renderPopup(): VNode {
    return (
      <div class={CSS.popup} role="alert">
        {this._popupMessage}
      </div>
    );
  }

  private _renderPrimaryTools(): VNode {
    const modeTitle = this.mode === "live" ? i18n.captureMode : i18n.liveMode;

    return (
      <ul class={CSS.toolDisplay}>
        <li
          bind={this}
          class={CSS.widgetButton}
          onclick={this._toggleInputVisibility}
          onkeydown={this._toggleInputVisibility}
          role="button"
          tabindex="0"
          title={i18n.inputCoordTitle}
        >
          <span aria-hidden="true" class={CSS.editButton} />
        </li>

        <li
          bind={this}
          class={this.classes(CSS.widgetButton, CSS.modeToggle)}
          onclick={this._toggleMode}
          onkeydown={this._toggleMode}
          role="button"
          tabindex="0"
          title={modeTitle}
        >
          <span aria-hidden="true" class={CSS.captureButton} />
        </li>

        <li
          bind={this}
          class={CSS.widgetButton}
          onclick={this._toggleSettingsVisibility}
          onkeydown={this._toggleSettingsVisibility}
          role="button"
          tabindex="0"
          title={i18n.settingsTitle}
        >
          <span aria-hidden="true" class={CSS.settingsButton} />
        </li>
      </ul>
    );
  }

  private _renderSettings(): VNode {
    const widgetId = this.id,
      patternId = `${widgetId}__${CSS.patternInput}`,
      headerId = `${widgetId}__${CSS.patternInput}__header`,
      previewId = `${widgetId}__${CSS.previewCoordinate}`,
      formats = this.formats.filter((format) => format.hasDisplayProperties),
      format = this._findSettingsFormat(),
      selectIndex = formats.indexOf(format),
      options = this._renderOptions(formats, true, selectIndex);

    const displayPattern = format.get<string>("currentPattern");

    return (
      <div
        aria-labelledby={headerId}
        class={CSS.settings}
        key={`esri-coordinate-conversion__settings`}
      >
        <div class={CSS.sectionHeading}>
          <div
            bind={this}
            class={this.classes(CSS.widgetButton, CSS.backButton)}
            onclick={this._toggleSettingsVisibility}
            onkeydown={this._toggleSettingsVisibility}
            role="button"
            tabindex="0"
            title={i18nCommon.back}
          >
            <span aria-hidden="true" class={CSS.leftArrow} />
          </div>
          <h4 class={CSS.header} id={headerId}>
            {i18n.settingsTitle}
          </h4>
        </div>

        <div class={CSS.settingsFormGroup}>
          <label for={patternId}>{i18n.changeCoordinateDisplay}</label>

          <select
            aria-label={i18n.selectFormat}
            class={CSS.esriSelect}
            bind={this}
            onchange={this._setSettingsFormat}
            title={i18n.selectFormat}
          >
            {options}
          </select>

          <div class={CSS.settingsFormGroupHorizontal}>
            <input
              aria-controls={previewId}
              bind={this}
              class={this.classes(CSS.patternInput, CSS.input)}
              id={patternId}
              oninput={this._updateCurrentPattern}
              spellcheck={false}
              title={i18n.changeCoordinateDisplay}
              type="text"
              value={displayPattern}
            />

            <div
              aria-controls={patternId}
              bind={this}
              class={CSS.widgetButton}
              onclick={this._setDefaultPattern}
              onkeydown={this._setDefaultPattern}
              role="button"
              tabindex="0"
              title={i18n.defaultPattern}
            >
              <span aria-hidden="true" class={CSS.refresh} />
            </div>
          </div>
        </div>

        <div class={CSS.settingsFormGroup}>
          <label>
            {i18nCommon.preview}
            <div class={CSS.previewCoordinate} id={previewId} tabindex="0">
              {this._previewConversion.displayCoordinate}
            </div>
          </label>
        </div>
      </div>
    );
  }

  private _renderTools(index: number, conversion: Conversion, rowId: string): VNode {
    const copyButton =
      conversion.displayCoordinate && this.mode === "capture"
        ? this._renderCopyButton(conversion)
        : null;

    return (
      <ul class={CSS.toolDisplay} role="listitem">
        {copyButton}
        <li
          aria-controls={rowId}
          aria-label={i18n.removeConversion}
          bind={this}
          class={this.classes(CSS.widgetButton, CSS.rowButton)}
          data-index={index}
          key={`${rowId}__${CSS.widgetButton}`}
          onclick={this._removeConversion}
          onkeydown={this._removeConversion}
          tabindex="0"
          role="button"
          title={i18n.removeConversion}
        >
          <span aria-hidden="true" class={CSS.removeConversion} />
        </li>
      </ul>
    );
  }

  @accessibleHandler()
  private _copyCoordinateOutput(event: Event): void {
    const target = event.target as HTMLElement;
    if (!("createTextRange" in document.body)) {
      const selection = window.getSelection(),
        range = document.createRange();

      range.selectNodeContents(target);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    document.execCommand("copy");
  }

  @accessibleHandler()
  private _removeConversion(event: Event): void {
    const target = event.target as HTMLElement,
      index = target["data-index"] as number;

    this.conversions.removeAt(index);
  }

  @accessibleHandler()
  private _setDefaultPattern(event: Event): void {
    event.stopPropagation();
    const format = this._findSettingsFormat();
    if (format) {
      format.currentPattern = format.get<string>("defaultPattern");
    }
  }

  @accessibleHandler()
  private _toggleExpand(): void {
    this._expanded = !this._expanded;
  }

  @accessibleHandler()
  private _toggleInputVisibility(event: Event): void {
    this._inputVisible = !this._inputVisible;
    if (this._popupVisible) {
      this._hidePopup();
    }

    if (this._inputVisible) {
      this.viewModel.pause();
    } else {
      this.viewModel.resume();
    }
  }

  @accessibleHandler()
  private _toggleMode(): void {
    this.mode = this.mode === "live" ? "capture" : "live";
  }

  @accessibleHandler()
  private _toggleSettingsVisibility(): void {
    this._settingsVisible = !this._settingsVisible;
    if (this._popupVisible) {
      this._hidePopup();
    }

    if (this._settingsVisible) {
      this._setPreviewConversion();
      this.viewModel.pause();
    } else {
      this.viewModel.resume();
    }
  }
}

export = CoordinateConversion;
