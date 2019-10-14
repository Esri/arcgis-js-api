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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(e,t,r,n,o,p){var a=function(e){function t(t){var r=e.call(this)||this;return r.nativeIndex=null,r._detectedDeviceType="unknown","standard"===t.mapping?r._detectedDeviceType="standard":i.test(t.id)?r._detectedDeviceType="spacemouse":r._detectedDeviceType="unknown",r.nativeIndex=t.index,r}return r(t,e),Object.defineProperty(t.prototype,"native",{get:function(){return(navigator.getGamepads?navigator.getGamepads():[])[this.nativeIndex]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"deviceType",{get:function(){return this._detectedDeviceType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"axisThreshold",{get:function(){return d[this.deviceType]},enumerable:!0,configurable:!0}),n([p.property({nonNullable:!0,readOnly:!0})],t.prototype,"nativeIndex",void 0),n([p.property({type:String,readOnly:!0})],t.prototype,"deviceType",null),n([p.property({type:Number,readOnly:!0})],t.prototype,"axisThreshold",null),t=n([p.subclass("esri.views.input.gamepad.GamepadInputDevice")],t)}(p.declared(o)),i=new RegExp("^(3dconnexion|space(mouse|navigator|pilot|explorer))","i"),d={standard:.15,spacemouse:.025,unknown:0};return a});