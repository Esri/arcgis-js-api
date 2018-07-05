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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/when","dojo/promise/all","esri/graphic","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/tasks/FeatureSet","./FeatureNameUtil","./tasks/EnrichAreasTask","./CustomReportsManager","esri/dijit/geoenrichment/utils/GeometryUtil"],function(e,r,a,t,n,i,s,o,u,f,l){var c={},y={symbolizeFeature:function(r){r.symbol||r.setSymbol(function(){var r=new n;return r.setOutline(new i(i.STYLE_SOLID,new e([105,134,68,.55]),2)),r.setColor(new e([105,134,68,.55])),r}())},symbolizeAreas:function(e){e.forEach(function(e){e.feature&&y.symbolizeFeature(e.feature)})}},m={generalize:function(e){var a=[],n=[];return e.forEach(function(e,r){!e.feature||e.geographies&&e.geographies.length||(a.push(e.feature),n.push(r))}),r(function(e,a){a=void 0!==a?a:0;var n,i=l.needGeneralizeGeometry(e,a>0?3*a:-3,0);return i&&(e=e.map(function(e){return new t(e.geometry,e.symbol,e.attributes)}),n=l.generalizeGeometry(e,i,0,!0)),r(n,function(){return e})}(a),function(r){n.forEach(function(a){e[a].feature=r[a]})})}},h={provideGeographyFeatures:function(e){return r(f.getCustomReportByID(e),function(r){return a(e.analysisAreas.map(function(a){if(!a.feature&&a.geographies&&a.geographies.length)return(new u).createFeatureForGeographies(a.geographies,{countryID:e.countryID,hierarchy:r.hierarchy,geoenrichmentUrl:e.geoenrichmentUrl}).then(function(e){var r=new s(e[0]);a.feature=r.features[0],y.symbolizeFeature(a.feature)})}))})}},g={provideBufferFeatures:function(e){return r(f.getCustomReportByID(e),function(r){return a(e.analysisAreas.map(function(a){if(!a.feature&&a.buffer)return(new u).createFeatureForBuffer(a.buffer,{countryID:e.countryID,hierarchy:r.hierarchy,geoenrichmentUrl:e.geoenrichmentUrl}).then(function(e){var r=new s(e[0]);a.feature=r.features[0],y.symbolizeFeature(a.feature)})}))})}};return c.preprocessAreas=function(e,t){return e.analysisAreas=e.analysisAreas.filter(function(e){return e.feature&&e.feature.geometry&&"polygon"===e.feature.geometry.type||e.geographies&&e.geographies.length||e.buffer}),-1!==t.analysisAreasLimit&&(t.analysisAreasLimit=t.analysisAreasLimit||10,e.analysisAreas.length=Math.min(e.analysisAreas.length,t.analysisAreasLimit)),e.analysisAreas.forEach(function(e){e.feature&&!e.feature.attributes&&(e.feature.attributes={})}),e.analysisAreas.forEach(function(e){if(e.name=e.name||e.shortName,!e.name&&e.feature){var r=o.guessFeatureName(e.feature);r&&(e.name=e.shortName=r)}}),t.symbolizeAreas&&y.symbolizeAreas(e.analysisAreas),r(m.generalize(e.analysisAreas),function(){return a([h.provideGeographyFeatures(e),g.provideBufferFeatures(e)])})},c});