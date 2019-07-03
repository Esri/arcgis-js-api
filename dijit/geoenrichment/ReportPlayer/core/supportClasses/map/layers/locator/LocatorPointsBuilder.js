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

define(["dojo/_base/Color","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/renderers/jsonUtils","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","esri/geometry/jsonUtils","esri/dijit/PopupTemplate","../LayerInfoLoader","../../Projector","../../symbols/HighlightedSymbolGenerator","../../../../../dataProvider/supportClasses/AreasInfoTemplateBuilder","dojo/i18n!esri/nls/jsapi"],function(e,o,t,r,n,a,i,l,s,m,y,c,d,u,g,f,b){b=b.geoenrichment.dijit.ReportPlayer.ReportPlayer;var L={},h={_defaultLocatorSymbol:null,_defaultLocatorSymbolHighlighted:null,getDefaultLocatorSymbol:function(){return this._defaultLocatorSymbol||(this._defaultLocatorSymbol=new l(l.STYLE_CIRCLE,10,new s(s.STYLE_SOLID,new e([255,0,0,1]),2),new e([255,0,0,.75]))),this._defaultLocatorSymbol},getDefaultLocatorSymbolHighlighted:function(){return this._defaultLocatorSymbolHighlighted||(this._defaultLocatorSymbolHighlighted=new l(l.STYLE_CIRCLE,11,new s(s.STYLE_SOLID,new e([255,255,255,1]),2),new e([255,50,50,1]))),this._defaultLocatorSymbolHighlighted}};return L.addLocatorPoints=function(e,l){e.locatorPointsControllers&&e.locatorPointsControllers.forEach(function(s){var d=s.getCalculatorDataArray();if(d&&d.length){var g=s.getRendererJson(e.calculatorFieldName),b=new n,S=g?i.fromJson(o.clone(g)):new a(h.getDefaultLocatorSymbol());b.setRenderer(S);var p=[],_=[],P=g?m.fromJson(o.clone(g.symbol)):h.getDefaultLocatorSymbol();d.forEach(function(t,n){if(t.Point||t.Polygon){var a=s.getVariableObjects().map(function(e){return{label:e.alias,value:t[e.fieldName]}}),i=new c({title:"",fieldInfos:[],description:f.buildAttributesTable(null,a)}),l=o.mixin({},t);delete l.Point,delete l.Polygon,l.__pointIndex=n;var m=y.fromJson(JSON.parse(t.Point||t.Polygon)),d=new r({attributes:l});u.needProject(m,e.map)?(p.push(d),_.push(m)):(d.setGeometry(m),b.add(d)),d.setSymbol(P),d.setInfoTemplate(i)}}),L._registerLayer(b,e.map,s,e),l.registerLayerInfo({layer:b,type:l.LOCATOR_POINTS,preferredIndex:s.getLayerIndex(e.calculatorFieldName),geometryType:d[0].Point?"esriGeometryPoint":"esriGeometryPolygon"}),L._provideNameForLayer(b,s,e),t(u.projectGeometries(_,e.map),function(e){e.forEach(function(e,o){var t=p[o];t.setGeometry(e),b.add(t)})})}})},L._registerLayer=function(e,o,t,n){var a=t.getRendererJson(n.calculatorFieldName);g.getHighlightSymbol({rendererJson:a,defaultHighlightSymbol:h.getDefaultLocatorSymbolHighlighted()}).then(function(a){var i,l=a.symbol;a.frameSymbol&&(i=new r,i.setSymbol(a.frameSymbol)),t.setLocatorPointsLayer(n.calculatorFieldName,e,o,{getPointIndexForGraphicFunc:function(e){return e.attributes&&e.attributes.__pointIndex},getGraphicForPointAtFunc:function(o){var t;return e.graphics.some(function(e){if(e.attributes&&e.attributes.__pointIndex===o)return t=e,!0}),t},setGraphicHighlightedFunc:function(o,t){i&&e.remove(i),!t&&o.__originalSymbol?(o.setSymbol(o.__originalSymbol),delete o.__originalSymbol):t&&!o.__originalSymbol&&(o.__originalSymbol=o.symbol,o.setSymbol(l),e.remove(o),i&&(i.setGeometry(o.geometry),e.add(i)),e.add(o))}})})},L._provideNameForLayer=function(e,o,r){var n=o.getLayerUrl(),a=o.getLayerID(),i=o.getLayerName(r.calculatorFieldName),l=i&&{name:i};n?t(l||d.getInfo(n),function(o){e.name=o&&o.name||b.locatorLayerLegendTitle,e.onVisibilityChange()}):t(l||r.geClient&&r.geClient.getLayerInfo(r.countryID,a),function(o){e.name=o&&o.name||b.locatorLayerLegendTitle,e.onVisibilityChange()})},L.getDefaultLocatorRenderer=function(){return new a(h.getDefaultLocatorSymbol())},L});