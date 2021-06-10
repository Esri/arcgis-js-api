/**
 * The ClassedSizeSlider widget is designed for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with size in a {@link module:esri/renderers/ClassBreaksRenderer}.
 * At a minimum you must set the [breaks](#breaks) property
 * of the widget. The breaks are used to set the slider's thumbs.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![ClassedSizeSlider with annotations](../assets/img/apiref/widgets/sliders/classedsizeslider-labels.png "ClassedSizeSlider with annotations")
 *
 * The [fromRendererResult](#fromRendererResult) method can be used to conveniently create this slider
 * from the result of the {@link module:esri/smartMapping/renderers/size#createClassBreaksRenderer createClassBreaksRenderer}
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
 * sizeRendererCreator
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
 *      const slider = ClassedSizeSlider.fromRendererResult(rendererResult, histogramResult);
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
 *   renderer.classBreaks = slider.updateClassBreakInfos( renderer.classBreaks );
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/ClassedSizeSlider
 * @since 4.12
 *
 * @see [ClassedSizeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/ClassedSizeSlider.tsx)
 * @see [ClassedSizeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ClassedSizeSlider.scss)
 * @see module:esri/widgets/smartMapping/ClassedSizeSlider/ClassedSizeSliderViewModel
 * @see {@link module:esri/smartMapping/renderers/size sizeRendererCreator}
 * @see module:esri/renderers/ClassBreaksRenderer
 */

// esri
import Color from "esri/../Color";

// esri.core
import { isSome } from "esri/../core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.renderers.support
import ClassBreakInfo from "esri/../renderers/support/ClassBreakInfo";

// esri.smartMapping.renderers
import { ClassBreaksRendererResult } from "esri/../smartMapping/renderers/color";

// esri.smartMapping.statistics
import { HistogramResult } from "esri/../smartMapping/statistics/interfaces";

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.ClassedSizeSlider
import ClassedSizeSliderViewModel from "esri/widgets/ClassedSizeSlider/ClassedSizeSliderViewModel";
import { SizeBreak } from "esri/widgets/ClassedSizeSlider/interfaces";

// esri.widgets.smartMapping.ClassedSizeSlider.t9n
import ClassedSizeSliderMessages from "esri/widgets/ClassedSizeSlider/t9n/ClassedSizeSlider";

// esri.widgets.smartMapping.support
import { getFillFromColor } from "esri/widgets/support/utils";

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { messageBundle, storeNode, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-classed-size-slider",
  rampElement: "esri-classed-size-slider__ramp",
  sliderContainer: "esri-classed-size-slider__slider-container",
  histogramContainer: "esri-classed-size-slider__histogram-container",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

const DEFAULT_STYLE = {
  trackFillColor: new Color([149, 149, 149]), // "#959595"
  trackBackgroundColor: new Color([224, 224, 224]) //"#e0e0e0"
};

interface ClassedSizeSliderStyle {
  trackFillColor?: Color;
  trackBackgroundColor?: Color;
}

@subclass("esri.widgets.smartMapping.ClassedSizeSlider")
class ClassedSizeSlider extends SmartMappingSliderBase {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @constructor
   * @alias module:esri/widgets/smartMapping/ClassedSizeSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   */
  constructor(params?: any, parentNode?: string | Element) {
    super(params, parentNode);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _rampNode: HTMLElement = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  breaks
  //----------------------------------

  /**
   * An array of class breaks with associated sizes. The size mapped to each break should
   * be used to update the renderer of a layer. A minimum of two breaks must be provided to the slider.
   *
   * @property {number} size - The size in points of the symbol representing features with values within
   *   the given `min` and `max`.
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
   *   size: 6
   * }, {
   *   min: 20,
   *   max: 40,
   *   size: 12
   * }, {
   *   min: 40,
   *   max: 60,
   *   size: 24
   * }, {
   *   min: 60,
   *   max: 80,
   *   size: 48
   * }];
   */
  @aliasOf("viewModel.breaks") breaks: SizeBreak[] = null;

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
  @messageBundle("esri/widgets/smartMapping/ClassedSizeSlider/t9n/ClassedSizeSlider")
  messages: ClassedSizeSliderMessages = null;

  //----------------------------------
  //  style
  //----------------------------------

  /**
   * Exposes various properties of the widget that can be styled.
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
  style: ClassedSizeSliderStyle = { ...DEFAULT_STYLE };

  @cast("style")
  protected castStyle(value: Partial<ClassedSizeSliderStyle>): ClassedSizeSliderStyle {
    return { ...DEFAULT_STYLE, ...value };
  }

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the ClassedSizeSlider widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/ClassedSizeSlider/ClassedSizeSliderViewModel}
   * class to access all properties and methods on the ClassedSizeSlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/ClassedSizeSlider/ClassedSizeSliderViewModel}
   */
  @property()
  viewModel: ClassedSizeSliderViewModel = new ClassedSizeSliderViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * A convenience function used to create a ClassedSizeSlider widget from the result
   * of the {@link module:esri/smartMapping/renderers/size#createClassBreaksRenderer createClassBreaksRenderer()} method.
   *
   * @method fromRendererResult
   * @static
   *
   * @param {module:esri/smartMapping/renderers/size~ClassBreaksRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/size#createClassBreaksRenderer createClassBreaksRenderer}
   *   method.
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @return {module:esri/widgets/smartMapping/ClassedSizeSlider} Returns a ClassedSizeSlider instance. This will not render until you assign
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
   * sizeRendererCreator
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
   *      const slider = ClassedSizeSlider.fromRendererResult(rendererResult, histogramResult);
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
  ): ClassedSizeSlider {
    const {
      renderer: { classBreakInfos }
    } = result;
    const breaks: SizeBreak[] = classBreakInfos.map((breakInfo) => {
      const symbol = breakInfo.symbol;
      let size: number;

      // does not take 3D symbols into account
      switch (symbol.type) {
        case "simple-line":
          size = symbol.width;
          break;
        case "simple-marker":
          size = symbol.size;
          break;
        case "picture-marker":
          size = symbol.height;
          break;
        default:
      }

      return {
        min: breakInfo.minValue,
        max: breakInfo.maxValue,
        size
      };
    });

    return new ClassedSizeSlider({
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
   *   renderer.classBreaks = slider.updateClassBreakInfos( renderer.classBreaks );
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
      switch (symbol.type) {
        case "simple-line":
          symbol.width = breaks[i].size;
          break;
        case "simple-marker":
          symbol.size = breaks[i].size;
          break;
        case "picture-marker": {
          const size = breaks[i].size;
          const width = symbol.width;
          const height = symbol.height;

          symbol.height = size;
          symbol.width = (size / height) * width;
          break;
        }
        default:
      }

      return new ClassBreakInfo({
        minValue: breaks[i].min,
        maxValue: breaks[i].max,
        symbol
      });
    });
  }

  /**
   * A convenience function used to update the properties a ClassedSizeSlider from the result
   * of the {@link module:esri/smartMapping/renderers/size#createClassBreaksRenderer createClassBreaksRenderer()} method.
   *
   * @method updateClassBreakInfos
   * @instance
   *
   * @param {module:esri/smartMapping/renderers/size~ClassBreaksRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/size#createClassBreaksRenderer createClassBreaksRenderer}
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
   * sizeRendererCreator
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
   *      slider.updateFromRendererResult(rendererResult, histogramResult);
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
    const breaks: SizeBreak[] = classBreakInfos.map((breakInfo) => {
      const symbol = breakInfo.symbol;
      let size: number;

      // does not take 3D symbols into account
      switch (symbol.type) {
        case "simple-line":
          size = symbol.width;
          break;
        case "simple-marker":
          size = symbol.size;
          break;
        case "picture-marker":
          size = symbol.height;
          break;
        default:
      }
      return {
        min: breakInfo.minValue,
        max: breakInfo.maxValue,
        size
      };
    });

    this.set({
      breaks
    });
    if (histogramResult?.bins) {
      this.histogramConfig.bins = histogramResult.bins;
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
      style: { trackBackgroundColor }
    } = this;
    return (
      <div afterCreate={storeNode} bind={this} class={CSS.rampElement} data-node-ref="_rampNode">
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect
            x="0"
            y="0"
            fill={getFillFromColor(trackBackgroundColor)}
            height="100%"
            width="100%"
          />
          {this.renderPath()}
        </svg>
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
      breaks,
      viewModel: { max, min },
      style: { trackFillColor }
    } = this;
    const range = max - min;
    const stepWidth = offsetWidth / breaks.length;

    // Calculate y-position at each step
    // Reverse to match orientation of handles
    const yPositions = breaks
      .map(
        (breakInfo) => offsetHeight - Math.round(((breakInfo.min - min) / range) * offsetHeight) + 1
      )
      .reverse();

    // Orientation - path depends on orientation
    const isSmallToLarge = breaks[0].size > breaks[breaks.length - 1].size || false;
    let currentWidth = isSmallToLarge ? stepWidth : offsetWidth;
    let path = `M${currentWidth} 0 `;

    // Create steps based on number of breaks
    yPositions.forEach((pos, index) => {
      // Value to shift on the x-axis
      const increment = stepWidth * (index + 1);
      path += `L${currentWidth} ${pos} `;
      currentWidth = isSmallToLarge ? stepWidth + increment : offsetWidth - increment;
      path += `L${currentWidth} ${pos} `;
    });

    // Close the path
    path += `L0 ${offsetHeight} L0 ${offsetHeight} L0 0 Z`;

    return <path d={path} fill={getFillFromColor(trackFillColor)} />;
  }
}

export default ClassedSizeSlider;
