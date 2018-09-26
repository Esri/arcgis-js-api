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

define(["require","exports","../../lib/gl-matrix","../../support/mathUtils"],function(t,e,i,o){Object.defineProperty(e,"__esModule",{value:!0});var c=o.angle,a=o.lerp,r=o.slerp,s=i.vec3d.create(),n=i.vec3d.create(),h=i.vec3d.create(),d=i.vec3d.create(),p=i.vec3d.create(),v=i.vec3d.create(),l={upward:i.vec3d.createFrom(0,0,1),forward:i.vec3d.createFrom(0,1,0),sideway:i.vec3d.createFrom(1,0,0)},u=i.mat3d.create(),m=function(){function t(t){void 0===t&&(t="global"),this.viewingMode=t,this.center=i.vec3d.create(),this.pitch=0,this.yaw=0,this.distance=0,this.lookAtDirection=i.vec3d.create(l.forward)}return t.prototype.pixelsPerPanAtZoom=function(t){return this.size/2/(this._zoomToPanScale*t)},t.prototype.zoomAtPixelsPerPan=function(t){return this.size/2/(this._zoomToPanScale*t)},t.prototype.pixelsPerRotateAtZoom=function(t){var e=Math.max(Math.cos(Math.abs(this.pitch)),.5);return this.size/2/e},t.prototype.compareTo=function(t,e){if(e||(e={pan:0,rotate:0,sourceZoom:0,targetZoom:0}),"global"===this.viewingMode){var o=i.vec3d.length(this.center),a=i.vec3d.length(t.center),r=(o+a)/2;e.pan=c(this.center,t.center)*r}else e.pan=i.vec3d.dist(this.center,t.center);var s=Math.abs(t.yaw-this.yaw);s>=Math.PI&&(s=2*Math.PI-s);var n=Math.abs(t.pitch-this.pitch);return e.rotate=Math.max(s,n),e.sourceZoom=this.distance,e.targetZoom=t.distance,e},t.prototype.interpolate=function(t,e,o){"global"===this.viewingMode?r(t.center,e.center,o.pan,this.center):i.vec3d.lerp(t.center,e.center,o.pan,this.center),this.distance=a(t.distance,e.distance,o.zoom),this.pitch=a(t.pitch,e.pitch,o.rotate);var c=t.yaw,s=e.yaw;Math.abs(s-c)>=Math.PI&&(c+=2*(c<s?1:-1)*Math.PI),this.yaw=a(c,s,o.rotate)},t.prototype.copyFrom=function(t){i.vec3d.set(t.center,this.center),this.pitch=t.pitch,this.yaw=t.yaw,this.distance=t.distance,i.vec3d.set(t.lookAtDirection,this.lookAtDirection),this.size=t.size,this.copyFromCommon(t),this.viewingMode=t.viewingMode},t.prototype.copyFromRenderCamera=function(t){var e=this._lookAtOrientation(t.center,u);i.vec3d.set(t.center,this.center),i.mat3d.multiplyVec3(e,i.vec3d.subtract(t.center,t.eye,d)),i.mat3d.multiplyVec3(e,t.up,p),this.distance=i.vec3d.length(d),d[0]/=this.distance,d[1]/=this.distance,d[2]/=this.distance,this.pitch=this._eyeUpToPitch(d,p),this.yaw=this._eyeUpToYaw(d,p),this.size=Math.sqrt(t.width*t.width+t.height*t.height),this.copyFromCommon(t)},t.prototype.copyFromCommon=function(t){this.fov=t.fov,this._zoomToPanScale=Math.atan(.5*this.fov)},t.prototype.copyToRenderCamera=function(t){var e=this._lookAtOrientation(this.center,u);i.mat3d.transpose(e),this._axisAngleVec3(l.sideway,this.pitch-Math.PI/2,l.forward,d),this._axisAngleVec3(l.upward,this.yaw,d),this._axisAngleVec3(l.sideway,this.pitch-Math.PI/2,l.upward,p),this._axisAngleVec3(l.upward,this.yaw,p),i.vec3d.scale(d,this.distance),i.mat3d.multiplyVec3(e,d),i.mat3d.multiplyVec3(e,p),t.center=this.center,t.eye=i.vec3d.subtract(this.center,d,d),t.up=p},t.prototype._axisAngleVec3=function(t,e,o,c){void 0===c&&(c=o);var a=Math.cos(e),r=Math.sin(e);return i.vec3d.scale(o,a,s),i.vec3d.scale(i.vec3d.cross(t,o,n),r),i.vec3d.scale(t,(1-a)*i.vec3d.dot(t,o),h),i.vec3d.add(i.vec3d.add(s,n,c),h,c)},t.prototype._lookAtOrientation=function(t,e){return this._upAtLookAt(t,h),i.vec3d.normalize(i.vec3d.cross(this.lookAtDirection,h,s)),0===s[0]&&0===s[1]&&0===s[2]&&i.vec3d.set(l.sideway,s),i.vec3d.normalize(i.vec3d.cross(h,s,n)),e||(e=i.mat3d.create()),e[0]=s[0],e[1]=n[0],e[2]=h[0],e[3]=s[1],e[4]=n[1],e[5]=h[1],e[6]=s[2],e[7]=n[2],e[8]=h[2],e},t.prototype._upAtLookAt=function(t,e){return"local"===this.viewingMode?i.vec3d.set(l.upward,e):i.vec3d.normalize(t,e)},t.prototype._eyeUpToPitch=function(t,e){return Math.PI-c(l.upward,t)},t.prototype._eyeUpToYaw=function(t,e){var o=v;return Math.abs(e[2])<.5?(i.vec3d.set(e,o),t[2]>0&&i.vec3d.scale(o,-1)):i.vec3d.set(t,o),c(l.sideway,i.vec3d.normalize(i.vec3d.cross(o,l.upward,n)),l.upward)},t}();e.default=m});