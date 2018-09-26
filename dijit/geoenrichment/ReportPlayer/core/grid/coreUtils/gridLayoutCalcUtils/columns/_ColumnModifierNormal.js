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

define(["./ColumnDataUtil"],function(t){var n={},i={adjustColumnWidth:function(n,u,l,d,e){function o(i){return t.getFieldWidth(n,u,i.field)}function a(i,l){return t.setFieldWidth(n,u,i.field,l,!0)}var h=n.layoutDefaults.columnMinWidth,r=function(){if(!l)return null;var i=o(l);void 0!==e&&(d=i+e),d=Math.max(h,d);var u,a=0,r=!1;n.columns.forEach(function(t){a+=o(t),r&&!u?u=t:t===l&&(r=!0)});var m=t.getAllowedWidth(n)-(a-i);return isNaN(m)?null:{width:d,widthMemo:i,maxAllowedColumnWidth:m,nextColumn:u}}();if(r){var d=r.width,m=r.widthMemo,f=r.maxAllowedColumnWidth,W=r.nextColumn,c=W&&o(W),s=d-m,C=0;if(n.keepGridWidthWhenResized){if(W){var v=c-s;v<h&&(d-=h-v,v=h),v<c&&(f+=c-v),a(W,v)}a(l,Math.min(f,d))}else W&&f<d&&c>h?(a(l,d),C=f-d):a(l,Math.min(f,d)),0!==C&&i.adjustColumnWidth(n,u,W,null,C)}}};return n.adjustColumnWidth=function(t,n,u,l){i.adjustColumnWidth(t,n,u,l)},n});