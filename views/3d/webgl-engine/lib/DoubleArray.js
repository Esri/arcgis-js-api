/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../core/typedArrayUtil"],(function(r,e){"use strict";function n(r,n=!1){return r<=e.NATIVE_ARRAY_MAX_SIZE?n?new Array(r).fill(0):new Array(r):new Float64Array(r)}function t(r){return length<=e.NATIVE_ARRAY_MAX_SIZE?Array.from(r):new Float64Array(r)}function A(r,e,n){return Array.isArray(r)?r.slice(e,e+n):r.subarray(e,e+n)}r.doubleArrayFrom=t,r.doubleSubArray=A,r.newDoubleArray=n,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
