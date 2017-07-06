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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix","../support/earthUtils","../webgl-engine/lib/Util","../support/mathUtils"],function(t,e,r,i,a,c){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.picker=t,this.earthUtils=i,this._axisTmp1=r.vec3d.create(),this._axisTmp2=r.vec3d.create(),this._axisTmp3=r.vec3d.create(),this._tmpTransform2=r.mat4d.create(),this.spherical=new s(this),this.planar=new o(this)}return t.prototype.normalizeRotationDelta=function(t){for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t},t.prototype.rotationFromPointsAroundAxis=function(t,e,i){var a=this._axisTmp1,c=this._axisTmp2,n=this._axisTmp3;r.vec3d.set(t,c),r.vec3d.set(e,n);var o=r.vec3d.dot(c,i),s=r.vec3d.dot(n,i);r.vec3d.scale(i,o,a),r.vec3d.subtract(c,a),r.vec3d.normalize(c),r.vec3d.scale(i,s,a),r.vec3d.subtract(n,a),r.vec3d.normalize(n);var d=r.vec3d.dot(c,n);r.vec3d.cross(i,c,a);var v=r.vec3d.dot(n,a);return Math.atan2(v,d)},t.prototype.applyRotation=function(t,e,i,a){var c=this._tmpTransform2;r.mat4d.identity(c),r.mat4d.rotate(c,a,i),r.vec3d.subtract(t.eye,e),r.mat4d.multiplyVec3(c,t.eye,t.eye),r.vec3d.add(t.eye,e),r.vec3d.subtract(t.center,e),r.mat4d.multiplyVec3(c,t.center,t.center),r.vec3d.add(t.center,e),r.mat4d.multiplyVec3(c,t.up,t.up),t.markViewDirty()},t}();e.NavigationHelper=n;var o=function(){function t(t){this._helper=t,this._tmpForward=r.vec3d.create(),this._tmpP0=r.vec3d.create(),this._tmpP1=r.vec3d.create()}return t.prototype.applyZoom=function(t,e,i,a,c){var n=this._tmpForward,o=1-c,s=4;r.vec3d.subtract(a,i.eye,n);var d=r.vec3d.length(n),v=d*(1-o);o>=0&&s>v&&(v=s),v=e.navigation.limitAltitude(v,a,n,d),Math.abs(d-v)<1e-6||(o=-(v-d)/d,r.vec3d.scale(n,o),r.vec3d.add(i.eye,n),r.vec3d.lerp(i.center,a,o),e.navigation.fixTargetUpVector(),i.markViewDirty())},t.prototype.intersectPlaneFromScreenPoint=function(t,e,i,a){var c=this._helper,n=this._tmpP0,o=this._tmpP1;c.picker.createPickRay(i,null,e.viewMatrix,n,o),r.vec3d.subtract(o,n);var s=r.vec3d.dot(t.normal,o);if(0===s)return!1;var d=r.vec3d.dot(t.normal,n)-t.distance,v=-d/s;return r.vec3d.add(n,r.vec3d.scale(o,v,a),a),!0},t.prototype.computePointCenter=function(t,e){r.vec3d.set3(0,0,0,e);for(var i=0,a=t;i<a.length;i++){var c=a[i];r.vec3d.add(e,c)}r.vec3d.scale(e,1/t.length)},t}(),s=function(){function t(t){this._helper=t,this._tmpForward=r.vec3d.create(),this._tmpP0=r.vec3d.create(),this._tmpP1=r.vec3d.create(),this._tmpAxis=r.vec3d.create(),this._tmpTransform=r.mat4d.create()}return t.prototype.applyZoom=function(t,e,i,a){var c=this._tmpForward;r.vec3d.subtract(i.center,i.eye,c);var n=t/r.vec3d.length(i.center),o=1-n,s=r.vec3d.length(c),d=s*a;if(d=e.navigation.limitAltitude(d,i.center,c,s),a=d/s,!(Math.abs(s-d)<1e-6)){var v=n+o*a;r.vec3d.scale(i.center,v),r.vec3d.scale(c,a),r.vec3d.subtract(i.center,c,i.eye),i.markViewDirty(),e.navigation.applyConstraints(i)}},t.prototype.makeRenderCoordSpherePoint=function(t,e,i,a){var c=this._helper;c.picker.createPickRay(i,null,e.viewMatrix,this._tmpP0,this._tmpP1),r.vec3d.subtract(this._tmpP1,e.eye),this.intersect(t,e.eye,this._tmpP1,a)||this.closestPointOnSilhouette(t,e.eye,this._tmpP0,a)},t.prototype.intersect=function(t,e,r,i){return a.raySphereClosestPositive(e,r,t,i)},t.prototype.closestPointOnSilhouette=function(t,e,i,a){var n=this._tmpAxis,o=this._tmpTransform;r.vec3d.cross(e,i,n),r.vec3d.cross(n,e,a),r.vec3d.scale(a,1/r.vec3d.length(a)*t);var s=-c.asin(t/r.vec3d.length(e));r.mat4d.identity(o),r.mat4d.rotate(o,s,n),r.mat4d.multiplyVec3(o,a)},t.prototype.rotationFromPoints=function(t,e,i,a){return r.vec3d.cross(e,i,a),-Math.acos(1-r.vec3d.dist2(e,i)/(2*t*t))},t.prototype.computePointCenter=function(t,e,i){r.vec3d.set3(0,0,0,i);for(var a=0,c=t;a<c.length;a++){var n=c[a];r.vec3d.add(i,n)}r.vec3d.normalize(i),r.vec3d.scale(i,e)},t}()});