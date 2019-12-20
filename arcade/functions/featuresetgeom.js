// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../kernel","../languageUtils","../featureset/actions/SpatialFilter","../featureset/sources/Empty","../../core/promiseUtils","../../geometry/Geometry","../../geometry/geometryEngineAsync"],function(e,t,n,r,a,i,s,l,o){function u(e,t,u,c,f){return f(e,t,function(e,t,f){if(f.length<2)return c(new Error("Missing Parameters"));if(f=r.autoCastFeatureToGeometry(f),null===f[0]&&null===f[1])return s.resolve(!1);if(r.isFeatureSet(f[0]))return f[1]instanceof l?s.resolve(new a({parentfeatureset:f[0],relation:u,relationGeom:f[1]})):null===f[1]?s.resolve(new i({parentfeatureset:f[0]})):c("Spatial Relation cannot accept this parameter type");if(f[0]instanceof l){if(f[1]instanceof l){var p=null;switch(u){case"esriSpatialRelEnvelopeIntersects":p=o.intersects(n.shapeExtent(f[0]),n.shapeExtent(f[1]));break;case"esriSpatialRelIntersects":p=o.intersects(f[0],f[1]);break;case"esriSpatialRelContains":p=o.contains(f[0],f[1]);break;case"esriSpatialRelOverlaps":p=o.overlaps(f[0],f[1]);break;case"esriSpatialRelWithin":p=o.within(f[0],f[1]);break;case"esriSpatialRelTouches":p=o.touches(f[0],f[1]);break;case"esriSpatialRelCrosses":p=o.crosses(f[0],f[1])}return null!==p?p:s.reject(new Error("Unrecognised Relationship"))}return r.isFeatureSet(f[1])?s.resolve(new a({parentfeatureset:f[1],relation:u,relationGeom:f[0]})):null===f[1]?s.resolve(!1):c("Spatial Relation cannot accept this parameter type")}return null!==f[0]?c("Spatial Relation cannot accept this parameter type"):r.isFeatureSet(f[1])?s.resolve(new i({parentfeatureset:f[1]})):f[1]instanceof l||null===f[1]?s.resolve(!1):void 0})}function c(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return u(t,n,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return u(t,n,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return u(t,n,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return u(t,n,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,n){return u(t,n,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,n){return u(t,n,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,n){return u(t,n,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,function(e,t,n){if(n=r.autoCastFeatureToGeometry(n),r.pcCheck(n,3,3),n[0]instanceof l&&n[1]instanceof l)return o.relate(n[0],n[1],r.toString(n[2]));if(n[0]instanceof l&&null===n[1])return!1;if(n[1]instanceof l&&null===n[0])return!1;if(r.isFeatureSet(n[0])&&null===n[1])return new i({parentfeatureset:n[0]});if(r.isFeatureSet(n[1])&&null===n[0])return new i({parentfeatureset:n[1]});if(r.isFeatureSet(n[0])&&n[1]instanceof l)return n[0].relate(n[1],r.toString(n[2]));if(r.isFeatureSet(n[1])&&n[0]instanceof l)return n[1].relate(n[0],r.toString(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")})})}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=c});