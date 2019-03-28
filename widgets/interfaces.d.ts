// dojox
import { Fill } from "dojox/gfx";

// esri
import Color = require("../Color");
import { Extent, Point, SpatialReference, Polygon, Polyline } from "../geometry";
import Graphic = require("../Graphic");
import PopupTemplate = require("../PopupTemplate");
import { Symbol } from "../symbols";

// esri.core
import Collection = require("../core/Collection");
import EsriError = require("../core/Error");

// esri.layers
import Layer = require("../layers/Layer");

// esri.tasks
import GeometryService = require("../tasks/GeometryService");

// esri.views
import MapView = require("../views/MapView");
import SceneView = require("../views/SceneView");

// esri.widgets.Search
import LayerSearchSource = require("./Search/LayerSearchSource");
import LocatorSearchSource = require("./Search/LocatorSearchSource");
import SearchViewModel = require("./Search/SearchViewModel");

interface Axes {
  x?: number;
  y?: number;
  z?: number;
}

export type SupportedSearchSource = LocatorSearchSource | LayerSearchSource;

export type ActiveMenu = "none" | "suggestion" | "source" | "warning";

export type SearchState = "disabled" | "ready" | "searching" | "loading";

export type SearchItem = SuggestResult | string | Point | number[] | Graphic;

export interface SearchProperties {
  activeSourceIndex: number;
  allPlaceholder: string;
  autoNavigate: boolean;
  autoSelect: boolean;
  defaultSource: SupportedSearchSource;
  maxResults: number;
  maxSuggestions: number;
  minSuggestCharacters: number;
  popupEnabled: boolean;
  popupTemplate: PopupTemplate;
  resultGraphicEnabled: boolean;
  searchAllEnabled: boolean;
  searchTerm: string;
  selectedResult: SearchResult;
  sources: Collection<SupportedSearchSource>;
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
  source: SupportedSearchSource;
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

export interface SourcesHandler {
  (
    options: { sources: Collection<SupportedSearchSource>; defaultSources: Collection<SupportedSearchSource> }
  ): Collection<SupportedSearchSource>;
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

type LegendElement =
  | SymbolTableElement
  | ColorRampElement
  | OpacityRampElement
  | SizeRampElement
  | HeatmapRampElement
  | RelationshipRampElement;
type SymbolTableElementType = ImageSymbolTableElementInfo | SymbolTableElementInfo;

interface SymbolTableElement {
  type: "symbol-table";
  title?: RendererTitle | DotDensityTitle | string;
  infos: SymbolTableElementType[];
  legendType?: string;
}

interface SymbolTableElementInfo {
  label: RampTitle | string;
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

interface ColorRampElement {
  type: "color-ramp";
  title: RampTitle | string;
  borderColor: Color;
  overlayColor: Color;
  infos: ColorRampStop[];
}

interface OpacityRampElement {
  type: "opacity-ramp";
  title: RampTitle | string;
  borderColor: Color;
  overlayColor: Color;
  infos: OpacityRampStop[];
}

interface SizeRampElement {
  type: "size-ramp";
  title: RampTitle | string;
  infos: SizeRampStop[];
}

interface HeatmapRampElement {
  type: "heatmap-ramp";
  title: RampTitle | string;
  infos: HeatmapRampStop[];
}

interface RelationshipRampElement {
  type: "relationship-ramp";
  numClasses: number;
  focus: string;
  colors: Fill[][];
  labels: RelationshipLabels;
  rotation: number;
  title?: string;
  infos?: any[];
}

interface RendererTitle {
  title?: string;
  field: string;
  normField: string;
  normByPct: boolean;
}

interface DotDensityTitle {
  value: number;
  unit?: string;
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
  outlineSize?: number;
  preview?: HTMLElement;
}

interface ColorRampStop {
  value: number;
  color: Color;
  offset: number;
  label: string;
}

interface OpacityRampStop {
  value: number;
  color: Color;
  offset: number;
  label: string;
}

interface HeatmapRampStop {
  color: Color;
  offset: number;
  ratio: number;
  label: string;
}

interface RelationshipLabels {
  top: string;
  bottom: string;
  left: string;
  right: string;
}

interface ZoomConditions {
  readonly canZoomIn: boolean;
  readonly canZoomOut: boolean;
}

interface AttributionItem<L extends Layer = Layer> {
  readonly text: string;
  readonly layer: L;
}

type BoundingBox = [number, number, number, number];

export interface CoverageArea {
  zoomMax: number;
  zoomMin: number;
  score: number;
  bbox: BoundingBox;
}

export interface MaxKeyOwner {
  maxKey?: number;
}

export interface Contributor extends MaxKeyOwner {
  attribution?: string;
  coverageAreas?: CoverageArea[];
  score?: number;
  extent?: Extent;
  id?: number;
  objectId?: number;
}

export interface Contributors extends MaxKeyOwner, Array<Contributor> {}

export interface AttributionData extends MaxKeyOwner {
  contributors?: Contributors;
}

export interface VertexDrag {
  /** Index of the polygon vertex being dragged. */
  index: number;
  /** Original position of the dragged vertex. */
  origin: Point;
}

export type AreaUnit =
  | "metric"
  | "imperial"
  | "square-inches"
  | "square-feet"
  | "square-yards"
  | "square-miles"
  | "square-us-feet"
  | "square-meters"
  | "square-kilometers"
  | "acres"
  | "ares"
  | "hectares";

export type MeasurementMode = "auto" | "planar" | "geodesic";

export type MeasurementState = "disabled" | "ready" | "measuring" | "measured";

export interface AreaMeasurement {
  geometry: Polygon;
  area: number;
  perimeter: number;
}

export interface AreaMeasurementLabel {
  area: string;
  perimeter: string;
}

export type LinearUnit =
  | "imperial"
  | "metric"
  | "inches"
  | "feet"
  | "yards"
  | "miles"
  | "nautical-miles"
  | "meters"
  | "kilometers"
  | "us-feet";

export interface LinearMeasurement {
  geometry: Polyline;
  length: number;
}

export interface LinearMeasurementPalette {
  handleWidth: number;
  handleColor: number[];

  pathWidth: number;
  pathPrimaryColor: number[];
  pathSecondaryColor: number[];
}

export interface AreaMeasurementPalette {
  handleWidth: number;
  handleColor: number[];

  pathWidth: number;
  pathColor: number[];

  fillColor: number[];
}
