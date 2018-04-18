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

define(["dojo/_base/lang","../../ThemeCalculator","../../ChartTypes","../../AxisUtil","./_PointLabelUtil"],function(i,e,t,o,n){return{createXAxis:function(o,r,l,s,a,c){var m=r.xAxis,x="OtherSide"!==m.placement,k=i.mixin({},s.xAxis.axisStyle,m.style),h=i.mixin({},s.xAxis.titleStyle,m.titleStyle),u=m.lineColor||s.xAxis.lineColor,p=t.isBarLike(l),y={stroke:{width:m.show&&m.showLine?1:0,color:u},title:m.title,titleOrientation:!p&&x?"away":"axis",titleFont:e.combineFontString(h),titleFontColor:h.color,vertical:p,leftBottom:x,majorTicks:!0,majorTick:function(){var i=m.show&&m.showLine&&m.showTicks?5:0;return m.ticksInside&&(i*=-1),{length:i,color:u}}(),majorTickStep:1,minorTicks:!1,microTicks:!1,minorTickStep:.5,microTickStep:.01,font:e.combineFontString(k),fontColor:k.color,dropLabels:!0,majorLabels:m.show,minorLabels:!1,labelFunc:n.getXAxisLabelFunc(c),rotation:-m.labelsAngle||0};return i.mixin(y,o)},createYAxis:function(o,r,l,s,a,c){var m=r.yAxis,x="OtherSide"!==m.placement,k=i.mixin({},s.yAxis.axisStyle,m.style),h=i.mixin({},s.yAxis.titleStyle,m.titleStyle),u=m.lineColor||s.yAxis.lineColor,p=t.isBarLike(l),y={fixUpper:"major",includeZero:!0,stroke:{width:m.show&&m.showLine?1:0,color:u},title:m.title,titleOrientation:p&&x?"away":"axis",titleFont:e.combineFontString(h),titleFontColor:h.color,vertical:!p,leftBottom:x,majorTicks:!0,majorTick:function(){var i=m.show&&m.showLine&&m.showTicks?5:0;return m.ticksInside&&(i*=-1),{length:i,color:u}}(),majorTickStep:200,minorTicks:!1,microTicks:!1,minorTickStep:100,microTickStep:10,font:e.combineFontString(k),fontColor:k.color,dropLabels:!0,majorLabels:m.show,minorLabels:!1,rotation:-m.labelsAngle||0,labelFunc:n.getYAxisLabelFunc(c,r,l)};return i.mixin(y,o)},prettifyYAxis:function(i,e,n,r,l,s,a,c,m){r.removeAxis("y"),r.addAxis("y",this.createYAxis(o.getPrettifyYAxisParameters(i,e,{baseLineValue:n,renderColumnBarsInOppositeDirections:t.isColumnBarLike(s)&&m>1&&l.renderColumnBarsInOppositeDirections,previewBelowZero:!c.dynamicReportInfo}),l,s,a,c,r))}}});