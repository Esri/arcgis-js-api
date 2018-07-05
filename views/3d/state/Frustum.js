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

define(["require","exports","../lib/glMatrix","../support/geometryUtils","../support/intersectionUtils","../webgl-engine/lib/Util"],function(t,e,i,n,s,r){Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t){this.planes=new Array(6),this.points=new Array(8),this.lines=new Array(12),this.origin=i.vec3d.create(),this.direction=i.vec3d.create(),this._altitude=null,this.renderCoordsHelper=t?t.renderCoordsHelper:null;for(var e=0;e<6;e++)this.planes[e]=n.plane.create();for(var e=0;e<8;e++)this.points[e]=i.vec3d.create();for(var e=0;e<12;e++)this.lines[e]={origin:null,direction:i.vec3d.create(),endpoint:null}}return t.prototype.update=function(t){r.matrixToFrustumPoints(t.viewMatrix,t.projectionMatrix,this.points),this.updatePoints(this.points),i.vec3d.set(t.eye,this.origin),i.vec3d.set(t.viewForward,this.direction),this._altitude=this.renderCoordsHelper.getAltitude(this.origin),this.updateLines()},t.prototype.updatePoints=function(t){if(t!==this.points)for(var e=0;e<this.points.length;e++)i.vec3d.set(t[e],this.points[e]);r.frustumPointsToPlanes(this.points,this.planes),this.updateLines()},Object.defineProperty(t.prototype,"altitude",{get:function(){return this._altitude},enumerable:!0,configurable:!0}),t.prototype.intersectsSphere=function(t,e){return s.frustumSphere(this.planes,t,e)},t.prototype.intersectsRay=function(t,e,i){return s.frustumRay(this.planes,t,e,i)},t.prototype.intersectsLineSegment=function(t,e,i){return s.frustumLineSegment(this.planes,t,e,i)},t.prototype.intersectsPoint=function(t){return s.frustumPoint(this.planes,t)},t.prototype.updateLines=function(){for(var t=0;t<4;t++){var e=t,i=t+4;this.updateLine(this.lines[t],this.points[e],this.points[i]),this.updateLine(this.lines[t+4],this.points[e],3===t?this.points[0]:this.points[e+1]),this.updateLine(this.lines[t+8],this.points[i],3===t?this.points[4]:this.points[i+1])}},t.prototype.updateLine=function(t,e,n){t.origin=e,t.endpoint=n,i.vec3d.direction(n,e,t.direction)},t.planePointIndices={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]},t.nearFarLineIndices=[[0,4],[1,5],[2,6],[3,7]],t}();e.Frustum=o,e.default=o});