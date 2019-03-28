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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController","../../utils/navigationUtils","../../../support/geometryUtils"],function(e,t,o,r,n,i,c,l){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t,o,i,c){var l=e.call(this,t,2)||this;return l.momentum=o,l.axis=n.vec3f64.create(),l.center=n.vec3f64.create(),r.vec3.copy(l.axis,c),r.vec3.copy(l.center,i),l}return o(t,e),t.prototype.momentumStep=function(e,t){var o=this.momentum.value(e);c.applyRotation(t,this.center,l.axisAngle.wrapAxisAngle(this.axis,o))},t}(i.MomentumController);t.RotationMomentumController=a});