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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

//            copyrightText: String,

define(["dojo/when","esri/dijit/geoenrichment/utils/DateUtil","../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer"],function(e,t,r){return{createHeaderFooterParams:function(r,a,o){var i;i=a.dynamicReportInfo.isMultiFeature?[a.dynamicReportInfo.combinedAreasInfo]:r.getAnalysisAreas();var l=a.getDocumentDefaultStyles();return e(this._getSourceText(r,a,o),function(e){return i.map(function(i){return{header:{show:o.addHeader,title:o.reportTitle||r.getReportTitle(),subtitle:o.reportSubtitle||r.printConfig.subtitle,siteName:i.name,siteDesc:i.description,siteAddr:i.address,latitude:i.latitude,longitude:i.longitude,style:{headerStyle:l,titleStyle:a.getTableDefaultStyles(null,"ReportTitle"),latLongStyle:a.getTableDefaultStyles(null,"GreyText")}},dataSource:{show:e&&o.addDataSource,sourceText:"Source: "+e,style:{dataSourceStyle:l}},footer:{show:o.addFooter,copyrightText:"©"+(new Date).getFullYear()+" Esri",formattedDate:t.getReportFooterDate(),style:{footerStyle:l}},documentStyle:l}})})},_getSourceText:function(e,t,a){if(!a.addDataSource)return null;var o=e.getReportData();if(e.isDataDrillingPlayer){var i=o.config,l=r.collectVariablesStats(o.templateJson);return o.templateVariableProvider.getVariablesDataVintageDescription({usedVariablesCache:l,countryID:i.countryID,hierarchy:i.hierarchy})}return o.reportObject.dataVintageDescription}}});