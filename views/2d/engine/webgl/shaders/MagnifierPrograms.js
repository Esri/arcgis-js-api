/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../webgl/BufferObject","../../../../webgl/FramebufferObject","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../webgl/checkWebGLError","../../../../webgl/enums","../../../../../chunks/builtins","../../../../webgl/programUtils","../../../../webgl/renderState","../../../../webgl/Texture","../../../../webgl/VertexArrayObject","./sources/resolver"],(function(e,r,a,t,n,l,s,i,g,u,c,o,b){"use strict";const f={shaders:{vertexShader:b.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:b.resolveIncludes("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function m(e){return g.createProgram(e,f)}e.createMagnifierProgram=m,e.magnifierProgramTemplate=f,Object.defineProperty(e,"__esModule",{value:!0})}));
