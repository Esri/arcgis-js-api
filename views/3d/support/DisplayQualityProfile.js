// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../core/sniff"],function(e,t,i){var a={low:{sceneService:{"3dObject":{lodFactor:.2},point:{lodFactor:1},integratedMesh:{lodFactor:.6},pointCloud:{lodFactor:.5}},tiledSurface:{lodBias:-1,angledSplitBias:.5},antialiasingEnabled:!1},high:{sceneService:{"3dObject":{lodFactor:1},point:{lodFactor:1},integratedMesh:{lodFactor:1},pointCloud:{lodFactor:1}},tiledSurface:{lodBias:0,angledSplitBias:1},antialiasingEnabled:!0}},n=function(){function e(){}return e.isValidProfile=function(e){return e in a},e.getDefaultProfile=function(){var e=i("trident")||i("safari");return e?"low":"high"},e.apply=function(e,t){var i=a[e];t.qualitySettings.sceneService["3dObject"].lodFactor=i.sceneService["3dObject"].lodFactor,t.qualitySettings.sceneService.point.lodFactor=i.sceneService.point.lodFactor,t.qualitySettings.sceneService.integratedMesh.lodFactor=i.sceneService.integratedMesh.lodFactor,t.qualitySettings.sceneService.pointCloud.lodFactor=i.sceneService.pointCloud.lodFactor,t.qualitySettings.tiledSurface.lodBias=i.tiledSurface.lodBias,t.qualitySettings.tiledSurface.angledSplitBias=i.tiledSurface.angledSplitBias,t.qualitySettings.antialiasingEnabled=i.antialiasingEnabled},e}();return n});