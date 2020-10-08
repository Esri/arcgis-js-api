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

define(["require","exports","tslib","../../../core/Evented","../../../core/has"],(function(t,e,i,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DisplayObject=void 0;var o=1/n("mapview-transitions-duration"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._clips=null,e.computedVisible=!0,e.computedOpacity=1,e.fadeTransitionEnabled=!1,e.inFadeTransition=!1,e._isReady=!1,e._opacity=1,e._stage=null,e._visible=!0,e}return i.__extends(e,t),Object.defineProperty(e.prototype,"clips",{get:function(){return this._clips},set:function(t){this._clips=t,this.requestRender()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isReady",{get:function(){return this._isReady},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"opacity",{get:function(){return this._opacity},set:function(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stage",{get:function(){return this._stage},set:function(t){if(this._stage!==t){var e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return this._visible},set:function(t){this._visible!==t&&(this._visible=t,this.requestRender())},enumerable:!1,configurable:!0}),e.prototype.setTransform=function(t){},e.prototype.processRender=function(t){this.stage&&(this.updateTransitionProperties(t.deltaTime),this.computedVisible&&this.doRender(t))},e.prototype.requestRender=function(){this.stage&&this.stage.requestRender()},e.prototype.processDetach=function(){this.onDetach(),this.emit("detach")},e.prototype.updateTransitionProperties=function(t){if(this.fadeTransitionEnabled){var e=this.visible?this.opacity:0,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{var s=t*o;this.computedOpacity=i>e?Math.max(e,i-s):Math.min(e,i+s),this.computedVisible=this.computedOpacity>0;var n=e===this.computedOpacity;this.inFadeTransition=!n,n||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible},e.prototype.onAttach=function(){},e.prototype.onDetach=function(){},e.prototype.doRender=function(t){},e.prototype.ready=function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())},e}(s);e.DisplayObject=r}));