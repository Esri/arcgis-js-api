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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","./support","../../navigation/NavigationConstants"],function(t,i,e,n,a,r){var o=function(t){function i(i,e,n,a){var o=this;switch(t.call(this,"esri.views.3d.input.handlers.DragRotate",!0),this.view=i,this.pointerType=e,this.pivotPoint=n,this.registerIncoming("drag",a,function(t){return o._handleDrag(t)}),n){case"center":this._navigationPivot=r.Rotate.PivotPoint.POI;break;case"eye":this._navigationPivot=r.Rotate.PivotPoint.EYE}}return e(i,t),i.prototype._handleDrag=function(t){var i=t.data;if(!(i.pointers.length>1)){var e=i.pointers[0];if(a.eventMatchesPointerType(e.startEvent["native"],this.pointerType)){var n=[e.currentEvent.x,this.view.height-e.currentEvent.y],r=this.view.navigation.rotate;switch(i.action){case"start":r.begin(n,this._navigationPivot);break;case"update":r.update(n,this._navigationPivot);break;case"end":r.end(n)}t.stopPropagation()}}},i}(n.InputHandler);i.DragRotate=o});