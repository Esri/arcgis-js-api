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

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,t,o,r,a){var d={fixStyles:function(t,o){function r(e){return"string"!=typeof e||a.isTransparent(e)||"#ffffff"===e.toLowerCase()}if(!o)return t;t=e.mixin({},t);var d=o.backgroundColor?a.toCSSColor(o.backgroundColor):null,i=t.backgroundColor?a.toCSSColor(t.backgroundColor):null,l=t.color?a.toCSSColor(t.color):null;return r(d)&&r(i)&&r(l)&&(t.color="#000000"),t}},i={applyStyleToNode:function(e,t,o){t&&(t=d.fixStyles(t,o),t.backgroundColor&&r.set(e,"backgroundColor",t.backgroundColor),t.color&&r.set(e,"color",t.color),t.fontSize&&r.set(e,"fontSize",t.fontSize+"px"),t.fontFamily&&r.set(e,"fontFamily",t.fontFamily))}},l={buildHeader:function(e){var t=e.headerFooterParams.header,a=e.pageNode,d=e.documentOptions,l=e.headerFooterParams.documentStyle;if(t&&t.show){var n=t.style,s=o.create("div",{class:"printNode_reportHeader"},a,"first");i.applyStyleToNode(s,n.headerStyle,l),r.set(s,{paddingLeft:d.left+"px",paddingRight:d.right+"px"});var c=o.create("div",{class:""},s),p=o.create("div",{class:"printNode_titleLabel",innerHTML:t.title},c);i.applyStyleToNode(p,n.titleStyle,l);var u=o.create("div",{class:"printNode_reportHeaderRow"},s);o.create("div",{class:"printNode_subtitleLabel",innerHTML:t.subtitle},u),o.create("div",{class:"printNode_siteNameLabel",innerHTML:t.siteName},u);var f=t.siteAddr||t.siteDesc;if(t.latitude||f){var g=o.create("div",{class:"printNode_reportHeaderRow"},s);t.latitude&&i.applyStyleToNode(o.create("div",{class:"printNode_siteLatLabel",innerHTML:"Latitude: "+t.latitude},g),n.latLongStyle,l),f&&o.create("div",{class:"printNode_siteAddrLabel",innerHTML:f},g)}var y=f&&f!==t.siteDesc&&t.siteDesc;if(t.longitude||y){var S=o.create("div",{class:"printNode_reportHeaderRow"},s);t.longitude&&i.applyStyleToNode(o.create("div",{class:"printNode_siteLongLabel",innerHTML:"Longitude: "+t.longitude},S),n.latLongStyle,l),y&&o.create("div",{class:"printNode_siteDescLabel",innerHTML:y},S)}}}},n={buildDataSource:function(e){var t=e.headerFooterParams.dataSource,a=e.pageNode,d=e.documentOptions,l=e.headerFooterParams.documentStyle;if(t&&t.show){var n=o.create("div",{class:"printNode_reportDataSource"},a);i.applyStyleToNode(n,t.style.dataSourceStyle,l),r.set(n,{paddingLeft:d.left+"px",paddingRight:d.right+"px"});var s=o.create("div",{class:"printNode_reportDataSourceRow"},n);o.create("div",{class:"printNode_dataSourceLabel",innerHTML:t.sourceText},s)}}},s={buildFooter:function(e){var t=e.headerFooterParams.footer,a=e.pageNode,d=e.documentOptions,l=e.headerFooterParams.documentStyle,n=e.pageIndex,s=e.numPages;if(t&&t.show){var c=t.style,p=o.create("div",{class:"printNode_reportFooter"},a);i.applyStyleToNode(p,c.footerStyle,l),r.set(p,{paddingLeft:d.left+"px",paddingRight:d.right+"px"});var u=o.create("div",{class:"printNode_reportFooterRow"},p);o.create("div",{class:"printNode_dateLabel",innerHTML:t.formattedDate},u),o.create("div",{class:"printNode_copyrightLabel",innerHTML:t.copyrightText},u),o.create("div",{class:"printNode_pageLabel",innerHTML:"Page "+(n+1)+" of "+s},u)}}};return{addHeaderAndFooterToPage:function(e){e.headerFooterParams&&(e.headerFooterParams.documentStyle&&i.applyStyleToNode(e.pageNode,e.headerFooterParams.documentStyle,e.headerFooterParams.documentStyle),l.buildHeader(e),n.buildDataSource(e),s.buildFooter(e))}}});