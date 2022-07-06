/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ReloadableShaderModule as e}from"../core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as r}from"../core/shaderTechnique/ShaderTechnique.js";import{Default3D as i}from"../lib/DefaultVertexAttributeLocations.js";import{Program as t}from"../lib/Program.js";import{H as o}from"../../../../chunks/HighlightApply.glsl.js";import{BlendFactor as l}from"../../../webgl/enums.js";import{makePipelineState as s,separateBlendingParams as m,defaultColorWriteParams as n}from"../../../webgl/renderState.js";class a extends r{initializeProgram(e){const r=a.shader.get().build();return new t(e.rctx,r,i)}initializePipeline(){return s({blending:m(l.SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA),colorWrite:n})}}a.shader=new e(o,(()=>import("./HighlightApply.glsl.js")));export{a as HighlightApplyTechnique};
