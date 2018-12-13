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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/gl-matrix","./MomentumController","../../utils/navigationUtils"],function(e,t,o,m,n,i){Object.defineProperty(t,"__esModule",{value:!0});var r=m.vec3f64.create(),u=m.vec3f64.create(),a=function(e){function t(t,o){var m=e.call(this,t,4)||this;return m.momentum=o,m}return o(t,e),t.prototype.momentumStep=function(e,t){var o=this.momentum.value1(e),n=this.momentum.value2(e);m.vec3.copy(u,t.eye),m.vec3.normalize(u,u),m.vec3.cross(this.momentum.axis2,u,this.momentum.axis1),i.applyRotationWithTwoAxes(t,r,this.momentum.axis1,o,this.momentum.axis2,n)},t}(n.MomentumController);t.PanSphericalMomentumController=a});