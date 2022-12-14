/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../typedArrayUtil"],(function(e,r){"use strict";function t(e){return r.isFloat32Array(e)&&e.length>=3}function i(e){return(r.isFloat64Array(e)||Array.isArray(e))&&e.length>=3}function n(e){return t(e)||i(e)}e.isVec3=n,e.isVec3f32=t,e.isVec3f64=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
