// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","./Evented"],function(e,t,r,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._renderRequestedCalled=!1,t._attached=!1,t._opacity=1,t.renderRequested=!1,t._visible=!0,t}return r(t,e),Object.defineProperty(t.prototype,"attached",{get:function(){return this._attached},set:function(e){this._attached!==e&&(this._attached=e,e?this.hasEventListener("attach")&&this.emit("attach"):this.hasEventListener("detach")&&this.emit("detach"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"opacity",{get:function(){return this._opacity},set:function(e){this._opacity!==e&&(this._opacity=e,this.requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._visible},set:function(e){this._visible!==e&&(this._visible=e,this.requestRender())},enumerable:!0,configurable:!0}),t.prototype.attach=function(e){return!0},t.prototype.detach=function(e){},t.prototype.processRender=function(e){this._renderRequestedCalled=!1,this.doRender(e),this._renderRequestedCalled||(this.renderRequested=!1),this.hasEventListener("post-render")&&this.emit("post-render")},t.prototype.requestRender=function(){var e=this.renderRequested;this._renderRequestedCalled=!0,this.renderRequested=!0,this.parent&&this.parent.requestChildRender(this),e!==this.renderRequested&&this.hasEventListener("will-render")&&this.emit("will-render")},t.prototype.dispose=function(){},t}(i.Evented)});