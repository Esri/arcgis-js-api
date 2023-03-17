/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/typedArrayUtil"],(function(r,t){"use strict";function e(r){if(r.length<t.NATIVE_ARRAY_MAX_SIZE)return Array.from(r);if(Array.isArray(r))return Float64Array.from(r);switch(r.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(r);case 2:return Uint16Array.from(r);case 4:return Float32Array.from(r);default:return Float64Array.from(r)}}r.cloneAttributeData=e,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
