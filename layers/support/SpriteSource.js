// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../request","../../core/Error","../../core/has","../../core/Logger","../../core/promiseUtils"],function(e,t,r,i,a,s,o,n,h,l,u,p){Object.defineProperty(t,"__esModule",{value:!0});var d=u.getLogger("esri.layers.support.SpriteSource"),c=function(){function e(e,t){this.baseURL=e,this.devicePixelRatio=t,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object.defineProperty(e.prototype,"spriteNames",{get:function(){var e=[];for(var t in this._spritesData)e.push(t);return e.sort(),e},enumerable:!0,configurable:!0}),e.prototype.getSpriteInfo=function(e){return this._spritesData[e]},e.prototype.load=function(e){return o(this,void 0,void 0,function(){var t;return s(this,function(r){switch(r.label){case 0:if(p.throwIfAborted(e),this.loadStatus="loading",!this.baseURL)return[2,p.resolve(this)];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._loadSprites(e)];case 2:return r.sent(),this.loadStatus="loaded",[3,4];case 3:return t=r.sent(),this.loadStatus="failed",[3,4];case 4:return[2,this]}})})},e.prototype._loadSprites=function(e){var t=this;this._isRetina=this.devicePixelRatio>1.15;var r=this.baseURL,i=this._isRetina?"@2x":"",s=""+r+i+".png";return p.all([n(r+i+".json",e),n(s,a({responseType:"image"},e))]).then(function(e){var i=e[0],a=e[1],s=Object.keys(i.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!a||!a.data)return t._spritesData=t.image=null,t.width=t.height=0,p.resolve(null);t._spritesData=i.data;var o=a.data,n=Math.max(l("esri-webgl-max-texture-size"),4096);if(o.width>n||o.height>n){var u="Sprite resource for style "+r+" is bigger than the maximum allowed of "+n+" pixels}";throw d.error(u),new h("SpriteSource",u)}t.width=o.width,t.height=o.height;var c=document.createElement("canvas"),g=c.getContext("2d");c.width=o.width,c.height=o.height,g.drawImage(o,0,0,o.width,o.height);for(var f,v=g.getImageData(0,0,o.width,o.height),w=new Uint8Array(v.data),S=0;S<w.length;S+=4)f=w[S+3]/255,w[S]=w[S]*f,w[S+1]=w[S+1]*f,w[S+2]=w[S+2]*f;t.image=w})},e}();t.default=c});