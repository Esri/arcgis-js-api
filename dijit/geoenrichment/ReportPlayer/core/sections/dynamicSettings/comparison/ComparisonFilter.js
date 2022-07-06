// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","../RefineFilters","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../../templates/sectionDynamicSettings/ComparisonFilter.html","dojo/i18n!esri/nls/jsapi"],(function(e,i,t,n,s,r,l){var o=e([i,t],{templateString:r,nls:l=l.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,refineFilters:null,postCreate:function(){var e=this;this.inherited(arguments),this.refineFilters=new n({hasTitle:!0,hasRangeFilters:!0,onFilterChanged:function(i){e.onComparisonFilterChanged(i)}}).placeAt(this.filtersBlock),this.own(this.refineFilters)},setFilter:function(e){this.refineFilters.setFilterRanges(e.filterRanges)},setNumAreas:function(e,i){this.refineFilters.setTitle(l.refineYourAreas,e,i)},setVisualState:function(e){this.refineFilters.setVisualState(e)},hasFiltersOn:function(){return this.refineFilters.hasFiltersOn()},isMouseOver:function(e){return s.isMouseOver(this.domNode)||this.refineFilters&&this.refineFilters.isMouseOver()},onComparisonFilterChanged:function(e){}});return o.hasFiltersOn=function(e){return n.hasFiltersOn(e)},o}));