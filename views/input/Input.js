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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","./gamepad/GamepadSettings"],(function(e,r,t,s,n,o){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.gamepad=new o,r}return t.__extends(r,e),t.__decorate([n.property({readOnly:!0})],r.prototype,"gamepad",void 0),r=t.__decorate([n.subclass("esri.views.input.Input")],r)}(s)}));