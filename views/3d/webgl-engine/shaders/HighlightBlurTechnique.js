/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ReloadableShaderModule as r}from"../core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as e}from"../core/shaderTechnique/ShaderTechnique.js";import{Default3D as i}from"../lib/DefaultVertexAttributeLocations.js";import{Program as t}from"../lib/Program.js";import{a as o}from"../../../../chunks/HighlightBlur.glsl.js";import{makePipelineState as l,defaultColorWriteParams as s}from"../../../webgl/renderState.js";class a extends e{initializeProgram(r){const e=a.shader.get().build();return new t(r.rctx,e,i)}initializePipeline(){return l({colorWrite:s})}}a.shader=new r(o,(()=>import("./HighlightBlur.glsl.js")));export{a as HighlightBlurTechnique};
