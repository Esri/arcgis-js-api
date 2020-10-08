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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/shaderLibrary/util/TextureOnly.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./DefaultVertexAttributeLocations","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,n,a,o,u,l,h){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.TextureTechniqueConfiguration=r.TextureTechnique=void 0;var c=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get().build();return new l(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),u.Default3D)},a.prototype.initializePipeline=function(){return this.configuration.hasAlpha?h.makePipelineState({blending:h.separateBlendingParams(770,1,771,771),colorWrite:h.defaultColorWriteParams}):h.makePipelineState({colorWrite:h.defaultColorWriteParams})},a.shader=new n.ReloadableShaderModule(i,(function(){return new Promise((function(r,t){e(["../core/shaderLibrary/util/TextureOnly.glsl"],r,t)}))})),a}(a.ShaderTechnique);r.TextureTechnique=c;var d=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.hasAlpha=!1,r}return t.__extends(r,e),t.__decorate([o.parameter()],r.prototype,"hasAlpha",void 0),r}(o.ShaderTechniqueConfiguration);r.TextureTechniqueConfiguration=d}));