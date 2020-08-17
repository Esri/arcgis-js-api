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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","../../../../supportClasses/tableJson/TableJsonResizeUtil","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,a,s,r,o,n){n=n.geoenrichment.dijit.ReportPlayer.ReportPlayer;var l={portalToEditor:function(l,d){var p,f,h,u=l.tags.slice(),c=[];function g(e){return d.parsers.getParser("section").parseTable(e,d)}d.revisionVersion>=1.1?u.forEach((function(e){switch(e.attributes.type){case s.INFOGRAPHIC_HEADER:p=e.tags[0];break;case s.INFOGRAPHIC_VARIABLE:c.push(e);break;case s.INFOGRAPHIC_BACKGROUND:f=e.tags;break;case s.INFOGRAPHIC_FOREGROUND:h=e.tags}})):c=u.filter((function(e){return"infographicHeader"!==e.attributes.type||(p=e,!1)}));var b={type:l.attributes.type,isDefault:l.attributes.isDefault,style:{width:i.ptToPx(l.attributes.width),height:i.ptToPx(l.attributes.height),padding:l.attributes.padding?i.ptToPx(l.attributes.padding):void 0,backgroundColor:l.attributes.backgroundColor},preserveTextSize:l.attributes.preserveTextSizeWhenResizing,background:f?f.map(g):null,header:p&&g(p),variableTables:null,foreground:h?h.map(g):null,dataDrilling:null};return b.variableTables=c.map((function(s){var l,p={style:i.ptToPxObj({left:s.attributes.left,top:s.attributes.top,width:s.attributes.width,height:s.attributes.height})};function f(e){if(e&&e.isMissing){if(e.alias=p.description&&p.description.text,!e.alias&&d.variableProvider.isPlayerOnly){var t=d.variableProvider.toCalculator(e.templateName);e.alias=t&&t.variable.alias}e.alias=e.alias?e.alias+" ("+n.missingVariable+")":n.missingVariable}}if(s.tags.forEach((function(t){if("dataDrillingPanels"!==t.name){var i=t.attributes.type,a=g(t),s=a.data.data[0],o=a.data.columns[0].field,n={isContrastColor:t.attributes.isContrastColor,isHighlighted:t.attributes.isHighlighted,style:e.mixin({width:a.data.columns[0].style.width,height:s.style.height,left:a.style.left,top:a.style.top},s.style.fields[o])};delete n.style.overrideStyle,"shape"===i&&(n.shapeJson=s.fieldInfos[o].shapeJson,d.revisionVersion<1.6&&(n.style.width-=3,n.style.height-=3,n.shapeJson.style.width-=3,n.shapeJson.style.height-=3)),"image"===i?n.imageJson=s.fieldInfos[o].imageJson:"variable"===i?n.fieldInfo=s.fieldInfos[o]||r.createFieldInfoFromMissingVariable():"description"===i&&(n.text=s[o],n.fieldInfo=s.fieldInfos[o]),p[i]=n}else l=t})),f(p.variable.fieldInfo),p.description&&f(p.description.fieldInfo),l){var h=t.queryTopJson(l,"dataDrillingPanel")[0],u=h&&t.queryTopJson(h,"section")[0];if(u){var c=d.parsers.getParser("section").parseSection(u,d);if(d.revisionVersion<1.9&&1===c.stack.length&&"table"===c.stack[0].id){var y=c.stack[0],v={w:700,h:600};o.resizeTableJsonToFitWidth(y,v.w),o.resizeTableJsonToFitHeight(y,v.h)}a.setDataDrilling(b,p.variable.fieldInfo.templateName,{sectionJson:c})}}return p})),b}};return l}));
