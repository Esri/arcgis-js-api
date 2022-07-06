/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../ItemCache.js";import{WhereClause as e}from"./WhereClause.js";class c{constructor(e,c){this._cache=new t(e),this._invalidCache=new t(c)}get(t,c){const i=`${c.uid}:${t}`,r=this._cache.get(i);if(r)return r;if(void 0!==this._invalidCache.get(i))return null;try{const r=e.create(t,c);return this._cache.put(i,r),r}catch{return this._invalidCache.put(i,null),null}}}export{c as WhereClauseCache};
