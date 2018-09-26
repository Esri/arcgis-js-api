// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../featureConversionUtils","../OptimizedGeometry"],function(e,t,r,o){function i(e,t,i){if("esriGeometryPolygon"!==e.geometryType)return null;if(!t.centroid&&!t.geometry)return null;if(t.centroid||(t.centroid=r.getCentroidOptimizedGeometry(new o.default,t.geometry,e.hasZ,e.hasM)),i){var n=r.quantizeOptimizedGeometry(a,t.centroid,e.hasZ,e.hasM,"esriGeometryPoint",i);return r.convertToPoint(n,e.hasZ,e.hasM)}return r.convertToPoint(t.centroid,e.hasZ,e.hasM)}function n(e,t,o,i){if(!t.geometry)return null;if(o){var n=r.generalizeOptimizedGeometry(y,t.geometry,e.hasZ,e.hasM,e.geometryType,o);return i?(n=r.quantizeOptimizedGeometry(a,n,e.hasZ,e.hasM,e.geometryType,i),m[e.geometryType](n,e.hasZ,e.hasM)):m[e.geometryType](n,e.hasZ,e.hasM)}if(i){var n=r.quantizeOptimizedGeometry(a,t.geometry,e.hasZ,e.hasM,e.geometryType,i);return m[e.geometryType](n,e.hasZ,e.hasM)}return m[e.geometryType](t.geometry,e.hasZ,e.hasM)}Object.defineProperty(t,"__esModule",{value:!0});var y=new o.default,a=new o.default,m={esriGeometryPoint:r.convertToPoint,esriGeometryPolyline:r.convertToPolyline,esriGeometryPolygon:r.convertToPolygon,esriGeometryMultipoint:r.convertToMultipoint};t.getCentroid=i,t.getGeometry=n});