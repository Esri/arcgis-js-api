// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","./areaDetails/_AreaDetailsSettingsBuilder","./chart/_ChartSettingsBuilder","./comparison/_ComparisonSettingsBuilder","./dynamicInfographic/_DynamicInfographicSettingsBuilder","./locator/_LocatorSettingsBuilder","./map/_MapSettingsBuilder","./multiFeature/_MultiFeatureSettingsBuilder","./table/_TableSettingsBuilder"],(function(t,e,i,n,r,a,s,o,g,S){var l={getSettingsSet:function(l){return e(l.getRenderPromise(),(function(){return t({areaDetailsSettings:i.provideAreaDetailsSettings(l),chartSettings:n.provideChartSettings(l),comparisonSettings:r.provideComparisonSettings(l),dynamicInfographicSettings:a.provideDynamicInfogarphicSettings(l),locatorSettings:s.provideLocatorSettings(l),mapSettings:o.provideMapSettings(l),multiFeatureSettings:g.provideMultiFeatureSettings(l),tableSettings:S.provideTableSettings(l)}).then((function(t){return Object.keys(t).forEach((function(e){var i=t[e];i&&(i.exportSettings&&(t.hasExport=!0),i.viewSettings&&(t.hasViewSettings=!0),i.filter&&(t.hasFilter=!0))})),t.hasExport||t.hasViewSettings||t.hasFilter||t.multiFeatureSettings?t:null}))}))}};return l}));
