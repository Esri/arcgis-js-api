/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/asyncUtils","../../core/promiseUtils","../../core/Warning"],(function(e,r,n,t,i){"use strict";function o(e,r,n){return s.apply(this,arguments)}function s(){return(s=r._asyncToGenerator((function*(e,r,o){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const l=yield n.result(s.populateFromStyle());if(t.throwIfAborted(o),!1===l.ok){const n=l.error;r&&r.messages&&r.messages.push(new i("renderer:style-reference",`Failed to create unique value renderer from style reference: ${n.message}`,{error:n,context:r})),e.clear("renderer",r.origin)}}}))).apply(this,arguments)}e.loadStyleRenderer=o,Object.defineProperty(e,"__esModule",{value:!0})}));
