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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/sniff"],function(e,i,o){var n=o("esri-mobile"),t=o("esri-iPhone"),a=function(){function e(){}return e.isValidProfile=function(i){return i in e.profiles},e.getDefaultProfile=function(){return o("trident")||t?"low":"medium"},e.apply=function(i,o){var n=e.profiles[i];o.sceneService["3dObject"].lodFactor=n.sceneService["3dObject"].lodFactor,o.sceneService.point.lodFactor=n.sceneService.point.lodFactor,o.sceneService.integratedMesh.lodFactor=n.sceneService.integratedMesh.lodFactor,o.sceneService.pointCloud.lodFactor=n.sceneService.pointCloud.lodFactor,o.sceneService.uncompressedTextureDownsamplingEnabled=n.sceneService.uncompressedTextureDownsamplingEnabled,o.tiledSurface.lodBias=n.tiledSurface.lodBias,o.tiledSurface.angledSplitBias=n.tiledSurface.angledSplitBias,o.antialiasingEnabled=n.antialiasingEnabled,o.gpuMemoryLimit=n.gpuMemoryLimit},e}();return function(e){e.profiles={low:{sceneService:{"3dObject":{lodFactor:.2},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5},uncompressedTextureDownsamplingEnabled:!0},tiledSurface:{lodBias:-1,angledSplitBias:.5},antialiasingEnabled:!1,gpuMemoryLimit:200},medium:{sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,gpuMemoryLimit:n?400:500},high:{sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1},uncompressedTextureDownsamplingEnabled:!1},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0,gpuMemoryLimit:n?600:1e3}}}(a||(a={})),a});