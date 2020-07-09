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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController","../../utils/navigationUtils"],(function(e,t,o,r,n,i,m,s){Object.defineProperty(t,"__esModule",{value:!0});var c=i.vec3f64.create(),a=i.vec3f64.create(),l=function(e){function t(t){var o=e.call(this,t)||this;return o.interactionType=4,o}return o.__extends(t,e),t.prototype.momentumStep=function(e,t){var o=this.momentum.value1(e),r=this.momentum.value2(e);n.vec3.copy(a,t.eye),n.vec3.normalize(a,a),n.vec3.cross(this.momentum.axis2,a,this.momentum.axis1),s.applyRotationWithTwoAxes(t,c,this.momentum.axis1,o,this.momentum.axis2,r)},o.__decorate([r.property({constructOnly:!0})],t.prototype,"momentum",void 0),t=o.__decorate([r.subclass("esri.views.3d.state.controllers.momentum.PanSphericalMomentumController")],t)}(m.MomentumController);t.PanSphericalMomentumController=l}));