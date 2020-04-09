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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],(function(t,e){var o={};return o.positionCells=function(o){var i={},n={},a={},d={};if(o.store.data.length){o.store.data.forEach((function(r,l){o.columns.forEach((function(u,f){var h=a[f]||0,c=d[l]||0;h+=t.getDataHeight(o,r,u.field),c+=e.getFieldWidth(o,r,u.field),n[f+"_"+l]=h,i[f+"_"+l]=c,a[f]=h,d[l]=c}))})),o.getFieldCells().forEach((function(t){t.domNode.style.left=function(t){return i[t.column.index-1+"_"+t.gridData.index]||0}(t)+"px",t.domNode.style.top=function(t){return n[t.column.index+"_"+(t.gridData.index-1)]||0}(t)+"px"}));var r=0;for(var l in a)r=Math.max(r,a[l]);var u=0;for(var l in d)u=Math.max(u,d[l]);o.mainNode.style.width=u+"px",o.mainNode.style.height=r+"px",o.domNode.style.width=u+"px",o.domNode.style.height=r+"px",o._width=u,o._height=r}},o}));