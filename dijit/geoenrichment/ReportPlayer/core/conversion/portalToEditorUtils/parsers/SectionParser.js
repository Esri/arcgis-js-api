// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["../../ConversionUtil","./ImageParser","./MapParser","./TableParser"],(function(t,e,a,r){var o={},s=function(e,a){var r=t.parseStyleString(e.attributes.style);return{id:"hr",style:{height:t.ptToPx(e.attributes.height),backgroundColor:r.backgroundColor}}};return o.parseSection=function(t,n,i){n.templateJson,n.tableDefaultStyles;var l={type:t.attributes.type,customName:t.attributes.customName,currentFeatureIndex:t.attributes.defaultFeatureIndex?Number(t.attributes.defaultFeatureIndex):void 0,style:o._parseSectionStyle(t),stack:[]};return l.type||console.log(new Error("Section type is not supported!")),t.tags&&t.tags.forEach((function(o){if(o.attributes=o.attributes||{},"img"===o.name)try{l.stack.push(e.getElement(o,n))}catch(t){console.log(t)}else if("mapImage"===o.name)try{l.stack.push(a.getElement(o,n))}catch(t){console.log(t)}else if("table"===o.name)try{var c=r.getElement(o,n,i);n.postProcessTableInSection&&n.postProcessTableInSection(t,c),l.stack.push(c)}catch(t){console.log(t)}else"hr"===o.name?l.stack.push(s(o,n)):"pageBreak"===o.name&&l.stack.push({id:"pageBreak"})})),l},o._parseSectionStyle=function(e){var a=e.attributes;return{backgroundColor:t.parseStyleString(a.style).backgroundColor,cropContent:a.cropContent,opacity:a.opacity?Number(a.opacity):void 0,top:a.top?t.ptToPx(a.top):void 0,left:a.left?t.ptToPx(a.left):void 0,width:a.width?t.ptToPx(a.width):void 0,height:a.height?t.ptToPx(a.height):void 0}},o.parseTable=function(t,e,a){return r.getElement(t,e,a)},o.parseTableCellAttributes=r.parseTableCellAttributes,o}));