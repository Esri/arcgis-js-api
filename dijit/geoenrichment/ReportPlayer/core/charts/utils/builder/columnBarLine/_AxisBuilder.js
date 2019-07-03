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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/charting/axis2d/Default","../../ThemeCalculator","../../ChartTypes","../../AxisUtil","../../plots/labelsRendering/LabelsUtil","../../ChartDataLabelsTypes","./_PointLabelUtil"],function(e,i,t,o,n,l,r,a){return{createXAxis:function(n,l,r,s,c,x){var m=l.xAxis,h="OtherSide"!==m.placement,b=e.mixin({},s.xAxis.axisStyle,s.xAxis.style,m.style),d=e.mixin({},s.xAxis.titleStyle,m.titleStyle),u=m.lineColor||s.xAxis.lineColor,L=o.isXAxisVertical(r),f={type:i,stroke:{width:m.show&&!m.hideLine?1:0,color:u},title:m.title,titleOrientation:!L&&h?"away":"axis",titleFont:t.combineFontString(d),titleFontColor:d.color,vertical:L,leftBottom:h,majorTicks:!0,majorTick:function(){var e=m.show&&!m.hideLine&&m.showTicks?5:0;return m.ticksInside&&(e*=-1),{length:e,color:u}}(),majorTickStep:1,minorTicks:!1,microTicks:!1,minorTickStep:.5,microTickStep:.01,font:t.combineFontString(b),fontColor:b.color,dropLabels:!0,majorLabels:m.show&&!m.hideLabels,minorLabels:!1,labelFunc:a.getXAxisLabelFunc(x),rotation:-m.labelsAngle||0};return e.mixin(f,n)},createYAxis:function(n,l,r,s,c,x){var m=l.yAxis,h="OtherSide"!==m.placement,b=e.mixin({},s.yAxis.axisStyle,s.yAxis.style,m.style),d=e.mixin({},s.yAxis.titleStyle,m.titleStyle),u=m.lineColor||s.yAxis.lineColor,L=o.isXAxisVertical(r),f={type:i,fixUpper:"major",includeZero:!m.nonZeroInclusive,stroke:{width:m.show&&!m.hideLine?1:0,color:u},title:m.title,titleOrientation:L&&h?"away":"axis",titleFont:t.combineFontString(d),titleFontColor:d.color,vertical:!L,leftBottom:h,majorTicks:!0,majorTick:function(){var e=m.show&&!m.hideLine&&m.showTicks?5:0;return m.ticksInside&&(e*=-1),{length:e,color:u}}(),majorTickStep:200,minorTicks:!1,microTicks:!1,minorTickStep:100,microTickStep:10,font:t.combineFontString(b),fontColor:b.color,dropLabels:!0,majorLabels:m.show&&!m.hideLabels,minorLabels:!1,rotation:-m.labelsAngle||0,labelFunc:a.getYAxisLabelFunc(x,l,r)};return e.mixin(f,n)},prettifyYAxis:function(e,i,t,l,r,a,s,c,x,m){t.removeAxis("y"),t.addAxis("y",this.createYAxis(n.getPrettifyYAxisParameters(e,i,{baseLineValue:l.yAxis.baseLineValue,renderColumnBarsInOppositeDirections:o.isColumnBarLike(r)&&c.length>1&&l.renderColumnBarsInOppositeDirections,previewBelowZero:!s.dynamicReportInfo,dataLabelsSize:x&&this._getDataLabelsSize(r,t,l,c),chartSize:m,nonZeroInclusive:l.yAxis.nonZeroInclusive}),l,r,a,s,t))},_getDataLabelsSize:function(e,i,t,n){if(!o.isColumnBarLike(e)||t.dataLabels===r.NONE)return 0;var a=i.getPlot("default"),s=-1/0;return n.forEach(function(t){t.data.forEach(function(t){var n=l.getLabelInfo(a,t,i.theme,{considerAngle:!0,dataLabelsMaxWidth:i.theme.series.dataLabelsMaxWidth});s=Math.max(s,n.box[o.isColumnLike(e)?"h":"w"])})}),s+2*a.opt.labelOffset}}});