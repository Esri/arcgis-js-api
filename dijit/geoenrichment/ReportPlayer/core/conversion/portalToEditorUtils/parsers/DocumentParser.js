// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../ConversionUtil","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil","../../../supportClasses/DocumentOptions"],function(t,e,i,n,o){var s={};return s.parseDocument=function(n,s){var r=s.templateJson,a="HTMLextReport"===n.name?n:e.queryJson(n,"HTMLextReport",!0)[0];if(a){var u=a.attributes.pagesize,p=a.attributes.orientation||"portrait";r.documentOptions.pagesize=o.tryGetStandardPageSize(u,p),r.documentOptions.orientation=p,["left","right","top","bottom"].forEach(function(t){r.documentOptions[t]=i.ptToPx(a.attributes[t]||0)}),t.mixin(r.documentOptions,i.ptToPxObj(i.parseStyleString(a.attributes.style)));var l=e.queryJson(n,"def",!0)[0];l&&(l.attributes.align&&(r.documentOptions.align=l.attributes.align),l.attributes.lineSpacing&&(r.documentOptions.lineSpacing=i.ptToPx(l.attributes.lineSpacing))),s.revisionVersion=a.attributes.revisionVersion?Number(a.attributes.revisionVersion):-1}},s});