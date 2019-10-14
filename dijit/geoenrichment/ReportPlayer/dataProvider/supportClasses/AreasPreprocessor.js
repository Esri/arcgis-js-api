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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","dojo/string","esri/graphic","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","./FeatureNameUtil","./tasks/EnrichAreasTask","esri/dijit/geoenrichment/utils/GeometryUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],function(e,r,t,a,n,i,s,o,u,f,l,m,c,g){var y={};y.preprocessAreas=function(e,r){return e.analysisAreas=e.analysisAreas.filter(function(e){return e.feature&&e.feature.geometry&&"polygon"===e.feature.geometry.type||e.geographies&&e.geographies.length||e.buffer}),-1!==r.analysisAreasLimit&&(r.analysisAreasLimit=r.analysisAreasLimit||10,e.analysisAreas.length=Math.min(e.analysisAreas.length,r.analysisAreasLimit)),e.analysisAreas.forEach(function(e){e.feature&&!e.feature.attributes&&(e.feature.attributes={})}),e.analysisAreas.forEach(function(e){if(e.name=e.name||e.shortName,!e.name&&e.feature){var r=f.guessFeatureName(e.feature);r&&(e.name=e.shortName=r)}}),r.symbolizeAreas&&h.symbolizeAreas(e.analysisAreas),t(p.generalize(e.analysisAreas),function(){return a([b.provideGeographyFeatures(e),d.provideBufferFeatures(e)])})};var h={symbolizeFeature:function(r){r.symbol||r.setSymbol(function(){var r=new s;return r.setOutline(new o(o.STYLE_SOLID,new e([105,134,68,.55]),2)),r.setColor(new e([105,134,68,.55])),r}())},symbolizeAreas:function(e){e.forEach(function(e){e.feature&&h.symbolizeFeature(e.feature)})}},p={generalize:function(e){var r=[],a=[];return e.forEach(function(e,t){!e.feature||e.geographies&&e.geographies.length||(r.push(e.feature),a.push(t))}),t(function(e){function r(e){var r=0;return e.geometry.rings.forEach(function(e){r+=e.length}),r}var a,n,s,o=m.needGeneralizeGeometry(e,c.generalization.factor,c.generalization.maxVerticesInAllFeatures,c.generalization.numVerticesPerFeature);return o&&(a=!0,n=[],e=e.map(function(e,t){return n.push(r(e)),new i(e.geometry,e.symbol,e.attributes)}),s=m.generalizeGeometry(e,o,c.generalization.numVerticesPerFeature,!0)),t(s,function(){return a&&(console.log("Generalize features:"),e.forEach(function(e,t){console.log("#"+t+" "+n[t]+" => "+r(e))})),e})}(r),function(r){a.forEach(function(t){e[t].feature=r[t]})})}},b={provideGeographyFeatures:function(e){return a(e.analysisAreas.map(function(t){if(!t.feature&&t.geographies&&t.geographies.length)return(new l).createFeatureForGeographies(t.geographies,{countryID:e.countryID,hierarchy:e.hierarchy}).then(function(e){t.feature=e,t.name=t.name||t.feature.attributes.StdGeographyName,t.description=t.description||g.geoenrichment.dijit.ReportPlayer.ReportPlayer.geography,t.address=t.address||t.name,t.geographies[0].attributes&&r.mixin(t.feature.attributes,t.geographies[0].attributes);var a=t.geographies[0].symbol;a?(a=a.toJson?a:u.fromJson(a),t.feature.setSymbol(a)):h.symbolizeFeature(t.feature)})}))}},d={provideBufferFeatures:function(e){var r=this,t=e.analysisAreas.filter(function(e){return!e.feature&&e.buffer}),a=t.map(function(e){return e.buffer});return(new l).createFeaturesForBuffers(a,{countryID:e.countryID}).then(function(e){e.forEach(function(e,a){var n=t[a];n.feature=e,r._applyBufferParamsToArea(n)})})},_applyBufferParamsToArea:function(e){var t=e.buffer;if(!e.name){var a=g.geoenrichment.dijit.bufferTitle.pointRing;a[t.units]&&(e.name=n.substitute(a[t.units],{radius:t.radius}))}e.description=e.description||"Ring",t.attributes&&r.mixin(e.feature.attributes,t.attributes);var i=t.symbol;i?(i=i.toJson?i:u.fromJson(i),e.feature.setSymbol(i)):h.symbolizeFeature(e.feature)}};return y});