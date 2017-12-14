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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(t,e,n,i,o){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e,n,i){var o=t.call(this,!0)||this;return o.view=e,o.pointerType=n,o.registerIncoming("drag",i,function(t){return o._handleDrag(t)}),o.registerIncoming("pointer-down",function(t){return o.stopMomentumNavigation()}),o}return n(e,t),e.prototype._handleDrag=function(t){var e=t.data,n=this.view.navigation;if(e.pointers.length>1||n.pinch.zoomMomentum||n.pinch.rotateMomentum)return void this.stopMomentumNavigation();var i=e.pointers[0];if(o.eventMatchesPointerType(i.startEvent["native"],this.pointerType)){var r=n.pan;switch(e.action){case"start":r.begin(this.view,e);break;case"update":r.update(this.view,e);break;case"end":r.end(this.view,e)}t.stopPropagation()}},e.prototype.stopMomentumNavigation=function(){var t=this.view.navigation.pan;t.stopMomentumNavigation()},e}(i.InputHandler);e.DragPan=r});