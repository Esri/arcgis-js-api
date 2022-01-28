/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/promiseUtils"],(function(t,r,e){"use strict";function n(){let t=new AbortController;return function(){var n=r._asyncToGenerator((function*(r){t.abort(),t=new AbortController;const n={signal:t.signal},i=r.toArray().map((t=>o(t,n)));yield Promise.all(i),e.throwIfAborted(n)}));return function(t){return n.apply(this,arguments)}}()}function o(t,r){return i.apply(this,arguments)}function i(){return(i=r._asyncToGenerator((function*(t,r){yield t.load(r),yield t.loadAll(),e.throwIfAborted(r),t.summaryStatistics&&(yield t.summaryStatistics.load(r))}))).apply(this,arguments)}t.createLoadLayersFunction=n,Object.defineProperty(t,"__esModule",{value:!0})}));
