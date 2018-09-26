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

define(["dojo/_base/Color","dojo/_base/lang","dojo/when","dojo/promise/all","dojo/string","esri/graphic","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","esri/tasks/FeatureSet","./FeatureNameUtil","./tasks/EnrichAreasTask","./CustomReportsManager","esri/dijit/geoenrichment/utils/GeometryUtil","esri/dijit/geoenrichment/ReportPlayer/config","dojo/i18n!esri/nls/jsapi"],function(e,r,t,a,n,i,s,o,u,f,l,m,c,g,y,h){var p={};p.preprocessAreas=function(e,r){return e.analysisAreas=e.analysisAreas.filter(function(e){return e.feature&&e.feature.geometry&&"polygon"===e.feature.geometry.type||e.geographies&&e.geographies.length||e.buffer}),-1!==r.analysisAreasLimit&&(r.analysisAreasLimit=r.analysisAreasLimit||10,e.analysisAreas.length=Math.min(e.analysisAreas.length,r.analysisAreasLimit)),e.analysisAreas.forEach(function(e){e.feature&&!e.feature.attributes&&(e.feature.attributes={})}),e.analysisAreas.forEach(function(e){if(e.name=e.name||e.shortName,!e.name&&e.feature){var r=l.guessFeatureName(e.feature);r&&(e.name=e.shortName=r)}}),r.symbolizeAreas&&b.symbolizeAreas(e.analysisAreas),t(d.generalize(e.analysisAreas),function(){return a([A.provideGeographyFeatures(e),F.provideBufferFeatures(e)])})};var b={symbolizeFeature:function(r){r.symbol||r.setSymbol(function(){var r=new s;return r.setOutline(new o(o.STYLE_SOLID,new e([105,134,68,.55]),2)),r.setColor(new e([105,134,68,.55])),r}())},symbolizeAreas:function(e){e.forEach(function(e){e.feature&&b.symbolizeFeature(e.feature)})}},d={generalize:function(e){var r=[],a=[];return e.forEach(function(e,t){!e.feature||e.geographies&&e.geographies.length||(r.push(e.feature),a.push(t))}),t(function(e){function r(e){var r=0;return e.geometry.rings.forEach(function(e){r+=e.length}),r}var a,n,s,o=g.needGeneralizeGeometry(e,y.generalization.factor,y.generalization.maxVerticesInAllFeatures,y.generalization.numVerticesPerFeature);return o&&(a=!0,n=[],e=e.map(function(e,t){return n.push(r(e)),new i(e.geometry,e.symbol,e.attributes)}),s=g.generalizeGeometry(e,o,y.generalization.numVerticesPerFeature,!0)),t(s,function(){return a&&(console.log("Generalize features:"),e.forEach(function(e,t){console.log("#"+t+" "+n[t]+" => "+r(e))})),e})}(r),function(r){a.forEach(function(t){e[t].feature=r[t]})})}},A={provideGeographyFeatures:function(e){return t(c.getCustomReportByID(e),function(t){return a(e.analysisAreas.map(function(a){if(!a.feature&&a.geographies&&a.geographies.length)return(new m).createFeatureForGeographies(a.geographies,{countryID:e.countryID,hierarchy:t.hierarchy}).then(function(e){var t=new f(e[0]);a.feature=t.features[0],a.name=a.name||a.feature.attributes.StdGeographyName,a.description=a.description||"Geography",a.address=a.address||a.name,a.geographies[0].attributes&&r.mixin(a.feature.attributes,a.geographies[0].attributes);var n=a.geographies[0].symbol;n?(n=n.toJson?n:u.fromJson(n),a.feature.setSymbol(n)):b.symbolizeFeature(a.feature)})}))})}},F={provideBufferFeatures:function(e){return t(c.getCustomReportByID(e),function(t){return a(e.analysisAreas.map(function(a){if(!a.feature&&a.buffer){var i=a.buffer;return(new m).createFeatureForBuffer(i,{countryID:e.countryID,hierarchy:t.hierarchy}).then(function(e){var t=new f(e[0]);if(a.feature=t.features[0],!a.name){var s=h.geoenrichment.dijit.bufferTitle.pointRing;s[i.units]&&(a.name=n.substitute(s[i.units],{radius:i.radius}))}a.description=a.description||"Ring",i.attributes&&r.mixin(a.feature.attributes,i.attributes);var o=i.symbol;o?(o=o.toJson?o:u.fromJson(o),a.feature.setSymbol(o)):b.symbolizeFeature(a.feature)})}}))})}};return p});