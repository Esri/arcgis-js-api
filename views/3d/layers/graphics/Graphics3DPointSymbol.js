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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Graphics3DCalloutSymbolLayerFactory","./Graphics3DSymbol"],function(r,e,t,a,o){return function(r){function e(e,t,o){var l=r.call(this,e,t,o)||this;return l.calloutSymbolLayer=null,l.symbol.hasVisibleCallout()&&(l.calloutSymbolLayer=a.make(l.symbol,t)),l}return t(e,r),e.prototype.destroy=function(){r.prototype.destroy.call(this)},e.prototype.createGraphics3DGraphic=function(e,t,a){var o=r.prototype.createGraphics3DGraphic.call(this,e,a);if(this.calloutSymbolLayer){var l=this.createCalloutGraphic(e);l&&o.addAuxiliaryGraphic(l)}return o},e.prototype.layerPropertyChanged=function(e,t){var a=this;if(!r.prototype.layerPropertyChanged.call(this,e,t))return!1;if(this.calloutSymbolLayer){var o=function(r){for(var e=0,t=r._auxiliaryGraphics;e<t.length;e++){var o=t[e];if(o.graphics3DSymbolLayer===a.calloutSymbolLayer)return o}};return this.calloutSymbolLayer.layerPropertyChanged(e,t,o)}return!0},e.prototype.createCalloutGraphic=function(r){var e=r.renderingInfo;return r.renderingInfo={renderer:e.renderer,symbol:e.symbol,needsOffsetAdjustment:e.needsOffsetAdjustment,translation:[0,0,0],centerOffset:[0,0,0,0],screenOffset:[0,0],centerOffsetUnits:"world",elevationOffset:0,materialCollection:null},this.calloutSymbolLayer.createGraphics3DGraphic(r)},e}(o)});