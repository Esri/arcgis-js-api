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

define([],function(){var e={};return e.run=function(e){document.body.style.opacity="0.01",require(["require","esri/dijit/geoenrichment/nlsFix"],function(r,i){i.load(null,r),require(["esri/dijit/geoenrichment/ReportPlayer/ReportPlayer","esri/dijit/geoenrichment/ReportPlayer/DataProviderGE","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","esri/dijit/geoenrichment/ReportPlayer/PlayerThemes","esri/dijit/geoenrichment/ReportPlayer/samples/supportClasses/AnalysisAreas","esri/dijit/geoenrichment/utils/signIn/SignInHelper","esri/dijit/geoenrichment/utils/UrlUtil","dojo/domReady!"],function(r,i,t,o,a,n,s){function l(e){var r=window.location.href;return s.getVariableValue(r,e)}document.body.style.opacity="";var d=l("appId"),p=l("portalUrl"),m=l("countryID"),c=l("reportID"),h=l("theme"),u=l("width"),g=l("height"),y=l("maxWidth"),I=l("maxHeight"),w=l("resizeMode"),P=l("analysisAreas");"string"==typeof P&&(P=JSON.parse(P));var D={appId:d||"g5vpmnaAyj9UmLKJ",portalUrl:p||"https://www.arcgis.com",countryID:m||"US",reportID:c||"transportation-to-work",theme:h||o.DARK};n.signIn({portalUrl:D.portalUrl,appId:D.appId,callback:function(){var o=new i;o.registerCommand(t.PDF),o.registerCommand(t.IMAGE),o.registerCommand(t.PRINT),o.registerCommand(t.DYNAMIC_HTML);var n=new r({viewMode:e.viewMode,resizeMode:w||e.resizeMode,showToolbarInPopup:e.showToolbarInPopup,dataProvider:o,theme:D.theme}).placeAt(e.playerDiv);e.dimensions?n.resize(e.dimensions.w,e.dimensions.h):u&&g&&n.resize(Number(u),Number(g)),e.constraints?(n.setMaxWidth(e.constraints.maxWidth),n.setMaxHeight(e.constraints.maxHeight)):(y||I)&&(y&&n.setMaxWidth(Number(y)),I&&n.setMaxHeight(Number(I))),n.playReport({portalUrl:D.portalUrl,countryID:D.countryID,reportID:D.reportID,analysisAreas:P||a.getAreas({numAreas:2,big:!1,isGeographyId:!1,initialize:!0})})}})})})},e});