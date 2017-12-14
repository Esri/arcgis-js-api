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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../../input/handlers/support","../../state/helpers/PickingHelper","../../state/controllers/global/ZoomController","../../state/controllers/local/ZoomController"],function(e,t,r,n,o,i,a,l){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t,r,n){var o=e.call(this,!0)||this;return o.view=t,o.pointerType=r,o.pickingHelper=new i.PickingHelper(t),o.registerIncoming("drag",n,function(e){return o.handleDrag(e)}),o}return r(t,e),t.prototype.handleDrag=function(e){var t=e.data;if(!(t.pointers.length>1)){var r=t.pointers[0];if(o.eventMatchesMousePointerType(r.startEvent["native"],this.pointerType)){var n=[r.currentEvent.x,this.view.height-r.currentEvent.y];switch(t.action){case"start":this.view.state.isGlobal?this.cameraController=new a.ZoomController(this.view,this.pickingHelper):this.cameraController=new l.ZoomController(this.view,this.pickingHelper),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(n);break;case"update":this.cameraController.update(n);break;case"end":this.cameraController.end(),this.cameraController=null}e.stopPropagation()}}},t}(n.InputHandler);t.DragZoom=s});