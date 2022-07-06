/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../../core/maybe.js";function t(e){const t={fieldValueMap:new Map,allowedValues:[]};for(const l of e){const e=l.fieldValueMap,n=t.fieldValueMap;e.forEach(((e,l)=>{n.has(l)||(n.set(l,e),t.allowedValues.push(l))}))}return t.allowedValues.sort(((e,t)=>e-t)),t}function l(t){let l=null;for(const n of t)l=e(l)?Math.min(l,n):n;return l}function n(t){let l=null;for(const n of t)l=e(l)?Math.max(l,n):n;return l}function o(e,t){return t.allowedValues.length>0?a(e,t.allowedValues):null}function a(e,t){if(0===t.length)return e;if(e===1/0)return t[t.length-1];if(e===-1/0)return t[0];let l=t[0],n=Math.abs(l-e);for(const o of t){const t=Math.abs(o-e);t<n&&(l=o,n=t)}return l}export{a as findClosest,t as getDomainInfo,n as getMax,l as getMin,o as getValidNumber};
