/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../core/Error","../support/utils","../statistics/support/ageUtils","../statistics/summaryStatisticsForAge"],(function(t,i,s,n){"use strict";return async function(a){const u="days",e={...a,unit:u},r=await n(e);if(null==r.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");const c=function(t){const n=Math.abs(t.avg);let a=null;return s.supportedAgeUnits.some((t=>{const s=i.unitValueInDays[t];return n>2*s&&(a=t),!!a})),a}(r);if(c===u)return{unit:c,statistics:r};e.unit=c;const o=await n(e);if(null==o.avg)throw new t("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:c,statistics:o}}}));
