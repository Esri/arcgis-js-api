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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Graphics3DGraphic","./Graphics3DObject3DGraphicLayer","./Graphics3DSymbolLayerFactory","./symbolComplexity","../../support/PromiseLightweight"],function(r,e,i,t,s,o,l,a){return function(r){function e(e,i,t){var s=r.call(this)||this;s.symbol=e,s.referenced=0;var l=e.symbolLayers;t&&(l=t.concat(l));var a=l.length;s.childGraphics3DSymbols=new Array(l.length),s.childGraphics3DSymbolPromises=new Array(l.length);for(var c=i.layerOrder,n=0,h=0,p=function(r,e){e&&(s.childGraphics3DSymbols[r]=e,h++),n--,!s.isRejected()&&n<1&&(h>0?s.resolve():s.reject())},y=0;y<a;y++){var d=l.getItemAt(y);if(!1!==d.enabled){i.layerOrder=c+(1-(1+y)/a),i.layerOrderDelta=1/a;var u=o.make(s.symbol,d,i,d._ignoreDrivers);u&&(n++,s.childGraphics3DSymbolPromises[y]=u)}}if(i.layerOrder=c,0===n)s.resolve();else for(var f=this,y=0;y<a;y++)!function(r){var e=f.childGraphics3DSymbolPromises[r];e&&e.then(function(){return p(r,e)},function(){return p(r,null)})}(y);return s}return i(e,r),e.prototype.createGraphics3DGraphic=function(r,e){for(var i=r.graphic,s=new Array(this.childGraphics3DSymbols.length),o=0;o<this.childGraphics3DSymbols.length;o++){var l=this.childGraphics3DSymbols[o];l&&(s[o]=l.createGraphics3DGraphic(r))}return new t(i,e||this,s,r.layer)},Object.defineProperty(e.prototype,"complexity",{get:function(){return l.totalSymbolComplexities(this.childGraphics3DSymbols.map(function(r){return r&&r.complexity}))},enumerable:!0,configurable:!0}),e.prototype.layerPropertyChanged=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=this,o=0;o<i;o++){var l=function(i){var o=t.childGraphics3DSymbols[i],l=function(r){var e=r._graphics[i];return e instanceof s?e:null};if(o&&!o.layerPropertyChanged(r,e,l))return{value:!1}}(o);if("object"==typeof l)return l.value}return!0},e.prototype.applyRendererDiff=function(r,e){return!!this.isResolved()&&this.childGraphics3DSymbols.reduce(function(i,t,s){return i&&(!t||t.applyRendererDiff(r,e))},!0)},e.prototype.getFastUpdateStatus=function(){var r=0,e=0,i=0;return this.childGraphics3DSymbolPromises.forEach(function(t){t&&!t.isFulfilled()?r++:t&&t.isFastUpdatesEnabled()?i++:t&&e++}),{loading:r,slow:e,fast:i}},e.prototype.setDrawOrder=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=1/i,s=0;s<i;s++){var o=this.childGraphics3DSymbols[s];if(o){var l=r+(1-(1+s)/i);o.setDrawOrder(l,t,e)}}},e.prototype.destroy=function(){if(this.destroyed)return void console.error("Graphics3DSymbol.destroy called when already destroyed!");this.isFulfilled()||this.reject();for(var r=0;r<this.childGraphics3DSymbolPromises.length;r++)this.childGraphics3DSymbolPromises[r]&&this.childGraphics3DSymbolPromises[r].destroy();this.childGraphics3DSymbolPromises=null,this.childGraphics3DSymbols=null},Object.defineProperty(e.prototype,"destroyed",{get:function(){return null==this.childGraphics3DSymbols},enumerable:!0,configurable:!0}),e}(a.Promise)});