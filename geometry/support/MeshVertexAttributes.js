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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators"],(function(t,r,o,e,n,a,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.castArray=r.MeshVertexAttributes=void 0;var l=a.getLogger("esri.geometry.support.MeshVertexAttributes"),s=function(t){function r(r){var o=t.call(this,r)||this;return o.color=null,o.position=new Float64Array(0),o.uv=null,o.normal=null,o.tangent=null,o}var e;return o.__extends(r,t),e=r,r.prototype.castColor=function(t){return p(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},l)},r.prototype.castPosition=function(t){t&&t instanceof Float32Array&&l.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return p(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},l)},r.prototype.castUv=function(t){return p(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},l)},r.prototype.castNormal=function(t){return p(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},l)},r.prototype.castTangent=function(t){return p(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},l)},r.prototype.clone=function(){var t={position:n.clone(this.position),uv:n.clone(this.uv),normal:n.clone(this.normal),tangent:n.clone(this.tangent),color:n.clone(this.color)};return new e(t)},o.__decorate([i.property({json:{write:u}})],r.prototype,"color",void 0),o.__decorate([i.cast("color")],r.prototype,"castColor",null),o.__decorate([i.property({nonNullable:!0,json:{write:u}})],r.prototype,"position",void 0),o.__decorate([i.cast("position")],r.prototype,"castPosition",null),o.__decorate([i.property({json:{write:u}})],r.prototype,"uv",void 0),o.__decorate([i.cast("uv")],r.prototype,"castUv",null),o.__decorate([i.property({json:{write:u}})],r.prototype,"normal",void 0),o.__decorate([i.cast("normal")],r.prototype,"castNormal",null),o.__decorate([i.property({json:{write:u}})],r.prototype,"tangent",void 0),o.__decorate([i.cast("tangent")],r.prototype,"castTangent",null),r=e=o.__decorate([i.subclass("esri.geometry.support.MeshVertexAttributes")],r)}(e.JSONSupport);function c(t,r,o,e){var n=r.loggerTag,a=r.stride;return t.length%a!=0?(e.error(n,"Invalid array length, expected a multiple of "+a),new o([])):t}function p(t,r,o,e,n){if(!t)return t;if(t instanceof r)return c(t,e,r,n);for(var a=0,i=o;a<i.length;a++){if(t instanceof i[a])return c(new r(t),e,r,n)}if(Array.isArray(t))return c(new r(t),e,r,n);var l=o.map((function(t){return"'"+t.name+"'"}));return n.error("Failed to set property, expected one of "+l+", but got "+t.constructor.name),new r([])}function u(t,r,o){r[o]=function(t){for(var r=new Array(t.length),o=0;o<t.length;o++)r[o]=t[o];return r}(t)}r.MeshVertexAttributes=s,r.castArray=p,r.default=s}));