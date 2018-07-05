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

define(["../../ConversionUtil","./ImageParser","./TableParser"],function(e,t,a){var r={},s={getElement:function(t,a){var r=e.parseStyleString(t.attributes.style);return{id:"hr",style:{height:e.ptToPx(t.attributes.height),backgroundColor:r.backgroundColor}}}};return r.parseSection=function(e,r){var n=(r.templateJson,r.tableDefaultStyles,{type:e.attributes.type,stack:[]});return n.type||console.log(new Error("Section type is not supported!")),e.tags&&e.tags.forEach(function(l){if(l.attributes=l.attributes||{},"img"===l.name||"mapImage"===l.name)n.stack.push(t.getElement(l,r));else if("hr"===l.name)n.stack.push(s.getElement(l,r));else if("pageBreak"===l.name)n.stack.push({id:"pageBreak"});else if("table"===l.name){var i=a.getElement(l,r);r.postProcessTableInSection&&r.postProcessTableInSection(e,i),n.stack.push(i)}}),n},r.parseTable=function(e,t){return a.getElement(e,t)},r.parseTableCellAttributes=a.parseTableCellAttributes,r});