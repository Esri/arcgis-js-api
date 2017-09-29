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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../ConversionUtil","../../reportingEngine/ReportingEnginePageSizeCompatibilityUtil","../../../supportClasses/templateJsonUtils/FieldInfoNameUtil"],function(t,e,i,n,o){var r={};return r.parseDocument=function(r,a){var s=a.templateJson,u="HTMLextReport"==r.name?r:e.queryJson(r,"HTMLextReport",!0)[0];if(u){var p=u.attributes.pagesize,l=u.attributes.orientation||"portrait";s.documentOptions.pagesize=n.tryGetStandardPageSize(p,l),s.documentOptions.orientation=l,["left","right","top","bottom"].forEach(function(t){s.documentOptions[t]=i.ptToPx(u.attributes[t]||0)}),t.mixin(s.documentOptions,i.ptToPxObj(i.parseStyleString(u.attributes.style)));var m=e.queryJson(r,"def",!0)[0];m&&(m.attributes.align&&(s.documentOptions.align=m.attributes.align),m.attributes.lineSpacing&&(s.documentOptions.lineSpacing=i.ptToPx(m.attributes.lineSpacing))),a.revisionVersion=u.attributes.revisionVersion?Number(u.attributes.revisionVersion):-1;var g=e.queryJson(r,"queries",!0)[0],b=g&&e.queryJson(g,"query")[0],c=b&&e.queryJson(b,"join")[0];s.mainCalculatorName=c&&c.attributes.table||o.DATA_COLLECTIONS_CALCULATOR_NAME}},r});