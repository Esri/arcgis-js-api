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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","dojo/Deferred","../../kernel","../../request","../../core/promiseUtils","../../core/urlUtils"],function(t,e,i,r,n,a,o,s,h){return function(){function t(t,e){this.baseURL=t,this.devicePixelRatio=e,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object.defineProperty(t.prototype,"spriteNames",{get:function(){var t=[];for(var e in this._spritesData)t.push(e);return t.sort(),t},enumerable:!0,configurable:!0}),t.prototype.getSpriteInfo=function(t){return this._spritesData[t]},t.prototype.load=function(){var t=this;return this.loadStatus="loading",this.baseURL?this._loadSprites().then(function(){return t.loadStatus="loaded",t}).catch(function(e){return t.loadStatus="failed",t}):s.resolve(this)},t.prototype._loadSprites=function(){var t=this;this._isRetina=this.devicePixelRatio>1.15;var e=this.baseURL,i=this._isRetina?"@2x":"";return o(e+i+".json",{responseType:"json"}).then(function(r){var o=Object.keys(r.data);if(!o||0===o.length||1===o.length&&"_ssl"===o[0])return s.resolve(null);t._spritesData=r.data;var d=new n,l=new Image;l.crossOrigin="anonymous",l.onload=function(){l.onload=null,t.width=l.width,t.height=l.height;var e=document.createElement("canvas");e.width=l.width,e.height=l.height;var i=e.getContext("2d");i.drawImage(l,0,0,l.width,l.height);for(var r,n=i.getImageData(0,0,l.width,l.height),a=new Uint8Array(n.data),o=0;o<a.length;o+=4)r=a[o+3]/255,a[o]=a[o]*r,a[o+1]=a[o+1]*r,a[o+2]=a[o+2]*r;t.image=a,d.resolve()};var u=""+e+i+".png";if(a.id){var p=a.id.findCredential(u);p&&p.token&&(u+="?token="+p.token)}return l.src=h.addProxy(u),d})},t}()});