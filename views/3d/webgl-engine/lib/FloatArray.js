/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/typedArrayUtil"],(function(r,e){"use strict";function t(r,t=!1){return r<=e.NATIVE_ARRAY_MAX_SIZE?t?new Array(r).fill(0):new Array(r):new Float32Array(r)}function a(r){return length<=e.NATIVE_ARRAY_MAX_SIZE?Array.from(r):new Float32Array(r)}function n(r,e,t){return Array.isArray(r)?r.slice(e,e+t):r.subarray(e,e+t)}r.floatArrayFrom=a,r.floatSubArray=n,r.newFloatArray=t,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
