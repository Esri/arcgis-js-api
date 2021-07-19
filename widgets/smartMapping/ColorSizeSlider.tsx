/**
 * The ColorSizeSlider widget is intended for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with a {@link module:esri/renderers/visualVariables/ColorVariable} and
 * a {@link module:esri/renderers/visualVariables/SizeVariable}. Both visual variables should be used
 * to visualize the same data variable.
 *
 * This slider and visualization style is designed specifically for
 * 3D thematic visualizations where both size and color are used to visualize the same data variable in order
 * to minimize confusion because of distortion in perception. For example, a visualization of extruded points
 * may be difficult to understand if two features of similar sizes (and therefore data values) are located
 * far apart from one another; the feature furthest from the {@link module:esri/Camera} will appear smaller than
 * the feature closer to the camera. The color variable can help the user understand that both features have similar values.
 *
 * ![ColorSizeSlider with perspective](../assets/img/apiref/widgets/sliders/colorsizeslider-perspective.png "ColorSizeSlider with perspective")
 *
 * At a minimum you must set the [min](#min), [max](#max), and [stops](#stops) properties
 * of the widget. The stops are used to render a color gradient on the track of the slider.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![ColorSizeSlider with annotations](../assets/img/apiref/widgets/sliders/colorsizeslider-labels.png "ColorSizeSlider with annotations")
 *
 * The [fromRendererResult](#fromRendererResult) method can be used to conveniently create this slider
 * from the result of the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer createContinuousRenderer}
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
 * let rendererResult = null;
 *
 * univariateColorSizeRendererCreator
 *   .createContinuousRenderer(params)
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
 *      const slider = ColorSizeSlider.fromRendererResult(rendererResult, histogramResult);
 *      slider.container = "slider";
 *    })
 *    .catch(function(error) {
 *      console.log("there was an error: ", error);
 *    });
 * ```
 *
 * This slider should be used to update the matching {@link module:esri/renderers/visualVariables/ColorVariable color}
 * and {@link module:esri/renderers/visualVariables/SizeVariable size} visual variables in a layer's renderer. It is the responsibility of the app developer
 * to set up event listeners on this slider that update these variables in the appropriate renderer.
 *
 * ```js
 * // when the user slides the handle(s), update the renderer
 * // with the updated color stops
 *
 * slider.on(["thumb-change", "thumb-drag"], function() {
 *   const renderer = layer.renderer.clone();
 *   renderer.visualVariables = slider.updateVisualVariables( renderer.visualVariables );
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/ColorSizeSlider
 * @since 4.12
 *
 * @see [ColorSizeSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/ColorSizeSlider.tsx)
 * @see [ColorSizeSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ColorSizeSlider.scss)
 * @see module:esri/widgets/smartMapping/ColorSizeSlider/ColorSizeSliderViewModel
 * @see {@link module:esri/smartMapping/renderers/univariateColorSize univariateColorSizeRendererCreator}
 */

// esri.core
import EsriError from "esri/../core/Error";
import { isSome } from "esri/../core/maybe";

// esri.core.accessorSupport
import { aliasOf, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.renderers
import ClassBreaksRenderer from "esri/../renderers/ClassBreaksRenderer";

// esri.renderers.visualVariables
import ColorVariable from "esri/../renderers/visualVariables/ColorVariable";
import SizeVariable from "esri/../renderers/visualVariables/SizeVariable";

// esri.renderers.visualVariables.support
import ColorSizeStop from "esri/../renderers/visualVariables/support/ColorSizeStop";
import ColorStop from "esri/../renderers/visualVariables/support/ColorStop";
import SizeStop from "esri/../renderers/visualVariables/support/SizeStop";

// esri.smartMapping.renderers
import { RendererResult } from "esri/../smartMapping/renderers/univariateColorSize";

// esri.smartMapping.statistics
import { HistogramResult } from "esri/../smartMapping/statistics/interfaces";

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.ColorSizeSlider
import ColorSizeSliderViewModel from "esri/widgets/ColorSizeSlider/ColorSizeSliderViewModel";

// esri.widgets.smartMapping.ColorSizeSlider.t9n
import ColorSizeSliderMessages from "esri/widgets/ColorSizeSlider/t9n/ColorSizeSlider";

// esri.widgets.smartMapping.support
import { ZoomOptions } from "esri/widgets/support/interfaces";
import { getDynamicPathForSizeStops, getPathForSizeStops } from "esri/widgets/support/utils";

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { messageBundle, storeNode, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-color-size-slider",
  rampElement: "esri-color-size-slider__ramp",
  sliderContainer: "esri-color-size-slider__slider-container",
  histogramContainer: "esri-color-size-slider__histogram-container",
  primaryHandle: "esri-color-size-slider--primary-handle",
  track: "esri-color-size-slider--interactive-track",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

type VisualVariable = ColorVariable | SizeVariable;

@subclass("esri.widgets.smartMapping.ColorSizeSlider")
class ColorSizeSlider extends SmartMappingSliderBase {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/smartMapping/SmartMappingSliderBase
   * @constructor
   * @alias module:esri/widgets/smartMapping/ColorSizeSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * const slider = new ColorSizeSlider({
   *   min: 0,
   *   max: 100,
   *   stops: [
   *     { value: 25, color: "white", size: 1000 },
   *     { value: 75, color: "dodgerblue", size: 100000 }
   *   ]
   * });
   */
  constructor(properties?: any, parentNode?: string | Element) {
    super(properties, parentNode);

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

  private _backgroundFillColor = "#e0e0e0";

  private _minRampFillWidth = 0.2;

  private _rampFillId: string = null;

  private _rampNode: HTMLElement = null;

  private _maxRampFillWidth = 1;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  handlesSyncedToPrimary
  //----------------------------------

  /**
   * Only applicable when three thumbs (i.e. handles) are set on the
   * slider (i.e. when [primaryHandleEnabled](#primaryHandleEnabled) is `true`). This property
   * indicates whether the position of the outside handles are synced with the middle, or primary,
   * handle. When enabled, if the primary handle is moved then the outside handle positions are updated
   * while maintaining a fixed distance from the primary handle.
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
   * slider.persistSizeRangeEnabled = true;
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
  @messageBundle("esri/widgets/smartMapping/ColorSizeSlider/t9n/ColorSizeSlider")
  messages: ColorSizeSliderMessages = null;

  //----------------------------------
  //  persistSizeRangeEnabled
  //----------------------------------

  /**
   * Only applicable when three thumbs (i.e. handles) are set on the
   * slider (i.e. when [primaryHandleEnabled](#primaryHandleEnabled) is `true`).
   * This property is typically used in diverging, or `above-and-below` renderer configurations.
   *
   * When `true`, ensures symbol sizes in the `above` range
   * are consistent with symbol sizes in the `below` range for all slider thumb positions.
   * In other words, the size values in the [stops](#stops) will adjust
   * proportionally according to the positions of the data values within the
   * constraints of the size range (maxSize - minSize) as the slider thumbs update.
   * When `false`, size values in the stops will remain the same even when slider thumb values
   * change.
   *
   * In most cases, this should be set to `true` to keep sizes in the `above` range consistent with
   * sizes in the `below` range to avoid map misinterpretation.
   *
   * @name persistSizeRangeEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @since 4.19
   *
   * @see [primaryHandleEnabled](#primaryHandleEnabled)
   *
   * @example
   * slider.primaryHandleEnabled = true;
   * slider.persistSizeRangeEnabled = true;
   */
  @aliasOf("viewModel.persistSizeRangeEnabled") persistSizeRangeEnabled: boolean = null;

  //----------------------------------
  //  primaryHandleEnabled
  //----------------------------------

  /**
   * When `true`, the slider will render a third handle between the
   * two handles already provided by default. This is the primary handle.
   * Three or five [stops](#stops) must be defined for the primary handle to render.
   * The primary handle represents the middle stop.
   *
   * When [handlesSyncedToPrimary](#handlesSyncedToPrimary) is `true`, then
   * this handle will control the position of the others when moved.
   *
   * This is typically used in diverging, or `above-and-below` renderer configurations.
   *
   * @name primaryHandleEnabled
   * @instance
   * @type {boolean}
   * @default false
   * @since 4.18
   *
   * @see [handlesSyncedToPrimary](#handlesSyncedToPrimary)
   * @see [persistSizeRangeEnabled](#persistSizeRangeEnabled)
   *
   * @example
   * // enables the primary handles and syncs it with the others
   * slider.primaryHandleEnabled = true;
   * slider.handlesSyncedToPrimary = true;
   * slider.persistSizeRangeEnabled = true;
   */
  @aliasOf("viewModel.primaryHandleEnabled") primaryHandleEnabled: boolean = null;

  //----------------------------------
  //  stops
  //----------------------------------

  /**
   * The colors and sizes corresponding with data values in the
   * {@link module:esri/renderers/visualVariables/ColorVariable} and
   * {@link module:esri/renderers/visualVariables/SizeVariable} of the renderer
   * associated with the slider.
   *
   * Use the [fromRendererResult()](#fromRendererResult)
   * method to conveniently construct these stops from a renderer generated from
   * the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer univariateColorSize}
   * smart mapping module.
   *
   * Use [updateVisualVariables()](#updateVisualVariables) to update the renderer's
   * visual variables with the values matching the slider thumb positions.
   *
   * @name stops
   * @instance
   * @type {module:esri/renderers/visualVariables/support/ColorSizeStop[]}
   *
   * @see [fromRendererResult()](#fromRendererResult)
   * @see [updateVisualVariables()](#updateVisualVariables)
   *
   * @example
   * slider.stops = [
   *   { value: 25, color: "white", size: 1000 },
   *   { value: 75, color: "dodgerblue", size: 100000 }
   * ];
   */
  @aliasOf("viewModel.stops") stops: ColorSizeStop[] = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the ColorSizeSlider widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/ColorSizeSlider/ColorSizeSliderViewModel}
   * class to access all properties and methods on the ColorSizeSlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/ColorSizeSlider/ColorSizeSliderViewModel}
   */
  @property()
  viewModel: ColorSizeSliderViewModel = new ColorSizeSliderViewModel();

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
   * A convenience function used to create a ColorSizeSlider widget instance from the
   * {@link module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult result} of
   * the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer univariateColorSize.createContinuousRenderer()}
   * method.
   *
   * This method sets the slider [stops](#stops), [min](#maxm), [max](#maxDataValue),
   * and [histogramConfig](#histogramConfig). It is still the developer's responsibility to assign it a proper
   * [container](#container) and any other optional properties.
   *
   * @method fromRendererResult
   * @static
   *
   * @param {module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer createContinuousRenderer}
   *   method.
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @return {module:esri/widgets/smartMapping/ColorSizeSlider} Returns a ColorSizeSlider instance. This will not render until you assign
   *   it a valid [container](#container).
   *
   * @example
   * let params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   field: "POP",
   *   view: view,
   *   symbolType: "3d-volumetric",
   *   min: 0,
   *   max: 500000
   * };
   * colorAndSizeRendererCreator
   *   .createContinuousRenderer(params)
   *   .then(function(response) {
   *     // set generated renderer on the layer and add it to the map
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       field: params.field,
   *       numBins: 70,
   *       maxValue: params.max,
   *       minValue: params.min
   *     });
   *   })
   *   .then(function(histogramResult) {
   *     let slider = ColorSizeSlider.fromRendererResult(rendererResult, histogramResult);
   *     slider.container = "slider";
   *   });
   */
  static fromRendererResult(
    result: RendererResult,
    histogramResult?: HistogramResult
  ): ColorSizeSlider {
    const {
      renderer: {
        authoringInfo: { univariateTheme }
      },
      color: {
        visualVariable: { stops: colorStops }
      },
      size: { visualVariables },
      statistics
    } = result;
    const { avg, stddev } = statistics;

    if (!colorStops) {
      throw new EsriError(
        "ColorSizeSlider-fromRendererResult:invalid-renderer-result",
        "'result' must include 'color' variable."
      );
    }

    const primaryHandleEnabled = univariateTheme === "above-and-below";

    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    const sizeVV = visualVariables.find(
      (vv) =>
        vv?.target !== "outline" &&
        !(vv?.axis && !vv?.field && !vv?.valueExpression) &&
        (vv?.field || vv?.valueExpression)
    );

    const sizeStops = sizeVV.stops;

    const stops = colorStops.map((colorStop, index) => {
      const { color, label, value } = colorStop;
      let size: number | SizeVariable;

      if (sizeStops && sizeStops.length > 0) {
        size = sizeStops[index].size;
      } else {
        size =
          index === 0 ? sizeVV.minSize : index === colorStops.length - 1 ? sizeVV.maxSize : null;
      }

      return new ColorSizeStop({
        color,
        label,
        value,
        size
      });
    });

    return new ColorSizeSlider({
      max,
      min,
      stops,
      primaryHandleEnabled,
      handlesSyncedToPrimary: primaryHandleEnabled,
      persistSizeRangeEnabled: primaryHandleEnabled,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      }
    });
  }

  /**
   * A convenience function used to update the properties of a ColorSizeSlider widget instance from the
   * {@link module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult result} of
   * the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer univariateColorSize.createContinuousRenderer()}
   * method.
   *
   * @method updateFromRendererResult
   * @instance
   *
   * @param {module:esri/smartMapping/renderers/univariateColorSize~ContinuousRendererResult} rendererResult -
   *   The result object from the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer createContinuousRenderer}
   *   method.
   * @param {module:esri/smartMapping/statistics/histogram~HistogramResult} [histogramResult] -
   *   The result histogram object from the {@link module:esri/smartMapping/statistics/histogram#histogram histogram}
   *   method.
   *
   * @example
   * let params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   field: "POP",
   *   view: view,
   *   symbolType: "3d-volumetric",
   *   minValue: 0,
   *   maxValue: 500000
   * };
   * colorAndSizeRendererCreator
   *   .createContinuousRenderer(params)
   *   .then(function(response) {
   *     // set generated renderer on the layer and add it to the map
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     return histogram({
   *       layer: layer,
   *       field: params.field,
   *       numBins: 70,
   *       maxValue: params.maxValue,
   *       minValue: params.minValue
   *     });
   *   })
   *   .then(function(histogramResult) {
   *     slider.fromRendererResult(rendererResult, histogramResult);
   *   });
   */
  updateFromRendererResult(result: RendererResult, histogramResult?: HistogramResult): void {
    const {
      renderer: {
        authoringInfo: { univariateTheme }
      },
      color: {
        visualVariable: { stops: colorStops }
      },
      size: { visualVariables },
      statistics
    } = result;
    const { avg, stddev } = statistics;

    if (!colorStops) {
      throw new EsriError(
        "ColorSizeSlider-fromRendererResult:invalid-renderer-result",
        "'result' must include 'color' variable."
      );
    }

    const primaryHandleEnabled = univariateTheme === "above-and-below";

    const authoringInfoVisualVariable = result.renderer.authoringInfo.visualVariables[0];
    const min = authoringInfoVisualVariable.minSliderValue;
    const max = authoringInfoVisualVariable.maxSliderValue;

    const sizeVV = visualVariables.find(
      (vv) =>
        vv?.target !== "outline" &&
        !(vv?.axis && !vv?.field && !vv?.valueExpression) &&
        (vv?.field || vv?.valueExpression)
    );

    const sizeStops = sizeVV.stops;

    const stops = colorStops.map((colorStop, index) => {
      const { color, label, value } = colorStop;
      let size: number | SizeVariable;

      if (sizeStops && sizeStops.length > 0) {
        size = sizeStops[index].size;
      } else {
        size =
          index === 0 ? sizeVV.minSize : index === colorStops.length - 1 ? sizeVV.maxSize : null;
      }

      return new ColorSizeStop({
        color,
        label,
        value,
        size
      });
    });

    this.set({
      max,
      min,
      stops,
      primaryHandleEnabled,
      handlesSyncedToPrimary: primaryHandleEnabled,
      persistSizeRangeEnabled: primaryHandleEnabled,
      histogramConfig: {
        average: avg,
        standardDeviation: stddev,
        bins: histogramResult ? histogramResult.bins : []
      }
    });
  }

  /**
   * A convenience function used to update a renderer generated with the
   * {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer univariateColorSize.createContinuousRenderer()}
   * method with the values obtained from the slider. This method is useful for cases when the app allows the end user to switch data variables
   * used to render the data.
   *
   * @method updateRenderer
   * @instance
   * @since 4.18
   *
   * @param {module:esri/renderers/ClassBreaksRenderer} renderer -
   *   A renderer generated from the {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer univariateColorSize.createContinuousRenderer()}
   *   method.
   *
   * @return {module:esri/renderers/ClassBreaksRenderer}
   *   Returns the input renderer updated to match the current slider values. This should be set directly
   *   back to the layer where it came from
   *
   * @example
   * slider.on(["thumb-change", "thumb-drag"], function() {
   *   layer.renderer = slider.updateRenderer( layer.renderer );
   * });
   */
  updateRenderer(renderer: ClassBreaksRenderer): ClassBreaksRenderer {
    const { stops } = this;
    const firstStop = stops[0];
    const lastStop = stops[stops.length - 1];
    const midStop = stops[Math.floor(stops.length / 2)];

    const clone = renderer.clone();

    const variables = clone.visualVariables.map((variable) => {
      if (variable.type === "size") {
        if (
          variable?.target === "outline" ||
          (variable?.axis && !variable?.field && !variable?.valueExpression)
        ) {
          return variable;
        }

        // Target the correct size visual variable
        if (isSome(variable.minSize) && isSome(variable.maxSize)) {
          variable.set({
            maxDataValue: lastStop.value,
            minDataValue: firstStop.value,
            maxSize: lastStop.size,
            minSize: firstStop.size
          });
        } else if (variable.stops) {
          variable.set({
            stops: stops.map((stop) => {
              const { label, size, value } = stop;

              return new SizeStop({ label, size, value });
            })
          });
        }
      } else if (variable.type === "color") {
        variable.set({
          stops: this.stops.map((stop) => {
            const { color, label, value } = stop;

            return new ColorStop({ color, label, value });
          })
        });
      }

      return variable;
    });
    clone.visualVariables = variables;

    if (clone.classBreakInfos.length > 1) {
      const midValue = midStop.value;
      clone.classBreakInfos[0].maxValue = midValue;
      clone.classBreakInfos[1].minValue = midValue;
    }

    return clone;
  }

  /**
   * A convenience function used to update the visual variables of a renderer generated with the
   * {@link module:esri/smartMapping/renderers/univariateColorSize#createContinuousRenderer univariateColorSize.createContinuousRenderer()}
   * method with the values obtained from the slider. This method is useful for cases when the app allows the end user to switch data variables
   * used to render the data.
   *
   * @method updateVisualVariables
   * @instance
   *
   * @param {Array<module:esri/renderers/visualVariables/ColorVariable | module:esri/renderers/visualVariables/SizeVariable>} variables -
   *   The visual variables to update from the renderer associated with the slider. The properties of the
   *   color and size variables will update based on the slider thumb values.
   *
   * @return {Array<module:esri/renderers/visualVariables/ColorVariable | module:esri/renderers/visualVariables/SizeVariable>}
   *   Returns the input visual variables updated to match the current slider values. These should be set directly
   *   back to the renderer where they came from.
   *
   * @example
   * slider.on(["thumb-change", "thumb-drag"], function() {
   *   const renderer = layer.renderer.clone();
   *   renderer.visualVariables = slider.updateVisualVariables( renderer.visualVariables );
   *   layer.renderer = renderer;
   * });
   */
  updateVisualVariables(variables: VisualVariable[]): VisualVariable[] {
    return variables.map((variable) => {
      const clone = variable.clone();

      if (variable.type === "size") {
        if (
          variable?.target === "outline" ||
          (variable?.axis && !variable?.field && !variable?.valueExpression)
        ) {
          return clone;
        }

        // Target the correct size visual variable
        if (isSome(variable.minSize) && isSome(variable.maxSize)) {
          const { stops } = this;
          const firstStop = stops[0];
          const lastStop = stops[stops.length - 1];

          clone.set({
            maxDataValue: lastStop.value,
            minDataValue: firstStop.value,
            maxSize: lastStop.size,
            minSize: firstStop.size
          });
        } else if (variable.stops) {
          clone.set({
            stops: this.stops.map((stop) => {
              const { label, size, value } = stop;

              return new SizeStop({ label, size, value });
            })
          });
        }
      } else if (variable.type === "color") {
        clone.set({
          stops: this.stops.map((stop) => {
            const { color, label, value } = stop;

            return new ColorStop({ color, label, value });
          })
        });
      }

      return clone;
    });
  }

  render(): VNode {
    const { label, primaryHandleEnabled, state, visibleElements } = this;
    const isDisabled = state === "disabled";
    const baseClasses = this.classes(CSS.base, CSS.esriWidget, CSS.esriWidgetPanel, {
      [CSS.disabled]: isDisabled,
      [CSS.primaryHandle]: primaryHandleEnabled,
      [CSS.track]: visibleElements.interactiveTrack
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
      <div afterCreate={storeNode} bind={this} class={CSS.rampElement} data-node-ref="_rampNode">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            {this.renderRampFillDefinition(_rampFillId, stopInfos)}
            {this.renderBackgroundFillDefinition(_bgFillId)}
          </defs>
          <rect x="0" y="0" fill={this._backgroundFillColor} height="100%" width="100%" />
          {this.renderPaths()}
        </svg>
        {zoomOptions ? this.renderZoomCaps() : null}
      </div>
    );
  }

  protected renderPaths(): VNode {
    if (!this._rampNode) {
      return undefined;
    }

    const { offsetHeight = 0, offsetWidth = 0 } = this._rampNode;

    if (!isSome(offsetHeight) || !isSome(offsetWidth)) {
      return undefined;
    }

    const {
      primaryHandleEnabled,
      stops,
      values,
      viewModel: { max, min },
      _bgFillId,
      _maxRampFillWidth,
      _minRampFillWidth,
      _rampFillId
    } = this;

    const widths = [_maxRampFillWidth, _minRampFillWidth];

    if (stops[0].size < stops[stops.length - 1].size) {
      widths.reverse();
    }

    const valuesClone = values.slice().sort((a, b) => (a > b ? 1 : -1));
    const [bottomWidth, topWidth] = widths;
    const [bottomValue, topValue] = valuesClone;

    const path = primaryHandleEnabled
      ? getDynamicPathForSizeStops({
          max,
          min,
          pathHeight: offsetHeight,
          pathWidth: offsetWidth,
          stops,
          padding: _minRampFillWidth
        })
      : getPathForSizeStops({
          bottomValue,
          bottomWidth,
          max,
          min,
          pathHeight: offsetHeight,
          pathWidth: offsetWidth,
          topValue,
          topWidth
        });

    return [
      <path key="background" d={path} fill={`url(#${_bgFillId})`} />,
      <path key="fill" d={path} fill={`url(#${_rampFillId})`} />
    ];
  }
}

export default ColorSizeSlider;
