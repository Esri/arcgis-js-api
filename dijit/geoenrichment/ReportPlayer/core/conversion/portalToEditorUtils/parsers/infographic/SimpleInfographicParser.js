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

define(["dojo/_base/lang","../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,a,s,r){r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n={portalToEditor:function(n,l){var o,d,g,p=n.tags.slice(),u=[];function h(e){return l.parsers.getParser("section").parseTable(e,l)}l.revisionVersion>=1.1?p.forEach((function(e){switch(e.attributes.type){case a.INFOGRAPHIC_HEADER:o=e.tags[0];break;case a.INFOGRAPHIC_VARIABLE:u.push(e);break;case a.INFOGRAPHIC_BACKGROUND:d=e.tags;break;case a.INFOGRAPHIC_FOREGROUND:g=e.tags}})):u=p.filter((function(e){return"infographicHeader"!==e.attributes.type||(o=e,!1)}));var f={type:n.attributes.type,isDefault:n.attributes.isDefault,style:{width:t.ptToPx(n.attributes.width),height:t.ptToPx(n.attributes.height),padding:n.attributes.padding?t.ptToPx(n.attributes.padding):void 0,backgroundColor:n.attributes.backgroundColor},preserveTextSize:n.attributes.preserveTextSizeWhenResizing,background:d?d.map(h):null,header:o&&h(o),variableTables:null,foreground:g?g.map(h):null,dataDrilling:null};return f.variableTables=u.map((function(a){var n,o={style:t.ptToPxObj({left:a.attributes.left,top:a.attributes.top,width:a.attributes.width,height:a.attributes.height})};a.tags.forEach((function(t){if("dataDrillingPanels"!==t.name){var i=t.attributes.type,a=h(t),r=a.data.data[0],d=a.data.columns[0].field,g={isContrastColor:t.attributes.isContrastColor,isHighlighted:t.attributes.isHighlighted,style:e.mixin({width:a.data.columns[0].style.width,height:r.style.height,left:a.style.left,top:a.style.top},r.style.fields[d])};delete g.style.overrideStyle,"shape"===i&&(g.shapeJson=r.fieldInfos[d].shapeJson,l.revisionVersion<1.6&&(g.style.width-=3,g.style.height-=3,g.shapeJson.style.width-=3,g.shapeJson.style.height-=3)),"image"===i?g.imageJson=r.fieldInfos[d].imageJson:"variable"===i?g.fieldInfo=r.fieldInfos[d]||s.createFieldInfoFromMissingVariable():"description"===i&&(g.text=r[d]),o[i]=g}else n=t}));var d=o.variable&&o.variable.fieldInfo;if(d&&d.isMissing){if(d.alias=o.description&&o.description.text,!d.alias&&l.variableProvider.isPlayerOnly){var g=l.variableProvider.toCalculator(d.templateName);d.alias=g&&g.variable.alias}d.alias=d.alias?d.alias+" ("+r.missingVariable+")":r.missingVariable}if(n&&n.tags&&n.tags.length){var p=n.tags[0];function u(e){i.setDataDrilling(f,o.variable.fieldInfo.templateName,e)}if(p.attributes&&p.attributes.isStandard)u({isStandard:!0,standardId:p.attributes.standardId});else{var b=p.tags&&p.tags[0];b&&"section"===b.name&&u({sectionJson:l.parsers.getParser("section").parseSection(b,l)})}}return o})),f}};return n}));