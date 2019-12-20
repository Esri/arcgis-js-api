// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/mathUtils","../../../../../core/libs/gl-matrix-2/vec2f32"],function(t,e,o,h){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(t,e,i,r){this.center=h.vec2f32.fromValues(t,e),this.centerT=h.vec2f32.create(),this.halfWidth=i/2,this.halfHeight=r/2,this.width=i,this.height=r}return Object.defineProperty(e.prototype,"x",{get:function(){return this.center[0]},set:function(t){this.center[0]=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.center[1]},set:function(t){this.center[1]=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"blX",{get:function(){return this.center[0]-this.halfWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"blY",{get:function(){return this.center[1]-this.halfHeight},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trX",{get:function(){return this.center[0]+this.halfWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trY",{get:function(){return this.center[1]+this.halfHeight},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new e(this.x,this.y,this.width,this.height)},e.prototype.serialize=function(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t},e.prototype.findCollisionDelta=function(t){var e=Math.abs(t.centerT[0]-this.centerT[0]),i=Math.abs(t.centerT[1]-this.centerT[1]),r=(t.halfWidth+this.halfWidth)/e,h=(t.halfHeight+this.halfHeight)/i,n=Math.min(r,h);return o.log2(n)},e.prototype.extend=function(t){var e=Math.min(this.blX,t.blX),i=Math.min(this.blY,t.blY),r=Math.max(this.trX,t.trX),h=Math.max(this.trY,t.trY);this.width=r-e,this.height=h-i,this.halfWidth=this.width/2,this.halfHeight=this.height/2,this.x=e+this.halfWidth,this.y=i+this.halfHeight},e.deserialize=function(t){return new e(t.readF32(),t.readF32(),t.readInt32(),t.readInt32())},e}();e.default=i});