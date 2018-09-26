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

define(["../../ConversionUtil","./ImageParser","./TableParser"],function(e,t,r){var a={},s={getElement:function(t,r){var a=e.parseStyleString(t.attributes.style);return{id:"hr",style:{height:e.ptToPx(t.attributes.height),backgroundColor:a.backgroundColor}}}};return a.parseSection=function(a,n){var o=(n.templateJson,n.tableDefaultStyles,e.parseStyleString(a.attributes.style)),l={type:a.attributes.type,style:o.backgroundColor&&{backgroundColor:o.backgroundColor},stack:[]};return l.type||console.log(new Error("Section type is not supported!")),a.tags&&a.tags.forEach(function(e){if(e.attributes=e.attributes||{},"img"===e.name||"mapImage"===e.name)l.stack.push(t.getElement(e,n));else if("hr"===e.name)l.stack.push(s.getElement(e,n));else if("pageBreak"===e.name)l.stack.push({id:"pageBreak"});else if("table"===e.name){var o=r.getElement(e,n);n.postProcessTableInSection&&n.postProcessTableInSection(a,o),l.stack.push(o)}}),l},a.parseTable=function(e,t){return r.getElement(e,t)},a.parseTableCellAttributes=r.parseTableCellAttributes,a});