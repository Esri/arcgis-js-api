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

define(["dojo/_base/lang","dojox/charting/axis2d/Default","../../ThemeCalculator","../../ChartTypes","../../AxisUtil","../../plots/labelsRendering/LabelsUtil","../../ChartDataLabelsTypes","./_PointLabelUtil"],function(e,i,t,o,l,n,a,r){return{createXAxis:function(l,n,a,s,c,m){var x=n.xAxis,h="OtherSide"!==x.placement,b=e.mixin({},s.xAxis.axisStyle,s.xAxis.style,x.style),d=e.mixin({},s.xAxis.titleStyle,x.titleStyle),u=x.lineColor||s.xAxis.lineColor,L=o.isXAxisVertical(a),f={type:i,stroke:{width:x.show&&!x.hideLine?1:0,color:u},title:x.title,titleOrientation:!L&&h?"away":"axis",titleFont:t.combineFontString(d),titleFontColor:d.color,vertical:L,leftBottom:h,majorTicks:!0,majorTick:function(){var e=x.show&&!x.hideLine&&x.showTicks?5:0;return x.ticksInside&&(e*=-1),{length:e,color:u}}(),majorTickStep:1,minorTicks:!1,microTicks:!1,minorTickStep:.5,microTickStep:.01,font:t.combineFontString(b),fontColor:b.color,dropLabels:!0,majorLabels:x.show&&!x.hideLabels,minorLabels:!1,labelFunc:r.getXAxisLabelFunc(m),rotation:-x.labelsAngle||0};return e.mixin(f,l)},createYAxis:function(l,n,a,s,c,m){var x=n.yAxis,h="OtherSide"!==x.placement,b=e.mixin({},s.yAxis.axisStyle,s.yAxis.style,x.style),d=e.mixin({},s.yAxis.titleStyle,x.titleStyle),u=x.lineColor||s.yAxis.lineColor,L=o.isXAxisVertical(a),f={type:i,fixUpper:"major",includeZero:!0,stroke:{width:x.show&&!x.hideLine?1:0,color:u},title:x.title,titleOrientation:L&&h?"away":"axis",titleFont:t.combineFontString(d),titleFontColor:d.color,vertical:!L,leftBottom:h,majorTicks:!0,majorTick:function(){var e=x.show&&!x.hideLine&&x.showTicks?5:0;return x.ticksInside&&(e*=-1),{length:e,color:u}}(),majorTickStep:200,minorTicks:!1,microTicks:!1,minorTickStep:100,microTickStep:10,font:t.combineFontString(b),fontColor:b.color,dropLabels:!0,majorLabels:x.show&&!x.hideLabels,minorLabels:!1,rotation:-x.labelsAngle||0,labelFunc:r.getYAxisLabelFunc(m,n,a)};return e.mixin(f,l)},prettifyYAxis:function(e,i,t,n,a,r,s,c,m,x){t.removeAxis("y"),t.addAxis("y",this.createYAxis(l.getPrettifyYAxisParameters(e,i,{baseLineValue:n.yAxis.baseLineValue,renderColumnBarsInOppositeDirections:o.isColumnBarLike(a)&&c.length>1&&n.renderColumnBarsInOppositeDirections,previewBelowZero:!s.dynamicReportInfo,dataLabelsSize:m&&this._getDataLabelsSize(a,t,n,c),chartSize:x}),n,a,r,s,t))},_getDataLabelsSize:function(e,i,t,l){if(!o.isColumnBarLike(e)||t.dataLabels===a.NONE)return 0;var r=i.getPlot("default"),s=-1/0;return l.forEach(function(t){t.data.forEach(function(t){var l=n.getLabelInfo(r,t,i.theme,{considerAngle:!0,dataLabelsMaxWidth:i.theme.series.dataLabelsMaxWidth});s=Math.max(s,l.box[o.isColumnLike(e)?"h":"w"])})}),s+2*r.opt.labelOffset}}});