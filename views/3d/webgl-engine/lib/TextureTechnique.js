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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/util/TextureOnly.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./DefaultVertexAttributeLocations","../../../webgl/Program","../../../webgl/renderState"],function(e,r,t,a,i,n,o,u,l,c,h,s){Object.defineProperty(r,"__esModule",{value:!0});var d=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return t(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get(),t=r.build();return new h(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),c.Default3D)},a.prototype.initializePipeline=function(){return this.configuration.hasAlpha?s.makePipelineState({blending:s.separateBlendingParams(770,1,771,771),colorWrite:s.defaultColorWriteParams}):s.makePipelineState({colorWrite:s.defaultColorWriteParams})},a.shader=new o.ReloadableShaderModule(n,"../core/shaderLibrary/util/TextureOnly.glsl",e),a}(u.ShaderTechnique);r.TextureTechnique=d;var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.hasAlpha=!1,r}return t(r,e),a([l.parameter()],r.prototype,"hasAlpha",void 0),r}(l.ShaderTechniqueConfiguration);r.TextureTechniqueConfiguration=p});