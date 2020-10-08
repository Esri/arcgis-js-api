// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/promiseUtils","./Graphics3DCalloutSymbolLayerFactory","./Graphics3DSymbol"],(function(t,r,e,o,a,l){"use strict";return function(t){function r(r,e,o){var l=t.call(this,r,e,o)||this;return l.calloutSymbolLayer=null,l.symbol.hasVisibleCallout()&&(l.calloutSymbolLayer=a.make(l.symbol,e)),l}return e.__extends(r,t),r.prototype.doLoad=function(r){return e.__awaiter(this,void 0,void 0,(function(){return e.__generator(this,(function(e){switch(e.label){case 0:return[4,t.prototype.doLoad.call(this,r)];case 1:return e.sent(),this.calloutSymbolLayer?[4,this.calloutSymbolLayer.load()]:[3,3];case 2:e.sent(),e.label=3;case 3:if(o.isAborted(r))throw o.createAbortError();return[2]}}))}))},r.prototype.destroy=function(){t.prototype.destroy.call(this),this.calloutSymbolLayer&&this.calloutSymbolLayer.destroy()},r.prototype.createGraphics3DGraphic=function(r,e){var o=t.prototype.createGraphics3DGraphic.call(this,r,e);if(this.calloutSymbolLayer){var a=this.createCalloutGraphic(r);a&&o.addAuxiliaryGraphic(a)}return o},r.prototype.globalPropertyChanged=function(r,e){var o=this;return!!t.prototype.globalPropertyChanged.call(this,r,e)&&(!this.calloutSymbolLayer||this.calloutSymbolLayer.globalPropertyChanged(r,e,(function(t){return o._getCalloutGraphicLayer(t)})))},r.prototype.updateGeometry=function(r,e){var o=t.prototype.updateGeometry.call(this,r,e);if(o&&this.calloutSymbolLayer){var a=this._getCalloutGraphicLayer(r);if(a)return this.calloutSymbolLayer.updateGeometry(a,e)}return o},r.prototype.createCalloutGraphic=function(t){var r=t.renderingInfo,e={renderer:r.renderer,symbol:r.symbol,translation:[0,0,0],centerOffset:[0,0,0,0],screenOffset:[0,0],centerOffsetUnits:"world",elevationOffset:0,materialCollection:null};return t.renderingInfo=e,this.calloutSymbolLayer.createGraphics3DGraphic(t)},r.prototype._getCalloutGraphicLayer=function(t){for(var r=0,e=t._auxiliaryGraphics;r<e.length;r++){var o=e[r];if(o.graphics3DSymbolLayer===this.calloutSymbolLayer)return o}},r}(l)}));