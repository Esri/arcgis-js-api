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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../ConversionUtil","../../../supportClasses/DocumentOptions"],function(t,e,i,n){var o={};return o.parseDocument=function(o,r){var s=r.templateJson,a="HTMLextReport"===o.name?o:e.queryJson(o,"HTMLextReport",!0)[0];if(a){var u=a.attributes.pagesize,p=a.attributes.orientation||"portrait";s.documentOptions.pagesize=n.tryGetStandardPageSize(u,p),s.documentOptions.orientation=p,["left","right","top","bottom"].forEach(function(t){s.documentOptions[t]=i.ptToPx(a.attributes[t]||0)}),t.mixin(s.documentOptions,i.ptToPxObj(i.parseStyleString(a.attributes.style)));var c=e.queryJson(o,"def",!0)[0];c&&(c.attributes.align&&(s.documentOptions.align=c.attributes.align),c.attributes.lineSpacing&&(s.documentOptions.lineSpacing=i.ptToPx(c.attributes.lineSpacing))),r.revisionVersion=a.attributes.revisionVersion?Number(a.attributes.revisionVersion):-1}},o});