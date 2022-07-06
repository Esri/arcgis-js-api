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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/lang","./rows/RowDataUtil","./columns/ColumnDataUtil","./GridElementBoxCalculator"],(function(a,t,i,n){var o={};return o.autoSnapLayout=function(o){if(o.looseResize)for(var e=o.rows.length*o.columns.length,l={},d=0;d<e;d++){var f=s(),r=f[d],u=r.x+r.w,c=r.y+r.h;l[r.id]=!0,f.forEach((function(a){if(!l[a.id]){var n=u-(a.x+a.w);Math.abs(n)<=.5&&i.setFieldWidth(o,a.data,a.field,a.w+n);var e=c-(a.y+a.h);Math.abs(e)<=.5&&t.setDataHeight(o,a.data,a.field,a.h+e)}}))}function s(){var t=[];return o.rows.forEach((function(i){o.columns.forEach((function(e){t.push(a.mixin({id:i.index+"_"+e.field,data:i,dataIndex:i.index,column:e,field:e.field},n.calcDataBox(o,i,e.field)))}))})),t}},o}));