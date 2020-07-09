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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/Handles","../../../../core/handleUtils","../../../../core/maybe","../../../../core/promiseUtils","../../glTF/DefaultLoadingContext","../../glTF/loader","./wosrLoader"],(function(e,t,r,o,n,i,a,s,c,l){Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(){this.gltfCache=new Map,this.wosrCache=new Map,this.evictHandles=new o}return e.prototype.loadGLTF=function(e,t){var r="gltf:"+e;return this.fromCache(this.gltfCache,r,(function(t){return c.load(new s.DefaultLoadingContext(t.streamDataRequester),e,t)}),t)},e.prototype.loadWOSR=function(e,t){var r="wosr:"+e+":"+t.disableTextures;return this.fromCache(this.wosrCache,r,(function(t){return l.load(e,t)}),t)},e.prototype.destroy=function(){this.evictHandles.destroy(),this.gltfCache.clear(),this.wosrCache.clear()},Object.defineProperty(e.prototype,"size",{get:function(){return this.wosrCache.size+this.gltfCache.size},enumerable:!0,configurable:!0}),e.prototype.fromCache=function(e,t,o,n){var s=this;return a.create((function(c,l){if(a.isAborted(n))l(a.createAbortError());else{var u=a.onAbort(n,(function(){s.remove(e,t),l(a.createAbortError())})),f=e.get(t);if(f)return s.evictHandles.remove(t),f.refCount++,void f.item.then(c,l);var h=a.createAbortController(),d=r.__assign(r.__assign({},n),{signal:h.signal}),v={refCount:1,abortController:h,item:o(d).then((function(r){return v.abortController=null,r.remove=function(){return s.remove(e,t)},r}))};e.set(t,v),v.item.then((function(e){i.isSome(u)&&u.remove(),c(e)}),(function(e){i.isSome(u)&&u.remove(),l(e)}))}}))},e.prototype.remove=function(e,t){var r=e.get(t);r&&(r.refCount--,0===r.refCount&&this.evictHandles.add(n.timeoutHandle((function(){e.delete(t),i.isSome(r.abortController)&&r.abortController.abort()}),f),t))},e}();t.ObjectResourceCache=u;var f=1e4;t.test={overrideEvictDelay:function(e){return f=e,{remove:function(){f=1e4}}}}}));