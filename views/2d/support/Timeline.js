/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const s=s=>s.includes("Brush");class e{constructor(){this._names=new Map}begin(e){this._names.has(e)||(this._names.set(e,!1),s(e)&&this.record("Esri.FirstDraw"),performance.mark(`Esri.${e}.Start`))}end(s){this._names.has(s)&&!this._names.get(s)&&(this._names.set(s,!0),performance.mark(`Esri.${s}.End`))}record(s){this._names.has(s)||(this._names.set(s,!0),performance.mark(`Esri.${s}`))}}export{e as Timeline};
