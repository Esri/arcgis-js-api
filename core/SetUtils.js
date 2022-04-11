/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./maybe"],(function(e,o){"use strict";function n(e,o){for(const n of e.entries())if(o(n[0]))return!0;return!1}function t(e,n){const t=new Set;return o.isSome(e)&&e.forEach((e=>t.add(e))),o.isSome(n)&&n.forEach((e=>t.add(e))),t}e.someSet=n,e.union=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
