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

define(["../../ChartTypes","../../../../themes/ReportThemes","../../ChartLineStyles","../../plots/CustomGridPlot","esri/dijit/geoenrichment/utils/ColorUtil","../utils/ChartDataUtil","../ChartPlots"],function(e,i,r,s,t,o,n){return{configureBackgroundGridPlot:function(l){var a=l.chart,d=l.chartType,L=l.visualProperties,p=l.themeSettings,C=l.viewModel,g=e.isBarLike(d)?L.xAxis:L.yAxis,y=e.isBarLike(d)?L.yAxis:L.xAxis,c="#000000",A="#000000",S="#000000",h="transparent",x="transparent",u="transparent",f="transparent";C.reportStyle===i.GRAPHIC&&(c=t.toColor(y.gridLinesColor||y.lineColor||p.xAxis.lineColor),c.a=o.undefinedToDefault(y.gridLinesOpacity,1),c=t.toCSSColor(c),A=t.toColor(g.gridLinesColor||g.lineColor||p.yAxis.lineColor),A.a=o.undefinedToDefault(g.gridLinesOpacity,1),A=t.toCSSColor(A),S=t.toColor(L.yAxis.baseLineColor||p.yAxis.baseLineColor||(e.isBarLike(d)?c:A)),S.a=o.undefinedToDefault(L.yAxis.baseLineOpacity,1),S=t.toCSSColor(S),h=y.gridStripesColor||p.xAxis.gridStripesColor||"transparent",x=y.gridStripesColorAlt||p.xAxis.gridStripesColorAlt||"transparent",u=g.gridStripesColor||p.yAxis.gridStripesColor||"transparent",f=g.gridStripesColorAlt||p.yAxis.gridStripesColorAlt||"transparent"),a.addPlot(n.GRID,{type:s,vMajorLines:!0,majorVLine:y.gridLines?{color:c,width:y.gridLinesThickness,style:r.toGFXValue(y.gridLinesStyle,y.gridLinesThickness)}:{color:"transparent"},vMinorLines:!1,vStripes:y.gridStripes,vFill:h,vAlternateFill:x,hMajorLines:!0,majorHLine:g.gridLines?{color:A,width:g.gridLinesThickness,style:r.toGFXValue(g.gridLinesStyle,g.gridLinesThickness)}:{color:"transparent"},hMinorLines:!1,hStripes:!y.gridStripes&&g.gridStripes,hFill:u,hAlternateFill:f,baseLineVertical:e.isBarLike(d),baseLine:L.yAxis.baseLine?{color:S,width:L.yAxis.baseLineThickness,style:r.toGFXValue(L.yAxis.baseLineStyle,L.yAxis.baseLineThickness)}:{color:"transparent"}});var T=a.getPlot(n.GRID);T.xHasHalfTickOffset=y.gridLinesCentered,T.yHasHalfTickOffset=g.gridLinesCentered,T.baseLineValue=L.yAxis.baseLineValue,a.movePlotToBack(n.GRID)}}});