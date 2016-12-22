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

define(["../../../core/Accessor","../../../core/Evented","../webgl-engine/lib/Camera","../lib/glMatrix","dojo/on"],function(t,n,i,e,r){var a=e.vec3d,o=e.vec2d,s=t.createSubclass([n],{properties:{type:{},navigation:{},picker:{readOnly:!0,aliasOf:"navigation.picker"},currentCamera:{aliasOf:"navigation.currentCamera"},targetCamera:{aliasOf:"navigation.targetCamera"},constraints:{readOnly:!0,aliasOf:"navigation.constraints"},renderCoordsHelper:{readOnly:!0,aliasOf:"navigation.renderCoordsHelper"},minPoiDist:{readOnly:!0,aliasOf:"navigation.minPoiDist"}},constructor:function(){this._tmpEvent={type:null,phase:null,x:void 0,y:void 0},this._mouseDownCamera=new i,this._navPickPoint=a.create(),this._dragLastPoint=o.create(),this._dragBeginPoint=o.create(),this.active=!1},initialize:function(){var t=["minPoiDist","renderCoordsHelper","constraints","picker"],n=this;t.forEach(function(t){this.navigation.watch(t,function(){n.notifyChange(t)})}.bind(this))},emit:function(t,n,i){this._tmpEvent.type=this.type,this._tmpEvent.phase=t,this._tmpEvent.x=n,this._tmpEvent.y=i,r.emit(this,t,this._tmpEvent),r.emit(this.navigation,this.type,this._tmpEvent)},intersectManifold:function(t,n,i,e){return this.navigation.intersectManifold(t,n,i,e)},fixTargetUpVector:function(){return this.navigation.fixTargetUpVector()},setPoiAuto:function(t,n){return this.navigation.setPoiAuto(t,n)},normalizeCoordinate:function(t,n){n[0]=t[0]/this.currentCamera.width,n[1]=t[1]/this.currentCamera.height},worldUpAtPosition:function(t,n){return this.renderCoordsHelper.worldUpAtPosition(t,n)},applyConstraints:function(t,n){return this.navigation.applyConstraints(t,n)},constrainTargetEyeByElevation:function(t){return this.navigation.constrainTargetEyeByElevation(t)},constrainTargetEyeByElevationAndMoveLookAt:function(){return this.navigation.constrainTargetEyeByElevationAndMoveLookAt()},targetAndCurrentChanged:function(t){return this.navigation.targetAndCurrentChanged(t)},targetAnimatedChanged:function(t,n){return this.navigation.targetAnimatedChanged(t,n)},currentReachedTarget:function(t){return this.navigation.currentReachedTarget(t)},setCurrentToTarget:function(){return this.navigation.setCurrentToTarget()},animationStarted:function(){return this.navigation.animationStarted()},limitAltitude:function(t,n,i,e){return this.navigation.limitAltitude(t,n,i,e)},limitTiltByConstraints:function(t,n,i,e){return this.navigation.limitTiltByConstraints(t,n,i,e)},createPickRay:function(t,n,i,e,r){return this.picker.createPickRay(t,n,i,e,r)},pickAlongRay:function(t,n,i,e,r,a){return this.picker.pickAlongRay(t,n,i,e,r,a)},pickPointInScreen:function(t,n){return this.picker.pickPointInScreen(t,n)},pickFreePointInScreen:function(t,n){return this.picker.pickFreePointInScreen(t,n)},pickInScreen:function(t){return this.picker.pickInScreen(t)}});return s});