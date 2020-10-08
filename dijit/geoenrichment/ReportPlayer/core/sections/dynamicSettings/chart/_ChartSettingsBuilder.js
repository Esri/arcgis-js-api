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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/aspect","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartSorting","dojo/i18n!esri/nls/jsapi"],(function(e,t,n,r,i){i=i.geoenrichment.dijit.ReportPlayer.SectionDynamicSettingsBuilder.ChartSettings;var o={provideChartSettings:function(r){var i=r.getChartJson();if(!i||i.type===n.GAUGE||i.type===n.WAFFLE)return null;var a=i&&!!i.seriesItems.length&&!i.visualProperties.noTableView,s=r.calculationStatesGroup,l=o._provideOptionsForSorting(i);return t(r.getChart().getFilterRanges(),(function(t){var n=a||l||s,o=t&&t.length;if(!n&&!o)return null;var u={viewSettings:n&&{canViewTable:a,group:s,sortingOptions:l,sorting:i.visualProperties.sorting},filter:o&&{filter:i.visualProperties.filter,filterRanges:t,isAreasFilter:r.getChart().canFilterAreas(),getNumElementsTotal:function(){return r.getChart().getNumElementsTotal()},getNumElementsShown:function(){return r.getChart().getNumElementsShown()},onContentUpdated:function(){}}};return o&&e.after(r.getChart(),"onContentUpdated",(function(){u.filter.onContentUpdated()})),u}))},_provideOptionsForSorting:function(e){return!e.isMultiFeatureChart&&1===e.seriesItems.length&&n.isSortingSupported(e.type)?[{label:i.noSorting,imageClass:"",value:r.NONE},{label:i.sortAscending,imageClass:"upButton",value:r.ASC},{label:i.sortDescending,imageClass:"downButton",value:r.DESC}]:null}};return o}));