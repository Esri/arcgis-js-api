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

define(["require","exports","tslib","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(t,e,o,r,n){"use strict";return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enabled=!0,e.rotationEnabled=!0,e}var r;return o.__extends(e,t),r=e,e.prototype.constrain=function(t,e){return this.enabled&&e?(this.rotationEnabled||(t.rotation=e.rotation),t):t},e.prototype.clone=function(){return new r({enabled:this.enabled,rotationEnabled:this.rotationEnabled})},o.__decorate([n.property()],e.prototype,"enabled",void 0),o.__decorate([n.property()],e.prototype,"rotationEnabled",void 0),e=r=o.__decorate([n.subclass("esri.views.2d.constraints.RotationConstraint")],e)}(r)}));