/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import n from"./isWebGL2Context.js";function r(r){if(n(r))return{drawArraysInstanced:r.drawArraysInstanced.bind(r),drawElementsInstanced:r.drawElementsInstanced.bind(r),vertexAttribDivisor:r.vertexAttribDivisor.bind(r)};const t=r.getExtension("ANGLE_instanced_arrays");return t?{drawArraysInstanced:t.drawArraysInstancedANGLE.bind(t),drawElementsInstanced:t.drawElementsInstancedANGLE.bind(t),vertexAttribDivisor:t.vertexAttribDivisorANGLE.bind(t)}:null}export{r as load};
