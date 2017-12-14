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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(t,n,e,i){Object.defineProperty(n,"__esModule",{value:!0});var o=function(t){function n(n){var e=t.call(this,!0)||this;return e.view=n,e.registerIncoming("drag",function(t){return e._handleDrag(t)}),e.registerIncoming("pointer-down",function(t){return e.stopMomentumNavigation()}),e}return e(n,t),n.prototype._handleDrag=function(t){var n=t.data;if(!(n.pointers.length<2)){var e=this.view.navigation.pinch;switch(n.action){case"start":e.begin(this.view,n);break;case"update":e.update(this.view,n);break;case"end":e.end(this.view,n)}t.stopPropagation()}},n.prototype.stopMomentumNavigation=function(){var t=this.view.navigation.pinch;t.stopMomentumNavigation()},n}(i.InputHandler);n.PinchRotateAndZoom=o});