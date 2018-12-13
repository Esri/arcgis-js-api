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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/gl-matrix","../../viewpointUtils","../../../navigation/PanPlanarMomentumEstimator"],function(t,i,e,n,o,m,a,r,s){return function(t){function i(i){var e=t.call(this)||this;return e.animationTime=0,e.momentumEstimator=new s.PanPlanarMomentumEstimator(500,6,.92),e.momentum=null,e.tmpMomentum=a.vec3f64.create(),e.momentumFinished=!1,e.viewpoint=r.create(),e.watch("momentumFinished",function(t){t&&e.navigation.stop()}),e}return e(i,t),i.prototype.begin=function(t,i){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(i),this.previousDrag=i},i.prototype.update=function(t,i){this.addToEstimator(i);var e=i.center.x,n=i.center.y,o=this.previousDrag;e=o?o.center.x-e:-e,n=o?n-o.center.y:n,t.viewpoint=r.translateBy(this.viewpoint,t.viewpoint,[e||0,n||0]),this.previousDrag=i},i.prototype.end=function(t,i){this.addToEstimator(i),this.momentum=this.momentumEstimator.evaluateMomentum(),this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()},i.prototype.addToEstimator=function(t){var i=t.center.x,e=t.center.y,n=a.vec3f64.fromValues(-i,e,0);this.momentumEstimator.add(n,n,.001*t.timestamp)},i.prototype.onAnimationUpdate=function(t){var i=this;this.navigation.animationManager.animateContinous(t.viewpoint,function(e,n){i.momentumFinished=!i.momentum||i.momentum.isFinished(i.animationTime);var o=.001*n;if(!i.momentumFinished){var m=i.momentum.valueDelta(i.animationTime,o);a.vec3.scale(i.tmpMomentum,i.momentum.direction,m),t.viewpoint=r.translateBy(e,e,i.tmpMomentum)}i.animationTime+=o})},i.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())},n([m.property()],i.prototype,"momentumFinished",void 0),n([m.property()],i.prototype,"viewpoint",void 0),n([m.property()],i.prototype,"navigation",void 0),i=n([m.subclass("esri.views.2d.navigation.actions.Pan")],i)}(m.declared(o))});