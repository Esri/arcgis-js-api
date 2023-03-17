/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";function e(t){let e,r,i=[],u=!1;function o(...o){return u&&e===this&&n(o,i)||(r=t.apply(this,o),e=this,i=o,u=!0),r}return o}function n(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}t.memoize=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
