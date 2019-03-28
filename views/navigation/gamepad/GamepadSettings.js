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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators","../../input/gamepad/GamepadInputDevice"],function(e,o,r,t,p,n,a){return function(e){function o(){var o=e.call(this)||this;return o.enabled=!0,o.device=null,o.mode="pan",o.tiltDirection="forward-down",o.velocityFactor=1,o}return r(o,e),t([n.property({type:Boolean,nonNullable:!0})],o.prototype,"enabled",void 0),t([n.property({type:a})],o.prototype,"device",void 0),t([n.property({type:["pan","zoom"],nonNullable:!0})],o.prototype,"mode",void 0),t([n.property({type:["forward-down","forward-up"],nonNullable:!0})],o.prototype,"tiltDirection",void 0),t([n.property({type:Number,nonNullable:!0})],o.prototype,"velocityFactor",void 0),o=t([n.subclass("esri.views.navigation.gamepad.GamepadSettings")],o)}(n.declared(p))});