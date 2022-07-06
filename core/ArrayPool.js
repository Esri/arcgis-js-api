/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./ObjectPool.js";function r(e){e.length=0}class t{constructor(t=50,o=50){this._pool=new e(Array,void 0,r,o,t)}acquire(){return this._pool.acquire()}release(e){this._pool.release(e)}prune(){this._pool.prune(0)}static acquire(){return o.acquire()}static release(e){return o.release(e)}static prune(){o.prune()}}const o=new t(100);export{t as default};
