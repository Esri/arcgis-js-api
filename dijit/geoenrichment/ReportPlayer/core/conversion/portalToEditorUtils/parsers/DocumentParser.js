// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../ConversionUtil","../../../supportClasses/DocumentOptions"],(function(t,e,o,i){var n={parseDocument:function(n,r){var s=r.templateJson,a="HTMLextReport"===n.name?n:e.queryTopJson(n,"HTMLextReport")[0];if(a){var p=a.attributes.pagesize,u=a.attributes.orientation||"portrait";s.documentOptions.pagesize=i.tryGetStandardPageSize(p,u),s.documentOptions.orientation=u,["left","right","top","bottom"].forEach((function(t){s.documentOptions[t]=o.ptToPx(a.attributes[t]||0)})),t.mixin(s.documentOptions,o.ptToPxObj(o.parseStyleString(a.attributes.style)));var l=e.queryTopJson(n,"def")[0];l&&(l.attributes.align&&(s.documentOptions.align=l.attributes.align),l.attributes.lineSpacing&&(s.documentOptions.lineSpacing=o.ptToPx(l.attributes.lineSpacing))),a.attributes.comparisonZoom&&(r.report.defaultComparisonZoom=Number(a.attributes.comparisonZoom));var m=e.queryTopJson(n,"tooltip")[0];if(m){var c=e.queryTopJson(m,"table")[0];if(c){var b=c.attributes||{};s.tooltipInfo={table:{value:!!b.value,alias:!!b.alias,expression:!!b.expression,conditional:!!b.conditional}}}}r.revisionVersion=a.attributes.revisionVersion?Number(a.attributes.revisionVersion):-1,s.documentOptions.revisionVersion=r.revisionVersion}}};return n}));
