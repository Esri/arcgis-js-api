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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/string","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/TextBox","esri/dijit/geoenrichment/NumericalSlider","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/text!../../templates/sectionDynamicSettings/RefineFilters.html","dojo/i18n!esri/nls/jsapi"],function(e,t,i,l,s,r,n,a,o,u,h,d,c){return c=c.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,e([s,r],{templateString:d,nls:c,hasTitle:!1,hasTextFilter:!1,hasRangeFilters:!1,textFilterPlaceHolder:null,_originalFilterRanges:null,_filters:null,textFilter:null,_filterWidgets:null,postCreate:function(){var e=this;this.inherited(arguments),this._buildKeywordFilter(),t(this.resetButton,"click",function(){e._resetFilters()}),o[this.hasTitle?"show":"hide"](this.refineResultsTitleBlock),o[this.hasTextFilter?"show":"hide"](this.textFilterBlock),o[this.hasRangeFilters?"show":"hide"](this.filtersBlock),this.setTitleInfo(null)},_resetFilters:function(e){this.textFilter.set("value",""),this._buildFiltersFromOriginals(),this._buildRangeFilters(),!e&&this._doEmitEvent()},setTitle:function(e,t,l){this.refineResultsTitle.innerHTML=i.substitute(e,{numTotal:t||0,numShown:l||0})},setTitleInfo:function(e){h.setTooltipToNode(this.titleInfoIcon,e),o[e?"show":"hide"](this.titleInfoIcon)},setFilterRanges:function(e){this._originalFilterRanges=e||[],this._buildFiltersFromOriginals(),this._buildRangeFilters()},_buildFiltersFromOriginals:function(){this._filters=this._originalFilterRanges?this._originalFilterRanges.map(function(e){return{label:e.alias,fieldName:e.fieldName,minValue:e.min,maxValue:e.max,lowerValue:e.min,upperValue:e.max,decimals:e.decimals,dataArray:e.dataArray}}):[]},_buildKeywordFilter:function(){this.textFilter=new n({class:"sectionDynamicRefineFilters_textFilter",trim:!0,placeHolder:this.textFilterPlaceHolder||c.keywordsPlaceholder}).placeAt(this.textFilterDiv),t(this.textFilter.textbox,"keyup",this._emitEvent.bind(this)),this.own(this.textFilter)},_buildRangeFilters:function(){var e=this;this._destroyFilterWidgets(),this._filterWidgets=[],this._filters.forEach(function(t){var i=l.create("div",{class:"esriGERowHigh sectionDynamicRefineFilters_row"},e.filtersBlock),s=new a({label:t.label,minValue:t.minValue,maxValue:t.maxValue,lowerValue:t.lowerValue,upperValue:t.upperValue,decimals:t.decimals,timeIntervalLength:250,onChange:function(i){t.lowerValue=s.round(i.lowerValue),t.upperValue=s.round(i.upperValue),e._emitEvent()}}).placeAt(i);s.startup(),setTimeout(function(){t.dataArray&&s.domNode&&s.setStatistics(t.dataArray)},100),e._filterWidgets.push(s)})},_emitEvent:function(){u.invoke(this,"_doEmitEvent",100)},_doEmitEvent:function(){this.onFilterChanged({searchText:this.textFilter.get("value"),filterRanges:this._filters&&this._filters.map(function(e){return{fieldName:e.fieldName,min:e.lowerValue,max:e.upperValue}}),hasFiltersOn:this.hasFiltersOn()})},onFilterChanged:function(e){},hasFiltersOn:function(){return!!(this.textFilter.get("value")||this._filters&&this._filters.some(function(e){return e.lowerValue>e.minValue||e.upperValue<e.maxValue}))},setVisualState:function(e){e?(e.filterRanges&&(e.filterRanges.forEach(function(e,t){var i=this._filters.filter(function(t){return t.fieldName===e.fieldName})[0];i.lowerValue=e.min,i.upperValue=e.max},this),this._buildRangeFilters()),this.textFilter.set("value",e.searchText||"")):this._resetFilters(!0)},_destroyFilterWidgets:function(){this._filterWidgets&&(this._filterWidgets.forEach(function(e){e.destroy()}),this._filterWidgets.length=0),l.empty(this.filtersBlock)},destroy:function(){this._destroyFilterWidgets(),this.inherited(arguments)}})});