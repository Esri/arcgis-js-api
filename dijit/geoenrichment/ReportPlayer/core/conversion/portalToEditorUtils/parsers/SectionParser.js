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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["../../ConversionUtil","./ImageParser","./TableParser"],function(t,e,a){var r={},s={getElement:function(e,a){var r=t.parseStyleString(e.attributes.style);return{id:"hr",style:{height:t.ptToPx(e.attributes.height),backgroundColor:r.backgroundColor}}}};return r.parseSection=function(t,n,o){var i=(n.templateJson,n.tableDefaultStyles,{type:t.attributes.type,customName:t.attributes.customName,style:r._parseSectionStyle(t),stack:[]});return i.type||console.log(new Error("Section type is not supported!")),t.tags&&t.tags.forEach(function(r){if(r.attributes=r.attributes||{},"img"===r.name||"mapImage"===r.name)i.stack.push(e.getElement(r,n));else if("hr"===r.name)i.stack.push(s.getElement(r,n));else if("pageBreak"===r.name)i.stack.push({id:"pageBreak"});else if("table"===r.name){var l=a.getElement(r,n,o);n.postProcessTableInSection&&n.postProcessTableInSection(t,l),i.stack.push(l)}}),i},r._parseSectionStyle=function(e){return{backgroundColor:t.parseStyleString(e.attributes.style).backgroundColor,cropContent:e.attributes.cropContent,opacity:e.attributes.opacity?Number(e.attributes.opacity):void 0}},r.parseTable=function(t,e){return a.getElement(t,e)},r.parseTableCellAttributes=a.parseTableCellAttributes,r});