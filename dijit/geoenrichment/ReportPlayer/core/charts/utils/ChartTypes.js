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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define([],(function(){var i={COLUMN:"Column",BAR:"Bar",LINE:"Line",VERTICAL_LINE:"VerticalLine",PIE:"Pie",DONUT:"Donut",GAUGE:"Gauge",RING:"Ring",PICTURE_COLUMN:"PictureColumn",PICTURE_BAR:"PictureBar",WAFFLE:"Waffle",COLUMN_LINE:"ColumnLine",BAR_LINE:"BarLine"};return i.CLASSIC_CHART_TYPES=[i.COLUMN,i.BAR,i.LINE,i.PIE],i.AVAILABLE_CHART_TYPES=[i.COLUMN,i.BAR,i.LINE,i.VERTICAL_LINE,i.PIE,i.DONUT,i.GAUGE,i.RING,i.PICTURE_COLUMN,i.PICTURE_BAR,i.WAFFLE],i.isSupported=function(n){return-1!==i.AVAILABLE_CHART_TYPES.indexOf(n)},i.isColumnBarLike=function(n){return n===i.COLUMN||n===i.BAR||n===i.PICTURE_COLUMN||n===i.PICTURE_BAR},i.isColumnBarNoPictureLike=function(n){return n===i.COLUMN||n===i.BAR},i.isColumnLike=function(n){return n===i.COLUMN||n===i.PICTURE_COLUMN},i.isBarLike=function(n){return n===i.BAR||n===i.PICTURE_BAR},i.isPictureLike=function(n){return n===i.PICTURE_COLUMN||n===i.PICTURE_BAR||n===i.WAFFLE},i.isLineLike=function(n){return n===i.LINE||n===i.VERTICAL_LINE},i.isXAxisVertical=function(n){return n===i.BAR||n===i.PICTURE_BAR||n===i.VERTICAL_LINE},i.hasAxis=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)},i.hasLegend=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.WAFFLE},i.hasBackgroundImage=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)},i.isSingleSeries=function(n){return n===i.PIE||n===i.DONUT||n===i.GAUGE||n===i.RING||n===i.WAFFLE},i.isComparisonSupported=function(n){return n===i.COLUMN||n===i.BAR?2:i.isLineLike(n)?1e6:0},i.isConditionalStylingSupported=function(n){return i.isColumnBarLike(n)||n===i.RING||n===i.GAUGE||n===i.WAFFLE},i.isLegendSupported=function(n,e,r,L){return i.isSeriesLegendSupported(n,e,r)||i.isMinMaxLegendSupported(n,e)},i.isSeriesLegendSupported=function(n,e,r,L){return 1===e&&L&&(e=2),!(0===e||1===e&&i.isLineLike(n)&&!r)&&(i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.WAFFLE)},i.isMinMaxLegendSupported=function(n,e){return i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.WAFFLE},i.isSortingSupported=function(n,e,r){return!(0===e||e>1||r)&&(i.isColumnBarLike(n)||n===i.PIE||n===i.DONUT||n===i.RING)},i.isStackSupported=function(n,e,r){return!(0===e||1===e&&!r)&&(n===i.COLUMN||n===i.BAR||n===i.LINE)},i.isRenderInOppositeDirectionsSupported=function(n,e,r){return 0!==e&&1!==e&&!r&&i.isColumnBarLike(n)},i.supportsNegativeValues=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)||n===i.RING},i.isShowDataAsWeightSupported=function(n){return i.isColumnBarLike(n)||i.isLineLike(n)},i.canFilterVariables=function(n,e){return!e&&(i.isColumnBarLike(n)||i.isLineLike(n)||n===i.PIE||n===i.DONUT||n===i.RING)},i.isBenchmarkSupported=function(n,e){return!e&&(i.isColumnBarLike(n)||i.isLineLike(n)||n===i.RING)},i}));