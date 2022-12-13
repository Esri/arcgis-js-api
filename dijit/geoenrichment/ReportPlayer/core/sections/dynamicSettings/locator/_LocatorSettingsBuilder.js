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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/aspect","esri/dijit/geoenrichment/when","../../../infographics/InfographicTypes"],(function(t,n,e){var o={provideLocatorSettings:function(o){var r=o.getInfographic();return r&&r.getType()===e.LOCATOR_TABLE?n(r.getContentInitPromise(),(function(){var e=r.getInnerInfographic();return n(e.getFilterRanges(),(function(o){return n(e.getSummaryInfos(),(function(n){var r=e.canExportToExcel(),i=n&&n.length,u=o&&o.length&&e.getNumPointsTotal(),a={hasTitle:e.hasTitle(),exportSettings:r&&{canExportToExcel:!0,exportToExcel:function(){return e.exportToExcel()}},viewSettings:i&&{summaryInfos:n},filter:u&&{filterRanges:o,getNumPointsTotal:function(){return e.getNumPointsTotal()},getNumPointsShown:function(){return e.getNumPointsShown()},onContentUpdated:function(){}}};return t.after(e,"onContentUpdated",(function(){a.filter.onContentUpdated()})),a}))}))})):null}};return o}));