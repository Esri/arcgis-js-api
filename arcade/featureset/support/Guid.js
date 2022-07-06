/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const t=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i");function e(t){let e="";for(let r=0;r<t;r++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e}class r{constructor(t){if(this.value="",!t)throw new TypeError("Invalid argument; `value` has no value.");this.value=r.EMPTY,t&&t instanceof r?this.value=t.toString():t&&"[object String]"===Object.prototype.toString.call(t)&&r.isGuid(t)&&(this.value=t)}equals(t){return r.isGuid(t)&&this.value===t}isEmpty(){return this.value===r.EMPTY}toString(){return this.value}toJSON(){return this.value}static isGuid(e){return e&&(e instanceof r||t.test(e.toString()))}static create(){return new r([e(2),e(1),e(1),e(1),e(3)].join("-"))}static raw(){return[e(2),e(1),e(1),e(1),e(3)].join("-")}}r.EMPTY="00000000-0000-0000-0000-000000000000";export{r as default};
