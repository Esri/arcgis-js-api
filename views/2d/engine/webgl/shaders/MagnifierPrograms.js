/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../webgl/BufferObject","../../../../webgl/FramebufferObject","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../webgl/enums","../../../../webgl/RenderingContext","../../../../../chunks/builtins","../../../../webgl/programUtils","../../../../webgl/Texture","../../../../webgl/VertexArrayObject","./sources/resolver"],(function(e,r,t,a,n,i,s,l,g,u,o,c){"use strict";const f={shaders:{vertexShader:c.resolveIncludes("magnifier/magnifier.vert"),fragmentShader:c.resolveIncludes("magnifier/magnifier.frag")},attributes:new Map([["a_pos",0]])};function b(e){return g.createProgram(e,f)}e.createMagnifierProgram=b,e.magnifierProgramTemplate=f,Object.defineProperty(e,"__esModule",{value:!0})}));
