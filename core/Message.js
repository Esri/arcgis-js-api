/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{getDeepValue as t}from"./object.js";function e(e,s){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,((e,r)=>{if(""===r)return"$";const i=t(r,s),n=null==i?"":i;if(void 0===n)throw new Error(`could not find key "${r}" in template`);return n.toString()}))}class s{constructor(t,r,i){this.name=t,this.details=i,this.message=void 0,this instanceof s&&(this.message=r&&e(r,i)||"")}toString(){return"["+this.name+"]: "+this.message}}export{s as default};
