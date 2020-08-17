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

define(["dojo/_base/lang","esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","dojo/string","esri/graphic","esri/symbols/jsonUtils","./FeatureNameUtil","../tasks/EnrichAreasTask","esri/dijit/geoenrichment/utils/GeometryUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],(function(e,r,t,a,n,i,s,o,u,f,c){var g={};g.preprocessAreas=function(e,a){return a=a||{},e.analysisAreas=e.analysisAreas.filter((function(e){return e.feature&&e.feature.geometry&&"polygon"===e.feature.geometry.type||e.geographies&&e.geographies.length||e.buffer})),-1!==a.analysisAreasLimit&&(a.analysisAreasLimit=a.analysisAreasLimit||20,e.analysisAreas.length=Math.min(e.analysisAreas.length,a.analysisAreasLimit)),g.provideAreasIndexes(e),e.analysisAreas.forEach((function(e){e.feature&&!e.feature.attributes&&(e.feature.attributes={})})),e.analysisAreas.forEach((function(e){if(e.name=e.name||e.shortName,!e.name&&e.feature){var r=s.guessFeatureName(e.feature);r&&(e.name=e.shortName=r)}})),r(l.generalize(e.analysisAreas),(function(){return t([p.provideGeographyFeatures(e),h.provideBufferFeatures(e)])}))},g.provideAreasIndexes=function(e){var r=e.combinedAreasInfo.groups,t=r&&r.length;e.analysisAreas.forEach((function(e,a){e.index=a,r&&(r.forEach((function(r,t){-1!==r.indexes.indexOf(a)&&(e.isGrouped=!0,e.groupIndex=t)})),"number"!=typeof e.groupIndex&&(e.isGrouped=!1,e.groupIndex=t++))}))},g.removeGroupInfo=function(e){e.forEach((function(e){delete e.isGrouped,delete e.groupIndex}))};var l={generalize:function(e){var t=[],a=[];return e.forEach((function(e,r){!e.feature||e.geographies&&e.geographies.length||(t.push(e.feature),a.push(r))})),r(function(e){function t(e){var r=0;return e.geometry.rings.forEach((function(e){r+=e.length})),r}var a,i,s,o=u.needGeneralizeGeometry(e,f.generalization.factor,f.generalization.maxVerticesInAllFeatures,f.generalization.numVerticesPerFeature);return o&&(a=!0,i=[],e=e.map((function(e){return i.push(t(e)),new n(e.geometry,e.symbol,e.attributes)})),s=u.generalizeGeometry(e,o,f.generalization.numVerticesPerFeature,!0)),r(s,(function(){return a&&(console.log("Generalize features:"),e.forEach((function(e,r){console.log("#"+r+" "+i[r]+" => "+t(e))}))),e}))}(t),(function(r){a.forEach((function(t){e[t].feature=r.shift()}))}))}},p={provideGeographyFeatures:function(r){return t(r.analysisAreas.map((function(t){if(!t.feature&&t.geographies&&t.geographies.length)return(new o).createFeatureForGeographies(t.geographies,{countryID:r.countryID,hierarchy:r.hierarchy}).then((function(r){t.feature=r,t.name=t.name||t.feature.attributes.StdGeographyName,t.description=t.description||c.geoenrichment.dijit.ReportPlayer.ReportPlayer.geography,t.address=t.address||t.name,t.geographies[0].attributes&&e.mixin(t.feature.attributes,t.geographies[0].attributes);var a=t.geographies[0].symbol;a&&(a=a.toJson?a:i.fromJson(a),t.feature.setSymbol(a))}))})))}},h={provideBufferFeatures:function(e){var r=this,t=e.analysisAreas.filter((function(e){return!e.feature&&e.buffer})),a=t.map((function(e){return e.buffer}));return(new o).createFeaturesForBuffers(a,{countryID:e.countryID}).then((function(e){e.forEach((function(e,a){var n=t[a];n.feature=e,r._applyBufferParamsToArea(n)}))}))},_applyBufferParamsToArea:function(r){var t=r.buffer;if(!r.name){var n=c.geoenrichment.dijit.bufferTitle.pointRing;n[t.units]&&(r.name=a.substitute(n[t.units],{radius:t.radius}))}r.description=r.description||"Ring",t.attributes&&e.mixin(r.feature.attributes,t.attributes);var s=t.symbol;s&&(s=s.toJson?s:i.fromJson(s),r.feature.setSymbol(s))}};return g}));
