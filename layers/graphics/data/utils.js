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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/kebabDictionary","../../../core/promiseUtils","../../../core/unitUtils","../../../geometry/support/extentUtils","../../../geometry/support/jsonUtils","../../../geometry/support/normalizeUtils","../../../geometry/support/spatialReferenceUtils","../centroid","../featureConversionUtils","../OptimizedGeometry","./projectionSupport","./spatialQuerySupport"],function(e,t,r,i,n,o,s,a,u,l,c,m,p,y,f,g){function h(e,t,r){if("esriGeometryPolygon"!==e.geometryType)return null;if(!t.centroid&&!t.geometry)return null;if(t.centroid||(t.centroid=m.getCentroidOptimizedGeometry(new y.default,t.geometry,e.hasZ,e.hasM)),r){var i=p.quantizeOptimizedGeometry(z,t.centroid,e.hasZ,e.hasM,"esriGeometryPoint",r);return p.convertToPoint(i,e.hasZ,e.hasM)}return p.convertToPoint(t.centroid,e.hasZ,e.hasM)}function d(e,t,r,i){var n="coords"in t?t:t.geometry;if(!n)return null;if(r){var o=p.generalizeOptimizedGeometry(T,n,e.hasZ,e.hasM,e.geometryType,r);return i?(o=p.quantizeOptimizedGeometry(z,o,e.hasZ,e.hasM,e.geometryType,i),O[e.geometryType](o,e.hasZ,e.hasM)):O[e.geometryType](o,e.hasZ,e.hasM)}if(i){var o=p.quantizeOptimizedGeometry(z,n,e.hasZ,e.hasM,e.geometryType,i);return O[e.geometryType](o,e.hasZ,e.hasM)}return O[e.geometryType](n,e.hasZ,e.hasM)}function S(e,t,n){return i(this,void 0,void 0,function(){var i,o,s,a,u,u,u,u;return r(this,function(r){if(i=e.outFields,o=e.orderByFields,s=e.groupByFieldsForStatistics,a=e.outStatistics,i)for(u=0;u<i.length;u++)i[u]=i[u].trim();if(o)for(u=0;u<o.length;u++)o[u]=o[u].trim();if(s)for(u=0;u<s.length;u++)s[u]=s[u].trim();if(a)for(u=0;u<a.length;u++)a[u].onStatisticField&&(a[u].onStatisticField=a[u].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),[2,M(e,t,n)]})})}function v(e,t,n){return i(this,void 0,void 0,function(){return r(this,function(r){return[2,M(e,t,n)]})})}function M(e,n,o){return i(this,void 0,void 0,function(){var i,s,c,m,p;return r(this,function(r){switch(r.label){case 0:return e?(i=e.where,e.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||n&&n===i)&&(e.where=null),e.geometry?[4,R(e)]:[2,e]):[2,null];case 1:return s=r.sent(),e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel&&(c=e.geometry.spatialReference,s=a.getGeometryExtent(s),s.spatialReference=c),e.geometry=s,[4,f.checkProjectionSupport(s.spatialReference,o)];case 2:return r.sent(),[4,l.normalizeCentralMeridian(u.fromJSON(s))];case 3:return m=r.sent(),[4,f.project(m[0].toJSON(),m[0].spatialReference,o)];case 4:if(!(p=r.sent()))throw t.QUERY_ENGINE_EMPTY_RESULT;return p.spatialReference=o,e.geometry=p,[2,e]}})})}function R(e){var t=e.geometry,r=e.distance,i=e.units;if(null==r)return o.resolve(t);var n=t.spatialReference,a=i&&U.fromJSON(i)||s.getUnitString(n),u=n&&(c.isGeographic(n)||c.isWebMercator(n)),l=null;return l=u?o.resolve(t):f.checkProjectionSupport(n,c.WGS84).then(function(){return f.project(t,c.WGS84)}),l.then(function(e){return g.getGeodesicBufferOperator().then(function(t){return t(e,r,a).toJSON()})})}function G(e){return e&&P in e?JSON.parse(JSON.stringify(e,_)):e}Object.defineProperty(t,"__esModule",{value:!0});var U=new n.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});t.QUERY_ENGINE_EMPTY_RESULT=Object.freeze({});var T=new y.default,z=new y.default,O={esriGeometryPoint:p.convertToPoint,esriGeometryPolyline:p.convertToPolyline,esriGeometryPolygon:p.convertToPolygon,esriGeometryMultipoint:p.convertToMultipoint};t.getCentroid=h,t.getGeometry=d,t.normalizeQuery=S,t.normalizeFilter=v,t.cleanFromGeometryEngine=G;var P="_geVersion",_=function(e,t){return e!==P?t:void 0}});