/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../core/promiseUtils"],(function(t,a){"use strict";function r(){let t=a.createAbortController();return async r=>{t.abort(),t=a.createAbortController();const o={signal:t.signal},i=r.toArray().map((t=>e(t,o)));await Promise.all(i),a.throwIfAborted(o)}}async function e(t,r){await t.load(r),await t.loadAll(),a.throwIfAborted(r),t.summaryStatistics&&await t.summaryStatistics.load(r)}t.createLoadLayersFunction=r,Object.defineProperty(t,"__esModule",{value:!0})}));
