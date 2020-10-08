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

define(["require","exports","../../../core/has"],(function(e,a,i){"use strict";var r=function(){function e(){}return e.isValidProfile=function(a){return a in e.profiles},e.getDefaultProfile=function(){return i("trident")||i("esri-iPhone")?"low":"medium"},e.apply=function(a,i){var r=e.profiles[a];i.graphics3D.maxTotalNumberOfFeatures=r.graphics3D.maxTotalNumberOfFeatures,i.graphics3D.maxTotalNumberOfPrimitives=r.graphics3D.maxTotalNumberOfPrimitives,i.graphics3D.polygonLodFactor=r.graphics3D.polygonLodFactor,i.graphics3D.polylineLodFactor=r.graphics3D.polylineLodFactor,i.sceneService["3dObject"].lodFactor=r.sceneService["3dObject"].lodFactor,i.sceneService["3dObject"].lodCrossfadeDuration=r.sceneService["3dObject"].lodCrossfadeDuration,i.sceneService.point.lodFactor=r.sceneService.point.lodFactor,i.sceneService.integratedMesh.lodFactor=r.sceneService.integratedMesh.lodFactor,i.sceneService.pointCloud.lodFactor=r.sceneService.pointCloud.lodFactor,i.sceneService.uncompressedTextureDownsamplingEnabled=r.sceneService.uncompressedTextureDownsamplingEnabled,i.tiledSurface.lodBias=r.tiledSurface.lodBias,i.tiledSurface.angledSplitBias=r.tiledSurface.angledSplitBias,i.tiledSurface.reduceTileLevelDifferences=r.tiledSurface.reduceTileLevelDifferences,i.tiledSurface.textureFadeDuration=r.tiledSurface.textureFadeDuration,i.antialiasingEnabled=r.antialiasingEnabled,i.physicallyBasedRenderingEnabled=r.physicalBasedRenderingEnabled,i.memoryLimit=r.memoryLimit,i.additionalCacheMemory=r.additionalCacheMemory,i.frameRate=r.frameRate,i.maximumRenderResolution=r.maximumRenderResolution,i.maximumPixelRatio=r.maximumPixelRatio},e.debug={reset:function(){var a=o();for(var i in a)e.profiles[i]=a[i]}},e}();function o(){var e=!!i("esri-mobile");return{low:{graphics3D:{maxTotalNumberOfFeatures:25e3,maxTotalNumberOfPrimitives:85e4,polygonLodFactor:.5,polylineLodFactor:1},sceneService:{"3dObject":{lodFactor:.2,lodCrossfadeDuration:0},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5,reduceTileLevelDifferences:!1,textureFadeDuration:0},antialiasingEnabled:!1,physicalBasedRenderingEnabled:!1,memoryLimit:200,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},medium:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5,polygonLodFactor:e?.8:1,polylineLodFactor:e?1.2:1.5},sceneService:{"3dObject":{lodFactor:1,lodCrossfadeDuration:0},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:e},tiledSurface:{lodBias:0,angledSplitBias:1,reduceTileLevelDifferences:!i("disable-feature:reduce-map-tile-levels"),textureFadeDuration:400},antialiasingEnabled:!0,physicalBasedRenderingEnabled:!1,memoryLimit:e?600:750,additionalCacheMemory:e?0:150,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},high:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5,polygonLodFactor:e?1.2:2,polylineLodFactor:e?1.2:2},sceneService:{"3dObject":{lodFactor:1,lodCrossfadeDuration:0},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1,reduceTileLevelDifferences:!i("disable-feature:reduce-map-tile-levels"),textureFadeDuration:400},antialiasingEnabled:!0,physicalBasedRenderingEnabled:!0,memoryLimit:e?900:1500,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:e?null:4096,maximumPixelRatio:e?1:null}}}return function(e){e.profiles=o()}(r||(r={})),r}));