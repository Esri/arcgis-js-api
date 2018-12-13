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

define(["dojo/string","dojo/when","esri/dijit/geoenrichment/utils/DateUtil","../core/supportClasses/templateJsonUtils/TemplateJsonAnalyzer","dojo/i18n!esri/nls/jsapi"],function(e,t,r,a,o){return o=o.geoenrichment.dijit.ReportPlayer.ReportPlayer,{createHeaderFooterParams:function(a,i,l){var n;n=i.dynamicReportInfo.isMultiFeature?[i.dynamicReportInfo.combinedAreasInfo]:a.getAnalysisAreas();var s=i.getDocumentDefaultStyles();return t(this._getSourceText(a,i,l),function(t){return n.map(function(n){return{header:{show:l.addHeader,title:l.reportTitle||a.getReportTitle(),subtitle:l.reportSubtitle||a.printConfig.subtitle,siteName:n.name,siteDesc:n.description,siteAddr:n.address,latitude:n.latitude,longitude:n.longitude,style:{headerStyle:s,titleStyle:i.getTableDefaultStyles(null,"ReportTitle"),latLongStyle:i.getTableDefaultStyles(null,"GreyText")}},dataSource:{show:t&&l.addDataSource,sourceText:t&&e.substitute(o.sourcePattern,{source:t}),style:{dataSourceStyle:s}},footer:{show:l.addFooter,copyrightText:"©"+(new Date).getFullYear()+" Esri",formattedDate:r.getReportFooterDate(),style:{footerStyle:s}},documentStyle:s}})})},_getSourceText:function(e,t,r){if(!r.addDataSource)return null;var o=e.getReportData();if(e.isDataDrillingPlayer){var i=o.config,l=a.collectVariablesStats(o.templateJson);return o.templateVariableProvider.getVariablesDataVintageDescription({usedVariablesCache:l,countryID:i.countryID,hierarchy:i.hierarchy})}return o.reportObject.dataVintageDescription}}});