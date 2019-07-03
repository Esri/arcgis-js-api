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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","@dojo/framework/shim/WeakMap","../../../core/Error","../../../core/Logger","../../../geometry/support/quantizationUtils","../../../layers/graphics/featureConversionUtils"],function(e,r,t,a,n,o,u,i){function c(e,r,a,n,o){var u=n.geometryType,c=n.hasZ,s=n.hasM,y=e.referencesGeometry()?o?l(e,i.convertToFeature(r,u,c,s),u,o):i.convertToFeature(r,u,c,s):r,d=e.repurposeFeature(y);try{return e.evaluate(t({},a,{$feature:d}))}catch(e){return f.warn("Feature arcade evaluation failed:",e),null}}function s(e,r,a,n,o){var u=e.referencesGeometry()&&o,i=u?l(e,r,n,o):r,c=e.repurposeFeature(i);try{return e.evaluate(t({},a,{$feature:c}))}catch(e){return f.warn("Feature arcade evaluation failed:",e),null}}function l(e,r,a,n){var o=n.transform,u=n.hasZ,i=n.hasM;d.has(e)||d.set(e,y(a));var c=d.get(e)(r.geometry,o,u,i);return t({},r,{geometry:c})}function y(e){var r={};switch(e){case"esriGeometryPoint":return function(e,t,a,n){return u.hydratePoint(t,r,e,a,n)};case"esriGeometryPolygon":return function(e,t,a,n){return u.hydratePolygon(t,r,e,a,n)};case"esriGeometryPolyline":return function(e,t,a,n){return u.hydratePolyline(t,r,e,a,n)};case"esriGeometryMultipoint":return function(e,t,a,n){return u.hydrateMultipoint(t,r,e,a,n)};default:return f.error(new n("mapview-arcade","Unable to handle geometryType: "+e)),function(e,r,t,a){return e}}}Object.defineProperty(r,"__esModule",{value:!0});var f=o.getLogger("esri.views.2d.support.arcadeOnDemand");r.callWithOptimizedFeature=c,r.callWithFeature=s;var d=new a.default;r.createHydrateFactory=y});