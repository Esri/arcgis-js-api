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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(e,t,n,i,o){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,n){var i=e.call(this,!0)||this;return i.view=t,i.registerIncoming("double-click",n,function(e){return i._handleDoubleClick(e,n)}),i}return n(t,e),t.prototype._handleDoubleClick=function(e,t){o.eventMatchesPointerAction(e.data,"primary")&&(e.stopPropagation(),t?this.view.mapViewNavigation.zoomOut([e.data.x,e.data.y]):this.view.mapViewNavigation.zoomIn([e.data.x,e.data.y]))},t}(i.InputHandler);t.DoubleClickZoom=a});