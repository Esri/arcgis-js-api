/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,t){"use strict";const r={shaders:{vertexShader:t.resolveIncludes("highlight/textured.vert"),fragmentShader:t.resolveIncludes("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},h={shaders:{vertexShader:t.resolveIncludes("highlight/textured.vert"),fragmentShader:t.resolveIncludes("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};e.blur=h,e.highlight=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
