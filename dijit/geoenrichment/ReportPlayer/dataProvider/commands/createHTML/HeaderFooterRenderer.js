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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,r,t,a){var o={fixStyles:function(r,t){function o(e){return"string"!=typeof e||a.isTransparent(e)||"#ffffff"===e.toLowerCase()}if(!t)return r;r=e.mixin({},r);var i=t.backgroundColor?a.toCSSColor(t.backgroundColor):null,l=r.backgroundColor?a.toCSSColor(r.backgroundColor):null,n=r.color?a.toCSSColor(r.color):null;return o(i)&&o(l)&&o(n)&&(r.color="#000000"),r}},i={applyStyleToNode:function(e,r,a){r&&(r=o.fixStyles(r,a),r.backgroundColor&&t.set(e,"backgroundColor",r.backgroundColor),r.color&&t.set(e,"color",r.color),r.fontFamily&&t.set(e,"fontFamily",r.fontFamily))}},l={buildHeader:function(e){var a=e.headerFooterParams.header,o=e.pageNode,l=e.documentOptions,n=e.headerFooterParams.documentStyle;if(!a||!a.show)return!1;var s=a.style,d=r.create("div",{class:"esriGEReportPlayerPrint_reportHeader"},o,"first");i.applyStyleToNode(d,s.headerStyle,n),t.set(d,{paddingLeft:l.left+"px",paddingRight:l.right+"px"});var c=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderTitleRow"},d),p=r.create("div",{class:"esriGEReportPlayerPrint_titleLabel",innerHTML:a.title},c);i.applyStyleToNode(p,s.titleStyle,n);var u=r.create("div",{class:"esriGEReportPlayerPrint_subtitleLabel",innerHTML:a.subtitle},!a.siteInfo&&c),y=a.siteInfo;if(y){var P=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderRow"},d);r.place(u,P),r.create("div",{class:"esriGEReportPlayerPrint_siteNameLabel",innerHTML:y.siteName},P);var f=y.siteAddr||y.siteDesc;if(y.latitude||f){var g=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderRow"},d);y.latitude&&i.applyStyleToNode(r.create("div",{class:"esriGEReportPlayerPrint_siteLatLabel",innerHTML:"Latitude: "+y.latitude},g),s.latLongStyle,n),f&&r.create("div",{class:"esriGEReportPlayerPrint_siteAddrLabel",innerHTML:f},g)}var v=f&&f!==y.siteDesc&&y.siteDesc;if(y.longitude||v){var S=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderRow"},d);y.longitude&&i.applyStyleToNode(r.create("div",{class:"esriGEReportPlayerPrint_siteLongLabel",innerHTML:"Longitude: "+y.longitude},S),s.latLongStyle,n),v&&r.create("div",{class:"esriGEReportPlayerPrint_siteDescLabel",innerHTML:v},S)}}return!0}},n={buildDataSource:function(e){var a=e.headerFooterParams.dataSource,o=e.pageNode,l=e.documentOptions,n=e.headerFooterParams.documentStyle;if(!a||!a.show)return!1;var s=r.create("div",{class:"esriGEReportPlayerPrint_reportDataSource"},o);i.applyStyleToNode(s,a.style.dataSourceStyle,n),t.set(s,{paddingLeft:l.left+"px",paddingRight:l.right+"px"});var d=r.create("div",{class:"esriGEReportPlayerPrint_reportDataSourceRow"},s);return r.create("div",{class:"esriGEReportPlayerPrint_dataSourceLabel",innerHTML:a.sourceText},d),!0}},s={buildFooter:function(e){var a=e.headerFooterParams.footer,o=e.pageNode,l=e.documentOptions,n=e.headerFooterParams.documentStyle,s=e.pageIndex,d=e.numPages;if(!a||!a.show)return!1;var c=a.style,p=r.create("div",{class:"esriGEReportPlayerPrint_reportFooter"},o);i.applyStyleToNode(p,c.footerStyle,n),t.set(p,{paddingLeft:l.left+"px",paddingRight:l.right+"px"});var u=r.create("div",{class:"esriGEReportPlayerPrint_reportFooterRow"},p);return r.create("div",{class:"esriGEReportPlayerPrint_dateLabel",innerHTML:a.formattedDate},u),r.create("div",{class:"esriGEReportPlayerPrint_copyrightLabel",innerHTML:a.copyrightText},u),r.create("div",{class:"esriGEReportPlayerPrint_pageLabel",innerHTML:"Page "+(s+1)+" of "+d},u),!0}};return{addHeaderAndFooterToPage:function(e){if(!e.headerFooterParams)return!1;e.headerFooterParams.documentStyle&&i.applyStyleToNode(e.pageNode,e.headerFooterParams.documentStyle,e.headerFooterParams.documentStyle);var r=l.buildHeader(e);return r=n.buildDataSource(e)||r,r=s.buildFooter(e)||r}}});