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

define(["../../../../core/Accessor","dojo/on","dojo/_base/lang","../../animation/pointToPoint/Animation","../../../animation/easing"],function(t,i,n,e,a){e=e["default"];var r=t.createSubclass([],{declaredClass:"esri.views.3d.navigation.mixins.AnimationMixin",properties:{interpolation:{set:function(t){if("string"==typeof t){var i=this.interpolationTypes[t];if(!i)return void console.error("[AnimationMixin] Invalid interpolation type "+t);this._set("interpolation",new i(this))}else this._set("interpolation",t)}},isAnimating:!1},initialize:function(){this._pointToPointAnimation=new e(this.view.viewingMode),this._targetCameraAnimated=this.cameras.current.copy(),this.animationId=0},getDefaults:function(){return{interpolation:"linear"}},easeInOutInterpLinear:function(t,i,n,e,a,r,s){var o=s.dist(n,e),h=.1/this.renderUnitInMeters;if(h>o)return s.set(e,n),0;var m=Math.min(Math.sqrt(o*t),i);r=Math.min(r+t*a,m);var u=Math.min(r/o*a,1);return s.set(s.lerp(n,e,u),n),r},step:function(t){this.inherited(arguments);var i=this.currentHasReachedTarget();this._stepTimeAnimation(t/1e3,i),i&&this.pan.updateContinuous(t)},startAnimation:function(t,i){this.animationId++,this._startTimeAnimation(t,i),this.animationStarted()},_stepTimeAnimation:function(t,i){if(this.isAnimating){if(i)return void this.setCurrentToTarget(!0);var n=this._pointToPointAnimation;n.step(t,this.cameras.current),n.finished?(this.isAnimating=!1,this._updateTargetCenterForElevationWhenIdle()||(this.isAnimating=!0,this.setCurrentToTarget(!0))):this.currentChanged()}},_startTimeAnimation:function(t,i){this.isAnimating=!0;var e=t&&t.internalUpdate,r={};e?(r.apex=null,r.duration=.3,r.easing=a.outExpo):r.apex={maximumDistance:this.view.constraints.altitude.max/6},t=n.mixin(r,"object"==typeof t?t:null);var s;s=i?this._targetCameraAnimated:this.cameras.target,this._pointToPointAnimation.update(this.cameras.current,s,t)},animationStarted:function(){i.emit(this,"animationStarted")},stop:function(){this.pan&&this.pan.continuous&&this.pan.continuous.stop(),this.currentHasAlmostReachedTarget()?this.currentReachedTarget(!1,!0):(this.cameras.target.copyFrom(this.cameras.current),this.targetAndCurrentChanged(!0))},currentReachedTarget:function(){this.inherited(arguments),this.isAnimating=!1}});return r});