/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import t from"./Accessor.js";import{property as e}from"./accessorSupport/decorators/property.js";import{subclass as i}from"./accessorSupport/decorators/subclass.js";let r=class extends t{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(s,t){this.pending.push({promise:s,callback:t}),1===this.pending.length&&this._process()}_process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const s=this.pending[0];s.promise.then((t=>s.callback(t))).catch((()=>{})).then((()=>{this.pending.shift(),this._process()}))}};s([e()],r.prototype,"updating",void 0),r=s([i("esri.core.AsyncSequence")],r);export{r as AsyncSequence};
