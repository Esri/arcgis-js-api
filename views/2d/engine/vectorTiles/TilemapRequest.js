/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../request.js";import{isAbortError as t}from"../../../../core/promiseUtils.js";import i from"../../tiling/TileKey.js";class r{constructor(e,t){this._tilemap=e,this._tileIndexUrl=t}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=e(this._tileIndexUrl,{query:{...t?.query}}).then((e=>e.data.index))),this._tileIndexPromise}dataKey(e,r){const{level:l,row:s,col:o}=e,n=new i(e);return this._tilemap.fetchAvailabilityUpsample(l,s,o,n,r).then((()=>(n.world=e.world,n))).catch((e=>{if(t(e))throw e;return null}))}}export{r as default};
