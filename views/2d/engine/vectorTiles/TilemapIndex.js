/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../request.js";import{throwIfAborted as t}from"../../../../core/promiseUtils.js";import r from"../../tiling/TileKey.js";class l{constructor(e){this.url=e}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=e(this.url).then((e=>e.data.index))),this._tileIndexPromise}async dataKey(e,r){const l=await this.fetchTileIndex();return t(r),this._getIndexedDataKey(l,e)}_getIndexedDataKey(e,t){const l=[t];if(t.level<0||t.row<0||t.col<0||t.row>>t.level>0||t.col>>t.level>0)return null;let i=t;for(;0!==i.level;)i=new r(i.level-1,i.row>>1,i.col>>1,i.world),l.push(i);let o,s,n=e,a=l.pop();if(1===n)return a;for(;l.length;)if(o=l.pop(),s=(1&o.col)+((1&o.row)<<1),n){if(0===n[s]){a=null;break}if(1===n[s]){a=o;break}a=o,n=n[s]}return a}}export{l as default};
