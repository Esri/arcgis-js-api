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

define(["dojo/_base/declare","dojo/when","../../../OnDemandSelect","./utils/ChartTypes","../../dataProvider/supportClasses/ge/LocalGEChart","../supportClasses/comparison/ComparisonListUtil","./legends/ChartLegendTypes","./dummyData/DummyGE","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,o,n,s,r,a,l,c){return c=c.geoenrichment.dijit.ReportPlayer.ChartContainer,e(null,{comparisonSelect:null,_comparisonValue:null,_ge:null,_initChartComparisonSelect:function(){var e=this;if(l.hide(this.comparisonSelectBlock),this._currentComparisonInfo){this.comparisonLabel.innerHTML=o.isColumnBarLike(this._getComparisonChartType())?c.comparisonLabelBars:c.comparisonLabelDots,this.comparisonLabel.style.color=this.viewModel.getDocumentDefaultStyles(this.theme).color;var t=this._getComparisonListOptions();if(!t.length)return void(this._currentComparisonInfo=null);this._comparisonValue=s.getDefaultOptionValue(t),this.comparisonSelect=(new this._getComparisonSelectClass)({listClass:"esriGEOnDemandSelectVeryTallList",options:t,value:this._comparisonValue,itemRenderer:new s.ComparisonListItemRenderer,onChange:function(){e._setComparisonId(e.comparisonSelect.get("value"))}}).placeAt(this.comparisonSelectDiv),this.own(this.comparisonSelect),l.show(this.comparisonSelectBlock),l.enableContent(this.comparisonSelectBlock,!!this.viewModel.dynamicReportInfo)}},_getComparisonSelectClass:function(){return i},_createDummyGE:function(){return a.getInstance()},_getComparisonChartType:function(){return this._currentComparisonInfo&&this._currentComparisonInfo.chartType||this._currentChartType},_getGeoenrichment:function(){return this._currentComparisonInfo?this._ge?this._ge:(this.viewModel.dynamicReportInfo?this._ge=new n(this._currentComparisonInfo,this.viewModel.dynamicReportInfo.fieldData.areaData[0]):this._ge=this._createDummyGE(),this._ge):null},_getComparisonListOptions:function(){return s.getListOptions(this._getGeoenrichment().getData().features)},_getSelectedComparisonAreaName:function(){return this._ge&&this._ge.getFieldValueAt("StdGeographyName",this._getSelectedComparisonIndex())},_getSelectedComparisonIndex:function(){return s.listValueToAreaID(this._comparisonValue)},_setComparisonId:function(e){e!==this._comparisonValue&&(this._comparisonValue=e,this.comparisonSelect.get("value")!==this._comparisonValue&&this.comparisonSelect.set("value",this._comparisonValue),this._updateSeries())}})});