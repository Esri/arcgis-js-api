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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/charting/axis2d/Default","../../ThemeCalculator","../../ChartTypes","../../AxisUtil","../../plots/labelsRendering/LabelsUtil","../../ChartDataLabelsTypes","./_PointLabelUtil"],(function(e,i,t,o,l,a,n,r){return{createXAxis:function(l,a,n,s,c,x){var m=a.xAxis,b="OtherSide"!==m.placement,h=e.mixin({},s.xAxis.axisStyle,s.xAxis.style,m.style),d=e.mixin({},s.xAxis.titleStyle,m.titleStyle),u=m.lineColor||s.xAxis.lineColor,L=o.isXAxisVertical(n);var y,A={type:i,stroke:{width:m.show&&!m.hideLine?1:0,color:u},title:m.title,titleOrientation:!L&&b?"away":"axis",titleFont:t.combineFontString(d),titleFontColor:d.color,vertical:L,leftBottom:b,majorTicks:!0,majorTick:(y=m.show&&!m.hideLine&&m.showTicks?5:0,m.ticksInside&&(y*=-1),{length:y,color:u}),majorTickStep:1,minorTicks:!1,microTicks:!1,minorTickStep:.5,microTickStep:.01,font:t.combineFontString(h),fontColor:h.color,dropLabels:!L,majorLabels:m.show&&!m.hideLabels,minorLabels:!1,labelFunc:r.getXAxisLabelFunc(x),rotation:-m.labelsAngle||0};return e.mixin(A,l)},createYAxis:function(l,a,n,s,c,x){var m=a.yAxis,b="OtherSide"!==m.placement,h=e.mixin({},s.yAxis.axisStyle,s.yAxis.style,m.style),d=e.mixin({},s.yAxis.titleStyle,m.titleStyle),u=m.lineColor||s.yAxis.lineColor,L=o.isXAxisVertical(n);var y,A={type:i,fixUpper:"major",includeZero:!m.nonZeroInclusive,stroke:{width:m.show&&!m.hideLine?1:0,color:u},title:m.title,titleOrientation:L&&b?"away":"axis",titleFont:t.combineFontString(d),titleFontColor:d.color,vertical:!L,leftBottom:b,majorTicks:!0,majorTick:(y=m.show&&!m.hideLine&&m.showTicks?5:0,m.ticksInside&&(y*=-1),{length:y,color:u}),majorTickStep:200,minorTicks:!1,microTicks:!1,minorTickStep:100,microTickStep:10,font:t.combineFontString(h),fontColor:h.color,dropLabels:!0,majorLabels:m.show&&!m.hideLabels,minorLabels:!1,rotation:-m.labelsAngle||0,labelFunc:r.getYAxisLabelFunc(x,a,n)};return e.mixin(A,l)},prettifyYAxis:function(e,i,t,a,n,r,s,c,x,m){t.removeAxis("y");var b=x&&this._getDataLabelsSizes(n,t,a,c);t.addAxis("y",this.createYAxis(l.getPrettifyYAxisParameters(e,i,{baseLineValue:a.yAxis.baseLineValue,renderColumnBarsInOppositeDirections:o.isColumnBarLike(n)&&c.length>1&&a.renderColumnBarsInOppositeDirections,previewBelowZero:!s.dynamicReportInfo,dataLabelsSizeBelow:x&&b&&b.below,dataLabelsSizeAbove:x&&b&&b.above,chartSize:m,nonZeroInclusive:a.yAxis.nonZeroInclusive}),a,n,r,s,t))},_getDataLabelsSizes:function(e,i,t,l){if(!o.isColumnBarLike(e)||t.dataLabels===n.NONE)return null;var r=i.getPlot("default"),s=t.yAxis.baseLineValue||0,c=0,x=0;return l.forEach((function(t){t.data.forEach((function(t){var l=a.getLabelInfo(r,t,i.theme,{considerAngle:!0,dataLabelsMaxWidth:i.theme.series.dataLabelsMaxWidth}).box[o.isColumnLike(e)?"h":"w"];t[t.valueProp]<s?c=Math.max(c,l):x=Math.max(x,l)}))})),{below:c?c+2*r.opt.labelOffset:0,above:x?x+2*r.opt.labelOffset:0}}}}));