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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/accessorSupport/decorators","./CameraController","../../webgl-engine/lib/Camera"],(function(e,r,t,o,n,a){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.beginCamera=new a.default,r.currentCamera=new a.default,r}return t.__extends(r,e),Object.defineProperty(r.prototype,"isInteractive",{get:function(){return!0},enumerable:!0,configurable:!0}),r.prototype.stepController=function(e,r){r.copyViewFrom(this.currentCamera),this.currentCamera.copyFrom(r)},r.prototype.onControllerStart=function(e){this.state=n.State.Running,this.beginCamera.copyFrom(e),this.currentCamera.copyFrom(e)},r.prototype.onControllerEnd=function(e){e.copyViewFrom(this.currentCamera)},r=t.__decorate([o.subclass("esri.views.3d.state.controllers.InteractiveController")],r)}(n.CameraController);r.InteractiveController=i}));