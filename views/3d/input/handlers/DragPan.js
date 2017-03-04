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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","./support"],function(e,t,n,r,a){var i=function(e){function t(t,n,r){var a=e.call(this,"esri.views.3d.input.handlers.DragPan",!0)||this;return a.view=t,a.pointerType=n,a.registerIncoming("drag",r,function(e){return a._handleDrag(e)}),a}return n(t,e),t.prototype._handleDrag=function(e){var t=e.data;if(!(t.pointers.length>1)){var n=t.pointers[0];if(a.eventMatchesPointerType(n.startEvent["native"],this.pointerType)){var r=[n.currentEvent.x,this.view.height-n.currentEvent.y],i=this.view.navigation.pan;switch(t.action){case"start":i.begin(r);break;case"update":i.update(r);break;case"end":i.end(r)}e.stopPropagation()}}},t}(r.InputHandler);t.DragPan=i});