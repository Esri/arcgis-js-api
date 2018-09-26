// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/scheduling","../../core/now","../ViewAnimation","./unitBezier","./viewpointUtils"],function(t,i,s,n,e,a){var o=function(t,i,s,n){var a=t.targetGeometry,o=i.targetGeometry;n?"string"==typeof n&&(n=e.parse(n)||e.ease):n=e.ease,this.easing=n,this.duration=s,this.sCenterX=a.x,this.sCenterY=a.y,this.sScale=t.scale,this.sRotation=t.rotation,this.tCenterX=o.x,this.tCenterY=o.y,this.tScale=i.scale,this.tRotation=i.rotation,this.dCenterX=this.tCenterX-this.sCenterX,this.dCenterY=this.tCenterY-this.sCenterY,this.dScale=this.tScale-this.sScale,this.dRotation=this.tRotation-this.sRotation,this.dRotation>180?this.dRotation-=360:this.dRotation<-180&&(this.dRotation+=360)};return o.prototype.applyRatio=function(t,i){var s,n,e,a,o=this.easing(i);i>=1?(s=this.tCenterX,n=this.tCenterY,e=this.tRotation,a=this.tScale):(s=this.sCenterX+o*this.dCenterX,n=this.sCenterY+o*this.dCenterY,e=this.sRotation+o*this.dRotation,a=this.sScale+o*this.dScale),t.targetGeometry.x=s,t.targetGeometry.y=n,t.scale=a,t.rotation=e},t.createSubclass({constructor:function(){this._updateTask=i.addFrameTask({postRender:this._postRender.bind(this)}),this._updateTask.pause()},getDefaults:function(){return{viewpoint:a.create()}},properties:{animation:null,duration:{value:200},transition:{value:null},easing:{value:e.ease},viewpoint:null},animate:function(t,i,n){this.stop();var e=this.viewpoint;a.copy(e,i),this.transition=new o(this.viewpoint,t.target,n&&n.duration||this.duration,n&&n.easing||this.easing);var h=function(){this.animation===t&&this._updateTask&&("finished"===t.state&&(this.transition.applyRatio(this.viewpoint,1),this.animation._dfd.progress(this.viewpoint)),this._updateTask.pause(),this.animation=null,this.updateFunction=null)}.bind(this);return t.when(h,h),this._startTime=s(),this._updateTask.resume(),this.animation=t,t},animateContinous:function(t,i){this.stop(),this.updateFunction=i,this.viewpoint=t;var e=new n({target:t.clone()}),a=function(){this.animation===e&&this._updateTask&&(this._updateTask.pause(),this.animation=null,this.updateFunction=null)}.bind(this);return e.when(a,a),this._startTime=s(),this._updateTask.resume(),this.animation=e,e},stop:function(){this.animation&&(this.animation.stop(),this.animation=null,this.updateFunction=null)},_postRender:function(t){var i=this.animation;if(!i||i.state===n.STOPPED)return void this._updateTask.pause();if(this.updateFunction)this.updateFunction(this.viewpoint,t.deltaTime);else{var e=s()-this._startTime,a=e/this.transition.duration,o=a>=1;this.transition.applyRatio(this.viewpoint,a),o&&this.animation.finish()}this.animation._dfd.progress(this.viewpoint)}})});