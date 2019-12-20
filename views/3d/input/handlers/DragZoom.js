// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/screenUtils","../../state/controllers/global/ZoomController","../../state/controllers/local/ZoomController","../../../input/InputHandler","../../../input/handlers/support"],function(e,r,t,o,n,a,l,i){Object.defineProperty(r,"__esModule",{value:!0});var s=function(e){function r(r,t,o){var n=e.call(this,!0)||this;return n.view=r,n.pointerAction=t,n.registerIncoming("drag",o,function(e){return n.handleDrag(e)}),n}return t(r,e),r.prototype.handleDrag=function(e){var r=e.data;if(!(r.pointers.size>1)&&i.eventMatchesMousePointerAction(e.data,this.pointerAction)){var t=o.createScreenPointArray(r.center.x,r.center.y);switch(r.action){case"start":this.cameraController&&(this.cameraController.end(),this.cameraController=null),this.view.state.isGlobal?this.cameraController=new n.ZoomController(this.view,this.view.sceneIntersectionHelper):this.cameraController=new a.ZoomController(this.view,this.view.sceneIntersectionHelper),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(t);break;case"update":this.cameraController&&this.cameraController.update(t);break;case"end":this.cameraController&&(this.cameraController.end(),this.cameraController=null)}e.stopPropagation()}},r}(l.InputHandler);r.DragZoom=s});