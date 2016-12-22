// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./ActionSpherical","../../mixins/ZoomMixin","../../../lib/glMatrix","../../../support/earthUtils"],function(t,e,a,i){var r=a.vec2d,s=a.vec3d,n=a.mat4d,h=s.create(),o=s.create(),c=s.create(),g=n.create(),d=s.create(),u=s.create(),m=t.createSubclass([e],{declaredClass:"esri.views.3d.navigation.spherical.actions.ZoomSpherical",constructor:function(){},begin:function(t){this.inherited(arguments),this.pickPointInScreen(t,this._navPickPoint)?this._navSphereRadius=s.length(this._navPickPoint):(this._navSphereRadius=s.length(this.targetCamera.center),this._navSphereRadius<.9*i.earthRadius&&(this._navSphereRadius=i.earthRadius),this.createPickRay(t,t,this.currentCamera.viewMatrix,h,o),s.subtract(o,this.currentCamera.eye),this.intersectManifold(this.currentCamera.eye,o,this._navSphereRadius-i.earthUtils,this._navPickPoint)||(this._navSphereRadius=0)),this._mouseDownCamera.copyFrom(this.targetCamera)},update:function(t){var e=this.targetCamera;e.eye=this._mouseDownCamera.eye,e.center=this._mouseDownCamera.center,e.up=this._mouseDownCamera.up,s.subtract(e.center,e.eye,c);var a=s.length(c);this.normalizeCoordinate(t,h);var d=12*(h[1]-this.normalizedAnchorPoint[1]),u=a*Math.pow(2,d);if(0>d&&u<this.navigation.minPoiDist&&(u=this.navigation.minPoiDist),u=this.limitAltitude(u,e.center,c,a,0>d?-1:1),!(Math.abs(a-u)<1e-6)){if(this._navSphereRadius>0&&a>u){var m=1-(1-u/a)*(1-this._navSphereRadius/s.length(e.center));s.scale(e.center,m)}s.scale(c,-u/a),s.add(e.center,c,e.eye);var l=!1;this._navSphereRadius>0&&(n.lookAt(e.eye,e.center,e.up,g),this.createPickRay(this._dragBeginPoint,this._dragBeginPoint,g,h,o),s.normalize(s.subtract(o,e.eye)),this.intersectManifold(e.eye,o,this._navSphereRadius-i.earthRadius,this._targetOnSphere)||(this.closestPointOnSphereSilhouette(e.eye,h,this._navSphereRadius,this._targetOnSphere),l=!0),this.rotateCameraWithPointsOnSphere(this._navPickPoint,this._targetOnSphere,e,e,this._navSphereRadius),this.fixTargetUpVector()),this.applyConstraints(e),this.constrainTargetEyeByElevation(),this.targetAndCurrentChanged(),r.set(this._dragBeginPoint,this._dragLastPoint),l&&(n.lookAt(e.eye,e.center,e.up,g),this._dragLastPoint=this.currentCamera.projectPoint(this._navPickPoint,g));var p=this._toYDownCoord(this._dragLastPoint);this.emit("update",p[0],p[1])}},stepAtPoint:function(t,e,a,r){s.set(e,u);var c=s.length(u);s.subtract(this.targetCamera.eye,this.targetCamera.center,d);var m=s.length(d),l=m*t,p=1>=t;if(l=p&&l<this.minPoiDist?this.minPoiDist:this.limitAltitude(l,u,d,-m,p?-1:1),t=l/m,!(Math.abs(m-l)<1e-6)){if(r){var C=s.length(this.targetCamera.center),v=c+t*(C-c);s.scale(this.targetCamera.center,v/C)}s.scale(d,t),s.add(this.targetCamera.center,d,this.targetCamera.eye),r&&a&&(n.lookAt(this.targetCamera.eye,this.targetCamera.center,this.targetCamera.up,g),this.createPickRay(a,a,g,h,o),s.normalize(s.subtract(o,this.targetCamera.eye)),c<s.length(this.targetCamera.eye)&&this.intersectManifold(this.targetCamera.eye,o,c-i.earthRadius,this._targetOnSphere)?this.rotateCameraWithPointsOnSphere(u,this._targetOnSphere,this.targetCamera,this.targetCamera,c):r=!1),this.applyConstraints(this.targetCamera),this.constrainTargetEyeByElevation(),r&&this.fixTargetUpVector(),this.navigation.currentHasAlmostReachedTarget()?this.targetAndCurrentChanged():this.targetAnimatedChanged(!1,{internalUpdate:!0})}}});return m});