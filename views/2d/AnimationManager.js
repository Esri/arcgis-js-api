// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["../../Viewpoint","../../core/Accessor","../../core/scheduling","../../core/now","../../geometry/Point","../ViewAnimation","./unitBezier","./viewpointUtils"],function(t,i,e,n,s,a,o,h){var r=function(t,i,e,n){var s=t.targetGeometry,a=i.targetGeometry;n?"string"==typeof n&&(n=o.parse(n)||o.ease):n=o.ease,this.easing=n,this.duration=e,this.sCenterX=s.x,this.sCenterY=s.y,this.sScale=t.scale,this.sRotation=t.rotation,this.tCenterX=a.x,this.tCenterY=a.y,this.tScale=i.scale,this.tRotation=i.rotation,this.dCenterX=this.tCenterX-this.sCenterX,this.dCenterY=this.tCenterY-this.sCenterY,this.dScale=this.tScale-this.sScale,this.dRotation=this.tRotation-this.sRotation,this.dRotation>180?this.dRotation-=360:this.dRotation<-180&&(this.dRotation+=360)};return r.prototype.applyRatio=function(t,i){var e,n,s,a,o=this.easing(i);i>=1?(e=this.tCenterX,n=this.tCenterY,s=this.tRotation,a=this.tScale):(e=this.sCenterX+o*this.dCenterX,n=this.sCenterY+o*this.dCenterY,s=this.sRotation+o*this.dRotation,a=this.sScale+o*this.dScale),t.targetGeometry.x=e,t.targetGeometry.y=n,t.scale=a,t.rotation=s},i.createSubclass({constructor:function(){this.viewpoint=new t({targetGeometry:new s,scale:0,rotation:0}),this._updateTask=e.addFrameTask({postRender:this._postRender.bind(this)}),this._updateTask.pause()},properties:{animation:null,duration:{value:200},transition:{value:null},easing:{value:o.ease},view:null,viewpoint:null},animate:function(t,i,e){this.stop();var s=this.viewpoint;h.copy(s,i),this.transition=new r(this.viewpoint,t.target,e&&e.duration||this.duration,e&&e.easing||this.easing);var a=function(){this.animation===t&&this._updateTask&&("finished"===t.state&&(this.transition.applyRatio(this.viewpoint,1),this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())),this.animation=null,this.updateFunction=null)}.bind(this);return t.when(a,a),this._startTime=n(),this._updateTask.resume(),this.animation=t,t},animateContinous:function(t,i){this.stop(),this.updateFunction=i,this.viewpoint=t;var e=new a({target:t.clone()}),s=function(){this.animation===e&&this._updateTask&&(this.animation=null,this.updateFunction=null)}.bind(this);return e.when(s,s),this._startTime=n(),this._updateTask.resume(),this.animation=e,e},stop:function(){this.animation&&(this.animation.stop(),this.animation=null,this.updateFunction=null)},_postRender:function(t){var i=this.animation;if(!i||i.state===a.STOPPED)return void this._updateTask.pause();if(this.updateFunction)this.updateFunction(this.viewpoint,t.deltaTime);else{var e=n()-this._startTime,s=e/this.transition.duration,o=s>=1;this.transition.applyRatio(this.viewpoint,s),o&&this.animation.finish()}this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())}})});