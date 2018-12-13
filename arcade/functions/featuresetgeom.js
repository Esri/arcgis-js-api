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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../kernel","../languageUtils","../featureset/actions/SpatialFilter","../featureset/sources/Empty","../../geometry/Geometry","../../geometry/geometryEngineAsync"],function(e,n,t,r,a,i,s,o,l){function u(e,n,u,c,f){return f(e,n,function(e,n,f){if(f.length<2)return c(new Error("Missing Parameters"));if(f=a.autoCastFeatureToGeometry(f),null===f[0]&&null===f[1]){var p=new t;return p.resolve(!1),p.promise}if(a.isFeatureSet(f[0])){if(f[1]instanceof o){var d=new t;return d.resolve(new i({parentfeatureset:f[0],relation:u,relationGeom:f[1]})),d.promise}if(null===f[1]){var d=new t;return d.resolve(new s({parentfeatureset:f[0]})),d.promise}return c("Spatial Relation cannot accept this parameter type")}if(f[0]instanceof o){if(f[1]instanceof o){var S=new t,m=null;switch(u){case"esriSpatialRelEnvelopeIntersects":m=l.intersects(r.shapeExtent(f[0]),r.shapeExtent(f[1]));break;case"esriSpatialRelIntersects":m=l.intersects(f[0],f[1]);break;case"esriSpatialRelContains":m=l.contains(f[0],f[1]);break;case"esriSpatialRelOverlaps":m=l.overlaps(f[0],f[1]);break;case"esriSpatialRelWithin":m=l.within(f[0],f[1]);break;case"esriSpatialRelTouches":m=l.touches(f[0],f[1]);break;case"esriSpatialRelCrosses":m=l.crosses(f[0],f[1])}return null!==m?m.then(r.callback(function(e){S.resolve(e)},S),r.errback(S)):S.reject(new Error("Unrecognised Relationship")),S.promise}if(a.isFeatureSet(f[1])){var d=new t;return d.resolve(new i({parentfeatureset:f[1],relation:u,relationGeom:f[0]})),d.promise}if(null===f[1]){var d=new t;return d.resolve(!1),d.promise}return c("Spatial Relation cannot accept this parameter type")}if(null!==f[0])return c("Spatial Relation cannot accept this parameter type");if(a.isFeatureSet(f[1])){var d=new t;return d.resolve(new s({parentfeatureset:f[1]})),d.promise}if(f[1]instanceof o||null===f[1]){var d=new t;return d.resolve(!1),d.promise}})}function c(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return u(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return u(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return u(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return u(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return u(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return u(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return u(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,function(e,n,t){if(t=a.autoCastFeatureToGeometry(t),a.pcCheck(t,3,3),t[0]instanceof o&&t[1]instanceof o)return l.relate(t[0],t[1],a.toString(t[2]));if(t[0]instanceof o&&null===t[1])return!1;if(t[1]instanceof o&&null===t[0])return!1;if(a.isFeatureSet(t[0])&&null===t[1])return new s({parentfeatureset:t[0]});if(a.isFeatureSet(t[1])&&null===t[0])return new s({parentfeatureset:t[1]});if(a.isFeatureSet(t[0])&&t[1]instanceof o)return t[0].relate(t[1],a.toString(t[2]));if(a.isFeatureSet(t[1])&&t[0]instanceof o)return t[1].relate(t[0],a.toString(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")})})}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=c});