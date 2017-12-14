// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor"],function(t,e,r,o,n,a){var i=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.enabled=!0,e.rotationEnabled=!0,e}return r(e,t),a=e,e.prototype.constrain=function(t,e){return this.enabled?(this.rotationEnabled||(t.rotation=0),t):t},e.prototype.clone=function(){return new a({enabled:this.enabled,rotationEnabled:this.rotationEnabled})},o([n.property()],e.prototype,"enabled",void 0),o([n.property()],e.prototype,"rotationEnabled",void 0),e=a=o([n.subclass("esri.views.2d.constraints.RotationConstraint")],e);var a}(n.declared(a));return i});