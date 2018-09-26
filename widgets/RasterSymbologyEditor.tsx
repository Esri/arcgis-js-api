/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

/// <amd-dependency path="dgrid/OnDemandGrid" name="OnDemandGrid" />

/// <amd-dependency path="./ColorRampSelector" name="ColorRampSelector" />
/// <amd-dependency path="dijit/TitlePane" name="TitlePane" />

// dijit.form
import CheckBox = require("dijit/form/CheckBox");
import FilteringSelect = require("dijit/form/FilteringSelect");
import NumberSpinner = require("dijit/form/NumberSpinner");
import NumberTextBox = require("dijit/form/NumberTextBox");

// dojo
import domConstruct = require("dojo/dom-construct");
import * as i18n from "dojo/i18n!esri/widgets/RasterSymbologyEditor/nls/RasterSymbologyEditor";

// dojo.store
import Memory = require("dojo/store/Memory");

// esri.core
import lang = require("esri/core/lang");

// esri.core.accessorSupport
import { subclass, declared, property } from "esri/core/accessorSupport/decorators";

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.RasterSymbologyEditor
import RasterSymbologyEditorViewModel = require("esri/widgets/RasterSymbologyEditor/RasterSymbologyEditorViewModel");

// esri.widgets.support
import { renderable, tsx } from "esri/widgets/support/widget";

declare const ColorRampSelector: any;
declare const OnDemandGrid: any;
declare const TitlePane: any;

interface StretchType {
  id?: string;
  name: string;
  filterType: number;
  label: string;
}

const CSS = {
  base: "esri-raster-symbology-editor",
  filteringSelect: "esri-raster-symbology-editor__filtering-select",
  stretchColorSchemeRow: "esri-raster-symbology-editor__stretch-color-ramp-row",
  percentClipOptionsRow: "esri-raster-symbology-editor__percent-clip-row",
  stdDeviationOptionsRow: "esri-raster-symbology-editor__std-deviation-row",
  stretchOptionsBlock: "esri-raster-symbology-editor__stretch-options",
  stretchGammaBlock: "esri-raster-symbology-editor__stretch-gamma-row",
  stretchDraBlock: "esri-raster-symbology-editor__stretch-dra-row",
  displayHidden: "esri-raster-symbology-editor--hidden",
  displayBlock: "esri-raster-symbology-editor--block",
  table: "esri-raster-symbology-editor__table",
  thumbnailImage: "esri-raster-symbology-editor__thumbnail-image",
  bandCombinationPresetNaturalColorIcon:
    "esri-raster-symbology-editor__band-combination-icon--natural-color",
  bandCombinationPresetLanduseIcon: "esri-raster-symbology-editor__band-combination-icon--landuse",
  bandCombinationPresetLandWaterIcon:
    "esri-raster-symbology-editor__band-combination-icon--land-water",
  bandCombinationPresetVegetationIcon:
    "esri-raster-symbology-editor__band-combination-icon--vegetation",
  bandCombinationPresetShallowBathymetricIcon:
    "esri-raster-symbology-editor__band-combination-icon--bathymetric",
  bandCombinationPresetColorInfraredIcon:
    "esri-raster-symbology-editor__band-combination-icon--color-infrared",
  minMaxStretchTypeIcon: "esri-raster-symbology-editor__stretch-type-icon--min-max",
  noneStretchTypeIcon: "esri-raster-symbology-editor__stretch-type-icon--none",
  standardDeviationStretchTypeIcon:
    "esri-raster-symbology-editor__stretch-type-icon--standard-deviation",
  percentClipStretchTypeIcon: "esri-raster-symbology-editor__stretch-type-icon--percent-clip",
  rgbSymbologyTypeIcon: "esri-raster-symbology-editor__symbology-type-icon--rgb",
  stretchSymbologyTypeIcon: "esri-raster-symbology-editor__symbology-type-icon--stretch",
  uniqueValueSymbologyTypeIcon: "esri-raster-symbology-editor__symbology-type-icon--unique-value",
  discreteSymbologyTypeIcon: "esri-raster-symbology-editor__symbology-type-icon--discrete",
  menuItemTd: "esri-raster-symbology-editor__menu-item-td",
  dgridSymbolCell: "esri-raster-symbology-editor__dgrid-symbol-cell",
  menuItemText: "esri-raster-symbology-editor__menu-item-text",
  checkbox: "esri-raster-symbology-editor__checkbox"
};

@subclass("esri.widgets.RasterSymbologyEditor")
class RasterSymbologyEditor extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  postInitialize(params?: any) {
    this.defaultParams = this.viewModel.getDefaultRenderParameters();
    this._createUIComponents();
  }

  destroy() {
    this._components.forEach((item) => {
      if (item) {
        item.destroy();
        item = null;
      }
    });
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  layer
  //----------------------------------

  @property()
  @renderable()
  layer: any = null;

  @property()
  defaultParams: any = null;

  @property({
    type: RasterSymbologyEditorViewModel
  })
  viewModel: RasterSymbologyEditorViewModel = new RasterSymbologyEditorViewModel();

  @property()
  @renderable()
  stretchType: number = 0;

  @property()
  @renderable()
  symbologyType: string = "";

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _components: any[] = [];

  private _symbologySelect: any = null;

  private _discreteColorSchemeSelect: any;

  private _discreteNoDataInput: NumberTextBox;

  private _discreteNColorsInput: NumberTextBox;

  private _colorSchemeTitlePane: any;

  private _noDataTitlePane: any;

  private _bandSelect: any;

  private _stretchColorRampSelect: any;

  private _noDataInput: NumberTextBox;

  private _stretchTypeSelect: any;

  private _stretchTitlePane: any;

  private _minPercentInput: NumberTextBox;

  private _maxPercentInput: NumberTextBox;

  private _gammaInput: NumberSpinner;

  private _standardDeviationsInput: NumberTextBox;

  private _stretchStatisticsCheckBox: CheckBox;

  private _supportsBandPresets: boolean = false;

  private _bandCombinationTitlePane: any;

  private _bandCombinationPresetSelect: any;

  private _redBandSelect: any;

  private _greenBandSelect: any;

  private _blueBandSelect: any;

  private _uniqueValueFieldSelect: any;

  private _uniqueValueColorSchemeSelect: any;

  private _uniqueValueNoDataInput: NumberTextBox;

  private _uniqueValuesGrid: any;

  private _uniqueValuesSymbolData: any;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render() {
    const { symbologyType, stretchType } = this;
    const { stretch, rgb, uniqueValue, discrete } = RasterSymbologyEditorViewModel.SymbologyTypes;

    const isStretchColorRampApplicable = this.viewModel.isStretchColorRampApplicable(stretchType),
      stretchTypePercentClipId = this.viewModel.getStretchFilterType(
        RasterSymbologyEditorViewModel.StretchTypeNames.percentClip
      ),
      stretchTypeNoneId = this.viewModel.getStretchFilterType(
        RasterSymbologyEditorViewModel.StretchTypeNames.none
      ),
      stretchTypeStandardDeviationsId = this.viewModel.getStretchFilterType(
        RasterSymbologyEditorViewModel.StretchTypeNames.standardDeviation
      );

    const symbologyTypeSegment = (
      <div>
        <div afterCreate={this._placeSymbologySelect} bind={this} />
      </div>
    );

    const stretchColorSchemeBlock = (
      <div
        class={this.classes({
          [CSS.displayBlock]: symbologyType === stretch,
          [CSS.displayHidden]: symbologyType !== stretch
        })}
      >
        <div afterCreate={this._createColorSchemeTitlePane} bind={this}>
          <table class={CSS.table}>
            <tr>
              <td>
                <label>{i18n.bandSelectionLabel}</label>
              </td>
              <td>
                <div afterCreate={this._placeBandSelect} bind={this} />
              </td>
            </tr>
            <tr
              class={this.classes({
                [CSS.stretchColorSchemeRow]: isStretchColorRampApplicable,
                [CSS.displayHidden]: !isStretchColorRampApplicable
              })}
            >
              <td>
                <label>{i18n.colorSchemeLabel}</label>
              </td>
              <td>
                <div afterCreate={this._placeColorRampSelect} bind={this} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );

    const backgroundBlock = (
      <div
        class={this.classes({
          [CSS.displayBlock]: symbologyType === stretch || symbologyType === rgb,
          [CSS.displayHidden]: symbologyType !== stretch
        })}
      >
        <div afterCreate={this._createNoDataTitlePane} bind={this}>
          <table class={CSS.table}>
            <tr>
              <td>
                <label>{i18n.noDataLabel}</label>
              </td>
              <td>
                <div afterCreate={this._placeNoDataInput} bind={this} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );

    const stretchTypeSelect = <div afterCreate={this._placeStretchTypeSelect} bind={this} />;

    const percentClipStretchOptions = (
      <tr
        class={this.classes({
          [CSS.percentClipOptionsRow]: stretchType === stretchTypePercentClipId,
          [CSS.displayHidden]: stretchType !== stretchTypePercentClipId
        })}
      >
        <td>
          <label>{i18n.minLabel}</label>
        </td>
        <td>
          <div afterCreate={this._placeMinPercentInput} bind={this} />
        </td>
        <td>
          <label>{i18n.maxLabel}</label>
        </td>
        <td>
          <div afterCreate={this._placeMaxPercentInput} bind={this} />
        </td>
      </tr>
    );

    const stdDeviationsOptions = (
      <tr
        class={this.classes({
          [CSS.stdDeviationOptionsRow]: stretchType === stretchTypeStandardDeviationsId,
          [CSS.displayHidden]: stretchType !== stretchTypeStandardDeviationsId
        })}
      >
        <td colSpan={2}>
          <label>{i18n.nStdDeviationsLabel}</label>
        </td>
        <td colSpan={2}>
          <div afterCreate={this._placeStandardDeviationsInput} bind={this} />
        </td>
      </tr>
    );

    const stretchOptionsBlock = (
      <div
        class={this.classes({
          [CSS.displayBlock]: symbologyType === stretch || symbologyType === rgb,
          [CSS.displayHidden]: symbologyType !== stretch
        })}
      >
        <div afterCreate={this._createStretchTitlePane} bind={this}>
          <table class={CSS.table}>
            <tr class={CSS.stretchOptionsBlock}>
              <td colSpan={2}>
                <label>{i18n.stretchTypeLabel}</label>
              </td>
              <td colSpan={2}>{stretchTypeSelect}</td>
            </tr>
            {percentClipStretchOptions}
            {stdDeviationsOptions}
            <tr
              class={this.classes({
                [CSS.stretchGammaBlock]: stretchType !== stretchTypeNoneId,
                [CSS.displayHidden]: stretchType === stretchTypeNoneId
              })}
            >
              <td colSpan={2}>
                <label>{i18n.gammaLabel}</label>
              </td>
              <td colSpan={2}>
                <div afterCreate={this._placeGammaInput} bind={this} />
              </td>
            </tr>
            <tr
              class={this.classes({
                [CSS.stretchDraBlock]: stretchType !== stretchTypeNoneId,
                [CSS.displayHidden]: stretchType === stretchTypeNoneId
              })}
            >
              <td colSpan={4}>
                <div
                  class={CSS.checkbox}
                  afterCreate={this._placeStretchStatisticsCheckbox}
                  bind={this}
                />
                <label>{i18n.draStatisticsTitle}</label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );

    const bandCombinationBlock = (
      <div
        class={this.classes({
          [CSS.displayBlock]: symbologyType === rgb,
          [CSS.displayHidden]: symbologyType !== rgb
        })}
      >
        <div afterCreate={this._createBandCombinationTitlePane} bind={this}>
          <table class={CSS.table}>
            <tr
              class={this.classes({
                [CSS.stdDeviationOptionsRow]: this._supportsBandPresets,
                [CSS.displayHidden]: !this._supportsBandPresets
              })}
            >
              <td>
                <label>{i18n.bandCombinationPresetLabel}</label>
              </td>
              <td>
                <div afterCreate={this._placeBandCombinationPresetSelect} bind={this} />
              </td>
            </tr>
            <tr>
              <td>
                <label>{i18n.redBandTitle}</label>
              </td>
              <td>
                <div afterCreate={this._placeRedBandSelect} bind={this} />
              </td>
            </tr>
            <tr>
              <td>
                <label>{i18n.greenBandTitle}</label>
              </td>
              <td>
                <div afterCreate={this._placeGreenBandSelect} bind={this} />
              </td>
            </tr>
            <tr>
              <td>
                <label>{i18n.blueBandTitle}</label>
              </td>
              <td>
                <div afterCreate={this._placeBlueBandSelect} bind={this} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );

    const uniqueValueBlock = (
      <div
        class={this.classes({
          [CSS.displayBlock]: symbologyType === uniqueValue,
          [CSS.displayHidden]: symbologyType !== uniqueValue
        })}
      >
        <table class={CSS.table}>
          <tr>
            <td>
              <label>{i18n.valueFieldTitle}</label>
            </td>
            <td>
              <div afterCreate={this._placeUniqueValueFieldSelect} bind={this} />
            </td>
          </tr>
          <tr>
            <td>
              <label>{i18n.colorSchemeLabel}</label>
            </td>
            <td>
              <div afterCreate={this._placeUniqueValueColorSchemeSelect} bind={this} />
            </td>
          </tr>
          <tr>
            <td>
              <label>{i18n.noDataLabel}</label>
            </td>
            <td>
              <div afterCreate={this._placeUniqueValueNoDataInput} bind={this} />
            </td>
          </tr>
        </table>
        <div afterCreate={this._placeUniqueValuesGrid} bind={this} />
      </div>
    );

    const discreteBlock = (
      <div
        class={this.classes({
          [CSS.displayBlock]: symbologyType === discrete,
          [CSS.displayHidden]: symbologyType !== discrete
        })}
      >
        <table class={CSS.table}>
          <tr>
            <td>
              <label>{i18n.colorSchemeLabel}</label>
            </td>
            <td>
              <div afterCreate={this._placeDiscreteColorSchemeSelect} bind={this} />
            </td>
          </tr>
          <tr>
            <td>
              <label>{i18n.numberOfColors}</label>
            </td>
            <td>
              <div afterCreate={this._placeDiscreteNColorsInput} bind={this} />
            </td>
          </tr>
          <tr>
            <td>
              <label>{i18n.noDataLabel}</label>
            </td>
            <td>
              <div afterCreate={this._placeDiscreteNoDataInput} bind={this} />
            </td>
          </tr>
        </table>
      </div>
    );

    return (
      <div>
        {symbologyTypeSegment}
        {stretchColorSchemeBlock}
        {bandCombinationBlock}
        {backgroundBlock}
        {stretchOptionsBlock}
        {uniqueValueBlock}
        {discreteBlock}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _createUIComponents(): void {
    this._createSymbologySelect();
    this._createStretchStatisticsCheckbox();
    this._createBandSelect();
    this._createStretchTypeSelect();
    this._createColorRampSelect();
    this._createBandCombinationPresetSelect();
    this._createRedBandSelect();
    this._createGreenBandSelect();
    this._createBlueBandSelect();
    this._createNoDataInput();
    this._createMinPercentInput();
    this._createMaxPercentInput();
    this._createStandardDeviationsInput();
    this._createGammaInput();
    this._createUniqueValueFieldSelect();
    this._createUniqueValueColorSchemeSelect();
    this._createUniqueValueNoDataInput();
    this._createUniqueValuesGrid();
    this._createDiscreteColorSchemeSelect();
    this._createDiscreteNoDataInput();
    this._createDiscreteNColorsInput();
  }

  private _createSymbologySelect(): void {
    this._symbologySelect = new FilteringSelect({
      store: this._getSymbologyStore(),
      class: CSS.filteringSelect,
      labelAttr: "label",
      labelType: "html",
      onChange: (newValue: string) => this._updateSymbologyType(newValue),
      value: this.defaultParams.symbologyType
    });
    this._symbologySelect.startup();
    this._components.push(this._symbologySelect);
  }

  private _createStretchStatisticsCheckbox(): void {
    this._stretchStatisticsCheckBox = new CheckBox({
      onChange: () => this._updateSymbology()
    });
    this._stretchStatisticsCheckBox.startup();
    this._components.push(this._stretchStatisticsCheckBox);
  }

  private _createColorSchemeTitlePane(node: Element): void {
    this._colorSchemeTitlePane = new TitlePane(
      {
        title: i18n.colorRampTitle
      },
      node
    );
    this._colorSchemeTitlePane.startup();
    this._components.push(this._colorSchemeTitlePane);
  }

  private _createNoDataTitlePane(node: Element): void {
    this._noDataTitlePane = new TitlePane(
      {
        title: i18n.backgroundTitle
      },
      node
    );
    this._noDataTitlePane.startup();
    this._components.push(this._noDataTitlePane);
  }

  private _createStretchTitlePane(node: Element): void {
    this._stretchTitlePane = new TitlePane(
      {
        title: i18n.stretchTitle
      },
      node
    );
    this._stretchTitlePane.startup();
    this._components.push(this._stretchTitlePane);
  }

  private _createBandCombinationTitlePane(node: Element): void {
    this._bandCombinationTitlePane = new TitlePane(
      {
        title: i18n.bandCombinationTitle
      },
      node
    );
    this._bandCombinationTitlePane.startup();
    this._components.push(this._bandCombinationTitlePane);
  }

  private _createBandSelect(): void {
    this._bandSelect = new FilteringSelect({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology()
    });
    this._bandSelect.startup();
    this._populateBandSelect();
    this._components.push(this._bandSelect);
  }

  private _createStretchTypeSelect(): void {
    this._stretchTypeSelect = new FilteringSelect({
      class: CSS.filteringSelect,
      onChange: (newStretchType: number) => this._onStretchTypeChange(newStretchType),
      labelAttr: "label",
      labelType: "html"
    });
    this._stretchTypeSelect.startup();
    this._populateStretchTypeSelect();
    this._components.push(this._stretchTypeSelect);
  }

  private _createColorRampSelect(): void {
    this._stretchColorRampSelect = new ColorRampSelector({
      class: CSS.filteringSelect,
      maxHeight: 300
    });
    this._stretchColorRampSelect.on("change", () => this._updateSymbology());
    this._stretchColorRampSelect.startup();
    this._stretchColorRampSelect.set("value", this.defaultParams.colorRamp);
    this._components.push(this._stretchColorRampSelect);
  }

  private _createBandCombinationPresetSelect(): void {
    this._bandCombinationPresetSelect = new FilteringSelect({
      class: CSS.filteringSelect,
      onChange: (newBandCombinationId: any) => this._updateBandCombination(newBandCombinationId),
      labelType: "html",
      labelAttr: "label",
      maxHeight: 350
    });
    this._bandCombinationPresetSelect.startup();
    this._components.push(this._bandCombinationPresetSelect);
  }

  private _createRedBandSelect(): void {
    this._redBandSelect = new FilteringSelect({
      class: CSS.filteringSelect,
      onChange: () => this._bandCombinationChanged()
    });
    this._redBandSelect.startup();
    this._populateBandLists();
    this._components.push(this._redBandSelect);
  }

  private _createGreenBandSelect(): void {
    this._greenBandSelect = new FilteringSelect({
      class: CSS.filteringSelect,
      onChange: () => this._bandCombinationChanged()
    });
    this._greenBandSelect.startup();
    this._populateBandLists();
    this._components.push(this._greenBandSelect);
  }

  private _createBlueBandSelect(): void {
    this._blueBandSelect = new FilteringSelect({
      class: CSS.filteringSelect,
      onChange: () => this._bandCombinationChanged()
    });
    this._blueBandSelect.startup();
    this._populateBandLists();
    this._components.push(this._blueBandSelect);
  }

  private _createNoDataInput(): void {
    this._noDataInput = new NumberTextBox({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology()
    });
    this._noDataInput.startup();
    this._components.push(this._noDataInput);
  }

  private _createMinPercentInput(): void {
    this._minPercentInput = new NumberTextBox({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology(),
      value: this.defaultParams.minPercent
    });
    this._minPercentInput.startup();
    this._components.push(this._minPercentInput);
  }

  private _createMaxPercentInput(): void {
    this._maxPercentInput = new NumberTextBox({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology(),
      value: this.defaultParams.maxPercent
    });
    this._maxPercentInput.startup();
    this._components.push(this._maxPercentInput);
  }

  private _createStandardDeviationsInput(): void {
    this._standardDeviationsInput = new NumberTextBox({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology(),
      value: this.defaultParams.numberOfStandardDeviations
    });
    this._standardDeviationsInput.startup();
    this._components.push(this._standardDeviationsInput);
  }

  private _createGammaInput(): void {
    this._gammaInput = new NumberSpinner({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology(),
      value: this.defaultParams.gamma,
      smallDelta: 0.1
    });
    this._gammaInput.startup();
    this._components.push(this._gammaInput);
  }

  private _createUniqueValueFieldSelect(): void {
    this._uniqueValueFieldSelect = new FilteringSelect({
      class: CSS.filteringSelect,
      onChange: () => this._updateUniqueValueGrid()
    });
    this._populateUniqueValueFieldSelect();
    this._components.push(this._uniqueValueFieldSelect);
  }

  private _createUniqueValueColorSchemeSelect(): void {
    this._uniqueValueColorSchemeSelect = new ColorRampSelector({
      class: CSS.filteringSelect,
      maxHeight: 300
    });
    this._uniqueValueColorSchemeSelect.on("change", () => this._updateUniqueValueGrid());
    this._uniqueValueColorSchemeSelect.startup();
    if (this.defaultParams.uniqueValuesColorRamp) {
      this.defaultParams.uniqueValuesColorRamp.name = i18n.uniqueValuesColorRampTitle;
      this._uniqueValueColorSchemeSelect.addColorRamp(
        this.defaultParams.uniqueValuesColorRamp,
        true
      );
    }
    this._components.push(this._uniqueValueColorSchemeSelect);
  }

  private _createUniqueValueNoDataInput(): void {
    this._uniqueValueNoDataInput = new NumberTextBox({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology()
    });
    this._components.push(this._uniqueValueNoDataInput);
    this._uniqueValueNoDataInput.startup();
  }

  private _createDiscreteColorSchemeSelect(): void {
    this._discreteColorSchemeSelect = new ColorRampSelector({
      class: CSS.filteringSelect,
      maxHeight: 300
    });
    this._discreteColorSchemeSelect.on("change", () => {
      this._updateSymbology();
    });
    this._discreteColorSchemeSelect.startup();
    this._discreteColorSchemeSelect.set("value", this.defaultParams.colorRamp);
    this._components.push(this._discreteColorSchemeSelect);
  }

  private _createDiscreteNoDataInput(): void {
    this._discreteNoDataInput = new NumberTextBox({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology()
    });
    this._discreteNoDataInput.startup();
    this._components.push(this._discreteNoDataInput);
  }

  private _createDiscreteNColorsInput(): void {
    this._discreteNColorsInput = new NumberTextBox({
      class: CSS.filteringSelect,
      onChange: () => this._updateSymbology(),
      value: this.defaultParams.discreteNColors
    });
    this._discreteNColorsInput.startup();
    this._components.push(this._discreteNColorsInput);
  }

  private _createUniqueValuesGrid(): void {
    this._uniqueValuesGrid = new OnDemandGrid({
      columns: [
        {
          field: "esriRasterSymbologyEditorUniqueValueSymbol",
          renderCell: (object: any, value: any, node: Element) => {
            node.innerHTML = `<div class = ${CSS.dgridSymbolCell}
          style = "background: rgb( ${object.esriRasterSymbologyEditorUniqueValueSymbol.r},
          ${object.esriRasterSymbologyEditorUniqueValueSymbol.g},
          ${object.esriRasterSymbologyEditorUniqueValueSymbol.b}");></div>`;
          },
          label: i18n.symbolLabel
        },
        {
          field: "esriRasterSymbologyEditorUniqueValueValue",
          label: i18n.valueLabel
        }
      ]
    });
    this._uniqueValuesGrid.startup();
    this._components.push(this._uniqueValuesGrid);
  }

  private _placeSymbologySelect(node: Element): void {
    if (this._symbologySelect) {
      domConstruct.place(this._symbologySelect.domNode, node);
    }
  }

  private _placeStretchStatisticsCheckbox(node: Element): void {
    if (this._stretchStatisticsCheckBox) {
      domConstruct.place(this._stretchStatisticsCheckBox.domNode, node);
    }
  }

  private _placeBandSelect(node: Element): void {
    if (this._bandSelect) {
      domConstruct.place(this._bandSelect.domNode, node);
    }
  }

  private _placeStretchTypeSelect(node: Element): void {
    if (this._stretchTypeSelect) {
      domConstruct.place(this._stretchTypeSelect.domNode, node);
    }
  }

  private _placeColorRampSelect(node: Element): void {
    if (this._stretchColorRampSelect) {
      domConstruct.place(this._stretchColorRampSelect.domNode, node);
    }
  }

  private _placeBandCombinationPresetSelect(node: Element): void {
    if (this._bandCombinationPresetSelect) {
      domConstruct.place(this._bandCombinationPresetSelect.domNode, node);
    }
  }

  private _placeRedBandSelect(node: Element): void {
    if (this._redBandSelect) {
      domConstruct.place(this._redBandSelect.domNode, node);
    }
  }

  private _placeGreenBandSelect(node: Element): void {
    if (this._colorSchemeTitlePane) {
      domConstruct.place(this._greenBandSelect.domNode, node);
    }
  }

  private _placeBlueBandSelect(node: Element): void {
    if (this._blueBandSelect) {
      domConstruct.place(this._blueBandSelect.domNode, node);
    }
  }

  private _placeNoDataInput(node: Element): void {
    if (this._noDataInput) {
      domConstruct.place(this._noDataInput.domNode, node);
    }
  }

  private _placeMinPercentInput(node: Element): void {
    if (this._minPercentInput) {
      domConstruct.place(this._minPercentInput.domNode, node);
    }
  }

  private _placeMaxPercentInput(node: Element): void {
    if (this._maxPercentInput) {
      domConstruct.place(this._maxPercentInput.domNode, node);
    }
  }

  private _placeStandardDeviationsInput(node: Element): void {
    if (this._standardDeviationsInput) {
      domConstruct.place(this._standardDeviationsInput.domNode, node);
    }
  }

  private _placeGammaInput(node: Element): void {
    if (this._gammaInput) {
      domConstruct.place(this._gammaInput.domNode, node);
    }
  }

  private _placeUniqueValueFieldSelect(node: Element): void {
    if (this._uniqueValueFieldSelect) {
      domConstruct.place(this._uniqueValueFieldSelect.domNode, node);
    }
  }

  private _placeUniqueValueColorSchemeSelect(node: Element): void {
    if (this._uniqueValueColorSchemeSelect) {
      domConstruct.place(this._uniqueValueColorSchemeSelect.domNode, node);
    }
  }

  private _placeUniqueValueNoDataInput(node: Element): void {
    if (this._uniqueValueNoDataInput) {
      domConstruct.place(this._uniqueValueNoDataInput.domNode, node);
    }
  }

  private _placeUniqueValuesGrid(node: Element): void {
    if (this._uniqueValuesGrid) {
      domConstruct.place(this._uniqueValuesGrid.domNode, node);
    }
  }

  private _placeDiscreteColorSchemeSelect(node: Element): void {
    if (this._discreteColorSchemeSelect) {
      domConstruct.place(this._discreteColorSchemeSelect.domNode, node);
    }
  }

  private _placeDiscreteNoDataInput(node: Element): void {
    if (this._discreteNoDataInput) {
      domConstruct.place(this._discreteNoDataInput.domNode, node);
    }
  }

  private _placeDiscreteNColorsInput(node: Element): void {
    if (this._discreteNColorsInput) {
      domConstruct.place(this._discreteNColorsInput.domNode, node);
    }
  }

  private _bandCombinationChanged(): void {
    if (
      this._redBandSelect &&
      this._redBandSelect.validate() &&
      this._greenBandSelect &&
      this._greenBandSelect.validate() &&
      this._blueBandSelect &&
      this._blueBandSelect.validate()
    ) {
      this._updateSymbology();
    }
  }

  private _updateBandCombination(bandCombinationId: any): void {
    if (bandCombinationId === "custom") {
      this._redBandSelect.set("disabled", false);
      this._greenBandSelect.set("disabled", false);
      this._blueBandSelect.set("disabled", false);
      return;
    }

    const presets = this._bandCombinationPresetSelect.store.data;
    let bandCombination: any;

    presets.some((preset: any) => {
      if (bandCombinationId === preset.id) {
        bandCombination = preset.combination;
      }
    });

    if (bandCombination) {
      this._redBandSelect.set({
        value: bandCombination[0] - 1,
        disabled: true
      });
      this._greenBandSelect.set({
        value: bandCombination[1] - 1,
        disabled: true
      });
      this._blueBandSelect.set({
        value: bandCombination[2] - 1,
        disabled: true
      });
      this._updateSymbology();
    }
  }

  private _updateSymbologyType(value: string): void {
    this.symbologyType = value;
    this._updateSymbology();
  }

  private _updateUniqueValueGrid(): void {
    const symbolData = this.viewModel.getUniqueValueGridData(
      this._uniqueValueColorSchemeSelect.colorRamp,
      this._uniqueValueFieldSelect.value
    );
    if (!symbolData) {
      return;
    }
    this._uniqueValuesGrid.refresh();
    this._uniqueValuesGrid.renderArray(symbolData);
    this._uniqueValuesSymbolData = symbolData;

    this._updateSymbology();
  }

  private _populateUniqueValueFieldSelect(): void {
    const uniqueValueFields = this.viewModel.getUniqueValueFields(),
      fieldsStore = new Memory({
        data: uniqueValueFields,
        idProperty: "name"
      });
    this._uniqueValueFieldSelect.set({
      store: fieldsStore,
      labelAttr: "alias",
      value: this.defaultParams.uniqueValuesField
    });
  }

  private _populateStretchTypeSelect(): void {
    let stretchTypeDescription: string, stretchTypeTitle: string, imgClass: string;

    const stretchTypes = lang.clone(this.viewModel.stretchTypes);

    stretchTypes.forEach((stretchType: StretchType) => {
      stretchTypeDescription =
        i18n[`${stretchType.name}StretchTypeDescription`] ||
        i18n[`${stretchType.name}TypeDescription`];
      imgClass = CSS[`${stretchType.name}StretchTypeIcon`];
      stretchTypeTitle = i18n[`${stretchType.name}StretchTitle`];
      stretchType.id = stretchType.filterType.toString();
      stretchType.label = `<html><body><section>
        <h4>${stretchTypeTitle}</h4>
        <table><tr>
          <td class=${CSS.menuItemTd}>
            <img class="${imgClass} ${CSS.thumbnailImage}" />
          </td>
          <td class=${CSS.menuItemTd}>
            <p class=${CSS.menuItemText}><i>${stretchTypeDescription}</i></p>
          </td>
          </tr></table>
        </section></body></html>`;
      stretchType.name = stretchTypeTitle;
    });
    this._stretchTypeSelect.set({
      store: new Memory({ data: stretchTypes }),
      value: this.defaultParams.stretchType.toString(),
      labelAttr: "label",
      labelType: "html"
    });
  }

  private _populateBandSelect(): any {
    let store: any;
    this.viewModel.getBandData().then((bandData: any) => {
      store = new Memory({
        data: bandData.lists[0],
        idProperty: "index"
      });
      this._bandSelect.set("store", store);
      if (bandData.lists[0].length === 1) {
        this._bandSelect.set({
          value: bandData.lists[0][0].index,
          disabled: true
        });
      }
    });
  }

  private _populateBandLists(): any {
    if (
      !(
        this._redBandSelect &&
        this._greenBandSelect &&
        this._blueBandSelect &&
        this._bandCombinationPresetSelect
      )
    ) {
      return;
    }
    const bandSelects = [this._redBandSelect, this._greenBandSelect, this._blueBandSelect],
      presets: any[] = [];

    let key: string,
      selectedIdx: number,
      store: any,
      presetStore: any,
      bandCombinationTitle: string,
      bandCombinationDescription: string,
      imgClass: string;

    this.viewModel.getBandData().then((bandData: any) => {
      bandData.lists.forEach((list: any, idx: number) => {
        list.some((listItem: any) => {
          if (listItem.selected) {
            selectedIdx = listItem.index;
            return true;
          }
        });
        store = new Memory({
          data: list,
          idProperty: "index"
        });
        bandSelects[idx].set({
          store: store,
          value: selectedIdx
        });
      });

      if (bandData.presets && bandData.presets.length) {
        this._supportsBandPresets = true;
        bandData.presets.forEach((preset: any, idx: number) => {
          key = Object.keys(preset)[0];
          bandCombinationTitle = i18n[`bandComboName${key}`];
          bandCombinationDescription = i18n[`bandComboDesc${key}`];
          imgClass = CSS[`bandCombinationPreset${key}Icon`];

          presets.push({
            name: i18n["bandComboName" + key],
            label: `<html><body><section>
              <h4>${bandCombinationTitle}</h4>
              <table><tr>
                <td class=${CSS.menuItemTd}>
                  <img class= "${imgClass} ${CSS.thumbnailImage}" />
                </td>
                <td class=${CSS.menuItemTd}>
                  <p class=${CSS.menuItemText}><i>${bandCombinationDescription}</i></p>
                </td>
              </tr></table>
            </section></body></html>`,
            combination: preset[key],
            id: key
          });
        });

        presets.push({
          name: i18n["bandComboNameCustom"],
          combination: null,
          id: "custom",
          label: `<html><body><section>
            <h4> ${i18n["bandComboNameCustom"]}:</h4>
            <table cellspacing='5'>
              <tr>
                <td class=${CSS.menuItemTd}>
                  <p class=${CSS.menuItemText}><i>${i18n["bandComboNameCustom"]}</i></p>
                </td>
              </tr>
            </table>
          </section></body></html>`
        });

        presetStore = new Memory({
          data: presets
        });

        this._bandCombinationPresetSelect.set({
          store: presetStore,
          value: "custom"
        });
      } else {
        this._supportsBandPresets = false;
      }

      this.scheduleRender();
    });
  }

  private _onStretchTypeChange(newStretchType: number): void {
    let selectedStretchType: number;
    this._stretchTypeSelect.store.data.forEach((stretchType: any) => {
      if (stretchType.id === newStretchType) {
        selectedStretchType = stretchType.filterType;
      }
    });
    this.stretchType = selectedStretchType;
    this.scheduleRender();
    this._updateSymbology();
  }

  private _updateSymbology(): void {
    if (
      !(
        this._symbologySelect &&
        this._stretchTypeSelect &&
        this._stretchColorRampSelect &&
        this._noDataInput &&
        this._minPercentInput &&
        this._maxPercentInput &&
        this._stretchTypeSelect &&
        this._gammaInput &&
        this._standardDeviationsInput
      )
    ) {
      return;
    }
    const props = this._getProperties();
    this.viewModel.updateRendering(props);
  }

  private _getProperties(): any {
    const renderParameters: any = {};
    renderParameters.symbologyType = this._symbologySelect.value;
    renderParameters.stretchType = this.stretchType;
    renderParameters.minPercent = this._minPercentInput.value;
    renderParameters.maxPercent = this._maxPercentInput.value;
    renderParameters.numberOfStandardDeviations = this._standardDeviationsInput.value;
    if (this.symbologyType === RasterSymbologyEditorViewModel.SymbologyTypes.uniqueValue) {
      renderParameters.noData = this._uniqueValueNoDataInput.value;
    } else if (this.symbologyType === RasterSymbologyEditorViewModel.SymbologyTypes.discrete) {
      renderParameters.noData = this._discreteNoDataInput.value;
    } else {
      renderParameters.noData = this._noDataInput.value;
    }
    renderParameters.gamma = this._gammaInput.value;
    renderParameters.colorRampName = this._stretchColorRampSelect.colorRampName;
    renderParameters.dra = this._stretchStatisticsCheckBox.checked;
    renderParameters.selectedBand = this._bandSelect.value;
    renderParameters.bandIds = [
      this._redBandSelect.value,
      this._greenBandSelect.value,
      this._blueBandSelect.value
    ];
    renderParameters.uniqueValuesColorRamp = this._uniqueValueColorSchemeSelect.colorRamp;
    renderParameters.uniqueValuesSymbolData = this._uniqueValuesSymbolData;
    renderParameters.discreteColorRamp = this._discreteColorSchemeSelect.colorRamp;
    renderParameters.discreteNColors = this._discreteNColorsInput.value;
    return renderParameters;
  }

  private _getSymbologyStore(): any {
    const symbologyTypes = this.viewModel.getSymbologyTypes(),
      symbologyTypeData: any[] = [];

    let symbologyTypeTitle: string, symbologyTypeDescription: string, imgClass: string;

    symbologyTypes.forEach((symbologyType: any) => {
      symbologyTypeTitle = i18n[`${symbologyType}Title`];
      symbologyTypeDescription =
        i18n[`${symbologyType}Description`] || i18n[`${symbologyType}Title`];
      imgClass = CSS[`${symbologyType}SymbologyTypeIcon`];
      symbologyTypeData.push({
        id: symbologyType,
        name: symbologyTypeTitle,
        label: `<html><body><section>
          <h4>${symbologyTypeTitle}</h4>
          <table><tr>
            <td class=${CSS.menuItemTd}><img class= ${imgClass} /></td>
            <td class=${CSS.menuItemTd}>
              <p class=${CSS.menuItemText}><i>${symbologyTypeDescription}</i></p>
            </td>
          </tr></table>
        </section></body></html>`
      });
    }, this);

    return new Memory({
      data: symbologyTypeData
    });
  }
}

export = RasterSymbologyEditor;
