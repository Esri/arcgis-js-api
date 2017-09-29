// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Graphics3DSymbol","./Graphics3DCalloutSymbolLayerFactory"],function(r,e,t,a,l){var o=function(r){function e(e,t,a){var o=r.call(this,e,t,a)||this;return o.calloutSymbolLayer=null,o.symbol.hasVisibleCallout()&&(o.calloutSymbolLayer=l.make(o.symbol,t)),o}return t(e,r),e.prototype.destroy=function(){r.prototype.destroy.call(this)},e.prototype.createGraphics3DGraphic=function(e,t,a){var l=r.prototype.createGraphics3DGraphic.call(this,e,t,a);if(this.calloutSymbolLayer){var o=this.createCalloutGraphic(e,t);o&&l.addAuxiliaryGraphic(o)}return l},e.prototype.layerPropertyChanged=function(e,t){var a=this;if(!r.prototype.layerPropertyChanged.call(this,e,t))return!1;if(this.calloutSymbolLayer){var l=function(r){for(var e=0,t=r._auxiliaryGraphics;e<t.length;e++){var l=t[e];if(l.graphics3DSymbolLayer===a.calloutSymbolLayer)return l}};return this.calloutSymbolLayer.layerPropertyChanged(e,t,l)}return!0},e.prototype.createCalloutGraphic=function(r,e){var t={renderer:e.renderer,symbol:e.symbol,needsOffsetAdjustment:e.needsOffsetAdjustment,translation:[0,0,0],centerOffset:[0,0,0,0],screenOffset:[0,0],centerOffsetUnits:"world",elevationOffset:0,materialCollection:null};return this.calloutSymbolLayer.createGraphics3DGraphic(r,t)},e}(a);return o});