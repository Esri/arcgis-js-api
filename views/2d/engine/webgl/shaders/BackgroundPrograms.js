/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const o={shaders:{vertexShader:r.resolveIncludes("background/background.vert"),fragmentShader:r.resolveIncludes("background/background.frag")},attributes:new Map([["a_pos",0]])};e.background=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
