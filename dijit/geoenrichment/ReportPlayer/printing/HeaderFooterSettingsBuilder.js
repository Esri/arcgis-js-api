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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

//            copyrightText: String,

define(["esri/dijit/geoenrichment/utils/DateUtil"],function(e){return{createHeaderFooterParams:function(t,r,a){var l;return l=a.allAreas?t.getAnalysisAreas():[t.getCurrentAnalysisArea()],l.map(function(l){var o=r.getDocumentDefaultStyles(),i=t.getReportData().reportObject.dataVintageDescription;return{header:{show:a.addHeader,title:a.reportTitle||t.getReportTitle(),subtitle:a.reportSubtitle||t.printConfig.subtitle,siteName:l.name,siteDesc:l.description,siteAddr:l.address,latitude:l.latitude,longitude:l.longitude,style:{headerStyle:o,titleStyle:r.getTableDefaultStyles(null,"ReportTitle"),latLongStyle:r.getTableDefaultStyles(null,"GreyText")}},dataSource:{show:i&&a.addDataSource,sourceText:"Source: "+i,style:{dataSourceStyle:o}},footer:{show:a.addFooter,copyrightText:"©"+(new Date).getFullYear()+" Esri",formattedDate:e.getReportFooterDate(),style:{footerStyle:o}},documentStyle:o}})}}});