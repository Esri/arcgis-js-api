/**
 * The ColorSlider widget is intended for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with a {@link module:esri/renderers/visualVariables/ColorVariable}.
 * At a minimum you must set the [min](#min), [max](#max), and [stops](#stops) properties
 * of the widget. The stops are used to render a color gradient on the track of the slider.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![ColorSlider with annotations](../../assets/img/apiref/widgets/sliders/colorslider-2-labels.png "ColorSlider with annotations")
 *
 * The [fromRendererResult](#fromRendererResult) method can be used to conveniently create this slider
 * from the result of the {@link module:esri/renderers/smartMapping/creators/color#createContinuousRenderer createContinuousRenderer}
 * method.
 *
 * ```js
 * const colorParams = {
 *   layer: layer,
 *   basemap: map.basemap,
 *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
 *   view: view,
 *   theme: "above-and-below"
 * };
 *
 * let rendererResult = null;
 *
 * colorRendererCreator
 *   .createContinuousRenderer(colorParams)
 *   .then(function(response) {
 *     rendererResult = response;
 *     layer.renderer = response.renderer;
 *
 *     return histogram({
 *       layer: layer,
 *       valueExpression: colorParams.valueExpression,
 *       view: view,
 *       numBins: 70
 *     });
 *   })
 *    .then(function(histogramResult) {
 *      const colorSlider = ColorSlider.fromRendererResult(rendererResult, histogramResult);
 *      colorSlider.container = "slider";
 *      colorSlider.primaryHandleEnabled = true;
 *    })
 *    .catch(function(error) {
 *      console.log("there was an error: ", error);
 *    });
 * ```
 *
 * This slider should be used to update a {@link module:esri/renderers/visualVariables/ColorVariable color visual variable}
 * in a layer's renderer. It is the responsibility of the app developer
 * to set up event listeners on this slider that update the color variable of the appropriate renderer.
 *
 * ```js
 * // when the user slides the handle(s), update the renderer
 * // with the updated color stops
 *
 * colorSlider.on(["thumb-change", "thumb-drag"], function() {
 *   const renderer = layer.renderer.clone();
 *   const colorVariable = renderer.visualVariables[0].clone();
 *   colorVariable.stops = colorSlider.stops;
 *   renderer.visualVariables = [ colorVariable ];
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/ColorSlider
 * @since 4.12
 *
 * @see [ColorSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/ColorSlider.tsx)
 * @see [ColorSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ColorSlider.scss)
 * @see module:esri/widgets/smartMapping/ColorSlider/ColorSliderViewModel
 * @see {@link module:esri/renderers/smartMapping/creators/color colorRendererCreator}
 */

/// <amd-dependency path="esri/../core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/../core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/ColorSlider/nls/ColorSlider";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.renderers.smartMapping.creators
import { ContinuousRendererResult } from "esri/../renderers/smartMapping/creators/color";

// esri.renderers.smartMapping.statistics
import { HistogramResult } from "esri/../renderers/smartMapping/statistics/interfaces";

// esri.renderers.visualVariables.support
import ColorStop = require("esri/../renderers/visualVariables/support/ColorStop");

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.ColorSlider
import ColorSliderViewModel = require("esri/widgets/ColorSlider/ColorSliderViewModel");

// esri.widgets.smartMapping.support
import { ZoomOptions } from "esri/widgets/support/interfaces";

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { renderable, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-color-slider",
  rampElement: "esri-color-slider__ramp",
  sliderContainer: "esri-color-slider__slider-container",
  histogramContainer: "esri-color-slider__histogram-container",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

@subclass("esri.widgets.smartMapping.ColorSlider")
class ColorSlider extends declared(SmartMappingSliderBase) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @constructor
   * @alias module:esri/widgets/smartMapping/ColorSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * // rendererResponse is result of color.createContinuousRenderer()
   * const slider = new ColorSlider({
   *   container: "sliderDiv",
   *   min: rendererResponse.statistics.min,
   *   max: rendererResponse.statistics.max,
   *   stops: rendererResponse.visualVariable.stops
   * });
   */
  constructor(params?: any) {
    super(params);

    this.viewModel && this.viewModel.set("thumbsConstrained", false);

    // For SVG fills
    this._bgFillId = `${this.id}-bg-fill`;
    this._rampFillId = `${this.id}-linear-gradient`;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _bgFillId: string = null;

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
  @property() label: string = i18n.widgetLabel;

  //----------------------------------
  //  primaryHandleEnabled
  //----------------------------------

  /**
   * When `true`, the slider will render a third handle between the
   * two handles already provided by default. This is the primary handle.
   * When [handlesSyncedToPrimary](#handlesSyncedToPrimary) is `true`, then
   * this handle will control the position of the others when moved.
   *
   * @name primaryHandleEnabled
   * @instance
   * @type {boolean}
   * @default false
   *
   * @see [handlesSyncedToPrimary](#handlesSyncedToPrimary)
   *
   * @example
   * // enables the primary handles and syncs it with the others
   * slider.primaryHandleEnabled = true;
   * slider.handlesSyncedToPrimary = true;
   */
  @aliasOf("viewModel.primaryHandleEnabled") primaryHandleEnabled: boolean = null;

  //----------------------------------
  //  stops
  //----------------------------------

  /**
   * The color stops from the {@link module:esri/renderers/visualVariables/ColorVariable}
   * to link to the slider. The colors in these stops will be used
   * to render the color gradient on the slider's track. They should match the colors
   * rendered in the associated layer's renderer.
   *
   * @name stops
   * @instance
   * @type {module:esri/renderers/visualVariables/support/ColorStop[]}
   *
   * @example
   * colorRendererCreator.createContinuousRenderer({
   *   layer: featureLayer,
   *   field: "fieldName",
   *   basemap: "gray"
   * }).then(function(colorResponse){
   *   var slider = new ColorSlider({
   *     stops: colorResponse.visualVariable.stops,
   *     min: colorResponse.statistics.min,
   *     max: colorResponse.statistics.max,
   *     container: "sliderDiv"
   *   });
   * });
   */
  @aliasOf("viewModel.stops") stops: ColorStop[] = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the ColorSlider widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/ColorSlider/ColorSliderViewModel}
   * class to access all properties and methods on the ColorSlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/ColorSlider/ColorSliderViewModel}
   */
  @property()
  @renderable([
    "viewModel.handlesSyncedToPrimary",
    "viewModel.hasTimeData",
    "viewModel.inputFormatFunction",
    "viewModel.inputParseFunction",
    "viewModel.labelFormatFunction",
    "viewModel.max",
    "viewModel.min",
    "viewModel.primaryHandleEnabled",
    "viewModel.stops",
    "viewModel.values",
    "viewModel.zoomOptions"
  ])
  viewModel: ColorSliderViewModel = new ColorSliderViewModel();

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
   * A convenience function used to create a ColorSlider widget instance from the
   * {@link module:esri/renderers/smartMapping/creators/color~ContinuousRendererResult result} of
   * the {@link module:esri/renderers/smartMapping/creators/color#createContinuousRenderer createContinuousRenderer}
   * method.
   *
   * This method sets the slider [stops](#stops), [min](#min), [max](#maxDataValue),
   * and [histogramConfig](#histogramConfig). It is still the developer's responsibility to assign it a proper
   * [container](#container) and any other optional properties, such as [primaryHandleEnabled](#primaryHandleEnabled).
   *
   * @method fromRendererResult
   * @static
   *
   * @param {module:esri/renderers/smartMapping/creators/color~ContinuousRendererResult} rendererResult -
   *   The result object from the {@link module:esri/renderers/smartMapping/creators/color#createContinuousRenderer createContinuousRenderer}
   *   method.
   * @param {module:esri/renderers/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/renderers/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @return {module:esri/widgets/smartMapping/ColorSlider} Returns a ColorSlider instance. This will not render until you assign
   *   it a valid [container](#container).
   *
   * @example
   * const colorParams = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
   *   view: view,
   *   theme: "above-and-below"
   * };
   *
   * let rendererResult = null;
   *
   * colorRendererCreator
   *   .createContinuousRenderer(colorParams)
   *   .then(function(response) {
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: colorParams.valueExpression,
   *       view: view,
   *       numBins: 70
   *     });
   *   })
   *    .then(function(histogramResult) {
   *
   *      const colorSlider = ColorSlider.fromRendererResult(rendererResult, histogramResult);
   *      colorSlider.container = "slider";
   *      colorSlider.primaryHandleEnabled = true;
   *
   *      // when the user slides the handle(s), update the renderer
   *      // with the updated color stops
   *
   *      colorSlider.on(["thumb-change", "thumb-drag"], function() {
   *        const renderer = layer.renderer.clone();
   *        const colorVariable = renderer.visualVariables[0].clone();
   *        colorVariable.stops = colorSlider.stops;
   *        renderer.visualVariables = [ colorVariable ];
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
  ): ColorSlider {
    const {
      visualVariable: { stops },
      statistics
    } = result;
    const { avg, stddev } = statistics;
    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables.filter(
      (vv) => vv.type === "color"
    )[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    return new ColorSlider({
      max,
      min,
      stops,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      },
      primaryHandleEnabled: authoringInfoVisualVariable.theme !== "high-to-low"
    });
  }

  /**
   * A convenience function used to update the properties of a ColorSlider widget instance from the
   * {@link module:esri/renderers/smartMapping/creators/color~ContinuousRendererResult result} of
   * the {@link module:esri/renderers/smartMapping/creators/color#createContinuousRenderer createContinuousRenderer}
   * method. This method is useful for cases when the app allows the end user to switch data variables
   * used to render the data.
   *
   * @method updateFromRendererResult
   * @instance
   *
   * @see [fromRendererResult()](#fromRendererResult)
   *
   * @param {module:esri/renderers/smartMapping/creators/color~ContinuousRendererResult} rendererResult -
   *   The result object from the {@link module:esri/renderers/smartMapping/creators/color#createContinuousRenderer createContinuousRenderer}
   *   method.
   * @param {module:esri/renderers/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/renderers/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @example
   * const colorParams = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
   *   view: view,
   *   theme: "above-and-below"
   * };
   *
   * let rendererResult = null;
   *
   * colorRendererCreator
   *   .createContinuousRenderer(colorParams)
   *   .then(function(response) {
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: colorParams.valueExpression,
   *       view: view,
   *       numBins: 70
   *     });
   *   })
   *    .then(function(histogramResult) {
   *      colorSlider.updateFromRendererResult(rendererResult, histogramResult);
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  updateFromRendererResult(
    result: ContinuousRendererResult,
    histogramResult?: HistogramResult
  ): void {
    const {
      visualVariable: { stops },
      statistics
    } = result;
    const { avg, stddev } = statistics;
    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables.filter(
      (vv) => vv.type === "color"
    )[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    this.set({
      max,
      min,
      stops,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      },
      primaryHandleEnabled: authoringInfoVisualVariable.theme !== "high-to-low"
    });
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
    const { _bgFillId, _rampFillId, viewModel, zoomOptions } = this;
    const stopInfos = viewModel.getStopInfo();

    return (
      <div class={CSS.rampElement}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            {this.renderRampFillDefinition(_rampFillId, stopInfos)}
            {this.renderBackgroundFillDefinition(_bgFillId)}
          </defs>
          <rect x="0" y="0" fill={`url(#${_bgFillId})`} height="100%" width="100%" />
          <rect x="0" y="0" fill={`url(#${_rampFillId})`} height="100%" width="100%" />
        </svg>
        {zoomOptions ? this.renderZoomCaps() : null}
      </div>
    );
  }
}

export = ColorSlider;
