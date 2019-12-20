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

define(["../../ConversionUtil","./ImageParser","./MapParser","./TableParser"],function(t,e,o,a){var r={},s={getElement:function(e,o){var a=t.parseStyleString(e.attributes.style);return{id:"hr",style:{height:t.ptToPx(e.attributes.height),backgroundColor:a.backgroundColor}}}};return r.parseSection=function(t,n,i){var l=(n.templateJson,n.tableDefaultStyles,{type:t.attributes.type,customName:t.attributes.customName,style:r._parseSectionStyle(t),stack:[]});return l.type||console.log(new Error("Section type is not supported!")),t.tags&&t.tags.forEach(function(r){if(r.attributes=r.attributes||{},"img"===r.name)try{l.stack.push(e.getElement(r,n))}catch(t){console.log(t)}else if("mapImage"===r.name)try{l.stack.push(o.getElement(r,n))}catch(t){console.log(t)}else if("table"===r.name)try{var c=a.getElement(r,n,i);n.postProcessTableInSection&&n.postProcessTableInSection(t,c),l.stack.push(c)}catch(t){console.log(t)}else"hr"===r.name?l.stack.push(s.getElement(r,n)):"pageBreak"===r.name&&l.stack.push({id:"pageBreak"})}),l},r._parseSectionStyle=function(e){var o=e.attributes;return{backgroundColor:t.parseStyleString(o.style).backgroundColor,cropContent:o.cropContent,opacity:o.opacity?Number(o.opacity):void 0,top:o.top?t.ptToPx(o.top):void 0,left:o.left?t.ptToPx(o.left):void 0,width:o.width?t.ptToPx(o.width):void 0,height:o.height?t.ptToPx(o.height):void 0}},r.parseTable=function(t,e,o){return a.getElement(t,e,o)},r.parseTableCellAttributes=a.parseTableCellAttributes,r});