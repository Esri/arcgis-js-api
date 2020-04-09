// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../geometry","../../Viewpoint","../../core/Accessor","../../core/scheduling","../../core/accessorSupport/decorators","../ViewAnimation","./unitBezier","./viewpointUtils"],(function(t,i,e,n,o,s,a,r,p,h,u,d){Object.defineProperty(i,"__esModule",{value:!0});var c=function(){function t(t,i,e,n){var o=t.targetGeometry,s=i.targetGeometry;n?"string"==typeof n&&(n=u.parse(n)||u.easingFunctions.ease):n=u.easingFunctions.ease,this.easing=n,this.duration=e,this.sCenterX=o.x,this.sCenterY=o.y,this.sScale=t.scale,this.sRotation=t.rotation,this.tCenterX=s.x,this.tCenterY=s.y,this.tScale=i.scale,this.tRotation=i.rotation,this.dCenterX=this.tCenterX-this.sCenterX,this.dCenterY=this.tCenterY-this.sCenterY,this.dScale=this.tScale-this.sScale,this.dRotation=this.tRotation-this.sRotation,this.dRotation>180?this.dRotation-=360:this.dRotation<-180&&(this.dRotation+=360)}return t.prototype.applyRatio=function(t,i){var e,n,o,s,a=this.easing(i);i>=1?(e=this.tCenterX,n=this.tCenterY,o=this.tRotation,s=this.tScale):(e=this.sCenterX+a*this.dCenterX,n=this.sCenterY+a*this.dCenterY,o=this.sRotation+a*this.dRotation,s=this.sScale+a*this.dScale),t.targetGeometry.x=e,t.targetGeometry.y=n,t.scale=s,t.rotation=o},t}(),l=function(t){function i(i){var e=t.call(this,i)||this;return e.duration=200,e.transition=null,e.easing=u.easingFunctions.ease,e.view=null,e.viewpoint=null,e.viewpoint=new s({targetGeometry:new o.Point,scale:0,rotation:0}),e._updateTask=r.addFrameTask({postRender:e._postRender.bind(e)}),e._updateTask.pause(),e}return n(i,t),i.prototype.destroy=function(){this._updateTask.remove(),this._updateTask=null},i.prototype.animate=function(t,i,e){var n=this;this.stop();var o=this.viewpoint;d.copy(o,i),this.transition=new c(this.viewpoint,t.target,e&&e.duration||this.duration,e&&e.easing||this.easing);var s=function(){n.animation===t&&n._updateTask&&("finished"===t.state&&(n.transition.applyRatio(n.viewpoint,1),n.view.state&&(n.view.state.viewpoint=n.viewpoint.clone())),n.animation=null,n.updateFunction=null)};return t.when(s,s),this._startTime=r.now(),this._updateTask.resume(),this.animation=t,t},i.prototype.animateContinous=function(t,i){var e=this;this.stop(),this.updateFunction=i,this.viewpoint=t;var n=new h({target:t.clone()}),o=function(){e.animation===n&&e._updateTask&&(e.animation=null,e.updateFunction=null)};return n.when(o,o),this._startTime=r.now(),this._updateTask.resume(),this.animation=n,n},i.prototype.stop=function(){this.animation&&(this.animation.stop(),this.animation=null,this.updateFunction=null)},i.prototype._postRender=function(t){var i=this.animation;if(i&&i.state!==h.State.STOPPED){if(this.updateFunction)this.updateFunction(this.viewpoint,t.deltaTime);else{var e=(r.now()-this._startTime)/this.transition.duration,n=e>=1;this.transition.applyRatio(this.viewpoint,e),n&&this.animation.finish()}this.view.state&&(this.view.state.viewpoint=this.viewpoint.clone())}else this._updateTask.pause()},e([p.property()],i.prototype,"animation",void 0),e([p.property()],i.prototype,"duration",void 0),e([p.property()],i.prototype,"transition",void 0),e([p.property()],i.prototype,"easing",void 0),e([p.property()],i.prototype,"view",void 0),e([p.property()],i.prototype,"viewpoint",void 0),i=e([p.subclass("esri.views.2d.AnimationManager")],i)}(p.declared(a));i.default=l}));