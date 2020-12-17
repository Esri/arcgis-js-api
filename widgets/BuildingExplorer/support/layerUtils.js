/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/promiseUtils"],(function(t,a){"use strict";t.createLoadLayersFunction=function(){let t=a.createAbortController();return async r=>{t.abort(),t=a.createAbortController();const e={signal:t.signal},o=r.toArray().map((t=>async function(t,r){await t.load(r),await t.loadAll(),a.throwIfAborted(r),t.summaryStatistics&&await t.summaryStatistics.load(r)}(t,e)));await a.all(o),a.throwIfAborted(e)}},Object.defineProperty(t,"__esModule",{value:!0})}));
