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

define(["dojo/dom-style","./rows/GridLayoutRowsCalculator","./columns/GridLayoutColumnsCalculator"],function(o,t,a){var e={};return e.positionCells=function(e){function n(o){return r[o.column.index-1+"_"+o.gridData.index]||0}function i(o){return d[o.column.index+"_"+(o.gridData.index-1)]||0}var r={},d={},l={},u={};e.store.data.forEach(function(o,n){e.columns.forEach(function(i,c){var f=l[c]||0,m=u[n]||0,s=t.getDataHeight(e,o,i.field),h=a.getFieldWidth(e,o,i.field);f+=s,m+=h,d[c+"_"+n]=f,r[c+"_"+n]=m,l[c]=f,u[n]=m})});var c=e.getFieldCells(),f=c[0]&&Math.max(0,o.get(c[0].domNode,"borderTopWidth")-1);c.forEach(function(t){o.set(t.domNode,"left",n(t)-f+"px"),o.set(t.domNode,"top",i(t)-f+"px")});var m=0;for(var s in l)m=Math.max(m,l[s]);var h=0;for(var s in u)h=Math.max(h,u[s]);o.set(e.mainNode,{width:h+"px",height:m+"px"})},e});