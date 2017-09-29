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

define(["dojo/_base/lang","../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/infographics/InfographicTypes"],function(t,e,a){var i={};return i.portalToEditor=function(i,s,r){function o(){var a=i.tags.slice(),s=a.shift();if(s&&"infographicHeader"==s.attributes.type){var o=a;h={type:i.attributes.type,isDefault:i.attributes.isDefault,style:{width:e.ptToPx(i.attributes.width),height:e.ptToPx(i.attributes.height),minWidth:e.ptToPx(i.attributes.minWidth),minHeight:e.ptToPx(i.attributes.minHeight),backgroundColor:i.attributes.backgroundColor},header:r.parsers.getParser("section").parseTable(s,r),variableTables:o.map(function(a){var i={style:e.ptToPxObj({left:a.attributes.left,top:a.attributes.top,width:a.attributes.width,height:a.attributes.height})};return a.tags.forEach(function(e){var a=e.attributes.type,s=r.parsers.getParser("section").parseTable(e,r),o=s.data.data[0],l=s.data.columns[0].field,u={isContrastColor:e.attributes.isContrastColor,isHighlighted:e.attributes.isHighlighted,style:t.mixin({width:s.data.columns[0].style.width,height:o.style.height,left:s.style.left,top:s.style.spaceBefore},o.style.fields[l])};"shape"==a&&(u.shapeJson=o.fieldInfos[l].shapeJson),"image"==a?u.imageJson=o.fieldInfos[l].imageJson:"variable"==a?u.fieldInfo=o.fieldInfos[l]:"description"==a&&(u.text=o[l]),i[a]=u}),i})}}}function l(){h={type:i.attributes.type,useCircularMask:i.attributes.useCircularMask,alwaysShowCaptions:i.attributes.alwaysShowCaptions,scaleToCover:i.attributes.scaleToCover,style:{width:e.ptToPx(i.attributes.width),height:e.ptToPx(i.attributes.height),backgroundColor:i.attributes.backgroundColor}}}function u(){var t,a,s;i.tags.forEach(function(e){switch(e.name){case"header":t=e;break;case"attributes":a=e;break;case"notes":s=e}}),h={type:i.attributes.type,showNotes:i.attributes.showNotes,showAttributes:i.attributes.showAttributes,attributesLayout:i.attributes.attributesLayout,style:{width:e.ptToPx(i.attributes.width),height:e.ptToPx(i.attributes.height),backgroundColor:i.attributes.backgroundColor},header:r.parsers.getParser("section").parseTable(t.tags[0],r),attributesStyle:r.parsers.getParser("section").parseTableCellAttributes(a&&a.attributes||{},null,r),notesStyle:r.parsers.getParser("section").parseTableCellAttributes(s&&s.attributes||{},null,r)}}function b(){h={type:i.attributes.type,style:{width:e.ptToPx(i.attributes.width),height:e.ptToPx(i.attributes.height),backgroundColor:i.attributes.backgroundColor}}}function n(){var t=i.attributes.name,a=r.templateJson.metadata.infographicCalculatorsHash[t];h={type:i.attributes.type,title:i.attributes.title||"",variables:a&&a.variables,calcData:null,levels:a&&a.levels,highestLevel:a&&a.highestLevel,style:{width:e.ptToPx(i.attributes.width),height:e.ptToPx(i.attributes.height),backgroundColor:i.attributes.backgroundColor},showVerticalAxis:i.attributes.showVerticalAxis,dataCollectionID:i.attributes.dataCollectionID,variableID:i.attributes.variableID},h.variables||(h.variables=h.dataCollectionID?[h.dataCollectionID+".*"]:[h.variableID]),delete h.dataCollectionID,delete h.variableID,h.variables.length>1&&(h.variables=[h.variables[0].substr(0,h.variables[0].lastIndexOf("."))+".*"])}var h;switch(i.attributes.type){case a.STATIC:o();break;case a.ATTACHMENTS:l();break;case a.AREA_DETAILS:u();break;case a.INTERESTING_FACTS:b();break;case a.AGE_PYRAMID:case a.TAPESTRY:case a.RELATED_VARS:case a.ONE_VAR:n();break;default:return null}return h},i});