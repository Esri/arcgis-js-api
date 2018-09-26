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

define(["dojo/_base/lang","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil","../../../core/supportClasses/DocumentOptions"],function(e,t,o,r,a){var d={fixStyles:function(t,o){function a(e){return"string"!=typeof e||r.isTransparent(e)||"#ffffff"===e.toLowerCase()}if(!o)return t;t=e.mixin({},t);var d=o.backgroundColor?r.toCSSColor(o.backgroundColor):null,i=t.backgroundColor?r.toCSSColor(t.backgroundColor):null,n=t.color?r.toCSSColor(t.color):null;return a(d)&&a(i)&&a(n)&&(t.color="#000000"),t}},i={applyStyleToNode:function(e,t,r){t&&(t=d.fixStyles(t,r),t.backgroundColor&&o.set(e,"backgroundColor",t.backgroundColor),t.color&&o.set(e,"color",t.color),t.fontSize&&o.set(e,"fontSize",t.fontSize+"px"),t.fontFamily&&o.set(e,"fontFamily",t.fontFamily))}},n={buildHeader:function(e){var r=e.headerFooterParams.header,d=e.pageNode,n=e.documentOptions,l=e.headerFooterParams.documentStyle;if(r&&r.show){var s=r.style,c=t.create("div",{class:"printNode_reportHeader"},d,"first");i.applyStyleToNode(c,s.headerStyle,l),o.set(c,{maxWidth:a.getPageBox(n).contentW+"px",paddingLeft:n.left+"px",paddingRight:n.right+"px"});var p=t.create("div",{class:""},c),u=t.create("div",{class:"printNode_titleLabel",innerHTML:r.title},p);i.applyStyleToNode(u,s.titleStyle,l);var g=t.create("div",{class:"printNode_reportHeaderRow"},c);t.create("div",{class:"printNode_subtitleLabel",innerHTML:r.subtitle},g),t.create("div",{class:"printNode_siteNameLabel",innerHTML:r.siteName},g);var f=r.siteAddr||r.siteDesc;if(r.latitude||f){var y=t.create("div",{class:"printNode_reportHeaderRow"},c);r.latitude&&i.applyStyleToNode(t.create("div",{class:"printNode_siteLatLabel",innerHTML:"Latitude: "+r.latitude},y),s.latLongStyle,l),f&&t.create("div",{class:"printNode_siteAddrLabel",innerHTML:f},y)}var S=f&&f!==r.siteDesc&&r.siteDesc;if(r.longitude||S){var v=t.create("div",{class:"printNode_reportHeaderRow"},c);r.longitude&&i.applyStyleToNode(t.create("div",{class:"printNode_siteLongLabel",innerHTML:"Longitude: "+r.longitude},v),s.latLongStyle,l),S&&t.create("div",{class:"printNode_siteDescLabel",innerHTML:S},v)}}}},l={buildDataSource:function(e){var r=e.headerFooterParams.dataSource,d=e.pageNode,n=e.documentOptions,l=e.headerFooterParams.documentStyle;if(r&&r.show){var s=t.create("div",{class:"printNode_reportDataSource"},d);i.applyStyleToNode(s,r.style.dataSourceStyle,l),o.set(s,{maxWidth:a.getPageBox(n).contentW+"px",paddingLeft:n.left+"px",paddingRight:n.right+"px"});var c=t.create("div",{class:"printNode_reportDataSourceRow"},s);t.create("div",{class:"printNode_dataSourceLabel",innerHTML:r.sourceText},c)}}},s={buildFooter:function(e){var r=e.headerFooterParams.footer,d=e.pageNode,n=e.documentOptions,l=e.headerFooterParams.documentStyle,s=e.pageIndex,c=e.numPages;if(r&&r.show){var p=r.style,u=t.create("div",{class:"printNode_reportFooter"},d);i.applyStyleToNode(u,p.footerStyle,l),o.set(u,{maxWidth:a.getPageBox(n).contentW+"px",paddingLeft:n.left+"px",paddingRight:n.right+"px"});var g=t.create("div",{class:"printNode_reportFooterRow"},u);t.create("div",{class:"printNode_dateLabel",innerHTML:r.formattedDate},g),t.create("div",{class:"printNode_copyrightLabel",innerHTML:r.copyrightText},g),t.create("div",{class:"printNode_pageLabel",innerHTML:"Page "+(s+1)+" of "+c},g)}}};return{addHeaderAndFooterToPage:function(e){e.headerFooterParams&&(e.headerFooterParams.documentStyle&&i.applyStyleToNode(e.pageNode,e.headerFooterParams.documentStyle,e.headerFooterParams.documentStyle),n.buildHeader(e),l.buildDataSource(e),s.buildFooter(e))}}});