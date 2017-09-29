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

define(["dojo/on","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./GridQueryUtil","./GridLayoutCalculator","../../supportClasses/templateJsonUtils/FieldInfoRenderer","esri/dijit/geoenrichment/utils/DomUtil"],function(o,t,r,e,n,s,a,i){var l={};return l.updateSorting=function(l,u){function f(o){return o&&o.length==l.columns.length}function d(o){var t=l._sortInfo&&l._sortInfo.columnId==o.columnId?l._sortInfo.state:null;l._sortInfo={columnId:o.columnId,column:o.column,state:null,originalData:l._sortInfo?l._sortInfo.originalData:l.store.data.slice()},t?"down"==t?l._sortInfo.state="up":"up"==t&&(l._sortInfo.state=null):l._sortInfo.state="down",g.forEach(c),m()}function c(o){var r=o._sortArrow;t.remove(r,"sortArrowUp"),t.remove(r,"sortArrowDown"),i.hide(r),l._sortInfo&&l._sortInfo.columnId==o.columnId&&("up"==l._sortInfo.state?(t.add(r,"sortArrowUp"),i.show(r)):"down"==l._sortInfo.state&&(t.add(r,"sortArrowDown"),i.show(r)))}function m(){if(l._sortInfo){if(l._sortInfo.state){for(var o=[],t=l._sortInfo.originalData.slice(),r=0;I+1>r;r++)o.push(t.shift());var e,n;if(l.getNumDynamicColumns()){e={};for(var i=s.calcFeatureCount(l.columns.length,l.getNumFixedColumns(),l.getNumDynamicColumns()),u=l.getNumFixedColumns();;){if(!l.columns[u])break;for(var f=0;i>f;f++)e[l.columns[u++].field]=f}}else l.getNumDynamicRows()&&(n={},l._sortInfo.originalData.forEach(function(o,t){n[o.id]=Math.max(0,t-l.getNumFixedRows())}));var d=l._sortInfo.column.field;t.sort(function(o,t){function r(o){var t=o.fieldInfos&&o.fieldInfos[d];if(t){var r;return l.previewFeatureIndex?r=l.previewFeatureIndex:e?r=e[d]:n&&(r=n[o.id]),t.isImage&&t.triggerJson&&t.triggerJson.fieldInfo&&(t=t.triggerJson.fieldInfo),a.getFieldDataValue(t,l.viewModel.dynamicReportInfo.fieldData,r)||""}return o[d]}var s=r(o),i=r(t),u="down"==l._sortInfo.state,f="number"==typeof s||"number"==typeof i;return f?(s=Number(s),i=Number(i),result=s>i?1:i>s?-1:0,u?-result:result):(s=String(s),i=String(i),result=s.localeCompare(i),u?-result:result)}),l.store.data=o.concat(t)}else l.store.data=l._sortInfo.originalData;l.refresh({applyCurrentSorting:!1})}}if(!(!l.allowSorting||l.isEmptyTable()||l.store.data.length<3)&&l.viewModel.dynamicReportInfo){for(var g,I,p=l.store.data.length-2,w=0;p>w;w++){var _=n.queryCells(l,{rowIndex:w});if(f(_)){g=_,I=w;break}}if(g){for(w=I+1;w<l.store.data.length;w++)if(_=n.queryCells(l,{rowIndex:w}),!f(_))return;g.forEach(function(n){o(n.domNode,"click",function(){d(n)}),t.add(n.domNode,"esriGEAdjustableGridValueField");var s=r.create("div",{"class":"sortArrow"},n.domNode);e.set(s,"top",(n.getHeight()-9)/2+"px");var a=n.getFullStyle();e.set(s,a&&"left"==a.horizontalAlign?"right":"left","5px"),n._sortArrow=s,c(n)}),u&&m()}}},l.getSorting=function(o){return o._sortInfo},l.setSorting=function(o,t){o._sortInfo=t,l.updateSorting(o,!0)},l});