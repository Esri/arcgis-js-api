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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/Scheduler","../../core/now","../ViewAnimation","./unitBezier","./viewpointUtils"],function(t,i,n,s,e,a){var o=function(t,i,n,s){var a=t.targetGeometry,o=i.targetGeometry;s?"string"==typeof s&&(s=e.parse(s)||e.ease):s=e.ease,this.easing=s,this.duration=n,this.sCenterX=a.x,this.sCenterY=a.y,this.sScale=t.scale,this.sRotation=t.rotation,this.tCenterX=o.x,this.tCenterY=o.y,this.tScale=i.scale,this.tRotation=i.rotation,this.dCenterX=this.tCenterX-this.sCenterX,this.dCenterY=this.tCenterY-this.sCenterY,this.dScale=this.tScale-this.sScale,this.dRotation=this.tRotation-this.sRotation,this.dRotation>180?this.dRotation-=360:this.dRotation<-180&&(this.dRotation+=360)};o.prototype.applyRatio=function(t,i){var n,s,e,a,o=this.easing(i);i>=1?(n=this.tCenterX,s=this.tCenterY,e=this.tRotation,a=this.tScale):(n=this.sCenterX+o*this.dCenterX,s=this.sCenterY+o*this.dCenterY,e=this.sRotation+o*this.dRotation,a=this.sScale+o*this.dScale),t.targetGeometry.x=n,t.targetGeometry.y=s,t.scale=a,t.rotation=e};var h=t.createSubclass({constructor:function(){this._updateTask=i.addFrameTask({postRender:this._postRender.bind(this)}),this._updateTask.pause()},getDefaults:function(){return{viewpoint:a.create()}},properties:{animation:null,duration:{value:200},transition:{value:null},easing:{value:e.ease},viewpoint:null},animateTo:function(t,i,e){var h=this.viewpoint;a.copy(h,i),this.transition=new o(this.viewpoint,t,e&&e.duration||this.duration,e&&e.easing||this.easing),this.animation&&(this.animation.stop(),this.animation=null);var r=this.animation=new s({target:t.clone()});return r.always(function(){this._updateTask&&(this._updateTask.pause(),this.animation=null)}.bind(this)),this._startTime=n(),this._updateTask.resume(),r},animateContinous:function(t,i){this.updateFunction=i,this.viewpoint=t,this.animation&&(this.animation.stop(),this.animation=null);var e=this.animation=new s({target:t.clone()});return e.always(function(){this._updateTask&&(this._updateTask.pause(),this.animation=null)}.bind(this)),this._startTime=n(),this._updateTask.resume(),e},stop:function(){this.animation&&(this.animation.finish(),this.updateFunction=null,this.animation=null)},_postRender:function(t){var i=this.animation;if(!i||i.state===s.STOPPED)return void this._updateTask.pause();if(this.updateFunction)this.updateFunction(this.viewpoint);else{var e=n()-this._startTime,a=e/this.transition.duration,o=a>=1;this.transition.applyRatio(this.viewpoint,a),o&&this.animation.finish()}this.animation._dfd.progress(this.viewpoint)}});return h});