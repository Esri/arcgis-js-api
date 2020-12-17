/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./propUtils"],(function(e,r){"use strict";e.renderable=function(e){const n="string"==typeof e?r.splitProps(e):e;return function(e,s){e.hasOwnProperty("_renderableProps")||(e._renderableProps=e._renderableProps?e._renderableProps.slice():[]);const o=e._renderableProps;n?o.push.apply(o,r.normalizePropNames(n,s)):o.push(s)}},Object.defineProperty(e,"__esModule",{value:!0})}));
