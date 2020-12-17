/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat4","../../../../../../chunks/mat4f32"],(function(i,n,t){"use strict";!function(i){function t(i,t,o){n.translate(e,o,t),i.setUniform3fv("localOrigin",t),i.setUniformMatrix4fv("view",e)}i.bindCamPosition=function(i,n,t){i.setUniform3f("camPos",t[3]-n[0],t[7]-n[1],t[11]-n[2])},i.bindProjectionMatrix=function(i,n){i.setUniformMatrix4fv("proj",n)},i.bindNearFar=function(i,n){i.setUniform2fv("nearFar",n)},i.bindViewCustomOrigin=t,i.bindView=function(i,n){t(i,n.origin,n.camera.viewMatrix)},i.bindViewport=function(i,n){i.setUniform4fv("viewport",n.camera.fullViewport)}}(i.View||(i.View={}));const e=t.create();Object.defineProperty(i,"__esModule",{value:!0})}));
