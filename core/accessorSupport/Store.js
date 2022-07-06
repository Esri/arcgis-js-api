/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as e}from"../lang.js";import{OriginId as s}from"./PropertyOrigin.js";class t{constructor(){this._values=new Map,this.multipleOriginsSupported=!1}clone(s){const r=new t;return this._values.forEach(((t,i)=>{s&&s.has(i)||r.set(i,e(t))})),r}get(e){return this._values.get(e)}originOf(){return s.USER}keys(){return[...this._values.keys()]}set(e,s){this._values.set(e,s)}delete(e){this._values.delete(e)}has(e){return this._values.has(e)}forEach(e){this._values.forEach(e)}}export{t as Store};
