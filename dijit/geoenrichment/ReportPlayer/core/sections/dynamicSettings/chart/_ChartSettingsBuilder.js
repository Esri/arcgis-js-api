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

define(["dojo/aspect","dojo/when","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartSorting","dojo/i18n!esri/nls/jsapi"],function(t,e,n,r,i){i=i.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder;var o={};return o.provideChartSettings=function(r){var i=r.getChartJson();if(!i||i.type===n.GAUGE)return null;var a=i&&!!i.seriesItems.length,s=r.calculationStatesGroup,u=o._provideOptionsForSorting(i);return e(r.getChart().getFilterRanges(),function(e){if(!(a||u||s||e))return null;var n={canViewTable:a,group:s,sortingOptions:u,sorting:i.visualProperties.sorting,filterRanges:e,getNumAreasTotal:function(){return r.getChart().getNumAreasTotal()},getNumAreasShown:function(){return r.getChart().getNumAreasShown()},onContentUpdated:function(){}};return t.after(r.getChart(),"onContentUpdated",function(){n.onContentUpdated()}),n})},o._provideOptionsForSorting=function(t){return!t.isMultiFeatureChart&&1===t.seriesItems.length&&n.isSortingEnabled(t.type)?[{label:i.noSorting,imageClass:"",value:r.NONE},{label:i.sortAscending,imageClass:"upButton",value:r.ASC},{label:i.sortDescending,imageClass:"downButton",value:r.DESC}]:null},o});