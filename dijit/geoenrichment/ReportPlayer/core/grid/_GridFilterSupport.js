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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-construct","./coreUtils/GridFilterUtil","../sections/dynamicSettings/supportClasses/FilterUtil","dojo/i18n!esri/nls/jsapi"],function(t,e,i,s,n){return n=n.geoenrichment.dijit.ReportPlayer.Grid,t(null,{presetFilter:null,ignorePresetFilter:!1,_filterStats:null,_filterRanges:null,_numShownElements:null,_emptyDiv:null,_applyFilterToStoreData:function(){if(!this.ignorePresetFilter){var t=this._getSetRanges();if(this._emptyDiv&&e.destroy(this._emptyDiv),this._emptyDiv=null,this.mainNode.style.display="",t&&t.length){var s=i.filterGridData(this,t);this._numShownElements=s.numRowsShown,this._numShownElements||(this._emptyDiv=e.create("div",{class:"esriGEAbsoluteStretched esriGENoDataPlaceHolder"},this.domNode),e.create("div",{class:"esriGENoDataPlaceHolderLabel",innerHTML:n.noTableData},this._emptyDiv),this.mainNode.style.display="none",this._emptyDiv.style.paddingTop=(this.getHeight(!1,!1)-20)/2+"px")}}},_getSetRanges:function(){if(!this.presetFilter||this.presetFilter.ranges&&!this.viewModel.dynamicReportInfo)return this._filterRanges;var t=this.getFilterRanges();return this._filterRanges=t&&t.map(function(e,i){var n=s.filterData(e.dataArray,1===t.length||this.presetFilter.columnIndex===i?this.presetFilter:{method:s.NONE});return{fieldName:e.fieldName,min:n[0],max:n[n.length-1]}},this)},getFilterRanges:function(){return this._filterStats=i.collectStatsForVariables(this),this._filterStats&&this._filterStats.filterRanges.length?this._filterStats.filterRanges:null},setFilterRanges:function(t){return this.presetFilter=null,this._filterRanges=t,this.refresh()},getNumElementsTotal:function(){return this._filterStats&&this._filterStats.numRowsTotal||0},getNumElementsShown:function(){return"number"==typeof this._numShownElements?this._numShownElements:this.getNumElementsTotal()}})});