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

define(["./ActionPlanar","../../mixins/ZoomMixin","../../../lib/glMatrix","../../../webgl-engine/lib/Util"],function(t,e,i,a){var r=i.vec2d,n=i.vec3d,s=n.create(),h=n.create(),o=n.create(),c=n.create(),l=n.create(),g=n.create(),m=t.createSubclass([e],{declaredClass:"esri.views.3d.navigation.planar.actions.ZoomPlanar",begin:function(t){this.inherited(arguments),this.pickPointInScreen(t,l)||this.pickFreePointInScreen(t,l),n.normalize(n.subtract(this.targetCamera.eye,this.targetCamera.center,c)),c[1]<0&&n.negate(c),this.updatePlane(l,c)},update:function(t){n.set(this.targetCamera.center,g);var e=!1;this.createPickRay(this._dragBeginPoint,this._dragBeginPoint,this.currentCamera.viewMatrix,s,h),n.subtract(h,s),e=a.rayPlane(s,h,this._plane,g),this.normalizeCoordinate(t,s);var i=4*(this.normalizedAnchorPoint[1]-s[1]);r.set(s,this.normalizedAnchorPoint),this._applyZoom(g,i);var o=this._toYDownCoord(this._dragLastPoint);this.emit("update",o[0],o[1])},_applyZoom:function(t,e){n.subtract(t,this.targetCamera.eye,o);var i=n.length(o),a=i*(1-e);e>=0&&a<this.minPoiDist&&(a=this.minPoiDist),a=this.limitAltitude(a,t,o,i,e>=0?-1:1),Math.abs(i-a)<1e-6||(e=-(a-i)/i,n.scale(o,e),n.add(this.targetCamera.eye,o),n.lerp(this.targetCamera.center,t,e),this.fixTargetUpVector(),this.targetAndCurrentChanged())},stepAtPoint:function(t,e,i,a){n.set(e,g),n.subtract(g,this.targetCamera.eye,o);var r=n.length(o),s=r*t,h=1>=t;h&&s<this.minPoiDist&&(s=this.minPoiDist),s=this.limitAltitude(s,g,o,r,h?-1:1),t=s/r,Math.abs(r-s)>=1e-6&&(n.scale(o,s/r),n.subtract(g,o,this.targetCamera.eye),n.lerp(this.targetCamera.center,g,1-t),this.constrainTargetEyeByElevation(),this.fixTargetUpVector(),this.targetAnimatedChanged(!1,{internalUpdate:!0}))}});return m});