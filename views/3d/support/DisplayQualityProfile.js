// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/has"],function(e,i,a){function o(){var e=!!a("esri-mobile");return{low:{graphics3D:{maxTotalNumberOfFeatures:25e3,maxTotalNumberOfPrimitives:85e4},sceneService:{"3dObject":{lodFactor:.2},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5},antialiasingEnabled:!1,memoryLimit:200,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},medium:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5},sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:e},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,memoryLimit:e?400:500,additionalCacheMemory:e?0:100,frameRate:0,maximumRenderResolution:null,maximumPixelRatio:1},high:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfPrimitives:17e5},sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,memoryLimit:e?600:1e3,additionalCacheMemory:0,frameRate:0,maximumRenderResolution:e?null:4096,maximumPixelRatio:e?1:null}}}var r=function(){function e(){}return e.isValidProfile=function(i){return i in e.profiles},e.getDefaultProfile=function(){return a("trident")||a("esri-iPhone")?"low":"medium"},e.apply=function(i,a){var o=e.profiles[i];a.graphics3D.maxTotalNumberOfFeatures=o.graphics3D.maxTotalNumberOfFeatures,a.graphics3D.maxTotalNumberOfPrimitives=o.graphics3D.maxTotalNumberOfPrimitives,a.sceneService["3dObject"].lodFactor=o.sceneService["3dObject"].lodFactor,a.sceneService.point.lodFactor=o.sceneService.point.lodFactor,a.sceneService.integratedMesh.lodFactor=o.sceneService.integratedMesh.lodFactor,a.sceneService.pointCloud.lodFactor=o.sceneService.pointCloud.lodFactor,a.sceneService.uncompressedTextureDownsamplingEnabled=o.sceneService.uncompressedTextureDownsamplingEnabled,a.tiledSurface.lodBias=o.tiledSurface.lodBias,a.tiledSurface.angledSplitBias=o.tiledSurface.angledSplitBias,a.antialiasingEnabled=o.antialiasingEnabled,a.memoryLimit=o.memoryLimit,a.additionalCacheMemory=o.additionalCacheMemory,a.frameRate=o.frameRate,a.maximumRenderResolution=o.maximumRenderResolution,a.maximumPixelRatio=o.maximumPixelRatio},e.debug={reset:function(){var i=o();for(var a in i)e.profiles[a]=i[a]}},e}();return function(e){e.profiles=o()}(r||(r={})),r});