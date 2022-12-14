/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,t){"use strict";const o={shaders:{vertexShader:t.resolveIncludes("tileInfo/tileInfo.vert"),fragmentShader:t.resolveIncludes("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])};e.tileInfo=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
