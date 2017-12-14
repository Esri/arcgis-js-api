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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler","../../state/helpers/PickingHelper","../../state/controllers/global/ZoomStepController","../../state/controllers/local/ZoomStepController"],function(e,t,o,r,i,l,n){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,o){var r=e.call(this,!0)||this;return r.view=t,r.pickingHelper=new i.PickingHelper(t),r.registerIncoming("mouse-wheel",o,function(e){return r.handleMouseWheel(e)}),r}return o(t,e),t.prototype.handleMouseWheel=function(e){var t=e.data;this.cameraController&&this.cameraController.active||(this.cameraController=this.view.state.isGlobal?new l.ZoomStepController(this.view,this.pickingHelper,"interaction"):new n.ZoomStepController(this.view,this.pickingHelper,"interaction"),this.view.state.switchCameraController(this.cameraController)),this.cameraController.zoomStep(-1/60*t.deltaY,[t.x,this.view.height-t.y]),e.stopPropagation()},t}(r.InputHandler);t.MouseWheelZoom=a});