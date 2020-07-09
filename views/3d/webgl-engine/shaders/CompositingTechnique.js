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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./Compositing.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,n,o,a,u,l,c,d){Object.defineProperty(r,"__esModule",{value:!0});var s=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get().build(this.configuration);return new l(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),a.Default3D)},n.prototype.initializePipeline=function(){if(2===this.configuration.function)return d.makePipelineState({colorWrite:{r:!1,g:!0,b:!1,a:!1}});switch(this.configuration.alphaMode){case 0:return d.makePipelineState({colorWrite:d.defaultColorWriteParams});case 1:return d.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),colorWrite:d.defaultColorWriteParams});default:return d.makePipelineState({blending:c.simpleBlendingParams(1,771),colorWrite:d.defaultColorWriteParams})}},n.shader=new i.ReloadableShaderModule(u,(function(){return new Promise((function(r,t){e(["./Compositing.glsl"],r,t)}))})),n}(n.ShaderTechnique);r.CompositingTechnique=s;var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.function=0,r.alphaMode=0,r.hasOpacityFactor=!1,r}return t.__extends(r,e),t.__decorate([o.parameter({count:3})],r.prototype,"function",void 0),t.__decorate([o.parameter({count:3})],r.prototype,"alphaMode",void 0),t.__decorate([o.parameter()],r.prototype,"hasOpacityFactor",void 0),r}(o.ShaderTechniqueConfiguration);r.CompositingTechniqueConfiguration=p}));