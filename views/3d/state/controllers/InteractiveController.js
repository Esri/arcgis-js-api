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

define(["require","exports","../../../../core/tsSupport/extendsHelper","./CameraController","../../webgl-engine/lib/Camera"],function(e,r,t,n,o){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.beginCamera=new o.default,r.currentCamera=new o.default,r}return t(r,e),Object.defineProperty(r.prototype,"isInteractive",{get:function(){return!0},enumerable:!0,configurable:!0}),r.prototype.stepController=function(e,r){r.copyViewFrom(this.currentCamera),this.currentCamera.copyFrom(r)},r.prototype.onControllerStart=function(e){this.state=n.State.Running,this.beginCamera.copyFrom(e),this.currentCamera.copyFrom(e)},r.prototype.onControllerEnd=function(e){e.copyViewFrom(this.currentCamera)},r}(n.CameraController);r.InteractiveController=a});