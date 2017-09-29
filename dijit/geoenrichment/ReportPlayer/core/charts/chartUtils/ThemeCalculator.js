// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojox/charting/Theme","../../themes/ThemeLibrary","./ChartTypes","../../infographics/infographicUtils/InfographicThemeUtil"],function(o,r,e,n,t){function a(o,r){var e;return o==n.COLUMN?e=r.column&&r.column.colors:o==n.LINE?e=r.line&&r.line.colors:o==n.BAR?e=r.bar&&r.bar.colors:o==n.PIE?e=r.pie&&r.pie.colors:o==n.DONUT?e=r.donut&&r.donut.colors:o==n.RING&&(e=r.ring&&r.ring.colors),e||r.colors||i}var l={},i=["#AAAAAA","#888888","#555555","#333333"];return l.DEFAULT_LINE_THICKNESS=1,l.DEFAULT_COLUMN_THICKNESS="Medium",l.DEFAULT_DONUT_HOLE_PERCENT=50,l.DEFAULT_DONUT_GAP=15,l.getThemeForSettings=function(e,a){var c=new r({colors:a.colors||i});if(!e)return c;var s=e.visualProperties;c.plotarea.fill=s.backgroundColor||a.backgroundColor,c.plotarea.stroke={width:0},c.chart.fill="transparent",c.axis.title.font="normal normal normal 11px Verdana",e.type==n.PIE&&e.type==n.RING&&e.type==n.DONUT||!s.backgroundImageData||(c.plotarea.backgroundImageData=s.backgroundImageData);var g=o.mixin({},a.dataLabelsStyle,s.dataLabelsStyle);return g.color&&(c.series.fontColor=g.color),c.series.font=l.combineFontString(g),e.type==n.DONUT&&(c.series.donutHolePercent=void 0!==s.donutHolePercent?s.donutHolePercent:l.DEFAULT_DONUT_HOLE_PERCENT,c.series.donutGap=void 0!==s.donutGap?s.donutGap:l.DEFAULT_DONUT_GAP),e.type==n.RING&&(c.series.show100PercentLabel=!0,c.series.ringBackgroundColor=s.ringBackgroundColor||a.ring&&a.ring.ringBackground&&a.ring.ringBackground.backgroundColor),(e.type==n.PICTURE_COLUMN||e.type==n.PICTURE_BAR)&&(c.series.chartIcons=s.chartIcons||[],c.series.chartIcons.forEach(function(o){o.shapeJson&&t.applyThemeSettingsToShapeJson(o.shapeJson,a)})),c},l.calcColorForPoint=function(o,r,e,t,l,i,c){var s,g,F=i==n.PIE||i==n.DONUT||!c.renderSingleDataSeriesWithSameColor&&1==l,u=a(i,c);if(i==n.LINE)s=u[t%u.length],g=r.color||s||"#FFFFFF";else var s=F?u[e%u.length]:u[t%u.length],g=o&&o.color||i!=n.PIE&&i!=n.DONUT&&r.color||s||"#FFFFFF";return g},l.calcColorForSeries=function(o,r,e,t,l){var i,c,s=t==n.PIE||t==n.DONUT||!l.renderSingleDataSeriesWithSameColor&&1==e,g=a(t,l);if(t==n.LINE)i=g[r%g.length],c=o&&o.color||i||"#FFFFFF";else var i=s?null:g[r%g.length],c=o&&o.color||i||"#FFFFFF";return c},l.combineFontString=function(o){o=o||{};var r=o.fontStyle||"normal",n=o.fontWeight||"normal",t=(o.fontSize||"11")+"px",a=o.fontFamily||e.DEFAULT_FONT_FAMILY_CLASSIC;return r+" normal "+n+" "+t+" "+a},l});