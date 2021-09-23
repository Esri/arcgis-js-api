/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,o){if(!t(e,o)){const t=e.typeKeywords;t?t.push(o):e.typeKeywords=[o]}}function t(e,o){return!!e.typeKeywords&&e.typeKeywords.indexOf(o)>-1}function y(e,o){const t=e.typeKeywords;if(t){const e=t.indexOf(o);e>-1&&t.splice(e,1)}}e.addTypeKeyword=o,e.hasTypeKeyword=t,e.removeTypeKeyword=y,Object.defineProperty(e,"__esModule",{value:!0})}));
