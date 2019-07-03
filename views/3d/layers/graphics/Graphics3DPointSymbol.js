// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/promiseUtils","./Graphics3DCalloutSymbolLayerFactory","./Graphics3DSymbol"],function(r,t,e,o,a,l,i,n){return function(r){function t(t,e,o){var a=r.call(this,t,e,o)||this;return a.calloutSymbolLayer=null,a.symbol.hasVisibleCallout()&&(a.calloutSymbolLayer=i.make(a.symbol,e)),a}return e(t,r),t.prototype.doLoad=function(t){return a(this,void 0,void 0,function(){return o(this,function(e){switch(e.label){case 0:return[4,r.prototype.doLoad.call(this,t)];case 1:return e.sent(),this.calloutSymbolLayer?[4,this.calloutSymbolLayer.load()]:[3,3];case 2:e.sent(),e.label=3;case 3:if(l.isAborted(t))throw l.createAbortError();return[2]}})})},t.prototype.destroy=function(){r.prototype.destroy.call(this),this.calloutSymbolLayer&&this.calloutSymbolLayer.destroy()},t.prototype.createGraphics3DGraphic=function(t,e,o){var a=r.prototype.createGraphics3DGraphic.call(this,t,o);if(this.calloutSymbolLayer){var l=this.createCalloutGraphic(t);l&&a.addAuxiliaryGraphic(l)}return a},t.prototype.globalPropertyChanged=function(t,e){var o=this;if(!r.prototype.globalPropertyChanged.call(this,t,e))return!1;if(this.calloutSymbolLayer){var a=function(r){for(var t=0,e=r._auxiliaryGraphics;t<e.length;t++){var a=e[t];if(a.graphics3DSymbolLayer===o.calloutSymbolLayer)return a}};return this.calloutSymbolLayer.globalPropertyChanged(t,e,a)}return!0},t.prototype.createCalloutGraphic=function(r){var t=r.renderingInfo,e={renderer:t.renderer,symbol:t.symbol,translation:[0,0,0],centerOffset:[0,0,0,0],screenOffset:[0,0],centerOffsetUnits:"world",elevationOffset:0,materialCollection:null};return r.renderingInfo=e,this.calloutSymbolLayer.createGraphics3DGraphic(r)},t}(n)});