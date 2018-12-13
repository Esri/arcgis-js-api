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

define(["../../ConversionUtil","./ImageParser","./TableParser"],function(e,t,a){var r={},n={getElement:function(t,a){var r=e.parseStyleString(t.attributes.style);return{id:"hr",style:{height:e.ptToPx(t.attributes.height),backgroundColor:r.backgroundColor}}}};return r.parseSection=function(e,s,o){var i=(s.templateJson,s.tableDefaultStyles,{type:e.attributes.type,style:r._parseSectionStyle(e),stack:[]});return i.type||console.log(new Error("Section type is not supported!")),e.tags&&e.tags.forEach(function(r){if(r.attributes=r.attributes||{},"img"===r.name||"mapImage"===r.name)i.stack.push(t.getElement(r,s));else if("hr"===r.name)i.stack.push(n.getElement(r,s));else if("pageBreak"===r.name)i.stack.push({id:"pageBreak"});else if("table"===r.name){var l=a.getElement(r,s,o);s.postProcessTableInSection&&s.postProcessTableInSection(e,l),i.stack.push(l)}}),i},r._parseSectionStyle=function(t){return{backgroundColor:e.parseStyleString(t.attributes.style).backgroundColor,cropContent:t.attributes.cropContent,canMoveElementsOutside:t.attributes.canMoveElementsOutside,opacity:t.attributes.opacity?Number(t.attributes.opacity):void 0}},r.parseTable=function(e,t){return a.getElement(e,t)},r.parseTableCellAttributes=a.parseTableCellAttributes,r});