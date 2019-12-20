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

define(["dojo/_base/lang","../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","dojo/i18n!esri/nls/jsapi"],function(e,t,i,a,s,r){r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n={};return n.portalToEditor=function(n,l){function o(e){return l.parsers.getParser("section").parseTable(e,l)}var d,u,g,p=n.tags.slice(),h=[];!function(){l.revisionVersion>=1.1?p.forEach(function(e){switch(e.attributes.type){case a.INFOGRAPHIC_HEADER:d=e.tags[0];break;case a.INFOGRAPHIC_VARIABLE:h.push(e);break;case a.INFOGRAPHIC_BACKGROUND:u=e.tags;break;case a.INFOGRAPHIC_FOREGROUND:g=e.tags}}):h=p.filter(function(e){return"infographicHeader"!==e.attributes.type||(d=e,!1)})}();var f={type:n.attributes.type,isDefault:n.attributes.isDefault,style:{width:t.ptToPx(n.attributes.width),height:t.ptToPx(n.attributes.height),padding:n.attributes.padding?t.ptToPx(n.attributes.padding):void 0,backgroundColor:n.attributes.backgroundColor},preserveTextSize:n.attributes.preserveTextSizeWhenResizing,background:u?u.map(o):null,header:d&&o(d),variableTables:null,foreground:g?g.map(o):null,dataDrilling:null};return f.variableTables=h.map(function(a){function n(e){i.setDataDrilling(f,u.variable.fieldInfo.templateName,e)}var d,u={style:t.ptToPxObj({left:a.attributes.left,top:a.attributes.top,width:a.attributes.width,height:a.attributes.height})};a.tags.forEach(function(t){if("dataDrillingPanels"===t.name)return void(d=t);var i=t.attributes.type,a=o(t),r=a.data.data[0],n=a.data.columns[0].field,g={isContrastColor:t.attributes.isContrastColor,isHighlighted:t.attributes.isHighlighted,style:e.mixin({width:a.data.columns[0].style.width,height:r.style.height,left:a.style.left,top:a.style.top},r.style.fields[n])};delete g.style.overrideStyle,"shape"===i&&(g.shapeJson=r.fieldInfos[n].shapeJson,l.revisionVersion<1.6&&(g.style.width-=3,g.style.height-=3,g.shapeJson.style.width-=3,g.shapeJson.style.height-=3)),"image"===i?g.imageJson=r.fieldInfos[n].imageJson:"variable"===i?g.fieldInfo=r.fieldInfos[n]||s.createFieldInfoFromMissingVariable():"description"===i&&(g.text=r[n]),u[i]=g});var g=u.variable&&u.variable.fieldInfo;if(g&&g.isMissing){if(g.alias=u.description&&u.description.text,!g.alias&&l.variableProvider.isPlayerOnly){var p=l.variableProvider.toCalculator(g.templateName);g.alias=p&&p.variable.alias}g.alias=g.alias?g.alias+" ("+r.missingVariable+")":r.missingVariable}if(d&&d.tags&&d.tags.length){var h=d.tags[0];if(h.attributes&&h.attributes.isStandard)n({isStandard:!0,standardId:h.attributes.standardId});else{var c=h.tags&&h.tags[0];c&&"section"===c.name&&n({sectionJson:l.parsers.getParser("section").parseSection(c,l)})}}return u}),f},n});