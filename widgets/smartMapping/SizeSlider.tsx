/**
 * The SizeSlider widget is intended for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with a {@link module:esri/renderers/visualVariables/SizeVariable}.
 * At a minimum you must set the [min](#min), [max](#max), and [stops](#stops) properties
 * of the widget.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![SizeSlider with annotations](../../assets/img/apiref/widgets/sliders/sizeslider-labels.png "SizeSlider with annotations")
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
 *      const sizeSlider = SizeSlider.fromRendererResult(rendererResult, histogramResult);
 *      sizeSlider.container = "slider";
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
 * sizeSlider.on(["thumb-change", "thumb-drag"], function() {
 *   const renderer = layer.renderer.clone();
 *   const sizeVariable = renderer.visualVariables[0];
 *   renderer.visualVariables = [ sizeSlider.updateVisualVariable(sizeVariable) ];
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/SizeSlider
 * @since 4.12
 *
 * @see [SizeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/SizeSlider.tsx)
 * @see [SizeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_SizeSlider.scss)
 * @see module:esri/widgets/smartMapping/SizeSlider/SizeSliderViewModel
 * @see {@link module:esri/smartMapping/renderers/size sizeRendererCreator}
 */

// esri
import Color = require("esri/../Color");

// esri.core
import { isSome } from "esri/../core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.renderers.visualVariables
import SizeVariable = require("esri/../renderers/visualVariables/SizeVariable");

// esri.renderers.visualVariables.support
import SizeStop = require("esri/../renderers/visualVariables/support/SizeStop");

// esri.smartMapping.renderers
import { ContinuousRendererResult } from "esri/../smartMapping/renderers/size";

// esri.smartMapping.statistics
import { HistogramResult } from "esri/../smartMapping/statistics/interfaces";

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.SizeSlider
import SizeSliderViewModel = require("esri/widgets/SizeSlider/SizeSliderViewModel");

// esri.widgets.smartMapping.SizeSlider.t9n
import SizeSliderMessages from "esri/widgets/SizeSlider/t9n/SizeSlider";

// esri.widgets.smartMapping.support
import { ZoomOptions } from "esri/widgets/support/interfaces";
import { getPathForSizeStops, getSizesFromVariable, getFillFromColor } from "esri/widgets/support/utils";

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { messageBundle, renderable, storeNode, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-size-slider",
  rampElement: "esri-size-slider__ramp",
  sliderContainer: "esri-size-slider__slider-container",
  histogramContainer: "esri-size-slider__histogram-container",
  zoomCapTop: "esri-size-slider__zoom-cap-top",
  zoomCapBottom: "esri-size-slider__zoom-cap-bottom",
  zoomCapLine: "esri-size-slider__zoom-cap-line",
  zoomCapMask: "esri-size-slider__zoom-cap-mask",
  zoomCapUnderline: "esri-size-slider__zoom-cap-underline",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

const DEFAULT_STYLE = {
  trackFillColor: new Color([149, 149, 149]),
  trackBackgroundColor: new Color([224, 224, 224])
};

interface SizeSliderStyle {
  trackFillColor?: Color;
  trackBackgroundColor?: Color;
}

@subclass("esri.widgets.smartMapping.SizeSlider")
class SizeSlider extends SmartMappingSliderBase {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @constructor
   * @alias module:esri/widgets/smartMapping/SizeSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const slider = new SizeSlider({
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
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _maxRampFillWidth = 1;

  private _minRampFillWidth = 0.2;

  private _rampNode: HTMLElement = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

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
   * to link to the slider.
   *
   * @name stops
   * @instance
   * @type {module:esri/renderers/visualVariables/support/SizeStop[]}
   *
   * @see [updateVisualVariable()](#updateVisualVariable)
   *
   * @example
   * const slider = new SizeSlider({
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
   * @property {module:esri/Color} [trackFillColor=new Color([149, 149, 149])] - The color of the slider's track.
   *   For single-color visualizations where
   *   only a Size variable is present, you should set this color to match
   *   the color of the symbol in the {@link module:esri/renderers/SimpleRenderer}.
   * @todo doc later \@autocast { "name": "trackFillColor", "value": "Object | Number[] | String" }
   * @property {module:esri/Color} [trackBackgroundColor=new Color([224, 224, 224])] - The background color of the
   *   slider's track. Generally, this color should be subdued and not interfere with the `trackFillColor`.
   * @todo doc later \@autocast { "name": "trackBackgroundColor", "value": "Object | Number[] | String" }
   *
   * @example
   * slider.style = {
   *   trackFillColor: new Color("dodgerblue"),
   *   trackBackgroundColor: new Color([50,50,50])
   * };
   */
  @property()
  @renderable()
  style: SizeSliderStyle = { ...DEFAULT_STYLE };

  @cast("style")
  protected castStyle(value: Partial<SizeSliderStyle>): SizeSliderStyle {
    return { ...DEFAULT_STYLE, ...value };
  }

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the SizeSlider widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/SizeSlider/SizeSliderViewModel}
   * class to access all properties and methods on the SizeSlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/SizeSlider/SizeSliderViewModel}
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
  viewModel: SizeSliderViewModel = new SizeSliderViewModel();

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
   * A convenience function used to create a SizeSlider widget instance from the
   * {@link module:esri/smartMapping/renderers/size~ContinuousRendererResult result} of
   * the {@link module:esri/smartMapping/renderers/size#createContinuousRenderer createContinuousRenderer}
   * method.
   *
   * This method sets the slider [stops](#stops), [min](#min), [max](#maxDataValue),
   * and [histogramConfig](#histogramConfig). It is still the developer's responsibility to assign it a proper
   * [container](#container) and any other optional properties.
   *
   * @method fromRendererResult
   * @static
   *
   * @param {module:esri/smartMapping/renderers/size~ContinuousRendererResult} rendererResult -
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
   *      const sizeSlider = SizeSlider.fromRendererResult(rendererResult, histogramResult);
   *      sizeSlider.container = "slider";
   *
   *      // when the user slides the handle(s), update the renderer
   *      // with the updated size properties
   *
   *      sizeSlider.on(["thumb-change", "thumb-drag"], function() {
   *        const renderer = layer.renderer.clone();
   *        const sizeVariable = renderer.visualVariables[0];
   *        renderer.visualVariables = [ sizeSlider.updateVisualVariable( sizeVariable ) ];
   *        layer.renderer = renderer;
   *      });
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  static fromRendererResult(
    result: ContinuousRendererResult,
    histogramResult?: HistogramResult
  ): SizeSlider {
    const { visualVariables, statistics } = result;
    const { avg, stddev } = statistics;
    const sizeVariable = visualVariables[0];
    const [maxSize, minSize] = getSizesFromVariable(sizeVariable);

    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    return new SizeSlider({
      max,
      min,
      stops: [
        { value: sizeVariable.minDataValue, size: minSize },
        { value: sizeVariable.maxDataValue, size: maxSize }
      ],
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      }
    });
  }

  /**
   * A convenience function used to update the properties of a SizeSlider widget instance from the
   * {@link module:esri/smartMapping/renderers/size~ContinuousRendererResult result} of
   * the {@link module:esri/smartMapping/renderers/size#createContinuousRenderer createContinuousRenderer}
   * method. This method is useful for cases when the app allows the end user to switch data variables
   * used to render the data.
   *
   * @method updateFromRendererResult
   * @instance
   *
   * @param {module:esri/smartMapping/renderers/size~ContinuousRendererResult} rendererResult -
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
   *      sizeSlider.updateFromRendererResult(rendererResult, histogramResult);
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  updateFromRendererResult(
    result: ContinuousRendererResult,
    histogramResult?: HistogramResult
  ): void {
    const { visualVariables, statistics } = result;
    const { avg, stddev } = statistics;
    const sizeVariable = visualVariables[0];
    const [maxSize, minSize] = getSizesFromVariable(sizeVariable);

    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    this.set({
      max,
      min,
      stops: [
        { value: sizeVariable.minDataValue, size: minSize },
        { value: sizeVariable.maxDataValue, size: maxSize }
      ],
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      }
    });
  }

  /**
   * A convenience function used to update the {@link module:esri/renderers/visualVariables/SizeVariable}
   * to match the values of the [stops](#stops) on the slider.
   *
   * This is particularly useful for Size visual variables that have a set
   * {@link module:esri/renderers/visualVariables/SizeVariable#minDataValue minDataValue} and
   * {@link module:esri/renderers/visualVariables/SizeVariable#minDataValue maxDataValue}.
   * This method will properly reconstruct the variable to set on the renderer so it matches the
   * stops on the slider.
   *
   * @method updateVisualVariable
   * @instance
   *
   * @param {module:esri/renderers/visualVariables/SizeVariable} sizeVariable - The size visual variable
   *   from the renderer to update to the set [stops](#stops) on the slider.
   * @return {module:esri/renderers/visualVariables/SizeVariable} Returns the updated visual variable
   *   to set back on the renderer.
   *
   * @example
   * sizeSlider.on(["thumb-change", "thumb-drag"], function() {
   *   const renderer = layer.renderer.clone();
   *   const sizeVariable = renderer.visualVariables[0];
   *   renderer.visualVariables = [ sizeSlider.updateVisualVariable( sizeVariable ) ];
   *   layer.renderer = renderer;
   * });
   */
  updateVisualVariable(sizeVariable: SizeVariable): SizeVariable {
    const variableClone = sizeVariable.clone();
    const { stops } = this;

    if (!sizeVariable || !stops) {
      return null;
    }

    // Stops included
    if (variableClone.stops) {
      variableClone.stops = stops;

      return variableClone;
    }

    const firstStop = stops[0];
    const lastStop = stops[stops.length - 1];

    let maxSize = variableClone.maxSize;
    let minSize = variableClone.minSize;

    if (maxSize instanceof SizeVariable) {
      const stops = maxSize.stops;
      const factor = lastStop.size / stops[0].size;
      const newStops = stops.map((stop) => {
        stop.size *= factor;

        return stop;
      });

      maxSize.stops = newStops;
    } else {
      maxSize = lastStop.size;
    }

    if (minSize instanceof SizeVariable) {
      const stops = minSize.stops;
      const factor = firstStop.size / stops[0].size;
      const newStops = stops.map((stop) => {
        stop.size *= factor;

        return stop;
      });

      minSize.stops = newStops;
    } else {
      minSize = firstStop.size;
    }

    variableClone.set({
      maxDataValue: lastStop.value,
      minDataValue: firstStop.value,
      maxSize,
      minSize
    });

    return variableClone;
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
          {this.renderPath()}
        </svg>
        {zoomOptions ? this.renderZoomCaps() : null}
      </div>
    );
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
      style: { trackFillColor },
      values,
      viewModel: { max, min },
      _maxRampFillWidth,
      _minRampFillWidth
    } = this;

    const widths = [_maxRampFillWidth, _minRampFillWidth];

    if (stops[0].size < stops[stops.length - 1].size) {
      widths.reverse();
    }

    const [bottomWidth, topWidth] = widths;
    const [bottomValue, topValue] = values;

    const path = getPathForSizeStops({
      bottomValue,
      bottomWidth,
      max,
      min,
      pathHeight: offsetHeight,
      pathWidth: offsetWidth,
      topValue,
      topWidth
    });

    return <path d={path} fill={getFillFromColor(trackFillColor)} />;
  }
}

export = SizeSlider;
