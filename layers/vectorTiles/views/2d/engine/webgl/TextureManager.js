// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../../../../core/promiseUtils","./CIMSymbolHelper","./GlyphMosaic","./GlyphSource","./SDFHelper","./SpriteMosaic","./Utils","../../../3d/support/imageUtils"],function(e,t,r,i,s,a,n,o,l,p){function c(e){if(e.type){switch(l.normalizeSymbolType(e.type)){case"simple-marker":return"simple-marker"+e.style;case"simple-line":return"simple-line"+e.style}if(l.isPictureSymbol(e))return e.url?e.url:e.imageData+""+e.width+e.height}return JSON.stringify(e)}return function(){function e(){this._spriteMosaic=new o(1024,1024,250),this._glyphSource=new a("https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/resources/fonts/{fontstack}/{range}.pbf"),this._glyphMosaic=new s(1024,1024,this._glyphSource)}return Object.defineProperty(e.prototype,"sprites",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glyphs",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0}),e.prototype.rasterizeItem=function(e,t){return void 0===t&&(t=null),e?!e.type||"text"!==e.type&&"esriTS"!==e.type?this._rasterizeSpriteSymbol(e).then(function(e){return{spriteMosaicItem:e}}):this._rasterizeTextSymbol(e,t).then(function(e){return{glyphMosaicItems:e}}):r.resolve(null)},e.prototype.bindSpritePage=function(e,t,r,i){i||(i=9729),this._spriteMosaic.bind(e,i,t,r)},e.prototype.bindGlyphsPage=function(e,t,r){this._glyphMosaic.bind(e,9729,t,r)},e.prototype._rasterizeTextSymbol=function(e,t){return this._glyphMosaic.getGlyphItems(e,t)},e.prototype._rasterizeSpriteSymbol=function(e){var t=this;if((l.isFillSymbol(e)||l.isLineSymbol(e))&&("solid"===e.style||"esriSFSSolid"===e.style||"esriSLSSolid"===e.style||"none"===e.style))return r.resolve(null);var i=c(e);if(this._spriteMosaic.has(i))return r.resolve(this._spriteMosaic.getSpriteItem(i));if(e.url||e.imageData){var s=e.imageData?"data:"+e.contentType+";base64,"+e.imageData:e.url;return p.requestImage(s).then(function(r){var s=t._rasterizeResource(r);return t._addItemToMosaic(i,s.size,s.anchor,s.image,!l.isMarkerSymbol(e),s.sdf)})}var a=this._rasterizeResource(e);return r.resolve(this._addItemToMosaic(i,a.size,a.anchor,a.image,!l.isMarkerSymbol(e),a.sdf))},e.prototype._rasterizeResource=function(e){if(e instanceof HTMLImageElement){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));var t=e;this._rasterizationCanvas.width=t.width,this._rasterizationCanvas.height=t.height;var r=this._rasterizationCanvas.getContext("2d");r.drawImage(t,0,0,t.width,t.height);for(var i=r.getImageData(0,0,t.width,t.height),s=new Uint8Array(i.data),a=void 0,n=0;n<s.length;n+=4)a=s[n+3]/255,s[n]=s[n]*a,s[n+1]=s[n+1]*a,s[n+2]=s[n+2]*a;return{size:[t.width,t.height],anchor:[0,0],image:new Uint32Array(s.buffer),sdf:!1}}return this._rasterizeJSON(e)},e.prototype._addItemToMosaic=function(e,t,r,i,s,a){return this._spriteMosaic.addSpriteItem(e,t,r,i,s,a)},e.prototype._rasterizeJSON=function(e){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var t=i.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,e.style),r=t[0],s=t[1],a=t[2];return{size:[s,a],anchor:[0,0],image:new Uint32Array(r.buffer),sdf:!1}}if("simple-line"===e.type||"esriSLS"===e.type){var o=i.SymbolHelper.rasterizeSimpleLine(this._rasterizationCanvas,e.style),r=o[0],s=o[1],a=o[2];return{size:[s,a],anchor:[0,0],image:new Uint32Array(r.buffer),sdf:!0}}var l,p;if("simple-marker"===e.type||"esriSMS"===e.type?(l=i.CIMSymbolHelper.fromSimpleMarker(e),p=!0):(l=e,p=n.SDFHelper.checkSDF(l)),p){var c=new n.SDFHelper,h=c.buildSDF(l),r=h[0];return{size:[h[1],h[2]],anchor:[0,0],image:new Uint32Array(r.buffer),sdf:!0}}var u=i.CIMSymbolHelper.rasterize(this._rasterizationCanvas,l),r=u[0],s=u[1],a=u[2];return{size:[s,a],anchor:[u[3],u[4]],image:new Uint32Array(r.buffer),sdf:!1}},e}()});