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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","@dojo/framework/shim/WeakMap","../../../core/Error","../../../core/Logger","../../../geometry/support/quantizationUtils","../../../layers/graphics/featureConversionUtils"],(function(e,r,t,a,n,o,u,i){Object.defineProperty(r,"__esModule",{value:!0});var c=o.getLogger("esri.views.2d.support.arcadeOnDemand");r.callWithOptimizedFeature=function(e,r,a,n,o){var u=n.geometryType,s=n.hasZ,y=n.hasM,f=e.referencesGeometry()?o?l(e,i.convertToFeature(r,u,s,y),u,o):i.convertToFeature(r,u,s,y):r,d=e.repurposeFeature(f);try{return e.evaluate(t({},a,{$feature:d}))}catch(e){return c.warn("Feature arcade evaluation failed:",e),null}},r.callWithFeature=function(e,r,a,n,o){var u=e.referencesGeometry()&&o?l(e,r,n,o):r,i=e.repurposeFeature(u);try{return e.evaluate(t({},a,{$feature:i}))}catch(e){return c.warn("Feature arcade evaluation failed:",e),null}};var s=new a.default;function l(e,r,a,n){var o=n.transform,u=n.hasZ,i=n.hasM;s.has(e)||s.set(e,y(a));var c=s.get(e)(r.geometry,o,u,i);return t({},r,{geometry:c})}function y(e){var r={};switch(e){case"esriGeometryPoint":return function(e,t,a,n){return u.hydratePoint(t,r,e,a,n)};case"esriGeometryPolygon":return function(e,t,a,n){return u.hydratePolygon(t,r,e,a,n)};case"esriGeometryPolyline":return function(e,t,a,n){return u.hydratePolyline(t,r,e,a,n)};case"esriGeometryMultipoint":return function(e,t,a,n){return u.hydrateMultipoint(t,r,e,a,n)};default:return c.error(new n("mapview-arcade","Unable to handle geometryType: "+e)),function(e){return e}}}r.createHydrateFactory=y}));