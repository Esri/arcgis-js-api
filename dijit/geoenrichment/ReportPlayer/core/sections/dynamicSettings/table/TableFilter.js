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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","../RefineFilters","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../../templates/sectionDynamicSettings/TableFilter.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,s,n,r,l){var a=e([t,i],{templateString:r,nls:l=l.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,refineFilters:null,setSettings:function(e){this.refineFilters||this._createFilterControls(),this.refineFilters.setFilterRanges(e.filterRanges),this.refineFilters.setFilter(e.filter)},_createFilterControls:function(){var e=this;this.refineFilters=new s({hasTitle:!0,hasRangeFilters:!0,hasMethodFilter:!0,selectRangePlaceholder:l.selectColumn,onFilterChanged:function(t){e.onFilterRangesChanged(t)}}).placeAt(this.filtersBlock),this.own(this.refineFilters)},setNumElements:function(e,t){this.refineFilters&&this.refineFilters.setTitle(l.refineVariablesInTable,e,t)},setVisualState:function(e){this.refineFilters.setVisualState(e)},hasFiltersOn:function(){return this.refineFilters.hasFiltersOn()},isMouseOver:function(e){return n.isMouseOver(this.domNode)||this.refineFilters&&this.refineFilters.isMouseOver()},onFilterRangesChanged:function(e){}});return a.hasFiltersOn=function(e){return s.hasFiltersOn(e)},a}));