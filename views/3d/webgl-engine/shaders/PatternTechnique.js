/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import{ShaderOutput as t}from"../core/shaderLibrary/ShaderOutputOptions.js";import{ReloadableShaderModule as o}from"../core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as r}from"../core/shaderTechnique/ShaderTechnique.js";import{parameter as i}from"../core/shaderTechnique/ShaderTechniqueConfiguration.js";import{CullFaceOptions as s,TransparencyPassType as n}from"../lib/basicInterfaces.js";import{blendingDefault as a,oitBlending as p,oitDepthTest as l,oitDepthWrite as c,getOITPolygonOffset as u}from"../lib/OrderIndependentTransparency.js";import{Program as h}from"../lib/Program.js";import{stencilWriteMaskOn as d,stencilToolMaskBaseParams as f,stencilBaseAllZerosParams as m}from"../lib/StencilUtils.js";import{VertexAttribute as y}from"../lib/VertexAttribute.js";import{DefaultTechniqueConfiguration as O}from"../materials/DefaultTechniqueConfiguration.js";import{Style as P}from"../materials/PatternStyle.js";import{P as g}from"../../../../chunks/Pattern.glsl.js";import{makePipelineState as T,cullingParams as S,defaultDepthWriteParams as b,defaultColorWriteParams as v}from"../../../webgl/renderState.js";class j extends r{initializeProgram(e){const t=j.shader.get().build(this.configuration);return new h(e.rctx,t,w)}_setPipelineState(e,o){const r=this.configuration,i=e===n.NONE,s=e===n.FrontFace;return T({blending:r.output===t.Color||r.output===t.Alpha?i?a:p(e):null,culling:S(r.cullFace),depthTest:{func:l(e)},depthWrite:i?r.writeDepth&&b:c(e),colorWrite:v,stencilWrite:r.hasOccludees?d:null,stencilTest:r.hasOccludees?o?f:m:null,polygonOffset:i||s?r.polygonOffset&&C:u(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}j.shader=new o(g,(()=>import("./Pattern.glsl.js")));const C={factor:1,units:1};class N extends O{constructor(){super(...arguments),this.output=t.Color,this.cullFace=s.None,this.transparencyPassType=n.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.writeDepth=!0,this.hasOccludees=!1,this.enableOffset=!0,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}e([i({count:t.COUNT})],N.prototype,"output",void 0),e([i({count:s.COUNT})],N.prototype,"cullFace",void 0),e([i({count:P.COUNT})],N.prototype,"style",void 0),e([i({count:n.COUNT})],N.prototype,"transparencyPassType",void 0),e([i()],N.prototype,"hasSlicePlane",void 0),e([i()],N.prototype,"hasVertexColors",void 0),e([i()],N.prototype,"polygonOffset",void 0),e([i()],N.prototype,"writeDepth",void 0),e([i()],N.prototype,"hasOccludees",void 0),e([i()],N.prototype,"patternSpacing",void 0),e([i()],N.prototype,"lineWidth",void 0),e([i()],N.prototype,"enableOffset",void 0),e([i()],N.prototype,"draped",void 0),e([i()],N.prototype,"hasMultipassTerrain",void 0),e([i()],N.prototype,"cullAboveGround",void 0);const w=new Map([[y.POSITION,0],[y.COLOR,3],[y.UVMAPSPACE,4],[y.BOUNDINGRECT,5]]);export{j as PatternTechnique,N as PatternTechniqueConfiguration,w as patternVertexAttributeLocations};