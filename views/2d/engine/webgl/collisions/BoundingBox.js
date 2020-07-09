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

define(["require","exports","../../../../../core/mathUtils","../../../../../core/libs/gl-matrix-2/vec2f32"],(function(t,e,i,r){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,i,n){this.center=r.vec2f32.fromValues(t,e),this.centerT=r.vec2f32.create(),this.halfWidth=i/2,this.halfHeight=n/2,this.width=i,this.height=n}return Object.defineProperty(t.prototype,"x",{get:function(){return this.center[0]},set:function(t){this.center[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.center[1]},set:function(t){this.center[1]=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"blX",{get:function(){return this.center[0]+this.halfWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"blY",{get:function(){return this.center[1]+this.halfHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"trX",{get:function(){return this.center[0]-this.halfWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"trY",{get:function(){return this.center[1]-this.halfHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"xmin",{get:function(){return this.x-this.halfWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"xmax",{get:function(){return this.x+this.halfWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ymin",{get:function(){return this.y-this.halfHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ymax",{get:function(){return this.y+this.halfHeight},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.serialize=function(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t},t.prototype.findCollisionDelta=function(t,e){void 0===e&&(e=4);var r=Math.abs(t.centerT[0]-this.centerT[0]),n=Math.abs(t.centerT[1]-this.centerT[1]),h=(t.halfWidth+this.halfWidth+e)/r,o=(t.halfHeight+this.halfHeight+e)/n,a=Math.min(h,o);return i.log2(a)},t.prototype.extend=function(t){var e=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),r=Math.max(this.xmax,t.xmax)-e,n=Math.max(this.ymax,t.ymax)-i,h=e+r/2,o=i+n/2;this.width=r,this.height=n,this.halfWidth=r/2,this.halfHeight=n/2,this.x=h,this.y=o},t.deserialize=function(e){return new t(e.readF32(),e.readF32(),e.readInt32(),e.readInt32())},t}();e.default=n}));