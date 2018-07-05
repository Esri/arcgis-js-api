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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/sniff"],function(e,a,i){var r=i("esri-mobile"),t=i("esri-iPhone"),o=function(){function e(){}return e.isValidProfile=function(a){return a in e.profiles},e.getDefaultProfile=function(){return i("trident")||t?"low":"medium"},e.apply=function(a,i){var r=e.profiles[a];i.graphics3D.maxTotalNumberOfFeatures=r.graphics3D.maxTotalNumberOfFeatures,i.graphics3D.maxTotalNumberOfVertices=r.graphics3D.maxTotalNumberOfVertices,i.sceneService["3dObject"].lodFactor=r.sceneService["3dObject"].lodFactor,i.sceneService.point.lodFactor=r.sceneService.point.lodFactor,i.sceneService.integratedMesh.lodFactor=r.sceneService.integratedMesh.lodFactor,i.sceneService.pointCloud.lodFactor=r.sceneService.pointCloud.lodFactor,i.sceneService.uncompressedTextureDownsamplingEnabled=r.sceneService.uncompressedTextureDownsamplingEnabled,i.tiledSurface.lodBias=r.tiledSurface.lodBias,i.tiledSurface.angledSplitBias=r.tiledSurface.angledSplitBias,i.antialiasingEnabled=r.antialiasingEnabled,i.gpuMemoryLimit=r.gpuMemoryLimit,i.frameRate=r.frameRate},e}();return function(e){e.profiles={low:{graphics3D:{maxTotalNumberOfFeatures:25e3,maxTotalNumberOfVertices:25e5},sceneService:{"3dObject":{lodFactor:.2},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5},antialiasingEnabled:!1,gpuMemoryLimit:200,frameRate:0},medium:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfVertices:5e6},sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,gpuMemoryLimit:r?400:500,frameRate:0},high:{graphics3D:{maxTotalNumberOfFeatures:5e4,maxTotalNumberOfVertices:5e6},sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,gpuMemoryLimit:r?600:1e3,frameRate:0}}}(o||(o={})),o});