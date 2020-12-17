/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const n=e=>`#define ${(e=>e.replace("-","_").toUpperCase())(e)}\n`,s={name:"blend",attributes:{a_pos:0,a_tex:1},shaders:e=>({vertexShader:n(e)+r.resolveIncludes("blend/blend.vert"),fragmentShader:n(e)+r.resolveIncludes("blend/blend.frag")})};e.blend=s,Object.defineProperty(e,"__esModule",{value:!0})}));
