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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../kernel","../languageUtils","../featureset/actions/SpatialFilter","../featureset/sources/Empty","../../core/promiseUtils","../../geometry/Geometry","../../geometry/geometryEngineAsync"],(function(e,t,n,r,a,i,s,l,o){function u(e){return e instanceof l}function c(e,t,c,f,p){return p(e,t,(function(e,t,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=r.autoCastFeatureToGeometry(p))[0]&&null===p[1])return s.resolve(!1);if(r.isFeatureSet(p[0]))return p[1]instanceof l?s.resolve(new a({parentfeatureset:p[0],relation:c,relationGeom:p[1]})):null===p[1]?s.resolve(new i({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(u(p[0])){if(u(p[1])){var d=null;switch(c){case"esriSpatialRelEnvelopeIntersects":d=o.intersects(n.shapeExtent(p[0]),n.shapeExtent(p[1]));break;case"esriSpatialRelIntersects":d=o.intersects(p[0],p[1]);break;case"esriSpatialRelContains":d=o.contains(p[0],p[1]);break;case"esriSpatialRelOverlaps":d=o.overlaps(p[0],p[1]);break;case"esriSpatialRelWithin":d=o.within(p[0],p[1]);break;case"esriSpatialRelTouches":d=o.touches(p[0],p[1]);break;case"esriSpatialRelCrosses":d=o.crosses(p[0],p[1])}return null!==d?d:s.reject(new Error("Unrecognised Relationship"))}return r.isFeatureSet(p[1])?s.resolve(new a({parentfeatureset:p[1],relation:c,relationGeom:p[0]})):null===p[1]?s.resolve(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):r.isFeatureSet(p[1])?s.resolve(new i({parentfeatureset:p[1]})):p[1]instanceof l||null===p[1]?s.resolve(!1):void 0}))}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=function(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return c(t,n,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return c(t,n,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return c(t,n,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return c(t,n,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,n){return c(t,n,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,n){return c(t,n,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,n){return c(t,n,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=r.autoCastFeatureToGeometry(n),r.pcCheck(n,3,3),u(n[0])&&u(n[1]))return o.relate(n[0],n[1],r.toString(n[2]));if(n[0]instanceof l&&null===n[1])return!1;if(n[1]instanceof l&&null===n[0])return!1;if(r.isFeatureSet(n[0])&&null===n[1])return new i({parentfeatureset:n[0]});if(r.isFeatureSet(n[1])&&null===n[0])return new i({parentfeatureset:n[1]});if(r.isFeatureSet(n[0])&&n[1]instanceof l)return n[0].relate(n[1],r.toString(n[2]));if(r.isFeatureSet(n[1])&&n[0]instanceof l)return n[1].relate(n[0],r.toString(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))})}}));