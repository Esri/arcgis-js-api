/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(o){"use strict";function e(o,i){if(o&&i)for(const n of o.children)if(n.localName in i){const o=i[n.localName];if("function"==typeof o){const i=o(n);i&&e(n,i)}else e(n,o)}}function*i(o,e){for(const n of o.children)if(n.localName in e){const o=e[n.localName];"function"==typeof o?yield o(n):yield*i(n,o)}}o.iterateXML=i,o.visitXML=e,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
