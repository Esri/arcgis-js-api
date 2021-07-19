/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/promiseUtils"],(function(t,r,e){"use strict";function o(){let t=e.createAbortController();return function(){var o=r._asyncToGenerator((function*(r){t.abort(),t=e.createAbortController();const o={signal:t.signal},i=r.toArray().map((t=>n(t,o)));yield Promise.all(i),e.throwIfAborted(o)}));return function(t){return o.apply(this,arguments)}}()}function n(t,r){return i.apply(this,arguments)}function i(){return(i=r._asyncToGenerator((function*(t,r){yield t.load(r),yield t.loadAll(),e.throwIfAborted(r),t.summaryStatistics&&(yield t.summaryStatistics.load(r))}))).apply(this,arguments)}t.createLoadLayersFunction=o,Object.defineProperty(t,"__esModule",{value:!0})}));
