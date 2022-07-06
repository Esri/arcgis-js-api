/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{nullifyNonnullableForDispose as e}from"./maybe.js";import s from"./ObjectPool.js";class t extends s{constructor(){super(...arguments),this._set=new Set}destroy(){super.destroy(),this._set=e(this._set)}acquire(...e){const s=super.acquire(...e);return this._set.delete(s),s}release(e){e&&!this._set.has(e)&&(super.release(e),this._set.add(e))}_dispose(e){this._set.delete(e),super._dispose(e)}}export{t as ReentrantObjectPool};
