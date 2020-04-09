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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","./chartTypes/classic/_ColumnBarLike","./chartTypes/classic/_LineLike","./chartTypes/classic/_Pie","./chartTypes/graphic/_ColumnBarLike","./chartTypes/graphic/_ColumnBarPictureLike","./chartTypes/graphic/_LineLike","./chartTypes/graphic/_Pie","./chartTypes/graphic/_Donut","./chartTypes/graphic/_Ring","./chartTypes/graphic/_Gauge","./chartTypes/graphic/_Waffle"],(function(r,e,i,t,a,c,s,p,n,h,o,u,y){var T={},l={};l[e.COLUMN]=l[e.BAR]=i,l[e.LINE]=t,l[e.PIE]=a;var L={};return L[e.COLUMN]=L[e.BAR]=c,L[e.PICTURE_COLUMN]=L[e.PICTURE_BAR]=s,L[e.LINE]=L[e.VERTICAL_LINE]=p,L[e.PIE]=n,L[e.DONUT]=h,L[e.RING]=o,L[e.GAUGE]=u,L[e.WAFFLE]=y,T.cleanUpJsonForChartType=function(e,i){return r.filterByPattern(e,(i?L:l)[e.type])},T.supportsVisualProperty=function(r,e,i){var t=e.split("."),a=(i?L:l)[r],c=a&&a.visualProperties;return t.forEach((function(r){c=c&&c[r]})),c},T}));