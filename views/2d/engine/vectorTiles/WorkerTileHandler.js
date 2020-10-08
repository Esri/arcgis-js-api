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

define(["require","exports","tslib","../../../../core/promiseUtils","./WorkerTile","./style/StyleRepository"],(function(e,t,r,n,o,s){"use strict";return function(){function e(){this._spriteInfo={},this._glyphInfo={}}return e.prototype.reset=function(){return this._spriteInfo={},this._glyphInfo={},n.resolve()},e.prototype.getLayers=function(){return this._layers},e.prototype.setLayers=function(e){var t=new s(e.style);this._layers=t.layers},e.prototype.createTileAndParse=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var s,i,u,a,f,p,h,l;return r.__generator(this,(function(r){switch(r.label){case 0:for(s=e.key,i={},u=0,a=Object.keys(e.sourceName2DataAndRefKey);u<a.length;u++)f=a[u],p=e.sourceName2DataAndRefKey[f],i[f]=p.refKey;h=new o(s,i,this),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,h.parse(e.sourceName2DataAndRefKey,t)];case 2:return[2,r.sent()];case 3:if(l=r.sent(),h.setObsolete(),h.release(),!n.isAbortError(l))throw l;return[2,null];case 4:return[2]}}))}))},e.prototype.updateStyle=function(e){var t=new s(e);this._layers=t.layers},e.prototype.fetchSprites=function(e,t,r){var o=[],s=this._spriteInfo;return e.forEach((function(e){void 0===s[e]&&o.push(e)})),0===o.length?n.resolve():t.invoke("getSprites",o,{signal:r&&r.signal}).then((function(e){for(var t in e){var r=e[t];s[t]=r}}))},e.prototype.getSpriteItems=function(){return this._spriteInfo},e.prototype.fetchGlyphs=function(e,t,r,o,s){var i=[],u=this._glyphInfo[t];return u?r.forEach((function(e){u[e]||i.push(e)})):(u=this._glyphInfo[t]=[],r.forEach((function(e){return i.push(e)}))),0===i.length?n.resolve():o.invoke("getGlyphs",{tileID:e,font:t,codePoints:i},s).then((function(e){for(var t=0;t<e.length;t++)e[t]&&(u[t]=e[t])}))},e.prototype.getGlyphItems=function(e){return this._glyphInfo[e]},e}()}));