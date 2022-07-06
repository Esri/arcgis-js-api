/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{createResolver as e}from"../../../../../core/promiseUtils.js";class r{constructor(){this._resolver=null}isHeld(){return!!this._resolver}async acquire(){this._resolver?(await this._resolver.promise,await this.acquire()):this._resolver=e()}release(){const e=this._resolver;this._resolver=null,e.resolve()}}async function s(e,r,s){try{await e.acquire(),await r(s),e.release()}catch(t){throw e.release(),t}}export{r as Lock,s as withLock};
