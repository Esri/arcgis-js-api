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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/accessorSupport/decorators"],(function(e,t,r,n,o){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.CameraController=t.State=void 0,function(e){e.Ready="ready",e.Rejected="rejected",e.Running="running",e.Stopped="stopped",e.Finished="finished"}(i=t.State||(t.State={}));var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=i.Ready,t}return r.__extends(t,e),Object.defineProperty(t.prototype,"active",{get:function(){return this.state===i.Running},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isInteractive",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"canStop",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.stopController=function(){return!!this.canStop&&(this.state=i.Stopped,!0)},t.prototype.finishController=function(){this.state=i.Finished},Object.defineProperty(t.prototype,"steppingFinished",{get:function(){return!1},enumerable:!1,configurable:!0}),r.__decorate([o.property({readOnly:!0,dependsOn:["state"]})],t.prototype,"active",null),r.__decorate([o.property()],t.prototype,"state",void 0),t=r.__decorate([o.subclass("esri.views.3d.state.controllers.CameraController")],t)}(n);t.CameraController=a}));