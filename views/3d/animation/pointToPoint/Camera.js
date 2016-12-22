// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../lib/glMatrix","../../support/mathUtils"],function(t,e,i,o){var a=o.angle,r=o.lerp,s=o.slerpOrLerp,n=i.vec3d,c=i.mat3d,h=n.create(),p=n.create(),l=n.create(),d=n.create(),u=n.create(),y={upward:n.createFrom(0,0,1),forward:n.createFrom(0,1,0),sideway:n.createFrom(1,0,0)},m=c.create(),w=function(){function t(t){void 0===t&&(t="global"),this.viewingMode=t,this.center=n.create(),this.pitch=0,this.yaw=0,this.distance=0,this.lookAtDirection=n.create(y.forward)}return t.prototype.pixelsPerPanAtZoom=function(t){return this.size/2/(this._zoomToPanScale*t)},t.prototype.zoomAtPixelsPerPan=function(t){return this.size/2/(this._zoomToPanScale*t)},t.prototype.pixelsPerRotateAtZoom=function(t){var e=Math.max(Math.cos(Math.abs(this.pitch)),.5);return this.size/2/e},t.prototype.compareTo=function(t,e){if(e||(e={pan:0,rotate:0,sourceZoom:0,targetZoom:0}),"global"===this.viewingMode){var i=n.length(this.center),o=n.length(t.center),r=(i+o)/2;e.pan=a(this.center,t.center)*r}else e.pan=n.dist(this.center,t.center);var s=Math.abs(t.yaw-this.yaw);s>=Math.PI&&(s=2*Math.PI-s);var c=Math.abs(t.pitch-this.pitch);return e.rotate=Math.max(s,c),e.sourceZoom=this.distance,e.targetZoom=t.distance,e},t.prototype.interpolate=function(t,e,i){"global"===this.viewingMode?s(t.center,e.center,i.pan,this.center,f):n.lerp(t.center,e.center,i.pan,this.center),this.distance=r(t.distance,e.distance,i.zoom),this.pitch=r(t.pitch,e.pitch,i.rotate);var o=t.yaw,a=e.yaw;Math.abs(a-o)>=Math.PI&&(o+=2*(a>o?1:-1)*Math.PI),this.yaw=r(o,a,i.rotate)},t.prototype.copyFrom=function(t){n.set(t.center,this.center),this.pitch=t.pitch,this.yaw=t.yaw,this.distance=t.distance,n.set(t.lookAtDirection,this.lookAtDirection),this.size=t.size,this.copyFromCommon(t),this.viewingMode=t.viewingMode},t.prototype.copyFromRenderCamera=function(t){var e=this._lookAtOrientation(t.center,m);n.set(t.center,this.center),c.multiplyVec3(e,n.subtract(t.center,t.eye,d)),c.multiplyVec3(e,t.up,u),this.distance=n.length(d),d[0]/=this.distance,d[1]/=this.distance,d[2]/=this.distance,this.pitch=this._eyeUpToPitch(d,u),this.yaw=this._eyeUpToYaw(d,u),this.size=Math.sqrt(t.width*t.width+t.height*t.height),this.copyFromCommon(t)},t.prototype.copyFromCommon=function(t){this.fov=t.fov,this._zoomToPanScale=Math.atan(.5*this.fov)},t.prototype.copyToRenderCamera=function(t){var e=this._lookAtOrientation(this.center,m);c.transpose(e),this._axisAngleVec3(y.sideway,this.pitch-Math.PI/2,y.forward,d),this._axisAngleVec3(y.upward,this.yaw,d),this._axisAngleVec3(y.sideway,this.pitch-Math.PI/2,y.upward,u),this._axisAngleVec3(y.upward,this.yaw,u),n.scale(d,this.distance),c.multiplyVec3(e,d),c.multiplyVec3(e,u),t.center=this.center,t.eye=n.subtract(this.center,d,d),t.up=u},t.prototype._axisAngleVec3=function(t,e,i,o){void 0===o&&(o=i);var a=Math.cos(e),r=Math.sin(e);return n.scale(i,a,h),n.scale(n.cross(t,i,p),r),n.scale(t,(1-a)*n.dot(t,i),l),n.add(n.add(h,p,o),l,o)},t.prototype._lookAtOrientation=function(t,e){return this._upAtLookAt(t,l),n.normalize(n.cross(this.lookAtDirection,l,h)),0===h[0]&&0===h[1]&&0===h[2]&&n.set(y.sideway,h),n.normalize(n.cross(l,h,p)),e||(e=c.create()),e[0]=h[0],e[1]=p[0],e[2]=l[0],e[3]=h[1],e[4]=p[1],e[5]=l[1],e[6]=h[2],e[7]=p[2],e[8]=l[2],e},t.prototype._upAtLookAt=function(t,e){return"local"===this.viewingMode?n.set(y.upward,e):n.normalize(t,e)},t.prototype._eyeUpToPitch=function(t,e){return Math.PI-a(y.upward,t)},t.prototype._eyeUpToYaw=function(t,e){var i=Math.abs(e[2])<.5?e:t;return a(y.sideway,n.normalize(n.cross(i,y.upward,p)),y.upward)},t}(),f=1e-4;Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=w});