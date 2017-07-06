import FeatureLayerSearchSource = require("./Search/FeatureLayerSearchSource");
import LocatorSearchSource = require("./Search/LocatorSearchSource");
import EsriError = require("../core/Error");
import Extent = require("../geometry/Extent");
import Graphic = require("../Graphic");
import Layer = require("../layers/Layer");
import Symbol = require("../symbols/Symbol");
import Color = require("../Color");

interface Axes {
  x?: number;
  y?: number;
  z?: number;
}

export interface SearchResult {
  extent: Extent;
  feature: Graphic;
  name: string;
  sourceIndex: number;
}

export interface SearchResultsBase {
  source: LocatorSearchSource | FeatureLayerSearchSource;
  sourceIndex: number;
  error?: EsriError;
}

export interface SearchResults extends SearchResultsBase {
  results?: SearchResult[];
}

export interface SuggestResults extends SearchResultsBase {
  results?: SuggestResult[];
}

export interface SuggestResult {
  text: string;
  key: string;
  sourceIndex: number;
}

export interface SearchEventBase {
  activeSourceIndex: number;
  searchTerm: string;
  numResults: number;
  numErrors: number;
}

export interface SearchEvent extends SearchEventBase {
  errors: SearchResults[];
  results: SearchResults[];
}

export interface SuggestEvent extends SearchEventBase {
  errors: SuggestResults[];
  results: SuggestResults[];
}

export interface SuggestionCandidate {
  isCollection: boolean;
  magicKey: string;
  text: string;
}

type MapUnitType = "metric" | "non-metric";
type MetricMapUnit = "m" | "km";
type NonMetricMapUnit = "ft" | "mi";
type MapUnit = MetricMapUnit | NonMetricMapUnit;

export interface ScaleBarProperties {
  length: number;
  value: number;
  unit: MapUnit;
}

export interface Bounds {
  max: number;
  min: number;
}

// Legend

interface LayerInfo {
  layer: Layer;
  title: string;
}

type LegendElement = SymbolTableElement | ColorOpacityRampElement | SizeRampElement;
type LegendElementType = "symbol-table" | "color-ramp" | "opacity-ramp" | "size-ramp";

type SymbolTableElementType = ImageSymbolTableElementInfo | SymbolTableElementInfo;

interface SymbolTableElement {
  type: LegendElementType;
  title?: RendererTitle | string;
  infos: SymbolTableElementType[];
  legendType?: string;
}

interface SymbolTableElementInfo {
  label: string;
  value?: any;
  symbol: Symbol;
  size?: number;
  preview?: HTMLElement;
}

interface ImageSymbolTableElementInfo {
  label?: string;
  src: string;
  opacity: number;
  width?: number;
  height?: number;
}

interface ColorOpacityRampElement {
  type: LegendElementType;
  title: RampTitle | string;
  borderColor: Color;
  overlayColor: Color;
  infos: ColorOpacityRampStop[];
}

interface SizeRampElement {
  type: LegendElementType;
  title: RampTitle | string;
  infos: SizeRampStop[];
}

interface RendererTitle {
  title?: string;
  field: string;
  normField: string;
  normByPct: boolean;
}

interface RampTitle {
  field: string;
  normField: string;
  ratio: boolean;
  ratioPercent: boolean;
  ratioPercentTotal: boolean;
}

interface SizeRampStop {
  label: string;
  value?: any;
  symbol: Symbol;
  size?: number;
  preview?: HTMLElement;
}

interface ColorOpacityRampStop {
  value: number;
  color: Color;
  offset: number;
  label: string;
}
