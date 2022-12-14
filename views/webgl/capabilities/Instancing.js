/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./isWebGL2Context"],(function(e,n){"use strict";function t(e){if(n(e))return e;const t=e.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}e.load=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
