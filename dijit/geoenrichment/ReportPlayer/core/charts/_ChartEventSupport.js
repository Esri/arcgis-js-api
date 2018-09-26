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

define(["dojo/_base/declare","./utils/builder/ChartPlots","./utils/ChartTypes","./level/LevelLineBuilder"],function(e,i,r,t){return e(null,{showLevelLine:!0,_levelLineBuilder:null,_addPlotEventListeners:function(){var e=this;this.chart&&(this._levelLineBuilder=this._levelLineBuilder||this.showLevelLine&&new t({lineContainerNode:this.domNode}),i.getWorkingPlots(this.chart).forEach(function(i,t){this.chart.connectToPlot(i,function(i){if(i.shape&&i.shape.shape&&i.shape.rawNode){var l=i.type,n=i.shape.rawNode,s=0===t?e._currentChartType:e._getComparisonChartType(),o=!1,u=!r.isXAxisVertical(e._currentChartType);if(e._currentVisualProperties.renderColumnBarsInOppositeDirections){var a=e.chart.series.filter(function(e){return i.run.plot===e.plot});o=a.indexOf(i.run)>=a.length/2}else o=i.y<e._currentVisualProperties.yAxis.baseLineValue;e._levelLineBuilder&&e._levelLineBuilder.supportsLevelLine(s)&&("onmouseout"===l?e._levelLineBuilder.hideLevelLine():"onmouseover"===l&&e._levelLineBuilder.showLevelLine(e.chart,n,s,u,o))}})},this))}})});