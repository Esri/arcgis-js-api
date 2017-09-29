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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","./MomentumNavigationBase"],function(t,e,a,i,n){Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(e,a){var n=t.call(this,e,a)||this;return n._scaleState={plane:{distance:0,normal:i.vec3d.create()},center:i.vec3d.create()},n._rotationState={center:i.vec3d.create(),axis:i.vec3d.create()},n._panState={direction:i.vec3d.create()},n.pan.enabled=!1,n}return a(e,t),e.prototype.addPanValue=function(t,e,a,n){this.pan.estimator.add(e[0],e[1],a,.001*t),i.vec3d.set(n,this._panState.direction),i.vec3d.normalize(this._panState.direction)},e.prototype.addRotationValue=function(t,e,a,n){this.rotation.estimator.add(n,.001*t),i.vec3d.set(e,this._rotationState.center),i.vec3d.set(a,this._rotationState.axis)},e.prototype.addScaleValue=function(t,e,a,n){this.zoom.estimator.add(e,.001*t),this._scaleState.plane.distance=a.distance,i.vec3d.set(a.normal,this._scaleState.plane.normal),i.vec3d.set(n,this._scaleState.center)},e.prototype.onUpdate=function(t,e,a){if(this.zoom.momentum){var n=this.zoom.momentum.valueDelta(t,e);this.helper.planar.applyZoom(this._scaleState.plane,this.view,a,this._scaleState.center,n)}if(this.pan.momentum){i.vec3d.normalize(this._panState.direction);var o=i.vec3d.dist(this.pan.momentum.dataOldest,this.pan.momentum.dataNewest);o/=this.pan.momentum.dataTimeDelta,o*=this.pan.momentum.velocityFactor(t),i.vec3d.scale(this._panState.direction,o*e),i.vec3d.subtract(a.eye,this._panState.direction),i.vec3d.subtract(a.center,this._panState.direction),a.markViewDirty()}if(this.rotation.momentum){var r=this.rotation.momentum.valueDelta(t,e);this.helper.applyRotation(a,this._rotationState.center,this._rotationState.axis,r)}},e}(n.MomentumNavigationBase);e.MomentumNavigationLocal=o});