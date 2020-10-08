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

define(["require","exports","tslib","../../../core/Error","../../../core/Logger","../../../geometry/support/quantizationUtils"],(function(e,r,t,n,a,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r,i,s,c){var l=e.referencesGeometry()&&c?function(e,r,i){var s=i.transform,c=i.hasZ,l=i.hasM;o.has(r)||o.set(r,function(e){var r={};switch(e){case"esriGeometryPoint":return function(e,t,n,a){return u.unquantizePoint(t,r,e,n,a)};case"esriGeometryPolygon":return function(e,t,n,a){return u.unquantizePolygon(t,r,e,n,a)};case"esriGeometryPolyline":return function(e,t,n,a){return u.unquantizePolyline(t,r,e,n,a)};case"esriGeometryMultipoint":return function(e,t,n,a){return u.unquantizeMultipoint(t,r,e,n,a)};default:return a.getLogger("esri.views.2d.support.arcadeOnDemand").error(new n("mapview-arcade","Unable to handle geometryType: "+e)),function(e){return e}}}(r));var g=o.get(r)(e.geometry,s,c,l);return t.__assign(t.__assign({},e),{geometry:g})}(r,s,c):r,g=e.repurposeFeature(l);try{return e.evaluate(t.__assign(t.__assign({},i),{$feature:g}))}catch(e){return a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",e),null}};var o=new Map}));