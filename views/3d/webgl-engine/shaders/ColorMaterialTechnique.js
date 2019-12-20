// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./ColorMaterial.glsl","../../../webgl/Program","../../../webgl/renderState"],function(e,r,t,o,i,a,n,l,p,s,u,c,d,h){Object.defineProperty(r,"__esModule",{value:!0});var f=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),t=this.configuration,i=r.build({attributeColor:t.vertexColors,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled});return new d(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),u.Default3D)},o.prototype.bindPass=function(e,r,t){this.program.setUniform4fv("eColor",r.color)},o.prototype.bindDraw=function(e){n.Transform.bindUniforms(this.program,e),a.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},o.prototype.bindInstance=function(e){this.program.setUniformMatrix4fv("model",e.transformation)},o.prototype.initializePipeline=function(){var e=this.configuration,r=0===e.output?e.transparent&&h.separateBlendingParams(770,1,771,771):null;return h.makePipelineState({blending:r,polygonOffset:e.polygonOffset&&{factor:1,units:1},culling:function(e){return 0!==e&&{face:1===e?1028:1029,mode:2305}}(e.cullFace),depthTest:{func:513},depthWrite:e.writeDepth&&h.defaultDepthWriteParams,colorWrite:h.defaultColorWriteParams})},o.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},o.shader=new l.ReloadableShaderModule(c,"./ColorMaterial.glsl",e),o}(p.ShaderTechnique);r.ColorMaterialTechnique=f;var g=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.cullFace=0,r.slicePlaneEnabled=!1,r.sliceHighlightDisabled=!1,r.vertexColors=!1,r.transparent=!1,r.polygonOffset=!1,r.writeDepth=!0,r}return t(r,e),o([s.parameter({count:6})],r.prototype,"output",void 0),o([s.parameter({count:3})],r.prototype,"cullFace",void 0),o([s.parameter()],r.prototype,"slicePlaneEnabled",void 0),o([s.parameter()],r.prototype,"sliceHighlightDisabled",void 0),o([s.parameter()],r.prototype,"vertexColors",void 0),o([s.parameter()],r.prototype,"transparent",void 0),o([s.parameter()],r.prototype,"polygonOffset",void 0),o([s.parameter()],r.prototype,"writeDepth",void 0),r}(s.ShaderTechniqueConfiguration);r.ColorMaterialTechniqueConfiguration=g});