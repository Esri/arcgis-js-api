/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../request","../../../../../core/lang"],(function(e,t,r){"use strict";const n=new Map;function o(e,t,r,n,o){return c(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,n.toString()),o)}function c(e,o){const c=n.get(e);if(c)return c.then((e=>r.clone(e)));const i=t(e,{responseType:"array-buffer",...o}).then((({data:t})=>(n.delete(e),t))).catch((t=>{throw n.delete(e),t}));return n.set(e,i),i}e.request=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
