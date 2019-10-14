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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],function(t,e){var o={};return o.positionCells=function(o){function i(t){return a[t.column.index-1+"_"+t.gridData.index]||0}function n(t){return d[t.column.index+"_"+(t.gridData.index-1)]||0}var a={},d={},r={},l={};if(o.store.data.length){o.store.data.forEach(function(i,n){o.columns.forEach(function(u,f){var h=r[f]||0,c=l[n]||0,s=t.getDataHeight(o,i,u.field),m=e.getFieldWidth(o,i,u.field);h+=s,c+=m,d[f+"_"+n]=h,a[f+"_"+n]=c,r[f]=h,l[n]=c})}),o.getFieldCells().forEach(function(t){t.domNode.style.left=i(t)+"px",t.domNode.style.top=n(t)+"px"});var u=0;for(var f in r)u=Math.max(u,r[f]);var h=0;for(var f in l)h=Math.max(h,l[f]);o.mainNode.style.width=h+"px",o.mainNode.style.height=u+"px",o.domNode.style.width=h+"px",o.domNode.style.height=u+"px",o._width=h,o._height=u}},o});