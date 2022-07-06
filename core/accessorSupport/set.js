/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import o from"../Error.js";import r from"../has.js";import t from"../Logger.js";import{get as e}from"./get.js";function n(o,r,t){if(o&&r)if("object"==typeof r)for(const e of Object.getOwnPropertyNames(r))n(o,e,r[e]);else{if(r.includes(".")){const s=r.split("."),i=s.splice(s.length-1,1)[0];return void n(e(o,s),i,t)}const i=o.__accessor__;null!=i&&s(r,i),o[r]=t}}function s(t,e){if(r("esri-unknown-property-errors")&&!i(t,e))throw new o("set:unknown-property",c(t,e))}function i(o,r){return null!=r.metadatas[o]}function c(o,r){return"setting unknown property '"+o+"' on instance of "+r.host.declaredClass}t.getLogger("esri.core.accessorSupport.set");export{n as set};
