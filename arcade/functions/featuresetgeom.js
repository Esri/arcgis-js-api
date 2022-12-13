// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../executionError","../kernel","../languageUtils","../featureset/actions/SpatialFilter","../featureset/sources/Empty","../../geometry/Geometry","../../geometry/geometryEngineAsync"],(function(e,t,r,n,i,s,a,o,u,c,l){"use strict";function f(e){return e instanceof c}function p(e,t,p,d){var E=this;return d(e,t,(function(d,S,h){return r(E,void 0,void 0,(function(){return n(this,(function(r){if(h.length<2)throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.WrongNumberOfParameters,t);if(null===(h=a.autoCastFeatureToGeometry(h))[0]&&null===h[1])return[2,!1];if(a.isFeatureSet(h[0])){if(h[1]instanceof c)return[2,new o({parentfeatureset:h[0],relation:p,relationGeom:h[1]})];if(null===h[1])return[2,new u({parentfeatureset:h[0]})];throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidParameter,t)}if(f(h[0])){if(f(h[1])){switch(p){case"esriSpatialRelEnvelopeIntersects":return[2,l.intersects(s.shapeExtent(h[0]),s.shapeExtent(h[1]))];case"esriSpatialRelIntersects":return[2,l.intersects(h[0],h[1])];case"esriSpatialRelContains":return[2,l.contains(h[0],h[1])];case"esriSpatialRelOverlaps":return[2,l.overlaps(h[0],h[1])];case"esriSpatialRelWithin":return[2,l.within(h[0],h[1])];case"esriSpatialRelTouches":return[2,l.touches(h[0],h[1])];case"esriSpatialRelCrosses":return[2,l.crosses(h[0],h[1])]}throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidParameter,t)}if(a.isFeatureSet(h[1]))return[2,new o({parentfeatureset:h[1],relation:p,relationGeom:h[0]})];if(null===h[1])return[2,!1];throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidParameter,t)}if(null!==h[0])throw new i.ArcadeExecutionError(e,i.ExecutionErrorCodes.InvalidParameter,t);return a.isFeatureSet(h[1])?[2,new u({parentfeatureset:h[1]})]:h[1]instanceof c||null===h[1]?[2,!1]:[2]}))}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=void 0,t.registerFunctions=function(e){"async"===e.mode&&(e.functions.intersects=function(t,r){return p(t,r,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,r){return p(t,r,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(t,r){return p(t,r,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(t,r){return p(t,r,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(t,r){return p(t,r,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(t,r){return p(t,r,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(t,r){return p(t,r,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(t,r){return e.standardFunctionAsync(t,r,(function(e,n,s){if(s=a.autoCastFeatureToGeometry(s),a.pcCheck(s,3,3,t,r),f(s[0])&&f(s[1]))return l.relate(s[0],s[1],a.toString(s[2]));if(s[0]instanceof c&&null===s[1])return!1;if(s[1]instanceof c&&null===s[0])return!1;if(a.isFeatureSet(s[0])&&null===s[1])return new u({parentfeatureset:s[0]});if(a.isFeatureSet(s[1])&&null===s[0])return new u({parentfeatureset:s[1]});if(a.isFeatureSet(s[0])&&s[1]instanceof c)return s[0].relate(s[1],a.toString(s[2]));if(a.isFeatureSet(s[1])&&s[0]instanceof c)return s[1].relate(s[0],a.toString(s[2]));if(null===s[0]&&null===s[1])return!1;throw new i.ArcadeExecutionError(t,i.ExecutionErrorCodes.InvalidParameter,r)}))})}}));