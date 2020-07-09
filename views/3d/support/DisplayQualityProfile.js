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

define(["require","exports","../../../core/has"],(function(e,i,a){var r=function(){function e(){}return e.isValidProfile=function(i){return i in e.profiles},e.getDefaultProfile=function(){return a("trident")||a("esri-iPhone")?"low":"medium"},e.apply=function(i,a){var r=e.profiles[i];a.graphics3D.maxTotalNumberOfFeatures=r.graphics3D.maxTotalNumberOfFeatures,a.graphics3D.maxTotalNumberOfPrimitives=r.graphics3D.maxTotalNumberOfPrimitives,a.graphics3D.polygonLodFactor=r.graphics3D.polygonLodFactor,a.graphics3D.polylineLodFactor=r.graphics3D.polylineLodFactor,a.sceneService["3dObject"].lodFactor=r.sceneService["3dObject"].lodFactor,a.sceneService.point.lodFactor=r.sceneService.point.lodFactor,a.sceneService.integratedMesh.lodFactor=r.sceneService.integratedMesh.lodFactor,a.sceneService.pointCloud.lodFactor=r.sceneService.pointCloud.lodFactor,a.sceneService.uncompressedTextureDownsamplingEnabled=r.sceneService.uncompressedTextureDownsamplingEnabled,a.tiledSurface.lodBias=r.tiledSurface.lodBias,a.tiledSurface.angledSplitBias=r.tiledSurface.angledSplitBias,a.tiledSurface.reduceTileLevelDifferences=r.tiledSurface.reduceTileLevelDifferences,a.tiledSurface.textureFadeDuration=r.tiledSurface.textureFadeDuration,a.antialiasingEnabled=r.antialiasingEnabled,a.physicallyBasedRenderingEnabled=r.physicalBasedRenderingEnabled,a.memoryLimit=r.memoryLimit,a.additionalCacheMemory=r.additionalCacheMemory,a.frameRate=r.frameRate,a.maximumRenderResolution=r.maximumRenderResolution,a.maximumPixelRatio=r.maximumPixelRatio},e.debug={reset:function(){var i=o();for(var a in i)e.profiles[a]=i[a]}},e}();function o(){var e=!!a("esri-mobile");return{low:{graphics3D:{maxTotalNumberOfFeatures:25e3,maxTotalNumberOfPrimitives:85e4,polygonLodFactor:.5,polylineLodFactor:1},sceneService:{"3dObject":{lodFactor:.2},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5,reduceTileLevelDifferences:!1,textureFadeDuration:0},antialiasingEnabled:!1,physicalBasedRenderingEnabled:!1,memoryLimit:200,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},medium:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5,polygonLodFactor:e?.8:1,polylineLodFactor:e?1.2:1.5},sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:e},tiledSurface:{lodBias:0,angledSplitBias:1,reduceTileLevelDifferences:!a("disable-feature:reduce-map-tile-levels"),textureFadeDuration:400},antialiasingEnabled:!0,physicalBasedRenderingEnabled:!1,memoryLimit:e?600:750,additionalCacheMemory:e?0:150,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},high:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5,polygonLodFactor:e?1.2:2,polylineLodFactor:e?1.2:2},sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1,reduceTileLevelDifferences:!a("disable-feature:reduce-map-tile-levels"),textureFadeDuration:400},antialiasingEnabled:!0,physicalBasedRenderingEnabled:!0,memoryLimit:e?900:1500,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:e?null:4096,maximumPixelRatio:e?1:null}}}return function(e){e.profiles=o()}(r||(r={})),r}));