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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","../RefineFilters","dojo/text!../../../templates/sectionDynamicSettings/ChartFilter.html","dojo/i18n!esri/nls/jsapi"],function(e,i,t,s,n,r){return r=r.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder,e([i,t],{templateString:n,refineFilters:null,_isAreasFilter:!1,setSettings:function(e){var i=this;this._isAreasFilter=e.isAreasFilter,this.refineFilters||(this.refineFilters=new s({hasTitle:!0,hasRangeFilters:!0,onFilterChanged:function(e){i.onFilterRangesChanged(e)}}).placeAt(this.filtersBlock),this.own(this.refineFilters)),this.refineFilters.setFilterRanges(e.filterRanges)},setNumElements:function(e,i){this.refineFilters&&(this.refineFilters.setTitle(this._isAreasFilter?r.refineYourAreas:r.refineVariables,e,i),this.refineFilters.setTitleInfo(this._isAreasFilter?null:r.sliderShowsValuesAcrossVariables))},onFilterRangesChanged:function(e){},setVisualState:function(e){var i=e&&e.stackElements[0]&&e.stackElements[0].cells&&e.stackElements[0].cells[0];i&&i.filterRanges&&this.refineFilters.setVisualState(i)}})});