/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/promiseUtils"],(function(t,e,r){"use strict";function o(){let t=new AbortController;return function(){var o=e._asyncToGenerator((function*(e){t.abort(),t=new AbortController;const o={signal:t.signal},l=e.toArray().map((t=>n(t,o)));yield Promise.all(l),r.throwIfAborted(o)}));return function(t){return o.apply(this,arguments)}}()}function n(t,e){return l.apply(this,arguments)}function l(){return(l=e._asyncToGenerator((function*(t,e){yield t.load(e),yield t.loadAll(),r.throwIfAborted(e),t.summaryStatistics&&(yield t.summaryStatistics.load(e))}))).apply(this,arguments)}t.createLoadLayersFunction=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
