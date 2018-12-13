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

define(["dojo/aspect","dojo/when","../../../infographics/InfographicTypes"],function(n,t,e){var o={};return o.provideLocatorSettings=function(o){var r=o.getInfographic();return r&&r.getType()===e.LOCATOR_TABLE?t(r.getContentInitPromise(),function(){var e=r.getInnerInfographic();return t(e.getFilterRanges(),function(t){if(!(t&&t.length||e.getNumPointsTotal()))return null;var o={filterRanges:t,canExportToExcel:e.canExportToExcel(),hasTitle:e.hasTitle(),getNumPointsTotal:function(){return e.getNumPointsTotal()},getNumPointsShown:function(){return e.getNumPointsShown()},exportToExcel:function(){return e.exportToExcel()},onContentUpdated:function(){}};return n.after(e,"onContentUpdated",function(){o.onContentUpdated()}),o})}):null},o});