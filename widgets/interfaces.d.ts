import FeatureLayerSearchSource = require("./Search/FeatureLayerSearchSource");
import LocatorSearchSource = require("./Search/LocatorSearchSource");
import EsriError = require("../core/Error");
import Extent = require("../geometry/Extent");
import Point = require("../geometry/Point");
import Graphic = require("../Graphic");
import Layer = require("../layers/Layer");
import Symbol = require("../symbols/Symbol");
import Color = require("../Color");
import PopupTemplate = require("../PopupTemplate");
import Collection = require("../core/Collection");
import SceneView = require("../views/SceneView");
import SearchViewModel = require("./Search/SearchViewModel");
import MapView = require("../views/MapView");

interface Axes {
  x?: number;
  y?: number;
  z?: number;
}

export type ActiveMenu = "none" | "suggestion" | "source" | "warning";

export type SearchItem = SuggestResult | string | Point | number[] | Graphic;

export interface SearchProperties {
  activeSourceIndex: number;
  allPlaceholder: string;
  autoNavigate: boolean;
  autoSelect: boolean;
  defaultSource: LocatorSearchSource | FeatureLayerSearchSource;
  maxResults: number;
  maxSuggestions: number;
  minSuggestCharacters: number;
  popupEnabled: boolean;
  popupOpenOnSelect: boolean;
  popupTemplate: PopupTemplate;
  resultGraphicEnabled: boolean;
  searchAllEnabled: boolean;
  searchTerm: string;
  selectedResult: SearchResult;
  sources: Collection<LocatorSearchSource | FeatureLayerSearchSource>;
  suggestionsEnabled: boolean;
  view: MapView | SceneView;
  viewModel: SearchViewModel;
}

export interface SearchResult {
  extent: Extent;
  feature: Graphic;
  name: string;
  sourceIndex: number;
}

export interface SearchResults<T> {
  source: LocatorSearchSource | FeatureLayerSearchSource;
  sourceIndex: number;
  error?: EsriError;
  results?: T[];
}

export interface SuggestResult {
  location?: Point;
  text: string;
  key: string;
  sourceIndex: number;
}

export interface SearchResponse<T> {
  activeSourceIndex: number;
  searchTerm: string;
  numResults: number;
  numErrors: number;
  errors: T[];
  results: T[];
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

interface ZoomConditions {
  readonly canZoomIn: boolean;
  readonly canZoomOut: boolean;
}

interface AttributionItem<L extends Layer = Layer> {
  readonly text: string;
  readonly layers: L[];
}
