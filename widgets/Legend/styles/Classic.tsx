// esri
import * as intl from "esri/../../intl";

// esri.core
import Collection = require("esri/../../core/Collection");

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.layers
import ImageryLayer = require("esri/../../layers/ImageryLayer");
import Layer = require("esri/../../layers/Layer");

// esri.widgets
import {
  ColorRampElement,
  StretchRampElement,
  HeatmapRampElement,
  LegendElement,
  OpacityRampElement,
  RendererTitle,
  SymbolTableElement,
  ImageSymbolTableElementInfo,
  ColorRampStop
} from "esri/../interfaces";
import Widget = require("esri/../Widget");

// esri.widgets.Legend.styles.support
import { renderRelationshipRamp } from "esri/widgets/support/utils";

// esri.widgets.Legend.support
import ActiveLayerInfo = require("esri/support/ActiveLayerInfo");
import {
  attachToNode,
  getTitle,
  isImageryStretchedLegend,
  isRendererTitle
} from "esri/support/styleUtils";

// esri.widgets.Legend.t9n
import LegendMessages from "esri/t9n/Legend";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { messageBundle, renderable, tsx } from "esri/../support/widget";

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
  message: "esri-legend__message",
  // common
  header: "esri-widget__heading",
  hidden: "esri-hidden"
};

const KEY = "esri-legend__",
  GRADIENT_WIDTH = 24;

@subclass("esri.widgets.Legend.styles.Classic")
class Classic extends Widget {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeLayerInfos
  //----------------------------------

  @renderable()
  @property()
  activeLayerInfos: Collection<ActiveLayerInfo> = null;

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

    const labelNode = activeLayerInfo.title ? (
      <h3 class={this.classes(CSS.header, CSS.label)}>{activeLayerInfo.title}</h3>
    ) : null;

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
        <div key={key} class={this.classes(CSS.service, layerClasses)}>
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
          intl.formatNumber(stop.value, {
            style: "decimal"
          })
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

    if (elementInfo.symbol && elementInfo.preview) {
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

export = Classic;
