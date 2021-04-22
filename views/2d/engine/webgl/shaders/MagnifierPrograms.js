/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/mathUtils","../../../../../chunks/builtins","../../../../webgl/checkWebGLError","../../../../webgl/FramebufferObject","../../../../webgl/programUtils","./sources/resolver"],(function(e,r,a,t,i,s,n,o){"use strict";const c={shaders:{vertexShader:o.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:o.resolveIncludes("magnifier/magnifier.frag")},attributes:{a_pos:0}};function g(e){return n.createProgram(e,c)}e.createMagnifierProgram=g,e.magnifierProgramTemplate=c,Object.defineProperty(e,"__esModule",{value:!0})}));
