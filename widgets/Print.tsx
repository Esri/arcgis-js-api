/**
 * The Print widget connects your application with a [printing service](https://server.arcgis.com/en/portal/latest/administer/windows/configure-the-portal-to-print-maps.htm) to allow the map to be printed.
 * It takes advantage of server-side, high-quality, full cartographic print functionality using the ExportWebMap service of ArcGIS,
 * which can be configured with custom layout templates. One is provided that shows the map only, while another provides a layout with legend, etc.
 * The Print widget works with the {@link module:esri/tasks/PrintTask} which generates a printer-ready version of the map.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * There is no current support for printing {@link module:esri/views/SceneView SceneViews}.
 * :::
 *
 * @module esri/widgets/Print
 * @since 4.2
 *
 * @see [Print.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Print.js)
 * @see [Print.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Print.scss)
 * @see [Sample - Print widget](../sample-code/widgets-print/index.html)
 * @see module:esri/widgets/Print/PrintViewModel
 * @see [Printing in web applications](https://server.arcgis.com/en/server/latest/create-web-apps/windows/printing-in-web-applications.htm)
 * @see [Configure the portal to print maps](https://server.arcgis.com/en/portal/latest/administer/windows/configure-the-portal-to-print-maps.htm)
 * @see [Export Web Map Task (Geoprocessing service) [REST doc]](http://resources.arcgis.com/en/help/rest/apiref/gp_exportwebmaptask.html)
 *
 * @example
 * var print = new Print({
 *   view: view
 * });
 * // Adds widget below other elements in the top left corner of the view
 * view.ui.add(print, {
 *   position: "top-left"
 * });
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, subclass, declared, property } from "../core/accessorSupport/decorators";

import View = require("../views/View");
import PrintViewModel = require("./Print/PrintViewModel");
import PrintTemplate = require("../tasks/support/PrintTemplate");
import Collection = require("../core/Collection");
import watchUtils = require("../core/watchUtils");
import Widget = require("./Widget");
import FileLink = require("./Print/FileLink");
import Extent = require("../geometry/Extent");
import Viewpoint = require("../Viewpoint");

import { accessibleHandler, join, renderable, jsxFactory } from "./support/widget";

import * as i18n from "dojo/i18n!./Print/nls/Print";

interface TemplateInfo {
  choiceList: string[];
  defaultValue: string;
}

interface TemplatesInfo {
  format: TemplateInfo;
  layout: TemplateInfo;
}

const CSS = {
  // base
  base: "esri-print esri-widget",
  // print-widget
  headerTitle: "esri-print__header-title",
  inputText: "esri-print__input-text",
  layoutTabList: "esri-print__layout-tab-list",
  layoutTab: "esri-print__layout-tab",
  layoutSection: "esri-print__layout-section",
  mapOnlySection: "esri-print__map-only-section",
  scaleInput: "esri-print__scale-input",
  // buttons
  advancedOptionsButton: "esri-print__advanced-options-button",
  advancedOptionsButtonContainer: "esri-print__advanced-options-button-container",
  advancedOptionsButtonTitle: "esri-print__advanced-options-button-title",
  advancedOptionsButtonIconOpened: "esri-print__advanced-options-button-icon--opened",
  advancedOptionsButtonIconClosed: "esri-print__advanced-options-button-icon--closed",
  advancedOptionsButtonIconClosed_RTL: "esri-print__advanced-options-button-icon--closed-rtl",
  refreshButton: "esri-print__refresh-button",
  swapButton: "esri-print__swap-button",
  linkButton: "esri-print__link-button",
  printButton: "esri-print__export-button",
  // containers
  formSectionContainer: "esri-print__form-section-container",
  advancedOptionsSection: "esri-print__advanced-options-section",
  advancedOptionsContainer: "esri-print__advanced-options-container",
  authorInfoContainer: "esri-print__author-info-container",
  copyrightInfoContainer: "esri-print__copyright-info-container",
  exportedFilesContainer: "esri-print__export-panel-container",
  exportedFilesTitle: "esri-print__export-title",
  exportedFile: "esri-print__exported-file",
  heightContainer: "esri-print__height-container",
  legendInfoContainer: "esri-print__legend-info-container",
  printWidgetContainer: "esri-print__container",
  panelContainer: "esri-print__panel-container",
  scaleInfoContainer: "esri-print__scale-info-container",
  scaleInputContainer: "esri-print__scale-input-container",
  sizeContainer: "esri-print__size-container",
  widthContainer: "esri-print__width-container",
  // common
  button: "esri-widget-button",
  disabled: "esri-disabled",
  hide: "esri-hidden",
  rotate: "esri-rotating",
  // icons
  iconCheckMark: "esri-icon-check-mark",
  iconDownload: "esri-icon-download",
  iconError: "esri-icon-error",
  iconPrinter: "esri-icon-printer",
  iconRightTriangleArrow: "esri-icon-right-triangle-arrow",
  iconLeftTriangleArrow: "esri-icon-left-triangle-arrow",
  iconDownArrow: "esri-icon-down-arrow",
  iconRefresh: "esri-icon-refresh",
  iconSpinner: "esri-icon-loading-indicator",
  iconSwap: "esri-icon-swap",
  iconLinked: "esri-icon-link-horizontal",
  iconUnlinked: "esri-icon-unlocked-link-horizontal"
};

@subclass("esri.widgets.Print")
class Print extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Print
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var print = new Print({
   *   view: view,
   *   printServiceUrl: "https://www.example.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
   * });
   */
  constructor() {
    super();
  }

  postInitialize() {
    this.viewModel.getPrintTemplatesFromService().then((templatesInfo: TemplatesInfo) => {
      this._templatesInfo = templatesInfo;

      this._selectedTemplate.layout = this._templatesInfo.layout.defaultValue;
      this._selectedTemplate.format = this._templatesInfo.format.defaultValue;

      if (this._selectedTemplate.layout === "MAP_ONLY") {
        this._layoutTabSelected = false;
      }
      this.scheduleRender();
    });

    watchUtils.init(this.viewModel.view, "scale", (newValue: number) => {
      if (!this._scaleEnabled) {
        this._scale = newValue;
        this.scheduleRender();
      }
    });

    this._width = this._selectedTemplate.exportOptions.width;
    this._height = this._selectedTemplate.exportOptions.height;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _attribution = true;

  private _author: string;

  private _copyright: string;

  private _exportedFileNameMap: HashMap<number> = {};

  private _height: number;

  private _layoutTabSelected = true;

  private _legend = true;

  private _advancedOptionsVisible = false;

  private _pendingExportScroll = false;

  private _scale: number;

  private _selectedTemplate: PrintTemplate = new PrintTemplate();

  private _scaleEnabled = false;

  private _title: string;

  private _templatesInfo: TemplatesInfo = null;

  private _width: number;

  private _extent: Extent = null;

  private _viewpoint: Viewpoint = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView}. Set this to link
   * the widget to a specific view.
   *
   * @todo REMOVE UNTIL SCENEVIEW SUPPORTS PRINTING or {@link module:esri/views/SceneView}
   *
   * @name view
   * @instance
   *
   * @type {module:esri/views/MapView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: View = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Print/PrintViewModel} class to access
   * all properties and methods on the widget.
   *
   * @type {module:esri/widgets/Print/PrintViewModel}
   * @autocast
   */
  @property({
    type: PrintViewModel
  })
  viewModel: PrintViewModel = new PrintViewModel();

  //----------------------------------
  //  printServiceUrl
  //----------------------------------

  /**
   * The URL of the REST endpoint of the Export Web Map Task.
   * @type {string}
   */

  @aliasOf("viewModel.printServiceUrl")
  printServiceUrl: string = null;

  //----------------------------------
  //  scale
  //----------------------------------

  @aliasOf("viewModel.scale")
  @renderable()
  scale: number;

  //----------------------------------
  //  exportedLinks
  //----------------------------------

  @aliasOf("viewModel.exportedLinks")
  @renderable()
  exportedLinks: Collection<FileLink>;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const titleSection = (
      <div key="title-section" class={CSS.formSectionContainer}>
        <label for={`${this.id}__title`}>{this._layoutTabSelected ? i18n.title : i18n.fileName}</label>
        <input id={`${this.id}__title`}
               name="title"
               type="text"
               tabIndex={0}
               placeholder={this._layoutTabSelected ? i18n.titlePlaceHolder : i18n.fileNamePlaceHolder}
               class={CSS.inputText}
               oninput={this._updateInputValue}
               bind={this}/>
      </div>
    );

    const fileFormatMenuItems = this.get<string[]>("_templatesInfo.format.choiceList") || [];
    const fileFormatOptions = fileFormatMenuItems.length > 0 ? (
      fileFormatMenuItems.map(fileFormatMenuItem => {
        return (
          <option key={fileFormatMenuItem}>{fileFormatMenuItem}</option>
        );
      })
    ) : (
      <option key="format-default-option">{i18n.formatDefaultOption}</option>
    );

    const fileFormatSection = (
      <div key="file-format-section" class={CSS.formSectionContainer}>
        <label for={`${this.id}__formats`}>{i18n.fileFormatTitle}</label>
        <select id={`${this.id}__formats`} onchange={this._updateFromOption} data-target-property="format" bind={this}>
          {fileFormatOptions}
        </select>
      </div>
    );

    const layoutMenuItems = this.get<string[]>("_templatesInfo.layout.choiceList") || [];
    const layoutOptions = layoutMenuItems.length > 0 ? (
      layoutMenuItems.map(layoutMenuItem => {
        return (
          <option key={layoutMenuItem} bind={this}>{layoutMenuItem}</option>
        );
      })
    ) : (
      <option key="layout-default-option">{i18n.layoutDefaultOption}</option>
    );

    const pageSetupSection = (
      <div key="page-setup-section" class={CSS.formSectionContainer}>
        <label for={`${this.id}__layouts`}>{i18n.layoutTitle}</label>
        <select id={`${this.id}__layouts`} onchange={this._updateFromOption} data-target-property="layout" bind={this}>
          {layoutOptions}
        </select>
      </div>
    );

    const advancedSection = this._advancedOptionsVisible ? (
      <div aria-labelledby={`${this.id}__advancedOptions`} class={CSS.advancedOptionsContainer}>
        <div class={join(CSS.scaleInfoContainer, CSS.formSectionContainer)}>
          <input id={`${this.id}__scaleEnabled`}
                 name="scaleEnabled"
                 type="checkbox"
                 tabIndex={0}
                 onchange={this._toggleInputValue}
                 bind={this}/>
          <label for={`${this.id}__scaleEnabled`}>{i18n.scale}</label>
          <div class={CSS.scaleInputContainer}>
            <input id={`${this.id}__scale`}
                   aria-label={i18n.scaleLabel}
                   type="number"
                   name="scale"
                   class={join(CSS.inputText, CSS.scaleInput)}
                   tabIndex={0}
                   oninput={this._updateInputValue}
                   disabled={!this._scaleEnabled}
                   value={`${this._scale}`}
                   bind={this}/>
            <button role="button"
                    aria-label={i18n.reset}
                    class={join(CSS.button, CSS.refreshButton, CSS.iconRefresh)}
                    tabIndex={0}
                    onclick={this._resetToCurrentScale}
                    bind={this}>
            </button>
          </div>
        </div>
        <div class={join(CSS.authorInfoContainer, CSS.formSectionContainer)}>
          <label for={`${this.id}__author`}>{i18n.author}</label>
          <input id={`${this.id}__author`}
                 type="text"
                 name="author"
                 class={CSS.inputText}
                 tabIndex={0}
                 oninput={this._updateInputValue}
                 bind={this}/>
        </div>
        <div class={join(CSS.copyrightInfoContainer, CSS.formSectionContainer)}>
          <label for={`${this.id}__copyright`}>{i18n.copyright}</label>
          <input id={`${this.id}__copyright`}
                 type="text"
                 name="copyright"
                 class={CSS.inputText}
                 tabIndex={0}
                 oninput={this._updateInputValue}
                 bind={this}/>
        </div>
        <div class={join(CSS.legendInfoContainer, CSS.formSectionContainer)}>
          <input id={`${this.id}__legend`}
                 type="checkbox"
                 name="legend"
                 tabIndex={0}
                 checked
                 onchange={this._toggleInputValue}
                 bind={this}/>
          <label for={`${this.id}__legend`}>{i18n.legend}</label>
        </div>
      </div>
    ) : null;

    const panel = this._layoutTabSelected ? (
      <section id={`${this.id}__layoutContent`} key="layout-content" aria-labelledby={`${this.id}__layoutTab`} class={CSS.layoutSection}>
        <div key="layout" class={CSS.panelContainer}>
          {titleSection}
          {pageSetupSection}
          {this._layoutTabSelected ? fileFormatSection : null}
        </div>

        <div key="advanced-section" class={join(CSS.panelContainer, CSS.advancedOptionsSection)}>
          <button id={`${this.id}__advancedOptions`}
                  aria-label={i18n.advancedOptions}
                  aria-expanded={this._advancedOptionsVisible ? "true" : "false"}
                  role="button"
                  class={CSS.advancedOptionsButton}
                  onclick={this._showAdvancedOptions}
                  bind={this}>
            <div class={CSS.advancedOptionsButtonContainer}>
              <span aria-hidden="true" class={join(CSS.iconRightTriangleArrow, CSS.advancedOptionsButtonIconClosed)}></span>
              <span aria-hidden="true" class={join(CSS.iconLeftTriangleArrow, CSS.advancedOptionsButtonIconClosed_RTL)}></span>
              <span aria-hidden="true" class={join(CSS.iconDownArrow, CSS.advancedOptionsButtonIconOpened)}></span>
              <span class={CSS.advancedOptionsButtonTitle}>{i18n.advancedOptions}</span>
            </div>
          </button>
          {advancedSection}
        </div>
      </section>
    ): (
      <section id={`${this.id}__mapOnlyContent`} aria-labelledby={`${this.id}__mapOnlyTab`} key="map-only-content" class={CSS.mapOnlySection}>
        <div key="mapOnly" class={CSS.panelContainer}>
          {titleSection}
          {this._layoutTabSelected ? null : fileFormatSection}
          <div class={join(CSS.sizeContainer, CSS.formSectionContainer)}>
            <div class={CSS.widthContainer}>
              <label for="width">{i18n.width}</label>
              <input id={`${this.id}__width`}
                     type="text"
                     name="width"
                     class={CSS.inputText}
                     onchange={this._updateInputValue}
                     value={`${this._width}`}
                     tabIndex={0}
                     bind={this}/>
            </div>
            <div class={CSS.heightContainer}>
              <label for="height">{i18n.height}</label>
              <input id={`${this.id}__height`}
                     type="text"
                     name="height"
                     class={CSS.inputText}
                     onchange={this._updateInputValue}
                     value={`${this._height}`}
                     tabIndex={0}
                     bind={this}/>
            </div>
            <button role="button"
                    aria-label={i18n.swap}
                    class={join(CSS.button, CSS.swapButton, CSS.iconSwap)}
                    onclick={this._switchInput}
                    tabIndex={0}
                    bind={this}>
            </button>
          </div>
          <div key="attribution-container" class={CSS.formSectionContainer}>
            <input id={`${this.id}__attribution`}
                   name="attribution"
                   type="checkbox"
                   onchange={this._toggleInputValue}
                   tabIndex={0}
                   checked
                   bind={this}/>
            <label for="attribution">{i18n.attribution}</label>
          </div>
        </div>
      </section>
    );

    const exportedLinksArray = this.exportedLinks.toArray();
    const exportButtonClasses = {
      [CSS.disabled]: !this._selectedTemplate.layout && !this._selectedTemplate.format
    };

    const printWidgetPanel = (
      <div id={`${this.id}__printContainer`} key="print-widget-panel">
        <div class={CSS.printWidgetContainer}>
          <header class={CSS.headerTitle}>{i18n.export}</header>

          <ul class={CSS.layoutTabList} role="tablist" onclick={this._toggleLayoutPanel} onkeydown={this._toggleLayoutPanel} bind={this}>
            <li id={`${this.id}__layoutTab`}
                data-tab-id="layoutTab"
                class={CSS.layoutTab}
                role="tab"
                tabIndex={0}
                aria-selected={`${this._layoutTabSelected}`}
                bind={this}>
              {i18n.layoutTab}
            </li>
            <li id={`${this.id}__mapOnlyTab`}
                data-tab-id="mapOnlyTab"
                class={CSS.layoutTab}
                role="tab"
                tabIndex={0}
                aria-selected={`${!this._layoutTabSelected}`}
                bind={this}>
              {i18n.mapOnlyTab}
            </li>
          </ul>

          {panel}

          <button aria-label={i18n.export}
                  role="button"
                  class={CSS.printButton}
                  tabIndex={0}
                  classes={exportButtonClasses}
                  onclick={this._handlePrintMap}
                  bind={this}>
            {i18n.export}
          </button>
          <div id={`${this.id}__exportedFilesContainer`} class={CSS.exportedFilesContainer} afterUpdate={this._scrollExportIntoView} bind={this}>
            <h2 class={CSS.exportedFilesTitle}>{i18n.exportText}</h2>
            {
              exportedLinksArray.length > 0 ? null : (
                <div key="exported-section-hints">
                  <div>{i18n.exportHint}</div>
                </div>
              )
            }

            {
              exportedLinksArray.map(exportedLink => {
                  const iconClasses = {
                    [CSS.iconSpinner]: exportedLink.state === "pending",
                    [CSS.rotate]: exportedLink.state === "pending",
                    [CSS.iconDownload]: exportedLink.state === "ready",
                    [CSS.iconError]: exportedLink.state === "error"
                  };

                  const linkClasses = {
                    [CSS.disabled]: exportedLink.state !== "ready"
                  };

                  const url = exportedLink.url === "" ? null : exportedLink.url;

                  return (
                    <div key={exportedLink.name} class={CSS.exportedFile}>
                      <a href={url} classes={iconClasses} tabIndex={0} download></a>
                      <a href={url} classes={linkClasses} tabIndex={0} target="_blank">{exportedLink.name}</a>
                    </div>
                  );
              })
            }
          </div>
        </div>

      </div>
    );

    return (
      <div class={CSS.base}>
        {printWidgetPanel}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _configurePrintTemplate(): void {
    this._selectedTemplate.attributionVisible = this._attribution;

    if (this._width) {
      this._selectedTemplate.exportOptions.width = this._width;
    }
    if (this._height) {
      this._selectedTemplate.exportOptions.height = this._height;
    }

    this._selectedTemplate.layoutOptions = {
      titleText: this._title || "",
      authorText: this._author || "",
      copyrightText: this._copyright || ""
    };

    if (!this._legend) {
      this._selectedTemplate.layoutOptions.legendLayers = [];
    }

    this.scale = this._scale;

    if (this._scaleEnabled) {
      this._extent = this.viewModel.getExtent(this._viewpoint, this.scale, this.viewModel.view.size);
    }
  }

  private _resetToCurrentScale(): void {
    this._scale = this.viewModel.view.scale;
  }

  private _updateInputValue(e: Event): void {
    const target = e.target as HTMLInputElement;
    const propName = `_${target.name}`;
    this[propName] = target.value;
  }

  private _handlePrintMap(): void {
    this._configurePrintTemplate();

    const titleText = this._title || i18n.untitled;
    const ext = this._selectedTemplate.format.toLowerCase().indexOf("png") > -1 ? "png" : this._selectedTemplate.format.toLowerCase();

    let exportedFileName = titleText + "." + ext;
    let formattedExportedFileName = exportedFileName;

    const hasSameFileName = this._exportedFileNameMap[exportedFileName] !== undefined;

    if (hasSameFileName) {
      this._exportedFileNameMap[exportedFileName]++;
      formattedExportedFileName = titleText + "(" + this._exportedFileNameMap[exportedFileName] + ")." + ext;
    }
    else {
      this._exportedFileNameMap[exportedFileName] = 0;
    }

    this.viewModel.addExportedLinks(formattedExportedFileName);

    const currentIndex = this.exportedLinks.length - 1;

    this._pendingExportScroll = true;

    let promise = this._extent != null ? this.viewModel.print(this._selectedTemplate, this._extent) : this.viewModel.print(this._selectedTemplate);
    promise.then((result: any) => {
      const currentExportedLink = this.exportedLinks.getItemAt(currentIndex);
      currentExportedLink.url = result.url;
      currentExportedLink.state = "ready";

      this.scheduleRender();
    }, () => {
      const currentExportedLink = this.exportedLinks.getItemAt(currentIndex);
      currentExportedLink.state = "error";
    });
  }

  private _updateFromOption(e: Event): void {
    const target = e.target as HTMLSelectElement;
    const selectOption = target.selectedOptions[0].value;
    const selectedTemplate = this._selectedTemplate;
    const targetProperty = target.getAttribute("data-target-property");

    selectedTemplate[targetProperty] = selectOption;
  }

  private _switchInput(): void {
    [this._width, this._height] = [this._height, this._width];
  }

  private _showAdvancedOptions(): void {
    this._advancedOptionsVisible = !this._advancedOptionsVisible;
  }

  private _scrollExportIntoView(element: Element) {
    if (this._pendingExportScroll) {
      this._pendingExportScroll = false;
      element.scrollIntoView();
    }
  }

  private _toggleInputValue(e: Event): void {
    const target = e.target as HTMLInputElement;
    const propName = "_" + target.name;

    this[propName] = target.checked;

    if (propName === "_scaleEnabled") {
      if (!this[propName]) {
        this._resetToCurrentScale();
        this._extent = null;
      }
      else {
        this._viewpoint = this.viewModel.view.viewpoint.clone();
      }
    }
  }

  private _resetInputValue(): void {
    this._title = "";
    this._selectedTemplate.format = this._templatesInfo.format.defaultValue;
  }

  @accessibleHandler()
  private _toggleLayoutPanel(e: Event): void {
    this._resetInputValue();

    const target = e.target as HTMLSelectElement;
    this._layoutTabSelected = target.getAttribute("data-tab-id") === "layoutTab";

    if (!this._layoutTabSelected) {
      this._selectedTemplate.layout = "MAP_ONLY";
    }
    else {
      const layoutChoices = this.get<string[]>("_templatesInfo.layout.choiceList");
      this._selectedTemplate.layout = layoutChoices && layoutChoices[0];
    }
  }

}

export = Print;
