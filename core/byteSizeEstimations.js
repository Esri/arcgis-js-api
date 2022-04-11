/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){return 32+e.length}function i(){return 16}function n(e){if(!e)return 0;let n=32;for(const r in e)if(e.hasOwnProperty(r)){const o=e[r];switch(typeof o){case"string":n+=t(o);break;case"number":n+=i();break;case"boolean":n+=4}}return n}function r(e,t){return 32+e.length*t}var o;e.ByteSizeUnit=void 0,(o=e.ByteSizeUnit||(e.ByteSizeUnit={}))[o.KILOBYTES=1024]="KILOBYTES",o[o.MEGABYTES=1048576]="MEGABYTES",o[o.GIGABYTES=1073741824]="GIGABYTES",e.estimateAttributesObjectSize=n,e.estimateFixedArraySize=r,e.estimateNumberByteSize=i,e.estimateStringByteSize=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
