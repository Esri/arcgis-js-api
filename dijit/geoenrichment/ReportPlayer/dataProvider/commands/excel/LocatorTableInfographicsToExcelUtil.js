// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/string","dojo/when","dojo/promise/all","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes","dojo/i18n!esri/nls/jsapi"],function(e,n,r,o,t,a){a=a.geoenrichment.dijit.ReportPlayer.ReportPlayer;var i={};return i.exportLocatorTableInfographicsToExcel=function(o){var i=[];return n(o.isContentLoading(),function(){return r(o.getAllReportContainers().map(function(e){return n(e.getContentPromise()||e.getPagePromise(),function(){var n=e.getLayoutCells(),o=[];return n.forEach(function(e){e.content&&e.content.hasInfographic&&e.content.hasInfographic(t.LOCATOR_TABLE)&&(innerInfographic=e.content.getInfographic().getInnerInfographic(),o.push(innerInfographic.prepareExportToExcelParameters()))}),r(o).then(function(e){i=i.concat(e)})})}))}).then(function(){var n={documentName:e.substitute(a.locatorsExcelFileName,{reportTitle:o.getReportTitle()}),sheets:[],sourceInfos:[],onlyReturnBinary:!0},r={},t={};i.forEach(function(e){var o=e.sheets[0];o.name=e.shortName,t[o.name]?(t[o.name]++,o.name+=" "+t[o.name]):t[o.name]=1,n.sheets.push(o),e.sourceInfos&&e.sourceInfos.forEach(function(e){r[e.layerID]||(r[e.layerID]=0),r[e.layerID]+=e.numFeatures})});for(var c in r)n.sourceInfos.push({layerID:c,numFeatures:r[c]});return o._viewModel.exportToExcel(n).then(function(e){return[e]})})},i});