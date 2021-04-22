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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix/vec2"],(function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,n,i){this.width=n,this.height=i,this.center=r.fromValues(e,t)}return Object.defineProperty(e.prototype,"x",{get:function(){return this.center[0]},set:function(e){this.center[0]=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.center[1]},set:function(e){this.center[1]=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"halfWidth",{get:function(){return this.width/2},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"halfHeight",{get:function(){return this.height/2},enumerable:!0,configurable:!0}),e.prototype.serialize=function(e){return e.writeF32(this.center[0]),e.writeF32(this.center[1]),e.writeInt32(this.width),e.writeInt32(this.height),e},e.deserialize=function(t){return new e(t.readF32(),t.readF32(),t.readInt32(),t.readInt32())},e}();t.default=n}));