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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(e,t,n,o){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){function t(t,n){var o=e.call(this,"esri.views.3d.input.handlers.MouseWheelZoom",!0)||this;return o.view=t,o.registerIncoming("mouse-wheel",n,function(e){return o._handleMouseWheel(e)}),o}return n(t,e),t.prototype._handleMouseWheel=function(e){var t=e.data;this.view.navigation.zoom.stepScreen(-1/60*t.deltaY,[t.x,this.view.height-t.y]),e.stopPropagation()},t}(o.InputHandler);t.MouseWheelZoom=r});