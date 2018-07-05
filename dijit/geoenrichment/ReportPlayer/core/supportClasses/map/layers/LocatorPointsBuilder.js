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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/_base/lang","dojo/when","esri/graphic","esri/layers/GraphicsLayer","esri/renderers/SimpleRenderer","esri/renderers/jsonUtils","esri/symbols/SimpleMarkerSymbol","esri/symbols/SimpleLineSymbol","esri/symbols/jsonUtils","esri/dijit/PopupTemplate","./LayerInfoLoader","../../../../dataProvider/supportClasses/AreaDataUtil","../../../../dataProvider/supportClasses/AreasInfoTemplateBuilder","esri/dijit/geoenrichment/utils/ColorUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,o,r,a,i,n,l,s,c,d,m,g,y,u,f){f=f.geoenrichment.dijit.ReportPlayer.ReportPlayer;var b={},L={_defaultLocatorSymbol:null,_defaultLocatorSymbolHighlighted:null,getDefaultLocatorSymbol:function(){return this._defaultLocatorSymbol||(this._defaultLocatorSymbol=new l(l.STYLE_CIRCLE,10,new s(s.STYLE_SOLID,new e([255,0,0,1]),2),new e([255,0,0,.75]))),this._defaultLocatorSymbol},getDefaultLocatorSymbolHighlighted:function(){return this._defaultLocatorSymbolHighlighted||(this._defaultLocatorSymbolHighlighted=new l(l.STYLE_CIRCLE,11,new s(s.STYLE_SOLID,new e([255,255,255,1]),2),new e([255,50,50,1]))),this._defaultLocatorSymbolHighlighted}};return b.addLocatorPoints=function(e,o){e.locatorPointsControllers&&e.locatorPointsControllers.forEach(function(l){var s=g.getAreaDataObjectCalculator(e.fieldData.areaData[0],l.getCalculatorName());if(s){var m=[s.data].concat(s.comparisonLevels);if(m.length){var u=l.getRendererJson(e.calculatorFieldName),f=new a,h=u?n.fromJson(u):new i(L.getDefaultLocatorSymbol());f.setRenderer(h),m.forEach(function(e,o){if(e.Point||e.Polygon){var a=l.getVariableObjects().map(function(t){return{label:t.alias,value:e[t.fieldName]}}),i=new d({title:"",fieldInfos:[],description:y.buildAttributesTable(null,a)}),n=t.mixin({},e);delete n.Point,delete n.Polygon,n.__pointIndex=o;var s=new r({attributes:n,geometry:JSON.parse(e.Point||e.Polygon)});s.setSymbol(u?c.fromJson(u.symbol):L.getDefaultLocatorSymbol()),s.setInfoTemplate(i),f.add(s)}}),b._registerLayer(f,e.map,l,e),o.registerLayerInfo({layer:f,preferredIndex:l.getLayerIndex(e.calculatorFieldName),geometryType:s.data.Point?"esriGeometryPoint":"esriGeometryPolygon"}),b._provideNameForLayer(f,l,e)}}})},b._registerLayer=function(o,a,i,n){var d,m,g=i.getRendererJson(n.calculatorFieldName);if(g){var y=t.clone(g.symbol);switch(y.type){case"esriSMS":y.size*=1.1;var f=u.getHighlightColor(new e(y.color.slice(0,3)));y.color[0]=f.r,y.color[1]=f.g,y.color[2]=f.b;break;case"esriPMS":y.width*=1.1,y.height*=1.1,y.xoffset*=1.1,y.yoffset*=1.1,m=new r,m.setSymbol(new l(l.STYLE_SQUARE,Math.max(y.width,y.height)/.75,new s(s.STYLE_SOLID,new e([255,255,0,.7]),2),new e([0,0,0,0])))}d=c.fromJson(y)}else d=L.getDefaultLocatorSymbolHighlighted();i.setLocatorPointsLayer(n.calculatorFieldName,o,a,{getPointIndexForGraphicFunc:function(e){return e.attributes&&e.attributes.__pointIndex},getGraphicForPointAtFunc:function(e){var t;return o.graphics.some(function(o){if(o.attributes&&o.attributes.__pointIndex===e)return t=o,!0}),t},setGraphicHighlightedFunc:function(e,t){m&&o.remove(m),!t&&e.__originalSymbol?(e.setSymbol(e.__originalSymbol),delete e.__originalSymbol):t&&!e.__originalSymbol&&(e.__originalSymbol=e.symbol,e.setSymbol(d),o.remove(e),m&&(m.setGeometry(e.geometry),o.add(m)),o.add(e))}})},b._provideNameForLayer=function(e,t,r){var a=t.getLayerUrl(),i=t.getLayerID(),n=t.getLayerName(),l=n&&{name:n};a?o(l||m.getInfo(a),function(t){e.name=t&&t.name||f.locatorLayerLegendTitle,e.onVisibilityChange()}):o(l||r.geClient&&r.geClient.getLayerInfo(r.countryID,i),function(t){e.name=t&&t.name||f.locatorLayerLegendTitle,e.onVisibilityChange()})},b.getDefaultLocatorRendererJson=function(){return new i(L.getDefaultLocatorSymbol()).toJson()},b});