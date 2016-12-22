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

define(["../../../../core/declare","../../lib/glMatrix","../../support/mathUtils","../NavigationConstants"],function(t,i,e,a){var r=i.vec2d,o=i.vec3d,n=i.mat4d,s=o.create(),h=o.create(),c=r.create(),d=n.create(),l=o.create(),u=[3,1.5],v=a.Rotate.PivotPoint,g=t([],{declaredClass:"esri.views.3d.navigation.mixins.RotateMixin",type:"rotate",constructor:function(){this._rotLastPoint=r.create()},begin:function(t,i){void 0===i&&(i=v.POI),this.navigation.begin(this),this.active=!0,this.emit("begin"),this.setPoiAuto(t),this.normalizeCoordinate(t,this._rotLastPoint)},update:function(t,i){void 0===i&&(i=v.POI);var e,a;switch(i){case v.EYE:e=this.targetCamera.center,a=this.targetCamera.eye;break;default:e=this.targetCamera.eye,a=this.targetCamera.center,i!==v.POI&&console.error("[RotateMixin.update]: invalid pivot specified")}this._applyRotation(t,i,e,a),this.constrainTargetEyeByElevation(),this.fixTargetUpVector(),this.targetAndCurrentChanged(),this.emit("update")},_applyRotation:function(t,i,a,g){this.renderCoordsHelper.worldUpAtPosition(g,s),this.normalizeCoordinate(t,c);var m=(c[1]-this._rotLastPoint[1])*u[i-1],p=(c[0]-this._rotLastPoint[0])*u[i-1];o.subtract(a,g,h);var P=o.length(h),C=e.acos(o.dot(h,s)/P);if(i===v.POI)m=this.limitTiltByConstraints(C+m,g,P)-C;else{m*=-.5,C=.5*Math.PI-C;var f=.5*Math.PI*.99;m=C-Math.max(-f,Math.min(f,C+m))}n.identity(d),o.cross(this.targetCamera.up,h,l),i==v.POI&&(p=-p),n.rotate(d,p,s),n.rotate(d,m,l),n.multiplyVec3(d,h),o.add(g,h,a),n.multiplyVec3(d,this.targetCamera.up),r.set(c,this._rotLastPoint)},end:function(t){this.active=!1,this.emit("end"),this.navigation.end(this)}});return g});