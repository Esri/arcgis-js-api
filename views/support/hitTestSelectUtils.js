/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";function s(e,t){return n.apply(this,arguments)}function n(){return(n=t._asyncToGenerator((function*(e,t){if("2d"===e.type)return e.hitTest(t);const s=yield e.hitTest(t),n=s.results[0],i=s.results.findIndex((e=>e.distance!==n.distance));return-1!==i&&(s.results=s.results.slice(0,i)),s}))).apply(this,arguments)}e.hitTestSelectSameDistance=s,Object.defineProperty(e,"__esModule",{value:!0})}));
