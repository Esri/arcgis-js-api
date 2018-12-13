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

define(["dojo/_base/lang","../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","dojo/i18n!esri/nls/jsapi"],function(t,e,i,a,s,r){r=r.geoenrichment.dijit.ReportPlayer.ReportPlayer;var n={};return n.portalToEditor=function(n,l){function o(t){return l.parsers.getParser("section").parseTable(t,l)}var d,u,f,g=n.tags.slice(),c=[];!function(){l.revisionVersion>=1.1?g.forEach(function(t){switch(t.attributes.type){case a.INFOGRAPHIC_HEADER:d=t.tags[0];break;case a.INFOGRAPHIC_VARIABLE:c.push(t);break;case a.INFOGRAPHIC_BACKGROUND:u=t.tags;break;case a.INFOGRAPHIC_FOREGROUND:f=t.tags}}):c=g.filter(function(t){return"infographicHeader"!==t.attributes.type||(d=t,!1)})}();var h={type:n.attributes.type,isDefault:n.attributes.isDefault,style:{width:e.ptToPx(n.attributes.width),height:e.ptToPx(n.attributes.height),backgroundColor:n.attributes.backgroundColor},background:u?u.map(o):null,header:d&&o(d),variableTables:null,foreground:f?f.map(o):null,dataDrilling:null};return h.variableTables=c.map(function(a){function n(t){i.setDataDrilling(h,u.variable.fieldInfo.templateName,t)}var d,u={style:e.ptToPxObj({left:a.attributes.left,top:a.attributes.top,width:a.attributes.width,height:a.attributes.height})};a.tags.forEach(function(e){if("dataDrillingPanels"===e.name)return void(d=e);var i=e.attributes.type,a=o(e),r=a.data.data[0],n=a.data.columns[0].field,f={isContrastColor:e.attributes.isContrastColor,isHighlighted:e.attributes.isHighlighted,style:t.mixin({width:a.data.columns[0].style.width,height:r.style.height,left:a.style.left,top:a.style.spaceBefore},r.style.fields[n])};delete f.style.overrideStyle,"shape"===i&&(f.shapeJson=r.fieldInfos[n].shapeJson,l.revisionVersion<1.6&&(f.style.width-=3,f.style.height-=3,f.shapeJson.style.width-=3,f.shapeJson.style.height-=3)),"image"===i?f.imageJson=r.fieldInfos[n].imageJson:"variable"===i?f.fieldInfo=r.fieldInfos[n]||s.createFieldInfoFromMissingVariable():"description"===i&&(f.text=r[n]),u[i]=f});var f=u.variable&&u.variable.fieldInfo;if(f&&f.isMissing){if(f.alias=u.description&&u.description.text,!f.alias&&l.variableProvider.isPlayerOnly){var g=l.variableProvider.toCalculator(f.templateName);f.alias=g&&g.variable.alias}f.alias=f.alias?f.alias+" ("+r.missingVariable+")":r.missingVariable}if(d&&d.tags&&d.tags.length){var c=d.tags[0];if(c.attributes&&c.attributes.isStandard)n({isStandard:!0,standardId:c.attributes.standardId});else{var p=c.tags&&c.tags[0];p&&"section"===p.name&&n({sectionJson:l.parsers.getParser("section").parseSection(p,l)})}}return u}),["padding"].forEach(function(t){void 0!==n.attributes[t]&&(h.style[t]=e.ptToPx(n.attributes[t]))}),h},n});