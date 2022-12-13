/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./contextCache"],(function(e,t){"use strict";const o={enabled:!1,disposeContextCache:()=>{const e=t.getContextCache();e.forEach((e=>e.dispose())),e.clear()}};e.contextCache=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
