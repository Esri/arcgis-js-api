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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support","../../state/controllers/RotateController","../../state/helpers/PickingHelper"],function(e,t,r,n,i,a,o){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,r,n,i){var a=e.call(this,!0)||this;return a.view=t,a.pointerType=r,a.pivotPoint=n,a.pickingHelper=new o.PickingHelper(t),a.registerIncoming("drag",i,function(e){return a.handleDrag(e)}),a}return r(t,e),t.prototype.handleDrag=function(e){var t=e.data;if(!(t.pointers.length>1)){var r=t.pointers[0];if(i.eventMatchesMousePointerType(r.startEvent["native"],this.pointerType)){var n=[r.currentEvent.x,this.view.height-r.currentEvent.y];switch(t.action){case"start":this.cameraController=new a.RotateController(this.view,this.pickingHelper,this.pivotPoint),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(n);break;case"update":this.cameraController.update(n);break;case"end":this.cameraController.end(),this.cameraController=null}e.stopPropagation()}}},t}(n.InputHandler);t.DragRotate=l});