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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","../comparison/ComparisonSelect","./utils/ChartTypes","../../dataProvider/supportClasses/ge/LocalGEChart","./dummyData/DummyGE","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!esri/nls/jsapi"],(function(t,e,i,r,o,s,n){function a(t,e){return t&&e&&t.StdGeographyLevel===e.StdGeographyLevel&&t.StdGeographyID===e.StdGeographyID}return n=n.geoenrichment.dijit.ReportPlayer.ChartContainer,t(null,{comparisonSelect:null,_comparisonAttributes:null,_additionalAttributes:null,_ge:null,_stdPolygonsController:null,_initChartComparisonSelect:function(){var t=this;if(this._additionalAttributes=[],s.hide(this.comparisonSelectBlock),this._currentComparisonInfo){this._updateComparisonLabel();var i=this._getGeoenrichment().getData().features;if(this.comparisonSelect=new e({defaultLevelId:this._currentComparisonInfo.defaultLevel,fields:this._getGeoenrichment().getAttributeFields(),canAddFeatures:this._canAddRemoveFeatures(),addFeatureMessage:n.addToChart,featureIsAlreadyAddedMessage:n.alreadyAdded,canRemoveFeatures:this._canAddRemoveFeatures(),removeFeatureMessage:n.removeFromChart,onFeatureSelected:function(e,i,r){t._setComparisonAttributes(r)},isFeatureAdded:function(e,i,r){return a(t._comparisonAttributes,r)||t._additionalAttributes.some((function(t){return a(t,r)}))},canRemoveFeature:function(e,i,r){return!a(t._comparisonAttributes,r)},onAddFeature:function(e,i,r){t._additionalAttributes.push(r),t._updateSeries(),t._syncWithShownFeatures()},onRemoveFeature:function(e,i,r){t._additionalAttributes=t._additionalAttributes.filter((function(t){return!a(t,r)})),t._updateSeries(),t._syncWithShownFeatures()}}).placeAt(this.comparisonSelectDiv),this.own(this.comparisonSelect),this.comparisonSelect.setFeatures(i),this.comparisonSelect.setDefaultValue(),this._comparisonAttributes=this.comparisonSelect.getSelectedAttributes(),!this.comparisonSelect.get("options").length)return this.comparisonSelect.destroy(),void(this._currentComparisonInfo=null);s.show(this.comparisonSelectBlock),s.enableContent(this.comparisonSelectBlock,!!this.viewModel.dynamicReportInfo),this.viewModel.dynamicReportInfo&&(this._stdPolygonsController=this.viewModel.getStdPolygonsController(this._currentComparisonInfo.calculatorName,this.currentFeatureIndex),this.own(this._stdPolygonsController),this._syncWithShownFeatures())}},_canAddRemoveFeatures:function(){return this._isMultiFeatureChart&&!i.isLineLike(this._currentChartType)},_updateComparisonLabel:function(){var t;this._currentComparisonInfo&&(t=this._canAddRemoveFeatures()?n.selectOrAddGeographyToCompare:this._tableViewInfo?n.compareWith:i.isColumnBarLike(this._getComparisonChartType())?n.comparisonLabelBars:n.comparisonLabelDots,this.comparisonLabel.innerHTML=t,this.comparisonLabel.style.color=this.viewModel.getDocumentDefaultStyles(this.theme).color)},_syncWithShownFeatures:function(){if(this._stdPolygonsController){this._stdPolygonsController.setAttributeFields(this._getGeoenrichment().getAttributeFields());var t=this._getGeoenrichment().getAllGeographyAttributes({ignoreFilters:!0});this._stdPolygonsController.setShownFeatureAttributes(this._getComparisonFeatureAttributes()),this._stdPolygonsController.setAllFeatureAttributes(t)}},_getComparisonChartType:function(){return this._currentComparisonInfo&&this._currentComparisonInfo.chartType||this._currentChartType},_getGeoenrichment:function(){return this._currentComparisonInfo?this._ge?this._ge:(this.viewModel.dynamicReportInfo?this._ge=new r(this._originalSeriesItems,this._currentComparisonInfo.calculatorName,this.viewModel.dynamicReportInfo.fieldData.areaData,this._isMultiFeatureChart,this.viewModel.dynamicReportInfo.analysisAreas.map((function(t){return t.shortName||t.name})),this.currentFeatureIndex):this._ge=this._createDummyGE(),this._ge):null},_createDummyGE:function(){return o.getInstance()},_setFilterRangesForComparison:function(t){if(!this._currentComparisonInfo)return!1;this._getGeoenrichment().setFilterRanges(t);var e=this._getGeoenrichment().getData().features;return this.comparisonSelect.setFeatures(e),this.comparisonSelect.setDefaultValue(),this._setComparisonAttributes(this.comparisonSelect.getSelectedAttributes()),s[this.comparisonSelect.get("options").length?"show":"hide"](this.comparisonSelectBlock),!0},_setComparisonAttributes:function(t){this._comparisonAttributes=t,this.comparisonSelect.get("options").length?a(this.comparisonSelect.getSelectedAttributes(),this._comparisonAttributes)||this.comparisonSelect.setSelectedAttributes(this._comparisonAttributes):this._comparisonAttributes=null;var e=this._updateSeries();return this._syncWithShownFeatures(),e},_getComparisonFeatureAttributes:function(){if(!this._currentComparisonInfo)return null;var t=this._additionalAttributes.filter((function(t){return this.comparisonSelect.getFeatureIndexById(t.StdGeographyLevel,t.StdGeographyID)>=0}),this),e=this._comparisonAttributes&&t.some((function(t){return a(t,this._comparisonAttributes)}),this),i=t.slice();return!e&&this._comparisonAttributes&&i.push(this._comparisonAttributes),i},_getNumComparisonFeatures:function(){var t=this._getComparisonFeatureAttributes();return t&&t.length||0}})}));