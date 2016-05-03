// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declare","../../../core/Accessor"],function(e,t,o,r,n,a){var i=function(e){function t(){e.apply(this,arguments),this.enabled=!0,this.rotationEnabled=!0}return o(t,e),t.prototype.constrain=function(e){return this.enabled?(this.rotationEnabled||(e.rotation=0),e):e},t.prototype.clone=function(){return new t({enabled:this.enabled,rotationEnabled:this.rotationEnabled})},r([n.shared("esri.views.2d.constraints.RotationConstraint")],t.prototype,"declaredClass",void 0),r([n.property()],t.prototype,"enabled",void 0),r([n.property()],t.prototype,"rotationEnabled",void 0),t=r([n.subclass()],t)}(n.declared(a));Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i});