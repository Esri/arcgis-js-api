// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/sniff","dojo/when","../../../kernel","../../../Evented","../../../request","../../../deferredUtils","../../../urlUtils","./ImageServiceRaster","./TileServiceRaster","./TileRaster","./FunctionRaster"],(function(e,r,t,n,s,i,o,a,c,u,l,f,h,d,v,m,x){var g={customDrivers:[],create:function(e){if(e){var r,s,i;e.url&&(i=h.urlToObject(e.url),s=i.path,r=i.query);var o,c,u=e.serviceInfo,l=e.rasterFxArgs||{},f=new n,g=t.hitch(this,(function(r){console.error(r),this._trycustomDrivers(t.mixin({url:s},e),0,f)}));if(s)if(-1===s.toLowerCase().indexOf("imageserver")&&-1===s.toLowerCase().indexOf("mapserver"))o=new m(t.mixin({},e,{url:s})),e.rasterFx&&(o=new x({rasterFx:e.rasterFx,rasterFxArgs:t.mixin({},l,{raster:o})})),c=o;else{c=new n;var p=u||this._getServiceInfo(s,r),b=t.hitch(this,(function(n){n.bandCount?o=new d(t.mixin({},{serviceInfo:n},r,e,{url:s})):n.tileInfo&&(o=new v(t.mixin({},{serviceInfo:n},r,this._options,{url:s}))),e.rasterFx&&(o=new x({rasterFx:e.rasterFx,rasterFxArgs:t.mixin({},l,{raster:o})})),c.resolve(o)}));a(p,b,g)}else o=new x({rasterFx:e.rasterFx,rasterFxArgs:t.mixin({},l,{raster:o})}),c=o;return a(c,t.hitch(this,(function(e){e?e.open().then(t.hitch(this,(function(r){f.resolve(e)})),g):g(new Error("There is no raster to open"))})),g),f.promise}},register:function(e){this.customDrivers=this.customDrivers||[],this.customDrivers.filter((function(r){return r.sourceType===e.prototype.sourceType})).length>0||this.customDrivers.push(e)},_trycustomDrivers:function(e,r,s){s=s||new n;var i=this.customDrivers[r];if(i){var o=new i(e);o.open().then(t.hitch(this,(function(e){s.resolve(o)})),t.hitch(this,(function(t){this._trycustomDrivers(e,r+1,s)})))}else s.reject("cannot load layer "+(e&&e.url||""));return s.promise},_getServiceInfo:function(e,r){var t=(r=r||{}).bandIds,s=r.renderingRule,i=new n(f._dfdCanceller),o={f:"json"};return t&&(o.bandIds=t),s&&(o.renderingRule=s.toJson?JSON.stringify(s.toJson()):JSON.stringify(s)),i._pendingDfd=l({url:e,content:o,handleAs:"json",callbackParamName:"callback"}),i._pendingDfd.then((function(e){i.callback(e)}),(function(e){i.errback(e)})),i.promise}};return o("extend-esri")&&t.setObject("layers.rasterLib.raster.rasterFactory",g,c),g}));