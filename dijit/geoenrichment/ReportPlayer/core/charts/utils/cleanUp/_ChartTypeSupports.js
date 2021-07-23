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

define(["esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","./chartTypes/classic/_ColumnBarLike","./chartTypes/classic/_LineLike","./chartTypes/classic/_Pie","./chartTypes/graphic/_ColumnBarLike","./chartTypes/graphic/_ColumnBarPictureLike","./chartTypes/graphic/_LineLike","./chartTypes/graphic/_Pie","./chartTypes/graphic/_Donut","./chartTypes/graphic/_Ring","./chartTypes/graphic/_Gauge","./chartTypes/graphic/_Waffle"],(function(r,e,i,t,a,c,p,s,n,h,o,y,T){var u={},L={};L[e.COLUMN]=L[e.BAR]=i,L[e.LINE]=t,L[e.PIE]=a;var l={};return l[e.COLUMN]=l[e.BAR]=c,l[e.PICTURE_COLUMN]=l[e.PICTURE_BAR]=p,l[e.LINE]=l[e.VERTICAL_LINE]=s,l[e.PIE]=n,l[e.DONUT]=h,l[e.RING]=o,l[e.GAUGE]=y,l[e.WAFFLE]=T,u.cleanUpJsonForChartType=function(e,i){return r.filterByPattern(e,(i?l:L)[e.type])},u.supportsProperty=function(r,e,i){var t=e.split("."),a=(i?l:L)[r];return t.forEach((function(r){a=a&&a[r]})),!!a},u}));