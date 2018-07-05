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

define(["../../../ConversionUtil"],function(t){var e={};return e.portalToEditor=function(e,r){var s,a,i;return e.tags.forEach(function(t){switch(t.name){case"header":s=t;break;case"attributes":a=t;break;case"notes":i=t}}),{type:e.attributes.type,showNotes:e.attributes.showNotes,showAttributes:e.attributes.showAttributes,attributesLayout:e.attributes.attributesLayout,style:{width:t.ptToPx(e.attributes.width),height:t.ptToPx(e.attributes.height),backgroundColor:e.attributes.backgroundColor},header:r.parsers.getParser("section").parseTable(s.tags[0],r),attributesStyle:r.parsers.getParser("section").parseTableCellAttributes(a&&a.attributes||{},null,r),notesStyle:r.parsers.getParser("section").parseTableCellAttributes(i&&i.attributes||{},null,r)}},e});