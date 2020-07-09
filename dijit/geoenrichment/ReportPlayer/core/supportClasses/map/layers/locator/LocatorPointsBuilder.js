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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/renderers/jsonUtils","esri/symbols/jsonUtils","esri/geometry/jsonUtils","esri/dijit/PopupTemplate","./DefaultSymbolRenderer","../_HeatMapSupport","../LayerInfoLoader","../../Projector","../../symbols/HighlightedSymbolGenerator","../../../../../dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","dojo/i18n!esri/nls/jsapi"],(function(e,r,t,o,a,i,n,l,s,m,d,c,g,y,u,f,p){var b=e([a,c]);p=p.geoenrichment.dijit.ReportPlayer.ReportPlayer;var h={addLocatorPoints:function(e,a){e.locatorPointsControllers&&e.locatorPointsControllers.forEach((function(c){var g=c.getCalculatorDataArray();if(g&&g.length){var u=c.getRendererJson(e.calculatorFieldName),p=new b,_=u?n.fromJson(r.clone(u)):new i(d.getDefaultLocatorSymbol());p.setRenderer(_);var L=[],S=[],P=u?"simple"===u.type&&l.fromJson(r.clone(u.symbol)):d.getDefaultLocatorSymbol();g.forEach((function(t,a){if(t.Point||t.Polygon){var i,n,l={},d=c.getVariableObjects().map((function(e,r){var o=e.fieldName.toLowerCase();return-1!==o.indexOf("coname")&&(n=!0,i=e.fieldName),n||-1===o.indexOf("name")||(i=e.fieldName),i||0!==r||(i=e.fieldName),l[e.fieldName]=e.alias,{label:e.alias,value:t[e.fieldName]}})),g=new m({title:"",fieldInfos:[],description:f.buildAttributesTable(null,d)}),u=r.mixin({},t);delete u.Point,delete u.Polygon,u.__pointIndex=a,u.__nameField=i,u.__fieldAliases=l;var b=s.fromJson(JSON.parse(t.Point||t.Polygon)),h=new o({attributes:u});y.needProject(b,e.map)?(L.push(h),S.push(b)):(h.setGeometry(b),p.add(h)),P&&h.setSymbol(P),h.setInfoTemplate(g)}})),h._registerLayer(p,e.map,c,e),a.registerLayerInfo({layer:p,type:a.LOCATOR_POINTS,preferredIndex:c.getLayerIndex(e.calculatorFieldName),geometryType:g[0].Point?"esriGeometryPoint":"esriGeometryPolygon"}),h._provideNameForLayer(p,c,e),t(y.projectGeometries(S,e.map),(function(e){e.forEach((function(e,r){var t=L[r];t.setGeometry(e),p.add(t)}))}))}}))},_registerLayer:function(e,r,t,a){var i=t.getRendererJson(a.calculatorFieldName);u.getHighlightSymbol({rendererJson:i,defaultHighlightSymbol:d.getDefaultLocatorSymbolHighlighted(),graphicsLayer:e}).then((function(i){var n;i&&i.frameSymbol&&(n=new o).setSymbol(i.frameSymbol),t.setLocatorPointsLayer(a.calculatorFieldName,e,r,{getPointIndexForGraphicFunc:function(e){return e.attributes&&e.attributes.__pointIndex},getGraphicForPointAtFunc:function(r){var t;return e.graphics.some((function(e){if(e.attributes&&e.attributes.__pointIndex===r)return t=e,!0})),t},setGraphicHighlightedFunc:function(r,t){i&&(n&&e.remove(n),!t&&r.__isHighlighted?(r.setSymbol(r.__originalSymbol),delete r.__originalSymbol,delete r.__isHighlighted):t&&!r.__isHighlighted&&(r.__originalSymbol=r.symbol,r.__isHighlighted=!0,r.setSymbol(i.getSymbol?i.getSymbol(r):i.symbol),e.remove(r),n&&(n.setGeometry(r.geometry),e.add(n)),e.add(r)))}})}))},_provideNameForLayer:function(e,r,o){var a=r.getLayerUrl(),i=r.getLayerID(),n=r.getLayerName(o.calculatorFieldName),l=n&&{name:n};t(a?l||g.getInfo(a):l||o.geClient&&o.geClient.getLayerInfo(o.countryID,i),(function(r){e.name=r&&r.name||p.locatorLayerLegendTitle,e.onVisibilityChange()}))},getDefaultLocatorRenderer:function(){return new i(d.getDefaultLocatorSymbol())}};return h}));