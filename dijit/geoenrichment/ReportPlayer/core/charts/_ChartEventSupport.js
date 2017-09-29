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

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","./chartUtils/ChartTypes","esri/dijit/geoenrichment/utils/DomUtil"],function(e,o,n,t,i,r,l,a){return e(null,{_levelLineDiv:null,_addPlotEventListeners:function(){if(this.chart){var e=this;this.chart.connectToPlot("default",function(o){function i(o){e._levelLineDiv||(e._levelLineDiv=t.create("div",null,e.domNode)),n.remove(e._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH esriGEReportPlayer_chartContainerLevelLineV"),o?n.add(e._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH"):n.add(e._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineV"),a.show(e._levelLineDiv),r.set(e._levelLineDiv,{left:"",top:"",width:"",height:""})}if(o.shape&&o.shape.shape&&o.shape.rawNode){var s=o.type,c=o.shape.rawNode;if("onclick"==s){var h=o.run.data[o.index];h&&(e._currentChartType===l.PICTURE_COLUMN||e._currentChartType===l.PICTURE_BAR?e.onPlotChangeIcon&&e.onPlotChangeIcon(e,c,function(n){e.onColumBarPicturePreChanged(),e._currentVisualProperties.chartIcons=e._currentVisualProperties.chartIcons||[],e._currentVisualProperties.chartIcons[o.index]=n,e.onColumBarPictureChanged()}):e.onPlotChangeColor&&e.onPlotChangeColor(h.fill,function(o){e.onColorPreChanged(),h.point.color=o,e.onColorChanged()}))}if("onmouseout"==s)e._hideLevelLine();else if("onmouseover"==s&&e.viewModel.dynamicReportInfo){var d=e.chart.calculateGeometry(),u=a.position(c),v=a.position(d.node),f=a.position(e.domNode);switch(e._currentChartType){case l.COLUMN:i(!0),r.set(e._levelLineDiv,{left:v.x-f.x+d.offsets.l+"px",top:u.y-f.y-1+"px",width:r.get(d.node,"width")-d.offsets.l-d.offsets.r+"px"});break;case l.BAR:case l.LINE:i(!1),r.set(e._levelLineDiv,{left:u.x+u.w*(e._currentChartType==l.LINE?.5:1)-f.x+"px",top:v.y-f.y+d.offsets.t+"px",height:r.get(d.node,"height")-d.offsets.t-d.offsets.b+"px"})}}}})}},_hideLevelLine:function(){a.hide(this._levelLineDiv)},onColorPreChanged:function(){},onColorChanged:function(){},onColumBarPicturePreChanged:function(){},onColumBarPictureChanged:function(){}})});