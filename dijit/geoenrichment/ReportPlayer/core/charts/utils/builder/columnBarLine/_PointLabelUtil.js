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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/number","../utils/ChartDataUtil","../../ChartTypes","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,n,t,i){return{getPointLabel:function(e,t){return e.captionFieldInfo?n.getCaptionValue(e,t):e.label||""},createPointToLabelMap:function(e){e._pointIndexToLabelMap={}},updatePointIndexToLabelMap:function(e,n,t,i){var o=e._pointIndexToLabelMap[n];void 0!==o&&""!==o||(e._pointIndexToLabelMap[n]=this.getPointLabel(t,i))},getXAxisLabelFunc:function(e){return function(n,t,i){var o=e._pointIndexToLabelMap&&e._pointIndexToLabelMap[t];return void 0!==o?o:n}},getYAxisLabelFunc:function(n,o,a){function r(e){var t=n.getAxis("y").opt;return e-t.majorTickStep<t.min||e+t.majorTickStep>t.max}return function(n,u,p){return t.isColumnBarLike(a)&&o.renderColumnBarsInOppositeDirections&&(u=Math.abs(u)),o.yAxis.showPercentIndicator&&r(u)?e.format(u/100,{places:0,type:"percent"}):i.formatNumber(u)}}}});