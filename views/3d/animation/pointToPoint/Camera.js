/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../core/mathUtils","../../../../chunks/mat3","../../../../chunks/mat3f64","../../../../chunks/vec3","../../../../chunks/vec3f64","../../support/mathUtils"],(function(t,e,i,s,n,o){"use strict";const a=n.create(),c=n.create(),r=n.create(),h=n.create(),p=n.create(),u=n.create(),l={upward:n.fromValues(0,0,1),forward:n.fromValues(0,1,0),sideway:n.fromValues(1,0,0)},d=i.create();return function(){function m(t=1){this.viewingMode=t,this.center=n.create(),this.pitch=0,this.yaw=0,this.distance=0,this.lookAtDirection=n.clone(l.forward)}var w=m.prototype;return w.pixelsPerPanAtZoom=function(t){return this.size/2/(this._zoomToPanScale*t)},w.zoomAtPixelsPerPan=function(t){return this.size/2/(this._zoomToPanScale*t)},w.pixelsPerRotateAtZoom=function(){const t=Math.max(Math.cos(Math.abs(this.pitch)),.5);return this.size/2/t},w.compareTo=function(t,e){if(e||(e={pan:0,rotate:0,sourceZoom:0,targetZoom:0}),1===this.viewingMode){const i=(s.length(this.center)+s.length(t.center))/2;e.pan=o.angle(this.center,t.center)*i}else e.pan=s.distance(this.center,t.center);let i=Math.abs(t.yaw-this.yaw);i>=Math.PI&&(i=2*Math.PI-i);const n=Math.abs(t.pitch-this.pitch);return e.rotate=Math.max(i,n),e.sourceZoom=this.distance,e.targetZoom=t.distance,e},w.interpolate=function(e,i,n){1===this.viewingMode?o.slerp(e.center,i.center,n.pan,this.center):s.lerp(this.center,e.center,i.center,n.pan),this.distance=t.lerp(e.distance,i.distance,n.zoom),this.pitch=t.lerp(e.pitch,i.pitch,n.rotate);let a=e.yaw;const c=i.yaw;Math.abs(c-a)>=Math.PI&&(a+=2*(a<c?1:-1)*Math.PI),this.yaw=t.lerp(a,c,n.rotate)},w.copyFrom=function(t){s.copy(this.center,t.center),this.pitch=t.pitch,this.yaw=t.yaw,this.distance=t.distance,s.copy(this.lookAtDirection,t.lookAtDirection),this.size=t.size,this.copyFromCommon(t),this.viewingMode=t.viewingMode},w.copyFromRenderCamera=function(t){const e=this._lookAtOrientation(t.center,d);s.copy(this.center,t.center),s.subtract(h,t.center,t.eye),s.transformMat3(h,h,e),s.transformMat3(p,t.up,e),this.distance=s.length(h),h[0]/=this.distance,h[1]/=this.distance,h[2]/=this.distance,this.pitch=this._eyeUpToPitch(h),this.yaw=this._eyeUpToYaw(h,p),this.size=Math.sqrt(t.width*t.width+t.height*t.height),this.copyFromCommon(t)},w.copyFromCommon=function(t){this.fov=t.fov,this._zoomToPanScale=Math.atan(.5*this.fov)},w.copyToRenderCamera=function(t){const i=this._lookAtOrientation(this.center,d);e.transpose(i,i),this._axisAngleVec3(l.sideway,this.pitch-Math.PI/2,l.forward,h),this._axisAngleVec3(l.upward,this.yaw,h),this._axisAngleVec3(l.sideway,this.pitch-Math.PI/2,l.upward,p),this._axisAngleVec3(l.upward,this.yaw,p),s.scale(h,h,this.distance),s.transformMat3(h,h,i),s.transformMat3(p,p,i),t.center=this.center,t.eye=s.subtract(h,this.center,h),t.up=p},w._axisAngleVec3=function(t,e,i,n=i){const o=Math.cos(e),h=Math.sin(e);return s.scale(a,i,o),s.cross(c,t,i),s.scale(c,c,h),s.scale(r,t,(1-o)*s.dot(t,i)),s.add(n,s.add(n,a,c),r)},w._lookAtOrientation=function(t,e=i.create()){return this._upAtLookAt(t,r),s.cross(a,this.lookAtDirection,r),s.normalize(a,a),0===a[0]&&0===a[1]&&0===a[2]&&s.copy(a,l.sideway),s.cross(c,r,a),s.normalize(c,c),e[0]=a[0],e[1]=c[0],e[2]=r[0],e[3]=a[1],e[4]=c[1],e[5]=r[1],e[6]=a[2],e[7]=c[2],e[8]=r[2],e},w._upAtLookAt=function(t,e){return 2===this.viewingMode?s.copy(e,l.upward):s.normalize(e,t)},w._eyeUpToPitch=function(t){return Math.PI-o.angle(l.upward,t)},w._eyeUpToYaw=function(t,e){const i=u;return Math.abs(e[2])<.5?(s.copy(i,e),t[2]>0&&s.scale(i,i,-1)):s.copy(i,t),s.cross(c,i,l.upward),s.normalize(c,c),o.angle(l.sideway,c,l.upward)},m}()}));
