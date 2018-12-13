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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","../RefineFilters","esri/dijit/geoenrichment/utils/DomUtil","dojo/text!../../../templates/sectionDynamicSettings/DynamicInfographicSettings.html","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,s,l,r){return r=r.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,e([t,i],{templateString:l,nls:r,postCreate:function(){var e=this;this.inherited(arguments),this.refineFilters=new n({hasTitle:!0,hasRangeFilters:!0,onFilterChanged:function(t){e.onDynamicInfographicFilterChanged(t)}}).placeAt(this.filtersBlock),this.own(this.refineFilters)},setSettings:function(e){e.filterRanges?(s.show(this.filtersBlock),this.refineFilters.setFilterRanges(e.filterRanges)):s.hide(this.filtersBlock)},setNumAreas:function(e,t){this.refineFilters.setTitle(r.refineGeographies,e,t)},setVisualState:function(e){var t=e&&e.stackElements[0]&&e.stackElements[0].cells&&e.stackElements[0].cells[0];t&&this.refineFilters.setVisualState(t)},onDynamicInfographicFilterChanged:function(e){}})});