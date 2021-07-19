// esri
import * as intl from "esri/../../intl";

// esri.core
import Collection from "esri/../../core/Collection";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.layers
import ImageryLayer from "esri/../../layers/ImageryLayer";
import Layer from "esri/../../layers/Layer";

// esri.widgets
import {
  ColorRampElement,
  StretchRampElement,
  HeatmapRampElement,
  UnivariateColorSizeRampElement,
  LegendElement,
  OpacityRampElement,
  RendererTitle,
  SymbolTableElement,
  ImageSymbolTableElementInfo,
  ColorRampStop
} from "esri/../interfaces";
import Widget from "esri/../Widget";

// esri.widgets.Legend.styles.support
import { renderRelationshipRamp } from "esri/widgets/support/relationshipUtils";
import {
  getUnivariateColorRampPreview,
  getUnivariateColorRampSize,
  getUnivariateColorRampMargin,
  getUnivariateAboveAndBelowRampElements,
  getUnivariateColorSizeRampElements
} from "esri/widgets/support/univariateUtils";

// esri.widgets.Legend.support
import ActiveLayerInfo from "esri/support/ActiveLayerInfo";
import {
  attachToNode,
  getTitle,
  isImageryStretchedLegend,
  isRendererTitle
} from "esri/support/styleUtils";

// esri.widgets.Legend.t9n
import LegendMessages from "esri/t9n/Legend";

// esri.widgets.support
import { Heading, HeadingLevel } from "esri/../support/Heading";
import { VNode } from "esri/../support/interfaces";
import { messageBundle, tsx } from "esri/../support/widget";

const CSS = {
  service: "esri-legend__service",
  label: "esri-legend__service-label",
  layer: "esri-legend__layer",
  groupLayer: "esri-legend__group-layer",
  groupLayerChild: "esri-legend__group-layer-child",
  layerTable: "esri-legend__layer-table",
  layerTableSizeRamp: "esri-legend__layer-table--size-ramp",
  layerChildTable: "esri-legend__layer-child-table",
  layerCaption: "esri-legend__layer-caption",
  layerBody: "esri-legend__layer-body",
  layerRow: "esri-legend__layer-row",
  layerCell: "esri-legend__layer-cell",
  layerInfo: "esri-legend__layer-cell esri-legend__layer-cell--info",
  imageryLayerStretchedImage: "esri-legend__imagery-layer-image--stretched",
  imageryLayerCellStretched: "esri-legend__imagery-layer-cell--stretched",
  imageryLayerInfoStretched: "esri-legend__imagery-layer-info--stretched",
  symbolContainer: "esri-legend__layer-cell esri-legend__layer-cell--symbols",
  symbol: "esri-legend__symbol",
  rampContainer: "esri-legend__ramps",
  sizeRamp: "esri-legend__size-ramp",
  colorRamp: "esri-legend__color-ramp",
  opacityRamp: "esri-legend__opacity-ramp",
  borderlessRamp: "esri-legend__borderless-ramp",
  rampTick: "esri-legend__ramp-tick",
  rampFirstTick: "esri-legend__ramp-tick-first",
  rampLastTick: "esri-legend__ramp-tick-last",
  rampLabelsContainer: "esri-legend__ramp-labels",
  rampLabel: "esri-legend__ramp-label",
  univariateAboveAndBelowSymbol: "esri-univariate-above-and-below-ramp__symbol",
  univariateAboveAndBelowLabel: "esri-univariate-above-and-below-ramp__label",
  message: "esri-legend__message",
  // common
  header: "esri-widget__heading",
  hidden: "esri-hidden"
};

const KEY = "esri-legend__";
const GRADIENT_WIDTH = 24;
const univariateRampContainerStyles = { display: "flex", alignItems: "flex-start" };
const univariateColorRampContainerStyles = { marginLeft: "3px" };
const univariateColorRampStyles = { display: "table-cell", verticalAlign: "middle" };

@subclass("esri.widgets.Legend.styles.Classic")
class Classic extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);
  }

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
  //  type
  //----------------------------------

  /**
   * The type of style. For Classic this value is always `classic`.
   *
   * @type {"classic"}
   * @name type
   * @readonly
   * @instance
   */
  @property({ readOnly: true })
  readonly type: "classic" = "classic";

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render(): VNode {
    const activeLayerInfos = this.activeLayerInfos,
      filteredLayers =
        activeLayerInfos &&
        activeLayerInfos
          .toArray()
          .map((activeLayerInfo) => this._renderLegendForLayer(activeLayerInfo))
          .filter((layer) => !!layer);

    return (
      <div>
        {filteredLayers && filteredLayers.length ? (
          filteredLayers
        ) : (
          <div class={CSS.message}>{this.messages.noLegend}</div>
        )}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  private _renderLegendForLayer(activeLayerInfo: ActiveLayerInfo): VNode {
    if (!activeLayerInfo.ready) {
      return null;
    }

    const hasChildren = !!activeLayerInfo.children.length;
    const key = `${KEY}${activeLayerInfo.layer.uid}-version-${activeLayerInfo.version}`;

    const labelNode = activeLayerInfo.title
      ? Heading(
          { level: this.headingLevel, class: this.classes(CSS.header, CSS.label) },
          activeLayerInfo.title
        )
      : null;

    if (hasChildren) {
      const layers = activeLayerInfo.children
        .map((childActiveLayerInfo) => this._renderLegendForLayer(childActiveLayerInfo))
        .toArray();

      return (
        <div key={key} class={this.classes(CSS.service, CSS.groupLayer)}>
          {labelNode}
          {layers}
        </div>
      );
    }
    {
      const legendElements = activeLayerInfo.legendElements;

      if (legendElements && !legendElements.length) {
        return null;
      }

      const filteredElements = legendElements
        .map((legendElement) => this._renderLegendForElement(legendElement, activeLayerInfo.layer))
        .filter((element) => !!element);

      if (!filteredElements.length) {
        return null;
      }

      const layerClasses = {
        [CSS.groupLayerChild]: !!activeLayerInfo.parent
      };

      return (
        <div key={key} class={this.classes(CSS.service, layerClasses)} tabIndex={0}>
          {labelNode}
          <div class={CSS.layer}>{filteredElements}</div>
        </div>
      );
    }
  }

  private _renderLegendForElement(
    legendElement: LegendElement,
    layer: Layer,
    isChild?: boolean
  ): VNode {
    const isColorRamp = legendElement.type === "color-ramp",
      isOpacityRamp = legendElement.type === "opacity-ramp",
      isSizeRamp = legendElement.type === "size-ramp";

    let content: VNode = null;

    // build symbol table or size ramp
    if (legendElement.type === "symbol-table" || isSizeRamp) {
      const rows = (legendElement.infos as any)
        .map((info: any) =>
          this._renderLegendForElementInfo(
            info,
            layer,
            isSizeRamp,
            (legendElement as SymbolTableElement).legendType
          )
        )
        .filter((row: any) => !!row);

      if (rows.length) {
        content = <div class={CSS.layerBody}>{rows}</div>;
      }
    } else if (
      legendElement.type === "color-ramp" ||
      legendElement.type === "opacity-ramp" ||
      legendElement.type === "heatmap-ramp" ||
      legendElement.type === "stretch-ramp"
    ) {
      content = this._renderLegendForRamp(legendElement, layer.opacity);
    } else if (legendElement.type === "relationship-ramp") {
      content = renderRelationshipRamp(legendElement, this.id, layer.opacity);
    } else if (legendElement.type === "univariate-above-and-below-ramp") {
      content = this._renderUnivariateAboveAndBelowRamp(legendElement, layer.opacity);
    } else if (legendElement.type === "univariate-color-size-ramp") {
      content = this._renderUnivariateColorSizeRamp(legendElement, layer.opacity);
    }

    if (!content) {
      return null;
    }

    const titleObj = legendElement.title;
    let title: string = null;

    if (typeof titleObj === "string") {
      title = titleObj;
    } else if (titleObj) {
      const genTitle = getTitle(this.messages, titleObj, isColorRamp || isOpacityRamp);

      if (isRendererTitle(titleObj, isColorRamp || isOpacityRamp) && titleObj.title) {
        title = `${(titleObj as RendererTitle).title} (${genTitle})`;
      } else {
        title = genTitle;
      }
    }

    const tableClass = isChild ? CSS.layerChildTable : CSS.layerTable,
      caption = title ? <div class={CSS.layerCaption}>{title}</div> : null;

    const tableClasses = {
      [CSS.layerTableSizeRamp]: isSizeRamp || !isChild
    };

    return (
      <div class={this.classes(tableClass, tableClasses)}>
        {caption}
        {content}
      </div>
    );
  }

  private _renderUnivariateAboveAndBelowRamp(
    legendElement: UnivariateColorSizeRampElement,
    opacity: number
  ): VNode {
    const { sizeRampElement, colorRampElement } = getUnivariateAboveAndBelowRampElements(
      legendElement,
      opacity
    );
    const colorRampAboveHeight = getUnivariateColorRampSize(sizeRampElement, "above", true);
    const colorRampBelowHeight = getUnivariateColorRampSize(sizeRampElement, "below", true);
    const colorRampWidth = 12;
    const colorRampAbovePreview = getUnivariateColorRampPreview(colorRampElement, {
      width: colorRampWidth,
      height: colorRampAboveHeight,
      rampAlignment: "vertical",
      opacity,
      type: "above"
    });
    const colorRampBelowPreview = getUnivariateColorRampPreview(colorRampElement, {
      width: colorRampWidth,
      height: colorRampBelowHeight,
      rampAlignment: "vertical",
      opacity,
      type: "below"
    });
    const colorRampTopMargin = getUnivariateColorRampMargin(sizeRampElement);

    const labels = sizeRampElement.infos.map((stop) => stop.label);
    const aboveRampLabels = labels.map((label, index) => {
      const isStartLabel = index === 0;
      const isMidLabel = index === 2;

      return isStartLabel ? (
        <div
          key={index}
          class={
            label
              ? colorRampAbovePreview
                ? CSS.univariateAboveAndBelowLabel
                : CSS.rampLabel
              : null
          }
        >
          {label}
        </div>
      ) : isMidLabel ? (
        <div />
      ) : null;
    });
    const endIndex = labels.length - 1;
    const midIndex = Math.floor(labels.length / 2);
    const belowRampLabels = labels.map((label, index) => {
      const isEndLabel = index === endIndex;
      const isMidLabel = index === midIndex;

      return isMidLabel || isEndLabel ? (
        <div
          key={index}
          class={
            label
              ? colorRampAbovePreview
                ? CSS.univariateAboveAndBelowLabel
                : CSS.rampLabel
              : null
          }
        >
          {label}
        </div>
      ) : null;
    });

    const sizeRampPreviewStyles = { display: "table-cell", verticalAlign: "middle" };
    const colorRampPreviewStyles = { marginTop: `${colorRampTopMargin}px` };
    const colorRampAboveLabelStyles = { height: `${colorRampAboveHeight}px` };
    const colorRampBelowLabelStyles = { height: `${colorRampBelowHeight}px` };

    return (
      <div key="univariate-above-and-below-ramp-preview" styles={univariateRampContainerStyles}>
        <div class={CSS.layerBody}>
          {sizeRampElement.infos.map((info, i) => (
            <div class={this.classes(CSS.layerRow, CSS.sizeRamp)}>
              <div
                class={CSS.symbol}
                styles={sizeRampPreviewStyles}
                bind={info.preview}
                afterCreate={attachToNode}
              />
              {!colorRampAbovePreview && i % 2 === 0 ? (
                <div class={CSS.layerInfo}>{labels[i]}</div>
              ) : null}
            </div>
          ))}
        </div>
        {colorRampAbovePreview ? (
          <div styles={colorRampPreviewStyles} key="color-ramp-preview">
            <div styles={univariateColorRampContainerStyles}>
              <div styles={univariateColorRampStyles}>
                <div
                  class={CSS.rampContainer}
                  bind={colorRampAbovePreview}
                  afterCreate={attachToNode}
                />
              </div>
              <div styles={univariateColorRampStyles}>
                <div class={CSS.rampLabelsContainer} styles={colorRampAboveLabelStyles}>
                  {aboveRampLabels}
                </div>
              </div>
            </div>
            <div styles={univariateColorRampContainerStyles}>
              <div styles={univariateColorRampStyles}>
                <div
                  class={CSS.rampContainer}
                  bind={colorRampBelowPreview}
                  afterCreate={attachToNode}
                />
              </div>
              <div styles={univariateColorRampStyles}>
                <div class={CSS.rampLabelsContainer} styles={colorRampBelowLabelStyles}>
                  {belowRampLabels}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  private _renderUnivariateColorSizeRamp(
    legendElement: UnivariateColorSizeRampElement,
    opacity: number
  ): VNode {
    const { sizeRampElement, colorRampElement } = getUnivariateColorSizeRampElements(legendElement);
    const colorRampTopMargin = getUnivariateColorRampMargin(sizeRampElement);
    const colorRampWidth = 12;
    const colorRampHeight = getUnivariateColorRampSize(sizeRampElement, "full", false);
    const colorRampPreview = getUnivariateColorRampPreview(colorRampElement, {
      width: colorRampWidth,
      height: colorRampHeight,
      rampAlignment: "vertical",
      opacity,
      type: "full"
    });
    const endIndex = sizeRampElement.infos.length - 1;
    const labels = sizeRampElement.infos.map((stop, index) =>
      index === 0 || index === endIndex ? (
        <div
          key={index}
          class={
            stop.label
              ? colorRampElement
                ? CSS.univariateAboveAndBelowLabel
                : CSS.rampLabel
              : null
          }
        >
          {stop.label}
        </div>
      ) : null
    );
    const sizeRampPreviewStyles = { display: "table-cell", verticalAlign: "middle" };
    const colorRampPreviewStyles = { marginTop: `${colorRampTopMargin}px` };
    const colorRampLabelStyles = { height: `${colorRampHeight}px` };

    return (
      <div key="univariate-above-and-below-ramp-preview" styles={univariateRampContainerStyles}>
        <div class={CSS.layerBody}>
          {sizeRampElement.infos.map((info) => (
            <div class={this.classes(CSS.layerRow, CSS.sizeRamp)}>
              <div
                class={CSS.symbol}
                styles={sizeRampPreviewStyles}
                bind={info.preview}
                afterCreate={attachToNode}
              />
            </div>
          ))}
        </div>
        <div styles={colorRampPreviewStyles} key="color-ramp-preview">
          <div styles={univariateColorRampContainerStyles}>
            <div styles={univariateColorRampStyles}>
              <div class={CSS.rampContainer} bind={colorRampPreview} afterCreate={attachToNode} />
            </div>
            <div styles={univariateColorRampStyles}>
              <div class={CSS.rampLabelsContainer} styles={colorRampLabelStyles}>
                {labels}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _renderLegendForRamp(
    legendElement: ColorRampElement | StretchRampElement | OpacityRampElement | HeatmapRampElement,
    opacity: number
  ): VNode {
    const rampStops: any[] = legendElement.infos;
    const isOpacityRamp = legendElement.type === "opacity-ramp";
    const isHeatmapRamp = legendElement.type === "heatmap-ramp";
    const isStretchRamp = legendElement.type === "stretch-ramp";

    const rampDiv = legendElement.preview;
    const opacityRampClass = isOpacityRamp ? CSS.opacityRamp : "";
    rampDiv.className = `${CSS.colorRamp} ${opacityRampClass}`;

    if (opacity != null) {
      rampDiv.style.opacity = opacity.toString();
    }

    const labelsContent = rampStops.map((stop) => (
      <div class={stop.label ? CSS.rampLabel : null}>
        {isHeatmapRamp
          ? this.messages[stop.label]
          : isStretchRamp
          ? this._getStretchStopLabel(stop)
          : stop.label}
      </div>
    ));

    const symbolContainerStyles = { width: `${GRADIENT_WIDTH}px` },
      rampLabelsContainerStyles = { height: rampDiv.style.height };

    return (
      <div class={CSS.layerRow}>
        <div class={CSS.symbolContainer} styles={symbolContainerStyles}>
          <div class={CSS.rampContainer} bind={rampDiv} afterCreate={attachToNode} />
        </div>
        <div class={CSS.layerInfo}>
          <div class={CSS.rampLabelsContainer} styles={rampLabelsContainerStyles}>
            {labelsContent}
          </div>
        </div>
      </div>
    );
  }

  private _getStretchStopLabel(stop: ColorRampStop): String {
    return stop.label
      ? this.messages[stop.label] +
          ": " +
          (typeof stop.value === "string"
            ? stop.value
            : intl.formatNumber(stop.value, {
                style: "decimal",
                notation: stop.value.toString().indexOf("e") > -1 ? "scientific" : "standard"
              }))
      : "";
  }

  private _renderLegendForElementInfo(
    elementInfo: any,
    layer: Layer,
    isSizeRamp: boolean,
    legendType: string
  ): VNode {
    // nested
    if (elementInfo.type) {
      return this._renderLegendForElement(elementInfo, layer, true);
    }

    let content: VNode = null;
    const isStretched = isImageryStretchedLegend(layer as ImageryLayer, legendType);

    if (elementInfo.preview) {
      content = <div class={CSS.symbol} bind={elementInfo.preview} afterCreate={attachToNode} />;
    } else if (elementInfo.src) {
      content = this._renderImage(elementInfo, layer, isStretched);
    }

    if (!content) {
      return null;
    }

    const labelClasses = {
      [CSS.imageryLayerInfoStretched]: isStretched
    };

    const symbolClasses = {
      [CSS.imageryLayerInfoStretched]: isStretched,
      [CSS.sizeRamp]: !isStretched && isSizeRamp
    };

    return (
      <div class={CSS.layerRow}>
        <div class={this.classes(CSS.symbolContainer, symbolClasses)}>{content}</div>
        <div class={this.classes(CSS.layerInfo, labelClasses)}>
          {getTitle(this.messages, elementInfo.label, false) || ""}
        </div>
      </div>
    );
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
}

export default Classic;
