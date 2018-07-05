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

define(["dojo/on","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/touch","./_RowStyler","../GridDataUtil","../GridQueryUtil","../GridLayoutCalculator","../../../supportClasses/templateJsonUtils/fieldInfo/FieldInfoRenderer","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(o,r,e,t,n,l,a,i,s,d,f,c){var u={},_=/^(\d+|\d+[.,]\d+)%$/;return u.isGridSortable=function(o){return!(!o.allowSorting||o.isEmptyTable()||o.store.data.length<3||!o.viewModel.dynamicReportInfo)},u.updateSorting=function(o,r){if(u.isGridSortable(o)){var e=u._collectHeaderRowInfo(o);e&&u._makeSortable(o,e),r&&u._applySortInfo(o,e)}},u._collectHeaderRowInfo=function(o){function r(r){return r&&r.length===o.columns.length}for(var e,t,n=o.store.data.length-2,l=0;l<n;l++){var a=i.queryCells(o,{rowIndex:l});if(r(a)){e=a,t=l;break}}if(!e)return null;for(l=t+1;l<o.store.data.length;l++)if(a=i.queryCells(o,{rowIndex:l}),!r(a))return null;return{cells:e,headerRowIndex:t}},u._makeSortable=function(l,a){a.cells.forEach(function(l){r.add(l.domNode,"esriGEClickable"),o(l.contentBlock,n.press,function(o){u._checkCanSortOnHeaderClick(o)&&u._toggleSortForCell(l,a)});var i=e.create("div",{class:"sortArrow"},l.domNode);t.set(i,"top",(l.getHeight()-9)/2+"px");var s=l.getFullStyle();t.set(i,s&&"left"===s.horizontalAlign?"right":"left","5px"),l._sortArrow=i}),u._updateArrows(l,a)},u._checkCanSortOnHeaderClick=function(o){return!o||!o.path.some(function(o){return"A"===o.nodeName})},u._updateArrows=function(o,e){e.cells.forEach(function(e){var t=e._sortArrow;r.remove(t,"sortArrowUp"),r.remove(t,"sortArrowDown"),f.hide(t),o._sortInfo&&o._sortInfo.field===e.column.field&&("asc"===o._sortInfo.order?(r.add(t,"sortArrowUp"),f.show(t)):"desc"===o._sortInfo.order&&(r.add(t,"sortArrowDown"),f.show(t)))})},u._applySortInfo=function(o,r){if(u._updateArrows(o,r),o._sortInfo){if(o._sortInfo.order){for(var e=[],t=o._sortInfo.originalData.slice(),n=0;n<r.headerRowIndex+1;n++)e.push(t.shift());var i=l.getStyleInfo(t,o.columns),s=o._sortInfo.field;t.sort(function(r,e){function t(o){var r=a.getNumericDataValue(o,s);if(void 0!==r)return r;var e=o[s];return"string"==typeof e?_.test(e)?(r=c.parseNumber(e.replace("%","")),isNaN(r)?e:r):(r=c.parseNumber(e),isNaN(r)?e:r):e}var n,l=t(r),i=t(e),d="desc"===o._sortInfo.order,f="number"==typeof l||"number"==typeof i;return f?(l=Number(l),i=Number(i),n=l>i?1:l<i?-1:0,d?-n:n):(l=String(l),i=String(i),n=l.localeCompare(i),d?-n:n)}),i&&l.setAlternatingColors(t,o.columns,i),o.store.data=e.concat(t)}else o.store.data=o._sortInfo.originalData,l.resetStyling(o._sortInfo.originalData,o.columns);o.refresh({applyCurrentSorting:!1})}},u._toggleSortForCell=function(o,r){var e=o.parentGrid,t=e._sortInfo&&e._sortInfo.field===o.column.field?e._sortInfo.order:null;e._sortInfo={field:o.column.field,order:null,originalData:e._sortInfo?e._sortInfo.originalData:e.store.data.slice()},t?"desc"===t?e._sortInfo.order="asc":"asc"===t&&(e._sortInfo.order=null):e._sortInfo.order="desc",u._applySortInfo(e,r),e.onSortingChanged(u.getSorting(e))},u.getSorting=function(o){return o._sortInfo&&{field:o._sortInfo.field,order:o._sortInfo.order}},u.setSorting=function(o,r){if(u.isGridSortable(o)&&r){var e=u._collectHeaderRowInfo(o);e&&(o._sortInfo={field:r.field,order:r.order,originalData:o._sortInfo?o._sortInfo.originalData:o.store.data.slice()},u._applySortInfo(o,e))}},u});