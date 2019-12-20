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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojox/uuid/generateRandomUuid","./ColumnDataUtil"],function(t,e){function i(t){if(t._dynamicBindings={},t.getNumDynamicColumns()){for(var e=t.getNumDynamicColumns(),i=t.getNumFixedColumns(),n=(t.columns.length,0);n<i;n++)t.columns[n].isFixed=!0;for(var l=[],s=0;s<e;s++){for(var d=i,o=[];d<t.columns.length;){var h=t.columns[d+s];h.isDynamic=!0,o.push(h),d+=e}l.push(o)}l.forEach(function(e){e.forEach(function(i){t._dynamicBindings[i.field]=e})})}}var n={};return n.recalcColumns=function(n,l){var s=l&&l.resetWidth,d=l&&l.columnsToPreserve,o=l&&l.stickToRight,h=l&&l.newWidth,r=l&&l.rightOffsetWeight,c=l&&l._isJson,u={},a=0;n.columns.every(function(t,e){return t.style&&t.style.width&&!isNaN(t.style.width)&&"number"==typeof t.style.width?(a+=t.style.width,u[e]=t.style.width,!0):(a=0,!1)});var f;f=h||(o?n.getAllowedWidth():a?Math.min(a,n._width):n._width),f-=r>0?f*r:0;var m=f/n.columns.length,y=f;if(d){var w=d.length*m,g=0;d.forEach(function(t){g+=t.style.width}),d.forEach(function(t){t.style.width=t.style.width*(w/g)/y*100+"%"})}if(n.columns.forEach(function(e,i,n){if(e.index=i,e.style=e.style||{},"number"!=typeof e.style.width||s)if(i===n.length-1)e.style.width=y;else{var l=e.style.width;"string"==typeof l&&-1!==l.indexOf("%")?e.style.width=parseFloat(l.substr(0,l.length-1))/100*f:e.style.width=m}y-=e.style.width,i===n.length-1&&y<0&&(e.style.width+=y),void 0===e.id&&(e.id=t())}),n.looseResize){n.columns.some(function(t,i){var l=u[i]?t.style.width/u[i]:void 0;n.store.data.forEach(function(i){var s=e.getFieldWidthOwn(n,i,t.field);s?l&&1!==l&&e.setFieldWidth(n,i,t.field,s*l):e.setFieldWidth(n,i,t.field,t.style.width)})});var v=n.columns[n.columns.length-1].field;n.store.data.forEach(function(t){var i=0;n.columns.some(function(l){i+=e.getFieldWidthOwn(n,t,l.field)});var l=f-i;0!==l&&e.setFieldWidth(n,t,v,e.getFieldWidthOwn(n,t,v)+l)})}return c||(i(n),e.recalcGridWidth(n)),f},n.recalcColumnsTableJson=function(t){n.recalcColumns(t.data,{resetWidth:!0,newWidth:t.style.width,_isJson:!0})},n});