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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Collection","../../../core/accessorSupport/decorators","./GamepadInputDevice"],(function(e,o,t,r,c,n,s){"use strict";return function(e){function o(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var r=e.apply(this,o)||this;return r.devices=new c,r.enabledFocusMode="document",r}return t.__extends(o,e),t.__decorate([n.property({type:c.ofType(s),readOnly:!0})],o.prototype,"devices",void 0),t.__decorate([n.property({type:["document","view","none"]})],o.prototype,"enabledFocusMode",void 0),o=t.__decorate([n.subclass("esri.views.input.gamepad.GamepadSettings")],o)}(r)}));