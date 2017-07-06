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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(e,t,n,r,i){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,n,r){var i=e.call(this,"esri.views.2d.input.handlers.DragRotate - "+n,!0)||this;return i.view=t,i.pointerType=n,i.registerIncoming("drag",r,function(e){return i._handleDrag(e)}),i}return n(t,e),t.prototype._handleDrag=function(e){var t=e.data;if(!(t.pointers.length>1)){var n=t.pointers[0];if(i.eventMatchesPointerType(n.startEvent["native"],this.pointerType)){var r=this.view.navigation.rotate;switch(t.action){case"start":r.begin(this.view,t);break;case"update":r.update(this.view,t);break;case"end":r.end(this.view,t)}e.stopPropagation()}}},t}(r.InputHandler);t.DragRotate=a});