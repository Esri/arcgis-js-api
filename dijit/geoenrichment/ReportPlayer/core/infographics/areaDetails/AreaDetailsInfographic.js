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

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","dojo/dom-class","../paginatableTable/PaginatableTableInfographic","./AttributesNotesSectionsBuilder","./DefaultAttachmentsStore","../../grid/coreUtils/GridStyleUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/RegExpUtil","dojo/i18n!esri/nls/jsapi"],function(t,e,i,s,n,a,o,h,r,l,u){u=u.geoenrichment.dijit.ReportPlayer.AreaDetailsInfographic;var c=t(n,{noDataText:u.noDetails,hasResizableColumns:!1,allowSorting:!1,_stats:null,postCreate:function(){this.inherited(arguments),s.add(this.domNode,"esriGEAreaDetailsInfographic")},_buildSectionJsonsAndStat:function(){return i(this._buildDataInfo(),function(t){return this._stats=t&&t.stats,t}.bind(this))},_buildDataInfo:function(){return a.buildDataInfo({attachmentsStore:this._getAttachmentsStore(),infographicJson:this._currentInfographicJson,currentFeatureIndex:this.currentFeatureIndex,titleHeight:this._getTitleHeight(),defaultCellStyle:this._getDefaultCellStyle(),minRowHeight:this.minRowHeight,scaleToFitHeight:this._currentInfographicJson.scaleToFitHeight,footerHeight:n.BOTTOM_AREA_HEIGHT,searchTextRe:this._searchTextRe,forceSinglePage:this.isEditMode,width:this.width,height:this.height})},_getAttachmentsStore:function(){return this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:o.getDefaultAttachmentsStore()},_getDefaultCellStyle:function(t){var i=this.viewModel.getDocumentDefaultStyles(this.theme);return h.filterCellStyles(e.mixin({},i,this.viewModel.getTableDefaultStyles(this.theme,"Default")))},_resizeSection:function(t){this.isEditMode&&this.inherited(arguments)},_searchText:null,_searchTextRe:null,setSearchText:function(t){this._searchText=t,this._searchTextRe=t&&l.createRegExp(t,"i",!0),r.invoke(this,"_doUpdateContent",50)},getNumItemsTotal:function(){return this._stats&&this._stats.numAttributesTotal+this._stats.numNotesTotal||0},getNumItemsShown:function(){return this._stats&&this._stats.numAttributesShown+this._stats.numNotesShown||0},getVisualState:function(){return this._searchText?{searchText:this._searchText}:null},setVisualState:function(t){t&&t.searchText&&this.setSearchText(t.searchText)},_destroySections:function(){this.inherited(arguments),this._stats=null}});return c.MIN_ROW_HEIGHT=n.MIN_ROW_HEIGHT,c});