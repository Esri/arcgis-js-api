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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(t,e,i){var a={};return a.portalToEditor=function(a,s){function r(t){return s.parsers.getParser("section").parseTable(t,s)}var n,o,l,u=a.tags.slice(),d=[];!function(){s.revisionVersion>=1.1?u.forEach(function(t){switch(t.attributes.type){case i.INFOGRAPHIC_HEADER:n=t.tags[0];break;case i.INFOGRAPHIC_VARIABLE:d.push(t);break;case i.INFOGRAPHIC_BACKGROUND:o=t.tags;break;case i.INFOGRAPHIC_FOREGROUND:l=t.tags}}):d=u.filter(function(t){return"infographicHeader"!==t.attributes.type||(n=t,!1)})}();var f,g={type:a.attributes.type,isDefault:a.attributes.isDefault,style:{width:e.ptToPx(a.attributes.width),height:e.ptToPx(a.attributes.height),minWidth:e.ptToPx(a.attributes.minWidth)||void 0,minHeight:e.ptToPx(a.attributes.minHeight)||void 0,backgroundColor:a.attributes.backgroundColor},background:o?o.map(r):null,header:n&&r(n),variableTables:d.map(function(i){function a(t){f=f||{},f[o.variable.fieldInfo.templateName]=t}var n,o={style:e.ptToPxObj({left:i.attributes.left,top:i.attributes.top,width:i.attributes.width,height:i.attributes.height})};if(i.tags.forEach(function(e){if("dataDrillingPanels"===e.name)return void(n=e);var i=e.attributes.type,a=r(e),s=a.data.data[0],l=a.data.columns[0].field,u={isContrastColor:e.attributes.isContrastColor,isHighlighted:e.attributes.isHighlighted,style:t.mixin({width:a.data.columns[0].style.width,height:s.style.height,left:a.style.left,top:a.style.spaceBefore},s.style.fields[l])};delete u.style.overrideStyle,"shape"===i&&(u.shapeJson=s.fieldInfos[l].shapeJson),"image"===i?u.imageJson=s.fieldInfos[l].imageJson:"variable"===i?u.fieldInfo=s.fieldInfos[l]:"description"===i&&(u.text=s[l]),o[i]=u}),n&&n.tags&&n.tags.length){var l=n.tags[0];if(l.attributes&&l.attributes.isStandard)a("standard");else{var u=l.tags&&l.tags[0];u&&"section"===u.name&&a({states:l.attributes&&l.attributes.states,sectionJson:s.parsers.getParser("section").parseSection(u,s)})}}return o}),foreground:l?l.map(r):null};return g.dataDrilling=f,g},a});