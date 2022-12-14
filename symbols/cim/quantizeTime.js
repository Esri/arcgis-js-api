/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=.05;function n(e){return Math.max(Math.round(e/t),1)*t}const o=new Set(["StartTimeOffset","Duration","RepeatDelay"]);function u(e,t){return o.has(t)?n(e):e}e.quantizeIfNeeded=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
