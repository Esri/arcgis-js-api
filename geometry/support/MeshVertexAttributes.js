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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators"],(function(r,t,o,e,n,a,i){Object.defineProperty(t,"__esModule",{value:!0});var l=a.getLogger("esri.geometry.support.MeshVertexAttributes"),s=function(r){function t(t){var o=r.call(this,t)||this;return o.color=null,o.position=new Float64Array(0),o.uv=null,o.normal=null,o.tangent=null,o}var e;return o.__extends(t,r),e=t,t.prototype.castColor=function(r){return p(r,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l)},t.prototype.castPosition=function(r){r&&r instanceof Float32Array&&l.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return p(r,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l)},t.prototype.castUv=function(r){return p(r,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l)},t.prototype.castNormal=function(r){return p(r,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l)},t.prototype.castTangent=function(r){return p(r,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l)},t.prototype.clone=function(){var r={position:n.clone(this.position),uv:n.clone(this.uv),normal:n.clone(this.normal),tangent:n.clone(this.tangent),color:n.clone(this.color)};return new e(r)},o.__decorate([i.property({json:{write:u}})],t.prototype,"color",void 0),o.__decorate([i.cast("color")],t.prototype,"castColor",null),o.__decorate([i.property({nonNullable:!0,json:{write:u}})],t.prototype,"position",void 0),o.__decorate([i.cast("position")],t.prototype,"castPosition",null),o.__decorate([i.property({json:{write:u}})],t.prototype,"uv",void 0),o.__decorate([i.cast("uv")],t.prototype,"castUv",null),o.__decorate([i.property({json:{write:u}})],t.prototype,"normal",void 0),o.__decorate([i.cast("normal")],t.prototype,"castNormal",null),o.__decorate([i.property({json:{write:u}})],t.prototype,"tangent",void 0),o.__decorate([i.cast("tangent")],t.prototype,"castTangent",null),t=e=o.__decorate([i.subclass("esri.geometry.support.MeshVertexAttributes")],t)}(e.JSONSupport);function c(r,t,o,e){var n=t.loggerTag,a=t.stride;return r.length%a!=0?(e.error(n,"Invalid array length, expected a multiple of "+a),new o([])):r}function p(r,t,o,e,n){if(!r)return r;if(r instanceof t)return c(r,e,t,n);for(var a=0,i=o;a<i.length;a++){if(r instanceof i[a])return c(new t(r),e,t,n)}if(Array.isArray(r))return c(new t(r),e,t,n);var l=o.map((function(r){return"'"+r.name+"'"}));return n.error("Failed to set property, expected one of "+l+", but got "+r.constructor.name),new t([])}function u(r,t,o){t[o]=function(r){for(var t=new Array(r.length),o=0;o<r.length;o++)t[o]=r[o];return t}(r)}t.MeshVertexAttributes=s,t.castArray=p,t.default=s}));