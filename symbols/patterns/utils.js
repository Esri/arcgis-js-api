/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./Pattern3D","./StylePattern3D"],(function(e,t,r){"use strict";function n(e,t,n){if(!e)return e;switch(e.type){case"style":{const t=new r;return t.read(e,n),t}}}const s={types:{key:"type",base:t,typeMap:{style:r}},json:{read:n,write:!0}};e.read=n,e.symbol3dPatternProperty=s,Object.defineProperty(e,"__esModule",{value:!0})}));
