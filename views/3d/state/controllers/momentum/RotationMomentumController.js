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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","./MomentumController","../../utils/navigationUtils"],function(e,t,n,o,r,i){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(t,n,r,i){var u=e.call(this,t,2)||this;return u.momentum=n,u.axis=o.vec3d.create(),u.center=o.vec3d.create(),o.vec3d.set(i,u.axis),o.vec3d.set(r,u.center),u}return n(t,e),t.prototype.momentumStep=function(e,t){var n=this.momentum.value(e);i.applyRotation(t,this.center,this.axis,n)},t}(r.MomentumController);t.RotationMomentumController=u});