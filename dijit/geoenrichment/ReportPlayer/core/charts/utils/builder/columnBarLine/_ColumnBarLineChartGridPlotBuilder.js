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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["../../ChartTypes","../../ChartLineStyles","../../plots/CustomGridPlot","esri/dijit/geoenrichment/utils/ColorUtil","../utils/ChartDataUtil","../ChartPlots"],(function(i,e,r,s,t,o){return{configureBackgroundGridPlot:function(n){var l=n.chart,a=n.chartType,d=n.visualProperties,p=n.themeSettings,C=n.viewModel,L=i.isXAxisVertical(a)?d.xAxis:d.yAxis,c=i.isXAxisVertical(a)?d.yAxis:d.xAxis,g="#000000",x="#000000",y="#000000",A="transparent",S="transparent",h="transparent",u="transparent";C.isGraphicStyle()&&((g=s.toColor(c.gridLinesColor||c.lineColor||p.xAxis.lineColor)).a=t.undefinedToDefault(c.gridLinesOpacity,1),g=s.toCSSColor(g),(x=s.toColor(L.gridLinesColor||L.lineColor||p.yAxis.lineColor)).a=t.undefinedToDefault(L.gridLinesOpacity,1),x=s.toCSSColor(x),(y=s.toColor(d.yAxis.baseLineColor||p.yAxis.baseLineColor||(i.isXAxisVertical(a)?g:x))).a=t.undefinedToDefault(d.yAxis.baseLineOpacity,1),y=s.toCSSColor(y),A=c.gridStripesColor||p.xAxis.gridStripesColor||"transparent",S=c.gridStripesColorAlt||p.xAxis.gridStripesColorAlt||"transparent",h=L.gridStripesColor||p.yAxis.gridStripesColor||"transparent",u=L.gridStripesColorAlt||p.yAxis.gridStripesColorAlt||"transparent"),l.addPlot(o.GRID,{type:r,vMajorLines:!0,majorVLine:c.gridLines?{color:g,width:c.gridLinesThickness,style:e.toGFXValue(c.gridLinesStyle,c.gridLinesThickness)}:{color:"transparent"},vMinorLines:!1,vStripes:c.gridStripes,vFill:A,vAlternateFill:S,hMajorLines:!0,majorHLine:L.gridLines?{color:x,width:L.gridLinesThickness,style:e.toGFXValue(L.gridLinesStyle,L.gridLinesThickness)}:{color:"transparent"},hMinorLines:!1,hStripes:!c.gridStripes&&L.gridStripes,hFill:h,hAlternateFill:u,baseLineVertical:i.isXAxisVertical(a),baseLine:d.yAxis.hideBaseLine?{color:"transparent"}:{color:y,width:d.yAxis.baseLineThickness,style:e.toGFXValue(d.yAxis.baseLineStyle,d.yAxis.baseLineThickness)}});var f=l.getPlot(o.GRID);f.xHasHalfTickOffset=c.gridLinesCentered,f.yHasHalfTickOffset=L.gridLinesCentered,f.baseLineValue=d.yAxis.baseLineValue,l.movePlotToBack(o.GRID)}}}));