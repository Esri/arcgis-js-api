/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["require","exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/tslib.es6","../../../../../../core/maybe","../../../../../../chunks/mat3f64","../../../../../../chunks/vec4f64","../../../core/shaderTechnique/ReloadableShaderModule","../../../core/shaderTechnique/ShaderTechnique","../../../core/shaderTechnique/ShaderTechniqueConfiguration","../../../../../webgl/Program","../../../../../webgl/renderState","../../../core/shaderLibrary/Slice.glsl","../../../core/shaderLibrary/output/OutputHighlight.glsl","../../../lib/OrderIndependentTransparency","../../../lib/StencilUtils","../../../core/shaderLibrary/shading/ScreenSpaceReflections.glsl","../../../core/shaderLibrary/util/DoublePrecision.glsl","../../../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl","../../../core/shaderLibrary/attributes/VertexPosition.glsl","../../../../../../chunks/ComponentShader.glsl"],(function(e,r,t,o,a,i,n,s,l,d,u,c,p,m,h,T,b,f,O,_,x){"use strict";const g={DIFFUSE:0,COMPONENT_COLOR:1,NORMAL:2,EMISSION:3,OCCLUSION:4,METALLIC_ROUGHNESS:5,OVERLAY0_COLOR:2,OVERLAY1_COLOR:3,OVERLAY0_NORMAL:4,OVERLAY1_NORMAL:5,SSAO:6,SHADOW_MAP:7,PREPASS_LINEAR_DEPTH:8,LAST_FRAME_COLOR:9,TERRAIN_LINEAR_DEPTH:10,GEOMETRY_LINEAR_DEPTH:11};let v=function(e){function r(){return e.apply(this,arguments)||this}t._inheritsLoose(r,e);var o=r.prototype;return o.bindPass=function(e,r){const t=this.program;_.VertexPosition.bindViewProjTransform(t,r.viewTransform),p.Slice.bindUniforms(this.program,this.configuration,r.slicePlane),0===r.identifier&&void 0!==r.ssrParams&&(r.ssrParams.lastFrameColorTextureUnit=g.LAST_FRAME_COLOR,r.ssrParams.linearDepthTextureUnit=g.PREPASS_LINEAR_DEPTH,b.ScreenSpaceReflections.bindUniforms(this.program,e,r.ssrParams)),0===r.identifier&&(t.setUniformMatrix3fv("uTransformNormal_ViewFromGlobal",r.transformNormal_ViewFromGlobal),2===r.subPass&&t.setUniform2fv("cameraNearFar",r.cameraNearFar),0!==r.subPass&&1!==r.subPass||!r.multipassTerrainParams.multipassTerrainEnabled||(this.program.setUniform2fv("cameraNearFar",r.cameraNearFar),t.setUniform2fv("inverseViewport",r.inverseViewport),r.multipassTerrainParams.terrainLinearDepthTexture&&(t.setUniform1i("terrainDepthTexture",g.TERRAIN_LINEAR_DEPTH),e.bindTexture(r.multipassTerrainParams.terrainLinearDepthTexture,g.TERRAIN_LINEAR_DEPTH))),0===r.subPass&&(r.ambientOcclusionEnabled&&r.ambientOcclusion.bind(t,g.SSAO),r.shadowsEnabled&&r.shadowMap.bind(t,g.SHADOW_MAP),r.lighting.setUniforms(this.program,r.integratedMesh))),1===r.identifier&&this.program.setUniform2fv("cameraNearFar",r.cameraNearFar),2===r.identifier&&m.OutputHighlight.bindOutputHighlight(e,this.program,r)},o.bindDraw=function(e,r){if(_.VertexPosition.bindModelTransform(this.program,e),this.program.setUniformMatrix3fv("uTransformNormal_GlobalFromModel",e.transformNormal_GlobalFromModel),r.isIntegratedMesh){const t=r.overlayTexScale,o=r.overlayTexOffset;this.program.setUniform4fv("overlayTexOffset",[e.toMapSpace[0]*t[0]+o[0],e.toMapSpace[1]*t[1]+o[1],e.toMapSpace[0]*t[2]+o[2],e.toMapSpace[1]*t[3]+o[3]]),this.program.setUniform4fv("overlayTexScale",[e.toMapSpace[2]*t[0],e.toMapSpace[3]*t[1],e.toMapSpace[2]*t[2],e.toMapSpace[3]*t[3]])}},o.bindMaterial=function(e,r,t){const o=this.program;o.setUniform4fv("uBaseColor",r.baseColor),o.setUniform1f("uObjectOpacity",r.objectOpacity),o.setUniform1f("textureAlphaCutoff",r.alphaCutoff),1===r.componentParameters.type?r.componentParameters.texture.bind(o,{texName:"uComponentColorTex",invDimName:"uComponentColorTexInvDim",unit:g.COMPONENT_COLOR}):(o.setUniform4fv("uExternalColor",r.componentParameters.externalColor),o.setUniform1i("uExternalColorMixMode",r.componentParameters.externalColorMixMode)),a.isSome(r.baseColorTexture)&&r.baseColorTexture.bind(e,o,"uBaseColorTexture",g.DIFFUSE,"uBaseColorTextureSize"),0!==this.configuration.output&&7!==this.configuration.output||(O.PhysicallyBasedRenderingParameters.bindUniforms(this.program,r,this.configuration.isSchematic),a.isSome(r.metallicRoughnessTexture)&&r.metallicRoughnessTexture.bind(e,o,"texMetallicRoughness",g.METALLIC_ROUGHNESS,"texMetallicRoughnessSize"),a.isSome(r.emissionTexture)&&r.emissionTexture.bind(e,o,"texEmission",g.EMISSION,"texEmissionSize"),a.isSome(r.occlusionTexture)&&r.occlusionTexture.bind(e,o,"texOcclusion",g.OCCLUSION,"texOcclusionSize"),a.isSome(r.normalTexture)&&r.normalTexture.bind(e,o,"normalTexture",g.NORMAL,"normalTextureSize")),r.isIntegratedMesh&&(0===t.identifier&&0===t.subPass?(e.bindTexture(a.unwrap(r.overlayColorInner),g.OVERLAY0_COLOR),e.bindTexture(a.unwrap(r.overlayColorOuter),g.OVERLAY1_COLOR),e.bindTexture(a.unwrap(r.overlayNormalInner),g.OVERLAY0_NORMAL),e.bindTexture(a.unwrap(r.overlayNormalOuter),g.OVERLAY1_NORMAL),o.setUniform1i("ovInnerNormalTex",g.OVERLAY0_NORMAL),o.setUniform1i("ovOuterNormalTex",g.OVERLAY1_NORMAL)):2===t.identifier&&(e.bindTexture(a.unwrap(r.overlayHighlightInner),g.OVERLAY0_COLOR),e.bindTexture(a.unwrap(r.overlayHighlightOuter),g.OVERLAY1_COLOR)),o.setUniform1i("ovInnerColorTex",g.OVERLAY0_COLOR),o.setUniform1i("ovOuterColorTex",g.OVERLAY1_COLOR),o.setUniform1f("overlayOpacity",1))},o.initializeProgram=function(e){const t=r.shader.get(),o=this.configuration,a=t.build({multipassTerrainEnabled:o.multipassTerrainEnabled,cullAboveGround:o.cullAboveGround,OITEnabled:0===o.transparencyPassType,output:o.output,normalType:0===o.integratedMeshMode?o.hasNormals?1:3:2,attributeColor:o.hasVertexColors,attributeTextureCoordinates:o.vertexTextureCoordinates,componentData:o.componentData,alphaDiscardMode:o.alphaDiscardMode,baseColorTexture:o.baseColorTexture,doubleSidedMode:o.doubleSidedMode,receiveAmbientOcclusion:o.receiveAmbientOcclusion,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,viewingMode:e.viewingMode,vertexDiscardMode:o.vertexDiscardMode,pbrMode:3===o.integratedMeshMode?4:o.usePBR?o.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:o.hasMetalnessAndRoughnessTexture,hasEmissionTexture:o.hasEmissionTexture,hasOcclusionTexture:o.hasOcclusionTexture,hasNormalTexture:o.hasNormalTexture,vertexTangets:!1,useOldSceneLightInterface:!1,supportsTextureAtlas:!0,doublePrecisionRequiresObfuscation:f.doublePrecisionRequiresObfuscation(e.rctx),overlayEnabled:2===o.integratedMeshMode||3===o.integratedMeshMode,ssrEnabled:o.ssrEnabled,highStepCount:!1,ellipsoidMode:o.ellipsoidMode});return new u(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),t.attributeLocations)},o.setPipelineState=function(e){const r=this.configuration,t=0!==r.integratedMeshMode,o=3===e,a=2===e;return c.makePipelineState({blending:0!==r.output&&7!==r.output||!r.blendingEnabled?null:o?h.blendingDefault:h.OITBlending(e),culling:M[r.cullFace],depthTest:{func:h.OITDepthTest(e)},depthWrite:o||a?c.defaultDepthWriteParams:null,colorWrite:c.defaultColorWriteParams,stencilWrite:t||r.sceneHasOcludees?T.stencilWriteMaskOn:null,stencilTest:t?T.replaceBitWhenDepthTestPasses(1):r.sceneHasOcludees?T.stencilBaseAllZerosParams:null,polygonOffset:o||a?r.polygonOffsetEnabled?{factor:2,units:2}:null:h.OITPolygonOffset})},o.initializePipeline=function(){return this.setPipelineState(this.configuration.transparencyPassType)},r}(l.ShaderTechnique);v.shader=new s.ReloadableShaderModule(x.ComponentShader,(()=>new Promise((function(r,t){e(["./shader/ComponentShader.glsl"],r,t)}))));const M=[];M[0]=null,M[2]={face:1029,mode:2305},M[1]={face:1028,mode:2305};let S=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).transformNormal_GlobalFromModel=i.create(),r.toMapSpace=n.create(),r}return t._inheritsLoose(r,e),r}(_.VertexPosition.ModelTransform),E=function(e){function r(){var r;return(r=e.apply(this,arguments)||this).output=0,r.hasVertexColors=!1,r.hasNormals=!1,r.vertexTextureCoordinates=0,r.componentData=0,r.slicePlaneEnabled=!1,r.cullFace=2,r.baseColorTexture=!1,r.receiveAmbientOcclusion=!0,r.receiveShadows=!0,r.vertexDiscardMode=0,r.doubleSidedMode=2,r.blendingEnabled=!0,r.alphaDiscardMode=1,r.integratedMeshMode=0,r.ssrEnabled=!1,r.polygonOffsetEnabled=!1,r.usePBR=!1,r.isSchematic=!1,r.hasMetalnessAndRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.sceneHasOcludees=!1,r.transparencyPassType=3,r.ellipsoidMode=1,r.multipassTerrainEnabled=!1,r.cullAboveGround=!0,r}return t._inheritsLoose(r,e),r}(d.ShaderTechniqueConfiguration);o.__decorate([d.parameter({count:8})],E.prototype,"output",void 0),o.__decorate([d.parameter()],E.prototype,"hasVertexColors",void 0),o.__decorate([d.parameter()],E.prototype,"hasNormals",void 0),o.__decorate([d.parameter({count:3})],E.prototype,"vertexTextureCoordinates",void 0),o.__decorate([d.parameter({count:2})],E.prototype,"componentData",void 0),o.__decorate([d.parameter()],E.prototype,"slicePlaneEnabled",void 0),o.__decorate([d.parameter({count:3})],E.prototype,"cullFace",void 0),o.__decorate([d.parameter()],E.prototype,"baseColorTexture",void 0),o.__decorate([d.parameter()],E.prototype,"receiveAmbientOcclusion",void 0),o.__decorate([d.parameter()],E.prototype,"receiveShadows",void 0),o.__decorate([d.parameter({count:3})],E.prototype,"vertexDiscardMode",void 0),o.__decorate([d.parameter({count:3})],E.prototype,"doubleSidedMode",void 0),o.__decorate([d.parameter()],E.prototype,"blendingEnabled",void 0),o.__decorate([d.parameter({count:4})],E.prototype,"alphaDiscardMode",void 0),o.__decorate([d.parameter({count:4})],E.prototype,"integratedMeshMode",void 0),o.__decorate([d.parameter()],E.prototype,"ssrEnabled",void 0),o.__decorate([d.parameter()],E.prototype,"polygonOffsetEnabled",void 0),o.__decorate([d.parameter()],E.prototype,"usePBR",void 0),o.__decorate([d.parameter()],E.prototype,"isSchematic",void 0),o.__decorate([d.parameter()],E.prototype,"hasMetalnessAndRoughnessTexture",void 0),o.__decorate([d.parameter()],E.prototype,"hasEmissionTexture",void 0),o.__decorate([d.parameter()],E.prototype,"hasOcclusionTexture",void 0),o.__decorate([d.parameter()],E.prototype,"hasNormalTexture",void 0),o.__decorate([d.parameter()],E.prototype,"sceneHasOcludees",void 0),o.__decorate([d.parameter({count:4})],E.prototype,"transparencyPassType",void 0),o.__decorate([d.parameter({count:4})],E.prototype,"ellipsoidMode",void 0),o.__decorate([d.parameter()],E.prototype,"multipassTerrainEnabled",void 0),o.__decorate([d.parameter()],E.prototype,"cullAboveGround",void 0),r.ComponentDrawParameters=S,r.ComponentTechnique=v,r.ComponentTechniqueConfiguration=E,r.TextureUnits=g,Object.defineProperty(r,"__esModule",{value:!0})}));
