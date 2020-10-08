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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/unitUtils","../../geometry/support/spatialReferenceUtils","../../layers/graphics/OptimizedFeature","../../layers/graphics/OptimizedFeatureSet","../../layers/graphics/OptimizedGeometry"],(function(e,t,r,o,i,n,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OptimizedFeatureSetParserContext=void 0;var s=function(){function e(e){this.options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"]}return e.prototype.createFeatureResult=function(){return new n.default},e.prototype.prepareFeatures=function(){},e.prototype.finishFeatureResult=function(e){if(e&&e.features&&e.hasZ&&this.options.sourceSpatialReference&&e.spatialReference&&!o.equals(e.spatialReference,this.options.sourceSpatialReference)&&!e.spatialReference.vcsWkid){var t=r.getMetersPerVerticalUnitForSR(this.options.sourceSpatialReference)/r.getMetersPerVerticalUnitForSR(e.spatialReference);if(1!==t)for(var i=0,n=e.features;i<n.length;i++){var a=n[i];if(a.geometry&&a.geometry.coords)for(var s=a.geometry.coords,p=2;p<s.length;p+=3)s[p]*=t}}},e.prototype.addFeature=function(e,t){e.features.push(t)},e.prototype.createFeature=function(){return new i.default},e.prototype.createSpatialReference=function(){return{wkid:0}},e.prototype.createGeometry=function(){return new a.default},e.prototype.addField=function(e,t){e.fields.push(t)},e.prototype.addCoordinate=function(e,t){e.coords.push(t)},e.prototype.addCoordinatePoint=function(e,t){e.coords.push(t)},e.prototype.addLength=function(e,t){e.lengths.push(t)},e.prototype.createPointGeometry=function(){return new a.default},e}();t.OptimizedFeatureSetParserContext=s}));