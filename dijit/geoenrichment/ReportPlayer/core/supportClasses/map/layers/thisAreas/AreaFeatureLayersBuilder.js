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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/Color","esri/graphic","esri/layers/GraphicsLayer","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleFillSymbol","esri/symbols/SimpleLineSymbol","esri/renderers/SimpleRenderer","../../Projector","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/AreasInfoTemplateBuilder"],function(e,r,t,n,o,a,i,s,l){var m={};return m.addAreaFeatures=function(e,r){var t=e.features.filter(function(e){return"polygon"===e.geometry.type}),n=e.features.filter(function(e){return"point"===e.geometry.type}),o=[],a=[],i={},l=new s;return t.forEach(function(t,n){var o=m._addFeaturesToNewLayer(t,!1,e,l,r,n);i[a.length]=e.featureIndexToAreaIndexMap[e.features.indexOf(t)],a.push(o)}),n.forEach(function(t,n){var a=m._addFeaturesToNewLayer(t,!0,e,l,r,n);o.push(a)}),l.project(),{pointLayers:o,polygonLayers:a,polygonLayerIndexToAreaIndex:i}},m._addFeaturesToNewLayer=function(e,n,o,a,y,p){var u=new t,d=new r(null,m._getSymbolForGraphic(e),e.attributes),f=e.getLayer();d.setInfoTemplate(f&&f.infoTemplate||e.infoTemplate);var c=o.featureIndexToAreaIndexMap[o.features.indexOf(e)],T=o.analysisAreas[c],S=n&&(e.locationName||T.locationName)||T.name;return!d.infoTemplate&&o.attachmentsStore&&l.buildInfoTemplateForFeature(o.attachmentsStore,d,c,S),u.name=d.infoTemplate&&d.infoTemplate.info&&d.infoTemplate.info.title||S,u.setRenderer(new i(d.symbol)),s.needProject(e.geometry,o.map)?a.addForProjection(e.geometry,o.map).then(function(e){d.setGeometry(e),u.add(d)}):(d.setGeometry(e.geometry),u.add(d)),y.registerLayerInfo({layer:u,type:n?y.AREA_FEATURE_POINTS:y.AREA_FEATURE_POLYGONS,preferredIndex:p}),u},m._getSymbolForGraphic=function(r){var t=r.getLayer();return t&&t.renderer&&t.renderer.getSymbol(r)||r.symbol||("point"===r.geometry.type?function(){return new n(n.STYLE_CIRCLE,20,new a(a.STYLE_SOLID,new e([255,255,255,.7]),2),new e([255,0,0,.7]))}():function(){var r=new o;return r.setOutline(new a(a.STYLE_SOLID,new e([255,0,0,1]),2)),r.setColor(new e([100,100,100,.25])),r}())},m});