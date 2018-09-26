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

define(["dojo/_base/declare","../comparison/ComparisonSelect","../comparison/ComparisonUtil","./utils/ChartTypes","../../dataProvider/supportClasses/ge/LocalGEChart","./dummyData/DummyGE","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,o,a,n,r,s){return s=s.geoenrichment.dijit.ReportPlayer.ChartContainer,e(null,{comparisonSelect:null,_comparisonValue:null,_additionalFeaturesCache:null,_ge:null,_initChartComparisonSelect:function(){var e=this;if(this._additionalFeaturesCache=[],r.hide(this.comparisonSelectBlock),this._currentComparisonInfo){var i=this._isMultiFeatureChart&&!o.isLineLike(this._currentChartType);if(this.comparisonLabel.innerHTML=i?s.selectOrAddGeographyToCompare:o.isColumnBarLike(this._getComparisonChartType())?s.comparisonLabelBars:s.comparisonLabelDots,this.comparisonLabel.style.color=this.viewModel.getDocumentDefaultStyles(this.theme).color,this.comparisonSelect=new t({fields:this._getFieldsForComparisons(),canAddFeatures:i,addFeatureMessage:s.addToChart,featureIsAlreadyAddedMessage:s.alreadyAdded,canRemoveFeatures:i,removeFeatureMessage:s.removeFromChart,onFeatureSelected:function(t,i){e._setComparisonId(i)},isFeatureAdded:function(t,i){return e._comparisonValue===i||-1!==e._additionalFeaturesCache.indexOf(i)},canRemoveFeature:function(t,i){return e._comparisonValue!==i},onAddFeature:function(t,i){e._additionalFeaturesCache.push(i),e._updateSeries()},onRemoveFeature:function(t,i){e._additionalFeaturesCache.splice(e._additionalFeaturesCache.indexOf(i),1),e._updateSeries()}}).placeAt(this.comparisonSelectDiv),this.own(this.comparisonSelect),this.comparisonSelect.setFeatures(this._getGeoenrichment().getData().features),this._comparisonValue=this.comparisonSelect.setDefaultValue(),!this.comparisonSelect.get("options").length)return this.comparisonSelect.destroy(),void(this._currentComparisonInfo=null);r.show(this.comparisonSelectBlock),r.enableContent(this.comparisonSelectBlock,!!this.viewModel.dynamicReportInfo)}},_createDummyGE:function(){return n.getInstance()},_getComparisonChartType:function(){return this._currentComparisonInfo&&this._currentComparisonInfo.chartType||this._currentChartType},_getGeoenrichment:function(){return this._currentComparisonInfo?this._ge?this._ge:(this.viewModel.dynamicReportInfo?this._ge=new a(this._currentComparisonInfo.calculatorName,this.viewModel.dynamicReportInfo.fieldData.areaData,this._isMultiFeatureChart,this.currentFeatureIndex):this._ge=this._createDummyGE(),this._ge):null},_getFieldsForComparisons:function(){var e=this._originalSeriesItems[0];return e&&e.points.map(function(e){return{label:e.label,name:e.fieldInfo.name,formatFunction:function(t){return i.valueFormatFunction(t,e.fieldInfo)}}})},_setComparisonId:function(e){e!==this._comparisonValue&&(this._comparisonValue=e,this.comparisonSelect.get("value")!==this._comparisonValue&&this.comparisonSelect.set("value",this._comparisonValue),this._updateSeries())}})});