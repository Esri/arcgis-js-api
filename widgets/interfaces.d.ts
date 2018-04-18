// esri
import Color = require("../Color");
import Graphic = require("../Graphic");
import PopupTemplate = require("../PopupTemplate");

// esri.core
import Collection = require("../core/Collection");
import EsriError = require("../core/Error");

// esri.geometry
import Extent = require("../geometry/Extent");
import Point = require("../geometry/Point");
import SpatialReference = require("../geometry/SpatialReference");

// esri.layers
import Layer = require("../layers/Layer");

// esri.symbols
import Symbol = require("../symbols/Symbol");

// esri.tasks
import GeometryService = require("../tasks/GeometryService");

// esri.views
import MapView = require("../views/MapView");
import SceneView = require("../views/SceneView");

// esri.widgets.Search
import FeatureLayerSearchSource = require("./Search/FeatureLayerSearchSource");
import LocatorSearchSource = require("./Search/LocatorSearchSource");
import SearchViewModel = require("./Search/SearchViewModel");

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
  key: string;
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

// Coordinate Conversion

export interface Position {
  location: Point;
  coordinate: string;
}

export type Mode = "live" | "capture";

export interface ConversionInfo {
  convert?: (point: Point) => Position;
  convertDeferred?: (point: Point) => IPromise<Position>;
  reverseConvert?: (input: string) => Point;
  spatialReference?: SpatialReference;
}

export interface CoordinateSegment {
  alias: string;
  description: string;
  searchPattern: RegExp;
  substitution: Substitution;
}

interface Substitution {
  input: Replacer;
  output: Replacer;
}

interface Replacer {
  (input: string): string;
}

export interface FromGeoCoordinateStringParameters {
  coordinate: string;
  spatialReference: SpatialReference;
  formatName: string;
  geometryServicePromise: IPromise<GeometryService>;
}

export interface ToGeoCoordinateStringParameters {
  location: Point;
  formatName: string;
  geometryServicePromise: IPromise<GeometryService>;
}

export interface ProjectPointParameters {
  location: Point;
  spatialReference: SpatialReference;
  geometryServicePromise: IPromise<GeometryService>;
  scale?: number;
}

export interface CoordinateConversionWidgetState {
  formats: FormatJSON[];
  locale: string;
}

export interface FormatJSON {
  currentPattern: string;
  defaultPattern: string;
  name: string;
  index: number;
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
  readonly layer: L;
}
