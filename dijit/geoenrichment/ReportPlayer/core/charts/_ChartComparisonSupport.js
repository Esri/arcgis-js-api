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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/when","dojo/dom-class","../../../OnDemandSelect","./chartUtils/ChartTypes","../../dataProviders/supportClasses/ge/LocalGEChart","../supportClasses/comparison/ComparisonListUtil","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!../../../../../nls/jsapi"],function(e,t,o,i,n,s,r,a,l){return l=l.geoenrichment.dijit.ReportPlayer.ReportPlayer,e(null,{comparisonSelect:null,_comparisonValue:null,_ge:null,_initChartComparisonSelect:function(){var e=this;if(a.hide(this.comparisonSelectBlock),this._currentComparisonInfo){this.comparisonLabel.innerHTML=n.isColumnBarLike(this._getComparisonChartType())?l.comparisonLabelBars:l.comparisonLabelDots;var t=this._getComparisonListOptions();if(!t.length)return void(this._currentComparisonInfo=null);this._comparisonValue=r.getDefaultOptionValue(t),this.comparisonSelect=(new this._getComparisonSelectClass)({listClass:"esriGEOnDemandSelectVeryTallList",options:t,value:this._comparisonValue,itemRenderer:new r.ComparisonListItemRenderer,onChange:function(){e._setComparisonId(e.comparisonSelect.get("value"))}}).placeAt(this.comparisonSelectDiv),this.own(this.comparisonSelect),a.show(this.comparisonSelectBlock),a.enableContent(this.comparisonSelectBlock,!!this.viewModel.dynamicReportInfo)}},_getComparisonSelectClass:function(){return i},_createDummyGE:function(){return null},_getComparisonChartType:function(){return this._currentComparisonInfo&&this._currentComparisonInfo.chartType||this._currentChartType},_getGeoenrichment:function(){return this._currentComparisonInfo?this._ge?this._ge:(this.viewModel.dynamicReportInfo?this._ge=new s(this._currentComparisonInfo,this.viewModel.dynamicReportInfo.fieldData.areaData[0]):this._ge=this._createDummyGE(),this._ge):null},_getComparisonListOptions:function(){return r.getListOptions(this._getGeoenrichment().getData().features)},_getSelectedComparisonAreaName:function(){return this._ge&&this._ge.getFieldValueAt("name",this._getSelectedComparisonIndex())},_getSelectedComparisonIndex:function(){return r.listValueToAreaID(this._comparisonValue)},_setComparisonId:function(e){e!==this._comparisonValue&&(this._comparisonValue=e,this.comparisonSelect.get("value")!==this._comparisonValue&&this.comparisonSelect.set("value",this._comparisonValue),this._updateSeries())}})});