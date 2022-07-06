/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{assumeNonNull as t}from"./maybe.js";class e{constructor(t=(t=>t.values().next().value)){this._peeker=t,this._items=new Set}get length(){return this._items.size}clear(){this._items.clear()}last(){if(0===this._items.size)return;let t;for(t of this._items);return t}peek(){if(0!==this._items.size)return this._peeker(this._items)}push(t){this.contains(t)||this._items.add(t)}contains(t){return this._items.has(t)}pop(){if(0===this.length)return;const e=this.peek();return this._items.delete(t(e)),e}popLast(){if(0===this.length)return;const e=this.last();return this._items.delete(t(e)),e}remove(t){this._items.delete(t)}filter(t){return this._items.forEach((e=>{t(e)||this._items.delete(e)})),this}}export{e as default};
