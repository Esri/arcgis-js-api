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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/Logger","../../core/accessorSupport/decorators"],function(r,t,o,e,n,a,i,l){function s(r,t,o,e){var n=t.loggerTag,a=t.stride;return r.length%a!=0?(e.error(n,"Invalid array length, expected a multiple of "+a),new o([])):r}function p(r,t,o,e,n){if(!r)return r;if(r instanceof t)return s(r,e,t,n);for(var a=0,i=o;a<i.length;a++){if(r instanceof i[a])return s(new t(r),e,t,n)}if(Array.isArray(r))return s(new t(r),e,t,n);var l=o.map(function(r){return"'"+r.name+"'"});return n.error("Failed to set property, expected one of "+l+", but got "+r.constructor.name),new t([])}function u(r,t,o){t[o]=c(r)}function c(r){for(var t=new Array(r.length),o=0;o<r.length;o++)t[o]=r[o];return t}Object.defineProperty(t,"__esModule",{value:!0});var y=i.getLogger("esri.geometry.support.MeshVertexAttributes"),g=function(r){function t(t){var o=r.call(this)||this;return o.color=null,o.position=new Float64Array(0),o.uv=null,o.normal=null,o}o(t,r),n=t,t.prototype.castColor=function(r){var t={loggerTag:".color=",stride:4};return p(r,Uint8Array,[Uint8ClampedArray],t,y)},t.prototype.castPosition=function(r){r&&r instanceof Float32Array&&y.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");var t={loggerTag:".position=",stride:3};return p(r,Float64Array,[Float32Array],t,y)},t.prototype.castUv=function(r){var t={loggerTag:".uv=",stride:2};return p(r,Float32Array,[Float64Array],t,y)},t.prototype.castNormal=function(r){var t={loggerTag:".normal=",stride:3};return p(r,Float32Array,[Float64Array],t,y)},t.prototype.clone=function(){return new n({position:a.clone(this.position),uv:a.clone(this.uv),normal:a.clone(this.normal)})};var n;return e([l.property({json:{write:u}})],t.prototype,"color",void 0),e([l.cast("color")],t.prototype,"castColor",null),e([l.property({nonNullable:!0,json:{write:u}})],t.prototype,"position",void 0),e([l.cast("position")],t.prototype,"castPosition",null),e([l.property({json:{write:u}})],t.prototype,"uv",void 0),e([l.cast("uv")],t.prototype,"castUv",null),e([l.property({json:{write:u}})],t.prototype,"normal",void 0),e([l.cast("normal")],t.prototype,"castNormal",null),t=n=e([l.subclass("esri.geometry.support.MeshVertexAttributes")],t)}(l.declared(n));t.MeshVertexAttributes=g,t.castArray=p,t.default=g});