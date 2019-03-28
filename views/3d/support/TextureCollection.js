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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/promiseUtils","../../../core/scheduling","../../../core/urlUtils","../webgl-engine/Stage","../webgl-engine/lib/Texture"],function(e,t,r,u,n,o,s,i){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t,r){this._streamDataSupplier=e,this._stage=t,this._textureOptions=r,this._textureRequests=new Map}return e.prototype.destroy=function(){var e=this;this._textureRequests.forEach(function(t,r){return e.releaseNow(r)}),this._textureRequests=null},e.prototype.fromUrl=function(e,t){var r=this,n=this.makeUid(e,t),o=this._textureRequests.get(n);if(o)return o.referenceCount++,o.textureAsync;var s=this._streamDataSupplier.request(e,"image",n);return o={referenceCount:1,texture:null,textureAsync:null},this._textureRequests.set(n,o),o.textureAsync=u.create(function(e,u){s.then(function(u){var s=u.url,i=u.data,a=r.createTexture(s,i,t);o.texture=a,r.addToStage(a),e({uid:n,texture:a})},function(){return u()})},function(){s.cancel()}),o.textureAsync},e.prototype.fromData=function(e,t){var r=this.makeUid(e),u=this._textureRequests.get(r);return u||(u={referenceCount:0,texture:t(),textureAsync:null},this.addToStage(u.texture),this._textureRequests.set(r,u)),u.referenceCount++,{uid:r,texture:u.texture}},e.prototype.release=function(e){var t=this._textureRequests.get(e);t?(t.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),--t.referenceCount<1&&this.scheduleRelease(e)):console.warn("TextureCollection: texture doesn't exist: '"+e+"'")},e.prototype.scheduleRelease=function(e){var t=this;n.schedule(function(){return t.releaseNow(e)})},e.prototype.releaseNow=function(e){if(this._textureRequests){var t=this._textureRequests.get(e);!t||t.referenceCount>0||(t.texture?this.removeFromStage(t.texture):t.textureAsync.cancel(),this._textureRequests.delete(e))}},e.prototype.createTexture=function(e,t,u){if(o.isSVG(e)&&(u||0===t.width&&0===t.height)){var n=t.width?t.height/t.width:1;u=u||64,n>1?(t.width=Math.round(u/n),t.height=u):(t.width=u,t.height=Math.round(u*n))}var s=r({},this._textureOptions,{width:t.width,height:t.height,powerOfTwoResizeMode:2});return new i(t,"symbol",s)},e.prototype.addToStage=function(e){this._stage.add(s.ModelContentType.TEXTURE,e)},e.prototype.removeFromStage=function(e){this._stage.remove(s.ModelContentType.TEXTURE,e.id)},e.prototype.makeUid=function(e,t){return null!=t?e+"."+t+"px":e},e}();t.TextureCollection=a,t.default=a});