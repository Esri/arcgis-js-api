/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import{ViewingMode as t}from"../../../ViewingMode.js";import{ShaderOutput as o}from"../core/shaderLibrary/ShaderOutputOptions.js";import{PBRMode as r}from"../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js";import{doublePrecisionRequiresObfuscation as i}from"../core/shaderLibrary/util/DoublePrecision.glsl.js";import{ReloadableShaderModule as s}from"../core/shaderTechnique/ReloadableShaderModule.js";import{ShaderTechnique as a}from"../core/shaderTechnique/ShaderTechnique.js";import{parameter as n}from"../core/shaderTechnique/ShaderTechniqueConfiguration.js";import{TransparencyPassType as p}from"../lib/basicInterfaces.js";import{Default3D as u}from"../lib/DefaultVertexAttributeLocations.js";import{blendingDefault as l,oitBlending as c,oitDepthTest as h,oitDepthWrite as d,getOITPolygonOffset as f}from"../lib/OrderIndependentTransparency.js";import{Program as m}from"../lib/Program.js";import{DefaultTechniqueConfiguration as y}from"./DefaultTechniqueConfiguration.js";import{W as b}from"../../../../chunks/WaterSurface.glsl.js";import{makePipelineState as g,defaultDepthWriteParams as v,defaultColorWriteParams as P}from"../../../webgl/renderState.js";class S extends a{constructor(e,t,o){super(e,t,o),this._textureRepository=e.waterTextureRepository}initializeConfiguration(e,o){o.spherical=e.viewingMode===t.Global,o.doublePrecisionRequiresObfuscation=i(e.rctx)}initializeProgram(e){const t=S.shader.get().build(this.configuration);return new m(e.rctx,t,u)}bindPass(e,t){this.program.bindPass(e,t),this.configuration.output!==o.Color&&this.configuration.output!==o.Normal||this._textureRepository.bind(this.program)}_setPipelineState(e){const t=this.configuration,r=e===p.NONE,i=e===p.FrontFace;return g({blending:t.output!==o.Normal&&t.output!==o.Highlight&&t.transparent?r?l:c(e):null,depthTest:{func:h(e)},depthWrite:r?t.writeDepth&&v:d(e),colorWrite:P,polygonOffset:r||i?null:f(t.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}S.shader=new s(b,(()=>import("../shaders/WaterSurface.glsl.js")));class T extends y{constructor(){super(...arguments),this.output=o.Color,this.transparencyPassType=p.NONE,this.spherical=!1,this.receiveShadows=!1,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.hasScreenSpaceReflections=!1,this.doublePrecisionRequiresObfuscation=!1,this.hasCloudsReflections=!1,this.isDraped=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}e([n({count:o.COUNT})],T.prototype,"output",void 0),e([n({count:p.COUNT})],T.prototype,"transparencyPassType",void 0),e([n()],T.prototype,"spherical",void 0),e([n()],T.prototype,"receiveShadows",void 0),e([n()],T.prototype,"hasSlicePlane",void 0),e([n()],T.prototype,"transparent",void 0),e([n()],T.prototype,"enableOffset",void 0),e([n()],T.prototype,"writeDepth",void 0),e([n()],T.prototype,"hasScreenSpaceReflections",void 0),e([n()],T.prototype,"doublePrecisionRequiresObfuscation",void 0),e([n()],T.prototype,"hasCloudsReflections",void 0),e([n()],T.prototype,"isDraped",void 0),e([n()],T.prototype,"hasMultipassTerrain",void 0),e([n()],T.prototype,"cullAboveGround",void 0),e([n({constValue:r.Water})],T.prototype,"pbrMode",void 0),e([n({constValue:!0})],T.prototype,"useCustomDTRExponentForWater",void 0),e([n({constValue:!0})],T.prototype,"highStepCount",void 0),e([n({constValue:!1})],T.prototype,"useFillLights",void 0);export{S as WaterTechnique,T as WaterTechniqueConfiguration};