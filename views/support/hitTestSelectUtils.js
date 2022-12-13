/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe"],(function(e,t,n){"use strict";function i(e,t){return r.apply(this,arguments)}function r(){return(r=t._asyncToGenerator((function*(e,t){if("2d"===e.type)return e.hitTest(t);const i=yield e.hitTest(t);if(0===i.results.length)return i;const r=i.results[0],u=n.isSome(r.distance)?r.distance*(1+s):r.distance,l=i.results.findIndex((e=>e.distance>u));return-1!==l&&(i.results=i.results.slice(0,l)),i}))).apply(this,arguments)}const s=.05;function u(e){return n.isSome(e)&&"graphic"===e.type}function l(e){return e.find(u)??null}function c(e){return e.filter(u)}e.filterGraphicHits=c,e.findFirstGraphicHit=l,e.hitTestSelectSimilarDistance=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
