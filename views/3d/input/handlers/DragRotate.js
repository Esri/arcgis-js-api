// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler","../../../input/handlers/support"],(function(t,e,r,n,o,a,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DragRotate=void 0;var l=function(t){function e(e,r,n,o){var a=t.call(this,!0)||this;return a.view=e,a.pointerAction=r,a.pivotPoint=n,a.registerIncoming("drag",o,(function(t){return a.handleDrag(t)})),a}return r.__extends(e,t),e.prototype.handleDrag=function(t){var e=t.data;if(!(e.pointers.size>1)&&i.eventMatchesMousePointerAction(t.data,this.pointerAction)){var r=n.createScreenPointArray(e.center.x,e.center.y);switch(e.action){case"start":this.cameraController&&(this.cameraController.end(),this.cameraController=null),this.cameraController=new o.RotateController({view:this.view,pivot:this.pivotPoint}),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(r);break;case"update":this.cameraController&&this.cameraController.update(r);break;case"end":this.cameraController&&(this.cameraController.end(),this.cameraController=null)}t.stopPropagation()}},e}(a.InputHandler);e.DragRotate=l}));