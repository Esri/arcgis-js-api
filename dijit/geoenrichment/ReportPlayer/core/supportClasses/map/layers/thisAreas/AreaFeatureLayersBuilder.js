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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/Color","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/symbols/jsonUtils","./DefaultSymbolRenderer","../../Projector","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,r,o,t,a,n,l,i,s,m){var u={};return u.addAreaFeatures=function(e,r){var o=e.features.filter(function(e){return"polygon"===e.geometry.type}),t=e.features.filter(function(e){return"point"===e.geometry.type}),a=[],n=[],l={},s=new i;return o.forEach(function(o,t){var a=u._addFeaturesToNewLayer(o,!1,e,s,r,t);l[n.length]=e.featureIndexToAreaIndexMap[e.features.indexOf(o)],n.push(a)}),t.forEach(function(o,t){var n=u._addFeaturesToNewLayer(o,!0,e,s,r,t);a.push(n)}),s.project(),{pointLayers:a,polygonLayers:n,polygonLayerIndexToAreaIndex:l}},u._addFeaturesToNewLayer=function(e,r,n,l,m,f){var p=new t,y=n.featureIndexToAreaIndexMap[n.features.indexOf(e)],d=n.analysisAreas[y],c=r&&(e.locationName||d.locationName)||d.name,g=new o(null,u._getSymbolForGraphic(e,y,n),e.attributes),S=e.getLayer();return g.setInfoTemplate(S&&S.infoTemplate||e.infoTemplate),!g.infoTemplate&&n.attachmentsStore&&s.buildInfoTemplateForFeature(n.attachmentsStore,g,y,c),p.name=g.infoTemplate&&g.infoTemplate.info&&g.infoTemplate.info.title||c,p.setRenderer(new a(g.symbol)),i.needProject(e.geometry,n.map)?l.addForProjection(e.geometry,n.map).then(function(e){g.setGeometry(e),p.add(g)}):(g.setGeometry(e.geometry),p.add(g)),m.registerLayerInfo({layer:p,type:r?m.AREA_FEATURE_POINTS:m.AREA_FEATURE_POLYGONS,preferredIndex:f}),p},u._getSymbolForGraphic=function(o,t,a){function i(e,o){var t=e[3];return e=r.toJsonColor(m.toColor(m.generateGradient(o.map(function(e){return r.toDojoColor(e)}),c)[g])),e[3]=t,e}var s="point"===o.geometry.type,u=o.getLayer(),f=u&&u.renderer&&u.renderer.getSymbol(o)||o.symbol;if(f)return f;var p;if(s)p=a.pinSymbolJson;else{var y=a.areaSymbolJsons||[],d=y[t];if(d)p=d;else if(a.areaSymbolRamp&&2===a.areaSymbolRamp.length){var c=a.analysisAreas.length-y.length,g=t-y.length;if(c<3)p=a.areaSymbolRamp[g];else{var S=e.clone(a.areaSymbolRamp[0]),h=a.areaSymbolRamp.map(function(e){return e.color}).filter(function(e){return!!e}),b=a.areaSymbolRamp.map(function(e){return e.outline&&e.outline.color}).filter(function(e){return!!e});h.length===a.areaSymbolRamp.length&&(S.color=i(S.color,h)),b.length===a.areaSymbolRamp.length&&(S.outline.color=i(S.outline.color,b)),p=S}}}return p?n.fromJson(e.clone(p)):f||(o?l.generateSMS():l.generateSFS())},u});