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

define(["require","exports","tslib","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./Compositing.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,t,r,i,n,o,a,u,l,c,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CompositingTechniqueConfiguration=t.CompositingTechnique=void 0;var d=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(n,t),n.prototype.initializeProgram=function(e){var t=n.shader.get().build(this.configuration);return new l(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),a.Default3D)},n.prototype.initializePipeline=function(){if(2===this.configuration.function)return s.makePipelineState({colorWrite:{r:!1,g:!0,b:!1,a:!1}});switch(this.configuration.alphaMode){case 0:return s.makePipelineState({colorWrite:s.defaultColorWriteParams});case 1:return s.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),colorWrite:s.defaultColorWriteParams});case 3:return s.makePipelineState({blending:c.simpleBlendingParams(771,770),colorWrite:s.defaultColorWriteParams,depthTest:null,depthWrite:null});default:return s.makePipelineState({blending:c.simpleBlendingParams(1,771),colorWrite:s.defaultColorWriteParams})}},n.shader=new i.ReloadableShaderModule(u,(function(){return new Promise((function(t,r){e(["./Compositing.glsl"],t,r)}))})),n}(n.ShaderTechnique);t.CompositingTechnique=d;var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.function=0,t.alphaMode=0,t.hasOpacityFactor=!1,t}return r.__extends(t,e),r.__decorate([o.parameter({count:4})],t.prototype,"function",void 0),r.__decorate([o.parameter({count:4})],t.prototype,"alphaMode",void 0),r.__decorate([o.parameter()],t.prototype,"hasOpacityFactor",void 0),t}(o.ShaderTechniqueConfiguration);t.CompositingTechniqueConfiguration=p}));