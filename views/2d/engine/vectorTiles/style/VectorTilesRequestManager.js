/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../../request.js";import{clone as t}from"../../../../../core/lang.js";const r=new Map;function n(e,t,r,n,c){return o(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,n.toString()),c)}function o(n,o){const c=r.get(n);if(c)return c.then((e=>t(e)));const i=e(n,{responseType:"array-buffer",...o}).then((({data:e})=>(r.delete(n),e))).catch((e=>{throw r.delete(n),e}));return r.set(n,i),i}export{n as request};
