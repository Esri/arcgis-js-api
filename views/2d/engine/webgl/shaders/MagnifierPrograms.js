/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../webgl/BufferObject","../../../../webgl/FramebufferObject","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../webgl/checkWebGLError","../../../../webgl/enums","../../../../../chunks/builtins","../../../../webgl/programUtils","../../../../webgl/Texture","../../../../webgl/VertexArrayObject","./sources/resolver"],(function(e,r,a,t,n,s,i,l,g,u,c,o){"use strict";const b={shaders:{vertexShader:o.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:o.resolveIncludes("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function f(e){return g.createProgram(e,b)}e.createMagnifierProgram=f,e.magnifierProgramTemplate=b,Object.defineProperty(e,"__esModule",{value:!0})}));
