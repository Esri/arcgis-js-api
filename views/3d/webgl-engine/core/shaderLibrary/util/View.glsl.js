/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/mat4","../../../../../../chunks/mat4f32"],(function(i,n,t){"use strict";function e(i,n,t){i.setUniform3f("cameraPosition",t[3]-n[0],t[7]-n[1],t[11]-n[2])}function o(i,n){i.setUniformMatrix4fv("proj",n)}function r(i,t,e){n.translate(c,e,t),i.setUniform3fv("localOrigin",t),i.setUniformMatrix4fv("view",c)}function a(i,n){r(i,n.origin,n.camera.viewMatrix)}function f(i,n){i.setUniform4fv("viewport",n.camera.fullViewport)}const c=t.create();i.bindCameraPosition=e,i.bindProjectionMatrix=o,i.bindView=a,i.bindViewCustomOrigin=r,i.bindViewport=f,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
