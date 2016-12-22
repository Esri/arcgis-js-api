// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/PromiseLightweight","./Graphics3DGraphic","./Graphics3DSymbolLayerFactory"],function(r,e,i,t,s,h){var o=function(r){function e(e,i,t){r.call(this),this.symbol=e;var s=e.symbolLayers,o=0;t&&(s=t.concat(s),o=t.length);var l=s.length;this.childGraphics3DSymbols=new Array(s.length),this.childGraphics3DSymbolPromises=new Array(s.length);for(var a=i.layerOrder,c=0,n=0,p=!1,y=function(r,e){e&&(this.childGraphics3DSymbols[r]=e,n++),c--,!this.isRejected()&&p&&1>c&&(n>0?this.resolve():this.reject())},d=0;l>d;d++){var m=s.getItemAt(d);if(m.enabled!==!1){i.layerOrder=a+(1-(1+d)/l),i.layerOrderDelta=1/l;var D=h.make(m,i,m._ignoreDrivers);D&&(c++,this.childGraphics3DSymbolPromises[d]=D,D.then(y.bind(this,d,D),y.bind(this,d,null)))}}i.layerOrder=a,p=!0,!this.isRejected()&&1>c&&(n>0?this.resolve():this.reject())}return i(e,r),e.prototype.createGraphics3DGraphic=function(r,e,i){for(var t=new Array(this.childGraphics3DSymbols.length),h=0;h<this.childGraphics3DSymbols.length;h++){var o=this.childGraphics3DSymbols[h];o&&(t[h]=o.createGraphics3DGraphic(r,e))}return new s(r,i||this,t)},e.prototype.layerPropertyChanged=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=0;i>t;t++){var s=this.childGraphics3DSymbols[t];if(s&&!s.layerPropertyChanged(r,e,t))return!1}return!0},e.prototype.applyRendererDiff=function(r,e,i){return this.isResolved()?this.childGraphics3DSymbols.reduce(function(t,s,h){return t&&(!s||s.applyRendererDiff(r,e,i,h))},!0):!1},e.prototype.setDrawOrder=function(r,e){for(var i=this.childGraphics3DSymbols.length,t=1/i,s=0;i>s;s++){var h=this.childGraphics3DSymbols[s];if(h){var o=r+(1-(1+s)/i);h.setDrawOrder(o,t,e)}}},e.prototype.destroy=function(){this.isFulfilled()||this.reject();for(var r=0;r<this.childGraphics3DSymbolPromises.length;r++)this.childGraphics3DSymbolPromises[r]&&this.childGraphics3DSymbolPromises[r].destroy()},e}(t.Promise);return o});