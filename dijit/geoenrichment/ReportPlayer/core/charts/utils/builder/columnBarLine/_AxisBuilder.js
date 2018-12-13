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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/charting/axis2d/Default","../../ThemeCalculator","../../ChartTypes","../../AxisUtil","./_PointLabelUtil"],function(i,e,t,o,n,r){return{createXAxis:function(n,l,s,a,c,m){var x=l.xAxis,y="OtherSide"!==x.placement,A=i.mixin({},a.xAxis.axisStyle,a.xAxis.style,x.style),h=i.mixin({},a.xAxis.titleStyle,x.titleStyle),p=x.lineColor||a.xAxis.lineColor,u=o.isXAxisVertical(s),k={type:e,stroke:{width:x.show&&x.showLine?1:0,color:p},title:x.title,titleOrientation:!u&&y?"away":"axis",titleFont:t.combineFontString(h),titleFontColor:h.color,vertical:u,leftBottom:y,majorTicks:!0,majorTick:function(){var i=x.show&&x.showLine&&x.showTicks?5:0;return x.ticksInside&&(i*=-1),{length:i,color:p}}(),majorTickStep:1,minorTicks:!1,microTicks:!1,minorTickStep:.5,microTickStep:.01,font:t.combineFontString(A),fontColor:A.color,dropLabels:!0,majorLabels:x.show,minorLabels:!1,labelFunc:r.getXAxisLabelFunc(m),rotation:-x.labelsAngle||0};return i.mixin(k,n)},createYAxis:function(n,l,s,a,c,m){var x=l.yAxis,y="OtherSide"!==x.placement,A=i.mixin({},a.yAxis.axisStyle,a.yAxis.style,x.style),h=i.mixin({},a.yAxis.titleStyle,x.titleStyle),p=x.lineColor||a.yAxis.lineColor,u=o.isXAxisVertical(s),k={type:e,fixUpper:"major",includeZero:!0,stroke:{width:x.show&&x.showLine?1:0,color:p},title:x.title,titleOrientation:u&&y?"away":"axis",titleFont:t.combineFontString(h),titleFontColor:h.color,vertical:!u,leftBottom:y,majorTicks:!0,majorTick:function(){var i=x.show&&x.showLine&&x.showTicks?5:0;return x.ticksInside&&(i*=-1),{length:i,color:p}}(),majorTickStep:200,minorTicks:!1,microTicks:!1,minorTickStep:100,microTickStep:10,font:t.combineFontString(A),fontColor:A.color,dropLabels:!0,majorLabels:x.show,minorLabels:!1,rotation:-x.labelsAngle||0,labelFunc:r.getYAxisLabelFunc(m,l,s)};return i.mixin(k,n)},prettifyYAxis:function(i,e,t,r,l,s,a,c,m){r.removeAxis("y"),r.addAxis("y",this.createYAxis(n.getPrettifyYAxisParameters(i,e,{baseLineValue:t,renderColumnBarsInOppositeDirections:o.isColumnBarLike(s)&&m>1&&l.renderColumnBarsInOppositeDirections,previewBelowZero:!c.dynamicReportInfo}),l,s,a,c,r))}}});