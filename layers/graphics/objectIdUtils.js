/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(t){"use strict";const e=1;function i(t,e){let i=0;for(const n of e){const e=n.attributes?.[t];"number"==typeof e&&isFinite(e)&&(i=Math.max(i,e))}return i}t.findLastObjectIdFromFeatures=i,t.initialObjectId=e,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
