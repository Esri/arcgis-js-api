/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this._store=new Map,this._byteSize=0}set(t,e){this.delete(t),this._store.set(t,e),this._byteSize+=e.byteSize}delete(t){const e=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=e.byteSize,!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,e){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),e(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const e=this._store.get(t);e&&(this._store.delete(t),this._store.set(t,e))}}export{t as FeatureServiceTileCache};
