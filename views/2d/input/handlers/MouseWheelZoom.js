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

define(["require","exports","tslib","../../../input/InputHandler"],(function(e,o,n,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.MouseWheelZoom=void 0;var i=function(e){function o(o,n){var t=e.call(this,!0)||this;return t.view=o,t._canZoom=!0,t.registerIncoming("mouse-wheel",n,(function(e){return t._handleMouseWheel(e)})),t}return n.__extends(o,e),o.prototype._handleMouseWheel=function(e){var o=this;if(this.view.navigation.mouseWheelZoomEnabled&&(e.preventDefault(),e.stopPropagation(),this._canZoom)){var n=this.view.mapViewNavigation,t=e.data,i=t.x,a=t.y,u=t.deltaY,r=1/Math.pow(.6,1/60*u),s=n.zoom(r,[i,a]);s&&(this._canZoom=!1,s.catch((function(){})).then((function(){o._canZoom=!0,n.end()})))}},o}(t.InputHandler);o.MouseWheelZoom=i}));