/**
 * The OpacitySlider widget is intended for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with an {@link module:esri/renderers/visualVariables/OpacityVariable}.
 * At a minimum you must set the [min](#min), [max](#max), and [stops](#stops) properties
 * of the widget. The stops are used to render the opacity gradient on the track of the slider.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![OpacitySlider with annotations](../../assets/img/apiref/widgets/sliders/opacityslider-labels.png "OpacitySlider with annotations")
 *
 * The [fromVisualVariableResult](#fromVisualVariableResult) method can be used to conveniently create this slider
 * from the result of the {@link module:esri/renderers/smartMapping/creators/opacity#createVisualVariable createVisualVariable}
 * method.
 *
 * ```js
 * const params = {
 *   layer: layer,
 *   basemap: map.basemap,
 *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
 *   view: view
 * };
 *
 * let variableResult = null;
 *
 * opacityVariableCreator
 *   .createVisualVariable(params)
 *   .then(function(response) {
 *     variableResult = response;
 *     layer.renderer.visualVariables = [ response.visualVariable ];
 *
 *     return histogram({
 *       layer: layer,
 *       valueExpression: params.valueExpression,
 *       view: view,
 *       numBins: 70
 *     });
 *   })
 *    .then(function(histogramResult) {
 *      const slider = OpacitySlider.fromVisualVariableResult(variableResult, histogramResult);
 *      slider.container = "slider";
 *    })
 *    .catch(function(error) {
 *      console.log("there was an error: ", error);
 *    });
 * ```
 *
 * This slider should be used to update an {@link module:esri/renderers/visualVariables/OpacityVariable opacity visual variable}
 * in a layer's renderer. It is the responsibility of the app developer
 * to set up event listeners on this slider to update the opacity variable of the appropriate renderer.
 *
 * ```js
 * // when the user slides the handle(s), update the renderer
 * // with the updated opacity stops
 *
 * slider.on(["thumb-change", "thumb-drag"], function() {
 *   const renderer = layer.renderer.clone();
 *   const opacityVariable = renderer.visualVariables[0].clone();
 *   opacityVariable.stops = slider.stops;
 *   renderer.visualVariables = [ opacityVariable ];
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/OpacitySlider
 * @since 4.12
 *
 * @see [OpacitySlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/OpacitySlider.tsx)
 * @see [OpacitySlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_OpacitySlider.scss)
 * @see module:esri/widgets/smartMapping/OpacitySlider/OpacitySliderViewModel
 * @see {@link module:esri/renderers/smartMapping/creators/opacity opacityVariableCreator}
 */

/// <amd-dependency path="esri/../core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/../core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/OpacitySlider/nls/OpacitySlider";

// esri
import Color = require("esri/../Color");

// esri.core.accessorSupport
import { aliasOf, cast, declared, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.renderers.smartMapping.creators
import { VisualVariableResult } from "esri/../renderers/smartMapping/creators/opacity";

// esri.renderers.smartMapping.statistics
import { HistogramResult } from "esri/../renderers/smartMapping/statistics/interfaces";

// esri.renderers.visualVariables.support
import OpacityStop = require("esri/../renderers/visualVariables/support/OpacityStop");

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.OpacitySlider
import OpacitySliderViewModel = require("esri/widgets/OpacitySlider/OpacitySliderViewModel");

// esri.widgets.smartMapping.support
import { ZoomOptions } from "esri/widgets/support/interfaces";

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { renderable, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-opacity-slider",
  rampElement: "esri-opacity-slider__ramp",
  sliderContainer: "esri-opacity-slider__slider-container",
  histogramContainer: "esri-opacity-slider__histogram-container",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

const DEFAULT_STYLE = { trackFillColor: new Color([0, 121, 193]) };

interface OpacitySliderStyle {
  trackFillColor?: Color;
}

@subclass("esri.widgets.smartMapping.OpacitySlider")
class OpacitySlider extends declared(SmartMappingSliderBase) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @constructor
   * @alias module:esri/widgets/smartMapping/OpacitySlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const slider = new OpacitySlider({
   *   container: "sliderDiv",
   *   statistics: stats,  // object generated from summaryStatistics()
   *   stops: response.visualVariable.stops,  // opacity visual variable generated from the opacityVariableCreator
   * });
   */
  constructor(params?: any) {
    super(params);

    // For SVG fills
    this._rampFillId = `${this.id}-ramp-fill`;
    this._bgFillId = `${this.id}-bg-fill`;
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
  //  stops
  //----------------------------------

  /**
   * The opacity stops from the {@link module:esri/renderers/visualVariables/OpacityVariable}
   * to link to the slider. The opacity values in these stops will be used
   * to render the gradient on the slider. They should match the opacity
   * rendered in the associated layer's opacity visual variable.
   *
   * @name stops
   * @instance
   * @type {module:esri/renderers/visualVariables/support/OpacityStop[]}
   *
   * @example
   * opacityVariableCreator.createContinuousRenderer({
   *   layer: featureLayer,
   *   field: "fieldName",
   *   basemap: "gray"
   * }).then(function(opacityResponse){
   *   const slider = new OpacitySlider({
   *     stops: opacityResponse.visualVariable.stops,
   *     container: "sliderDiv"
   *   });
   * });
   */
  @aliasOf("viewModel.stops") stops: OpacityStop[] = null;

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
   * @property {module:esri/Color} [trackFillColor=new Color([0, 121, 193])] - The color of the slider's track.
   *   For single-color visualizations where
   *   only an Opacity variable is present, you should set this color to match
   *   the color of the symbol in the {@link module:esri/renderers/SimpleRenderer}.
   * @todo @autocast { "name": "trackFillColor", "value": "Object | Number[] | String" }
   *
   * @example
   * slider.style.trackFillColor = new Color("dodgerblue");
   */
  @property()
  @renderable()
  style: OpacitySliderStyle = { ...DEFAULT_STYLE };

  @cast("style")
  protected castStyle(value: Partial<OpacitySliderStyle>): OpacitySliderStyle {
    return { ...DEFAULT_STYLE, ...value };
  }

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the OpacitySlider widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/OpacitySlider/OpacitySliderViewModel}
   * class to access all properties and methods on the OpacitySlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/OpacitySlider/OpacitySliderViewModel}
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
  viewModel: OpacitySliderViewModel = new OpacitySliderViewModel();

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
   * A convenience function used to create an OpacitySlider widget instance from the
   * {@link module:esri/renderers/smartMapping/creators/opacity~VisualVariableResult result} of
   * the {@link module:esri/renderers/smartMapping/creators/opacity#createVisualVariable createVisualVariable}
   * method.
   *
   * This method sets the slider [stops](#stops), [min](#min), [max](#maxDataValue),
   * and [histogramConfig](#histogramConfig). It is still the developer's responsibility to assign it a proper
   * [container](#container) and any other optional properties.
   *
   * @method fromVisualVariableResult
   * @static
   *
   * @param {module:esri/renderers/smartMapping/creators/opacity~VisualVariableResult} visualVariableResult -
   *   The result object from the {@link module:esri/renderers/smartMapping/creators/opacity#createVisualVariable createVisualVariable}
   *   method.
   * @param {module:esri/renderers/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/renderers/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   * @return {module:esri/widgets/smartMapping/OpacitySlider} Returns an OpacitySlider instance. This will not render until you assign
   *   it a valid [container](#container).
   *
   * @example
   * const params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
   *   view: view
   * };
   *
   * let vvResult = null;
   *
   * opacityVariableCreator
   *   .createVisualVariable(params)
   *   .then(function(response) {
   *     vvResult = response;
   *     const renderer = layer.renderer.clone();
   *     renderer.visualVariables = [ vvResult.visualVariable ]
   *     layer.renderer = renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: params.valueExpression,
   *       view: view,
   *       numBins: 70
   *     });
   *   })
   *    .then(function(histogramResult) {
   *
   *      const opacitySlider = OpacitySlider.fromVisualVariableResult(vvResult, histogramResult);
   *      opacitySlider.container = "slider";
   *
   *      // when the user slides the handle(s), update the renderer
   *      // with the updated opacity stops
   *
   *      opacitySlider.on(["thumb-change", "thumb-drag"], function() {
   *        const renderer = layer.renderer.clone();
   *        const opacityVariable = renderer.visualVariables[0].clone();
   *        opacityVariable.stops = opacitySlider.stops;
   *        renderer.visualVariables = [ opacityVariable ];
   *        layer.renderer = renderer;
   *      });
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  static fromVisualVariableResult(
    result: VisualVariableResult,
    histogramResult?: HistogramResult
  ): OpacitySlider {
    const {
      visualVariable: { stops },
      statistics
    } = result;
    const { avg, max, min, stddev } = statistics;

    return new OpacitySlider({
      max,
      min,
      stops,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      }
    });
  }

  /**
   * A convenience function used to update the properties of an OpacitySlider widget instance from the
   * {@link module:esri/renderers/smartMapping/creators/opacity~VisualVariableResult result} of
   * the {@link module:esri/renderers/smartMapping/creators/opacity#createVisualVariable createVisualVariable}
   * method. This method is useful for cases when the app allows the end user to switch data variables
   * used to render the data.
   *
   * @method updateFromVisualVariableResult
   * @instance
   *
   * @param {module:esri/renderers/smartMapping/creators/opacity~VisualVariableResult} visualVariableResult -
   *   The result object from the {@link module:esri/renderers/smartMapping/creators/opacity#createVisualVariable createVisualVariable}
   *   method.
   * @param {module:esri/renderers/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/renderers/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @example
   * const params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
   *   view: view
   * };
   *
   * let vvResult = null;
   *
   * opacityVariableCreator
   *   .createVisualVariable(params)
   *   .then(function(response) {
   *     vvResult = response;
   *     const renderer = layer.renderer.clone();
   *     renderer.visualVariables = [ vvResult.visualVariable ]
   *     layer.renderer = renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: params.valueExpression,
   *       view: view,
   *       numBins: 70
   *     });
   *   })
   *    .then(function(histogramResult) {
   *      opacitySlider.updateFromVisualVariableResult(vvResult, histogramResult);
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  updateFromVisualVariableResult(
    result: VisualVariableResult,
    histogramResult?: HistogramResult
  ): void {
    const {
      visualVariable: { stops },
      statistics
    } = result;
    const { avg, max, min, stddev } = statistics;

    this.set({
      max,
      min,
      stops,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      }
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
    const {
      _bgFillId,
      _rampFillId,
      style: { trackFillColor },
      viewModel,
      zoomOptions
    } = this;
    const stopInfos = viewModel.getStopInfo(trackFillColor);

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

export = OpacitySlider;
