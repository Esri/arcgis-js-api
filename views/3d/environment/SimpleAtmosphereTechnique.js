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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../environment/SimpleAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState"],(function(e,r,t,n,i,o,a,l,u,c,p,g){Object.defineProperty(r,"__esModule",{value:!0});var s=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get(),t=this.configuration,i=r.build({geometry:t.geometry});return new p(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),c.Default3D)},n.prototype.initializePipeline=function(){return 1===this.configuration.geometry?g.makePipelineState({blending:g.separateBlendingParams(770,1,771,771),culling:g.backFaceCullingParams,depthTest:{func:515},colorWrite:g.defaultColorWriteParams}):g.makePipelineState({blending:g.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:g.defaultColorWriteParams})},n.shader=new a.ReloadableShaderModule(o,"../environment/SimpleAtmosphere.glsl",e),n}(l.ShaderTechnique);r.SimpleAtmosphereTechnique=s;var h=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.geometry=0,r}return t(r,e),n([u.parameter({count:3})],r.prototype,"geometry",void 0),r}(u.ShaderTechniqueConfiguration);r.SimpleAtmosphereTechniqueConfiguration=h}));