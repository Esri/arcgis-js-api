/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../core/Error","../support/utils","../statistics/support/ageUtils","../statistics/summaryStatisticsForAge"],(function(t,i,s,n){"use strict";function a(t){const n=Math.abs(t.avg);let a=null;return s.supportedAgeUnits.some((t=>{const s=i.unitValueInDays[t];return n>2*s&&(a=t),!!a})),a}async function u(i){const s="days",u={...i,unit:s},e=await n(u);if(null==e.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");const r=a(e);if(r===s)return{unit:r,statistics:e};u.unit=r;const c=await n(u);if(null==c.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:r,statistics:c}}return u}));
