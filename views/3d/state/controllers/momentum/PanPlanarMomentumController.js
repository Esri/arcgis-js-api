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

define(["require","exports","tslib","../../../../../core/accessorSupport/decorators","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController"],(function(t,e,r,n,o,i,c){Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e){var r=t.call(this,e)||this;return r.interactionType=4,r.tmpPan=i.vec3f64.create(),r}return r.__extends(e,t),e.prototype.momentumStep=function(t,e){var r=this.momentum.value(t);o.vec3.scale(this.tmpPan,this.momentum.direction,r),o.vec3.subtract(e.eye,e.eye,this.tmpPan),o.vec3.subtract(e.center,e.center,this.tmpPan),e.markViewDirty(),this.constraintOptions.interactionDirection=this.tmpPan},r.__decorate([n.property({constructOnly:!0})],e.prototype,"momentum",void 0),e=r.__decorate([n.subclass("esri.views.3d.state.controllers.momentum.PanPlanarMomentumController")],e)}(c.MomentumController);e.PanPlanarMomentumController=a}));