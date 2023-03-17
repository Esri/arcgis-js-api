// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","./utils/builder/ChartPlots","./utils/ChartTypes","./level/LevelLineBuilder","./tooltips/ChartTooltip","esri/dijit/geoenrichment/utils/DeviceUtil"],(function(e,i,r,t,n,l){return e(null,{showLevelLine:!0,_levelLineBuilder:null,_addPlotEventListeners:function(){var e=this;this.chart&&r.hasAxis(this._currentChartType)&&(this._levelLineBuilder=this._levelLineBuilder||this.showLevelLine&&new t({lineContainerNode:this.domNode}),i.getWorkingPlots(this.chart).forEach((function(i,t){this.chart.connectToPlot(i,(function(i){if(i.shape&&i.shape.shape&&i.shape.rawNode){var o=i.type,s=i.shape.rawNode,a=0===t?e._currentChartType:e._getComparisonChartType(),u=!1,h=!r.isXAxisVertical(e._currentChartType);if(e._currentVisualProperties.renderColumnBarsInOppositeDirections){var c=e.chart.series.filter((function(e){return i.run.plot===e.plot}));u=c.indexOf(i.run)>=c.length/2}else u=i.y<e._currentVisualProperties.yAxis.baseLineValue;e._levelLineBuilder&&e._levelLineBuilder.supportsLevelLine(a)&&("onmouseout"===o?e._levelLineBuilder.hideLevelLine():"onmouseover"===o&&e._levelLineBuilder.showLevelLine(e.chart,s,a,h,u)),"onmouseover"===o&&e._currentDataDrillingPanelInfo&&e._currentDataDrillingPanelInfo.showOnClick&&(s.style.cursor="pointer"),"onclick"===o&&!l.isMobileDevice()&&e.viewModel.dynamicReportInfo&&n.tryShowDataDrillingForShownTooltip()}}))}),this))}})}));