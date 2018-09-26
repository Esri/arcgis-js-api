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

define(["dojo/_base/lang","../../sections/SectionTypes","../../grid/coreUtils/GridDataUtil","../../supportClasses/tableJson/TableJsonResizeUtil","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(t,e,a,i,n,r){var s={};return s.buildSectionJsonsAndStat=function(t){var e=s._collectGridDataObjectsAndStats(t);if(!e)return null;if(e.gridDataObjects.length)var a=s._splitRowsByPages(e.gridDataObjects,t),i=a.map(function(e){return s._buildSectionJsonForPage(e,t)});return{sectionJsons:i,stats:e.stats,unitedSectionJson:s._buildSectionJsonForPage(e.gridDataObjects,t)}},s._collectGridDataObjectsAndStats=function(e){var i=e.calculatorDataArray,s=e.searchTextRe;e.sorting;if(!i||!i.length)return null;var o,l=e.dataSectionJson.stack[0],c=l.data.data[0],d=l.data.data[1],u={numAttributesTotal:0,numAttributesShown:0,ranges:{}};e.filterRanges&&(o={},e.filterRanges.forEach(function(t){o[t.fieldName]=t}));for(var g in c.fieldInfos){var h=c.fieldInfos[g];n.isNumericField(h)&&(u.ranges[h.name]={fieldName:h.name,alias:h.alias,min:1/0,max:-1/0,decimals:h.decimals})}var f=[];return i.forEach(function(t,i){var d={style:null,fieldInfos:{}};u.numAttributesTotal++;var g=!1,h=!1,m=!1;l.data.columns.forEach(function(e){var l=c.fieldInfos[e.field],f=t[l.name];if(n.isNumericField(l)&&"number"==typeof f&&!isNaN(f)){var b=u.ranges[l.name];b.min=Math.min(b.min,f),b.max=Math.max(b.max,f)}void 0===f||"string"==typeof f?d[e.field]=f||"":(d[e.field]=r.formatNumber(f,{places:l.decimals,preserveTrailingZeroes:!0}),a.setNumericDataValue(f,d,e.field)),d.__attributeIndex=i;var v=o&&o[l.name];v&&(f<v.min||f>v.max)&&(g=!0),s&&"string"==typeof f&&(h=!0,s.test(f)&&(m=!0))});var b=g||h&&!m;b||(f.push(d),u.numAttributesShown++),e.setAttributeVisibleAt&&e.setAttributeVisibleAt(i,!b)}),e.sorting&&f.sort(function(t,i){var n=a.getNumericDataValue(t,e.sorting.field);n=void 0!==n?n:t[e.sorting.field];var r=a.getNumericDataValue(i,e.sorting.field);r=void 0!==r?r:i[e.sorting.field];var s="number"==typeof n?n-r:n.localeCompare(r);return"desc"===e.sorting.order?-s:s}),f.forEach(function(e,a){var i=a%2!=0?d||c:c;e.style=t.clone(i.style),e.style.height=c.style.height}),u.ranges=Object.keys(u.ranges).map(function(t){return u.ranges[t]}),{stats:u,gridDataObjects:f}},s.getAttributeIndexForGridData=function(t){return t.__attributeIndex},s._splitRowsByPages=function(t,e){var a,i=s._getHeaderHeight(e),n=s._getDataRowHeight(e),r=s._getDataListHeight(t,e),o=[],l=0;return t.forEach(function(t){a||(a=[],o.push(a),l+=i),a.push(t),(l+=n)+n>r&&(a=null,l=0)}),o},s._getHeaderHeight=function(t){return t.scaleToFitHeight?t.minRowHeight:t.headerSectionJson?t.headerSectionJson.stack[0].data.data[0].style.height:0},s._getDataRowHeight=function(t){return t.scaleToFitHeight?t.minRowHeight:t.dataSectionJson.stack[0].data.data[0].style.height},s._getDataListHeight=function(t,e){var a=s._getHeaderHeight(e),i=s._getDataRowHeight(e),n=e.height-(e.hasFooter?e.footerHeight:0)-(e.hasTitle?e.titleHeight:0),r=e.height-e.footerHeight-(e.hasTitle?e.titleHeight:0);return a+i*t.length<=n?n:r},s._buildSectionJsonForPage=function(a,n){var r;if(n.headerSectionJson){var o=n.headerSectionJson.stack[0];r={id:"table",attributes:{},style:{width:n.width},data:{columns:t.clone(o.data.columns),data:[t.clone(o.data.data[0])].concat(t.clone(a))}}}else{var l=n.dataSectionJson.stack[0];r={id:"table",attributes:{},style:{width:n.width},data:{columns:t.clone(l.data.columns),data:t.clone(a)}}}if(r.data.data.forEach(function(t,e){t.style.height=0===e&&n.headerSectionJson?s._getHeaderHeight(n):s._getDataRowHeight(n)}),n.scaleToFitHeight){var c=s._getDataListHeight(a,n);i.resizeTableJsonToFitHeight(r,c)}return i.resizeTableJsonToFitWidth(r,n.width),{type:e.DETAILS,stack:[r]}},s});