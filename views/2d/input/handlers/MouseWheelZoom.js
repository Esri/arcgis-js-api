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

define(["require","exports","tslib","../../../input/InputHandler"],(function(e,n,t,o){Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){function n(n,t){var o=e.call(this,!0)||this;return o.view=n,o._canZoom=!0,o.registerIncoming("mouse-wheel",t,(function(e){return o._handleMouseWheel(e)})),o}return t.__extends(n,e),n.prototype._handleMouseWheel=function(e){var n=this;if(this.view.navigation.mouseWheelZoomEnabled&&(e.preventDefault(),e.stopPropagation(),this._canZoom)){var t=this.view.mapViewNavigation,o=e.data,i=o.x,a=o.y,r=o.deltaY,u=1/Math.pow(.6,1/60*r),s=t.zoom(u,[i,a]);s&&(this._canZoom=!1,s.catch((function(){})).then((function(){n._canZoom=!0,t.end()})))}},n}(o.InputHandler);n.MouseWheelZoom=i}));