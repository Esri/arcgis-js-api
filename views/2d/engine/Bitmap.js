// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject"],function(e,t,n,r){function o(e){return null!=e.context}function a(e){return null!=e.drawImage}var i=function(e){function t(t){var n=this;if(e.call(this),this.source=t,t instanceof HTMLImageElement)this.ready||(t.onload=function(){n.requestRender(),t.onload=t.onabort=t.onerror=null},t.onerror=t.onabort=function(){t.onload=t.onabort=t.onerror=null});else if(0===t.width||0===t.height)throw new Error("source cannot have size 0")}return n(t,e),Object.defineProperty(t.prototype,"height",{get:function(){var e=this.source;return e instanceof HTMLImageElement?e.naturalHeight:e instanceof HTMLCanvasElement?e.height:e.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ready",{get:function(){return this.width>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){var e=this.source;return e instanceof HTMLImageElement?e.naturalWidth:e instanceof HTMLCanvasElement?e.width:e.width},enumerable:!0,configurable:!0}),t.prototype.createElement=function(){var e=this.source;return a(e)?document.createElement("canvas"):e},t.prototype.setElement=function(e){this.element=e},t.prototype.attach=function(e){return!0},t.prototype.detach=function(){},t.prototype.render=function(e){this.ready&&o(e)&&this.renderCanvas2D(e)},t.prototype.renderCanvas2D=function(e){var t=e.context,n=this.source;a(n)?n.drawImage(t,0,0):t.drawImage(n,0,0)},t}(r);return i});