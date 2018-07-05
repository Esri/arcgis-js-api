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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(t,e,i,a){var s={};return s.portalToEditor=function(s,r){function n(t){return r.parsers.getParser("section").parseTable(t,r)}var o,l,d,u=s.tags.slice(),f=[];!function(){r.revisionVersion>=1.1?u.forEach(function(t){switch(t.attributes.type){case a.INFOGRAPHIC_HEADER:o=t.tags[0];break;case a.INFOGRAPHIC_VARIABLE:f.push(t);break;case a.INFOGRAPHIC_BACKGROUND:l=t.tags;break;case a.INFOGRAPHIC_FOREGROUND:d=t.tags}}):f=u.filter(function(t){return"infographicHeader"!==t.attributes.type||(o=t,!1)})}();var g={type:s.attributes.type,isDefault:s.attributes.isDefault,style:{width:e.ptToPx(s.attributes.width),height:e.ptToPx(s.attributes.height),backgroundColor:s.attributes.backgroundColor},background:l?l.map(n):null,header:o&&n(o),variableTables:null,foreground:d?d.map(n):null,dataDrilling:null};return g.variableTables=f.map(function(a){function s(t){i.setDataDrilling(g,l.variable.fieldInfo.templateName,t)}var o,l={style:e.ptToPxObj({left:a.attributes.left,top:a.attributes.top,width:a.attributes.width,height:a.attributes.height})};if(a.tags.forEach(function(e){if("dataDrillingPanels"===e.name)return void(o=e);var i=e.attributes.type,a=n(e),s=a.data.data[0],r=a.data.columns[0].field,d={isContrastColor:e.attributes.isContrastColor,isHighlighted:e.attributes.isHighlighted,style:t.mixin({width:a.data.columns[0].style.width,height:s.style.height,left:a.style.left,top:a.style.spaceBefore},s.style.fields[r])};delete d.style.overrideStyle,"shape"===i&&(d.shapeJson=s.fieldInfos[r].shapeJson),"image"===i?d.imageJson=s.fieldInfos[r].imageJson:"variable"===i?d.fieldInfo=s.fieldInfos[r]:"description"===i&&(d.text=s[r]),l[i]=d}),o&&o.tags&&o.tags.length){var d=o.tags[0];if(d.attributes&&d.attributes.isStandard)s({isStandard:!0,standardId:d.attributes.standardId});else{var u=d.tags&&d.tags[0];u&&"section"===u.name&&s({sectionJson:r.parsers.getParser("section").parseSection(u,r)})}}return l}),["minWidth","maxWidth","minHeight","maxHeight"].forEach(function(t){void 0!==s.attributes[t]&&(g.style[t]=e.ptToPx(s.attributes[t]))}),g},s});