/**
 * The BinaryColorSizeSlider widget is intended for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with a {@link module:esri/renderers/visualVariables/SizeVariable}.
 * At a minimum you must set the [min](#min), [max](#max), and [stops](#stops) properties
 * of the widget.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![BinaryColorSizeSlider with annotations](../../assets/img/apiref/widgets/sliders/sizeslider-labels.png "BinaryColorSizeSlider with annotations")
 *
 * The [fromRendererResult](#fromRendererResult) method can be used to conveniently create this slider
 * from the result of the {@link module:esri/smartMapping/renderers/size#createContinuousRenderer createContinuousRenderer}
 * method.
 *
 * ```js
 * const sizeParams = {
 *   layer: layer,
 *   basemap: map.basemap,
 *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
 *   view: view
 * };
 *
 * let rendererResult = null;
 *
 * sizeRendererCreator
 *   .createContinuousRenderer(sizeParams)
 *   .then(function(response) {
 *     rendererResult = response;
 *     layer.renderer = response.renderer;
 *
 *     return histogram({
 *       layer: layer,
 *       valueExpression: sizeParams.valueExpression,
 *       view: view,
 *       numBins: 70
 *     });
 *   })
 *    .then(function(histogramResult) {
 *      const binarySlider = BinaryColorSizeSlider.fromRendererResult(rendererResult, histogramResult);
 *      binarySlider.container = "slider";
 *    })
 *    .catch(function(error) {
 *      console.log("there was an error: ", error);
 *    });
 * ```
 *
 * This slider should be used to update a {@link module:esri/renderers/visualVariables/SizeVariable size visual variable}
 * in a layer's renderer. It is the responsibility of the app developer
 * to set up event listeners on that update the size variable of the appropriate renderer.
 *
 * ```js
 * // when the user slides the handle(s), update the renderer
 * // with the updated size stops
 *
 * binarySlider.on(["thumb-change", "thumb-drag"], function() {
 *   const renderer = layer.renderer.clone();
 *   const sizeVariable = renderer.visualVariables[0];
 *   renderer.visualVariables = [ binarySlider.updateVisualVariable(sizeVariable) ];
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/BinaryColorSizeSlider
 * @since 4.12
 *
 * @see [BinaryColorSizeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/BinaryColorSizeSlider.tsx)
 * @see [BinaryColorSizeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_BinaryColorSizeSlider.scss)
 * @see module:esri/widgets/smartMapping/BinaryColorSizeSlider/BinaryColorSizeSliderViewModel
 * @see {@link module:esri/smartMapping/renderers/size sizeRendererCreator}
 */

// esri
import Color from "esri/Color";

// esri.core
import { isSome } from "esri/core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.renderers
import ClassBreaksRenderer from "esri/renderers/ClassBreaksRenderer";

// esri.renderers.visualVariables
import SizeVariable from "esri/renderers/visualVariables/SizeVariable";

// esri.renderers.visualVariables.support
import SizeStop from "esri/renderers/visualVariables/support/SizeStop";

// esri.smartMapping.renderers
import { RendererResult } from "esri/smartMapping/renderers/univariateColorSize";

// esri.smartMapping.statistics
import { HistogramResult } from "esri/smartMapping/statistics/interfaces";

// esri.symbols
import CIMSymbol from "esri/symbols/CIMSymbol";
import Symbol from "esri/symbols/Symbol";
import Symbol3D from "esri/symbols/Symbol3D";

// esri.symbols.support
import { getCIMSymbolColor } from "esri/symbols/support/cimSymbolUtils";

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.BinaryColorSizeSlider
import BinaryColorSizeSliderViewModel from "esri/widgets/BinaryColorSizeSlider/BinaryColorSizeSliderViewModel";

// esri.widgets.smartMapping.SizeSlider.t9n
import SizeSliderMessages from "esri/widgets/SizeSlider/t9n/SizeSlider";

// esri.widgets.smartMapping.support
import { ZoomOptions } from "esri/widgets/support/interfaces";
import {
  getDynamicPathForSizeStops,
  getSizesFromVariable,
  getFillFromColor
} from "esri/widgets/support/utils";

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { messageBundle, renderable, storeNode, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-binary-color-size-slider",
  rampElement: "esri-binary-color-size-slider__ramp",
  sliderContainer: "esri-binary-color-size-slider__slider-container",
  histogramContainer: "esri-binary-color-size-slider__histogram-container",
  zoomCapTop: "esri-binary-color-size-slider__zoom-cap-top",
  zoomCapBottom: "esri-binary-color-size-slider__zoom-cap-bottom",
  zoomCapLine: "esri-binary-color-size-slider__zoom-cap-line",
  zoomCapMask: "esri-binary-color-size-slider__zoom-cap-mask",
  zoomCapUnderline: "esri-binary-color-size-slider__zoom-cap-underline",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

const DEFAULT_STYLE = {
  trackBackgroundColor: new Color([224, 224, 224]),
  trackAboveFillColor: new Color([149, 149, 149]),
  trackBelowFillColor: new Color([149, 149, 149])
};

interface BinaryColorSizeSliderStyle {
  trackBackgroundColor?: Color;
  trackAboveFillColor?: Color;
  trackBelowFillColor?: Color;
}

@subclass("esri.widgets.smartMapping.BinaryColorSizeSlider")
class BinaryColorSizeSlider extends SmartMappingSliderBase {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @constructor
   * @alias module:esri/widgets/smartMapping/BinaryColorSizeSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const slider = new BinaryColorSizeSlider({
   *   container: "sliderDiv",
   *   min: 0,
   *   max: 100,
   *   stops: [
   *     { value: 0, size: 4 },
   *     { value: 100, size: 40 }
   *   ]
   * });
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);

    // For SVG fills
    this._rampFillId = `${this.id}-linear-gradient`;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _minRampFillWidth = 0.2;

  private _rampNode: HTMLElement = null;

  private _rampFillId: string = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  handlesSyncedToPrimary
  //----------------------------------

  /**
   * Only applicable when three thumbs (i.e. handles) are set on the slider [values](#values). This property
   * indicates whether the position of the outside handles are synced with the middle, or primary,
   * handle. When enabled, if the primary handle is moved then the outside handle positions are updated
   * while maintaining a fixed distance from the primary handle.
   *
   * Only applicable when [primaryHandleEnabled](#primaryHandleEnabled) is `true`.
   *
   * @name handlesSyncedToPrimary
   * @instance
   * @type {boolean}
   * @default true
   * @since 4.18
   *
   * @see [primaryHandleEnabled](#primaryHandleEnabled)
   *
   * @example
   * // enables the primary handles and syncs it with the others
   * slider.primaryHandleEnabled = true;
   * slider.handlesSyncedToPrimary = true;
   */
  @aliasOf("viewModel.handlesSyncedToPrimary") handlesSyncedToPrimary: boolean = null;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The widget's default label. This label displays when it is
   * used within another widget, such as the {@link module:esri/widgets/Expand}
   * or {@link module:esri/widgets/LayerList} widgets.
   *
   * @name label
   * @instance
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
  @messageBundle("esri/widgets/smartMapping/SizeSlider/t9n/SizeSlider")
  messages: SizeSliderMessages = null;

  //----------------------------------
  //  stops
  //----------------------------------

  /**
   * The size stops from the {@link module:esri/renderers/visualVariables/SizeVariable}
   * to link to the slider. You must provide either three or five stops.
   *
   * @name stops
   * @instance
   * @type {module:esri/renderers/visualVariables/support/SizeStop[]}
   *
   * @see [updateVisualVariable()](#updateVisualVariable)
   *
   * @example
   * const slider = new BinaryColorSizeSlider({
   *   container: "sliderDiv",
   *   min: 0,
   *   max: 100,
   *   stops: [
   *     { value: 0, size: 4 },
   *     { value: 100, size: 40 }
   *   ]
   * });
   */
  @aliasOf("viewModel.stops") stops: SizeStop[] = null;

  //----------------------------------
  //  style
  //----------------------------------

  /**
   * Exposes various properties of the widget
   * that can be styled.
   *
   * @name style
   * @instance
   * @type {Object}
   *
   * @property {module:esri/Color} [trackAboveFillColor=new Color([149, 149, 149])] - The color of the slider's track.
   *   For single-color visualizations where
   *   only a Size variable is present, you should set this color to match
   *   the color of the symbol in the {@link module:esri/renderers/SimpleRenderer}.
   * @todo doc later \@autocast { "name": "trackAboveFillColor", "value": "Object | Number[] | String" }
   * @property {module:esri/Color} [trackBelowFillColor=new Color([149, 149, 149])] - The color of the slider's track.
   *   For single-color visualizations where
   *   only a Size variable is present, you should set this color to match
   *   the color of the symbol in the {@link module:esri/renderers/SimpleRenderer}.
   * @todo doc later \@autocast { "name": "trackBelowFillColor", "value": "Object | Number[] | String" }
   * @property {module:esri/Color} [trackBackgroundColor=new Color([224, 224, 224])] - The background color of the
   *   slider's track. Generally, this color should be subdued and not interfere with the `trackFillColor`.
   * @todo doc later \@autocast { "name": "trackBackgroundColor", "value": "Object | Number[] | String" }
   *
   * @example
   * slider.style = {
   *   trackAboveFillColor: new Color("dodgerblue"),
   *   trackBelowFillColor: new Color([50,50,50])
   * };
   */
  @property()
  @renderable()
  style: BinaryColorSizeSliderStyle = { ...DEFAULT_STYLE };

  @cast("style")
  protected castStyle(value: Partial<BinaryColorSizeSliderStyle>): BinaryColorSizeSliderStyle {
    return { ...DEFAULT_STYLE, ...value };
  }

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the SizeSlider widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/BinaryColorSizeSlider/BinaryColorSizeSliderViewModel}
   * class to access all properties and methods on the SizeSlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/BinaryColorSizeSlider/BinaryColorSizeSliderViewModel}
   */
  @property()
  @renderable([
    "viewModel.hasTimeData",
    "viewModel.inputFormatFunction",
    "viewModel.inputParseFunction",
    "viewModel.labelFormatFunction",
    "viewModel.max",
    "viewModel.min",
    "viewModel.stops",
    "viewModel.values",
    "viewModel.zoomOptions"
  ])
  viewModel: BinaryColorSizeSliderViewModel = new BinaryColorSizeSliderViewModel();

  //----------------------------------
  //  zoomOptions
  //----------------------------------

  @aliasOf("viewModel.zoomOptions") zoomOptions: ZoomOptions = null;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * A convenience function used to create a BinaryColorSizeSlider widget instance from the
   * {@link module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult result} of
   * the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer createContinuousRenderer}
   * method.
   *
   * This method sets the slider [stops](#stops), [min](#min), [max](#max),
   * and [histogramConfig](#histogramConfig). It is still the developer's responsibility to assign it a proper
   * [container](#container) and any other optional properties.
   *
   * @method fromRendererResult
   * @static
   *
   * @param {module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/size#createContinuousRenderer createContinuousRenderer}
   *   method.
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   * @return {module:esri/widgets/smartMapping/SizeSlider} Returns a SizeSlider instance. This will not render until you assign
   *   it a valid [container](#container).
   *
   * @example
   * const params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   field: "POP_POVERTY"
   * };
   *
   * let rendererResult = null;
   *
   * sizeRendererCreator
   *   .createContinuousRenderer(colorParams)
   *   .then(function(response) {
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: params.field,
   *       numBins: 30
   *     });
   *   })
   *    .then(function(histogramResult) {
   *
   *      const sizeSlider = BinaryColorSizeSlider.fromRendererResult(rendererResult, histogramResult);
   *      sizeSlider.container = "slider";
   *
   *      // when the user slides the handle(s), update the renderer
   *      // with the updated size properties
   *
   *      slider.on(["thumb-change", "thumb-drag"], function() {
   *        layer.renderer = slider.updateRenderer( layer.renderer );
   *      });
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  static fromRendererResult(
    result: RendererResult,
    histogramResult?: HistogramResult
  ): BinaryColorSizeSlider {
    const {
      size: { visualVariables },
      statistics
    } = result;
    const { avg, stddev } = statistics;
    const sizeVariable = visualVariables[0];
    const stops = sizeVariable.stops;

    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    const classBreakInfos = result.renderer.classBreakInfos;
    let trackAboveFillColor,
      trackBelowFillColor,
      trackFillColor = null;

    const getSymbolColor = (symbol: Symbol): Color => {
      if (symbol.type === "cim") {
        return getCIMSymbolColor(symbol as CIMSymbol);
      }

      if ((symbol as Symbol3D).symbolLayers) {
        const symbolLayer = (symbol as Symbol3D).symbolLayers?.getItemAt(0);
        return (symbolLayer as any).material?.color;
      }

      return symbol.color;
    };

    if (classBreakInfos.length > 1) {
      const belowSymbol = classBreakInfos[0].symbol;
      const aboveSymbol = classBreakInfos[1].symbol;

      trackBelowFillColor = getSymbolColor(belowSymbol);
      trackAboveFillColor = getSymbolColor(aboveSymbol);
    }

    if (classBreakInfos.length === 1) {
      trackFillColor = getSymbolColor(classBreakInfos[0].symbol);
    }

    return new BinaryColorSizeSlider({
      max,
      min,
      stops,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      },
      style: {
        trackAboveFillColor,
        trackBelowFillColor,
        trackFillColor
      },
      handlesSyncedToPrimary: true
    });
  }

  /**
   * A convenience function used to update the properties of a BinaryColorSizeSlider widget instance from the
   * {@link module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult result} of
   * the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer createContinuousRenderer}
   * method. This method is useful for cases when the app allows the end user to switch data variables
   * used to render the data.
   *
   * @method updateFromRendererResult
   * @instance
   *
   * @param {module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/size#createContinuousRenderer createContinuousRenderer}
   *   method.
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @example
   * const params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   field: "POP_POVERTY"
   * };
   *
   * let rendererResult = null;
   *
   * sizeRendererCreator
   *   .createContinuousRenderer(colorParams)
   *   .then(function(response) {
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: params.field,
   *       numBins: 30
   *     });
   *   })
   *    .then(function(histogramResult) {
   *      slider.updateFromRendererResult(rendererResult, histogramResult);
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  updateFromRendererResult(result: RendererResult, histogramResult?: HistogramResult): void {
    const {
      size: { visualVariables },
      statistics
    } = result;
    const { avg, stddev } = statistics;
    const sizeVariable = visualVariables[0];
    const stops = sizeVariable.stops;

    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    const classBreakInfos = result.renderer.classBreakInfos;
    let trackAboveFillColor,
      trackBelowFillColor,
      trackFillColor = null;

    const getSymbolColor = (symbol: Symbol): Color => {
      if (symbol.type === "cim") {
        return getCIMSymbolColor(symbol as CIMSymbol);
      }

      if ((symbol as Symbol3D).symbolLayers) {
        const symbolLayer = (symbol as Symbol3D).symbolLayers?.getItemAt(0);
        return (symbolLayer as any).material?.color;
      }

      return symbol.color;
    };

    if (classBreakInfos.length > 1) {
      const belowSymbol = classBreakInfos[0].symbol;
      const aboveSymbol = classBreakInfos[1].symbol;

      trackBelowFillColor = getSymbolColor(belowSymbol);
      trackAboveFillColor = getSymbolColor(aboveSymbol);
    }

    if (classBreakInfos.length === 1) {
      trackFillColor = getSymbolColor(classBreakInfos[0].symbol);
    }
    this.set({
      max,
      min,
      stops,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      },
      style: {
        trackAboveFillColor,
        trackBelowFillColor,
        trackFillColor
      },
      handlesSyncedToPrimary: true
    });
  }

  /**
   * A convenience function used to update the input renderer based on
   * the values of the slider [stops](#stops).
   *
   * @method updateRenderer
   * @instance
   *
   * @param {module:esri/renderers/ClassBreaksRenderer} renderer - The renderer
   *   to update from the slider values.
   * @return {module:esri/renderers/ClassBreaksRenderer} Returns the updated renderer.
   *
   * @example
   * slider.on(["thumb-change", "thumb-drag"], function() {
   *   layer.renderer = slider.updateRenderer( layer.renderer );
   * });
   */
  updateRenderer(renderer: ClassBreaksRenderer): ClassBreaksRenderer {
    if (
      renderer.authoringInfo?.type !== "univariate-color-size" ||
      renderer.authoringInfo?.univariateTheme !== "above-and-below"
    ) {
      console.error("Input renderer must be a univariate renderer with an above-and-below theme.");
      return null;
    }

    const rendererClone = renderer.clone();
    const sizeVariable = rendererClone.visualVariables.find(
      (vv) => vv.type === "size" && vv.target !== "outline" && vv.stops
    ) as SizeVariable;

    const { stops } = this;

    if (!sizeVariable || !stops) {
      console.error("No size stops available.");
      return null;
    }

    const sizeVariableIndex = rendererClone.visualVariables.indexOf(sizeVariable);
    rendererClone.visualVariables.splice(sizeVariableIndex, 1);

    sizeVariable.stops = stops;

    rendererClone.visualVariables.push(sizeVariable);

    const midIndex = stops.length === 5 ? 2 : 1;
    const midValue = stops[midIndex].value;

    rendererClone.classBreakInfos[0].maxValue = midValue;
    rendererClone.classBreakInfos[1].minValue = midValue;

    return rendererClone;
  }

  updateFromVisualVariable(sizeVariable: SizeVariable): void {
    if (!sizeVariable) {
      return;
    }

    const { maxDataValue, minDataValue, stops } = sizeVariable;

    if (stops) {
      this.stops = stops;
    } else {
      const [maxSize, minSize] = getSizesFromVariable(sizeVariable);

      this.stops = [
        new SizeStop({ value: minDataValue, size: minSize }),
        new SizeStop({ value: maxDataValue, size: maxSize })
      ];
    }
  }

  render(): VNode {
    const { state, label } = this;
    const isDisabled = state === "disabled";
    const baseClasses = this.classes(CSS.base, CSS.esriWidget, CSS.esriWidgetPanel, {
      [CSS.disabled]: isDisabled
    });

    return (
      <div aria-label={label} class={baseClasses}>
        {isDisabled
          ? null
          : this.renderContent(this.renderRamp(), CSS.sliderContainer, CSS.histogramContainer)}
      </div>
    );
  }

  protected renderRamp(): VNode {
    const {
      style: { trackBackgroundColor },
      zoomOptions
    } = this;

    return (
      <div afterCreate={storeNode} bind={this} class={CSS.rampElement} data-node-ref="_rampNode">
        <svg key="ramp-svg" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="0"
            y="0"
            fill={getFillFromColor(trackBackgroundColor)}
            height="100%"
            width="100%"
          />
          {this.renderPrimaryRamp()}
          {this.renderPath()}
        </svg>
        {zoomOptions ? this.renderZoomCaps() : null}
      </div>
    );
  }

  protected renderPrimaryRamp(): VNode {
    const {
      _rampFillId,
      style: { trackAboveFillColor, trackBelowFillColor },
      viewModel
    } = this;

    return [
      <defs>
        {this.renderRampFillDefinition(
          _rampFillId,
          viewModel.getGradientStopInfo(trackAboveFillColor, trackBelowFillColor)
        )}
      </defs>
    ];
  }

  protected renderPath(): VNode {
    if (!this._rampNode) {
      return undefined;
    }

    const { offsetHeight = 0, offsetWidth = 0 } = this._rampNode;

    if (!isSome(offsetHeight) || !isSome(offsetWidth)) {
      return undefined;
    }

    const {
      stops,
      viewModel: { max, min },
      _rampFillId,
      _minRampFillWidth
    } = this;

    const path = getDynamicPathForSizeStops({
      max,
      min,
      pathHeight: offsetHeight,
      pathWidth: offsetWidth,
      stops,
      padding: _minRampFillWidth
    });

    return <path d={path} fill={`url(#${_rampFillId})`} />;
  }
}

export default BinaryColorSizeSlider;
