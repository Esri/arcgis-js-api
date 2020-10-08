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

define(["require","exports","tslib","../../request","../../core/Error","../../core/has","../../core/Logger","../../core/promiseUtils"],(function(t,e,i,r,a,s,n,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var h=n.getLogger("esri.layers.support.SpriteSource"),l=function(){function t(t,e){this.baseURL=t,this.devicePixelRatio=e,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object.defineProperty(t.prototype,"spriteNames",{get:function(){var t=[];for(var e in this._spritesData)t.push(e);return t.sort(),t},enumerable:!1,configurable:!0}),t.prototype.getSpriteInfo=function(t){return this._spritesData[t]},t.prototype.load=function(t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:if(!this.baseURL)return this.loadStatus="failed",[2];this.loadStatus="loading",e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this._loadSprites(t)];case 2:return e.sent(),this.loadStatus="loaded",[3,4];case 3:return e.sent(),this.loadStatus="failed",[3,4];case 4:return[2]}}))}))},t.prototype._loadSprites=function(t){var e=this;this._isRetina=this.devicePixelRatio>1.15;var n=this.baseURL,l=this._isRetina?"@2x":"",u=""+n+l+".png";return o.all([r(n+l+".json",t),r(u,i.__assign({responseType:"image"},t))]).then((function(t){var i=t[0],r=t[1],l=Object.keys(i.data);if(!l||0===l.length||1===l.length&&"_ssl"===l[0]||!r||!r.data)return e._spritesData=e.image=null,e.width=e.height=0,o.resolve(null);e._spritesData=i.data;var u=r.data,d=Math.max(s("esri-webgl-max-texture-size"),4096);if(u.width>d||u.height>d){var g="Sprite resource for style "+n+" is bigger than the maximum allowed of "+d+" pixels}";throw h.error(g),new a("SpriteSource",g)}e.width=u.width,e.height=u.height;var c=document.createElement("canvas"),p=c.getContext("2d");c.width=u.width,c.height=u.height,p.drawImage(u,0,0,u.width,u.height);for(var f,_=p.getImageData(0,0,u.width,u.height),v=new Uint8Array(_.data),w=0;w<v.length;w+=4)f=v[w+3]/255,v[w]=v[w]*f,v[w+1]=v[w+1]*f,v[w+2]=v[w+2]*f;e.image=v}))},t}();e.default=l}));