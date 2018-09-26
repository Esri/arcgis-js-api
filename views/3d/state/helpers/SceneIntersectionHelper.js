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

define(["require","exports","../../lib/gl-matrix","../../webgl-engine/lib/Selector","../../webgl-engine/lib/SelectorUtils"],function(e,t,i,r,n){function o(e,t){if(!e)return!1;var i=e.minResult;return!!i&&i.getIntersectionPoint(t)}function c(e,t,r,n,o){r?i.vec3d.set(t.eye,n):i.vec3d.unproject(i.vec3d.createFrom(e[0],e[1],0),t.viewMatrix,t.projectionMatrix,t.fullViewport,n),i.vec3d.unproject(i.vec3d.createFrom(e[0],e[1],1),t.viewMatrix,t.projectionMatrix,t.fullViewport,o)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t,n){this.viewingMode=e,this.layerProvider=t,this.viewPropertyProvider=n,this.tmpR0=i.vec3d.create(),this.tmpR1=i.vec3d.create(),this.tmpScreenPoint=i.vec2d.create(),this.tmpScreenPointHud=i.vec2d.create(),this.tmpPointHud=i.vec3d.create(),this.tmpSelector=new r(this.viewingMode),this.externalIntersectionHandlers=new Set,this.intersectionTolerance=r.DEFAULT_TOLERANCE,this.validateHUDSelector=new r(this.viewingMode),this.validateHUDSelector.enableHUDSelection=!1}return e.prototype.getPickRay=function(e,t,r){void 0===t&&(t=i.vec3d.create()),void 0===r&&(r=i.vec3d.create()),c(e,this.viewPropertyProvider.camera(),!1,t,r)},e.prototype.pickPointInScreen=function(e,t,i){return c(e,this.viewPropertyProvider.camera(),!1,this.tmpR0,this.tmpR1),this.pickPointFromSegment(this.tmpR0,this.tmpR1,t,i)},e.prototype.pickPointFromSegment=function(e,t,i,r){return r=this.computeIntersection(e,t,null,null,!1,r||this.tmpSelector),o(r,i)},e.prototype.pickFreePointInScreen=function(e,t){c(e,this.viewPropertyProvider.camera(),!1,this.tmpR0,this.tmpR1),this.pickFreePointFromSegment(this.tmpR0,this.tmpR1,t)},e.prototype.pickFreePointFromSegment=function(e,t,r){i.vec3d.set(e,this.tmpR0),i.vec3d.set(t,this.tmpR1),i.vec3d.subtract(this.tmpR1,this.tmpR0),i.vec3d.normalize(this.tmpR1);var n=this.viewPropertyProvider.extent(),o={x:n.xmax-n.xmin,y:n.ymax-n.ymin,z:8*Math.max(n.xmax-n.xmin,n.ymax-n.ymin)},c=Math.max(o.x,o.y,o.z),s=this.viewPropertyProvider.camera(),a=Math.max(0,n.xmin-s.eye[0],s.eye[0]-n.xmax),h=Math.max(0,n.ymin-s.eye[1],s.eye[1]-n.ymax),p=Math.sqrt(a*a+h*h),d=Math.abs(s.relativeElevation)+Number.MIN_VALUE,l=Math.pow(Math.max(0,Math.log(c/d)),2),m=c/Math.max(1,l);m=Math.max(m,Math.min(p,c)),i.vec3d.scale(this.tmpR1,m),i.vec3d.add(this.tmpR0,this.tmpR1,r)},e.prototype.pickSelectorInScreen=function(e,t,i,r){return void 0===r&&(r=!1),c(e,this.viewPropertyProvider.camera(),!1,this.tmpR0,this.tmpR1),this.computeIntersection(this.tmpR0,this.tmpR1,e,i,r,t)},e.prototype.setTolerance=function(e){void 0===e&&(e=r.DEFAULT_TOLERANCE),this.intersectionTolerance=e},e.prototype.addIntersectionHandler=function(e){this.externalIntersectionHandlers.add(e)},e.prototype.removeIntersectionHandler=function(e){this.externalIntersectionHandlers.delete(e)},e.prototype.computeIntersection=function(e,t,o,s,a,h){var p=this,d=this.viewPropertyProvider.camera();o||(o=this.tmpScreenPoint,d.projectPoint(t,o));var l=this.layerProvider.getPickableLayers();s&&(l=l.filter(function(e){return s.has(e.id)}));var m=this.viewPropertyProvider.slicePlane(),v=m?n.sliceFilterPredicate(m):null;if(h=h||new r(this.viewingMode),h.init(l,e,t,o,d,this.intersectionTolerance,a,v),this.externalIntersectionHandlers.forEach(function(i){i.intersect(h,e,t,o)}),h.hudResults.length){var u=h.hudResults;u.sort(function(e,t){return t.dist-e.dist});var P=u[u.length-1],y=this.tmpScreenPointHud;d.projectPoint(P.center,y),y[0]=Math.round(y[0]),y[1]=Math.round(y[1]);var x=this.tmpPointHud;c(y,d,!1,e,x);var R=i.vec3d.dist(P.center,e)/i.vec3d.dist(e,x)*.99;this.validateHUDSelector.init(l,e,x,y,d,this.intersectionTolerance,a,v),this.externalIntersectionHandlers.forEach(function(t){t.intersect(p.validateHUDSelector,e,x,y)});var f=this.validateHUDSelector.minResult;(null==f.dist||R<=f.dist)&&h.minResult.copyFrom(P)}return h},e}();t.SceneIntersectionHelper=s});