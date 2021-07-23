// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojox/uuid/generateRandomUuid","./ColumnDataUtil"],(function(t,i){var e={};return e.recalcColumns=function(e,n){var l,s=n&&n.resetWidth,o=n&&n.columnsToPreserve,d=n&&n.stickToRight,h=n&&n.newWidth,r=n&&n.rightOffsetWeight,u=n&&n._isJson,c={},f=0;e.columns.every((function(t,i){return t.style&&t.style.width&&!isNaN(t.style.width)&&"number"==typeof t.style.width?(f+=t.style.width,c[i]=t.style.width,!0):(f=0,!1)})),l=h||(d?e.getAllowedWidth():f?Math.min(f,e._width):e._width);var a=(l-=r>0?l*r:0)/e.columns.length,m=l;if(o){var y=o.length*a,w=0;o.forEach((function(t){w+=t.style.width})),o.forEach((function(t){t.style.width=t.style.width*(y/w)/m*100+"%"}))}if(e.columns.forEach((function(i,e,n){if(i.index=e,i.style=i.style||{},"number"!=typeof i.style.width||s)if(e===n.length-1)i.style.width=m;else{var o=i.style.width;"string"==typeof o&&-1!==o.indexOf("%")?i.style.width=parseFloat(o.substr(0,o.length-1))/100*l:i.style.width=a}m-=i.style.width,e===n.length-1&&m<0&&(i.style.width+=m),void 0===i.id&&(i.id=t())})),e.looseResize){e.columns.some((function(t,n){var l=c[n]?t.style.width/c[n]:void 0;e.rows.forEach((function(n){var s=i.getFieldWidthOwn(e,n,t.field);s?l&&1!==l&&i.setFieldWidth(e,n,t.field,s*l):i.setFieldWidth(e,n,t.field,t.style.width)}))}));var g=e.columns[e.columns.length-1].field;e.rows.forEach((function(t){var n=0;e.columns.some((function(l){n+=i.getFieldWidthOwn(e,t,l.field)}));var s=l-n;0!==s&&i.setFieldWidth(e,t,g,i.getFieldWidthOwn(e,t,g)+s)}))}return u||(!function(t){if(t._dynamicBindings={},!t.getNumDynamicColumns())return;for(var i=t.getNumDynamicColumns(),e=t.getNumFixedColumns(),n=(t.columns.length,0);n<e;n++)t.columns[n].isFixed=!0;for(var l=[],s=0;s<i;s++){for(var o=e,d=[];o<t.columns.length;){var h=t.columns[o+s];h.isDynamic=!0,d.push(h),o+=i}l.push(d)}l.forEach((function(i){i.forEach((function(e){t._dynamicBindings[e.field]=i}))}))}(e),i.recalcGridWidth(e)),l},e.recalcColumnsTableJson=function(t){e.recalcColumns(t,{resetWidth:!0,newWidth:t.style.width,_isJson:!0})},e}));