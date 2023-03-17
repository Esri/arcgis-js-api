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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","../RefineFilters","esri/dijit/geoenrichment/utils/MouseUtil","dojo/text!../../../templates/sectionDynamicSettings/LocatorFilter.html","dojo/i18n!esri/nls/jsapi"],(function(e,t,i,s,n,r,l){var o=e([t,i],{templateString:r,nls:l=l.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,refineFilters:null,postCreate:function(){var e=this;this.inherited(arguments),this.refineFilters=new s({hasTitle:!0,hasTextFilter:!0,hasRangeFilters:!0,hasMethodFilter:!0,onFilterChanged:function(t){e.onLocatorFilterChanged(t)}}).placeAt(this.filtersBlock),this.own(this.refineFilters)},setNumPoints:function(e,t){this.refineFilters.setTitle(l.refineYourResults,e,t)},setFilterRanges:function(e){this.refineFilters.setFilterRanges(e),this.refineFilters.setFilter(null)},setVisualState:function(e){this.refineFilters.setVisualState(e)},hasFiltersOn:function(){return this.refineFilters.hasFiltersOn()},isMouseOver:function(e){return n.isMouseOver(this.domNode)||this.refineFilters&&this.refineFilters.isMouseOver()},onLocatorFilterChanged:function(e){}});return o.hasFiltersOn=function(e){return s.hasFiltersOn(e)},o}));