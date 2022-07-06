/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ReloadableShaderModule as e}from"../core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as r}from"../core/shaderTechnique/ShaderTechnique.js";import{Default3D as i}from"./DefaultVertexAttributeLocations.js";import{Program as o}from"./Program.js";import{S as t}from"../../../../chunks/SSAO.glsl.js";import{makePipelineState as s,defaultColorWriteParams as a}from"../../../webgl/renderState.js";class n extends r{initializeProgram(e){const r=n.shader.get().build(this.configuration);return new o(e.rctx,r,i)}initializePipeline(){return s({colorWrite:a})}}n.shader=new e(t,(()=>import("../shaders/SSAO.glsl.js")));export{n as SSAOTechnique};
