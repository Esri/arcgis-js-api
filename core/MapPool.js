/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"./ObjectPool.js";class r{constructor(r=50,t=50){this._pool=new e(Map,void 0,(e=>e.clear()),t,r)}acquire(){return this._pool.acquire()}release(e){this._pool.release(e)}static acquire(){return t.acquire()}static release(e){return t.release(e)}}const t=new r(100);export{r as default};
