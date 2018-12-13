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

define(["dojo/_base/lang","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,t,o,r){var a={fixStyles:function(t,o){function a(e){return"string"!=typeof e||r.isTransparent(e)||"#ffffff"===e.toLowerCase()}if(!o)return t;t=e.mixin({},t);var d=o.backgroundColor?r.toCSSColor(o.backgroundColor):null,i=t.backgroundColor?r.toCSSColor(t.backgroundColor):null,l=t.color?r.toCSSColor(t.color):null;return a(d)&&a(i)&&a(l)&&(t.color="#000000"),t}},d={applyStyleToNode:function(e,t,r){t&&(t=a.fixStyles(t,r),t.backgroundColor&&o.set(e,"backgroundColor",t.backgroundColor),t.color&&o.set(e,"color",t.color),t.fontSize&&o.set(e,"fontSize",t.fontSize+"px"),t.fontFamily&&o.set(e,"fontFamily",t.fontFamily))}},i={buildHeader:function(e){var r=e.headerFooterParams.header,a=e.pageNode,i=e.documentOptions,l=e.headerFooterParams.documentStyle;if(r&&r.show){var n=r.style,s=t.create("div",{class:"printNode_reportHeader"},a,"first");d.applyStyleToNode(s,n.headerStyle,l),o.set(s,{paddingLeft:i.left+"px",paddingRight:i.right+"px"});var c=t.create("div",{class:""},s),p=t.create("div",{class:"printNode_titleLabel",innerHTML:r.title},c);d.applyStyleToNode(p,n.titleStyle,l);var u=t.create("div",{class:"printNode_reportHeaderRow"},s);t.create("div",{class:"printNode_subtitleLabel",innerHTML:r.subtitle},u),t.create("div",{class:"printNode_siteNameLabel",innerHTML:r.siteName},u);var f=r.siteAddr||r.siteDesc;if(r.latitude||f){var g=t.create("div",{class:"printNode_reportHeaderRow"},s);r.latitude&&d.applyStyleToNode(t.create("div",{class:"printNode_siteLatLabel",innerHTML:"Latitude: "+r.latitude},g),n.latLongStyle,l),f&&t.create("div",{class:"printNode_siteAddrLabel",innerHTML:f},g)}var y=f&&f!==r.siteDesc&&r.siteDesc;if(r.longitude||y){var S=t.create("div",{class:"printNode_reportHeaderRow"},s);r.longitude&&d.applyStyleToNode(t.create("div",{class:"printNode_siteLongLabel",innerHTML:"Longitude: "+r.longitude},S),n.latLongStyle,l),y&&t.create("div",{class:"printNode_siteDescLabel",innerHTML:y},S)}}}},l={buildDataSource:function(e){var r=e.headerFooterParams.dataSource,a=e.pageNode,i=e.documentOptions,l=e.headerFooterParams.documentStyle;if(r&&r.show){var n=t.create("div",{class:"printNode_reportDataSource"},a);d.applyStyleToNode(n,r.style.dataSourceStyle,l),o.set(n,{paddingLeft:i.left+"px",paddingRight:i.right+"px"});var s=t.create("div",{class:"printNode_reportDataSourceRow"},n);t.create("div",{class:"printNode_dataSourceLabel",innerHTML:r.sourceText},s)}}},n={buildFooter:function(e){var r=e.headerFooterParams.footer,a=e.pageNode,i=e.documentOptions,l=e.headerFooterParams.documentStyle,n=e.pageIndex,s=e.numPages;if(r&&r.show){var c=r.style,p=t.create("div",{class:"printNode_reportFooter"},a);d.applyStyleToNode(p,c.footerStyle,l),o.set(p,{paddingLeft:i.left+"px",paddingRight:i.right+"px"});var u=t.create("div",{class:"printNode_reportFooterRow"},p);t.create("div",{class:"printNode_dateLabel",innerHTML:r.formattedDate},u),t.create("div",{class:"printNode_copyrightLabel",innerHTML:r.copyrightText},u),t.create("div",{class:"printNode_pageLabel",innerHTML:"Page "+(n+1)+" of "+s},u)}}};return{addHeaderAndFooterToPage:function(e){e.headerFooterParams&&(e.headerFooterParams.documentStyle&&d.applyStyleToNode(e.pageNode,e.headerFooterParams.documentStyle,e.headerFooterParams.documentStyle),i.buildHeader(e),l.buildDataSource(e),n.buildFooter(e))}}});