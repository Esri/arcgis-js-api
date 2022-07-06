/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e{constructor(){this._pool=[],this._set=new Set}acquire(){if(0===this._pool.length)return new Set;const e=this._pool.pop();return this._set.delete(e),e}release(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))}static acquire(){return t.acquire()}static release(e){return t.release(e)}}const t=new e;export{e as default};
