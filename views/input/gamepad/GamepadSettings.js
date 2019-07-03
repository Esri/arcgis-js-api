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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators","./GamepadInputDevice"],function(e,o,r,t,c,p,n,d){return function(e){function o(){var o=e.call(this)||this;return o.devices=new p,o.enabledFocusMode="document",o}return r(o,e),t([n.property({type:p.ofType(d),readOnly:!0})],o.prototype,"devices",void 0),t([n.property({type:["document","view","none"]})],o.prototype,"enabledFocusMode",void 0),o=t([n.subclass("esri.views.input.gamepad.GamepadSettings")],o)}(n.declared(c))});