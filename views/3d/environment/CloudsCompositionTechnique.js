/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{C as e}from"../../../chunks/CloudsComposition.glsl.js";import{ReloadableShaderModule as r}from"../webgl-engine/core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as o}from"../webgl-engine/core/shaderTechnique/ShaderTechnique.js";import{Default3D as i}from"../webgl-engine/lib/DefaultVertexAttributeLocations.js";import{Program as t}from"../webgl-engine/lib/Program.js";import{BlendFactor as n,CompareFunction as s}from"../../webgl/enums.js";import{makePipelineState as l,simpleBlendingParams as m,defaultColorWriteParams as a}from"../../webgl/renderState.js";class u extends o{constructor(e){super(e,null,(()=>this.destroy()))}initializeProgram(e){const r=u.shader.get().build();return new t(e.rctx,r,i)}initializePipeline(){return l({blending:m(n.ONE,n.SRC_ALPHA),depthTest:{func:s.LEQUAL},colorWrite:a})}}u.shader=new r(e,(()=>import("./CloudsComposition.glsl.js")));export{u as CloudsCompositionTechnique};