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

define([],function(){var n={};return n.COLUMN="Column",n.LINE="Line",n.BAR="Bar",n.PIE="Pie",n.DONUT="Donut",n.GAUGE="Gauge",n.RING="Ring",n.PICTURE_COLUMN="PictureColumn",n.PICTURE_BAR="PictureBar",n.COLUMN_LINE="ColumnLine",n.BAR_LINE="BarLine",n.CLASSIC_CHART_TYPES=[n.COLUMN,n.LINE,n.BAR,n.PIE],n.AVAILABLE_CHART_TYPES=n.CLASSIC_CHART_TYPES.concat([n.DONUT,n.GAUGE,n.RING,n.PICTURE_COLUMN,n.PICTURE_BAR]),n.isPieLike=function(i){return i===n.PIE||i===n.DONUT||i===n.GAUGE},n.isRoundChart=function(i){return n.isPieLike(i)||i===n.RING},n.isColumnBarLike=function(i){return i===n.COLUMN||i===n.BAR||i===n.PICTURE_COLUMN||i===n.PICTURE_BAR},n.isColumnBarNoPictureLike=function(i){return i===n.COLUMN||i===n.BAR},n.isColumnLike=function(i){return i===n.COLUMN||i===n.PICTURE_COLUMN},n.isBarLike=function(i){return i===n.BAR||i===n.PICTURE_BAR},n.isPictureLike=function(i){return i===n.PICTURE_COLUMN||i===n.PICTURE_BAR},n.isComparisonEnabled=function(i){return i===n.COLUMN||i===n.BAR?2:i===n.LINE?1:0},n.isConditionalStylingEnabled=function(i){return n.isColumnBarLike(i)||i===n.RING},n.isLegendEnabled=function(i,e){return n.isSeriesLegendEnabled(i,e)||n.isMinMaxLegendEnabled(i,e)},n.isSeriesLegendEnabled=function(i,e){return 0!==e&&(1!==e||i!==n.LINE)&&(i!==n.RING&&i!==n.GAUGE)},n.isMinMaxLegendEnabled=function(i,e){return i!==n.RING&&i!==n.GAUGE},n.isSortingEnabled=function(i,e){return!(0===e||e>1)&&(n.isColumnBarLike(i)||i===n.RING)},n.isStackEnabled=function(i,e){return 0!==e&&1!==e&&(i===n.COLUMN||i===n.BAR||i===n.LINE)},n.isRenderInOppositeDirectionsEnabled=function(i,e){return 0!==e&&1!==e&&n.isColumnBarLike(i)},n.supportsNegativeValues=function(i){return n.isColumnBarLike(i)||i===n.LINE},n.isShowDataAsWeightEnabled=function(i){return n.isColumnBarLike(i)||i===n.LINE},n});