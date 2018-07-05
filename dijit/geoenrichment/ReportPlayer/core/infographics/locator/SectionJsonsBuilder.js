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

define(["dojo/_base/lang","../../sections/SectionTypes","../../grid/coreUtils/GridDataUtil","esri/dijit/geoenrichment/utils/FieldUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(t,a,e,i,n){var o={};return o.buildSectionJsonsAndStat=function(t){var a=o._collectGridDataObjectsAndStats(t);return a&&a.gridDataObjects.length?{sectionJsons:o._splitRowsByPages(a.gridDataObjects,t).map(function(a){return o._buildSectionJsonForPage(a,t)}),stats:a.stats,unitedSectionJson:o._buildSectionJsonForPage(a.gridDataObjects,t)}:null},o._collectGridDataObjectsAndStats=function(a){var o=a.infographicJson,s=a.calculator,r=a.filterRanges,c=a.searchTextRe,l=(a.sorting,a.locatorPointsController);if(!s||!s.data)return null;var d=o.dataSectionJson.stack[0],u=d.data.data[0],g={numPointsTotal:0,numPointsShown:0,ranges:{}};for(var f in u.fieldInfos){var m=u.fieldInfos[f];i.isNumericField(m)&&(g.ranges[m.name]={fieldName:m.name,alias:m.alias,min:1/0,max:-1/0,decimals:m.decimals})}var h=[];return[s.data].concat(s.comparisonLevels).forEach(function(a,o){var s={style:t.clone(u.style),fieldInfos:{}};g.numPointsTotal++;var f=!1,m=!1,p=!1;d.data.columns.forEach(function(t){var l=u.fieldInfos[t.field],d=a[l.name];if(i.isNumericField(l)&&"number"==typeof d&&!isNaN(d)){var h=g.ranges[l.name];h.min=Math.min(h.min,d),h.max=Math.max(h.max,d)}void 0===d||"string"==typeof d?s[t.field]=d||"":(s[t.field]=n.formatNumber(d,{places:l.decimals,preserveTrailingZeroes:!0}),e.setNumericDataValue(d,s,t.field)),s.__pointIndex=o;var v=r&&r[l.name];v&&(d<v.min||d>v.max)&&(f=!0),c&&"string"==typeof d&&(m=!0,c.test(d)&&(p=!0))});var v=f||m&&!p;v||(h.push(s),g.numPointsShown++),l&&l.setPointVisibleAt(o,!v)}),a.sorting&&h.sort(function(t,i){var n=e.getNumericDataValue(t,a.sorting.field);n=void 0!==n?n:t[a.sorting.field];var o=e.getNumericDataValue(i,a.sorting.field);o=void 0!==o?o:i[a.sorting.field];var s="number"==typeof n?n-o:n.localeCompare(o);return"desc"===a.sorting.order?-s:s}),{stats:g,gridDataObjects:h}},o._splitRowsByPages=function(t,a){var e,i=a.infographicJson.scaleToFitHeight?a.minRowHeight:a.infographicJson.headerSectionJson.stack[0].data.data[0].style.height,n=a.infographicJson.scaleToFitHeight?a.minRowHeight:a.infographicJson.dataSectionJson.stack[0].data.data[0].style.height,o=i+n*t.length<=a.height,s=[],r=0;return t.forEach(function(t){e||(e=[],s.push(e),r+=i),e.push(t),(r+=n)+n>(o?a.height:a.pageHeight)&&(e=null,r=0)}),s},o._buildSectionJsonForPage=function(e,i){var n=i.infographicJson.headerSectionJson.stack[0],o={id:"table",attributes:{},style:{width:n.style.width},data:{columns:t.clone(n.data.columns),data:[t.clone(n.data.data[0])].concat(e)}};return{type:a.DETAILS,stack:[o]}},o});