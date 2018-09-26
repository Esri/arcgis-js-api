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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","./Graphics3DGraphic","./Graphics3DSymbolLayerFactory","../../support/PromiseLightweight"],function(r,e,i,t,s,o){return function(r){function e(e,i,t){var o=r.call(this)||this;o.symbol=e;var a=e.symbolLayers;t&&(a=t.concat(a));var h=a.length;o.childGraphics3DSymbols=new Array(a.length),o.childGraphics3DSymbolPromises=new Array(a.length);for(var l=i.layerOrder,c=0,n=0,p=!1,y=function(r,e){e&&(this.childGraphics3DSymbols[r]=e,n++),c--,!this.isRejected()&&p&&c<1&&(n>0?this.resolve():this.reject())},d=0;d<h;d++){var u=a.getItemAt(d);if(!1!==u.enabled){i.layerOrder=l+(1-(1+d)/h),i.layerOrderDelta=1/h;var f=s.make(o.symbol,u,i,u._ignoreDrivers);f&&(c++,o.childGraphics3DSymbolPromises[d]=f,f.then(y.bind(o,d,f),y.bind(o,d,null)))}}return i.layerOrder=l,p=!0,!o.isRejected()&&c<1&&o.resolve(),o}return i(e,r),e.prototype.createGraphics3DGraphic=function(r,e){for(var i=r.graphic,s=new Array(this.childGraphics3DSymbols.length),o=0;o<this.childGraphics3DSymbols.length;o++){var a=this.childGraphics3DSymbols[o];a&&(s[o]=a.createGraphics3DGraphic(r))}return new t(i,e||this,s,r.layer)},Object.defineProperty(e.prototype,"numberOfVertices",{get:function(){for(var r=0,e=0;e<this.childGraphics3DSymbols.length;++e){var i=this.childGraphics3DSymbols[e];i&&(r+=i.numberOfVertices)}return r},enumerable:!0,configurable:!0}),e.prototype.layerPropertyChanged=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=this,s=0;s<i;s++){var o=function(i){var s=t.childGraphics3DSymbols[i],o=function(r){return r._graphics[i]};if(s&&!s.layerPropertyChanged(r,e,o))return{value:!1}}(s);if("object"==typeof o)return o.value}return!0},e.prototype.applyRendererDiff=function(r,e,i){return!!this.isResolved()&&this.childGraphics3DSymbols.reduce(function(t,s,o){return t&&(!s||s.applyRendererDiff(r,e,i,o))},!0)},e.prototype.getFastUpdateStatus=function(){var r=0,e=0,i=0;return this.childGraphics3DSymbolPromises.forEach(function(t){t&&!t.isFulfilled()?r++:t&&t.isFastUpdatesEnabled()?i++:t&&e++}),{loading:r,slow:e,fast:i}},e.prototype.setDrawOrder=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=1/i,s=0;s<i;s++){var o=this.childGraphics3DSymbols[s];if(o){var a=r+(1-(1+s)/i);o.setDrawOrder(a,t,e)}}},e.prototype.destroy=function(){this.isFulfilled()||this.reject();for(var r=0;r<this.childGraphics3DSymbolPromises.length;r++)this.childGraphics3DSymbolPromises[r]&&this.childGraphics3DSymbolPromises[r].destroy()},e}(o.Promise)});