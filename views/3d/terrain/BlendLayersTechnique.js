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

define(["require","exports","tslib","../webgl-engine/core/shaderLibrary/util/BlendLayers.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,n,r,i,t,a,o,l,u,d){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.BlendLayersTechniqueConfiguration=n.BlendLayersTechnique=void 0;var s=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return r.__extends(a,n),a.prototype.initializeProgram=function(e){var n=a.shader.get().build();return new u(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),l.Default3D)},a.prototype.initializePipeline=function(){var e=2===this.configuration.mode?d.simpleBlendingParams(1,771):1===this.configuration.mode?d.simpleBlendingParams(0,770):null;return d.makePipelineState({blending:e,colorWrite:d.defaultColorWriteParams})},a.shader=new t.ReloadableShaderModule(i,(function(){return new Promise((function(n,r){e(["../webgl-engine/core/shaderLibrary/util/BlendLayers.glsl"],n,r)}))})),a}(a.ShaderTechnique);n.BlendLayersTechnique=s;var c=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mode=0,n}return r.__extends(n,e),r.__decorate([o.parameter({count:3})],n.prototype,"mode",void 0),n}(o.ShaderTechniqueConfiguration);n.BlendLayersTechniqueConfiguration=c}));