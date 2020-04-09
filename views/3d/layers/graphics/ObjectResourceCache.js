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

define(["require","exports","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/assignHelper","../../../../core/Handles","../../../../core/handleUtils","../../../../core/maybe","../../../../core/promiseUtils","../../glTF/DefaultLoadingContext","../../glTF/loader","./wosrLoader"],(function(e,t,r,o,n,i,a,c,s,l,u,f){Object.defineProperty(t,"__esModule",{value:!0});var h=function(){function e(){this.gltfCache=new Map,this.wosrCache=new Map,this.evictHandles=new i}return e.prototype.loadGLTF=function(e,t){var r="gltf:"+e;return this.fromCache(this.gltfCache,r,(function(t){return u.load(new l.DefaultLoadingContext(t.streamDataRequester),e,t)}),t)},e.prototype.loadWOSR=function(e,t){var r="wosr:"+e+":"+t.disableTextures;return this.fromCache(this.wosrCache,r,(function(t){return f.load(e,t)}),t)},e.prototype.destroy=function(){this.evictHandles.destroy(),this.gltfCache.clear(),this.wosrCache.clear()},Object.defineProperty(e.prototype,"size",{get:function(){return this.wosrCache.size+this.gltfCache.size},enumerable:!0,configurable:!0}),e.prototype.fromCache=function(e,t,r,o){var i=this;return s.create((function(a,l){if(s.isAborted(o))l(s.createAbortError());else{var u=s.onAbort(o,(function(){i.remove(e,t),l(s.createAbortError())})),f=e.get(t);if(f)return i.evictHandles.remove(t),f.refCount++,void f.item.then(a,l);var h=s.createAbortController(),d=n({},o,{signal:h.signal}),p={refCount:1,abortController:h,item:r(d).then((function(r){return p.abortController=null,r.remove=function(){return i.remove(e,t)},r}))};e.set(t,p),p.item.then((function(e){c.isSome(u)&&u.remove(),a(e)}),(function(e){c.isSome(u)&&u.remove(),l(e)}))}}))},e.prototype.remove=function(e,t){var r=e.get(t);r&&(r.refCount--,0===r.refCount&&this.evictHandles.add(a.timeoutHandle((function(){e.delete(t),c.isSome(r.abortController)&&r.abortController.abort()}),d),t))},e}();t.ObjectResourceCache=h;var d=1e4;t.test={overrideEvictDelay:function(e){return d=e,{remove:function(){d=1e4}}}}}));