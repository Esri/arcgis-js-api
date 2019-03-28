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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Graphics3DCalloutSymbolLayerFactory","./Graphics3DSymbol"],function(r,t,e,a,o){return function(r){function t(t,e,o){var l=r.call(this,t,e,o)||this;return l.calloutSymbolLayer=null,l.symbol.hasVisibleCallout()&&(l.calloutSymbolLayer=a.make(l.symbol,e)),l}return e(t,r),t.prototype.destroy=function(){r.prototype.destroy.call(this)},t.prototype.createGraphics3DGraphic=function(t,e,a){var o=r.prototype.createGraphics3DGraphic.call(this,t,a);if(this.calloutSymbolLayer){var l=this.createCalloutGraphic(t);l&&o.addAuxiliaryGraphic(l)}return o},t.prototype.globalPropertyChanged=function(t,e){var a=this;if(!r.prototype.globalPropertyChanged.call(this,t,e))return!1;if(this.calloutSymbolLayer){var o=function(r){for(var t=0,e=r._auxiliaryGraphics;t<e.length;t++){var o=e[t];if(o.graphics3DSymbolLayer===a.calloutSymbolLayer)return o}};return this.calloutSymbolLayer.globalPropertyChanged(t,e,o)}return!0},t.prototype.createCalloutGraphic=function(r){var t=r.renderingInfo,e={renderer:t.renderer,symbol:t.symbol,translation:[0,0,0],centerOffset:[0,0,0,0],screenOffset:[0,0],centerOffsetUnits:"world",elevationOffset:0,materialCollection:null};return r.renderingInfo=e,this.calloutSymbolLayer.createGraphics3DGraphic(r)},t}(o)});