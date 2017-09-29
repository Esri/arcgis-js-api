/**
 * The Legend widget displays labels and symbols for layers in a map.
 * Labels and their corresponding symbols depend on the values set in the
 * {@link module:esri/renderers/Renderer} of the layer.
 * The legend will only display layers and sublayers that are
 * visible in the view.
 *
 * The legend automatically updates when
 *  - the visibility of a layer or sublayer changes
 *  - a layer is added or removed from the map
 *  - a layer's `renderer`, `opacity`, or `title` is changed
 *  - the `legendEnabled` property is changed (set to `true` or `false` on the layer)
 *
 * [![widgets-legend-basic](../assets/img/apiref/widgets/widgets-legend-basic.png)](../sample-code/sandbox/sandbox.html?sample=widgets-legend)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * Legend does not support the following layer types:
 * {@link module:esri/layers/ElevationLayer},
 * {@link module:esri/layers/IntegratedMeshLayer},
 * {@link module:esri/layers/KMLLayer},
 * {@link module:esri/layers/OpenStreetMapLayer},
 * {@link module:esri/layers/VectorTileLayer}, and
 * {@link module:esri/layers/WebTileLayer}
 * * {@link module:esri/symbols/Symbol3D  3D symbols} with more than one
 * {@link module:esri/symbols/Symbol3DLayer symbol layer} are not supported.
 * :::
 *
 * @example
 * var legend = new Legend({
 *   view: view,
 *   layerInfos: [{
 *     layer: featureLayer,
 *     title: "Legend"
 *   }]
 * });
 *
 * view.ui.add(legend, "bottom-right");
 *
 * @module esri/widgets/Legend
 * @since 4.0
 *
 * @see [Sample - Legend widget](../sample-code/widgets-legend/index.html)
 * @see [Legend.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Legend.js)
 * @see [Legend.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Legend.scss)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import Widget = require("./Widget");

import HandleRegistry = require("../core/HandleRegistry");
import Collection = require("../core/Collection");
import watchUtils = require("../core/watchUtils");

import View = require("../views/View");

import LegendViewModel = require("./Legend/LegendViewModel");
import ActiveLayerInfo = require("./Legend/support/ActiveLayerInfo");

import Layer = require("../layers/Layer");
import ImageryLayer = require("../layers/ImageryLayer");

import Color = require("../Color");

import * as i18n from "dojo/i18n!./Legend/nls/Legend";
import { substitute } from "../core/lang";
import { join } from "./support/widgetUtils";
import { createSurface } from "dojox/gfx";
import {
  ColorOpacityRampElement, LayerInfo, LegendElement, RampTitle, RendererTitle,
  SymbolTableElement
} from "./interfaces";
import { aliasOf, subclass, declared, property } from "../core/accessorSupport/decorators";
import { tsx, renderable } from "./support/widget";

import Element = JSX.Element;

const CSS = {
  widget: "esri-widget",
  base: "esri-legend",
  service: "esri-legend__service",
  label: "esri-legend__service-label",
  layer: "esri-legend__layer",
  groupLayer: "esri-legend__group-layer",
  groupLayerChild: "esri-legend__group-layer-child",
  layerTable: "esri-legend__layer-table",
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
  hidden: "esri-hidden"
};

const KEY = "esri-legend__",
  GRADIENT_WIDTH = 24,
  GRADIENT_HEIGHT = 25,
  MIN_RAMP_HEIGHT = 50;

function isRendererTitle(titleInfo: any, isRamp: boolean): titleInfo is RendererTitle {
  return !isRamp;
}

function isRampTitle(titleInfo: any, isRamp: boolean): titleInfo is RampTitle {
  return isRamp;
}

@subclass("esri.widgets.Legend")
class Legend extends declared(Widget) {

//--------------------------------------------------------------------------
//
//  Lifecycle
//
//--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Legend
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var legend = new Legend({
   *   view: view
   * });
   */
  constructor(params?: any) {
    super();
  }

  postInitialize() {
    this.own(
      watchUtils.on(this, "activeLayerInfos", "change", () => this._refreshActiveLayerInfos(this.activeLayerInfos))
    );
  }

  destroy() {
    this._handleRegistry.destroy();
    this._handleRegistry = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _handleRegistry = new HandleRegistry();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  activeLayerInfos
  //----------------------------------

  /**
   * Collection of {@link module:esri/widgets/Legend/support/ActiveLayerInfo} objects used by the legend view to
   * display data in the legend. The legend widget watches this property to hide or display the layer legend when
   * an {@link module:esri/widgets/Legend/support/ActiveLayerInfo} is removed from or added to this collection.
   *
   * @name activeLayerInfos
   * @instance
   *
   * @type {module:esri/core/Collection<Object>}
   * @autocast
   * @ignore
   */
  @aliasOf("viewModel.activeLayerInfos")
  @renderable()
  activeLayerInfos: Collection<ActiveLayerInfo> = null;

  //----------------------------------
  //  basemapLegendVisible
  //----------------------------------

  /**
   * boolean that tells to show the basemaps or not in the legend
   *
   * @type {boolean}
   * @default false
   * @private
   */
  @aliasOf("viewModel.basemapLegendVisible")
  @renderable()
  basemapLegendVisible = false;

  //----------------------------------
  //  groundLegendVisible
  //----------------------------------

  /**
   * boolean that tells to show the ground layers or not in the legend
   *
   * @type {boolean}
   * @default false
   * @private
   */
  @aliasOf("viewModel.groundLegendVisible")
  @renderable()
  groundLegendVisible = false;

  //----------------------------------
  //  layerInfos
  //----------------------------------

  /**
   * Specifies a subset of the layers to display in the legend.
   * If this property is not set, all layers in the map will display in the legend.
   * Objects in this array are defined with the properties listed below.
   *
   * @name layerInfos
   * @instance
   *
   * @type {object[]}
   *
   * @property {string} [title] - Specifies a title for the layer to display above its symbols and descriptions.
   * If no title is specified the service name is used.
   * @property {module:esri/layers/Layer} layer - A layer to display in the legend.
   * @todo @property {boolean} defaultSymbol - When `false`, the default symbol for the renderer will
   * not display in the legend. The default value is `true`. Only applicable to
   * {@link module:esri/layers/FeatureLayer}.
   * @todo @property {number[]} hideLayers -  List of sublayer ids that will not be displayed in the legend
   *                                    even if they are visible in the map.
   */
  @aliasOf("viewModel.layerInfos")
  @renderable()
  layerInfos: LayerInfo[] = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   *
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
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
   * {@link module:esri/widgets/Legend/LegendViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @ignore
   *
   * @type {module:esri/widgets/Legend/LegendViewModel}
   * @autocast
   */
  @property()
  @renderable()
  viewModel: LegendViewModel = new LegendViewModel();

  //-------------------------------------------------------------------
  //
  //  Public methods
  //
  //-------------------------------------------------------------------

  render() {
    const activeLayerInfos = this.activeLayerInfos,
      baseClasses = join(CSS.base, CSS.widget),
      filteredLayers = activeLayerInfos && activeLayerInfos.toArray()
          .map(activeLayerInfo => this._renderLegendForLayer(activeLayerInfo))
          .filter(layer => !!layer);

    return (
      <div class={baseClasses}>{
        filteredLayers && filteredLayers.length ?
          filteredLayers :
          <div class={CSS.message}>{i18n.noLegend}</div>
      }</div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private methods
  //
  //-------------------------------------------------------------------

  private _refreshActiveLayerInfos(activeLayerInfos: Collection<ActiveLayerInfo>): void {
    this._handleRegistry.removeAll();
    activeLayerInfos.forEach(activeLayerInfo => this._renderOnActiveLayerInfoChange(activeLayerInfo));
    this.scheduleRender();
  }

  private _renderOnActiveLayerInfoChange(activeLayerInfo: ActiveLayerInfo): void {
    const infoVersionHandle = watchUtils.init(activeLayerInfo, "version", () => this.scheduleRender());
    this._handleRegistry.add(infoVersionHandle, `version_${activeLayerInfo.layer.uid}`);

    activeLayerInfo.children.forEach(childActiveLayerInfo => this._renderOnActiveLayerInfoChange(childActiveLayerInfo));
  }

  private _renderLegendForLayer(activeLayerInfo: ActiveLayerInfo): any {
    if (!activeLayerInfo.ready) {
      return null;
    }

    const hasChildren = !!activeLayerInfo.children.length;
    const key = `${KEY}${activeLayerInfo.layer.uid}-version-${activeLayerInfo.version}`;

    if (hasChildren) {
      const layers = activeLayerInfo.children.map(childActiveLayerInfo => this._renderLegendForLayer(childActiveLayerInfo)).toArray();

      const layerClasses = {
        [CSS.groupLayer]: hasChildren
      };

      return (
        <div key={key} class={CSS.service} classes={layerClasses}>
          <p class={CSS.label}>{activeLayerInfo.title}</p>
          {layers}
        </div>
      );
    }
    else {
      const legendElements = activeLayerInfo.legendElements;

      if (legendElements && !legendElements.length) {
        return null;
      }

      const filteredElements = legendElements
        .map(legendElement => this._renderLegendForElement(legendElement, activeLayerInfo.layer))
        .filter(element => !!element);

      if (!filteredElements.length) {
        return null;
      }

      const layerClasses = {
        [CSS.groupLayerChild]: !!activeLayerInfo.parent
      };

      return (
        <div key={key} class={CSS.service} classes={layerClasses}>
          <p class={CSS.label}>{activeLayerInfo.title}</p>
          <div class={CSS.layer}>{filteredElements}</div>
        </div>
      );
    }
  }

  private _renderLegendForElement(legendElement: LegendElement, layer: Layer, isChild?: boolean): any {
    const isColorRamp = legendElement.type === "color-ramp",
      isOpacityRamp = legendElement.type === "opacity-ramp",
      isSizeRamp = legendElement.type === "size-ramp";

    let content: Element = null;

    // build symbol table or size ramp
    if (legendElement.type === "symbol-table" || isSizeRamp) {
      const rows = (legendElement.infos as any)
        .map((info: any) => this._renderLegendForElementInfo(info, layer, isSizeRamp, (legendElement as SymbolTableElement).legendType))
        .filter((row: any) => !!row);

      if (rows.length) {
        content = (<div class={CSS.layerBody}>{rows}</div>);
      }
    }
    else if (isColorRamp || isOpacityRamp) {
      content = this._renderLegendForRamp(legendElement.infos, (legendElement as ColorOpacityRampElement).overlayColor, isOpacityRamp);
    }

    if (!content) {
      return null;
    }

    const titleObj = legendElement.title;
    let title: string = null;

    if (typeof titleObj === "string") {
      title = titleObj;
    }
    else if (titleObj) {
      const genTitle = this._getTitle(titleObj, isColorRamp || isOpacityRamp);
      if ((titleObj as RendererTitle).title) {
        title = `${(titleObj as RendererTitle).title} (${genTitle})`;
      }
      else {
        title = genTitle;
      }
    }

    const tableClass = isChild ? CSS.layerChildTable : CSS.layerTable,
      caption = title ? (<div class={CSS.layerCaption}>{title}</div>) : null;

    return (
      <div class={tableClass}>
        {caption}
        {content}
      </div>
    );
  }

  private _renderLegendForRamp(rampStops: any[], overlayColor: Color, isOpacityRamp: boolean): any {
    const numGradients = rampStops.length - 1;

    const rampWidth = "100%";
    let rampHeight: number = null;

    if (numGradients > 2) {
      rampHeight = GRADIENT_HEIGHT * numGradients;
    }
    else {
      rampHeight = MIN_RAMP_HEIGHT;
    }

    const rampDiv = document.createElement("div");
    const opacityRampClass = isOpacityRamp ? CSS.opacityRamp : "";
    rampDiv.className = `${CSS.colorRamp} ${opacityRampClass}`;
    rampDiv.style.height = `${rampHeight}px`;

    const surface = createSurface(rampDiv, rampWidth, rampHeight);

    try {
      // TODO: When HeatmapRenderer is supported, stop offsets should not be adjusted.
      // equalIntervalStops will be true for sizeInfo, false for heatmap.
      // Heatmaps tend to have lots of colors, we don't want a giant color ramp.
      // Hence equalIntervalStops = false.

      // Adjust the stop offsets so that we have stops at fixed/equal interval.
      rampStops.forEach((stop, index) => { stop.offset = index / numGradients; });

      surface
        .createRect({ x: 0, y: 0, width: rampWidth as any, height: rampHeight })
        .setFill({ type: "linear", x1: 0, y1: 0, x2: 0, y2: rampHeight, colors: rampStops })
        .setStroke(null);

      if (overlayColor && overlayColor.a > 0) {
        surface
          .createRect({ x: 0, y: 0, width: rampWidth as any, height: rampHeight })
          .setFill(overlayColor)
          .setStroke(null);
      }

    }
    catch (e) {
      surface.clear();
      surface.destroy();
    }

    if (!surface) {
      return null;
    }

    const labelsContent = rampStops
      .filter(stop => !!stop.label)
      .map(stop => (<div class={CSS.rampLabel}>{stop.label}</div>));

    const symbolContainerStyles = { width: `${GRADIENT_WIDTH}px` },
      rampLabelsContainerStyles = { height: `${rampHeight}px` };

    return (
      <div class={CSS.layerRow}>
        <div class={CSS.symbolContainer} styles={symbolContainerStyles}>
          <div class={CSS.rampContainer} bind={rampDiv} afterCreate={this._attachToNode}></div>
        </div>
        <div class={CSS.layerInfo}>
          <div class={CSS.rampLabelsContainer} styles={rampLabelsContainerStyles}>{labelsContent}</div>
        </div>
      </div>
    );
  }

  private _renderLegendForElementInfo(elementInfo: any, layer: Layer, isSizeRamp: boolean, legendType: string): any {
    // nested
    if (elementInfo.type) {
      return this._renderLegendForElement(elementInfo, layer, true);
    }

    let content: Element = null;
    const isStretched = this._isImageryStretchedLegend(layer as ImageryLayer, legendType);

    if (elementInfo.symbol && elementInfo.preview) {
      content = (<div class={CSS.symbol} bind={elementInfo.preview} afterCreate={this._attachToNode}></div>);
    }
    else if (elementInfo.src) {
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
        <div class={CSS.symbolContainer} classes={symbolClasses}>{content}</div>
        <div class={CSS.layerInfo} classes={labelClasses}>{elementInfo.label || ""}</div>
      </div>
    );
  }

  private _attachToNode(this: HTMLElement, node: HTMLElement): void {
    const content: HTMLElement = this;
    node.appendChild(content);
  }

  private _renderImage(elementInfo: any, layer: Layer, isStretched: boolean): any {
    const { src, opacity } = elementInfo;

    const stretchedClasses = {
      [CSS.imageryLayerStretchedImage]: isStretched,
      [CSS.symbol]: !isStretched
    };

    const dynamicStyles = {
      opacity: `${(opacity != null) ? opacity : layer.opacity}`
    };

    return (
      <img src={src} border={0}
           width={elementInfo.width} height={elementInfo.height}
           classes={stretchedClasses} styles={dynamicStyles} />
    );
  }

  private _isImageryStretchedLegend(layer: ImageryLayer, legendType: string): boolean {
    return !!(
      legendType &&
      legendType === "Stretched" &&
      layer.version >= 10.3 &&
      layer.declaredClass === "esri.layers.ImageryLayer"
    );
  }

  private _getTitle(titleInfo: RendererTitle | RampTitle, isRamp: boolean): string {
    let bundleKey: string = null;

    if (isRampTitle(titleInfo, isRamp)) {
      bundleKey = titleInfo.ratioPercentTotal ? "showRatioPercentTotal" :
        titleInfo.ratioPercent ? "showRatioPercent" :
          titleInfo.ratio ? "showRatio" :
            titleInfo.normField ? "showNormField" :
              titleInfo.field ? "showField" :
        null;
    }
    else if (isRendererTitle(titleInfo, isRamp)) {
      bundleKey = titleInfo.normField ? "showNormField" :
        titleInfo.normByPct ? "showNormPct" :
          titleInfo.field ? "showField" :
            null;
    }

    return bundleKey ? substitute({ field: titleInfo.field, normField: titleInfo.normField }, i18n[bundleKey]) : null;
  }
}

export = Legend;
