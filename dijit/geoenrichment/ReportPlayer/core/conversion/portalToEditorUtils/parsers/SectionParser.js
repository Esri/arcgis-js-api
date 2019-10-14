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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["../../ConversionUtil","./ImageParser","./MapParser","./TableParser"],function(t,e,a,r){var s={},o={getElement:function(e,a){var r=t.parseStyleString(e.attributes.style);return{id:"hr",style:{height:t.ptToPx(e.attributes.height),backgroundColor:r.backgroundColor}}}};return s.parseSection=function(t,n,l){var c=(n.templateJson,n.tableDefaultStyles,{type:t.attributes.type,customName:t.attributes.customName,style:s._parseSectionStyle(t),stack:[]});return c.type||console.log(new Error("Section type is not supported!")),t.tags&&t.tags.forEach(function(s){if(s.attributes=s.attributes||{},"img"===s.name)try{c.stack.push(e.getElement(s,n))}catch(t){console.log(t)}else if("mapImage"===s.name)try{c.stack.push(a.getElement(s,n))}catch(t){console.log(t)}else if("table"===s.name)try{var i=r.getElement(s,n,l);n.postProcessTableInSection&&n.postProcessTableInSection(t,i),c.stack.push(i)}catch(t){console.log(t)}else"hr"===s.name?c.stack.push(o.getElement(s,n)):"pageBreak"===s.name&&c.stack.push({id:"pageBreak"})}),c},s._parseSectionStyle=function(e){return{backgroundColor:t.parseStyleString(e.attributes.style).backgroundColor,cropContent:e.attributes.cropContent,opacity:e.attributes.opacity?Number(e.attributes.opacity):void 0}},s.parseTable=function(t,e,a){return r.getElement(t,e,a)},s.parseTableCellAttributes=r.parseTableCellAttributes,s});