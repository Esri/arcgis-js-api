/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s=s=>{class e extends s{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const s of this._managedDisposables??[]){const e=this[s];this[s]=null,e&&"function"==typeof e.dispose&&e.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}}return e};class e extends(s(class{})){}function i(){return(s,e)=>{s.hasOwnProperty("_managedDisposables")||(s._managedDisposables=s._managedDisposables?.slice()??[]),s._managedDisposables.unshift(e)}}export{e as AutoDisposable,s as AutoDisposableMixin,i as autoDispose};
