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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../geometry","../../../../Viewpoint","../../../../core/Accessor","../../../../core/screenUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../viewpointUtils","../../../navigation/PanPlanarMomentumEstimator"],(function(t,e,i,n,o,m,a,r,s,u,c,p){"use strict";return function(t){function e(e){var i=t.call(this,e)||this;return i.animationTime=0,i.momentumEstimator=new p.PanPlanarMomentumEstimator(500,6,.92),i.momentum=null,i.tmpMomentum=u.vec3f64.create(),i.momentumFinished=!1,i.viewpoint=new o({targetGeometry:new n.Point,scale:0,rotation:0}),i.watch("momentumFinished",(function(t){t&&i.navigation.stop()})),i}return i.__extends(e,t),e.prototype.begin=function(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this.previousDrag=e},e.prototype.update=function(t,e){this.addToEstimator(e);var i=e.center.x,n=e.center.y,o=this.previousDrag;i=o?o.center.x-i:-i,n=o?n-o.center.y:n,t.viewpoint=c.translateBy(this.viewpoint,t.viewpoint,[i||0,n||0]),this.previousDrag=e},e.prototype.end=function(t,e){this.addToEstimator(e);var i=t.navigation.momentumEnabled;this.momentum=i?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()},e.prototype.addToEstimator=function(t){var e=t.center.x,i=t.center.y,n=a.createScreenPointArray(-e,i),o=u.vec3f64.fromValues(-e,i,0);this.momentumEstimator.add(n,o,.001*t.timestamp)},e.prototype.onAnimationUpdate=function(t){var e=this;this.navigation.animationManager.animateContinous(t.viewpoint,(function(i,n){e.momentumFinished=!e.momentum||e.momentum.isFinished(e.animationTime);var o=.001*n;if(!e.momentumFinished){var m=e.momentum.valueDelta(e.animationTime,o);s.vec3.scale(e.tmpMomentum,e.momentum.direction,m),c.translateBy(i,i,e.tmpMomentum),t.constraints.constrainByGeometry(i)}e.animationTime+=o}))},e.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())},i.__decorate([r.property()],e.prototype,"momentumFinished",void 0),i.__decorate([r.property()],e.prototype,"viewpoint",void 0),i.__decorate([r.property()],e.prototype,"navigation",void 0),e=i.__decorate([r.subclass("esri.views.2d.navigation.actions.Pan")],e)}(m)}));