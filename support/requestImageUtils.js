/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../request"],(function(e,t){"use strict";async function n(e,n){const{data:s}=await t(e,{responseType:"image",...n});return s}e.requestImage=n,Object.defineProperty(e,"__esModule",{value:!0})}));
