/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.process=function(e){if(e.json&&e.json.origins){const n=e.json.origins,o={"web-document":["web-scene","web-map"]};for(const e in o)if(n[e]){const s=n[e];o[e].forEach((e=>{n[e]=s})),delete n[e]}}},Object.defineProperty(e,"__esModule",{value:!0})}));
