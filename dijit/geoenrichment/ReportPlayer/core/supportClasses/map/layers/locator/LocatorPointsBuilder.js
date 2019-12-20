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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/renderers/jsonUtils","esri/symbols/jsonUtils","esri/geometry/jsonUtils","esri/dijit/PopupTemplate","./DefaultSymbolRenderer","../_HeatMapSupport","../LayerInfoLoader","../../Projector","../../symbols/HighlightedSymbolGenerator","../../../../../dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","dojo/i18n!esri/nls/jsapi"],function(e,t,r,o,i,a,n,l,s,m,d,g,c,y,u,f,p){var b=e([i,g]);p=p.geoenrichment.dijit.ReportPlayer.ReportPlayer;var h={};return h.addLocatorPoints=function(e,i){e.locatorPointsControllers&&e.locatorPointsControllers.forEach(function(g){var c=g.getCalculatorDataArray();if(c&&c.length){var u=g.getRendererJson(e.calculatorFieldName),p=new b,_=u?n.fromJson(t.clone(u)):new a(d.getDefaultLocatorSymbol());p.setRenderer(_);var L=[],S=[],P=u?"simple"===u.type&&l.fromJson(t.clone(u.symbol)):d.getDefaultLocatorSymbol();c.forEach(function(r,i){if(r.Point||r.Polygon){var a=g.getVariableObjects().map(function(e){return{label:e.alias,value:r[e.fieldName]}}),n=new m({title:"",fieldInfos:[],description:f.buildAttributesTable(null,a)}),l=t.mixin({},r);delete l.Point,delete l.Polygon,l.__pointIndex=i;var d=s.fromJson(JSON.parse(r.Point||r.Polygon)),c=new o({attributes:l});y.needProject(d,e.map)?(L.push(c),S.push(d)):(c.setGeometry(d),p.add(c)),P&&c.setSymbol(P),c.setInfoTemplate(n)}}),h._registerLayer(p,e.map,g,e),i.registerLayerInfo({layer:p,type:i.LOCATOR_POINTS,preferredIndex:g.getLayerIndex(e.calculatorFieldName),geometryType:c[0].Point?"esriGeometryPoint":"esriGeometryPolygon"}),h._provideNameForLayer(p,g,e),r(y.projectGeometries(S,e.map),function(e){e.forEach(function(e,t){var r=L[t];r.setGeometry(e),p.add(r)})})}})},h._registerLayer=function(e,t,r,i){var a=r.getRendererJson(i.calculatorFieldName);u.getHighlightSymbol({rendererJson:a,defaultHighlightSymbol:d.getDefaultLocatorSymbolHighlighted(),graphicsLayer:e}).then(function(a){var n;a&&a.frameSymbol&&(n=new o,n.setSymbol(a.frameSymbol)),r.setLocatorPointsLayer(i.calculatorFieldName,e,t,{getPointIndexForGraphicFunc:function(e){return e.attributes&&e.attributes.__pointIndex},getGraphicForPointAtFunc:function(t){var r;return e.graphics.some(function(e){if(e.attributes&&e.attributes.__pointIndex===t)return r=e,!0}),r},setGraphicHighlightedFunc:function(t,r){a&&(n&&e.remove(n),!r&&t.__isHighlighted?(t.setSymbol(t.__originalSymbol),delete t.__originalSymbol,delete t.__isHighlighted):r&&!t.__isHighlighted&&(t.__originalSymbol=t.symbol,t.__isHighlighted=!0,t.setSymbol(a.getSymbol?a.getSymbol(t):a.symbol),e.remove(t),n&&(n.setGeometry(t.geometry),e.add(n)),e.add(t)))}})})},h._provideNameForLayer=function(e,t,o){var i=t.getLayerUrl(),a=t.getLayerID(),n=t.getLayerName(o.calculatorFieldName),l=n&&{name:n};i?r(l||c.getInfo(i),function(t){e.name=t&&t.name||p.locatorLayerLegendTitle,e.onVisibilityChange()}):r(l||o.geClient&&o.geClient.getLayerInfo(o.countryID,a),function(t){e.name=t&&t.name||p.locatorLayerLegendTitle,e.onVisibilityChange()})},h.getDefaultLocatorRenderer=function(){return new a(d.getDefaultLocatorSymbol())},h});