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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/PromiseLightweight","./Graphics3DGraphic","./Graphics3DSymbolLayerFactory"],function(r,e,i,t,s,o){var a=function(r){function e(e,i,t){var s=r.call(this)||this;s.symbol=e;var a=e.symbolLayers;t&&(a=t.concat(a));var h=a.length;s.childGraphics3DSymbols=new Array(a.length),s.childGraphics3DSymbolPromises=new Array(a.length);for(var l=i.layerOrder,c=0,n=0,p=!1,y=function(r,e){e&&(this.childGraphics3DSymbols[r]=e,n++),c--,!this.isRejected()&&p&&1>c&&(n>0?this.resolve():this.reject())},d=0;h>d;d++){var u=a.getItemAt(d);if(u.enabled!==!1){i.layerOrder=l+(1-(1+d)/h),i.layerOrderDelta=1/h;var f=o.make(s.symbol,u,i,u._ignoreDrivers);f&&(c++,s.childGraphics3DSymbolPromises[d]=f,f.then(y.bind(s,d,f),y.bind(s,d,null)))}}return i.layerOrder=l,p=!0,!s.isRejected()&&1>c&&s.resolve(),s}return i(e,r),e.prototype.createGraphics3DGraphic=function(r,e,i){for(var t=new Array(this.childGraphics3DSymbols.length),o=0;o<this.childGraphics3DSymbols.length;o++){var a=this.childGraphics3DSymbols[o];a&&(t[o]=a.createGraphics3DGraphic(r,e))}return new s(r,i||this,t)},e.prototype.layerPropertyChanged=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=function(i){var t=s.childGraphics3DSymbols[i],o=function(r){return r._graphics[i]};return t&&!t.layerPropertyChanged(r,e,o)?{value:!1}:void 0},s=this,o=0;i>o;o++){var a=t(o);if("object"==typeof a)return a.value}return!0},e.prototype.applyRendererDiff=function(r,e,i){return this.isResolved()?this.childGraphics3DSymbols.reduce(function(t,s,o){return t&&(!s||s.applyRendererDiff(r,e,i,o))},!0):!1},e.prototype.getFastUpdateStatus=function(){var r=0,e=0,i=0;return this.childGraphics3DSymbolPromises.forEach(function(t){t&&!t.isFulfilled()?r++:t&&t.isFastUpdatesEnabled()?i++:t&&e++}),{loading:r,slow:e,fast:i}},e.prototype.setDrawOrder=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=1/i,s=0;i>s;s++){var o=this.childGraphics3DSymbols[s];if(o){var a=r+(1-(1+s)/i);o.setDrawOrder(a,t,e)}}},e.prototype.destroy=function(){this.isFulfilled()||this.reject();for(var r=0;r<this.childGraphics3DSymbolPromises.length;r++)this.childGraphics3DSymbolPromises[r]&&this.childGraphics3DSymbolPromises[r].destroy()},e}(t.Promise);return a});