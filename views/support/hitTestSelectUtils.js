/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";async function t(e,t){if("2d"===e.type)return e.hitTest(t);const s=await e.hitTest(t),i=s.results[0],n=s.results.findIndex((e=>e.distance!==i.distance));return-1!==n&&(s.results=s.results.slice(0,n)),s}e.hitTestSelectSameDistance=t,Object.defineProperty(e,"__esModule",{value:!0})}));
