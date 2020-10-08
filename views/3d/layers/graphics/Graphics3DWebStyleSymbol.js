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

define(["require","exports","tslib","../../../../core/maybe","./Loadable","./symbolComplexity"],(function(t,e,o,r,i,s){"use strict";return function(t){function e(e,o){var r=t.call(this)||this;return r.symbol=e,r.convert=o,r.graphics3DSymbol=null,r.referenced=0,r}return o.__extends(e,t),e.prototype.getSymbolLayerSize=function(t){return r.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.getSymbolLayerSize(t):null},Object.defineProperty(e.prototype,"extentPadding",{get:function(){return r.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.extentPadding:0},enumerable:!1,configurable:!0}),e.prototype.doLoad=function(t){return o.__awaiter(this,void 0,void 0,(function(){var e;return o.__generator(this,(function(o){switch(o.label){case 0:return[4,this.symbol.fetchSymbol({signal:t})];case 1:return(e=o.sent()).id=this.symbol.id,this.graphics3DSymbol=this.convert(e),[4,this.graphics3DSymbol.load()];case 2:return o.sent(),[2]}}))}))},e.prototype.createGraphics3DGraphic=function(t){return r.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.createGraphics3DGraphic(t,this):null},Object.defineProperty(e.prototype,"complexity",{get:function(){return r.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.complexity:s.emptySymbolComplexity},enumerable:!1,configurable:!0}),e.prototype.globalPropertyChanged=function(t,e){return!!r.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.globalPropertyChanged(t,e)},e.prototype.applyRendererDiff=function(t,e){return!!r.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.applyRendererDiff(t,e)},e.prototype.prepareSymbolPatch=function(t){r.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.prepareSymbolPatch(t)},e.prototype.updateGeometry=function(t,e){return!!r.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.updateGeometry(t,e)},e.prototype.onRemoveGraphic=function(){},e.prototype.getFastUpdateStatus=function(){return r.isSome(this.graphics3DSymbol)?this.graphics3DSymbol.getFastUpdateStatus():{loading:1,fast:0,slow:0}},e.prototype.destroy=function(){r.isSome(this.graphics3DSymbol)&&this.graphics3DSymbol.destroy(),this.graphics3DSymbol=void 0,this.abortLoad()},Object.defineProperty(e.prototype,"destroyed",{get:function(){return void 0===this.graphics3DSymbol},enumerable:!1,configurable:!0}),e}(i.Loadable)}));