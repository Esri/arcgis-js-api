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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,r,t,a){var o=function(r,t){if(!t)return r;function o(e){return"string"!=typeof e||a.isTransparent(e)||"#ffffff"===e.toLowerCase()}r=e.mixin({},r);var i=t.backgroundColor?a.toCSSColor(t.backgroundColor):null,n=r.backgroundColor?a.toCSSColor(r.backgroundColor):null,s=r.color?a.toCSSColor(r.color):null;return o(i)&&o(n)&&o(s)&&(r.color="#000000"),r},i=function(e,r,a){r&&((r=o(r,a)).backgroundColor&&t.set(e,"backgroundColor",r.backgroundColor),r.color&&t.set(e,"color",r.color),r.fontFamily&&t.set(e,"fontFamily",r.fontFamily))},n=function(e){var a=e.headerFooterParams.header,o=e.pageNode,n=e.documentOptions,s=e.headerFooterParams.documentStyle;if(!a||!a.show)return!1;var l=a.style,d=r.create("div",{class:"esriGEReportPlayerPrint_reportHeader"},o,"first");i(d,l.headerStyle,s),t.set(d,{paddingLeft:n.left+"px",paddingRight:n.right+"px"});var c=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderTitleRow"},d),u=r.create("div",{class:"esriGEReportPlayerPrint_titleLabel",innerHTML:a.title},c);i(u,l.titleStyle,s);var p=r.create("div",{class:"esriGEReportPlayerPrint_subtitleLabel",innerHTML:a.subtitle},!a.siteInfo&&c),P=a.siteInfo;if(P){var y=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderRow"},d);r.place(p,y),r.create("div",{class:"esriGEReportPlayerPrint_siteNameLabel",innerHTML:P.siteName},y);var f=P.siteAddr||P.siteDesc;if(P.latitude||f){var g=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderRow"},d);P.latitude&&i(r.create("div",{class:"esriGEReportPlayerPrint_siteLatLabel",innerHTML:"Latitude: "+P.latitude},g),l.latLongStyle,s),f&&r.create("div",{class:"esriGEReportPlayerPrint_siteAddrLabel",innerHTML:f},g)}var v=f&&f!==P.siteDesc&&P.siteDesc;if(P.longitude||v){var L=r.create("div",{class:"esriGEReportPlayerPrint_reportHeaderRow"},d);P.longitude&&i(r.create("div",{class:"esriGEReportPlayerPrint_siteLongLabel",innerHTML:"Longitude: "+P.longitude},L),l.latLongStyle,s),v&&r.create("div",{class:"esriGEReportPlayerPrint_siteDescLabel",innerHTML:v},L)}}return!0},s=function(e){var a=e.headerFooterParams.dataSource,o=e.pageNode,n=e.documentOptions,s=e.headerFooterParams.documentStyle;if(!a||!a.show)return!1;var l=r.create("div",{class:"esriGEReportPlayerPrint_reportDataSource"},o);i(l,a.style.dataSourceStyle,s),t.set(l,{paddingLeft:n.left+"px",paddingRight:n.right+"px"});var d=r.create("div",{class:"esriGEReportPlayerPrint_reportDataSourceRow"},l);return r.create("div",{class:"esriGEReportPlayerPrint_dataSourceLabel",innerHTML:a.sourceText},d),!0},l=function(e){var a=e.headerFooterParams.footer,o=e.pageNode,n=e.documentOptions,s=e.headerFooterParams.documentStyle,l=e.pageIndex,d=e.numPages;if(!a||!a.show)return!1;var c=a.style,u=r.create("div",{class:"esriGEReportPlayerPrint_reportFooter"},o);i(u,c.footerStyle,s),t.set(u,{paddingLeft:n.left+"px",paddingRight:n.right+"px"});var p=r.create("div",{class:"esriGEReportPlayerPrint_reportFooterRow"},u);return r.create("div",{class:"esriGEReportPlayerPrint_dateLabel",innerHTML:a.formattedDate},p),r.create("div",{class:"esriGEReportPlayerPrint_copyrightLabel",innerHTML:a.copyrightText},p),r.create("div",{class:"esriGEReportPlayerPrint_pageLabel",innerHTML:"Page "+(l+1)+" of "+d},p),!0};return{addHeaderAndFooterToPage:function(e){if(!e.headerFooterParams)return!1;e.headerFooterParams.documentStyle&&i(e.pageNode,e.headerFooterParams.documentStyle,e.headerFooterParams.documentStyle);var r=n(e);return r=s(e)||r,r=l(e)||r}}}));