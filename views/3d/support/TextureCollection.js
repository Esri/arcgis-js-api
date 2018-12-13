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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","../../../core/urlUtils","../webgl-engine/Stage","../webgl-engine/lib/Texture","../webgl-engine/lib/Util"],function(e,t,r,i,n,u,o,s){return function(){function e(e,t,r){this._textureRecords=new Map,this._streamDataSupplier=e,this._stage=t,this._textureOptions=r||{}}return e.prototype.acquire=function(e,t){var r=this,n=this._textureRecords.get(e);if(n)return n.referenceCount++,n.texture||n.loadTexture;if("number"==typeof t){var u=this._streamDataSupplier.request(e,"image"),o=i.create(function(i,n){u.then(function(n,u){var o=r.createTexture(n,u,t);r.registerTexture(o),r._textureRecords.get(e).texture=o,i(o)},function(e){n()})},function(){u.cancel()});return this._textureRecords.set(e,{referenceCount:1,texture:null,loadTexture:o}),o}var s=t(e);return this.registerTexture(s),this._textureRecords.set(e,{texture:s,referenceCount:1}),s},e.prototype.release=function(e){var t=this._textureRecords.get(e);t?(t.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),--t.referenceCount<1&&(t.texture?this.unregisterTexture(t.texture):t.loadTexture.cancel(),this._textureRecords.delete(e))):console.warn("TextureCollection: texture doesn't exist: "+e)},e.prototype.createTexture=function(e,t,i){var u=this._textureRecords.get(e);if(s.assert(u&&!u.texture),n.isSVG(e)&&(i||0===t.width&&0===t.height)){var c=t.width?t.height/t.width:1;i=i||64,c>1?(t.width=Math.round(i/c),t.height=i):(t.width=i,t.height=Math.round(i*c))}var h=r({},this._textureOptions,{width:t.width,height:t.height});return new o(t,"symbol",h)},e.prototype.registerTexture=function(e){this._stage.add(u.ModelContentType.TEXTURE,e)},e.prototype.unregisterTexture=function(e){this._stage.remove(u.ModelContentType.TEXTURE,e.id)},e}()});