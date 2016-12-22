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

define(["./ActionPlanar","../../mixins/PanMixin","../../../lib/glMatrix","../../../webgl-engine/lib/Util"],function(t,e,a,i){var n=a.vec2d,r=a.vec3d,s=r.create(),c=r.create(),o=r.create(),h=r.create(),d=r.create(),l=r.create(),g=Math.PI/9,P=g,u=r.create(),b=r.create(),m=t.createSubclass([e],{declaredClass:"esri.views.3d.navigation.planar.actions.PanPlanar",begin:function(t){this.inherited(arguments),this.pickPointInScreen(t,s)||this.pickFreePointInScreen(t,s),r.normalize(r.subtract(this.targetCamera.eye,this.targetCamera.center,c)),this.renderCoordsHelper.worldUpAtPosition(t,l);var e=r.dot(c,l);0>e&&(r.negate(c),e=-e);var a=Math.asin(e);a>=P?r.set(l,c):(r.subtract(c,r.scale(l,e,o)),r.normalize(c),a>g&&(r.lerp(c,l,(a-g)/(P-g)),r.normalize(c))),this.updatePlane(s,c),n.set(t,this._dragLastPoint),n.set(t,this._dragBeginPoint)},update:function(t){this._intersectPanPlane(this._dragLastPoint,this._dragBeginPoint,u)&&this._intersectPanPlane(t,this._dragBeginPoint,b)&&(r.subtract(b,u),r.subtract(this.targetCamera.eye,b),r.subtract(this.targetCamera.center,b),n.set(t,this._dragLastPoint),this.constrainTargetEyeByElevationAndMoveLookAt(),this.targetAndCurrentChanged())},_intersectPanPlane:function(t,e,a){return this.createPickRay(t,e,this.currentCamera.viewMatrix,h,d),r.subtract(d,h),i.rayPlane(h,d,this._plane,a)},end:function(t){this.setPoiAuto(t,!0),this._navSphereRadius=0,this.inherited(arguments)}});return m});