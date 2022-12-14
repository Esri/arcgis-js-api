/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../core/Handles.js";import{timeoutHandle as t}from"../../../../core/handleUtils.js";import{isSome as r}from"../../../../core/maybe.js";import{isAborted as o,createAbortError as s,onAbort as i}from"../../../../core/promiseUtils.js";import{DefaultLoadingContext as a}from"../../glTF/DefaultLoadingContext.js";import{load as n}from"../../glTF/loader.js";import{load as l}from"./wosrLoader.js";class c{constructor(){this.gltfCache=new Map,this.wosrCache=new Map,this.evictHandles=new e}loadGLTF(e,t,r){const o=r?`gltfPBR:${e}`:`gltf:${e}`;return this._fromCache(this.gltfCache,o,(t=>n(new a(t.streamDataRequester),e,t,r)),t)}loadWOSR(e,t){const r=`wosr:${e}:${t.disableTextures}`;return this._fromCache(this.wosrCache,r,(t=>l(e,t)),t)}destroy(){this.evictHandles.destroy(),this.gltfCache.clear(),this.wosrCache.clear()}get size(){return this.wosrCache.size+this.gltfCache.size}_fromCache(e,t,a,n){return new Promise(((l,c)=>{if(o(n))return void c(s());const m=i(n,(()=>{this._remove(e,t),c(s())})),h=e.get(t);if(h)return this.evictHandles.remove(t),h.refCount++,void h.item.then(l,c);const f=new AbortController,d={...n,signal:f.signal},C={refCount:1,abortController:f,item:a(d).then((r=>(C.abortController=null,r.remove=()=>this._remove(e,t),r)))};e.set(t,C),C.item.then((e=>{r(m)&&m.remove(),l(e)}),(e=>{r(m)&&m.remove(),c(e)}))}))}_remove(e,o){const s=e.get(o);s&&(s.refCount--,0===s.refCount&&this.evictHandles.add(t((()=>{e.delete(o),r(s.abortController)&&s.abortController.abort()}),h),o))}}const m=1e4;let h=m;const f={overrideEvictDelay:e=>(h=e,{remove(){h=m}})};export{c as ObjectResourceCache,f as test};