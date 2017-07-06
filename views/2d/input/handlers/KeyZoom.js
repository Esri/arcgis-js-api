// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(o,n,e,t){Object.defineProperty(n,"__esModule",{value:!0});var i;!function(o){o[o.IN=0]="IN",o[o.OUT=1]="OUT"}(i||(i={}));var r=function(o){function n(n,e,t){var r=o.call(this,"esri.views.2d.input.handlers.KeyZoom",!0)||this;return r.view=n,r.keys=e,r._keysToZoomAction={},r.registerIncoming("key-down",t,function(o){return r._handleKeyDown(o)}),e.zoomIn.forEach(function(o){return r._keysToZoomAction[o]=i.IN}),e.zoomOut.forEach(function(o){return r._keysToZoomAction[o]=i.OUT}),r}return e(n,o),n.prototype._handleKeyDown=function(o){this._handleKey(o)},n.prototype._handleKey=function(o){var n=o.modifiers;if(!(n.size>0)||n.has("Shift")){var e=this._keysToZoomAction[o.data.key];e===i.IN?(this.view.navigation.zoomIn(),o.stopPropagation()):e===i.OUT&&(this.view.navigation.zoomOut(),o.stopPropagation())}},n}(t.InputHandler);n.KeyZoom=r});