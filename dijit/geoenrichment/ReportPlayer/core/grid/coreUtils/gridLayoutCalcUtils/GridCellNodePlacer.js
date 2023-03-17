// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],(function(o,t){var e={};return e.positionCells=function(e){var n={},i={},r={},a={};if(e.rows.length){e.rows.forEach((function(d,l){e.columns.forEach((function(u,f){var h=r[f]||0,c=a[l]||0;h+=o.getDataHeight(e,d,u.field),c+=t.getFieldWidth(e,d,u.field),i[f+"_"+l]=h,n[f+"_"+l]=c,r[f]=h,a[l]=c}))})),e.getCells().forEach((function(o){o.domNode.style.left=function(o){return n[o.column.index-1+"_"+o.row.index]||0}(o)+"px",o.domNode.style.top=function(o){return i[o.column.index+"_"+(o.row.index-1)]||0}(o)+"px"}));var d=0;for(var l in r)d=Math.max(d,r[l]);var u=0;for(var l in a)u=Math.max(u,a[l]);e.mainNode.style.width=u+"px",e.mainNode.style.height=d+"px",e.domNode.style.width=u+"px",e.domNode.style.height=d+"px",e._width=u,e._height=d}},e}));