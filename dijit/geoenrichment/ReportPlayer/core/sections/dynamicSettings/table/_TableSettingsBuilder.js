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

define(["dojo/_base/lang","dojo/aspect","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","dojo/i18n!esri/nls/jsapi"],function(e,t,n,r,i){i=i.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder;var l={};return l.provideTableSettings=function(i){if(!i.isMultiDataSection()||i.elementUsageType!==r.PAGE_PANEL_SECTION)return null;var l=i.getTables()[0];return n(l.getFilterRanges(),function(n){if(!n||!n.length)return null;var r;if(l.presetFilter){r=e.mixin({},l.presetFilter);var i=n.filter(function(e){return e.columnIndex===l.presetFilter.columnIndex})[0];i?r.fieldName=i.fieldName:r=null}var o={filter:{filter:r,filterRanges:n,getNumElementsTotal:function(){return l.getNumElementsTotal()},getNumElementsShown:function(){return l.getNumElementsShown()},onContentUpdated:function(){}}};return t.after(l,"onRendered",function(){o.filter.onContentUpdated()}),o})},l});