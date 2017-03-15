import FeatureLayerSearchSource = require("./Search/FeatureLayerSearchSource");
import LocatorSearchSource = require("./Search/LocatorSearchSource");
import EsriError = require("../core/Error");
import Extent = require("../geometry/Extent");
import Graphic = require("../Graphic");

interface Axes {
  x?: number;
  y?: number;
  z?: number;
}

interface SearchResult {
  extent: Extent;
  feature: Graphic;
  name: string;
}

interface SearchResults {
  results: SearchResult[];
  source: LocatorSearchSource | FeatureLayerSearchSource;
  sourceIndex: number;
}

interface SuggestResult {
  text: string;
  magicKey: string;
  sourceIndex: number;
}

interface SuggestResults {
  results: SuggestResult[];
  source: LocatorSearchSource | FeatureLayerSearchSource;
  sourceIndex: number;
}

interface Results {
  activeSourceIndex: number;
  searchTerm: string;
  numResults: number;
  numErrors: number;
  errors: EsriError[];
  results: SearchResults | SuggestResults;
}

type MapUnitType = "metric" | "non-metric";
type MetricMapUnit = "m" | "km";
type NonMetricMapUnit = "ft" | "mi";
type MapUnit = MetricMapUnit | NonMetricMapUnit;

interface ScaleBarProperties {
  length: number;
  value: number;
  unit: MapUnit;
}

interface Bounds {
  max: number;
  min: number;
}
