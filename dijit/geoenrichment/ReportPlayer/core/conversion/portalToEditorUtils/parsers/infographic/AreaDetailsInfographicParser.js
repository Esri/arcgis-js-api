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

define(["../../../ConversionUtil","../../../../sections/SectionTypes","../../../../supportClasses/tableJson/TableJsonUtil","../../../../infographics/areaDetails/AreaDetailsLayouts"],function(t,e,s,a){var r={};return r.portalToEditor=function(r,i){var o,n,u;return i.revisionVersion>=1.5?r.tags.forEach(function(t){switch(t.attributes.type){case e.INFOGRAPHIC_HEADER:o=i.parsers.getParser("section").parseSection(t,i);break;case e.INFOGRAPHIC_ATTRIBUTES:n=i.parsers.getParser("section").parseSection(t,i);break;case e.INFOGRAPHIC_NOTES:u=i.parsers.getParser("section").parseSection(t,i)}}):r.tags.forEach(function(t){switch(t.name){case"header":var c=i.parsers.getParser("section").parseTable(t.tags[0],i);o={type:e.INFOGRAPHIC_HEADER,stack:[c]};break;case"attributes":if(r.attributes.showAttributes){var l=i.parsers.getParser("section").parseTableCellAttributes(t.attributes||{},null,i),b=s.createTable({numColumns:r.attributes.attributesLayout===a.ATTRS_2COLUMNS?4:2,numRows:3,useDefaultTheme:!1});b.data.columns.forEach(function(t){b.data.data.forEach(function(e){e.style.fields[t.field]=l})}),n={type:e.INFOGRAPHIC_ATTRIBUTES,stack:[b]}}break;case"notes":if(r.attributes.showNotes){var T=i.parsers.getParser("section").parseTableCellAttributes(t.attributes||{},null,i),h=s.createTable({numColumns:1,numRows:3,useDefaultTheme:!1});h.data.columns.forEach(function(t){h.data.data.forEach(function(e){e.style.fields[t.field]=T})}),u={type:e.INFOGRAPHIC_NOTES,stack:[h]}}}}),{type:r.attributes.type,style:{width:t.ptToPx(r.attributes.width),height:t.ptToPx(r.attributes.height),backgroundColor:r.attributes.backgroundColor},scaleToFitHeight:!1!==r.attributes.scaleToFitHeight,titleSectionJson:o,attributesSectionJson:n,showAttributesTitle:!1!==r.attributes.showAttributesTitle,attributesLayout:r.attributes.attributesLayout,notesSectionJson:u,showNotesTitle:!1!==r.attributes.showNotesTitle}},r});