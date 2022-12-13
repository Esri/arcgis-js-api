/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";const l="Size",n="InvSize";function s(e,s,i=!1,r=0){if(e.hasWebGL2Context){const e=t.glsl`vec2(textureSize(${s}, ${t.glsl.int(r)}))`;return i?"(1.0 / "+e+")":e}return i?s+n:s+l}function i(e,l,s,i=null,r=0){if(e.hasWebGL2Context)return t.glsl`texelFetch(${l}, ivec2(${s}), ${t.glsl.int(r)})`;let u=t.glsl`texture2D(${l}, ${s} * `;return u+=i?t.glsl`(${i}))`:t.glsl`${l+n})`,u}e.TEXTURE_INVERSE_SIZE_UNIFORM_SUFFIX=n,e.TEXTURE_SIZE_UNIFORM_SUFFIX=l,e.texelFetch=i,e.textureSize=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
