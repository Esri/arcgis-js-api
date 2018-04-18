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

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","./chartUtils/ChartTypes","./chartUtils/builder/ChartPlots","esri/dijit/geoenrichment/utils/DomUtil"],function(e,o,i,t,n,l,r,a,h){return e(null,{_levelLineDiv:null,_addPlotEventListeners:function(){if(this.chart){var e=this;a.getWorkingPlots(this.chart).forEach(function(o,n){this.chart.connectToPlot(o,function(o){function a(o){e._levelLineDiv||(e._levelLineDiv=t.create("div",null,e.domNode)),i.remove(e._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH esriGEReportPlayer_chartContainerLevelLineV"),o?i.add(e._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineH"):i.add(e._levelLineDiv,"esriGEReportPlayer_chartContainerLevelLineV"),h.show(e._levelLineDiv),l.set(e._levelLineDiv,{left:"",top:"",width:"",height:""})}function s(o){if(o){var i=l.get(e._levelLineDiv,"top");h[i<0||i>e._chartHeight?"hide":"show"](e._levelLineDiv)}else{var t=l.get(e._levelLineDiv,"left");h[t<0||t>e._chartWidth?"hide":"show"](e._levelLineDiv)}}if(o.shape&&o.shape.shape&&o.shape.rawNode){var c=o.type,d=o.shape.rawNode;if(0===n&&"onclick"===c){var v=o.run.data[o.index];v&&(r.isPictureLike(e._currentChartType)?e.onPlotChangeIcon&&e.onPlotChangeIcon(v.point.iconFieldInfo,e,d,function(o){e.onColumBarPicturePreChanged(),v.point.iconFieldInfo=o,e.onColumBarPictureChanged()}):e.onPlotChangeColor&&e.onPlotChangeColor(v.fill,function(o){e.onColorPreChanged(),v.point.color=o,e.onColorChanged()}))}if("onmouseout"===c)e._hideLevelLine();else if("onmouseover"===c&&e.viewModel.dynamicReportInfo){var f=e.chart.calculateGeometry(),u=h.position(d),C=h.position(f.node),p=h.position(e.domNode);switch(e._currentChartType){case r.COLUMN:a(!0),l.set(e._levelLineDiv,{left:C.x-p.x+f.offsets.l+"px",top:u.y-p.y-1+"px",width:l.get(f.node,"width")-f.offsets.l-f.offsets.r+"px"}),s(!0);break;case r.BAR:case r.LINE:a(!1),l.set(e._levelLineDiv,{left:u.x+u.w*(e._currentChartType===r.LINE||1===n&&e._getComparisonChartType()===r.LINE?.5:1)-p.x+"px",top:C.y-p.y+f.offsets.t+"px",height:l.get(f.node,"height")-f.offsets.t-f.offsets.b+"px"}),s(!1)}}}})},this)}},_hideLevelLine:function(){h.hide(this._levelLineDiv)},onColorPreChanged:function(){},onColorChanged:function(){},onColumBarPicturePreChanged:function(){},onColumBarPictureChanged:function(){}})});