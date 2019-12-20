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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/iteratorUtils","../../../../../core/maybe","../definitions","./Effect"],function(e,t,r,T,o,n,i){Object.defineProperty(t,"__esModule",{value:!0});var f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name=e.constructor.name,e.defines=["id"],e._buf=new Uint8Array(4*n.HITTEST_SEARCH_SIZE*n.HITTEST_SEARCH_SIZE),e._buf32=new Uint32Array(e._buf.buffer),e}return r(e,t),e.prototype.dispose=function(){o.isSome(this._fbo)&&this._fbo.dispose()},e.prototype.bind=function(e){var t=e.context,r=e.painter,o=t.getViewport(),n=o.width,i=o.height,f=r.getFbos(n,i).effect0;t.bindFramebuffer(f),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)},e.prototype.unbind=function(){},e.prototype.draw=function(e,l,b){var d=this,t=e.context,r=e.state,_=e.pixelRatio;void 0===b&&(b=n.HITTEST_SEARCH_SIZE);var h=t.getBoundFramebufferObject(),E=r.size[1],v=b/2,S=b/2;l.forEach(function(e,t){var r=new Map,o=Math.floor((t[0]-b/2)*_),n=Math.floor((E-t[1]-b/2)*_);h.readPixels(o,n,b,b,6408,5121,d._buf);for(var i=0;i<d._buf32.length;i++){var f=d._buf32[i];if(4294967295!==f&&0!==f){var a=i%b,u=b-Math.floor(i/b),s=(v-a)*(v-a)+(S-u)*(S-u),c=r.has(f)?r.get(f):4294967295;r.set(f,Math.min(s,c))}}var p=T.pairsOfMap(r).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]});e.resolve(p),l.delete(t)})},e}(i.Effect);t.HittestEffect=f});