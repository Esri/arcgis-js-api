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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../core/shaderLibrary/default/RealisticTree.glsl","../core/shaderLibrary/util/DoublePrecision.glsl","../core/shaderTechnique/ReloadableShaderModule","../lib/DefaultVertexAttributeLocations","./DefaultMaterialTechnique","../../../webgl/Program"],(function(e,r,t,i,a,o,l,s,n,u){Object.defineProperty(r,"__esModule",{value:!0});var c=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get(),t=this.configuration,a=r.build({output:t.output,viewingMode:e.viewingMode,receiveShadows:t.receiveShadows,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:t.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:t.symbolColors,vvSize:t.vvSize,vvColor:t.vvColor,vvInstancingEnabled:!0,instanced:t.instanced,instancedColor:t.instancedColor,instancedDoublePrecision:t.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:t.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:t.hasColorTexture,receiveAmbientOcclusion:t.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:t.hasColorTexture?1:0,textureAlphaPremultiplied:t.textureAlphaPremultiplied,attributeColor:t.vertexColors,screenSizePerspectiveEnabled:t.screenSizePerspective,verticalOffsetEnabled:t.verticalOffset,offsetBackfaces:t.offsetBackfaces,doublePrecisionRequiresObfuscation:o.doublePrecisionRequiresObfuscation(e.rctx),alphaDiscardMode:t.alphaDiscardMode,supportsTextureAtlas:!1});return new u(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),s.Default3D)},i.shader=new l.ReloadableShaderModule(a,"../core/shaderLibrary/default/RealisticTree.glsl",e),i}(n.DefaultMaterialTechnique);r.RealisticTreeTechnique=c}));