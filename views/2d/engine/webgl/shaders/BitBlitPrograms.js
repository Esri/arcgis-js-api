/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,t){"use strict";const r={shaders:{vertexShader:t.resolveIncludes("bitBlit/bitBlit.vert"),fragmentShader:t.resolveIncludes("bitBlit/bitBlit.frag")},attributes:new Map([["a_pos",0],["a_tex",1]])};e.bitBlit=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
