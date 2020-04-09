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

define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f32","../../../../../core/libs/gl-matrix-2/vec3f64"],(function(e,t,o,r,i){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e){this._low=r.vec3f32.create(),this._high=r.vec3f32.create(),e&&this.set(e)}return Object.defineProperty(e.prototype,"low",{get:function(){return this._low},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"high",{get:function(){return this._high},enumerable:!0,configurable:!0}),e.prototype.set=function(e){var t=this._low,r=this._high;o.vec3.copy(t,e),o.vec3.sub(r,e,t)},e.prototype.setElements=function(e,t,r){o.vec3.set(n,e,t,r),this.set(n)},e.prototype.get=function(e){return o.vec3.add(e,this._low,this._high)},e.prototype.getLowScaled=function(e){return o.vec3.scale(e,this._low,1)},e}();t.TwoVectorPosition=c;var n=i.vec3f64.create()}));