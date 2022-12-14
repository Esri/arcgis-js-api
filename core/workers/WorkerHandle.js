/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{remove as e}from"../arrayUtils.js";import{makeHandle as t}from"../handleUtils.js";import r from"../Logger.js";import{isSome as s}from"../maybe.js";import{throwIfAborted as i}from"../promiseUtils.js";import{open as o}from"./workers.js";const h=r.getLogger("esri.core.workers.WorkerHandle");class n{constructor(e,t,r,s,i={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=o(e,{...i,schedule:s}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,i.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>h.error(`Failed to initialize ${e} worker: ${t}`)))}on(r,i){const o={removed:!1,eventName:r,callback:i,threadHandle:null};return this._listeners.push(o),this._connectListener(o),t((()=>{o.removed=!0,e(this._listeners,o),this._thread&&s(o.threadHandle)&&o.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const s=this._transferLists[e],i=s?s(t):[];return this._thread.invoke(e,t,{transferList:i,signal:r})}return this._promise?this._promise.then((()=>(i(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}export{n as WorkerHandle};