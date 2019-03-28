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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController","../../utils/navigationUtils"],function(e,t,o,m,n,i,r){Object.defineProperty(t,"__esModule",{value:!0});var u=n.vec3f64.create(),s=n.vec3f64.create(),a=function(e){function t(t,o){var m=e.call(this,t,4)||this;return m.momentum=o,m}return o(t,e),t.prototype.momentumStep=function(e,t){var o=this.momentum.value1(e),n=this.momentum.value2(e);m.vec3.copy(s,t.eye),m.vec3.normalize(s,s),m.vec3.cross(this.momentum.axis2,s,this.momentum.axis1),r.applyRotationWithTwoAxes(t,u,this.momentum.axis1,o,this.momentum.axis2,n)},t}(i.MomentumController);t.PanSphericalMomentumController=a});