// esri
import { substitute } from "esri/../../intl";

// esri.core
import Collection from "esri/../../core/Collection";
import Handles from "esri/../../core/Handles";
import { pt2px } from "esri/../../core/screenUtils";

// esri.core.accessorSupport
import { subclass, property } from "esri/../../core/accessorSupport/decorators";

// esri.layers
import ImageryLayer from "esri/../../layers/ImageryLayer";
import Layer from "esri/../../layers/Layer";

// esri.symbols.support
import { Descriptor } from "esri/../../symbols/support/interfaces";
import { renderSVG } from "esri/../../symbols/support/svgUtils";

// esri.t9n
import CommonMessages from "esri/../../t9n/common";

// esri.views
import IMapView from "esri/../../views/IMapView";
import { ISceneView } from "esri/../../views/ISceneView";

// esri.widgets
import {
  LegendElement,
  RendererTitle,
  ColorRampElement,
  OpacityRampElement,
  HeatmapRampElement,
  SizeRampElement,
  UnivariateColorSizeRampElement,
  ImageSymbolTableElementInfo
} from "esri/../interfaces";
import Widget from "esri/../Widget";

// esri.widgets.Legend.styles.support
import { renderRelationshipRamp } from "esri/widgets/support/relationshipUtils";
import {
  getUnivariateColorRampPreview,
  getUnivariateColorRampSize,
  getUnivariateSizeRampSize,
  getUnivariateColorRampMargin,
  getUnivariateAboveAndBelowRampElements,
  getUnivariateColorSizeRampElements
} from "esri/widgets/support/univariateUtils";

// esri.widgets.Legend.support
import ActiveLayerInfo from "esri/support/ActiveLayerInfo";
import { attachToNode, getTitle, isImageryStretchedLegend } from "esri/support/styleUtils";

// esri.widgets.Legend.t9n
import LegendMessages from "esri/t9n/Legend";

// esri.widgets.support
import { Heading, HeadingLevel } from "esri/../support/Heading";
import { VNode } from "esri/../support/interfaces";
import { accessibleHandler, tsx, messageBundle } from "esri/../support/widget";

const CSS = {
  activated: "esri-legend--card__carousel-indicator--activated",
  base: "esri-legend--card",
  stacked: "esri-legend--stacked",
  carouselTitle: "esri-legend--card__carousel-title",
  indicator: "esri-legend--card__carousel-indicator",
  intervalSeparator: "esri-legend--card__interval-separator",
  imageryLayerStretchedImage: "esri-legend--card__imagery-layer-image--stretched",
  imageLabel: "esri-legend--card__image-label",
  layerCaption: "esri-legend--card__layer-caption",
  labelElement: "esri-legend--card__label-element",
  layerRow: "esri-legend--card__layer-row",
  labelCell: "esri-legend--card__label-cell",
  message: "esri-legend--card__message",
  rampLabel: "esri-legend--card__ramp-label",
  section: "esri-legend--card__section",
  relationshipSection: "esri-legend--card__relationship-section",
  serviceCaptionText: "esri-legend--card__service-caption-text",
  serviceContent: "esri-legend--card__service-content",
  service: "esri-legend--card__service",
  groupLayer: "esri-legend--card__group-layer",
  groupLayerChild: "esri-legend--card__group-layer-child",
  symbol: "esri-legend--card__symbol",
  sizeRampRow: "esri-legend--card__size-ramp-row",
  symbolRow: "esri-legend--card__symbol-row",
  symbolCell: "esri-legend--card__symbol-cell",
  // containers
  indicatorContainer: "esri-legend--card__carousel-indicator-container",
  intervalSeparatorsContainer: "esri-legend--card__interval-separators-container",
  relationshipLabelContainer: "esri-legend--card__relationship-label-container",
  labelContainer: "esri-legend--card__label-container",
  serviceCaptionContainer: "esri-legend--card__service-caption-container",
  symbolContainer: "esri-legend--card__symbol-container",
  sizeRampContainer: "esri-legend--card__size-ramp-container",
  sizeRampPreview: "esri-legend--card__size-ramp-preview",
  rampContainer: "esri-legend__ramps",
  sizeRampHorizontal: "esri-legend__size-ramp--horizontal",
  rampLabelsContainer: "esri-legend__ramp-labels",
  layerInfo: "esri-legend__layer-cell esri-legend__layer-cell--info",
  univariateAboveAndBelowColorRamp: "esri-univariate-above-and-below-ramp__color--card",
  // common
  hidden: "esri-hidden"
};

const GRADIENT_WIDTH = 25,
  GRADIENT_HEIGHT = 25,
  IPAD_WIDTH = 768,
  MIN_RAMP_WIDTH = 100;

const enum Layout {
  Auto = "auto",
  Stack = "stack",
  SideBySide = "side-by-side"
}

const strokeColor = "#ddd";
const devicePixelRatio = window.devicePixelRatio;

function isRoundShape(symbol: any): boolean {
  if (!symbol) {
    return undefined;
  }

  if (symbol.type.indexOf("3d") > -1) {
    const symLayerLength = symbol.symbolLayers && symbol.symbolLayers.length;

    if (!symLayerLength) {
      return undefined;
    }

    const symLayer = symbol.symbolLayers.getItemAt(symLayerLength - 1);
    const primitive = symLayer.resource && symLayer.resource.primitive;
    return (
      primitive === "circle" ||
      primitive === "cross" ||
      primitive === "kite" ||
      primitive === "sphere" ||
      primitive === "cube" ||
      primitive === "diamond"
    );
  }
  {
    const style = symbol.style;
    return style === "circle" || style === "diamond" || style === "cross";
  }
}

function isTriangleShape(symbol: any): boolean {
  if (!symbol) {
    return undefined;
  }

  if (symbol.type.indexOf("3d") > -1) {
    const symLayerLength = symbol.symbolLayers && symbol.symbolLayers.length;

    if (!symLayerLength) {
      return undefined;
    }

    const symLayer = symbol.symbolLayers.getItemAt(symLayerLength - 1);
    const primitive = symLayer.get("resource.primitive");
    return primitive === "triangle" || primitive === "cone" || primitive === "tetrahedron";
  }
  return symbol.style === "triangle";
}

@subclass("esri.widgets.Legend.styles.Card")
class Card extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

  initialize(): void {
    this.own([
      this.watch("activeLayerInfos", (value) => {
        this._handles.removeAll();
        this._watchForSectionChanges(value);
      })
    ]);
  }

  destroy(): void {
    this._handles.destroy();
    this._handles = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handles = new Handles();

  private _hasIndicators = false;

  private _selectedSectionName: string = null;

  private _sectionNames: string[] = [];

  private _sectionMap: Map<String, VNode> = new Map();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeLayerInfos
  //----------------------------------

  @property()
  activeLayerInfos: Collection<ActiveLayerInfo> = null;

  //----------------------------------
  //  headingLevel
  //----------------------------------

  @property()
  headingLevel: HeadingLevel = 3;

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * The rendering layout.
   *
   * @type {"auto" | "side-by-side" | "stack"}
   * @name layout
   * @instance
   */
  @property()
  layout: Layout = Layout.Stack;

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
  @messageBundle("esri/widgets/Legend/t9n/Legend")
  messages: LegendMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * The widget's common message bundle
   *
   * @instance
   * @name messagesCommon
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

  //----------------------------------
  //  type
  //----------------------------------

  /**
   * The type of style. For Card this value is always `card`.
   *
   * @type {"card"}
   * @name type
   * @readonly
   * @instance
   */
  @property({ readOnly: true })
  readonly type: "card" = "card";

  //----------------------------------
  //  view
  //----------------------------------

  @property()
  view: IMapView | ISceneView = null;

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render(): VNode {
    this._hasIndicators =
      (this.layout === Layout.Auto && this.view.container.clientWidth <= IPAD_WIDTH) ||
      this.layout === Layout.Stack;

    const activeLayerInfos = this.activeLayerInfos;
    const filteredLayers =
      activeLayerInfos &&
      activeLayerInfos
        .toArray()
        .map((activeLayerInfo) => this._renderLegendForLayer(activeLayerInfo))
        .filter((layer) => !!layer);

    if (!this._hasIndicators) {
      this._selectedSectionName = null;
    } else {
      if (
        !this._selectedSectionName ||
        this._sectionNames.indexOf(this._selectedSectionName) === -1
      ) {
        this._selectedSectionName = this._sectionNames && this._sectionNames[0];
      }
    }

    const total = this._sectionNames.length;
    const carouselIndicators = this._sectionNames.map((name, index) => {
      const label = substitute(this.messagesCommon.pagination.pageText, {
        index: index + 1,
        total
      });

      // Followed accessibility rules from
      // https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-2/tabs.html
      return (
        <div
          key={name}
          role="tab"
          id={name}
          aria-label={label}
          aria-controls={`${name}-panel`}
          aria-selected={(this._selectedSectionName === name).toString()}
          tabIndex={this._selectedSectionName === name ? 0 : -1}
          title={label}
          onclick={this._selectSection}
          onkeydown={this._focusSection}
          bind={this}
          class={this.classes(CSS.indicator, {
            [CSS.activated]: this._selectedSectionName === name
          })}
          data-section-name={name}
        />
      );
    });

    const carouselNavigationBar =
      this._hasIndicators && total > 1 ? (
        <div class={CSS.indicatorContainer} key="carousel-navigation" role="tablist">
          {carouselIndicators}
        </div>
      ) : null;

    const content = this._hasIndicators
      ? this._sectionMap.get(this._selectedSectionName)
      : filteredLayers && filteredLayers.length
      ? filteredLayers
      : null;

    const rootClasses = {
      [CSS.stacked]: this._hasIndicators
    };

    return (
      <div class={this.classes(CSS.base, rootClasses)}>
        {content ? content : <div class={CSS.message}>{this.messages.noLegend}</div>}
        {carouselNavigationBar}
      </div>
    );
  }

  @accessibleHandler()
  private _selectSection(e: Event): void {
    const target = e.target as HTMLElement;
    const targetProperty = target.getAttribute("data-section-name");

    if (targetProperty) {
      this._selectedSectionName = targetProperty;
    }
  }

  private _focusSection(event: KeyboardEvent): void {
    const key = event.key;

    switch (key) {
      case "ArrowLeft":
      case "ArrowRight":
        this._switchSectionOnArrowPress(event);
        break;
      case "Enter":
      case " ": // space
        this._selectSection(event);
        break;
    }
  }

  private _switchSectionOnArrowPress(event: KeyboardEvent): void {
    const key = event.key;
    const direction = key === "ArrowLeft" ? -1 : 1;
    const target = event.target as HTMLElement;
    const targetName = target.getAttribute("data-section-name");
    const targetIndex = this._sectionNames.indexOf(targetName);
    const sectionNames = this._sectionNames;
    let element: HTMLElement = null;

    if (targetIndex !== -1) {
      if (sectionNames[targetIndex + direction]) {
        element = document.getElementById(sectionNames[targetIndex + direction]);
      } else if (key === "ArrowLeft") {
        element = document.getElementById(sectionNames[sectionNames.length - 1]);
      } else if (key === "ArrowRight") {
        element = document.getElementById(sectionNames[0]);
      }

      if (element) {
        element.focus();
      }
    }
  }

  private _watchForSectionChanges(activeLayerInfos: Collection<ActiveLayerInfo>): void {
    this._generateSectionNames();

    if (activeLayerInfos) {
      activeLayerInfos.forEach((activeLayerInfo) => {
        const key = `activeLayerInfo-${activeLayerInfo.layer.uid}-version-change`;
        this._handles.remove(key);
        this._watchForSectionChanges(activeLayerInfo.children);

        this._handles.add(
          activeLayerInfo.watch("version", () => this._generateSectionNames()),
          key
        );
      });

      const key = "activeLayerInfos-collection-change";
      this._handles.remove(key);
      this._handles.add(
        activeLayerInfos.on("change", () => this._watchForSectionChanges(activeLayerInfos)),
        key
      );
    }
  }

  private _generateSectionNames(): void {
    this._sectionNames.length = 0;
    this._selectedSectionName = null;

    if (this.activeLayerInfos) {
      this.activeLayerInfos.forEach(this._generateSectionNamesForActiveLayerInfo, this);
    }
  }

  private _getSectionName(layer: Layer, legendElement: LegendElement, index: number): string {
    return `${this.id}${layer.uid}-type-${legendElement.type}-${index}`;
  }

  private _generateSectionNamesForActiveLayerInfo(activeLayerInfo: ActiveLayerInfo): void {
    activeLayerInfo.children.forEach(this._generateSectionNamesForActiveLayerInfo, this);

    if (activeLayerInfo.legendElements) {
      activeLayerInfo.legendElements.forEach((legendElement, index) => {
        this._sectionNames.push(this._getSectionName(activeLayerInfo.layer, legendElement, index));
      });
    }
  }

  private _renderLegendForLayer(activeLayerInfo: ActiveLayerInfo): VNode {
    if (!activeLayerInfo.ready) {
      return null;
    }

    if (activeLayerInfo.children.length) {
      const layers = activeLayerInfo.children
        .map((childActiveLayerInfo) => this._renderLegendForLayer(childActiveLayerInfo))
        .toArray();

      return (
        <div key={activeLayerInfo.layer.uid} class={this.classes(CSS.service, CSS.groupLayer)}>
          <div class={CSS.serviceCaptionContainer}>{activeLayerInfo.title}</div>
          {layers}
        </div>
      );
    }
    {
      const legendElements = activeLayerInfo.legendElements;

      if (legendElements && !legendElements.length) {
        return null;
      }

      const isRelationshipLegend = legendElements.some(
        (element) => element.type === "relationship-ramp"
      );

      const filteredElements = legendElements
        .map((legendElement, index) =>
          this._renderLegendForElement(legendElement, activeLayerInfo, index, isRelationshipLegend)
        )
        .filter((element) => !!element);

      if (!filteredElements.length) {
        return null;
      }

      const layerClasses = {
        [CSS.groupLayerChild]: !!activeLayerInfo.parent
      };

      return (
        <div key={activeLayerInfo.layer.uid} class={this.classes(CSS.service, layerClasses)}>
          <div class={CSS.serviceCaptionContainer}>
            <div class={CSS.serviceCaptionText}>{activeLayerInfo.title}</div>
          </div>
          <div class={CSS.serviceContent}>{filteredElements}</div>
        </div>
      );
    }
  }

  private _renderLegendForElement(
    legendElement: LegendElement,
    activeLayerInfo: ActiveLayerInfo,
    index: number,
    isRelationshipLegend: boolean = false
  ): VNode {
    const isColorRamp = legendElement.type === "color-ramp",
      isOpacityRamp = legendElement.type === "opacity-ramp",
      isSizeRamp = legendElement.type === "size-ramp";

    const layer = activeLayerInfo.layer;
    let title: string = null;

    if (typeof legendElement.title === "string") {
      title = legendElement.title;
    } else if (legendElement.title) {
      const titleObj = legendElement.title;
      const genTitle = getTitle(this.messages, titleObj, isColorRamp || isOpacityRamp);
      if ((titleObj as RendererTitle).title) {
        title = `${(titleObj as RendererTitle).title} (${genTitle})`;
      } else {
        title = genTitle;
      }
    }

    const key = this._getSectionName(layer, legendElement, index);
    const titleSection = this._hasIndicators ? (
      <div>
        <Heading level={this.headingLevel} class={CSS.carouselTitle}>
          {activeLayerInfo.title}
        </Heading>
        <Heading level={this.headingLevel + 1} class={CSS.layerCaption}>
          {title}
        </Heading>
      </div>
    ) : title ? (
      <Heading level={this.headingLevel} class={CSS.layerCaption}>
        {title}
      </Heading>
    ) : null;

    let rampContent: VNode = null;

    // build symbol table
    if (legendElement.type === "symbol-table") {
      const rows = (legendElement.infos as any)
        .map((info: any, index: number) =>
          this._renderLegendForElementInfo(info, activeLayerInfo, legendElement.legendType, index)
        )
        .filter((row: any) => !!row);

      if (rows.length) {
        const isSymbolRow = rows[0].properties.classes && rows[0].properties.classes[CSS.symbolRow];
        const labelContainerClasses = {
          [CSS.labelContainer]: !isSymbolRow && !isRelationshipLegend,
          [CSS.relationshipLabelContainer]: isRelationshipLegend
        };

        rampContent = <div class={this.classes(labelContainerClasses)}>{rows}</div>;
      }
    } else if (
      legendElement.type === "color-ramp" ||
      legendElement.type === "opacity-ramp" ||
      legendElement.type === "heatmap-ramp"
    ) {
      rampContent = this._renderLegendForRamp(legendElement, layer.opacity);
    } else if (isSizeRamp) {
      rampContent = this._renderSizeRamp(legendElement as SizeRampElement, layer.opacity);
    } else if (legendElement.type === "relationship-ramp") {
      rampContent = renderRelationshipRamp(legendElement, this.id, layer.opacity);
    } else if (legendElement.type === "univariate-above-and-below-ramp") {
      rampContent = this._renderUnivariateAboveAndBelowRamp(legendElement, layer.opacity);
    } else if (legendElement.type === "univariate-color-size-ramp") {
      rampContent = this._renderUnivariateColorSizeRamp(legendElement, layer.opacity);
    }

    if (!rampContent) {
      return null;
    }

    const content = (
      <div
        key={key}
        class={CSS.section}
        id={`${key}-panel`}
        role="tabpanel"
        aria-labelledby={key}
        tabIndex={0}
      >
        {[titleSection, rampContent]}
      </div>
    );

    this._sectionMap.set(key, content);

    return content;
  }

  private _renderUnivariateAboveAndBelowRamp(
    legendElement: UnivariateColorSizeRampElement,
    opacity: number
  ): VNode {
    const { sizeRampElement, colorRampElement } = getUnivariateAboveAndBelowRampElements(
      legendElement,
      opacity,
      "horizontal"
    );

    const sizeRampWidth = getUnivariateSizeRampSize(sizeRampElement, "full", true, "horizontal");
    const colorRampAboveWidth = getUnivariateColorRampSize(
      sizeRampElement,
      "above",
      true,
      "horizontal"
    );
    const colorRampBelowWidth = getUnivariateColorRampSize(
      sizeRampElement,
      "below",
      true,
      "horizontal"
    );
    const colorRampHeight = 12;
    const colorRampAbovePreview = getUnivariateColorRampPreview(colorRampElement, {
      width: colorRampAboveWidth,
      height: colorRampHeight,
      rampAlignment: "horizontal",
      opacity,
      type: "above"
    });
    const colorRampBelowPreview = getUnivariateColorRampPreview(colorRampElement, {
      width: colorRampBelowWidth,
      height: colorRampHeight,
      rampAlignment: "horizontal",
      opacity,
      type: "below"
    });
    const colorRampLeftMargin = getUnivariateColorRampMargin(sizeRampElement, "card");
    const labels = sizeRampElement.infos.map((stop) => stop.label);
    const endIndex = labels.length - 1;
    const labelsContent = labels.map((label, index) =>
      index === 0 || index === endIndex ? <div key={index}>{label}</div> : null
    );

    const layerRowStyles = { display: "flex", flexDirection: "column" };
    const sizeRampStyles = { display: "flex", flexDirection: "row" };
    const colorRampStyles = {
      marginTop: "3px",
      marginLeft: `${colorRampLeftMargin}px`,
      display: "flex"
    };
    const labelStyles = {
      width: `${sizeRampWidth}px`,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    };

    return (
      <div class={CSS.layerRow} key="size-ramp-preview" styles={layerRowStyles}>
        <div
          class={this.classes(CSS.symbolContainer, CSS.sizeRampHorizontal)}
          styles={sizeRampStyles}
        >
          {sizeRampElement.infos.map((info, i) => (
            <div key={i} class={CSS.symbol} bind={info.preview} afterCreate={attachToNode} />
          ))}
        </div>
        {colorRampAbovePreview ? (
          <div
            class={CSS.univariateAboveAndBelowColorRamp}
            styles={colorRampStyles}
            key="color-ramp-preview"
          >
            <div bind={colorRampAbovePreview} afterCreate={attachToNode} />
            <div bind={colorRampBelowPreview} afterCreate={attachToNode} />
          </div>
        ) : null}
        <div class={CSS.layerInfo}>
          <div class={CSS.rampLabelsContainer} styles={labelStyles}>
            {labelsContent}
          </div>
        </div>
      </div>
    );
  }

  private _renderUnivariateColorSizeRamp(
    legendElement: UnivariateColorSizeRampElement,
    opacity: number
  ): VNode {
    const { sizeRampElement, colorRampElement } = getUnivariateColorSizeRampElements(
      legendElement,
      "horizontal"
    );

    const sizeRampWidth = getUnivariateSizeRampSize(sizeRampElement, "full", false, "horizontal");
    const colorRampWidth = getUnivariateColorRampSize(sizeRampElement, "full", false, "horizontal");
    const colorRampHeight = 12;
    const colorRampPreview = getUnivariateColorRampPreview(colorRampElement, {
      width: colorRampWidth,
      height: colorRampHeight,
      rampAlignment: "horizontal",
      opacity,
      type: "full"
    });
    const colorRampLeftMargin = getUnivariateColorRampMargin(sizeRampElement, "card");
    const endIndex = sizeRampElement.infos.length - 1;
    const labelsContent = sizeRampElement.infos.map((stop, index) =>
      index === 0 || index === endIndex ? <div key={index}>{stop.label}</div> : null
    );

    const layerRowStyles = { display: "flex", flexDirection: "column" };
    const sizeRampStyles = { display: "flex", flexDirection: "row" };
    const colorRampStyles = {
      marginTop: "3px",
      marginLeft: `${colorRampLeftMargin}px`,
      display: "flex"
    };
    const labelStyles = {
      width: `${sizeRampWidth}px`,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    };

    return (
      <div class={CSS.layerRow} key="size-ramp-preview" styles={layerRowStyles}>
        <div
          class={this.classes(CSS.symbolContainer, CSS.sizeRampHorizontal)}
          styles={sizeRampStyles}
        >
          {sizeRampElement.infos.map((info, i) => (
            <div key={i} class={CSS.symbol} bind={info.preview} afterCreate={attachToNode} />
          ))}
        </div>
        <div
          class={CSS.univariateAboveAndBelowColorRamp}
          styles={colorRampStyles}
          key="color-ramp-preview"
        >
          <div bind={colorRampPreview} afterCreate={attachToNode} />
        </div>
        <div class={CSS.layerInfo}>
          <div class={CSS.rampLabelsContainer} styles={labelStyles}>
            {labelsContent}
          </div>
        </div>
      </div>
    );
  }

  private _renderLegendForElementInfo(
    elementInfo: any,
    activeLayerInfo: ActiveLayerInfo,
    legendType: string,
    rowIndex: number
  ): VNode {
    const layer = activeLayerInfo.layer;

    if (elementInfo.type) {
      return this._renderLegendForElement(elementInfo, activeLayerInfo, rowIndex);
    }

    const isStretched = isImageryStretchedLegend(layer as ImageryLayer, legendType);

    if (elementInfo.preview) {
      if (!elementInfo.symbol || elementInfo.symbol.type.indexOf("simple-fill") === -1) {
        if (!elementInfo.label) {
          return <div key={rowIndex} bind={elementInfo.preview} afterCreate={attachToNode} />;
        }

        const symbolCellClasses = {
          [CSS.symbolCell]: this._hasIndicators
        };

        return (
          <div
            key={rowIndex}
            class={this.classes(CSS.layerRow, { [CSS.symbolRow]: this._hasIndicators })}
          >
            <div
              class={this.classes(symbolCellClasses)}
              bind={elementInfo.preview}
              afterCreate={attachToNode}
            />
            <div class={this.classes(CSS.imageLabel, { [CSS.labelCell]: this._hasIndicators })}>
              {getTitle(this.messages, elementInfo.label, false) || ""}
            </div>
          </div>
        );
      }

      let fr = 255,
        fg = 255,
        fb = 255,
        fa = 0,
        or = 255,
        og = 255,
        ob = 255,
        oa = 0;

      const hasFill = elementInfo.symbol.color && elementInfo.symbol.color.a;
      const hasOutline =
        elementInfo.symbol.outline &&
        elementInfo.symbol.outline.color &&
        elementInfo.symbol.outline.color.a;

      if (hasFill) {
        fr = elementInfo.symbol.color.r;
        fg = elementInfo.symbol.color.g;
        fb = elementInfo.symbol.color.b;
        fa = elementInfo.symbol.color.a * layer.opacity;
      }

      if (hasOutline) {
        or = elementInfo.symbol.outline.color.r;
        og = elementInfo.symbol.outline.color.g;
        ob = elementInfo.symbol.outline.color.b;
        oa = elementInfo.symbol.outline.color.a * layer.opacity;
      }

      const brightness = elementInfo.symbol.color?.isBright ?? true;
      const textColor = brightness ? "black" : "white";
      const shadowColor = brightness ? "rgba(255, 255, 255, .6)" : "rgba(0, 0, 0, .6)";
      const backgroundStyles = {
        background: hasFill ? `rgba(${fr}, ${fg}, ${fb}, ${fa})` : "none",
        color: textColor,
        textShadow: `-1px -1px 0 ${shadowColor},
                                              1px -1px 0 ${shadowColor},
                                              -1px 1px 0 ${shadowColor},
                                              1px 1px 0 ${shadowColor}`,
        border: hasOutline ? `1px solid rgba(${or}, ${og}, ${ob}, ${oa})` : "none"
      };

      return (
        <div key={rowIndex} class={CSS.layerRow}>
          <div class={CSS.labelElement} styles={backgroundStyles}>
            {" "}
            {elementInfo.label}{" "}
          </div>
        </div>
      );
    }
    if (elementInfo.src) {
      const imgElement = this._renderImage(elementInfo, layer, isStretched);

      return (
        <div key={rowIndex} class={CSS.layerRow}>
          {imgElement}
          <div class={CSS.imageLabel}>{elementInfo.label || ""}</div>
        </div>
      );
    }

    return undefined;
  }

  private _renderImage(
    elementInfo: ImageSymbolTableElementInfo,
    layer: Layer,
    isStretched: boolean
  ): VNode {
    const { label, src, opacity } = elementInfo;

    const stretchedClasses = {
      [CSS.imageryLayerStretchedImage]: isStretched,
      [CSS.symbol]: !isStretched
    };

    const dynamicStyles = {
      opacity: `${opacity != null ? opacity : layer.opacity}`
    };

    return (
      <img
        alt={getTitle(this.messages, label, false)}
        src={src}
        border={0}
        width={elementInfo.width}
        height={elementInfo.height}
        class={this.classes(stretchedClasses)}
        styles={dynamicStyles}
      />
    );
  }

  private _renderSizeRampLines(legendElement: SizeRampElement): VNode {
    const rampStops = legendElement.infos as any[];
    const bigStop = rampStops[0];
    const smallStop = rampStops[rampStops.length - 1];
    const bigSymbol = bigStop.symbol;
    const hasIndicators = this._hasIndicators;

    const bigSize = pt2px(bigStop.size + bigStop.outlineSize) * devicePixelRatio;
    const smallSize = pt2px(smallStop.size + smallStop.outlineSize) * devicePixelRatio;

    const width = hasIndicators ? bigSize : bigSize + 50 * devicePixelRatio;
    const height = hasIndicators ? bigSize / 2 + 50 * devicePixelRatio : bigSize;

    const isTriangle = isTriangleShape(bigSymbol);
    const isRound = isRoundShape(bigSymbol);

    const canvas = document.createElement("canvas");
    // upscale the canvas content
    canvas.width = width;
    canvas.height = height;
    // downscale the presentation
    canvas.style.width = `${canvas.width / devicePixelRatio}px`;
    canvas.style.height = `${canvas.height / devicePixelRatio}px`;

    const context = canvas.getContext("2d");

    // vertical ramp
    if (hasIndicators) {
      context.beginPath();

      const leftX1 = 0;
      const leftY1 = 0;
      const leftX2 = width / 2 - smallSize / 2;
      const leftY2 = height;

      context.moveTo(leftX1, leftY1);
      context.lineTo(leftX2, leftY2);

      const rightX1 = width;
      const rightY1 = 0;
      const rightX2 = width / 2 + smallSize / 2;
      const rightY2 = height;

      context.moveTo(rightX1, rightY1);
      context.lineTo(rightX2, rightY2);
    }
    // horizontal ramp
    else {
      context.beginPath();

      const topX1 = 0;
      const topY1 = height / 2 - smallSize / 2;
      const topX2 = width;
      const topY2 = 0;

      context.moveTo(topX1, topY1);
      context.lineTo(topX2, topY2);

      const bottomX1 = 0;
      const bottomY1 = height / 2 + smallSize / 2;
      const bottomX2 = width;
      const bottomY2 = height;

      context.moveTo(bottomX1, bottomY1);
      context.lineTo(bottomX2, bottomY2);
    }

    context.strokeStyle = strokeColor;
    context.stroke();

    return (
      <div
        bind={canvas}
        afterCreate={attachToNode}
        styles={
          hasIndicators
            ? {
                display: "flex",
                marginTop: `-${isTriangle ? 0 : isRound ? bigSize / 2 : 0}px`,
                marginBottom: `-${isTriangle ? smallSize : isRound ? smallSize / 2 : 0}px`
              }
            : {
                display: "flex",
                marginRight: `-${isTriangle ? 0 : isRound ? bigSize / 2 : 0}px`,
                marginLeft: `-${isTriangle ? 0 : isRound ? smallSize / 2 : 0}px`
              }
        }
      />
    );
  }

  private _renderSizeRamp(legendElement: SizeRampElement, opacity: number): VNode {
    const rampStops = legendElement.infos as any[];
    const startLabel = rampStops[0].label;
    const endLabel = rampStops[rampStops.length - 1].label;
    let bigPreview = rampStops[0].preview;
    let smallPreview = rampStops[rampStops.length - 1].preview;
    const hasIndicators = this._hasIndicators;
    const containerStyles = {
      "flex-direction": hasIndicators ? "column" : "row-reverse"
    };

    // Have to set the div's display to flex to avoid extra height
    if (bigPreview) {
      bigPreview = bigPreview.cloneNode(true);
      bigPreview.style.display = "flex";
    }
    if (smallPreview) {
      smallPreview = smallPreview.cloneNode(true);
      smallPreview.style.display = "flex";
    }

    const styles = {
      opacity: opacity != null ? `${opacity}` : ""
    };

    return (
      <div class={this.classes(CSS.layerRow, { [CSS.sizeRampRow]: hasIndicators })}>
        <div class={CSS.rampLabel}>{hasIndicators ? startLabel : endLabel}</div>
        <div class={CSS.sizeRampContainer} styles={containerStyles}>
          <div
            bind={bigPreview}
            afterCreate={attachToNode}
            class={CSS.sizeRampPreview}
            styles={styles}
          />
          {this._renderSizeRampLines(legendElement)}
          <div
            bind={smallPreview}
            afterCreate={attachToNode}
            class={CSS.sizeRampContainer}
            styles={styles}
          />
        </div>
        <div class={CSS.rampLabel}>{hasIndicators ? endLabel : startLabel}</div>
      </div>
    );
  }

  private _renderLegendForRamp(
    legendElement: ColorRampElement | OpacityRampElement | HeatmapRampElement,
    opacity: number
  ): VNode {
    const rampStops: any[] = legendElement.infos;
    const isHeatmapRamp = legendElement.type === "heatmap-ramp";
    const numGradients = rampStops.length - 1;
    const rampHeight = GRADIENT_HEIGHT;
    const rampWidth =
      numGradients > 2 && !isHeatmapRamp ? GRADIENT_WIDTH * numGradients : MIN_RAMP_WIDTH;
    const svgWidth = rampWidth + 20;
    const triangleHeight = 10;
    const colorRampStops = rampStops.slice(0).reverse();

    // Adjust the stop offsets so that we have stops at fixed/equal interval.
    colorRampStops.forEach((stop, index) => {
      stop.offset = isHeatmapRamp ? stop.ratio : index / numGradients;
    });

    const lastIndex = colorRampStops.length - 1;
    const middleStop =
      colorRampStops.length % 2 !== 0 && colorRampStops[(colorRampStops.length / 2) | 0];
    const labelsContent = middleStop && (
      <div class={CSS.intervalSeparatorsContainer}>
        <div class={CSS.intervalSeparator}>|</div>
        <div class={CSS.rampLabel}>{middleStop.label}</div>
      </div>
    );

    const leftLabel = rampStops[rampStops.length - 1].label;
    const rightLabel = rampStops[0].label;

    let opacityStyle: string = null;

    if (opacity != null) {
      opacityStyle = `opacity: ${opacity}`;
    }

    const swatch: Descriptor[][] = [
      [
        {
          shape: {
            type: "path",
            path: `M0 ${rampHeight / 2} L${triangleHeight} 0 L${triangleHeight} ${rampHeight} Z`
          },
          fill: colorRampStops[0].color,
          stroke: { width: 0 }
        },

        {
          shape: {
            type: "rect",
            x: triangleHeight,
            y: 0,
            width: rampWidth,
            height: rampHeight
          },
          fill: {
            type: "linear",
            x1: triangleHeight,
            y1: 0,
            x2: rampWidth + triangleHeight,
            y2: 0,
            colors: colorRampStops
          },
          stroke: { width: 0 }
        },

        {
          shape: {
            type: "path",
            path: `M${rampWidth + triangleHeight} 0 L${svgWidth} ${rampHeight / 2} L${
              rampWidth + triangleHeight
            } ${rampHeight} Z`
          },
          fill: colorRampStops[lastIndex].color,
          stroke: { width: 0 }
        }
      ]
    ];
    const ramp = renderSVG(swatch, svgWidth, rampHeight);
    const { messages } = this;

    return (
      <div class={CSS.layerRow}>
        <div class={CSS.rampLabel}>{isHeatmapRamp ? messages[leftLabel] : leftLabel}</div>
        <div class={CSS.symbolContainer}>
          <div style={opacityStyle}>{ramp}</div>
          {labelsContent}
        </div>
        <div class={CSS.rampLabel}>{isHeatmapRamp ? messages[rightLabel] : rightLabel}</div>
      </div>
    );
  }
}

export default Card;
