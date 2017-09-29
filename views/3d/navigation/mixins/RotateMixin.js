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

define(["../../../../core/declare","../../lib/glMatrix","../../support/mathUtils","../NavigationConstants"],function(t,i,e,a){var r=i.vec2d,o=i.vec3d,n=i.mat4d,s=o.create(),h=o.create(),c=r.create(),d=n.create(),l=o.create(),u=[3,1.5],m=a.Rotate.PivotPoint,v=t([],{declaredClass:"esri.views.3d.navigation.mixins.RotateMixin",type:"rotate",constructor:function(){this._rotLastPoint=r.create()},begin:function(t,i){void 0===i&&(i=m.POI),this.navigation.begin(this),this.active=!0,this.emit("begin"),this.setPoiAuto(t),this.normalizeCoordinate(t,this._rotLastPoint)},update:function(t,i){void 0===i&&(i=m.POI);var e,a;switch(i){case m.EYE:e=this.targetCamera.center,a=this.targetCamera.eye;break;default:e=this.targetCamera.eye,a=this.targetCamera.center,i!==m.POI&&console.error("[RotateMixin.update]: invalid pivot specified")}this._applyRotation(t,i,e,a),this.constrainTargetEyeByElevation(),this.fixTargetUpVector(),this.targetAndCurrentChanged(),this.emit("update")},_applyRotation:function(t,i,a,v){this.renderCoordsHelper.worldUpAtPosition(v,s),this.normalizeCoordinate(t,c);var g=(c[1]-this._rotLastPoint[1])*u[i-1],p=(c[0]-this._rotLastPoint[0])*u[i-1];o.subtract(a,v,h);var P=o.length(h),C=e.acos(o.dot(h,s)/P);if(i===m.POI)g=this.limitTumbleByConstraints(C,g,v,P);else{g*=-.5,C=.5*Math.PI-C;var f=.5*Math.PI*.99;g=C-Math.max(-f,Math.min(f,C+g))}n.identity(d),o.cross(this.targetCamera.up,h,l),i==m.POI&&(p=-p),n.rotate(d,p,s),n.rotate(d,g,l),n.multiplyVec3(d,h),o.add(v,h,a),n.multiplyVec3(d,this.targetCamera.up),r.set(c,this._rotLastPoint)},end:function(t){this.active=!1,this.emit("end"),this.navigation.end(this)}});return v});