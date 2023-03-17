/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/maybe"],(function(t,e,n){"use strict";function r(t,e){return i.apply(this,arguments)}function i(){return(i=e._asyncToGenerator((function*(t,e){if("2d"===t.type)return t.hitTest(e);const r=yield t.hitTest(e);if(0===r.results.length)return r;const i=r.results[0],u=(n.unwrap(i.distance)??0)*(1+s),l=r.results.findIndex((t=>(t.distance??0)>u));return-1!==l&&(r.results=r.results.slice(0,l)),r}))).apply(this,arguments)}const s=.05;function u(t){return n.isSome(t)&&"graphic"===t.type}function l(t){return t.find(u)??null}function c(t){return t.filter(u)}t.filterGraphicHits=c,t.findFirstGraphicHit=l,t.hitTestSelectSimilarDistance=r,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
