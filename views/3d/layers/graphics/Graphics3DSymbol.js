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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../../core/declare","../../support/PromiseLightweight","./Graphics3DSymbolLayerFactory","./Graphics3DGraphic"],function(r,i,e,s){var h=r(i.Promise,{constructor:function(r,i,s){this.symbol=r;var h=r.symbolLayers,t=0;s&&(h=s.concat(h),t=s.length);var a=h.length;this.childGraphics3DSymbols=new Array(h.length),this.childGraphics3DSymbolPromises=new Array(h.length);for(var c=i.layerOrder,l=0,o=0,n=!1,y=function(r,i){i&&(this.childGraphics3DSymbols[r]=i,o++),l--,!this.isRejected()&&n&&1>l&&(o>0?this.resolve():this.reject())},d=0;a>d;d++){var m=h.getItemAt(d);if(m.enable!==!1){i.layerOrder=c+(1-(1+d)/a),i.layerOrderDelta=1/a;var p=e.make(m,i,m._ignoreDrivers);p&&(l++,this.childGraphics3DSymbolPromises[d]=p,p.then(y.bind(this,d,p),y.bind(this,d,null)))}}i.layerOrder=c,n=!0,!this.isRejected()&&1>l&&(o>0?this.resolve():this.reject())},createGraphics3DGraphic:function(r,i){for(var e=new Array(this.childGraphics3DSymbols.length),h=0;h<this.childGraphics3DSymbols.length;h++){var t=this.childGraphics3DSymbols[h];t&&(e[h]=t.createGraphics3DGraphic(r,i))}return new s(r,this,e)},layerPropertyChanged:function(r,i){for(var e=this.childGraphics3DSymbols.length,s=0;e>s;s++){var h=this.childGraphics3DSymbols[s];if(h&&!h.layerPropertyChanged(r,i,s))return!1}return!0},setDrawOrder:function(r,i){for(var e=this.childGraphics3DSymbols.length,s=1/e,h=0;e>h;h++){var t=this.childGraphics3DSymbols[h];if(t){var a=r+(1-(1+h)/e);t.setDrawOrder(a,s,i)}}},destroy:function(){this.isFulfilled()||this.reject();for(var r=0;r<this.childGraphics3DSymbolPromises.length;r++)this.childGraphics3DSymbolPromises[r]&&this.childGraphics3DSymbolPromises[r].destroy()}});return h});