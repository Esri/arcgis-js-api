/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as i}from"../../../../chunks/mat4.js";import{c as t}from"../../../../chunks/mat4f64.js";import{applyToViewMatrix as r}from"./localOriginHelper.js";class e{constructor(i){this.factory=i,this.originData=new Map}acquire(i){return this.register(this.factory.getOrigin(i))}register(i){const r=this.originData.get(i.id);return r?(r.refCount++,r.origin):(this.originData.set(i.id,{refCount:1,viewMatrix:t(),origin:i}),i)}release(i){const t=this.originData.get(i.id);t&&(t.refCount--,0===t.refCount&&this.originData.delete(i.id))}updateViewMatrices(t){this.originData.forEach((e=>{i(e.viewMatrix,t),r(e.origin.vec3,e.viewMatrix)}))}getViewMatrix(i){return this.originData.get(i.id).viewMatrix}}export{e as LocalOriginManager};
