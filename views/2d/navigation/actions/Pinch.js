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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Accessor","../../viewpointUtils","../../../navigation/Momentum","../../libs/gl-matrix/vec2"],function(t,o,e,i,n,a,m,r,s){var u=function(t){function o(o){var e=t.call(this,o)||this;return e.animationTime=0,e.momentumFinished=!1,e.rotateMomentumEstimator=new r.RotationMomentumEstimator(.05,6,.15,.95),e.rotateMomentum=null,e.rotationDirection=1,e.zoomMomentumEstimator=new r.ZoomMomentumEstimator(.05),e.zoomMomentum=null,e.zoomDirection=1,e.viewpoint=m.create(),e.watch("momentumFinished",function(t){t&&e.navigation.stop()}),e}return e(o,t),o.prototype.begin=function(t,o){this.navigation.begin(),this.rotateMomentumEstimator.reset(),this.zoomMomentumEstimator.reset(),this.addToRotateEstimator(o,0);var e=o.startState.radius/o.currentState.radius;this.addToZoomEstimator(o,e)},o.prototype.update=function(t,o){var e=o.currentState,i=e.angle,n=e.radius,a=e.center,m=o.previousState,r=m.radius,s=m.angle,u=o.startState.radius/n;if(r){var c=n/r,d=180*(i-s)/Math.PI;this.rotationDirection=d>=0?1:-1,this.zoomDirection=c>=1?1:-1,t.constraints.rotationEnabled||(d=0),this.addToRotateEstimator(o,d),this.addToZoomEstimator(o,u),this.center=a,this.navigation.setViewpoint([a.x,a.y],1/c,d)}},o.prototype.end=function(t,o){this.addToRotateEstimator(o,0);var e=o.startState.radius/o.currentState.radius;this.addToZoomEstimator(o,e),this.rotateMomentum=this.rotateMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this.zoomMomentumEstimator.evaluateMomentum(),this.animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()},o.prototype.addToRotateEstimator=function(t,o){this.rotateMomentumEstimator.add(o,.001*t.currentState.timestamp)},o.prototype.addToZoomEstimator=function(t,o){this.zoomMomentumEstimator.add(o,.001*t.currentState.timestamp)},o.prototype.canZoomIn=function(t){var o=t.scale,e=t.constraints.effectiveMaxScale;return 0===e||o>e},o.prototype.canZoomOut=function(t){var o=t.scale,e=t.constraints.effectiveMinScale;return 0===e||e>o},o.prototype.onAnimationUpdate=function(t){var o=this;this.navigation.animationManager.animateContinous(t.viewpoint,function(e,i){var n=!o.canZoomIn(t)&&o.zoomDirection>1||!o.canZoomOut(t)&&o.zoomDirection<1;o.momentumFinished=!o.rotateMomentum||o.rotateMomentum.isFinished(o.animationTime)||n;var a=.001*i;if(o.notifyChange("momentumFinished"),!o.momentumFinished){var r=Math.abs(o.rotateMomentum.valueDelta(o.animationTime,a))*o.rotationDirection*2,u=o.zoomMomentum?Math.abs(o.zoomMomentum.valueDelta(o.animationTime,a)):1,c=s.create(),d=s.create();s.set(c,o.center.x,o.center.y),m.getPaddingScreenTranslation(d,t.size,t.padding),s.add(c,c,d),m.scaleAndRotateBy(e,t.viewpoint,u,r,c,t.size)}o.animationTime+=a})},o.prototype.stopMomentumNavigation=function(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this.rotateMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this.zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())},i([n.property()],o.prototype,"momentumFinished",void 0),i([n.property()],o.prototype,"viewpoint",void 0),i([n.property()],o.prototype,"navigation",void 0),o=i([n.subclass("esri.views.2d.navigation.actions.Pinch")],o)}(n.declared(a));return u});