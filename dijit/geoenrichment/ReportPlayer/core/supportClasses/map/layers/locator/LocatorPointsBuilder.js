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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/renderers/jsonUtils","esri/symbols/jsonUtils","esri/geometry/jsonUtils","esri/dijit/PopupTemplate","esri/dijit/geoenrichment/ReportPlayer/config","./DefaultSymbolRenderer","../_HeatMapSupport","../LayerInfoLoader","../../Projector","../../symbols/HighlightedSymbolGenerator","../../../../../dataProvider/supportClasses/areas/AreasInfoTemplateBuilder","dojo/i18n!esri/nls/jsapi"],(function(e,r,t,o,i,a,n,l,s,d,m,c,g,y,f,u,p,b){var h=e([i,g]);b=b.geoenrichment.dijit.ReportPlayer.ReportPlayer;var _={};return _.addLocatorPoints=function(e,i){var m=/'/g;e.locatorPointsControllers&&e.locatorPointsControllers.forEach((function(g){var y=g.getCalculatorDataArray();if(y&&y.length){var u=g.getRendererJson(e.calculatorFieldName),b=new h,L=u?n.fromJson(r.clone(u)):new a(c.getDefaultLocatorSymbol());b.setRenderer(L);var P=[],S=[],v=u?"simple"===u.type&&l.fromJson(r.clone(u.symbol)):c.getDefaultLocatorSymbol();y.forEach((function(t,i){if(t.Point||t.Polygon){var a,n,l={},c=g.getVariableObjects().map((function(e,r){var o=e.fieldName.toLowerCase();return-1!==o.indexOf("coname")&&(n=!0,a=e.fieldName),n||-1===o.indexOf("name")||(a=e.fieldName),a||0!==r||(a=e.fieldName),l[e.fieldName]=e.alias,{label:e.alias,value:t[e.fieldName]}})),y=new d({title:"",fieldInfos:[],description:p.buildAttributesTable(null,c)}),u=r.mixin({},t);delete u.Point,delete u.Polygon,u.__pointIndex=i,u.__nameField=a,u.__fieldAliases=l;var h,_=s.fromJson(JSON.parse(-1===(h=t.Point||t.Polygon).indexOf("'")?h:h.replace(m,'"'))),L=new o({attributes:u});f.needProject(_,e.map)?(P.push(L),S.push(_)):(L.setGeometry(_),b.add(L)),v&&L.setSymbol(v),L.setInfoTemplate(y)}})),_._registerLayer(b,e.map,g,e),i.registerLayerInfo({layer:b,type:i.LOCATOR_POINTS,preferredIndex:g.getLayerIndex(e.calculatorFieldName),geometryType:y[0].Point?"esriGeometryPoint":"esriGeometryPolygon"}),_._provideNameForLayer(b,g,e),t(f.projectGeometries(S,e.map),(function(e){e.forEach((function(e,r){var t=P[r];t.setGeometry(e),b.add(t)}))}))}}))},_._registerLayer=function(e,r,t,i){var a=t.getRendererJson(i.calculatorFieldName);u.getHighlightSymbol({rendererJson:a,defaultHighlightSymbol:c.getDefaultLocatorSymbolHighlighted(),graphicsLayer:e}).then((function(a){var n;a&&a.frameSymbol&&(n=new o).setSymbol(a.frameSymbol),t.setLocatorPointsLayer(i.calculatorFieldName,e,r,{getPointIndexForGraphicFunc:function(e){return e.attributes&&e.attributes.__pointIndex},getGraphicForPointAtFunc:function(r){var t;return e.graphics.some((function(e){if(e.attributes&&e.attributes.__pointIndex===r)return t=e,!0})),t},setGraphicHighlightedFunc:function(r,t){a&&(n&&e.remove(n),!t&&r.__isHighlighted?(r.setSymbol(r.__originalSymbol),delete r.__originalSymbol,delete r.__isHighlighted):t&&!r.__isHighlighted&&(r.__originalSymbol=r.symbol,r.__isHighlighted=!0,r.setSymbol(a.getSymbol?a.getSymbol(r):a.symbol),e.remove(r),n&&(n.setGeometry(r.geometry),e.add(n)),e.add(r)))}})}))},_._provideNameForLayer=function(e,r,o){var i=r.getLayerUrl(),a=r.getLayerID(),n=r.getLayerName(o.calculatorFieldName),l=n&&{name:n};t(i?!m.isPlayerOnServer&&(l||y.getInfo(i)):l||o.geClient&&o.geClient.getLayerInfo(o.countryID,a),(function(r){e.name=r&&r.name||b.locatorLayerLegendTitle,e.onVisibilityChange()}))},_.getDefaultLocatorRenderer=function(){return new a(c.getDefaultLocatorSymbol())},_}));