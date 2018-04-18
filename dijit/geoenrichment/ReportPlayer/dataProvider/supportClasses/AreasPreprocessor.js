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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/when","dojo/promise/all","esri/graphic","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/tasks/FeatureSet","./FeatureNameUtil","./tasks/EnrichAreasTask","./CustomReportsManager","esri/dijit/geoenrichment/utils/GeometryUtil"],function(e,r,a,t,n,s,i,o,u,l,f){var m={},y={symbolizeFeature:function(r){r.symbol||r.setSymbol(function(){var r=new n;return r.setOutline(new s(s.STYLE_SOLID,new e([105,134,68,.55]),2)),r.setColor(new e([105,134,68,.55])),r}())},symbolizeAreas:function(e){e.forEach(function(e){e.feature&&y.symbolizeFeature(e.feature)})}},c={generalize:function(e){var a=[],n=[];return e.forEach(function(e,r){!e.feature||e.geographies&&e.geographies.length||(a.push(e.feature),n.push(r))}),r(function(e,a){a=void 0!==a?a:0;var n,s=f.needGeneralizeGeometry(e,a>0?3*a:-3,0);return s&&(e=e.map(function(e){return new t(e.geometry,e.symbol,e.attributes)}),n=f.generalizeGeometry(e,s,0,!0)),r(n,function(){return e})}(a),function(r){n.forEach(function(a){e[a].feature=r[a]})})}},g={provideAreaFeatures:function(e){return r(l.getCustomReportByID(e),function(r){return a(e.analysisAreas.map(function(a){if(!a.feature&&a.geographies&&a.geographies.length)return(new u).createFeatureForGeographies(a.geographies,{countryID:e.countryID,hierarchy:r.hierarchy,geoenrichmentUrl:e.geoenrichmentUrl}).then(function(e){var r=new i(e[0]);a.feature=r.features[0],y.symbolizeFeature(a.feature)})}))})}};return m.preprocessAreas=function(e,a){return e.analysisAreas=e.analysisAreas.filter(function(e){return e.feature&&e.feature.geometry&&"polygon"===e.feature.geometry.type||e.geographies&&e.geographies.length}),-1!==a.analysisAreasLimit&&(a.analysisAreasLimit=a.analysisAreasLimit||10,e.analysisAreas.length=Math.min(e.analysisAreas.length,a.analysisAreasLimit)),e.analysisAreas.forEach(function(e){e.feature&&!e.feature.attributes&&(e.feature.attributes={})}),!1!==a.provideNames&&e.analysisAreas.forEach(function(e){if(e.name=e.name||e.shortName,!e.name&&e.feature){var r=o.guessFeatureName(e.feature);r&&(e.name=e.shortName=r)}}),a.symbolizeAreas&&y.symbolizeAreas(e.analysisAreas),r(!1!==a.generalize&&c.generalize(e.analysisAreas),function(){return!1!==a.provideFeaturesForGeographies&&g.provideAreaFeatures(e)})},m});