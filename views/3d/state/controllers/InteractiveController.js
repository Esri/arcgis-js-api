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

define(["require","exports","../../../../core/tsSupport/extendsHelper","./CameraController","../../webgl-engine/lib/Camera"],function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.beginCamera=new n,r.currentCamera=new n,r}return t(r,e),Object.defineProperty(r.prototype,"isInteractive",{get:function(){return!0},enumerable:!0,configurable:!0}),r.prototype.stepController=function(r,t){e.prototype.stepController.call(this,r,t),t.copyViewFrom(this.currentCamera),this.currentCamera.copyFrom(t)},r.prototype.onControllerStart=function(r){e.prototype.onControllerStart.call(this,r),this.beginCamera.copyFrom(r),this.currentCamera.copyFrom(r)},r.prototype.onControllerEnd=function(r){r.copyViewFrom(this.currentCamera),e.prototype.onControllerEnd.call(this,r)},r}(o.CameraController);r.InteractiveController=l});