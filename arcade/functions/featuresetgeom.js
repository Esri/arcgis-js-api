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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../kernel","../languageUtils","../featureset/actions/SpatialFilter","../featureset/sources/Empty","../../geometry/Geometry","../../geometry/geometryEngineAsync"],(function(e,t,n,r,i,s,a,u,o,c){"use strict";function l(e){return e instanceof o}function f(e,t,f,p){return p(e,t,(function(e,t,p){return n(this,void 0,void 0,(function(){return r(this,(function(e){if(p.length<2)throw new Error("Missing Parameters");if(null===(p=s.autoCastFeatureToGeometry(p))[0]&&null===p[1])return[2,!1];if(s.isFeatureSet(p[0])){if(p[1]instanceof o)return[2,new a({parentfeatureset:p[0],relation:f,relationGeom:p[1]})];if(null===p[1])return[2,new u({parentfeatureset:p[0]})];throw new Error("Spatial Relation cannot accept this parameter type")}if(l(p[0])){if(l(p[1])){switch(f){case"esriSpatialRelEnvelopeIntersects":return[2,c.intersects(i.shapeExtent(p[0]),i.shapeExtent(p[1]))];case"esriSpatialRelIntersects":return[2,c.intersects(p[0],p[1])];case"esriSpatialRelContains":return[2,c.contains(p[0],p[1])];case"esriSpatialRelOverlaps":return[2,c.overlaps(p[0],p[1])];case"esriSpatialRelWithin":return[2,c.within(p[0],p[1])];case"esriSpatialRelTouches":return[2,c.touches(p[0],p[1])];case"esriSpatialRelCrosses":return[2,c.crosses(p[0],p[1])]}throw new Error("Unrecognised Relationship")}if(s.isFeatureSet(p[1]))return[2,new a({parentfeatureset:p[1],relation:f,relationGeom:p[0]})];if(null===p[1])return[2,!1];throw new Error("Spatial Relation cannot accept this parameter type")}if(null!==p[0])throw new Error("Spatial Relation cannot accept this parameter type");return s.isFeatureSet(p[1])?[2,new u({parentfeatureset:p[1]})]:p[1]instanceof o||null===p[1]?[2,!1]:[2]}))}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=void 0,t.registerFunctions=function(e){"async"===e.mode&&(e.functions.intersects=function(t,n){return f(t,n,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,n){return f(t,n,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,n){return f(t,n,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(t,n){return f(t,n,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(t,n){return f(t,n,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(t,n){return f(t,n,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(t,n){return f(t,n,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(n=s.autoCastFeatureToGeometry(n),s.pcCheck(n,3,3),l(n[0])&&l(n[1]))return c.relate(n[0],n[1],s.toString(n[2]));if(n[0]instanceof o&&null===n[1])return!1;if(n[1]instanceof o&&null===n[0])return!1;if(s.isFeatureSet(n[0])&&null===n[1])return new u({parentfeatureset:n[0]});if(s.isFeatureSet(n[1])&&null===n[0])return new u({parentfeatureset:n[1]});if(s.isFeatureSet(n[0])&&n[1]instanceof o)return n[0].relate(n[1],s.toString(n[2]));if(s.isFeatureSet(n[1])&&n[0]instanceof o)return n[1].relate(n[0],s.toString(n[2]));if(null===n[0]&&null===n[1])return!1;throw new Error("Illegal Argument")}))})}}));