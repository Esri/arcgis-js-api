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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../GridLayoutCalculatorQueryUtil","./RowDataUtil","./_RowModifierLoose","./_RowModifierNormal"],(function(t,e,a,i){var o={},n=function(t,a,i,o){if(t.getMaxHeight()){var n=0;t.store.data.forEach((function(o){o!==a&&(n+=e.getDataHeight(t,o,i))})),o=Math.min(t.getMaxHeight()-n,o)}return o},r=function(a,i,o,n){var r=t.getMovableData(a,i,o);r&&(n-=e.calcDataHeight(a,i,o,r.index));return{data:r||i,height:n}},l=function(t){t.getFieldCells().forEach((function(a){a.setHeight(e.calcDataHeight(t,a.gridData,a.column.field))}))};return o.adjustRowHeight=function(t,e,o,f){f=n(t,e,o,f);var u=r(t,e,o,f);(t.looseResize?a:i).adjustRowHeight(t,u.data,o,u.height),l(t)},o.getAffectedCells=function(t,e,i){return t.looseResize?a.getAffectedCells(t,r(t,e,i).data,i):null},o}));