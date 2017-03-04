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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,i,t,n){var o=250,r=function(e){function i(i,t){var n=e.call(this,"esri.views.2d.input.handlers.MouseWheelZoom",!0)||this;return n.view=i,n.registerIncoming("mouse-wheel",t,function(e){return n._handleMouseWheel(e)}),n}return t(i,e),i.prototype._handleMouseWheel=function(e){var i=this;this._timerId&&clearTimeout(this._timerId),this._timerId=setTimeout(function(){i.view.navigation.interacting&&i.view.navigation.end()},o),this.view.navigation.zoom.scroll(this.view,e),e.stopPropagation()},i}(n.InputHandler);i.MouseWheelZoom=r});