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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/maybe","../../../core/promiseUtils","../../../core/scheduling","../../../core/urlUtils","../webgl-engine/Stage","../webgl-engine/lib/Texture"],function(e,t,r,o,n,u,s,i,l,a,h){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t,r,o){void 0===o&&(o=i.schedule),this._streamDataRequester=e,this._stage=t,this._textureOptions=r,this._schedule=o,this._textureRequests=new Map}return e.prototype.destroy=function(){var e=this;this._textureRequests.forEach(function(t){return e.releaseTextureRequest(t)}),this._textureRequests=null},e.prototype.fromUrl=function(e,t,r){return n(this,void 0,void 0,function(){var n,i,l,a,h,c=this;return o(this,function(o){return s.throwIfAborted(r),n=u.isSome(r)&&r.signal,i=this.makeUid(e,t),l=this._textureRequests.get(i),l||(a=s.createAbortController(),h=this._streamDataRequester(e,"image",{uid:i,signal:a.signal}),l={referenceCount:0,texture:null,textureAsync:null,abortController:a},this._textureRequests.set(i,l),l.textureAsync=h.then(function(r){var o=c.createTexture(e,r,t);return l.texture=o,l.abortController=null,c.addToStage(o),{uid:i,texture:o}},function(e){throw l.abortController=null,e})),l.referenceCount++,[2,s.create(function(e,t){s.onAbort(n,function(){t(s.createAbortError())}),l.textureAsync.then(e,t)}).catch(function(e){throw c.release(i),e})]})})},e.prototype.fromData=function(e,t){var r=this.makeUid(e),o=this._textureRequests.get(r);return o||(o={referenceCount:0,texture:t(),textureAsync:null,abortController:null},this.addToStage(o.texture),this._textureRequests.set(r,o)),o.referenceCount++,{uid:r,texture:o.texture}},e.prototype.release=function(e){var t=this;if(this._textureRequests){var r=this._textureRequests.get(e);r?(r.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),--r.referenceCount<1&&this._schedule(function(){return t.releaseNow(e)})):console.warn("TextureCollection: texture doesn't exist: '"+e+"'")}},Object.defineProperty(e.prototype,"test",{get:function(){return{textureRequests:this._textureRequests}},enumerable:!0,configurable:!0}),e.prototype.releaseNow=function(e){if(this._textureRequests){var t=this._textureRequests.get(e);!t||t.referenceCount>0||(this.releaseTextureRequest(t),this._textureRequests.delete(e))}},e.prototype.releaseTextureRequest=function(e){e.texture?this.removeFromStage(e.texture):e.abortController&&(e.abortController.abort(),e.abortController=null)},e.prototype.createTexture=function(e,t,o){if(l.isSVG(e)&&(o||0===t.width&&0===t.height)){var n=t.width?t.height/t.width:1;o=o||64,n>1?(t.width=Math.round(o/n),t.height=o):(t.width=o,t.height=Math.round(o*n))}var u=r({},this._textureOptions,{width:t.width,height:t.height,powerOfTwoResizeMode:2});return new h(t,"symbol",u)},e.prototype.addToStage=function(e){this._stage.add(a.ModelContentType.TEXTURE,e)},e.prototype.removeFromStage=function(e){this._stage.remove(a.ModelContentType.TEXTURE,e.id)},e.prototype.makeUid=function(e,t){return null!=t?e+"."+t+"px":e},e}();t.TextureCollection=c,t.default=c});