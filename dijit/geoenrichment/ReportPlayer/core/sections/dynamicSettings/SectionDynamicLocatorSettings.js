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

define(["dojo/_base/declare","dojo/on","dojo/string","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/TextBox","esri/dijit/geoenrichment/NumericalSlider","esri/dijit/geoenrichment/utils/InvokeUtil","dojo/text!../../templates/SectionDynamicLocatorSettings.html","dojo/i18n!esri/nls/jsapi"],function(e,t,i,l,n,s,r,a,o,u,d){return d=d.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,e([n,s],{templateString:u,nls:d,_originalStatRanges:null,_filters:null,textFilter:null,_filterWidgets:null,postCreate:function(){var e=this;this.inherited(arguments),this._buildKeywordFilter(),t(this.resetButton,"click",function(){e.textFilter.set("value",""),e._buildFiltersFromOriginals(),e._buildRangeFilters(),e._doEmitEvent()})},setNumPoints:function(e,t){this.refineResultsTitle.innerHTML=i.substitute(d.refineYourResults,{numTotal:e||0,numShown:t||0})},setStatRanges:function(e){this._originalStatRanges=e||[],this._buildFiltersFromOriginals(),this._buildRangeFilters()},_buildFiltersFromOriginals:function(){this._filters=this._originalStatRanges.map(function(e){return{label:e.alias,fieldName:e.fieldName,minValue:e.min,maxValue:e.max,lowerValue:e.min,upperValue:e.max,decimals:e.decimals}})},_buildKeywordFilter:function(){this.textFilter=new r({class:"sectionDynamicLocatorSettings_textFilter",trim:!0,placeHolder:d.keywordsPlaceholder}).placeAt(this.textFilterDiv),t(this.textFilter.textbox,"keyup",this._emitEvent.bind(this)),this.own(this.textFilter)},_buildRangeFilters:function(){var e=this;this._destroyFilterWidgets(),this._filterWidgets=[],this._filters.forEach(function(t){var i=l.create("div",{class:"esriGERowHigh sectionDynamicLocatorSettings_row"},e.filtersBlock),n=new a({label:t.label,minValue:t.minValue,maxValue:t.maxValue,lowerValue:t.lowerValue,upperValue:t.upperValue,decimals:t.decimals,timeIntervalLength:250,onChange:function(i){t.lowerValue=n.round(i.lowerValue),t.upperValue=n.round(i.upperValue),e._emitEvent()}}).placeAt(i);n.startup(),e._filterWidgets.push(n)})},_emitEvent:function(){o.invoke(this,"_doEmitEvent",100)},_doEmitEvent:function(){this.onLocatorFilterChanged({searchText:this.textFilter.get("value"),filterRanges:this._filters.map(function(e){return{fieldName:e.fieldName,min:e.lowerValue,max:e.upperValue}})})},onLocatorFilterChanged:function(e){},setVisualState:function(e){if(e){var t=e.stackElements[0]&&e.stackElements[0].cells&&e.stackElements[0].cells[0];t&&(t.filterRanges&&(t.filterRanges.forEach(function(e,t){var i=this._filters.filter(function(t){return t.fieldName===e.fieldName})[0];i.lowerValue=e.min,i.upperValue=e.max},this),this._buildRangeFilters()),this.textFilter.set("value",t.searchText||""))}},_destroyFilterWidgets:function(){this._filterWidgets&&(this._filterWidgets.forEach(function(e){e.destroy()}),this._filterWidgets.length=0),l.empty(this.filtersBlock)},destroy:function(){this._destroyFilterWidgets(),this.inherited(arguments)}})});