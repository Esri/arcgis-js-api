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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../request","../../core/promiseUtils"],function(t,e,i,r,a,s,n,o,h){Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){this.baseURL=t,this.devicePixelRatio=e,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object.defineProperty(t.prototype,"spriteNames",{get:function(){var t=[];for(var e in this._spritesData)t.push(e);return t.sort(),t},enumerable:!0,configurable:!0}),t.prototype.getSpriteInfo=function(t){return this._spritesData[t]},t.prototype.load=function(t){return n(this,void 0,void 0,function(){var e;return s(this,function(i){switch(i.label){case 0:if(h.throwIfAborted(t),this.loadStatus="loading",!this.baseURL)return[2,h.resolve(this)];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._loadSprites(t)];case 2:return i.sent(),this.loadStatus="loaded",[3,4];case 3:return e=i.sent(),this.loadStatus="failed",[3,4];case 4:return[2,this]}})})},t.prototype._loadSprites=function(t){var e=this;this._isRetina=this.devicePixelRatio>1.15;var i=this.baseURL,r=this._isRetina?"@2x":"",s=""+i+r+".png";return h.all([o(i+r+".json",t),o(s,a({responseType:"image"},t))]).then(function(t){var i=t[0],r=t[1],a=Object.keys(i.data);if(!a||0===a.length||1===a.length&&"_ssl"===a[0]||!r||!r.data)return e._spritesData=e.image=null,e.width=e.height=0,h.resolve(null);e._spritesData=i.data;var s=r.data;e.width=s.width,e.height=s.height;var n=document.createElement("canvas"),o=n.getContext("2d");n.width=s.width,n.height=s.height,o.drawImage(s,0,0,s.width,s.height);for(var l,u=o.getImageData(0,0,s.width,s.height),d=new Uint8Array(u.data),p=0;p<d.length;p+=4)l=d[p+3]/255,d[p]=d[p]*l,d[p+1]=d[p+1]*l,d[p+2]=d[p+2]*l;e.image=d})},t}();e.default=l});