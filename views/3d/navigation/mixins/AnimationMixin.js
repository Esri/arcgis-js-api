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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../../../core/Accessor","dojo/on"],function(t,e){var n=t.createSubclass([],{declaredClass:"esri.views.3d.navigation.mixins.AnimationMixin",properties:{interpolation:{set:function(t){if("string"==typeof t){var e=this.interpolationTypes[t];if(!e)return void console.error("[AnimationMixin] Invalid interpolation type "+t);this._set("interpolation",new e(this))}else this._set("interpolation",t)}}},getDefaults:function(){return{interpolation:"linear"}},easeInOutInterpLinear:function(t,e,n,i,r,a,s){var o=s.dist(n,i),h=.1/this.renderUnitInMeters;if(h>o)return s.set(i,n),0;var u=Math.min(Math.sqrt(o*t),e);a=Math.min(a+t*r,u);var c=Math.min(a/o*r,1);return s.set(s.lerp(n,i,c),n),a},step:function(t){this.inherited(arguments),this.currentHasReachedTarget()?this.pan.updateContinuous(t):(this.currentHasAlmostReachedTarget()||this.interpolation.interpolate(this.cameras.current,this.cameras.target,.001*t),this.currentHasAlmostReachedTarget()?this.setCurrentToTarget(!0):this.currentChanged())},animationStarted:function(){e.emit(this,"animationStarted")},stop:function(){this.pan&&this.pan.continuous&&this.pan.continuous.stop(),this.currentHasAlmostReachedTarget()?this.currentReachedTarget(!0):this.setCurrentToTarget()}});return n});