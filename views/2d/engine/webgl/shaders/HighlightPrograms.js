/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const t={name:"highlight",shaders:{vertexShader:r.resolveIncludes("highlight/textured.vert"),fragmentShader:r.resolveIncludes("highlight/highlight.frag")},attributes:{a_position:0,a_texcoord:1}},h={name:"blur",shaders:{vertexShader:r.resolveIncludes("highlight/textured.vert"),fragmentShader:r.resolveIncludes("highlight/blur.frag")},attributes:{a_position:0,a_texcoord:1}};e.blur=h,e.highlight=t,Object.defineProperty(e,"__esModule",{value:!0})}));
