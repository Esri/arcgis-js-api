// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/sniff","dojo/when","../../../kernel","../../../Evented","../../../request","../../../deferredUtils","../../../urlUtils","./ImageServiceRaster","./TileServiceRaster","./TileRaster","./FunctionRaster"],(function(e,r,t,i,n,s,o,a,c,u,l,f,h,d,v,m,x){var g={customDrivers:[],create:function(e){if(e){var r,n,s;e.url&&(s=h.urlToObject(e.url),n=s.path,r=s.query);var o,c,u=e.serviceInfo,l=e.rasterFxArgs||{},f=new i,g=t.hitch(this,(function(r){console.error(r),this._trycustomDrivers(t.mixin({url:n},e),0,f)}));if(n)if(-1===n.toLowerCase().indexOf("imageserver")&&-1===n.toLowerCase().indexOf("mapserver"))o=new m(t.mixin({},e,{url:n})),e.rasterFx&&(o=new x({rasterFx:e.rasterFx,rasterFxArgs:t.mixin({},l,{raster:o})})),c=o;else{c=new i;var p=u||this._getServiceInfo(n,r),b=t.hitch(this,(function(i){i.bandCount?o=i.capabilities&&i.capabilities.toLowerCase().indexOf("tileonly")>-1?new v(t.mixin({},{serviceInfo:i},r,e,{url:n})):new d(t.mixin({},{serviceInfo:i},r,e,{url:n})):i.tileInfo&&(o=new v(t.mixin({},{serviceInfo:i},r,this._options,{url:n}))),e.rasterFx&&(o=new x({rasterFx:e.rasterFx,rasterFxArgs:t.mixin({},l,{raster:o})})),c.resolve(o)}));a(p,b,g)}else o=new x({rasterFx:e.rasterFx,rasterFxArgs:t.mixin({},l,{raster:o})}),c=o;return a(c,t.hitch(this,(function(e){e?e.open().then(t.hitch(this,(function(r){f.resolve(e)})),g):g(new Error("There is no raster to open"))})),g),f.promise}},register:function(e){this.customDrivers=this.customDrivers||[],this.customDrivers.filter((function(r){return r.sourceType===e.prototype.sourceType})).length>0||this.customDrivers.push(e)},_trycustomDrivers:function(e,r,n){n=n||new i;var s=this.customDrivers[r];if(s){var o=new s(e);o.open().then(t.hitch(this,(function(e){n.resolve(o)})),t.hitch(this,(function(t){this._trycustomDrivers(e,r+1,n)})))}else n.reject("cannot load layer "+(e&&e.url||""));return n.promise},_getServiceInfo:function(e,r){var t=(r=r||{}).bandIds,n=r.renderingRule,s=new i(f._dfdCanceller),o={f:"json"};return t&&(o.bandIds=t),n&&(o.renderingRule=n.toJson?JSON.stringify(n.toJson()):JSON.stringify(n)),s._pendingDfd=l({url:e,content:o,handleAs:"json",callbackParamName:"callback"}),s._pendingDfd.then((function(e){s.callback(e)}),(function(e){s.errback(e)})),s.promise}};return o("extend-esri")&&t.setObject("layers.rasterLib.raster.rasterFactory",g,c),g}));