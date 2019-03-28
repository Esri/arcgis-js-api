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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../request","../../core/promiseUtils"],function(t,e,i,a,r,s){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){this.baseURL=t,this.devicePixelRatio=e,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object.defineProperty(t.prototype,"spriteNames",{get:function(){var t=[];for(var e in this._spritesData)t.push(e);return t.sort(),t},enumerable:!0,configurable:!0}),t.prototype.getSpriteInfo=function(t){return this._spritesData[t]},t.prototype.load=function(){var t=this;return this.loadStatus="loading",this.baseURL?this._loadSprites().then(function(){return t.loadStatus="loaded",t}).catch(function(e){return t.loadStatus="failed",t}):s.resolve(this)},t.prototype._loadSprites=function(){var t=this;this._isRetina=this.devicePixelRatio>1.15;var e=this.baseURL,i=this._isRetina?"@2x":"",a=""+e+i+".png";return s.all([r(e+i+".json",{responseType:"json"}),r(a,{responseType:"image"})]).then(function(e){var i=e[0],a=e[1],r=Object.keys(i.data);if(!r||0===r.length||1===r.length&&"_ssl"===r[0]||!a||!a.data)return t._spritesData=t.image=null,t.width=t.height=0,s.resolve(null);t._spritesData=i.data;var n=a.data;t.width=n.width,t.height=n.height;var o=document.createElement("canvas"),h=o.getContext("2d");o.width=n.width,o.height=n.height,h.drawImage(n,0,0,n.width,n.height);for(var l,d=h.getImageData(0,0,n.width,n.height),u=new Uint8Array(d.data),p=0;p<u.length;p+=4)l=u[p+3]/255,u[p]=u[p]*l,u[p+1]=u[p+1]*l,u[p+2]=u[p+2]*l;t.image=u})},t}();e.default=n});