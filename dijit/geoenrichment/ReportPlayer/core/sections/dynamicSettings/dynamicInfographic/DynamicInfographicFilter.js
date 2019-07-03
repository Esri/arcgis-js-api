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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","../RefineFilters","dojo/text!../../../templates/sectionDynamicSettings/DynamicInfographicFilter.html","dojo/i18n!esri/nls/jsapi"],function(e,i,t,n,s,r){return r=r.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,e([i,t],{templateString:s,nls:r,refineFilters:null,postCreate:function(){var e=this;this.inherited(arguments),this.refineFilters=new n({hasTitle:!0,hasRangeFilters:!0,onFilterChanged:function(i){e.onDynamicInfographicFilterChanged(i)}}).placeAt(this.filtersBlock),this.own(this.refineFilters)},setFilter:function(e){this.refineFilters.setFilterRanges(e.filterRanges)},setNumAreas:function(e,i){this.refineFilters.setTitle(r.refineGeographies,e,i)},setVisualState:function(e){this.refineFilters.setVisualState(e)},hasFiltersOn:function(){return this.refineFilters.hasFiltersOn()},onDynamicInfographicFilterChanged:function(e){}})});