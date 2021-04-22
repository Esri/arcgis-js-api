/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat4","../../../../../../chunks/mat4f32"],(function(i,n,t){"use strict";!function(i){function t(i,n,t){i.setUniform3f("camPos",t[3]-n[0],t[7]-n[1],t[11]-n[2])}function o(i,n){i.setUniformMatrix4fv("proj",n)}function r(i,n){i.setUniform2fv("nearFar",n)}function f(i,t,o){n.translate(e,o,t),i.setUniform3fv("localOrigin",t),i.setUniformMatrix4fv("view",e)}function a(i,n){f(i,n.origin,n.camera.viewMatrix)}function c(i,n){i.setUniform4fv("viewport",n.camera.fullViewport)}i.bindCamPosition=t,i.bindProjectionMatrix=o,i.bindNearFar=r,i.bindViewCustomOrigin=f,i.bindView=a,i.bindViewport=c}(i.View||(i.View={}));const e=t.create();Object.defineProperty(i,"__esModule",{value:!0})}));
