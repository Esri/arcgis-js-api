/**
 * The ScaleBar widget displays a scale bar on the map or in a specified HTML node.
 * The widget respects various coordinate systems and displays units in metric or non-metric values.
 * Metric values shows either kilometers or meters depending on the scale, and likewise non-metric values shows miles and feet depending on the scale.
 * When working with Web Mercator or geographic coordinate systems the scale bar takes into account projection distortion and dynamically adjusts the scale bar.
 * The [ScaleBar widget sample](../sample-code/widgets-scalebar/index.html), which uses a map that has the Web Mercator projection, shows this behavior.
 * Open the sample and note that as you pan the map south towards the equator the scale bar gets shorter and as you pan north it gets longer.
 *
 * When the scale bar is inside the map, the actual location of the scale bar is used to calculate the scale.
 * Otherwise, the center of the map is used to calculate the scale.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * ScaleBar only works with {@link module:esri/views/MapView}.
 * :::
 *
 *
 * @module esri/widgets/ScaleBar
 * @since 4.3
 *
 * @see [ScaleBar.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/ScaleBar.tsx)
 * @see [ScaleBar.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_ScaleBar.scss)
 * @see [Sample - ScaleBar widget](../sample-code/widgets-scalebar/index.html)
 * @see module:esri/widgets/ScaleBar/ScaleBarViewModel
 *
 * @example
 * var scaleBar = new ScaleBar({
 *   view: view
 * });
 * // Add widget to the bottom left corner of the view
 * view.ui.add(scaleBar, {
 *   position: "bottom-left"
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/ScaleBar/nls/ScaleBar";

// esri.core
import { createScreenPoint } from "esri/core/screenUtils";
import { whenTrue } from "esri/core/watchUtils";

// esri.core.accessorSupport
import { aliasOf, cast, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.views
import MapView = require("esri/views/MapView");

// esri.widgets
import { MapUnitType, ScaleBarProperties } from "esri/widgets/interfaces";
import Widget = require("esri/widgets/Widget");

// esri.widgets.ScaleBar
import ScaleBarViewModel = require("esri/widgets/ScaleBar/ScaleBarViewModel");

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import { renderable, tsx } from "esri/widgets/support/widget";

type ScaleBarStyle = "line" | "ruler";
type ScaleBarUnit = MapUnitType | "dual";

const CSS = {
  base: "esri-scale-bar esri-widget",
  labelContainer: "esri-scale-bar__label-container",
  rulerLabelContainer: "esri-scale-bar__label-container--ruler",
  lineLabelContainer: "esri-scale-bar__label-container--line",
  topLabelContainer: "esri-scale-bar__label-container--top",
  bottomLabelContainer: "esri-scale-bar__label-container--bottom",
  label: "esri-scale-bar__label",
  line: "esri-scale-bar__line",
  topLine: "esri-scale-bar__line--top",
  bottomLine: "esri-scale-bar__line--bottom",
  ruler: "esri-scale-bar__ruler",
  rulerBlock: "esri-scale-bar__ruler-block",
  barContainer: "esri-scale-bar__bar-container",
  rulerBarContainer: "esri-scale-bar__bar-container--ruler",
  lineBarContainer: "esri-scale-bar__bar-container--line",

  // common
  disabled: "esri-disabled"
};

function double(value: number): number {
  return 2 * value;
}

@subclass("esri.widgets.ScaleBar")
class ScaleBar extends declared(Widget) {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/ScaleBar
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var scalebar = new ScaleBar({
   *   view: view
   * });
   */
  constructor(params?: any) {
    super();
  }

  postInitialize(): void {
    this.own([whenTrue(this, "view.stationary", () => this.scheduleRender())]);
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  style
  //----------------------------------

  /**
   * The style for the scale bar.
   * When `unit` is set to `dual`, the style will always be `line`.
   *
   * **Possible Values:** ruler | line
   *
   * @name style
   * @instance
   * @type {string}
   */
  @property({
    dependsOn: ["unit"]
  })
  @renderable()
  set style(value: ScaleBarStyle) {
    // ruler + dual not allowed
    const style = this.unit === "dual" ? "line" : value;

    this._set("style", style);
  }

  @cast("style")
  protected castStyle(value: ScaleBarStyle | string): ScaleBarStyle {
    return value === "line" ? value : "ruler";
  }

  //----------------------------------
  //  unit
  //----------------------------------

  /**
   * Units to use for the scale bar.
   * When using `dual`, the scale bar displays both metric and non-metric units.
   * Metric values show either kilometers or meters depending on the scale, and non-metric values show either miles or feet depending on the scale.
   *
   * **Possible Values:** non-metric | metric | dual
   *
   * @name unit
   * @instance
   * @type {string}
   * @default non-metric
   */
  @property()
  @renderable()
  unit: ScaleBarUnit = "non-metric";

  @cast("unit")
  protected castUnit(value: ScaleBarUnit | string): ScaleBarUnit {
    return value === "metric" || value === "dual" ? value : "non-metric";
  }

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView}. Set this to link
   * the widget to a specific view.
   *
   * @name view
   * @instance
   *
   * @type {module:esri/views/MapView}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: MapView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/ScaleBar/ScaleBarViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/ScaleBar/ScaleBarViewModel}
   * @autocast
   */
  @property()
  @renderable(["viewModel.state"])
  viewModel = new ScaleBarViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const isDisabled = this.get("viewModel.state") === "disabled";

    const baseClasses = {
      [CSS.disabled]: isDisabled
    };

    let metricScaleBar: any;
    let nonMetricScaleBar: any;

    if (!isDisabled) {
      const { unit, style } = this;
      const useNonMetric = unit === "non-metric" || unit === "dual";
      const useMetric = unit === "metric" || unit === "dual";
      const baseLengthInPixels = 50;

      if (useNonMetric) {
        const nonMetricScale = this.viewModel.getScaleBarProperties(
          baseLengthInPixels,
          "non-metric"
        );

        if (nonMetricScale) {
          nonMetricScaleBar =
            style === "ruler"
              ? this._renderRuler(nonMetricScale)
              : this._renderLine(nonMetricScale, "bottom");
        }
      }

      if (useMetric) {
        const metricScale = this.viewModel.getScaleBarProperties(baseLengthInPixels, "metric");

        if (metricScale) {
          metricScaleBar =
            style === "ruler"
              ? this._renderRuler(metricScale)
              : this._renderLine(metricScale, "top");
        }
      }
    }

    return (
      <div
        afterCreate={this._handleRootCreateOrUpdate}
        afterUpdate={this._handleRootCreateOrUpdate}
        bind={this}
        class={this.classes(CSS.base, baseClasses)}
      >
        {metricScaleBar}
        {nonMetricScaleBar}
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderRuler(scaleBarProps: ScaleBarProperties): VNode {
    const length = double(Math.round(scaleBarProps.length));
    const unit = i18n[scaleBarProps.unit] || i18n.unknownUnit;
    const unitLabel = `${double(scaleBarProps.value)} ${unit}`;

    return (
      <div
        class={this.classes(CSS.barContainer, CSS.rulerBarContainer)}
        key="esri-scale-bar__ruler"
      >
        <div class={CSS.ruler} styles={{ width: `${length}px` }}>
          <div class={CSS.rulerBlock} />
          <div class={CSS.rulerBlock} />
          <div class={CSS.rulerBlock} />
          <div class={CSS.rulerBlock} />
        </div>
        <div class={this.classes(CSS.labelContainer, CSS.rulerLabelContainer)}>
          <div class={CSS.label}>0</div>
          <div class={CSS.label}>{unitLabel}</div>
        </div>
      </div>
    );
  }

  private _renderLine(scaleBarProps: ScaleBarProperties, labelPosition: "top" | "bottom"): VNode {
    const unit = i18n[scaleBarProps.unit] || i18n.unknownUnit;
    const unitLabel = `${double(scaleBarProps.value)} ${unit}`;
    const labelContainerClasses = {
      [CSS.topLabelContainer]: labelPosition === "top",
      [CSS.bottomLabelContainer]: labelPosition === "bottom"
    };
    const label = (
      <div
        class={this.classes(CSS.labelContainer, CSS.lineLabelContainer, labelContainerClasses)}
        key="esri-scale-bar__label"
      >
        <div class={CSS.label}>{unitLabel}</div>
      </div>
    );

    const lineClasses = {
      [CSS.topLine]: labelPosition === "top",
      [CSS.bottomLine]: labelPosition === "bottom"
    };

    const length = double(Math.round(scaleBarProps.length));
    const line = (
      <div
        class={this.classes(CSS.line, lineClasses)}
        key="esri-scale-bar__line"
        styles={{ width: `${length}px` }}
      />
    );

    return (
      <div
        class={this.classes(CSS.barContainer, CSS.lineBarContainer)}
        key="esri-scale-bar__line-container"
      >
        {[line, label]}
      </div>
    );
  }

  private _handleRootCreateOrUpdate(node: Element): void {
    const vm = this.viewModel;

    if (vm) {
      const rect = node.getBoundingClientRect();
      const x = rect.left + window.pageXOffset;
      const y = rect.top + window.pageYOffset;

      vm.scaleComputedFrom = createScreenPoint(x, y);
    }
  }
}

export = ScaleBar;
