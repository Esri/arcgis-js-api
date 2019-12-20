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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators"],function(e,t,r,n,o,i){Object.defineProperty(t,"__esModule",{value:!0});var p;!function(e){e.Ready="ready",e.Rejected="rejected",e.Running="running",e.Stopped="stopped",e.Finished="finished"}(p=t.State||(t.State={}));var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=p.Ready,t}return r(t,e),Object.defineProperty(t.prototype,"active",{get:function(){return this.state===p.Running},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isInteractive",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canStop",{get:function(){return!1},enumerable:!0,configurable:!0}),t.prototype.stopController=function(){return!!this.canStop&&(this.state=p.Stopped,!0)},t.prototype.finishController=function(){this.state=p.Finished},Object.defineProperty(t.prototype,"steppingFinished",{get:function(){return!1},enumerable:!0,configurable:!0}),n([i.property({readOnly:!0,dependsOn:["state"]})],t.prototype,"active",null),n([i.property()],t.prototype,"state",void 0),t=n([i.subclass("esri.views.3d.state.controllers.CameraController")],t)}(i.declared(o));t.CameraController=a});