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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler"],function(e,r,t,n,a,o){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(r,t){void 0===t&&(t=!1);var n=e.call(this,!0)||this;return n.view=r,n.invert=t,n.registerIncoming("vertical-two-finger-drag",function(e){return n.handleTwoFinger(e)}),n}return t(r,e),r.prototype.handleTwoFinger=function(e){var r=this.invert?-1:1,t=n.createScreenPointArray(0,e.data.delta*r);switch(e.data.action){case"begin":this.cameraController&&(this.cameraController.end(),this.cameraController=null),this.cameraController=new a.RotateController(this.view,this.view.sceneIntersectionHelper,"center"),this.view.state.switchCameraController(this.cameraController),this.cameraController.begin(t);break;case"update":this.cameraController&&this.cameraController.update(t);break;case"end":this.cameraController&&(this.cameraController.end(),this.cameraController=null)}},r}(o.InputHandler);r.TwoFingerTilt=i});