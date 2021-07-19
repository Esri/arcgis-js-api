/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,n){for(const i of e.children)if(i.localName in n){const e=n[i.localName];if("function"==typeof e){const n=e(i);n&&o(i,n)}else o(i,e)}}function*n(e,o){for(const i of e.children)if(i.localName in o){const e=o[i.localName];"function"==typeof e?yield e(i):yield*n(i,e)}}e.iterateXML=n,e.visitXML=o,Object.defineProperty(e,"__esModule",{value:!0})}));
