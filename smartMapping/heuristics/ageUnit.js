/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../core/Error.js";import i from"../statistics/summaryStatisticsForAge.js";import{supportedAgeUnits as s}from"../statistics/support/ageUtils.js";import{unitValueInDays as n}from"../support/utils.js";function a(t){const i=Math.abs(t.avg);let a=null;return s.some((t=>{const s=n[t];return i>2*s&&(a=t),!!a})),a}async function r(s){const n="days",r={...s,unit:n},o=await i(r);if(null==o.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");const u=a(o);if(u===n)return{unit:u,statistics:o};r.unit=u;const c=await i(r);if(null==c.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:u,statistics:c}}export{r as default};
