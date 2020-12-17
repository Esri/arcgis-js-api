/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o){return!!e.typeKeywords&&e.typeKeywords.indexOf(o)>-1}e.addTypeKeyword=function(e,t){if(!o(e,t)){const o=e.typeKeywords;o?o.push(t):e.typeKeywords=[t]}},e.hasTypeKeyword=o,e.removeTypeKeyword=function(e,o){const t=e.typeKeywords;if(t){const e=t.indexOf(o);e>-1&&t.splice(e,1)}},Object.defineProperty(e,"__esModule",{value:!0})}));
