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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/aspect","esri/dijit/geoenrichment/when","../../../infographics/InfographicTypes"],(function(t,e,n){var r={provideComparisonSettings:function(r){var i=r.getInfographic();return i&&i.getType()===n.COMPARISON_TABLE?e(i.getContentInitPromise(),(function(){var n=i.getInnerInfographic();return e(n.getFilterRanges(),(function(e){var r=n.getNumAreasTotal()>1&&e&&e.length,i={viewSettings:{chartViewOptions:n.getChartViewOptions()},filter:r&&{filterRanges:e,getNumAreasTotal:function(){return n.getNumAreasTotal()},getNumAreasShown:function(){return n.getNumAreasShown()},onContentUpdated:function(){}}};return r&&t.after(n,"onContentUpdated",(function(){i.filter.onContentUpdated()})),i}))})):null}};return r}));