/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/mat4","../../../../chunks/mat4f64","./localOriginHelper"],(function(i,t,e,r){"use strict";let n=function(){function i(i){this.factory=i,this.originData=new Map}var n=i.prototype;return n.acquire=function(i){return this.register(this.factory.getOrigin(i))},n.register=function(i){const t=this.originData.get(i.id);return t?(t.refCount++,t.origin):(this.originData.set(i.id,{refCount:1,viewMatrix:e.create(),origin:i}),i)},n.release=function(i){const t=this.originData.get(i.id);t&&(t.refCount--,0===t.refCount&&this.originData.delete(i.id))},n.updateViewMatrices=function(i){this.originData.forEach((e=>{t.copy(e.viewMatrix,i),r.applyToViewMatrix(e.origin.vec3,e.viewMatrix)}))},n.getViewMatrix=function(i){return this.originData.get(i.id).viewMatrix},i}();i.LocalOriginManager=n,Object.defineProperty(i,"__esModule",{value:!0})}));
