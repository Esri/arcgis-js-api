/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat4","../../../../../../chunks/mat4f32"],(function(i,n,t){"use strict";function e(i,n,t){i.setUniform3f("camPos",t[3]-n[0],t[7]-n[1],t[11]-n[2])}function r(i,n){i.setUniformMatrix4fv("proj",n)}function o(i,n){i.setUniform2fv("nearFar",n)}function f(i,t,e){n.translate(s,e,t),i.setUniform3fv("localOrigin",t),i.setUniformMatrix4fv("view",s)}function a(i,n){f(i,n.origin,n.camera.viewMatrix)}function c(i,n){i.setUniform4fv("viewport",n.camera.fullViewport)}const s=t.create();i.bindCameraPosition=e,i.bindNearFar=o,i.bindProjectionMatrix=r,i.bindView=a,i.bindViewCustomOrigin=f,i.bindViewport=c,Object.defineProperty(i,"__esModule",{value:!0})}));
