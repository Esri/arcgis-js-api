/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ViewingMode as e}from"../../../ViewingMode.js";import{ReloadableShaderModule as i}from"../core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as t}from"../core/shaderTechnique/ShaderTechnique.js";import{Default3D as r}from"../lib/DefaultVertexAttributeLocations.js";import{Program as o}from"../lib/Program.js";import{L as n}from"../../../../chunks/LineCallout.glsl.js";import{CompareFunction as s,BlendFactor as a}from"../../../webgl/enums.js";import{makePipelineState as l,defaultDepthWriteParams as u,separateBlendingParams as m,defaultColorWriteParams as d}from"../../../webgl/renderState.js";class h extends t{initializeConfiguration(i,t){t.spherical=i.viewingMode===e.Global}initializeProgram(e){const i=h.shader.get().build(this.configuration);return new o(e.rctx,i,r)}setPipelineState(e){const i=e?s.ALWAYS:s.LESS;return this.configuration.depthHudEnabled?l({depthTest:{func:i},depthWrite:u}):l({blending:m(a.ONE,a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA),depthTest:{func:i},colorWrite:d})}initializePipeline(){return this.setPipelineState(this.configuration.hasMultipassGeometry)}}h.shader=new i(n,(()=>import("./LineCallout.glsl.js")));export{h as LineCalloutTechnique};