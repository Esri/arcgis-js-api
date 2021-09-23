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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-style","dojo/query","dojo/on","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/ReportPlayer/config","esri/dijit/geoenrichment/infographicUtils/theme","./_Infographic","../InfographicTypes","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/ge/LocalGEInfographic","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/ObjectUtil","../utils/InfographicJsonUtil","../extentions/BaseSelectComparisonExt","dojo/text!../../templates/DynamicInfographic.html","dojo/i18n!esri/nls/jsapi","../../../_devConfig"],(function(t,i,e,r,o,n,s,h,a,l,g,c,d,u,f,_,p,m,w,y,v,I,R){I=I.geoenrichment.dijit.ReportPlayer.Infographics;var P={};P[c.ONE_VAR]=230,P[c.AGE_PYRAMID]=0,P[c.RELATED_VARS]=320,P[c.TAPESTRY]=300,P[c.PRIZM5]=300;var A=t([s,h],{templateString:v,nls:I,viewModel:null,theme:null,currentFeatureIndex:null,_infographic:null,_stdPolygonsController:null,_thisAreasHighlightController:null,_initPromise:null,buildRendering:function(){y.init(),this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this._showError(!1),this._showEmptyView(!1)},_currentInfographicJson:null,getRenderPromise:function(){return this._initPromise},updateInfographic:function(t){if(this.viewDiv)return this._destroyCurrentInfographic(),this._currentInfographicJson=t,this.viewModel.dynamicReportInfo&&this._currentInfographicJson.calcData&&c.supportsComparison(this._currentInfographicJson.type)&&(this._stdPolygonsController=this.viewModel.getStdPolygonsController(this._currentInfographicJson.calcData.calculatorName,this.currentFeatureIndex),this._currentInfographicJson.type===c.ONE_VAR&&(this._thisAreasHighlightController=this.viewModel.getThisAreasHighlightController())),this._enrichInfographicJsonWithProps(t),this.domNode.style.opacity="0.001",this._initPromise=e(this._createInfographicWidgetFromJson(t),function(){this.domNode&&(this._applyTheme(t),this.domNode.style.opacity="")}.bind(this)),this._initPromise},_enrichInfographicJsonWithProps:function(t){w.setLevels(t,t.levels)},_createInfographicWidgetFromJson:function(t){var i=this,r=this.viewModel.getInfographicDefaultStyles(this.theme);if(l.set(this.viewDiv,r&&r.agePyramid&&r.agePyramid.theme||"light"),this.viewModel.dynamicReportInfo){this.viewModel.dynamicReportInfo.isFixedDataMode||this.viewModel.dynamicReportInfo.geClient.hasCapability("ComparisonLevelsInCalculators")||(t.calcData=null),this._infographic=new g({documentStyleProvider:this.viewModel.getDocumentDefaultStyles(this.theme),infographicStyleProvider:r,chartStyleProvider:this.viewModel.getChartDefaultStyles(this.theme),widgetParams:this._getWidgetCreationParams(t),returnGeometry:!1,autoTitle:!1,subtitle:!1,levels:w.getSubLevels(t),highestLevel:w.getHighestLevel(t),onExpandedStateChanged:function(){i._doResize()},onSelectedFeatureChanged:function(){i._syncWithShownFeatures()}}).placeAt(this.infographicDiv);var o={title:t.title,type:t.type,variables:t.calcData.variables},n=new d(t,this.viewModel.dynamicReportInfo.fieldData.areaData,this.currentFeatureIndex);return this._infographic.setGeoenrichment(n),this._infographic.set("expanded",t.type===c.TAPESTRY||n.getData().features.length>1),this._infographic.set("countryID",this.viewModel.dynamicReportInfo.countryID),this._infographic.set("type",t.type),this._infographic.set("variables",o.variables),this._infographic.set("title",o.title),this._infographic.startup(),t.title=t.title||o.title,e(this._infographic.getRenderPromise(),(function(){return i._doResize().then((function(){i._syncWithShownFeatures()}))}))}try{return this._createDummyInfographic(t)}catch(t){console.log(t),this._showError(!0)}},_getWidgetCreationParams:function(t){var i={infographicJson:t};switch(t.type){case c.AGE_PYRAMID:i.showVerticalAxis=t.showVerticalAxis}return i},_createDummyInfographic:function(t){},_syncWithShownFeatures:function(){if(this._stdPolygonsController&&this._infographic&&this._infographic._widget){this._stdPolygonsController.setAttributeFields(this._infographic.dataProvider.getAttributeFields());var t,i=this._infographic.dataProvider.getAllGeographyAttributes({ignoreFilters:!0});if(this._currentInfographicJson.type===c.ONE_VAR)t=this._infographic.dataProvider.getAllGeographyAttributes();else{t=[];var e=this._infographic._widget.select&&this._infographic._widget.select.getSelectedAttributes();e&&t.push(e)}this._stdPolygonsController.setShownFeatureAttributes(t),this._stdPolygonsController.setAllFeatureAttributes(i),this._currentInfographicJson.type===c.ONE_VAR&&(this._registerStdPolygonsHighlight(i),this._registerThisAreaHighlight())}},_registerStdPolygonsHighlight:function(t){var i=this;this._stdPolygonsController.registerInfographic({highlightInfographicForAttributes:function(t){if(i._isCreated()){var e=i._infographic._widget.setTableRowHighlighted(t);e&&(i.viewDiv.scrollTop=e.offsetTop+200-i.viewDiv.clientHeight)}}}).then((function(){var e;i._isCreated()&&(n(i._infographic._widget.table,"mouseover, mousemove",(function(){var r=i._infographic._widget.getOverRow();if(r&&r!==e){e=r;var o,n=r&&r.cells[0].innerHTML;n&&t.some((function(t){if(t.StdGeographyName===n)return o=t,!0})),o&&(i._stdPolygonsController.highlightGraphicForAttributes(o),i._infographic._widget.setTableRowHighlighted(o))}})),n(i._infographic._widget.table,"mouseout",(function(){i._stdPolygonsController.highlightGraphicForAttributes(null),i._infographic._widget.setTableRowHighlighted(null),e=null})))}))},_registerThisAreaHighlight:function(){var t=this;this._thisAreasHighlightController.registerTable({highlightTableForAreaIndex:function(i){if(t._isCreated())if(t.currentFeatureIndex===i){var e=t._infographic._widget.setThisAreaTableRowHighlighted();e&&(t.viewDiv.scrollTop=e.offsetTop+200-t.viewDiv.clientHeight)}else t._infographic._widget.setTableRowHighlighted(null)}}).then((function(){var i;t._isCreated()&&(n(t._infographic._widget.table,"mouseover, mousemove",(function(){var e=t._infographic._widget.getOverRow();e&&e!==i&&(i=e,t._infographic._widget.isThisAreaRow(i)&&(t._thisAreasHighlightController.highlightGraphicForAreaIndex(t.currentFeatureIndex),t._infographic._widget.setThisAreaTableRowHighlighted()))})),n(t._infographic._widget.table,"mouseout",(function(){t._thisAreasHighlightController.highlightGraphicForAreaIndex(null),t._infographic._widget.setTableRowHighlighted(null),i=null})))}))},_applyTheme:function(t){if(this._infographic){var i=t.style&&t.style.backgroundColor||"transparent";r.set(this._infographic.domNode,"backgroundColor",i),r.set(this._infographic.domNode,"fontFamily","inherit")}},_destroyCurrentInfographic:function(){this._showError(!1),this._infographic&&this._infographic.destroy(),this._infographic=null},_filterRangesStats:null,_filterRanges:null,getFilterRanges:function(){return e(this._initPromise,function(){return this._filterRangesStats=this._infographic.dataProvider.collectFilterRangesStats({excludeThisAreas:!0}),this._filterRangesStats&&this._filterRangesStats.filterRanges}.bind(this))},setFilterRanges:function(t){return this._filterRanges=t,e(this._initPromise,function(){this._infographic.dataProvider.setFilterRanges(t,{ignoreThisAreas:this._currentInfographicJson.type===c.ONE_VAR}),this._infographic._widget.select?(this._infographic._widget.select.setFeatures(this._infographic.dataProvider.getData().features),this._infographic._widget.select.setDefaultValue({emitEvent:!0})):(this._infographic._widget.setDataProvider(this._infographic.dataProvider),this._doResize()),this._syncWithShownFeatures(),this._showEmptyView(!this.getNumAreasShown()),this.onContentUpdated()}.bind(this))},getNumAreasTotal:function(){return this._filterRangesStats&&this._filterRangesStats.numAreasTotal||0},getNumAreasShown:function(){return this._currentInfographicJson.type===c.ONE_VAR?this._infographic.dataProvider.getAllGeographyAttributes().length:this._infographic._widget.select?this._infographic._widget.select.getNumFeatures&&this._infographic._widget.select.getNumFeatures()||0:void 0},_showEmptyView:function(t){f[t?"hide":"show"](this.infographicDiv),f[t?"show":"hide"](this.noDataPlaceHolder),t&&this._syncEmptyViewPlaceholder()},_syncEmptyViewPlaceholder:function(){this.noDataPlaceHolder&&r.set(this.noDataPlaceHolder,"paddingTop",(this.height-r.get(this.noDataPlaceHolder,"height"))/2+"px")},notifyShown:function(){},width:null,height:null,_infographicResizedAtLeastOnce:!1,_hasScroll:!1,resize:function(t,i,e){if(void 0!==t){if((!e||!e.force)&&m.compareEqual(this.width,t,2)&&m.compareEqual(this.height,i,2))return;this.width=t,this.height=i}return _.invoke(this,"_doResize",a.isPlayerOnServer?0:50)},_doResize:function(){var t=this;if(this._infographic&&this._infographic.domNode&&f.isNodeInLayout(this.domNode)&&this._currentInfographicJson){this._syncJsonDimensions();var i=this._currentInfographicJson.type,e=Math.max(function(){if(i===c.ONE_VAR){var e=(n=o(".OneVarMultiComparison_Table",t.domNode)[0])?r.get(n,"height")+120:0;return Math.max(e,P[i])}if(i===c.TAPESTRY){e=(n=o(".Tapestry_Main_Table",t.domNode)[0])?r.get(n,"height")+60:0;return Math.max(e,P[i])}if(i===c.PRIZM5){var n;e=(n=o(".Prizm5_Main_Table",t.domNode)[0])?r.get(n,"height")+60:0;return Math.max(e,P[i])}return i!==c.RELATED_VARS||t._infographic.expanded?P[i]:200}(),this.height);this._hasScroll=e>this.height;var n=this.width-(this._hasScroll?f.getScrollbarSize().w+3:0);return r.set(this._infographic.domNode,{width:n+"px",height:e+"px"}),r.set(this.viewDiv,{height:this.height+"px",overflowY:"auto"}),this._infographic.resize(),this._adjustErrorMessage(),u.delay()}},hasScroll:function(){return this._hasScroll},changeScroll:function(t,i){this.domNode.scrollLeft+=t,this.domNode.scrollTop+=i},_syncJsonDimensions:function(){this._currentInfographicJson.style=this._currentInfographicJson.style||{},this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height},getPreferredHeight:function(){return this._infographic&&r.get(this._infographic.domNode,"height")},collapseContent:function(){this._infographic&&this._infographic.collapseContent()},getVisualState:function(){return{type:this._currentInfographicJson.type,selectedFeatureId:this._infographic&&this._infographic.getSelectedFeatureID(),filterRanges:this._filterRanges?i.clone(this._filterRanges):null}},setVisualState:function(t){if(t){var i=this;return e(this._initPromise,(function(){if(i._infographic)return e(t.filterRanges&&i.setFilterRanges(t.filterRanges),(function(){return t.selectedFeatureId&&i._infographic.setSelectedFeatureID(t.selectedFeatureId)}))}))}},isMouseOver:function(){return p.isMouseOver(this.domNode)||this._infographic&&this._infographic._widget&&this._infographic._widget.select&&this._infographic._widget.select.isMouseOver()},_showError:function(t){R.emulateErrors.contentErrors&&(t=!0),f[t?"show":"hide"](this.errorDiv),f[t?"hide":"show"](this.infographicDiv)},_adjustErrorMessage:function(){r.set(this.errorDiv,"paddingTop",r.get(this.domNode,"height")/2-20+"px")},toJson:function(){return i.clone(this._currentInfographicJson)},onContentUpdated:function(){},onShowWaiting:function(t){},_isCreated:function(){return this.domNode&&this._infographic&&this._infographic.domNode},destroy:function(){this._stdPolygonsController&&this._stdPolygonsController.setShownFeatureAttributes([]),this._destroyCurrentInfographic(),this.inherited(arguments)}});return A.Infographic=g,A}));