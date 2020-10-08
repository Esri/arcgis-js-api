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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","./gamepad/GamepadSettings"],(function(e,o,t,r,a,n){"use strict";return function(e){function o(o){var t=e.call(this,o)||this;return t.browserTouchPanEnabled=!0,t.gamepad=new n,t.momentumEnabled=!0,t.mouseWheelZoomEnabled=!0,t}return t.__extends(o,e),t.__decorate([a.property({type:Boolean})],o.prototype,"browserTouchPanEnabled",void 0),t.__decorate([a.property({type:n,nonNullable:!0})],o.prototype,"gamepad",void 0),t.__decorate([a.property({type:Boolean})],o.prototype,"momentumEnabled",void 0),t.__decorate([a.property({type:Boolean})],o.prototype,"mouseWheelZoomEnabled",void 0),o=t.__decorate([a.subclass("esri.views.navigation.Navigation")],o)}(r)}));