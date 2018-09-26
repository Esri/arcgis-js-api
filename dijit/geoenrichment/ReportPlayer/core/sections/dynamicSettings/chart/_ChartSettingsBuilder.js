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

define(["esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartSorting","dojo/i18n!esri/nls/jsapi"],function(e,t,r){r=r.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder;var i={};return i.provideChartSettings=function(t){var r=t.getChartJson();if(!r||r.type===e.GAUGE)return null;var n=r&&!!r.seriesItems.length,o=t.calculationStatesGroup,s=i._provideOptionsForSorting(r);return n||s||o?{canViewTable:n,group:o,sortingOptions:s,sorting:r.visualProperties.sorting}:null},i._provideOptionsForSorting=function(i){return!i.isMultiFeatureChart&&1===i.seriesItems.length&&e.isSortingEnabled(i.type)?[{label:r.noSorting,imageClass:"",value:t.NONE},{label:r.sortAscending,imageClass:"upButton",value:t.ASC},{label:r.sortDescending,imageClass:"downButton",value:t.DESC}]:null},i});