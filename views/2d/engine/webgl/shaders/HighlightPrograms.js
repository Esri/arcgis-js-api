/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,t){"use strict";const r={shaders:{vertexShader:t.resolveIncludes("highlight/textured.vert"),fragmentShader:t.resolveIncludes("highlight/highlight.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])},s={shaders:{vertexShader:t.resolveIncludes("highlight/textured.vert"),fragmentShader:t.resolveIncludes("highlight/blur.frag")},attributes:new Map([["a_position",0],["a_texcoord",1]])};e.blur=s,e.highlight=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
