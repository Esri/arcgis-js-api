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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./RowDataUtil"],function(t){var e={};return e.adjustRowHeight=function(e,a,i,n){var r=e.layoutDefaults.rowMinHeight,n=Math.max(n,r),g=n-t.getDataHeight(e,a,i);if(e.keepGridSizeWhenResized){var h=e.store.data[a.index+1];if(h){var o=t.getDataHeight(e,h,i),d=o-g;d<r&&(n-=r-d,d=r),t.setDataHeight(e,h,i,d,!0)}}t.setDataHeight(e,a,i,n,!0)},e});