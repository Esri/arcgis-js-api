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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../lib/glMatrix","./MomentumNavigationBase","./PinchNavigationGlobal"],function(e,t,i,a,r,n){Object.defineProperty(t,"__esModule",{value:!0});var o=a.vec3d.create(),s=function(e){function t(t,i){var r=e.call(this,t,i)||this;return r._panAxisOrDirection=a.vec3d.create(),r._centerOnScreen=a.vec2.create(),r._centerOnSphere=a.vec3d.create(),r._tmpSphereCenter=a.vec3d.create(),r._tmpScaleAxis=a.vec3d.create(),r._verticalPlane={distance:0,normal:a.vec3d.create()},r._verticalCenter=a.vec3d.create(),r}return i(t,e),t.prototype.setParameters=function(e,t,i,r){this._radius=e,a.vec2.set(t,this._centerOnScreen),a.vec3d.set(i,this._centerOnSphere),this._mode=r},t.prototype.addPanValue=function(e,t,i,r){this.pan.estimator.add(t[0],t[1],i,.001*e),a.vec3d.set(r,this._panAxisOrDirection)},t.prototype.addRotationValue=function(e,t){this.rotation.estimator.add(t,.001*e)},t.prototype.addScaleValue=function(e,t){this.zoom.estimator.add(t,.001*e)},t.prototype.setVerticalParameters=function(e,t){a.vec3d.set(t,this._verticalCenter),a.vec3d.set(e.normal,this._verticalPlane.normal),this._verticalPlane.distance=e.distance},t.prototype.onUpdate=function(e,t,i){var r=this._radius,s=this._centerOnScreen,c=this._centerOnSphere;if(this.zoom.momentum){var h=this.zoom.momentum.valueDelta(e,t);if(this._mode===n.PanMode.Horizontal){this.helper.spherical.applyZoom(r,this.view,i,h),this.helper.spherical.makeRenderCoordSpherePoint(r,i,s,this._tmpSphereCenter);var m=this.helper.spherical.rotationFromPoints(r,c,this._tmpSphereCenter,this._tmpScaleAxis);this.helper.applyRotation(i,o,this._tmpScaleAxis,m)}else this.helper.planar.applyZoom(this._verticalPlane,this.view,i,this._verticalCenter,h)}if(this.pan.momentum)if(this._mode===n.PanMode.Horizontal){var p=this.helper.spherical.rotationFromPoints(this._radius,this.pan.momentum.dataOldest,this.pan.momentum.dataNewest,this._panAxisOrDirection);p/=this.pan.momentum.dataTimeDelta,p*=this.pan.momentum.velocityFactor(e),this.helper.applyRotation(i,o,this._panAxisOrDirection,p*t)}else{var p=a.vec3d.dist(this.pan.momentum.dataOldest,this.pan.momentum.dataNewest);p/=this.pan.momentum.dataTimeDelta,p*=this.pan.momentum.velocityFactor(e),a.vec3d.normalize(this._panAxisOrDirection),a.vec3d.scale(this._panAxisOrDirection,p*t),a.vec3d.subtract(i.eye,this._panAxisOrDirection),a.vec3d.subtract(i.center,this._panAxisOrDirection),i.markViewDirty()}if(this.rotation.momentum){var l=this.rotation.momentum.valueDelta(e,t);this.helper.applyRotation(i,o,c,l)}},t}(r.MomentumNavigationBase);t.MomentumNavigationGlobal=s});