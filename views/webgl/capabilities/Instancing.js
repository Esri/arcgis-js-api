/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./isWebGL2Context"],(function(e,n){"use strict";e.load=function(e){if(n(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e)};const t=e.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null},Object.defineProperty(e,"__esModule",{value:!0})}));
