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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/TriStateItem","esri/dijit/geoenrichment/lists/FlowList","esri/dijit/geoenrichment/lists/FlowListDefaultItemRenderer","esri/dijit/geoenrichment/DataBrowser/VariableToggle","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../../templates/sectionDynamicSettings/ChartSettings.html","dojo/i18n!esri/nls/jsapi"],(function(t,e,i,o,s,h,n,a,l,r,c,g,w){w=w.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder.ChartSettings;var C=t(a,{createLabelNode:!0,createImageAfterLabel:!1,_createImageNode:function(t,e){return i.create("div",{class:"dijitInline"},e)}});return t([o,s],{templateString:g,nls:w,calcStateToggle:null,sortingList:null,showTotalsBelowCheckbox:null,showAvgBelowCheckbox:null,showTotalsAfterCheckbox:null,showAvgAfterCheckbox:null,postCreate:function(){this.inherited(arguments),this.showTotalsBelowCheckbox=new h(this.showTotalsBelowLabel),this.showTotalsBelowCheckbox.onClick=this._emitEvent.bind(this,!0),this.showAvgBelowCheckbox=new h(this.showAvgBelowLabel),this.showAvgBelowCheckbox.onClick=this._emitEvent.bind(this,!0),this.showTotalsAfterCheckbox=new h(this.showTotalsAfterLabel),this.showTotalsAfterCheckbox.onClick=this._emitEvent.bind(this,!0),this.showAvgAfterCheckbox=new h(this.showAvgAfterLabel),this.showAvgAfterCheckbox.onClick=this._emitEvent.bind(this,!0)},_isChartShownFlag:!0,setViewOptions:function(t){var i=this;r[t?"show":"hide"](this.viewOptionsDiv),e(this.toggleViewButton,"click",(function(){i._isChartShownFlag=!i._isChartShownFlag,i._updateControlsForView(),i._emitEvent()})),this._updateControlsForView()},_updateControlsForView:function(){this.toggleViewButton.innerHTML=this._isChartShownFlag?w.viewTable:w.viewChart,r[this._isChartShownFlag?"show":"hide"](this.sortingListDiv),r[this._isChartShownFlag?"hide":"show"](this.tableViewDiv)},_emitEvent:function(t){this._isChartShownFlag?this.onTableToChart():this.onChartToTable({showTotalsBelow:this.showTotalsBelowCheckbox.get("checked"),showAvgBelow:this.showAvgBelowCheckbox.get("checked"),showTotalsAfter:this.showTotalsAfterCheckbox.get("checked"),showAvgAfter:this.showAvgAfterCheckbox.get("checked")},t)},onChartToTable:function(t,e){},onTableToChart:function(){},setToggleCalcStateOptions:function(t){var i=this;r[t?"show":"hide"](this.toggleStateOptionsDiv),t&&(this.calcStateToggle=new l(t,this.toggleStateOptionsToggleDiv),this.own(this.calcStateToggle),this.calcStateToggle.stopMouseEventPropagation=!1,this.calcStateToggle.set("value",t.value),e(this.calcStateToggle,"change",(function(){i.onCalcStateChanged(i.calcStateToggle.getStateName())})))},onCalcStateChanged:function(t){},setSortingOptions:function(t,e){var i=this;this.sortingList||(this.sortingList=new n({class:"sectionDynamicChartSettings_sortingList",itemRenderer:new C,onChange:function(){i.onSortChart(i.sortingList.get("value"))}}).placeAt(this.sortingListDiv),this.own(this.sortingList)),this.sortingList.setItems(t),this.sortingList.set("value",e)},onSortChart:function(t){},setVisualState:function(t){if(t){this._isChartShownFlag=!t.tableViewInfo;var e=t.tableViewInfo||{};this.showTotalsBelowCheckbox.set("checked",e.showTotalsBelow),this.showAvgBelowCheckbox.set("checked",e.showAvgBelow),this.showTotalsAfterCheckbox.set("checked",e.showTotalsAfter),this.showAvgAfterCheckbox.set("checked",e.showAvgAfter),t.sorting&&this.sortingList.set("value",t.sorting),this._updateControlsForView()}},isMouseOver:function(t){return c.isMouseOver(this.domNode)}})}));