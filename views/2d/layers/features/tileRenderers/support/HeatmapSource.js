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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/extendsHelper","../../../../../../core/tsSupport/decorateHelper","../../../../../../core/ObjectFactory","../../../../../../core/ObjectPool","../../../../../../renderers/support/heatmapUtils","../../../../engine/BitmapSource"],function(t,e,i,n,r,a,s,o){Object.defineProperty(e,"__esModule",{value:!0});var u=new r.default(function(){var t=document.createElement("canvas");return t.width=t.height=512,t},function(t){t.width=t.height=512}),l=function(t){function e(){var e=t.call(this,u.acquire())||this;return e._invalidated=!0,e._gradient=null,e}return i(e,t),Object.defineProperty(e.prototype,"gradient",{get:function(){return this._gradient},set:function(t){this._gradient=t,this.invalidate()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"intensities",{get:function(){return this._intensities},set:function(t){this._intensities=t,this.invalidate()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minPixelIntensity",{get:function(){return this._minPixelIntensity},set:function(t){this._minPixelIntensity=t,this.invalidate()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxPixelIntensity",{get:function(){return this._maxPixelIntensity},set:function(t){this._maxPixelIntensity=t,this.invalidate()},enumerable:!0,configurable:!0}),e.prototype.acquire=function(){this.data=u.acquire()},e.prototype.release=function(){u.release(this.data),this.data=null,this.intensities=null,this.gradient=null},e.prototype.draw=function(e,i,n,r,a,o,u,l,d){if(this._invalidated){if(this._invalidated=!1,!this._gradient||!this._intensities)return;s.drawHeatmap(this.data,512,this._intensities,this._gradient,this._minPixelIntensity,this._maxPixelIntensity)}t.prototype.draw.call(this,e,i,n,r,a,o,u,l,d)},e.prototype.invalidate=function(){this._invalidated=!0,this.emit("update",this)},e.pool=new a(e,!0),e}(o.default);e.default=l});