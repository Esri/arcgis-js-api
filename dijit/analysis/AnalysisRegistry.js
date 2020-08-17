// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","../../kernel"],(function(e,i,s){var t={Modes:{Raster:"raster",Bigdata:"bigdata",Standard:"standard",Feature:"feature"},Tools:{FindCentroids:"FindCentroids",ChooseBestFacilities:"ChooseBestFacilities"},ProcessInfoTools:{DescribeDataset:{Name:"DescribeDataset",Gax:!0,Std:!1},GeneralizedLinearRegression:{Name:"GeneralizedLinearRegression",Gax:!0,Std:!1},ForestBasedClassificationAndRegression:{Name:"ForestBasedClassificationAndRegression",Gax:!0,Std:!1},GeographicallyWeightedRegression:{Name:"GeographicallyWeightedRegression",Gax:!0,Std:!1},FindSimilarLocations:{Name:"FindSimilarLocations",Gax:!0,Std:!0},FindHotSpots:{Name:"FindHotSpots",Gax:!1,Std:!0},FindOutliers:{Name:"FindOutliers",Gax:!0,Std:!0}},ToolCategory:{Gax:"GeoAnalyticsTools",Std:"SpatialAnalysisTools"},GeometryTypes:{Polygon:"esriGeometryPolygon",Line:"esriGeometryPolyline",Point:"esriGeometryPoint",MultiPoint:"esriGeometryMultipoint"},PseudoGeometryTypes:{Point:"point",Line:"line",Polygon:"polygon"},TimeTypes:{Instant:"instant",Interval:"interval"},FieldTypes:{ObjectId:"esriFieldTypeOID",String:"esriFieldTypeString",Short:"esriFieldTypeSmallInteger",Integer:"esriFieldTypeInteger",Float:"esriFieldTypeSingle",Double:"esriFieldTypeDouble",Date:"esriFieldTypeDate"},PseudoFieldTypes:{Number:"number",String:"string",Date:"date"},Shapes:{square:"SQUARE",hexagon:"HEXAGON",transverseHexagon:"TRANSVERSEHEXAGON",triangle:"TRIANGLE",diamond:"DIAMOND"},DistanceMethods:{geodesic:"Geodesic",planar:"Planar"}};return i("extend-esri")&&e.setObject("dijit.analysis.AnalysisRegistry",t,s),t}));
