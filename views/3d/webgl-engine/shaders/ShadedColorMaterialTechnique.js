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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../../../../core/libs/gl-matrix-2/vec4f64","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./ShadedColorMaterial.glsl","../../../webgl/Program","../../../webgl/renderState"],(function(e,r,t,i,a,o,n,l,s,c,d,p,u,h,g){Object.defineProperty(r,"__esModule",{value:!0});var f=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get(),t=this.configuration,a=r.build({slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1});return new h(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),p.Default3D)},i.prototype.bindPass=function(e,r,t){var i=r.color,a=r.shadingTint;this.program.setUniform4fv("color",i),this.program.setUniform4fv("shadedColor",this.blendColor(b,a,i)),this.program.setUniform3fv("shadingDirection",r.shadingDirection),this.program.setUniformMatrix4fv("viewNormal",t.viewInvTransp)},i.prototype.blendColor=function(e,r,t){var i=1-r[3],a=r[3]+t[3]*i;return 0===a?(e[3]=a,e):(e[0]=(r[0]*r[3]+t[0]*t[3]*i)/a,e[1]=(r[1]*r[3]+t[1]*t[3]*i)/a,e[2]=(r[2]*r[3]+t[2]*t[3]*i)/a,e[3]=t[3],e)},i.prototype.bindDraw=function(e){l.Transform.bindUniforms(this.program,e),n.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},i.prototype.initializePipeline=function(){var e,r=this.configuration,t=0===r.output?r.transparent&&g.separateBlendingParams(770,1,771,771):null;return g.makePipelineState({blending:t,culling:(e=r.cullFace,0!==e&&{face:1===e?1028:1029,mode:2305}),depthTest:{func:515},depthWrite:r.writeDepth&&g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams})},i.shader=new s.ReloadableShaderModule(u,"./ShadedColorMaterial.glsl",e),i}(c.ShaderTechnique);r.ShadedColorMaterialTechnique=f;var m=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.cullFace=0,r.slicePlaneEnabled=!1,r.sliceHighlightDisabled=!1,r.transparent=!1,r.writeDepth=!0,r}return t(r,e),i([d.parameter({count:7})],r.prototype,"output",void 0),i([d.parameter({count:3})],r.prototype,"cullFace",void 0),i([d.parameter()],r.prototype,"slicePlaneEnabled",void 0),i([d.parameter()],r.prototype,"sliceHighlightDisabled",void 0),i([d.parameter()],r.prototype,"transparent",void 0),i([d.parameter()],r.prototype,"writeDepth",void 0),r}(d.ShaderTechniqueConfiguration);r.ShadedColorMaterialTechniqueConfiguration=m;var b=o.vec4f64.create()}));