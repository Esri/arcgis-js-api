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

define(["dojo/_base/lang","./templateJsonUtils/FieldInfoBuilder","esri/dijit/geoenrichment/ReportPlayer/core/sections/SectionTypes"],function(e,t,a){var i={},l=15.07,n=90;return i.createTable=function(a){var i=a.numColumns,n=a.numRows,r=a.widths,o=a.width,s=a.style,f=a.attributes&&a.attributes.fixedColumns,d=a.attributes&&a.attributes.dynamicColumns;if(o){var u=o/i;r=[];for(var c=0;i>c;c++)r.push(u)}if(r)o||isNaN(Number(r[0]))||(o=0,r.forEach(function(e){o+=e}));else{var h=Number(100/i).toFixed(3)+"%";r=[];for(var m=0;i>m;m++)r.push(h)}for(var y=[],p=0;i>p;p++)y.push({field:"field"+p,style:{width:r[p]}});for(var v=[],S=!0,b=a.height?a.height/n:l,g=0;n>g;g++){var T={style:{height:b,fields:{}},fieldInfos:{}};for(p=0;i>p;p++){var w="field"+p;a.useDefaultTheme!==!1&&(T.style.fields[w]={horizontalAlign:0==p?"left":"right",overrideStyle:0==g?n>1?"TableHeader":void 0:S?"AlternatingRow":"Default"}),d&&p>=f&&0==g&&(T.fieldInfos[w]=t.createFieldInfoFromSpecialFieldName("AREA_DESC"))}v.push(T),S=!S}var I={id:"table",style:e.mixin({width:o||772.33},s),data:{columns:y,data:v}};return a.attributes&&(I.attributes=a.attributes),I},i.createSingleCellTable=function(e){var t=i.createTable({numColumns:1,numRows:1,attributes:e.attributes,useDefaultTheme:!1});return i.modifyTableJson(t,0,0,e),t},i.modifyTableJson=function(e,t,a,i){var l=e.data.data[t],n=e.data.columns[a],r=n.field;i.text&&(l[r]=i.text),i.fieldInfo&&(l.fieldInfos[r]=i.fieldInfo),i.cellStyle&&(l.style.fields[r]=i.cellStyle),i.columnSpan&&(l.columnSpans=l.columnSpans||{},l.columnSpans[r]=i.columnSpan),i.rowSpan&&(l.rowSpans=l.rowSpans||{},l.rowSpans[r]=i.rowSpan),l.themeStyle=i.themeStyle,i.width&&(e.style.width=i.width,n.style.width=i.width),i.height&&(l.style.height=i.height),void 0!=i.left&&(e.style.left=i.left),void 0!=i.spaceBefore&&(e.style.spaceBefore=i.spaceBefore)},i.getTableWidth=function(e){return e.style.width},i.getTableHeight=function(e){var t=0;return e.data.data.forEach(function(e){t+=e.style?e.style.height:0}),t},i.createDetailsSection=function(e){return{type:a.DETAILS,stack:[i.createTable(e)]}},i.createDetailsSectionForFieldInfos=function(t,l){function n(){var a=i.createTable(e.mixin({numColumns:2,numRows:t.length+1},l));return a.data.data.forEach(function(e,a){if(0==a)return void(e.field0=t[0].hasVariable?t[0].fieldCategory:"");var i=t[a-1];e.field0=i.script?i.script.alias:i.alias,e.fieldInfos.field1=i}),i.provideSpaceAfter(a),a}return{type:a.DETAILS,stack:[n()]}},i.createDetailsSectionForFieldInfoGroups=function(t,l){function n(){var a=t[0],n=i.createTable(e.mixin({numColumns:t.length+1,numRows:a.length+1},l));return n.data.data.forEach(function(e,a){n.data.columns.forEach(function(i,l){if(0!=l){if(0==a)return void(e[i.field]=t[l-1][0].fieldCategory||"");var n=t[l-1][a-1];e.field0=e.field0||(n.script?n.script.alias:n.alias),e.fieldInfos[i.field]=n}})}),i.provideSpaceAfter(n),n}return{type:a.DETAILS,stack:[n()]}},i.provideSpaceAfter=function(e,t){e.style.spaceAfter=Math.max(t||0,n-e.data.data.length*l)},i.applyDefaultStyling=function(e){var t=!0;e.data.data.forEach(function(a,i){e.data.columns.forEach(function(e){var l=a.style.fields[e.field];l.overrideStyle=0==i?"TableHeader":t?"AlternatingRow":void 0}),t=!t})},i.setTableHeaderStyle=function(e){if(e.style)for(var t in e.style.fields){var a=e.style.fields[t]=e.style.fields[t]||{};a.overrideStyle="TableHeader"}},i.DEFAULT_ROW_HEIGHT=l,i});