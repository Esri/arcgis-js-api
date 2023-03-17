/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";const l="Size",n="InvSize";function r(e,r,i=!1,s=0){if(e.hasWebGL2Context){const e=t.glsl`vec2(textureSize(${r}, ${t.glsl.int(s)}))`;return i?"(1.0 / "+e+")":e}return i?r+n:r+l}function i(e,l,r,i=null,s=0){if(e.hasWebGL2Context)return t.glsl`texelFetch(${l}, ivec2(${r}), ${t.glsl.int(s)})`;let u=t.glsl`texture2D(${l}, ${r} * `;return u+=i?t.glsl`(${i}))`:t.glsl`${l+n})`,u}e.TEXTURE_INVERSE_SIZE_UNIFORM_SUFFIX=n,e.TEXTURE_SIZE_UNIFORM_SUFFIX=l,e.texelFetch=i,e.textureSize=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
