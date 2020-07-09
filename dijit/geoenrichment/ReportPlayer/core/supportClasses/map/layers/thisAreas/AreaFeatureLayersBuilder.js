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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/Color","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/symbols/jsonUtils","./DefaultSymbolRenderer","../../Projector","esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],(function(e,r,o,t,a,n,l,i,s,m){var u={addAreaFeatures:function(e,r){var o=e.features.filter((function(e){return"polygon"===e.geometry.type})),t=e.features.filter((function(e){return"point"===e.geometry.type})),a=[],n=[],l={},s=new i;return o.forEach((function(o,t){var a=u._addFeaturesToNewLayer(o,!1,e,s,r,t);l[n.length]=e.featureIndexToAreaIndexMap[e.features.indexOf(o)],n.push(a)})),t.forEach((function(o,t){var n=u._addFeaturesToNewLayer(o,!0,e,s,r,t);a.push(n)})),s.project(),{pointLayers:a,polygonLayers:n,polygonLayerIndexToAreaIndex:l}},_addFeaturesToNewLayer:function(e,r,n,l,m,f){var p=new t,y=n.featureIndexToAreaIndexMap[n.features.indexOf(e)],d=n.analysisAreas[y],c=r&&(e.locationName||d.locationName)||d.name,g=new o(null,u._getSymbolForGraphic(e,y,n),e.attributes),S=e.getLayer();return g.setInfoTemplate(S&&S.infoTemplate||e.infoTemplate),!g.infoTemplate&&n.attachmentsStore&&s.buildInfoTemplateForFeature(n.attachmentsStore,g,y,c),p.name=g.infoTemplate&&g.infoTemplate.info&&g.infoTemplate.info.title||c,p.setRenderer(new a(g.symbol)),i.needProject(e.geometry,n.map)?l.addForProjection(e.geometry,n.map).then((function(e){g.setGeometry(e),p.add(g)})):(g.setGeometry(e.geometry),p.add(g)),m.registerLayerInfo({layer:p,type:r?m.AREA_FEATURE_POINTS:m.AREA_FEATURE_POLYGONS,preferredIndex:f}),p},_getSymbolForGraphic:function(o,t,a){var i,s="point"===o.geometry.type,u=o.getLayer(),f=u&&u.renderer&&u.renderer.getSymbol(o)||o.symbol;if(f)return f;if(s)i=a.pinSymbolJson;else{var p=a.areaSymbolJsons||[],y=p[t];if(y)i=y;else if(a.areaSymbolRamp&&2===a.areaSymbolRamp.length){var d=a.analysisAreas.length-p.length,c=t-p.length;if(d<3)i=a.areaSymbolRamp[c];else{var g=e.clone(a.areaSymbolRamp[0]),S=a.areaSymbolRamp.map((function(e){return e.color})).filter((function(e){return!!e})),h=a.areaSymbolRamp.map((function(e){return e.outline&&e.outline.color})).filter((function(e){return!!e}));function b(e,o){var t=e[3];return(e=r.toJsonColor(m.toColor(m.generateGradient(o.map((function(e){return r.toDojoColor(e)})),d)[c])))[3]=t,e}S.length===a.areaSymbolRamp.length&&(g.color=b(g.color,S)),h.length===a.areaSymbolRamp.length&&(g.outline.color=b(g.outline.color,h)),i=g}}}return i?n.fromJson(e.clone(i)):f||(o?l.generateSMS():l.generateSFS())}};return u}));