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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","./ColorMaterial.glsl","../../../webgl/Program","../../../webgl/renderState"],(function(e,r,t,o,a,i,n,l,s,c,u,p,d,h,f){Object.defineProperty(r,"__esModule",{value:!0});var g=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),t=this.configuration,a=r.build({attributeColor:t.vertexColors,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1});return new h(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),u.Default3D)},o.prototype.bindPass=function(e,r,t){this.program.setUniform4fv("eColor",r.color)},o.prototype.bindDraw=function(e){n.Transform.bindUniforms(this.program,e),i.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},o.prototype.initializePipeline=function(){var e=this.configuration,r=f.separateBlendingParams(770,1,771,771),t=0===e.output?e.transparent&&r:null,o=function(r){return f.makePipelineState({blending:t,polygonOffset:e.polygonOffset&&m,culling:(o=e.cullFace,0!==o&&{face:1===o?1028:1029,mode:2305}),depthTest:p.depthCompareLess,depthWrite:e.writeDepth&&f.defaultDepthWriteParams,colorWrite:f.defaultColorWriteParams,stencilWrite:e.sceneHasOcludees?p.stencilWriteMaskOn:null,stencilTest:e.sceneHasOcludees?r?p.stencilToolMaskBaseParams:p.stencilBaseAllZerosParams:null});var o};return this._occludeeState=o(!0),o(!1)},Object.defineProperty(o.prototype,"opaqueOccludeeState",{get:function(){return this._occludeeState},enumerable:!0,configurable:!0}),o.shader=new l.ReloadableShaderModule(d,"./ColorMaterial.glsl",e),o}(s.ShaderTechnique);r.ColorMaterialTechnique=g;var m={factor:1,units:1},b=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.cullFace=0,r.slicePlaneEnabled=!1,r.sliceHighlightDisabled=!1,r.vertexColors=!1,r.transparent=!1,r.polygonOffset=!1,r.writeDepth=!0,r.sceneHasOcludees=!1,r}return t(r,e),o([c.parameter({count:7})],r.prototype,"output",void 0),o([c.parameter({count:3})],r.prototype,"cullFace",void 0),o([c.parameter()],r.prototype,"slicePlaneEnabled",void 0),o([c.parameter()],r.prototype,"sliceHighlightDisabled",void 0),o([c.parameter()],r.prototype,"vertexColors",void 0),o([c.parameter()],r.prototype,"transparent",void 0),o([c.parameter()],r.prototype,"polygonOffset",void 0),o([c.parameter()],r.prototype,"writeDepth",void 0),o([c.parameter()],r.prototype,"sceneHasOcludees",void 0),r}(c.ShaderTechniqueConfiguration);r.ColorMaterialTechniqueConfiguration=b}));