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

define(["require","exports","tslib","../../../core/Evented"],(function(e,t,i,s){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._clips=null,t._isReady=!1,t._opacity=1,t._stage=null,t._visible=!0,t}return i.__extends(t,e),Object.defineProperty(t.prototype,"clips",{get:function(){return this._clips},set:function(e){this._clips=e,this.requestRender()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isReady",{get:function(){return this._isReady},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"opacity",{get:function(){return this._opacity},set:function(e){this._opacity!==e&&(this._opacity=e,this.requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stage",{get:function(){return this._stage},set:function(e){if(this._stage!==e){var t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._visible},set:function(e){this._visible!==e&&(this._visible=e,this.requestRender())},enumerable:!0,configurable:!0}),t.prototype.setTransform=function(e){},t.prototype.processRender=function(e){this.visible&&this.stage&&this.doRender(e)},t.prototype.requestRender=function(){this.stage&&this.stage.requestRender()},t.prototype.processDetach=function(){this.onDetach(),this.emit("detach")},t.prototype.onAttach=function(){},t.prototype.onDetach=function(){},t.prototype.doRender=function(e){},t.prototype.ready=function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())},t}(s);t.DisplayObject=n}));