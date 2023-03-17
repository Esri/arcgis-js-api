/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=.05;function n(e){return Math.max(Math.round(e/t),1)*t}const o=new Set(["StartTimeOffset","Duration","RepeatDelay"]);function r(e,t){return o.has(t)?n(e):e}e.quantizeIfNeeded=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
