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

define(["require","exports","../../../../overlay/LineOverlayItem","../../../../overlay/TextOverlayItem"],function(t,e,i,o){return function(){function t(t){this._textItem=new o({visible:!1}),this._calloutItem=new i({visible:!1,width:2}),this._visible=!1,this._calloutVisible=!0,t&&(this.fontSize=t)}return Object.defineProperty(t.prototype,"textItem",{get:function(){return this._textItem},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"calloutItem",{get:function(){return this._calloutItem},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"text",{get:function(){return this._textItem.text},set:function(t){this._textItem.text=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fontSize",{get:function(){return this._textItem.fontSize},set:function(t){this._textItem.fontSize=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._visible},set:function(t){this._visible=t,this._updateVisibility()},enumerable:!0,configurable:!0}),t.prototype.addToView=function(t){t.overlay.items.addMany([this._textItem,this._calloutItem])},t.prototype.removeFromView=function(t){t.overlay&&!t.overlay.destroyed&&t.overlay.items.removeMany([this._textItem,this._calloutItem])},t.prototype.updatePosition=function(t,e){if(e){var i=e[0]-t[0],o=e[1]-t[1];this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(i)>Math.abs(o)?i>0?"left":"right":o>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],this._calloutVisible=!0}else this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",this._calloutVisible=!1},t.prototype._updateVisibility=function(){this._textItem.visible=this._visible,this._calloutItem.visible=this._visible&&this._calloutVisible},t}()});