// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators"],(function(r,t,e,o,n,a,i,s){Object.defineProperty(t,"__esModule",{value:!0});var p=i.getLogger("esri.geometry.support.MeshVertexAttributes"),l=function(r){function t(t){var e=r.call(this)||this;return e.position=null,e.uv=null,e.normal=null,e}return e(t,r),n=t,t.prototype.castPosition=function(r){r&&r instanceof Float32Array&&p.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return c(r,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},p)},t.prototype.castUv=function(r){return c(r,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},p)},t.prototype.castNormal=function(r){return c(r,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},p)},t.prototype.clone=function(){return new n({position:a.clone(this.position),uv:a.clone(this.uv),normal:a.clone(this.normal)})},o([s.property({json:{write:!0}})],t.prototype,"position",void 0),o([s.cast("position")],t.prototype,"castPosition",null),o([s.property({json:{write:!0}})],t.prototype,"uv",void 0),o([s.cast("uv")],t.prototype,"castUv",null),o([s.property({json:{write:!0}})],t.prototype,"normal",void 0),o([s.cast("normal")],t.prototype,"castNormal",null),t=n=o([s.subclass("esri.geometry.support.MeshVertexAttributes")],t);var n}(s.declared(n));function u(r,t,e,o){var n=t.loggerTag,a=t.stride;return r.length%a!=0?(o.error(n,"Invalid array length, expected a multiple of "+a),new e([])):r}function c(r,t,e,o,n){if(!r)return r;if(r instanceof t)return u(r,o,t,n);for(var a=0,i=e;a<i.length;a++){if(r instanceof i[a])return u(new t(r),o,t,n)}if(Array.isArray(r))return u(new t(r),o,t,n);var s=e.map((function(r){return"'"+r.name+"'"}));return n.error("Failed to set property, expected one of "+s+", but got "+r.constructor.name),new t([])}t.MeshVertexAttributes=l,t.castArray=c,t.default=l}));