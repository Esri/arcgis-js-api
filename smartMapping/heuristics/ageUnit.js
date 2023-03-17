/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../core/Error","../statistics/summaryStatisticsForAge","../statistics/support/ageUtils","../support/utils"],(function(t,i,n,s,u){"use strict";function e(t){const i=Math.abs(t.avg);let n=null;return s.supportedAgeUnits.some((t=>{const s=u.unitValueInDays[t];return i>2*s&&(n=t),!!n})),n}function r(t){return a.apply(this,arguments)}function a(){return(a=t._asyncToGenerator((function*(t){const s="days",u={...t,unit:s},r=yield n(u);if(null==r.avg)throw new i("age-unit:insufficient-info","'avg' statistics is invalid");const a=e(r);if(a===s)return{unit:a,statistics:r};u.unit=a;const o=yield n(u);if(null==o.avg)throw new i("age-unit:insufficient-info","'avg' statistics is invalid");return{unit:a,statistics:o}}))).apply(this,arguments)}return r}));
