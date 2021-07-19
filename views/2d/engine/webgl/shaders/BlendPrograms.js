/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const s=e=>e.replace("-","_").toUpperCase(),n=e=>`#define ${s(e)}\n`,t={attributes:new Map([["a_pos",0],["a_tex",1]]),shaders:e=>({vertexShader:n(e)+r.resolveIncludes("blend/blend.vert"),fragmentShader:n(e)+r.resolveIncludes("blend/blend.frag")})};e.blend=t,Object.defineProperty(e,"__esModule",{value:!0})}));
