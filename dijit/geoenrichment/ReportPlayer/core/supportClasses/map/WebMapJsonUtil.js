// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define([],(function(){var e={processWebMapJson:function(e,r){var a=JSON.parse(r);function t(e,r,a){var t=e.featureCollection.layers[0].featureSet.features[0];t.attributes=t.attributes||{},t.attributes[r]=a}return a.operationalLayers.forEach((function(e){var r=function(e){if(e.featureCollection&&e.featureCollection.layers&&1===e.featureCollection.layers.length)return e.featureCollection.layers[0].id}(e);if("string"==typeof r&&0===r.indexOf("SiteLayer")){e.isSiteLayer=!0;var a=0===r.indexOf("SiteLayer.")?r.replace("SiteLayer.",""):void 0;a&&t(e,"STORE_ID",a)}else"string"==typeof r&&0===r.indexOf("StudyAreasLayer.")?(e.isSiteLayer=!0,t(e,"AREA_ID",r.replace("StudyAreasLayer.",""))):"string"==typeof r&&0===r.indexOf("LocatorResultsLayer.")?(e.isLocatorLayer=!0,e.calculatorName=r.replace("LocatorResultsLayer.","")):"string"==typeof r&&0===r.indexOf("ComparisonResultsLayer.")?(e.isComparisonLayer=!0,e.calculatorName=r.replace("ComparisonResultsLayer.","")):e.isOtherLayer=!0})),{fileName:e,originalString:r,webMapJson:a}}};return e}));