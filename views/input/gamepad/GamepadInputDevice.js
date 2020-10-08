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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(e,t,n,r,o){"use strict";var a=function(e){function t(t){var n=e.call(this)||this;return n.nativeIndex=null,n._detectedDeviceType="unknown","standard"===t.mapping?n._detectedDeviceType="standard":i.test(t.id)?n._detectedDeviceType="spacemouse":n._detectedDeviceType="unknown",n.nativeIndex=t.index,n}return n.__extends(t,e),Object.defineProperty(t.prototype,"native",{get:function(){return(navigator.getGamepads?navigator.getGamepads():[])[this.nativeIndex]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"deviceType",{get:function(){return this._detectedDeviceType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"axisThreshold",{get:function(){return p[this.deviceType]},enumerable:!1,configurable:!0}),n.__decorate([o.property({nonNullable:!0,readOnly:!0})],t.prototype,"nativeIndex",void 0),n.__decorate([o.property({type:String,readOnly:!0})],t.prototype,"deviceType",null),n.__decorate([o.property({type:Number,readOnly:!0})],t.prototype,"axisThreshold",null),t=n.__decorate([o.subclass("esri.views.input.gamepad.GamepadInputDevice")],t)}(r),i=new RegExp("^(3dconnexion|space(mouse|navigator|pilot|explorer))","i"),p={standard:.15,spacemouse:.025,unknown:0};return a}));