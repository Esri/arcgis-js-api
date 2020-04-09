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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../shaders/SSAO.glsl","../../../webgl/Program","../../../webgl/renderState"],(function(e,r,t,a,o,i,u,n,l,p,s,d){Object.defineProperty(r,"__esModule",{value:!0});var c=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return t(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get(),t=this.configuration,o=r.build({output:t.output,samples:t.samples,radius:t.radius});return new s(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),l.Default3D)},a.prototype.initializePipeline=function(){return d.makePipelineState({colorWrite:d.defaultColorWriteParams})},a.shader=new i.ReloadableShaderModule(p,"../shaders/SSAO.glsl",e),a}(u.ShaderTechnique);r.SSAOTechnique=c;var h=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.samples=64,r.radius=4,r}return t(r,e),a([n.parameter({count:2})],r.prototype,"output",void 0),a([n.parameter()],r.prototype,"samples",void 0),a([n.parameter()],r.prototype,"radius",void 0),r}(n.ShaderTechniqueConfiguration);r.SSAOTechniqueConfiguration=h}));