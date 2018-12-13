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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/scheduling","../../core/now","../ViewAnimation","./unitBezier","./viewpointUtils"],function(t,i,e,s,n,a){var o=function(t,i,e,s){var a=t.targetGeometry,o=i.targetGeometry;s?"string"==typeof s&&(s=n.parse(s)||n.ease):s=n.ease,this.easing=s,this.duration=e,this.sCenterX=a.x,this.sCenterY=a.y,this.sScale=t.scale,this.sRotation=t.rotation,this.tCenterX=o.x,this.tCenterY=o.y,this.tScale=i.scale,this.tRotation=i.rotation,this.dCenterX=this.tCenterX-this.sCenterX,this.dCenterY=this.tCenterY-this.sCenterY,this.dScale=this.tScale-this.sScale,this.dRotation=this.tRotation-this.sRotation,this.dRotation>180?this.dRotation-=360:this.dRotation<-180&&(this.dRotation+=360)};return o.prototype.applyRatio=function(t,i){var e,s,n,a,o=this.easing(i);i>=1?(e=this.tCenterX,s=this.tCenterY,n=this.tRotation,a=this.tScale):(e=this.sCenterX+o*this.dCenterX,s=this.sCenterY+o*this.dCenterY,n=this.sRotation+o*this.dRotation,a=this.sScale+o*this.dScale),t.targetGeometry.x=e,t.targetGeometry.y=s,t.scale=a,t.rotation=n},t.createSubclass({constructor:function(){this._updateTask=i.addFrameTask({postRender:this._postRender.bind(this)}),this._updateTask.pause()},getDefaults:function(){return{viewpoint:a.create()}},properties:{animation:null,duration:{value:200},transition:{value:null},easing:{value:n.ease},view:null,viewpoint:null},animate:function(t,i,s){this.stop();var n=this.viewpoint;a.copy(n,i),this.transition=new o(this.viewpoint,t.target,s&&s.duration||this.duration,s&&s.easing||this.easing);var h=function(){this.animation===t&&this._updateTask&&("finished"===t.state&&(this.transition.applyRatio(this.viewpoint,1),this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())),this._updateTask.pause(),this.animation=null,this.updateFunction=null)}.bind(this);return t.when(h,h),this._startTime=e(),this._updateTask.resume(),this.animation=t,t},animateContinous:function(t,i){this.stop(),this.updateFunction=i,this.viewpoint=t;var n=new s({target:t.clone()}),a=function(){this.animation===n&&this._updateTask&&(this._updateTask.pause(),this.animation=null,this.updateFunction=null)}.bind(this);return n.when(a,a),this._startTime=e(),this._updateTask.resume(),this.animation=n,n},stop:function(){this.animation&&(this.animation.stop(),this.animation=null,this.updateFunction=null)},_postRender:function(t){var i=this.animation;if(!i||i.state===s.STOPPED)return void this._updateTask.pause();if(this.updateFunction)this.updateFunction(this.viewpoint,t.deltaTime);else{var n=e()-this._startTime,a=n/this.transition.duration,o=a>=1;this.transition.applyRatio(this.viewpoint,a),o&&this.animation.finish()}this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())}})});