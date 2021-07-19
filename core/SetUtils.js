/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(e,n){"use strict";function o(e,n){for(const o of e.entries())if(n(o[0]))return!0;return!1}function t(e,o){const t=new Set;return n.isSome(e)&&e.forEach((e=>t.add(e))),n.isSome(o)&&o.forEach((e=>t.add(e))),t}e.someSet=o,e.union=t,Object.defineProperty(e,"__esModule",{value:!0})}));
