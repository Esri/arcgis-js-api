/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=1;function n(t,e){let n=0;for(const i of e){const e=i.attributes?.[t];"number"==typeof e&&isFinite(e)&&(n=Math.max(n,e))}return n}t.findLastObjectIdFromFeatures=n,t.initialObjectId=e,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
