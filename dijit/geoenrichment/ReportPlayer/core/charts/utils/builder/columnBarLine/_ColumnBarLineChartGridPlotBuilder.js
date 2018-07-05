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

define(["../../ChartTypes","../../ChartLineStyles","../../plots/CustomGridPlot","esri/dijit/geoenrichment/utils/ColorUtil","../utils/ChartDataUtil","../ChartPlots"],function(i,e,r,s,t,o){return{configureBackgroundGridPlot:function(n){var l=n.chart,a=n.chartType,d=n.visualProperties,L=n.themeSettings,p=n.viewModel,C=i.isBarLike(a)?d.xAxis:d.yAxis,g=i.isBarLike(a)?d.yAxis:d.xAxis,y="#000000",c="#000000",S="#000000",x="transparent",A="transparent",h="transparent",u="transparent";p.isGraphicStyle&&(y=s.toColor(g.gridLinesColor||g.lineColor||L.xAxis.lineColor),y.a=t.undefinedToDefault(g.gridLinesOpacity,1),y=s.toCSSColor(y),c=s.toColor(C.gridLinesColor||C.lineColor||L.yAxis.lineColor),c.a=t.undefinedToDefault(C.gridLinesOpacity,1),c=s.toCSSColor(c),S=s.toColor(d.yAxis.baseLineColor||L.yAxis.baseLineColor||(i.isBarLike(a)?y:c)),S.a=t.undefinedToDefault(d.yAxis.baseLineOpacity,1),S=s.toCSSColor(S),x=g.gridStripesColor||L.xAxis.gridStripesColor||"transparent",A=g.gridStripesColorAlt||L.xAxis.gridStripesColorAlt||"transparent",h=C.gridStripesColor||L.yAxis.gridStripesColor||"transparent",u=C.gridStripesColorAlt||L.yAxis.gridStripesColorAlt||"transparent"),l.addPlot(o.GRID,{type:r,vMajorLines:!0,majorVLine:g.gridLines?{color:y,width:g.gridLinesThickness,style:e.toGFXValue(g.gridLinesStyle,g.gridLinesThickness)}:{color:"transparent"},vMinorLines:!1,vStripes:g.gridStripes,vFill:x,vAlternateFill:A,hMajorLines:!0,majorHLine:C.gridLines?{color:c,width:C.gridLinesThickness,style:e.toGFXValue(C.gridLinesStyle,C.gridLinesThickness)}:{color:"transparent"},hMinorLines:!1,hStripes:!g.gridStripes&&C.gridStripes,hFill:h,hAlternateFill:u,baseLineVertical:i.isBarLike(a),baseLine:d.yAxis.baseLine?{color:S,width:d.yAxis.baseLineThickness,style:e.toGFXValue(d.yAxis.baseLineStyle,d.yAxis.baseLineThickness)}:{color:"transparent"}});var f=l.getPlot(o.GRID);f.xHasHalfTickOffset=g.gridLinesCentered,f.yHasHalfTickOffset=C.gridLinesCentered,f.baseLineValue=d.yAxis.baseLineValue,l.movePlotToBack(o.GRID)}}});