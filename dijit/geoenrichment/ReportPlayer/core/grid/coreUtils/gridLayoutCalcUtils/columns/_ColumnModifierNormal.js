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

define(["./ColumnDataUtil"],function(t){var n={},i={adjustColumnWidth:function(n,u,l,e,d){function o(i){return t.getFieldWidth(n,u,i.field)}function a(i,l){return t.setFieldWidth(n,u,i.field,l,!0)}function h(){if(!l)return null;var i=o(l);void 0!==d&&(e=i+d),e=Math.max(r,e);var u,a=0,h=!1;n.columns.forEach(function(t){a+=o(t),h&&!u?u=t:t===l&&(h=!0)});var m=t.getAllowedWidth(n)-(a-i);return isNaN(m)?null:{width:e,widthMemo:i,maxAllowedColumnWidth:m,nextColumn:u}}var r=n.layoutDefaults.columnMinWidth,m=h();if(m){var e=m.width,f=m.widthMemo,W=m.maxAllowedColumnWidth,c=m.nextColumn,s=c&&o(c),C=e-f,v=0;if(n.keepGridSizeWhenResized){if(c){var w=s-C;r>w&&(e-=r-w,w=r),s>w&&(W+=s-w),a(c,w)}a(l,Math.min(W,e))}else c&&e>W&&s>r?(a(l,e),v=W-e):a(l,Math.min(W,e)),0!==v&&i.adjustColumnWidth(n,u,c,null,v)}}};return n.adjustColumnWidth=function(t,n,u,l){i.adjustColumnWidth(t,n,u,l)},n});