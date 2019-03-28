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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","dojo/string","esri/graphic","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","./FeatureNameUtil","./tasks/EnrichAreasTask","./CustomReportsManager","esri/dijit/geoenrichment/utils/GeometryUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],function(e,r,t,a,n,i,s,o,u,f,l,c,m,g,y){var h={};h.preprocessAreas=function(e,r){return e.analysisAreas=e.analysisAreas.filter(function(e){return e.feature&&e.feature.geometry&&"polygon"===e.feature.geometry.type||e.geographies&&e.geographies.length||e.buffer}),-1!==r.analysisAreasLimit&&(r.analysisAreasLimit=r.analysisAreasLimit||10,e.analysisAreas.length=Math.min(e.analysisAreas.length,r.analysisAreasLimit)),e.analysisAreas.forEach(function(e){e.feature&&!e.feature.attributes&&(e.feature.attributes={})}),e.analysisAreas.forEach(function(e){if(e.name=e.name||e.shortName,!e.name&&e.feature){var r=f.guessFeatureName(e.feature);r&&(e.name=e.shortName=r)}}),r.symbolizeAreas&&p.symbolizeAreas(e.analysisAreas),t(b.generalize(e.analysisAreas),function(){return a([d.provideGeographyFeatures(e),A.provideBufferFeatures(e)])})};var p={symbolizeFeature:function(r){r.symbol||r.setSymbol(function(){var r=new s;return r.setOutline(new o(o.STYLE_SOLID,new e([105,134,68,.55]),2)),r.setColor(new e([105,134,68,.55])),r}())},symbolizeAreas:function(e){e.forEach(function(e){e.feature&&p.symbolizeFeature(e.feature)})}},b={generalize:function(e){var r=[],a=[];return e.forEach(function(e,t){!e.feature||e.geographies&&e.geographies.length||(r.push(e.feature),a.push(t))}),t(function(e){function r(e){var r=0;return e.geometry.rings.forEach(function(e){r+=e.length}),r}var a,n,s,o=m.needGeneralizeGeometry(e,g.generalization.factor,g.generalization.maxVerticesInAllFeatures,g.generalization.numVerticesPerFeature);return o&&(a=!0,n=[],e=e.map(function(e,t){return n.push(r(e)),new i(e.geometry,e.symbol,e.attributes)}),s=m.generalizeGeometry(e,o,g.generalization.numVerticesPerFeature,!0)),t(s,function(){return a&&(console.log("Generalize features:"),e.forEach(function(e,t){console.log("#"+t+" "+n[t]+" => "+r(e))})),e})}(r),function(r){a.forEach(function(t){e[t].feature=r[t]})})}},d={provideGeographyFeatures:function(e){return t(e.hierarchy||c.getCustomReportByID(e),function(t){return a(e.analysisAreas.map(function(a){if(!a.feature&&a.geographies&&a.geographies.length)return(new l).createFeatureForGeographies(a.geographies,{countryID:e.countryID,hierarchy:t&&t.hierarchy||t}).then(function(e){a.feature=e,a.name=a.name||a.feature.attributes.StdGeographyName,a.description=a.description||y.geoenrichment.dijit.ReportPlayer.ReportPlayer.geography,a.address=a.address||a.name,a.geographies[0].attributes&&r.mixin(a.feature.attributes,a.geographies[0].attributes);var t=a.geographies[0].symbol;t?(t=t.toJson?t:u.fromJson(t),a.feature.setSymbol(t)):p.symbolizeFeature(a.feature)})}))})}},A={provideBufferFeatures:function(e){var r=this;return t(e.hierarchy||c.getCustomReportByID(e),function(t){var a=e.analysisAreas.filter(function(e){return!e.feature&&e.buffer}),n=a.map(function(e){return e.buffer});return(new l).createFeaturesForBuffers(n,{countryID:e.countryID,hierarchy:t&&t.hierarchy||t}).then(function(e){e.forEach(function(e,t){var n=a[t];n.feature=e,r._applyBufferParamsToArea(n)})})})},_applyBufferParamsToArea:function(e){var t=e.buffer;if(!e.name){var a=y.geoenrichment.dijit.bufferTitle.pointRing;a[t.units]&&(e.name=n.substitute(a[t.units],{radius:t.radius}))}e.description=e.description||"Ring",t.attributes&&r.mixin(e.feature.attributes,t.attributes);var i=t.symbol;i?(i=i.toJson?i:u.fromJson(i),e.feature.setSymbol(i)):p.symbolizeFeature(e.feature)}};return h});