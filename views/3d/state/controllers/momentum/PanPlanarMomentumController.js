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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","./MomentumController"],function(t,e,n,r,o){Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e,n){var o=t.call(this,e,4)||this;return o.momentum=n,o.tmpPan=r.vec3d.create(),o}return n(e,t),e.prototype.momentumStep=function(t,e){var n=this.momentum.value(t);r.vec3d.scale(this.momentum.direction,n,this.tmpPan),r.vec3d.subtract(e.eye,this.tmpPan),r.vec3d.subtract(e.center,this.tmpPan),e.markViewDirty(),this.constraintOptions.interactionDirection=this.tmpPan},e}(o.MomentumController);e.PanPlanarMomentumController=i});