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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/DragEventSeparator","../../../input/InputHandler"],function(n,t,e,o,i){Object.defineProperty(t,"__esModule",{value:!0});var a=function(n){function t(t){var e=n.call(this,!0)||this;e.view=t,e.registerIncoming("drag",function(n){return e._handleDrag(n)}),e.registerIncoming("pointer-down",function(n){return e.stopMomentumNavigation()});var i=e.view.navigation;return e.dragEventSeparator=new o.DragEventSeparator({start:function(n,t){i.pinch.begin(e.view,t.data),t.stopPropagation()},update:function(n,t){i.pinch.update(e.view,t.data),t.stopPropagation()},end:function(n,t){i.pinch.end(e.view,t.data),t.stopPropagation()},condition:function(n){return n>=2}}),e}return e(t,n),t.prototype._handleDrag=function(n){this.dragEventSeparator.handle(n)},t.prototype.stopMomentumNavigation=function(){this.view.navigation.pinch.stopMomentumNavigation()},t}(i.InputHandler);t.PinchRotateAndZoom=a});