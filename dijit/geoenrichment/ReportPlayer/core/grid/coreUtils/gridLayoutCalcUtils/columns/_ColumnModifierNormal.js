// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["./ColumnDataUtil"],(function(t){var n={},i={adjustColumnWidth:function(n,u,l,d,e){var o=n.layoutDefaults.columnMinWidth;function a(i){return t.getFieldWidth(n,u,i.field)}function h(i,l){return t.setFieldWidth(n,u,i.field,l,!0)}var r=function(){if(!l)return null;var i=a(l);void 0!==e&&(d=i+e),d=Math.max(o,d);var u,h=0,r=!1;n.columns.forEach((function(t){h+=a(t),r&&!u?u=t:t===l&&(r=!0)}));var m=t.getAllowedWidth(n)-(h-i);return isNaN(m)?null:{width:d,widthMemo:i,maxAllowedColumnWidth:m,nextColumn:u}}();if(r){d=r.width;var m=r.widthMemo,f=r.maxAllowedColumnWidth,W=r.nextColumn,c=W&&a(W),s=d-m,v=0;if(n.keepGridWidthWhenResized){if(W){var C=c-s;C<o&&(d-=o-C,C=o),C<c&&(f+=c-C),h(W,C)}h(l,Math.min(f,d))}else W&&f<d&&c>o?(h(l,d),v=f-d):h(l,Math.min(f,d)),0!==v&&i.adjustColumnWidth(n,u,W,null,v)}}};return n.adjustColumnWidth=function(t,n,u,l){i.adjustColumnWidth(t,n,u,l)},n}));