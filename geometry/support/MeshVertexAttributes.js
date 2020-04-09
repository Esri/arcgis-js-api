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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators"],(function(r,t,o,e,n,a,i,l){Object.defineProperty(t,"__esModule",{value:!0});var p=i.getLogger("esri.geometry.support.MeshVertexAttributes"),s=function(r){function t(t){var o=r.call(this,t)||this;return o.color=null,o.position=new Float64Array(0),o.uv=null,o.normal=null,o.tangent=null,o}var n;return o(t,r),n=t,t.prototype.castColor=function(r){return c(r,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},p)},t.prototype.castPosition=function(r){r&&r instanceof Float32Array&&p.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return c(r,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},p)},t.prototype.castUv=function(r){return c(r,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},p)},t.prototype.castNormal=function(r){return c(r,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},p)},t.prototype.castTangent=function(r){return c(r,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},p)},t.prototype.clone=function(){var r={position:a.clone(this.position),uv:a.clone(this.uv),normal:a.clone(this.normal),tangent:a.clone(this.tangent),color:a.clone(this.color)};return new n(r)},e([l.property({json:{write:y}})],t.prototype,"color",void 0),e([l.cast("color")],t.prototype,"castColor",null),e([l.property({nonNullable:!0,json:{write:y}})],t.prototype,"position",void 0),e([l.cast("position")],t.prototype,"castPosition",null),e([l.property({json:{write:y}})],t.prototype,"uv",void 0),e([l.cast("uv")],t.prototype,"castUv",null),e([l.property({json:{write:y}})],t.prototype,"normal",void 0),e([l.cast("normal")],t.prototype,"castNormal",null),e([l.property({json:{write:y}})],t.prototype,"tangent",void 0),e([l.cast("tangent")],t.prototype,"castTangent",null),t=n=e([l.subclass("esri.geometry.support.MeshVertexAttributes")],t)}(l.declared(n.JSONSupport));function u(r,t,o,e){var n=t.loggerTag,a=t.stride;return r.length%a!=0?(e.error(n,"Invalid array length, expected a multiple of "+a),new o([])):r}function c(r,t,o,e,n){if(!r)return r;if(r instanceof t)return u(r,e,t,n);for(var a=0,i=o;a<i.length;a++){if(r instanceof i[a])return u(new t(r),e,t,n)}if(Array.isArray(r))return u(new t(r),e,t,n);var l=o.map((function(r){return"'"+r.name+"'"}));return n.error("Failed to set property, expected one of "+l+", but got "+r.constructor.name),new t([])}function y(r,t,o){t[o]=function(r){for(var t=new Array(r.length),o=0;o<r.length;o++)t[o]=r[o];return t}(r)}t.MeshVertexAttributes=s,t.castArray=c,t.default=s}));