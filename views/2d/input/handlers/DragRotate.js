// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support"],function(t,e,i,n,r){var a=function(t){function e(e,i,n){var r=this;t.call(this,"esri.views.2d.input.handlers.DragRotate - "+i,!0),this.view=e,this.pointerType=i,this.registerIncoming("drag",n,function(t){return r._handleDrag(t)})}return i(e,t),e.prototype._handleDrag=function(t){var e=t.data;if(!(e.pointers.length>1)){var i=e.pointers[0];if(r.eventMatchesPointerType(i.startEvent["native"],this.pointerType)){var n=this.view.navigation.rotate;switch(e.action){case"start":n.begin(this.view,i);break;case"update":n.update(this.view,i);break;case"end":n.end(this.view,i)}t.stopPropagation()}}},e}(n.InputHandler);e.DragRotate=a});