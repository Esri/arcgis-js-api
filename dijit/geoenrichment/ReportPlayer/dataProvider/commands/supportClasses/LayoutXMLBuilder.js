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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/ReportPlayer/core/conversion/reportingEngine/converters/DocumentConverter","esri/dijit/geoenrichment/ReportPlayer/core/conversion/ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],(function(e,t,n,o,r,i){return{buildLayoutXML:function(s){var g=n.buildDocumentTag({addDefaultQuery:!0,report:{templateJson:{documentOptions:e.mixin({},s.documentOptions,{left:0,right:0,top:0,bottom:0})}}}).documentTag,a=r.getPageBox(s.documentOptions),c=o.pxToPt(a.w),p=o.pxToPt(a.h);s.svgStrings.forEach((function(e,t){g.tags.push({name:"section",attributes:{type:i.DETAILS},tags:[{name:"img",attributes:{left:0,top:0,width:c,height:p},tags:[{text:"__svgString__"+t+"__svgString__"}]}]}),t<s.svgStrings.length-1&&g.tags.push({name:"pageBreak"})}));var u=t.parseJson(g);return s.svgStrings.forEach((function(e,t){u=u.replace("__svgString__"+t+"__svgString__",e)})),u}}}));