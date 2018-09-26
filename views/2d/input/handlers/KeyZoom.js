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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(o,e,n,t){Object.defineProperty(e,"__esModule",{value:!0});var i;!function(o){o[o.IN=0]="IN",o[o.OUT=1]="OUT"}(i||(i={}));var r=function(o){function e(e,n,t){var r=o.call(this,!0)||this;return r.view=e,r.keys=n,r._keysToZoomAction={},r.registerIncoming("key-down",t,function(o){return r._handleKeyDown(o)}),n.zoomIn.forEach(function(o){return r._keysToZoomAction[o]=i.IN}),n.zoomOut.forEach(function(o){return r._keysToZoomAction[o]=i.OUT}),r}return n(e,o),e.prototype._handleKeyDown=function(o){this._handleKey(o)},e.prototype._handleKey=function(o){var e=o.modifiers;if(!(e.size>0)||e.has("Shift")){var n=this._keysToZoomAction[o.data.key];n===i.IN?(this.view.mapViewNavigation.zoomIn(),o.stopPropagation()):n===i.OUT&&(this.view.mapViewNavigation.zoomOut(),o.stopPropagation())}},e}(t.InputHandler);e.KeyZoom=r});