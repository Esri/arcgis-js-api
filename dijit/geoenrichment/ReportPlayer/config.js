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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["esri/kernel"],(function(e){function r(e){var r=e.split(".");return Number((Number(r[0])+Number(r[1])/100).toFixed(2))}var a=Math.max(r("3.37"),r(e.version)).toFixed(2);return{jsapiVersion:a,esriDijitCssUrl:"https://js.arcgis.com/"+a+"/dijit/themes/claro/claro.css",esriCssUrl:"https://js.arcgis.com/"+a+"/esri/css/esri.css",playerSourceRootUrl:"https://js.arcgis.com/"+a+"/",configScriptText:null,env:"prod",isPlayerOnServer:!1,updateVariableInfoFromDataXml:!0,runReportTask:{cacheResult:!0,ignoreErrors:!0,secondAttempt:!0},maps:{maxNumberOfMapsShownAtTheSameTime:6},charts:{showErrorIfHasUnavailableData:!1},tables:{leaveEmptyCellsUponError:!0,showUnavailableData:!0},createImageCommand:{skipSavingFile:!1},createPDFCommand:{skipSavingFile:!1,skipCreditConsumption:!1},createPlayerCommand:{loadMapPortalItems:!0,compressData:!1,prettifyDataJson:!1,skipCreditConsumption:!1},exportToExcel:{skipSavingFile:!1},modules:{exportCommands:!0,complexCellTooltips:!0,paths:{panoramicViewer:null}},generalization:{factor:-1,maxVerticesInAllFeatures:1e5,numVerticesPerFeature:5e4}}}));