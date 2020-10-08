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

define(["require","exports","tslib","../../../core/maybe","../../../core/promiseUtils","../../../core/urlUtils","../webgl-engine/lib/Texture","../../support/Scheduler"],(function(e,t,r,o,n,u,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextureCollection=void 0;var a=function(){function e(e,t,r,n){this._streamDataRequester=e,this._stage=t,this._textureOptions=r,this._textureRequests=new Map,this._frameTask=o.isSome(n)?n.registerTask(i.Task.TEXTURE_UNLOAD,(function(){}),(function(){return!1})):new i.TestTaskHandle}return e.prototype.destroy=function(){var e=this;this._frameTask.remove(),this._textureRequests.forEach((function(t){return e.releaseTextureRequest(t)})),this._textureRequests.clear()},e.prototype.fromUrl=function(e,t,u){return r.__awaiter(this,void 0,void 0,(function(){var s,i,a,l,c,h=this;return r.__generator(this,(function(r){return n.throwIfAborted(u),s=o.isSome(u)&&u.signal,i=this.makeUid(e,t),(a=this._textureRequests.get(i))||(l=n.createAbortController(),c=this._streamDataRequester.request(e,"image",{uid:i,signal:l.signal}),a={referenceCount:0,texture:null,textureAsync:null,abortController:l},this._textureRequests.set(i,a),a.textureAsync=c.then((function(r){var o=h.createTexture(e,r,t);return a.texture=o,a.abortController=null,h.addToStage(o),{uid:i,texture:o}}),(function(e){throw a.abortController=null,e}))),a.referenceCount++,[2,n.create((function(e,t){n.onAbort(s,(function(){t(n.createAbortError())})),a.textureAsync.then(e,t)})).catch((function(e){throw h.release(i),e}))]}))}))},e.prototype.fromData=function(e,t){var r=this.makeUid(e),o=this._textureRequests.get(r);return o||(o={referenceCount:0,texture:t(),textureAsync:null,abortController:null},this.addToStage(o.texture),this._textureRequests.set(r,o)),o.referenceCount++,{uid:r,texture:o.texture}},e.prototype.release=function(e){var t=this;if(this._textureRequests){var r=this._textureRequests.get(e);r?(r.referenceCount<1&&console.warn("TextureCollection: reference count is < 1 for "+e),r.referenceCount--,r.referenceCount<1&&this._frameTask.schedule((function(){return t.releaseNow(e)}))):console.warn("TextureCollection: texture doesn't exist: '"+e+"'")}},Object.defineProperty(e.prototype,"test",{get:function(){return{textureRequests:this._textureRequests}},enumerable:!1,configurable:!0}),e.prototype.releaseNow=function(e){if(this._textureRequests){var t=this._textureRequests.get(e);!t||t.referenceCount>0||(this.releaseTextureRequest(t),this._textureRequests.delete(e))}},e.prototype.releaseTextureRequest=function(e){e.texture?this.removeFromStage(e.texture):e.abortController&&(e.abortController.abort(),e.abortController=null)},e.prototype.createTexture=function(e,t,o){if(u.isSVG(e)&&(o||0===t.width&&0===t.height)){var n=t.width?t.height/t.width:1;o=o||64,n>1?(t.width=Math.round(o/n),t.height=o):(t.width=o,t.height=Math.round(o*n))}var i=r.__assign(r.__assign({},this._textureOptions),{width:t.width,height:t.height,powerOfTwoResizeMode:2});return new s(t,"symbol",i)},e.prototype.addToStage=function(e){this._stage.add(4,e)},e.prototype.removeFromStage=function(e){this._stage.remove(4,e.id)},e.prototype.makeUid=function(e,t){return null!=t?e+"."+t+"px":e},e}();t.TextureCollection=a,t.default=a}));