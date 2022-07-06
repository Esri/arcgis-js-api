/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ObservationHandle as s}from"./ObservationHandle.js";class e{constructor(){this._observers=[]}observe(e){return this._observers.includes(e)||this._observers.push(e),new s(this._observers,e)}notify(){const s=this._observers.slice();for(let e=0;e<s.length;++e){const r=s[e];r.onInvalidated(),r.onCommitted()}}}export{e as SimpleObservable};
