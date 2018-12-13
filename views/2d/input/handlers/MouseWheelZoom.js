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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,n,o,t){Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){function n(n,o){var t=e.call(this,!0)||this;return t.view=n,t._canZoom=!0,t.registerIncoming("mouse-wheel",o,function(e){return t._handleMouseWheel(e)}),t}return o(n,e),n.prototype._handleMouseWheel=function(e){var n=this;if(this._canZoom){var o=this.view.mapViewNavigation,t=e.data,i=t.x,a=t.y,r=t.deltaY,u=1/Math.pow(.6,1/60*r),c=o.zoom(u,[i,a]);c&&(this._canZoom=!1,c.catch(function(e){}).then(function(){n._canZoom=!0,o.end()})),e.stopPropagation()}},n}(t.InputHandler);n.MouseWheelZoom=i});