/**
 * The HeatmapSlider widget is intended for authoring and exploring data-driven visualizations in any
 * layer that can be rendered with a {@link module:esri/renderers/HeatmapRenderer}.
 * At a minimum you must set the [stops](#stops) property
 * of the widget. The stops are used to render a color gradient on the track of the slider.
 *
 * <a name="image-annotations"></a>
 * See the image below for a summary of the configurable options available on this slider.
 *
 * ![HeatmapSlider with annotations](../../assets/img/apiref/widgets/sliders/heatmapslider-labels.png "HeatmapSlider with annotations")
 *
 * The [fromRendererResult](#fromRendererResult) method can be used to conveniently create this slider
 * from the result of the {@link module:esri/renderers/smartMapping/creators/heatmap#createRenderer createRenderer}
 * method.
 *
 * ```js
 * const params = {
 *   layer: layer,
 *   basemap: map.basemap,
 *   view: view
 * };
 *
 * let rendererResult = null;
 *
 * heatmapRendererCreator
 *   .createRenderer(params)
 *   .then(function(response) {
 *     rendererResult = response;
 *     layer.renderer = response.renderer;
 *
 *     const slider = slider.fromRendererResult(rendererResult);
 *     colorSlider.container = "slider";
 *   })
 *    .catch(function(error) {
 *      console.log("there was an error: ", error);
 *    });
 * ```
 *
 * This slider should be used to update the {@link module:esri/renderers/HeatmapRenderer#colorStops colorStops}
 * in a HeatmapRenderer. It is the responsibility of the app developer
 * to set up event listeners on this slider to update the renderer's color stops.
 *
 * ```js
 * // when the user slides the handle(s), update the renderer
 * // with the updated color stops
 *
 * slider.on(["thumb-change", "thumb-drag"], function() {
 *   const renderer = layer.renderer.clone();
 *   renderer.colorStops = slider.stops;
 *   layer.renderer = renderer;
 * });
 * ```
 *
 * @module esri/widgets/smartMapping/HeatmapSlider
 * @since 4.12
 *
 * @see [HeatmapSlider.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/smartMapping/HeatmapSlider.tsx)
 * @see [HeatmapSlider.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_HeatmapSlider.scss)
 * @see module:esri/widgets/smartMapping/HeatmapSlider/HeatmapSliderViewModel
 * @see {@link module:esri/renderers/smartMapping/creators/heatmap heatmapRendererCreator}
 */

/// <amd-dependency path="esri/../core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/../core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/HeatmapSlider/nls/HeatmapSlider";

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.renderers.smartMapping.creators
import { HeatmapRendererResult } from "esri/../renderers/smartMapping/creators/heatmap";

// esri.renderers.support
import { HeatmapColorStop } from "esri/../renderers/support/HeatmapColorStop";

// esri.widgets.smartMapping
import { SmartMappingSliderBase } from "esri/widgets/SmartMappingSliderBase";

// esri.widgets.smartMapping.HeatmapSlider
import HeatmapSliderViewModel = require("esri/widgets/HeatmapSlider/HeatmapSliderViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/../support/interfaces";
import { renderable, tsx } from "esri/widgets/../support/widget";

const CSS = {
  base: "esri-heatmap-slider",
  rampElement: "esri-heatmap-slider__ramp",
  sliderContainer: "esri-heatmap-slider__slider-container",

  // common
  esriWidget: "esri-widget",
  esriWidgetPanel: "esri-widget--panel",
  widgetIcon: "esri-icon-edit",
  disabled: "esri-disabled"
};

@subclass("esri.widgets.smartMapping.HeatmapSlider")
class HeatmapSlider extends declared(SmartMappingSliderBase) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when a user changes the value of a thumb via arrow keys and keyboard editing of the label on the widget.
   *
   * @event module:esri/widgets/smartMapping/HeatmapSlider#thumb-change
   *
   * @property {number} index - The 0-based index of the thumb emitting the event.
   * @property {number} oldValue - The former value of the thumb before the change was made.
   * @property {"thumb-change"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   *
   * @example
   * slider.on("thumb-change", function() {
   *   const renderer = layer.renderer.clone();
   *   renderer.colorStops = slider.stops;
   *   layer.renderer = renderer;
   * });
   */

  /**
   * Fires when a user drags a thumb on the widget.
   *
   * @event module:esri/widgets/smartMapping/HeatmapSlider#thumb-drag
   *
   * @property {number} index - The 0-based index of the thumb emitting the event.
   * @property {"start" | "drag"} state - The state of the drag.
   * @property {"thumb-drag"} type - The type of the event.
   * @property {number} value - The value of the thumb when the event is emitted.
   *
   * @example
   * slider.on("thumb-drag", function() {
   *   const renderer = layer.renderer.clone();
   *   renderer.colorStops = slider.stops;
   *   layer.renderer = renderer;
   * });
   */

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/smartMapping/HeatmapSlider
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * const slider = new HeatmapSlider({
   *   stops: [
   *     { color: "rgba(63, 40, 102, 0)", ratio: 0 },
   *     { color: "#472b77", ratio: 0.083 },
   *     { color: "#4e2d87", ratio: 0.166 },
   *     { color: "#563098", ratio: 0.249 },
   *     { color: "#5d32a8", ratio: 0.332 },
   *     { color: "#6735be", ratio: 0.415 },
   *     { color: "#7139d4", ratio: 0.498 },
   *     { color: "#7b3ce9", ratio: 0.581 },
   *     { color: "#853fff", ratio: 0.664 },
   *     { color: "#a46fbf", ratio: 0.747 },
   *     { color: "#c29f80", ratio: 0.83 },
   *     { color: "#e0cf40", ratio: 0.913 },
   *     { color: "#ffff00", ratio: 1 }
   *   ]
   * });
   */
  constructor(params?: any) {
    super(params);

    this.slider.set({
      labelsVisible: false,
      labelInputsEnabled: false,
      rangeLabelInputsEnabled: false
    });

    // For SVG fills
    this._rampFillId = `${this.id}-ramp-fill`;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

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
   * The HeatmapSlider widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   * @readonly
   */
  @property() label: string = i18n.widgetLabel;

  //----------------------------------
  //  stops
  //----------------------------------

  /**
   * The {@link module:esri/renderers/HeatmapRender#colorStops colorStops}
   * of the {@link module:esri/renderers/HeatmapRenderer} to associate with the
   * slider.
   *
   * @name stops
   * @instance
   * @type {module:esri/renderers/support/HeatmapColorStop[]}
   *
   * @example
   * slider.stops = [
   *   { color: "rgba(63, 40, 102, 0)", ratio: 0 },
   *   { color: "#472b77", ratio: 0.083 },
   *   { color: "#4e2d87", ratio: 0.166 },
   *   { color: "#563098", ratio: 0.249 },
   *   { color: "#5d32a8", ratio: 0.332 },
   *   { color: "#6735be", ratio: 0.415 },
   *   { color: "#7139d4", ratio: 0.498 },
   *   { color: "#7b3ce9", ratio: 0.581 },
   *   { color: "#853fff", ratio: 0.664 },
   *   { color: "#a46fbf", ratio: 0.747 },
   *   { color: "#c29f80", ratio: 0.83 },
   *   { color: "#e0cf40", ratio: 0.913 },
   *   { color: "#ffff00", ratio: 1 }
   * ];
   *
   * @example
   * slider.stops = layer.renderer.colorStops;
   */
  @aliasOf("viewModel.stops") stops: HeatmapColorStop[] = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the Heatmap widget. This class contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/smartMapping/HeatmapSlider/HeatmapliderViewModel}
   * class to access all properties and methods on the HeatmapSlider widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/smartMapping/HeatmapSlider/HeatmapSliderViewModel}
   */
  @property()
  @renderable([
    "viewModel.inputFormatFunction",
    "viewModel.inputParseFunction",
    "viewModel.labelFormatFunction",
    "viewModel.max",
    "viewModel.max",
    "viewModel.stops",
    "viewModel.values"
  ])
  viewModel: HeatmapSliderViewModel = new HeatmapSliderViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * A convenience function used to create a HeatmapSlider widget instance from the
   * {@link module:esri/renderers/smartMapping/creators/heatmap~HeatmapRendererResult result} of
   * the {@link module:esri/renderers/smartMapping/creators/heatmap#createRenderer heatmapRendererCreator.createRenderer()}
   * method.
   *
   * @method fromHeatmapRendererResult
   * @static
   *
   * @param {module:esri/renderers/smartMapping/creators/heatmap~HeatmapRendererResult} rendererResult -
   *   The result object from the {@link module:esri/renderers/smartMapping/creators/heatmap#createRenderer heatmapRendererCreator.createRenderer()}
   *   method.
   *
   * @return {module:esri/widgets/smartMapping/HeatmapSlider} Returns a HeatmapSlider instance. This will not render until you assign
   *   it a valid [container](#container).
   *
   * @example
   * var params = {
   *   layer: layer,
   *   basemap: map.basemap,
   *   field: "POP",
   *   view: view
   * };
   * heatmapRendererCreator
   *   .createRenderer(params)
   *   .then(function(response) {
   *     // set generated renderer on the layer and add it to the map
   *     rendererResult = response;
   *     layer.renderer = response.renderer;
   *
   *     var slider = HeatmapSlider.fromHeatmapRendererResult(response);
   *     slider.container = "slider";
   *   });
   */
  static fromHeatmapRendererResult(result: HeatmapRendererResult): HeatmapSlider {
    return new HeatmapSlider({ stops: result.renderer.colorStops });
  }

  render(): VNode {
    const { state, label } = this;
    const isDisabled = state === "disabled";
    const baseClasses = this.classes(CSS.base, CSS.esriWidget, CSS.esriWidgetPanel, {
      [CSS.disabled]: isDisabled
    });

    return (
      <div aria-label={label} class={baseClasses}>
        {isDisabled ? null : this.renderContent(this.renderRamp(), CSS.sliderContainer)}
      </div>
    );
  }

  protected renderRamp(): VNode {
    const { _rampFillId, viewModel } = this;
    const stopInfos = viewModel.getStopInfo();

    return (
      <div class={CSS.rampElement}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>{this.renderRampFillDefinition(_rampFillId, stopInfos)}</defs>
          <rect x="0" y="0" fill={`url(#${_rampFillId})`} height="100%" width="100%" />
        </svg>
      </div>
    );
  }
}

export = HeatmapSlider;
