// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","./MomentumController"],function(t,e,n,r,o,i){Object.defineProperty(e,"__esModule",{value:!0});var m=function(t){function e(e,n){var r=t.call(this,e,4)||this;return r.momentum=n,r.tmpPan=o.vec3f64.create(),r}return n(e,t),e.prototype.momentumStep=function(t,e){var n=this.momentum.value(t);r.vec3.scale(this.tmpPan,this.momentum.direction,n),r.vec3.subtract(e.eye,e.eye,this.tmpPan),r.vec3.subtract(e.center,e.center,this.tmpPan),e.markViewDirty(),this.constraintOptions.interactionDirection=this.tmpPan},e}(i.MomentumController);e.PanPlanarMomentumController=m});