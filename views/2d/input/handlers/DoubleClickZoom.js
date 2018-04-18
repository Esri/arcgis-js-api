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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(t,e,n,i,o){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,n){var i=t.call(this,!0)||this;return i.view=e,i.registerIncoming("double-click",n,function(t){return i._handleDoubleClick(t,n)}),i}return n(e,t),e.prototype._handleDoubleClick=function(t,e){o.eventMatchesPointerAction(t.data,"primary")&&(t.stopPropagation(),e?this.view.navigation.zoomOut([t.data.x,t.data.y]):this.view.navigation.zoomIn([t.data.x,t.data.y]))},e}(i.InputHandler);e.DoubleClickZoom=a});