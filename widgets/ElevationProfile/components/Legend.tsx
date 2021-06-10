// esri.core
import Collection from "esri/../../core/Collection";
import { Maybe } from "esri/../../core/maybe";
import { init } from "esri/../../core/watchUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/../../core/accessorSupport/decorators";

// esri.widgets
import Widget from "esri/../Widget";

// esri.widgets.ElevationProfile
import { LEGEND_CSS as CSS } from "esri/css";
import { IElevationProfileLine, EffectiveUnits } from "esri/interfaces";

// esri.widgets.ElevationProfile.components
import { LegendItem } from "esri/widgets/LegendItem";

// esri.widgets.support
import { VNode } from "esri/../support/interfaces";
import { tsx } from "esri/../support/widget";

export interface ConstructionParameters {
  profiles: IElevationProfileLine[];
  effectiveUnits: EffectiveUnits;
}

/**
 * Widget which displays an accordion where each item displays the title of a
 * profile line, a checkbox to toggle its visibility and its statistics.
 */
@subclass("esri.widgets.ElevationProfile.Legend")
export class Legend extends Widget implements ConstructionParameters {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  constructor(params?: ConstructionParameters, parentNode?: string | Element) {
    super(params, parentNode);
  }

  initialize(): void {
    // We don't support including widgets in TSX yet, so we need to wire things manually.
    this.own([
      init(this, "profiles", (lines) => {
        this._destroyItems();
        this._items.addMany(lines.map((line) => this._createItemForLine(line)));
      }),
      this.watch("effectiveUnits", (units) => {
        this._items.forEach((item) => {
          item.effectiveUnits = units;
        });
      })
    ]);
  }

  destroy(): void {
    this._destroyItems();
  }

  render(): VNode {
    return <div class={CSS.base}>{this._items.toArray().map((item) => item.render())}</div>;
  }

  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  @property()
  profiles: IElevationProfileLine[];

  @property()
  effectiveUnits: EffectiveUnits;

  //--------------------------------------------------------------------------
  //
  //  Private Properties
  //
  //--------------------------------------------------------------------------

  @property()
  private _items = new Collection<LegendItem>();

  /**
   * Line which is currently expanded.
   *
   * We keep this here rather than as local state inside of each component
   * because we don't have a simple way to keep components around when the
   * `profiles` collection changes and instead we just rebuild all the
   * components. Having this here allows us to restore the `expanded` property
   * of each component.
   */
  @property()
  private _expandedLine: Maybe<IElevationProfileLine> = null;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Called by items whenever they are toggled.
   *
   * @param toggledLine
   *    The line whose item was toggled.
   */
  private _onExpandedToggle(toggledLine: IElevationProfileLine): void {
    this._expandedLine = toggledLine === this._expandedLine ? null : toggledLine;

    // Make sure only the item corresponding to the expanded line is expanded.
    this._items.forEach((item) => (item.expanded = item.line === this._expandedLine));
  }

  private _createItemForLine(line: IElevationProfileLine): LegendItem {
    return new LegendItem({
      line,
      effectiveUnits: this.effectiveUnits,
      expanded: line === this._expandedLine,
      checkboxVisible: this.profiles.length > 1, // Don't show checkbox when there is a single profile line
      onExpandedToggle: () => this._onExpandedToggle(line)
    });
  }

  private _destroyItems(): void {
    this._items.drain((item) => item.destroy());
  }
}
