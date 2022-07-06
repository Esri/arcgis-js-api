/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{splitProps as e}from"./propUtils.js";function t(t){return a=>{a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);const r=a._delegatedEventNames,s=Array.isArray(t)?t:e(t);r.push(...s)}}export{t as vmEvent};
