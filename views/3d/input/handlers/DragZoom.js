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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/global/ZoomController","../../state/controllers/local/ZoomController","../../../input/InputHandler","../../../input/handlers/support"],function(e,t,r,o,n,i,a){Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){function t(t,r,o){var n=e.call(this,!0)||this;return n.view=t,n.pointerAction=r,n.registerIncoming("drag",o,function(e){return n.handleDrag(e)}),n}return r(t,e),t.prototype.handleDrag=function(e){var t=e.data;if(!(t.pointers.size>1)&&a.eventMatchesMousePointerAction(e.data,this.pointerAction)){var r=[t.center.x,this.view.height-t.center.y];switch(t.action){case"start":this.view.state.isGlobal?this.cameraController=new o.ZoomController(this.view,this.view.sceneIntersectionHelper):this.cameraController=new n.ZoomController(this.view,this.view.sceneIntersectionHelper),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(r);break;case"update":this.cameraController.update(r);break;case"end":this.cameraController.end(),this.cameraController=null}e.stopPropagation()}},t}(i.InputHandler);t.DragZoom=l});