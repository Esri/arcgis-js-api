/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{resolveIncludes as r}from"./sources/resolver.js";import{createProgram as e}from"../../../../webgl/ProgramTemplate.js";const a={shaders:{vertexShader:r("magnifier/magnifier.vert"),fragmentShader:r("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function t(r){return e(r,a)}export{t as createMagnifierProgram,a as magnifierProgramTemplate};
