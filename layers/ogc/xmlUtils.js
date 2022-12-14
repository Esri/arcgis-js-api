/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function o(e,i){if(e&&i)for(const n of e.children)if(n.localName in i){const e=i[n.localName];if("function"==typeof e){const i=e(n);i&&o(n,i)}else o(n,e)}}function*i(e,o){for(const n of e.children)if(n.localName in o){const e=o[n.localName];"function"==typeof e?yield e(n):yield*i(n,e)}}e.iterateXML=i,e.visitXML=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
