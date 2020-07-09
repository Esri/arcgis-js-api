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

define(["require","exports","../../../../core/ObjectPool","../../../webgl/FramebufferObject"],(function(e,t,o,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.renderingContext=e,this._pools=new Map}return e.prototype.acquire=function(e){return this.getPool(e).acquire()},e.prototype.release=function(e){this.getPool(e.width).release(e)},e.prototype.clear=function(){this._pools.forEach((function(e){e.destroy()})),this._pools.clear()},e.prototype.getPool=function(e){var t=this._pools.get(e);if(!t){var n=r.bind(r,this.renderingContext,{colorTarget:0,depthStencilTarget:1,width:e,height:e});t=new o(n),this._pools.set(e,t)}return t},e}();t.FBOPool=n}));