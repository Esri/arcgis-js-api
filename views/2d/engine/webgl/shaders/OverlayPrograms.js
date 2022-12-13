/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const o={shaders:{vertexShader:r.resolveIncludes("overlay/overlay.vert"),fragmentShader:r.resolveIncludes("overlay/overlay.frag")},attributes:new Map([["a_pos",0],["a_uv",1]])};e.overlay=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
