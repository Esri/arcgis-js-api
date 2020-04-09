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

define(["require","exports","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64","../support/mathUtils","../support/geometryUtils/frustum"],(function(t,e,i,r,n,s){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.frustum=s.create(),this.lines=new Array(12),this.origin=r.vec3f64.create(),this.direction=r.vec3f64.create(),this._altitude=null,this.renderCoordsHelper=t?t.renderCoordsHelper:null;for(var e=0;e<12;e++)this.lines[e]={origin:null,direction:r.vec3f64.create(),endpoint:null}}return Object.defineProperty(t.prototype,"planes",{get:function(){return this.frustum.planes},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"points",{get:function(){return this.frustum.points},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mutablePoints",{get:function(){return this.frustum.points},enumerable:!0,configurable:!0}),t.prototype.update=function(t){s.fromMatrix(t.viewMatrix,t.projectionMatrix,this.frustum),i.vec3.copy(this.origin,t.eye),i.vec3.copy(this.direction,t.viewForward),this._altitude=this.renderCoordsHelper.getAltitude(this.origin),this.updateLines()},t.prototype.updatePoints=function(t){for(var e=0;e<this.frustum.points.length;e++)i.vec3.copy(this.frustum.points[e],t[e]);s.recomputePlanes(this.frustum),this.updateLines()},Object.defineProperty(t.prototype,"altitude",{get:function(){return this._altitude},enumerable:!0,configurable:!0}),t.prototype.intersectsSphere=function(t){return s.intersectsSphere(this.frustum.planes,t)},t.prototype.intersectsRay=function(t){return s.intersectsRay(this.frustum.planes,t)},t.prototype.intersectsLineSegment=function(t,e){return s.intersectsLineSegment(this.frustum.planes,t,e)},t.prototype.intersectsPoint=function(t){return s.intersectsPoint(this.frustum.planes,t)},t.prototype.updateLines=function(){for(var t=this.frustum.points,e=0;e<4;e++){var i=e,r=e+4;this.updateLine(this.lines[e],t[i],t[r]),this.updateLine(this.lines[e+4],t[i],3===e?t[0]:t[i+1]),this.updateLine(this.lines[e+8],t[r],3===e?t[4]:t[r+1])}},t.prototype.updateLine=function(t,e,i){t.origin=e,t.endpoint=i,n.directionFromTo(t.direction,e,i)},t.planePointIndices=s.planePointIndices,t.nearFarLineIndices=[[0,4],[1,5],[2,6],[3,7]],t}();e.Frustum=o,e.default=o}));