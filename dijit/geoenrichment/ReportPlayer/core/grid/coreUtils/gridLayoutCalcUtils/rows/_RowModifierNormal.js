// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["./RowDataUtil"],(function(t){var e={adjustRowHeight:function(e,a,i,g){var h=e.layoutDefaults.rowMinHeight,n=(g=Math.max(g,h))-t.getDataHeight(e,a,i);if(e.keepGridHeightWhenResized){var r=e.rows[a.index+1];if(r){var o=t.getDataHeight(e,r,i)-n;o<h&&(g-=h-o,o=h),t.setDataHeight(e,r,i,o,!0)}}t.setDataHeight(e,a,i,g,!0)}};return e}));