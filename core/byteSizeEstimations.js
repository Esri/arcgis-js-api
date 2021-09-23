/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){return 32+e.length}function n(){return 16}function r(e){if(!e)return 0;let r=32;for(const i in e)if(e.hasOwnProperty(i)){const s=e[i];switch(typeof s){case"string":r+=t(s);break;case"number":r+=n();break;case"boolean":r+=4}}return r}function i(e,t){return 32+e.length*t}e.estimateAttributesObjectSize=r,e.estimateFixedArraySize=i,e.estimateNumberByteSize=n,e.estimateStringByteSize=t,Object.defineProperty(e,"__esModule",{value:!0})}));
