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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define([],function(){var i={};return i.COLUMN="Column",i.LINE="Line",i.VERTICAL_LINE="VerticalLine",i.BAR="Bar",i.PIE="Pie",i.DONUT="Donut",i.GAUGE="Gauge",i.RING="Ring",i.PICTURE_COLUMN="PictureColumn",i.PICTURE_BAR="PictureBar",i.WAFFLE="Waffle",i.COLUMN_LINE="ColumnLine",i.BAR_LINE="BarLine",i.CLASSIC_CHART_TYPES=[i.COLUMN,i.BAR,i.LINE,i.PIE],i.AVAILABLE_CHART_TYPES=[i.COLUMN,i.BAR,i.LINE,i.VERTICAL_LINE,i.PIE,i.DONUT,i.GAUGE,i.RING,i.PICTURE_COLUMN,i.PICTURE_BAR,i.WAFFLE],i.isColumnBarLike=function(n){return n===i.COLUMN||n===i.BAR||n===i.PICTURE_COLUMN||n===i.PICTURE_BAR},i.isColumnBarNoPictureLike=function(n){return n===i.COLUMN||n===i.BAR},i.isColumnLike=function(n){return n===i.COLUMN||n===i.PICTURE_COLUMN},i.isBarLike=function(n){return n===i.BAR||n===i.PICTURE_BAR},i.isPictureLike=function(n){return n===i.PICTURE_COLUMN||n===i.PICTURE_BAR||n===i.WAFFLE},i.isLineLike=function(n){return n===i.LINE||n===i.VERTICAL_LINE},i.isXAxisVertical=function(n){return n===i.BAR||n===i.PICTURE_BAR||n===i.VERTICAL_LINE},i.hasAxis=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)},i.hasLegend=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.WAFFLE},i.hasBackgroundImage=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)},i.isSingleSeries=function(n){return n===i.PIE||n===i.DONUT||n===i.GAUGE||n===i.RING||n===i.WAFFLE},i.isComparisonEnabled=function(n){return n===i.COLUMN||n===i.BAR?2:i.isLineLike(n)?1:0},i.isConditionalStylingEnabled=function(n){return i.isColumnBarLike(n)||n===i.RING||n===i.GAUGE||n===i.WAFFLE},i.isLegendEnabled=function(n,e,L,r){return i.isSeriesLegendEnabled(n,e,L)||i.isMinMaxLegendEnabled(n,e)},i.isSeriesLegendEnabled=function(n,e,L,r){return 1===e&&r&&(e=2),!(0===e||1===e&&i.isLineLike(n)&&!L)&&(i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.WAFFLE)},i.isMinMaxLegendEnabled=function(n,e){return i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.WAFFLE},i.isSortingEnabled=function(n,e,L){return!(0===e||e>1||L)&&(i.isColumnBarLike(n)||n===i.RING)},i.isStackEnabled=function(n,e){return 0!==e&&1!==e&&(n===i.COLUMN||n===i.BAR||n===i.LINE)},i.isRenderInOppositeDirectionsEnabled=function(n,e,L){return 0!==e&&1!==e&&!L&&i.isColumnBarLike(n)},i.supportsNegativeValues=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)},i.isShowDataAsWeightEnabled=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)},i.canFilterVariables=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.RING},i});