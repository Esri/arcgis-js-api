/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./sources/resolver","../../../../webgl/ProgramTemplate"],(function(e,r,a){"use strict";const t={shaders:{vertexShader:r.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:r.resolveIncludes("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function i(e){return a.createProgram(e,t)}e.createMagnifierProgram=i,e.magnifierProgramTemplate=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
