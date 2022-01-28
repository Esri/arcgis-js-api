/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const t={shaders:{vertexShader:r.resolveIncludes("highlight/textured.vert"),fragmentShader:r.resolveIncludes("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},h={shaders:{vertexShader:r.resolveIncludes("highlight/textured.vert"),fragmentShader:r.resolveIncludes("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};e.blur=h,e.highlight=t,Object.defineProperty(e,"__esModule",{value:!0})}));
