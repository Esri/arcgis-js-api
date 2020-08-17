// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojox/uuid/generateRandomUuid","./ColumnDataUtil"],(function(t,e){var i={};return i.recalcColumns=function(i,n){var l,s=n&&n.resetWidth,d=n&&n.columnsToPreserve,o=n&&n.stickToRight,h=n&&n.newWidth,r=n&&n.rightOffsetWeight,u=n&&n._isJson,c={},a=0;i.columns.every((function(t,e){return t.style&&t.style.width&&!isNaN(t.style.width)&&"number"==typeof t.style.width?(a+=t.style.width,c[e]=t.style.width,!0):(a=0,!1)})),l=h||(o?i.getAllowedWidth():a?Math.min(a,i._width):i._width);var f=(l-=r>0?l*r:0)/i.columns.length,m=l;if(d){var y=d.length*f,w=0;d.forEach((function(t){w+=t.style.width})),d.forEach((function(t){t.style.width=t.style.width*(y/w)/m*100+"%"}))}if(i.columns.forEach((function(e,i,n){if(e.index=i,e.style=e.style||{},"number"!=typeof e.style.width||s)if(i===n.length-1)e.style.width=m;else{var d=e.style.width;"string"==typeof d&&-1!==d.indexOf("%")?e.style.width=parseFloat(d.substr(0,d.length-1))/100*l:e.style.width=f}m-=e.style.width,i===n.length-1&&m<0&&(e.style.width+=m),void 0===e.id&&(e.id=t())})),i.looseResize){i.columns.some((function(t,n){var l=c[n]?t.style.width/c[n]:void 0;i.store.data.forEach((function(n){var s=e.getFieldWidthOwn(i,n,t.field);s?l&&1!==l&&e.setFieldWidth(i,n,t.field,s*l):e.setFieldWidth(i,n,t.field,t.style.width)}))}));var g=i.columns[i.columns.length-1].field;i.store.data.forEach((function(t){var n=0;i.columns.some((function(l){n+=e.getFieldWidthOwn(i,t,l.field)}));var s=l-n;0!==s&&e.setFieldWidth(i,t,g,e.getFieldWidthOwn(i,t,g)+s)}))}return u||(!function(t){if(t._dynamicBindings={},!t.getNumDynamicColumns())return;for(var e=t.getNumDynamicColumns(),i=t.getNumFixedColumns(),n=(t.columns.length,0);n<i;n++)t.columns[n].isFixed=!0;for(var l=[],s=0;s<e;s++){for(var d=i,o=[];d<t.columns.length;){var h=t.columns[d+s];h.isDynamic=!0,o.push(h),d+=e}l.push(o)}l.forEach((function(e){e.forEach((function(i){t._dynamicBindings[i.field]=e}))}))}(i),e.recalcGridWidth(i)),l},i.recalcColumnsTableJson=function(t){i.recalcColumns(t.data,{resetWidth:!0,newWidth:t.style.width,_isJson:!0})},i}));
