// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/Color","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/symbols/jsonUtils","./DefaultSymbolRenderer","../../Projector","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,r,o,t,n,a,l,i,s,m){var u={addAreaFeatures:function(e,r){var o=e.features.filter((function(e){return"polygon"===e.geometry.type})),t=e.features.filter((function(e){return"point"===e.geometry.type})),n=[],a=[],l={},s=new i;return o.forEach((function(o,t){var n=u._addFeaturesToNewLayer(o,!1,e,s,r,t);l[a.length]=e.featureIndexToAreaIndexMap[e.features.indexOf(o)],a.push(n)})),t.forEach((function(o,t){var a=u._addFeaturesToNewLayer(o,!0,e,s,r,t);n.push(a)})),s.project(),{pointLayers:n,polygonLayers:a,polygonLayerIndexToAreaIndex:l}},_addFeaturesToNewLayer:function(e,r,a,l,m,f){var p=new t,y=a.featureIndexToAreaIndexMap[a.features.indexOf(e)],c=a.analysisAreas[y],d=r&&(e.locationName||c.locationName)||c.name,g=new o(null,u._getSymbolForGraphic(e,y,a),e.attributes),S=e.getLayer();return g.setInfoTemplate(S&&S.infoTemplate||e.infoTemplate),!g.infoTemplate&&a.attachmentsStore&&s.buildInfoTemplateForFeature(a.attachmentsStore,g,y,d),p.name=g.infoTemplate&&g.infoTemplate.info&&g.infoTemplate.info.title||d,p.setRenderer(new n(g.symbol)),i.needProject(e.geometry,a.map)?l.addForProjection(e.geometry,a.map).then((function(e){g.setGeometry(e),p.add(g)})):(g.setGeometry(e.geometry),p.add(g)),m.registerLayerInfo({layer:p,type:r?m.AREA_FEATURE_POINTS:m.AREA_FEATURE_POLYGONS,preferredIndex:f}),p},_getSymbolForGraphic:function(o,t,n){var i,s="point"===o.geometry.type,u=o.getLayer(),f=u&&u.renderer&&u.renderer.getSymbol(o)||o.symbol;if(f)return a.fromJson(e.clone(f.toJson()));if(s)i=n.pinSymbolJson;else{var p=n.areaSymbolJsons||[],y=p[t];if(y)i=y;else if(n.areaSymbolRamp&&2===n.areaSymbolRamp.length){var c=n.analysisAreas.length-p.length,d=t-p.length;if(c<3)i=n.areaSymbolRamp[d];else{var g=e.clone(n.areaSymbolRamp[0]),S=n.areaSymbolRamp.map((function(e){return e.color})).filter((function(e){return!!e})),h=n.areaSymbolRamp.map((function(e){return e.outline&&e.outline.color})).filter((function(e){return!!e})),b=function(e,o){var t=e[3];return(e=r.toJsonColor(m.toColor(m.generateGradient(o.map((function(e){return r.toDojoColor(e)})),c)[d])))[3]=t,e};S.length===n.areaSymbolRamp.length&&(g.color=b(g.color,S)),h.length===n.areaSymbolRamp.length&&(g.outline.color=b(g.outline.color,h)),i=g}}}return i?a.fromJson(e.clone(i)):s?l.generateSMS():l.generateSFS()}};return u}));