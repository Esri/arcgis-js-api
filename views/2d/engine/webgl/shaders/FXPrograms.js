/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver"],(function(e,r){"use strict";const t={shaders:{vertexShader:r.resolveIncludes("fx/integrate.vert"),fragmentShader:r.resolveIncludes("fx/integrate.frag")},attributes:new Map([["a_position",0]])};e.integrateProgram=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
