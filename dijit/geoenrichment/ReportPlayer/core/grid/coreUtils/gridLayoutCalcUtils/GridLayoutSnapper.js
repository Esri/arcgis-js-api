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

define(["dojo/_base/lang","./rows/RowDataUtil","./columns/ColumnDataUtil","./GridElementBoxCalculator"],function(a,t,i,n){var o={},e=.5;return o.autoSnapLayout=function(o){function d(){var t=[];return o.store.data.forEach(function(i){o.columns.forEach(function(e){t.push(a.mixin({id:i.index+"_"+e.field,data:i,dataIndex:i.index,column:e,field:e.field},n.calcDataBox(o,i,e.field)))})}),t}if(o.looseResize)for(var l=o.store.data.length*o.columns.length,f={},r=0;l>r;r++){var u=d(),c=u[r],s=c.x+c.w,h=c.y+c.h;f[c.id]=!0,u.forEach(function(a){if(!f[a.id]){var n=s-(a.x+a.w);Math.abs(n)<=e&&i.setFieldWidth(o,a.data,a.field,a.w+n,!1);var d=h-(a.y+a.h);Math.abs(d)<=e&&t.setDataHeight(o,a.data,a.field,a.h+d,!1)}})}},o});