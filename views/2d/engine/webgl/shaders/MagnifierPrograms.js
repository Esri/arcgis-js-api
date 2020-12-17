/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/mathUtils","../../../../../chunks/builtins","../../../../webgl/FramebufferObject","../../../../webgl/programUtils","../../../../webgl/RenderingContext","./sources/resolver"],(function(e,r,a,i,t,n,s,o){"use strict";const g={name:"magnifier",shaders:{vertexShader:o.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:o.resolveIncludes("magnifier/magnifier.frag")},attributes:{a_pos:0}};e.createMagnifierProgram=function(e){return n.createProgram(e,g)},e.magnifierProgramTemplate=g,Object.defineProperty(e,"__esModule",{value:!0})}));
