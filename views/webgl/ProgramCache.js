/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../core/maybe.js";import{NestedMap as t}from"../../core/NestedMap.js";import{Program as e}from"./Program.js";class s{constructor(r){this._rctx=r,this._store=new t}dispose(){this._store.forEach((r=>r.forEach((r=>r.dispose())))),this._store.clear()}acquire(t,s,o,c){const i=this._store.get(t,s);if(r(i))return i.ref(),i;const h=new e(this._rctx,t,s,o,c);return h.ref(),this._store.set(t,s,h),h}get test(){let r=0;return this._store.forEach((t=>t.forEach((t=>r+=t.hasGLName?2:1)))),{cachedWebGLObjects:r}}}export{s as ProgramCache};
