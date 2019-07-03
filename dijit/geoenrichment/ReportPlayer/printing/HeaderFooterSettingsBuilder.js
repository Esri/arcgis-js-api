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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

//            copyrightText: String,

define(["dojo/string","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/utils/DateUtil","../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer","dojo/i18n!esri/nls/jsapi"],function(e,t,r,a,i){return i=i.geoenrichment.dijit.ReportPlayer.ReportPlayer,{createHeaderFooterParams:function(a,o,l){var n;n=o.dynamicReportInfo.isMultiFeature?[o.dynamicReportInfo.combinedAreasInfo]:a.getAnalysisAreas();var s=o.getDocumentDefaultStyles();return t(this._getSourceText(a,o,l),function(t){return n.map(function(n){return{header:{show:l.addHeader,title:l.reportTitle||a.getReportTitle(),subtitle:l.reportSubtitle||a.printConfig.subtitle,siteName:n.name,siteDesc:n.description,siteAddr:n.address,latitude:n.latitude,longitude:n.longitude,style:{headerStyle:s,titleStyle:o.getTableDefaultStyles(null,"ReportTitle"),latLongStyle:o.getTableDefaultStyles(null,"GreyText")}},dataSource:{show:t&&l.addDataSource,sourceText:t&&e.substitute(i.sourcePattern,{source:t}),style:{dataSourceStyle:s}},footer:{show:l.addFooter,copyrightText:"©"+(new Date).getFullYear()+" Esri",formattedDate:r.getReportFooterDate(),style:{footerStyle:s}},documentStyle:s}})})},_getSourceText:function(e,t,r){if(!r.addDataSource)return null;var i=e.getReportData();if(e.isDataDrillingPlayer){var o=i.config,l=a.collectVariablesStats(i.templateJson);return i.templateVariableProvider.getVariablesDataVintageDescription({usedVariablesCache:l,countryID:o.countryID,hierarchy:i.reportObject.hierarchy})}return i.reportObject.dataVintageDescription}}});