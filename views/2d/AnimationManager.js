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

define(["../../core/declare","../../core/Accessoire","../../core/Scheduler","../../core/now","../ViewAnimation","./unitBezier","./viewpointUtils"],function(t,i,e,s,n,a,o){var r=function(t,i,e,s){var n=t.targetGeometry,o=i.targetGeometry;s?"string"==typeof s&&(s=a.parse(s)||a.ease):s=a.ease,this.easing=s,this.duration=e,this.sCenterX=n.x,this.sCenterY=n.y,this.sScale=t.scale,this.sRotation=t.rotation,this.tCenterX=o.x,this.tCenterY=o.y,this.tScale=i.scale,this.tRotation=i.rotation,this.dCenterX=this.tCenterX-this.sCenterX,this.dCenterY=this.tCenterY-this.sCenterY,this.dScale=this.tScale-this.sScale,this.dRotation=this.tRotation-this.sRotation,this.dRotation>180?this.dRotation-=360:this.dRotation<-180&&(this.dRotation+=360)};r.prototype.applyRatio=function(t,i){var e,s,n,a,o=this.easing(i);i>=1?(e=this.tCenterX,s=this.tCenterY,n=this.tRotation,a=this.tScale):(e=this.sCenterX+o*this.dCenterX,s=this.sCenterY+o*this.dCenterY,n=this.sRotation+o*this.dRotation,a=this.sScale+o*this.dScale),t.targetGeometry.x=e,t.targetGeometry.y=s,t.scale=a,t.rotation=n};var h=t(i,{constructor:function(){this._updateTask=e.addFrameTask({postRender:this._postRender.bind(this)}),this._updateTask.pause()},getDefaults:function(){return{viewpoint:o.create()}},duration:200,transition:null,easing:a.ease,animateTo:function(t,i,e){var a=this.viewpoint;o.copy(a,i),this.transition=new r(this.viewpoint,t,e&&e.duration||this.duration,e&&e.easing||this.easing),this.animation&&(this.animation.stop(),this.animation=null);var h=this.animation=new n({target:t.clone()});return h.always(function(){this._updateTask&&(this._updateTask.pause(),this.animation=null)}.bind(this)),this._startTime=s(),this._updateTask.resume(),h},_postRender:function(t){var i=this.animation;if(!i||i.state===n.STOPPED)return void this._updateTask.pause();var e=s()-this._startTime,a=e/this.transition.duration,o=a>=1;this.transition.applyRatio(this.viewpoint,a),this.animation._dfd.progress(this.viewpoint),o&&this.animation.finish()}});return h});