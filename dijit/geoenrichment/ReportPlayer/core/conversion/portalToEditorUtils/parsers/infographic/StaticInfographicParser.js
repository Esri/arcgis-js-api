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

define(["dojo/_base/lang","../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicJsonUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder"],function(t,e,i,a,s){var r={};return r.portalToEditor=function(r,n){function o(t){return n.parsers.getParser("section").parseTable(t,n)}var l,d,u,f=r.tags.slice(),c=[];!function(){n.revisionVersion>=1.1?f.forEach(function(t){switch(t.attributes.type){case a.INFOGRAPHIC_HEADER:l=t.tags[0];break;case a.INFOGRAPHIC_VARIABLE:c.push(t);break;case a.INFOGRAPHIC_BACKGROUND:d=t.tags;break;case a.INFOGRAPHIC_FOREGROUND:u=t.tags}}):c=f.filter(function(t){return"infographicHeader"!==t.attributes.type||(l=t,!1)})}();var g={type:r.attributes.type,isDefault:r.attributes.isDefault,style:{width:e.ptToPx(r.attributes.width),height:e.ptToPx(r.attributes.height),backgroundColor:r.attributes.backgroundColor},background:d?d.map(o):null,header:l&&o(l),variableTables:null,foreground:u?u.map(o):null,dataDrilling:null};return g.variableTables=c.map(function(a){function r(t){i.setDataDrilling(g,d.variable.fieldInfo.templateName,t)}var l,d={style:e.ptToPxObj({left:a.attributes.left,top:a.attributes.top,width:a.attributes.width,height:a.attributes.height})};if(a.tags.forEach(function(e){if("dataDrillingPanels"===e.name)return void(l=e);var i=e.attributes.type,a=o(e),r=a.data.data[0],n=a.data.columns[0].field,u={isContrastColor:e.attributes.isContrastColor,isHighlighted:e.attributes.isHighlighted,style:t.mixin({width:a.data.columns[0].style.width,height:r.style.height,left:a.style.left,top:a.style.spaceBefore},r.style.fields[n])};delete u.style.overrideStyle,"shape"===i&&(u.shapeJson=r.fieldInfos[n].shapeJson),"image"===i?u.imageJson=r.fieldInfos[n].imageJson:"variable"===i?u.fieldInfo=r.fieldInfos[n]||s.createFieldInfoFromMissingVariable():"description"===i&&(u.text=r[n]),d[i]=u}),l&&l.tags&&l.tags.length){var u=l.tags[0];if(u.attributes&&u.attributes.isStandard)r({isStandard:!0,standardId:u.attributes.standardId});else{var f=u.tags&&u.tags[0];f&&"section"===f.name&&r({sectionJson:n.parsers.getParser("section").parseSection(f,n)})}}return d}),["minWidth","maxWidth","minHeight","maxHeight"].forEach(function(t){void 0!==r.attributes[t]&&(g.style[t]=e.ptToPx(r.attributes[t]))}),g},r});