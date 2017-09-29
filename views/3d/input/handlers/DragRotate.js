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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","./support","../../navigation/NavigationConstants"],function(t,e,n,i,a,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,n,i,a){var o=t.call(this,"esri.views.3d.input.handlers.DragRotate",!0)||this;switch(o.view=e,o.pointerType=n,o.pivotPoint=i,o.registerIncoming("drag",a,function(t){return o._handleDrag(t)}),i){case"center":o._navigationPivot=r.Rotate.PivotPoint.POI;break;case"eye":o._navigationPivot=r.Rotate.PivotPoint.EYE}return o}return n(e,t),e.prototype._handleDrag=function(t){var e=t.data;if(!(e.pointers.length>1)){var n=e.pointers[0];if(a.eventMatchesPointerType(n.startEvent["native"],this.pointerType)){var i=[n.currentEvent.x,this.view.height-n.currentEvent.y],r=this.view.navigation.rotate;switch(e.action){case"start":r.begin(i,this._navigationPivot);break;case"update":r.update(i,this._navigationPivot);break;case"end":r.end(i)}t.stopPropagation()}}},e}(i.InputHandler);e.DragRotate=o});