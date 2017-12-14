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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],function(t,o){var a={};return a.positionCells=function(a){function e(t){return n[t.column.index-1+"_"+t.gridData.index]||0}function i(t){return r[t.column.index+"_"+(t.gridData.index-1)]||0}var n={},r={},d={},l={};if(a.store.data.length){a.store.data.forEach(function(e,i){a.columns.forEach(function(u,f){var c=d[f]||0,h=l[i]||0,s=t.getDataHeight(a,e,u.field),m=o.getFieldWidth(a,e,u.field);c+=s,h+=m,r[f+"_"+i]=c,n[f+"_"+i]=h,d[f]=c,l[i]=h})});var u=a.getFieldCells();u.forEach(function(t){t.domNode.style.left=e(t)+"px",t.domNode.style.top=i(t)+"px"});var f=0;for(var c in d)f=Math.max(f,d[c]);var h=0;for(var c in l)h=Math.max(h,l[c]);a.mainNode.style.width=h+"px",a.mainNode.style.height=f+"px",a._width=h,a._height=f}},a});