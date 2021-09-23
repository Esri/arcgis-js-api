/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/MultipassTerrainTest.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/OrderIndependentTransparency","../lib/Program","../lib/StencilUtils","../../../../chunks/ColorMaterial.glsl","../../../webgl/renderState"],(function(e,t,r,a,i,o,n,l,s,u,c,p,d,h,f,g,b){"use strict";let m=function(e){function t(){return e.apply(this,arguments)||this}r._inheritsLoose(t,e);var a=t.prototype;return a.initializeProgram=function(e){const r=t.shader.get(),a=this.configuration,i=r.build({output:a.output,OITEnabled:0===a.transparencyPassType,attributeColor:a.vertexColors,slicePlaneEnabled:a.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,multipassTerrainEnabled:a.multipassTerrainEnabled,cullAboveGround:a.cullAboveGround});return new h.Program(e.rctx,i,p.Default3D)},a.bindPass=function(e,t){l.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.program.setUniform4fv("eColor",e.color),4===this.configuration.output&&o.bindOutputHighlight(this.program,t),(1===this.configuration.output||t.multipassTerrainEnabled)&&this.program.setUniform2fv("cameraNearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),n.bindMultipassTerrainTexture(this.program,t))},a.bindDraw=function(e){l.bindView(this.program,e),this.program.rebindTextures(),i.bindSliceUniformsWithOrigin(this.program,this.configuration,e)},a.setPipelineState=function(e,t){const r=this.configuration,a=3===e,i=2===e;return b.makePipelineState({blending:0!==r.output&&7!==r.output||!r.transparent?null:a?d.blendingDefault:d.OITBlending(e),culling:b.cullingParams(r.cullFace),depthTest:{func:d.OITDepthTest(e)},depthWrite:a||i?r.writeDepth&&b.defaultDepthWriteParams:null,colorWrite:b.defaultColorWriteParams,stencilWrite:r.sceneHasOcludees?f.stencilWriteMaskOn:null,stencilTest:r.sceneHasOcludees?t?f.stencilToolMaskBaseParams:f.stencilBaseAllZerosParams:null,polygonOffset:a||i?r.polygonOffset&&y:d.getOITPolygonOffset(r.enableOffset)})},a.initializePipeline=function(){return this._occludeePipelineState=this.setPipelineState(this.configuration.transparencyPassType,!0),this.setPipelineState(this.configuration.transparencyPassType,!1)},a.getPipelineState=function(e){return e?this._occludeePipelineState:this.pipeline},t}(u.ShaderTechnique);m.shader=new s.ReloadableShaderModule(g.ColorMaterialShader,(()=>new Promise((function(t,r){e(["./ColorMaterial.glsl"],t,r)}))));const y={factor:1,units:1};let T=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).output=0,t.cullFace=0,t.slicePlaneEnabled=!1,t.vertexColors=!1,t.transparent=!1,t.polygonOffset=!1,t.enableOffset=!0,t.writeDepth=!0,t.sceneHasOcludees=!1,t.transparencyPassType=3,t.multipassTerrainEnabled=!1,t.cullAboveGround=!1,t}return r._inheritsLoose(t,e),t}(c.ShaderTechniqueConfiguration);a.__decorate([c.parameter({count:8})],T.prototype,"output",void 0),a.__decorate([c.parameter({count:3})],T.prototype,"cullFace",void 0),a.__decorate([c.parameter()],T.prototype,"slicePlaneEnabled",void 0),a.__decorate([c.parameter()],T.prototype,"vertexColors",void 0),a.__decorate([c.parameter()],T.prototype,"transparent",void 0),a.__decorate([c.parameter()],T.prototype,"polygonOffset",void 0),a.__decorate([c.parameter()],T.prototype,"enableOffset",void 0),a.__decorate([c.parameter()],T.prototype,"writeDepth",void 0),a.__decorate([c.parameter()],T.prototype,"sceneHasOcludees",void 0),a.__decorate([c.parameter({count:4})],T.prototype,"transparencyPassType",void 0),a.__decorate([c.parameter()],T.prototype,"multipassTerrainEnabled",void 0),a.__decorate([c.parameter()],T.prototype,"cullAboveGround",void 0),t.ColorMaterialTechnique=m,t.ColorMaterialTechniqueConfiguration=T,Object.defineProperty(t,"__esModule",{value:!0})}));
