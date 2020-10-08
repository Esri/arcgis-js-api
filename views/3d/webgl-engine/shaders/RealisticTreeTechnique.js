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

define(["require","exports","tslib","../core/shaderLibrary/default/RealisticTree.glsl","../core/shaderLibrary/util/DoublePrecision.glsl","../core/shaderTechnique/ReloadableShaderModule","../lib/DefaultVertexAttributeLocations","./DefaultMaterialTechnique","../../../webgl/Program","@dojo/framework/shim/Promise"],(function(e,r,i,t,o,a,s,l,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.RealisticTreeTechnique=void 0;var u=function(r){function l(){return null!==r&&r.apply(this,arguments)||this}return i.__extends(l,r),l.prototype.initializeProgram=function(e){var r=l.shader.get(),i=this.configuration,t=r.build({output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:i.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:o.doublePrecisionRequiresObfuscation(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1});return new n(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),s.Default3D)},l.shader=new a.ReloadableShaderModule(t,(function(){return new Promise((function(r,i){e(["../core/shaderLibrary/default/RealisticTree.glsl"],r,i)}))})),l}(l.DefaultMaterialTechnique);r.RealisticTreeTechnique=u}));