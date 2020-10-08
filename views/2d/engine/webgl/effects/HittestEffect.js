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

define(["require","exports","tslib","../../../../../core/MapUtils","../../../../../core/maybe","../definitions","./Effect"],(function(t,e,r,i,o,n,f){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.HittestEffect=void 0;var s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.name=e.constructor.name,e.defines=["id"],e._lastSize=0,e}return r.__extends(e,t),e.prototype.dispose=function(){o.isSome(this._fbo)&&this._fbo.dispose()},e.prototype.bind=function(t){var e=t.context,r=t.painter,i=e.getViewport(),o=i.width,n=i.height,f=r.getFbos(o,n).effect0;e.bindFramebuffer(f),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)},e.prototype.unbind=function(){},e.prototype.draw=function(t,e,r){var o=this,f=t.context,s=t.state,a=t.pixelRatio;void 0===r&&(r=n.HITTEST_SEARCH_SIZE);var u=f.getBoundFramebufferObject(),c=s.size[1]*a,p=Math.round(r*a),h=p/2,l=p/2;this._ensureBuffer(p),e.forEach((function(t,r){var n=new Map,f=Math.floor(r[0]*a-p/2),s=Math.floor(c-r[1]*a-p/2);u.readPixels(f,s,p,p,6408,5121,o._buf);for(var _=0;_<o._buf32.length;_++){var d=o._buf32[_];if(4294967295!==d&&0!==d){var b=_%p,v=p-Math.floor(_/p),y=(h-b)*(h-b)+(l-v)*(l-v),E=n.has(d)?n.get(d):4294967295;n.set(d,Math.min(y,E))}}var M=i.pairsOfMap(n).sort((function(t,e){return t[1]-e[1]})).map((function(t){return t[0]}));t.resolve(M),e.delete(r)}))},e.prototype._ensureBuffer=function(t){this._lastSize!==t&&(this._lastSize=t,this._buf=new Uint8Array(4*t*t),this._buf32=new Uint32Array(this._buf.buffer))},e}(f.Effect);e.HittestEffect=s}));