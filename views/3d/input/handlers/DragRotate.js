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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler","../../../input/handlers/support"],function(e,t,r,n,o,a,i){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,r,n,o){var a=e.call(this,!0)||this;return a.view=t,a.pointerAction=r,a.pivotPoint=n,a.registerIncoming("drag",o,function(e){return a.handleDrag(e)}),a}return r(t,e),t.prototype.handleDrag=function(e){var t=e.data;if(!(t.pointers.size>1)&&i.eventMatchesMousePointerAction(e.data,this.pointerAction)){var r=n.createScreenPointArray(t.center.x,t.center.y);switch(t.action){case"start":this.cameraController&&(this.cameraController.end(),this.cameraController=null),this.cameraController=new o.RotateController(this.view,this.view.sceneIntersectionHelper,this.pivotPoint),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(r);break;case"update":this.cameraController&&this.cameraController.update(r);break;case"end":this.cameraController&&(this.cameraController.end(),this.cameraController=null)}e.stopPropagation()}},t}(a.InputHandler);t.DragRotate=l});