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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define([],function(){var n={};return n.COLUMN="Column",n.LINE="Line",n.VERTICAL_LINE="VerticalLine",n.BAR="Bar",n.PIE="Pie",n.DONUT="Donut",n.GAUGE="Gauge",n.RING="Ring",n.PICTURE_COLUMN="PictureColumn",n.PICTURE_BAR="PictureBar",n.WAFFLE="Waffle",n.COLUMN_LINE="ColumnLine",n.BAR_LINE="BarLine",n.CLASSIC_CHART_TYPES=[n.COLUMN,n.BAR,n.LINE,n.PIE],n.AVAILABLE_CHART_TYPES=[n.COLUMN,n.BAR,n.LINE,n.VERTICAL_LINE,n.PIE,n.DONUT,n.GAUGE,n.RING,n.PICTURE_COLUMN,n.PICTURE_BAR,n.WAFFLE],n.isSupported=function(i){return-1!==n.AVAILABLE_CHART_TYPES.indexOf(i)},n.isColumnBarLike=function(i){return i===n.COLUMN||i===n.BAR||i===n.PICTURE_COLUMN||i===n.PICTURE_BAR},n.isColumnBarNoPictureLike=function(i){return i===n.COLUMN||i===n.BAR},n.isColumnLike=function(i){return i===n.COLUMN||i===n.PICTURE_COLUMN},n.isBarLike=function(i){return i===n.BAR||i===n.PICTURE_BAR},n.isPictureLike=function(i){return i===n.PICTURE_COLUMN||i===n.PICTURE_BAR||i===n.WAFFLE},n.isLineLike=function(i){return i===n.LINE||i===n.VERTICAL_LINE},n.isXAxisVertical=function(i){return i===n.BAR||i===n.PICTURE_BAR||i===n.VERTICAL_LINE},n.hasAxis=function(i){return n.isColumnBarLike(i)||n.isLineLike(i)},n.hasLegend=function(i){return n.isColumnBarLike(i)||n.isLineLike(i)||i===n.PIE||i===n.DONUT||i===n.WAFFLE},n.hasBackgroundImage=function(i){return n.isColumnBarLike(i)||n.isLineLike(i)},n.isSingleSeries=function(i){return i===n.PIE||i===n.DONUT||i===n.GAUGE||i===n.RING||i===n.WAFFLE},n.isComparisonEnabled=function(i){return i===n.COLUMN||i===n.BAR?2:n.isLineLike(i)?1e6:0},n.isConditionalStylingEnabled=function(i){return n.isColumnBarLike(i)||i===n.RING||i===n.GAUGE||i===n.WAFFLE},n.isLegendEnabled=function(i,e,L,r){return n.isSeriesLegendEnabled(i,e,L)||n.isMinMaxLegendEnabled(i,e)},n.isSeriesLegendEnabled=function(i,e,L,r){return 1===e&&r&&(e=2),!(0===e||1===e&&n.isLineLike(i)&&!L)&&(n.isColumnBarLike(i)||n.isLineLike(i)||i===n.PIE||i===n.DONUT||i===n.WAFFLE)},n.isMinMaxLegendEnabled=function(i,e){return n.isColumnBarLike(i)||n.isLineLike(i)||i===n.PIE||i===n.DONUT||i===n.WAFFLE},n.isSortingEnabled=function(i,e,L){return!(0===e||e>1||L)&&(n.isColumnBarLike(i)||i===n.RING)},n.isStackEnabled=function(i,e){return 0!==e&&1!==e&&(i===n.COLUMN||i===n.BAR||i===n.LINE)},n.isRenderInOppositeDirectionsEnabled=function(i,e,L){return 0!==e&&1!==e&&!L&&n.isColumnBarLike(i)},n.supportsNegativeValues=function(i){return n.isColumnBarLike(i)||n.isLineLike(i)},n.isShowDataAsWeightEnabled=function(i){return n.isColumnBarLike(i)||n.isLineLike(i)},n.canFilterVariables=function(i,e){return!e&&(n.isColumnBarLike(i)||n.isLineLike(i)||i===n.PIE||i===n.DONUT||i===n.RING)},n});