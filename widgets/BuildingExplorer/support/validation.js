/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,t){"use strict";function n(e,t){if(0===t.length)return e;if(e===1/0)return t[t.length-1];if(e===-1/0)return t[0];let n=t[0],l=Math.abs(n-e);for(const o of t){const t=Math.abs(o-e);t<l&&(n=o,l=t)}return n}e.findClosest=n,e.getDomainInfo=function(e){const t={fieldValueMap:new Map,allowedValues:[]};for(const n of e){const e=n.fieldValueMap,l=t.fieldValueMap;e.forEach(((e,n)=>{l.has(n)||(l.set(n,e),t.allowedValues.push(n))}))}return t.allowedValues.sort(((e,t)=>e-t)),t},e.getMax=function(e){let n=null;for(const l of e)n=t.isSome(n)?Math.max(n,l):l;return n},e.getMin=function(e){let n=null;for(const l of e)n=t.isSome(n)?Math.min(n,l):l;return n},e.getValidNumber=function(e,t){return t.allowedValues.length>0?n(e,t.allowedValues):null},Object.defineProperty(e,"__esModule",{value:!0})}));
