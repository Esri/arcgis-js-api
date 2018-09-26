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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],function(t,o){var e={};return e.positionCells=function(e){function i(t){return a[t.column.index-1+"_"+t.gridData.index]||0}function n(t){return r[t.column.index+"_"+(t.gridData.index-1)]||0}var a={},r={},d={},l={};if(e.store.data.length){e.store.data.forEach(function(i,n){e.columns.forEach(function(u,f){var c=d[f]||0,h=l[n]||0,s=t.getDataHeight(e,i,u.field),m=o.getFieldWidth(e,i,u.field);c+=s,h+=m,r[f+"_"+n]=c,a[f+"_"+n]=h,d[f]=c,l[n]=h})}),e.getFieldCells().forEach(function(t){t.domNode.style.left=i(t)+"px",t.domNode.style.top=n(t)+"px"});var u=0;for(var f in d)u=Math.max(u,d[f]);var c=0;for(var f in l)c=Math.max(c,l[f]);e.mainNode.style.width=c+"px",e.mainNode.style.height=u+"px",e._width=c,e._height=u}},e});