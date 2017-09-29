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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix","../support/earthUtils","../webgl-engine/lib/Util","../support/mathUtils"],function(t,e,r,a,i,c){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.picker=t,this.earthUtils=a,this._axisTmp1=r.vec3d.create(),this._axisTmp2=r.vec3d.create(),this._axisTmp3=r.vec3d.create(),this._tmpTransform2=r.mat4d.create(),this.spherical=new s(this),this.planar=new o(this)}return t.prototype.normalizeRotationDelta=function(t){for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t},t.prototype.rotationFromPointsAroundAxis=function(t,e,a){var i=this._axisTmp1,c=this._axisTmp2,n=this._axisTmp3;r.vec3d.set(t,c),r.vec3d.set(e,n);var o=r.vec3d.dot(c,a),s=r.vec3d.dot(n,a);r.vec3d.scale(a,o,i),r.vec3d.subtract(c,i),r.vec3d.normalize(c),r.vec3d.scale(a,s,i),r.vec3d.subtract(n,i),r.vec3d.normalize(n);var d=r.vec3d.dot(c,n);r.vec3d.cross(a,c,i);var v=r.vec3d.dot(n,i);return Math.atan2(v,d)},t.prototype.applyRotation=function(t,e,a,i){var c=this._tmpTransform2;r.mat4d.identity(c),r.mat4d.rotate(c,i,a),r.vec3d.subtract(t.eye,e),r.mat4d.multiplyVec3(c,t.eye,t.eye),r.vec3d.add(t.eye,e),r.vec3d.subtract(t.center,e),r.mat4d.multiplyVec3(c,t.center,t.center),r.vec3d.add(t.center,e),r.mat4d.multiplyVec3(c,t.up,t.up),t.markViewDirty()},t}();e.NavigationHelper=n;var o=function(){function t(t){this._helper=t,this._tmpForward=r.vec3d.create(),this._tmpP0=r.vec3d.create(),this._tmpP1=r.vec3d.create()}return t.prototype.applyZoom=function(t,e,a,i,c){var n=this._tmpForward,o=1-c,s=4;r.vec3d.subtract(i,a.eye,n);var d=r.vec3d.length(n),v=d*(1-o);o>=0&&s>v&&(v=s),v=e.navigation.limitAltitude(v,i,n),Math.abs(d-v)<1e-6||(o=-(v-d)/d,r.vec3d.scale(n,o),r.vec3d.add(a.eye,n),r.vec3d.lerp(a.center,i,o),e.navigation.fixTargetUpVector(),a.markViewDirty())},t.prototype.intersectPlaneFromScreenPoint=function(t,e,a,i){var c=this._helper,n=this._tmpP0,o=this._tmpP1;c.picker.createPickRay(a,null,e.viewMatrix,n,o),r.vec3d.subtract(o,n);var s=r.vec3d.dot(t.normal,o);if(0===s)return!1;var d=r.vec3d.dot(t.normal,n)-t.distance,v=-d/s;return r.vec3d.add(n,r.vec3d.scale(o,v,i),i),!0},t.prototype.computePointCenter=function(t,e){r.vec3d.set3(0,0,0,e);for(var a=0,i=t;a<i.length;a++){var c=i[a];r.vec3d.add(e,c)}r.vec3d.scale(e,1/t.length)},t}(),s=function(){function t(t){this._helper=t,this._tmpForward=r.vec3d.create(),this._tmpP0=r.vec3d.create(),this._tmpP1=r.vec3d.create(),this._tmpAxis=r.vec3d.create(),this._tmpTransform=r.mat4d.create()}return t.prototype.applyZoom=function(t,e,a,i){var c=this._tmpForward;r.vec3d.subtract(a.center,a.eye,c);var n=t/r.vec3d.length(a.center),o=1-n,s=r.vec3d.length(c),d=s*i;if(d=e.navigation.limitAltitude(d,a.center,c),i=d/s,!(Math.abs(s-d)<1e-6)){var v=n+o*i;r.vec3d.scale(a.center,v),r.vec3d.scale(c,i),r.vec3d.subtract(a.center,c,a.eye),a.markViewDirty(),e.navigation.applyConstraints(a)}},t.prototype.makeRenderCoordSpherePoint=function(t,e,a,i){var c=this._helper;c.picker.createPickRay(a,null,e.viewMatrix,this._tmpP0,this._tmpP1),r.vec3d.subtract(this._tmpP1,e.eye),this.intersect(t,e.eye,this._tmpP1,i)||this.closestPointOnSilhouette(t,e.eye,this._tmpP0,i)},t.prototype.intersect=function(t,e,r,a){return i.raySphere(e,r,null,t,a)},t.prototype.closestPointOnSilhouette=function(t,e,a,i){var n=this._tmpAxis,o=this._tmpTransform;r.vec3d.cross(e,a,n),r.vec3d.cross(n,e,i),r.vec3d.scale(i,1/r.vec3d.length(i)*t);var s=-c.asin(t/r.vec3d.length(e));r.mat4d.identity(o),r.mat4d.rotate(o,s,n),r.mat4d.multiplyVec3(o,i)},t.prototype.rotationFromPoints=function(t,e,a,i){return r.vec3d.cross(e,a,i),-Math.acos(1-r.vec3d.dist2(e,a)/(2*t*t))},t.prototype.computePointCenter=function(t,e,a){r.vec3d.set3(0,0,0,a);for(var i=0,c=t;i<c.length;i++){var n=c[i];r.vec3d.add(a,n)}r.vec3d.normalize(a),r.vec3d.scale(a,e)},t}()});