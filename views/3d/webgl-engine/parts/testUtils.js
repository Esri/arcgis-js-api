/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./contextCache"],(function(e,t){"use strict";const o={enabled:!1,disposeContextCache:()=>{const e=t.getContextCache();e.forEach((e=>e.dispose())),e.clear()}};e.contextCache=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
