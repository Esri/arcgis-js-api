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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../geometry","../../../../Viewpoint","../../../../core/Accessor","../../../../core/screenUtils","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../../viewpointUtils","../../../navigation/PanPlanarMomentumEstimator"],function(t,e,i,o,n,m,a,r,s,u,p,c,v){return function(t){function e(e){var i=t.call(this)||this;return i.animationTime=0,i.momentumEstimator=new v.PanPlanarMomentumEstimator(500,6,.92),i.momentum=null,i.tmpMomentum=p.vec3f64.create(),i.momentumFinished=!1,i.viewpoint=new m({targetGeometry:new n.Point,scale:0,rotation:0}),i.watch("momentumFinished",function(t){t&&i.navigation.stop()}),i}return i(e,t),e.prototype.begin=function(t,e){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(e),this.previousDrag=e},e.prototype.update=function(t,e){this.addToEstimator(e);var i=e.center.x,o=e.center.y,n=this.previousDrag;i=n?n.center.x-i:-i,o=n?o-n.center.y:o,t.viewpoint=c.translateBy(this.viewpoint,t.viewpoint,[i||0,o||0]),this.previousDrag=e},e.prototype.end=function(t,e){this.addToEstimator(e),this.momentum=this.momentumEstimator.evaluateMomentum(),this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()},e.prototype.addToEstimator=function(t){var e=t.center.x,i=t.center.y,o=r.createScreenPointArray(-e,i),n=p.vec3f64.fromValues(-e,i,0);this.momentumEstimator.add(o,n,.001*t.timestamp)},e.prototype.onAnimationUpdate=function(t){var e=this;this.navigation.animationManager.animateContinous(t.viewpoint,function(i,o){e.momentumFinished=!e.momentum||e.momentum.isFinished(e.animationTime);var n=.001*o;if(!e.momentumFinished){var m=e.momentum.valueDelta(e.animationTime,n);u.vec3.scale(e.tmpMomentum,e.momentum.direction,m),t.viewpoint=c.translateBy(i,i,e.tmpMomentum)}e.animationTime+=n})},e.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())},o([s.property()],e.prototype,"momentumFinished",void 0),o([s.property()],e.prototype,"viewpoint",void 0),o([s.property()],e.prototype,"navigation",void 0),e=o([s.subclass("esri.views.2d.navigation.actions.Pan")],e)}(s.declared(a))});