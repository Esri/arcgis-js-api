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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/MapUtils","../../../../../core/maybe","../definitions","./Effect"],(function(e,t,r,o,i,n,f){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name=t.constructor.name,t.defines=["id"],t._lastSize=0,t}return r(t,e),t.prototype.dispose=function(){i.isSome(this._fbo)&&this._fbo.dispose()},t.prototype.bind=function(e){var t=e.context,r=e.painter,o=t.getViewport(),i=o.width,n=o.height,f=r.getFbos(i,n).effect0;t.bindFramebuffer(f),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)},t.prototype.unbind=function(){},t.prototype.draw=function(e,t,r){var i=this,f=e.context,a=e.state,s=e.pixelRatio;void 0===r&&(r=n.HITTEST_SEARCH_SIZE);var u=f.getBoundFramebufferObject(),p=a.size[1]*s,c=Math.round(r*s),h=c/2,l=c/2;this._ensureBuffer(c),t.forEach((function(e,r){var n=new Map,f=Math.floor(r[0]*s-c/2),a=Math.floor(p-r[1]*s-c/2);u.readPixels(f,a,c,c,6408,5121,i._buf);for(var d=0;d<i._buf32.length;d++){var _=i._buf32[d];if(4294967295!==_&&0!==_){var b=d%c,v=c-Math.floor(d/c),y=(h-b)*(h-b)+(l-v)*(l-v),M=n.has(_)?n.get(_):4294967295;n.set(_,Math.min(y,M))}}var m=o.pairsOfMap(n).sort((function(e,t){return e[1]-t[1]})).map((function(e){return e[0]}));e.resolve(m),t.delete(r)}))},t.prototype._ensureBuffer=function(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))},t}(f.Effect);t.HittestEffect=a}));