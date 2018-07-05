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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../viewpointUtils","../../libs/gl-matrix/vec2","../../../navigation/RotationMomentumEstimator","../../../navigation/ZoomMomentumEstimator"],function(t,o,i,e,n,a,m,s,r,u){return function(t){function o(o){var i=t.call(this,o)||this;return i._animationTime=0,i._momentumFinished=!1,i._rotateMomentumEstimator=new r.RotationMomentumEstimator(.6,.15,.95),i._rotationDirection=1,i._zoomDirection=1,i._zoomFirst=null,i._zoomMomentumEstimator=new u.ZoomMomentumEstimator,i.zoomMomentum=null,i.rotateMomentum=null,i.viewpoint=m.create(),i.watch("_momentumFinished",function(t){t&&i.navigation.stop()}),i}return i(o,t),o.prototype.begin=function(t,o){this.navigation.begin(),this._rotateMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._startTimestamp=o.timestamp,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1)},o.prototype.update=function(t,o){if(!(o.timestamp-this._startTimestamp<100)){var i=o.angle,e=o.radius,n=o.center,a=180*Math.abs(i-this._startAngle)/Math.PI,m=Math.abs(e-this._startRadius);if(!(a<=1&&m<=1)){var s=this._startRadius/e;if(this._previousRadius){var r=e/this._previousRadius,u=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=u>=0?1:-1,this._zoomDirection=r>=1?1:-1;var h=m-a;null==this._zoomFirst&&(this._zoomFirst=h>0),this._zoomFirst?u=0:null!=this._zoomFirst&&t.constraints.rotationEnabled&&Math.abs(u)>.5&&this.addToRotateEstimator(o.angle-this._startAngle,o.timestamp),this.addToZoomEstimator(o,s),this._center=n,this.navigation.setViewpoint([n.x,n.y],1/r,u)}this._previousAngle=o.angle,this._previousRadius=o.radius}}},o.prototype.end=function(t,o){this._zoomFirst=null,this.rotateMomentum=this._rotateMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()},o.prototype.addToRotateEstimator=function(t,o){this._rotateMomentumEstimator.add(t,.001*o)},o.prototype.addToZoomEstimator=function(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp)},o.prototype.canZoomIn=function(t){var o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i},o.prototype.canZoomOut=function(t){var o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i},o.prototype.onAnimationUpdate=function(t){var o=this;this.navigation.animationManager.animateContinous(t.viewpoint,function(i,e){var n=!o.canZoomIn(t)&&o._zoomDirection>1||!o.canZoomOut(t)&&o._zoomDirection<1,a=!o.rotateMomentum||o.rotateMomentum.isFinished(o._animationTime),r=n||!o.zoomMomentum||o.zoomMomentum.isFinished(o._animationTime),u=.001*e;if(o._momentumFinished=a&&r,!o._momentumFinished){var h=o.rotateMomentum?Math.abs(o.rotateMomentum.valueDelta(o._animationTime,u))*o._rotationDirection*180/Math.PI:0,p=o.zoomMomentum?Math.abs(o.zoomMomentum.valueDelta(o._animationTime,u)):1,c=s.create(),d=s.create();o._center&&(s.set(c,o._center.x,o._center.y),m.getPaddingScreenTranslation(d,t.size,t.padding),s.add(c,c,d),m.scaleAndRotateBy(i,t.viewpoint,p,h,c,t.size))}o._animationTime+=u})},o.prototype.stopMomentumNavigation=function(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotateMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())},e([a.property()],o.prototype,"_momentumFinished",void 0),e([a.property()],o.prototype,"viewpoint",void 0),e([a.property()],o.prototype,"navigation",void 0),o=e([a.subclass("esri.views.2d.navigation.actions.Pinch")],o)}(a.declared(n))});