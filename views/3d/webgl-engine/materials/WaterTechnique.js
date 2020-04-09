// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/shading/WaterDistortion.glsl","../core/shaderLibrary/util/Camera.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultTextureUnits","../lib/DefaultVertexAttributeLocations","../shaders/WaterSurface.glsl","../../../webgl/Program","../../../webgl/renderState"],(function(e,r,t,i,a,o,n,s,u,l,p,d,h,c,f,g,m,b){Object.defineProperty(r,"__esModule",{value:!0});var S=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get(),t=this.configuration,a=r.build({output:t.output,viewingMode:e.viewingMode,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:t.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0});return new m(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),f.Default3D)},i.prototype.bindPass=function(e,r){0!==this.configuration.output&&2!==this.configuration.output||u.WaterDistortion.bindUniforms(this.program,r),0!==this.configuration.output&&5!==this.configuration.output||this.program.setUniform4fv("waterColor",r.color)},i.prototype.bindDraw=function(e){n.Transform.bindUniforms(this.program,e),0===this.configuration.output&&(l.Camera.bindUniforms(this.program,e),o.Slice.bindUniformsWithOrigin(this.program,this.configuration,e),s.ReadShadowMap.bindUniforms(this.program,e,c.DefaultTextureUnits.SHADOW_MAP))},i.prototype.initializePipeline=function(){var e=this.configuration;return 2===e.output?b.makePipelineState({depthTest:{func:513},depthWrite:e.writeDepth&&b.defaultDepthWriteParams,colorWrite:b.defaultColorWriteParams}):b.makePipelineState({blending:e.transparent&&b.separateBlendingParams(770,1,771,771),depthTest:{func:513},depthWrite:e.writeDepth&&b.defaultDepthWriteParams,colorWrite:b.defaultColorWriteParams})},i.shader=new p.ReloadableShaderModule(g,"../shaders/WaterSurface.glsl",e),i}(d.ShaderTechnique);r.WaterTechnique=S;var v=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.receiveShadows=!1,r.slicePlaneEnabled=!1,r.transparent=!1,r.writeDepth=!1,r}return t(r,e),i([h.parameter({count:7})],r.prototype,"output",void 0),i([h.parameter()],r.prototype,"receiveShadows",void 0),i([h.parameter()],r.prototype,"slicePlaneEnabled",void 0),i([h.parameter()],r.prototype,"transparent",void 0),i([h.parameter()],r.prototype,"writeDepth",void 0),r}(h.ShaderTechniqueConfiguration);r.WaterTechniqueConfiguration=v}));