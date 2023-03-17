/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e){if(e.json&&e.json.origins){const o=e.json.origins,n={"web-document":["web-scene","web-map"]};for(const e in n)if(o[e]){const s=o[e];n[e].forEach((e=>{o[e]=s})),delete o[e]}}}e.process=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
