/**
 * The ClassedColorSlider widget is designed for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with color in a {@link module:esri/renderers/ClassBreaksRenderer}.
 * At a minimum you must set the [breaks](#breaks) property
 * of the widget. The breaks are used to set the thumbs and render the color of each slider segment.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![ClassedColorSlider with annotations](../../assets/img/apiref/widgets/sliders/classedcolorslider-labels.png "ClassedColorSlider with annotations")
 *
 * The [fromRendererResult](#fromRendererResult) method can be used to conveniently create this slider
 * from the result of the {@link module:esri/smartMapping/renderers/color#createClassBreaksRenderer createClassBreaksRenderer}
 * method.
 *
 * ```js
 * const params = {
 *   layer: layer,
 *   basemap: map.basemap,
 *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
 *   view: view,
 *   classificationMethod: "equal-interval"
 * };
 *
 * let rendererResult = null;
 *
 * colorRendererCreator
 *   .createClassBreaksRenderer(params)
 *   .then(function(response) {
 *     rendererResult = response;
 *     layer.renderer = response.renderer;
 *
 *     return histogram({
 *       layer: layer,
 *       valueExpression: params.valueExpression,
 *       view: view,
 *       numBins: 70
 *     });
 *   })
 *    .then(function(histogramResult) {
 *      const slider = ClassedColorSlider.fromRendererResult(rendererResult, histogramResult);
 *      slider.container = "slider";
 *    })
 *    .catch(function(error) {
 *      console.log("there was an error: ", error);
 *    });
 * ```
 *
 * This slider should be used to update the {@link module:esri/renderers/ClassBreaksRenderer#classBreaks classBreaks}
 * in a ClassBreaksRenderer. It is the responsibility of the app developer
 * to set up event listeners on this slider that update the breaks of the appropriate renderer.
 *
 * ```js
 * // when the user slides the handle(s), update the renderer
 * // with the updated class breaks
 *
 * slider.on(["thumb-change", "thumb-drag"], function() {
 *   const renderer = layer.renderer.clone();
 *   renderer.classBreakInfos = slider.updateClassBreakInfos( renderer.classBreakInfos );
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/ClassedColorSlider
 * @since 4.12
 *
 * @see [ClassedColorSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/ClassedColorSlider.tsx)
 * @see [ClassedColorSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ClassedColorSlider.scss)
 * @see module:esri/widgets/smartMapping/ClassedColorSlider/ClassedColorSliderViewModel
 * @see {@link module:esri/smartMapping/renderers/color colorRendererCreator}
 * @see module:esri/renderers/ClassBreaksRenderer
 */

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.renderers.smartMapping.statistics
import { HistogramResult } from "esri/../renderers/smartMapping/statistics/interfaces";

// esri.renderers.support
import ClassBreakInfo = require("esri/../renderers/support/ClassBreakInfo");

// esri.smartMapping.renderers
import { ClassBreaksRendererResult } from "esri/../smartMapping/renderers/color";

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.ClassedColorSlider
import ClassedColorSliderViewModel = require("esri/widgets/ClassedColorSlider/ClassedColorSliderViewModel");
import { ColorBreak } from "esri/widgets/ClassedColorSlider/interfaces";

// esri.widgets.smartMapping.ClassedColorSlider.t9n
import ClassedColorSliderMessages from "esri/widgets/ClassedColorSlider/t9n/ClassedColorSlider";

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { messageBundle, renderable, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-classed-color-slider",
  rampElement: "esri-classed-color-slider__ramp",
  sliderContainer: "esri-classed-color-slider__slider-container",
  histogramContainer: "esri-classed-color-slider__histogram-container",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

@subclass("esri.widgets.smartMapping.ClassedColorSlider")
class ClassedColorSlider extends SmartMappingSliderBase {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @constructor
   * @alias module:esri/widgets/smartMapping/ClassedColorSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const slider = new ClassedColorSlider({
   *   container: "sliderDiv",
   *   breaks: [{
   *     min: 0,
   *     max: 20,
   *     color: new Color([ 0, 0, 30 ])
   *   }, {
   *     min: 20,
   *     max: 40,
   *     color: new Color([ 0, 0, 100 ])
   *   }, {
   *     min: 40,
   *     max: 60,
   *     color: new Color([ 0, 0, 180 ])
   *   }, {
   *     min: 60,
   *     max: 80,
   *     color: new Color([ 0, 0, 255 ])
   *   }]
   * });
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);

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
  //  breaks
  //----------------------------------

  /**
   * An array of class breaks with associated colors. The colors mapped to each break can
   * be used to update the renderer of a layer. A minimum of two breaks must be provided to the slider.
   *
   * @property {module:esri/Color} color - Features with values within the provided `min`
   *   and `max` will be rendered with this color.
   * @property {number} max - The max value of the break. The `max` of each break should match the `min`
   *   value of the break directly above it.
   * @property {number} min - The min value of the break. The `min` of each break should match the `max`
   *   value of the break directly below it.
   *
   * @name breaks
   * @instance
   * @type {Object[]}
   *
   * @example
   * slider.breaks = [{
   *   min: 0,
   *   max: 20,
   *   color: new Color([ 0, 0, 30 ])
   * }, {
   *   min: 20,
   *   max: 40,
   *   color: new Color([ 0, 0, 100 ])
   * }, {
   *   min: 40,
   *   max: 60,
   *   color: new Color([ 0, 0, 180 ])
   * }, {
   *   min: 60,
   *   max: 80,
   *   color: new Color([ 0, 0, 255 ])
   * }];
   */
  @aliasOf("viewModel.breaks") breaks: ColorBreak[] = null;

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
  @messageBundle("esri/widgets/smartMapping/ClassedColorSlider/t9n/ClassedColorSlider")
  messages: ClassedColorSliderMessages = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the ClassedColorSlider widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/ClassedColorSlider/ClassedColorSliderViewModel}
   * class to access all properties and methods on the ClassedColorSlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/ClassedColorSlider/ClassedColorSliderViewModel}
   */
  @property()
  @renderable([
    "viewModel.breaks",
    "viewModel.hasTimeData",
    "viewModel.inputFormatFunction",
    "viewModel.inputParseFunction",
    "viewModel.labelFormatFunction",
    "viewModel.max",
    "viewModel.min",
    "viewModel.values"
  ])
  viewModel: ClassedColorSliderViewModel = new ClassedColorSliderViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * A convenience function used to create a ClassedColorSlider widget from the result
   * of the {@link module:esri/smartMapping/renderers/color#createClassBreaksRenderer createClassBreaksRenderer()} method.
   *
   * @method fromRendererResult
   * @static
   *
   * @param {module:esri/smartMapping/renderers/color~ClassBreaksRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/color#createClassBreaksRenderer createClassBreaksRenderer}
   *   method.
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @return {module:esri/widgets/smartMapping/ClassedColorSlider} Returns a ClassedColorSlider instance. This will not render until you assign
   *   it a valid [container](#container).
   *
   * @example
   * const params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
   *   view: view,
   *   classificationMethod: "equal-interval"
   * };
   *
   * let rendererResult = null;
   *
   * colorRendererCreator
   *   .createClassBreaksRenderer(params)
   *   .then(function(response) {
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: params.valueExpression,
   *       view: view,
   *       numBins: 70
   *     });
   *   })
   *    .then(function(histogramResult) {
   *      const slider = ClassedColorSlider.fromRendererResult(rendererResult, histogramResult);
   *      slider.container = "slider";
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   *
   */
  static fromRendererResult(
    result: ClassBreaksRendererResult,
    histogramResult?: HistogramResult
  ): ClassedColorSlider {
    const {
      renderer: { classBreakInfos }
    } = result;
    const breaks: ColorBreak[] = classBreakInfos.map((breakInfo) => {
      const symbol = breakInfo.symbol;
      // does not take 3D symbols into account
      // Need to address this later.
      const color = symbol.color;
      return {
        min: breakInfo.minValue,
        max: breakInfo.maxValue,
        color
      };
    });

    return new ClassedColorSlider({
      breaks,
      histogramConfig: {
        bins: histogramResult ? histogramResult.bins : []
      }
    });
  }

  /**
   * A convenience function used to update the
   * {@link module:esri/renderers/ClassBreaksRenderer#classBreakInfos classBreakInfos}
   * of a {@link module:esri/renderers/ClassBreaksRenderer} associated with this slider.
   *
   * The number of breaks from the renderer must match the number of breaks in the slider.
   * Generally, the input breaks for this method should come from the same renderer as one
   * used to create the slider with the [fromRendererResult](#fromRendererResult) method.
   *
   * @method updateClassBreakInfos
   * @instance
   *
   * @param {module:esri/renderers/support/ClassBreakInfo[]} breakInfos - The classBreakInfos
   *   from a {@link module:esri/renderers/ClassBreaksRenderer} instance to update based on
   *   the properties of the slider.
   *
   * @return {module:esri/renderers/support/ClassBreakInfo[]} The updated classBreakInfos to set
   *   on a ClassBreaksRenderer object.
   *
   * @example
   * slider.on(["thumb-change", "thumb-drag"], function() {
   *   const renderer = layer.renderer.clone();
   *   renderer.classBreakInfos = slider.updateClassBreakInfos( renderer.classBreakInfos );
   *   layer.renderer = renderer;
   * });
   */
  updateClassBreakInfos(breakInfos: ClassBreakInfo[]): ClassBreakInfo[] {
    const breaks = this.breaks;

    if (breaks.length !== breakInfos.length) {
      console.error(
        `Number of input breakInfos must match number of slider breaks: ${breaks.length}`
      );
      return undefined;
    }

    return breakInfos.map((breakInfo, i) => {
      const symbol = breakInfo.symbol;

      // does not take 3D symbols into account
      // Need to address this later.
      symbol.color = breaks[i].color;

      return new ClassBreakInfo({
        minValue: breaks[i].min,
        maxValue: breaks[i].max,
        symbol
      });
    });
  }

  /**
   * A convenience function used to update the properties a ClassedColorSlider from the result
   * of the {@link module:esri/smartMapping/renderers/color#createClassBreaksRenderer createClassBreaksRenderer()} method.
   *
   * @method updateFromRendererResult
   * @instance
   *
   * @param {module:esri/smartMapping/renderers/color~ClassBreaksRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/color#createClassBreaksRenderer createClassBreaksRenderer}
   *   method.
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @example
   * const params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   valueExpression: "( $feature.POP_POVERTY / $feature.TOTPOP_CY ) * 100",
   *   view: view,
   *   classificationMethod: "equal-interval"
   * };
   *
   * let rendererResult = null;
   *
   * colorRendererCreator
   *   .createClassBreaksRenderer(params)
   *   .then(function(response) {
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       valueExpression: params.valueExpression,
   *       view: view,
   *       numBins: 70
   *     });
   *   })
   *    .then(function(histogramResult) {
   *      const slider = ClassedColorSlider.fromRendererResult(rendererResult, histogramResult);
   *      slider.container = "slider";
   *    })
   *    .catch(function(error) {
   *      console.log("there was an error: ", error);
   *    });
   */
  updateFromRendererResult(
    result: ClassBreaksRendererResult,
    histogramResult?: HistogramResult
  ): void {
    const {
      renderer: { classBreakInfos }
    } = result;
    const breaks: ColorBreak[] = classBreakInfos.map((breakInfo) => {
      const symbol = breakInfo.symbol;
      // does not take 3D symbols into account
      // Need to address this later.
      const color = symbol.color;
      return {
        min: breakInfo.minValue,
        max: breakInfo.maxValue,
        color
      };
    });

    this.set({
      breaks,
      histogramConfig: {
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
    const { _bgFillId, _rampFillId, viewModel } = this;
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
      </div>
    );
  }
}

export = ClassedColorSlider;
