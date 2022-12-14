/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/asyncUtils","../../core/promiseUtils","../../core/Warning"],(function(e,r,n,t,o){"use strict";function i(e,r,n){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,i){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const l=yield n.result(s.populateFromStyle());if(t.throwIfAborted(i),!1===l.ok){const n=l.error;r&&r.messages&&r.messages.push(new o("renderer:style-reference",`Failed to create unique value renderer from style reference: ${n.message}`,{error:n,context:r})),e.clear("renderer",r?.origin)}}}))).apply(this,arguments)}e.loadStyleRenderer=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
