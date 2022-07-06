/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{releaseMaybe as e,isSome as t}from"../../../../../core/maybe.js";import{isPromiseLike as s}from"../../../../../core/promiseUtils.js";class r{constructor(t,r){this._textureRep=t,this._disposed=!1;const i=this._textureRep.acquire(r);s(i)?(i.then((t=>{this._disposed?e(t):this._textureRef=t})),this.loadPromise=i):this._textureRef=i}dispose(){this._textureRef=e(this._textureRef),this._disposed=!0}get glTexture(){return t(this._textureRef)?this._textureRef.glTexture:null}}export{r as RenderTexture};
